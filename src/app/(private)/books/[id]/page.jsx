
import BookDetails from '@/components/home/BookDetails';
import Image from 'next/image';
import React from 'react';


const BookDetailsPage = async ({ params }) => {
    const res = await fetch('https://a8-book-borrow.vercel.app/data.json');
    const booksData = await res.json();

    const { id } = await params;

    const book = booksData.find((item) => item.id === parseInt(id));
    console.log(book, 'book');

    if (!book) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h2 className="text-2xl font-bold text-error">Book not found!</h2>
            </div>
        );
    }


    return (
        <div className="container mx-auto py-10 px-4">
            <div className="flex flex-col lg:flex-row bg-base-100 rounded-md shadow-md overflow-hidden">

                <div className="lg:w-5/12 p-8 md:p-16 flex justify-center items-center">
                    <div className="relative group">
                        <Image
                            src={book.image_url}
                            alt={book.title}
                            height={400}
                            width={400}
                            className="w-full rounded-md shadow-lg transform transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                <BookDetails book={book} />
            </div>
        </div>
    );
};

export default BookDetailsPage;