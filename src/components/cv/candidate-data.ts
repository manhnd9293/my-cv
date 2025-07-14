export const candidate = {
  name: "Nguyen Duc Manh",
  title: "Software engineer",
  details: {
    title: "Software Engineer",
    address: "Nguyen Huy Tuong Street, Thanh Xuan, Hanoi",
    dob: "09 Feb 1993",
    email: "manhnd9293@gmail.com",
    phone: "0911.148.568",
    github: "https://github.com/manhnd9293",
  },
  summary:
    "I’m an experienced developer with 5 years of experience working in domains: ecommerce, business management. I can work in both backend side using framework as Java Spring boot, NodeJS and in frontend side using React with Typescript. I always try to deliver high quality working code which is maintainable, reliable and have high performance.",
  careerExperience: [
    {
      company: "Uptempo Vietnam",
      title: "Software engineer",
      from: "May 2023",
      to: "Jan 2025",
      responsibility: [
        "Joining engineer team to develop software system for Korean clients",
        "Collaborate with BA and Design Team in Korean to clarify software requirements",
        "Design feature flow, API endpoints and implement, test and fix them if any",
        "Review code for other team members",
        "Setup infrastructure in Google Cloud and AWS to deploy services to environments (development, staging, production)",
        "Setup CI/CD pipeline for projects to automate deploy process.",
        "Using Technology: Java Spring Boot, NodeJS, ReactJS, AWS, Google Cloud, Terraform, Docker, MySQL, Redis",
      ],
    },
    {
      company: "Advesa Digital Solution",
      title: "Backend Software engineer",
      from: "Jan 2022",
      to: "Apr 2023",
      responsibility: [
        "Joining in production team of company to develop a chat application for customer care agents of ecommerce companies to support online customers",
        "Collaborating with Business Analysis, Design and Engineer teams in Canada to clarify software requirements",
        "Design technical solutions and implement, test, and fix them",
        "Review code for other team members",
        "Using technologies: NodeJs, Mongodb, Redis, SocketIO, Docker",
      ],
    },
    {
      company: "Rabiloo Software Company",
      title: "Software engineer",
      from: "Jan 2020",
      to: "Jan 2022",
      responsibility: [
        "Participate in projects to build enterprise systems on web for Japanese Client.",
        "Main responsibilities: develop features, fix bugs, unit test, integration test",
        "Using Technology: Spring Boot, NodeJS, Vuejs, MySQL, AWS",
      ],
    },
  ],
  projects: [
    {
      name: "Saving and investment application",
      description: "The project is a fintech product which allows users to invest their money into financial products like saving certificates, bonds, stocks, gold. Some features I developed are:",
      features: [
        "Saving: handling transactions depositing money to app from users including: creating payment links, listening to event from payment gateway, allocating their fund to financial assets like bonds, calculating transaction fees",
        "Gold trading: handling transactions buying gold from vendors and end users, managing company's gold inventory, handling users' withdrawal physical gold in partner's store",
        "Stock trading: handling transactions placing stock order in odd lots from users, aggregating odd lots orders to even lots orders, integrating with API of stock company for placing order in Stock Exchange",
        "User management: handling EKYC flow for users including integrating with TrueID API, sending email notifications for verifying failures"
      ],
      technology: {
        backend: "Java 17, Spring boot, Hibernate",
        database: "PostgreSQL",
        infrastructure: "NginX, Docker, EC2",
      },
    },
    {
      name: "Project Management System",
      description: "The project is used to manage freelancers information and projects for a Korean client in translations and webtoon industry, which hires freelancers from different countries and do business mostly in Korean market. Some features I developed are:",
      features: [
        "Manging freelancers' information including their contact, education, work experience, skills set, rates",
        "Managing projects information including duration, budget, skill required",
        "Recommend suitable candidates for projects,estimate budget, tracking phases, finalising projects, rating freelancers, managing invoices",
        "Create project epics, ticket tracking, managing upload documents under folder structure",
      ],
      technology: {
        backend: "Java 17, Spring boot, Hibernate",
        database: "Postgresql, Redis",
        infrastructure: "AWS EC2, Load balancer, S3, CDN, RDS",
      },
    },

    {
      name: "HR information management system",
      description:
        "The system manages employee personal data, work shift and payroll for a manufacturing company in Japan with more than 10,0000 workers and office staffs. Some main functions include:",
      features: [
        "Manage employee information about: personal data, contract, departments, timekeeping",
        "Work shift management: show available date, register, accept, reject",
        "Payroll calculation based on timekeeping data",
        "Display and export statistic report for board of management",
      ],
      technology: {
        backend: "Java 11, Spring boot, Hibernate",
        database: "Postgresql, Redis",
        infrastructure: "NginX, Docker, EC2",
      },
    },
  ],
  education: [
    {
      school: "Hanoi University of Science and Technology",
      from: "May 2018",
      to: "July 2020",
      degree: "Engineer in Information Technology, Fulltime, GPA: 3.23 /4",
    },
    {
      school: "Foreign Trade University",
      from: "Sept 2011",
      to: "May 2015",
      degree: "Bsc in Banking & International Finance, Fulltime, GPA: 3.24 /4",
    },
  ],
  certificates: [
    {
      name: "IELTS 7.0 (Listening 7.0, Reading 8.0, Speaking 6.0, Writing 6.5) – IDP Vietnam",
    },
    {
      name: "Machine Learning by Professor Andrew Ng –  Coursera & Stanford University",
    },
    {
      name: "MongoDB data modeling course – MongoDB university",
      link: "https://university.mongodb.com/course_completion/a7ca5edc-6ef0-498b-8e0e-20b7e2b2baaf?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing",
    },
    {
      name: "Problem Solving (intermediate) - Hackerank",
      link: "https://www.hackerrank.com/certificates/bf843be1193a",
    },
  ],
  otherSkills: [
    "Soft skills: teamwork, time management, communication",
    "Figma Design",
    "Working in Agile model",
  ],
  hobbies: ["Playing sports, research technologies"],
};
