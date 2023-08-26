import React, {FC, useState} from 'react';
import * as yup from "yup";
import {useForm, SubmitHandler} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import InputForm from "./InputForm";
import {formPersonalInfo, phoneRegExp} from './form.data';
import cn from "classnames";
import {contacts, schedule} from "../../constants";

import styles from "./questions&contacts.module.scss";


const schema = yup
    .object({
        name: yup
            .string()
            .required("введіть ім'я будь ласка"),
        telephone: yup
            .string()
            .required("введіть телефон будь ласка")
            .matches(phoneRegExp, "некоректний номер телефону"),
        questions: yup
            .string()
    })

export interface IFormInput {
    name: string;
    telephone: string;
    questions?: string;
}

const QuestionsContacts: FC = () => {
    const [click, setClick] = useState<boolean>(false);
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<IFormInput>({
        mode: "onTouched",
        resolver: yupResolver(schema),
        // values: currentUser,
        shouldFocusError: true,

    });

    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
    return (
        <div className={styles.questionsContacts} id="contact_us">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Залишились питання?</h2>
                <h5>Заповніть форму і наші консультанти звяжуться з вами у найближчий час</h5>
                <div className={styles.inputs}>
                    {formPersonalInfo.map(item => (
                            <InputForm
                                key={item.field}
                                register={register}
                                errors={errors}
                                field={item.field}
                                name={item.name}
                            />
                        )
                    )}
                </div>
                <textarea
                    className={cn(styles.textarea, {[styles.error_border]: errors["questions"]})}
                    {...register("questions")}
                    placeholder="Ваше питання..."
                    rows={5}
                />
                <button
                    className={cn({[styles.button_click]: click})}
                    type="submit"
                    onMouseUp={() => setClick(false)}
                    onMouseDown={() => setClick(true)}
                >Відправити запит
                </button>
            </form>
            <div className={styles.contacts}>
                <h3>Наші контакти</h3>
                <div className={styles.contacts_block}>
                    {contacts.map(item=>(
                        <div key={item.name} className={styles.item}>
                            <img src={item.icon} alt={item.name}/>
                            <div>{item.content}</div>
                        </div>
                    ))}
                </div>
                <h3>Розклад роботи</h3>
                <div className={styles.schedule}>{schedule}</div>
            </div>
        </div>
    );
};

export default QuestionsContacts;