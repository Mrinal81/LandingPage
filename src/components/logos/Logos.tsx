import React from 'react';


interface LogoProps{};


const Logo: React.FC<LogoProps> = () => {
    return(
        <div className="logo flex items-center justify-center text-center">
            <div className="logo-img flex flex-wrap md:w-1/12 text-script justify-center">
                <img src="/assets/Frame.png" alt="frame-img" className='w-full h-96'/>
            </div>
        </div>
    )
}

export default Logo;