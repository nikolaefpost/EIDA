import React, {FC, useState} from 'react';

import styles from "./feedback.module.scss"
import cn from "classnames";
import {feedbackData} from "./feedback.data";
import {FeedbackType} from "../../types";
import FeedbackCard from './FeedbackCard';

const Feedback: FC = () => {

    const [feedback, setFeedback] = useState<FeedbackType[]>(feedbackData.slice(0,2))
    const [click, setClick]  = useState<boolean>(false);
    return (
        <div className={styles.feedback}>
            <div className={styles.experience}>
                <h2>У нас є 15 років досвіду у будівництві</h2>
                <p>Станьте і ви частиною неперевершеного проекту, що забезпечує екологічне, комфортне та сучасне життя!</p>
                <button
                    onMouseUp={()=>setClick(false)}
                    onMouseDown={()=>setClick(true)}
                    className={cn({[styles.click_button]: click})}
                >Приєднатися до нас</button>
            </div>
            <h2 className={styles.feedback_title}>Що говорять про нас ті хто вже з нами</h2>
            <div className={styles.feedback_block}>
                <div className={styles.slider}>
                    {feedback.map(el=>(
                        <FeedbackCard {...el} key={el.name}/>
                    ))}
                </div>
                <div className={styles.slider_control}></div>
            </div>
        </div>
    );
};

export default Feedback;