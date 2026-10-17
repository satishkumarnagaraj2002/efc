"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { clubInfo, navItems } from "@/src/data/clubInfo";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[2px] bg-white/5">
      <div
        className="h-full bg-[#B8FF3B] shadow-[0_0_18px_rgba(184,255,59,0.9)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => setMobileOpen(false));
    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <div className="min-h-screen bg-[#070B12] text-[#F8FAFC]">
      <ScrollProgress />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070B12]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Elite Football Club London home">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8FF3B]/60 bg-[#B8FF3B]/10 text-sm font-black text-[#B8FF3B]">
              EFC
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94A3B8]">Elite</div>
              <div className="text-base font-black uppercase tracking-[0.18em]">London</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return item.highlight ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center rounded-full border border-[#B8FF3B] bg-[#B8FF3B] px-5 py-2 text-sm font-semibold text-[#070B12] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(184,255,59,0.25)]"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition ${
                    active ? "text-[#B8FF3B]" : "text-slate-200 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-[#070B12] lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`rounded-2xl border px-4 py-3 text-base font-medium ${
                      pathname === item.href
                        ? "border-[#B8FF3B]/40 bg-[#B8FF3B]/10 text-[#B8FF3B]"
                        : "border-white/10 bg-white/5 text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={clubInfo.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={clubInfo.socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>{children}</main>

      <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-[#0B1220]">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -top-10 left-0 text-[12rem] font-black uppercase tracking-[-0.1em] text-white/30">
            ELITE
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8FF3B]/60 bg-[#B8FF3B]/10 text-sm font-black text-[#B8FF3B]">
                EFC
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#94A3B8]">Elite</div>
                <div className="text-sm font-black uppercase tracking-[0.2em]">London</div>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-7 text-slate-300">
              Elite Football Club London is a youth football development club focused on discipline, teamwork, and progression.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#B8FF3B]">Quick links</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {navItems.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#B8FF3B]">Club info</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/training" className="transition hover:text-white">
                  Training & programmes
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="transition hover:text-white">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/safeguarding" className="transition hover:text-white">
                  Safeguarding information
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#B8FF3B]">Contact</h3>
            <div className="space-y-4 text-sm text-slate-300">
              <a href={`tel:${clubInfo.contact.phone}`} className="flex items-center gap-3 hover:text-white">
                <Phone size={16} />
                <span>{clubInfo.contact.phone}</span>
              </a>
              <a href={`mailto:${clubInfo.contact.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail size={16} />
                <span>{clubInfo.contact.email}</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>{clubInfo.contact.address}</span>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a href={clubInfo.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-white/10 bg-white/5 p-2 hover:border-[#B8FF3B]/50 hover:text-[#B8FF3B]">
                  <Instagram size={16} />
                </a>
                <a href={clubInfo.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full border border-white/10 bg-white/5 p-2 hover:border-[#B8FF3B]/50 hover:text-[#B8FF3B]">
                  <Facebook size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 text-xs text-slate-400 sm:px-6 lg:px-8">
            <p>© 2026 Elite Football Club London. All rights reserved.</p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white transition hover:border-[#B8FF3B]/60 hover:text-[#B8FF3B]"
            >
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
