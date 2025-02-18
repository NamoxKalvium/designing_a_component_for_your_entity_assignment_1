import React from 'react';
import profilePhoto from '../assets/profile.jpg'; // Adjust the path to your image

const Usercard = () => {
  // Static user details
  const name = "John Doe";
  const mail = "johndoe@example.com";
  const phoneNumber = "+1234567890";
  const address = "123 Main St, Springfield, IL, USA";

  return (
    <div style={styles.card}>
      <img src={profilePhoto} alt="profile" style={styles.profilePhoto} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.detail}><strong>Email:</strong> {mail}</p>
      <p style={styles.detail}><strong>Phone:</strong> {phoneNumber}</p>
      <p style={styles.detail}><strong>Address:</strong> {address}</p>
    </div>
  );
};

// Basic styling for the card
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  profilePhoto: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    marginBottom: '16px',
  },
  name: {
    fontSize: '24px',
    margin: '8px 0',
  },
  detail: {
    fontSize: '16px',
    margin: '8px 0',
    color: '#555',
  },
};

export default Usercard;