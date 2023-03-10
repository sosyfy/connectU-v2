import type { NextPage } from "next";
import MobileNav from "./mobile-nav";
import Post from "./post";
import WriteNewPost from "./upload-container";


const TimelineContainer: NextPage = () => {
  return (
    <div className="lg:col-span-6 md:col-span-8 col-span-12 relative text-[1rem] text-dimgray font-roboto">
      <div className="sticky top-[6.5rem]">
        <WriteNewPost />
        <div className="grid gap-3 pt-6">
          <Post
            profilePicture="../profile-picture.svg"
            name="Elon Musk"
            jobTitle="CEO of SpaceX"
            postText={`You have to match the convenience of the gasoline car in order for people to buy an electric car." "In order to have clean air in cities, you have to go electric." "You should not show somebody something very cool and then not do it. At Tesla, any prototype that is shown to customers, the production must be better.`}
            image="../image1@2x.png"
            liked={true}
          />

          <Post
            profilePicture="../profile-picture1.svg"
            name="Sundar Pichai"
            jobTitle="CEO of Google"
            postText={`As a leader, It is important to not just see your own success, but focus on the success of others.`}
            image="../image2@2x.png"
            liked={false}
          />
        </div>
         <MobileNav />
      </div>
    </div>
  );
};

export default TimelineContainer;
