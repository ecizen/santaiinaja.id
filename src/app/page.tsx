"use client";
import Image from "next/image";
import Container from "./components/atoms/container";
import HeroSection from "./components/organisms/hero";

export default function MainPage() {
  return (
    <Container>
      <main className="min-h-screen dark:bg-neutral-950 bg-white">
        <div>
           <HeroSection/>
        </div>
      </main>
    </Container>
  );
}
