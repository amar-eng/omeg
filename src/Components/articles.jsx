import React from 'react';
import Article from './article';

const Articles = () => {
   return (
      <div className='card-deck articles'>
         <div className='col-1'></div>

         <div className='col-md p-4'>
            <Article
               title='Omega | Kitchen Designs'
               imgUrl='/img/img3.jpg'
            />
         </div>

         <div className='col-md p-4'>
            <Article
               title='Omega | Interior Designs'
               imgUrl='/img/img4.jpg'
            />
         </div>

         <div className='col-md p-4'>
            <Article
               title='Omega | Furniture Designs'
               imgUrl='/img/img5.jpg'
            />
         </div>

         <div className='col-1'></div>
      </div>
   );
};

export default Articles;
