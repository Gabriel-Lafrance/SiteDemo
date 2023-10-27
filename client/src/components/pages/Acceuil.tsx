import React, { MutableRefObject } from 'react';
import Placeholder1 from '../../assets/placeholder1.webp';
import Placeholder2 from '../../assets/placeholder2.webp';
import Placeholder3 from '../../assets/placeholder3.webp';
import Placeholder4 from '../../assets/placeholder4.webp';
import Placeholder5 from '../../assets/placeholder5.webp';
import Placeholder6 from '../../assets/placeholder6.webp';
import Slider from "../builder/Slider";
import { AnimatedDiv } from '../../animation/AnimatedDiv';
import { fadeInLeft, fadeInRight} from '../../animation/Animation';

type infoProps = {
    img: string,
    titre: string,
    texte: string,
    inverse : boolean,
  }

const infos = [    
            {
                titre : "Nos Promotions !",
                texte : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a turpis dictum, viverra est vitae, efficitur ligula. Praesent iaculis dapibus ante, eget luctus urna volutpat volutpat.",
                img : Placeholder1,
                inverse : false,
            },
            {
                titre : "Notre Équipe !",
                texte : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a turpis dictum, viverra est vitae, efficitur ligula. Praesent iaculis dapibus ante, eget luctus urna volutpat volutpat.",
                img : Placeholder2,
                inverse : true,
            },
            {
                titre : "Où nous trouver !",
                texte : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a turpis dictum, viverra est vitae, efficitur ligula. Praesent iaculis dapibus ante, eget luctus urna volutpat volutpat.",
                img : Placeholder3,
                inverse : false,
            }]

const Acceuil = () => {

    const slides = [Placeholder4, Placeholder5, Placeholder6];

    return ( 
        
        <section className="flex flex-col items-center w-full">
            <Slider slides={slides}/>
            <div className=" w-4/5 text-center"> 
                <span className="mx-auto TextXl text-secondary">Bienvenue sur mon site !</span>
                <hr className="my-6 border-secondary sm:mx-auto  lg:my-8"/>
                {infos.map((info : infoProps, index : number) => (
                    info.inverse ? 
                    <AnimatedDiv key={index} variant={fadeInLeft} className="grid grid-cols-1 w-auto sm:grid-cols-2 h-fit mx-auto m-8  drop-shadow-2xl">
                        <div className="h-fit p-4 sm:h-96 w-full bg-secondary text-white  mb-0 sm:mb-8 rounded-t-2xl sm:rounded-tr-none sm:rounded-bl-2xl sm:rounded-br-none">
                            <div className="flex flex-col h-full justify-center">
                                <span className="TextLg m-2">{info.titre}</span>
                                <hr className="my-2 mx-auto w-4/5 border-white "/>
                                <p className="text-md mx-4  text-balance">{info.texte}</p>
                            </div>
                        </div>
                        <img  className="w-full object-cover h-fit sm:h-96 rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl sm:rounded-br-2xl bg-gray-200 mb-0 sm:mb-8 " src={info.img} alt="" loading="lazy" />
                    </AnimatedDiv> 
                    :
                    <AnimatedDiv key={index} variant={fadeInRight}  className="grid grid-cols-1 sm:grid-cols-2 w-auto h-fit mx-auto m-8  drop-shadow-2xl">
                        <img  className="w-full h-fit  sm:h-96 object-cover rounded-t-2xl sm:rounded-tr-none sm:rounded-bl-2xl sm:rounded-br-none" src={info.img} alt="" loading="lazy"/>
                        <div className="h-fit p-4 sm:h-96  bg-secondary text-white mb-8 sm:mb-8  rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl sm:rounded-br-2xl">
                            <div className="flex flex-col h-full justify-center">
                                <span className="TextLg m-2">{info.titre}</span>
                                <hr className="my-2 mx-auto w-4/5 border-white "/>
                                <p className="text-md mx-4  text-balance text-w">{info.texte}</p>
                            </div>
                        </div>
                    </AnimatedDiv>
                )   
                )}
            </div>
        </section>
     );
}
 
export default Acceuil;
