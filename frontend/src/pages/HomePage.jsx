import React, { useEffect, useState } from "react";
import { FollowingList, GetAllPosts } from "../Services/api";
import FeedCard from "../Components/Feed/FeedCard";
import FollowersCard from "../Components/Feed/FollowersCard";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [followerList, setFollowerList] = useState([]);

  const fetchPost = async () => {
    const { status, data } = await GetAllPosts();

    if (status === 200) {
      setPosts(data);
    }
  };

  const fetchFollowerData = async () => {
    const { status, data } = await FollowingList();

    if (status === 200) {
      setFollowerList(data.result);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchFollowerData();
  }, []);

  return (
    <section className="w-full h-full pt-8 bg-[#F9FAFB]">
      <div className="px-40">
        <h1 className="text-3xl font-bold">Feeds</h1>
      </div>

      <div className="pt-8 grid gap-y-8 md:grid-cols-3 gap-x-20 px-4">
        <div className="grid gap-y-12 max-h-[80vh] slim-scroll !overflow-x-hidden px-4 md:col-start-2">
          {posts.length > 0 &&
            posts.map((post) => (
              <FeedCard
                key={post.id}
                {...post}
                refetch={fetchPost}
                refetchFollowers={fetchFollowerData}
              />
            ))}
        </div>

        <div className="flex flex-col gap-y-8">
          <h2 className="text-2xl font-bold">Following</h2>
          <div className="flex flex-col gap-y-4 max-h-[70vh] slim-scroll !overflow-x-hidden px-4">
            {followerList.length > 0 &&
              followerList.map((follower) => (
                <FollowersCard key={follower.id} {...follower} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
