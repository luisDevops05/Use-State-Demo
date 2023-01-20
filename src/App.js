import {useState} from 'react'
import './App.css'

function App(){

    const [count,setCount] = useState(1)

        const handleClick = () =>{
        setCount(count+1)
        console.log(count)

            // const promt = document.querySelector('.promt')
            const content = document.querySelector('.content')


        if(count ===1){
            console.log('hello')
            // promt.style.display='block'
            content.style.display='block'
        }

     
}



    return(
        <div>
            <section className="headingSection">
                <div className="headingContainer">
                <div className="heading">
                    <h1>Welcome to the webApp</h1>
                </div>
             </div>
        </section>

        <section className='btnSection'>
            <div className="btnContainer">
                <div className="btnC">
                    <h1>Lets get started click below</h1>
                    <button id="btn" onClick={handleClick}>Click</button>
                </div>
                {/* <div className='promt'><p>Welcome Im a progammed AI to help you with what you need. How can I Help you today?</p> </div> */}
            </div>
        </section>
        <section id='whoAreWe'>
            <div>
                <div>
                    <div className='content'>
                        <div className='img'><p>Use state in react</p></div>
                        {/* <div className='who'><p>this is where the content will be displayed</p></div> */}
                    </div>
                </div>
            </div>

        </section>





        </div>
        
       
     
    )
}



export default App