import { createContext, useState, useCallback } from 'react'
import type { CatType } from '../types/Cat'
import { api } from '../lib/api'
import { getSubId } from '../utils/subId'
import type { CatContextType } from '../types/CatContextType'

export const CatContext = createContext<CatContextType>({} as CatContextType)

export const CatProvider = ({ children }: { children: React.ReactNode }) => {
    const [cats, setCats] = useState<CatType[]>([])
    const [votes, setVotes] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

    const fetchCats = useCallback(async () => {
        setLoading(true)
        const res = await api.get('/images/search?limit=9')
        setCats(res.data)
        setLoading(false)
    }, [])

    const vote = async (image_id: string, value: number) => {
        const sub_id = getSubId()
        await api.post('/votes', { image_id, value, sub_id })
        const voteRes = await api.get(`/votes?sub_id=${sub_id}`)
        const scores = voteRes.data.reduce((acc: Record<string, number>, vote: any) => {
            acc[vote.image_id] = (acc[vote.image_id] || 0) + vote.value
            return acc
        }, {})
        setVotes((prev) => [...prev, image_id])
        setCats((prevCats) =>
            prevCats.map((cat) =>
                cat.id === image_id ? { ...cat, score: scores[cat.id] } : cat
            )
        )
    }

    const hasVoted = (id: string) => votes.includes(id)

    return (
        <CatContext.Provider value={{ cats, votes, loading, fetchCats, vote, hasVoted }}>
            {children}
        </CatContext.Provider>
    )
}