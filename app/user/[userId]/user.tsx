"use client";
import TopBar from "@/components/user/top-bar";
import Tabs from "@/components/user/tabs";
import { useState } from "react";
import Post from "@/components/core/post";
import ConnectionCard from "@/components/core/connection-card";
import Experience from "@/components/user/experience";
import About from "@/components/user/about";
import Education from "@/components/user/education";
import Skills from "@/components/user/skills";
import useUserStore from "@/lib/state/store";


type UserProps = {
    posts: Post[],
    user: User,
    connections: User[],
    connectionNo: number,
    postNo: number,
    token: string
}

export default function User({
    posts,
    user,
    connections,
    connectionNo,
    postNo,
    token
}: UserProps) {

    const [activeTab, setActiveTab] = useState<number>(1);
    const loggedInUser = useUserStore(state => state.user)

    return (
        <div className="relative lg:col-span-9 md:col-span-8 col-span-12 w-full text-[1.25rem] text-dimgray font-roboto">
            <TopBar
                user={user}
                connectionNo={connectionNo}
                postNo={postNo}
                loggedInUser={loggedInUser}
                token={token}
            />
            <Tabs
                setActiveTab={setActiveTab}
                activeTab={activeTab}
            />

            <div className="px-4 pb-8 border-b border-l border-r rounded-b-md border-deepskyblue">
                {activeTab == 1 && (
                    <div className="grid w-full gap-3 pt-8">
                        { posts?.map((post) => (
                            <Post
                                key={post._id}
                                id={post}
                                profilePicture={post.userInfo.photo}
                                name={post.userInfo.firstName + " " + post.userInfo.lastName}
                                date={post.createdAt}
                                postText={post.title}
                                image={post.photo}
                                likes={post.likes}
                                liked={post.liked}
                                comments={post.comments}
                            />
                        ))}
                    </div>
                )}

                {activeTab == 2 && (
                    <div className="grid grid-cols-1 gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
                        { connections?.map((user: User) => (
                            <div key={user._id}>
                                <ConnectionCard cardData={user} />
                            </div>
                        ))}
                    </div>
                )}

                {activeTab == 3 && (
                    <div className="pt-8">
                        <div className="grid gap-6">
                            <About user={user} loggedInUser={loggedInUser} token={token} />
                            <Experience user={user} loggedInUser={loggedInUser} token={token} />
                            <Education user={user} loggedInUser={loggedInUser} token={token} />
                            <Skills user={user} loggedInUser={loggedInUser} token={token} />
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}
