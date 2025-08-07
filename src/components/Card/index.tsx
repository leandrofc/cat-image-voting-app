import { useContext, useState } from "react";
import { Button } from "../Button";
import type { CardProps } from "./index.types";
import { CatContext } from "../../context/CatContext";

export const Card = (({ cat, onVote, voted }: CardProps) => {
    const [loaded, setLoaded] = useState(false);

    const { id, url, score } = cat;

    const { voting: { isLoading, value }  } = useContext(CatContext)
    
    const votingUp = value > 0;

    return (
        <div data-testid="card" className="p-5 m-10 border border-gray-300 rounded-3xl text-center w-[303px]">
            <img
                src={url}
                onLoad={() => setLoaded(true)}
                alt="Cat"
                className={`
                    h-[313px] w-[265px] object-cover transition-opacity duration-500
                    ${loaded ? 'opacity-100' : 'opacity-0'}
                `}    
            />

            <div className="w-full p-2 border-b border-gray-300">
                <p className="text-sm text-gray-900 antialiased">Score: {score || 0}</p>
            </div>

            <div className="flex h-auto mt-1">
                <Button
                    variant="icon"
                    icon="ThumbsUp"
                    onClick={() => onVote(id, 1)}
                    disabled={voted || isLoading}
                    isSelected={voted}
                    score={score}
                    isLoading={isLoading && votingUp}
                />
                <Button
                    variant="icon"
                    icon="ThumbsDown"
                    onClick={() => onVote(id, -1)}
                    disabled={voted || isLoading}
                    isSelected={voted}
                    score={score}
                    isLoading={isLoading && !votingUp}
                />
            </div>
        </div>
    )
});