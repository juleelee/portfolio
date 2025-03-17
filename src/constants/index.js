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
    hust,
    carrent,
    jobit,
    tripguide,
    ana_donnee,
    fy_cn,
    fy_en,
    fy_fr,
    pim,
    raffinage,
    cs,
    graphe,
    idm_projet,
    idm_mp,
    ro,
    sec,
    tdl,
    hust_report,
    telecom1,
    telecom2,
    telecom3,
    ts,
    cv_en,
    cv_fr,
    img_ana,
    img_tob,
    routeur,
    img_cs,
    img_graphe,
    img_idm_p,
    img_idm_mp,
    img_minishell,
    img_ro,
    img_t1,
    img_t2,
    img_t3,
    img_ts,
    img_tdl,
    logan,
    minji,
    wy,
    gt,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experiences",
      
    },
    {
      id: "hobby",
      title: "Hobby",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "CV_FR",
      path: cv_fr,
    },
    {
      title: "CV_EN",
      path: cv_en,
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

      pdfLinks: [
        { label: "Download Report (Chinese 中文)", link: fy_cn},
        { label: "Download Report (French)", link: fy_fr },
        { label: "Download Report (English)", link: fy_en },
      ],
    },
    {
      title: "Private Lessons",
      company_name: "Discord - Home",
      icon: tutor,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - June 2024",
      points: [
        "Private tutoring in math and physics, providing personalized lessons and tailored explanations.",
        "Effective communication and pedagogical skills to help students grasp challenging concepts.",
        "Adapting teaching methods to individual learning styles.",
      ],
    
    },
    {
      title: "Research Internship",
      company_name: "HUST (Huazhong University of Science and Technology)",
      icon: hust,
      iconBg: "#E6DEDD",
      date: "June 2024 - August 2024",
      points: [
        "Understanding and applying advanced concepts like NeRF, Gaussian Splatting, Scaffold-GS, and Spacetime.",
        "Developing a website for image comparison using PSNR and SSIM metrics.",
        "Deducing pipelines from existing source codes to guide further modifications.",
        "Reading and comprehending scientific papers on advanced topics.",
        "Adapting to new environments and technologies, including Chinese apps like WeChat and Alipay.",
        "Conducting presentations in Chinese, enhancing communication skills in a multicultural setting.",
        "Participating in team-building activities and exploring the local culture, which helped in fostering better team cohesion and understanding of cultural nuances.",

      ],

      pdfLinks: [
        { label: "Download Report", link: hust_report},
      
      ],
      buttonText: "Visit Site",
      buttonLink: "https://juleelee.github.io/splat/",
    
    },

    {
      title: "Graduate Studies",
      company_name: "Georgia Institute of Technology - Aerospace Engineering",
      icon: gt,
      iconBg: "#B3A369",
      date: "Jan 2025 - Present",
      points: [
        "Pursuing advanced coursework in aerospace engineering, focusing on computational methods, fluid dynamics, and control systems.",
        "Engaging in research on computational fluid dynamics (CFD) and machine learning applications in aerospace design.",
        "Collaborating with faculty and researchers on cutting-edge aerospace projects, including UAVs and space propulsion.",
        "Developing and optimizing numerical simulations for aerodynamics and structural analysis.",
        "Utilizing high-performance computing (HPC) resources for large-scale simulations.",
        "Applying deep learning techniques for predictive modeling and anomaly detection in aerospace systems.",
        "Participating in seminars and workshops to stay updated on the latest advancements in aerospace technology.",
        "Enhancing technical communication skills through research presentations and academic publications.",
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
        "We explores Support Vector Machines with Gaussian kernel for classification tasks. Impressive results up to 94.2% accuracy were achieved, showcasing the flexibility and power of this approach.",
      tags: [
        {
          name: "Matlab",
          color: "blue-text-gradient",
        },
      ],
      image: img_ana,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:ana_donnee,
    },
    {
      name: "Projet PIM",
      description:
        "The PIM project aims to implement and compare various ways of storing and utilizing a router's routing table using ADA. Three main programs were developed: a simple router without cache, a router with a cache in linked list form, and a router with a cache in binary tree form.",
      tags: [

        {
          name: "ADA",
          color: "pink-text-gradient",
        },
      ],
      image: routeur,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:pim,
    },
    {
      name: "Projet TOB",
      description:
        "The project creates user-friendly software for quick and efficient refinement creation. It automatically generates structured tables, ensuring quality and clarity in a streamlined interface.",
      tags: [
        {
          name: "JAVA",
          color: "green-text-gradient",
        },
      ],
      image: img_tob,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:raffinage,
    },
    {
      name: "Projet Calcul scientifique",
      description:
        "The project aims to use the subspace iteration method, based on the Rayleigh quotient, to compute the largest eigenvectors and eigenvalues in absolute value of a matrix. Four variations of this method will be analyzed.",
      tags: [
        {
          name: "Matlab",
          color: "blue-text-gradient",
        },
        
      ],
      image: img_cs,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:cs,
    },
    {
      name: "Projet Graphe",
      description:
        "This report explores small satellites orbiting the moon, using Matlab to analyze behavior in varying scenarios. We represent satellites as graphs and analyze properties like average degree. The study covers both unweighted and weighted graphs.",
      tags: [
        {
          name: "Matlab",
          color: "blue-text-gradient",
        },
      ],
      image: img_graphe,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:graphe,
    },
    {
      name: "Projet IDM",
      description:
        "This project aimed to develop tools for data management and automated calculations. While facing challenges, such as incomplete features for data schemas and import/export functions, we gained valuable insights into model-driven engineering technologies.",
      tags: [
        {
          name: "Java",
          color: "green-text-gradient",
        },
      ],
      image: img_idm_p,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:idm_projet,
    },
    {
      name: "Mini projet IDM",
      description:
        "This mini-project aims to verify the coherence of SimplePDL process models, focusing on determining if the described process can terminate. We use model-checking tools on Petri nets through the Tina toolkit, requiring the translation of a process model into a Petri net for analysis.",
      tags: [
      
        {
          name: "Java",
          color: "green-text-gradient",
        },
  
      ],
      image: img_idm_mp,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:idm_mp,
    },
    {
      name: "Projet Recherche opérationnel",
      description:
        "The objective of this practical work is to initially model optimization problems in operational research and subsequently solve them using the GLPK solver.",
      tags: [
        {
          name: "GLPK",
          color: "blue-text-gradient",
        },
      
      ],
      image: img_ro,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:ro,
    },
    {
      name: "Projet SEC",
      description:
        "This project involves applying basic concepts from lectures and practical sessions on process management, signals, and I/O. The goal is to develop a simplified command interpreter with fundamental functionalities akin to Unix shells like bash.",
      tags: [
        {
          name: "C",
          color: "pink-text-gradient",
        },
      ],
      image: img_minishell,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:sec,
    },
    {
      name: "Projet Traduction des languages",
      description:
        "This project extends the RAT language compiler in OCaml, adding new features like pointers, arrays, 'for', loops, and goto statements, building upon functionalities implemented in practical sessions.",
      tags: [
        {
          name: "Ocaml",
          color: "blue-text-gradient",
        },
  
      ],
      image: img_tdl,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:tdl,
    },
    {
      name: "Projet Telecom part.1",
      description:
        "This project initiates a study on baseband transmission, aiming to evaluate and optimize spectral and power efficiency while comparing different transmission chains.",
      tags: [
        {
          name: "Matlab",
          color: "blue-text-gradient",
        },
        
        
      ],
      image: img_t1,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:telecom1,
    },
    {
      name: "Projet Telecom part.2",
      description:
        "This project aims to study and compare carrier frequency transmission chains, specifically in the context of DVB-S and DVB-S2 standards, focusing on modulator implementation and efficiency evaluation.",
      tags: [
        {
          name: "Matlab",
          color: "blue-text-gradient",
        },
        
      ],
      image: img_t2,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:telecom2,
    },
    {
      name: "Projet Telecom part.3",
      description:
        "This project focuses on BPSK transmission over an AWGN channel with a coherent demodulation assumption and ideal frequency/time synchronization. Practical synchronization methods are briefly introduced, and the project aims to implement a synchronization method based on error estimation for correction.",
      tags: [
        {
          name: "Matlab",
          color: "blue-text-gradient",
        },
    
      ],
      image: img_t3,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:telecom3,
    },
    {
      name: "Projet Traitement du signal",
      description:
        "This project involves creating a modem based on ITU's V.21 recommendation using Matlab. The steps include constructing a frequency-modulated signal, demodulating through filtering, and implementing FSK demodulation with and without synchronization errors.",
      tags: [
        {
          name: "Matlab",
          color: "blue-text-gradient",
        },
      
      ],
      image: img_ts,
      source_code_link: "https://github.com/juleelee/Projects.git",
      pdf_link:ts,
    },


  ];

  const drawings = [
    {
      name: "Logan",
      image: logan,
    },
    {
      name: "Minji (NewJeans)",
      image: minji,
    },
    {
      name: "WonYoung (IVE)",
      image: wy,
    },
    // Add more drawings as needed
  ];
  
  export { services, technologies, experiences, testimonials, projects, drawings };
  