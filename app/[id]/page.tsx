import Link from "next/link";
import Image from "next/image";
import styles from "./Notes.module.css";
import { getFeedItems } from "@/pages/api/rss";

export default async function FeedPage({ params }: any) {
  const feed = await getFeedItems(decodeURIComponent(params.id));
  const notes = (feed as any[]) || [];
  return (
    <div>
      <div className={styles.grid}>
        <div className={styles.Navbar}>
          <p>Feeds</p>
          <p>Categories</p>
        </div>
        <div className={styles.container}>
          {notes.map((note) => (
            <Feed key={note.id} feed={note} />
          ))}
        </div>
      </div>
    </div>
  );
}
const Feed = ({ feed }: { feed: any | undefined }) => {
  const { id, title, link, pubDate, description, category, author, media } =
    feed || {};
  return (
    <Link href={`/notes/${id}`} key={id}>
      <div className={styles.note_container}>
        <div className={styles.image}></div>
        {media && <img src={media.$.url} alt={title} />}
        <h1 className={styles.header}>{title}</h1>
        <h2 className={styles.pubDate}>{pubDate}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};
