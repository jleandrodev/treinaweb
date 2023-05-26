import { BlogPost } from "../../@types/BlogPostInterface";

export default function useIndex() {
    const posts: BlogPost[] = []

    return {
        posts
    }
}