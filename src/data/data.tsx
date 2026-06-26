import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Andrey Khomyakov — Product Manager for AI Networking',
  description:
    'Principal product manager and infrastructure strategist at Netris. I help AI cloud operators, platform teams, and infrastructure leaders simplify complex networking, reduce operational risk, and build platforms that are easier to operate.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Andrey Khomyakov.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I help AI cloud operators, platform teams, and infrastructure leaders turn complex data center networking systems into predictable, scalable business platforms.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        At Netris, I sit at the intersection of product strategy, systems architecture, and technical enablement — making infrastructure products feel understandable, predictable, and almost boring to operate.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Resume}`,
      text: 'See experience',
      primary: true,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Connect',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description:
    'Technology has never been the destination for me. It has always been the language through which organizations solve difficult problems. I build clarity where systems, people, and strategy intersect — turning infrastructure decisions into reliable business outcomes.',
  aboutItems: [
    {label: 'Current', text: 'Principal Product Manager, Netris', Icon: BuildingOffice2Icon},
    {label: 'Focus', text: 'AI networking, multi-tenancy, hybrid cloud', Icon: SparklesIcon},
    {label: 'Specialty', text: 'Product strategy, architecture, documentation', Icon: AcademicCapIcon},
    {label: 'Experience', text: '20+ years', Icon: CalendarIcon},
    {label: 'Location', text: 'Orange County, CA', Icon: MapIcon},
    {label: 'Approach', text: 'Systems thinking and operational clarity', Icon: FlagIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Product & Strategy',
    skills: [
      {name: 'Technical product strategy', level: 9},
      {name: 'Reference architecture', level: 8},
      {name: 'Operational enablement', level: 9},
    ],
  },
  {
    name: 'Network & Platform',
    skills: [
      {name: 'EVPN-VXLAN fabrics', level: 9},
      {name: 'Multi-tenant networking', level: 8},
      {name: 'GPU / AI cloud infrastructure', level: 8},
    ],
  },
  {
    name: 'Cloud & Automation',
    skills: [
      {name: 'AWS / Outpost', level: 8},
      {name: 'Kubernetes and day-two operations', level: 8},
      {name: 'APIs and automation', level: 8},
    ],
  },
  {
    name: 'Communication',
    skills: [
      {name: 'Technical documentation', level: 9},
      {name: 'Cross-functional translation', level: 9},
      {name: 'Team enablement', level: 8},
    ],
  },
  {
    name: 'Business Outcomes',
    skills: [
      {name: 'Cost optimization', level: 8},
      {name: 'Compliance and audit readiness', level: 8},
      {name: 'Resilience and reliability', level: 9},
    ],
  },
];

/**
 * Portfolio section
 */
