import React from "react";
import { shallow } from 'enzyme'
import ClickCounter from "./ClickCounter";

it('Clicl counter dever ter o total de cliques igual a 2', () => {
  const meuComponente = shallow(<ClickCounter />)

  meuComponente.find('input').simulate('change').simulate('change')

  expect(meuComponente.state().totalClick).toEqual(2)
})
