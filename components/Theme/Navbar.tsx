import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="py-2 px-4">
            <div>
                <Link href={'/'}>
                    <Image src="/logo.png" alt={'logo'} width="120" height={'100'}/>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;