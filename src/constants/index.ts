import {mail, phone, point} from "../assets";
import { INavData } from "../types";


export const navData: INavData[] = [
    {
        id: 0,
        title: "Про нас",
        href: "#about",
        isHover: true },
    {
        id: 1,
        title: "Наші проєкти",
        href: "#our_projects",
        isHover: false,
    },
    {
        id: 2,
        title:  "Приєднуйтесь до нас",
        href: "#join_in",
        isHover: false,
    },
    {
        id: 3,
        title: "Зв'яжіться з нами",
        href: "#contact_us",
        isHover: false,
    },
];


export const contacts = [
    {icon: phone, name: "phone", content: "8 800 657 59 81"},
    {icon: mail, name: "mail", content: "buildingcooperatives@mail.ua"},
    {icon: point, name: "point", content: "36231, Івано-Франківська область, місто Івано-Франківськ, вул. Прорізна, 81"},
]

export const schedule = "Пн - Пт : 10:00 - 20:00\n" + "Сб - Нд : 10:00 - 18:00";