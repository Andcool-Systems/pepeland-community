import style from '@/app/styles/page.module.css';
import { Manrope } from "next/font/google";
import NextLink from 'next/link';
import NextImage from 'next/image';
import { IconStack } from '@tabler/icons-react';

const manrope = Manrope({ subsets: ["latin", "cyrillic"] });

export default function Home() {
    return (
        <main>
            <div className={style.main}>
                <div className={style.animated}>
                    <h1 className={manrope.className} style={{ textWrap: 'nowrap' }}>Общий Домен</h1>
                    <p>Для сайтов, связанных с Пепелендом</p>
                    <NextLink href='/projects' className={style.button}><IconStack width={22} height={22} /> Проекты</NextLink>
                </div>
            </div>
        </main>
    );
}
