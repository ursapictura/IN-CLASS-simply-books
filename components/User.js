// import React from 'react';
import { Card } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
// import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';

export default function User() {
  // const router = useRouter();
  const { user } = useAuth();
  console.warn(user);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={user.photoURL} alt={user.displayName} />
      <Card.Body>
        <Card.Title>{user.displayName}</Card.Title>
        <p className="card-text bold">{user.email}</p>
        <p className="card-text bold">Latest Login: {user.metadata.lastSignInTime}</p>
      </Card.Body>
    </Card>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    photoURL: PropTypes.bool,
    lastSignInTime: PropTypes.string,
  }).isRequired,
};
