const express = require('express');
const path = require('path');
const app = express();
const PORT = 3101;

// Static files only — NO user data accepted
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Cache-Control', 'no-store');
  }
}));

// Reject ALL non-GET requests
app.use((req, res) => {
  res.status(405).send('Method Not Allowed');
});

app.listen(PORT, () => console.log(`Interest Calculator running on http://localhost:${PORT}`));
