// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">О компании</h1>
      <p>ООО «ТК Мустанг59» - аренда спецтехники в Перми и Пермском крае</p>
    </div>
  );
}

export const metadata = {
  title: 'О компании | Мустанг59',
  description: 'Информация о компании ООО «ТК Мустанг59» - аренда спецтехники',
};