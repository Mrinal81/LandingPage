import React, { Fragment, useState } from 'react';
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';



interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    const [isNavModalVisible, setIsNavModalVisible] = useState(false);

  const toggleNavModal = () => {
    setIsNavModalVisible(!isNavModalVisible);
  };
 

  return (
    <nav className='bg-white w-full z-20 top- start-0'>
        <div className='max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4 w-full shadow-lg rounded-lg border mt-4' >
        <img src="/assets/logo.png" className="h-8" alt="Flowbite Logo" />

        <div className="grow">
            <div className='hidden sm:flex items-center justify-center gap-2 md:gap-8'>
                <Link href="home">Home</Link>
                <Link href="home">Team</Link>
                <Link href="home">Contact</Link>
                <Link href="home">Career</Link>
           </div>
        </div>
        <div className="flex grow items-center justify-end sm:hidden">
            <Popover>
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className='sr-only'>Open Menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
            </Popover.Button>
            <Transition as={Fragment}
            enter="duration-200 ease-out"
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave="duration-100 ease-in"
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
            <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                <div className="rounded-lg bg-white shadow-lg ring-1 ring-opacity-5 divide-y-2 divide-gray-50">
                    <div className="px-5 pt-5 pb-6">
                        <div className="flex items-center justify-between">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />

                        <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className='sr-only'>Close Menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                        </div>
                        </div>
                        <nav className='grid gap-y-8'>
                            <Link href="home" className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'>Home</Link>
                            <Link href="home" className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'>Home</Link>
                            <Link href="home" className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'>Home</Link>
                            <Link href="home" className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'>Home</Link>
                        </nav>
                    </div>
                    <div className="mt-6 flex flex-col items-center gap-2">
                    <Link href="#" className=' rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'>Signin</Link>
                    </div>
                </div>
            </Popover.Panel>
            </Transition>
            </Popover>
        </div>
        <div className="hidden sm:block  text-blue-600 rounded-lg text-sm px-4 py-2 border-2 border-blue-600 text-center ">
        <Link href="#" className='mr-2 font-bold'>Sign In</Link>
        </div>
        </div>
    </nav>

    
  );
};

export default Navbar;
