// src/components/Collection.js
import React, { useEffect, useState } from 'react';
import { getCollections } from '../components/services/apiCollectionService';
import './collection.css';
import CircularGallery from './CircularGallery'

const Collection = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCollections('/all');
        setCollections(data);
      } catch (err) {
        console.error('Error fetching collections:', err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="overall13">



<div style={{ height: '600px', position: 'relative' }}>
<h3 className='header'>Latest Collection</h3>
  <CircularGallery bend={-1} textColor="#ffffff" borderRadius={0.05} />
</div>


      <div className="section">
        <h3>Mens Collection</h3>
        <div className="collection-row">
          {collections.map((item, index) => (
            <div className="container13" key={index}>
              <img src={item.mensDressImage} alt="mens dress" />
              <h6>{item.mensDressName}</h6>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Womens Collection</h3>
        <div className="collection-row">
          {collections.map((item, index) => (
            <div className="container13" key={index}>
              <img src={item.womensDressImage} alt="womens dress" />
              <h6>{item.womensDressName}</h6>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Babys Collection</h3>
        <div className="collection-row">
          {collections.map((item, index) => (
            <div className="container13" key={index}>
              <img src={item.babysDressImage} alt="babys dress" />
              <h6>{item.babysDressName}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

// // src/components/Collection.js
// import React, { useEffect, useState } from 'react';
// import { getCollections } from '../components/services/apiCollectionService';
// import './collection.css';

// const Collection = () => {
//   const [collections, setCollections] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getCollections('/all');
//         setCollections(data);
//       } catch (err) {
//         console.error('Error fetching collections:', err.message);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//         <div>
//     <h3>Mens Collection</h3>
//     <div className="overall13">
    
//       {collections.map((item, index) => (
//         <div className="collection-row" key={index}>
            
//           <div className="container13">
//             <img src={item.mensDressImage} alt="mens dress" />
//             <h6>{item.mensDressName}</h6>
//           </div>
//           </div>
          
// <div>
          
//           <div className="container13">
//             <img src={item.womensDressImage} alt="womens dress" />
//             <h6>{item.womensDressName}</h6>
//           </div>
//           </div>
//           <h3>Babys Collection</h3>
// <div>
            
//           <div className="container13">
//             <img src={item.babysDressImage} alt="babys dress" />
//             <h6>{item.babysDressName}</h6>
//           </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Collection;

// // src/components/Collection.js
// import React, { useEffect, useState } from 'react';
// import { getCollections } from '../components/services/apiCollectionService'
// import './collection.css';

// const Collection = () => {
//   const [collections, setCollections] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getCollections('/all');
//         console.log(data)
//         setCollections(data);
//       } catch (err) {
//         console.error(err.message);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className='overall13'>
//         <h3>Mens Collection</h3>
//         <div>
//       {collections.map((item, index) => (
//         <div key={index} className='container13'>
//           <div>
//             <img src={item.mensDressImage} alt='mens dress' />
//             <h6>{item.mensDressName}</h6>
//           </div>
//           </div>
//           <div>
//           <h3>Womens Collection</h3>
//           <div>
//             <img src={item.womensDressImage} alt='womens dress' />
//             <h6>{item.womensDressName}</h6>
//           </div>
//           </div>
//            <div>
//           <h3>Babys Collection</h3>
//           <div>
//             <img src={item.babysDressImage} alt='babys dress' />
//             <h6>{item.babysDressName}</h6>
//           </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Collection;


// // import React from 'react'
// // import './collection.css'
// // const collection = () => {
// //   return (
// //     <div className='overall13'>

// //       <div className='container13'>
// //         <h3>Mens collection</h3>
// //         <div>
// //             <img src='https://png.pngtree.com/png-vector/20250114/ourmid/pngtree-slip-dress-for-women-png-image_15177244.png' alt='dress'/>
// //             <h6>Slip</h6>
// //         </div>
// //       </div>

// //       <div className='container13'>
// //       <h3>Womens collection</h3>
// //         <div>
// //             <img src='https://png.pngtree.com/png-vector/20250114/ourmid/pngtree-slip-dress-for-women-png-image_15177244.png' alt='dress'/>
// //             <h6>Slip</h6>
// //         </div>
// //       </div>

// //       <div className='container13'>
// //       <h3>Babys collection</h3>
// //       <div>
// //             <img src='https://png.pngtree.com/png-vector/20250114/ourmid/pngtree-slip-dress-for-women-png-image_15177244.png' alt='dress'/>
// //             <h6>Slip</h6>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default collection
