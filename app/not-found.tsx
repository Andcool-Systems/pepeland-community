import style from '@/app/styles/not_found/page.module.css';
import NextLink from 'next/link';
import { IconArrowBackUp } from '@tabler/icons-react';

const NotFound = () => {
    return (
        <main className={style.main}>
            <h1>Ты думал тут что-то будет?</h1>
            <video
                src="/static/something.webm"
                loop={true}
                autoPlay={true}
                muted={true}
            />
            <NextLink href="/" className={style.button}>
                <IconArrowBackUp width={20} height={20} />
                На главную
            </NextLink>
        </main>
    );
};

export default NotFound;
