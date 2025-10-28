
export interface PricingItem {
  model: string;
  pricePerHour: string;
  minOrder: string;
  height?: string;
  capacity?: string;
  boomLength?: string;
  characteristics?: string[];
  deliveryCost?: string;
}

export interface EquipmentDetails {
  id: number;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  specifications: {
    [key: string]: string;
  };
  pricing: PricingItem[];
  features: string[];
  deliveryInfo?: string;
  attachmentsInfo?: string;
  customPricingNote?: string;
}