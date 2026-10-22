export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a public/ asset path with the configured base path (needed on GitHub Pages). */
export const asset = (path: string) => `${basePath}${path}`;

export const profile = {
  name: "Pascal Jonathan",
  firstName: "Pascal",
  birthDate: "1995-04-27",
  birthDisplay: "27 April 1995",
  birthplace: "Butiama, Mara Region",
  headline: ["Sign Language & Interpretation Director", "Military Officer"],
  roles: [
    "Chemical Engineer",
    "Teacher",
    "Entrepreneur",
    "Computer Engineer",
    "Sign Language Interpreter",
  ],
  city: "Dar es Salaam, Tanzania",
  degree: "Master",
  phone: "+255 622 601 222",
  phoneHref: "tel:+255622601222",
  email: "pascaljonathan777@gmail.com",
  whatsapp: "https://wa.me/255622601222",
  address: "P.O. Box 35091, Dar es Salaam, Tanzania",
  freelance: "Available",
  portrait: "/images/port.jpg",
};

export const bio = [
  `Pascal Jonathan, born on 27 April 1995 in Butiama, Mara Region, is a dedicated professional with a rich background in academia, military service and community development. He has earned qualifications in diverse fields, including chemical engineering, IT, education, law and leadership, from prestigious institutions such as the University of Dar es Salaam and the Open University of Tanzania. Passionate about supporting students and people with disabilities, Pascal is also a gospel musician, the author of the book “Ushujaa Katika Giza Zito” and a football enthusiast. His unwavering commitment to making a difference defines his inspiring journey.`,
  `With a strong foundation in academics and professional experience, I have dedicated my career to bridging communication gaps and serving my community. My work spans diverse fields, including sign language interpretation, military operations and education. I am deeply committed to empowering others, especially people with disabilities, and contributing to society through leadership, discipline and innovation. My passion for learning and service fuels my drive to create meaningful change in every role I take on.`,
];

export const intro =
  "A versatile professional with expertise in sign language interpretation, military operations and community service — passionate about bridging communication gaps and empowering individuals, especially those with disabilities, while upholding discipline and leadership in military service.";

export const highlights = [
  { title: "Sign Language", text: "Directing sign language and interpretation work that bridges communication gaps.", icon: "hands" },
  { title: "Military Service", text: "Serving with discipline and leadership since 2019.", icon: "shield" },
  { title: "Education", text: "Qualifications in engineering, IT, education, law and leadership.", icon: "cap" },
  { title: "Disability Advocacy", text: "Supporting students and people with disabilities.", icon: "heart" },
  { title: "Gospel Music", text: "A gospel musician sharing faith through song.", icon: "music" },
  { title: "Author", text: "Writer of the book “Ushujaa Katika Giza Zito”.", icon: "book" },
] as const;

export type IconName = (typeof highlights)[number]["icon"];

export const education = [
  { title: "Bachelor of Science in Education", place: "University of Dodoma", period: "" },
  { title: "Bachelor of Arts in IT and Computer Science", place: "University of Dar es Salaam", period: "2010 – 2014" },
];

export const experience = [
  { title: "Staff Member", place: "University of Dar es Salaam", period: "2021 – Present" },
  { title: "Military Personnel", place: "", period: "2019 – Present" },
];

export const resumeIntro =
  "An overview of my professional journey across sign language interpretation, military service, education and leadership — each step reflecting a commitment to service, growth and excellence.";

export const book = {
  title: "Ushujaa Katika Giza Zito",
  author: "Pascal Jonathan",
  cover: "/images/image1.jpg",
};

export const gallery = [
  { src: "/images/image6.jpg", w: 720, h: 1080, alt: "Pascal Jonathan in a pink tailored outfit holding a leather bag" },
  { src: "/images/image7.jpg", w: 809, h: 1080, alt: "Pascal Jonathan in a white embroidered outfit" },
  { src: "/images/image1.jpg", w: 680, h: 1080, alt: "Cover of the book Ushujaa Katika Giza Zito by Pascal Jonathan" },
  { src: "/images/image8.jpg", w: 540, h: 1002, alt: "Pascal Jonathan in a navy blazer with a leather bag" },
  { src: "/images/image10.jpg", w: 720, h: 1080, alt: "Pascal Jonathan seated, dressed in black" },
  { src: "/images/image4.jpg", w: 540, h: 1064, alt: "A page from Ushujaa Katika Giza Zito with graduation photos" },
  { src: "/images/image11.jpg", w: 720, h: 1080, alt: "Pascal Jonathan seated in a mustard outfit" },
  { src: "/images/image5.jpg", w: 780, h: 1080, alt: "A page from Ushujaa Katika Giza Zito with a photo of two friends" },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "book", label: "Book" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];
