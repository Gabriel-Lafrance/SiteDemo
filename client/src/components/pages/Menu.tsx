import * as Tabs from "@radix-ui/react-tabs";
import Placeholder1 from "../../assets/placeholder1.webp"
import { AnimatedDiv } from "../../animation/AnimatedDiv";
import { popIn } from "../../animation/Animation";
import React from "react";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'

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

    const [menuOption, setMenuOption] = React.useState(categories[0])

    var breakpoint : number = 760; {/* Width en pixel*/

    const [largeurEcran, setLargeurEcran] = React.useState(window.innerWidth); 

    React.useEffect(() => {
        const handleResize = () => {
            setLargeurEcran(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })


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
                <Tabs.List className="flex w-4/5 flex-col sm:flex-row mx-auto " aria-label="Manage your account">
                {largeurEcran > breakpoint ?
                    categories.map((categorie, index : number) =>
                    <Tabs.Trigger key={index} className="bg-secondary rounded-2xl m-2 p-4 sm:rounded-none sm:mx-0 sm:first:rounded-l-2xl sm:last:rounded-r-2xl text-white px-1 h-[45px] flex-1 flex items-center justify-center TextSm leading-none select-none  hover:bg-action  data-[state=active]:bg-action" 
                    value={"tab" + index}>
                        {categorie.titre}
                    </Tabs.Trigger>)
                    :
                    <Listbox value={menuOption} onChange={setMenuOption}>
                        <div className="w-[92%] mx-auto mb-8">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-secondary py-2 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block  leading-normal truncate text-center text-white text-lg my-1">{menuOption.titre}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-white" aria-hidden="true"/>
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            enter='transform ease-out duration-300 transition'
                            enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
                            enterTo='translate-y-0 opacity-100 sm:translate-x-0'
                            leave='transition ease-in duration-100'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <Listbox.Options className=" mt-2 h-fit w-full overflow-auto rounded-md bg-secondary text-base shadow-lg ">
                            {categories.map((categorie, index : number) => (
                                <Tabs.Trigger key={index}  value={"tab" + index} className="w-full">
                                    <Listbox.Option key={index} className={({ active }) => `  leading-normal  text-center relative cursor-cursortext-lg select-none h-fit py-2 pl-10 pr-4 text-lg text-white ${ active ? 'bg-action' : 'bg-secondary'}`} value={categorie}>
                                    {({ selected }) => (
                                        <>
                                        <span
                                            className={`block truncate ${
                                            selected ? 'font-medium' : 'font-normal'
                                            }`}
                                        >
                                            {categorie.titre}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                            </span>
                                        ) : null}
                                        </>
                                    )}
                                    </Listbox.Option>
                                </Tabs.Trigger>
                            ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                    </Listbox>
                }
                </Tabs.List>
                {categories.map((categorie, index : number) =>
                    <Tabs.Content key={index + categories.length} className="bg-white px-5 h-fit flex-1 flex items-center justify-center text-[15px] leading-none  select-none outline-none cursor-default" value={"tab" + index}>
                        <div className=" grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-4/5">
                        {categorie.variant.map((variente, index : number) =>
                            <AnimatedDiv key={index + categories.length * 2} variant={popIn} className="duration-500 flex flex-col w-full mx-auto h-full bg-gray-200 rounded-lg p-4 m-0">
                                <div className="h-40 bg-gray-400  rounded-2xl">
                                    <img src={Placeholder1} alt="Img Produit" loading="lazy" className=" w-full h-full object-cover rounded-2xl" />
                                </div>
                                <div className="flex flex-col items-start mt-4">
                                    <h4 className="text-xl font-semibold my-2">{variente.variante}</h4>
                                    <p className="text-sm">{variente.description}</p>
                                    <hr className="my-1 w-full border-secondary sm:mx-auto "/>
                                    <div className="flex flex-col items-center justify-center w-full">
                                        {variente.grandeur.map((e, index : number) => (
                                            <div key={index + categories.length * 3} className="p-1 m-1 leading-none text-center rounded font-medium text-sm ">
                                                {e.grosseur != "" ? 
                                                <div>{e.grosseur} : {e.prix}$ </div>
                                                :
                                                <div>Prix : {e.prix}$ </div>
                                                }
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedDiv>
                            )}
                        </div>
                    </Tabs.Content>
                )}
            </Tabs.Root>
        </div>
     );
    }
}
 
export default Menu;
