import { ArrowRight, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { clubInfo, developmentGroups } from "@/src/data/clubInfo";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
            <Image
              src="/u11.jpeg"
              alt="Elite Football Club London players"
              width={1200}
              height={900}
              className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/15 bg-[#070B12]/70 px-4 py-2 backdrop-blur">
              <Logo height={32} />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Est. 2017</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-[#B8FF3B]">More than a game</p>
          <h2 className="font-['Barlow_Condensed','sans-serif'] text-4xl font-black uppercase tracking-[0.04em] text-white sm:text-5xl">
            The spirit of Elite Football.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-300">
            Elite Football Club London prepares players for competitive football through disciplined coaching,
            technical development and a caring team environment. We offer fun, safe and enjoyable football for
            boys and girls aged 4–15, with teams competing in leagues, friendlies and tournaments.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {developmentGroups.map((g) => (
              <div
                key={g.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-[#B8FF3B]/40"
              >
                <div className="text-2xl font-black text-[#B8FF3B]">{g.ages}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-white">{g.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-[#B8FF3B] bg-[#B8FF3B] px-5 py-3 text-sm font-semibold text-[#070B12]"
            >
              Read more <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TeamsSection() {
  return (
    <section className="border-y border-white/10 bg-[#0B1220]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our teams"
          title="Meet U9 & U11."
          description="Two Orange squads in the NLYFL, each led by a dedicated head coach."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {clubInfo.teams.map((team, i) => (
            <Reveal key={team.name} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#101827] transition duration-300 hover:-translate-y-1 hover:border-[#B8FF3B]/50 hover:shadow-[0_24px_60px_rgba(184,255,59,0.1)]">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={team.image}
                    alt={`${team.ageGroup} team photo`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-[#101827]/10 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-[#B8FF3B] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#070B12]">
                    {team.ageGroup} Orange
                  </span>
                  <div className="absolute right-4 top-4">
                    <Logo height={44} />
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6">
                  {team.coachImage ? (
                    <Image
                      src={team.coachImage}
                      alt={team.coach ?? "Coach"}
                      width={80}
                      height={80}
                      className="size-20 rounded-full border-2 border-[#B8FF3B]/60 object-cover"
                    />
                  ) : null}
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Head coach</p>
                    <p className="text-xl font-black uppercase tracking-[0.04em] text-white">{team.coach}</p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                      <Clock3 size={14} className="text-[#B8FF3B]" /> {team.trainingSchedule}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/teams" className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8FF3B]">
            See teams in detail <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

