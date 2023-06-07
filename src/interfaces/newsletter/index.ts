import { BrandInterface } from 'interfaces/brand';
import { UserInterface } from 'interfaces/user';

export interface NewsletterInterface {
  id?: string;
  name: string;
  brand_id: string;
  creator_id: string;

  brand?: BrandInterface;
  user?: UserInterface;
  _count?: {};
}
