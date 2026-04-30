import Link from 'next/link';
import React from 'react';
import { FiEye } from 'react-icons/fi';

const FeaturedBooks = () => {
    return (
        <section className="py-10">
            {/* Header */}
            <div className="flex items-center gap-2 mb-8 px-2">
                <div className="w-2 h-8 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-bold">Featured Books</h2>
            </div>

            {/* Responsive Row (Desktop 4, Tab 3, Mobile 2) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">

                {/* Book Card 1 */}
                <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all">
                    <figure className="px-4 pt-4">
                        <img src="https://m.media-amazon.com/images/I/51InjRPaF7L._SL1000_.jpg" alt="Book" className="rounded-xl h-56 w-full object-cover" />
                    </figure>
                    <div className="card-body p-4">
                        <h3 className="card-title text-base leading-tight">Eloquent JavaScript</h3>
                        <p className="text-sm text-base-content/60">Tech</p>
                        <div className="card-actions mt-2">
                            <Link href="/books/1" className="w-full">
                                <button className="btn btn-primary btn-sm w-full gap-2 font-bold">
                                    <FiEye /> Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Book Card 2 */}
                <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all">
                    <figure className="px-4 pt-4">
                        <img src="https://m.media-amazon.com/images/I/81LFApPZ4mL._SL1500_.jpg" alt="Book" className="rounded-xl h-56 w-full object-cover" />
                    </figure>
                    <div className="card-body p-4">
                        <h3 className="card-title text-base leading-tight">The Silent Patient</h3>
                        <p className="text-sm text-base-content/60">Story</p>
                        <div className="card-actions mt-2">
                            <Link href="/books/2" className="w-full">
                                <button className="btn btn-primary btn-sm w-full gap-2 font-bold">
                                    <FiEye /> Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Book Card 3 */}
                <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all">
                    <figure className="px-4 pt-4">
                        <img src="https://m.media-amazon.com/images/I/719S6Iu8m5L._SL1500_.jpg" alt="Book" className="rounded-xl h-56 w-full object-cover" />
                    </figure>
                    <div className="card-body p-4">
                        <h3 className="card-title text-base leading-tight">Astrophysics</h3>
                        <p className="text-sm text-base-content/60">Science</p>
                        <div className="card-actions mt-2">
                            <Link href="/books/3" className="w-full">
                                <button className="btn btn-primary btn-sm w-full gap-2 font-bold">
                                    <FiEye /> Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Book Card 4 */}
                <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all">
                    <figure className="px-4 pt-4">
                        <img src="https://m.media-amazon.com/images/I/41xShlnTZTL._SL1000_.jpg" alt="Book" className="rounded-xl h-56 w-full object-cover" />
                    </figure>
                    <div className="card-body p-4">
                        <h3 className="card-title text-base leading-tight">Clean Code</h3>
                        <p className="text-sm text-base-content/60">Tech</p>
                        <div className="card-actions mt-2">
                            <Link href="/books/4" className="w-full">
                                <button className="btn btn-primary btn-sm w-full gap-2 font-bold">
                                    <FiEye /> Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturedBooks;