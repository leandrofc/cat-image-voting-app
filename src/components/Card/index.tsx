import { Button } from "../Button";
import type { CardProps } from "./index.types";

export const Card = (({ cat, onVote, voted }: CardProps) => {
    const { id, url, score } = cat;

    return (
        <div className="p-5 m-10 border border-gray-300 rounded-3xl text-center w-[303px]">
            <img
                src={url}
                alt="Cat"
                className="h-[313px] w-[265px] object-cover"    
            />

            <div className="w-full p-2 border-b border-gray-300">
                <p className="text-sm text-gray-900">Score: {score}</p>
            </div>

            <div className="flex h-auto mt-1">
                <Button
                    variant="icon"
                    icon="ThumbsUp"
                    onClick={() => onVote(id, 1)}
                    disabled={voted}
                    isSelected={voted}
                />
                <Button
                    variant="icon"
                    icon="ThumbsDown"
                    onClick={() => onVote(id, -1)}
                    disabled={voted}
                    isSelected={voted}
                />
            </div>
        </div>
    )
});