require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const PRIVATE_APP_TOKEN = process.env.PRIVATE_APP_TOKEN;   // from .env (never commit)
const CUSTOM_OBJECT = process.env.CUSTOM_OBJECT;           // e.g., "p_game"
const PROPS = process.env.PROPS || 'name,publisher,price'; // csv list of internal names

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

const hs = axios.create({
  baseURL: 'https://api.hubapi.com/',
  headers: {
    Authorization: `Bearer ${PRIVATE_APP_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

// ---------------------------
// Route #1: Homepage
// ---------------------------
app.get('/', async (req, res) => {
  try {
    const url = `/crm/v3/objects/${CUSTOM_OBJECT}?properties=${encodeURIComponent(PROPS)}&limit=100`;
    const { data } = await hs.get(url);
    const rows = (data.results || []).map(r => r.properties || {});
    res.render('homepage', {
      title: 'Custom Object Table',
      rows,
      props: PROPS.split(',')
    });
  } catch (err) {
    console.error('GET / error:', err.response?.data || err.message);
    res.status(500).send('Failed to fetch custom objects. See server logs.');
  }
});

// ---------------------------
// Route #2: Render form
// ---------------------------
app.get('/update-cobj', (req, res) => {
  res.render('updates', {
    title: 'Update Custom Object Form | Integrating With HubSpot I Practicum'
  });
});

// ---------------------------
// Route #3: Create record
// ---------------------------
app.post('/update-cobj', async (req, res) => {
  try {
    const { name, publisher, price } = req.body;
    await hs.post(`/crm/v3/objects/${CUSTOM_OBJECT}`, {
      properties: {
        name,
        publisher,
        price: price || null
      }
    });
    res.redirect('/');
  } catch (err) {
    console.error('POST /update-cobj error:', err.response?.data || err.message);
    res.status(500).send('Failed to create object. See server logs.');
  }
});

app.listen(PORT, () => {
  console.log(`App running: http://localhost:${PORT}`);
});
