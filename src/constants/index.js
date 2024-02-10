import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    julia,
    ocaml,
    c,
    coq,
    python,
    git,
    matlab,
    java,
    fuyao,
    saintlouis,
    n7,
    tutor,
    carrent,
    jobit,
    tripguide,
    ana_donnee,
    fuyao_cn,
    fuyao_en,
    fuyao_fr,
    pim,
    raffinage,
    cs,
    graphe,
    idm_projet,
    idm_mp,
    ro,
    sec,
    tdl,
    telecom1,
    telecom2,
    telecom3,
    ts,
    cv_en,
    cv_fr,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Coder",
      icon: web,
    },
    {
      title: "Artist",
      icon: mobile,
    },
    {
      title: "Tutor",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Ocaml",
      icon: ocaml,
    },
    {
      name: "CoqIDE",
      icon: coq,
    },
    {
      name: "Matlab",
      icon: matlab,
    },
    {
      name: "Julia",
      icon: julia,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      title: "Preparatory class ",
      company_name: "Lycée Saint-Louis (44 boulevard Saint-Michel 75270 PARIS) ",
      icon: saintlouis,
      iconBg: "#E6DEDD",
      date: "Sept 2020 - July 2022",
      points: [
        "Mastering fundamental mathematical concepts and problem-solving skills.",
        "Acquiring a strong foundation in physics and developing analytical thinking.",
        "Understanding and applying principles of classical mechanics, electromagnetism, and thermodynamics.",
        "Solving complex mathematical problems and proofs.",
        "Understanding the principles of thermodynamics and fluid mechanics.",
        "Practicing time management and handling a demanding workload.",
        "Developing a rigorous and disciplined approach to study and problem-solving.",
      ],
    },
    {
      title: "Engineering Degree",
      company_name: "ENSEEIHT",
      icon: n7,
      iconBg: "#1947ba",
      date: "Sept 2022 - July 2025",
      points: [
        "Mastering advanced concepts in computer science, including algorithms, and machine learning.",
        "Acquiring proficiency in programming languages such as Python, Java, C... for diverse applications.",
        "Collaborating on real-world projects with industry partners to apply theoretical knowledge to practical scenarios.",
        "Participating in internships or work experiences to gain hands-on experience and apply classroom learning to real-world challenges.",
        "Leading and contributing effectively in collaborative, team-based projects.",
      ],
    },
    {
      title: "Internship",
      company_name: "Fuyao Glass Grp. (China)",
      icon: fuyao,
      iconBg: "#f7f7f7",
      date: "June 2023 - Aug 2023",
      points: [
        "Conducted in-depth analysis and research on GDPR compliance, ensuring company adherence to data protection regulations.",
        "Researched and implemented ISO/IEC standards, contributing to the enhancement of quality and security protocols within the organization.",
    ],
    },
    {
      title: "Private Lessons",
      company_name: "Discord - Home",
      icon: tutor,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Now",
      points: [
        "Private tutoring in math and physics, providing personalized lessons and tailored explanations.",
        "Effective communication and pedagogical skills to help students grasp challenging concepts.",
        "Adapting teaching methods to individual learning styles.",
      ],
    
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Projet analyse de donnée",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
      pdf_link:ana_donnee,
    },
    {
      name: "Projet PIM",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
      pdf_link:pim,
    },
    {
      name: "Projet TOB",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      pdf_link:raffinage,
    },
    {
      name: "Projet Calcul scientifique",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      pdf_link:cs,
    },
    {
      name: "Projet Graphe",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      pdf_link:graphe,
    },
    {
      name: "Projet IDM",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      pdf_link:idm_projet,
    },
    {
      name: "Mini projet IDM",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      pdf_link:idm_mp,
    },
    {
      name: "Projet Recherche opérationnel",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      pdf_link:ro,
    },
    {
      name: "Projet SEC",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      pdf_link:sec,
    },
    {
      name: "Projet Traduction des languages",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      pdf_link:tdl,
    },
    {
      name: "Projet Telecom part.1",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      pdf_link:telecom1,
    },
    {
      name: "Projet Telecom part.2",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      pdf_link:telecom2,
    },
    {
      name: "Projet Telecom part.3",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      pdf_link:telecom3,
    },
    {
      name: "Projet Traitement du signal",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      pdf_link:ts,
    },


  ];
  
  export { services, technologies, experiences, testimonials, projects };
  