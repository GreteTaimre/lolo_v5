import { getFeed } from "@/pages/api/rss";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const feed = await getFeed(decodeURIComponent(req.query.feedUrl as string));
  res.status(200).json({
    title: feed.title,
    description: feed.description,
  });
}
