import Item from './Item.jsx'

const Skills = () => {

    const languages = [
       'Python', 'Javascript', 'Rust', 'C/C++', 'Java' 
    ]
    const distros =[
        'Arch Linux', 'Debian', 'Fedora'
    ]
    const web = [
        'HTML5', 'CSS', 'ReactJS', 'MySQL', 'MongoDB'
    ]
    const tools = [
        'Git', 'VSCode'
    ]

    return (
        <div className="flex flex-col md:flex-row justify-center mt-5 mx-10">
            <div className="w-full md:w-7/12">
            <h1 className='text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-amber-300'>
                Skills
            </h1>
           <div className='flex flex-row'>
                <span className='mr-10'>
                <Item
                year = 'Programming Languages'
                    detail={
                        languages.map((d, key) => (
                            <li key={key} className="my-2 text-base font-normal text-white">
                                {d}
                            </li>
                        )) 
                    }
                /></span>
                <Item
                year = 'Linux Distros'
                    detail={
                        distros.map((d, key) => (
                            <li key={key} className="my-2 text-base font-normal text-white">
                                {d}
                            </li>
                        )) 
                    }
                />
                <span className='mx-10'>
                <Item
                year = 'Web Programming'
                    detail={
                        web.map((d, key) => (
                            <li key={key} className="my-2 text-base font-normal text-white">
                                {d}
                            </li>
                        )) 
                    }
                /></span>
                <Item
                year = 'Tools'
                    detail={
                        tools.map((d, key) => (
                            <li key={key} className="my-2 text-base font-normal text-white">
                                {d}
                            </li>
                        )) 
                    }
                />
                </div>
                
            </div>
     </div>
    )
}

export default Skills