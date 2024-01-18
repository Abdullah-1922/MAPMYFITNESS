import { useInfiniteQuery } from '@tanstack/react-query';

import {  useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './gallery.css'
import { Helmet } from 'react-helmet-async';



const Gallery = () => {
  const [aa, setaa] = useState(1);
  const fetchImages = async ({ pageParams = 0 }) => {
    console.log(aa, 'lllllllllllll');
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=Workout&per_page=10&page=${aa}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: import.meta.env.VITE_PEXELS_API_KEY,
        },
      },
    );

    const data = await response.json();
    console.log({ ...data, prev_page: pageParams });
    return { ...data, prev_page: pageParams };
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['images'],
    queryFn: fetchImages,
    getNextPageParam: (lastPage) => {
      if (lastPage.prev_page + 1 > lastPage.total_results) {
        return false;
      }
      return lastPage.prev_page + 1;
    },
  });

  const images = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.photos];
  }, []);

  return (
    <div className=' bgimg pt-10'>
       <Helmet>
        <title>
          Gallery
        </title>
       </Helmet>
        
        <div className='py-10 text-white w-[90%] mx-auto bg-blue-900'>
          <div className='text-center text-4xl font-bold '> GALLERY</div>
        </div>
        <div className='w-[90%] py-20 mx-auto'>
          <InfiniteScroll
            dataLength={images ? images.length : 0}
            next={() => {
              fetchNextPage(), setaa((p) => p + 1);
            }}
            hasMore={hasNextPage}
            loading={<h4>Loading...</h4>}>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {images &&
                images.map((img, index) => {
                  return (
                    <div className='h-[400px] ' key={index}>
                      {' '}
                      <img
                        src={img.src.large}
                        alt=''
                        className='w-full h-full object-cover'
                      />
                    </div>
                  );
                })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
   
  );
};

export default Gallery;
