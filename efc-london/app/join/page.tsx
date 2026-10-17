import { ArrowRight, CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";

export default function JoinPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Join the club"
          title="Your football journey starts here."
          description="Use the form below to request information about youth football training and development opportunities."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-white/10 bg-[#0B1220] p-8">
            <h3 className="text-2xl font-black uppercase tracking-[0.04em] text-white">What to expect</h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              {[
                "A response from the club regarding programmes and availability.",
                "Information about age groups, training, and contact options.",
                "A clear overview of the next steps for your child’s football journey.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 text-[#B8FF3B]" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <form className="rounded-[30px] border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                <span>Parent/guardian name</span>
                <input type="text" className="w-full rounded-2xl border border-white/10 bg-[#070B12] px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-[#B8FF3B]/80" placeholder="Your name" />
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                <span>Email address</span>
                <input type="email" className="w-full rounded-2xl border border-white/10 bg-[#070B12] px-4 py-3 text-white outline-none focus:border-[#B8FF3B]/80" placeholder="you@example.com" />
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                <span>Contact number</span>
                <input type="tel" className="w-full rounded-2xl border border-white/10 bg-[#070B12] px-4 py-3 text-white outline-none focus:border-[#B8FF3B]/80" placeholder="+44 ..." />
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                <span>Player age group</span>
                <select className="w-full rounded-2xl border border-white/10 bg-[#070B12] px-4 py-3 text-white outline-none focus:border-[#B8FF3B]/80">
                  <option>U4</option>
                  <option>U5</option>
                  <option>U6</option>
                  <option>U7</option>
                  <option>U8</option>
                  <option>U9</option>
                  <option>U10</option>
                  <option>U11</option>
                  <option>U12</option>
                  <option>U13</option>
                  <option>U14</option>
                  <option>U15</option>
                  <option>U16</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-slate-200 md:col-span-2">
                <span>Interested programme</span>
                <select className="w-full rounded-2xl border border-white/10 bg-[#070B12] px-4 py-3 text-white outline-none focus:border-[#B8FF3B]/80">
                  <option>Youth football training</option>
                  <option>Football skills development</option>
                  <option>Team training</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-slate-200 md:col-span-2">
                <span>Preferred training location</span>
                <input type="text" className="w-full rounded-2xl border border-white/10 bg-[#070B12] px-4 py-3 text-white outline-none focus:border-[#B8FF3B]/80" placeholder="Walthamstow" />
              </label>
              <label className="space-y-2 text-sm text-slate-200 md:col-span-2">
                <span>Message</span>
                <textarea rows={5} className="w-full rounded-2xl border border-white/10 bg-[#070B12] px-4 py-3 text-white outline-none focus:border-[#B8FF3B]/80" placeholder="Tell us a little about your child’s football interests and goals." />
              </label>
            </div>

            <div className="mt-6 rounded-2xl border border-[#B8FF3B]/30 bg-[#B8FF3B]/5 p-4 text-sm leading-7 text-slate-200">
              This enquiry form is configured as a secure, integration-ready contact form. It must be connected to an approved email or form provider before live use.
            </div>

            <button type="submit" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#B8FF3B] bg-[#B8FF3B] px-6 py-3 text-sm font-semibold text-[#070B12]">
              Send enquiry <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
