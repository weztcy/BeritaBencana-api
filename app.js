const express = require('express');
const cors = require('cors'); // Import middleware CORS
const app = express();
const articleRoutes = require('./src/routes/articleRoutes');

// Gunakan middleware CORS
app.use(cors());

app.use(express.json());
app.use(articleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
