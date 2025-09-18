import { techData } from '@/data/catalog';
import Link from 'next/link';
import CategoryPageClient from './CategoryPageClient';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categoryName = decodeURIComponent(resolvedParams.category);
  
  return <CategoryPageClient categoryName={categoryName} />;
}