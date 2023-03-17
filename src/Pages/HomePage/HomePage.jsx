import React from 'react'
import './HomePage.css';
import ChimeLogoImage from "../../assets/images/others/spot-me-1.png";
import ChimeLogoImageS from "../../assets/images/others/Website-payday.png";
import ChimeLogoImageT from "../../assets/images/others/no-fees.png";
import Header from "../../components/header"
import BannerSlider from './BannerSlider/BannerSlider';
import WatchAllVideos from '../../components/WatchAllVideos';
import { Link } from 'react-router-dom';
export default function HomePage() {
    return (
        <React.StrictMode>
            <Header />
            <BannerSlider />
            {/* Gray Images Logo */}
            <section className='grey__images__logo__chime'>
                <div className="chime__gray__container">
                    <img src="https://www.chime.com/wp-content/uploads/2020/03/WSJ.png" alt="" />
                    <img src="https://www.chime.com/wp-content/uploads/2020/03/Forbes.png" alt="" />
                    <img src="https://www.chime.com/wp-content/uploads/2020/03/NYT.png" alt="" />
                    <img src="https://www.chime.com/wp-content/uploads/2020/03/usatoday.png" alt="" />
                    <img src="https://www.chime.com/wp-content/uploads/2020/03/TC.png" alt="" />
                </div>
            </section>
            {/* Chime Visa Card First */}

            <section className='chime__visa__card__first'>
                <div className='chime__visa__hading'>
                    <h1>
                        Overdraft fee-free <br />
                        with SpotMe
                    </h1>
                    <p>
                        We’ll spot you up to $200 on debit card purchases with no overdraft fees. Eligibility requirements apply.1
                    </p>
                    <button className='learn__more'>Lean more</button>
                </div>
                <div>
                    <img src={ChimeLogoImage} alt="" />
                </div>
            </section>
            <section className='chime__visa__card__second second__chime_sec'>
                <div>
                    <img src={ChimeLogoImageS} alt="" />
                </div>
                <div className='chime__visa__hading'>
                    <h1>
                        Get paid early
                    </h1>
                    <p>
                        We`ll spot you up to $200 on bebit card purchases
                        with no overdraft fees. Eligibility requirements
                    </p>
                    <button className='learn__more'>Lean more</button>
                </div>

            </section>
            <section className='chime__visa__card__third'>

                <div className='chime__visa__hading'>
                    <h1>
                        Say goodbye to <br />
                        month fees
                    </h1>
                    <p>
                        No overdraft. No minimum balance. No monthly fees. No foreign transaction fees. 60,000+ fee-free ATMs3 at stores you love, like Walgreens®, CVS®, 7- <br /> Eleven®, and Circle K. Out-of-network fees apply.
                    </p>
                    <button className='learn__more'>Lean more</button>
                </div>
                <div>
                    <img src={ChimeLogoImageT} alt="" />
                </div>
            </section>
            <section className='chime__visa__card__second credit__sec'>

                <div>
                    <img src="https://www.chime.com/wp-content/uploads/2021/03/CreditBuilder.png" alt="" style={{ width: '300px' }} />
                </div>
                <div className='chime__visa__hading'>
                    <h1>
                        A new way to build <br /> credit
                    </h1>
                    <p>
                        Help increase your FICO Score® by an average of 30 points with our new secured credit card.4 No interest, no annual fees, no credit check to apply. Eligibility requirements apply.5
                    </p>
                    <button className='learn__more'>Lean more</button>
                    <p className='text-xs mt-4 text-gray-800 earn__para'>
                        You earned it, so you deserve to keep it. We believe an online checking account with
                    </p>
                </div>
            </section>

            {/* Invest Card Sections */}
            <div className="invest__card__section__main">
                <div className='flex justify-center'>
                    <h1>
                        Invest
                    </h1>
                </div>
                <div className="invest__card__container">
                    <div className="max-w-xs bg-white shadow-lg rounded-md">
                        <a href="!#" className='relative'>
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1674873319937-818869977_tiny.png&w=1920&q=100" alt="" />
                            <div className='absolute top-0 left-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                            </div>
                            <div className='fleg__text flex items-center gap-2 w-36 px-4 rounded py-1 absolute bottom-3 left-3' style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="m14.303 6-3-2H6V2H4v20h2v-8h4.697l3 2H20V6z"></path></svg>
                                <span className='text-xs text-white'>
                                    Minimum Metl
                                </span>
                            </div>
                        </a>
                        <div className="p-5">
                            <Link to={`/twisted_enroll`}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">The Pickled Chef</h5>
                            </Link>
                            <div className='flex justify-center items-center gap-2 pt-8'>
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="environment" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 327c-29.9 0-58 11.6-79.2 32.8A111.6 111.6 0 00400 439c0 29.9 11.7 58 32.8 79.2A111.6 111.6 0 00512 551c29.9 0 58-11.7 79.2-32.8C612.4 497 624 468.9 624 439c0-29.9-11.6-58-32.8-79.2S541.9 327 512 327zm342.6-37.9a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 615c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg>
                                <span className='text-xs text-gray-500'>Greensbug, PA</span>
                            </div>
                            <div className='flex justify-center pt-4'>
                                <p className="mb-3 font-normal text-xs w-60 text-gray-700 text-center">
                                    The Pickled Chef is purchasing new equipment to increase production!
                                </p>
                            </div>

                            <div className="w-full bg-gray-200 rounded-full mt-5">
                                <div className="bg-green-500 text-xs font-bold text-gray-800 text-end pr-3 p-1 leading-none rounded-full" style={{ width: "100%" }}> 146%</div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="max-w-xs bg-white shadow-lg rounded-md">
                        <a href="!#" className='relative'>
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1677519842657-363800419_tiny.png&w=1920&q=100" alt="" />
                            <div className='absolute top-0 left-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                            </div>
                            <div className='fleg__text flex items-center gap-2 w-36 px-4 rounded py-1 absolute bottom-3 left-3' style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="m14.303 6-3-2H6V2H4v20h2v-8h4.697l3 2H20V6z"></path></svg>
                                <span className='text-xs text-white'>
                                    Minimum Metl
                                </span>
                            </div>
                        </a>
                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">Moy Bien Tea</h5>
                            </a>
                            <div className='flex justify-center items-center gap-2 pt-8'>
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="environment" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 327c-29.9 0-58 11.6-79.2 32.8A111.6 111.6 0 00400 439c0 29.9 11.7 58 32.8 79.2A111.6 111.6 0 00512 551c29.9 0 58-11.7 79.2-32.8C612.4 497 624 468.9 624 439c0-29.9-11.6-58-32.8-79.2S541.9 327 512 327zm342.6-37.9a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 615c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg>
                                <span className='text-xs text-gray-500'>Pittsburgh, PA</span>
                            </div>
                            <div className='flex justify-center pt-4'>
                                <p className="mb-3 font-normal text-xs w-60 text-gray-700 text-center">
                                    The Pickled Chef is purchasing new equipment to increase production!
                                </p>
                            </div>

                            <div className="w-full bg-[#2e2e2e] mt-5 rounded-full">
                                <div className="bg-green-500 text-xs font-bold text-gray-800 text-end pr-3 p-1 leading-none rounded-full" style={{ width: "73%" }}> 73%</div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="max-w-xs bg-white shadow-lg rounded-md">
                        <a href="!#" className='relative'>
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1673362161823-94178602_tiny.png&w=1920&q=100" alt="" />
                            <div className='absolute top-0 left-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                            </div>
                            <div className='fleg__text flex items-center gap-2 w-36 px-4 rounded py-1 absolute bottom-3 left-3' style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="m14.303 6-3-2H6V2H4v20h2v-8h4.697l3 2H20V6z"></path></svg>
                                <span className='text-xs text-white'>
                                    Minimum Metl
                                </span>
                            </div>
                        </a>
                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">Twisted Eggroll</h5>
                            </a>
                            <div className='flex justify-center items-center gap-2 pt-8'>
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="environment" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 327c-29.9 0-58 11.6-79.2 32.8A111.6 111.6 0 00400 439c0 29.9 11.7 58 32.8 79.2A111.6 111.6 0 00512 551c29.9 0 58-11.7 79.2-32.8C612.4 497 624 468.9 624 439c0-29.9-11.6-58-32.8-79.2S541.9 327 512 327zm342.6-37.9a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 615c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg>
                                <span className='text-xs text-gray-500'>Chicago, IL</span>
                            </div>
                            <div className='flex justify-center pt-4'>
                                <p className="mb-3 font-normal text-xs w-60 text-gray-700 text-center">
                                    The Pickled Chef is purchasing new equipment to increase production!
                                </p>
                            </div>

                            <div className="w-full bg-[#2e2e2e] mt-5 rounded-full">
                                <div className="bg-green-500 text-xs font-bold text-gray-800 text-end pr-3 p-1 leading-none rounded-full" style={{ width: "52%" }}> 52%</div>
                            </div>
                          
                        </div>
                    </div>
                    <div className="max-w-xs bg-white shadow-lg rounded-md">
                        <a href="!#" className='relative'>
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1676387957117-803859591_tiny.png&w=1920&q=100" alt="" />
                            <div className='absolute top-0 left-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                            </div>
                            <div className='fleg__text flex items-center gap-2 w-36 px-4 rounded py-1 absolute bottom-3 left-3' style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="m14.303 6-3-2H6V2H4v20h2v-8h4.697l3 2H20V6z"></path></svg>
                                <span className='text-xs text-white'>
                                    Minimum Metl
                                </span>
                            </div>
                        </a>
                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">Blue Sky Kitchen</h5>
                            </a>
                            <div className='flex justify-center items-center gap-2 pt-8'>
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="environment" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 327c-29.9 0-58 11.6-79.2 32.8A111.6 111.6 0 00400 439c0 29.9 11.7 58 32.8 79.2A111.6 111.6 0 00512 551c29.9 0 58-11.7 79.2-32.8C612.4 497 624 468.9 624 439c0-29.9-11.6-58-32.8-79.2S541.9 327 512 327zm342.6-37.9a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 615c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg>
                                <span className='text-xs text-gray-500'>Greensbug, PA</span>
                            </div>
                            <div className='flex justify-center pt-4'>
                                <p className="mb-3 font-normal text-xs w-60 text-gray-700 text-center">
                                    The Pickled Chef is purchasing new equipment to increase production!
                                </p>
                            </div>

                            <div className="w-full bg-[#2e2e2e] mt-5 rounded-full">
                                <div className="bg-green-500 text-xs font-bold text-gray-800 text-end pr-3 p-1 leading-none rounded-full" style={{ width: "56%" }}> 56%</div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="max-w-xs bg-white shadow-lg rounded-md">
                        <a href="!#" className='relative'>
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1675028870463-947470021_tiny.png&w=1920&q=100" alt="" />
                            <div className='absolute top-0 left-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                            </div>
                            <div className='fleg__text flex items-center gap-2 w-36 px-4 rounded py-1 absolute bottom-3 left-3' style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="m14.303 6-3-2H6V2H4v20h2v-8h4.697l3 2H20V6z"></path></svg>
                                <span className='text-xs text-white'>
                                    Minimum Metl
                                </span>
                            </div>
                        </a>
                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">Harvie</h5>
                            </a>
                            <div className='flex justify-center items-center gap-2 pt-8'>
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="environment" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 327c-29.9 0-58 11.6-79.2 32.8A111.6 111.6 0 00400 439c0 29.9 11.7 58 32.8 79.2A111.6 111.6 0 00512 551c29.9 0 58-11.7 79.2-32.8C612.4 497 624 468.9 624 439c0-29.9-11.6-58-32.8-79.2S541.9 327 512 327zm342.6-37.9a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 615c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg>
                                <span className='text-xs text-gray-500'>Pittsburgh, PA</span>
                            </div>
                            <div className='flex justify-center pt-4'>
                                <p className="mb-3 font-normal text-xs w-60 text-gray-700 text-center">
                                    The Pickled Chef is purchasing new equipment to increase production!
                                </p>
                            </div>

                            <div className="w-full bg-[#2e2e2e] mt-5 rounded-full">
                                <div className="bg-green-500 text-xs font-bold text-gray-800 text-end pr-3 p-1 leading-none rounded-full" style={{ width: "44%" }}> 44%</div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="max-w-xs bg-white shadow-lg rounded-md">
                        <a href="!#" className='relative'>
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1676903018560-677694730_tiny.png&w=1920&q=100" alt="" />
                            <div className='absolute top-0 left-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                            </div>
                            <div className='fleg__text flex items-center gap-2 w-36 px-4 rounded py-1 absolute bottom-3 left-3' style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="m14.303 6-3-2H6V2H4v20h2v-8h4.697l3 2H20V6z"></path></svg>
                                <span className='text-xs text-white'>
                                    Minimum Metl
                                </span>
                            </div>
                        </a>
                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">Loba Pastry + Coffee</h5>
                            </a>
                            <div className='flex justify-center items-center gap-2 pt-8'>
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="environment" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 327c-29.9 0-58 11.6-79.2 32.8A111.6 111.6 0 00400 439c0 29.9 11.7 58 32.8 79.2A111.6 111.6 0 00512 551c29.9 0 58-11.7 79.2-32.8C612.4 497 624 468.9 624 439c0-29.9-11.6-58-32.8-79.2S541.9 327 512 327zm342.6-37.9a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 615c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg>
                                <span className='text-xs text-gray-500'>Chicago, IL</span>
                            </div>
                            <div className='flex justify-center pt-4'>
                                <p className="mb-3 font-normal text-xs w-60 text-gray-700 text-center">
                                    The Pickled Chef is purchasing new equipment to increase production!
                                </p>
                            </div>

                            <div className="w-full bg-[#2e2e2e] mt-5 rounded-full ">
                                <div className="bg-green-500 text-xs font-bold text-gray-800 text-end pr-3 p-1 leading-none rounded-full" style={{ width: "26%" }}> 26%</div>
                            </div>
                          
                        </div>
                    </div>

                </div>
            </div>
            {/* Watch All Videos Sections */}
            <WatchAllVideos />

            <div className='flex justify-center'>
                <button className='btn__compaign__s'>Explore more compaigns</button>
            </div>

            <section className='chime__visa__card__third mt-96'>

                <div className='chime__visa__hading'>
                    <h1>
                        Pay anyone the fast, <br /> fee-free way
                    </h1>
                    <p>
                        Pay friends and family fee-free, no matter what bank account they use. They can cash out instantly⁶ and securely, no sign-up needed.
                    </p>
                    <button className='learn__more'>Lean more</button>
                </div>
                <div>
                    <img src="https://www.chime.com/wp-content/uploads/2021/07/pay-anyone-desktop.png" alt="" />
                </div>
            </section>


            <section className='chime__visa__card__second'>

                <div>
                    <img src="https://www.chime.com/wp-content/uploads/2022/10/2.00-APY.png" alt="" style={{ width: '300px' }} />
                </div>
                <div className='chime__visa__hading'>
                    <h1>
                        Make your money <br /> grow fast
                    </h1>
                    <p>
                        2.00% Annual Percentage Yield (APY).7 Set money  aside with Automatic Savings features. And never  pay a fee on your Savings Account.
                    </p>
                    <button className='learn__more'>Lean more</button>
                </div>
            </section>
            <section className='chime__visa__card__third'>

                <div className='chime__visa__hading'>
                    <h1>
                        Stay in control <br /> with alerts
                    </h1>
                    <p>
                        You’re always in-the-know with daily balance <br /> notifications and transaction alerts
                    </p>
                    <button className='learn__more'>Lean more</button>
                </div>
                <div>
                    <img src="https://www.chime.com/wp-content/uploads/2020/03/alerts.png" alt="" />
                </div>
            </section>

            <section className='chime__visa__card__second'>
                <div>
                    <img src="https://www.chime.com/wp-content/uploads/2020/03/lock.png" alt="" style={{ width: '300px' }} />
                </div>
                <div className='chime__visa__hading'>
                    <h1 style={{ fontSize: '19px' }}>
                        Serious security
                    </h1>
                    <p>
                        Chime uses secure processes to protect your information and <br /> help prevent unauthorized use
                    </p>
                    <h1 className='mt-6' style={{ fontSize: '19px' }}>
                        Protection and peace of mind
                    </h1>
                    <p style={{ marginTop: '0px' }}>
                        Your funds are FDIC insured up to $250,000 through The <br /> Bancorp Bank, N.A. or Stride Bank, N.A., Members FDIC.
                    </p>
                    <h1 className='mt-6' style={{ fontSize: '19px' }}>
                        Anytime, anywhere support
                    </h1>
                    <p>
                        If you need help, Chime’s support channels are standing by <br /> 24/7. Reach our friendly team by phone, email, in the app, or  <br /> check out the Help Center.
                    </p>
                </div>
            </section>
            <section className='get__started_-sections'>
                <main className='get__started__sections__container'>
                    <div className='get__started__sections__text'>
                        <div>
                            <h1>
                                Get started
                            </h1>
                            <p>
                                Applying for an account is free and takes less than 2 <br /> minutes. It won’t affect your credit score!
                            </p>
                            <form action="">
                                <input type="text" placeholder='Enter e-mail' />
                                <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex bg-[#00e193] items-center justify-center font-bold px-14 py-2.5 text-sm text-gray-800 rounded-full cursor-pointer hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                        <div>
                            <img src="https://www.chime.com/wp-content/uploads/2021/03/Chime-Reviews.png" alt="" />
                        </div>
                    </div>
                </main>
            </section>



        </React.StrictMode>
    )
}
