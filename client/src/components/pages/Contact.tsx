const Contact = () => {
    return ( 
        <section className="bg-white w-full h-fit" id="contact">
            <div className="mx-auto max-w-7xl px-4 pt-2 sm:px-6 lg:px-8 lg:pt-12">
                <div className="mb-4">
                    <div className="mb-6 w-full text-center sm:text-center md:mx-auto md:mb-12">
                        <h2
                            className="font-heading my-4 font-bold tracking-tight text-secondary TextXl">
                            Contactez-nous !
                        </h2>
                        <hr className="mt-6 border-secondary sm:mx-auto  lg:mt-8"/>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-4/5 px-4">
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-gray-700">
                                Aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                                sagittis ante, ac tincidunt sem venenatis.
                            </p>
                            <ul className="mb-6 md:mb-0">
                                <li className="flex ">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" strokeWidth={2} strokeLinecap="round" 
                                            strokeLinejoin="round"  width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" 
                                             className="h-6 w-6">
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            <path
                                                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                    <h3 className="mb-2 TextBase font-medium leading-6 text-secondary uppercase">Emplacement</h3>
                                        <hr className="my-2 border-secondary sm:mx-auto"/>
                                        <p className="text-gray-700">999 Rue du Chemin 9 Ouest, Rimouski, Qc</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" 
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path
                                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                            </path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                    <h3 className="mb-2 TextBase font-medium leading-6 text-secondary uppercase">Information</h3>
                                        <hr className="my-2 border-secondary sm:mx-auto"/>
                                        <p className="text-gray-700">Téléphone : +1 (123) 456-7890</p>
                                        <p className="text-gray-700">Adresse courriel: monmail@hotmail.com</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" 
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                            <path d="M12 7v5l3 3"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4 text-gray-700">
                                    <h3 className="mb-2 TextBase font-medium leading-6 text-secondary uppercase">Heure D'ouverture</h3>
                                        <hr className="my-2 border-secondary sm:mx-auto "/>
                                        <p>Lundi - Jeudi : 10h00 - 20h00</p>
                                        <p>Vendredi & Samedi : 10h00 - 22h00</p>
                                        <p>Dimanche : 12h00 - 20h00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="h-fit my-auto max-w-6xl p-5 md:p-12" id="form">
                            <h2 className="mb-2 TextBase font-bold text-secondary text-balance text-center sm:text-left mx-auto">Que pouvons-nous faire pour vous ?</h2>
                            <hr className="my-4 border-secondary sm:mx-auto"/>
                            <form id="contactForm">
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label  className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" placeholder="Votre nom" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label  className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email"  placeholder="Votre adresse courriel" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label  className="pb-1 text-xs uppercase tracking-wider"></label><input type="phone" id="phone"  placeholder="Votre numéro de téléphone" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="phone"/>
                                        </div>
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label  className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea"  placeholder="Écrivez votre message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="w-full bg-secondary hover:bg-action hover:scale-95 transition-all duration-200 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Envoyer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;
