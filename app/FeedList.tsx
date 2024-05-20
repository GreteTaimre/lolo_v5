"use client";
import { FC, Suspense, useEffect, useState } from "react";
import { FeedCard } from "./FeedCard";

export const FeedList: FC = () => {
  const raimoLink = encodeURIComponent(
    "https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss"
  );
  const [feeds, setFeeds] = useState([raimoLink]);
  const isClient = typeof window !== "undefined";

  const setNewFeeds = (newFeeds: string[]) => {
    setFeeds(newFeeds);
    localStorage.setItem("saved_feeds", JSON.stringify(newFeeds));
  };
  useEffect(() => {
    let savedFeeds: string | null = "[]";
    if (isClient) {
      savedFeeds = localStorage.getItem("saved_feeds");
    }
    setFeeds((savedFeeds && JSON.parse(savedFeeds)) ?? [raimoLink]);
  }, [raimoLink, isClient]);

  return (
    <>
      <div>
        <label>
          Add Feed: <input name="addFeed" />
        </label>
        <button
          onClick={() => {
            const input = document.querySelector<HTMLInputElement>(
              "input[name='addFeed']"
            );
            if (input && !feeds.includes(encodeURIComponent(input.value))) {
              const newFeeds = [
                ...(feeds ?? []),
                encodeURIComponent(input.value),
              ];
              setNewFeeds(newFeeds);
              input.value = "";
            }
          }}
        >
          Add
        </button>
      </div>
      <div>
        {feeds
          ?.filter((x) => x)
          .map((url) => (
            <FeedCard
              key={url}
              feedUrl={url}
              onDelete={(feedUrl) => {
                const newFeeds = feeds.filter((feed) => feed !== feedUrl);
                setNewFeeds(newFeeds);
              }}
            />
          )) || "No feeds saved"}
      </div>
    </>
  );
};
