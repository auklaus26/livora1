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

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const siteConfig = {
  phoneHref: "tel:+61 0416 914 666",
  phoneLabel: "+61 0420 706 889",
  email: "info@livoracare.com.au",
  suburb: "Melbourne, Victoria",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services/sil", label: "NDIS Services" },
  { href: "/referrers", label: "Referral" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const homeServices: FeatureCard[] = [
  {
    title: "Supported Independent Living (SIL)",
    description:
      "Structured supports that assist participants to live safely and independently in a shared or supported home environment.",
    icon: House,
  },
  {
    title: "Daily Personal Care",
    description:
      "Respectful assistance with personal routines, mobility, and everyday activities delivered with dignity and care.",
    icon: HeartHandshake,
  },
  {
    title: "Community Participation",
    description:
      "Support to access social, recreational, and community activities that build confidence and connection.",
    icon: Users,
  },
  {
    title: "Household Supports",
    description:
      "Help with maintaining a safe and organised home, including cleaning, meal preparation, and laundry.",
    icon: Handshake,
  },
];

export const differentiators: FeatureCard[] = [
  {
    title: "Participant dignity and choice",
    description: "Supports are tailored to each participant's goals, preferences, cultural background, and everyday routines.",
    icon: BadgeCheck,
  },
  {
    title: "Reliable and responsive delivery",
    description: "Professional governance, experienced staff, and dependable service coordination support consistent care.",
    icon: Sparkles,
  },
  {
    title: "Collaborative professional practice",
    description: "We work closely with support coordinators, clinicians, families, and allied health professionals.",
    icon: Stethoscope,
  },
];

export const silSupports: FeatureCard[] = [
  {
    title: "Personal care",
    description: "Assistance with personal routines that supports dignity, confidence, and day-to-day wellbeing.",
    icon: HeartHandshake,
  },
  {
    title: "Daily routines",
    description: "Structured support that helps participants prepare for the day, maintain routines, and build independence.",
    icon: House,
  },
  {
    title: "Household responsibilities",
    description: "Guidance with meal preparation, shared living tasks, and maintaining a safe home environment.",
    icon: ShieldCheck,
  },
  {
    title: "Community engagement",
    description: "Support to stay connected with appointments, social activities, and meaningful community participation.",
    icon: Users,
  },
];

export const referralServices = [
  "Supported Independent Living (SIL)",
  "Assistance with Daily Personal Activities",
  "Assistance with Daily Life Tasks in Shared Living",
  "Community Participation",
  "Development of Daily Living and Life Skills",
  "Household Tasks",
  "Transport Assistance",
  "Group or Centre-Based Activities",
  "Other",
] as const;

export const referralSteps: ProcessStep[] = [
  {
    title: "Share participant information",
    description: "Submit the referral form with participant details, requested supports, and any risk or safety considerations.",
  },
  {
    title: "Discuss suitability together",
    description: "Our team reviews the referral and contacts the referrer or participant to confirm service suitability and availability.",
  },
  {
    title: "Plan the next steps",
    description: "Where appropriate, we arrange a free consultation and develop a service agreement and onboarding plan.",
  },
];

export const valuePillars: ValuePillar[] = [
  {
    title: "Healthcare and Clinical Experience",
    description: "Professional experience in healthcare and hospital environments informs safe care practices and participant wellbeing.",
    icon: Stethoscope,
  },
  {
    title: "Biomedical and Research Expertise",
    description: "Advanced research backgrounds bring an analytical, evidence-informed approach to governance and service planning.",
    icon: FileText,
  },
  {
    title: "Healthcare Industry Experience",
    description: "Regulatory compliance, risk management, and quality assurance experience strengthens accountable service delivery.",
    icon: Building2,
  },
  {
    title: "Corporate Governance",
    description: "Structured organisational systems, policies, and quality frameworks guide consistent and safe supports.",
    icon: ShieldCheck,
  },
];

export const footerLinks = {
  pages: navItems,
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/participant-rights", label: "Participant Rights" },
    { href: "/complaints", label: "Complaints & Feedback" },
    { href: "/terms", label: "Terms and Conditions" },
  ],
};

export const statHighlights = [
  { value: "24/7", label: "focus on safety dignity and respect" },
  { value: "1:1", label: "personalised support planning" },
  { value: "100%", label: "commitment to participant-centred care" },
];

export const ctaStrip = {
  title: "Start with a free consultation.",
  description:
    "Participants, families, and referrers can speak with our team about support needs, available services, and the most appropriate next steps.",
  primary: { href: "/contact#free-consultation", label: "Book a Consultation" },
  secondary: { href: "/services/sil", label: "Learn More About SIL" },
  tertiary: { href: siteConfig.phoneHref, label: `Call ${siteConfig.phoneLabel}` },
};

export const legalPageContent: Record<
  string,
  { title: string; description?: string; sections: LegalSection[] }
> = {
  privacy: {
    title: "Privacy Policy",
    description: "Last updated: April 12, 2026",
    sections: [
      {
        heading: "Our Commitment to Privacy",
        paragraphs: [
          "Livora Care recognises that privacy and confidentiality are essential components of respectful and ethical service delivery. We are committed to protecting the personal information of participants, families, carers, staff members and community partners who interact with our organisation.",
          "This Privacy Policy explains how Livora Care collects, uses, stores and protects personal information. Our practices are guided by the Privacy Act 1988 (Cth) and the Australian Privacy Principles, which establish standards for the responsible handling of personal information.",
        ],
      },
      {
        heading: "Collection of Personal Information",
        paragraphs: [
          "Livora Care may collect personal information when individuals interact with our organisation through our website, contact forms, referral submissions, enquiries or feedback channels. The information collected may include contact details, basic identifying information and information voluntarily provided in relation to disability support needs or service enquiries.",
          "Where individuals choose to submit information through the Livora Care website, they do so voluntarily. We only collect information that is reasonably necessary to respond to enquiries, process referrals, or improve the accessibility and effectiveness of our services.",
        ],
      },
      {
        heading: "Use of Personal Information",
        paragraphs: [
          "Personal information collected through the Livora Care website may be used to respond to enquiries, communicate with individuals regarding services, process referrals or feedback submissions, and improve the way our organisation delivers services and communicates with the community.",
          "Livora Care uses personal information responsibly and only for purposes that are directly related to our service operations and organisational responsibilities. We are committed to ensuring that information is used in ways that respect the dignity and privacy of individuals who engage with our organisation.",
        ],
      },
      {
        heading: "Disclosure of Personal Information",
        paragraphs: [
          "Livora Care respects the confidentiality of personal information and does not sell or trade personal information. In limited circumstances, information may be shared with authorised staff members or service partners where this is necessary to respond to enquiries, facilitate service coordination or comply with legal obligations.",
          "Any sharing of personal information is carried out in a manner that prioritises privacy protection and limits disclosure to what is reasonably required.",
        ],
      },
      {
        heading: "Website Data and Analytics",
        paragraphs: [
          "Like many websites, the Livora Care website may collect limited anonymous data to help us understand how visitors use the website. This information may include technical data such as browser type, pages visited or general usage patterns.",
          "This information is used to improve website functionality and accessibility. The data collected through website analytics does not personally identify individual visitors.",
        ],
      },
      {
        heading: "Data Security",
        paragraphs: [
          "Livora Care takes appropriate steps to safeguard personal information against misuse, loss or unauthorised access. We maintain reasonable security measures to protect information collected through our website and ensure that access to information is restricted to authorised personnel.",
          "Although every effort is made to maintain security, no internet transmission can be guaranteed to be completely secure. Individuals who choose to provide personal information online do so with an understanding of these limitations.",
        ],
      },
      {
        heading: "Access and Correction",
        paragraphs: [
          "Individuals have the right to request access to personal information held about them and to request corrections where necessary. Livora Care encourages individuals to contact us if they believe information we hold may be inaccurate or incomplete.",
          "We will take reasonable steps to respond to such requests in a timely and respectful manner.",
        ],
      },
      {
        heading: "Privacy Concerns or Complaints",
        paragraphs: [
          "Livora Care takes privacy concerns seriously. Individuals who have questions or concerns about the handling of their personal information are encouraged to contact us directly so that the matter can be reviewed and addressed appropriately.",
          "If a concern cannot be resolved through our organisation, individuals may seek further assistance from the Office of the Australian Information Commissioner (OAIC).",
        ],
      },
      {
        heading: "Updates to This Policy",
        paragraphs: [
          "Livora Care may update this Privacy Policy from time to time to reflect changes in legislation, organisational practices or website functionality. Updated versions will be published on this page.",
        ],
      },
      {
        heading: "Contact Information",
        paragraphs: [
          `If you have any questions about this Privacy Policy or how personal information is handled, please contact Livora Care Pty Ltd in Melbourne, Victoria by email at ${siteConfig.email} or by phone on ${siteConfig.phoneLabel}.`,
        ],
      },
    ],
  },
  "participant-rights": {
    title: "Participant Rights",
    sections: [
      {
        heading: "Dignity and Respect",
        paragraphs: [
          "Participants have the right to be treated with dignity, respect, fairness and cultural sensitivity in every interaction with Livora Care.",
          "Supports should promote privacy, autonomy, safety and meaningful participation in everyday life.",
        ],
      },
      {
        heading: "Choice and Control",
        paragraphs: [
          "Participants should be involved in decisions about their supports, routines, goals and the way services are delivered.",
          "Livora Care aims to work collaboratively with participants, families, representatives and support networks so that services reflect individual preferences and needs.",
        ],
      },
      {
        heading: "Feedback and Advocacy",
        paragraphs: [
          "Participants can raise feedback, complaints or concerns without fear of disadvantage, and they may seek support from an advocate, family member or representative at any time.",
          "Information about complaints, privacy and safeguarding should remain accessible and easy to understand.",
        ],
      },
    ],
  },
  complaints: {
    title: "Feedback, Complaints and Suggestions",
    sections: [
      {
        heading: "Your Voice Matters to Us",
        paragraphs: [
          "At Livora Care, we believe that listening to participants, families and partners helps us continuously improve our services.",
          "You are welcome to share feedback about your experience, suggestions for improvement, compliments about staff, or concerns and complaints. All feedback is taken seriously and handled respectfully and confidentially.",
          "Making a complaint will never affect the supports you receive.",
        ],
      },
      {
        heading: "How to Contact Us",
        paragraphs: [
          `If you prefer to speak with someone directly, you can contact Livora Care in Melbourne, Victoria by phone on ${siteConfig.phoneLabel} or by email at ${siteConfig.email}.`,
          "You may also choose to submit feedback anonymously through our website contact pathway if you prefer not to identify yourself.",
        ],
      },
      {
        heading: "What Happens Next",
        paragraphs: [
          "A member of the Livora Care team will review your feedback, complaint or concern and respond if contact details have been provided.",
          "We value your input and use feedback to improve the quality and safety of our services.",
        ],
      },
      {
        heading: "If You Are Not Satisfied With Our Response",
        paragraphs: [
          "If you are not comfortable raising your concern with Livora Care, or if you are not satisfied with our response, you may contact the NDIS Quality and Safeguards Commission.",
          "NDIS Commission phone: 1800 035 544. Website: www.ndiscommission.gov.au.",
          "Livora Care promotes a speak-up culture where participants feel safe to raise concerns without fear of retaliation.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    description: "Last updated: April 12, 2026",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "These Terms and Conditions govern the use of the Livora Care website. By accessing or using this website, you acknowledge that you have read, understood and agree to comply with these Terms and Conditions. If you do not agree with these terms, you should discontinue use of the website.",
          "The Livora Care website is operated by Livora Care Pty Ltd, an organisation that provides disability support services in Australia. The website is intended to provide general information about our organisation, our services and ways to contact or collaborate with us. The information provided on this website is designed to support participants, families, carers, referrers and community members who wish to learn more about Livora Care.",
          "Livora Care reserves the right to amend or update these Terms and Conditions at any time. Any changes will be published on this page and will take effect from the date of publication.",
        ],
      },
      {
        heading: "Purpose and Use of the Website",
        paragraphs: [
          "The Livora Care website is intended to provide general information about our disability support services and organisational values. Visitors to this website are welcome to access and use the information for personal, professional or referral purposes provided that the website is used in a lawful and respectful manner.",
          "Users must not use the website in ways that could damage, disable or impair the operation of the website or interfere with the ability of others to access and use the website. Users must not attempt to gain unauthorised access to any part of the website, associated systems or stored data. Any misuse of the website may result in restricted access and may be reported to relevant authorities where appropriate.",
        ],
      },
      {
        heading: "Accuracy of Information",
        paragraphs: [
          "Livora Care makes reasonable efforts to ensure that the information published on this website is accurate, current and relevant at the time of publication. However, as service environments, regulatory requirements and organisational operations may evolve over time, Livora Care does not guarantee that all information on the website will always remain fully up to date.",
          "Information provided on the website is intended to serve as general guidance about our services and organisational approach. Visitors should contact Livora Care directly if they require confirmation of specific information relating to service availability, eligibility or support arrangements.",
        ],
      },
      {
        heading: "Intellectual Property",
        paragraphs: [
          "All content available on this website, including written text, logos, images, design elements and branding materials, is the property of Livora Care Pty Ltd unless otherwise stated. This content is protected by applicable intellectual property laws.",
          "Visitors may access and view website content for personal or informational purposes. However, the reproduction, modification, distribution or publication of website content without the prior written permission of Livora Care is not permitted.",
        ],
      },
      {
        heading: "External Links",
        paragraphs: [
          "The Livora Care website may occasionally contain links to external websites or third-party resources that may be relevant to participants, families or professionals seeking additional information. These links are provided solely for convenience and informational purposes.",
          "Livora Care does not control or take responsibility for the content, privacy practices or reliability of external websites. Users who choose to access external websites do so at their own discretion.",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          "While Livora Care takes reasonable care in maintaining the quality and reliability of the information on this website, we cannot guarantee that the website will always be free from technical errors, interruptions or unforeseen issues.",
          "Livora Care will not be liable for any loss or damage arising from the use of this website, reliance on information provided on the website, or any temporary interruption in website availability.",
        ],
      },
      {
        heading: "Governing Law",
        paragraphs: [
          "These Terms and Conditions are governed by the laws of the State of Victoria, Australia. Any disputes arising in connection with the use of this website will be subject to the jurisdiction of the courts of Victoria.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          `If you have any questions about these Terms and Conditions, you may contact Livora Care Pty Ltd in Melbourne, Victoria by email at ${siteConfig.email} or by phone on ${siteConfig.phoneLabel}.`,
        ],
      },
    ],
  },
};

export const heroVisualLabels = {
  home: ["Registered NDIS Provider", "Person-centred supports", "Melbourne service area"],
  about: ["Healthcare and research", "Strong governance", "Continuous improvement"],
  sil: ["Supported living", "Daily routines", "Participant choice"],
  referrers: ["Responsive communication", "Collaborative care", "Transparent documentation"],
  referral: ["Safe referral pathway", "Participant-centred intake", "Service suitability review"],
};

export const quickContact = [
  {
    title: "Phone",
    value: siteConfig.phoneLabel,
    href: siteConfig.phoneHref,
    icon: PhoneCall,
  },
  {
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: ArrowRight,
  },
];

export const contactFaqs: FaqItem[] = [
  {
    question: "I’m new to the NDIS. Can Livora Care help me understand how supports work?",
    answer:
      "Yes. We can explain how supports are delivered, how services are funded under an NDIS plan, and what types of assistance may suit the participant’s goals and daily needs.",
  },
  {
    question: "Does my family member need to have an NDIS plan before contacting Livora Care?",
    answer:
      "No. You are welcome to contact us even if the participant is still applying for the NDIS or waiting for plan approval.",
  },
  {
    question: "How do I know if Livora Care is the right provider for us?",
    answer:
      "We offer a free initial consultation where we discuss goals, support needs and preferences so you can decide whether our services are the right fit.",
  },
  {
    question: "Can my family member choose their support workers?",
    answer:
      "Yes. Participant choice and control are central principles of the NDIS, and we consider language, gender preference, cultural background and experience when matching workers.",
  },
  {
    question: "What happens after we contact Livora Care?",
    answer:
      "A member of our team will learn more about the participant’s situation and support needs, then arrange a consultation and service planning if our services are suitable.",
  },
];
