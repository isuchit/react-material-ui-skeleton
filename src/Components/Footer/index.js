import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Footer() {
    return (
        <div>
             <Typography variant="body2" color="textSecondary" align="center">
      {'Made with ❤️ by srotti. Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
        </div>
    )
}

export default Footer
