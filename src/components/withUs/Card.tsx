import React, {FC} from 'react';
import {CardType} from "../../types";
import {motion, AnimatePresence} from "framer-motion";

import styles from "../withUs/withUs.module.scss";

const Card: FC<CardType> = ({title, content, icon, delay}) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0, x: -300}}
                whileInView={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -300}}
                transition={{ease: "easeOut", delay}}
                className={styles.card}
            >
                <div className={styles.title_block}>
                    <div className={styles.img}><img src={icon} alt="icon"/></div>
                    <h3>{title}</h3>
                </div>
                <p>{content}</p>
            </motion.div>
        </AnimatePresence>
    );
};

export default Card;