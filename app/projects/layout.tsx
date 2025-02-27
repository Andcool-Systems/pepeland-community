import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pepeland Community · Проекты',
    description: 'Список проектов, связанных с Пепелендом.',
    manifest: '/static/manifest.webmanifest',
    icons: {
        icon: '/favicon.ico',
        apple: '/favicon.ico',
        shortcut: '/favicon.ico'
    },
    openGraph: {
        title: 'Pepeland Community · Проекты',
        description: 'Список проектов, связанных с Пепелендом.',
        siteName: 'Pepeland Community',
        url: 'https://pepeland.space/projects'
    }
};

export default function ProjectsLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return <>{children}</>;
}
