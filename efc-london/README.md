# Elite Football Club London

A premium football club website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Local setup

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Project structure

- `app/` contains the main pages and route structure.
- `components/` contains reusable layout and UI blocks.
- `src/data/clubInfo.ts` stores club content and editable configuration.
- `CONTENT_NEEDED.md` tracks details still awaiting official verification.

## Environment variables

Create a `.env.local` file for live integration-ready form handling:

```bash
FORM_RECEIVER_EMAIL=your-email@example.com
```

The enquiry form is configured as a secure, integration-ready contact flow. It should be connected to a real approved email or form provider before production launch.

## Production build

```bash
npm run build
npm run start
```

## Vercel deployment

1. Import the project into Vercel.
2. Keep the default Next.js build settings.
3. Add any environment variables required for form handling.
4. Connect the project to the club’s custom domain once available.

## Content review

This website intentionally uses verified public details and clear placeholder content where full official data has not yet been confirmed.

Update the following files when the club approves final content:

- `src/data/clubInfo.ts`
- `CONTENT_NEEDED.md`
- `app/about/page.tsx`
- `app/training/page.tsx`
- `app/teams/page.tsx`
- `app/coaches/page.tsx`
- `app/gallery/page.tsx`
- `app/news/page.tsx`
- `app/join/page.tsx`
- `app/contact/page.tsx`
