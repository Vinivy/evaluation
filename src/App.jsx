    import { useState } from "react";
     
    import './App.css'
    
    import Feedback from "./Components/FeedBack";
    //SVGS
    import Fav from './Assets/Svgs/icon-star.svg'
    function App() {
      const [ ValoresSelections, setValoresSelections] = useState(null)
      const [ Visible, setVisible] = useState(true)

      //Buscando os valoreas através do onClick
      const handleButtonClick = (value) => {
        setValoresSelections(value);
      };


      return (
        <div className="App">
          <section className="Box">
            {Visible !== true ? 
                (
                  <Feedback selectedValue={ValoresSelections} />
                ) : (
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
                        <button onClick={() => handleButtonClick(1)}>1</button>
                        <button onClick={() => handleButtonClick(2)}>2</button>
                        <button onClick={() => handleButtonClick(3)}>3</button>
                        <button onClick={() => handleButtonClick(4)}>4</button>
                        <button onClick={() => handleButtonClick(5)}>5</button>
                      </section >
                      <div className="Submit">
                       <button onClick={() => setVisible(false)}>SUBMIT</button>
                      </div>
                  </main>
                )
                }
            </section>
        </div>
      ); 
    }

  export default App