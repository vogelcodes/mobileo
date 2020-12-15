import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <MuiLink color="inherit" href="https://instagram.com/mobi_leo">
        mobileo.mobi -       {new Date().getFullYear()}

      </MuiLink>{' '}
      {'.'}
    </Typography>
  );
}
