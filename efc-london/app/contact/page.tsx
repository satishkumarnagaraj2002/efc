import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { clubInfo } from "@/src/data/clubInfo";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk football."
          description="Get in touch about youth football development, programme availability, and upcoming opportunities."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 rounded-[30px] border border-white/10 bg-white/5 p-8">
            <div className="flex items-center gap-3 text-[#B8FF3B]">
              <Phone size={18} />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">Call us</span>
            </div>
            <a href={`tel:${clubInfo.contact.phone}`} className="block text-2xl font-black text-white">{clubInfo.contact.phone}</a>

            <div className="flex items-center gap-3 text-[#B8FF3B]">
              <Mail size={18} />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">Email</span>
            </div>
            <a href={`mailto:${clubInfo.contact.email}`} className="block text-xl text-slate-200">{clubInfo.contact.email}</a>

            <div className="flex items-center gap-3 text-[#B8FF3B]">
              <MapPin size={18} />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">Training base</span>
            </div>
            <p className="text-lg text-slate-200">{clubInfo.contact.address}</p>

            <div className="flex items-center gap-4 pt-2">
              <a href={clubInfo.socialLinks.instagram} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:border-[#B8FF3B]/60 hover:text-[#B8FF3B]">
                <Instagram size={18} />
              </a>
              <a href={clubInfo.socialLinks.facebook} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:border-[#B8FF3B]/60 hover:text-[#B8FF3B]">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <form className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                <span>Name</span>
                <input type="text" className="w-full rounded-2xl border border-white/10 bg-[#070B12] px-4 py-3 text-white outline-none" />
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                <span>Email</span>
                <input type="email" className="w-full rounded-2xl border border-white/10 bg-[#070B12] px-4 py-3 text-white outline-none" />
              </label>
              <label className="space-y-2 text-sm text-slate-200 md:col-span-2">
                <span>Subject</span>
                <input type="text" className="w-full rounded-2xl border border-white/10 bg-[#070B12] px-4 py-3 text-white outline-none" />
              </label>
              <label className="space-y-2 text-sm text-slate-200 md:col-span-2">
                <span>Message</span>
                <textarea rows={5} className="w-full rounded-2xl border border-white/10 bg-[#070B12] px-4 py-3 text-white outline-none" />
              </label>
            </div>
            <button type="submit" className="mt-8 rounded-full border border-[#B8FF3B] bg-[#B8FF3B] px-6 py-3 text-sm font-semibold text-[#070B12]">
              Send enquiry
            </button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
