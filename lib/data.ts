export interface Skill {
  name: string;
  category: 'Creative' | 'Marketing' | 'Technical';
}

export interface Experience {
  role: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year?: string;
  location: string;
}

export interface Certification {
  name: string;
}

export const personalInfo = {
  name: "P. Sangamitha",
  roles: ["Social Media Manager", "Video Editor", "Web Designer", "Digital Creative"],
  email: "sangamithasanga1@gmail.com",
  phone: "+94 773818087",
  location: "Kopay, South Kopay, Jaffna",
  linkedin: "https://www.linkedin.com/in/sangamitha-puvanenthiraraja-81a6362a0/",
  about: "Creative and detail-oriented Social Media Manager with a strong foundation in IT, Content creation, and digital marketing. Proven ability to design engaging content, analyze trends, and drive audience growth. Seeking to leverage my communication and technical skills to contribute to the success of a forward-thinking organization.",
  stats: [
    { label: "Roles", value: "3+" },
    { label: "Tools Mastered", value: "8+" },
    { label: "NVQ Level", value: "V" }
  ]
};

export const skills: Skill[] = [
  { name: "Graphic Design", category: "Creative" },
  { name: "Video Editing", category: "Creative" },
  { name: "Content Creation", category: "Creative" },
  { name: "Adobe Premiere Pro", category: "Creative" },
  { name: "CapCut", category: "Creative" },
  { name: "Social Media Strategy", category: "Marketing" },
  { name: "Paid Campaigns (Facebook & Instagram)", category: "Marketing" },
  { name: "Meta Business Suite", category: "Marketing" },
  { name: "Paid Social Advertising", category: "Marketing" },
  { name: "Data-Driven Analytics", category: "Marketing" },
  { name: "HTML & CSS", category: "Technical" },
  { name: "WordPress", category: "Technical" },
  { name: "SEO Best Practices", category: "Technical" },
  { name: "Microsoft Office Suite", category: "Technical" },
  { name: "Team Management", category: "Technical" },
  { name: "Time Management", category: "Technical" }
];

export const experiences: Experience[] = [
  { 
    role: "Social Media Manager", 
    responsibilities: [
      "Develop and execute social media strategies across Facebook, Instagram, TikTok and LinkedIn", 
      "Create and publish engaging content aligned with brand goals", 
      "Use Meta Business Suite for scheduling and analytics", 
      "Analyze campaign performance and apply data-driven improvements", 
      "Collaborate with internal teams to support marketing efforts", 
      "Manage audience engagement and monitor platform trends", 
      "Assist with paid ad campaigns and performance reporting"
    ] 
  },
  { 
    role: "Video Editor", 
    responsibilities: [
      "Create, edit, and produce high-quality video content including reels, stories, and promos", 
      "Work with Adobe Premiere Pro and CapCut for professional edits", 
      "Analyze video performance and optimize content for maximum impact", 
      "Ensure cohesive brand messaging and timely delivery across teams"
    ] 
  },
  { 
    role: "Web Designer", 
    responsibilities: [
      "Design and develop responsive websites using HTML, CSS, and JavaScript", 
      "Implement SEO best practices to improve website visibility and performance", 
      "Design and develop custom WordPress websites tailored to client needs", 
      "Collaborate with clients to create visually appealing and functional websites"
    ] 
  }
];

export const education: Education[] = [
  { degree: "GCE O/L & A/L Examination", institution: "J/Kopay Christian College", year: "2016 / 2019", location: "Jaffna" },
  { degree: "Diploma in Information Technology", institution: "DMI Computer Education", location: "Jaffna" },
  { degree: "ICT Technician (NVQ Level IV)", institution: "DMI Computer Education", location: "Jaffna" },
  { degree: "Modern Web Design — HTML & CSS", institution: "Alison", location: "Online" },
  { degree: "Jaffna National Diploma in ICT (NVQ Level V)", institution: "Jaffna Technical College", location: "Jaffna" }
];

export const certifications: Certification[] = [
  { name: "Fundamental Skills in ICT" },
  { name: "ICT Technician (NVQ Level IV)" },
  { name: "Diploma in Information Technology" },
  { name: "Web Design — HTML & CSS (Alison)" }
];
