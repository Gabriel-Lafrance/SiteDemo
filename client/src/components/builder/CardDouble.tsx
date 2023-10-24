type CardDoubleProps = {
    img: string,
    titre: string,
    texte: string,
    inverse : boolean;
  }

const CardDouble = (props : CardDoubleProps) => {
    return (
        <>
        {
            props.inverse ? 
            <div className="grid grid-cols-1 w-auto sm:grid-cols-2 h-fit mx-auto m-8 hover:scale-105 transition-all duration-200 drop-shadow-2xl">
                <div className="h-fit p-4 sm:h-96 w-full bg-secondary text-white  mb-0 sm:mb-8 rounded-t-2xl sm:rounded-tr-none sm:rounded-bl-2xl sm:rounded-br-none">
                    <div className="flex flex-col h-full justify-center">
                        <span className="TextLg m-2">{props.titre}</span>
                        <hr className="my-2 mx-auto w-4/5 border-white "/>
                        <p className="text-md mx-4  text-balance">{props.texte}</p>
                    </div>
                </div>
                <img  className="w-full object-cover h-fit sm:h-96 rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl sm:rounded-br-2xl bg-gray-200 mb-0 sm:mb-8 " src={props.img} alt="" loading="lazy" />
            </div> 
            :
            <div className="grid grid-cols-1 sm:grid-cols-2 w-auto h-fit mx-auto m-8 hover:scale-105 transition-all duration-200 drop-shadow-2xl ">
                <img  className="w-full h-fit  sm:h-96 object-cover rounded-t-2xl sm:rounded-tr-none sm:rounded-bl-2xl sm:rounded-br-none" src={props.img} alt="" loading="lazy"/>
                <div className="h-fit p-4 sm:h-96  bg-secondary text-white mb-8 sm:mb-8  rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl sm:rounded-br-2xl">
                    <div className="flex flex-col h-full justify-center">
                        <span className="TextLg m-2">{props.titre}</span>
                        <hr className="my-2 mx-auto w-4/5 border-white "/>
                        <p className="text-md mx-4  text-balance text-w">{props.texte}</p>
                    </div>
                </div>
            </div>
        }
        </>
            
    )
}
 
export default CardDouble;
