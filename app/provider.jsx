"use client";
import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

export default function HomeProvider({ children }) {
  const { user, isLoaded } = useUser();

  // Gunakan useCallback untuk memoize function
  const createUser = useCallback(async () => {
    if (!user) return;

    try {
      const userData = {
        clerkId: user.id,
        name: user.fullName || "Unknown User",
        email: user.primaryEmailAddress?.emailAddress || "",
        imageUrl: user.imageUrl || "/default-avatar.png",
      };

      // Validasi data essential
      if (!userData.clerkId || !userData.email) {
        console.warn("Essential user data missing, skipping creation");
        return;
      }

      const response = await axios.post("/api/user", userData);

      if (response.status === 201) {
        console.log("User created successfully");
      } else if (response.status === 200) {
        console.log("User already exists");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("API Error:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  }, [user]);

  // Trigger createUser ketika user tersedia
  useEffect(() => {
    if (isLoaded && user) {
      createUser();
    }
  }, [isLoaded, user, createUser]);

  return <div>{children}</div>;
}
