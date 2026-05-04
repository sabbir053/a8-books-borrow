import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiBookOpen } from 'react-icons/fi';

const FeaturedBooks = async() => {
    const res = await fetch('http://localhost:3000/data.json', { cache: 'no-store' });
    const booksData = await res.json();
    return (
        <section className="py-10 container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 px-4 gap-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                        <FiBookOpen size={32} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Explore Collection</h2>
                        <p className="text-base-content/60 italic font-medium">Discover 12 of our most popular titles</p>
                    </div>
                </div>
                <div className="text-sm font-bold bg-base-200 px-4 py-2 rounded-full border border-base-300">
                    Total: <span className="text-primary">{booksData.length} Books</span>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10  px-4">
                {booksData.slice(0, 4).map((book) => (
                    <div
                        key={book.id}
                        className="group bg-gray-100 flex flex-col h-full border border-base-200 rounded-md overflow-hidden shadow-md transition-all duration-500"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src={book.image_url}
                                alt={book.title}
                                height={256}
                                width={256}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        <div className="flex flex-col p-6">
                            <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                                {book.title}
                            </h3>
                            <p className="text-sm text-base-content/50 mb-6 font-medium">by {book.author}</p>

                            <div className="mt-auto">
                                <Link href={`/books/${book.id}`} className="block">
                                    <button className="btn btn-primary btn-block rounded-xl gap-2 font-bold shadow-md">
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                <Link href={`/all-books`} className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-4 mt-4">
                    <button className="btn btn-outline btn-primary rounded-xl gap-2 font-bold shadow-md">
                        View All Books
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default FeaturedBooks;