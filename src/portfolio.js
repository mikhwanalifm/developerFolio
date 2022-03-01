/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "M Ikhwan Alif M",
  title: "Hi all, I'm Ikhwan",
  subTitle: emoji(
    "A passionate Backend Software Engineer 🚀 having an experience of building Web with JavaScript / Codeigniter and Machine Learning Engineer with Deep Learning, NLP, and Time Series."
  ),
  resumeLink:
    "https://bit.ly/CV_mikhwanalifm",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mikhwanalifm",
  linkedin: "https://www.linkedin.com/in/mikhwanalifm",
  gmail: "mikhwanalifm@gmail.com",
  // gitlab: "https://gitlab.com/s",
  facebook: "https://www.facebook.com/ikhwaannn",
  instagram: "https://instagram.com/ikhwancules46",
  twitter: "https://twitter.com/ikhwancules46",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ENGINEER WHO WANTS TO EXPLORE EVERY TECH ",
  skills: [
    emoji(
      "⚡ Develop highly interactive Back End for your website"
    ),
    emoji("⚡ Develop highly Machine Learning for your research"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "php",
    fontAwesomeClassname: "fab fa-php"
  },
  
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bengkulu University",
      logo: require("./assets/images/unib.png"),
      subHeader: "Bachelor of Informatics Engineering",
      duration: "Agustus 2017 - Mei 2021",
      desc: "Make Thesis About Machine Learning For Classification Using CNN",
      descBullets: [
        "Thesis title = 'Hyperparameter Analysis On Convolutional Neural Network Architecture For Car Brand Classification'",
      ]
    },
    {
      schoolName: "Bangkit Academy",
      logo: require("./assets/images/bangkit.jpg"),
      subHeader: "Machine Learning Student",
      duration: "Februari 2021 - Juni 2021",
      desc: "Learn About IT Support, Mathematichs For ML, Deep Learning, Data and Deployment",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Engineer",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Microsoft Word, Excel, Powerpoint, and Project",
      progressPercentage: "85%"
    },
    {
      Stack: "Leadership, Team Work, Critical Thinking, Public Speaking, And Innovative",
      progressPercentage: "90%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Asistant System Engineer",
      company: "Tata Consulntancy Services",
      companylogo: require("./assets/images/tcs.jpg"),
      date: "Aug 2021 – Now",
      desc: "Role Engineer in Core Banking",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "OOP Lab Assitant",
      company: "Bengkulu University",
      companylogo: require("./assets/images/unib.png"),
      date: "Feb 2021 – Jun 2021",
      desc: "Teach about What is OOP, Consept of OOP, and Implementation of OOP",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Organizational Development Consultant",
      company: "HIMATIF",
      companylogo: require("./assets/images/himatif.png"),
      date: "Sept 2020 – May 2021",
      desc: "Approve, Check, and Consider All Work Programs in the Management of HIMATIF for the 2020/2021 Period",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Database Lab Assistant",
      company: "Bengkulu University",
      companylogo: require("./assets/images/unib.png"),
      date: "Aug 2020 – Dec 2020",
      desc: "Teach about What is Database, Consept of Database, Implementation of DDL, DML, and DCL",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Database Lab Assistant",
      company: "Bengkulu University",
      companylogo: require("./assets/images/unib.png"),
      date: "Aug 2020 – Dec 2020",
      desc: "Teach about What is Database, Consept of Database, Implementation of DDL, DML, and DCL",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Database Lab Assistant",
      company: "Ecommerce Lab Assistant",
      companylogo: require("./assets/images/unib.png"),
      date: "Jan 2020 – Aug 2020",
      desc: "Teach about What is Ecommerce, How to Build Ecommerce with Framework, and How to work with Ecommerce",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Intership",
      company: "Sub-district Office of selebar",
      companylogo: require("./assets/images/pemkot.jpg"),
      date: "Aug 2020 – Dec 2020",
      desc: "Intership for Build a Information System",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Database Lab Assistant",
      company: "Bengkulu University",
      companylogo: require("./assets/images/unib.png"),
      date: "Aug 2019 – Dec 2019",
      desc: "Teach about What is Database, Consept of Database, Implementation of DDL, DML, and DCL",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Information Technology Coordinator",
      company: "HIMATIF",
      companylogo: require("./assets/images/himatif.png"),
      date: "Mar 2019 – Feb 2020",
      desc: "Responsible For Social Media, Youtube, Websites, and Webinars Organized by HIMATIF",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Information Technology Staff",
      company: "HIMATIF",
      companylogo: require("./assets/images/himatif.png"),
      date: "Mar 2018 – Feb 2019",
      desc: "Responsible For The Content Presented On The HIMATIF Website",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/lebong.png"),
      projectName: "Village Information Website",
      projectDesc: "Build Website Information For Village Mojorejo",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://mojorejo-selupurejang.desa.id/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pemkot.jpg"),
      projectName: "Information System Monitoring of Incoming and Outgoing Letters",
      projectDesc: "Building Information System Monitoring of Incoming and Outgoing Letters for General Affairs of the Sub-District Head Office of Selebar as Bengkulu City With Codeigniter",
      footerLink: [
        {
          name: "Visit Code",
          url: "https://github.com/mikhwanalifm/Sisumaker"
        }
      ]
    },
    {
      image: require("./assets/images/unib.png"),
      projectName: "Inventory Information System",
      projectDesc: "Building an Inventory Information System for the Informatics Study Program Laboratory of Bengkulu University Using Codeigniter for Final Project",
      footerLink: [
        {
          name: "Visit Code",
          url: "https://github.com/mikhwanalifm/Sitaris"
        }
      ]
    },
    {
      image: require("./assets/images/unib.png"),
      projectName: "Boarding House Information System",
      projectDesc: "Building a boarding house information system using the Java Programming Language for Final Project",
      footerLink: [
        {
          name: "Visit Code",
          url: "https://github.com/mikhwanalifm/Koskosan"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google IT Support",
      subtitle:
        "Get a IT Support Specialization From Coursera",
      image: require("./assets/images/itsupport.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/D7EBSTHB6YWW"
        },
      ]
    },
    {
      title: "Google IT Automation with Python",
      subtitle:
        "Get a IT Automation with Python Specialization From Coursera",
      image: require("./assets/images/it_automation.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/DLA4E4DW67J3"
        },
      ]
    },
    {
      title: "TensorFlow: Data and Deployment",
      subtitle:
        "Get a TensorFlow: Data and Deployment Specialization From Coursera",
      image: require("./assets/images/tf.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/BDYWEQ4FJ7A4"
        },
      ]
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      subtitle:
        "Get a DeepLearning.AI TensorFlow Developer Specialization From Coursera",
      image: require("./assets/images/tf.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/HHS6Y6PRAGQ8"
        },
      ]
    },
    {
      title: "Mathematics for Machine Learning",
      subtitle:
        "Get a Mathematics for Machine Learning Specialization Specialization From Coursera",
      image: require("./assets/images/math.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/867A8DLGLJZM"
        },
      ]
    },
    {
      title: "Certificate Of Profiency",
      subtitle:
        "Get a Certificate Of Profiency From Aruba Network After Complete Arubalympics 2020",
      image: require("./assets/images/aruba.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://arubalympics.id/mod/customcert/verify_certificate.php?contextid=20927&code=Xd2GdOgWMH&qrcode=1"
        },
      ]
    },
    {
      title: "Google Digital Garage",
      subtitle:
        "Get a Certificate The Fundamentals of Digital Marketing",
      image: require("./assets/images/digital.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1nUvn5hXONoezHcoVa7ikunONE6xjlTU2/view?usp=sharing"
        },
      ]
    },
    {
      title: "Programming Essentials In Python",
      subtitle:
        "Get a Programming Essentials In Python from Python Institute ",
      image: require("./assets/images/python.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1LK_J-cC7B3os9B_GH30TjIOQx_Ye33XH/view?usp=sharing"
        },
      ]
    },
    
    {
      title: "MikroTik Certified Network Associate",
      subtitle:
        "Get a Certification Mikrotik Certified",
      image: require("./assets/images/mikrotik.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://mikrotik.com/training/certificates/b170367cf9c55098dbce"
        }
      ]
    },
    {
      title: "Ming Chi University Of Technology ",
      subtitle:
        "Get a Workshop For Artificial Intelligence",
      image: require("./assets/images/mingchi.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1PtkubpR1rorVuP64LVFBjhmIZj6dlgev/view?usp=sharing"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  // title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  // displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Title"
  ),

  talks: [
    {
      title: "x",
      subtitle: "x",
      slides_url: "https://bit.ly/x",
      event_url: "https://www.facebook.com/x/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+62-85208120592",
  email_address: "mikhwanalifm@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
