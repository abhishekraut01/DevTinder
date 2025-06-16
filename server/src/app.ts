import express from 'express';
const app = express();

app.use(
  '/bhai',
  (req, res, next) => {
    console.log('Step 1');
    next();
  },
  (req, res, next) => {
    console.log('Step 2');
    next();
  },
  (req, res) => {
    console.log('Step 3');
    res.send('Final Response');
  }
);


app.use((req, res) => {
  res.send('Fallback - Route not found');
});

export default app;
