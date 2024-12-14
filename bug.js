const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      //Missing proper error handling. Sends a generic error message
      res.status(500).send('Error');
    } else if (user) {
      res.json(user);
    } else {
      // Missing 404 handling for user not found
      res.status(500).send('Error');
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});