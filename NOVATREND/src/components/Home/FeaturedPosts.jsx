import React from 'react';
import PostCard from './PostCard'; 
import featuredpost1 from '../../assets/featuredpost1.jpg'; 
import featuredpost2 from '../../assets/featuredpost2.jpg'; 

const FeaturedPosts = () => {
  return (
    <>
      <section className="flex justify-center pt-12 pb-20">
        <div className="flex flex-col justify-center w-[85%]">
          <div className="text-center py-16">
            <p className="font-normal text-sm py-1 text-primary">Practice Advice</p>
            <h2 className="font-bold text-4xl">Featured Posts</h2>
          </div>
          <div className="flex max-lg:flex-col justify-center items-center gap-10">
            
            <PostCard postImg={featuredpost1} />
            <PostCard postImg={featuredpost2} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedPosts;
