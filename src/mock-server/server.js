const app = require('express')();

const defaultResponseData = {
  ip: '192.0.0.1',
  city: 'London',
  region: 'England',
  country: 'GB',
  org: 'Sky UK Ltd'
};

app.get('/:ipAddress', (req, res) => {
  res.status(200).json(defaultResponseData);
});

app.listen(3000, () => {
  console.log('server running...');
});