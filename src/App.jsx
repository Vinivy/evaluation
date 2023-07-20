    import './App.css'
    import { useState } from 'react'
    //SVGS
    import Fav from './Assets/Icons_Main/icon-star.svg'
    function App() {
      const { Valor , setValor} = useState()
      return (
        <div className="App">
          <section className="Box">
           <main>
             <div className="Header">
             <div className="Fav">
               <img src={Fav} alt="" />
             </div>
             </div>
             <div className="Artic">
               <h1>How did we do?</h1>
               <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
             </div>
             <section className="btns">
               <button value={Valor}>1</button>
               <button value="2">2</button>
               <button value="3">3</button>
               <button value="4">4</button>
               <button value="5">5</button>
             </section >
             <div className="Submit">
              <button onClick={ () => {
                alert(`é ${setValor}`)
              }}>SUBMIT</button>
             </div>
           </main>
          </section>
        </div>
      ); 
    }

    export default App;