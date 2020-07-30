
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "PrarabdhGarg",
  title: "Hi all, I'm Prarabdh Garg",
  subTitle: emoji(`I am a Computer Science Student at Birla Institute of Technology and Sciences, Pilani (BITS-Pilani).
  I am fond of Mobile App Development (Native Android as well as Cross-platform). Currently, I am also exploring the fieds of Software Defined Networks, Distrbuted Systems and Data Science.
  `),
  // TODO: Change this
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/PrarabdhGarg",
  linkedin: "https://www.linkedin.com/in/prarabdhgarg/",
  gmail: "prarabdhgrg@gmail.com",
  gitlab: "https://gitlab.com/PrarabdhGarg",
  // facebook: "https://www.facebook.com/saad.pasta7"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I know",
  subTitle: "Some of the languages and frameworks I have played with include",
  skills: [
    // emoji("⚡ Develop highly interactive cross-platform mobile applications"),
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname:  ""
    },
    {
      skillName: "Native Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "P4",
      fontAwesomeClassname: ""
    },
    {
      skillName: "IPFS",
      fontAwesomeClassname: ""
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    /* {
      Stack: "Programming",
      progressPercentage: "60%"
    } */
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Internship",  
      company: "Homi Bhabha Center for Science and Education, TIFR",
      companylogo: require("./assets/images/hbcse.png"),
      date: "May 2020 – June 2020",
      descBullets: [
        "Framework to reduce the monopoly of middlemen, by establishing direct communication channels between consumers and service providers.",
        "Used distributed file systems like InterPlanetary File System (IPFS) and GDF - A graph-based data digest format",
        "Released a Node.js package named @gnowledge/thinq_lib.",
        "Worked on Trust Storage and Calculation in distributed systems using Blockchain."
      ]
    },
    {
      role:"Teaching Assistant",
      company: "Department of Computer Science and Information Systems, BITS Pilani",
      companylogo: require("./assets/images/bits.png"),
      date: "Aug 2019 - Aug 2020",
      desc: "Teaching Assistant for the Computer Programming and Object-Oriented Programming courses. Helped around 300 students with their coursework and practical assignments"
    },
    {
      role: "Lead App-Developer",   
      company: "GoLuggageFree",
      companylogo: require("./assets/images/glf.jpg"),
      date: "Nov 2019 – Apr 2020",
      descBullets: [
        "Lead App Developer for a startup that aimed to solve the luggage logistics problem in India.",
        "Developed a cross-platform mobile application to handle bookings and online payments",
        "In a short span, the app had around 2000 users .",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "", // Change to your github username to view your profile in Contact Section.
  showGithubProfile : false // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "",
  subtitle: "",
  projects: [
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Other Projects"),
  subtitle: "Some of the other note-worthy projects that I have developed",

  achivementsCards: [
    {
      title: "Oasis 2019 App",
      subtitle: "E-Wallet and Event Management app for the cultural fest of our campus. In 4 days, it recorded transactions worth INR 16 lakhs",
      image: require("./assets/images/oasis.webp"),
      footerLink: [
        { name: "GitHub", url: "https://github.com/IshitaAg/Oasis-2019" },
        { name: "Play Store", url: "https://play.google.com/store/apps/details?id=v2015.oasis.pilani.bits.com.home" }
      ]
    },
    {
      title: "Consumer Risk Taking Nature",
      subtitle: "Data Science Project to evaluate the risk taking nature of a consumer, based on their online shopping behaviour.",
      image: require("./assets/images/ds.jpg"),
      footerLink: [
        { name: "GitHub", url: "https://github.com/PrarabdhGarg/RecommendationEngine" },
      ]
    },
    {
      title: "EpiRisk",
      subtitle: "A Contact Tracing app to track and alert users about COVID-19 cases. Uses bluetooth sinals to detect proximity and send location to a server.",
      image: require("./assets/images/epirisk.jpg"),
      footerLink: [
        { name: "GitHub", url: "https://github.com/PrarabdhGarg/ContactTracing" },
      ]
    },
    {
      title: "Radar",
      subtitle: "An app to improve social distancing in post-covid times, by allowing people to ask help from strangers. Relies on Low-Energy Bluetooth for communication. Can be used to reduce crowd at small local shops",
      image: require("./assets/images/radar.png"),
      footerLink: [
        { name: "GitHub", url: "https://github.com/PrarabdhGarg/Radar" },
      ]
    },
    {
      title: "Lite Chat",
      subtitle: "A whatsapp like Chat application bulit using Firebase. Contains all features like Group chat, Image Sharing and status upload.",
      image: require("./assets/images/charcha.png"),
      footerLink: [
        { name: "GitHub", url: "https://github.com/PrarabdhGarg/LiteChat" },
      ]
    },
    {
      title: "Charcha",
      subtitle: "A cross-platform mobile application for sharing self-created voice based content with others.",
      image: require("./assets/images/voice.png"),
      footerLink: [
        { name: "GitHub", url: "https://github.com/PrarabdhGarg/Charcha" },
      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "Altough I don't write much, some of the blogs I have authored include:",

  blogs: [
    {
      url: "https://blog.bitsacm.in/flutter-vs-react-native/",
      title: "React Native vs Flutter",
      description: "An in-depth technial comparison between Flutter and React Native for building cross-platform mobile apps"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: "",

  talks: [
    
  ]
};

// Podcast Section

const podcastSection = {
  title: "",
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: []
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8369276419",
  email_address: "prarabdhgrg@gmail.com"
};

//Twitter Section

const twitterDetails = {
  userName : ""//Replace "twitter" with your twitter username without @
};

export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
