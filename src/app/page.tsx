"use client";
import Image from "next/image";
import Container from "./components/atoms/container";
import HeroSection from "./components/organisms/hero";
import OurService from "./components/organisms/service";
import TestimonialMarquee from "./components/organisms/testiomnial";

export default function MainPage() {
  return (
    <Container>
      <main className=" dark:bg-neutral-950 bg-white">
        <section id="#">
           <HeroSection/>
        </section>
        <section id="service">
          <OurService/>
        </section>
        <section id="testimonial">
          {/* <TestimonialMarquee/> */}
        </section>
      </main>
    </Container>
  );
}
