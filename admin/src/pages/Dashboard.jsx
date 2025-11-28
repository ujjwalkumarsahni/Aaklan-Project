
const Dashboard = () => {
  

  return (
    <div className='m-5'>
      <div className='flex flex-wrap gap-3'>
        <div className='flex items-center bg-white dark:bg-gray-900 gap-2 p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src='' alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600 dark:text-white'>6</p>
            <p className='text-gray-500 dark:text-gray-200'>Total Job</p>
          </div>
        </div>

        <div className='flex items-center gap-2 bg-white dark:bg-gray-900 p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src='' alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600 dark:text-white'></p>
            <p className='text-gray-500 dark:text-gray-200'>Total Applied</p>
          </div>
        </div>

        <div className='flex items-center gap-2 bg-white dark:bg-gray-900 p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src='' alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600 dark:text-white'></p>
            <p className='text-gray-500 dark:text-gray-200'>Total Role</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard