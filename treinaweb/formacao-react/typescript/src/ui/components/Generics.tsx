
export interface MeuComponenteProps<T> {
  data: T[]
  children: (item: T) => JSX.Element
}


export default function MeuComponente<T>(props: MeuComponenteProps<T>) {

  return <ul>
    {props.data.map(props.children)}
  </ul>

}


<MeuComponente data={[{nome: 'abc'}, {nome: 'def'}]}>
  {(item) => <li>Nome: {item.nome}</li>}
</MeuComponente>