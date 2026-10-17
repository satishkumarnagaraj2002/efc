import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { clubInfo } from "@/src/data/clubInfo";

export default function NewsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="News & events"
          title="Updates from the club."
          description="Official updates, events, training notes and club announcements will be published here as they are approved."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {clubInfo.news.map((article) => (
            <article key={article.slug} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
              <Image src={article.image} alt={article.title} width={1200} height={800} className="h-64 w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#B8FF3B]">{article.category}</div>
                <h3 className="text-2xl font-black uppercase tracking-[0.04em] text-white">{article.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{article.date}</p>
                <p className="mt-4 text-base leading-7 text-slate-300">{article.excerpt}</p>
                <Link href={`/news/${article.slug}`} className="mt-6 inline-flex rounded-full border border-[#B8FF3B] px-4 py-2 text-sm font-semibold text-[#B8FF3B]">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
