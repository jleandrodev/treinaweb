import { BlogPost } from '@/src/data/@types/BlogPostInterface'
import styles from './PostList.module.css'
import Link from 'next/link'

export default function PostList({ posts }: {posts: BlogPost[]}) {
    return (
        <ul className={styles['post-list']}>
            {
                posts.map(post => <PostListItem key={post.id} post={post} />)
            }
        </ul>
    )
}

export function PostListItem({ post }: {post: BlogPost}) {
    return (
        <li className={styles['post-list-item']}>
            <Link href={`posts/${post.slug}`}>
                    <img className={styles['post-picture']} src={post.picture} alt={post.title} />
                    <h2 className={styles['post-title']}>{ post.title }</h2>
                    <p>{ post.description }</p>
            </Link>
        </li>
        
        )
}