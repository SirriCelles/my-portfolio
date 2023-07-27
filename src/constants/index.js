import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  // html,
  // css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  angular,
  ionic,
  next,
  sass,
  // docker,
  threejs,
  yogaya,
  camsol,
  gg,
  // metaverse,
  hohm,
  sync,
  // prompt,
  gowaka,
  logo,
  twitter,
  linkedIn,
  instagram,
  github,
  facebook
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ionic Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "SCSS",
    icon: sass,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ionic",
    icon: ionic,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Backend | Nodejs Developer",
    company_name: "CAMSOL  Innovation GmbH, Berlin",
    icon: camsol,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - April 2023",
    points: [
      "Led the backend team in designing and implementing RESTful APIs for a wine-tasting/wine marketplace platform, adhering to best practices and industry standards.",
      "Developed key features like authentication, payments integration, error handling, and logging functionalities using Node.js, Express.js, and MongoDB.",
      "Implemented secure authentication mechanisms with JWT (JSON Web Tokens) and role-based access control (RBAC) for user security and effective permission management.",
      "Successfully integrated payment gateways to facilitate secure and seamless transactions, ensuring compliance with PCI-DSS standards.",
      "Collaborated with cross-functional teams to ensure seamless integration of frontend and backend components.",
      "Actively participated in code reviews, sprint reviews, and Agile development processes to deliver high-quality solutions on time.",
      "Maintained API documentation for knowledge transfer and onboarding of new team members."
    ]
  },
  {
    title: "FullStack Developer",
    company_name: "YOGAYA Inc., Bellevue , WA",
    icon: yogaya,
    iconBg: "#E6DEDD",
    date: "June 2021 - March 2023",
    points: [
      "Led a team in developing a booking and reservation management system for HOHM SLEEP PODS, using Node.js, Angular, MongoDB, and AWS.",
      "Employed Agile methodology to ensure continuous improvement and client satisfaction.",
      "Acted as a key liaison between stakeholders, gathering requirements and aligning deliverables with business objectives.",
      "Orchestrated the entire development lifecycle, managing project planning, resource allocation, timeline adherence, and quality assurance.",
      "Implemented pivotal features such as booking management, reservation tracking, payment integration, user authentication, error handling and logging for an exceptional user experience.",
      "Developed RESTful APIs employing best coding standards.",
      "Integrated frontend components with backend APIs and ensured smooth data flow.",
      "Collaborated with UX/UI designers for seamless development and integration of design elements.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "GO-GROUPS Ltd",
    icon: gg,
    iconBg: "#E6DEDD",
    date: "June 2019 - Dec 2021",
    points: [
      "Developed interactive interfaces an E-learning System for Cameroon National exams using Angular",
      "Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Led the development of user interfaces for an online ticketing and bus seat reservation system using Angular for the web and Ionic for the Mobile.",
      "Collaborated with cross-functional teams to gather requirements, design UI/UX, and implement responsive layouts.",
      "Conducted testing and debugging to ensure high-quality code delivery.",
      "Contributed to maintaining the Go-Groups UI Library, introducing new features and best practices."
    ]
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

const socials = [
  {
    name: 'Github',
    image: github,
    url: 'https://github.com/SirriCelles'
  },
  {
    name: 'linkedin',
    image: linkedIn,
    url: 'https://www.linkedin.com/in/sirricelles'
  },
  {
    name: 'twitter',
    image: twitter,
    url: 'https://twitter.com/SirriCelles?t=fZl0blItFUQDC5vozH47nA&s=09'
  },
  {
    name: 'instagram',
    image: instagram,
    url: 'https://instagram.com/its_cells?igshid=MjEwN2IyYWYwYw=='
  },
  {
    name: 'facebook',
    image: facebook,
    url: 'https://www.facebook.com/Derecelles?mibextid=LQQJ4d'
  },
];

const projects = [
  {
    name: "Hohm",
    description:
      "Web-based platform that allows users to search, book, and manage hohm sleep pods in various institutions, providing a convenient and efficient solution for user needs.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: hohm,
    live_demo_link: "https://hohm.life/",
    source_code_link: "",
  },
  {
    name: "Gowaka",
    description:
      "GoWaka, a Web-based and Mobile-based platform, is a travel booking and seat reservation service for Africa and Africans at home and in the Diaspora",
    tags: [
      {
        name: "Angular",
        color: "head-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "responsiveUI-design",
        color: "green-text-gradient",
      },
      {
        name: "primeng",
        color: "head-gradient",
      }
    ],
    image: gowaka,
    live_demo_link: "https://www.mygowaka.com/",
    source_code_link: "",
  },
  {
    name: "Sync",
    description:
      "Web-based social App that that allows users to create accounts, connect, share, create content, and interact with friends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sync,
    live_demo_link: "https://syncme.netlify.app/",
    source_code_link: "https://github.com/SirriCelles/sync",
  },

  {
    name: "See More",
    description:
      "Visit My GitHub profile to see even more facinating Projects.",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js13",
        color: "green-text-gradient",
      },

      {
        name: "openai",
        color: "pink-text-gradient",
      },
      {
        name: "next-auth",
        color: "green-text-gradient",
      },

      {
        name: "framer-motion",
        color: "head-gradient",
      },
    ],
    image: logo,
    live_demo_link: "",
    source_code_link: "https://github.com/SirriCelles",
  },
  // {
  //   name: "AI Prompts",
  //   description:
  //     "Open-source AI prompting tool to discover, create and share creative prompts for the modern world.",
  //   tags: [
  //     {
  //       name: "next.js13",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "next-auth",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "openai",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: prompt,
  //   live_demo_link: "https://prompt-verse-3r7hzwsdy-sirricelles.vercel.app/",
  //   source_code_link: "https://github.com/SirriCelles/prompt-verse",
  // },
  // {
  //   name: "Meta-Verse",
  //   description:
  //     "Futuristic Web 3 site",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: metaverse,
  //   live_demo_link: "https://meta-realm.vercel.app/",
  //   source_code_link: "https://github.com/SirriCelles/meta-verse",
  // },

];

export { services, technologies, experiences, testimonials, projects, socials };