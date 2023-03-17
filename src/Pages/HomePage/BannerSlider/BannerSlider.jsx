import React from 'react'
import './BannerSlider.css';
import $ from "jquery"
export default function BannerSlider() {
    const [currentState, setCurrentstate] = React.useState(0);
    const prevSlide = () => {
        setCurrentstate(currentState - 1);
    }



    React.useEffect(() => {
        let mainPosts = $(".main-post");
        let posts = $(".post");

        let i = 0;
        let postIndex = 0;
        let currentPost = posts[postIndex];
        let currentMainPost = mainPosts[postIndex];


        let progressInterval = setInterval(progress, 100); // 180

        function progress() {
            if (i === 100) {
                i = -5;
                // reset progress bar
                currentPost.querySelector(".progress-bar__fill").style.width = 0;
                document.querySelector(
                    ".progress-bar--primary .progress-bar__fill"
                ).style.width = 0;
                currentPost.classList.remove("post--active");

                postIndex++;

                currentMainPost.classList.add("main-post--not-active");
                currentMainPost.classList.remove("main-post--active");

                // reset postIndex to loop over the slides again
                if (postIndex === posts.length) {
                    postIndex = 0;
                }

                currentPost = posts[postIndex];
                currentMainPost = mainPosts[postIndex];
            } else {
                i++;
                currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
                document.querySelector(
                    ".progress-bar--primary .progress-bar__fill"
                ).style.width = `${i}%`;
                currentPost.classList.add("post--active");

                currentMainPost.classList.add("main-post--active");
                currentMainPost.classList.remove("main-post--not-active");
            }
        }


        document.getElementById("button_next").addEventListener("click", () => {
            i++;
            currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
            document.querySelector(
                ".progress-bar--primary .progress-bar__fill"
            ).style.width = `${i}%`;
            currentPost.classList.add("post--active");
        });

    }, []);


    return (
        <>
            <div className="carousel">
                <div className="progress-bar progress-bar--primary hide-on-desktop">
                    <div className="progress-bar__fill"></div>
                </div>

                <header className="main-post-wrapper">

                    <div className="slides">
                        <article className="main-post main-post--active">
                            <div className="main-post__image">
                                <img src="https://www.chime.com/wp-content/uploads/2023/03/CB-Desktop-scaled.jpeg" alt="New McLaren wind tunnel 'critical' to future performance, says Tech Director Key" />
                            </div>
                            <div className="main-post__content">
                                <div>
                                    <button className='right__side__arrow__btn' id='button_next'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                                    </button>
                                    <button className='left__side__arrow__btn change' data-n="-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                                    </button>
                                </div>
                                <div className='description'>
                                    <div className='chime__banner__container'>
                                        <h1>
                                            Fee-free overdraft <br /> up to $200
                                        </h1>
                                        <div className="form__signup">
                                            <form action="">
                                                <input type="text" placeholder='Enter your Email' className='text-black' />
                                            </form>
                                            <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex bg-[#00e193] items-center justify-center px-16 py-3 text-base font-bold text-gray-800 rounded-full cursor-pointer hover:text-gray-900">
                                                Sign Up
                                            </button>
                                        </div>

                                        <div className='sub__hading'>
                                            <p>
                                                Already have any account?
                                            </p>
                                            <p>
                                                Learn how we collect and use your information by visting our Privacy Policy
                                            </p>
                                            <p>
                                                Chime is a financial technology componany, not a blank. banking services provided by <br />
                                                The bancorp Bank, N.A. or Stride Bank, N.A.; Member FDIC
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className='carousel-boullt'>
                    {
                        bannerImageSlider.map((bannerImageSlider, currentState) => (
                            <><span key={currentState} className="slider__count" onClick={() => gotToNext(currentState)}></span></>
                        ))
                    }
                </div> */}
                                </div>
                            </div>
                        </article>
                        <article className="main-post main-post--not-active">
                            <div className="main-post__image">
                                <img src="https://www.chime.com/wp-content/uploads/2022/05/Web-01-App-Desktop.png" alt="What To Watch For in the 2019 Hungarian Grand Prix" />
                            </div>
                            <div className="main-post__content">
                                <div>
                                    <button className='right__side__arrow__btn' id='button_next'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                                    </button>
                                    <button className='left__side__arrow__btn' onClick={prevSlide}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                                    </button>
                                </div>
                                <div className='description'>
                                    <div className='chime__banner__container'>
                                        <h1>
                                            Fee-free overdraft <br /> up to $200
                                        </h1>
                                        <div className="form__signup">
                                            <form action="">
                                                <input type="text" placeholder='Enter your Email' className='text-black' />
                                            </form>
                                            <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex bg-[#00e193] items-center justify-center px-16 py-3 text-base font-bold text-gray-800 rounded-full cursor-pointer hover:text-gray-900">
                                                Sign Up
                                            </button>
                                        </div>

                                        <div className='sub__hading'>
                                            <p>
                                                Already have any account?
                                            </p>
                                            <p>
                                                Learn how we collect and use your information by visting our Privacy Policy
                                            </p>
                                            <p>
                                                Chime is a financial technology componany, not a blank. banking services provided by <br />
                                                The bancorp Bank, N.A. or Stride Bank, N.A.; Member FDIC
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className='carousel-boullt'>
                    {
                        bannerImageSlider.map((bannerImageSlider, currentState) => (
                            <><span key={currentState} className="slider__count" onClick={() => gotToNext(currentState)}></span></>
                        ))
                    }
                </div> */}
                                </div>
                            </div>
                        </article>
                        <article className="main-post main-post--not-active">
                            <div className="main-post__image">
                                <img src="https://www.chime.com/wp-content/uploads/2023/03/SpotMe-Desktop-scaled.jpeg" alt="Hamilton wants harder championship fight from Leclerc and
            Verstappen" />
                            </div>
                            <div className="main-post__content">
                                <div>
                                    <button className='right__side__arrow__btn' id='button_next'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                                    </button>
                                    <button className='left__side__arrow__btn' onClick={prevSlide}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                                    </button>
                                </div>
                                <div className='description'>
                                    <div className='chime__banner__container'>
                                        <h1>
                                            Fee-free overdraft <br /> up to $200
                                        </h1>
                                        <div className="form__signup">
                                            <form action="">
                                                <input type="text" placeholder='Enter your Email' className='text-black' />
                                            </form>
                                            <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex bg-[#00e193] items-center justify-center px-16 py-3 text-base font-bold text-gray-800 rounded-full cursor-pointer hover:text-gray-900">
                                                Sign Up
                                            </button>
                                        </div>

                                        <div className='sub__hading'>
                                            <p>
                                                Already have any account?
                                            </p>
                                            <p>
                                                Learn how we collect and use your information by visting our Privacy Policy
                                            </p>
                                            <p>
                                                Chime is a financial technology componany, not a blank. banking services provided by <br />
                                                The bancorp Bank, N.A. or Stride Bank, N.A.; Member FDIC
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className='carousel-boullt'>
                    {
                        bannerImageSlider.map((bannerImageSlider, currentState) => (
                            <><span key={currentState} className="slider__count" onClick={() => gotToNext(currentState)}></span></>
                        ))
                    }
                </div> */}
                                </div>
                            </div>
                        </article>
                        <article className="main-post main-post--not-active">
                            <div className="main-post__image">
                                <img src="https://www.chime.com/wp-content/uploads/2023/03/GPE-Desktop-scaled.jpeg" alt="Hamilton wants harder championship fight from Leclerc and
            Verstappen" />
                            </div>
                            <div className="main-post__content">
                                <div>
                                    <button className='right__side__arrow__btn' id='button_next'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                                    </button>
                                    <button className='left__side__arrow__btn' onClick={prevSlide}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                                    </button>
                                </div>
                                <div className='description'>
                                    <div className='chime__banner__container'>
                                        <h1>
                                            Fee-free overdraft <br /> up to $200
                                        </h1>
                                        <div className="form__signup">
                                            <form action="">
                                                <input type="text" placeholder='Enter your Email' className='text-black' />
                                            </form>
                                            <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex bg-[#00e193] items-center justify-center px-16 py-3 text-base font-bold text-gray-800 rounded-full cursor-pointer hover:text-gray-900">
                                                Sign Up
                                            </button>
                                        </div>

                                        <div className='sub__hading'>
                                            <p>
                                                Already have any account?
                                            </p>
                                            <p>
                                                Learn how we collect and use your information by visting our Privacy Policy
                                            </p>
                                            <p>
                                                Chime is a financial technology componany, not a blank. banking services provided by <br />
                                                The bancorp Bank, N.A. or Stride Bank, N.A.; Member FDIC
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className='carousel-boullt'>
                    {
                        bannerImageSlider.map((bannerImageSlider, currentState) => (
                            <><span key={currentState} className="slider__count" onClick={() => gotToNext(currentState)}></span></>
                        ))
                    }
                </div> */}
                                </div>
                            </div>
                        </article>
                        <article className="main-post main-post--not-active">
                            <div className="main-post__image">
                                <img src="https://www.chime.com/wp-content/uploads/2023/03/NoFees-Desktop-scaled.jpeg" alt="Hamilton wVerstappen" />
                            </div>
                            <div className="main-post__content">
                                <div>
                                    <button className='right__side__arrow__btn' id='button_next'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                                    </button>
                                    <button className='left__side__arrow__btn' onClick={prevSlide}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                                    </button>
                                </div>
                                <div className='description'>
                                    <div className='chime__banner__container'>
                                        <h1>
                                            Fee-free overdraft <br /> up to $200
                                        </h1>
                                        <div className="form__signup">
                                            <form action="">
                                                <input type="text" placeholder='Enter your Email' className='text-black' />
                                            </form>
                                            <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex bg-[#00e193] items-center justify-center px-16 py-3 text-base font-bold text-gray-800 rounded-full cursor-pointer hover:text-gray-900">
                                                Sign Up
                                            </button>
                                        </div>

                                        <div className='sub__hading'>
                                            <p>
                                                Already have any account?
                                            </p>
                                            <p>
                                                Learn how we collect and use your information by visting our Privacy Policy
                                            </p>
                                            <p>
                                                Chime is a financial technology componany, not a blank. banking services provided by <br />
                                                The bancorp Bank, N.A. or Stride Bank, N.A.; Member FDIC
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className='carousel-boullt'>
                    {
                        bannerImageSlider.map((bannerImageSlider, currentState) => (
                            <><span key={currentState} className="slider__count" onClick={() => gotToNext(currentState)}></span></>
                        ))
                    }
                </div> */}
                                </div>
                            </div>
                        </article>
                    </div>
                </header>

                <div className="posts-wrapper hide-on-mobile flex">
                    <article className="post post--active">
                        <div className="progress-bar">
                            <div className="progress-bar__fill"></div>
                        </div>
                    </article>
                    <article className="post">
                        <div className="progress-bar">
                            <div className="progress-bar__fill"></div>
                        </div>
                    </article>
                    <article className="post">
                        <div className="progress-bar">
                            <div className="progress-bar__fill"></div>
                        </div>
                    </article>
                    <article className="post">
                        <div className="progress-bar">
                            <div className="progress-bar__fill"></div>
                        </div>
                    </article>
                    <article className="post">
                        <div className="progress-bar">
                            <div className="progress-bar__fill"></div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}
