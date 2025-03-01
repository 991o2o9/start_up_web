import { HeroBlock } from '../ui';

export default async function Home({
   searchParams,
}: {
   searchParams: Promise<{ query?: string }>;
}) {
   const query = (await searchParams).query;

   return (
      <>
         <HeroBlock
            mainTitle="Pitch Your Startup, Connect with Entrepreneurs"
            subtitle="Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions"
            yellowTitle="Pitch, Vote, and Grow"
            isWithSearch
            query={query}
         />
      </>
   );
}
