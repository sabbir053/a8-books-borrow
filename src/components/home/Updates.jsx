import React from 'react';
import { FiBook, FiGift, FiStar, FiZap } from 'react-icons/fi';

const Updates = () => {
    return (
        <div className="flex items-center gap-8 whitespace-nowrap py-3 px-4">

            <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                <FiBook className="text-primary" />
                <span>
                    New Arrivals:
                    <span className="font-bold"> Eloquent JavaScript</span>
                </span>
            </div>

            <div className="h-4 w-px bg-base-300"></div>

            <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                <FiBook className="text-primary" />
                <span>
                    New Arrivals:
                    <span className="font-bold"> The Silent Patient</span>
                </span>
            </div>

            <div className="h-4 w-px bg-base-300"></div>

            <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                <FiGift className="text-secondary" />
                <span>
                    Special Discount:
                    <span className="font-bold text-secondary"> 20% Off Membership</span>
                </span>
            </div>

            <div className="h-4 w-px bg-base-300"></div>

            <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                <FiStar className="text-primary" />
                <span>
                    Trending:
                    <span className="font-bold"> Clean Code</span>
                </span>
            </div>

            <div className="h-4 w-px bg-base-300"></div>

            <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                <FiZap className="text-warning" />
                <span>
                    Flash Sale:
                    <span className="font-bold"> Up to 50% Discount on Books</span>
                </span>
            </div>

        </div>
    );
};

export default Updates;