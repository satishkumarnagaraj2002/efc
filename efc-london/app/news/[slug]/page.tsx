import Image from "next/image";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/site-shell";
import { clubInfo } from "@/src/data/clubInfo";

export function generateStaticParams() {
  return clubInfo.news.map((article) => ({ slug: article.slug }));
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = clubInfo.news.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <SiteShell>
      <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <Image src={article.image} alt={article.title} width={1600} height={900} className="h-[420px] w-full rounded-[28px] object-cover" />
        <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-8">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#B8FF3B]">{article.category}</div>
          <h1 className="text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl">{article.title}</h1>
          <p className="mt-4 text-sm text-slate-400">{article.date}</p>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-300">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
