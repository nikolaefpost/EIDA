import React, {FC} from 'react';
import {FeedbackType} from "../../types";

import styles from "./feedback.module.scss";


const FeedbackCard: FC<FeedbackType> = ({pic, name, content, department}) => {
    return (
        <div className={styles.feedbackCard}>
            <img src={pic} alt="name" className={styles.photo}/>
            <div className={styles.text}>
                <h3>{name}</h3>
                <h5>{department}</h5>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default FeedbackCard;