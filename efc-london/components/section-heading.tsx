"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#B8FF3B]">{eyebrow}</p>
      <h2 className="font-['Barlow_Condensed','sans-serif'] text-4xl font-black uppercase tracking-[0.04em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
