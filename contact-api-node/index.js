// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = 3000;

// app.use(cors()); // <-- allow React frontend to access API
// app.use(express.json());

// let contacts = [];

// app.get('/contacts', (req, res) => {
//   res.json(contacts);
// });

// app.post('/contacts', (req, res) => {
//   const { name, email } = req.body;
//   if (!name || !email) {
//     return res.status(400).json({ message: 'Name and email are required' });
//   }
//   contacts.push({ name, email });
//   res.status(201).json({ message: 'Contact added!' });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// //GET--- http://localhost:3000/contacts







const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect('mongodb://127.0.0.1/contactForm')
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ Mongo Error', err));

// ✅ MongoDB Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// ✅ POST Contact API
app.post('/contacts', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved to MongoDB!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Server error!' });
  }
});

// ✅ (Optional) GET all contacts
app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching contacts' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
