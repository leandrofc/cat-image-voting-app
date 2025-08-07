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
    score,
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
        ThumbsUp: (
            <span data-testid="icon-thumbs-up">
              <ThumbsUp
                className={`
                  ${disabled && "text-gray-300"}
                  ${score && score > 0 && "text-orange-700"}
                `}
              />
            </span>
          ),
        ThumbsDown: (
            <span data-testid="icon-thumbs-down">
                <ThumbsDown
                className={`
                    ${disabled && "text-gray-300"}
                    ${score && score < 0 && "text-orange-700"}
                `}
                />
            </span>
        ),
    }

    return (
        <button
            {...rest}
            className={`rounded-xl text-md w-full flex items-center justify-center
                disabled:cursor-not-allowed disabled:hover:scale-100
                hover:scale-105 transition-transform antialiased
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