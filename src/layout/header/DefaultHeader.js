import React, { useState } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { engagement, resources, recentPosts } from '../header/data';
import FlyoutMenu from './FlyoutMenu';

export default function DefaultHeader() {
  const [showServicesFlyout, setShowServicesFlyout] = useState(false);
  const [showProductsFlyout, setShowProductsFlyout] = useState(false);

  // Function to handle click event on "Services" button
  const handleServicesClick = () => {
    setShowServicesFlyout(!showServicesFlyout);
  };

  // Function to handle click event on "Products" button
  const handleProductsClick = () => {
    setShowProductsFlyout(!showProductsFlyout);
  };

  return (
    <Popover className="relative isolate z-50 shadow">
      <div className="bg-white py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Services Button */}
          <Popover.Button
            className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            onClick={handleServicesClick}
          >
            Services
            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
          </Popover.Button>
          {/* Render Services FlyoutMenu */}
          {showServicesFlyout && <FlyoutMenu />}
          
          {/* Products Button */}
          <Popover.Button
            className="ml-4 inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            onClick={handleProductsClick}
          >
            Products
            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
          </Popover.Button>
          {/* Render Products FlyoutMenu */}
          {showProductsFlyout && <FlyoutMenu />}
        </div>
      </div>

      {/* Popover Panel */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5">
          {/* Content for Popover Panel */}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
