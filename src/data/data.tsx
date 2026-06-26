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
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
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
  Portfolio: 'portfolio',
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
      href: `#${SectionId.Portfolio}`,
      text: 'Selected work',
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
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Athenahealth data center modernization',
    description:
      'Rebuilt a fragile legacy fabric into a scalable spine-and-leaf network, cutting per-port cost while increasing backbone throughput and resilience for five years of growth.',
    url: `#${SectionId.Portfolio}`,
    image: porfolioImage1,
  },
  {
    title: 'Santander branch resiliency',
    description:
      'Modernized branch connectivity with dynamic broadband VPN and cellular failover, reducing downtime and eliminating costly field dispatches for branch operations.',
    url: `#${SectionId.Portfolio}`,
    image: porfolioImage2,
  },
  {
    title: 'AWS Outpost Kubernetes delivery',
    description:
      'Delivered production-ready Kubernetes infrastructure on AWS Outpost in 90 days, aligning distributed teams, stakeholders, and technical operations across a critical transformation.',
    url: `#${SectionId.Portfolio}`,
    image: porfolioImage3,
  },
  {
    title: 'Netris product strategy and enablement',
    description:
      'Turned platform complexity into operational clarity through documentation, reference architectures, and product decisions that help engineers deploy and operate AI networking infrastructure.',
    url: `#${SectionId.Portfolio}`,
    image: porfolioImage4,
  },
];

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
        Shape product direction and technical enablement for modern AI networking. I translate complex platform capabilities into usable documentation, reference architectures, and product strategy that engineering and operations teams can rely on.
      </p>
    ),
  },
  {
    date: 'October 2024 - Present',
    location: 'Stratovium',
    title: 'Fractional IT Executive',
    content: (
      <p>
        Help leaders bridge business priorities and infrastructure execution without the overhead of full-time engagement. I focus on clarity, alignment, and practical outcomes.
      </p>
    ),
  },
  {
    date: 'May 2015 - September 2022',
    location: 'athenahealth Inc.',
    title: 'Director of Infrastructure Architecture',
    content: (
      <p>
        Led hybrid cloud architecture, network modernization, and operational improvements for a global healthcare platform. My team built systems that were easier to operate, audit, and scale.
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
