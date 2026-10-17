import { SiteShell } from "@/components/site-shell";

export default function SafeguardingPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B8FF3B]">Safeguarding</p>
          <h1 className="text-4xl font-black uppercase tracking-[0.06em] text-white">Safeguarding information</h1>
          <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
            <p>
              This safeguarding page is a draft placeholder intended for review and approval by the club before publication as an official policy document.
            </p>
            <p>
              Elite Football Club London is committed to creating a safe and respectful environment for all players, parents, guardians, coaches, and volunteers.
            </p>
            <p>
              Any final safeguarding policy should be reviewed by the club to confirm designated safeguarding responsibilities, reporting procedures, privacy expectations, and approved contact channels.
            </p>
            <p>
              The club should insert official safeguarding roles, contact details, and policy wording once approved.
            </p>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
