import React, { useMemo, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { FollowUser, PostLike } from "../../Services/api";

function FeedCard({
  id,
  content,
  createdAt,
  Likes = [],
  User,
  refetch,
  refetchFollowers,
}) {
  const { username, id: userId } = User;

  const [liked, setLike] = useState(false);

  const userData = useMemo(() => {
    const data = localStorage.getItem("user");

    if (!data) return undefined;

    return JSON.parse(data);
  }, [location.pathname]);

  const isLikedPost = useMemo(() => {
    return Likes.find((elem) => elem.UserId === userData?.id);
  }, []);

  const LikeHandler = async () => {
    try {
      const { status } = await PostLike(id);

      if (status === 200) {
        refetch();
        setLike(true);
      }
    } catch (err) {
      alert("You have already liked this post");
    }
  };

  const FollowHandler = async () => {
    try {
      const { status } = await FollowUser(userId);

      if (status === 200) {
        refetchFollowers();
        alert("Successfully Followed");
      }
    } catch (err) {
      const {
        response: {
          data: { error },
        },
      } = err;
      alert(error || "You already followed the user!");
    }
  };

  return (
    <div className="border border-[#dbdbdb] rounded-xl p-6 bg-white flex flex-col gap-y-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <button className="bg-blue-300 rounded-full h-8 w-8 flex items-center justify-center">
            <p className="text-blue-700 text-sm font-semibold capitalize">
              {username[0]}
            </p>
          </button>
          <p className="capitalize text-sm">{username}</p>
        </div>
        <button
          className="text-blue-500 text-sm"
          type="button"
          onClick={FollowHandler}
        >
          Follow
        </button>
      </div>

      <div className="flex flex-col gap-y-1">
        <p className="font-medium text-gray-600">{content}</p>
        <span className="text-gray-400 text-xs">
          {new Date(createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      <div className="flex items-center gap-x-2">
        <button onClick={LikeHandler} type="button">
          {liked || !!isLikedPost ? (
            <IoHeart size={20} className="cursor-pointer" />
          ) : (
            <IoMdHeartEmpty size={20} className="cursor-pointer" />
          )}
        </button>{" "}
        <span className="text-xs text-gray-600">{Likes.length} Likes</span>
      </div>
    </div>
  );
}

export default FeedCard;
