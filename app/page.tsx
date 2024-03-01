import { Hero } from "@/components";

export default async function Home() {
  await fetch("/api/url", { method: "POST" });
  return (
    <div>
      <Hero />
    </div>
  );
}
