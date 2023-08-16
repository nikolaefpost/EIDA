import React from 'react';

export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

export type CardType = {
    title: string;
    content: string;
    icon: string;
}

type AddressType = {
    street: string;
    city: string;
    zipcode: string
}

export type UserType = {
    id: number;
    name: string;
    email: string;
    address: AddressType
}

export type UserListType = {
 users: Array<UserType>
}

export type UserItemProps = {
    user: UserType
    onclick: (user: UserType) => void;
}

export type UniversalListType<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export type TodoType = {
    id: number;
    title: string;
    completed: boolean;
}

export type TodoItemProps = {
    todo: TodoType
}