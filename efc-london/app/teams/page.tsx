import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { clubInfo } from "@/src/data/clubInfo";

export default function TeamsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our teams / 2026"
            title="Find your side."
            description="Two age groups. One standard: develop with purpose, compete with confidence, and enjoy the game."
          />
          <p className="max-w-xs text-sm leading-6 text-slate-400 md:pb-1">
            Friday training at Peter May Sports Centre, Walthamstow.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {clubInfo.teams.map((team) => (
            <article key={team.name} className="group overflow-hidden border border-white/10 bg-[#101827] transition-colors duration-300 hover:border-[#B8FF3B]/40">
              <div className="relative h-64 overflow-hidden sm:h-80">
                <Image
                  src={team.image}
                  alt={`${team.ageGroup} team`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-[#070B12]/10 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-3">
                  <span className="bg-[#B8FF3B] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#070B12]">
                    {team.ageGroup}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Elite FC London</span>
                </div>
                <h2 className="absolute bottom-5 left-5 font-display text-5xl font-bold uppercase leading-none text-white sm:text-6xl">
                  {team.ageGroup}<span className="text-[#B8FF3B]">.</span>
                </h2>
              </div>

              <div className="p-5 sm:p-7">
                <p className="max-w-xl text-sm leading-6 text-slate-300">{team.description}</p>

                <div className="mt-6 flex items-center gap-4 border-y border-white/10 py-4">
                  {team.coachImage ? (
                    <Image
                      src={team.coachImage}
                      alt={`Coach ${team.coach}`}
                      width={64}
                      height={64}
                      className="size-16 rounded-full border border-[#B8FF3B]/50 object-cover"
                    />
                  ) : null}
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Head coach</p>
                    <p className="mt-1 text-lg font-bold text-white">{team.coach}</p>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-400">
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#B8FF3B]" />
                  <span>{team.location}</span>
                </div>
                <div className="mt-2 flex items-center gap-3 text-xs font-medium text-slate-500">
                  <Clock3 aria-hidden="true" className="size-4 shrink-0" />
                  {team.trainingSchedule}
                </div>

                <Link href="/join" className="mt-7 inline-flex items-center gap-2 border-b border-[#B8FF3B]/60 pb-1 text-sm font-bold text-[#B8FF3B] transition-colors hover:border-[#B8FF3B] hover:text-white">
                  Join this team
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
