import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { clubInfo } from "@/src/data/clubInfo";

export default function AchievementsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title="Every milestone matters."
          description="Competition success and club milestones are shown here as they are officially confirmed and approved."
        />

        <div className="mt-16 space-y-6">
          {clubInfo.achievements.map((achievement) => (
            <article key={achievement.title} className="grid gap-5 rounded-[28px] border border-white/10 bg-white/5 p-6 md:grid-cols-[120px_1fr] md:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#B8FF3B]/40 bg-[#B8FF3B]/10 text-xl font-black text-[#B8FF3B]">
                {achievement.year ? achievement.year.slice(-2) : "T"}
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8FF3B]">{achievement.category}</div>
                <h3 className="mt-2 text-2xl font-black uppercase tracking-[0.04em] text-white">{achievement.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{achievement.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
