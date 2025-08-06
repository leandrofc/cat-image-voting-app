import type { CatType } from "../../types/Cat";

export interface CardProps {
    cat: CatType,
    onVote: (image_id: string, value: number) => void,
    voted: boolean
}