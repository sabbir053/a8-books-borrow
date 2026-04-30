import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <section className="py-16 bg-base-200/50 rounded-3xl my-12">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Readers Say</h2>
                    <p className="text-base-content/60 max-w-lg mx-auto">
                        Real stories from our community members who have transformed their reading habits with BookVibe.
                    </p>
                </div>

                {/* Testimonial Grid (Desktop 3, Tab 2, Mobile 1) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Testimonial 1 */}
                    <div className="card bg-base-100 shadow-sm border border-base-200 p-8 relative overflow-visible">
                        <div className="absolute -top-4 -left-4 bg-primary text-primary-content p-3 rounded-xl shadow-lg">
                            <FaQuoteLeft size={20} />
                        </div>
                        <div className="flex gap-1 mb-4 text-orange-400">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p className="italic text-base-content/80 mb-6">
                            "The platform is incredibly smooth. I can find my favorite tech books within seconds. BetterAuth integration makes me feel secure about my account."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.pravatar.cc/150?u=1" alt="User" />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold">Sabbir Hosen</h4>
                                <p className="text-xs opacity-60">MERN Developer</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="card bg-base-100 shadow-sm border border-base-200 p-8 relative overflow-visible">
                        <div className="absolute -top-4 -left-4 bg-primary text-primary-content p-3 rounded-xl shadow-lg">
                            <FaQuoteLeft size={20} />
                        </div>
                        <div className="flex gap-1 mb-4 text-orange-400">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p className="italic text-base-content/80 mb-6">
                            "Borrowing books digitally has never been this easy. The UI is very clean and the responsive design works perfectly on my tablet."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.pravatar.cc/150?u=2" alt="User" />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold">Ayesha Akter</h4>
                                <p className="text-xs opacity-60">Content Creator</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="card bg-base-100 shadow-sm border border-base-200 p-8 relative overflow-visible">
                        <div className="absolute -top-4 -left-4 bg-primary text-primary-content p-3 rounded-xl shadow-lg">
                            <FaQuoteLeft size={20} />
                        </div>
                        <div className="flex gap-1 mb-4 text-orange-400">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p className="italic text-base-content/80 mb-6">
                            "I love the variety of categories available. Whether it's Science or Story, there's always something new to read. Highly recommended!"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.pravatar.cc/150?u=3" alt="User" />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold">Rakib Hasan</h4>
                                <p className="text-xs opacity-60">Student</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;