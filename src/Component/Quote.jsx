import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '7lBxlfwgHuv5cVZAAOJNWfWdfMwcKlMFKGUPBxob';
  const CATEGORY = 'mom';
  const API_URL = `https://api.api-ninjas.com/v1/quotes?category=${CATEGORY}`;

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const headers = new Headers();
        headers.append('X-Api-Key', API_KEY);
        const response = await fetch(API_URL, { headers });
        const data = await response.json();
        console.log(data);
        if (data.length > 0) {
          setQuote(data[0]);
        } else {
          setError({ message: 'No quotes found.' });
        }
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchQuote();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <div className="quote">
      {quote && (
        <blockquote>
          <p>
            Quote:
            <span>&nbsp;</span>
            {quote.quote}
          </p>
          <p>
            Category:
            <span>&nbsp;</span>
            {quote.category}
          </p>
          <footer>
            author:
            <span>&nbsp;</span>
            {quote.author}
          </footer>
        </blockquote>
      )}
    </div>
  );
};

export default Quote;
