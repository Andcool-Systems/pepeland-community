import React from "react";
import style from '@/app/styles/rules/page.module.css';
import NextLink from 'next/link';

const Rules = () => {
    return (
        <main className={style.main}>
            <div className={style.container}>
                <h1 style={{ marginTop: 0, fontSize: '2rem' }}>Правила публикации сайтов</h1>
                <p>Вы можете подать заявку на размещение здесь Вашего сайта, связанного с пепелендом. Для этого необходимо написать в дискорд автору проекта: <DiscordUser username="Guevin1" uid={440034971390836737} />, однако так-же необходимо, что-бы Ваш сайт соответствовал нижеперечисленным требованиям.</p>
                <h2>Требования к сайту</h2>
                <ol>
                    <li>Сайт должен иметь отношение к пепеленду, комьюнити пепеленда или межсезонью пепеленда.</li>
                    <li>Сайт не должен нарушать правила пепеленда или призывать к нарушению этих правил.</li>
                    <li>Сайт не должен нарушать закон Российской Федерации или призывать к нарушению закона.</li>
                    <li>Запрещено выдавать сайт, за проект созданный администрацией пепеленда или команду разработчиков pepeland.space.</li>
                    <li>На Вашем сайте не должно быть оскорбления других игроков сервера или администрации пепеленда.</li>
                    <li>Если вы хотите открыто или нативно рекламировать что-либо на своём сайте - уточните это у <DiscordUser username="Guevin1" uid={440034971390836737} /></li>
                    <li>Запрещено выкладывать на сайте вредоносное ПО и 18+ контент.</li>
                    <li>На Вашем сайте не должно быть личной информации о человеке, без его согласия.</li>
                </ol>
            </div>
        </main>
    )
}

const DiscordUser = ({ username, uid }: { username: string, uid: string | number }) => {
    return (
        <NextLink href={`https://discord.com/users/${uid}`} className={style.discord_link}>
            @{username}
        </NextLink>
    )
}

export default Rules;