import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileText,
  Handshake,
  HeartHandshake,
  House,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ValuePillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const siteConfig = {
  phoneHref: "tel:+61398765432",
  phoneLabel: "(03) 9876 5432",
  email: "hello@livoracare.com.au",
  suburb: "Greater Melbourne",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services/sil", label: "Services" },
  { href: "/referrers", label: "Referrers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const homeServices: FeatureCard[] = [
  {
    title: "Supported Independent Living",
    description:
      "Shared or individual living with structured support that builds routine, confidence, and long-term independence.",
    icon: House,
  },
  {
    title: "In-Home Support",
    description:
      "Daily living assistance delivered with dignity, consistency, and respect for each participant's preferences.",
    icon: HeartHandshake,
  },
  {
    title: "Community Participation",
    description:
      "Social connection, appointments, activities, and transport support designed around meaningful goals.",
    icon: Users,
  },
  {
    title: "Collaborative Care Planning",
    description:
      "Close coordination with families, support coordinators, allied health, and housing partners.",
    icon: Handshake,
  },
];

export const differentiators: FeatureCard[] = [
  {
    title: "Registered NDIS provider",
    description: "Clear governance, compliance, and safeguarding frameworks built into daily operations.",
    icon: BadgeCheck,
  },
  {
    title: "Editorial calm, practical care",
    description: "A welcoming brand experience backed by reliable service delivery and structured processes.",
    icon: Sparkles,
  },
  {
    title: "Multidisciplinary leadership",
    description: "Healthcare, operations, and participant-centred planning working together in one model.",
    icon: Stethoscope,
  },
];

export const silSupports: FeatureCard[] = [
  {
    title: "Personal care",
    description: "Support with hygiene, grooming, dressing, and daily routines without losing autonomy.",
    icon: HeartHandshake,
  },
  {
    title: "Meal preparation",
    description: "Collaborative planning and cooking aligned with health needs, culture, and household rhythm.",
    icon: House,
  },
  {
    title: "Medication routines",
    description: "Safe assistance and monitoring according to participant plans and care instructions.",
    icon: ShieldCheck,
  },
  {
    title: "Community engagement",
    description: "Appointments, social activities, transport, and skill-building beyond the home.",
    icon: Users,
  },
];

export const referralServices = [
  "Supported Independent Living (SIL)",
  "In-Home Support",
  "Community Participation",
  "Specialist Disability Accommodation (SDA)",
  "Complex care / high support",
] as const;

export const referralSteps: ProcessStep[] = [
  {
    title: "Submit the referral",
    description: "Provide referrer, participant, support, and safety information through the secure online form.",
  },
  {
    title: "Triage within one business day",
    description: "The intake team reviews fit, clarifies gaps, and confirms urgency or housing requirements.",
  },
  {
    title: "Match and transition planning",
    description: "Livora coordinates with the referrer and supports a structured onboarding pathway.",
  },
];

export const valuePillars: ValuePillar[] = [
  {
    title: "Healthcare",
    description: "Clinical awareness and practical support routines aligned to participant wellbeing.",
    icon: Stethoscope,
  },
  {
    title: "Research",
    description: "Evidence-informed care planning and a bias toward continuous improvement.",
    icon: FileText,
  },
  {
    title: "Industry",
    description: "Operational discipline that keeps services responsive, sustainable, and accountable.",
    icon: Building2,
  },
  {
    title: "Governance",
    description: "Transparent safeguarding, risk management, and quality oversight at service level.",
    icon: ShieldCheck,
  },
];

export const footerLinks = {
  pages: navItems,
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/participant-rights", label: "Participant Rights" },
    { href: "/complaints", label: "Complaints Process" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export const statHighlights = [
  { value: "24/7", label: "responsive support" },
  { value: "200+", label: "participant journeys supported" },
  { value: "1 day", label: "target referral triage response" },
];

export const ctaStrip = {
  title: "Start your journey with a free consultation.",
  description:
    "Whether you are a participant, family member, or referrer, our team can walk you through the right support pathway.",
  primary: { href: "/referrals/new", label: "Submit a referral" },
  secondary: { href: "/services/sil", label: "Explore SIL" },
  tertiary: { href: siteConfig.phoneHref, label: `Call ${siteConfig.phoneLabel}` },
};

export const legalPageContent: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "Livora Care collects only the information needed to respond to enquiries, assess referrals, and deliver disability supports safely.",
      "Referral and participant information is limited to staff and partners who need it for intake, planning, safeguarding, or service delivery.",
      "If you need details on correction, access, or retention periods, contact the privacy lead using the contact details in the footer.",
    ],
  },
  "participant-rights": {
    title: "Participant Rights",
    body: [
      "Participants have the right to dignity, informed choice, privacy, safety, and culturally respectful support.",
      "Livora Care aims to involve participants, families, and representatives in decisions that affect goals, routines, and support design.",
      "Feedback, complaints, and advocacy access should be available without fear of disadvantage.",
    ],
  },
  complaints: {
    title: "Complaints Process",
    body: [
      "Concerns can be raised by participants, families, workers, or referrers through phone, email, or the website contact pathway.",
      "Livora Care acknowledges complaints promptly, investigates proportionately, and communicates actions or outcomes clearly.",
      "Where appropriate, matters are escalated within governance and safeguarding workflows.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "Website content is provided for general information and does not replace participant-specific clinical or legal advice.",
      "Submitting a referral does not guarantee service availability; intake remains subject to capacity, fit, and risk review.",
      "Livora Care may update website content, pathways, or contact information as services evolve.",
    ],
  },
};

export const heroVisualLabels = {
  home: ["Registered NDIS Provider", "Warm, person-centred care", "Melbourne support pathways"],
  about: ["Healthcare + governance", "Participant-centred philosophy", "Reliable service culture"],
  sil: ["Modern homes", "Daily living routines", "24-hour support options"],
  referrers: ["Fast intake", "Collaborative transition planning", "Clear communication"],
  referral: ["Secure referral pathway", "Structured triage", "Responsive onboarding"],
};

export const quickContact = [
  {
    title: "Call the intake team",
    value: siteConfig.phoneLabel,
    href: siteConfig.phoneHref,
    icon: PhoneCall,
  },
  {
    title: "Email Livora Care",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: ArrowRight,
  },
];
