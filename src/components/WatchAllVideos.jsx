import React from 'react'
import "./WatchAllVideos.css";
import PlayIcon from "../assets/images/others/download.png";
import { CloseIcon } from '../assets/svg/CloseIcon';
export default function WatchAllVideos() {
    const [showFirstVideo, setshowFirstVideo] = React.useState(false);
    const [showSecondVideo, setshowSecondVideo] = React.useState(false);
    const [showThirdVideo, setshowThirdVideo] = React.useState(false);
    const [showFourthVideo, setshowFourthVideo] = React.useState(false);
    const [showFiveVideo, setshowFiveVideo] = React.useState(false);

    function showHideFirstVideo() {
        setshowFirstVideo(true);
    }
    function CloseFirstVideo() {
        setshowFirstVideo(false);
    }
    // Second VideoShow Hide
    function showHideSecondVideo() {
        setshowSecondVideo(true);
    }
    function CloseSecondVideo() {
        setshowSecondVideo(false);
    }
    // Third Video Show Hide
    function showHideThirdVideo() {
        setshowThirdVideo(true);
    }
    function CloseThirdVideo() {
        setshowThirdVideo(false);
    }

    // Fourth Video Show Hide
    function showHideFourthVideo() {
        setshowFourthVideo(true);
    }
    function CloseFourthVideo() {
        setshowFourthVideo(false);
    }

    // Five Video Show Hide
    function showHideFiveVideo() {
        setshowFiveVideo(true);
    }
    function CloseFiveVideo() {
        setshowFiveVideo(false);
    }
    return (
        <React.StrictMode>
            {showFirstVideo &&
                <div className='watch__all__videos__overlay'>
                    <div className='videos__content'>
                        <div className="flex flex-col">
                            <div className="close__icon flex items-center justify-end mb-2 cursor-pointer" onClick={CloseFirstVideo}>
                                <span className='text-white'>CLOSE</span>
                                <CloseIcon />
                            </div>
                            <iframe width="853" height="480" src="https://www.youtube.com/embed/pkYjkcozE5M" title="No time to lose? #BestToJustPhonePe" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            }
            {showSecondVideo &&
                <div className='watch__all__second__videos__overlay'>
                    <div className='videos__content'>
                        <div className="flex flex-col">
                            <div className="close__icon flex items-center justify-end mb-2 cursor-pointer" onClick={CloseSecondVideo}>
                                <span className='text-white'>CLOSE</span>
                                <CloseIcon />
                            </div>
                            <iframe width="853" height="480" src="https://www.youtube.com/embed/shu8-g0BtT4" title="Let’s take out our two-wheelers for a ride and relive those childhood memories once again." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            }
            {showThirdVideo &&
                <div className='watch__all__second__videos__overlay'>
                    <div className='videos__content'>
                        <div className="flex flex-col">
                            <div className="close__icon flex items-center justify-end mb-2 cursor-pointer" onClick={CloseThirdVideo}>
                                <span className='text-white'>CLOSE</span>
                                <CloseIcon />
                            </div>
                            <iframe width="800" height="480" src="https://www.youtube.com/embed/aI2aqXtfXr8" title="Better safe than sorry? #BestToJustPhonePe" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            }
            {showFourthVideo &&

                <div className='watch__all__second__videos__overlay'>
                    <div className='videos__content'>
                        <div className="flex flex-col">
                            <div className="close__icon flex items-center justify-end mb-2 cursor-pointer" onClick={CloseFourthVideo}>
                                <span className='text-white'>CLOSE</span>
                                <CloseIcon />
                            </div>
                            <iframe width="800" height="480" src="https://www.youtube.com/embed/JTt405gG6P0" title="Can&#39;t wait? #BestToJustPhonePe" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            }
            {showFiveVideo &&

                <div className='watch__all__second__videos__overlay'>
                    <div className='videos__content'>
                        <div className="flex flex-col">
                            <div className="close__icon flex items-center justify-end mb-2 cursor-pointer" onClick={CloseFiveVideo}>
                                <span className='text-white'>CLOSE</span>
                                <CloseIcon />
                            </div>
                            <iframe width="800" height="480" src="https://www.youtube.com/embed/GzM7bx2S2lc" title="Can&#39;t take a chance? #BestToJustPhonePe" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            }

            <section className='watch__all_videos'>
                <div className='row__watch__all__videos'>
                    <div className='cards__first__main'>
                        <div className='flex justify-center items-center h-full'>
                            <img src={PlayIcon} alt={PlayIcon.name} className="w-10" onClick={showHideFirstVideo} />
                        </div>
                    </div>
                    <div className='cards__second__main'>
                        <div className='flex justify-center items-center h-full'>
                            <img src={PlayIcon} alt={PlayIcon.name} className="w-10" onClick={showHideSecondVideo} />
                        </div>
                    </div>
                    <div className='cards__third__main'>
                        <div className='flex justify-center items-center h-full'>
                            <img src={PlayIcon} alt={PlayIcon.name} className="w-10" onClick={showHideThirdVideo} />
                        </div>
                    </div>
                    <div className='cards__four__main'>
                        <div className='flex justify-center items-center h-full'>
                            <img src={PlayIcon} alt={PlayIcon.name} className="w-10" onClick={showHideFourthVideo} />
                        </div>
                    </div>
                    <div className='cards__five__main'>
                        <div className='flex justify-center items-center h-full'>
                            <img src={PlayIcon} alt={PlayIcon.name} className="w-10" onClick={showHideFiveVideo} />
                        </div>
                    </div>
                </div>
            </section>
        </React.StrictMode>
    )
}
