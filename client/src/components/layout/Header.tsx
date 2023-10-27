import { NavLink as Link  } from "react-router-dom";
import logo from "../../assets/logo-placeholder-image.png"
import React from "react";
import { Transition } from "@headlessui/react";


const Header = () => {

    var breakpoint : number = 760; {/* Width en pixel que le menu passe de normal à burger*/}

    const [estActif, setActif] = React.useState(false);

    {/* Switch On/Off pour l'ouverture/fermeture du menu Burger*/ }
    function Switch() {  

        setActif(!estActif);
    }

    {/* Gère la resize pour détecter quand mettre le menu burger */}
    const [largeurEcran, setLargeurEcran] = React.useState(window.innerWidth); 

    React.useEffect(() => {
        const handleResize = () => {
            if (estActif){
                Switch();
            }
            setLargeurEcran(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })

    return (
        <header className={`${estActif ? 'max-h-screen ease-in' : 'max-h-24 ease-out delay-200'} transition-all  duration-500 ease sticky top-0 z-20 text-center  bg-gray-200 h-fit w-auto flex flex-col border-b border-gray-300`}>
            <div className="h-24 flex flex-row justify-between">
                <a href="" target="_blank" className="">
                    <img src={logo} className="w-24 h-24 object-center object-cover" alt="Logo" loading='lazy'/>
                </a>
                <div className={largeurEcran > breakpoint ? "w-full my-auto" : "hidden w-0 h-0"}>
                    <div className="TextXs flex flex-row justify-end align-middle items-center last:mr-2">
                        <Link onClick={Switch}  to='/' className="BoutonMenu">Acceuil</Link>
                        <Link onClick={Switch}  to='/Menu' className="BoutonMenu">Notre Menu</Link>
                        <Link onClick={Switch}  to='/Propos' className="BoutonMenu">À Propos</Link>
                        <Link onClick={Switch}  to='/Contact' className="BoutonMenu">Contactez-nous</Link>
                    </div>
                </div>

                <div className={largeurEcran <= breakpoint ? "mr-8 my-auto select-none" : " hidden w-0 h-0 select-none"}>
                    <div  onClick={Switch} className={estActif ? "tham-active tham hover:opacity-100 tham-e-squeeze tham-w-10" : "tham hover:opacity-100 tham-e-squeeze tham-w-10"}>
                        <div className="group tham-box">
                            <div className="tham-inner bg-secondary group-hover:bg-action" /> 
                        </div>
                    </div>
                </div>
            </div>
            <Transition
                show={estActif} // Condition pour afficher la transition
                enter="transition ease-in delay-300" // Styles d'entrée
                enterFrom="opacity-0" // Style initial d'entrée
                enterTo="opacity-100" // Style final d'entrée
                leave="transition ease-in-out duration-500" // Styles de sortie
                leaveFrom="opacity-80" // Style initial de sortie
                leaveTo="opacity-0" // Style final de sortie
                >
            <div className='h-auto w-4/5 flex flex-col items-center m-4 mx-auto'>
                <Link onClick={Switch}  to='/' className="BoutonMenuBurger">Acceuil</Link>
                <Link onClick={Switch}  to='/Menu' className="BoutonMenuBurger">Notre Menu</Link>
                <Link onClick={Switch}  to='/Propos' className="BoutonMenuBurger">À Propos</Link>
                <Link onClick={Switch}  to='/Contact' className="BoutonMenuBurger">Nous Contacter</Link>
            </div>
            </Transition>
        </header>
        
    );
}

export default Header;
