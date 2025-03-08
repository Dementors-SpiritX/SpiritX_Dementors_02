"use client";
import { useState } from "react";
import LoginForm from "./auth/login";
import SignupForm from "./auth/register";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section
      id="users"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        zIndex: -1,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {isLogin ? (
          <LoginForm onSwitch={() => setIsLogin(false)} />
        ) : (
          <SignupForm onSwitch={() => setIsLogin(true)} />
        )}
      </div>
    </section>
  );
}
