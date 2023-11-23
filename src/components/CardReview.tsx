import { ProductReview } from '../interfaces/product'

const CardReview = ({ comment, date, name, rating }: ProductReview) => {
  return (
    <article className='my-1 bg-white border border-gray-200 rounded'>
      <div className='p-4'>
        <div className='flex justify-between'>
          <p className='text-base font-bold text-left text-gray-600 '>{name}</p>
          <p className='text-base font-bold text-left text-gray-600 '>{date}</p>
        </div>
        <div className='flex items-center '>
          {'★'.repeat(Math.round(rating)).padEnd(5, '☆')}
        </div>
      </div>
      <div className='p-4'>
        <p className='text-sm text-left text-gray-600 '>{comment}</p>
      </div>
    </article>
  )
}

export default CardReview
