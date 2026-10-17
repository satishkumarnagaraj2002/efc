import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { clubInfo } from "@/src/data/clubInfo";

export default function TrainingPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Training & programmes"
          title="Train with purpose."
          description="Explore the football development opportunities available at Elite Football Club London."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {clubInfo.programmes.map((programme) => (
            <article key={programme.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
              <Image src={programme.image} alt={programme.title} width={800} height={600} className="h-64 w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#B8FF3B]">{programme.category}</div>
                <h3 className="text-2xl font-black uppercase tracking-[0.04em] text-white">{programme.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{programme.description}</p>
                <div className="mt-5 space-y-2 text-sm text-slate-300">
                  {programme.ageRange ? <div>Age range: {programme.ageRange}</div> : null}
                  {programme.schedule ? <div>Schedule: {programme.schedule}</div> : null}
                  {programme.location ? <div>Location: {programme.location}</div> : null}
                </div>
                <Link href="/join" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B8FF3B]">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
