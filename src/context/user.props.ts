import type { ReactNode } from "react";

export interface UserProps
{
    children: ReactNode;
}

export interface UserModel
{
    userName: string;
    isLogined: boolean;
}