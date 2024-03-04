import {
  AdvancedStatistics,
  Boost,
  Footer,
  Hero,
  ResultPreview,
} from "@/components";

export default async function Home() {
  return (
    <main>
      <Hero />
      <ResultPreview />
      <AdvancedStatistics />
      <Boost />
      <Footer />
    </main>
  );
}
