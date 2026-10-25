import { AboutSection, TeamsSection } from "@/components/home/about-teams";
import { Hero } from "@/components/home/hero";
import { IncludedPartners } from "@/components/home/included-partners";
import { Stories } from "@/components/home/stories";
import { TimetablePreview } from "@/components/home/timetable-preview";
import { ValuesCorners } from "@/components/home/values-corners";
import { SiteShell } from "@/components/site-shell";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <AboutSection />
      <TeamsSection />
      <TimetablePreview />
      <ValuesCorners />
      <Stories />
      <IncludedPartners />
    </SiteShell>
  );
}
