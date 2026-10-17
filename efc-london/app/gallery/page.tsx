import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { clubInfo } from "@/src/data/clubInfo";

export default function GalleryPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Photo gallery"
          title="Follow our journey."
          description="Selected football training and match photography to showcase the energy and ambition of the club."
        />

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {clubInfo.gallery.map((image, index) => (
            <div key={`${image}-${index}`} className="mb-5 overflow-hidden rounded-[26px] border border-white/10 bg-white/5 break-inside-avoid">
              <Image src={image} alt={`Club football gallery image ${index + 1}`} width={900} height={1200} className="h-auto w-full object-cover transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
