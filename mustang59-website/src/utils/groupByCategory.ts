import { techData } from '@/data/catalog';

export function getTechByCategory() {
  const grouped = techData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof techData>);

  return grouped;
}

export function getCategories() {
  return Object.keys(getTechByCategory());
}