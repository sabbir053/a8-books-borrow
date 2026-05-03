'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight, FiBook, FiGrid, FiSearch } from 'react-icons/fi';

const AllBooksPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Story", "Tech", "Science"];

    const filteredBooks = booksData.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            <div className="bg-white top-0 z-10 shadow-sm">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <FiBook className="text-primary" /> All Books
                        </h1>
                        <div className="relative w-full md:w-96">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by title..."
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row gap-8">

                <aside className="w-full md:w-64 space-y-4">
                    <div className="bg-white p-5 rounded-xl border border-gray-200">
                        <h3 className="font-semibold mb-4 flex items-center gap-2 text-gray-700">
                            <FiGrid /> Categories
                        </h3>
                        <div className="flex flex-col gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === cat
                                        ? "bg-primary text-white font-medium"
                                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                <main className="flex-1">
                    {filteredBooks.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBooks.map(book => (
                                <div key={book.id} className="bg-white rounded-md border border-gray-200 hover:shadow-lg transition-shadow">
                                    <div className="h-64 bg-gray-200">
                                        <Image
                                            src={book.image_url}
                                            alt={book.title}
                                            height={256}
                                            width={256}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-primary px-2 py-1 bg-primary/10 rounded">
                                                {book.category}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-lg mb-1 truncate">{book.title}</h3>
                                        <p className="text-gray-500 text-sm mb-4">by {book.author}</p>
                                        <Link href={`/books/${book.id}`} className="block">
                                            <button className="w-full py-2 bg-gray-900 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-primary transition-colors group">
                                                Details
                                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiSearch className="text-2xl text-gray-400" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-700">No books found!</h2>
                            <p className="text-gray-500">Try adjusting your search or category filter.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default AllBooksPage;