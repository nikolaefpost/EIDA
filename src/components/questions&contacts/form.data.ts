import {formPersonalInfoType} from "../../types";

export const phoneRegExp = /^[+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/

export const formPersonalInfo: formPersonalInfoType[] = [
    {
        field: "name",
        name: "Ім'я"
    },
    {
        field: "telephone",
        name: "Телефон"
    },
];