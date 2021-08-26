import React from 'react';
import { Link } from 'react-router-dom';

const Office = () => {
   return (
      <div className='office'>
         <div className='inner-office'>
            <Link className='office-o-link' to='/about'>
               <div className='o-line'></div>

               <h5>
                  German craftsmanship, driven by the vision of iconic
                  designers.
               </h5>

               <div className='linkbox'>
                  <h6 className='link'>
                     <div className='li'></div> ABOUT US
                  </h6>
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Office;
