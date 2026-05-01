import React from 'react';
import { FiBook, FiChevronRight, FiGift, FiStar, FiZap } from 'react-icons/fi';


const Updates = () => {
    return (
        <div className="flex-1 overflow-x-auto no-scrollbar py-3 px-4">
            <div className="flex items-center gap-8 whitespace-nowrap min-w-max">

                <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                    <FiBook className="text-primary" />
                    <span>New Arrivals: <span className="font-bold">The Pragmatic Programmer</span></span>
                </div>

                <div className="h-4 w-px bg-base-300"></div>

                <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                    <FiGift className="text-primary" />
                    <span>Membership: <span className="font-bold text-secondary">20% Off Today!</span></span>
                </div>

                <div className="h-4 w-px bg-base-300"></div>

                <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                    <FiStar className="text-primary" />
                    <span>Trending: <span className="font-bold">Next.js 14 Mastery</span></span>
                </div>

                <div className="h-4 w-px bg-base-300"></div>

                <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                    <FiZap className="text-warning" />
                    <span>Flash Sale: <span className="font-bold">Up to 50% discount</span></span>
                </div>

                <div className="flex items-center gap-1 text-xs text-base-content/50 md:hidden ml-4">
                    <span>Scroll</span>
                    <FiChevronRight />
                </div>
            </div>
        </div>
    );
};

export default Updates;