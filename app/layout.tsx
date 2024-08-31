import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import Header from "./modules/header.module";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "Pepeland Community",
    description: "Проекты, разрабатываемые сообществом Pepeland",
    manifest: '/static/manifest.webmanifest',
    icons: {
        icon: '/favicon.ico',
        apple: '/favicon.ico',
        shortcut: '/favicon.ico'
    },
    openGraph: {
        title: "Pepeland Community",
        description: "Проекты, разрабатываемые сообществом Pepeland"
    },
    other: {
        'theme-color': '#102331',
        'darkreader-lock': 'darkreader-lock'
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ru" className={inter.className}>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
