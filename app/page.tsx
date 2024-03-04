import { AdvancedStatistics, Hero, ResultPreview } from "@/components";

export default async function Home() {
  return (
    <main>
      <Hero />
      <ResultPreview />
      <AdvancedStatistics />
    </main>
  );
}
