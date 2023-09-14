const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

const apiKey = 'your_api_key_here'; // Replace with your actual API key

app.get('/api/fetch-data', async (req, res) => {
  try {
    const apiUrl = 'https://api.example.com/data'; // Replace with the actual API endpoint
    const headers = {
      'Authorization': `Bearer ${apiKey}`, // Add your API key as a Bearer token
      'Content-Type': 'application/json', // Adjust headers as needed
    };

    const response = await fetch(apiUrl, { headers });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();

    // Process the fetched data and send it as a response
    res.json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
