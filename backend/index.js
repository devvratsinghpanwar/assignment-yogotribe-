const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (for form data)
app.use(express.urlencoded({ extended: true }));

// Prime number check endpoint
app.get('/is-prime', (req, res) => {
  const number = Number(req.query.number);
  
  // Validate input
  if (isNaN(number) || number < 2 || !Number.isInteger(number)) {
    return res.status(400).json({
      error: 'Please provide a valid integer greater than 1'
    });
  }

  // Check if number is prime
  const isPrime = checkPrime(number);
  
  res.json({
    number,
    isPrime
  });
});

// Prime checking function
function checkPrime(n) {
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  // Check divisors up to square root of n
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});