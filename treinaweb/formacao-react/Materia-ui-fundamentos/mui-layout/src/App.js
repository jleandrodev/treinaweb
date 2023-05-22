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

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={2} component={'header'}>
          <Grid item xs={2}>
            <Item>Logo</Item>
          </Grid>
          <Grid item xs={10} component={'nav'}>
            <Item>Menu</Item>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} >
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
    </div>
  );
}

export default App;
