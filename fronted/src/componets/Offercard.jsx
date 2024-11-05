import React from 'react';

function Offercard({item}) {
    console.log(item);
  return (
    <>
    <div className='mt-4 '>
    <div className="card bg-base-100  w-80 shadow-xl ">
  <figure>
    <img
      src={item.image}
      alt="" />
  </figure>
  <div className="card-body card bg-base-100 h-100 w-80 dark:bg-slate-900 dark:text-white dark:border">
    <h2 className="card-title ">
     {item.name}
      <div className="badge badge-secondary size-20">{item.offer}</div>
    </h2>
    <p>{item.information}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline ">{item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full  border-{2px} hover:bg-pink-500  duration-200">{item.Button}</div>
    </div>
  </div>
</div>
</div>
    </>
  );
}

export default Offercard;
