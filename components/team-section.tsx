"use client";

import {
  Users,
  UserCheck,
  Video,
  Wrench,
  Palette,
  FileText,
  Camera,
  Calendar,
  Megaphone,
  FolderOpen,
  GraduationCap,   
} from "lucide-react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface SocialLink {
  platform: "github" | "linkedin" | "instagram";
  url: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: SocialLink[];
}

interface TeamCategory {
  name: string;
  icon: any;
  members: TeamMember[];
}

const teamCategories: TeamCategory[] = [
// {
//   name: "LEADERSHIP",
//   icon: <Crown className="w-6 h-6" />,
//   members: [
//     {
//       name: "S. BHUPINDER SINGH GINNY",
//       role: "Manager",
//       image: "/team/manager.png",
//       bio: "Leading organizational excellence and strategic vision",
//       socials: [],
//     },
//     {
//       name: "S. HARJEET SINGH PAPPA",
//       role: "Chairman",
//       image: "/team/chairman.png",
//       bio: "Providing strategic direction and leadership",
//       socials: [],
//     },
//     {
//       name: "S. GURMEET SINGH BALI",
//       role: "Officiating Director",
//       image: "/team/Gurmeet.png",
//       bio: "Overseeing institutional operations and growth",
//       socials: [],
//     },
//   ],
// },
// {
//   name: "FACULTY",
//  icon: <GraduationCap className="w-6 h-6" />,

//   members: [
//     {
//       name: "PARDEEP SINGH",
//       role: "Society Head",
//       image: "/team/pradeep.jpg",
//       bio: "Leading academic initiatives and student development",
//       socials: [],
//     },
//     {
//       name: "TARUNA GULATI",
//       role: "Faculty Member",
//       image: "/team/taruna.jpg",
//       bio: "Academic guidance and mentorship",
//       socials: [],
//     },
//     {
//       name: "SARITA YADAV",
//       role: "Faculty Member",
//       image: "/team/sarita.jpg",
//       bio: "Educational support and development",
//       socials: [],
//     },
//     {
//       name: "BALWINDER KAUR",
//       role: "Faculty Member",
//       image: "/team/balwinder.jpg",
//       bio: "Academic excellence and student guidance",
//       socials: [],
//     },
//     {
//       name: "APURVA VASHIST",
//       role: "Faculty Member",
//       image: "/team/Apoorva.jpg",
//       bio: "Technical education and innovation",
//       socials: [],
//     },
//     {
//       name: "MANPREET KAUR",
//       role: "Faculty Member",
//       image: "/team/manpreet.jpg",
//       bio: "Student development and academic support",
//       socials: [],
//     },
//   ],
// },
    {
      name: "ORGANISERS",
      icon: <UserCheck className="w-6 h-6" />,

      members: [
                {
          name: "LEISHA CHOUDHARY",
          role: "Organiser",
          image: "/team/leisha-choudhary.jpg",
          bio: "Supporting event coordination and management",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/leisha-choudhary-22b89a325",
            },
            { platform: "github", url: "https://github.com/L-eisha" },
          ],
        },
        {
          name: "NAMAN GAMBHIR",
          role: "Organiser",
          image: "/team/Naman.jpg",
          bio: "Leading marketing campaigns and outreach",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/naman-gambhir-1ab1a3345",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/naman_gambhir.07/",
            },
            {
              platform: "github",
              url: "https://github.com/namangambhir07",
            },
          ],
        },
        // {
        //   name: "ASHISH KUMAR",
        //   role: "Lead-Organiser",
        //   image: "/team/ashish-kumar.jpg",
        //   bio: "Coordinating with partners and stakeholders",
        //   socials: [
        //     { platform: "linkedin", url: "" },
        //     { platform: "github", url: "" },
        //     { platform: "instagram", url: "" },
        //   ],
        // },

        // {
        //   name: "KANISHQ VERMA",
        //   role: "Lead-Organiser",
        //   image: "/team/kanishq-verma.png",
        //   bio: "Supporting organizational activities",
        //   socials: [
        //     {
        //       platform: "linkedin",
        //       url: "https://www.linkedin.com/in/kanishq-verma-6a0b6827a/",
        //     },
        //     {
        //       platform: "github",
        //       url: "https://github.com/KanishqVerma",
        //     },
        //     {
        //       platform: "instagram",
        //       url: "https://www.instagram.com/__weird.kanishq__",
        //     },
        //   ],
        // },
      ],
    },

    {
      name: "SOCIETY MENTORS",
      icon: <Users className="w-6 h-6" />,
       
      members: [
        {
          name: "ARPIT RAJPUT",
          role: "",
          image: "/team/arpit-rajput.jpg",
          bio: "",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/arpit-rajput-831393213/",
            },
            {
              platform: "github",
              url: "https://github.com/ArpitRajputGithub",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/arpitrajput.exe",
            },
          ],
        },
        {
          name: "ATHARV TRIPATHI",
          role: "",
          image: "/team/atharv-tripathi.jpg",
          bio: "",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/atharv7740",
            },
            {
              platform: "github",
              url: "https://github.com/Atharv7740",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/its_atharv_tripathi",
            },
          ],
        },
      ],
    },

    
        // {
        //   name: "ASHISH KUMAR",
        //   role: "Lead-Organiser",
        //   image: "/team/ashish-kumar.jpg",
        //   bio: "Coordinating with partners and stakeholders",
        //   socials: [
        //     { platform: "linkedin", url: "" },
        //     { platform: "github", url: "" },
        //     { platform: "instagram", url: "" },
        //   ],
        // },

        // {
        //   name: "KANISHQ VERMA",
        //   role: "Lead-Organiser",
        //   image: "/team/kanishq-verma.png",
        //   bio: "Supporting organizational activities",
        //   socials: [
        //     {
        //       platform: "linkedin",
        //       url: "https://www.linkedin.com/in/kanishq-verma-6a0b6827a/",
        //     },
        //     {
        //       platform: "github",
        //       url: "https://github.com/KanishqVerma",
        //     },
        //     {
        //       platform: "instagram",
        //       url: "https://www.instagram.com/__weird.kanishq__",
        //     },
        //   ],
        // },

    // {
    //   name: "CO-ORGANISERS",
    //   icon: <Users className="w-6 h-6" />,
    //       members: [
    //     {
    //       name: "LEISHA CHOUDHARY",
    //       role: "Co-Organiser",
    //       image: "/team/leisha-choudhary.jpg",
    //       bio: "Supporting event coordination and management",
    //       socials: [
    //         {
    //           platform: "linkedin",
    //           url: "https://www.linkedin.com/in/leisha-choudhary-22b89a325",
    //         },
    //         { platform: "github", url: "https://github.com/L-eisha" },
    //       ],
    //     },
    //     {
    //       name: "NAMAN GAMBHIR",
    //       role: "Co-Organiser",
    //       image: "/team/Naman.jpg",
    //       bio: "Leading marketing campaigns and outreach",
    //       socials: [
    //         {
    //           platform: "linkedin",
    //           url: "https://www.linkedin.com/in/naman-gambhir-1ab1a3345",
    //         },
    //         {
    //           platform: "instagram",
    //           url: "https://www.instagram.com/naman_gambhir.07/",
    //         },
    //         {
    //           platform: "github",
    //           url: "https://github.com/namangambhir07",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "CHIEF MARKETING OFFICER",
    //   icon: <Video className="w-6 h-6" />,
       
    //   members: [
    //     {
    //       name: "KASHVI ARORA",
    //       role: "",
    //       image: "/team/kashvi.jpg",
    //       bio: "",
    //       socials: [
    //         {
    //           platform: "linkedin",
    //           url: "https://www.linkedin.com/in/kashvi15/",
    //         },
    //         {
    //           platform: "github",
    //           url: "https://github.com/Kashvi009",
    //         },
    //         {
    //           platform: "instagram",
    //           url: "https://www.instagram.com/kiyraaaaa_/",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "CORE TEAM",
    //   icon: <Video className="w-6 h-6" />,
       
    //   members: [
    //     {
    //       name: "JEEVIDHA ARORA",
    //       role: "Operations Head",
    //       image: "/team/Jeevidha-Arora.jpg",
    //       bio: "",
    //       socials: [
    //         {
    //           platform: "linkedin",
    //           url: "https://www.linkedin.com/in/jeevidha-arora-b80a4a306/",
    //         },
    //         {
    //           platform: "instagram",
    //           url: "https://www.instagram.com/jeevidha.aaa/",
    //         },
    //         {
    //           platform: "github",
    //           url: "https://github.com/Jeevidhaa",
    //         },
    //       ],
    //     },
    //     {
    //       name: "VRITTI GARG",
    //       role: "Interim Executive",
    //       image: "/team/vritti-garg.jpg",
    //       bio: "",
    //       socials: [
    //         {
    //           platform: "linkedin",
    //           url: "https://www.linkedin.com/in/vritti-garg-87a197298/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    //         },
    //         {
    //           platform: "github",
    //           url: "https://github.com/Vritti1215",
    //         },
    //         {
    //           platform: "instagram",
    //           url: "https://www.instagram.com/vritti1512",
    //         },
    //       ],
    //     },
    //     {
    //       name: "AKSHIT SHARMA",
    //       role: "Core Member",
    //       image: "/team/akshit-sharma.jpg",
    //       bio: "Managing project timelines and deliverables",
    //       socials: [
    //         {
    //           platform: "linkedin",
    //           url: "https://www.linkedin.com/in/akshit-sharma-261626245",
    //         },
    //         {
    //           platform: "instagram",
    //           url: "https://www.instagram.com/akshit.014",
    //         },
    //         {
    //           platform: "github",
    //           url: "https://github.com/akshit014",
    //         },
    //       ],
    //     },
    //     {
    //       name: "DHRUV OBEROI",
    //       role: "Core Member",
    //       image: "/team/dhruv-oberoi.jpeg",
    //       bio: "Assisting in event planning and execution",
    //       socials: [
    //         {
    //           platform: "linkedin",
    //           url: "https://www.linkedin.com/in/dhruv-oberoi-81870a25b/",
    //         },
    //         {
    //           platform: "instagram",
    //           url: "https://www.instagram.com/dhrubii_/",
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      name: "CORE EXECUTIVE",
      icon: <Video className="w-6 h-6" />,
       
      members: [
                {
          name: "AYUSH MISHRA",
          role: "Executive",
          image: "/team/Ayush-mishra.jpg",
          bio: "Leading social media strategy and engagement",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/ayush-mishra-0654422b7",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/ayushmishra_2005",
            },
          ],
        },
        {
                name: "AMAN GOEL",
                role: "Executive",
                image: "/team/aman-goel.jpg",
                bio: "Event planning and execution support",
                socials: [
                  {
                    platform: "linkedin",
                    url: "https://www.linkedin.com/in/aman-goel-56264727b/",
                  },
                  { platform: "github", url: "https://github.com/Amangoel22" },
                ],
              },
                                    {
          name: "DHWANI NAGPAL",
          role: "Executive",
          image: "/team/Dhwani Nagpal.jpg",
          bio: "Managing venue arrangements and coordination",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/dhwani-nagpal-963730388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
                {
          name: "MANYA MADAN",
          role: "Executive",
          image: "/team/Manya Photo - CodeGeeks.jpg",
          bio: "Leading social media strategy and engagement",
          socials: [
            {
              platform: "linkedin",
              url: " https://www.linkedin.com/in/manya-madan-732172283",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/yessitsmanya/",
            },
          ],
        },

        // {
        //   name: "AYUSHI DUBEY",
        //   role: "Social Media Management",
        //   image: "/team/ayushi-dubey.jpg",
        //   bio: "Managing public relations and communications",
        //   socials: [
        //     {
        //       platform: "linkedin",
        //       url: "https://www.linkedin.com/in/ayushi-dubey-57aa5a2b0",
        //     },
        //     {
        //       platform: "instagram",
        //       url: "https://www.instagram.com/ayushe_25",
        //     },
        //   ],
        // },
        // {
        //   name: "JEEVIDHA ARORA",
        //   role: "Operations Head",
        //   image: "/team/Jeevidha-Arora.jpg",
        //   bio: "",
        //   socials: [
        //     {
        //       platform: "linkedin",
        //       url: "https://www.linkedin.com/in/jeevidha-arora-b80a4a306/",
        //     },
        //     {
        //       platform: "instagram",
        //       url: "https://www.instagram.com/jeevidha.aaa/",
        //     },
        //     {
        //       platform: "github",
        //       url: "https://github.com/Jeevidhaa",
        //     },
        //   ],
        // },
    //     {
    //       name: "VRITTI GARG",
    //       role: "Interim Executive",
    //       image: "/team/vritti-garg.jpg",
    //       bio: "",
    //       socials: [
    //         {
    //           platform: "linkedin",
    //           url: "https://www.linkedin.com/in/vritti-garg-87a197298/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    //         },
    //         {
    //           platform: "github",
    //           url: "https://github.com/Vritti1215",
    //         },
    //         {
    //           platform: "instagram",
    //           url: "https://www.instagram.com/vritti1512",
    //         },
    //       ],
    //     },
    //     {
    //       name: "AKSHIT SHARMA",
    //       role: "Core Member",
    //       image: "/team/akshit-sharma.jpg",
    //       bio: "Managing project timelines and deliverables",
    //       socials: [
    //         {
    //           platform: "linkedin",
    //           url: "https://www.linkedin.com/in/akshit-sharma-261626245",
    //         },
    //         {
    //           platform: "instagram",
    //           url: "https://www.instagram.com/akshit.014",
    //         },
    //         {
    //           platform: "github",
    //           url: "https://github.com/akshit014",
    //         },
    //       ],
    //     },
    //     {
    //       name: "DHRUV OBEROI",
    //       role: "Core Member",
    //       image: "/team/dhruv-oberoi.jpeg",
    //       bio: "Assisting in event planning and execution",
    //       socials: [
    //         {
    //           platform: "linkedin",
    //           url: "https://www.linkedin.com/in/dhruv-oberoi-81870a25b/",
    //         },
    //         {
    //           platform: "instagram",
    //           url: "https://www.instagram.com/dhrubii_/",
    //         },
    //       ],
    //     },
      ],
    },
    {
      name: "TECH EXECUTIVE",
      icon: <Video className="w-6 h-6" />,
       
      members: [
                {
          name: "ADARSH KUMAR",
          role: "Executive",
          image: "/team/Adarsh.jpg",
          bio: "Coordinating event logistics and operations",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/adarsh-kumar-6221762b4",
            },
            {
              platform: "github",
              url: "https://github.com/Its-Adarshkumar",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/its_adarshsinghrajput/",
            },
          ],
        },
                {
          name: "VRITTI GARG",
          role: "Executive",
          image: "/team/vritti-garg.jpg",
          bio: "",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/vritti-garg-87a197298/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              platform: "github",
              url: "https://github.com/Vritti1215",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/vritti1512",
            },
          ],
        },
        {
          name: "YANA MALHOTRA",
          role: "Executive",
          image: "/team/yana-malhotra.jpg",
          bio: "Data Structures and Algorithms specialist",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/yana-malhotra-427b61293",
            },
            {
              platform: "github",
              url: "https://github.com/yana-malhotra27",
            },
          ],
        },




      ],
    },
    {
      name: "TECHNICAL LEADS",
      icon: <Wrench className="w-6 h-6" />,
       
      members: [
        {
          name: "SUDHANSHU KHOSLA",
          role: "Web Dev Lead",
          image: "/team/sudhanshukhosla.jpg",
          bio: "Leading web development initiatives",
          socials: [
            {
              platform: "linkedin",
              url: "https://linkedin.com/in/sudhanshu-khosla-a05b4a298/",
            },
            {
              platform: "github",
              url: "https://github.com/Sudhanshu-khosla-26",
            },
            {
              platform: "instagram",
              url: "https://instagram.com/sudhanshu_khosla/",
            },
          ],
        },
        {
          name: "DHRUV SABHARWAL",
          role: "Web Dev Co-Lead",
          image: "/team/dhruv-sabharwal.jpeg",
          bio: "Leading web development initiatives",
          socials: [
            {
              platform: "linkedin",
              url: "https://linkedin.com/in/dhruv-sabharwal-6a6245295/",
            },
            {
              platform: "github",
              url: "https://github.com/Dhruvv7115",
            },
            {
              platform: "instagram",
              url: "https://instagram.com/dhruvv7115/",
            },
          ],
        },
        {
          name: "YASH GUPTA",
          role: "Web Dev Coordinator ",
          image: "/team/yash-gupta.jpg",
          bio: "Leading web development initiatives",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/yash-gupta051 ",
            },
            {
              platform: "github",
              url: "https://github.com/Yashgupta9311",
            }

          ],
        },
        {
          name: "ISHAAN",
          role: "Web Dev Coordinator ",
          image: "/team/Ishaan Sharma.jpeg",
          bio: "Leading web development initiatives",
          socials: [
            {
              platform: "linkedin",
              url: " https://www.linkedin.com/in/ishaan-sharma-611361326/",
            },
            {
              platform: "github",
              url: "",
            }

          ],
        },
        // {
        //   name: "YANA MALHOTRA",
        //   role: "DSA Lead",
        //   image: "/team/yana-malhotra.jpg",
        //   bio: "Data Structures and Algorithms specialist",
        //   socials: [
        //     {
        //       platform: "linkedin",
        //       url: "https://www.linkedin.com/in/yana-malhotra-427b61293",
        //     },
        //     {
        //       platform: "github",
        //       url: "https://github.com/yana-malhotra27",
        //     },
        //   ],
        // },
                {
          name: "NAINCY RAJ SINGH",
          role: "DSA Lead",
          image: "/team/naincy.jpg",
          bio: "Data Structures and Algorithms specialist",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/naincy-raj-singh-4161bb301",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/naincy._.rs",
            },
            {
              platform: "github",
              url: "",
            },
          ],
        },
            {
          name: "ARJUN",
          role: "DSA Coordinator ",
          image: "/team/arjun-pant.jpg",
          bio: "Event coordination and logistics",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/arjun-pant-956246289",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/arjunpant74",
            },
          ],
        },

        // {
          // {
          //   name: "ANSH KUMAR RAJPUT",
          //   role: "DSA Coordinator",
          //   image: "/team/ansh-kumar-rajput.jpg",
          //   bio: "Data Structures and Algorithms specialist",
          //   socials: [
          //     {
          //       platform: "linkedin",
          //       url: "http://linkedin.com/in/ansh-kumar-rajput-a5b184296",
          //     },
          //     {
          //       platform: "github",
          //       url: "https://github.com/anshrajput-tech",
          //     },
          //   ],
          // },
        //   name: "VRITTI GARG",
        //   role: "UI/UX Lead",
        //   image: "/team/vritti-garg.jpg",
        //   bio: "Data Structures and Algorithms specialist",
        //   socials: [
        //     {
        //       platform: "linkedin",
        //       url: "https://www.linkedin.com/in/vritti-garg-87a197298",
        //     },
        //     {
        //       platform: "instagram",
        //       url: "https://www.instagram.com/vritti1512",
        //     },
        //     {
        //       platform: "github",
        //       url: "https://github.com/Vritti1215",
        //     },
        // ],
        // },
        // {
        //   name: "HARSH YADAV",
        //   role: "UI/UX Co-Lead",
        //   image: "/team/harsh-yadav.jpg",
        //   bio: "Creative design and visual storytelling",
        //   socials: [
        //     {
        //       platform: "linkedin",
        //       url: "https://www.linkedin.com/in/harsh-yadav-5b92b62b1",
        //     },
        //     {
        //       platform: "instagram",
        //       url: "https://www.instagram.com/harsh.__.yadavv",
        //     },
        //   ],
        // },
        {
          name: "ANSH JARYAL",
          role: "AIML Lead",
          image: "/team/Ansh Jaryal.png",
          bio: "Artificial Intelligence and Machine Learning expertise",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/ansh-jaryal-1246872b3",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/ansh_jaryal_",
            },
          ],
        },
        {
          name: "DHRUV GUATAM",
          role: "AIML Co-Lead",
          image: "/team/Dhruv Gautam.jpg",
          bio: "Artificial Intelligence and Machine Learning expertise",
          socials: [
            {
              platform: "linkedin",
              url: " https://www.linkedin.com/in/dhruv-gautam-bb2613285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "SANCHIT AGGARWAL",
          role: "Cyber Security Lead",
          image: "/team/sanchit.png",
          bio: "Overseeing cybersecurity and infrastructure",
          socials: [
            {
              platform: "linkedin",
              url: "https://linkedin.com/in/heysanchit",
            },
            {
              platform: "github",
              url: "https://github.com/0xMistri",
            },
          ],
        },
        {
          name: "KRISH MITTAL",
          role: "Game Dev Lead",
          image: "/team/krish-mittal.jpg",
          bio: "",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/krish177/",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/krishmittal177/",
            },
            {
              platform: "github",
              url: "https://github.com/Krish-Mittal",
            },
          ],
        },
        {
          name: "SHIVANSH GOYAL",
          role: "Game Dev Co-Lead",
          image: "/team/Shivansh Goyal.jpg",
          bio: "",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/shivansh-goyal-gamedev/",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/devils_catt_/",
            },

          ],
        },
        {
          name: "GARV",
          role: "Data Science Lead",
          image: "/team/garv malhotra.jpg",
          bio: "",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: " ",
            },
            {
              platform: "github",
              url: "",
            },
          ],
        },
      ],
    },
    // {
    //   name: "THE CATALYSTS",
    //   icon: <Users className="w-6 h-6" />,
    //        //   members: [

    //   ],
    // },

     {
      name: "ANCHORS TEAM",
      icon: <Video className="w-6 h-6" />,
       
      members: [

        {
          name: "KHUSHI KALRA",
          role: "Anchors Team",
          image: "/team/khushi kalra.jpg",
          bio: "Leading social media strategy and engagement",
          socials: [
            {
              platform: "linkedin",
              url: " https://www.linkedin.com/in/khushi-tyagi-006b72308",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "RAKSHA",
          role: "Anchors Team",
          image: "/team/Raksha.jpg",
          bio: "Leading social media strategy and engagement",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/salivator_chaioamore/",
            },
          ],
        },
        {
          name: "KIRTI SHARMA",
          role: "Anchors Team",
          image: "/team/Kirti Sharma.jpg",
          bio: "Leading social media strategy and engagement",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: " https://www.instagram.com/system_overload_please_wait?utm_source=qr&igsh=Y3U2MjNqa2c3am4w",
            },
          ],
        },
        {
          name: "KHUSHI TYAGI",
          role: "Anchors Team",
          image: "/team/Khushi Tyagi (2).jpg",
          bio: "Leading social media strategy and engagement",
          socials: [
            {
              platform: "linkedin",
              url: " https://www.linkedin.com/in/khushi-tyagi-006b72308",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "SHRADDHA",
          role: "Anchors Team",
          image: "/team/Shraddha.jpg",
          bio: "Leading social media strategy and engagement",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/shraddha-94b3b5375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },

      ],
    }, 
    {
  name: "CONTENT TEAM",
  icon: <FileText className="w-6 h-6" />,
  members: [
    {
      name: "MUSTAFA QADEER",
      role: "Content Team Lead",
      image: "/team/mustafa-qadeer.jpg",
      bio: "Content creation and storytelling",
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/mustafa-qadeer-3812b8329/",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/mustafaqadeer1/",
        },
        {
          platform: "github",
          url: "https://github.com/MustafaQadeer",
        },
      ],
    },
    {
      name: "SHRISHTI",
      role: "Content Co-Lead",
      image: "/team/Shrishti Upadhya.jpg",
      bio: "Writing compelling copy and content",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/shrishti-upadhya-99976b382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: " https://www.instagram.com/shri___16?igsh=MXNpdmgyZzhyeDlnaA==",
        },
      ],
    },

    {
      name: "AYUSH KUMAR",
      role: "Content Team",
      image: "/team/Ayush Kumar con.jpg",
      bio: "Content creation and storytelling",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/ayush-kumar-806371377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/freaky_ayush07/",
        },
      ],
    },
    {
      name: "BHAVYA",
      role: "Content Team",
      image: "/team/Bhavya.jpeg",
      bio: "Writing compelling copy and content",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/bhavya-ds",
        },
        {
          platform: "instagram",
          url: " https://www.instagram.com/_bhavyakumar25/",
        },
      ],
    },
    {
      name: "PRAGATI",
      role: "Content Team ",
      image: "/team/Pragati.jpg",
      bio: "Content creation and storytelling",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/pragati-bhardwaj-a25038350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
    {
      name: "RIDHIMA SHARMA",
      role: "Content Team",
      image: "/team/Ridhima Sharma.png",
      bio: "Content creation and storytelling",
      socials: [
        {
          platform: "linkedin",
          url: "www.linkedin.com/in/ridhimasharma17",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
    {
      name: "SANJANA",
      role: "Content Team",
      image: "/team/Sanjana Sharma.jpg",
      bio: "Writing compelling copy and content",
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/sanjana-sharma-607268318/",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
    {
      name: "SNEHA SINGHAL",
      role: "Content Team",
      image: "/team/Sneha Singhal.jpg",
      bio: "Content creation and storytelling",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/sneha-singhal-7b3369366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: " https://www.instagram.com/snehasinghal1407?igsh=YzljYTk1ODg3Zg==",
        },
      ],
    },
  ],
},
  
{
  name: "DESIGN TEAM",
  icon: <Palette className="w-6 h-6" />,
  members: [
    {
      name: "JAYAN ARORA",
      role: "Design Lead",
      image: "/team/Jayaan-Arora.jpg",
      bio: "UI/UX design and creative development",
      socials: [
        { platform: "linkedin", url: " https://www.linkedin.com/in/jayan-arora-undefined-0545622b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { platform: "instagram", url: "" },
      ],
    },
    {
      name: "ATISHAY",
      role: "Design Co-Lead",
      image: "/team/Atishay-Jain.png",
      bio: "Creative design and visual communication",
      socials: [
        { platform: "linkedin", url: "" },
        { platform: "instagram", url: "" },
        { platform: "github", url: "" },
      ],
    },

    {
      name: "ANKITA",
      role: "Design Team",
      image: "/team/IMG-20250407-WA0041 - Ankita Grover.jpg",
      bio: "Visual design and creative solutions",
      socials: [
        { platform: "linkedin", url: "" },
        { platform: "github", url: "" },
      ],
    },
    {
      name: "BHAVYA SUNEJA",
      role: "Design Team",
      image: "/team/Bhavya-suneja.jpeg",
      bio: "Creative design and visual storytelling",
      socials: [
        { platform: "linkedin", url: "https://www.linkedin.com/in/bhavya-suneja/" },
        { platform: "instagram", url: "" },
      ],
    },
    {
      name: "DISHIKA",
      role: "Design Team",
      image: "/team/Dishika Rustagi.jpg",
      bio: "Visual design and creative solutions",
      socials: [
        { platform: "linkedin", url: " https://www.linkedin.com/in/dishika-rustagi-97a8aa381" },
        { platform: "instagram", url: " https://www.instagram.com/_dishika27_?igsh=Z3N6cjFzbDg3cmlw" },
      ],
    },
    {
      name: "KARTIK AGGARWAL",
      role: "Design Team",
      image: "/team/kartik Aggarwal.jpg",
      bio: "Visual design and creative solutions",
      socials: [
        { platform: "linkedin", url: "https://www.linkedin.com/in/kartik-aggarwal-797a8b327/" },
      ],
    },
    {
      name: "MOHAMMAD FAIZ",
      role: "Design Team",
      image: "/team/Mohammad Faiz.png",
      bio: "Creative design and visual storytelling",
      socials: [
        { platform: "linkedin", url: " https://www.linkedin.com/in/mohammad-faiz-097b45378" },
        { platform: "instagram", url: " https://www.instagram.com/mohammad_faiz007" },
      ],
    },
    {
      name: "SONALI PANDEY",
      role: "Design Team",
      image: " /team/Sonali Pandey.jpg",
      bio: "Visual design and creative solutions",
      socials: [
        { platform: "linkedin", url: " https://www.linkedin.com/in/sonali-pandey-a3159037a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { platform: "instagram", url: "" },
      ],
    },
  ],
},
 {
  name: "EVENT MANAGEMENT",
  icon: <Calendar className="w-6 h-6" />,

  members: [
    {
      name: "RIYA NAGPAL",
      role: "Event Management Lead",
      image: "/team/riya-nagpal.jpg",
      bio: "Managing venue arrangements and coordination",
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/riya-nagpal-56aa96327",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/riyanagpal__12",
        },
        {
          platform: "github",
          url: "https://github.com/RiyaNagpal12",
        },
      ],
    },
    {
      name: "DAAMAN",
      role: "Event Management Co-Lead",
      image: "/team/Daaman Sharma.jpg",
      bio: "Managing venue arrangements and coordination",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/daaman-mudgal-sharma-89345a374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
    {
      name: "SANIYA",
      role: "Event Management Co-Lead",
      image: "/team/Saniya Khan.jpg",
      bio: "Managing venue arrangements and coordination",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/saniya-khan-71ab22322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/sani_yakhan25005?igsh=bmM4eG41cWx6Zjk1",
        },
      ],
    },

    {
      name: "AARYAN",
      role: "Event Management Member",
      image: "/team/Aaryan Sharma.jpg",
      bio: "Managing venue arrangements and coordination",
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/aaryan-sharma-052a7527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
    {
      name: "AYUSH KUMAR",
      role: "Event Management Member",
      image: "/team/Ayush KumarEM.jpg",
      bio: "Managing venue arrangements and coordination",
      socials: [
        {
          platform: "linkedin",
          url: "",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/kumawat.ayush06?igsh=andhbHF0ZTdmZnYx",
        },
      ],
    },
    {
      name: "CHHAVILATA",
      role: "Event Management Member",
      image: "/team/IMG_20251005_000434 - Chhavi.jpg",
      bio: "Managing venue arrangements and coordination",
      socials: [
        {
          platform: "linkedin",
          url: "",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
    {
      name: "HASRAT",
      role: "Event Management Member",
      image: "/team/Hasrat Kaushik.jpg",
      bio: "Managing venue arrangements and coordination",
      socials: [
        {
          platform: "linkedin",
          url: "",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
    {
      name: "MANYA GUPTA",
      role: "Event Management Member",
      image: "/team/Manya Gupta.jpg",
      bio: "Managing venue arrangements and coordination",
      socials: [
        {
          platform: "linkedin",
          url: " www.linkedin.com/in/manya-gupta-8a2528380",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/_.manya.gupta?igsh=MW40cmJwMWh4dHdyaw==",
        },
      ],
    },
    {
      name: "RISSICA",
      role: "Event Management Member",
      image: "/team/Rissica Yadav.jpg",
      bio: "Managing venue arrangements and coordination",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/rissica-yadav-1a799337a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
    {
      name: "SHREYA MITTAL",
      role: "Event Management Member",
      image: "/team/Shreya Mittal.jpg",
      bio: "Event coordination and logistics",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/shreya-mittal-79a838225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: " https://www.instagram.com/_.shreyamittal_06?igsh=ajNiYms2Z3oxaDJy",
        },
      ],
    },
    {
      name: "STUTI",
      role: "Event Management Member",
      image: "/team/STUTI BHATTACHARJEE.jpg",
      bio: "Managing venue arrangements and coordination",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/stuti-bhattacharjee-175609378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/stuti_bhattacharjee?igsh=MTFxNjRhMTc2MzkzNg==",
        },
      ],
    },
    {
      name: "VAISHNAVI",
      role: "Event Management Member",
      image: "/team/Vaishnavi Kapoor.jpeg",
      bio: "Managing venue arrangements and coordination",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/vaishnavi-kapoor-58943b37a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/vaish_kxpoor27?igsh=dnB6eGxvajk0ajZk&utm_source=qr",
        },
      ],
    },
    {
      name: "YASHITA GUPTA",
      role: "Event Management Member",
      image: "/team/yashitaem.jpg",
      bio: "Managing venue arrangements and coordination",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/yashita-gupta-602232347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/_yashita.gupta__?igsh=cHl6NWJpc3dsZXVr",
        },
      ],
    },
    {
      name: "YUKTI",
      role: "Event Management Member",
      image: "/team/Yukti.JPG",
      bio: "Managing venue arrangements and coordination",
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/yukti-952526381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/phogat_yukti?igsh=MW12YXRrZWJjeWdqcw==",
        },
      ],
    },
  ],
},
{
  name: "LOGISTICS TEAM",
  icon: <Video className="w-6 h-6" />,
  members: [
    {
      name: "PRARTHANA",
      role: "Logistics Lead",
      image: "/TEAM/prarthna-punpher.JPG",
      bio: "Leading social media strategy and engagement",
      socials: [
        {
          platform: "linkedin",
          url: "  https://www.linkedin.com/in/prarthna-punpher-b3354131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: " https://www.instagram.com/prarthna_276?igsh=aGQ0bHl2aDFjeTh1",
        },
      ],
    },
    {
      name: "ANNU DAGAR",
      role: "Logistics Co-Lead",
      image: "/team/Annu-dagar.jpg",
      bio: "Event coordination and logistics",
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/annu-dagar-40655431b",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/annudagar19",
        },
      ],
    },

    {
      name: "ANYA VOHRA",
      role: "Logistics Member",
      image: "/team/Anya Vohra.jpg",
      bio: "Social media content and community management",
      socials: [
        {
          platform: "linkedin",
          url: "",
        },
        {
          platform: "instagram",
          url: " https://www.instagram.com/anyavohra.27/",
        },
      ],
    },
    {
      name: "BHAVYA KHURANA",
      role: "Logistics Member",
      image: "/team/Bhavya Khurana.jpg",
      bio: "Managing public relations and communications",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/bhavya-khurana-177195381",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
    {
      name: "JYOTSHNA SINGH",
      role: "Logistics Member",
      image: "/team/jyotshna singh.jpeg",
      bio: "Social media content and community management",
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/jyotshna-singh-89b805388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: " https://www.instagram.com/yayajyotshna?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      ],
    },
    {
      name: "LAVANYA JAIN",
      role: "Logistics Member",
      image: "/team/Lavanya Jain.jpg",
      bio: "Social media content and community management",
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/lavanya-jain-a57101380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/lavanyajain1328?igsh=d3p3bWx5OGVhNHJn",
        },
      ],
    },
    {
      name: "MANTHAN",
      role: "Logistics Member",
      image: "/team/Manthan Aggarwal.jpg",
      bio: "Social media content and community management",
      socials: [
        {
          platform: "linkedin",
          url: " www.linkedin.com/in/manthan-aggarwal-20278937a",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
    {
      name: "PARI MITTAL",
      role: "Logistics Member",
      image: "/team/parimittal.jpg",
      bio: "Social media content and community management",
      socials: [
        {
          platform: "linkedin",
          url: "",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },

  ],
},

   

    {
      name: "PHOTOGRAPHY TEAM",
      icon: <Camera className="w-6 h-6" />,
          members: [
        {
          name: "ISHAAN KAMRA",
          role: "Photography Lead",
          image: "/team/ishan-kamra.jpg",
          bio: "Capturing visual stories and moments",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/ishan-kamra-13aaaa334/",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/ishan_151206/profilecard/",
            },
          ],
        },
        {
          name: "AKSH TYAGI",
          role: "Photography Co-Lead",
          image: "/team/AKSH TYAGI.jpg",
          bio: "Event photography and documentation",
          socials: [
            {
              platform: "linkedin",
              url: " https://www.linkedin.com/in/aksh-tyagi-1062572b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/mr.akshtyagi?igsh=NWVsNGZ1YzMydnNp",
            },
          ],
        },
        // {
        //   name: "KASHISH ARORA",
        //   role: "Photography Team",
        //   image: "/team/kashish-arora.jpg",
        //   bio: "Event photography and documentation",
        //   socials: [
        //     {
        //       platform: "linkedin",
        //       url: "https://www.linkedin.com/in/kashish-arora-4b0782328",
        //     },
        //     {
        //       platform: "instagram",
        //       url: "https://www.instagram.com/kashisharora_006",
        //     },
        //   ],
        // },
        {
          name: "M. SHARIQ",
          role: "Photography Team",
          image: "/team/Mohammad Shariq.png",
          bio: "Creating and editing video content",
          socials: [
            {
              platform: "linkedin",
              url: " https://www.linkedin.com/in/mohammad-shariq-3782a3382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            
            {
              platform: "instagram",
              url: "https://www.instagram.com/shhaariqq?igsh=MTFjanNpeG50aHJ0MQ==",
            },
          ],
        },
        // {
        //   name: "GEET GULATI",
        //   role: "Photography Team",
        //   image: "/team/Geet Gulati.png",
        //   bio: "Capturing visual stories and moments",
        //   socials: [
        //     {
        //       platform: "linkedin",
        //       url: "https://www.linkedin.com/in/geet-gulati-69941234a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        //     },
        //     { platform: "github", url: "" },
        //     {
        //       platform: "instagram",
        //       url: "https://www.instagram.com/geett_1234?igsh=eXJxYzBvZmpjc2F6",
        //     },
        //   ],
        // },

      ],
    },
{
  name: "PR & MARKETING TEAM",
  icon: <FolderOpen className="w-6 h-6" />,

  members: [
    {
      name: "KRISH KAPOOR",
      role: "PR & Marketing Team Lead",
      image: "/team/KrishKapoor.jpg",
      bio: "Project management and team coordination",
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/krish-kapoor-b83075360/",
        },
      ],
    },
    {
      name: "RIYA SEHGAL",
      role: "PR & Marketing Team Co-Lead",
      image: "/team/riya-sehgal.jpg",
      bio: "Event coordination and logistics",
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/riya-sehgal-790439327/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/riya.iaaaa",
        },
      ],
    },

    {
      name: "AAYUSH MEHRA",
      role: "PR & Marketing Team",
      image: "/team/AayushMehra.jpg",
      bio: "Project management and team coordination",
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/aayush-mehra-2725162b6",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/aayushmehra_1010",
        },
        {
          platform: "github",
          url: "https://github.com/AayushMehra10",
        },
      ],
    },
    {
      name: "ANUSHKA",
      role: "PR & Marketing Team",
      image: "/team/Snapchat-1564153194 - Sunita Yadav.jpg",
      bio: "Event coordination and logistics",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/anushka-yadav-a254b730b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: " https://www.instagram.com/anuxhkaydv?igsh=MTdlanB5bXVzeDlnNw==",
        },
      ],
    },
    {
      name: "ARJUN",
      role: "PR & Marketing Team",
      image: "/team/Arjun Srivastava.jpg",
      bio: "Event coordination and logistics",
      socials: [
        {
          platform: "linkedin",
          url: "",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
    {
      name: "GURNEET",
      role: "PR & Marketing Team",
      image: "/team/gurneet-sokhi.jpg",
      bio: "Event coordination and logistics",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/gurneet-sokhi-979529326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          platform: "instagram",
          url: " https://www.instagram.com/sokhigurneet?igsh=YzlubjJua3F5N2pt&utm_source=qr",
        },
      ],
    },
    {
      name: "KAKUL GARG",
      role: "PR & Marketing Team",
      image: "/team/Kakul-Garg.jpg",
      bio: "Event coordination and logistics",
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/kakul-garg-a63887384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          platform: "instagram",
          url: " https://www.instagram.com/_kakulgarg?utm_source=ig_web_button_share_sheet&igsh=MWs2eWNucmswaml1dg==",
        },
      ],
    },
    {
      name: "PRISHA KHETARPAL",
      role: "PR & Marketing Team",
      image: "/team/Prisha Khetarpal.jpg",
      bio: "Event coordination and logistics",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/prisha-khetarpal-660015378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: " https://www.instagram.com/kprisha_26?igsh=MWl1MzdiZ2c3azlieQ==",
        },
      ],
    },
    {
      name: "SAI AMARTYA",
      role: "PR & Marketing Team",
      image: "/team/Sai Amartya shetty.jpeg",
      bio: "Event coordination and logistics",
      socials: [
        {
          platform: "linkedin",
          url: "",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
    {
      name: "SHUBHAM",
      role: "PR & Marketing Team",
      image: "/team/Screenshot_20251004-222205.WhatsApp - shubham.png",
      bio: "Event coordination and logistics",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/shubham-chaudhary-7bb4b030b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
  ],
},
 {
      name: "SOCIAL MEDIA MANAGEMENT",
      icon: <Megaphone className="w-6 h-6" />,
        members: [

        {
          name: "AYUSH",
          role: "Social Media Lead",
          image: "/team/IMG-20250928-WA0041 - Aayush Kumar Jha.jpg",
          bio: "Managing public relations and communications",
          socials: [
            {
              platform: "linkedin",
              url: " https://www.linkedin.com/in/jhaakj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/___iaayush___/",
            },
          ],
        },
        {
          name: "KASHISH PAL",
          role: "Social Media Co-Lead",
          image: "/team/Kashish Pal.jpg",
          bio: "Event planning and execution support",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { platform: "instagram", url: "" },
          ],
        },
      
        {
          name: "TANISHKA",
          role: "Social Media ",
          image: "/team/Tanishka Dagar.jpg",
          bio: "Managing public relations and communications",
          socials: [
            {
              platform: "linkedin",
              url: " https://www.linkedin.com/in/tanishka-dagar-801776309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/why.taeishka/",
            },
          ],
        },
        {
          name: "UMANG",
          role: "Social Media ",
          image: "/team/Umang Bakshi.jpeg",
          bio: "Managing public relations and communications",
          socials: [
            {
              platform: "linkedin",
              url: " https://www.linkedin.com/in/umang-bakshi-7441b0383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/Bakshiiumangg_/",
            },
          ],
        },


      ],
    },

        // {
        //   name: "DEEPTI GUPTA",
        //   role: "Content Team",
        //   image: "/team/deepti-gupta.jpg",
        //   bio: "Content creation and storytelling",
        //   socials: [
        //     {
        //       platform: "linkedin",
        //       url: "https://www.linkedin.com/in/deepti-gupta-7b0672296",
        //     },
        //     {
        //       platform: "instagram",
        //       url: "https://www.instagram.com/deeptigupta766",
        //     },
        //     {
        //       platform: "github",
        //       url: "https://github.com/Deepti302006",
        //     },
        //   ],
        // },

{
  name: "VIDEOGRAPHY TEAM",
  icon: <Video className="w-6 h-6" />,

  members: [
    {
      name: "SHIVAM",
      role: "Videography Lead",
      image: "/team/Shivam Kumar.jpg",
      bio: "Leading social media strategy and engagement",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/shivam-kumar-a9446037b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/shivxm_54?igsh=MTlyYmp4c20wcWNoZg==",
        },
      ],
    },

    {
      name: "ISHITA PAL",
      role: "Videography Team",
      image: "/team/ISHITA PAL.jpg",
      bio: "Leading social media strategy and engagement",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/ishita-pal-87542b380/",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/ishitaa16._?igsh=MTBrMDlrYWM1NmpmeQ==",
        },
      ],
    },
    {
      name: "MAYANK",
      role: "Videography Team",
      image: "/team/Mayank Chandok.jpg",
      bio: "",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/mayank-chandok-aba808347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
    {
      name: "MDALSA",
      role: "Videography Team",
      image: "/team/20250719_130138 - Mdalsa Sirohi.jpg",
      bio: "Leading social media strategy and engagement",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/mdalsa-sirohi-1731b1366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/mdalsa.sirohi?igsh=dno5ZHV1cWhvZHVn",
        },
      ],
    },
    {
      name: "VEER",
      role: "Videography Team",
      image: "/team/Veer Sharma.jpg",
      bio: "Leading social media strategy and engagement",
      socials: [
        {
          platform: "linkedin",
          url: " https://www.linkedin.com/in/veer-sharma-18590036a?trk=contact-info",
        },
        {
          platform: "instagram",
          url: "",
        },
      ],
    },
  ],
},






  ];

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <FaGithub className="w-4 h-4" />;
      case "linkedin":
        return <FaLinkedin className="w-4 h-4" />;
      case "instagram":
        return <FaInstagram className="w-4 h-4" />;
      default:
        return null;
    }
  };

