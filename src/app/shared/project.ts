import { Image } from './image';

export class Project {
  title: string;
  slug?: string;
  description?: string;
  images?: Image[];
  thumbnails?: Image[];
  skills?: Image[];
}
