import { SiteShell } from "@/components/site-shell";

export default function PrivacyPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B8FF3B]">Privacy policy</p>
          <h1 className="text-4xl font-black uppercase tracking-[0.06em] text-white">Draft privacy notice</h1>
          <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
            <p>
              This privacy policy is a draft for review and should be checked and approved by the club before it is treated as a legally binding document.
            </p>
            <p>
              The club may collect contact details, enquiry information, and other relevant information through website forms, email, and social media channels. This information is used to respond to enquiries, assess programme interests, and manage communication with parents or guardians.
            </p>
            <p>
              Data will be retained only for as long as necessary to manage enquiries and fulfil legitimate club communications. It will not be shared with third parties without consent except where required for operational reasons, legal compliance, or approved service providers.
            </p>
            <p>
              If the club uses approved third-party services such as email or form providers, those providers must be reviewed for data protection compliance before live activation.
            </p>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
