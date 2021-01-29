import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import '../styles/styles.css';

const ArtsCrafts = () => {
  return (
    <div class="paper">
      <Paper elevation={6}>
        <Box p={1}>
          <Typography variant="h5">Elevation</Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default ArtsCrafts;
