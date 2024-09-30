// src/pages/UserDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../services/userServices';
import { CircularProgress, Typography } from '@mui/material';

const UserDetail = () => {
  const { id } = useParams(); // Get the dynamic route param
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserById(id);
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!user) {
    return <Typography variant="h6">User not found</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>User Details</Typography>
      <Typography variant="h6">Name: {user.username}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>Phone: {user.phone}</Typography>
      <Typography>Website: {user.website}</Typography>
    </div>
  );
};

export default UserDetail;
