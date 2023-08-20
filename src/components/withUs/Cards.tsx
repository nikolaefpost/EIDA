import React from 'react';
import {CardType} from "../../types";
import { car, puzl, partners } from '../../assets/icons';
import Card from './Card';

import styles from "../withUs/withUs.module.scss";

const dataCards: CardType[]= [
    {
        title: "Логістика без зайвих клопотів",
        content: "Наша команда забезпечує плавний та безпечний хід робіт завдяки високопрофесійній логістичній підтримці." +
            " Ви можете бути впевнені, що ваш будівельний проект отримає своєчасні та якісні матеріали, а процес " +
            "будівництва пройде без зайвих клопотів.",
        icon: car,
        delay: .3
    },
    {
        title: "Поєднання ресурсів для майбутнього",
        content: "Ми віримо, що справжній успіх полягає у спільності. Тому ми створюємо місце, де можливості" +
            " розкриваються, а співпраця стає ключем до досягнення взаємного росту та процвітання.",
        icon: puzl,
        delay: .6
    },
    {
        title: "Створюємо разом",
        content: "Ми прагнемо бачити результати своєї спільної роботи. Ваша довіра та участь є основою нашого успіху." +
            " Ми цінуємо кожного клієнта, і ваша задоволеність - наша найбільша нагорода.",
        icon: partners,
        delay: .9
    },
]

const Cards = () => {
    return (
        <div className={styles.cards}>
            {dataCards.map(el=>(
                <Card delay={el.delay} content={el.content} title={el.title} icon={el.icon} key={el.title} />
            ))}
        </div>
    );
};

export default Cards;