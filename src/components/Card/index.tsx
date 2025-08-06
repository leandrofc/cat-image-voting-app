import { Button } from "../Button";
import type { CardProps } from "./index.types";

export const Card = (({ cat }: CardProps) => {
    return (
        <div className="p-5 m-10 border border-gray-300 rounded-3xl text-center w-[303px]">
            <img
                src="https://cdn2.thecatapi.com/images/68s.jpg"
                className="h-[313px] w-auto object-cover"    
            />
            <div className="w-full p-2 border-b border-gray-300">
                <p className="text-sm text-gray-900">Score: 01</p>
            </div>

            <div className="flex h-auto mt-1">
                <Button variant="icon" icon="ThumbsUp" />
                <Button variant="icon" icon="ThumbsDown" />
            </div>
        </div>
    )
});