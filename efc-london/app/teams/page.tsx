import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { clubInfo } from "@/src/data/clubInfo";

export default function TeamsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Teams & age groups"
          title="Built for progression."
          description="Each team is shaped around age-appropriate development, confidence-building and positive football experiences."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {clubInfo.teams.map((team) => (
            <article key={team.name} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
              <Image src={team.image} alt={team.name} width={900} height={700} className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-black uppercase tracking-[0.04em] text-white">{team.name}</h3>
                  <span className="rounded-full border border-[#B8FF3B]/30 bg-[#B8FF3B]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B8FF3B]">
                    {team.ageGroup}
                  </span>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-300">
                  {team.coach ? <div>Coach: {team.coach}</div> : null}
                  {team.trainingSchedule ? <div>Schedule: {team.trainingSchedule}</div> : null}
                  {team.location ? <div>Location: {team.location}</div> : null}
                </div>
                <p className="mt-4 text-base leading-7 text-slate-300">{team.description}</p>
                <Link href="/join" className="mt-6 inline-flex rounded-full border border-[#B8FF3B] px-4 py-2 text-sm font-semibold text-[#B8FF3B]">
                  Join team
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
