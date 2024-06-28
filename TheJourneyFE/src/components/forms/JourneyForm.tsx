import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const JourneyForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Image:', image);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
        <TextField
          type="text"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          type="text"
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          multiline
          rows={4}
          margin="normal"
        />
        <TextField
          type="text"
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Journey
        </Button>
      </Box>
    </form>
  );
};

export default JourneyForm;
