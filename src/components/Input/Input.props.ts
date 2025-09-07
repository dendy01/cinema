import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>
{
    inputType: string;
    isIcon: boolean;
}