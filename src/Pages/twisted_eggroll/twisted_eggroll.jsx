/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import './twisted_eggroll.css';
import $ from "jquery"
import TabsContent from './TabsContent/TabsContent';
export default function TwistedEggroll() {
    const [state, setstate] = React.useState(false);
    const [video, setvideo] = React.useState(true)

    function onClickShow() {
        setstate(true);
        setvideo(false);
    }

    function ShowHideVideo() {
        setvideo(true);
        setstate(false);
    }



    React.useEffect(() => {
        document.title = "Twisted Eggroll";
    }, [])

    $(document).ready(function () {
        // When the "Next" button is clicked
        $('.next-button').click(function () {
            // Get the currently visible image
            var currentImage = $('.slider img:visible');

            // Get the next image
            var nextImage = currentImage.next();

            // If there is no next image, loop back to the first image
            if (nextImage.length === 0) {
                nextImage = $('.slider img:first-child');
            }

            // Hide the current image and show the next image
            currentImage.hide();
            nextImage.show();
        });

        // When the "Prev" button is clicked
        $('.prev-button').click(function () {
            // Get the currently visible image
            var currentImage = $('.slider img:visible');

            // Get the previous image
            var prevImage = currentImage.prev();

            // If there is no previous image, loop back to the last image
            if (prevImage.length === 0) {
                prevImage = $('.slider img:last-child');
            }

            // Hide the current image and show the previous image
            currentImage.hide();
            prevImage.show();
        });

        $(".slider image").click(function(){
            var newImage = $(this).attr("data-new-image"); // Get the new image source from the data-new-image attribute
            $(this).attr("src", newImage); // Set the new image source for the clicked image
          });
    });



    return (
        <React.StrictMode>
            <Header />
            <div className='mt-28'></div>
            <section className='twisted__eggroll__sections'>
                <Link to={``} className="flex items-center gap-4">
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
                    Campagins
                </Link>
                <h1>
                    Twisted Eggroll
                </h1>
                <h5>Prepared Foods</h5>
                <div className='chips__sec'>
                    <div className='chi__ps'>
                        <span>Woman-owned</span>
                    </div>
                    <div className='chi__ps'>
                        <span>4-10 years in business</span>
                    </div>
                    <div className='chi__ps'>
                        <span>Use of funds: Expanding</span>
                    </div>
                    <div className='chi__ps'>
                        <span>Minority-owned</span>
                    </div>
                </div>

                <div className="flex flex-row gap-2 pt-6">
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="global" width="2em" height="2em" fill="currentColor" aria-hidden="true"><path d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0010-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 003.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 00-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 01887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 01-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 01115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 01540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 00540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 01-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 00-81.5 55.9A373.86 373.86 0 01137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 01-107.6 69.2z"></path></svg>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="instagram" width="2em" height="2em" fill="currentColor" aria-hidden="true"><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path></svg>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="facebook" width="2em" height="2em" fill="currentColor" aria-hidden="true"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path></svg>
                </div>

                <div className='days__sections pt-10'>
                    <div className='card__image__slider flex flex-col relative'>
                        <div className="card">
                            {video &&
                                <iframe className='main-image' width="100%" height="450px" src="https://www.youtube.com/embed/nSBfH15OFbA" title="Invest in Mama Noy&#39;s Kitchen!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            }
                            {state &&
                                <img className='main-image' src="https://storage.googleapis.com/honeycomb-uploads/uploads/campaignMedia-1674873319937-818869977_tiny.png" alt="" />
                            }
                        </div>
                        <div className="slider relative">
                            <img src="https://img.youtube.com/vi/XK6yHYy4D6c/hqdefault.jpg" onClick={ShowHideVideo} alt='' />
                            <img src="https://storage.googleapis.com/honeycomb-uploads/uploads/campaignMedia-1674873319937-818869977_tiny.png" onClick={onClickShow} alt='' />
                            <img src="https://storage.googleapis.com/honeycomb-uploads/uploads/campaignMedia-1674873319267-325278793_tiny.png" alt='' />
                            <img src="https://storage.googleapis.com/honeycomb-uploads/uploads/campaignMedia-1674873468892-923540792_tiny.png" alt='' />
                            <img src="https://storage.googleapis.com/honeycomb-uploads/uploads/campaignMedia-1674873319485-882156432_tiny.png" alt='' />
                            <img src="https://storage.googleapis.com/honeycomb-uploads/uploads/campaignMedia-1674873319707-304205185_tiny.png" alt='' />
                            <img src="https://storage.googleapis.com/honeycomb-uploads/uploads/campaignMedia-1674873319584-629952559_tiny.png" alt='' />
                            <div className="button_controls">
                                <button className='next-button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col gap-4 items-center'>
                        <div className='flex justify-between w-80 items-center'>
                            <div className='flex flex-col'>
                                <h2 className='text-2xl font-medium'>
                                    12.75%
                                </h2>
                                <h5>
                                    interest rate
                                </h5>
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='text-2xl font-medium'>
                                    $14,250
                                </h2>
                                <h5>
                                    invested
                                </h5>
                            </div>
                        </div>
                        <div className='flex justify-between w-80 items-center'>
                            <div className='flex flex-col'>
                                <h2 className='text-2xl font-medium'>
                                    18
                                </h2>
                                <h5>
                                    investors
                                </h5>
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='text-2xl font-medium'>
                                    16 Days
                                </h2>
                                <h5>
                                    time left
                                </h5>
                            </div>
                        </div>
                        <div className='flex justify-between w-80 items-center'>
                            <div className='flex flex-col'>
                                <h2 className='text-base font-medium'>
                                    Funding Goal
                                </h2>
                                <h5 className='text-base font-medium'>
                                    Investment Type
                                </h5>
                                <h5 className='text-base font-medium'>
                                    Loan Term
                                </h5>
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='text-sm'>
                                    $25,000 - $124,000
                                </h2>
                                <h5>
                                    Debt
                                </h5>
                                <h5>
                                    60 months
                                </h5>
                            </div>
                        </div>
                        <div>
                            <button className='invest__buttons'>Invest</button>
                        </div>
                    </div>
                </div>
            </section>

            <TabsContent />
        </React.StrictMode>
    )
}
