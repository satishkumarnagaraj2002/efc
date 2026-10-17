import { ArrowRight, Award, CalendarDays, ChevronRight, Goal, ShieldCheck, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { clubInfo } from "@/src/data/clubInfo";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1600&q=80"
            alt="Elite Football Club London training session"
            fill
            priority
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,255,59,0.18),transparent_30%),linear-gradient(90deg,rgba(7,11,18,0.95),rgba(7,11,18,0.6))]" />
        </div>

        <div className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center gap-10 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-slate-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#B8FF3B]" />
              Est. London
            </div>
            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
              Elite <span className="text-[#B8FF3B]">Football</span>
              <br />
              Club London
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
              Passion. Discipline. Excellence.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
              Discover the spirit of football, teamwork, and continuous development at Elite Football Club London.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/join" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B8FF3B] bg-[#B8FF3B] px-6 py-3 text-sm font-semibold text-[#070B12] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(184,255,59,0.28)]">
                Join the club <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10">
                Explore our club
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2"><Award size={16} className="text-[#B8FF3B]" /> FA England accredited club</span>
              <span className="flex items-center gap-2"><Users size={16} className="text-[#B8FF3B]" /> Age groups U4 to U16</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-[30px] border border-white/10 bg-[#0B1220]/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8FF3B]">Club snapshot</span>
                <span className="rounded-full border border-[#B8FF3B]/30 bg-[#B8FF3B]/10 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-[#B8FF3B]">Walthamstow</span>
              </div>
              <div className="space-y-4">
                {clubInfo.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-slate-300">{stat.label}</span>
                    <span className="font-semibold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
            <Image src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?auto=format&fit=crop&w=1200&q=80" alt="Elite Football Club London players training" width={1200} height={800} className="h-[500px] w-full object-cover" />
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-[#B8FF3B]">More than a game</p>
            <h2 className="font-['Barlow_Condensed','sans-serif'] text-4xl font-black uppercase tracking-[0.04em] text-white sm:text-5xl">
              The spirit of Elite Football.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Elite Football Club London prepares players for competitive football through disciplined coaching, technical development and a caring team environment. The club’s profile highlights youth progression, FA England accreditation, and a strong focus on positive development in Walthamstow.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-[#B8FF3B] bg-[#B8FF3B] px-5 py-3 text-sm font-semibold text-[#070B12]">
                Read more <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1220]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Club values"
            title="Playing with purpose."
            description="A premium football culture built on development, respect and readiness for the next challenge."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {clubInfo.values.map((value) => (
              <div key={value.title} className="rounded-[26px] border border-white/10 bg-[#101827] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8FF3B]/50 hover:shadow-[0_18px_40px_rgba(184,255,59,0.08)]">
                <div className="mb-4 h-10 w-10 rounded-full border border-[#B8FF3B]/30 bg-[#B8FF3B]/10" />
                <h3 className="text-xl font-black uppercase tracking-[0.06em] text-white">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Training & programmes"
          title="Train with purpose."
          description="Explore the football development opportunities available at Elite Football Club London."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {clubInfo.programmes.map((programme) => (
            <article key={programme.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
              <Image src={programme.image} alt={programme.title} width={800} height={600} className="h-60 w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#B8FF3B]">{programme.category}</div>
                <h3 className="text-2xl font-black uppercase tracking-[0.04em] text-white">{programme.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{programme.description}</p>
                <Link href="/training" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B8FF3B]">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0B1220] py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Trophy, label: "Competition focus" },
            { icon: Goal, label: "Technical development" },
            { icon: CalendarDays, label: "Programme planning" },
            { icon: ShieldCheck, label: "Safe environment" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-[22px] border border-white/10 bg-white/5 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#B8FF3B]/30 bg-[#B8FF3B]/10 text-[#B8FF3B]">
                <Icon size={20} />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recognition"
          title="Milestones that matter."
          description="Recent club references and achievements captured across the official social channels and public profile."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {clubInfo.achievements.slice(0, 3).map((achievement) => (
            <article key={achievement.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#B8FF3B]/30 bg-[#B8FF3B]/10 text-[#B8FF3B]">
                <Trophy size={18} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8FF3B]">{achievement.category}</div>
              <h3 className="mt-3 text-2xl font-black uppercase tracking-[0.05em] text-white">{achievement.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{achievement.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(184,255,59,0.12),rgba(255,255,255,0.03))] p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#B8FF3B]">Built on passion</p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[0.04em] text-white sm:text-5xl">
                Driven by purpose.
              </h2>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link href="/join" className="inline-flex items-center gap-2 rounded-full border border-[#B8FF3B] bg-[#B8FF3B] px-6 py-3 text-sm font-semibold text-[#070B12]">
                Join us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
