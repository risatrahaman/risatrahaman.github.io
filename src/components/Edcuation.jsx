import Item from './Item.jsx'

const Education = () => {

    const details= [
        'CGPA: 3.93'
    ]

    return (
        <div className="flex flex-col md:flex-row justify-center mt-5 mx-10">
            <div className="w-full md:w-7/12">
           <h1 className='text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-amber-300'>
            Education
           </h1>
           <div className='flex flex-row'>
           <Item year='Spring 2021 - Current' title='Bachelor of Science: Computer Science - BRAC University'
            detail={
                details.map((d, key) => (
                    <li key={key} className="my-2 text-base font-normal text-white">
                        {d}
                    </li>
                )) 
            }
           />
           <Item year='2018 -2020' title='International Advanced Level: Science - Academia School'/>
            <Item year='2017 -2018' title='IGCSE: Science - Academia School'/>
           </div>
           
           
        </div>
     </div>
    )
}

export default Education