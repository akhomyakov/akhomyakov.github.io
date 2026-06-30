import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
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
  title: 'Andrey Khomyakov — AI Networking and Infrastructure Strategy',
  description:
    'Infrastructure architect and product strategist at Netris. I help AI cloud operators, platform teams, and infrastructure leaders make complex networking easier to deploy, operate, and trust.',
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
  name: `I reduce the cognitive load of complex infrastructure.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Through infrastructure architecture, product strategy, and technical communication for modern cloud and AI platforms.
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
      href: '/resume.pdf',
      text: 'Download resume',
      primary: false,
      download: true,
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
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        For more than 20 years, I have worked where infrastructure, operations, architecture, and product meet. I started in hands-on network engineering and grew into data center architecture, hybrid cloud strategy, technical product management, and AI networking enablement. The through line has stayed consistent: reduce complexity so teams can make better technical decisions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        At athenahealth, that meant helping re-architect fragile data center networks into scalable, vendor-neutral platforms that supported growth, reduced cost, and improved operational resilience. At Netris, it means translating customer infrastructure problems into product workflows, deployment models, reference architectures, and enablement materials that help engineers and customers deploy and operate the platform successfully.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Much of my work is translation. Engineering, product, sales, operations, finance, and executive teams often see the same system through different constraints. I help turn those perspectives into shared vocabulary, decision criteria, and technical direction.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I design from the constraints that actually matter: topology, cost, risk, incentives, failure modes, and the people who have to operate the result. The best infrastructure reduces cognitive load. It makes complexity legible enough that teams can trust the system and each other.
      </p>
    </>
  ),
  aboutItems: [
    {label: 'Current', text: 'Product Manager, Netris', Icon: BuildingOffice2Icon},
    {label: 'Focus', text: 'AI networking, multi-tenancy, hybrid cloud', Icon: SparklesIcon},
    {label: 'Specialty', text: 'Product strategy, architecture, enablement', Icon: AcademicCapIcon},
    {label: 'Experience', text: '20+ years', Icon: CalendarIcon},
    {label: 'Location', text: 'Orange County, CA', Icon: MapIcon},
    {label: 'Approach', text: 'Reduce cognitive load in complex systems', Icon: FlagIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Product & Technology Strategy',
    skills: [{name: 'Product strategy'}, {name: 'Infrastructure strategy'}, {name: 'Systems thinking'}],
  },
  {
    name: 'AI & Network Architecture',
    skills: [{name: 'AI networking'}, {name: 'GPU cloud infrastructure'}, {name: 'EVPN-VXLAN fabrics'}],
  },
  {
    name: 'Cloud & Platform Operations',
    skills: [{name: 'Hybrid cloud'}, {name: 'Multi-tenant platforms'}, {name: 'Kubernetes operations'}],
  },
  {
    name: 'Deployment & Enablement',
    skills: [{name: 'Deployment models'}, {name: 'Reference architectures'}, {name: 'Customer enablement'}],
  },
  {
    name: 'Communication & Alignment',
    skills: [{name: 'Technical communication'}, {name: 'Cross-functional translation'}, {name: 'Organizational alignment'}],
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
    date: '2013 - 2024',
    location: 'Professional Certifications',
    title: 'Cisco, AWS, and Leadership Credentials',
    content: (
      <div>
        <p>Formal certifications and training demonstrating infrastructure, cloud, and leadership expertise. Some credentials have since expired, but they reflect the breadth of technical development and professional growth.</p>
        <ul className="mt-3 ml-5 list-disc text-left">
          <li>Cisco Certified Network Professional | 2013 - 2021</li>
          <li>AWS Certified Solutions Architect - Associate | 2017 - 2019</li>
          <li>AWS Certified Developer - Associate | 2017 - 2019</li>
          <li>AWS Certified Advanced Networking - Specialty | 2017 - 2019</li>
          <li>LinkedIn Learning: Becoming an Impactful and Influential Leader | 2021</li>
          <li>LinkedIn Learning: Accounting Foundations | 2023</li>
          <li>LinkedIn Learning: Introduction to Bookkeeping | 2024</li>
        </ul>
      </div>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2025 - Present',
    location: 'Netris Inc.',
    title: 'Product Manager',
    content: (
      <div>
        <p>
          Drive product direction and technical workflows for AI infrastructure networking and multi-tenant data center orchestration platforms.
        </p>
        <ul className="mt-3 ml-5 list-disc text-left">
          <li>Translate customer infrastructure problems into product workflows, user stories, topology models, and deployment guidance for GPU and AI platform operators.</li>
          <li>Define deployment models and reference architectures for Ethernet fabric automation, EVPN/VXLAN networking, server onboarding, tenant isolation, and AI factory workflows.</li>
          <li>Develop technical enablement materials, including documentation, deployment guides, and customer-facing solution content, that help customers deploy and operate the Netris platform successfully.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'September 2015 - October 2024',
    location: 'athenahealth Inc.',
    title: 'Senior Network Design Engineer → Director of Infrastructure Architecture',
    content: (
      <div>
        <p>
          Joined athenahealth as a Senior Network Design Engineer and progressed into Director of Infrastructure Architecture. I led network and infrastructure modernization across hybrid cloud, data centers, and platform operations.
        </p>
        <ul className="mt-3 ml-5 list-disc text-left">
          <li>Designed and led deployment of scalable hybrid cloud infrastructure connecting AWS public cloud, AWS Outposts, Kubernetes environments, and legacy on-premises systems.</li>
          <li>Built AWS EKS platforms and automated CI/CD pipelines using Terraform, Jenkins, and Ansible.</li>
          <li>Re-architected data center networking into spine-leaf fabrics with whitebox switching, reducing per-port cost by 75% and increasing capacity by 4x.</li>
          <li>Implemented EVPN overlay and SDN architectures using VMware NSX-T, and strengthened security zoning, ECMP routing, and operational scalability.</li>
          <li>Delivered resilient, vendor-neutral infrastructure that reduced operational risk, simplified day-two operations, and supported fast business growth.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'March 2011 - March 2015',
    location: 'Santander Bank',
    title: 'Network Team Lead and Architect',
    content: (
      <div>
        <p>
          Designed and operated large-scale multi-entity infrastructure supporting 750+ branches and 1000+ ATMs.
        </p>
        <ul className="mt-3 ml-5 list-disc text-left">
          <li>Built MPLS, VRF, MP-BGP, and DMVPN enterprise networking environments focused on resiliency, scalability, and operational consistency.</li>
          <li>Led WAN modernization, routing architecture, remote connectivity, wireless networking, and firewall infrastructure design.</li>
          <li>Implemented enterprise authentication and access control using 802.1x, TACACS+, and RADIUS.</li>
          <li>Managed Cisco ASA and CheckPoint VSX firewall environments, while mentoring engineers and improving incident response workflows.</li>
        </ul>
      </div>
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
      name: 'Nicholas Kucharek',
      text: 'Andrey is a thoughtful and caring professional with a strong sense of what is right—not just technically, but also in fostering collaboration, knowledge-sharing, and best practices.',
    },
    {
      name: 'Rob Round',
      text: 'He consistently impressed me with his technical expertise. Andrey creates solutions that balance business needs with long-term scalability, and his transparent communication helps teams work through challenges with clarity.',
    },
    {
      name: 'Cameron King',
      text: 'Andrey is an exceptional network architect who comes up with innovative solutions for the future and advances the state of the art within cloud infrastructure engineering.',
    },
    {
      name: 'Brian Lubelczyk',
      text: 'Andrey leads by example with exceptional skill, clear communication, and an inspiring dedication that makes him one of the best team members I have worked with.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Let’s make it easier.',
  description:
    'If your infrastructure or AI networking platform needs clearer decisions, better alignment, and less operational friction, start here. I work with executives and engineering leaders who need practical infrastructure strategy across architecture, product, and operations.',
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
    {
      type: ContactType.LinkedIn,
      text: 'andreykhomyakov',
      href: 'https://www.linkedin.com/in/andreykhomyakov/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/akhomyakov'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/andreykhomyakov/'},
];
