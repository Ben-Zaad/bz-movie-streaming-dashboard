import { timePassedFromNow } from '../../utils/date-utils';

type FeedProps = {
  title: string;
  link: string;
  date: string;
  contentSnippet: any;
  creator: string;
  content?: TrustedHTML;
  content2?: TrustedHTML;
  image?: string;
};

export const DashboardMovieItem = (feedProps: FeedProps) => {
  return (
    <div className='bg-slate-100 flex justify-center overflow-x-hidden border-b-2'>
      <div className='p-8 bg-slate-100 max-w-xl min-w-xl '>
        <a href={feedProps.link} rel='noreferrer' target='_blank'>
          <h3 className='text-xl font-bold underline'>{feedProps.title}</h3>
        </a>
        <div className='Entry-root'>
          <div className='Entry-box-left'></div>
          <div className='Entry-box-right'>
            <blockquote className='text-xl italic font-semibold text-gray-900 dark:text-white'>
              <p className='Entry-author opacity-70'>{feedProps.creator}</p>
            </blockquote>
            <p className='Entry-date italic opacity-70'>
              {timePassedFromNow(new Date(feedProps.date))}
            </p>
          </div>
        </div>

        {feedProps.content2 && (
          <div
            dangerouslySetInnerHTML={{
              __html: feedProps.content2,
            }}
          ></div>
        )}

        {feedProps.content ? (
          <>
            <div
              dangerouslySetInnerHTML={{
                __html: feedProps.content,
              }}
            ></div>
            <img src={feedProps.image} />
          </>
        ) : (
          <div className='flex justify-center'>
            <p>{feedProps.contentSnippet}</p>
          </div>
        )}
      </div>
    </div>
  );
};
