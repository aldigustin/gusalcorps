import { PortfolioData } from '../types/portfolio';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: "Gustin Aldi",
    brandName: "GusAL Corps",
    kicker: "Hi, I'm Gustin",
    headline: "IT Support & Digital Solutions",
    tagline: "Telecommunications Engineering graduate focused on reliable network infrastructure, rapid hardware & software troubleshooting, structured data workflows, and modern digital support systems.",
    bioParagraph1: "I am a Telecommunications Engineering graduate with a strong practical focus on IT support, network systems, and digital workplace operations. My engineering foundation gives me a deep understanding of data transmission, network protocols, switching architectures, and signal integrity, which I translate into dependable day-to-day IT solutions.",
    bioParagraph2: "Throughout my academic and technical work, I have focused on diagnosing complex hardware and software incidents, administering multi-platform operating systems, and streamlining user onboarding and technical issue resolution. I believe high-quality IT support is built on proactive monitoring, clear communication, and meticulous documentation.",
    bioParagraph3: "Beyond basic break-fix support, I actively build web-based administrative utilities, manage structured databases, and design standard operating procedures (SOPs) that prevent recurring bottlenecks. I am currently seeking opportunities to apply my technical precision and problem-solving mindset to IT engineering and technical support teams.",
    degree: "Bachelor of Engineering in Telecommunications Engineering",
    specialization: "IT Infrastructure, Systems Support & Network Administration",
    email: "gustinaldiansyahhatma@gmail.com",
    phone: "+62 812-3456-7890",
    location: "Indonesia (Available for Hybrid & Remote Roles)",
    statusText: "Available for Full-time IT & Engineering Roles",
    githubUrl: "https://github.com/gustinaldi",
    linkedinUrl: "https://linkedin.com/in/gustin-aldi",
    avatarUrl: "/src/assets/images/hero_gustin_portrait_1792640435043.jpg",
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
          tools: ["TeamViewer", "AnyDesk", "RDP", "Ticketing Portals"],
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
  projects: [
    {
      id: "proj-1",
      title: "Enterprise Multi-VLAN Network & Proactive Monitoring",
      category: "networking",
      categoryLabel: "Network Infrastructure",
      summary: "Designed and simulated a segmented multi-department network architecture with secure VLANs, dynamic routing, and centralized monitoring.",
      fullDescription: "Built a complete campus network topology separating Administrative, Guest, and Server subnets using 802.1Q trunking and Layer-3 switching. Integrated SNMP polling to monitor link utilization, packet loss, and interface status in real time. Validated firewall access control lists (ACLs) to enforce strict isolation between guest Wi-Fi and production servers.",
      imageUrl: "/src/assets/images/project_network_infra_1792640435862.jpg",
      technologies: ["Cisco Packet Tracer", "802.1Q VLANs", "SNMP Monitoring", "Wireshark", "Network ACLs", "Subnetting"],
      highlights: [
        "Eliminated broadcast collisions across 4 departments through strict VLAN segmentation",
        "Constructed failover routing paths to ensure high availability for core network services",
        "Authored complete IP allocation plan and network topology documentation"
      ],
      role: "Network Infrastructure Designer & Analyst",
      githubUrl: "https://github.com/gustinaldi/enterprise-vlan-architecture"
    },
    {
      id: "proj-2",
      title: "IT Helpdesk & Incident Resolution Workflow",
      category: "it-support",
      categoryLabel: "IT Support Operations",
      summary: "Standardized ticketing resolution workflows, diagnostic checklists, and knowledge base documentation for rapid issue triage.",
      fullDescription: "Implemented a structured incident management framework based on ITIL fundamentals. Created a reusable repository of troubleshooting scripts and hardware testing checklists (power cycles, RAM tests, NIC verification, OS registry corrections). Cut down average incident resolution times by providing clear Tier-1 self-service guides for routine printer, VPN, and credential issues.",
      imageUrl: "/src/assets/images/project_it_helpdesk_1792640436475.jpg",
      technologies: ["ITIL Best Practices", "Hardware Diagnostics", "Remote Access Tools", "Runbook Documentation", "Windows/Linux Administration"],
      highlights: [
        "Reduced recurrent common user ticket queries through step-by-step visual SOPs",
        "Documented standard diagnostic flowcharts for hardware POST errors and network drops",
        "Established standardized workstation provisioning checklist for new team members"
      ],
      role: "IT Support Specialist & Runbook Author",
      liveUrl: "#contact"
    },
    {
      id: "proj-3",
      title: "Telecommunications Telemetry & Wireless Sensor Station",
      category: "telecom",
      categoryLabel: "Telecommunications & IoT",
      summary: "Built an RF telemetry signal acquisition station recording environmental data with live serial data logging and packet integrity checks.",
      fullDescription: "Combined Telecommunications Engineering signal theory with hands-on microcontroller hardware to capture telemetry data over 433MHz / 2.4GHz wireless bands. Implemented CRC checksum verification to detect RF packet loss, logged incoming data streams into a structured SQLite/CSV database, and visualized transmission stability across varying distance and attenuation barriers.",
      imageUrl: "/src/assets/images/project_telecom_iot_1792640435838.jpg",
      technologies: ["RF Communication", "Microcontrollers", "Signal Modulation", "Python Data Logger", "Oscilloscope Verification", "Serial Protocols"],
      highlights: [
        "Tested digital signal attenuation through concrete and metallic obstacles",
        "Programmed automated parity checks ensuring zero corrupt data writes in logging pipeline",
        "Analyzed RF frequency drift using benchtop spectrum analyzer and oscilloscope"
      ],
      role: "Lead Hardware & Telemetry Developer",
      githubUrl: "https://github.com/gustinaldi/telecom-rf-telemetry"
    },
    {
      id: "proj-4",
      title: "GusAL IT Asset & Maintenance Tracking Portal",
      category: "digital-web",
      categoryLabel: "Digital Solutions & Data",
      summary: "Lightweight internal web portal to manage IT hardware lifecycle, serial inventories, warranty terms, and maintenance audit logs.",
      fullDescription: "Developed a clean, responsive single-page application built for small-to-medium enterprise IT departments. Enables technicians to register hardware assets (laptops, monitors, switches, accessories), log maintenance actions, schedule periodic preventive checkups, and export structured inventory reports in CSV format.",
      imageUrl: "/src/assets/images/project_it_helpdesk_1792640436475.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Data Export / CSV", "Local Storage Persistence", "Search & Filtering"],
      highlights: [
        "Real-time search, multi-field category filters, and asset condition tracking",
        "Client-side data persistence with instant CSV export for auditing and procurement",
        "Responsive interface tailored for technicians working on both mobile phones and desktop benches"
      ],
      role: "Frontend Engineer & Solutions Designer",
      githubUrl: "https://github.com/gustinaldi/gusal-asset-manager"
    }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "IT Support & Systems Technician",
      organization: "GusAL Solutions / IT Services",
      period: "2024 — Present",
      location: "Indonesia",
      description: "Delivering hands-on technical support, hardware repairs, workstation provisioning, and network stability maintenance.",
      achievements: [
        "Triaged and resolved 150+ user technical incidents encompassing Windows/macOS troubleshooting, software licensing, and driver conflicts.",
        "Assembled, tested, and configured custom workstation builds with verified benchmark stability and clean cable management.",
        "Maintained office Wi-Fi and LAN infrastructure, configuring router DHCP scopes, QoS parameters, and backup cellular 4G/5G failovers.",
        "Authored 20+ comprehensive IT runbooks covering remote access setups, software deployment, and peripheral configuration."
      ],
      skillsApplied: ["Hardware Troubleshooting", "OS Configuration", "Router/AP Management", "Technical Runbooks", "Customer Service"]
    },
    {
      id: "exp-2",
      role: "Network Engineering & Telecommunications Intern",
      organization: "Infrastructure & Telecommunications Laboratory",
      period: "2023 — 2024",
      location: "Academic / Technical Campus",
      description: "Assisted laboratory staff in maintaining networking equipment, testing communication channels, and guiding student cohorts during lab practicums.",
      achievements: [
        "Audited rack cabling, labeled patch panels, and terminated RJ-45 Cat5e/Cat6 connections with 100% pinout test passes.",
        "Demonstrated Wireshark packet capture analysis to identify packet loss and latency anomalies across switched network topologies.",
        "Assisted in configuring laboratory Cisco switches and routers for RIP, OSPF, and VLAN trunking lab experiments.",
        "Maintained hardware inventory for 60+ laboratory PCs, diagnostic multimeters, spectrum analyzers, and testing kits."
      ],
      skillsApplied: ["Cisco IOS", "Packet Analysis", "RJ-45 Crimping", "Network Topologies", "Laboratory Inventory"]
    },
    {
      id: "exp-3",
      role: "Digital Operations & Technical Assistant",
      organization: "Campus Computing & Student Services",
      period: "2022 — 2023",
      location: "Campus IT Center",
      description: "Supported campus-wide digital platform adoption, credential provisioning, and classroom multimedia presentation setups.",
      achievements: [
        "Assisted faculty and students with single-sign-on (SSO) credentials, portal troubleshooting, and student email setups.",
        "Supported AV/multimedia audio-visual equipment and wireless projection systems across lecture halls.",
        "Entered and maintained structured academic equipment loan data using advanced Google Sheets formulas."
      ],
      skillsApplied: ["User Access Management", "AV / Multimedia Hardware", "Spreadsheet Modeling", "First-Contact Resolution"]
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
      capstoneProject: "Design and Evaluation of Wireless Telemetry Signal Transmission with Packet Integrity Verification over Impaired Channels."
    }
  ]
};
