import React, { FC } from 'react';
import Search from '../../search/view/search';

interface IHeroProps {
   yellowTitle?: string;
   mainTitle: string;
   subtitle?: string;
   isWithSearch?: boolean;
   query?: string;
}

const HeroBlock: FC<IHeroProps> = ({
   yellowTitle,
   mainTitle,
   subtitle,
   isWithSearch,
   query,
}) => {
   return (
      <section className="px-[72px] py-[80px] bg-[#EE2B69] text-center pink_container">
         <article className="flex-col flex gap-[16px] items-center ">
            {yellowTitle && (
               <div className="w-fit rounded-[5px]  bg-[#FBE843] px-[20px] py-[10px]">
                  <h3 className="text-[17px] font-bold ">{yellowTitle}</h3>
               </div>
            )}
            {mainTitle && (
               <div className="px-[16px] py-[20px] bg-black max-w-[970px] w-full">
                  <h3 className="font-extrabold text-[54px] uppercase text-white">
                     {mainTitle}
                  </h3>
               </div>
            )}
            {subtitle && (
               <h4 className="text-white font-medium">
                  Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
                  Competitions
               </h4>
            )}
            {isWithSearch && <Search query={query} />}
         </article>
      </section>
   );
};

export default HeroBlock;
