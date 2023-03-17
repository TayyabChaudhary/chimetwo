import React from 'react'
import './Dashboard.css';
export default function Dashboard() {
    return (
        <React.StrictMode>
            <section className='dashboard__main__section'>
                <div className="dashboard__side__nav">
                    <div className='logo__main'>
                        <h1>
                            Logo
                        </h1>
                    </div>
                    <div className="dashboard__link">
                        <span>
                            Invest
                        </span>
                        <ul>
                            <li>
                                <a href="!#">Dashboard</a>
                            </li>
                            <li>
                                <a href="!#">Investment</a>
                            </li>
                            <li>
                                <a href="!#">Secondary market</a>
                            </li>
                            <li>
                                <a href="!#">My Protfolio</a>
                            </li>
                        </ul>
                        <span>
                            Community
                        </span>
                        <ul>
                            <li>
                                <a href="!#">Investors Database</a>
                            </li>
                            <li>
                                <a href="!#">Your Network</a>
                            </li>
                            <li>
                                <a href="!#">Messages</a>
                            </li>
                            <li>
                                <a href="!#">Intros</a>
                            </li>
                            <li>
                                <a href="!#">Events</a>
                            </li>
                            <li>
                                <a href="!#">Podcasts</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right__side__sec">
                    <div className='dashboard__top__header'>
                        <div className="dashboard__header__icons">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#666666' viewBox="0 0 24 24"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg>
                                <span>
                                    Dashboard
                                </span>
                            </div>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#666666'><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg>
                                <span>
                                    Your Network
                                </span>
                            </div>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#666666'><path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2z"></path></svg>
                                <span>
                                    Massages
                                </span>
                            </div>
                            <div className="icon">
                                <div className='notifications_counter'>
                                    1
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#666666'><path d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z"></path></svg>
                                <span>
                                    Notifications
                                </span>
                            </div>
                            <div className="icon">
                                <div className="my__account">
                                    <span>AK</span>
                                </div>
                                <span>
                                    My Account
                                </span>
                            </div>
                            <div className="icon">
                                <span>
                                    DE
                                </span>
                            </div>
                            <div className='border-l border-solid w-1 h-4'>

                            </div>
                            <div className="icon">
                                <span className='font-bold'>
                                    EN
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='dash__banner'>
                        <div className="dash_banner__container">
                            <div className="left__side__text">
                                <h2>
                                    The documentary
                                </h2>
                                <h1>
                                    THE COMPANISTO STORY
                                </h1>
                                <h2>
                                    TWO FOUNDER RETHINK ECONOMY
                                </h2>
                            </div>
                            <div className="right__side__abr">
                                <button>
                                    Watch On YouTube
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#00e193'><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className='dash__boxed'>
                        <h1>
                            <b>
                                Grunder-Pitch mit NIMMSTA
                            </b>
                            08 Feb 2023 06:00 PM
                        </h1>

                        <div className="box__row__avatar flex justify-around items-center pt-5">
                            <div className="flex items-center space-x-4">
                                <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                                <div className="font-medium">
                                    <div>Andreas Funkenhauser</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Co-Grunder; Marketing &</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Profukmanagement</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                                <div className="font-medium">
                                    <div>Florian Ruhland</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Co-Grunder; Marketing &</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Profukmanagement</div>
                                </div>
                            </div>
                            <button className='reserve__btn'>
                                RESERVE A SEAT NOW
                            </button>
                        </div>
                    </div>

                    <div className='card__row flex gap-3 ml-3'>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">

                            <div className='card__image__bg'>
                                <div className='play__video'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M7 6v12l10-6z"></path></svg>
                                </div>
                                <div className='white__caai'>
                                    <span>IMMSTA</span>
                                </div>
                                <div className='co_investor absolute bottom-0 left-0 bg-gray-600 text-white text-sm px-2'>
                                    <span>CO Investors</span>
                                </div>
                            </div>
                            <div className="p-0">
                                <a href="!#" className='flex justify-between items-center p-2'>
                                    <h5 className="mb-0 text-xl font-bold tracking-tight text-gray-900">NIMMSTA GmBH</h5>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                        <span className='text-xs'>ABling, Lan...</span>
                                    </div>

                                </a>
                                <span className='text-sm text-blue-400 p-2'>
                                    EQUITY
                                </span>
                                <p className="mb-3 font-normal p-2 text-gray-700 dark:text-gray-400 text-sm mt-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <div className='bg-[#0075b8] relative flex items-center text-white justify-center h-10 w-full'>
                                    <span>
                                        We are close to funding goal!
                                    </span>
                                    <div className='triangle-down1'></div>
                                </div>
                                <div className='flex flex-col bg-gray-100 px-3 pt-2 pb-2'>
                                    <div className='flex justify-between'>
                                        <span className='text-blue-400 text-sm font-bold'>Committed</span>
                                        <span className='text-blue-400 text-sm font-bold'>$3,922,935</span>

                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-800 text-sm font-bold'>Goal</span>
                                        <span className='text-gray-800 text-sm font-bold'>$4,000,000</span>

                                    </div>

                                </div>
                                <div>
                                    <span className='text-sm font-bold text-gray-500'>
                                        Companists: 369
                                    </span>
                                    <div className='flex items-center gap-2'>
                                        <div className="flex mb-0 -space-x-4">
                                            <img className="w-8 h-8 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                                            <img className="w-8 h-8 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
                                            <img className="w-8 h-8 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="" />
                                            <img className="w-8 h-8 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
                                        </div>
                                        <div className='avatar__count bg-gray-200 py-2 text-xs px-4 rounded-full'>
                                            + 3644 more
                                        </div>
                                    </div>
                                </div>
                                <a href="!#" className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-full mt-3 hover:bg-blue-800 focus:ring-4 focus:outline-none w-full flex justify-center">
                                    VIEW PROFILE
                                </a>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">

                            <div className='card__image__bg'>
                                <div className='badge__count bg-red-400 flex justify-center items-center text-white absolute right-0 -top-4 border-solid border-2 border-white w-8 h-8 rounded-full'>
                                    3
                                </div>
                                <div className='play__video'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M7 6v12l10-6z"></path></svg>
                                </div>
                                <div className='white__caai'>
                                    <span>IMMSTA</span>
                                </div>
                                <div className='co_investor absolute bottom-0 left-0 bg-gray-600 text-white text-sm px-2'>
                                    <span>CO Investors</span>
                                </div>
                            </div>
                            <div className="p-0">
                                <a href="!#" className='flex justify-between items-center p-2'>
                                    <h5 className="mb-0 text-xl font-bold tracking-tight text-gray-900">wearonize Pre-Series A</h5>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                    </div>

                                </a>
                                <span className='text-sm text-blue-400 p-2'>
                                    EQUITY
                                </span>
                                <p className="mb-3 font-normal p-2 text-gray-700 dark:text-gray-400 text-sm mt-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <div className='bg-[#f76542] relative flex items-center text-white flex-col h-10 w-full'>
                                    <span className='text-xs'>
                                        Financing Round ends in:
                                    </span>
                                    <b>
                                        00 Days 02h : 43m : 18s
                                    </b>
                                    <div className='triangle-down2'></div>
                                </div>

                                <div className='flex flex-col bg-gray-100 px-3 pt-2 pb-2'>
                                    <div className='flex justify-between'>
                                        <span className='text-blue-400 text-sm font-bold'>Committed</span>
                                        <span className='text-blue-400 text-sm font-bold'>$3,922,935</span>

                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-800 text-sm font-bold'>Goal</span>
                                        <span className='text-gray-800 text-sm font-bold'>$4,000,000</span>

                                    </div>

                                </div>
                                <div>
                                    <span className='text-sm font-bold text-gray-500'>
                                        Companists: 369
                                    </span>
                                    <div className='flex items-center gap-2'>
                                        <div className="flex mb-0 -space-x-4">
                                            <img className="w-8 h-8 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                                            <img className="w-8 h-8 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
                                            <img className="w-8 h-8 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="" />
                                            <img className="w-8 h-8 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
                                        </div>
                                        <div className='avatar__count bg-gray-200 py-2 text-xs px-4 rounded-full'>
                                            + 940 more
                                        </div>
                                    </div>
                                </div>
                                <a href="!#" className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-full mt-3 hover:bg-blue-800 focus:ring-4 focus:outline-none w-full flex justify-center">
                                    VIEW PROFILE
                                </a>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">

                            <div className='card__image__bg'>
                                <div className='badge__count bg-red-400 flex justify-center items-center text-white absolute right-0 -top-4 border-solid border border-white w-8 h-8 rounded-full'>
                                    2
                                </div>
                                <div className='play__video'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M7 6v12l10-6z"></path></svg>
                                </div>
                                <div className='white__caai'>
                                    <span>SIRPLUS</span>
                                </div>
                                <div className='co_investor absolute bottom-0 left-0 bg-gray-600 text-white text-sm px-2'>
                                    <span>CO Investors</span>
                                </div>
                            </div>
                            <div className="p-0">
                                <a href="!#" className='flex justify-between items-center p-2'>
                                    <h5 className="mb-0 text-xl font-bold tracking-tight text-gray-900">SIRPLUS</h5>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                        <span className='text-xs'>Berlin, DE</span>
                                    </div>

                                </a>
                                <span className='text-sm text-blue-400 p-2'>
                                    EQUITY
                                </span>
                                <p className="mb-3 font-normal p-2 text-gray-700 dark:text-gray-400 text-sm mt-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <div className='bg-[#0075b8] relative flex items-center text-white justify-center h-10 w-full'>
                                    <span>
                                        We are close to funding goal!
                                    </span>
                                    <div className='triangle-down1'></div>
                                </div>
                                <div className='flex flex-col bg-gray-100 px-3 pt-2 pb-2'>
                                    <div className='flex justify-between'>
                                        <span className='text-blue-400 text-sm font-bold'>Committed</span>
                                        <span className='text-blue-400 text-sm font-bold'>$3,922,935</span>

                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-800 text-sm font-bold'>Goal</span>
                                        <span className='text-gray-800 text-sm font-bold'>$4,000,000</span>

                                    </div>

                                </div>
                                <div>
                                    <span className='text-sm font-bold text-gray-500'>
                                        Companists: 369
                                    </span>
                                    <div className='flex items-center gap-2'>
                                        <div className="flex mb-0 -space-x-4">
                                            <img className="w-8 h-8 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                                            <img className="w-8 h-8 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
                                            <img className="w-8 h-8 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="" />
                                            <img className="w-8 h-8 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
                                        </div>
                                        <div className='avatar__count bg-gray-200 py-2 text-xs px-4 rounded-full'>
                                            + 637 more
                                        </div>
                                    </div>
                                </div>
                                <a href="!#" className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-full mt-3 hover:bg-blue-800 focus:ring-4 focus:outline-none w-full flex justify-center">
                                    VIEW PROFILE
                                </a>
                            </div>
                        </div>


                    </div>
                </div>


            </section>
        </React.StrictMode>
    )
}
