import React, {FC, useState} from 'react';
import { caseData } from "./eco.data";
import cn from "classnames";
import {EcoType} from "../../types";

import styles from "./eco.module.scss";


const Eco: FC = () => {

    const [ecoCase, setEcoCase] = useState<EcoType>(caseData[0]);
    const [click, setClick]  = useState<boolean>(false);
    const handleChangeCase = (title: string): void => {
        setEcoCase(pre => caseData.find(el=> el.title === title) || pre)
    }
    return (
        <div className={styles.eco} id="our_projects">
            <div className={styles.eco_title}>
                <div className={styles.line}/>
                {caseData.map(el=>(
                    <span
                        key={el.title}
                        className={cn({[styles.active_title]: el.title === ecoCase.title})}
                        onClick={()=>handleChangeCase(el.title)}
                    >{el.title}</span>
                ))}
            </div>
            <div className={styles.eco_case}>
                <div className={styles.text}>
                    <div className={styles.status}>Завершено</div>
                    <h3>
                        {ecoCase.title}: <br/>{ecoCase.full_title}
                    </h3>
                    <p>{ecoCase.content}</p>
                    <button
                        className={cn(styles.know_more, {[styles.know_more_click]: click})}
                        onMouseUp={()=>setClick(false)}
                        onMouseDown={()=>setClick(true)}
                    >Дізнатися більше</button>
                </div>
                <div className={styles.pic}>
                    <img src={ecoCase.pic} alt="building"/>
                </div>
            </div>
        </div>
    );
};

export default Eco;