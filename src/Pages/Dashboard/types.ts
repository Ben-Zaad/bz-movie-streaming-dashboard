export type FeedElement = {
  title: string;
  link: string;
  isoDate: string;
  creator: string;
  content?: TrustedHTML;
  content2?: TrustedHTML;
  thumbnailUrl?: string;
  contentSnippet: any;
  image: { $: { height: string; width: string; url: string } };
};
