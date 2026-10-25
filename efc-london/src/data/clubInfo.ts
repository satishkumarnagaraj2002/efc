export type SocialLinks = {
  instagram: string;
  facebook: string;
  website: string;
  tiktok?: string;
};

export type ClubStats = {
  label: string;
  value: string;
};

export type Programme = {
  title: string;
  image: string;
  description: string;
  ageRange?: string;
  schedule?: string;
  location?: string;
  category: string;
};

export type Team = {
  name: string;
  ageGroup: string;
  image: string;
  coach?: string;
  coachImage?: string;
  trainingSchedule?: string;
  description: string;
  location?: string;
};

export type Coach = {
  name: string;
  role: string;
  image: string;
  qualifications?: string;
  experience?: string;
  bio: string;
};

export type Achievement = {
  title: string;
  detail: string;
  year?: string;
  category: string;
};

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content: string[];
};

export const clubInfo = {
  name: "Elite Football Club London",
  shortName: "Elite FC London",
  tagline: "Passion. Discipline. Excellence.",
  mission: "To build confident, technically capable, and well-rounded footballers through disciplined coaching, positive team culture, and meaningful development.",
  location: "Walthamstow",
  established: "2017",
  brandColors: {
    primaryBackground: "#070B12",
    secondaryBackground: "#101827",
    accentGreen: "#B8FF3B",
    premiumWhite: "#F8FAFC",
    mutedGrey: "#94A3B8",
    darkSurface: "#151E2D",
  },
  verifiedHighlights: [
    "FA England Accredited club",
    "NLYFL",
    "Walthamstow",
    "Age groups U9 & U11",
    "Training programme for youth football development",
  ],
  contact: {
    phone: "+44 7424 053644",
    email: "elitefclondon@gmail.com",
    website: "http://www.elitefclondon.uk/",
    address: "Walthamstow, London",
  },
  socialLinks: {
    instagram: "https://www.instagram.com/elitefootballclublondon/",
    facebook: "https://www.facebook.com/EliteFootballClubLondon/",
    website: "http://www.elitefclondon.uk/",
    tiktok: "https://www.tiktok.com/@elitefootballclublondon",
  },
  stats: [
    { label: "Founded", value: "2017" },
    { label: "Age Groups", value: "U9 & U11" },
    { label: "Accreditation", value: "FA England" },
    { label: "Training Base", value: "Walthamstow" },
  ] as ClubStats[],
  values: [
    {
      title: "Discipline",
      description: "Developing commitment, focus, and dedication on and off the pitch.",
    },
    {
      title: "Teamwork",
      description: "Building strong relationships through shared effort and respectful play.",
    },
    {
      title: "Development",
      description: "Encouraging continuous improvement through coaching, challenge, and reflection.",
    },
    {
      title: "Respect",
      description: "Promoting sportsmanship, positivity, and good conduct throughout the club.",
    },
    {
      title: "Passion",
      description: "Inspiring enthusiasm for football and a lifelong love of the game.",
    },
  ],
  programmes: [
    {
      title: "Youth Football Training",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1000&q=80",
      description:
        "Structured football sessions designed to build confidence, technique, and a love of the game in a positive learning environment.",
      ageRange: "U9 & U11",
      schedule: "TBC",
      location: "Walthamstow",
      category: "Training",
    },
    {
      title: "Football Skills Development",
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1000&q=80",
      description:
        "Focused development sessions covering movement, ball mastery, passing, receiving, and decision-making.",
      ageRange: "U9 & U11",
      schedule: "TBC",
      location: "Walthamstow",
      category: "Development",
    },
    {
      title: "Team Training",
      image:
        "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?auto=format&fit=crop&w=1000&q=80",
      description:
        "Team-based training that supports tactical understanding, communication, and competitive confidence.",
      ageRange: "U9 & U11",
      schedule: "TBC",
      location: "Walthamstow",
      category: "Teams",
    },
  ] as Programme[],
  teams: [
    {
      name: "Elite FC London U9",
      ageGroup: "U9",
      image: "/u9.jpeg",
      coach: "Tom",
      coachImage: "/Tom.jpeg",
      trainingSchedule: "Fridays 19.00 to 20.30",
      description: "A development-focused age group built around technical growth, confidence, and team play.",
      location: "Peter May Sports Centre, 135 Wadham Rd, London E17 4HR",
    },
    {
      name: "Elite FC London U11",
      ageGroup: "U11",
      image: "/u11.jpeg",
      coach: "Jason",
      coachImage: "/Jason.jpeg",
      trainingSchedule: "Fridays 19.00 to 20.30",
      description: "A key stage for advanced decision-making, play patterns, and match competitiveness.",
      location: "Peter May Sports Centre, 135 Wadham Rd, London E17 4HR",
    },
  ] as Team[],
  coaches: <Coach[]>[
    {
      name: "Tom",
      role: "U9 Coach",
      image: "/Tom.jpeg",
      bio: "Coach for the U9 team at Elite Football Club London.",
    },
    {
      name: "Jason",
      role: "U11 Coach",
      image: "/Jason.jpeg",
      bio: "Coach for the U11 team at Elite Football Club London.",
    },
  ],
  achievements: [
    {
      title: "JPL Middlesex Trophy",
      detail: "Verified achievement mentioned on the club Facebook profile.",
      year: "TBC",
      category: "Competition",
    },
    {
      title: "Barnet FC U10 title",
      detail: "Verified achievement mentioned on the club Facebook profile.",
      year: "TBC",
      category: "Competition",
    },
    {
      title: "Barnet FC U11 title",
      detail: "Verified achievement mentioned on the club Facebook profile.",
      year: "TBC",
      category: "Competition",
    },
    {
      title: "Barnet FC First Team success",
      detail: "Verified mention on the official club page.",
      year: "TBC",
      category: "Club milestone",
    },
    {
      title: "Parker Cup",
      detail: "Verified achievement noted in the club profile summary.",
      year: "TBC",
      category: "Competition",
    },
  ] as Achievement[],
  gallery: [
    "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80",
  ],
  news: [
    {
      slug: "club-update",
      title: "Club update and programme news",
      excerpt: "A placeholder article template for upcoming announcements, training updates, and club milestones.",
      category: "Announcement",
      date: "2026-10-17",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80",
      content: [
        "This article is a placeholder and should be replaced with an officially approved club announcement when available.",
        "Elite Football Club London uses its social channels to share team updates, events, training news, and performance highlights.",
        "Use this content structure to add verified updates when the club confirms them.",
      ],
    },
    {
      slug: "training-season",
      title: "Training season overview",
      excerpt: "Editorial placeholder for upcoming training, player development, and age-group updates.",
      category: "Training",
      date: "2026-10-01",
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1200&q=80",
      content: [
        "This entry is ready for an official training update once verified by the club.",
        "It is designed to highlight weekly activities, competition preparation, and youth development sessions.",
      ],
    },
  ] as NewsArticle[],
  testimonials: [
    {
      quote: "A dedicated football club with a strong focus on youth development and a positive team environment.",
      author: "Parent / guardian review placeholder",
      context: "Pending official approval",
    },
  ],
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/teams", label: "Teams" },
  { href: "/coaches", label: "Coaches" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
  { href: "/join", label: "Join Us", highlight: true },
];

export const pageMeta = {
  title: "Elite Football Club London | Football Training & Youth Development",
  description:
    "Elite Football Club London offers youth football development, team training, and coaching in Walthamstow. View club programmes, teams, and contact details.",
};
