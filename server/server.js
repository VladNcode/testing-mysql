require('dotenv').config({ path: './server/config.env' });
const express = require('express');
const apiRouter = require('./routes/beerRoutes');

const app = express();

app.use(express.json());

app.use('/api/beers', apiRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening on port ${process.env.PORT || 3000}`);
});
