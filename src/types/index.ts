



export type CardType = {
    title: string;
    content: string;
    icon: string;
    delay: number;
}

export type EcoType = {
    title: string;
    full_title: string;
    content: string;
    pic: string;
    status: boolean;
}

export type FeedbackType = {
    pic: string;
    name: string;
    department: string;
    content: string;
}

export type formPersonalInfoType = {
    field: string,
    name: string
}

export interface INavData {
    id: number;
    title: string;
    href: string;
    isHover: boolean;
}

// type AddressType = {
//     street: string;
//     city: string;
//     zipcode: string
// }
//
// export type UserType = {
//     id: number;
//     name: string;
//     email: string;
//     address: AddressType
// }
//
// export type UserListType = {
//  users: Array<UserType>
// }
//
// export type UserItemProps = {
//     user: UserType
//     onclick: (user: UserType) => void;
// }
//
// export type UniversalListType<T> = {
//     items: T[];
//     renderItem: (item: T) => React.ReactNode
// }
//
// export type TodoType = {
//     id: number;
//     title: string;
//     completed: boolean;
// }
//