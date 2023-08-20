import React, {FC} from 'react';
import {menu, logo} from "../../assets";
import {navData} from "../../constants";
import {useMediaQuery} from "../../hooks/useMediaQuery";

import styles from "./footer.module.scss";

const Footer: FC = () => {

    let today = new Date();
    const matches = useMediaQuery('(min-width: 1000px)');
    return (
        <footer>
                <img src={matches ? menu: logo} alt="menu"/>
                <nav className={styles.text}>
                    {matches ? navData.map(item => (
                        <a key={item.href} href={item.href}>{item.title}</a>
                    )):
                        <a
                            href="https://yemelyanov-eduard-frontend.netlify.app/"
                            className={styles.copyright}
                        >{today.getFullYear()} Pilot ©</a>
                    }
                </nav>

        </footer>
    );
};

export default Footer;