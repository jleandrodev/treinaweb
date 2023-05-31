import { Container, Grid, Paper, styled } from '@mui/material';
import './App.css';

function Paragrafo() {
  return (
    <p>
          Nulla qui adipisicing pariatur consequat aliqua ad pariatur ad ad ad id amet duis. Amet ut enim adipisicing occaecat. Aliqua anim cupidatat commodo ea labore est ipsum occaecat.
        </p>
  )
}

const Item = styled(Paper)`
  background-color: #1A2027;
  text-align: center;
  color: #fff;
`

const GridStyled = styled(Grid)`
  background-color: #1A2027;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

`

function Layout() {
  return (
      <Container>
        <Grid container spacing={2} component={'header'}>
          <Grid item xs={2} sm={3} >
            <Item>Logo</Item>
          </Grid>
          <Grid component={'nav'} item xs={10} sm={9} >
            <Item>Menu</Item>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paragrafo />
          </Grid>

          <Grid item xs={6}>
            <Paragrafo />
          </Grid>

          <Grid item xs={12}>
            <Paragrafo />
          </Grid>
          
          <Grid item xs={8}>
            <Paragrafo />
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Item>Footer</Item>
          </Grid>
        </Grid>
      </Container>

  )

}

function TemplateGrid() {
  return (
    <Grid 
      container
      direction={'row'}
      justifyContent={'space-evenly'}
      alignItems={'flex-start'}
      sx={{ bgcolor: '#0a5483' }}
      >
      <GridStyled item sx={{ p: 2 }}>
        Item 1
      </GridStyled>
      <GridStyled item sx={{ p: 2 }}>
        Item 2
      </GridStyled>
      <GridStyled item sx={{ p: 2 }}>
        Item 3
      </GridStyled>
    </Grid>
  )
}


function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
