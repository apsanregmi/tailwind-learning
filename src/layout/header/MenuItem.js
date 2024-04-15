import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className="relative group">
      <button
        className="block rounded-md bg-gray-900 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      >
        <span className="flex items-center justify-between w-full">
          <span className="flex items-center justify-between min-w-0 space-x-3">
            {item.submenus ? (
              <svg
                className="mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : null}
            <span className="truncate">{item.name}</span>
          </span>
          {item.submenus ? (
            <svg
              className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v12a1 1 0 01-1.447.895L5.224 14.11a1 1 0 01-.105-1.32l.083-.094L9 10.83l4.798 2.867a1 1 0 01-1.105 1.658l-.117-.07L10 12.828l-3.576 2.145A1 1 0 015 14.11l-.083.094a1 1 0 01-1.447-.895L9 4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : null}
        </span>
      </button>
      {item.submenus ? (
        <div className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-lg lg:w-96">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              {item.submenus.map((subitem, subindex) => (
                <a
                  key={subindex}
                  href={subitem.href}
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">{subitem.name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MenuItem;
