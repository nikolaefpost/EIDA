import React, {FC, useRef, useState} from 'react';

import styles from "./titleScreen.module.scss";

const TitleScreen: FC = () => {



    return (
        <div className={styles.content}>
            <div className={styles.text_block}>
                <h1>Розбудова кооперативів</h1>
                <h4>Поєднуємо постачальників будматеріалів зі своїми споживачами та логістикою.</h4>
                <button>Дізнатися більше</button>
            </div>
        </div>
    );
};

export default TitleScreen;