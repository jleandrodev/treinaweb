import { createContext, useContext } from "react"

interface MeuContextoInterface {
  a: number
}

const MeuContexto = createContext<MeuContextoInterface>({ a: 0})

export default function ExampleContext() {
  return (
    <MeuContexto.Provider value={{ a: 5 }}>
      <ComponenteFilho />
    </MeuContexto.Provider>
  )
}


function ComponenteFilho() {
  const { a } = useContext(MeuContexto)
  return <div></div>
}