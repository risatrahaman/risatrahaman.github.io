const Item = ({ year, title, detail }) => {
    return (
       <ol className="flex flex-col md:flex-row relative border-l border-stone-700">
          <li className="mb-5 ml-4">
             <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white border-amber-500 bg-amber-300" />
             <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm ">
                <span className="inline-block text-lg px-2 py-1 font-semibold text-black bg-amber-300 rounded-md">
                   {year}
                </span>
             </p>
             <h3 className="my-2 text-lg font-semibold text-white">
                   {title}
            </h3>
            <ul className="list-disc mx-5">
               {detail}
            </ul>
             
          </li>
       </ol>
    )
 }
 
 export default Item;