

export default function Footer() {
    return (
        <div className="w-screen bg-[#02033B] h-[680px] space-y-20 px-48 py-24">
            <section className="grid grid-cols-3">
                <div className="text-white">
                    <h1 className="text-2xl font-extrabold">
                        Scan. Detect. Remove.
                    </h1>
                    <div className="flex space-x-10 py-12">
                        <a className="cursor-pointer">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.14 0H3.86C2.83626 0 1.85446 0.406677 1.13057 1.13057C0.406677 1.85446 0 2.83626 0 3.86L0 32.14C0 33.1637 0.406677 34.1455 1.13057 34.8694C1.85446 35.5933 2.83626 36 3.86 36H32.14C33.1637 36 34.1455 35.5933 34.8694 34.8694C35.5933 34.1455 36 33.1637 36 32.14V3.86C36 2.83626 35.5933 1.85446 34.8694 1.13057C34.1455 0.406677 33.1637 0 32.14 0V0ZM28.21 12.76V13.44C28.2245 15.3962 27.8534 17.3361 27.1178 19.1489C26.3823 20.9616 25.2967 22.6117 23.9232 24.0047C22.5497 25.3977 20.9151 26.5064 19.1129 27.2674C17.3107 28.0285 15.3762 28.4269 13.42 28.44C13.3504 28.45 13.2796 28.45 13.21 28.44C10.3425 28.4476 7.53362 27.6282 5.12 26.08C5.54159 26.1282 5.96566 26.1516 6.39 26.15C8.7854 26.1652 11.1153 25.3686 13 23.89C11.8868 23.8862 10.8035 23.53 9.90526 22.8725C9.00703 22.215 8.34007 21.2899 8 20.23C8.78802 20.3672 9.59634 20.3331 10.37 20.13C9.19123 19.8827 8.13304 19.2384 7.37223 18.3047C6.61143 17.3709 6.19411 16.2044 6.19 15V14.93C6.9148 15.3403 7.72769 15.5701 8.56 15.6C7.83928 15.1169 7.24873 14.4635 6.84059 13.6979C6.43245 12.9322 6.2193 12.0777 6.22 11.21C6.21338 10.2756 6.45865 9.35677 6.93 8.55C8.261 10.1669 9.91584 11.4872 11.788 12.4259C13.6601 13.3645 15.7081 13.9007 17.8 14C17.5339 12.867 17.6496 11.6779 18.1291 10.6174C18.6086 9.55696 19.425 8.68464 20.4514 8.13608C21.4778 7.58751 22.6567 7.39344 23.8048 7.58404C24.9529 7.77463 26.0059 8.33921 26.8 9.19C27.9693 8.98445 29.0953 8.58207 30.13 8C29.7383 9.21543 28.9171 10.2464 27.82 10.9C28.8548 10.7751 29.8656 10.4988 30.82 10.08C30.1094 11.1158 29.2266 12.0222 28.21 12.76Z" fill="white" />
                            </svg>
                        </a>
                        <a className="cursor-pointer">
                            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.7337 0H4.45375C3.43001 0 2.44821 0.406677 1.72432 1.13057C1.00043 1.85446 0.59375 2.83626 0.59375 3.86L0.59375 32.14C0.59375 33.1637 1.00043 34.1455 1.72432 34.8694C2.44821 35.5933 3.43001 36 4.45375 36H15.4537V23.76H10.4137V18H15.4838V13.61C15.4838 8.61 18.4837 5.86 23.0037 5.86C24.5013 5.87978 25.9954 6.01014 27.4737 6.25V11.15H24.9538C22.4838 11.15 21.7038 12.68 21.7038 14.26V18H27.2337L26.3538 23.76H21.7038V36H32.7038C33.2132 36.004 33.7183 35.907 34.1901 35.7148C34.6619 35.5226 35.091 35.2389 35.4526 34.8801C35.8142 34.5213 36.1012 34.0944 36.2971 33.6241C36.4929 33.1538 36.5938 32.6494 36.5938 32.14V3.86C36.5938 2.83626 36.1871 1.85446 35.4632 1.13057C34.7393 0.406677 33.7575 0 32.7337 0V0Z" fill="white" />
                            </svg>

                        </a>
                        <a className="cursor-pointer">
                            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.3275 36H4.0475C3.02376 36 2.04196 35.5933 1.31807 34.8694C0.594177 34.1455 0.1875 33.1637 0.1875 32.14L0.1875 3.86C0.1875 2.83626 0.594177 1.85446 1.31807 1.13057C2.04196 0.406677 3.02376 0 4.0475 0H32.3275C33.3512 0 34.333 0.406677 35.0569 1.13057C35.7808 1.85446 36.1875 2.83626 36.1875 3.86V32.14C36.1875 33.1637 35.7808 34.1455 35.0569 34.8694C34.333 35.5933 33.3512 36 32.3275 36ZM17.8275 9.14C17.7475 9.14 10.3475 9.14 8.5075 9.64C8.00108 9.77791 7.5397 10.0463 7.16945 10.4183C6.79919 10.7903 6.53302 11.2529 6.3975 11.76C6.0566 13.6676 5.88925 15.6022 5.8975 17.54C5.88881 19.4778 6.05616 21.4124 6.3975 23.32C6.53757 23.8215 6.80577 24.278 7.17573 24.6444C7.54569 25.0109 8.00466 25.2747 8.5075 25.41C10.3475 25.91 17.7475 25.91 17.8275 25.91C17.9075 25.91 25.3075 25.91 27.1375 25.41C27.6431 25.2803 28.105 25.0183 28.4758 24.651C28.8466 24.2837 29.113 23.8243 29.2475 23.32C29.5937 21.4131 29.7611 19.478 29.7475 17.54C29.7613 15.6053 29.5939 13.6735 29.2475 11.77C29.1179 11.267 28.8599 10.8063 28.4988 10.4329C28.1377 10.0595 27.6859 9.78633 27.1875 9.64C25.3075 9.15 17.8975 9.14 17.8275 9.14ZM15.3875 21.14V14L21.6175 17.55L15.3875 21.09V21.14Z" fill="white" />
                            </svg>

                        </a>
                    </div>
                    <div className="text-xs flex space-x-7 underline underline-offset-4 pb-12">
                        <p>
                            Privacy Policy
                        </p>
                        <p>
                            Terms of Service
                        </p>
                    </div>
                    <div className="text-xs space-y-5">
                        <p>
                            Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356
                        </p>
                        <p>
                            Designed & developed by Bigger Picture
                        </p>
                    </div>
                </div>
                <div className="ml-14">
                    <h1 className=" mb-[60px] w-48 pb-7  border-b-2 border-r-0 border-white ">
                        <svg width="86" height="29" viewBox="0 0 86 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.926492 2.54545H8.54545L15.0085 18.3054H15.3068L21.7699 2.54545H29.3889V28H23.3981V12.3643H23.1868L17.0717 27.8384H13.2436L7.12855 12.2773H6.91726V28H0.926492V2.54545ZM33.2263 28V8.90909H39.3041V28H33.2263ZM36.2714 6.6843C35.4179 6.6843 34.6846 6.40258 34.0715 5.83913C33.4583 5.2674 33.1517 4.57966 33.1517 3.77592C33.1517 2.98047 33.4583 2.30102 34.0715 1.73757C34.6846 1.16584 35.4179 0.87997 36.2714 0.87997C37.1331 0.87997 37.8664 1.16584 38.4713 1.73757C39.0845 2.30102 39.3911 2.98047 39.3911 3.77592C39.3911 4.57966 39.0845 5.2674 38.4713 5.83913C37.8664 6.40258 37.1331 6.6843 36.2714 6.6843ZM43.1726 28V8.90909H49.0763V12.3892H49.2752C49.6232 11.1297 50.1908 10.1934 50.978 9.58025C51.7652 8.95881 52.6808 8.64808 53.7248 8.64808C54.0065 8.64808 54.2965 8.6688 54.5948 8.71023C54.8931 8.74337 55.1707 8.79723 55.4276 8.8718V14.1541C55.1375 14.0547 54.7564 13.976 54.2841 13.918C53.8201 13.86 53.4058 13.831 53.0412 13.831C52.3203 13.831 51.6699 13.9925 51.0898 14.3157C50.5181 14.6306 50.0665 15.0739 49.7351 15.6456C49.4119 16.209 49.2504 16.8719 49.2504 17.6342V28H43.1726ZM65.8244 28.3604C63.8192 28.3604 62.0957 27.9503 60.6539 27.13C59.2205 26.3014 58.1143 25.1496 57.3354 23.6747C56.5648 22.1915 56.1795 20.4722 56.1795 18.5167C56.1795 16.5529 56.5648 14.8336 57.3354 13.3587C58.1143 11.8755 59.2205 10.7237 60.6539 9.90341C62.0957 9.07481 63.8192 8.66051 65.8244 8.66051C67.8296 8.66051 69.5489 9.07481 70.9824 9.90341C72.4242 10.7237 73.5304 11.8755 74.301 13.3587C75.0798 14.8336 75.4693 16.5529 75.4693 18.5167C75.4693 20.4722 75.0798 22.1915 74.301 23.6747C73.5304 25.1496 72.4242 26.3014 70.9824 27.13C69.5489 27.9503 67.8296 28.3604 65.8244 28.3604ZM65.8617 23.7741C66.5909 23.7741 67.2082 23.5504 67.7136 23.103C68.219 22.6555 68.6043 22.0341 68.8695 21.2386C69.1429 20.4432 69.2797 19.5234 69.2797 18.4794C69.2797 17.4188 69.1429 16.4908 68.8695 15.6953C68.6043 14.8999 68.219 14.2784 67.7136 13.831C67.2082 13.3835 66.5909 13.1598 65.8617 13.1598C65.1077 13.1598 64.4696 13.3835 63.9476 13.831C63.4339 14.2784 63.0403 14.8999 62.7669 15.6953C62.5017 16.4908 62.3691 17.4188 62.3691 18.4794C62.3691 19.5234 62.5017 20.4432 62.7669 21.2386C63.0403 22.0341 63.4339 22.6555 63.9476 23.103C64.4696 23.5504 65.1077 23.7741 65.8617 23.7741ZM82.0007 28.3604C81.1058 28.3604 80.3394 28.0456 79.7013 27.4158C79.0716 26.7861 78.7609 26.0238 78.7692 25.1289C78.7609 24.2506 79.0716 23.5007 79.7013 22.8793C80.3394 22.2495 81.1058 21.9347 82.0007 21.9347C82.8459 21.9347 83.5916 22.2495 84.2379 22.8793C84.8925 23.5007 85.224 24.2506 85.2322 25.1289C85.224 25.7255 85.0665 26.2682 84.7599 26.7571C84.4616 27.246 84.0681 27.6354 83.5792 27.9254C83.0986 28.2154 82.5724 28.3604 82.0007 28.3604Z" fill="white" />
                        </svg>

                    </h1>
                    <ul className="text-[#FFC247] font-extrabold space-y-6">
                        <li className="flex ">
                            <div>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="9.5" width="20" height="2" fill="#FFC247" />
                                </svg>
                            </div>
                            <div>iPhone</div>
                        </li>
                        <li className="flex ">
                            <div>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="9.5" width="20" height="2" fill="#FFC247" />
                                </svg>
                            </div>
                            <div>Android</div>
                        </li>
                        <li className="flex ">
                            <div>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="9.5" width="20" height="2" fill="#FFC247" />
                                </svg>
                            </div>
                            <div>Help</div>
                        </li>
                        <li className="flex ">
                            <div>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="9.5" width="20" height="2" fill="#FFC247" />
                                </svg>
                            </div>
                            <div>About</div>
                        </li>
                        <li className="flex ">
                            <div>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="9.5" width="20" height="2" fill="#FFC247" />
                                </svg>
                            </div>
                            <div>Insights</div>
                        </li>

                    </ul>
                </div>
                <div className="bg-[#FFC247] w-[436px] h-[234px] rounded-[42px] relative">
                    <div className=" flex justify-center items-center">
                        <svg width="190" height="233" viewBox="0 0 190 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M136.249 146.32C133.875 145.139 131.141 144.905 128.6 145.664C126.059 146.423 123.902 148.119 122.564 150.408C121.589 152.101 120.556 153.736 119.466 155.314C117.626 158.153 115.644 160.896 113.527 163.534C109.519 168.452 103.723 171.577 97.4126 172.223C91.1019 172.868 84.7931 170.981 79.8731 166.977C78.6196 165.94 77.4669 164.788 76.4303 163.534C74.3646 160.952 72.3849 158.241 70.4914 155.443C60.8245 140.543 54.1315 123.912 50.7812 106.469C48.8519 96.9035 47.6293 87.2087 47.1232 77.4634C46.7949 71.2067 48.7006 65.0369 52.5 60.055C56.2995 55.0732 61.7455 51.6035 67.8662 50.2651H68.1675C77.0378 48.3993 86.0239 47.1341 95.0646 46.478C104.09 47.1218 113.061 48.3727 121.919 50.2221H122.177C128.297 51.5704 133.739 55.0502 137.531 60.0402C141.323 65.0302 143.217 71.2055 142.877 77.4634C142.877 79.357 142.877 81.2936 142.489 83.3162C142.36 84.6916 142.505 86.0791 142.916 87.3979C143.328 88.7167 143.998 89.9404 144.887 90.9977C145.776 92.0551 146.867 92.925 148.095 93.5567C149.324 94.1885 150.666 94.5695 152.043 94.6776L177.52 96.7002C178.889 96.818 180.267 96.6639 181.576 96.2468C182.885 95.8297 184.098 95.1578 185.146 94.2698C186.194 93.3818 187.056 92.2952 187.682 91.0726C188.309 89.8501 188.687 88.5157 188.795 87.1464C190.018 72.1466 189.902 57.0678 188.451 42.0884C188.116 38.5811 187.079 35.177 185.4 32.0791C183.722 28.9812 181.437 26.2529 178.682 24.0566C154.755 5.20717 111.117 0.989714 98.5074 -9.799e-05C96.1723 -0.172168 93.8277 -0.172168 91.4926 -9.80049e-05C78.8833 0.989714 35.2455 5.20717 11.3179 24.0566C8.56391 26.2573 6.27733 28.986 4.59237 32.0825C2.90742 35.1789 1.85803 38.5808 1.50582 42.0884C-1.59273 73.8485 -4.51913 177.951 83.2729 229.163C86.898 231.276 91.019 232.39 95.2152 232.39C99.4113 232.39 103.532 231.276 107.157 229.163C130.627 215.516 150.098 195.941 163.62 172.399C164.317 171.213 164.773 169.901 164.962 168.538C165.152 167.175 165.07 165.788 164.722 164.457C164.374 163.126 163.767 161.876 162.936 160.78C162.104 159.684 161.064 158.762 159.876 158.069L159.23 157.724L136.249 146.32Z" fill="#FDB235" />
                        </svg>
                    </div>
                    <div className="absolute top-8 left-8 flex flex-col justify-between">
                        <h1 className="text-2xl font-extrabold mb-5">
                            Sign up to our newsletter
                        </h1>
                        <p className="mb-9">
                            Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!
                        </p>
                        <div className="max-h-[34px]">
                            <input type="text" className="rounded-l-full h-[34px] pl-4 text-sm" placeholder="Email address" />
                            <button className="btn btn-sm border-none rounded-none h-[34px] w-[110px] rounded-r-full bg-[#02033B] text-white hover:text-[#02033B] hover:bg-white">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <p className="text-white text-xs w-1/2">
                    Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.
                </p>
            </section>
        </div>
    )
}
