import { FeedOverview } from "./FeedOverview";
import styles from "./[id]/Notes.module.css";

export default function Page() {
  return (
    <div >
      <div className={styles.header}>
        <h1>Feeds</h1>
      </div>
      <div className={styles.description}>
        <p>
          Adding RSS feed links to your favorite news websites allows you to
          read all your preferred news in one place, right here and now. RSS
          (Really Simple Syndication) feeds automatically deliver the latest
          updates from selected sites, aggregating news articles, blog posts,
          and other content into one convenient feed. By using an RSS reader,
          you can stay informed about all your favorite topics without needing
          to visit multiple websites. Simply subscribe to the RSS links of your
          chosen news sources, and enjoy instant, streamlined access to the
          latest stories and updates, all in real-time.
        </p>
      </div>

      <FeedOverview />
    </div>
  );
}
