import React, {Suspense} from 'react'
import './App.css'
import loadable from '@loadable/component'

const TextCounter = loadable(() => import('./components/TextCounter'))

// const TextCounter = React.lazy(() => import('./components/TextCounter'))


// // function App() {

// //   return (
// //     <>
// //     <Suspense fallback={<div>Loading</div>}>
// //       <TextCounter />

// //     </Suspense>
// //     </>
// //   )
// // }


function App() {

  return (
    <>
    <Suspense fallback={<div>Loading</div>}>
      <TextCounter />

    </Suspense>
    </>
  )
}

export default App
