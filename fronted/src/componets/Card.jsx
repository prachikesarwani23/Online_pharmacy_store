import React from 'react';

function Card({item}) {
 console.log(item);
  return (
    <>
    <div className='mt-4 '>
    <div className="card bg-base-100 w-96 shadow-xl hover:bg-pink-50 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.Rowmaterial}</div>
    </h2>
    <p>{item.categories}</p>
    <div className="card-actions justify-end">
      {/* <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div> */}
    </div>
  </div>
</div>
        </div>
        </>
  );
}

export default Card;
