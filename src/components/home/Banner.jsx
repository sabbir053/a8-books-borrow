import Link from 'next/link';
import React from 'react';
import { FiBookOpen, FiSearch } from 'react-icons/fi';

const Banner = () => {
    return (
        <div className="hero min-h-[80vh] bg-base-100 rounded-3xl my-8 overflow-hidden shadow-lg border border-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12 p-8 md:p-12">

                {/* Right Side: Simple Graphic/Visual (Optional, but enhances design) */}
                <div className="lg:w-1/2 flex justify-center items-center relative">
                    <div className="relative bg-primary/10 p-16 rounded-full aspect-square flex items-center justify-center">
                        {/* Large Icon or Illustration placeholder */}
                        <FiBookOpen className="text-primary text-9xl md:text-[12rem] opacity-70" />
                        {/* Decorative floating circle */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
                    </div>
                </div>

                {/* Left Side: Text Content (The Main Banner) */}
                <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">

                    {/* Subtle Badge */}
                    <div className="badge badge-primary badge-outline mb-6 flex gap-2 py-4 px-5">
                        <FiSearch />
                        <span className='font-medium'>Your Digital Library</span>
                    </div>

                    {/* Large Heading (Requirement) */}
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-base-content mb-6">
                        Find Your <br /> Next <span className="text-primary">Read</span>
                    </h1>

                    {/* Short Description */}
                    <p className="text-lg text-base-content/80 max-w-lg mb-10">
                        Explore thousands of digital books across categories like Story, Tech, and Science. Borrow instantly, read anytime, anywhere.
                    </p>

                    {/* Action Button (Requirement) */}
                    <Link href="/all-books" className="group">
                        <button className="btn btn-primary btn-lg rounded-full px-10 flex items-center gap-3 group-hover:scale-105 transition-all duration-300">
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