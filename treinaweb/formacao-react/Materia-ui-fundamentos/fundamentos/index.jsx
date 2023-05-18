const root = ReactDOM.createRoot(document.getElementById('root'))

const { Typography, Button  } = MaterialUI

function MeuP () {
  return <Typography>Olá mundo</Typography>
}

function MyButton() {
  return <button>Clique Aqui</button>
}

root.render(
  <>
    <MeuP />
    <MyButton />
    <Button sx={{ m: "8px" }}>Click</Button>
    <Button sx={{ m: 2 }} variant="outlined">Click</Button>
    <Button variant="contained">Click</Button>
  </>

  )