import Item from './Item.jsx'

const Experience = () => {

    const details= [
        'CSE110 [Programming Language I]',
        'CSE221 [Algorithms]'
    ]

    return (
        <div className="flex flex-col md:flex-row justify-center mt-20 mx-10">
        <div className="w-full md:w-7/12">
           <h1 className='text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-amber-300'>
            Experience
           </h1>
           <Item year='Fall 2023 - Current' title='Student Tutor - BRAC University'
            detail={
                details.map((d, key) => (
                    <li key={key} className="my-2 text-base font-normal text-white">
                        {d}
                    </li>
                )) 
            }
           />
        </div>
     </div>
    )
}

export default Experience