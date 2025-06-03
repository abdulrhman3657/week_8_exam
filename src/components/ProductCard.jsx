import { Link } from 'react-router'

function ProductCard(data) {



  return (  
    <div className='border w-50 h-110 p-3 flex flex-col items-center justify-between gap-3  bg-white'>
        <img src={data.image} className='w-full h-50' alt="" />
        <h1 className='hover:text-orange-400'>{data.title}</h1>
        <h1>{data.price}</h1>
        <Link to={`productdetails/${data.id}`} className=' w-30 text-indigo-600 hover:text-indigo-900 font-medium py-2.5 rounded-lg transition-colors'>View Deatils</Link>
    </div>
  )
}

export default ProductCard