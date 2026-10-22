import { PortfolioData } from '../types/portfolio';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: "Gustin Aldi",
    brandName: "GusAL Corps",
    kicker: "Hi, I'm Gustin",
    headline: "IT Support & Digital Solutions",
    tagline: "Telecommunications Engineering graduate focused on reliable Technical Support, rapid hardware & software troubleshooting, structured data workflows, and modern digital support systems.",
    bioParagraph1: "I am a Telecommunications Engineering graduate with a strong practical focus on IT support, network systems, and digital workplace operations. My engineering foundation gives me a deep understanding of data transmission, network protocols, switching architectures, and signal integrity, which I translate into dependable day-to-day IT solutions.",
    bioParagraph2: "Throughout my academic and technical work, I have focused on diagnosing complex hardware and software incidents, administering multi-platform operating systems, and streamlining user onboarding and technical issue resolution. I believe high-quality IT support is built on proactive monitoring, clear communication, and meticulous documentation.",
    bioParagraph3: "Beyond basic break-fix support, I actively build web-based administrative utilities, manage structured databases, and design standard operating procedures (SOPs) that prevent recurring bottlenecks. I am currently seeking opportunities to apply my technical precision and problem-solving mindset to IT engineering and technical support teams.",
    degree: "Bachelor of Engineering in Telecommunications Engineering",
    specialization: "IT Infrastructure, Systems Support & Network Administration",
    email: "gustinaldiansyahhatma@gmail.com",
    phone: "+62 822-9293-7672",
    location: "Indonesia (Available for Hybrid & Remote Roles)",
    statusText: "Available for Full-time IT & Engineering Roles",
    githubUrl: "https://github.com/gustinaldi",
    linkedinUrl: "https://www.linkedin.com/in/gustin-aldiansyah-hatma-16615121b/",
    avatarUrl: "https://raw.githubusercontent.com/aldigustin/FIle-Photo/refs/heads/main/Photo%201.jpeg",
  },
  skillCategories: [
    {
      id: "it-support",
      title: "IT Support & Administration",
      shortDesc: "End-user technical assistance, hardware diagnostics, and workstation provisioning across enterprise environments.",
      skills: [
        {
          id: "sup-1",
          name: "Hardware Diagnostics & Repair",
          level: "Advanced",
          tools: ["Desktop/Laptop internals", "Component Testing", "Peripheral Drivers"],
          description: "Hands-on component replacement (RAM, SSD, PSU, logic boards), thermal repasting, and hardware stress testing."
        },
        {
          id: "sup-2",
          name: "Operating Systems Management",
          level: "Advanced",
          tools: ["Windows 10/11 Pro", "Ubuntu/Debian Linux", "macOS Admin"],
          description: "OS deployment, driver provisioning, registry troubleshooting, and system restore operations."
        },
        {
          id: "sup-3",
          name: "User Access & Identity Basics",
          level: "Proficient",
          tools: ["Active Directory", "Microsoft 365 Admin", "Google Workspace"],
          description: "User onboarding/offboarding, role-based permission delegation, password resets, and license allocation."
        },
        {
          id: "sup-4",
          name: "Remote Support & Service Desk",
          level: "Advanced",
          tools: ["TeamViewer", "AnyDesk", "Parsec"],
          description: "Remote desktop diagnostics, command-line triage, and clear step-by-step guidance for non-technical users."
        }
      ]
    },
    {
      id: "networking-telecom",
      title: "Networking & Telecommunications",
      shortDesc: "Network design fundamentals, protocol analysis, routing and switching, and RF wireless communication principles.",
      skills: [
        {
          id: "net-1",
          name: "TCP/IP & Network Protocols",
          level: "Advanced",
          tools: ["IPv4/IPv6 Subnetting", "DNS/DHCP", "NAT", "Routing Tables"],
          description: "Designing structured IP addressing schemes, subnet calculation, and diagnosing network gateway bottlenecks."
        },
        {
          id: "net-2",
          name: "Switching & Routing Configuration",
          level: "Proficient",
          tools: ["Cisco Packet Tracer", "VLANs", "Trunking (802.1Q)", "Static Routing"],
          description: "Segmenting broadcast domains with 802.1Q VLANs and configuring access switches for secure office LANs."
        },
        {
          id: "net-3",
          name: "Packet Analysis & Diagnostics",
          level: "Proficient",
          tools: ["Wireshark", "Ping/Traceroute", "Netstat", "Nmap"],
          description: "Inspecting packet captures to detect DNS resolution delays, TCP retransmissions, and unauthorized connection attempts."
        },
        {
          id: "net-4",
          name: "Telecommunications & Signal Analysis",
          level: "Proficient",
          tools: ["Digital Modulation", "Fiber Optic Basics", "Oscilloscopes", "Spectrum Analyzers"],
          description: "Core Telecommunications Engineering concepts: signal attenuation, RF propagation, and link budget estimation."
        }
      ]
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting & Root Cause Analysis",
      shortDesc: "Systematic problem isolation, error log auditing, incident triaging, and preventive remediation.",
      skills: [
        {
          id: "trb-1",
          name: "Root Cause Analysis (RCA)",
          level: "Advanced",
          tools: ["Windows Event Viewer", "Linux Syslog", "Fault-Tree Isolation"],
          description: "Methodically tracing application crashes, kernel panics, and BSOD error codes to offending drivers or hardware faults."
        },
        {
          id: "trb-2",
          name: "Network Connectivity Triage",
          level: "Advanced",
          tools: ["Cable Testers", "Wi-Fi Heatmapping", "ARP/DHCP Logs"],
          description: "Identifying physical cable faults, crimping Cat6 RJ-45 terminations, and eliminating Wi-Fi interference blindspots."
        },
        {
          id: "trb-3",
          name: "Security Hygiene & Antivirus Remediation",
          level: "Proficient",
          tools: ["Malwarebytes", "Windows Defender", "USB Sanitization"],
          description: "Safe mode malware cleaning, startup service auditing, and establishing endpoint security guidelines."
        }
      ]
    },
    {
      id: "data-management",
      title: "Data Management & Databases",
      shortDesc: "Database querying, structured data entry, scheduled backups, and accurate technical reporting.",
      skills: [
        {
          id: "dat-1",
          name: "SQL & Relational Data Querying",
          level: "Proficient",
          tools: ["PostgreSQL", "MySQL", "DBeaver", "Relational Schemas"],
          description: "Writing SELECT, JOIN, and aggregation queries to extract system audit logs and inventory counts."
        },
        {
          id: "dat-2",
          name: "Spreadsheet Modeling & Analytics",
          level: "Advanced",
          tools: ["Advanced Excel", "Google Sheets", "Pivot Tables", "VLOOKUP/XLOOKUP"],
          description: "Building automated hardware asset tracking sheets, consumable inventories, and incident resolution metric dashboards."
        },
        {
          id: "dat-3",
          name: "Data Backup & Recovery Protocols",
          level: "Proficient",
          tools: ["NAS Storage", "Cloud Backups", "Rsync", "Disk Imaging (Clonezilla)"],
          description: "Setting up scheduled incremental backup jobs, validating snapshot integrity, and executing bare-metal drive restores."
        }
      ]
    },
    {
      id: "documentation-web",
      title: "Documentation & Web Solutions",
      shortDesc: "Standard operating procedures (SOPs), knowledge base runbooks, and lightweight digital web utilities.",
      skills: [
        {
          id: "doc-1",
          name: "Technical Documentation & SOPs",
          level: "Advanced",
          tools: ["Notion", "Markdown", "Visio / Draw.io", "Runbooks"],
          description: "Authoring unambiguous step-by-step user onboarding guides, incident escalation matrixes, and network architecture diagrams."
        },
        {
          id: "doc-2",
          name: "Web Development & Scripting",
          level: "Competent",
          tools: ["HTML5", "CSS3 / Tailwind", "TypeScript / React", "Bash Scripting"],
          description: "Building responsive frontends and internal team portals for logging support requests and viewing server status."
        },
        {
          id: "doc-3",
          name: "IT Asset Tracking & Inventory",
          level: "Advanced",
          tools: ["Barcode / Asset Tagging", "Lifecycle Audits", "Procurement Specs"],
          description: "Maintaining accurate asset serial registers, tracking warranty expirations, and managing IT department inventory."
        }
      ]
    }
  ],
  projects: [],
  experiences: [
    {
      id: "exp-1",
      role: "IT Support Technician",
      organization: "Universitas Sulawesi Tenggara",
      period: "2024 — 2026",
      location: "Indonesia",
      description: "Delivering hands-on technical support, hardware repairs, workstation provisioning, and network stability maintenance.",
      achievements: [
        "Successfully maintained a 98% data accuracy rate across over 200+ student academic records, ensuring timely updates within each academic semester.",
        "Edited and prepared over 20 event-related documents and presentations annually, achieving high quality and consistency across all materials.",
        "Operated technical equipment for 15+ campus events per semester, maintaining a 95% satisfaction rate among event organizers for technical support and reliability.",
        "Maintained office Wi-Fi and LAN infrastructure, configuring router DHCP scopes, QoS parameters, and backup failovers.",
        "Authored 20+ comprehensive IT runbooks covering remote access setups, software deployment, and peripheral configuration."
      ],
      skillsApplied: []
    },
    {
      id: "exp-2",
      role: "Laboratorium Administrator",
      organization: "PT Jasa Mutu Mineral Indonesia",
      period: "2026",
      location: "Indonesia",
      description: "Managing laboratory equipment infrastructure, digital records, testing devices, and technical operations.",
      achievements: [
        "Maintained 95–98% accuracy in recording sample quantities, details, registration, labeling, and laboratory documentation, handling 2,000+ samples within six months.",
        "Prepared Work Order (WO) forms and coordinated the transfer of registered samples to the sample preparation team.",
        "Coordinated sample handling between the laboratory administration and preparation teams to ensure a smooth and traceable workflow.",
        "Received and reviewed documentation and analytical reports following the completion of sample preparation and testing.",
        "Performed data entry, document control, filing, and other laboratory administrative duties while maintaining accuracy and confidentiality.",
        "Supported the implementation of laboratory quality procedures by ensuring sample and document traceability throughout the testing process."
      ],
      skillsApplied: []
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Engineering (S.T.) in Telecommunications Engineering",
      institution: "Faculty of Electrical & Telecommunication Engineering",
      period: "Graduated",
      location: "Indonesia",
      major: "Telecommunications Engineering",
      gpaOrHonors: "Graduate with Strong Engineering Foundation",
      coreSubjects: [
        "Computer Networks & Data Communications",
        "Telecommunications Switching Systems",
        "Digital Signal Processing",
        "Wireless & Mobile Communications",
        "Fiber Optic Transmission Systems",
        "Microcontroller Systems & Telemetry",
        "Database Systems & Information Technology"
      ],
      capstoneProject: "Classification of Bird Sound Using Deep Learning Based On Compressive Sensing"
    }
  ]
};
