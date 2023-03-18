import type { NextPage } from "next";
import RegisterForm from "./register";
import Link from 'next/link';

const SignUp: NextPage = () => {
    return (
        <div className="relative h-screen min-h-full bg-deepskyblue">
            <div className="flex items-center justify-center h-screen md:px-12">
                <div className="px-5 md:px-8 bg-white w-full sm:w-[24rem] md:h-fit md:mx-auto h-screen md:rounded-xl">
                    <div className="relative py-6 text-left text-[0.88rem] text-black font-roboto">
                        <svg
                            className="absolute md:top-[1.94rem] top-10 right-2 w-[2.88rem] h-[2.75rem]"
                            width="46"
                            height="44"
                            viewBox="0 0 46 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 0L23.823 3.36707C25.109 8.62855 25.752 11.2593 27.1233 13.3821C28.336 15.2593 29.9527 16.8418 31.8554 18.0139C34.0071 19.3395 36.651 19.926 41.9388 21.0991L46 22L41.9388 22.9009C36.651 24.074 34.0071 24.6605 31.8554 25.9861C29.9527 27.1582 28.336 28.7407 27.1233 30.6179C25.752 32.7407 25.109 35.3714 23.823 40.6329L23 44L22.177 40.6329C20.891 35.3714 20.248 32.7407 18.8767 30.6179C17.664 28.7407 16.0473 27.1582 14.1446 25.9861C11.9929 24.6605 9.34897 24.074 4.06116 22.9009L0 22L4.06116 21.0991C9.34897 19.926 11.9929 19.3395 14.1446 18.0139C16.0473 16.8418 17.664 15.2593 18.8767 13.3821C20.248 11.2593 20.891 8.62855 22.177 3.36707L23 0Z" fill="black" />
                        </svg>

                        <RegisterForm />
                        <p className="mt-4 font-serif font-semibold text-center text-dimgray">
                            <span>
                                <span>Already have an account?</span>
                            </span>
                            <span className="ml-2 text-black font-roboto">
                                <Link href="login" className="font-semibold decoration-transparent"> Log in</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
