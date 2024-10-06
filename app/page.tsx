import style from '@/app/styles/page.module.css';
import { Manrope } from "next/font/google";
import NextLink from 'next/link';
import { IconStack } from '@tabler/icons-react';
import Footer from './modules/footer.module';
import InvisibleLink from './modules/invisible_link.module';

const manrope = Manrope({ subsets: ["latin", "cyrillic"] });

export default function Home() {
    return (
        <>
            <main className={style.main}>
                <div className={style.animated}>
                    <h1 className={manrope.className} style={{ textWrap: 'nowrap' }}>Общий Домен</h1>
                    <p>Для сайтов, связанных с Пепелендом</p>
                    <InvisibleLink href='/projects' className={style.button}><IconStack width={22} height={22} /> Проекты</InvisibleLink>
                </div>
            </main>
            <Footer />
        </>
    );
}
