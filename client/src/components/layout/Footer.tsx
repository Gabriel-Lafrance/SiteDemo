import logo from "../../assets/logo-placeholder-image.png"
import { AiOutlinePhone, AiFillShop, AiOutlineMail } from "react-icons/ai"

const Footer = () => {
    return (  
    <footer className="bg-gray-100 border-t border-gray-300 text-balance">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="" className="flex items-center">
                    <img src={logo} className="h-24 mr-3" alt="Logo" />
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full w-[95%]  md:w-2/3 bg-secondary p-4 rounded-2xl text-white">
                <div className="">
                    <h2 className="text-sm font-semibold text-center uppercase">Heure d'ouverture</h2>
                    <hr className="my-2 border-white sm:mx-auto"/>
                    <div className="flex flex-col font-medium text-center md:text-left">
                            <span>Lundi au Jeudi : 10h00 - 20h00</span>
                            <span >Vendredi et Samedi : 10h00 - 22h00</span>
                            <span >Dimanche : 12h00 - 20h00</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-sm font-semibold text-center uppercase">Nous Contacter</h2>
                    <hr className="my-2 border-white sm:mx-auto"/>
                    <div className="font-medium flex flex-col justify-around text-center md:text-left">
                        <div>
                            <AiOutlinePhone className="inline-block mb-1 mr-1 "/>
                            <a href="" className="hover:underline">418-750-3543</a>
                        </div>
                        <div>
                            <AiFillShop className="inline-block mb-1 mr-1 "/>
                            <a href="" className="hover:underline">999 Rue du Chemin 9 Ouest</a>
                        </div>
                        <div className="mb-2">
                            <AiOutlineMail className="inline-block mb-1 mr-1 "/>
                            <a href="" className="hover:underline">monmail@hotmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className="my-6 border-secondary sm:mx-auto  lg:my-8"/>
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-secondary sm:text-center">© 2023 <a className="hover:underline">Gabriel Lafrance™</a>. All Rights Reserved.
            </span>
        </div>
        </div>
    </footer>
    );
}
 
export default Footer;
