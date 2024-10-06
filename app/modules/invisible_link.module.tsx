"use client";

import { useRouter } from 'next/navigation';


const InvisibleLink = ({ children, href, className }: { children: React.ReactNode, href: string, className?: string }) => {
    const router = useRouter();

    const prefetch = () => router.prefetch(href);
    const handleClick = () => router.push(href);

    return (
        <a onClick={handleClick} className={className} style={{ cursor: 'pointer' }} onMouseEnter={prefetch}>
            {children}
        </a>
    )
}

export default InvisibleLink;