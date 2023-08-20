import React, {FC} from 'react';
import {FeedbackType} from "../../types";
import {motion, AnimatePresence} from "framer-motion"
import styles from "./feedback.module.scss";


const FeedbackCard: FC<FeedbackType> = ({pic, name, content, department}) => {
    return (
        <AnimatePresence>
            <motion.div
                key={name}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{duration: .5}}
                className={styles.feedbackCard}
            >
                <img src={pic} alt="name" className={styles.photo}/>
                <div className={styles.text}>
                    <h3>{name}</h3>
                    <h5>{department}</h5>
                    <p>{content}</p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FeedbackCard;