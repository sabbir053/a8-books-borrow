'use client';
import React from 'react';
import { FiBook, FiCheckCircle, FiLayers, FiTag, FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';

const BookDetails = ({ book }) => {
    const handleBorrow = () => {
        toast.success(`Book "${book.title}" borrowed successfully! Check your profile.`);
    };
    return (
        <div className="lg:w-7/12 p-8 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
                <span className="badge badge-primary py-4 px-6 font-bold uppercase ">
                    {book.category}
                </span>
                <div className="flex items-center gap-2 text-success font-bold bg-success/10 px-4 py-1 rounded-full">
                    <FiLayers size={18} />
                    <span>{book.available_quantity} Copies Available</span>
                </div>
            </div>

            <h1 className="text-3xl md:text-3xl font-black text-base-content mb-4">
                {book.title}
            </h1>

            <div className="flex items-center gap-3 mb-10 text-gray-500 md:text-lg italic">
                <FiUser className="text-primary" />
                <span>By {book.author}</span>
            </div>

            <div className="space-y-4 mb-10 border-l-4 border-primary/20 pl-6 py-2">
                <h4 className="flex items-center gap-2 font-black text-primary uppercase text-sm tracking-widest">
                    <FiBook /> About the book
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                    {book.description}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 mt-4">
                <button
                    onClick={() => handleBorrow()}
                    className="btn btn-primary text-lg text-white rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                    Borrow This Book
                </button>

                <div className="flex items-center gap-2 text-primary font-semibold px-4">
                    <FiCheckCircle />
                    <span>Free to read</span>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;