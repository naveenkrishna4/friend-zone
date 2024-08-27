import axios from "axios";
import { Feed, PostContainer } from "../components";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";

// Define the Home component using a functional component
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("all");
  const { socket } = useContext(MyContext);

  // Function to fetch posts from the server
  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/post/fetch-post?filter=${filter}`,
        { withCredentials: true }
      );
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch posts on initial mount and whenever fetchPostAgain changes
  useEffect(() => {
    socket.on("new post", () => {
      fetchPosts();
    });

    socket.on("new comment", () => {
      fetchPosts();
    });
  }, [socket, filter]);

  useEffect(() => {
    fetchPosts();
  }, [filter]);

  return (
    <>
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none custom-scrollbar">
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex justify-center mb-4 z-10 gap-60">
            <button
              className={`w-24 mr-4 px-4 py-2 rounded ${
                filter === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-lightblue"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`w-24 px-4 py-2 rounded ${
                filter === "friends"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-lightblue"
              }`}
              onClick={() => setFilter("friends")}
            >
              Friends
            </button>
          </div>
          {/* Main content area */}
          <div className="flex flex-col items-center justify-start h-full rounded-lg md:px-5 py-5">
            {/* PostContainer */}
            <PostContainer />

            {/* Render Feed for each post */}
            {posts.map((feed) => (
              <Feed key={feed._id} feed={feed} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
