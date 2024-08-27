import style from '@/app/styles/page.module.css';
import { Manrope } from "next/font/google";
import NextLink from 'next/link';
import NextImage from 'next/image';

const manrope = Manrope({ subsets: ["latin", "cyrillic"] });

export default function Home() {
    return (
        <main>
            <div className={style.main}>
                <div className={style.animated}>
                    <h1 className={manrope.className} style={{ textWrap: 'nowrap' }}>Общий Домен</h1>
                    <p>Для сайтов, связанных с Пепелендом</p>
                    <NextLink href='/rules' className={style.button}><NextImage src='/static/icons/book.svg' alt='' width={20} height={20} /> Правила</NextLink>
                </div>
            </div>
        </main>
    );
}
