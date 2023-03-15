"use client"
import { signOut } from 'next-auth/react';



const Header = () => {
    return (
        <div className="fixed z-10 top-0 left-0 w-full  bg-white text-[2.25rem] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.14),_0px_0px_3px_rgba(0,_0,_0,_0.12)] font-roboto">
            <div className="flex items-center justify-center max-w-6xl px-5 py-4 mx-auto md:justify-between md:px-8 lg:px-0">

                <div className="flex text-deepskyblue">
                    <b className="inline-block">
                        Connect
                    </b>
                    <b className="ml-1 inline-block rounded-md bg-deepskyblue text-white text-center w-[2.5rem]">
                        U
                    </b>
                </div>
                <div className="hidden md:flex lg:flex justify-end gap-20 text-[0.69rem] text-white">
                    <svg
                        width="32"
                        height="32"
                        className="w-[2rem] h-[2rem]"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.917 18.6127L16.3235 18.6146C21.8207 18.6663 24.9446 19.7876 24.9446 22.8895C24.9446 25.9185 21.9585 27.0782 16.7196 27.1818L15.917 27.1895C10.1669 27.1895 6.88946 26.0904 6.88946 22.9127C6.88946 19.7315 10.18 18.6127 15.917 18.6127ZM15.917 20.6127C11.2681 20.6127 8.88946 21.4214 8.88946 22.9127C8.88946 24.3936 11.2628 25.1895 15.917 25.1895C20.5646 25.1895 22.9446 24.3801 22.9446 22.8895C22.9446 21.4088 20.5705 20.6127 15.917 20.6127ZM25.3076 17.782C26.0033 17.83 26.6875 17.9288 27.3278 18.0733C28.7531 18.3524 29.8243 18.8868 30.3219 19.9294C30.6881 20.6996 30.6881 21.5952 30.3218 22.3674C29.8278 23.4061 28.7747 23.9332 27.3371 24.2288C26.7961 24.3401 26.2674 23.9917 26.1562 23.4508C26.0449 22.9098 26.3933 22.3811 26.9342 22.2698C27.804 22.091 28.3744 21.8055 28.5153 21.5093C28.6237 21.2808 28.6237 21.0153 28.5163 20.7895C28.3735 20.4904 27.7983 20.2034 26.9161 20.0303C26.3488 19.9026 25.7653 19.8184 25.17 19.7773C24.619 19.7393 24.2031 19.2619 24.2411 18.7109C24.2791 18.1599 24.7566 17.744 25.3076 17.782ZM7.60534 18.7109C7.64334 19.2619 7.22749 19.7393 6.67651 19.7773C6.22999 19.8081 5.79017 19.8632 5.34725 19.9451L4.90295 20.036C4.04845 20.2033 3.47383 20.4901 3.33118 20.79C3.22312 21.0161 3.22312 21.28 3.33253 21.5095C3.47296 21.8057 4.04279 22.0911 4.91224 22.2698C5.45321 22.3811 5.80157 22.9098 5.69033 23.4508C5.57909 23.9917 5.05037 24.3401 4.5094 24.2288C3.07121 23.9331 2.01818 23.4058 1.52628 22.3683C1.15808 21.596 1.15808 20.6988 1.52589 19.9292C1.98857 18.9565 2.95251 18.426 4.216 18.1373L4.49126 18.0791C5.15897 17.9288 5.84319 17.83 6.53891 17.782C7.08989 17.744 7.56734 18.1599 7.60534 18.7109ZM15.917 4.58334C19.3244 4.58334 22.0613 7.32028 22.0613 10.7277C22.0613 14.1361 19.3246 16.8732 15.917 16.8732C12.5094 16.8732 9.77268 14.1361 9.77268 10.7277C9.77268 7.32028 12.5096 4.58334 15.917 4.58334ZM23.4598 5.83918C26.1487 5.83918 28.3294 8.01892 28.3294 10.7075C28.3294 13.3961 26.1487 15.5758 23.4598 15.5758C22.9075 15.5758 22.4598 15.1281 22.4598 14.5758C22.4598 14.0236 22.9075 13.5758 23.4598 13.5758C25.0443 13.5758 26.3294 12.2913 26.3294 10.7075C26.3294 9.12368 25.0443 7.83918 23.4598 7.83918C22.9075 7.83918 22.4598 7.39146 22.4598 6.83918C22.4598 6.28689 22.9075 5.83918 23.4598 5.83918ZM8.38666 5.83918C8.93894 5.83918 9.38666 6.28689 9.38666 6.83918C9.38666 7.39146 8.93894 7.83918 8.38666 7.83918C6.80217 7.83918 5.5171 9.12368 5.5171 10.7075C5.5171 12.2913 6.80217 13.5758 8.38666 13.5758C8.93894 13.5758 9.38666 14.0236 9.38666 14.5758C9.38666 15.1281 8.93894 15.5758 8.38666 15.5758C5.69779 15.5758 3.5171 13.3961 3.5171 10.7075C3.5171 8.01892 5.69779 5.83918 8.38666 5.83918ZM15.917 6.58334C13.6142 6.58334 11.7727 8.42485 11.7727 10.7277C11.7727 13.0316 13.614 14.8732 15.917 14.8732C18.22 14.8732 20.0613 13.0316 20.0613 10.7277C20.0613 8.42485 18.2198 6.58334 15.917 6.58334Z" fill="#666666" />
                    </svg>
                    <svg
                        width="32"
                        height="32"
                        className="w-[2rem] h-[2rem]"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.3261 19.6359C28.8768 19.6359 29.3235 20.0825 29.3235 20.6332C29.3235 20.6495 29.2654 21.3839 29.2065 22.1578L29.1716 22.6215C29.1374 23.0791 29.107 23.5021 29.0928 23.7439C29.0168 24.9945 28.5315 26.2705 27.7941 27.1585C26.7675 28.3959 25.4595 28.9745 23.6808 28.9785C23.6502 28.9786 23.6161 28.9786 23.5786 28.9787L21.8311 28.9799C21.7427 28.98 21.6521 28.98 21.5594 28.9801H10.5068C10.4141 28.98 10.3235 28.98 10.2351 28.9799L8.4882 28.9787L8.38612 28.9785C6.60612 28.9745 5.29812 28.3959 4.27146 27.1572C3.53546 26.2705 3.04879 24.9945 2.97412 23.7439C2.95946 23.5021 2.92879 23.0791 2.89442 22.6215L2.85927 22.1578C2.80015 21.3839 2.74212 20.6495 2.74212 20.6332C2.74212 20.0825 3.18879 19.6359 3.73946 19.6359C4.26346 19.6359 4.68079 20.0439 4.72079 20.5559C4.72079 20.5559 4.92612 22.8879 4.97012 23.6239C5.01946 24.4385 5.35012 25.3252 5.81146 25.8799C6.46479 26.6679 7.18746 26.9759 8.38879 26.9785C8.42899 26.9786 8.47533 26.9787 8.52753 26.9787L10.7504 26.9799C10.877 26.9799 11.0071 26.98 11.1403 26.98H20.9245C21.0578 26.98 21.1879 26.9799 21.3145 26.9799L23.538 26.9787L23.6768 26.9785C24.8795 26.9759 25.6021 26.6679 26.2541 25.8812C26.7168 25.3252 27.0475 24.4385 27.0968 23.6239C27.1395 22.8879 27.3448 20.5559 27.3448 20.5559C27.3848 20.0439 27.8021 19.6359 28.3261 19.6359ZM15.9935 19.5121C16.5455 19.5121 16.9935 19.9601 16.9935 20.5121V22.2375C16.9935 22.7895 16.5455 23.2375 15.9935 23.2375C15.4415 23.2375 14.9935 22.7895 14.9935 22.2375V20.5121C14.9935 19.9601 15.4415 19.5121 15.9935 19.5121ZM17.7147 2.66666C19.7173 2.66666 21.3587 4.17332 21.608 6.10799H24.244C27.0427 6.10799 29.32 8.38532 29.32 11.1853V15.808C29.32 16.144 29.152 16.456 28.872 16.6427C26.1227 18.4613 22.86 19.6733 19.4347 20.148C19.3893 20.1547 19.3427 20.1573 19.2973 20.1573C18.8453 20.1573 18.4427 19.8507 18.328 19.4027C18.0587 18.3413 17.096 17.6 15.9867 17.6C14.8653 17.6 13.912 18.3253 13.6147 19.408C13.4813 19.8933 13.0187 20.2053 12.512 20.1347C9.11066 19.66 5.86132 18.4533 3.11599 16.6427C2.83466 16.4573 2.66666 16.144 2.66666 15.808V11.1853C2.66666 8.38532 4.94932 6.10799 7.75599 6.10799H10.3787C10.6293 4.17199 12.2693 2.66666 14.272 2.66666H17.7147ZM24.244 8.10799H7.75599C6.05332 8.10799 4.66666 9.48932 4.66666 11.1853V15.2613C6.85599 16.6173 9.37199 17.5667 12.0147 18.032C12.7667 16.564 14.2933 15.6 15.9867 15.6C17.6947 15.6 19.2147 16.568 19.9453 18.044C22.604 17.576 25.1293 16.6227 27.32 15.2613V11.1853C27.32 9.48932 25.94 8.10799 24.244 8.10799ZM17.7147 4.66666H14.272C13.3747 4.66666 12.6253 5.28132 12.4013 6.10799H19.584C19.3613 5.28132 18.6107 4.66666 17.7147 4.66666Z" fill="#666666" />
                    </svg>
                    <svg
                        width="32"
                        height="32"
                        onClick={()=> signOut()}
                        className="w-[2rem] h-[2rem]"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1068 19.7612C15.0318 19.5914 16.9679 19.5914 18.893 19.7612L19.5076 19.8132C20.3483 19.896 21.1831 20.0258 22.0045 20.2012C24.0983 20.6325 25.6187 21.3977 26.2917 22.817C26.7917 23.8729 26.7917 25.0988 26.2915 26.1552C25.6168 27.5781 24.0768 28.3497 22.0201 28.7554L21.397 28.8848C20.5642 29.0446 19.7243 29.1537 18.8901 29.2108C17.3246 29.3441 15.7518 29.3684 14.2347 29.2849C14.0675 29.2849 13.9552 29.2843 13.8563 29.282L13.664 29.2748C13.4301 29.2629 13.2159 29.2384 13.126 29.212C12.0705 29.1403 11.022 28.9875 10.0162 28.7606L9.67503 28.6894C7.77044 28.2662 6.35996 27.5028 5.70753 26.1537C5.46044 25.6302 5.33263 25.058 5.33337 24.4836C5.33122 23.905 5.46007 23.3336 5.71636 22.7998C6.39584 21.4351 7.99227 20.6138 9.98777 20.2028C11.0216 19.9812 12.0698 19.8332 13.1068 19.7612ZM18.7248 21.684C16.9117 21.524 15.0881 21.524 13.2573 21.6854C12.2929 21.7525 11.3343 21.8879 10.3814 22.092C8.90563 22.3961 7.77727 22.9765 7.44161 23.6505C7.31801 23.908 7.25434 24.1904 7.25539 24.4812C7.25503 24.7737 7.31956 25.0626 7.44035 25.3186C7.78557 26.0324 8.85031 26.5658 10.4104 26.8716L10.8804 26.9711C11.6676 27.1272 12.4783 27.2348 13.3793 27.3028C13.4931 27.3256 13.6159 27.3397 13.7616 27.3471L14.2864 27.3561C15.7666 27.4362 17.2506 27.4132 18.7434 27.2863C19.7056 27.2203 20.6614 27.0816 21.626 26.8663L21.926 26.8028C23.296 26.4922 24.2439 25.9838 24.5559 25.3258C24.8076 24.7944 24.8076 24.1774 24.5562 23.6464C24.2223 22.9422 23.1668 22.411 21.6116 22.0906C20.6655 21.8887 19.7065 21.7532 18.7417 21.6853L18.7248 21.684ZM16.0057 2.66666C19.9178 2.66666 23.0891 5.85151 23.0891 9.78022C23.0891 13.7089 19.9178 16.8938 16.0057 16.8938C12.0937 16.8938 8.92237 13.7089 8.92237 9.78022C8.92237 5.85151 12.0937 2.66666 16.0057 2.66666ZM16.0057 4.59688C13.1552 4.59688 10.8444 6.91754 10.8444 9.78022C10.8444 12.6429 13.1552 14.9636 16.0057 14.9636C18.8563 14.9636 21.1671 12.6429 21.1671 9.78022C21.1671 6.91754 18.8563 4.59688 16.0057 4.59688Z" fill="#666666" />
                    </svg>
                </div>

            </div>



        </div>
    );
};

export default Header;
