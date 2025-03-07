'use client'

import { useRouter } from "next/navigation";

const BASE_URL = "https://frontend-take-home-service.fetch.com";

export const useAuth = () => {
    const router = useRouter(); // ✅ Use the router inside the function

    const login = async (name: FormDataEntryValue, email: FormDataEntryValue) => {
        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email }),
            });

            if (res.ok) {
                console.log("Login successful");
                router.push("/search"); // ✅ Redirect after login
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    const logout = async () => {
        try {
            const res = await fetch(`${BASE_URL}/auth/logout`, {
                method: "POST",
                credentials: "include",
            });

            if (res.ok) {
                console.log("Logout successful");
                router.push("/"); // ✅ Redirect after logout
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return { login, logout };
};