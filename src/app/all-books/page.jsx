import AllBookPages from '@/components/AllBooks';
import React from 'react';
const AllBooksPage = async () => {
    const res = await fetch('http://localhost:3000/data.json',{ cache: 'no-store' });
    const booksData = await res.json();

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            <AllBookPages booksData={booksData} />
        </div>
    );
};

export default AllBooksPage;