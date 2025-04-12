// import React, { useState } from 'react';

// function App() {
//   const [formData, setFormData] = useState({ name: '', email: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:3000/contacts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const result = await res.json();
//       setMessage(result.message);
//       setFormData({ name: '', email: '' });
//     } catch (error) {
//       console.error('Error:', error);
//       setMessage('Something went wrong!');
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Contact Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label><br />
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           /><br /><br />
//         </div>

//         <div>
//           <label>Email:</label><br />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           /><br /><br />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default App;





//-------------------------------------
/*

import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      setMessage(result.message);
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong!');
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1>💬 Contact Us</h1>
        <p>We would love to hear from you!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="👤 Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="📧 Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit">🚀 Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default App;
*/

//---------------------------------------------------
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: ''
  });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await res.json();
      setMsg(result.message);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setMsg('Something went wrong!');
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1>💬 Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="👤 Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="📧 Email" value={formData.email} onChange={handleChange} required />
          <input name="phone" placeholder="📞 Phone" value={formData.phone} onChange={handleChange} required />
          <textarea name="message" placeholder="📝 Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">🚀 Submit</button>
        </form>
        {msg && <p className="message">{msg}</p>}
      </div>
    </div>
  );
}

export default App;

