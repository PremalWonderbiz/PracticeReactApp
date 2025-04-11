
const Navbar = () => {
    return (
        <>
            <nav className="bg-red-500 py-3">
                <div className="mx-auto max-w-8xl px-2 sm:px-14 lg:px-16">
                    <div className="relative flex h-16 items-center justify-center sm:justify-between">
                        <div>
                            <h2>TickSync</h2>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-gray-200" aria-current="page">Dashboard</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-gray-200">Team</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-gray-200">Projects</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-gray-200">Calendar</a>
                                    <button className="rounded-sm bg-black text-white px-4 cursor-pointer hover:bg-slate-900">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                        <button className="rounded-sm bg-black text-white px-4 py-2 m-auto w-25 ">Login</button>
                    </div>
                </div>
            </nav>
        </>);
}

export default Navbar;