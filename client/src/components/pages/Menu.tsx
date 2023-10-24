import * as Tabs from "@radix-ui/react-tabs";
import Placeholder1 from "../../assets/placeholder1.webp"

const categories = [
    {
        titre : "Poutine",
        variant : [
            {
                variante : "Classique",
                description : "Frite, sauce, fromage",
                grandeur : [
                    {
                        grosseur : "Petite",
                        prix : "10,00"
                    },
                    {
                        grosseur : "Moyenne",
                        prix : "12,00"
                    },
                    {
                        grosseur : "Grande",
                        prix : "14,00"
                    },
                    {
                        grosseur : "Familliale",
                        prix : "16,00"
                    }     
                ]
            },
            {
                variante : "Italienne",
                description : "Poutine à la sauce italienne",
                grandeur : [
                    {
                        grosseur : "Petite",
                        prix : "11,00"
                    },
                    {
                        grosseur : "Moyenne",
                        prix : "13,00"
                    },
                    {
                        grosseur : "Grande",
                        prix : "15,00"
                    },
                    {
                        grosseur : "Familliale",
                        prix : "17,00"
                    }     
                ]
            },
            {
                variante : "Saucisse",
                description : "Poutine au saucisse",
                grandeur : [
                    {
                        grosseur : "Petite",
                        prix : "11,00"
                    },
                    {
                        grosseur : "Moyenne",
                        prix : "13,00"
                    },
                    {
                        grosseur : "Grande",
                        prix : "15,00"
                    },
                    {
                        grosseur : "Familliale",
                        prix : "17,00"
                    }     
                ]
            },
            {
                variante : "Poulet",
                description : "Poutine au poulet effiloché",
                grandeur : [
                    {
                        grosseur : "Petite",
                        prix : "12,00"
                    },
                    {
                        grosseur : "Moyenne",
                        prix : "14,00"
                    },
                    {
                        grosseur : "Grande",
                        prix : "16,00"
                    },
                    {
                        grosseur : "Familliale",
                        prix : "18,00"
                    }     
                ]
            },
            {
                variante : "Steak",
                description : "Poutine au steak haché",
                grandeur : [
                    {
                        grosseur : "Petite",
                        prix : "12,00"
                    },
                    {
                        grosseur : "Moyenne",
                        prix : "14,00"
                    },
                    {
                        grosseur : "Grande",
                        prix : "16,00"
                    },
                    {
                        grosseur : "Familliale",
                        prix : "18,00"
                    }     
                ]
            },
        ]
    },
    {
        titre : "Burger",
        variant : [
            {
                variante : "Poulet Croustillant",
                description : "",
                grandeur : [
                    {
                        grosseur : "Solo",
                        prix : "6,00"
                    },
                    {
                        grosseur : "Assiette",
                        prix : "12,00"
                    },   
                ]
            },
            {
                variante : "Mega-Burger",
                description : "Mega burger de la mort",
                grandeur : [
                    {
                        grosseur : "",
                        prix : "20,00"
                    }    
                ]
            }
        ]
    },
    {
        titre : "Pizza",
        variant : [
            {
                variante : "Pepperoni",
                description : "Classique Pepperoni fromage",
                grandeur : [
                    {
                        grosseur : "12po",
                        prix : "12,00"
                    },
                    {
                        grosseur : "14po",
                        prix : "14,00"
                    },
                    {
                        grosseur : "16po",
                        prix : "16,00"
                    }    
                ]
            },
            {
                variante : "Hawaienne",
                description : "Jambon et ananas",
                grandeur : [
                    {
                        grosseur : "12po",
                        prix : "14,00"
                    },
                    {
                        grosseur : "14po",
                        prix : "18,00"
                    },
                    {
                        grosseur : "16po",
                        prix : "18,00"
                    }    
                ]
            },
            {
                variante : "3 Viande",
                description : "Steak haché, saucisse, bacon",
                grandeur : [
                    {
                        grosseur : "12po",
                        prix : "16,00"
                    },
                    {
                        grosseur : "14po",
                        prix : "18,00"
                    },
                    {
                        grosseur : "16po",
                        prix : "22,00"
                    }    
                ]
            },
            {
                variante : "3 Fromage",
                description : "Fromage suisse, fromage mozarella et fromage brie",
                grandeur : [
                    {
                        grosseur : "12po",
                        prix : "15,00"
                    },
                    {
                        grosseur : "14po",
                        prix : "17,00"
                    },
                    {
                        grosseur : "16po",
                        prix : "19,00"
                    }    
                ]
            },
        ]
    },
    {
        titre : "Salade",
        variant : [
            {
                variante : "César",
                description : "Sauce César",
                grandeur : [
                    {
                        grosseur : "Petite",
                        prix : "11,00"
                    },
                    {
                        grosseur : "Moyenne",
                        prix : "13,00"
                    },
                    {
                        grosseur : "Grande",
                        prix : "15,00"
                    },
                ]
            },
            {
                variante : "Grecque",
                description : "Sauce Grecque",
                grandeur : [
                    {
                        grosseur : "Petite",
                        prix : "11,00"
                    },
                    {
                        grosseur : "Moyenne",
                        prix : "13,00"
                    },
                    {
                        grosseur : "Grande",
                        prix : "15,00"
                    },
                ]
            },
        ]
    },
    {
        titre : "Autres",
        variant : [
            {
                variante : "Ailes de poulet",
                description : "Ailes de poulet piquante",
                grandeur : [
                    {
                        grosseur : "6 morceaux",
                        prix : "12,00"
                    },
                    {
                        grosseur : "12 morceaux",
                        prix : "24,00"
                    },
                    {
                        grosseur : "24 morceaux",
                        prix : "48,00"

                    }  
                ]
            },
            {
                variante : "Batonnet de fromage",
                description : "Batonnet de fromage mozarella",
                grandeur : [
                    {
                        grosseur : "6 morceaux",
                        prix : "8,00"
                    },
                    {
                        grosseur : "12 morceaux",
                        prix : "16,00"
                    },
                    {
                        grosseur : "24 morceaux",
                        prix : "32,00"

                    }     
                ]
            },
            {
                variante : "Pogo",
                description : "Poutine au saucisse",
                grandeur : [
                    {
                        grosseur : "1 Pogo",
                        prix : "3,00"
                    },
                    {
                        grosseur : "2 Pogo",
                        prix : "6,00"
                    },
                    {
                        grosseur : "4 Pogo",
                        prix : "12,00"
                    },
   
                ]
            }
        ]
    },
]

