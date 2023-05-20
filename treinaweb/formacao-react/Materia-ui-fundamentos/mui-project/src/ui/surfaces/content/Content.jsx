import { Box, Container, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography, useMediaQuery } from '@mui/material'

import { useTheme } from '@mui/material/styles'
import InfoIcon from '@mui/icons-material/Info'
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];

export default function Content() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <main>
        <Box component={'section'} sx={{ pt: 10, maxWidth:'sm', mx: 'auto'  }}>
          <Typography variant={matches ? 'h2' : 'h4'} align='center' component={'h1'}>Album de Fotos</Typography>
          <Typography paragraph variant='body2' align='center' sx={{ mt: 2 }}>
            Occaecat nisi reprehenderit laborum labore ad tempor excepteur magna officia dolore in esse minim. Cupidatat sunt consequat cupidatat fugiat aute. Eu velit magna ipsum sunt exercitation tempor cillum cupidatat laboris id. Commodo ea enim dolore veniam cillum quis aliquip quis qui fugiat id laboris eu. Ad aute aliqua aute ipsum dolore officia. Id magna nostrud incididunt duis nisi aute exercitation dolor sint pariatur fugiat tempor.
          </Typography>
        </Box>
        <Box sx={{ maxWidth: 'sm', mx: 'auto' }}>
          <Container>
            <ImageList>
              {
                itemData.map((item) => (
                  <ImageListItem>
                  <img 
                    src={`${item.img}?w=248&fit=crop&auto=format`} 
                    alt={item.title}
                    loading={ 'lazy' } />
                  <ImageListItemBar 
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton sx={{ color: 'rgba(255,255,255, 0.5)' }}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>

                ))
              }
            </ImageList>
          </Container>
        </Box>
      </main>
  )
}