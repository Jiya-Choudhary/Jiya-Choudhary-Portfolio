import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Jiya Choudhary",
    title: "Computer Science Engineering Student | Software Developer",
    subtitle:
      "I build practical web applications using Python, Flask, SQL, HTML, CSS, and JavaScript. Passionate about backend development, problem solving, and creating software that improves everyday experiences. Currently expanding my skills in Data Structures & Algorithms, AI, and modern web technologies.",
    bio: "I'm a Computer Science Engineering student at Chandigarh Group of Colleges (CGC), Mohali, with a strong interest in backend development and software engineering.I enjoy solving real-world problems by building scalable web applications and automation tools. My experience includes developing Flask-based applications, working with SQL databases, performing data analysis using Pandas, and creating responsive frontend interfaces.Recently, I developed PrintEase, a Smart Tuck Shop Print Portal that allows students to upload documents online, select printing preferences, choose pickup times, and reduce waiting queues on campus.I continuously improve my programming skills through LeetCode, HackerRank, and personal projects while actively exploring Artificial Intelligence and modern software development practices.",
    avatar: "/about/jiya.jpeg",
    location: "Mohali, Punjab, India",
    email: "jiyachoudhary.sas@gmail.com",
    phone: "+918360290629",
    resumeUrl: "https://drive.google.com/file/d/1kNT9mcu0H4R5IBuHOGUQY7z9luYMIFNT/view?usp=drive_link",
    website: "",
    languages: [
      // { name: 'Indonesian', level: 'Native' },
      { name: "English", level: "Limited Working" },
      // { name: 'French', level: 'Elementary' },
    ],
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/Jiya-Choudhary",
        icon: "github",
        username: "Jiya-Choudhary",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/jiya-choudhary29/",
        icon: "linkedin",
        username: "jiya-choudhary29",
      },
      {
        platform: "LeetCode",
        url: "https://leetcode.com/u/Jiya_0129/",
        icon: "code",
        username: "Jiya_0129",
      },
      {
        platform: "HackerRank",
        url: "https://www.hackerrank.com/profile/jiyachoudhary_29",
        icon: "terminal",
        username: "jiyachoudhary_29",
      },
    ],
  },
  projects: [
    {
      id: "project-1",
      slug: "printease-smart-tuck-shop-print-portal",
      title: "PrintEase – Smart Tuck Shop Print Portal",

      description:
        "A Flask-based web application that allows students to upload documents, customize print settings, choose pickup times, and reduce long waiting queues at the campus tuck shop.",

      longDescription:
        "PrintEase is a smart print management portal developed to simplify the printing process for students. Instead of waiting in long queues, students can upload documents online, choose print preferences such as color mode and number of copies, select a convenient pickup time, and place their order in advance. The project provides a modern, responsive interface and streamlines the workflow for both students and the print shop.",

      techStack: [
        "Python",
        "Flask",
        "SQLite",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
      ],

      tools: [
        "VS Code",
        "Git",
        "GitHub",
        "SQLite",
      ],

      status: "completed",

      repoUrl: "https://github.com/Jiya-Choudhary/Smart-Tuck-Shop-Print-Portal",

      demoUrl: "https://smart-tuck-shop-print-portal.onrender.com/",

      startDate: "2026-07-07",

      role: "Frontend Developer & Flask Integration",

      customTimeline: "June 2026",

      team: "Team Project (2 Members)",

      highlights: [
        "Online Document Upload",
        "Print Configuration",
        "Pickup Time Scheduling",
        "Queue Management",
        "Responsive User Interface",
        "SQLite Database Integration",
      ],

      category: "Full Stack Web Development",

      features: [
        {
          title: "Student Features",
          items: [
            "**Document Upload**: Upload PDF and document files directly through the portal.",
            "**Print Preferences**: Choose color or black & white printing, copies, and paper size.",
            "**Pickup Scheduling**: Select a preferred pickup time to avoid waiting.",
          ],
        },

        {
          title: "System Features",
          items: [
            "**Order Management**: Store and manage print requests using SQLite.",
            "**Responsive Design**: Modern UI built with HTML, CSS, Bootstrap, and JavaScript.",
            "**Easy Navigation**: User-friendly workflow from upload to order confirmation.",
          ],
        },

        {
          title: "Project Highlights",
          items: [
            "**Real-world Problem Solving**: Designed to reduce queues in college printing services.",
            "**Database Integration**: Uses Flask with SQLite for storing print requests.",
            "**Full Stack Development**: Developed both frontend and backend of the application.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone Repository",
          code:
            "git clone https://github.com/Jiya-Choudhary/Smart-Tuck-Shop-Print-Portal.git\ncd Smart-Tuck-Shop-Print-Portal",
          type: "code",
        },

        {
          title: "Install Dependencies",
          code: "pip install -r requirements.txt",
          type: "code",
        },

        {
          title: "Run Application",
          code: "python app.py",
          type: "code",
        },

        {
          title: "Open Browser",
          code: "http://127.0.0.1:5000",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem:
            "Students had to wait in long queues for printing documents.",
          solution:
            "Developed an online portal where students can upload documents and schedule pickup times in advance.",
        },

        {
          problem:
            "Managing print requests manually was inefficient.",
          solution:
            "Integrated SQLite with Flask to store and manage print orders efficiently.",
        },

        {
          problem:
            "Creating an easy-to-use interface for students.",
          solution:
            "Designed a clean and responsive frontend using HTML, CSS, Bootstrap, and JavaScript.",
        },
      ],

      images: [
        "/project/printease1.png",
        "/project/printease2.png",
        "/project/printease3.png",
        "/project/printease4.png",
        "/project/printease5.png",
        "/project/printease6.png",
        "/project/printease7.png",
      ],
    },
    {
      id: "project-2",
      slug: "techquiz-ui",

      title: "TechQuiz UI – Interactive Quiz Platform",

      description:
        "A responsive frontend quiz application designed with HTML, CSS, and JavaScript that provides an engaging interface for technical quizzes.",

      longDescription:
        "TechQuiz UI is a modern and responsive quiz platform developed to provide an interactive learning experience. The application features an attractive user interface, category-based quiz selection, dynamic question navigation, score tracking, and responsive design. This project demonstrates frontend development skills, UI/UX principles, and JavaScript-based interactivity.",

      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
      ],

      tools: [
        "VS Code",
        "Git",
        "GitHub",
        "Figma",
      ],

      status: "completed",

      repoUrl: "https://github.com/Jiya-Choudhary/-TechQuiz-UI",

      demoUrl: "https://techneuron-quiz.netlify.app/",

      startDate: "2026-01-10",

      role: "Frontend Developer",

      customTimeline: "January 2026",

      team: "Personal Project",

      highlights: [
        "Responsive User Interface",
        "Interactive Quiz Experience",
        "Dynamic Score Tracking",
        "Modern UI Design",
        "Mobile-Friendly Layout",
      ],

      category: "Frontend Development",

      features: [
        {
          title: "Quiz Features",
          items: [
            "**Interactive Quiz Interface**: Smooth and engaging quiz experience with multiple-choice questions.",
            "**Score Tracking**: Displays user score after quiz completion.",
            "**Category-Based Quizzes**: Organizes quizzes into different technical categories.",
          ],
        },

        {
          title: "User Experience",
          items: [
            "**Responsive Design**: Optimized for desktop, tablet, and mobile devices.",
            "**Clean Navigation**: Easy-to-use interface with intuitive navigation.",
            "**Modern Styling**: Attractive UI built using HTML, CSS, and Bootstrap.",
          ],
        },

        {
          title: "Learning Outcomes",
          items: [
            "**Frontend Development**: Strengthened skills in HTML, CSS, and JavaScript.",
            "**Responsive Web Design**: Implemented layouts adaptable to different screen sizes.",
            "**UI/UX Principles**: Focused on creating an engaging and user-friendly interface.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone Repository",
          code:
            "git clone https://github.com/Jiya-Choudhary/-TechQuiz-UI.git\ncd -TechQuiz-UI",
          type: "code",
        },

        {
          title: "Open Project",
          code:
            "Open index.html in your browser\nor use VS Code Live Server extension.",
          type: "code",
        },

        {
          title: "Run with Live Server",
          code:
            "Right Click → Open with Live Server",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem:
            "Designing an engaging quiz interface that remains simple and intuitive.",
          solution:
            "Created a clean and responsive layout with well-organized question cards and user-friendly navigation.",
        },

        {
          problem:
            "Making the interface responsive across different devices.",
          solution:
            "Used responsive CSS techniques and Bootstrap components to ensure compatibility across desktops, tablets, and smartphones.",
        },

        {
          problem:
            "Providing a smooth user experience during quiz navigation.",
          solution:
            "Implemented JavaScript-based interactions for seamless transitions, score calculation, and responsive user feedback.",
        },
      ],

      images: [
        "/project/quiz1.png",
        "/project/quiz2.png",
      ],
    },
    {
      id: "project-3",
      slug: "spotify-clone-ui",

      title: "Spotify Clone – Music Streaming UI",

      description:
        "A responsive Spotify-inspired music streaming interface built using HTML and CSS, showcasing modern UI design and responsive web development.",

      longDescription:
        "Spotify Clone is a frontend web project that recreates the look and feel of the Spotify music streaming platform. The application focuses on responsive layouts, clean navigation, modern UI components, and an engaging user experience. Through this project, I strengthened my understanding of HTML, CSS, Flexbox, responsive design principles, and frontend development best practices.",

      techStack: [
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Flexbox",
      ],

      tools: [
        "VS Code",
        "Git",
        "GitHub",
        "Netlify",
      ],

      status: "completed",

      repoUrl: "https://github.com/Jiya-Choudhary/HTML-CSS-Project",

      demoUrl: "https://jiya-spotify-clone.netlify.app/",

      startDate: "2025-07-25",

      role: "Frontend Developer",

      customTimeline: "Jul 25, 2025",

      team: "Personal Project",

      highlights: [
        "Spotify-inspired UI",
        "Responsive Design",
        "Modern Layout",
        "HTML & CSS",
        "Music Player Interface",
      ],

      category: "Frontend Development",

      features: [
        {
          title: "User Interface",
          items: [
            "**Spotify-inspired Design**: Modern interface closely resembling the Spotify desktop experience.",
            "**Responsive Layout**: Optimized for desktop, tablet, and mobile screens.",
            "**Music Player Section**: Interactive player layout with playlist and navigation panels.",
          ],
        },

        {
          title: "Frontend Development",
          items: [
            "**Semantic HTML**: Well-structured HTML for accessibility and maintainability.",
            "**Advanced CSS**: Utilized Flexbox, positioning, transitions, and responsive styling.",
            "**Clean UI Components**: Sidebar, navigation bar, playlists, albums, and player controls.",
          ],
        },

        {
          title: "Learning Outcomes",
          items: [
            "**Responsive Web Design**: Developed layouts adaptable to multiple screen sizes.",
            "**CSS Layout Techniques**: Improved proficiency with Flexbox, spacing, and alignment.",
            "**UI Recreation**: Practiced recreating real-world application interfaces with pixel-perfect design.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone Repository",
          code: "git clone https://github.com/Jiya-Choudhary/HTML-CSS-Project.git\ncd HTML-CSS-Project",
          type: "code",
        },

        {
          title: "Open Project",
          code: "Open index.html in your preferred browser.",
          type: "code",
        },

        {
          title: "Run with Live Server",
          code: "Right Click → Open with Live Server",
          type: "code",
        },

        {
          title: "Live Demo",
          code: "https://jiya-spotify-clone.netlify.app/",
          type: "text",
        },
      ],

      challengesAndSolutions: [
        {
          problem:
            "Recreating Spotify's modern user interface while maintaining responsive behavior.",
          solution:
            "Used Flexbox, responsive layouts, and reusable CSS styling techniques to closely match the original design across different screen sizes.",
        },

        {
          problem:
            "Managing alignment and spacing for multiple UI sections.",
          solution:
            "Structured the layout using semantic HTML and CSS Flexbox to ensure consistency and maintainability.",
        },

        {
          problem:
            "Building an attractive interface without JavaScript frameworks.",
          solution:
            "Focused on clean HTML structure and advanced CSS styling to deliver a visually appealing frontend experience.",
        },
      ],

      images: [
        "/project/spotify1.png",
        "/project/spotify2.png",
        "/project/spotify3.png",
      ],
    },
    {
      id: "project-4",
      slug: "banking-system",

      title: "Banking System",

      description:
        "A Python-based banking management system that simulates core banking operations such as deposits, withdrawals, balance inquiries, and account management using object-oriented programming.",

      longDescription:
        "The Banking System is a console-based Python application developed to simulate real-world banking operations. It enables users to create accounts, deposit and withdraw money, check account balances, and handle transactions efficiently. This project strengthened my understanding of object-oriented programming, exception handling, modular programming, and Python fundamentals.",

      techStack: [
        "Python",
        "Object-Oriented Programming",
      ],

      tools: [
        "Python IDLE",
        "VS Code",
        "Git",
        "GitHub",
      ],

      status: "completed",

      repoUrl: "https://github.com/Jiya-Choudhary/Banking-System",

      demoUrl: "",

      startDate: "2026-06-23",

      role: "Python Developer",

      customTimeline: "Jun 23, 2026",

      team: "Personal Project",

      highlights: [
        "Bank Account Management",
        "Deposit & Withdrawal",
        "Balance Inquiry",
        "Exception Handling",
        "OOP Concepts",
      ],

      category: "Python Application",

      features: [
        {
          title: "Banking Features",
          items: [
            "**Account Creation**: Create and manage customer bank accounts.",
            "**Transactions**: Perform deposits and withdrawals securely.",
            "**Balance Inquiry**: Display current account balance.",
          ],
        },

        {
          title: "Programming Concepts",
          items: [
            "**Object-Oriented Programming**: Built using classes and objects.",
            "**Exception Handling**: Prevents invalid banking operations.",
            "**Modular Code**: Organized and reusable program structure.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone Repository",
          code:
            "git clone https://github.com/Jiya-Choudhary/Banking-System.git\ncd Banking-System",
          type: "code",
        },
        {
          title: "Run Application",
          code: "python banking_system.py",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem:
            "Managing multiple banking operations efficiently.",
          solution:
            "Used object-oriented programming to organize account information and banking functions into reusable classes.",
        },
        {
          problem:
            "Handling invalid transactions such as insufficient balance.",
          solution:
            "Implemented exception handling and validation checks to ensure secure and reliable banking operations.",
        },
      ],

      images: [
        "/project/Bank.png",
      ],
    },
    {
      id: "project-5",
      slug: "hospital-management-system",

      title: "Hospital Management System",

      description:
        "A Python-based hospital management system that streamlines patient records, doctor information, appointments, and hospital operations through a structured console application.",

      longDescription:
        "The Hospital Management System is a console-based Python application designed to simplify hospital administration by managing patient records, doctor details, appointments, and related operations. The project demonstrates object-oriented programming, modular code organization, data management, and exception handling while simulating real-world hospital workflows.",

      techStack: [
        "Python",
        "Object-Oriented Programming",
      ],

      tools: [
        "Python IDLE",
        "VS Code",
        "Git",
        "GitHub",
      ],

      status: "completed",

      repoUrl: "https://github.com/Jiya-Choudhary/Hospital-Management-System",

      demoUrl: "",

      startDate: "2026-06-23",

      role: "Python Developer",

      customTimeline: "Jun 23, 2026",

      team: "Personal Project",

      highlights: [
        "Patient Management",
        "Doctor Records",
        "Appointment Management",
        "Hospital Administration",
        "Object-Oriented Programming",
      ],

      category: "Python Application",

      features: [
        {
          title: "Hospital Features",
          items: [
            "**Patient Management**: Add, update, search, and manage patient records.",
            "**Doctor Records**: Store and organize doctor information efficiently.",
            "**Appointment Handling**: Simulate appointment scheduling and management.",
          ],
        },

        {
          title: "Programming Concepts",
          items: [
            "**Object-Oriented Programming**: Built using classes and reusable methods.",
            "**Exception Handling**: Prevents invalid operations and improves reliability.",
            "**Modular Code Structure**: Organized and maintainable Python application.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone Repository",
          code:
            "git clone https://github.com/Jiya-Choudhary/Hospital-Management-System.git\ncd Hospital-Management-System",
          type: "code",
        },

        {
          title: "Run Application",
          code: "python hospital_management.py",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem:
            "Managing multiple hospital entities such as patients, doctors, and appointments.",
          solution:
            "Implemented object-oriented programming to organize data into reusable classes and simplify record management.",
        },

        {
          problem:
            "Maintaining accurate and structured hospital records.",
          solution:
            "Designed modular functions with validation and exception handling to ensure reliable data processing.",
        },
      ],

      images: [
        "/project/Hospital.png",
      ],
    },
    {
      id: "project-6",
      slug: "employee-payroll-system",

      title: "Employee Payroll System",

      description:
        "A Python-based payroll management application that automates employee salary calculations, payroll records, and employee information management through a structured console interface.",

      longDescription:
        "The Employee Payroll System is a console-based Python application developed to simplify payroll management. It enables users to manage employee records, calculate salaries, generate payroll details, and organize employee information efficiently. The project demonstrates object-oriented programming, modular programming, and Python fundamentals while simulating real-world payroll processing.",

      techStack: [
        "Python",
        "Object-Oriented Programming",
      ],

      tools: [
        "Python IDLE",
        "VS Code",
        "Git",
        "GitHub",
      ],

      status: "completed",

      repoUrl: "https://github.com/Jiya-Choudhary/Employee-Payroll-System",

      demoUrl: "",

      startDate: "2026-06-23",

      role: "Python Developer",

      customTimeline: "Jun 23, 2026",

      team: "Personal Project",

      highlights: [
        "Employee Management",
        "Payroll Processing",
        "Salary Calculation",
        "Object-Oriented Programming",
        "Python Fundamentals",
      ],

      category: "Python Application",

      features: [
        {
          title: "Payroll Features",
          items: [
            "**Employee Records**: Add, update, and manage employee information.",
            "**Salary Calculation**: Calculate employee salaries based on payroll data.",
            "**Payroll Management**: Organize and display payroll records efficiently.",
          ],
        },

        {
          title: "Programming Concepts",
          items: [
            "**Object-Oriented Programming**: Designed using classes and reusable methods.",
            "**Exception Handling**: Handles invalid inputs and improves program reliability.",
            "**Modular Programming**: Structured code for better readability and maintenance.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone Repository",
          code:
            "git clone https://github.com/Jiya-Choudhary/Employee-Payroll-System.git\ncd Employee-Payroll-System",
          type: "code",
        },

        {
          title: "Run Application",
          code: "python employee_payroll.py",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem:
            "Managing payroll calculations while keeping employee records organized.",
          solution:
            "Designed reusable classes and functions to separate employee management from payroll processing, improving code organization and scalability.",
        },

        {
          problem:
            "Ensuring accurate salary calculations and handling invalid user input.",
          solution:
            "Implemented validation checks and exception handling to improve calculation accuracy and application reliability.",
        },
      ],

      images: [
        "/project/Payroll.png",
      ],
    },

  ],
  experiences: [
    // 1. PROFESSIONAL EXPERIENCE
    {
      id: "exp-1",

      company: "D4 Community",

      position: "Core Team Member",

      description:
        "Promoted from Volunteer to Core Team Member at D4 Community for actively contributing to technical events, hackathons, and community initiatives. Collaborate with the team to organize developer-focused programs, support participants, and strengthen the student developer ecosystem.",

      responsibilities: [
        "Contribute to planning and execution of technical events and workshops.",
        "Support hackathon management and community engagement activities.",
        "Collaborate with organizers to improve participant experience.",
        "Promote innovation and technical learning within the student community."
      ],

      skills: [
        "Leadership",
        "Community Building",
        "Event Management",
        "Communication",
        "Team Collaboration"
      ],

      startDate: "2026-04-20",
      isOngoing: true,

      location: "CGC University, Mohali",

      type: "volunteer",

      logo: "/assets/d4community.png",

      externalLink: "https://d4community.com"
    },
    {
      id: "exp-2",

      company: "Hack-N-Win 3.0",

      position: "Event Coordinator",

      description:
        "Served as Coordinator for the 24-hour National-Level Hack-N-Win 3.0 Hackathon organized by D4 Community at CGC University. Coordinated event operations, supported participants, and ensured smooth execution throughout the hackathon.",

      responsibilities: [
        "Coordinated event logistics during the 24-hour hackathon.",
        "Worked with organizing teams to manage participants and schedules.",
        "Resolved operational challenges during the event.",
        "Collaborated with volunteers and technical mentors."
      ],

      skills: [
        "Leadership",
        "Event Coordination",
        "Problem Solving",
        "Communication",
        "Team Management"
      ],

      startDate: "2026-03-07",
      endDate: "2026-03-08",

      isOngoing: false,

      location: "CGC University, Mohali",

      type: "volunteer",

      logo: "/assets/hacknwin.png",

      externalLink: "https://www.linkedin.com/posts/jiya-choudhary29_hacknwin3-d4community-cgcuniversity-activity-7437886960951767040-f4QT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJ-G3UBTXnn0vmOhXpW7Q0C1T6TONMa_yo"
    },
    {
      id: "exp-3",

      company: "CGC University Summer Training",

      position: "Python Programming Trainee",

      description:
        "Developed 'PrintEase – Smart Tuck Shop Print Portal' during the Summer Training Program at CGC University. Designed and implemented a complete web application that enables students to upload documents, choose printing options, schedule pickup times, and reduce waiting queues on campus.",

      responsibilities: [
        "Designed responsive frontend using HTML, CSS, Bootstrap and JavaScript.",
        "Developed backend using Flask and SQLite.",
        "Implemented file upload and print order workflow.",
        "Used Git and GitHub for project version control."
      ],

      skills: [
        "Python",
        "Flask",
        "SQLite",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Git"
      ],

      startDate: "2026-06-08",

      endDate: "2026-07-06",

      isOngoing: false,

      location: "CGC University, Mohali",

      type: "internship",

      logo: "/assets/cgc.svg",

      externalLink:
        "https://github.com/Jiya-Choudhary/Smart-Tuck-Shop-Print-Portal"
    },
    {
      id: "exp-4",

      company: "AVATAR 2K26 Ideathon",

      position: "Top 10 Finalist | Team Cerebro Squad",

      description:
        "Recognized among the Top 10 teams at AVATAR 2K26 Ideathon organized by the Computer Science & Engineering Department, CGC University. Our team developed 'SafeRoute AI', an AI-powered route safety analyzer that recommends safer travel routes by considering crime data, lighting conditions, and crowd density.",

      responsibilities: [
        "Researched real-world safety challenges.",
        "Designed the AI-based solution architecture.",
        "Prepared technical presentation and project documentation.",
        "Presented the solution before judges."
      ],

      skills: [
        "Artificial Intelligence",
        "Problem Solving",
        "Research",
        "Presentation",
        "Teamwork"
      ],

      startDate: "2026-04-10",

      endDate: "2026-04-10",

      isOngoing: false,

      location: "CGC University, Mohali",

      type: "volunteer",

      logo: "/assets/avatar.jpeg",

      externalLink: "https://www.linkedin.com/posts/jiya-choudhary29_ideathon-innovation-artificialintelligence-activity-7448994005079474176-QmTO?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJ-G3UBTXnn0vmOhXpW7Q0C1T6TONMa_yo"
    },
    {
      id: "exp-5",

      company: "Google for Developers × ML Chandigarh",

      position: "Hackathon Participant | Team Synergy Squad",

      description:
        "Participated in the GenAI Hackathon Chandigarh 2025 organized by ML Chandigarh in collaboration with Google for Developers. Worked on 'AutoMed Care', an AI-powered healthcare solution designed to improve healthcare accessibility through Generative AI.",

      responsibilities: [
        "Developed AI-based healthcare solution with teammates.",
        "Collaborated on idea validation and feature planning.",
        "Prepared project demonstration and presentation.",
        "Participated in technical mentoring and judging sessions."
      ],

      skills: [
        "Generative AI",
        "Team Collaboration",
        "Problem Solving",
        "Innovation",
        "Presentation"
      ],

      startDate: "2025-12-20",

      endDate: "2025-12-21",

      isOngoing: false,

      location: "CGC University, Mohali",

      type: "volunteer",

      logo: "/assets/mlchandigarh.jpeg",

      externalLink:
        "https://github.com/AutoMed-Care"
    },
  ],

  //   // 2. LEADERSHIP & ORGANIZATIONAL EXPERIENCE
  //   {
  //     id: "lead-1",
  //     company: "ML Chandigarh",
  //     position: "Organizer",
  //     description:
  //       "Connecting tech communities and AI enthusiasts with leading professionals, researchers, and engineers. Hosting live in-person and virtual events on TensorFlow, Deep Learning, and real-world AI applications.",
  //     responsibilities: [
  //       "Organizing and co-hosting ML community events",
  //       "Coordinating speaker sessions and workshop logistics",
  //       "Building partnerships with local tech ecosystem players",
  //       "Driving member engagement around AI and Deep Learning topics",
  //     ],
  //     skills: [
  //       "Community Building",
  //       "Event Management",
  //       "Public Speaking",
  //       "Developer Relations",
  //     ],
  //     startDate: "2024-01-01",
  //     isOngoing: true,
  //     location: "Chandigarh",
  //     type: "volunteer",
  //     logo: "/assets/mlchandigarh.png",
  //     externalLink: "",
  //   },
  //   {
  //     id: "lead-2",
  //     company: "D4 Community",
  //     position: "Organizer",
  //     description:
  //       "An independent, non-profit open-source community centered around four core pillars: Discite (Learn), Develop, Debug, and Deploy. Connecting tech enthusiasts across India through 50+ events and 3 national hackathons.",
  //     responsibilities: [
  //       "Co-founding and leading community strategy and growth",
  //       "Organizing 50+ events and 3 national hackathons",
  //       "Building open-source initiatives and contributor programs",
  //       "Fostering an inclusive tech ecosystem across India",
  //     ],
  //     skills: [
  //       "Community Building",
  //       "Open Source",
  //       "Leadership",
  //       "Event Management",
  //     ],
  //     startDate: "2023-01-01",
  //     isOngoing: true,
  //     location: "India",
  //     type: "volunteer",
  //     logo: "/assets/d4community.png",
  //     externalLink: "https://d4community.com",
  //   },
  // ],
  education: [
    {
      id: "edu-1",
      institution: "CGC University, Mohali, Punjab",
      degree: "Bachelor of Technology",
      major: "Artificial Intelligence & Data Science",
      startDate: "2024",
      endDate: "2028",
      isOngoing: true,
      gpa: "8.85/10",
      activities: ["D4 Community"],
      // achievements: [
      //   "Only alumnus of the college appointed as a member of the Board of Studies (BOS)",
      //   "Organized multiple national-level events",
      // ],
      logo: "/assets/cgc.svg",
    },
    {
      id: "edu-2",
      institution: "Sahibzada Ajit Singh Academy, Ropar, Punjab",
      degree: "12th",
      major: "PCM",
      startDate: "2009",
      endDate: "2024",
      isOngoing: false,
      activities: ["Science Studies"],
      achievements: [
        "Strong foundation in mathematics, physics, Chemistry",
        "Analytical thinking development",
      ],
      logo: "/assets/logo.gif",
    },
  ],
  achievements: [
    // ===========================
    // Awards & Recognition
    // ===========================
    {
      id: "award-1",
      title: "Award of Merit for Academic Excellence",
      issuer: "CGC University, Mohali",
      date: "2026-02-27",
      description:
        "Received the Award of Merit for Academic Excellence in recognition of outstanding academic performance, dedication to learning, and consistent achievement throughout the academic session.",
      category: "award",
      tags: [
        "Academic Excellence",
        "Merit Award",
        "CGC University",
        "Scholar"
      ],
      image: "/assets/Award.jpg",
    },
    // ===========================
    // Certificates
    // ===========================
    {
      id: "cert-1",
      title: "AVATAR 2K26 Ideathon",
      issuer: "Computer Science & Engineering Department, CGC University, Mohali",
      date: "2026-04-10",
      description:
        "Recognized among the Top 10 teams for presenting 'SafeRoute AI – Intelligent Route Safety Analyzer', an AI-powered solution focused on recommending the safest travel routes using crime statistics, lighting conditions, and crowd density analysis.",
      category: "certification",
      tags: ["AI", "Ideathon", "Innovation"],
      image: "/assets/AVATAR.jpg",
    },
    {
      id: "cert-2",
      title: "Promotion to Core Team Member",
      issuer: "D4 Community",
      date: "2026-04-20",
      description:
        "Promoted from Volunteer to Core Team Member in recognition of consistent contribution, leadership, and active involvement in organizing technical events and community initiatives.",
      category: "certification",
      tags: ["Leadership", "Community"],
      image: "/assets/Promotion Letter.png",
    },
    {
      id: "cert-3",
      title: "Python Programming",
      issuer: "Infosys Springboard",
      date: "2025-10-07",
      description:
        "Successfully completed the Python Programming course covering programming fundamentals, functions, file handling, object-oriented programming, and problem solving.",
      category: "certification",
      tags: [
        "Python",
        "Programming",
        "Infosys",
        "OOP"
      ],
      image: "/assets/python.jpg",
    },
    {
      id: "cert-4",
      title: "Java Programming",
      issuer: "Infosys Springboard",
      date: "2026-03-11",
      description:
        "Completed Java Programming course covering object-oriented programming, exception handling, collections, and application development fundamentals.",
      category: "certification",
      tags: [
        "Java",
        "Programming",
        "Infosys",
        "OOP"
      ],
      image: "/assets/java.jpg",
    },
    {
      id: "cert-5",
      title: "Automation Engineering: Innovations Transforming Industry",
      issuer: "ICA Club, CGC University, Mohali",
      date: "2026-04-27",
      description:
        "Participated in a technical workshop exploring Automation Engineering, Data Engineering, Data Science, and Data Analytics, with insights into emerging technologies shaping modern industries.",
      category: "certification",
      tags: [
        "Automation",
        "Data Science",
        "Data Engineering",
        "Workshop"
      ],
      image: "/assets/auto.jpg",
    },
    {
      id: "cert-6",
      title: "Certificate of Merit",
      issuer: "CGC University, Mohali",
      date: "2026-02-27",
      description:
        "Awarded the Certificate of Merit in recognition of outstanding academic performance, dedication to learning, and consistent excellence.",
      category: "award",
      tags: [
        "Academic Excellence",
        "Merit",
        "Achievement"
      ],
      image: "/assets/merit.jpg",
    },
    // ===========================
    // Hackathons
    // ===========================

    {
      id: "hackathon-1",
      title: "GenAI Hackathon Chandigarh 2025",
      issuer: "ML Chandigarh × Google for Developers",
      date: "2025-12-21",
      description:
        "Participated as a member of Team Synergy Squad and developed 'AutoMed Care', an AI-powered healthcare solution during a two-day Generative AI Hackathon.",
      category: "certification",
      tags: [
        "Generative AI",
        "Google for Developers",
        "Hackathon",
        "Team Project"
      ],
      image: "/assets/hack2.jpg",
    },
    {
      id: "hackathon-2",
      title: "Hack-N-Win 3.0 Hackathon",
      issuer: "D4 Community, CGC University",
      date: "2026-03-08",
      description:
        "Appreciated for successfully coordinating the 24-hour National Level Hackathon, leading event operations, volunteer management, and ensuring smooth execution of the hackathon.",
      category: "certification",
      tags: ["Leadership", "Coordinator", "Event Management"],
      image: "/assets/hack1.jpg",
    },
  ],
  techStack: [
    // Languages
    {
      name: "Python",
      icon: "https://cdn.simpleicons.org/python",
      category: "language",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      category: "language",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript",
      category: "language",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "language",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "language",
    },

    // Frameworks
    {
      name: "Flask",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      category: "framework",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      category: "framework",
    },

    // Database
    {
      name: "SQLite",
      icon: "https://cdn.simpleicons.org/sqlite",
      category: "database",
    },

    // Libraries
    {
      name: "NumPy",
      icon: "https://cdn.simpleicons.org/numpy",
      category: "library",
    },
    {
      name: "Pandas",
      icon: "https://cdn.simpleicons.org/pandas",
      category: "library",
    },

    // Version Control
    {
      name: "Git",
      icon: "https://cdn.simpleicons.org/git",
      category: "tool",
    },
    {
      name: "GitHub",
      icon: "https://cdn.simpleicons.org/github",
      category: "tool",
    },

    // API
    // {
    //   name: "Postman",
    //   icon: "https://cdn.simpleicons.org/postman",
    //   category: "tool",
    // },

    // IDE
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      category: "tool",
    },

    // Deployment
    {
      name: "Netlify",
      icon: "https://cdn.simpleicons.org/netlify",
      category: "tool",
    },
    {
      name: "Vercel",
      icon: "https://cdn.simpleicons.org/vercel",
      category: "tool",
    },
  ],
  hardSkills: [
    {
      name: "Full Stack Web Development",
      level: "intermediate",
      category: "software",
      description:
        "Building responsive web applications using Flask, HTML, CSS, Bootstrap and JavaScript.",
    },
    {
      name: "Python Programming",
      level: "advanced",
      category: "software",
      description:
        "Developing desktop applications, automation scripts, and problem-solving programs using Python.",
    },
    {
      name: "Database Management",
      level: "intermediate",
      category: "database",
      description:
        "Designing and managing relational databases using SQLite and SQL queries.",
    },

    {
      name: "Web Scraping",
      level: "intermediate",
      category: "data",
      description:
        "Collecting and processing website data using BeautifulSoup and Requests.",
    },
    {
      name: "Git & GitHub",
      level: "intermediate",
      category: "software",
      description:
        "Managing repositories, version control, branching, and collaborative development.",
    },
    {
      name: "Object-Oriented Programming",
      level: "advanced",
      category: "software",
      description:
        "Applying OOP concepts in Python and Java applications.",
    },
  ],
  softSkills: [
    {
      name: "Leadership",
      description: "Core Team Member at D4 Community and Hackathon Coordinator.",
    },
    {
      name: "Teamwork",
      description: "Collaborated in hackathons, ideathons, and academic projects.",
    },
    {
      name: "Problem Solving",
      description: "Developing practical software solutions for real-world challenges.",
    },
    {
      name: "Communication",
      description: "Confident presenter with experience in technical events and project demonstrations.",
    },
    {
      name: "Time Management",
      description: "Successfully balanced academics, hackathons, and software projects.",
    },
    {
      name: "Adaptability",
      description: "Quick learner of new programming languages and development tools.",
    },
    {
      name: "Critical Thinking",
      description: "Analysing complex problems to build efficient software solutions.",
    },
    {
      name: "Continuous Learning",
      description: "Regularly improving skills through certifications, workshops, and projects.",
    },
  ],
  tools: [
    {
      name: "Visual Studio Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      category: "ide",
    },
    {
      name: "Git",
      icon: "https://cdn.simpleicons.org/git",
      category: "devops",
    },
    {
      name: "GitHub",
      icon: "https://cdn.simpleicons.org/github",
      category: "devops",
    },
    {
      name: "SQLite",
      icon: "https://cdn.simpleicons.org/sqlite",
      category: "other",
    },
    {
      name: "Jupyter Notebook",
      icon: "https://cdn.simpleicons.org/jupyter",
      category: "other",
    },
    {
      name: "Canva",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      category: "design",
    },
    {
      name: "Netlify",
      icon: "https://cdn.simpleicons.org/netlify",
      category: "devops",
    },
    {
      name: "Vercel",
      icon: "https://cdn.simpleicons.org/vercel",
      category: "devops",
    },
  ],
  faqs: [
    {
      question: "What kind of projects do you build?",
      answer:
        "I build full-stack web applications, Python-based automation tools, data analysis projects, and responsive websites. One of my key projects is PrintEase, an online print portal that allows students to upload documents, customize print options, and schedule pickup times.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "My primary tech stack includes Python, Flask, Java, JavaScript, HTML, CSS, Bootstrap, SQLite, NumPy, Pandas, Git, and GitHub. I am continuously improving my skills in full-stack development, REST APIs, and modern web technologies.",
    },
    {
      question: "Are you open to internships or collaborations?",
      answer:
        "Yes! I am actively looking for internship opportunities, collaborative projects, and learning experiences where I can apply my technical skills, contribute to real-world software development, and continue growing as a Software Developer.",
    },
  ],
  blogs: [
    /*
    {
      id: "blog-1",
      slug: "future-of-ai-agents",
      title: "The Future of AI Agents in Enterprise",
      excerpt:
        "How autonomous agents are redefining software architecture and decision-making processes.",
      content: "Detailed exploration of AI agents...",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
      date: "2026-03-20",
      category: "applied-ai",
      tags: ["AI", "Agents", "Enterprise"],
      author: { name: "Jiya", avatar: "/about/jiya.jpeg" },
      readTime: "5",
    },
    {
      id: "blog-2",
      slug: "web3-ux-challenges",
      title: "Overcoming Web3 UX Challenges",
      excerpt:
        "Strategies for building decentralized applications that feel as smooth as Web2.",
      content: "UX in Web3 is critical...",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
      date: "2026-03-15",
      category: "more",
      tags: ["Web3", "Blockchain", "UX"],
      author: { name: "Jiya", avatar: "/about/jiya.jpeg" },
      readTime: "4",
    },
    {
      id: "blog-3",
      slug: "mastering-nextjs-performance",
      title: "Mastering Next.js Performance",
      excerpt:
        "Advanced techniques for optimizing Core Web Vitals in modern React applications.",
      content: "Performance optimization...",
      image:
        "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2000&auto=format&fit=crop",
      date: "2026-03-05",
      category: "software-development",
      tags: ["Next.js", "React", "Performance"],
      author: { name: "Jiya", avatar: "/about/jiya.jpeg" },
      readTime: "6",
    },
    {
      id: "blog-4",
      slug: "ai-driven-security",
      title: "AI-Driven Cybersecurity",
      excerpt:
        "Using deep learning to detect and prevent modern network intrusion.",
      content: "Cybersecurity with AI...",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
      date: "2026-02-28",
      category: "applied-ai",
      tags: ["AI", "Security", "Deep Learning"],
      author: { name: "Jiya", avatar: "/about/jiya.jpeg" },
      readTime: "7",
    },
    {
      id: "blog-5",
      slug: "llm-fine-tuning",
      title: "Fine-Tuning LLMs locally",
      excerpt:
        "A guide to optimizing open-source models using Ollama and LoRA techniques.",
      content: "Local LLM fine-tuning...",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
      date: "2026-02-15",
      category: "applied-ai",
      tags: ["LLM", "Python", "Ollama"],
      author: { name: "Jiya", avatar: "/about/jiya.jpeg" },
      readTime: "8",
    },
    {
      id: "blog-6",
      slug: "smart-contract-security",
      title: "Smart Contract Audit Patterns",
      excerpt: "Common vulnerabilities and how to prevent them in Solidity.",
      content: "Audit patterns...",
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop",
      date: "2026-02-01",
      category: "more",
      tags: ["Solidity", "Ethereum", "Security"],
      author: { name: "Jiya", avatar: "/about/jiya.jpeg" },
      readTime: "5",
    },
    {
      id: "blog-7",
      slug: "modern-state-management",
      title: "Modern State Management in React",
      excerpt:
        "Comparing Zustand, Redux Toolkit, and React Context for large-scale apps.",
      content: "State management...",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
      date: "2026-01-25",
      category: "software-development",
      tags: ["React", "Zustand", "Architecture"],
      author: { name: "Jiya", avatar: "/about/jiya.jpeg" },
      readTime: "4",
    },
    {
      id: "blog-8",
      slug: "iot-edge-computing",
      title: "Edge Computing with ESP32",
      excerpt:
        "Implementing real-time data processing at the edge for industrial IoT.",
      content: "Edge computing...",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
      date: "2026-01-10",
      category: "software-development",
      tags: ["IoT", "ESP32", "Edge"],
      author: { name: "Jiya", avatar: "/about/jiya.jpeg" },
      readTime: "6",
    },
    {
      id: "blog-9",
      slug: "ai-in-healthcare",
      title: "AI Transformation in Healthcare",
      excerpt:
        "How computer vision is assisting in medical diagnostics and data analysis.",
      content: "Healthcare AI...",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
      date: "2026-01-05",
      category: "applied-ai",
      tags: ["Healthcare", "AI", "Ethics"],
      author: { name: "Jiya", avatar: "/about/jiya.jpeg" },
      readTime: "7",
    },
    {
      id: "blog-10",
      slug: "the-architects-manifesto",
      title: "Digital Garden: The Architect's Manifesto",
      excerpt:
        "Reflecting on my journey as an AI Engineer and the philosophy behind building intelligent, scalable systems.",
      content:
        "My journey into the world of technology hasn't been just about code...",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop",
      date: "2026-03-31",
      category: "about-me",
      tags: ["Philosophy", "Engineering", "About Me"],
      author: { name: "Jiya", avatar: "/about/jiya.jpeg" },
      readTime: "5",
    },
    */
  ],
  gallery: [
    /*
    {
      id: "gal-1",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/jiya.jpeg",
      category: "",
    },
    {
      id: "gal-2",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/ioind.jpeg",
      category: "",
    },
    {
      id: "gal-3",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/devfest24.jpeg",
      category: "",
    },
    {
      id: "gal-4",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/iochd.jpeg",
      category: "",
    },
    {
      id: "gal-5",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/hnw2win.jpeg",
      category: "",
    },
    {
      id: "gal-6",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/hnw2g.jpeg",
      category: "",
    },
    {
      id: "gal-7",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/genai.jpeg",
      category: "",
    },
    {
      id: "gal-8",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/mongodb.jpg",
      category: "",
    },
    {
      id: "gal-9",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g1.jpeg",
      category: "",
    },
    {
      id: "gal-10",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g2.jpeg",
      category: "",
    },
    {
      id: "gal-11",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g3.jpeg",
      category: "",
    },
    {
      id: "gal-12",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g4.jpeg",
      category: "",
    },
    {
      id: "gal-13",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g5.jpeg",
      category: "",
    },
    {
      id: "gal-14",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g6.jpeg",
      category: "",
    },
    {
      id: "gal-15",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g7.jpeg",
      category: "",
    },
    {
      id: "gal-16",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g8.jpeg",
      category: "",
    },
    {
      id: "gal-17",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g9.jpeg",
      category: "",
    },
    {
      id: "gal-18",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g10.jpeg",
      category: "",
    },
    {
      id: "gal-19",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g11.jpeg",
      category: "",
    },
    {
      id: "gal-20",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g12.jpeg",
      category: "",
    },
    {
      id: "gal-21",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g13.jpeg",
      category: "",
    },
    {
      id: "gal-22",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g14.jpeg",
      category: "",
    },
    {
      id: "gal-23",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g15.jpeg",
      category: "",
    },
    {
      id: "gal-24",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g16.jpeg",
      category: "",
    },
    {
      id: "gal-25",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g17.jpeg",
      category: "",
    },
    {
      id: "gal-26",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g18.jpeg",
      category: "",
    },
    {
      id: "gal-27",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g19.jpeg",
      category: "",
    },
    {
      id: "gal-28",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g20.jpeg",
      category: "",
    },
    {
      id: "gal-29",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/jiya.jpeg",
      category: "",
    },
    {
      id: "gal-30",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g22.jpeg",
      category: "",
    },
    {
      id: "gal-31",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g23.jpeg",
      category: "",
    },
    {
      id: "gal-32",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g24.jpeg",
      category: "",
    },
    {
      id: "gal-33",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g25.jpeg",
      category: "",
    },
    {
      id: "gal-34",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g26.jpeg",
      category: "",
    },
    {
      id: "gal-35",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g27.jpeg",
      category: "",
    },
    */
  ],
};
