import React from 'react';
import { FiBook, FiChevronRight, FiGift, FiStar } from 'react-icons/fi';

const Marquee = () => {
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

                <div className="flex-1 overflow-x-auto no-scrollbar py-3 px-4">
                    <div className="flex items-center gap-8 whitespace-nowrap min-w-max">
                        
                        <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                            <FiBook className="text-primary" />
                            <span>New Arrivals: <span className="font-bold">The Pragmatic Programmer</span></span>
                        </div>

                        <div className="h-4 w-[1px] bg-base-300"></div>

                        <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                            <FiGift className="text-primary" />
                            <span>Membership: <span className="font-bold text-secondary">20% Off Today!</span></span>
                        </div>

                        <div className="h-4 w-[1px] bg-base-300"></div>

                        <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                            <FiStar className="text-primary" />
                            <span>Trending: <span className="font-bold">Next.js 14 Mastery</span></span>
                        </div>

                        <div className="flex items-center gap-1 text-xs text-base-content/50 md:hidden ml-4">
                            <span>Scroll</span>
                            <FiChevronRight />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Marquee;