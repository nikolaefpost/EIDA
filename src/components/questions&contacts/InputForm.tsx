import React, {FC} from 'react';
import cn from "classnames";

import styles from "./questions&contacts.module.scss";

// interface IInputForm{
//     register: (name: string) => void,
//     errors: Record<string, any>,
//     field: string,
//     name: string
// }

const InputForm: FC<any> = ({register, errors={}, field, name}) => {
    return (
        <div className={styles.input_block}  key={field}>
            {!!errors[field] && <span className={styles.error}>{errors[field].message}</span>}
            <input
                className={cn({[styles.error_border]:errors[field]})}
                type="text"
                placeholder={name}
                {...register(field)}
            />
        </div>
    );
};

export default InputForm;