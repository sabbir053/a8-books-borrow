'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} className={isActive ? 'text-blue-500 border-b-2 border-b-2-blue-500' : 'text-gray-500'}>
            {children}
        </Link>
    );
};

export default Navlink;