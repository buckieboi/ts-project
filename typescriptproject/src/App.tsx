import { useEffect, useState } from 'react';
import quotes from './quotes.json';

//  easier way to write  random or just save it?
// make program into classes
// when the page refreshes new quote will pop up.
// maybe have the quote refresh every so seconds instead of refresh page
// music player in the page or seperate project?
// should i format the page in like divide it by 1/4ths or should i do columns or other ways?
// change to a class form of code for modulatirty and cleaner.
// uses classes by dividing the logic from the ui components in seperate files
// we need unit tests for the logic seperately


class Quotegen() {
  function App() {
    const [quote,setQuote] = useState(getRandomQuote());

    public: getRandomQuote(): integer {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
  }

}





function App() {
  const [quote,setQuote] = useState(getRandomQuote());

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }


  useEffect(() => {
    const interval = setInterval(() => {setQuote(getRandomQuote())}, 1000);
    return () => clearInterval(interval); // Clean up on unmount
  }, []);
  

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Quote Generator</h1>
      <blockquote style={{ fontSize: '1.5rem', margin: '1rem 0' }}>
        “{quote.text}”
      </blockquote>
      <p>- {quote.author}</p>
    </div>
  );
}

export default App;
