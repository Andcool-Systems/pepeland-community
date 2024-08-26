"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import AdaptiveGrid from "../modules/adaptive_grid.module";
import style from '@/app/styles/projects/page.module.css';
import NextLink from 'next/link';

interface Project {
    id: number,
    subdomain: string,
    name: string,
    description: string,
    created_at: Date,
    updated_at: Date,
    icon: string,
    creator: {
        id: number,
        name: string
        created_at: Date,
        updated_at: Date,
    }
}
const Projects = () => {
    const [elements, setElements] = useState<JSX.Element[]>([]);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API_URL + '/projects').then((response) => {
            if (response.status === 200) {
                const data = response.data as Project[]
                const elements = data.map((element) => {
                    return (
                        <div className={style.card} key={element.id}>
                            <div className={style.header}>
                                <NextLink href={`https://${element.subdomain}.${window.location.host}`}>
                                    <img src={element.icon ?? '/static/icons/icon.svg'} alt='' className={style.icon} />
                                </NextLink>
                            </div>
                            <div className={style.body}>
                                <div className={style.body_top}>
                                    <div className={style.icon_placeholder} />
                                    <div className={style.title}>
                                        <NextLink href={`https://${element.subdomain}.${window.location.host}`}>{element.name}</NextLink>
                                        <p>by {element.creator.name}</p>
                                    </div>
                                </div>
                                <p>{element.description}</p>
                            </div>
                        </div>
                    )
                });
                setElements(Array(10).fill(elements[0]));
            }
        })
    }, []);

    return (
        <div className={style.parent} style={elements.length ? { opacity: "1", transform: "translateY(0)" } : { opacity: "0", transform: "translateY(50px)" }}>
            <AdaptiveGrid child_width={400} className={style}>{elements}</AdaptiveGrid>
        </div>

    );
}

export default Projects;