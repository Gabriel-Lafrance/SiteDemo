import Carousel from "../builder/Carousel";


import Placeholder1 from '../../assets/placeholder1.webp';
import Placeholder2 from '../../assets/placeholder2.webp';
import Placeholder3 from '../../assets/placeholder3.webp';
import Placeholder4 from '../../assets/placeholder4.webp';
import Placeholder5 from '../../assets/placeholder5.webp';
import Placeholder6 from '../../assets/placeholder6.webp';


const Acceuil = () => {

    const slides = [Placeholder4, Placeholder5, Placeholder6];

    return ( 
        <body className="flex flex-col items-center">
            <Carousel slides={slides} autoSlide={true} autoSlideInterval={10000} />
            <div className="w-4/5 text-center"> 
                <span className="mx-auto TextXl">Bienvenue sur mon site !</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 w-full h-fit mx-auto m-8">
                    <div className="h-72 bg-secondary text-white mb-0 sm:mb-8  rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none">
                        <div className="flex flex-col">
                            <span className="TextLg mt-4">Promotion !</span>
                            <hr className="my-2 mx-auto w-4/5 border-white "/>
                            <p className="text-md mx-4  text-balance">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus quis neque a varius. Vivamus congue dignissim cursus. In nec fermentum justo. Cras maximus tempor libero a convallis. Praesent enim dui, condimentum vitae vestibulum vel, accumsan vitae risus. Integer ante nisl, malesuada egestas diam at, fringilla lacinia diam. Curabitur molestie hendrerit odio sed tempus.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-200 mb-8  rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl sm:rounded-br-2xl">
                        <img  className="w-full object-cover h-72 rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl sm:rounded-br-2xl" src={Placeholder1} alt="" />
                    </div>
                    <div className="bg-gray-200 mb-0 sm:mb-8 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none">
                        <img  className="w-full object-cover h-72 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none" src={Placeholder2} alt="" />
                    </div>
                    <div className="h-72  bg-secondary text-white mb-8 sm:mb-8  rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl sm:rounded-br-2xl">
                        <div className="flex flex-col">
                            <span className="TextLg mt-4">Notre Équipe !</span>
                            <hr className="my-2 mx-auto w-4/5 border-white "/>
                            <p className="text-md mx-4  text-balance">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus quis neque a varius. Vivamus congue dignissim cursus. In nec fermentum justo. Cras maximus tempor libero a convallis. Praesent enim dui, condimentum vitae vestibulum vel, accumsan vitae risus. Integer ante nisl, malesuada egestas diam at, fringilla lacinia diam. Curabitur molestie hendrerit odio sed tempus.
                            </p>
                        </div>
                    </div>
                    <div className="h-72 bg-secondary text-white mb-0 sm:mb-8  rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none">
                        <div className="flex flex-col">
                            <span className="TextLg mt-4">Où nous trouver !</span>
                            <hr className="my-2 mx-auto w-4/5 border-white "/>
                            <p className="text-md mx-4  text-balance">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus quis neque a varius. Vivamus congue dignissim cursus. In nec fermentum justo. Cras maximus tempor libero a convallis. Praesent enim dui, condimentum vitae vestibulum vel, accumsan vitae risus. Integer ante nisl, malesuada egestas diam at, fringilla lacinia diam. Curabitur molestie hendrerit odio sed tempus.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-200 mb-8  rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl sm:rounded-br-2xl">
                        <img  className="w-full object-cover h-72 rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl sm:rounded-br-2xl" src={Placeholder3} alt="" />
                    </div>
                </div>
            </div>
        </body>
     );
}
 
export default Acceuil;
