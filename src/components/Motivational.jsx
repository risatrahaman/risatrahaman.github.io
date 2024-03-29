import { useState, useEffect } from 'react';
const Motivational = () => {
    const quotes = [
        {
          text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
          author: "Thomas Edison, type.fit"
        },
        {
          text: "You can observe a lot just by watching.",
          author: "Yogi Berra, type.fit"
        },
        {
          text: "A house divided against itself cannot stand.",
          author: "Abraham Lincoln, type.fit"
        },
        {
          text: "Difficulties increase the nearer we get to the goal.",
          author: "Johann Wolfgang von Goethe, type.fit"
        },
        {
          text: "Fate is in your hands and no one elses",
          author: "Byron Pulsifer, type.fit"
        },
        {
          text: "Be the chief but never the lord.",
          author: "Lao Tzu, type.fit"
        },
        {
          text: "Nothing happens unless first we dream.",
          author: "Carl Sandburg, type.fit"
        },
        {
          text: "Well begun is half done.",
          author: "Aristotle, type.fit"
        },
        {
          text: "Life is a learning experience, only if you learn.",
          author: "Yogi Berra"
        },
        {
          text: "Self-complacency is fatal to progress.",
          author: "Margaret Sangster, type.fit"
        },
        {
          text: "Peace comes from within. Do not seek it without.",
          author: "Buddha, type.fit"
        },
        {
          text: "What you give is what you get.",
          author: "Byron Pulsifer, type.fit"
        },
        {
          text: "We can only learn to love by loving.",
          author: "Iris Murdoch, type.fit"
        },
        {
          text: "Life is change. Growth is optional. Choose wisely.",
          author: "Karen Clark, type.fit"
        },
        {
          text: "You'll see it when you believe it.",
          author: "Wayne Dyer, type.fit"
        },
        {
          text: "Today is the tomorrow we worried about yesterday.",
          author:  "type.fit"
        }
      ]

    const [text, setText] = useState('Hello');

    const showQuotes = () => {
        const randIndex = Math.floor(Math.random() * quotes.length);
        setText(quotes[randIndex].text)
    }

    useEffect(() => showQuotes, []);

    return (
        <div className="flex flex-col md:flex-row justify-center mt-12 mx-10">
            <div className="w-full md:w-7/12">
            <h1 className='text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-amber-300'>
                Motivational Quote
            </h1>
            <div className='flex flex-row text-xl text-white border-4 p-5'>
                <p className='grow text-center'>{text}</p>
                <button className='bg-amber-400 text-black p-1 text-base font-bold px-2' onClick={showQuotes}>Click</button>
            </div>

            </div>
        </div>
    )
}

export default Motivational;