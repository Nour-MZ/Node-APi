const express = require("express");
const axios = require("axios")
const app = express()

const PORT = process.env.PORT || 3000


app.get('/api/search/:searchQuery', async (req, res) => {
  const searchQuery = req.params.searchQuery;

  
  try {
   
      // const externalData = await axios.get(`https://api.example.com/data?query=${searchQuery}`);

      
      const responseData = {
          searchQuery: searchQuery,
          additionalInfo: "test" 
      };

      res.json(responseData); // Send the combined data as JSON
      
  } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
  }
});

app.get('/', (req, res) => {
    
    res.send('Hello, World!');
   
});

app.get('/api/:id/:year', (req, res) => {
    res.send(req.params)
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});