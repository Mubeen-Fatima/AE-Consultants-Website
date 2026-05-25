export type Destination = {
  code: "AU" | "NZ" | "UK" | "CA" | "US" | "EU";
  name: string;
  tagline: string;
  highlights: string[];
  gradient: string;
  flagColors: string[];
  photo: string;
};

export const DESTINATIONS: Destination[] = [
  {
    code: "AU",
    name: "Australia",
    tagline: "Head Office · Melbourne",
    highlights: [
      "Group of Eight universities",
      "Post-study work visas up to 4 years",
      "Multicultural, safe cities",
    ],
    gradient: "linear-gradient(135deg, #1e88e5 0%, #0d47a1 100%)",
    flagColors: ["#00247D", "#FFFFFF", "#CF142B"],
    photo: "/destinations/au.jpg",
  },
  {
    code: "NZ",
    name: "New Zealand",
    tagline: "Innovation & quality of life",
    highlights: [
      "Globally ranked universities",
      "Generous post-study work rights",
      "Welcoming culture",
    ],
    gradient: "linear-gradient(135deg, #00796b 0%, #004d40 100%)",
    flagColors: ["#00247D", "#FFFFFF", "#CC142B"],
    photo: "/destinations/nz.jpg",
  },
  {
    code: "UK",
    name: "United Kingdom",
    tagline: "Scotland office · UK & EU",
    highlights: [
      "Russell Group institutions",
      "1-year masters programs",
      "Graduate route visa",
    ],
    gradient: "linear-gradient(135deg, #283593 0%, #1a237e 100%)",
    flagColors: ["#012169", "#FFFFFF", "#C8102E"],
    photo: "/destinations/uk.jpg",
  },
  {
    code: "CA",
    name: "Canada",
    tagline: "Montreal · Direct admissions",
    highlights: [
      "PR-friendly pathways",
      "Co-op and internship options",
      "Affordable world-class education",
    ],
    gradient: "linear-gradient(135deg, #c62828 0%, #8e0000 100%)",
    flagColors: ["#FF0000", "#FFFFFF", "#FF0000"],
    photo: "/destinations/ca.jpg",
  },
  {
    code: "US",
    name: "United States",
    tagline: "Milwaukee, WI office",
    highlights: [
      "Top public & private universities",
      "OPT and STEM extensions",
      "Scholarships & assistantships",
    ],
    gradient: "linear-gradient(135deg, #5e35b1 0%, #311b92 100%)",
    flagColors: ["#B22234", "#FFFFFF", "#3C3B6E"],
    photo: "/destinations/us.jpg",
  },
  {
    code: "EU",
    name: "Europe",
    tagline: "Across the Schengen area",
    highlights: [
      "Affordable tuition fees",
      "English-taught programs",
      "Cultural and travel exposure",
    ],
    gradient: "linear-gradient(135deg, #00838f 0%, #006064 100%)",
    flagColors: ["#003399", "#FFCC00", "#003399"],
    photo: "/destinations/eu.jpg",
  },
];
