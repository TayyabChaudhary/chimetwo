/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import './invest_small_busniess.css';
export default function InvestNow() {
    const [allCompaignsDrop, setallCompaignsDrop] = React.useState(false);

    function showHideComaignsDropdown() {
        setallCompaignsDrop(!allCompaignsDrop);
    }

    return (
        <React.StrictMode>
            <Header />
            <section className='invest_small__container'>
                <h1>
                    Invest in vetted small businesses.
                </h1>
                <p>
                    Select the small businesses you want to invest in, see the projected returns, and invest! <Link to={``} className="underline">Learn more.</Link>
                </p>
                <div className='form__selct__options'>
                    <div>
                        <form action="">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                            <input type="text" placeholder='Campaign, City, State, or ZIP' />
                        </form>
                    </div>
                    <div>
                        <div className='all__compain' onClick={showHideComaignsDropdown}>
                            <span>All Compaigns</span>
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="#ccc" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                            {allCompaignsDrop &&
                                <div className='all__compagin__drop'>
                                    <span>All Compaigns</span>
                                    <span>Active Compaigns</span>
                                    <span>Funds Compaigns</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-8 py-8 md:grid-cols-3'>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <Link to={`/twisted_enroll`}>
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1672323900816-56240766_tiny.png&w=1920&q=100" alt="" />
                        </Link>
                        <div className="p-5">
                            <Link to={`/twisted_enroll`}>
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">TLOREN</h5>
                            </Link>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 303%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.75%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1670423894113-731602668_tiny.png&w=1920&q=100" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 text-center">Stone's Throw <br /> Foods</h5>
                            </a>

                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 104%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        12.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669228890287-642080189_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Harvie #2</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669391755243-229742107_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Harbor Coffee</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669214375951-736384078_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Pop's Bakery</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669217320670-328295089_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Hope Yoga</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer ">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669060157868-820158365_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1671059727986-379411512_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1668031176934-652644241_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1667933925791-161997009_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1667593988213-16527206_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1667424850610-697508424_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg h-[216px]" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1673026904576-81414463_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1666807272481-605232468_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1666617414213-85994233_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669228890287-642080189_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669228890287-642080189_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669228890287-642080189_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669228890287-642080189_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669228890287-642080189_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669228890287-642080189_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669228890287-642080189_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669228890287-642080189_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg w-80 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all ease-linear cursor-pointer">
                        <a href="!#">
                            <img className="rounded-t-lg" src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FcampaignMedia-1669228890287-642080189_tiny.png&w=1920&q=100" alt="" />
                        </a>

                        <div className="p-5">
                            <a href="!#">
                                <h5 className="mb-14 text-2xl font-bold tracking-tight text-gray-900 text-center">Tepeyolot <br /> Cerveceria</h5>
                            </a>
                            <div className='flex justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                <span className='text-sm'>Baltimore, MD</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 text-center" style={{ fontSize: '14px', lineHeight: '20px' }}>Tina and Lauren are moving the salon to a new location!</p>

                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-9">
                                <div className="text-xs font-bold text-gray-900 text-end pr-2 p-0.5 leading-none rounded-full" style={{ width: "100%", backgroundColor: "#2de38e" }}> 496%</div>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <span className='text-sm'>
                                    Funded: $75,850
                                </span>
                                <span className='text-sm'>
                                    Minimum Target: $25,000
                                </span>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Maximum Target: $100,000
                                    </span>
                                    <b>
                                        11.25%
                                    </b>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-sm'>
                                        Time Left: 0
                                    </span>
                                    <span className='text-sm'>
                                        Interest Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center mb-20'>
                    <button className='bg-[#2de38e] px-5 py-2 rounded'>Load more</button>
                </div>
            </section>

        </React.StrictMode>
    )
}
