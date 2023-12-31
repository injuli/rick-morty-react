import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Image from 'next/image';

type AuthPageProps = {
    
};

const page:React.FC<AuthPageProps> = () => {
    
    return <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none '>
            <Image
            src="/intro.png"
            width={300}
            height={91}
            alt="Rick and Morty login"
            />
                </div>
        </div>
    </div>
}
export default page;