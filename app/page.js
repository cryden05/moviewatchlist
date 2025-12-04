"use client";
import Link from "next/link";
import {auth, provider} from "../lib/firebase";
import { onAuthStateChanged, signInWithPopup} from "firebase/auth";
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation"

export default function Page() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                router.push("/dashboard");
            }
        })
        return () => unsub();
    }, [router])

    const loginWithGithub = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            router.push("/dashboard");
        } catch (error) {
            console.error("Your github didn't fucking work:", error);
        }
    };

  return (
    <main>
        <div>
            <h1>SICK FUCKING APP THAT YOU CAN LOOK DATABASE UP</h1>
            <br />
            <h2>LOG THE FUCK IN WITH GIT FUCKING HUB</h2>
            <button onClick={loginWithGithub}>AHHHHHHHHHHHHHHHHHHHHHHHHHH</button>
        </div>
  </main>
  );
}