export default function TeamSection() {
  return (
    <section id="team" className="container mx-auto px-4 py-20 text-center">
      <div className="text-center mb-16">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-glow flicker"
          style={{ fontFamily: "Stranger Things, sans-serif" }}
        >
          OUR TEAM
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground">
          The minds behind Code Zen 2.0
        </p>
      </div>

      <div className="space-y-20">
        {teamCategories.map((category, cIndex) => (
          <div key={cIndex} className="text-center">
            <div className="flex justify-center items-center mb-10 text-primary">
              <h3 className="text-xl md:text-3xl font-bold tracking-wide text-center">
                {category.name}
              </h3>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 items-stretch">
                {category.members.map((member, mIndex) => (
                  <div
                    key={mIndex}
                    className="glass-effect border border-primary/30 rounded-2xl p-8 text-center w-full max-w-lg h-full hover-glow-intense hover-lift transition-all mx-auto flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-center mb-5">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary/40">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <h4 className="text-lg md:text-xl font-bold text-card-foreground">
                        {member.name}
                      </h4>

                      <p className="text-sm md:text-base text-primary mt-1 font-semibold">
                        {member.role}
                      </p>
                    </div>

                    {/* ✅ Social Icons – Equal Normal Size */}
                    <div className="flex justify-center gap-3 mt-6">
                      {member.socials
                        .filter((s) => s.url.trim() !== "")
                        .map((social, i) => (
                          <Link
                            key={i}
                            href={social.url}
                            target="_blank"
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-black transition"
                          >
                            {social.platform === "github" && (
                              <FaGithub className="w-4 h-4" />
                            )}
                            {social.platform === "linkedin" && (
                              <FaLinkedin className="w-4 h-4" />
                            )}
                            {social.platform === "instagram" && (
                              <FaInstagram className="w-4 h-4" />
                            )}
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


