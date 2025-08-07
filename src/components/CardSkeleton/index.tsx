import { Skeleton } from "../ui/skeleton";

export const CardSkeleton = (() => {
    return (
        <div data-testid="card-skeleton" className="p-5 m-10 border border-gray-300 rounded-3xl text-center w-[303px]">

            <Skeleton className="h-[313px] w-[265px] bg-gray-300" />

            <div className="flex justify-center w-full p-2 border-b border-gray-300">
                <Skeleton className="h-[18px] w-[90px] rounded-xl bg-gray-300" />
            </div>

            <div className="flex justify-between h-auto mt-1">
                <Skeleton className="h-[35px] w-[124px] rounded-xl bg-gray-300" />
                <Skeleton className="h-[35px] w-[124px] rounded-xl bg-gray-300" />
            </div>
        </div>
    )
});