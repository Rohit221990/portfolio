/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rohit's Portfolio",
  description:
    "A passionate professional dedicated to building end-to-end products that contribute to sustainable, scalable social and technical systems—driven by a desire to create meaningful and lasting impact.",
  og: {
    title: "Rohit Jangid Portfolio",
    type: "website",
    url: "http://therohitjangid.in/",
  },
};

//Home Page
const greeting = {
  title: "Rohit Jangid",
  logo_name: "Rohit Jangid",
  subTitle:
    "A passionate professional dedicated to building end-to-end products that contribute to sustainable, scalable social and technical systems—driven by a desire to create meaningful and lasting impact.",
  resumeLink: "",
  portfolio_repository: "https://github.com/Rohit221990/masterPortfolio",
  githubProfile: "https://github.com/Rohit221990?tab=repositories",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Rohit221990",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rohit-jangid-08a63230/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:jangid.rohit70@yahoo.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rohitjangid22/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using MEAN and MERN Stack.",
        "⚡ Developing mobile applications using Flutter and React Native.",
        "⚡ Creating application backend in Node, Express & Flask.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "webRTC + Jssip",
          fontAwesomeClassname: "simple-icons:webrtc",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Serverless Implementation on AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/rohitjangid22/",
    },
    {
      siteName: "Stack Overflow",
      iconifyClassname: "simple-icons:stackoverflow",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://stackoverflow.com/users/5766322/rohit-jangid/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Computer Science",
      subtitle: "B.Tech. in Computer Engineering",
      duration: "2009 - 2013",
      descriptions: [
        "⚡ I have studied software engineering in computer science.",
        "⚡ Apart from this, I have done cources on Networking CCNA",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Domain",
  description:
    "I have worked across multiple domains in the IT industry—including healthcare, insurance, retail, and telecom—as a software developer. I thrive on exploring diverse sectors to gain a deeper understanding of industry-specific challenges and to align technology solutions with real business needs. This cross-domain experience has strengthened my ability to design adaptable, impactful software systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Domain Experience",
      work: true,
      experiences: [
        {
          title: "Associate software Engineer",
          company: "Emids Technology(Health Care)",
          company_url: "",
          logo_path: "emids1.png",
          duration: "Oct2013 - FEB 2016",
          location: "Bangalore, Karnataka",
          description:
            "I worked in the healthcare domain, where I developed an automated tool for processing and analyzing patient data to assist doctors in making informed clinical decisions. My responsibilities included implementing health-related data analysis workflows and ensuring accurate delivery of results to healthcare professionals. I also gained hands-on experience with healthcare data standards such as HL7 and CCD (Continuity of Care Document).",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "XCDIFY Solution PVT LTD.(Health Care)",
          company_url: "",
          logo_path: "xcidify.jpeg",
          duration: "May 2016 - Jul 2018",
          location: "Bangalore, Karnataka",
          description:
            "I have experience working in the healthcare domain, where I was responsible for managing and enhancing a Patient Portal built with Ruby on Rails. I also led the end-to-end implementation of a chatbot to improve patient engagement and support. Additionally, I developed APIs using Node.js and implemented message routing using RabbitMQ to ensure efficient and scalable communication across services.",
          color: "#9b1578",
        },
        {
          title: "Sr. Software Engineer",
          company: "First American India(Title Insurance)",
          company_url: "",
          logo_path: "fai.jpeg",
          duration: "Jul 2018 - Jul 2019",
          location: "Bangalore, Karnataka",
          description:
            "I have worked in the title insurance domain, where I managed end-to-end property transactions using Hyperledger-based blockchain solutions, specifically within the Mutual Indemnity Blockchain framework. My responsibilities included handling policy data on both the UI and server side for individual properties. Additionally, I set up and managed IPFS (InterPlanetary File System) servers, establishing swarm connections and clustering between IPFS nodes to ensure secure and decentralized data storage and sharing.",
          color: "#fc1f20",
        },
        {
          title: "Lead Software Engineer",
          company: "Zensar Technology(Retail)",
          company_url: "",
          logo_path: "zensar.png",
          duration: "Jul 2019 - Nov 2020",
          location: "Bangalore, Karnataka",
          description:
            "In the retail domain, I have worked extensively with the Aptos product, primarily focusing on cloud-based implementations. I have hands-on experience with serverless technologies using AWS and Python, enabling scalable and efficient backend services. Additionally, I designed a local backend server using Node.js and managed its deployment using Docker and Kubernetes for containerization and orchestration.",
          color: "#fc1f20",
        },
        {
          title: "Staff Software Engineer",
          company: "Radisys Technology(Telecom)",
          company_url: "",
          logo_path: "radisys.png",
          duration: "Nov 2020 - Now",
          location: "Bangalore, Karnataka",
          description:
            "Radisys, a Reliance company, empowers service providers to evolve into digital experience providers by offering end-to-end solutions for building and operating highly scalable, high-performance networks. At Radisys, I worked on developing a dashboard portal that enables tenants to manage their services efficiently. I also contributed to the development of a core WebRTC SDK designed to facilitate SIP-based calling, enhancing real-time communication capabilities for end users.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of modern technology tools and frameworks. I particularly enjoy working on Data Science projects, with my most rewarding experiences involving the development and deployment of these solutions as web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "npm packages",
  description:
    "I have worked on few of the packages and uploaded it to the npm repo.",
  avatar_image_path: "npm.png",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "@buddyshift/validate-data",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        "Validate all kind of user info like email validation, Password validate and etc",
      url: "https://www.npmjs.com/package/@buddyshift/validate-data",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Validate Json",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        "Validate Json expose a function, there you can pass the values and return boolean.",
      url: "https://www.npmjs.com/package/@buddyshift/validatejson",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "fotor-ai-202306221391.jpg",
    description:
      "I am active on most major social media platforms and typically respond to messages within 24 hours. I’m open to collaboration and happy to assist with Full Stack Development, problem-solving, and open-source contributions—particularly in technologies like React, Node.js, Angular, and related frameworks.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I am passionate about writing impactful lessons aimed at individual empowerment. My goal is to inspire meaningful personal growth by creating content that resonates deeply and encourages positive transformation at the core level of one’s character.",
    link: "https://hashnode.com/@rohitjangid/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