const Menu = () => {
    return ( 
        <div className="select-none mb-16">
            <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
                <div className="mb-4">
                    <div className="mb-6 w-full text-center sm:text-center md:mx-auto md:mb-12">
                        <h2
                            className="font-heading my-4 font-bold tracking-tight text-secondary TextXl">
                            Notre Menu !
                        </h2>
                        <hr className="mt-6 border-secondary sm:mx-auto  lg:mt-8"/>
                    </div>
                </div>
            </div>
            <Tabs.Root className="flex my-8 flex-col w-4/5 mx-auto" defaultValue="tab0">
                <Tabs.List className="flex w-full flex-col sm:flex-row mx-auto " aria-label="Manage your account">
                {categories.map((categorie, index : number) =>
                    <Tabs.Trigger key={index} className="bg-secondary rounded-2xl m-2 p-4 sm:rounded-none sm:mx-0 sm:first:rounded-l-2xl sm:last:rounded-r-2xl text-white px-1 h-[45px] flex-1 flex items-center justify-center TextSm leading-none select-none  hover:bg-action  data-[state=active]:bg-action" 
                    value={"tab" + index}>
                        {categorie.titre}
                    </Tabs.Trigger>
                )}
                </Tabs.List>
                {categories.map((categorie, index : number) =>
                    <Tabs.Content key={index} className="bg-white px-5 h-fit flex-1 flex items-center justify-center text-[15px] leading-none  select-none outline-none cursor-default" value={"tab" + index}>
                        <div className=" grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 w-full">
                        {categorie.variant.map((variente, index : number) =>
                            <div key={index} className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                                <div className="h-40 bg-gray-400  rounded-2xl">
                                    <img src={Placeholder1} alt="Img Produit" loading="lazy" className=" w-full h-full object-cover rounded-2xl" />
                                </div>
                                <div className="flex flex-col items-start mt-4">
                                    <h4 className="text-xl font-semibold my-2">{variente.variante}</h4>
                                    <p className="text-sm">{variente.description}</p>
                                    <hr className="my-1 w-full border-secondary sm:mx-auto "/>
                                    <div className="flex flex-col items-center justify-center w-full">
                                        {variente.grandeur.map((e, index : number) => (
                                            <div key={index} className="p-1 m-1 leading-none text-center rounded font-medium text-sm ">
                                                {e.grosseur != "" ? 
                                                <div>{e.grosseur} : {e.prix}$ </div>
                                                :
                                                <div>Prix : {e.prix}$ </div>
                                                }
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </Tabs.Content>
                )}
            </Tabs.Root>
        </div>
     );
}
 
export default Menu;

                            {/*<p className=" text-center m-8">Format : Petit | Moyen | Grand</p>
                            {categorie.variant.map((variente, index : number) => 
                            <div className="flex m-8 flex-row items-center justify-center">
                                {variente.variante} : 
                                {variente.prix.map((prix, index : number) => 
                                <div>
                                    {prix}$ | 


                                </div>)}
                                </div>)}*/}
