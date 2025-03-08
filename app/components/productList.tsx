import { ICard } from '../(root)/globalRoots';
import StartupCard from '../ui/startupCard/startupCard';

const ProductList = ({ query, data }: { query?: string; data: ICard[] }) => {
   return (
      <section className="section_container">
         <p className="text-30-semibold">
            {query ? `Search results for "${query}"` : 'All Startups'}
         </p>
         <ul className="mt-7 card_grid">
            {data.length > 0 &&
               data.map((card) => <StartupCard key={card.id} post={card} />)}
         </ul>
      </section>
   );
};

export default ProductList;
