import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { timetable, venue } from "@/src/data/clubInfo";

export default function TimetablePage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1600&q=80"
            alt="Elite Football Club London training session"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,255,59,0.15),transparent_35%),linear-gradient(90deg,rgba(7,11,18,0.95),rgba(7,11,18,0.6))]" />
          <div className="grid-lines absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#B8FF3B]">Training timetable</p>
            <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl">
              Fridays at<br />
              Peter May Sports Centre
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              One training night, two teams, one home. Every Friday we train on the 3G pitch at Peter May Sports
              Centre. Your first session is free.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#B8FF3B] mb-1">Day</div>
                <p className="text-2xl font-black text-white">{venue.day}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#B8FF3B] mb-1">Time</div>
                <p className="text-2xl font-black text-white">{venue.time}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#B8FF3B] mb-1">Pitch</div>
                <p className="text-2xl font-black text-white">{venue.pitch}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#B8FF3B] mb-1">Age groups</div>
                <p className="text-2xl font-black text-white">U9 · U11 (4–15)</p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3 rounded-full border border-[#B8FF3B]/40 bg-[#B8FF3B]/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#B8FF3B]">
              <GiftIcon size={16} /> First session free — every Friday
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Logo height={320} glow />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1220]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sessions"
            title="Friday training schedule"
            description="Coach Tom leads U9 and Coach Jason leads U11 — both at Peter May Sports Centre."
          />
          <div className="mt-16 grid gap-6">
            {timetable.map((row, i) => (
              <Reveal key={row.group} delay={i * 0.1}>
                <article className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#101827] transition duration-300 hover:-translate-y-1 hover:border-[#B8FF3B]/50 hover:shadow-[0_24px_60px_rgba(184,255,59,0.1)]">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={row.image}
                      alt={row.coach}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-[#101827]/10 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-[#B8FF3B] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#070B12]">
                      {row.group}
                    </span>
                    <div className="absolute right-5 top-5">
                      <Logo height={44} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[#B8FF3B] font-black text-sm">
                        {i + 1}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <MapPinIcon size={14} /> {row.venue}
                      </div>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-[0.04em] text-white mb-1">
                      {row.day}
                    </h3>
                    <p className="text-2xl font-bold text-[#B8FF3B]">{row.time}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-[#B8FF3B]"><CoachIcon size={16} /></span>
                      <span>{row.coach}</span>
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                      League: {row.league}
                    </div>
                    <Link
                      href="/join"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#B8FF3B] bg-[#B8FF3B] px-5 py-2.5 text-sm font-bold text-[#070B12]"
                    >
                      Book this group <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit us"
          title="Where to find us."
          description="Trainings at Peter May Sports Centre, 135 Wadham Rd, London E17 4HR."
        />
        <div className="mt-12 rounded-[30px] border border-white/10 bg-[#101827] p-8 sm:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
          <div className="grid gap-8 sm:grid-cols-2 items-start">
            <div>
              <h3 className="mb-4 text-lg font-black uppercase text-white">Venue</h3>
              <p className="mb-4 text-slate-300 leading-7">
                {venue.name}<br />
                {venue.address}
              </p>
              <p className="text-sm text-slate-400 leading-6">
                Sessions take place on the 3G pitch every Friday evening. Please arrive 10 minutes early so we can
                check players in and start on time.
              </p>
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8FF3B] transition hover:text-white"
              >
                Open on Google Maps <ArrowRight size={14} />
              </a>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-[#B8FF3B]/40 bg-[#B8FF3B]/15 p-6 text-[#070B12]">
              <GiftIcon size={20} />
              <div>
                <h3 className="font-black uppercase text-[#B8FF3B]">First session free</h3>
                <p className="text-sm">Book your trial below — no payment required to attend your first Friday.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/join"
              className="inline-flex items-center gap-2 rounded-full border border-[#B8FF3B] bg-[#B8FF3B] px-6 py-3 text-sm font-bold text-[#070B12] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(184,255,59,0.28)]"
            >
              Book your free session <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function GiftIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="12 4 12 10 20 10" />
      <path d="M20 14H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Z" />
      <path d="M2 10h20" />
    </svg>
  );
}

function MapPinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CoachIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="3 11 6 12 13 13" />
    </svg>
  );
}

