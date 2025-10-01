export const resumeData = {
  personal: {
    name: "RASHAD WASHINGTON",
    title: "Principal Systems Analyst",
    location: "Missouri City, TX",
    email: "rashad@justrashad.com",
    phone: "(832) 498-3852",
    website: "http://www.justrashad.com"
  },
  levels: [
    {
      id: 0,
      name: "Introduction",
      skills: [
        { name: "Leadership", level: "EXPERT" },
        { name: "System Administration", level: "EXPERT" },
        { name: "Problem Solving", level: "EXPERT" },
        { name: "Team Management", level: "ADVANCED" }
      ]
    },
    {
      id: 1,
      name: "Technical Skills",
      skills: [
        { name: "Red Hat Linux", level: "EXPERT" },
        { name: "Ubuntu", level: "EXPERT" },
        { name: "AIX", level: "ADVANCED" },
        { name: "Solaris", level: "ADVANCED" },
        { name: "Windows Server", level: "INTERMEDIATE" }
      ]
    },
    {
      id: 2,
      name: "Current Role",
      experience: [
        {
          id: 1,
          title: "Principal Application Systems Analyst",
          company: "M.D. Anderson Cancer Center",
          period: "08/2008 – PRESENT",
          location: "HOUSTON, TX",
          description: "Lead a team of 8 IT professionals in designing and administering Unix-style computer systems (Red Hat, Ubuntu, AIX, Solaris), overseeing 2000+ servers. Architect and deploy cutting-edge Research Kubernetes clusters and administer high-performance parallel systems, including Nvidia DGX H100, A100 servers, and Dell servers supporting VMware virtualization.",
          skills: [
            { name: "SYSTEM ADMIN", percentage: 70, color: "#FF6B35" },
            { name: "LEADERSHIP", percentage: 20, color: "#004E89" },
            { name: "AUTOMATION", percentage: 10, color: "#009B72" }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Previous Experience",
      experience: [
        {
          id: 2,
          title: "Level 2 Systems Administrator",
          company: "IBM",
          period: "06/2001 - 07/2008",
          location: "RESEARCH TRIANGLE PARK, NC",
          description: "Provided high-quality 2nd level server support for 500+ corporate clients in a heterogeneous environment (AIX, Linux, Solaris, Windows 2000/2003 Server Family). Managed SLA-driven alerts using customized monitoring software, ensuring 99% uptime and availability of services for each client.",
          skills: [
            { name: "SUPPORT", percentage: 60, color: "#FF6B35" },
            { name: "MONITORING", percentage: 25, color: "#004E89" },
            { name: "TROUBLESHOOTING", percentage: 15, color: "#009B72" }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Education & Certifications",
      awards: [
        {
          title: "Bachelor of Science in Computer Science",
          organization: "Grambling State University",
          date: "08/1997 – 05/2001",
          description: "GRAMBLING, LA"
        },
        {
          title: "Red Hat Certified System Administrator",
          organization: "Red Hat",
          date: "Current",
          description: "Certificate No. 100-139-179"
        }
      ]
    },
    {
      id: 5,
      name: "Contact",
      contact: {
        email: "rashad@justrashad.com",
        phone: "(832) 498-3852",
        location: "Missouri City, TX 77459, United States",
        website: "http://www.justrashad.com"
      }
    }
  ]
};

export default resumeData;