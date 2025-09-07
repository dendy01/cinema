import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>
{
    children: ReactNode;
    icon?: string;
    buttonActive?: string;
    buttonClass?: string;
}