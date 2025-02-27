'use client';

import axios from 'axios';
import { JSX, useEffect, useState } from 'react';
import AdaptiveGrid from '../modules/adaptive_grid.module';
import style from '@/app/styles/projects/page.module.css';
import NextLink from 'next/link';
import NextImage from 'next/image';
import IconSvg from '@/app/icon.svg';

interface Project {
    id: number;
    subdomain: string;
    name: string;
    description: string;
    banner: string | null;
    created_at: Date;
    updated_at: Date;
    icon: string | null;
    creator: string;
}

const Project = ({ element }: { element: Project }) => {
    return (
        <div className={style.card}>
            <div className={style.header}>
                {!!element.banner && (
                    <div className={style.banner_container}>
                        <NextImage
                            className={style.banner}
                            src={element.banner}
                            alt=""
                            fill={true}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                )}
                <NextLink
                    href={`https://${element.subdomain}.${window.location.host}`}
                >
                    {element.icon ? (
                        <NextImage
                            src={element.icon}
                            alt=""
                            className={style.icon}
                            draggable={false}
                            width={96}
                            height={96}
                            priority={true}
                        />
                    ) : (
                        <IconSvg
                            width={96}
                            height={96}
                            className={style.icon}
                        />
                    )}
                </NextLink>
            </div>
            <div className={style.body}>
                <div className={style.body_top}>
                    <div className={style.icon_placeholder} />
                    <div className={style.title}>
                        <NextLink
                            href={`https://${element.subdomain}.${window.location.host}`}
                        >
                            {element.name}
                        </NextLink>
                        <p>by {element.creator}</p>
                    </div>
                </div>
                <p>{element.description}</p>
            </div>
        </div>
    );
};

const Projects = () => {
    const [elements, setElements] = useState<JSX.Element[]>([]);

    useEffect(() => {
        axios
            .get(process.env.NEXT_PUBLIC_API_URL + '/projects')
            .then(response => {
                if (response.status === 200) {
                    const data = response.data as Project[];
                    const elements = data.map(element => (
                        <Project key={element.id} element={element} />
                    ));
                    setElements(elements);
                }
            });
    }, []);

    return (
        <div
            className={style.parent}
            style={
                elements && elements.length > 0
                    ? { opacity: '1', transform: 'translateY(0)' }
                    : { opacity: '0', transform: 'translateY(50px)' }
            }
        >
            <AdaptiveGrid child_width={400} className={style}>
                {elements}
            </AdaptiveGrid>
        </div>
    );
};

export default Projects;
