import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './styles/globals.css';
import Header from '@/components/Layout/Header';
import HomePage from './page';
import Footer from '@/components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Мустанг59 - Аренда спецтехники в Перми | ООО ТК Мустанг59',
  description: 'ООО «ТК Мустанг59» - аренда спецтехники в Перми и Пермском крае. Экскаваторы, погрузчики, манипуляторы, самосвалы. Выгодные цены, с оператором.',
  keywords: 'аренда спецтехники пермь, аренда спецтехники пермский край, услуги спецтехники, аренда экскаватора, аренда погрузчика, аренда манипулятора, аренда самосвала, строительная техника в аренду',
  other: {
    'yandex-verification': '3bf313c78f4c0767',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <link rel="icon" href="https://mustang59.ru/images/logotip.png" type="image/x-icon"></link>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ООО ТК Мустанг59",
              "url": "https://mustang59.ru",
              "logo": "https://mustang59.ru/images/logotip.png",
              "description": "Аренда спецтехники в Перми и Пермском крае",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Пермь", 
                "addressRegion": "Пермский край"
              },
              "telephone": "+7-904-847-49-09"
            })
          }}
        />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" 
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}