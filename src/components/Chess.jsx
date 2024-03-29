const Chess = () => {
    return (

            <div className="flex flex-col md:flex-row justify-center mt-12 mx-10">
                <div className="w-full md:w-7/12">
                    <h1 className='text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-amber-300'>
                        Chess Live TV
                    </h1>
                    <iframe src="https://lichess.org/tv/frame?theme=brown&bg=dark" className="w-80 h-96" allowtransparency="true"></iframe>
                </div>
            
        </div>
    )
}

export default Chess