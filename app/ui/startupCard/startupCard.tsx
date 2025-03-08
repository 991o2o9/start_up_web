import { ICard } from '@/app/(root)/globalRoots';
import { formatDate } from '@/app/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegEye } from 'react-icons/fa6';

const StartupCard = ({ post }: { post: ICard }) => {
   const {
      createdAt,
      views,
      author: { id: authorId, name },
      title,
      category,
      id,
      description,
      image,
   } = post;
   return (
      <li className="startup-card group">
         <div className="flex justify-between">
            <p className="startup_card_date">{formatDate(createdAt)}</p>
            <div className="flex gap-1.5 items-center">
               <FaRegEye color="red" />
               <span className="text-16-medium">{views}</span>
            </div>
         </div>
         <div className="flex justify-between mt-5 gap-5">
            <div className="flex-1">
               <Link href={`/user/${authorId}`}>
                  <p className="text-16 font-medium line-clamp-1">{name}</p>
               </Link>
               <Link href={`/startup/${id}`}>
                  <h3 className="text-[26px] font-bold">{title}</h3>
               </Link>
            </div>
            <Link href={`/user/${authorId}`}>
               <Image
                  src={'https://placehold.co/48x48'}
                  alt="placeholder"
                  width={48}
                  height={48}
                  className="rounded-full"
               />
            </Link>
         </div>
         <Link href={`/startup/${id}`}>
            <p className="start-card-desc">{description}</p>
            <img src={image} alt="placeholder" className="startup-card_img" />
         </Link>
         <div className="flex justify-between gap-3 mt-5 items-center">
            <Link href={`/?query=${category.toLowerCase()}`}>
               <p className="text-16-medium font-black">{category}</p>
            </Link>
            <button className="startup-card_btn">
               <Link href={`/startup/${id}`}>
                  <p className="text-16 font-bold">Details</p>
               </Link>
            </button>
         </div>
      </li>
   );
};

export default StartupCard;
