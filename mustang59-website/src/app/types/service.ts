import { PricingItem } from './equipment';

export interface Service {
  id: number;
  anchor: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  relatedEquipment: string[];
  features: string[];
  pricing?: PricingItem[];
  deliveryInfo?: string;
  customPricingNote?: string;
}