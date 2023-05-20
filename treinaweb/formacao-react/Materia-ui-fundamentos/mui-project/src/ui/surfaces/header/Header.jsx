import { IconButton, Toolbar, Typography, AppBar } from '@mui/material'
import { Home } from '@mui/icons-material'

export default function Header() {
  return (
    <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' color='inherit' sx={{ mr: 2 }}>
            <Home />
          </IconButton>
          <Typography>Home</Typography>
        </Toolbar>
      </AppBar>
  )
}