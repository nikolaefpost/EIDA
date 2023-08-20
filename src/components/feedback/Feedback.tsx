import React, {FC, useEffect, useState} from 'react';
import cn from "classnames";
import {feedbackData} from "./feedback.data";
import {FeedbackType} from "../../types";
import FeedbackCard from './FeedbackCard';
import {useMediaQuery} from "../../hooks/useMediaQuery";

import styles from "./feedback.module.scss";

const Feedback: FC = () => {
    const matches = useMediaQuery('(min-width: 501px)');
    const [countFeedback, setCountFeedback] = useState<number>(0)
    const [feedback, setFeedback] = useState<FeedbackType[]>(feedbackData.slice(0,2))
    const [click, setClick]  = useState<boolean>(false);
    const sliderControlCount: number[] = matches? [0, 2, 4, 6]: [0, 1, 2, 3, 4, 5, 6, 7]

    useEffect(()=>{
        if (matches) setFeedback(feedbackData.slice(countFeedback,countFeedback+2));
        else setFeedback(feedbackData.slice(countFeedback,countFeedback+1));
    }, [countFeedback, matches])
    return (
        <div className={styles.feedback} id="join_in">
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
                <div className={styles.slider_control}>
                    {sliderControlCount.map(el=>(
                        <div
                            key={el}
                            className={cn(styles.line, {[styles.active_line]: el === countFeedback})}
                            onClick={()=>setCountFeedback(el)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feedback;