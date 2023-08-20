import React, {FC, useState} from 'react';
import cn from "classnames";

import styles from "./titleScreen.module.scss";

const TitleScreen: FC = () => {

    const [click, setClick] = useState<boolean>(false);

    return (
        <div className={styles.content}>
            <div className={styles.text_block}>
                <h1>Розбудова кооперативів</h1>
                <h4>Поєднуємо постачальників будматеріалів зі своїми споживачами та логістикою.</h4>
                <button
                    className={cn({[styles.button_click]: click})}
                    onMouseUp={() => setClick(false)}
                    onMouseDown={() => setClick(true)}
                >Дізнатися більше</button>
            </div>
        </div>
    );
};

export default TitleScreen;