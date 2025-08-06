import Gallery from "../../components/Gallery"
import Logo from "/catImageVotingLogo.png";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { CatContext } from "../../context/CatContext";

function VotePage() {
    const { fetchCats, loading, voting: { isLoading } } = useContext(CatContext)

    return (
        <div className="flex flex-col items-center w-screen h-screen pt-7 pb-7 justify-between">
            <img
                src={Logo}  
                className="w-[244px] object-contain mt-3 mb-10"
            />

            <div className="flex flex-col w-full items-center gap-5">
                <h1 className="text-xl font-bold w-[90%] text-center leading-[44px]">
                    Vote on the <br />
                    cute cat images
                </h1>
                <h3 className="texte-md leading-[19px] text-center font-normal">
                    Click one of the icons. <br />
                    Like if you liked it, <br />
                    and dislike if you didn't.
                </h3>
            </div>

            <Gallery />

            <div className="w-full pl-7 pr-7">
                <Button
                    text="Show me new images"
                    onClick={fetchCats}  
                    isLoading={loading}
                    disabled={loading || isLoading}
                />
            </div>
        </div>
    )
}

export default VotePage
