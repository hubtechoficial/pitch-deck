import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import WhereAIActs from "@/components/sections/WhereAIActs";
import Method from "@/components/sections/Method";
import WhyHubTech from "@/components/sections/WhyHubTech";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <WhereAIActs />
      <Method />
      <WhyHubTech />
      <CTA />
    </main>
  );
}
