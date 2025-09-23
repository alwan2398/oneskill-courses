import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { usersTable } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function POST(request) {
  try {
    const requestData = await request.json();
    const { email, name, clerkId, imageUrl } = requestData;

    // Validation
    const validationError = validateRequestData({
      email,
      name,
      clerkId,
      imageUrl,
    });
    if (validationError) {
      return validationError;
    }

    // Check if user exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(existingUser);
    }

    // Create new user
    const newUser = await createUser({ email, name, clerkId, imageUrl });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return handleError(error);
  }
}

// Validation function
const validateRequestData = (data) => {
  const { email, name, clerkId, imageUrl } = data;

  if (
    !email?.trim() ||
    !name?.trim() ||
    !clerkId?.trim() ||
    !imageUrl?.trim()
  ) {
    return NextResponse.json(
      { error: "All fields are required and cannot be empty" },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  return null;
};

// Email validation helper
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Find user by email
const findUserByEmail = async (email) => {
  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  return users[0] || null;
};

// Create new user - parameter hanya menerima UserCreateRequest (tanpa createdAt)
const createUser = async (userData) => {
  const newUsers = await db
    .insert(usersTable)
    .values({
      clerkId: userData.clerkId,
      email: userData.email,
      name: userData.name,
      imageUrl: userData.imageUrl,
      createdAt: new Date(), // createdAt dihandle di sini, bukan dari request
    })
    .returning();

  return newUsers[0];
};

// Error handling
const handleError = (error) => {
  console.error("Error in user creation:", error);

  const errorMessage =
    error instanceof Error ? error.message : "Unknown error occurred";

  return NextResponse.json(
    {
      error: "Internal server error",
      details: errorMessage,
    },
    { status: 500 }
  );
};
