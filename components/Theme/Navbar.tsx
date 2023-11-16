import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="py-2 px-4">
            <div>
                <Link href={'/'}>
                    <img src="/logo.png" alt={'logo'} width={'100px'}/>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;