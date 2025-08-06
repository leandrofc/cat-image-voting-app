import type { ButtonProps, IconType, VariantType } from "./index.types";

import { Loader, ThumbsUp, ThumbsDown } from "react-feather";

export const Button = (({
    variant = "default",
    text,
    onClick,
    isLoading = false,
    disabled = false,
    isSelected = false,
    icon,
    ...rest
}: ButtonProps) => {

    const isIconVariant = variant === "icon";

    const variantsClasses = {
        default: "bg-black p-4 uppercase text-white",
        icon: "bg-transparent p-4",
    }

    const iconColor = {
        default: "text-white",
        icon: "text-gray-900",
    }

    const Icon = {
        ThumbsUp:   <ThumbsUp
                        className={`
                            ${isSelected ? "text-orange-700": "text-gray-700" }
                            ${disabled && "text-gray-300" }
                        `}
                    />,
        ThumbsDown: <ThumbsDown
                        className={`
                            ${isSelected ? "text-orange-700": "text-gray-700" }
                            ${disabled && "text-gray-300" }
                        `}
                    />
    }

    return (
        <button
            {...rest}
            className={`rounded-xl text-md w-full flex items-center justify-center
                disabled:cursor-not-allowed disabled:hover:scale-100
                hover:scale-105 transition-transform
                ${!isIconVariant && "disabled:opacity-50"}
                ${variantsClasses[variant as VariantType]}
                ${isLoading && "pointer-events-none"}
                ${isSelected ? "bg-gray-300 text-blue-700" : "text-gray-900"}
            `}
            disabled={disabled}
            onClick={onClick}
        >
            {isIconVariant && !isLoading &&Icon[icon as IconType]}
            {isLoading && <Loader className={`animate-spin-variable ${iconColor[variant as VariantType]}`} size={20} data-testid="loading-icon" />}
            {!isLoading && text}
        </button>
    )
});