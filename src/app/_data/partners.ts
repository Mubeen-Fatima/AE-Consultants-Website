export type Partner = {
  name: string;
  logo: string;
  /** Inner padding in px. Lower = bigger visual logo. Default ~10. */
  pad?: number;
};

export const AU_PARTNERS: Partner[] = [
  { name: "La Trobe University", logo: "/partners/la-trobe.jpg", pad: 4 },
  { name: "RMIT University", logo: "/partners/rmit.png", pad: 12 },
  { name: "Murdoch University", logo: "/partners/murdoch.jpg", pad: 4 },
  { name: "Curtin University", logo: "/partners/curtin.png", pad: 10 },
  { name: "Flinders University", logo: "/partners/flinders.jpg", pad: 4 },
  { name: "Deakin University", logo: "/partners/deakin.png", pad: 4 },
  { name: "Federation University", logo: "/partners/federation.jpg", pad: 6 },
  { name: "Western Sydney University", logo: "/partners/western-sydney.png", pad: 4 },
  { name: "ATMC", logo: "/partners/atmc.png", pad: 4 },
  { name: "Australian Institute of Business Intelligence", logo: "/partners/aibi.jpg", pad: 6 },
  { name: "Australasian Academy of Higher Education", logo: "/partners/aahe.jpg", pad: 4 },
  { name: "City College", logo: "/partners/city-college.jpg", pad: 6 },
  { name: "Institute of Business & Management", logo: "/partners/ibm.png", pad: 4 },
  { name: "Stanley College", logo: "/partners/stanley.png", pad: 4 },
  { name: "Sydney Metro College", logo: "/partners/sydney-metro.png", pad: 4 },
  { name: "ACMI", logo: "/partners/acmi.png", pad: 4 },
  { name: "Lyons College", logo: "/partners/lyons.png", pad: 4 },
  { name: "Ozford College", logo: "/partners/ozford.png", pad: 4 },
  { name: "National Training College of Australia", logo: "/partners/ntca.png", pad: 4 },
  { name: "EIC College", logo: "/partners/eic.jpg", pad: 4 },
  { name: "Blue Lotus College", logo: "/partners/blue-lotus.jpg", pad: 4 },
];

export const NZ_PARTNERS: Partner[] = [
  { name: "Auckland University of Technology", logo: "/partners/aut.jpg", pad: 4 },
  { name: "University of Auckland", logo: "/partners/auckland.jpg", pad: 4 },
  { name: "University of Waikato", logo: "/partners/waikato.jpg", pad: 4 },
  { name: "Victoria University of Wellington", logo: "/partners/victoria-wellington.png", pad: 6 },
  { name: "Massey University", logo: "/partners/massey.jpg", pad: 4 },
];

export const EU_PARTNERS: Partner[] = [
  { name: "IHMGS Business School, Spain", logo: "/partners/ihmgs.jpg", pad: 4 },
];
