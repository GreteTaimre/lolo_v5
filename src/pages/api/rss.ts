import Parser from "rss-parser";

type CustomItem = { description: string; media: { url: string } };

const parser: Parser<CustomItem> = new Parser({
  customFields: {
    item: ["description", ["media:content", "media"]],
  },
});

export const getFeed = async (url: string) => {
  return await parser.parseURL(url);
};

export const getFeedItems = async (url: string) => {
  const feed = await parser.parseURL(url);

  return feed.items.map((item) => {
    const { title, link, pubDate, description, media } = item;
    return {
      title,
      link,
      pubDate,
      description,
      media,
    };
  });
};
