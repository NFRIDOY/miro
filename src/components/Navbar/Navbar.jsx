

export default function Navbar() {
    return (
        <div className="max-w-screen-2xl mx-auto ">
            {/* Navbar */}

            {/* logo */}
            {/* Navigations */}
            {/* options */}
            {/* CTA Btn Sign Up */}

            <div className="navbar bg-base-100">
                {/* <div className="navbar-start border-2 ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <details>
                                    <summary>Product</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Solutions</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Resources</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Enterprise</a></li>
                            <li><a>Pricing</a></li>
                        </ul>
                    </div>


                </div> */}
                <div className="text-xl mr-5">
                    <svg width="91" height="32" viewBox="0 0 91 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M39.5113 0.918836C38.2772 2.1019 38.2772 4.12974 39.5113 5.35423C40.7454 6.57935 42.7882 6.57935 44.0223 5.35423C45.2558 4.12974 45.2558 2.1019 44.0223 0.918836C42.7882 -0.306279 40.7454 -0.306279 39.5113 0.918836ZM64.3065 9.2083L61.4128 9.67274C55.8926 10.9214 52.3061 12.7105 52.3061 18.7254V30.7947L57.3279 31.8083V19.4792C57.3279 16.6684 58.9265 15.3988 61.4128 14.9294L64.3065 14.4031V9.2083ZM26.0854 30.8442L31.1073 31.8578V18.2133C31.1073 11.6653 26.0007 9.29983 22.4684 9.29983C20.0855 9.29983 18.2135 9.89105 16.5109 11.5386C14.7665 9.89105 12.6814 9.25778 10.9788 9.25778C8.55352 9.25778 6.42542 10.3134 5.02122 12.0036V9.72222L0 10.6938V30.8442L5.02122 31.8578V18.0018C5.02122 15.8051 6.63848 14.2423 9.06437 14.2423C11.4473 14.2423 13.0645 15.8051 13.0645 18.0018V30.8442L18.0857 31.8578V18.0018C18.0857 15.8051 19.7024 14.2423 22.0859 14.2423C24.4688 14.2423 26.0854 15.8051 26.0854 18.0018V30.8442ZM91 20.6079C91 26.8905 85.8529 32 79.5664 32C73.2376 32 68.0905 26.8905 68.0905 20.6079C68.0905 14.3673 73.2376 9.25778 79.5664 9.25778C85.8529 9.25778 91 14.3673 91 20.6079ZM79.5664 27.2671C75.8958 27.2671 72.8999 24.2937 72.8999 20.6079C72.8999 16.9641 75.8958 14.0321 79.5664 14.0321C83.237 14.0321 86.19 16.9641 86.19 20.6079C86.19 24.2937 83.237 27.2671 79.5664 27.2671ZM44.2347 32L39.2135 30.8442V10.5503L44.2347 9.53669V32Z" fill="#050038" />
                    </svg>
                </div>
                <div className="lg:navbar-start border-0 hidden lg:flex">
                    <ul className="menu menu-horizontal px-0">
                        <li>
                            <details>
                                <summary>Product</summary>
                                <ul className="p-2">
                                    <li><a>Web Design</a></li>
                                    <li><a>Web Development</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Solutions</summary>
                                <ul className="p-2">
                                    <li><a>Web Design</a></li>
                                    <li><a>Web Development</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Resources</summary>
                                <ul className="p-2">
                                    <li><a>React</a></li>
                                    <li><a>JavaScript</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Enterprise</a></li>
                        <li><a>Pricing</a></li>


                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 flex items-center">

                        <li>
                            <a>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.6562 12C24.6562 18.6275 19.2837 24 12.6562 24C6.02884 24 0.65625 18.6275 0.65625 12C0.65625 5.37259 6.02884 0 12.6562 0C19.2837 0 24.6562 5.37259 24.6562 12ZM6.78002 14C6.69833 13.3448 6.65625 12.6773 6.65625 12C6.65625 11.3227 6.69834 10.6552 6.78005 10H2.85629C2.72512 10.6462 2.65625 11.3151 2.65625 12C2.65625 12.6849 2.72512 13.3537 2.85629 14H6.78002ZM7.1603 16H3.48834C4.66585 18.6951 6.99688 20.7707 9.85733 21.6031C8.61781 19.9536 7.6897 18.0568 7.1603 16ZM9.23601 16H16.0765C15.4185 18.2109 14.2291 20.1929 12.6562 21.798C11.0835 20.1929 9.89401 18.2109 9.23601 16ZM16.5145 14H8.79804C8.70461 13.3468 8.65625 12.679 8.65625 12C8.65625 11.321 8.70461 10.6532 8.79804 10H16.5145C16.6079 10.6532 16.6562 11.321 16.6562 12C16.6562 12.679 16.6079 13.3468 16.5145 14ZM18.5325 14C18.6141 13.3448 18.6562 12.6773 18.6562 12C18.6562 11.3227 18.6141 10.6552 18.5325 10H22.4563C22.5875 10.6462 22.6562 11.3151 22.6562 12C22.6562 12.6849 22.5875 13.3537 22.4563 14H18.5325ZM18.1523 16H21.8241C20.6467 18.6951 18.3156 20.7707 15.4552 21.6031C16.6947 19.9536 17.6228 18.0568 18.1523 16ZM12.6562 2.20204C11.0835 3.80704 9.89401 5.78908 9.23601 8H16.0765C15.4185 5.78908 14.2291 3.80704 12.6562 2.20204ZM15.4552 2.39697C16.6947 4.04639 17.6228 5.94316 18.1521 8H21.8241C20.6467 5.30497 18.3156 3.22927 15.4552 2.39697ZM3.48834 8H7.16033C7.68973 5.94316 8.61785 4.04639 9.85736 2.39697C6.99689 3.22927 4.66585 5.30497 3.48834 8Z" fill="#050038" />
                                </svg>
                                EN</a>
                        </li>
                        <li><a>Contact Sales</a></li>
                        <li><a>Login</a></li>
                        <li>
                            <a className="btn bg-[#4262FF] text-white rounded-full hover:bg-[#5869c2]">Sign up free →</a>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
