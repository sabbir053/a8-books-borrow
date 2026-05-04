import AllBookPages from '@/components/AllBooks';
import React from 'react';
const AllBooksPage = async () => {
    const res = await fetch('https://a8-books-borrow-git-main-sabbir-devs-projects.vercel.app/data.json');
    const booksData = await res.json();

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            <AllBookPages booksData={booksData} />
        </div>
    );
};

export default AllBooksPage;