"use client";

import NextImage from 'next/image';
import NextLink from 'next/link';
import styles from '@/app/styles/header.module.css';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import { IconBook, IconStack, IconX, IconMenu2, IconFlagFilled } from '@tabler/icons-react';

const Header = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const pathname = usePathname();
    const path = pathname.split('/')[pathname.split('/').length - 1];

    useEffect(() => {
        setExpanded(false);
    }, [pathname]);

    return (
        <>
            <CSSTransition
                in={expanded}
                timeout={200}
                classNames={{
                    enter: styles.blur_enter,
                    enterActive: styles.blur_enter_active,
                    exit: styles.blur_exit,
                    exitActive: styles.blur_exit_active,
                }}
                unmountOnExit>
                <div className={styles.blur} />
            </CSSTransition>

            <CSSTransition
                in={expanded}
                timeout={200}
                classNames={{
                    enter: styles['menu-enter'],
                    enterActive: styles['menu-enter-active'],
                    exit: styles['menu-exit'],
                    exitActive: styles['menu-exit-active'],
                }}
                unmountOnExit>
                <div className={styles.menu}>
                    <div className={styles.title_side}>
                        <IconX className={styles.exit_menu} width={32} height={32} onClick={() => setExpanded(false)} />
                        <NextLink href='/' className={styles.title_side_2}>
                            <h1>Pepeland Community</h1>
                            <NextImage src='/static/icons/icon.svg' alt='' width={25} height={25} />
                        </NextLink>
                    </div>
                    <div className={styles.pages}>
                        <NextLink href='/projects'>Проекты <IconStack width={25} height={25} /></NextLink>
                        <NextLink href='/rules'>Правила <IconBook width={25} height={25} /></NextLink>
                        <NextLink href='https://docs.google.com/forms/d/e/1FAIpQLScMCFH470CzS0eml2EPTThp_uDBGlDDiR5lUDAYOufaL_HC9Q/viewform'>Репорты <IconFlagFilled width={25} height={25} /></NextLink>
                    </div>
                    <p style={{ position: 'absolute', bottom: 0 }}>by Guevin1 x AndcoolSystems</p>
                </div>
            </CSSTransition>
            <header className={styles.header}>
                <div className={styles.child}>
                    <div className={styles.title}>
                        <NextLink href='/'><NextImage src='/static/icons/icon.svg' alt='' width={55} height={55} className={styles.main_icon} /></NextLink>
                        <h1>Pepeland Community</h1>
                    </div>
                    <div className={styles.links}>
                        <NextLink href='/projects' className={`${path == 'projects' && styles.active}`}>Проекты</NextLink>
                        <NextLink href='/rules' className={`${path == 'rules' && styles.active}`}>Правила</NextLink>
                        <NextLink href='https://docs.google.com/forms/d/e/1FAIpQLScMCFH470CzS0eml2EPTThp_uDBGlDDiR5lUDAYOufaL_HC9Q/viewform' className={`${path == 'reports' && styles.active}`}>Репорты</NextLink>
                    </div>
                    <IconMenu2
                        className={styles.burger}
                        width={30}
                        height={30}
                        onClick={() => { setExpanded(true) }}
                    />
                </div>
            </header>
        </>
    )
}

export default Header;