export interface Clinic {
  name: string;
  days: string[];
  hours: string;
  area: string;
  address?: string;
  mapsLink?: string;
  cid?: string;
  placeUrl?: string;
}

export const clinics: Clinic[] = [
  {
    name: "Cheezal Dental & Medical Hospital",
    days: ["Monday", "Wednesday", "Friday"],
    hours: "6:00 PM – 7:30 PM",
    area: "Gulistan-e-Johar, Karachi",
    address: "Street 26, behind Noman Heaven, Block 15, Gulistan-e-Johar, Karachi",
    mapsLink: "https://www.google.com/maps/place/Cheezal+Dental+%26+Medical+Hospital/data=!4m2!3m1!1s0x0:0x69c7b63ad0513479",
    cid: "7622261258067195001",
  },
  {
    name: "Fakhr-e-Ghazi Medical, Dental & Diagnostic Center",
    days: ["Tuesday", "Thursday"],
    hours: "On Call",
    area: "Gulistan-e-Johar, Karachi",
    address: "B-1, Sunny Castle, Block 14, Gulistan-e-Johar, Karachi",
    mapsLink: "https://www.google.com/maps/place/Fakhr+e+Ghazi+Medical,+Dental+and+Diagnostic+Center/data=!4m2!3m1!1s0x0:0xa1d22b80d567bb5a",
    cid: "11660430217551788890",
  },
];
