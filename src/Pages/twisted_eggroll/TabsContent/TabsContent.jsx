import React from 'react'
import { Link } from 'react-router-dom';
import "./TabsContent.css";
export default function TabsContent() {
    const [toggleState, setToggleState] = React.useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <React.StrictMode>
            <section className='tabs__section__main'>
                <div className='tabs__row'>
                    <h5 className={toggleState === 1 ? "text-black cursor-pointer" : "text-base font-medium text-gray-300 cursor-pointer"} onClick={() => toggleTab(1)}>
                        Overview
                    </h5>
                    <h5 className={toggleState === 2 ? "text-black cursor-pointer" : "text-base font-medium text-gray-300 cursor-pointer"} onClick={() => toggleTab(2)}>
                        Meet the Team
                    </h5>
                    <h5 className={toggleState === 3 ? "text-black cursor-pointer" : "text-base font-medium text-gray-300 cursor-pointer"} onClick={() => toggleTab(3)}>
                        Deal Summary
                    </h5>
                    <h5 className={toggleState === 4 ? "text-black cursor-pointer" : "text-base font-medium text-gray-300 cursor-pointer"} onClick={() => toggleTab(4)}>
                        Ask The Owners(5)
                    </h5>
                    <h5 className={toggleState === 5 ? "text-black cursor-pointer" : "text-base font-medium text-gray-300 cursor-pointer"} onClick={() => toggleTab(5)}>
                        Updates(1)
                    </h5>
                </div>
                <div className="flex justify-around">
                    <div className={toggleState === 1 ? "content  active-content mt-8" : "content"}>
                        <h1 className='text-xl font-sans'>
                            Highlights
                        </h1>
                        <ul className='leading-8 text-gray-600 list-disc pl-4 pt-4 md:w-[1100px]'>
                            <li>
                                Black and LGBTQ+ owned business
                            </li>
                            <li>
                                Multiple commercial contracts including the City of Pittsburgh</li>
                            <li>
                                Oversubscribed on ZEUS digesters with need to meet increasing <br /> demand
                            </li>
                            <li>
                                You can invest for as little as $100. Check the photos above to <br /> see your potential earnings.
                            </li>
                            <li>
                                After a 30-day grace period, Ecotone Renewables will start <br /> making monthly payments, and you will receive repayments <br /> quarterly beginning in July 2023. Repayments will be deposited <br /> to your Honeycomb Wallet
                            </li>

                        </ul>
                        <div className='md:w-[550px]'>
                            <h1 className='text-xl font-sans mt-8 mb-3'>
                                What We Do
                            </h1>
                            <p className='text-base text-gray-600 mb-5'>
                                Dylan, Elliott & Kyle are converting food waste into a powerful liquid <br /> fertilizer!
                            </p>
                            <p className='text-base text-gray-600 mb-6'>
                                Ecotone Renewables is a next generation public benefit corporation advancing sustainability in local communities. Ecotone Renewables empowers communities to achieve sustainability through innovation and climate-smart practices. We exist to support urban agriculture in new ways, as well as improve the earth’s long-term soil health on a path to a healthier environment. Founded in Pittsburgh PA, Ecotone Renewables is scaling anaerobic digestion technology to sustainably process food waste and replenish degraded, nutrient deficient soil.
                            </p>
                            <p className='text-base text-gray-600 mb-5'>
                                We sustainably convert food waste into powerful liquid fertilizer. We do this through on-site waste processors called the ZEUS which is a patent-pending and automated anaerobic digester housed in a shipping container. We then produce and sell our signature Soil Sauce organic fertilizer to local farmers, home gardeners, retailers, and plant enthusiasts.
                            </p>
                            <p className='text-base text-gray-600'>
                                For more on what we do and to see our fertilizer, you can <Link to={``} className="text-blue-500"> visit our website </Link> to learn more.
                            </p>
                            <h1 className='text-xl font-sans mt-8 mb-3'>
                                Use of Funds Raised
                            </h1>
                            <p>
                                Raising this capital will help expand our impact and revenue generation by 20% through additional food waste processing, fertilizer production, and product sales. The funds spent will include $50,000 on a new ZEUS digester to process all the food waste for the Homewood Senior Center with a contract already in place; $25,000 on operations and distribution of products; and $25,000 on marketing as well as research and development.
                            </p>
                        </div>
                        <hr className='mt-3 mb-4' />
                        <div className='md:w-[550px] flex flex-col'>
                            <small className='mb-4'>
                                Ecotone Renewables is offering debt-based securities under Regulation CF (“Reg CF”) through Honeycomb Portal LLC (“Funding Portal”). The campaign may contain forward-looking statements and information relating to the company, its business plan, and its industry. The contents of this profile are meant to be a summary of the information found in the company’s Form C. Before making an investment decision, investors should review the company’s Form C and the Note Purchase Agreement, found in the <Link to={``} className="text-blue-500"> Offering Documents,</Link> for a complete description of its business, offering information, and risks. Remember that investing in private businesses is risky and investors could lose some or all of their investment.
                            </small>
                            <small className='mt-4 mb-8'>
                                See the <Link to={``} className="text-blue-500"> Educational Materials </Link> and the <Link to={``} className="text-blue-500">FAQ</Link> to learn more about crowdfunding on Honeycomb Credit.
                            </small>
                        </div>
                    </div>

                   <div className='absolute right-48 mt-8'>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl font-medium'>
                        How to Invest
                        </h1>
                        <Link to={``} className='flex items-center px-10 py-3 border-2 rounded-md mt-3 gap-3 border-solid border-green-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 6.914V2.586L6.293 7.293l-3.774 3.774 3.841 3.201L11 18.135V13.9c8.146-.614 11 4.1 11 4.1 0-2.937-.242-5.985-2.551-8.293C16.765 7.022 12.878 6.832 11 6.914z"></path></svg>
                            Share This opportunity</Link>
                        <Link to={``} className='flex justify-center items-center px-10 py-3 border-2 rounded-md mt-3 gap-3 border-solid border-green-400'>
                            Offering Document</Link>
                    </div>
                   </div>
                </div>
                <div className='md:w-[550px]'>
                    <div className="flex justify-around">
                        <div className={toggleState === 2 ? "content  active-content mt-8" : "content md:w-[550px]"}>
                            <h1 className='text-xl font-sans mb-3'>
                                Meet the Team
                            </h1>
                            <div className='flex gap-4 mb-10'>
                                <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1677522674853-735958066_tiny.png&w=128&q=75" className='w-14 object-cover h-14 rounded-full' alt="" />
                                <div className='flex flex-col'>
                                    <h2 className='text-xl'>Dylan Lew</h2>
                                    <h6 className='text-sm text-gray-400'>
                                        CEO
                                    </h6>
                                </div>
                            </div>
                            <p>
                                Dylan Lew has experience with lean product development and manufacturing which is critical in trouble-shooting and manufacturing anaerobic digestion systems. His academic and industrial background in materials engineering and failure analysis from Carnegie Mellon University, GE Renewable Energy, and NASA, continues to help in launching the commercialization stage of Ecotone Renewables. He also has various leadership training and experience in courses as well as being the founder and first president of oSTEM, a local chapter of a national organization dedicated to providing a safe professional development space for Science, Technology, Engineering, and Math students who identify as part of the LGBTQ+ community.
                            </p>
                            <div className='flex gap-8 mb-10 mt-10'>
                                <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1677536837168-447836585_tiny.png&w=128&q=75" className='w-32 object-cover h-32 rounded-full' alt="" />
                                <div className='flex flex-col'>
                                    <h2 className='text-2xl mb-2'>Kyle Wyche</h2>
                                    <h6 className='text-sm text-gray-400'>
                                        COO
                                    </h6>
                                </div>
                            </div>
                            <p>
                                Kyle Wyche has dynamic experience building and selling environmental systems with direct human interactions. He has a bachelor of science degree in ecology & evolution, and is currently pursuing his Masters of Business Administration from the University of Pittsburgh. With his additional ecology research experience from the Harvard Forest, Kyle’s work translating environmental processes to public systems uniquely supports our mission of technology accessibility. Forging partnerships across Pennsylvania, Kyle works diligently to integrate the ZEUS digesters and uplift local communities. He also has experience creating strong communities of learners as the Mid-Atlantic Regional Enrollment Service Manager for the University of Pittsburgh, which positions him well for creating a strong cohort for our seasonal internship program.
                            </p>

                            <div className='flex gap-8 mb-10 mt-10'>
                                <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1677538505767-311783619_tiny.png&w=128&q=75" className='w-32 object-cover h-32 rounded-full' alt="" />
                                <div className='flex flex-col'>
                                    <h2 className='text-2xl mb-2'>Kyle Wyche</h2>
                                    <h6 className='text-sm text-gray-400'>
                                        COO
                                    </h6>
                                </div>
                            </div>
                            <p>
                                Elliott Bennett is an expert in sales, marketing, and financing. With a finance background from Boston College and Bank of America, Elliott develops financial projections and business models for Ecotone Renewables. As a branch manager for Cutco, Elliott has leadership and team training experience in addition to a natural talent for sales with over $100,000 in direct business-to-consumer sales. Leading our customer discovery research, Elliott also amplifies and incorporates the voice of the customer within our product development and commercialization strategies.
                            </p>
                            <h1 className='text-2xl mt-10 mb-2 underline'>
                                Our Story
                            </h1>
                            <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2Fmedia-1677522933116-284276296_tiny.png&w=384&q=75" alt="" />
                            <h1 className='text-2xl mt-10 mb-2 underline'>History </h1>
                            <p className='mt-10 mb-2'>
                                Ecotone Renewables was founded 4 years ago as a mixture of Carnegie Mellon and University of Pittsburgh students. We have since grown into a fast-growing company still based in Pittsburgh with thousands of dollars in recurring monthly revenue, multiple commercial and distribution partners, and an aggressive plan to heal our soil and eliminate food waste.
                            </p>
                            <h1 className='text-2xl mt-10 mb-2 underline'>
                                Future
                            </h1>
                            <p>
                                Some of the summarized milestones set for this upcoming year all boils down to validating additional target markets, expanding our existing revenue streams, and enabling aggressive growth.
                            </p>
                        </div>
                    </div>

                </div>

                <div className='md:w-[550px]'>
                    <div className="flex justify-around">
                        <div className={toggleState === 3 ? "content  active-content mt-8" : "content md:w-[550px]"}>
                            <h1 className='text-xl font-sans mb-3'>
                                Your Earnings Potential
                            </h1>
                            <p>
                                A $1,000 investment earns $1,383.07 ($1,000 in principal + $383.07 in interest) after fees by the end of the investment term, if the business pays as agreed.
                            </p>
                            <div className='md:w-[550px]'>
                                <h1 className='text-xl font-sans mt-12 mb-3'>
                                    Repayment Details
                                </h1>
                                <p className='text-base text-gray-600 mb-5'>
                                    Business makes monthly repayments, disbursed to investors <br /> quarterly
                                </p>
                                <h1 className='text-xl font-sans mt-12 mb-3'>
                                    How Chime is Compensated
                                </h1>
                                <p className='text-base text-gray-600 mb-6'>
                                    Honeycomb charges Ecotone Renewables a $250 posting fee and a 6.0 - 8.0% loan origination fee based on the total amount funded. Additionally, to cover expenses associated with each investment, Honeycomb charges a 2.85% investment fee capped at $37.25 per investor.
                                </p>
                                <h1 className='text-xl font-sans mt-12 mb-3'>
                                    Collateral
                                </h1>
                                <p className='text-base text-gray-600 mb-5'>
                                    Blanket lien on assets of the company
                                </p>
                                <h1 className='text-xl text-gray-600 mb-5'>
                                    More Investment Details
                                </h1>
                                <p className='text-base text-gray-600'>
                                    If you choose to invest, you will make a one-time investment via ACH that will be transferred to a secure escrow account. If the campaign successfully reaches its target, the funds will be distributed to Ecotone Renewables.
                                </p>
                                <p className='text-base text-gray-600 mt-6'>
                                    Your ongoing responsibilities from investing are limited. Over the life of the loan, you will receive a yearly 1099-INT, which is a simple tax document similar to what you receive for most savings accounts.
                                </p>
                                <p className='text-base text-gray-600 mt-6'>
                                    *Individual payments may vary slightly based on rounding. Potential repayments include principal and interest; they do not include the one-time fee which is assessed when you make your investment. There are no prepayment penalties and Ecotone Renewables may pay down their loan early, which may impact your earnings potential. Please note: returns are not guaranteed and investors could lose some or all of their investment.
                                </p>
                                <p className='text-base text-gray-600 mt-6'>
                                    Ecotone Renewables pays as agreed. You will receive quarterly payments directly into your bank account. In the event of a default, you will be contacted by the administrative agent to manage the collections process on the investors' behalf.
                                </p>
                            </div>
                            <hr className='mt-3 mb-4' />
                            <div className='md:w-[550px] flex flex-col'>
                                <small className='mb-4'>
                                    Ecotone Renewables is offering debt-based securities under Regulation CF (“Reg CF”) through Honeycomb Portal LLC (“Funding Portal”). The campaign may contain forward-looking statements and information relating to the company, its business plan, and its industry. The contents of this profile are meant to be a summary of the information found in the company’s Form C. Before making an investment decision, investors should review the company’s Form C and the Note Purchase Agreement, found in the <Link to={``} className="text-blue-500"> Offering Documents,</Link> for a complete description of its business, offering information, and risks. Remember that investing in private businesses is risky and investors could lose some or all of their investment.
                                </small>
                                <small className='mt-4 mb-8'>
                                    See the <Link to={``} className="text-blue-500"> Educational Materials </Link> and the <Link to={``} className="text-blue-500">FAQ</Link> to learn more about crowdfunding on Honeycomb Credit.
                                </small>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='md:w-[550px]'>
                    <div className="flex justify-around">
                        <div className={toggleState === 4 ? "content  active-content mt-8" : "content md:w-[550px]"}>
                            <h1 className='text-xl font-sans mb-3'>
                                Ask the Owners
                            </h1>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-none outline-none resize-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                            <div className='flex justify-end pt-3'>
                                <button className='bg-yellow-300 shadow-sm rounded-full px-6 py-1'>Send</button>
                            </div>
                            <hr className='mt-8' />
                            <div className='md:w-[550px]'>
                                <div className='flex gap-5 mb-3 mt-4'>
                                    <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1660061125744-67741788_tiny.png&w=64&q=75" className='rounded-full' alt="" />
                                    <div className="flex flex-col">
                                        <h3>Martin Duenaz</h3>
                                        <small>Investor</small>
                                    </div>
                                </div>
                                <small className='text-gray-600 mb-5 text-xs'>
                                    Hi. Can you disclose who the entities are hiding the nearly half a million dollars worth of equity notes against your company? And are the notes secured in any way or guaranteed by any of the 3 officers? Much thanks! 03/05/2023

                                </small>
                                <div className='flex gap-4 pt-2'>
                                    <small>4d</small>
                                    <small className='text-yellow-300 cursor-pointer'>Reply</small>
                                </div>
                                <div className='border-l border-solid border-gray-300 h-52 pl-10'>
                                <div className='flex gap-5 mb-3 mt-8'>
                                    <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1660061125744-67741788_tiny.png&w=64&q=75" className='rounded-full w-8 h-8' alt="" />
                                    <div className="flex flex-col">
                                        <h3 className='text-sm'>Martin Duenaz</h3>
                                        <small>Investor</small>
                                    </div>
                                </div>
                                <small>Holding*. My apologies.</small>
                                <div className='flex gap-4 pt-2'>
                                    <small>4d</small>
                                    <small className='text-yellow-300 cursor-pointer'>Reply</small>
                                </div>
                                </div>
                                <div className='flex gap-5 mb-3 mt-4'>
                                    <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1660061125744-67741788_tiny.png&w=64&q=75" className='rounded-full' alt="" />
                                    <div className="flex flex-col">
                                        <h3>David Christopherson</h3>
                                        <small>Investor</small>
                                    </div>
                                </div>
                                <small className='text-gray-600 mb-5 text-xs'>
                                Hi. Can you disclose who the entities are hiding the nearly half a million dollars worth of equity notes against your company? And are the notes secured in any way or guaranteed by any of the 3 officers? Much thanks! 03/05/2023
                                </small>
                                <div className='flex gap-4 pt-2'>
                                    <small>4d</small>
                                    <small className='text-yellow-300 cursor-pointer'>Reply</small>
                                </div>
                                <div className='border-l border-solid border-gray-300 h-52 pl-10'>
                                <div className='flex gap-5 mb-3 mt-8'>
                                    <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1660061125744-67741788_tiny.png&w=64&q=75" className='rounded-full w-8 h-8' alt="" />
                                    <div className="flex flex-col">
                                        <h3 className='text-sm'>Martin Duenaz</h3>
                                        <small>Investor</small>
                                    </div>
                                </div>
                                <small>Holding*. My apologies.</small>
                                <div className='flex gap-4 pt-2'>
                                    <small>4d</small>
                                    <small className='text-yellow-300 cursor-pointer'>Reply</small>
                                </div>
                                </div>
                                <div className='flex gap-5 mb-3 mt-4'>
                                    <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1660061125744-67741788_tiny.png&w=64&q=75" className='rounded-full' alt="" />
                                    <div className="flex flex-col">
                                        <h3>David Christopherson</h3>
                                        <small>Investor</small>
                                    </div>
                                </div>
                                <small className='text-gray-600 mb-5 text-xs'>
                                Hi. Can you disclose who the entities are hiding the nearly half a million dollars worth of equity notes against your company? And are the notes secured in any way or guaranteed by any of the 3 officers? Much thanks! 03/05/2023
                                </small>
                                <div className='flex gap-4 pt-2'>
                                    <small>4d</small>
                                    <small className='text-yellow-300 cursor-pointer'>Reply</small>
                                </div>
                                <div className='border-l border-solid border-gray-300 h-52 pl-10'>
                                <div className='flex gap-5 mb-3 mt-8'>
                                    <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1660061125744-67741788_tiny.png&w=64&q=75" className='rounded-full w-8 h-8' alt="" />
                                    <div className="flex flex-col">
                                        <h3 className='text-sm'>Martin Duenaz</h3>
                                        <small>Investor</small>
                                    </div>
                                </div>
                                <small>Holding*. My apologies.</small>
                                <div className='flex gap-4 pt-2'>
                                    <small>4d</small>
                                    <small className='text-yellow-300 cursor-pointer'>Reply</small>
                                </div>
                                </div>
                                <div className='flex gap-5 mb-3 mt-4'>
                                    <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1660061125744-67741788_tiny.png&w=64&q=75" className='rounded-full' alt="" />
                                    <div className="flex flex-col">
                                        <h3>David Christopherson</h3>
                                        <small>Investor</small>
                                    </div>
                                </div>
                                <small className='text-gray-600 mb-5 text-xs'>
                                Hi. Can you disclose who the entities are hiding the nearly half a million dollars worth of equity notes against your company? And are the notes secured in any way or guaranteed by any of the 3 officers? Much thanks! 03/05/2023
                                </small>
                                <div className='flex gap-4 pt-2'>
                                    <small>4d</small>
                                    <small className='text-yellow-300 cursor-pointer'>Reply</small>
                                </div>
                                <div className='border-l border-solid border-gray-300 h-52 pl-10'>
                                <div className='flex gap-5 mb-3 mt-8'>
                                    <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1660061125744-67741788_tiny.png&w=64&q=75" className='rounded-full w-8 h-8' alt="" />
                                    <div className="flex flex-col">
                                        <h3 className='text-sm'>Martin Duenaz</h3>
                                        <small>Investor</small>
                                    </div>
                                </div>
                                <small>Holding*. My apologies.</small>
                                <div className='flex gap-4 pt-2'>
                                    <small>4d</small>
                                    <small className='text-yellow-300 cursor-pointer'>Reply</small>
                                </div>
                                </div>
                                <div className='flex gap-5 mb-3 mt-4'>
                                    <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1660061125744-67741788_tiny.png&w=64&q=75" className='rounded-full' alt="" />
                                    <div className="flex flex-col">
                                        <h3>David Christopherson</h3>
                                        <small>Investor</small>
                                    </div>
                                </div>
                                <small className='text-gray-600 mb-5 text-xs'>
                                Hi. Can you disclose who the entities are hiding the nearly half a million dollars worth of equity notes against your company? And are the notes secured in any way or guaranteed by any of the 3 officers? Much thanks! 03/05/2023
                                </small>
                                <div className='flex gap-4 pt-2'>
                                    <small>4d</small>
                                    <small className='text-yellow-300 cursor-pointer'>Reply</small>
                                </div>
                                <div className='border-l border-solid border-gray-300 h-52 pl-10'>
                                <div className='flex gap-5 mb-3 mt-8'>
                                    <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1660061125744-67741788_tiny.png&w=64&q=75" className='rounded-full w-8 h-8' alt="" />
                                    <div className="flex flex-col">
                                        <h3 className='text-sm'>Martin Duenaz</h3>
                                        <small>Investor</small>
                                    </div>
                                </div>
                                <small>Holding*. My apologies.</small>
                                <div className='flex gap-4 pt-2'>
                                    <small>4d</small>
                                    <small className='text-yellow-300 cursor-pointer'>Reply</small>
                                </div>
                                </div>
                                <div className='flex gap-5 mb-3 mt-4'>
                                    <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1660061125744-67741788_tiny.png&w=64&q=75" className='rounded-full' alt="" />
                                    <div className="flex flex-col">
                                        <h3>David Christopherson</h3>
                                        <small>Investor</small>
                                    </div>
                                </div>
                                <small className='text-gray-600 mb-5 text-xs'>
                                Hi. Can you disclose who the entities are hiding the nearly half a million dollars worth of equity notes against your company? And are the notes secured in any way or guaranteed by any of the 3 officers? Much thanks! 03/05/2023
                                </small>
                                <div className='flex gap-4 pt-2'>
                                    <small>4d</small>
                                    <small className='text-yellow-300 cursor-pointer'>Reply</small>
                                </div>
                                <div className='border-l border-solid border-gray-300 h-52 pl-10'>
                                <div className='flex gap-5 mb-3 mt-8'>
                                    <img src="https://invest.honeycombcredit.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fhoneycomb-uploads%2Fuploads%2FprofilePic-1660061125744-67741788_tiny.png&w=64&q=75" className='rounded-full w-8 h-8' alt="" />
                                    <div className="flex flex-col">
                                        <h3 className='text-sm'>Martin Duenaz</h3>
                                        <small>Investor</small>
                                    </div>
                                </div>
                                <small>Holding*. My apologies.</small>
                                <div className='flex gap-4 pt-2'>
                                    <small>4d</small>
                                    <small className='text-yellow-300 cursor-pointer'>Reply</small>
                                </div>
                                </div>
                              
                              
                            </div>
                            <hr className='mt-3 mb-4' />
                            <div className='md:w-[550px] flex flex-col'>
                                <small className='mb-4'>
                                    Ecotone Renewables is offering debt-based securities under Regulation CF (“Reg CF”) through Honeycomb Portal LLC (“Funding Portal”). The campaign may contain forward-looking statements and information relating to the company, its business plan, and its industry. The contents of this profile are meant to be a summary of the information found in the company’s Form C. Before making an investment decision, investors should review the company’s Form C and the Note Purchase Agreement, found in the <Link to={``} className="text-blue-500"> Offering Documents,</Link> for a complete description of its business, offering information, and risks. Remember that investing in private businesses is risky and investors could lose some or all of their investment.
                                </small>
                                <small className='mt-4 mb-8'>
                                    See the <Link to={``} className="text-blue-500"> Educational Materials </Link> and the <Link to={``} className="text-blue-500">FAQ</Link> to learn more about crowdfunding on Honeycomb Credit.
                                </small>
                            </div>
                        </div>
                      
                    </div>
                </div>

            </section>
        </React.StrictMode>
    )
}
