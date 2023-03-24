"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import ForumPost from "@/components/core/forumn-post";
import useAxios from "@/lib/hooks/useAxios";
import Link from "next/link";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Header from "@/components/forum/header";
import Filter from "@/components/forum/filter";

type GeneralProps ={
    posts: ForumPost[],
    token: string | any,
    category: string,
    headerTitle: string,
    headerSubTitle: string,
    backLink: string,
    filterButtonText: string  
}

function General( { 
    posts, 
    token,
    category,
    headerTitle,
    headerSubTitle,
    backLink,
    filterButtonText
}: GeneralProps ) {
    const [filterOpen, setFilterOpen] = useState(false);
    const [data, setData] = useState<ForumPost[]>(posts);
    const [title, setTitle] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [sortLoading, setSortLoading] = useState<boolean>(false);
    const [description, setDescription] = useState<string | any>('');

    const request = useAxios(token);

    const handleSortPosts = (sortBy: string , close: () => void ) => {
        setSortLoading(true)
        request({
            method: "get",
            path: `/forum/forum-posts?category=${category}&${sortBy}`,
         })
            .then((response) => {
                setData(response.data);
                close();
                setSortLoading(false)
            })
            .catch((error) => {
                console.log(error);
                close();
                setSortLoading(false)
            });
    };

    const handleSubmit = (e: any, close: () => void) => {
        e.preventDefault();
        setLoading(true)
        request({
            method: "post",
            path: `/forum`,
            pathData: JSON.stringify({ title, description, category: "general" })
        })
            .then((response) => {
                setData(response.data);
                setDescription('')
                setTitle('');
                setLoading(false);
                close();
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });


    };

    return (
        <div className="relative lg:col-span-8 md:col-span-8 col-span-12 w-full text-[1.25rem] text-dimgray font-roboto">
            <Header title={headerTitle} subTitle={headerSubTitle}/>
            <Filter 
                buttonText={filterButtonText}
                title={title} 
                description={description}
                filterOpen={filterOpen}
                setTitle={setTitle}
                loading={loading}
                sortLoading={sortLoading}
                setDescription ={setDescription}
                handleSubmit={handleSubmit}
                setFilterOpen={setFilterOpen}
                handleSort={handleSortPosts} 
            />
            {data?.map(( post: ForumPost) => (
                <Link href={ backLink + post._id} key={post._id}>
                    <ForumPost postData={post} />
                </Link>
            ))}
        </div>
    );
}

export default General;
