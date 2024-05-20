"use client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { FC } from "react";
import styles from "./Notes.module.css";

interface FeedCardProps {
  feedUrl: string;
  onDelete: (url: string) => void;
}

export const FeedCard: FC<FeedCardProps> = ({ feedUrl, onDelete }) => {
  const {
    data: feed,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["feed", feedUrl],
    queryFn: async () => {
      const response = await fetch("/api/Feed?feedUrl=" + feedUrl);
      return response.json();
    },
  });

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isSuccess && (
        <div className={styles.grid}>
          <div className={styles.container}>
            <div className={styles.note}>
              <div className={styles.note_container}>
                <a href={`/${feedUrl}`}>
                  <div className={styles.header}>
                    <div key={feed.title}>
                      <h1>{feed.title}</h1>
                    </div>{" "}
                    <div className={styles.description}>
                      <p>{feed.description}</p>
                      <p>{feed.category}</p>
                    </div>{" "}
                  </div>
                </a>
                <button
                  className="btn-secondary"
                  onClick={() => onDelete(feedUrl)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
