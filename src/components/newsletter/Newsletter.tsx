import React from 'react';


interface NewsletterProps{}


const Newsletter: React.FC<NewsletterProps> = () => {
    return(
        <div className="newsletter flex items-center justify-center mt-20 mb-10">
            <div className="news-container md:w-9/12 w-11/12 bg-newsletter-bg rounded-3xl flex justify-center">
                <div className="newsletter-content mb-10 p-4">
                    <div className="news-heading flex justify-center pt-10">
                        <img src="/assets/paper-airplane.png" alt="plane-img" className='h-auto md:w-28 w-20'  />
                    </div>
                    <div className="content text-center mt-10">
                        <h3 className='font-bold text-2xl md:w-3/4 text-center mx-auto'>Subscribe To Our Newsletter & Get The Coupon Code.</h3>
                        <p className='text-gray-500 pt-8'>All your information is completely confidential</p>
                    </div>
                    <div className="news-input text-center mt-14">
                        <input type="text" placeholder='Type your email' className='p-3 rounded-lg md:w-80'/>
                        <button className='news-btn border rounded-lg p-3 bg-blue-700 text-white font-bold mx-4'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;