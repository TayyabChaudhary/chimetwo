import React from 'react'
import { Link } from 'react-router-dom';
import './FooterTwo.css';
export default function FooterTwo() {
    return (
        <React.StrictMode>
            <footer className="bg-white pl-32 pr-32 footer__main_white">
                <div className="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-5">
                    <div>
                        <h2 className="mb-6 text-sm font-medium text-gray-800 captalize ">Benefits
                        </h2>
                        <ul className="text-gray-500 text-xs">
                            <li className="mb-3">
                                <a href="!#" className=" hover:underline">No Monthly Fees</a>
                            </li>
                            <li className="mb-3">
                                <a href="!#" className="hover:underline">Get Paid Early</a>
                            </li>
                            <li className="mb-3">
                                <a href="!#" className="hover:underline">Fee-free Overdraft</a>
                            </li>
                            <li className="mb-3">
                                <a href="!#" className="hover:underline">Build Credit</a>
                            </li>
                            <li className="mb-3">
                                <a href="!#" className="hover:underline">60,000+ Fee-Free ATMs</a>
                            </li>
                            <li className="mb-3">
                                <a href="!#" className="hover:underline">High Yield Savings Account</a>
                            </li>
                            <li className="mb-3">
                                <a href="!#" className="hover:underline">Send and Recieve Money</a>
                            </li>
                            <li className="mb-3">
                                <a href="!#" className="hover:underline">Security and Control</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-medium text-gray-800 captalize ">Company
                        </h2>
                        <ul className="text-gray-500 text-sm">
                            <li className="mb-2">
                                <a href="!#" className=" hover:underline">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="!#" className="hover:underline">Chime Financial, Inc.</a>
                            </li>
                            <li className="mb-2">
                                <a href="!#" className="hover:underline">In the News</a>
                            </li>
                            <li className="mb-2">
                                <a href="!#" className="hover:underline">Careers</a>
                            </li>
                            <li className="mb-2">
                                <a href="!#" className="hover:underline">Blog</a>
                            </li>
                            <li className="mb-2">
                                <a href="!#" className="hover:underline">Security Program</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-medium text-gray-800 captalize ">Resources
                        </h2>
                        <ul className="text-gray-700 text-xs">
                            <li className="mb-2">
                                <a href="!#" className=" hover:underline">Do Not Sell or Share My <br />
                                    personal Information (CA <br /> Residents)
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="!#" className="hover:underline">Policies</a>
                            </li>
                            <li className="mb-2">
                                <a href="!#" className="hover:underline">Chime U.S. Privacy Notice</a>
                            </li>
                            <li className="mb-2">
                                <a href="!#" className="hover:underline">Help Center</a>
                            </li>
                            <li className="mb-2">
                                <a href="!#" className="hover:underline">Second Chance Banking</a>
                            </li>
                            <li className="mb-2">
                                <a href="!#" className="hover:underline">Become an Affiliate</a>
                            </li>
                            <li className="mb-2">
                                <a href="!#" className="hover:underline">Supporting Those With <br />
                                    Disabilites
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-medium text-gray-800 captalize">Contact Us</h2>
                        <ul className="text-gray-700 text-sm">
                            <li className="mb-2">
                                <a href="!#" className=" hover:underline">844-244-6363</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://www.chime.com/wp-content/themes/project-sscms-2023-02-13T16-06-53/images/footer/app-store.png" className='w-32 mb-4' alt="" />
                        <img src="https://www.chime.com/wp-content/themes/project-sscms-2023-02-13T16-06-53/images/footer/google-play.png" className='w-32' alt="" />
                        <div className="flex mt-4">
                            <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                                <a href="!#" className="text-gray-800 hover:text-gray-900 dark:hover:text-gray-400">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="!#" className="text-gray-800 hover:text-gray-900 dark:hover:text-gray-400">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                                    <span className="sr-only">Instagram page</span>
                                </a>
                                <a href="!#" className="text-gray-800 hover:text-gray-900 dark:hover:text-gray-400">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    <span className="sr-only">Twitter page</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <div className='mt-3'>
                    <p className='text-[.6rem]'>
                        Banking services provided by The Bancorp Bank, N.A. or Stride Bank, N.A., Members FDIC. The Chime Visa® Debit Card is issued by The Bancorp Bank, N.A. or Stride Bank pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted. The Chime Visa® Credit Builder Card and the Chime Visa® Cash Rewards Card are issued by Stride Bank pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa credit cards are accepted. Please see back of your Card for its issuing bank.
                    </p>
                    <p className='text-[.6rem] mt-2'>
                        While Chime doesn’t issue personal checkbooks to write checks, Chime Checkbook gives you the freedom to send checks to anyone, anytime, from anywhere. See your issuing bank’s Deposit Account Agreement for full Chime Checkbook details.
                    </p>
                    <p className='text-[.6rem] mt-2'>
                        By clicking on some of the links above, you will leave the Chime website and be directed to a third-party website. The privacy practices of those third parties may differ from those of Chime. We recommend you review the privacy statements of those third party websites, as Chime is not responsible for those third parties' privacy or security practices.
                    </p>
                    <p className='text-[.6rem] mt-2'>
                        #1 Most Loved Banking App Source: Chime received the highest 2022 Qualtrics® NPS score.

                    </p>
                    <p className='text-[.6rem] mt-2'>
                        Chime SpotMe is an optional, no fee service that requires a single deposit of $200 or more in qualifying direct deposits to the Chime Checking Account each month and Visa debit card activation. All qualifying members will be allowed to overdraw their account up to $20 on debit card purchases and cash withdrawals initially, but may be later eligible for a higher limit of up to $200 or more based on member's Chime Account history, direct deposit frequency and amount, spending activity and other risk-based factors. Your limit will be displayed to you within the Chime mobile app. You will receive notice of any changes to your limit. Your limit may change at any time, at Chime's discretion. Although there are no overdraft fees, there may be out-of-network or third party fees associated with ATM transactions. SpotMe won't cover non-debit card transactions, including ACH transfers, Pay Anyone transfers, or Chime Checkbook <br />  transactions. <Link to={``} className="underline"> See terms and conditions.</Link>
                    </p>
                    <p className='text-[.6rem] mt-2'>
                        Early access to direct deposit funds depends on the timing of the submission of the payment file from the payer. We generally make these funds available on the day the payment file is received, which may be up to 2 days earlier than the scheduled payment date.
                    </p>
                    <p className='text-[.6rem] mt-2'>
                        Out-of-network ATM withdrawal fees apply except at MoneyPass ATMs in a 7-Eleven location or any Allpoint or Visa Plus Alliance ATM. Other fees such as third-party and cash deposit fees may apply.
                    </p>
                    <p className='text-[.6rem] mt-2'>
                        Based on a representative study conducted by Experian®, members who made their first purchase with Credit Builder between June 2020 and October 2020 observed an average FICO® Score 8 increase of 30 points after approximately 8 months. On-time payment history can have a positive impact on your credit score. Late payment may negatively impact your credit score.
                    </p>
                    <p className='text-[.6rem] mt-2'>
                        To be eligible to apply for Credit Builder, you need to have received a qualifying direct deposit of $200 or more to your Checking Account within the last 365 days of your application. The qualifying direct deposit must have been made by your employer, payroll provider, or benefits payer by Automated Clearing House (ACH) deposit. Bank ACH transfers, Pay Anyone transfers, verification or trial deposits from financial institutions, peer to peer transfers from services such as PayPal, Cash App, or Venmo, mobile check deposits, and cash loads or deposits are not qualifying direct deposits.
                    </p>
                    <p className='text-[.6rem] mt-2'>
                        Sometimes instant transfers can be delayed. The recipient must use a valid debit card to claim funds. Once you are approved for a Chime Checking Account, see your issuing bank’s Deposit Account Agreement for full Pay Anyone Transfers details. Please see the back of your Chime debit card for your issuing bank. <Link to={``} className="underline"> See terms and conditions.</Link>
                    </p>
                    <p className='text-[.6rem] mt-2'>
                        The Annual Percentage Yield ("APY") for the Chime Savings Account is variable and may change at any time. The disclosed APY is effective as of November 17, 2022. No minimum balance required. Must have $0.01 in savings to earn interest.
                    </p>
                    <p className='text-[.6rem] mt-2'>
                        <Link to={``} className="underline">Licenses</Link>
                    </p>
                    <p className='text-[.6rem]'>
                        Chime Capital, LLC, Nationwide Multistate Licensing System ("NMLS") ID 2316451
                    </p>
                    <p className='text-[.6rem] mt-2'>
                        © 2013-2023 Chime. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </React.StrictMode>
    )
}
