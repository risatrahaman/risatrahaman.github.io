const Project = ({ title, imgUrl, stack, link }) => {
    return (
          <div className="w-full p-4">
             <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
             <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm text-white ">
                {stack.map((s, i) => (
                   <span key={i} className="inline-block px-2 py-1 font-semibold border-2 border-white rounded-md">
                      {s}
                   </span>
                ))}
             </p>
          </div>
    )
 }
 
 export default Project;