import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { timetable, venue } from "@/src/data/clubInfo";

export function TimetablePreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Training timetable"
        title="Fridays at Peter May."
        description="Everyone trains on the 3G pitch. Your first session is free."
      />
      <Reveal className="mt-14">
        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(184,255,59,0.1),rgba(255,255,255,0.03))]">
          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {timetable.map((row) => (
              <div key={row.group} className="flex items-center gap-5 bg-[#0B1220] p-6">
                <Image
                  src={row.image}
                  alt={row.coach}
                  width={72}
                  height={72}
                  className="size-[72px] rounded-full border border-[#B8FF3B]/50 object-cover"
                />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8FF3B]">{row.group}</div>
                  <div className="mt-1 text-2xl font-black uppercase text-white">
                    {row.day} · {row.time}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">{row.coach}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3 text-slate-200">
              <MapPin className="mt-0.5 shrink-0 text-[#B8FF3B]" size={18} />
              <span>
                {venue.name}, {venue.address}
              </span>
            </div>
            <Link
              href="/timetable"
              className="inline-flex items-center gap-2 rounded-full border border-[#B8FF3B] bg-[#B8FF3B] px-5 py-2.5 text-sm font-bold text-[#070B12]"
            >
              Full timetable <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
