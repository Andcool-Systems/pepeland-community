import React from "react";
import style from '@/app/styles/rules/page.module.css';
import NextLink from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pepeland Community · Правила",
    description: "Правила размещения проектов на сайте.",
    manifest: '/static/manifest.webmanifest',
    icons: {
        icon: '/favicon.ico',
        apple: '/favicon.ico',
        shortcut: '/favicon.ico'
    },
    openGraph: {
        title: "Pepeland Community · Правила",
        description: "Правила размещения проектов на сайте.",
        siteName: 'Pepeland Community',
        url: 'https://pepeland.space/projects'
    }
}

const Rules = () => {
    return (
        <main className={style.main}>
            <div className={style.container}>
                <h1 style={{ marginTop: 0, fontSize: '2rem', lineHeight: 'normal' }}>Правила публикации сайтов</h1>
                <p>Вы можете подать заявку на размещение здесь Вашего сайта, связанного с Пепелендом. Для этого необходимо написать в телеграм автору проекта: <TelegramUser username="Guevin1" link="https://t.me/guevin1" />, однако так-же необходимо, чтобы Ваш сайт соответствовал нижеперечисленным требованиям.</p>
                <h2>Требования к сайту</h2>
                <ol>
                    <li>Сайт должен иметь отношение к Пепеленду, комьюнити Пепеленда или межсезонью Пепеленда.</li>
                    <li>Сайт не должен нарушать правила Пепеленда или призывать к нарушению этих правил.</li>
                    <li>Сайт не должен нарушать закон Российской Федерации или призывать к нарушению закона.</li>
                    <li>Запрещено выдавать сайт за проект, созданный администрацией Пепеленда или командой разработчиков pepeland.space.</li>
                    <li>На Вашем сайте не должно быть оскорбления других игроков сервера или администрации Пепеленда.</li>
                    <li>Если вы хотите открыто или нативно рекламировать что-либо на своём сайте - уточните это у <TelegramUser username="Guevin1" link="https://t.me/guevin1" /></li>
                    <li>Запрещено выкладывать на сайте вредоносное ПО и 18+ контент.</li>
                    <li>На Вашем сайте не должно быть личной информации о человеке, без его согласия.</li>
                </ol>
            </div>
        </main>
    )
}

const TelegramUser = ({ username, link }: { username: string, link: string }) => {
    return (
        <NextLink href={link} className={style.telegram_link}>
            @{username}
        </NextLink>
    )
}

export default Rules;
