import React from 'react';
import Updates from '@/components/Updates';

const UpdatePage = async () => {
    return (
        <div className="p-10 max-w-lg mx-auto bg-white shadow-lg rounded-xl mt-10">
            <h2 className="text-xl font-bold mb-5">Update Profile</h2>
            <Updates/>
        </div>
    );
};

export default UpdatePage;