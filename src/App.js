import {useState} from 'react'
import './App.css'

function App(){

    const [count,setCount] = useState(1)

        const handleClick = () =>{
        setCount(count+1)
        console.log(count)
            const promt = document.querySelector('.promt')

        if(count ===1){
            console.log('hello')
            promt.style.display='block'
        }

     
}



    return(
        <div>
            <section className="headingSection">
                <div className="headingContainer">
                <div className="heading">
                    <h1>Welcome</h1>
                </div>
             </div>
        </section>

        <section className='btnSection'>
            <div className="btnContainer">
                <div className="btnC">
                    <button id="btn" onClick={handleClick}>Click Here</button>
                </div>
                <div className='promt'><p>Welcome Im a progammed AI to help you with what you need. How can I Help you today?</p> </div>
            </div>
        </section>





        </div>
        
       
     
    )
}



export default App