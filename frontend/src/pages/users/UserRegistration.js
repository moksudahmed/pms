import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Image, Table } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";


function UserRegistration() {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: ''
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    Axios.get('http://localhost:8000/api/index')
      .then(response => {
        if (Array.isArray(response.data)) {
          setUsers(response.data);          
        }
      })
      .catch(err => {
        console.error("Error fetching users:", err.response.data);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate input fields
    for (const field in userData) {
      if (!userData[field]) {
        setError(`Please fill in the ${field} field.`);
        return;
      }
    }

    // Send registration data to the server
    Axios.post('http://localhost:8000/api/register', userData)
      .then(response => {
        if (response.data.success) {
          setSuccess('User registered successfully!');
          setError(null);
          setUserData({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            role: ''
          });
          fetchUsers(); // Refresh user data
        } else {
          setError(response.data.message || 'Registration failed.');
        }
      })
      .catch(err => {
        console.error("Error during registration:", err.response.data);
        setError('Error during registration. Please try again.');
      });
  };

  return (
    <div className="registration-form">
      <h2>Register</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleSubmit}>
        {/* Form fields here */}
        <button type="submit">Register</button>
      </form>

      {/* Display existing user records in a table */}
      <div>
      <h2>User Records</h2>
      <Table>
            <thead className="thead-light">
                <tr>
                <th className="border-0">First Name</th>
                <th className="border-0">Last Name</th>
                <th className="border-0">Email</th>
                <th className="border-0">Role</th>
                </tr>
            </thead>
            <tbody>
            {users.map(user => (
                
                <tr key={user.id}>
                <td className="border-0">
                    <a href="#Unites States" className="d-flex align-items-center">
                    
                    <div><span className="h6">{user.first_name}</span></div>
                    </a>
                </td>
                <td className="border-0 fw-bold">{user.last_name}</td>
                <td className="border-0 text-danger">
                    <FontAwesomeIcon icon={faAngleDown} className="me-1" />
                    <span className="fw-bold">{user.email}</span>
                </td>
                <td className="border-0 text-danger">
                    <FontAwesomeIcon icon={faAngleDown} className="me-1" />
                    <span className="fw-bold">{user.role}</span>
                </td>
                <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
                </tr>
             ))}  
            </tbody>
            </Table>
      </div>
    </div>
  );
}

export default UserRegistration;
