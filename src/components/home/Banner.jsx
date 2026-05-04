import Link from 'next/link';
import React from 'react';
import { FiBookOpen, FiSearch } from 'react-icons/fi';
import 'animate.css';


const Banner = () => {
    return (
        <div className="hero py-8 bg-base-100 rounded-md overflow-hidden">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12 p-8 md:p-12">

                <div className="lg:w-1/2 flex justify-center items-center relative">
                    <div className="relative bg-primary/10 p-16 rounded-full aspect-square flex items-center justify-center">
                        <FiBookOpen className="text-primary text-9xl md:text-[12rem] opacity-70" />
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
                    </div>
                </div>

                <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">

                    <div className="badge badge-primary badge-outline mb-6 flex gap-2 py-4 px-5">
                        <FiSearch />
                        <span className='font-medium'>Your Digital Library Platform</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-base-content mb-6">
                        Find Your <br /> Next <span className="text-primary">Read</span>
                    </h1>

                    <p className="text-lg text-base-content/80 max-w-lg mb-10">
                        Explore thousands of digital books across categories like Story, Tech, and Science. Borrow instantly, read anytime, anywhere.
                    </p>

                    <Link href="/all-books" className="group">
                        <button className="btn btn-primary btn-lg rounded-full px-10 animate__animated animate__bounce flex items-center gap-3 group-hover:scale-105 transition-all duration-300">
                            <FiBookOpen size={20} />
                            <span>Browse Now</span>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Banner;