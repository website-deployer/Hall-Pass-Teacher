const express = require('express');
const cors = require('cors');
const path = require('path');
const hallpassRouter = require('./hallpass');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/hallpass', hallpassRouter);

// Catch-all route to redirect all other routes to the main page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Teacher's Hall Pass server listening at http://localhost:${port}`);
});
