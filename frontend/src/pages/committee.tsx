// Removed next/image import as it is not compatible with plain React

export default function Page() {
    return (
        <div className="w-full bg-white rounded-lg shadow-md dark:bg-neutral-800">
            <div className="border-b border-gray-200 px-4 dark:border-neutral-700">
                <nav className="flex gap-x-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 dark:focus:text-blue-500 active" id="basic-tabs-item-1" aria-selected="true" data-hs-tab="#basic-tabs-1" aria-controls="basic-tabs-1" role="tab">
                        Committee Details
                    </button>
                    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 dark:focus:text-blue-500" id="basic-tabs-item-2" aria-selected="false" data-hs-tab="#basic-tabs-2" aria-controls="basic-tabs-2" role="tab">
                        Members
                    </button>

                </nav>
            </div>

            <div className="mt-3 p-4">
                <div id="basic-tabs-1" role="tabpanel" aria-labelledby="basic-tabs-item-1">
                    <div className="w-full max-w-2xl mx-auto pt-10 md:pt-8 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-x-3">
                            <div className="shrink-0">
                                <img className="shrink-0 size-16 rounded-full" src="https://images.unsplash.com/photo-1556402514-ab77f15d1ba1?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" width="38" height="38" />
                            </div>

                            <div className="grow">
                                <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
                                    EC Committee
                                </h1>
                                <p className="text-sm text-gray-600 dark:text-neutral-400">
                                    EC committee is a group of people who are responsible for managing the organization
                                </p>
                            </div>
                        </div>
                        <form className="mt-4" >

                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2 dark:text-white">
                                    <span>Committee Name</span>
                                </label>
                                <input
                                    type="text"
                                    id="hs-hero-name-2"
                                    readOnly 
                                    value="Eliana"
                                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    placeholder="Full name"
                                />
                            </div>

                            


                            <div className="mb-4">
                                <label
                                    htmlFor="hs-hero-password-2"
                                    className="block text-sm font-medium dark:text-white mb-2"
                                >
                                    <span>Description</span>
                                </label>
                                <textarea className='block text-sm font-medium dark:text-white mb-2 border w-full h-32' name="desc" id="desc"></textarea>
                            </div>

                            <div className="flex gap-2 justify-end">
                                <button
                                    type="submit"
                                    className="py-2 px-2 w-fit inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Update Committee
                                </button>
                                <button
                                    type="button"
                                    className="py-2 px-2 w-fit inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Delete Committee
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="basic-tabs-2" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-2">
                    <p className="text-gray-500 dark:text-neutral-400 mb-4">
                        List of Members for EC Committee
                    </p>
                    <ul className="max-w-xs flex flex-col">
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                            Durai
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                            Lokesh
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                            Amanju
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}