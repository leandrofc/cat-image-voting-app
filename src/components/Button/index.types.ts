import type { ButtonHTMLAttributes } from "react";

export type VariantType = "default" | "icon";
export type IconType = "ThumbsUp" | "ThumbsDown"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string,
    variant?: VariantType,
    isSelected?: boolean,
    icon?: IconType,
    isLoading?: boolean
}