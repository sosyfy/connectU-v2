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
    const [loading, setLoading] = useState<boolean>(false);
    const request = useAxios(token);

    const handleSort = (sortBy: string) => {
        setFilterOpen(false);

        request({
            method: "get",
            path: `/forum/filter/resources/${sortBy}`,
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
        setLoading(true);
        request({
            method: "post",
            path: `/forum`,
            pathData: JSON.stringify({ title, description, category: "resources" })
        })
            .then((response) => {
                setData(response.data);
                setDescription('');
                setLoading(false);
                setTitle('')
                close();
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });


    };

    return (
        <div className="relative lg:col-span-8 md:col-span-8 col-span-12 w-full text-[1.25rem] text-dimgray font-roboto">
            {/* header */}
            <Header title="Resources" subTitle=" Share any usefull material on any topics" />
            <Filter 
                buttonText="Add New Resource" 
                title={title} 
                description={description}
                filterOpen={filterOpen}
                setTitle={setTitle}
                loading={loading}
                setDescription ={setDescription}
                handleSubmit={handleSubmit}
                setFilterOpen={setFilterOpen}
                handleSort={handleSort} 
            />
            {data?.map((post) => (
                <Link href={"/resources/" + post._id} key={post._id}>
                    <ForumPost postData={post} />
                </Link>
            ))}
        </div>
    );
}

export default General;
