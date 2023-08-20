import React, {FC, useState} from 'react';
import {caseData} from "./eco.data";
import cn from "classnames";
import {EcoType} from "../../types";
import {motion, AnimatePresence} from "framer-motion";

import styles from "./eco.module.scss";


const Eco: FC = () => {

    const [ecoCase, setEcoCase] = useState<EcoType>(caseData[0]);
    const [click, setClick] = useState<boolean>(false);
    const handleChangeCase = (title: string): void => {
        setEcoCase(pre => caseData.find(el => el.title === title) || pre)
    }
    return (
        <div className={styles.eco} id="our_projects">
            <div className={styles.eco_title}>
                <div className={styles.line}/>
                {caseData.map(el => (
                    <span
                        key={el.title}
                        className={cn({[styles.active_title]: el.title === ecoCase.title})}
                        onClick={() => handleChangeCase(el.title)}
                    >{el.title}</span>
                ))}
            </div>
            <AnimatePresence >
                <motion.div
                    key={ecoCase ? ecoCase.title : "empty"}
                    initial={false}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.eco_case}
                >
                    <div className={styles.text}>
                        <div className={styles.status}>Завершено</div>
                        <h3>
                            {ecoCase.title}: <br/>{ecoCase.full_title}
                        </h3>
                        <p>{ecoCase.content}</p>
                        <button
                            className={cn(styles.know_more, {[styles.know_more_click]: click})}
                            onMouseUp={() => setClick(false)}
                            onMouseDown={() => setClick(true)}
                        >Дізнатися більше
                        </button>
                    </div>
                    <div className={styles.pic}>
                        <img src={ecoCase.pic} alt="building"/>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Eco;