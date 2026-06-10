import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { WhyThisCourse } from "@/components/landing/WhyThisCourse";
import { CourseStructure } from "@/components/landing/CourseStructure";
import { DeveloperIntro } from "@/components/landing/DeveloperIntro";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prompt Engineering in Bangla — Master AI in Your Language" },
      {
        name: "description",
        content:
          "The first comprehensive Bangla ebook on Prompt Engineering. 12 chapters, 150+ prompts, lifetime updates.",
      },
      { property: "og:title", content: "Prompt Engineering in Bangla" },
      {
        property: "og:description",
        content: "Master prompt engineering with the first comprehensive Bangla guide.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <WhyThisCourse />
      <CourseStructure />
      <DeveloperIntro />
      <Footer />
    </main>
  );
}
