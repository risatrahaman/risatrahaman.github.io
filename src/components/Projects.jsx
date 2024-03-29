import Project from './Project';

const Portfolio = () => {
   return (

      <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-7/12 ml-10 mt-10">
         
         <h1 className='text-2xl font-bold underline underline-offset-8 decoration-4 mb-7 text-amber-300'>
            Projects
           </h1>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a 
            href="https://github.com/risatrahaman/AMS"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 border-white rounded-md overflow-hidden"
            >
                <Project 
                    title = 'Airlines Management System'
                    stack = {['HTML5', 'CSS', 'JS', 'PHP']}
                />
            </a>
            <div
            className="border-2 border-stone-900 border-white rounded-md overflow-hidden"
            >
                <Project 
                    title = 'Sentiment Analysis - NLP'
                    stack = {['LSTM', 'GRU', 'Python', 'GLovE']}
                />
            </div>

            <a 
            href="https://github.com/risatrahaman/Archery-Championship"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 border-white rounded-md overflow-hidden"
            >
                <Project 
                    title = 'Archery Championship'
                    stack = {['OpenGL', 'Python']}
                />
            </a>

            <a 
            href="https://github.com/risatrahaman/todoapp"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 border-white rounded-md overflow-hidden"
            >
                <Project 
                    title = 'To Do App'
                    stack = {['ReactJS']}
                />
            </a>
            <div className="border-2 border-stone-900 border-white rounded-md overflow-hidden">
            <Project 
                title = 'Password Security System'
                stack = {['Logic Gates']}
            />
            </div>
            

         </div>
      </div>
   )
}

export default Portfolio;