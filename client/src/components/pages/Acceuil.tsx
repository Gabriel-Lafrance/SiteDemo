import Carousel from "../builder/Carousel";


import Placeholder1 from '../../assets/placeholder1.webp';
import Placeholder2 from '../../assets/placeholder2.webp';
import Placeholder3 from '../../assets/placeholder3.webp';
import Placeholder4 from '../../assets/placeholder4.webp';
import Placeholder5 from '../../assets/placeholder5.webp';
import Placeholder6 from '../../assets/placeholder6.webp';
import CardDouble from "../builder/CardDouble";

type CardDoubleProps = {
    img: string,
    titre: string,
    texte: string,
    inverse : boolean;
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
        <section className="flex flex-col items-center">
            <Carousel slides={slides}/>
            <div className=" w-4/5 text-center"> 
                <span className="mx-auto TextXl text-secondary">Bienvenue sur mon site !</span>
                <hr className="my-6 border-secondary sm:mx-auto  lg:my-8"/>
                {infos.map((info : CardDoubleProps, index : number) =>
                    <CardDouble key={index} {...info}/>
                )}
            </div>
        </section>
     );
}
 
export default Acceuil;
