import React from 'react';
import Marquee from "react-fast-marquee";
import Updates from './Updates';

const MarqueePage = () => {
    return (
        <div className="my-8 container mx-auto px-2">
            <div className="flex flex-col md:flex-row items-stretch md:items-center bg-base-200 border border-base-300 rounded-2xl overflow-hidden shadow-sm">

                <div className="bg-primary px-6 py-3 flex items-center justify-center gap-2 text-primary-content font-bold uppercase tracking-wider text-sm md:text-base">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-content opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-content"></span>
                    </span>
                    Updates
                </div>

                <Marquee pauseOnHover={true} gradient={false} speed={50} className="flex-1">
                    <Updates/>
                </Marquee>

            </div>
        </div>
    );
};

export default MarqueePage;