import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="mb-2 border-b ">
            <nav className="bg-white dark:bg-neutral-900 border-gray-200  ">
                <div className="max-w-[85rem] w-full mx-auto sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-x-3 py-3 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center gap-x-3">
                        <div className="grow">
                            <span className="font-semibold whitespace-nowrap text-gray-800 dark:text-neutral-200">
                                <Link
                                    className="flex-none focus:outline-none focus:opacity-80 dark:text-white bg-clip-text bg-gradient-to-l from-purple-400 to-blue-600 text-transparent text-xl font-semibold"
                                    to="/"
                                    aria-label="Brand"
                                >
                                    Milt Assc.
                                </Link>
                            </span>
                        </div>

                        <button
                            type="button"
                            className="hs-collapse-toggle sm:hidden py-1.5 px-2 inline-flex items-center font-medium text-xs rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-collapse="#hs-nav-secondary"
                            aria-controls="hs-nav-secondary"
                            aria-label="Toggle navigation"
                        >
                            Overviews
                            <svg
                                className="hs-dropdown-open:rotate-180 shrink-0 size-4 ms-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </div>

                    <div
                        id="hs-nav-secondary"
                        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
                    >
                        <div className="py-2 sm:py-0 flex flex-col sm:flex-row sm:justify-end gap-y-2 sm:gap-y-0 sm:gap-x-6">
                            <Link
                                className="font-medium text-sm text-gray-800 focus:outline-none focus:text-blue-600 dark:text-blue-500 dark:focus:text-blue-500"
                                to="/"
                            >
                                Home
                            </Link>

                            <Link
                                className="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                              to="/miltonians"
                            >
                                Miltonians
                            </Link>
                            <Link
                                className="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                                to="/committee"
                            >
                                Committee
                            </Link>
                            <Link
                                className="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                                to="/activities"
                            >
                                Activities
                            </Link>
                            <Link
                                className="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                                to="/progress"
                            >
                                Progress
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
