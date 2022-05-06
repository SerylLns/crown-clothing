import React from 'react';
import Directory from '../../components/directory/directory.component';
 const categories = [
   {
     id: 1,
     title: "Chapeaux",
     imageUrl:
       "https://p0.piqsels.com/preview/995/174/448/women-fashion-boho-hat.jpg",
   },
   {
     id: 2,
     title: "Vestes",
     imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
   },
   {
     id: 3,
     title: "Baskets",
     imageUrl:
       "https://p0.piqsels.com/preview/936/972/1/fashionsportvarious-clothes-feet-footwear.jpg",
   },
   {
     id: 4,
     title: "Femmes",
     imageUrl: "https://p2.piqsels.com/preview/656/541/86/596c933d41129.jpg",
   },
   {
     id: 5,
     title: "Hommes",
     imageUrl: "https://p0.piqsels.com/preview/190/704/992/5be94621dbf86.jpg",
   },
 ];

const Home = () => {
  return (
    <Directory categories={categories}/>
  );
};

export default Home;