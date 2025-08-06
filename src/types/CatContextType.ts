import type { CatType } from "./Cat"

export interface CatContextType {
    cats: CatType[]
    votes: string[]
    loading: boolean
    fetchCats: () => void
    vote: (image_id: string, value: number) => void
    hasVoted: (id: string) => boolean
}