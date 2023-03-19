"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import ForumPost from "@/components/core/forumn-post";
import useAxios from "@/lib/hooks/useAxios";
import useClientToken from "@/lib/hooks/useClientToken";
import Link from "next/link";
import { useState, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Header from "@/components/forum/header";
import Filter from "@/components/forum/filter";

type GeneralProps ={
    posts: ForumPost[],
    token: string | any 
}

function General( { posts , token }: GeneralProps ) {
    const [filterOpen, setFilterOpen] = useState(false);
    const [data, setData] = useState<ForumPost[]>(posts);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string | any>('');

    const request = useAxios(token);

    const handleSort = (sortBy: string) => {
        setFilterOpen(false);

        request({
            method: "get",
            path: `/forum/filter/general/${sortBy}`,
        })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmit = (e: any, close: () => void) => {
        e.preventDefault();

        request({
            method: "post",
            path: `/forum`,
            pathData: JSON.stringify({ title, description, category: "general" })
        })
            .then((response) => {
                setData(response.data);
                setDescription('')
                setTitle('')
                close();
            })
            .catch((error) => {
                console.log(error);
            });


    };

    return (
        <div className="relative lg:col-span-8 md:col-span-8 col-span-12 w-full text-[1.25rem] text-dimgray font-roboto">
            <Header title="General Discussion" subTitle="Lets Connect" />
            <Filter 
                buttonText="Create Something" 
                title={title} 
                description={description}
                filterOpen={filterOpen}
                setTitle={setTitle}
                setDescription ={setDescription}
                handleSubmit={handleSubmit}
                setFilterOpen={setFilterOpen}
                handleSort={handleSort} 
            />
            {data?.map(( post: ForumPost) => (
                <Link href={"/general-forum/" + post._id} key={post._id}>
                    <ForumPost postData={post} />
                </Link>
            ))}
        </div>
    );
}

export default General;
