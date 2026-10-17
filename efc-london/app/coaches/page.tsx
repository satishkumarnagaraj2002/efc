import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { clubInfo } from "@/src/data/clubInfo";

export default function CoachesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet the coaches"
          title="The people behind the progress."
          description="Meet the coaches leading our U9 and U11 teams."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {clubInfo.coaches.map((coach) => (
            <article key={coach.name} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
              <Image src={coach.image} alt={coach.name} width={900} height={1200} className="h-[420px] w-full object-cover" />
              <div className="space-y-4 p-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8FF3B]">{coach.role}</div>
                  <h3 className="mt-3 text-2xl font-black uppercase tracking-[0.04em] text-white">{coach.name}</h3>
                </div>
                {coach.qualifications ? <p className="text-sm text-slate-300">Qualifications: {coach.qualifications}</p> : null}
                {coach.experience ? <p className="text-sm text-slate-300">Experience: {coach.experience}</p> : null}
                <p className="text-base leading-7 text-slate-300">{coach.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
