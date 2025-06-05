import { useState } from 'react';

const FactDisplay = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch random fact from API using async/await
  const fetchRandomFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error('Error fetching fact:', error);
      setFact('Failed to fetch fact. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fact-container">
      <button 
        className="fetch-button" 
        onClick={fetchRandomFact}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get Random Fact'}
      </button>
      
      {fact && (
        <div className="fact-box">
          <p>{fact}</p>
        </div>
      )}
    </div>
  );
};

export default FactDisplay;