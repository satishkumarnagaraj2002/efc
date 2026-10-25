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
  location: "Walthamstow, East London",
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
    "England Football accredited club",
    "NLYFL",
    "Peter May Sports Centre, E17",
    "Ages 4–15",
    "Fridays 19:00 – 20:30",
    "First session free",
  ],
  contact: {
    phone: "07424 053 644",
    email: "elitefclondon@gmail.com",
    website: "http://www.elitefclondon.uk/",
    address: "Peter May Sports Centre, 135 Wadham Rd, London E17 4HR",
  },
  socialLinks: {
    instagram: "https://www.instagram.com/elitefootballclublondon/",
    facebook: "https://www.facebook.com/EliteFootballClubLondon/",
    website: "http://www.elitefclondon.uk/",
    tiktok: "https://www.tiktok.com/@elitefootballclublondon",
  },
  stats: [
    { label: "Founded", value: "2017" },
    { label: "Ages", value: "4–15" },
    { label: "Accreditation", value: "England Football" },
    { label: "Training", value: "Fridays 19:00–20:30" },
    { label: "First session", value: "FREE" },
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
      schedule: "Fridays 19:00 – 20:30",
      location: "Peter May Sports Centre, E17",
      category: "Training",
    },
    {
      title: "Football Skills Development",
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1000&q=80",
      description:
        "Focused development sessions covering movement, ball mastery, passing, receiving, and decision-making.",
      ageRange: "U9 & U11",
      schedule: "Fridays 19:00 – 20:30",
      location: "Peter May Sports Centre, E17",
      category: "Development",
    },
    {
      title: "Team Training",
      image:
        "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?auto=format&fit=crop&w=1000&q=80",
      description:
        "Team-based training that supports tactical understanding, communication, and competitive confidence.",
      ageRange: "U9 & U11",
      schedule: "Fridays 19:00 – 20:30",
      location: "Peter May Sports Centre, E17",
      category: "Teams",
    },
  ] as Programme[],
  teams: [
    {
      name: "Elite FC London U9",
      ageGroup: "U9",
      image: "/u9.jpeg",
      coach: "Coach Tom",
      coachImage: "/Tom.jpeg",
      trainingSchedule: "Fridays 19.00 to 20.30",
      description: "A development-focused age group built around technical growth, confidence, and team play.",
      location: "Peter May Sports Centre, 135 Wadham Rd, London E17 4HR",
    },
    {
      name: "Elite FC London U11",
      ageGroup: "U11",
      image: "/u11.jpeg",
      coach: "Coach Jason",
      coachImage: "/Jason.jpeg",
      trainingSchedule: "Fridays 19.00 to 20.30",
      description: "A key stage for advanced decision-making, play patterns, and match competitiveness.",
      location: "Peter May Sports Centre, 135 Wadham Rd, London E17 4HR",
    },
  ] as Team[],
  coaches: <Coach[]>[
    {
      name: "Coach Tom",
      role: "U9 Head Coach",
      image: "/Tom.jpeg",
      bio: "Coach Tom leads our U9 Orange squad, building ball mastery, confidence and a love of the game every Friday evening at Peter May Sports Centre.",
    },
    {
      name: "Coach Jason",
      role: "U11 Head Coach",
      image: "/Jason.jpeg",
      bio: "Coach Jason leads our U11 Orange squad, sharpening decision-making, teamwork and match competitiveness in the NLYFL.",
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

export const venue = {
  name: "Peter May Sports Centre",
  address: "135 Wadham Rd, London E17 4HR",
  pitch: "3G pitch",
  day: "Friday",
  time: "19:00 – 20:30",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Peter+May+Sports+Centre+135+Wadham+Rd+London+E17+4HR",
};

export const timetable = [
  {
    group: "U9 Orange",
    league: "NLYFL",
    coach: "Coach Tom",
    image: "/Tom.jpeg",
    day: "Friday",
    time: "19:00 – 20:30",
    venue: "Peter May Sports Centre",
  },
  {
    group: "U11 Orange",
    league: "NLYFL",
    coach: "Coach Jason",
    image: "/Jason.jpeg",
    day: "Friday",
    time: "19:00 – 20:30",
    venue: "Peter May Sports Centre",
  },
];

export const developmentGroups = [
  { ages: "4–7", label: "Foundation", text: "Fun, movement and first touches in a calm, child-centred setting." },
  { ages: "8–10", label: "Development", text: "Growing technique, game understanding and confidence on the ball." },
  { ages: "11–15", label: "Performance", text: "Competitive football, tactical awareness and pathways to the next level." },
];

export const pathway = [
  { step: "Semi-Pro & Pro Team Trials", text: "Opportunities to trial at the next level" },
  { step: "Team", text: "League, friendly and tournament football" },
  { step: "Development", text: "Developing skills and game understanding" },
  { step: "Foundation", text: "Fun, safe and enjoyable first steps in football" },
];

export const playerStories = [
  {
    name: "David Cira",
    club: "Watford FC",
    text: "Started at Elite FC London aged 4 and signed with Watford FC at the age of 8 in 2024.",
  },
  {
    name: "Alexandra Gutoiu",
    club: "West Ham United Academy",
    text: "Represented the Romania Women's U15 team in a 5–0 win over North Macedonia and is now in the West Ham Academy.",
  },
  {
    name: "Academy pathways",
    club: "Barnet FC & more",
    text: "Our players have progressed to Watford FC, Barnet FC and West Ham United academies.",
  },
];

export const milestones = [
  "Played against the academies of Arsenal, Crystal Palace, Chelsea, West Ham, Stevenage and QPR",
  "Played at Selhurst Park",
  "Played at the Tottenham Hotspur Training Centre",
];

export const seasons = [
  {
    season: "2025/26",
    items: [
      "U10s Orange – NLYFL Winter Cup runners-up (final at Spurs' Training Centre)",
      "U14s Red – 2nd in their league division",
      "Record number of teams: HSC U7/U9/U10, HYFL U12/U14/U16, JPL U10/U12/U14/U16 and NLYFL U10",
    ],
  },
  {
    season: "2024/25",
    items: [
      "U10s – Barnet FC tournament champions",
      "U11s – Inv3ntive FC tournament runners-up",
      "U13s – Switch Sports tournament champions",
    ],
  },
  {
    season: "2023/24",
    items: [
      "U12s – Middlesex Youth Football League division champions",
      "U9s – JPL Middlesex Winter Cup champions, JPL National Winter Cup runners-up and Barnet tournament champions",
      "U10s – Barnet tournament champions and MYFL Cup runners-up",
    ],
  },
  {
    season: "2022/23",
    items: [
      "U8s – Linked Events Junior Tournament and ENG Cup champions",
      "U7s – ENG Cup champions",
      "First Team – league runners-up and Parker Cup champions",
    ],
  },
];

export const fourCorners = [
  { title: "Technical", items: ["Ball mastery", "Practice", "Group play"] },
  { title: "Psychological", items: ["Understanding", "Decision making", "Confidence"] },
  { title: "Physical", items: ["Co-ordination", "Conditioning", "Challenge"] },
  { title: "Social", items: ["Communication", "Self-esteem", "Teamwork"] },
];

export const included = [
  "FA player and parent registration",
  "Access to training facilities",
  "Training equipment",
  "Personal accident and public liability insurance",
  "End-of-season presentation with a trophy for every player",
  "Player of the Month awards",
  "Friendly matches",
  "Match kit(s) for league players",
  "Hive / Barnet FC member discounts",
];

export const kit = [
  "Rain jacket",
  "Tracksuit",
  "T-shirt",
  "Shorts",
  "Socks",
  "Drawstring sack",
];

export const partners = {
  hive: {
    title: "Barnet FC · The Hive Affiliate Club",
    text: "Affiliate membership brings discounted tickets, food, drink, merchandise and parking, plus prize draws, holiday camps and a free annual club day.",
    url: "https://thehivefoundation.com/affiliate-club-membership/",
  },
  fundraising: {
    title: "Easyfundraising",
    text: "Raise free donations for the club whenever you shop online with over 7,000 retailers.",
    url: "https://www.easyfundraising.org.uk/causes/elite-football-club-london/",
  },
  sponsor: {
    title: "Main sponsor: Bute Construction",
    text: "Sponsorship packages include your business name on the FA site, social media advertising and your logo on kit, banners and posters.",
    url: "https://www.buteconstruction.co.uk/",
  },
};

export const supportNote =
  "No child is ever removed from the club because of financial difficulty. Please talk to us in advance and we will do our best to help. A sibling discount is also available.";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/timetable", label: "Timetable" },
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
    "Elite Football Club London offers youth football for ages 4–15 in East London. Friday training at Peter May Sports Centre, E17 — your first session is free.",
};
