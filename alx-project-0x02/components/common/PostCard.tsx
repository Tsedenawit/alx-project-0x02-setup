import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{body}</p>
      <div className="text-sm text-blue-500">User ID: {userId}</div>
    </div>
  );
};

export default PostCard;
