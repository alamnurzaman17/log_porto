export interface Project {
  ulid: string;
  mainImageUrl: string;
  additionalImagesUrl: string[];
  title: string;
  subTitle: string;
  client: string;
  liveUrl: string;
  service: string;
  date: string; // ISO date string
  about: string;
  process: string;
  challenge: string;
  result: string;
  technologies: string;
}
