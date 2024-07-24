import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LTG Pinturas e Drywall - Qualidade e Satisfação",
  description: "LTG Pinturas - Pinturas, Drywall e Reformas com qualidade e excelência!",
  icons: "/favicon.png",
  metadataBase: new URL("https://www.ltgpinturasedrywall.com.br"),
  openGraph: {
    title: "LTG Pinturas e Drywall - Qualidade e Satisfação",
    description: "LTG Pinturas - Pinturas, Drywall e Reformas com qualidade e excelência!",
    url: "https://www.ltgpinturasedrywall.com.br",
    siteName: "LTG Pinturas e Drywall",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: 'https://sa-east-1.graphassets.com/clwqdkiy400yu07ls56ql92po/clyortf0k02gw07lwhwa8n98m',
        width: 1250,
        height: 1250,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  keywords: [
    "pintura residencial", "pintura comercial", "drywall", "reformas", "alta qualidade", "satisfação garantida", 
    "renovação de ambientes", "acabamento impecável", "serviços de pintura", "pintura de interiores", "pintura de exteriores", 
    "projetos personalizados", "design de interiores", "revestimento de paredes", "soluções em drywall", "paredes de gesso", 
    "isolamento acústico", "isolamento térmico", "manutenção de pintura", "tintas de alta qualidade", "reformas residenciais", 
    "reformas comerciais", "serviços de drywall", "estruturas de drywall", "revestimento de gesso", "decoração de interiores", 
    "acabamentos", "texturização de paredes", "pintura decorativa", "pintura industrial", "consultoria em reformas", 
    "planejamento de reformas", "execução de reformas", "serviços de gesso", "molduras de gesso", "forros de gesso", 
    "divisórias de gesso", "parede drywall", "teto drywall", "reformas rápidas", "orçamento de reformas", "projetos de pintura",
    "pintura predial", "fachadas comerciais", "fachadas residenciais", "revestimento de fachadas", "projetos de gesso", "execução de gesso",
    "acabamento de gesso", "serviços profissionais", "qualidade e excelência"
  ]
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_br" className="scroll-smooth focus:scroll-auto">
      <body className={`bg-zinc-50 text-gray-900 ${inter.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
