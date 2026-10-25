import { ArrowRight, Award, CalendarDays, Gift, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { clubInfo } from "@/src/data/clubInfo";

const marqueeItems = [
  "First session free",
  "Fridays 19:00 – 20:30",
  "Ages 4–15",
  "Peter May Sports Centre",
  "NLYFL league football",
  "England Football accredited",
  "Academy pathways",
];

export function Hero() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1600&q=80"
            alt="Elite Football Club London training session"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(37,99,235,0.28),transparent_40%),radial-gradient(circle_at_top,rgba(184,255,59,0.16),transparent_30%),linear-gradient(90deg,rgba(7,11,18,0.96),rgba(7,11,18,0.6))]" />
          <div className="grid-lines absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[84vh] max-w-7xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="badge-pulse mb-6 inline-flex items-center gap-3 rounded-full border border-[#B8FF3B]/60 bg-[#B8FF3B]/15 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#B8FF3B]">
              <Gift size={14} />
              First session free
            </div>
            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-white sm:text-6xl lg:text-8xl">
              Elite <span className="text-shimmer">Football</span>
              <br />
              Club London
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold uppercase tracking-[0.2em] text-slate-200 sm:text-xl">
              Passion. Discipline. Excellence.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
              Fun, safe and enjoyable football for boys and girls aged 4–15 in East London — from first touches to
              academy trials. Train with us every Friday and try your first session on the house.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/join"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B8FF3B] bg-[#B8FF3B] px-6 py-3 text-sm font-bold text-[#070B12] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(184,255,59,0.28)]"
              >
                Book your free session <ArrowRight size={16} />
              </Link>
              <Link
                href="/timetable"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                View timetable
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <Award size={16} className="text-[#B8FF3B]" /> England Football accredited
              </span>
              <span className="flex items-center gap-2">
                <Users size={16} className="text-[#B8FF3B]" /> Ages 4–15
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays size={16} className="text-[#B8FF3B]" /> Fridays 19:00–20:30
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 lg:items-end">
            <Logo height={280} priority glow />
            <div className="w-full max-w-md rounded-[30px] border border-white/10 bg-[#0B1220]/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8FF3B]">Club snapshot</span>
                <span className="rounded-full border border-[#B8FF3B]/30 bg-[#B8FF3B]/10 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-[#B8FF3B]">
                  East London
                </span>
              </div>
              <div className="space-y-3">
                {clubInfo.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-slate-300">{stat.label}</span>
                    <span className="font-semibold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-[#0B1220] py-4" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-6 px-6 text-sm font-bold uppercase tracking-[0.3em] text-slate-300"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-[#B8FF3B]" />
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
