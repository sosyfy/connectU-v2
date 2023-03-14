import type { NextPage } from "next";
import Login from './login';

const LogIn:NextPage =  () => {  
    return (
        <div className="relative h-screen min-h-full overflow-hidden bg-deepskyblue">
            <div className="flex items-center justify-center h-screen px-6 md:px-12">
               <Login />
            </div>
        </div>
    );
};

export default LogIn;
