import Gallery from "../../components/Gallery"
import Logo from "/catImageVotingLogo.png";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { CatContext } from "../../context/CatContext";

function VotePage() {
    const { fetchCats, loading, voting: { isLoading } } = useContext(CatContext)

    return (
        <div className="flex flex-col items-center w-screen h-auto pt-7 pb-7 justify-between">
            <div className="lg:w-full lg:max-w-7xl">
                <img
                    src={Logo}  
                    className="w-[244px] object-contain mt-3 mb-10"
                />
            </div>

            <div className="w-screen lg:flex lg:w-full lg:max-w-7xl items-center">
                <div className="flex flex-col w-full items-center gap-5 lg:items-start">
                    <h1 className="text-xl font-bold w-[90%] text-center leading-[44px] lg:text-left lg:text-xxl lg:leading-[72px]">
                        Vote on the <br />
                        cute cat images
                    </h1>
                    <h3 className="texte-md leading-[19px] text-center font-normal lg:text-left lg:text-lg lg:leading-[29px]">
                        Click one of the icons. <br />
                        Like if you liked it, <br className="lg:hidden" />
                        and dislike if you didn't.
                    </h3>
                </div>

                <div className="lg:flex lg:flex-col lg:items-center lg:w-[450px]">
                    <Gallery />

                    <div className="hidden lg:block lg:w-[235px]">
                        <Button
                            text="Show me new images"
                            onClick={fetchCats}  
                            isLoading={loading}
                            disabled={loading || isLoading}
                        />
                    </div>
                </div>

            </div>

            <div className="w-full pl-7 pr-7 sm:w-1/2 lg:hidden">
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
