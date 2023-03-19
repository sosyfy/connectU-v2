"use client"
/* eslint-disable react-hooks/exhaustive-deps */

import useAxios from "@/lib/hooks/useAxios";
import useClientToken from "@/lib/hooks/useClientToken";
import { useEffect, useState } from "react";

import MobileNav from "./mobile-nav";
import Post from "./post";
import WriteNewPost from "./upload-container";

type TimeLineProps = {
   initialPosts: Post[] | Promise<Post[]>,
   token: string
}

const TimelineContainer = ( { initialPosts ,token }: TimeLineProps ) => {

  const [posts, setPosts] = useState<Post[] | any >( initialPosts)

  const request = useAxios(token)
  
  const getPosts = ()=>{
    request({
      method: "get",
      path: "/post/timeline/posts"
    }).then((response) => {
      setPosts(response.data)
    }).catch((error)=>{
       console.log(error);
    })
  }
  
  return (
    <div className="lg:col-span-6 md:col-span-8 col-span-12 relative text-[1rem] text-dimgray font-roboto">
      <div className="sticky top-[6.5rem]">
        <WriteNewPost getPosts={getPosts} />
        <div className="grid gap-3 pt-6">
          { posts.map( (post: Post) => (
          <Post
            key={post._id}
            id={post}
            profilePicture={post.userInfo.photo}
            name={post.userInfo.firstName + " " + post.userInfo.lastName }
            date={post.createdAt}
            postText={post.title}
            image={post.photo}
            likes={post.likes}
            liked={post.liked}
            comments={post.comments}
          />
          ))}

        </div>
         <MobileNav />
      </div>
    </div>
  );
};

export default TimelineContainer;
