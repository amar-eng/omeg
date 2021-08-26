import React from 'react';

const Article = ({ title, imgUrl }) => {
   return (
      <div className='article'>
         <div className='img-box'>
            <img src={imgUrl} alt='...' />
         </div>
         <div className='card-body article-box'>
            <div className='line'></div>
            <h5 className='card-title'>{title}</h5>
         </div>
      </div>
   );
};
export default Article;
