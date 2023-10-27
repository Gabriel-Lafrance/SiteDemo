import { AnimatedDiv } from "../../framermotion/AnimatedDiv"
import Placeholder4 from "../../assets/placeholder4.webp"
import Placeholder5 from "../../assets/placeholder5.webp"
import { fadeInRight, fadeInLeft } from "../../framermotion/Animation"

const Propos = () => {
    return ( 
        <section className="bg-white w-4/5 mx-auto">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:pt-12">
                <div className="mb-4">
                    <div className="mb-6 w-full text-center sm:text-center md:mx-auto md:mb-12">
                        <h2
                            className="font-heading my-4 font-bold tracking-tight text-secondary TextXl">
                            À propos de nous !
                        </h2>
                        <hr className="mt-6 border-secondary sm:mx-auto  lg:mt-8"/>
                    </div>
                </div>
            </div>
            <div className="mx-auto pb-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-8">
                    <AnimatedDiv variant={fadeInLeft} className="w-full">
                        <h2 className="TextLg font-bold text-secondary text-center">Notre histoire !</h2>
                        <hr className="my-4 border-secondary sm:mx-auto "/>
                        <p className="mt-4 text-gray-700 text-lg text-balance">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                            eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                            Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                            malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                    </AnimatedDiv>
                    <AnimatedDiv variant={fadeInRight}className="mt-12 md:mt-0">
                        <img src={Placeholder4} alt="About Us Image"  loading="lazy" className="object-cover rounded-lg shadow-md"/>
                    </AnimatedDiv>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 my-8">
                    <AnimatedDiv variant={fadeInLeft} className="mt-12 md:mt-0">
                        <img src={Placeholder5} alt="About Us Image"  loading="lazy" className="object-cover rounded-lg shadow-md"/>
                    </AnimatedDiv>
                    <AnimatedDiv variant={fadeInRight} className="wfull">
                        <h2 className="TextLg font-bold text-secondary text-center">Suite de notre histoire !</h2>
                        <hr className="my-4 border-secondary sm:mx-auto "/>
                        <p className="mt-4 text-gray-700 text-lg text-balance">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                            eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                            Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                            malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                    </AnimatedDiv>
                </div>
            </div>
        </section>
     );
}
 
export default Propos;
