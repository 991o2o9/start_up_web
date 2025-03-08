import ProductList from '../components/productList';
import { HeroBlock } from '../ui';

export default async function Home({
   searchParams,
}: {
   searchParams: Promise<{ query?: string }>;
}) {
   const query = (await searchParams).query;

   const array = [
      {
         createdAt: new Date('2024-03-09'),
         views: 55,
         author: { id: 1, name: 'amin' },
         id: 1,
         description: 'This is description',
         image: 'https://i.pinimg.com/736x/fc/99/e3/fc99e39f24f7e69648ac7dbca63ad701.jpg',
         category: 'It idea',
         title: 'Modern shit',
      },
   ];

   return (
      <>
         <HeroBlock
            mainTitle="Pitch Your Startup, Connect with Entrepreneurs"
            subtitle="Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions"
            yellowTitle="Pitch, Vote, and Grow"
            isWithSearch
            query={query}
         />
         <ProductList query={query} data={array} />
      </>
   );
}
