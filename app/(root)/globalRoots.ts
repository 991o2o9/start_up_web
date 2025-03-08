export interface ICard {
   createdAt: string;
   views: number;
   id: number;
   description: string;
   image: string;
   author: {
      id: number;
      name: string;
   };
   category: string;
   title: string;
}