/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2004 - 2007',
    location: 'Herzing University - Madison',
    title: 'B.S. Information Technology',
    content: <p>Foundational systems and infrastructure training that shaped my early approach to engineering, operations, and architecture.</p>,
  },
  {
    date: '2017 - 2019',
    location: 'Amazon Web Services',
    title: 'AWS Certifications',
    content: <p>AWS Solutions Architect, Developer, and Advanced Networking certifications that reinforced cloud-native thinking alongside on-prem networking expertise.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2025 - Present',
    location: 'Netris Inc.',
    title: 'Principal Product Manager',
    content: (
      <p>
        Shape product direction and operator enablement for a commercial AI networking platform. I help translate infrastructure complexity into usable platform strategy, documentation, and customer-facing product outcomes.
      </p>
    ),
  },
  {
    date: 'October 2024 - Present',
    location: 'Stratovium',
    title: 'Fractional IT Executive',
    content: (
      <p>
        Partner with leadership teams to align business strategy, infrastructure execution, and vendor decisions. I help organizations get unstuck, simplify priorities, and make practical technology investments.
      </p>
    ),
  },
  {
    date: 'March 2025 - October 2025',
    location: 'MR2 Solutions',
    title: 'Information Technology Consultant',
    content: (
      <p>
        Served as a trusted technical extension for clients, leading infrastructure design, vendor strategy, and project delivery. I focused on clarity, accountability, and operational efficiency across systems and teams.
      </p>
    ),
  },
  {
    date: 'September 2022 - October 2024',
    location: 'athenahealth Inc.',
    title: 'Director of Infrastructure Architecture',
    content: (
      <p>
        Led hybrid cloud architecture, compliance-ready infrastructure, and core platform modernization. I aligned technical delivery with strategic business goals while making systems easier to operate and audit.
      </p>
    ),
  },
  {
    date: 'May 2017 - September 2022',
    location: 'athenahealth Inc.',
    title: 'Director of Network Architecture',
    content: (
      <p>
        Directed enterprise network strategy, spine-and-leaf data center modernization, and SDN transformation. My team delivered scalable, resilient infrastructure that reduced risk, simplified operations, and supported fast growth.
      </p>
    ),
  },
  {
    date: 'May 2015 - May 2017',
    location: 'athenahealth Inc.',
    title: 'Senior Network Design Engineer',
    content: (
      <p>
        Executed infrastructure modernization projects that reduced last-mile costs and enabled large-scale data center expansion. I built lab-driven validation workflows and enabled the team to operate new network architectures safely.
      </p>
    ),
  },
  {
    date: 'March 2011 - March 2015',
    location: 'Santander Bank',
    title: 'Network Team Lead',
    content: (
      <p>
        Led network operations for 750 branches and 1000+ ATMs, modernizing branch connectivity, deployment standards, and operational workflows. I helped reduce downtime, speed deployments, and improve network compliance.
      </p>
    ),
  },
  {
    date: 'December 2009 - March 2011',
    location: 'Massachusetts College of Pharmacy and Health Sciences',
    title: 'Senior Network Engineer',
    content: (
      <p>
        Managed campus-wide WAN/LAN infrastructure, Wi-Fi, and security systems across multiple buildings. I improved redundancy, standardization, and network visibility while supporting academic and administrative services.
      </p>
    ),
  },
  {
    date: 'October 2009 - December 2009',
    location: 'Cambridge Systematics',
    title: 'Network Engineer',
    content: (
      <p>
        Supported PBX and network infrastructure while optimizing WAN voice quality. I also improved cabling and network documentation to enhance reliability and manageability.
      </p>
    ),
  },
  {
    date: 'August 2008 - September 2009',
    location: 'Integrity Interactive',
    title: 'Network Engineer',
    content: (
      <p>
        Delivered networking, virtualization, and security infrastructure for a multi-site environment. I introduced standardization, monitoring, and redundancy to support growth and improve availability.
      </p>
    ),
  },
  {
    date: 'August 2007 - July 2008',
    location: 'Epic Systems',
    title: 'Network Engineer',
    content: (
      <p>
        Supported enterprise network operations across data centers and campuses, focusing on MAN, QoS, VPN, and wireless reliability. This role shaped my early career in scalable infrastructure and documentation.
      </p>
    ),
  },
  {
    date: 'March 2005 - August 2007',
    location: '5Nines LLC',
    title: 'Data Center Technician',
    content: (
      <p>
        Managed colo and hosting infrastructure, including cabling, servers, networking, and virtualization. I built the foundation for my hands-on approach to resilient infrastructure delivery.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'A practical approach to complexity',
      text: 'The best infrastructure products make extraordinarily complex systems feel understandable, predictable, and almost boring to operate.',
    },
    {
      name: 'Technical clarity matters',
      text: 'Clear documentation and reference architecture are among the highest forms of engineering because they let teams move faster with confidence.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Let’s make it easier.',
  description:
    'If your infrastructure or AI networking platform needs more clarity, more alignment, and less operational friction, start here. I work with executives and engineering leaders who need practical, product-focused infrastructure strategy.',
  items: [
    {
      type: ContactType.Location,
      text: 'Orange County, CA',
      href: 'https://www.google.com/maps/place/Orange+County,+CA',
    },
    {
      type: ContactType.Github,
      text: 'akhomyakov',
      href: 'https://github.com/akhomyakov',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/akhomyakov'},
];
