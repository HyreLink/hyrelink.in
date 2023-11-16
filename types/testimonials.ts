import { StaticImageData } from "next/image";

export type Testimonial = {
  id: number;
  name: string;
  designation: string;
  src: string | StaticImageData; 
  content: string;
};
