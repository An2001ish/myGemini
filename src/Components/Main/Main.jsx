import { useContext } from 'react'
import "./Main.css"
import { assets } from "../../assets/assets"
import { Context } from '../../Context/Context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSent();
        }
    };

  return (
    <div className='main'>
    <div className="nav">
     
        <div className=''></div>
        
        <p>Lumi</p>
        <img src={assets.logo} alt="" />
        <img src={assets.user_icon} alt="" />
    </div>
    <div className="main-container">

        {!showResult
        ?<>
        <div className="greet">
            <p><span>Hello, Anish.</span></p>
            <p>Ready for a quick search?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Most visited places in 2023</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstrom team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Improve readability of following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        </>
        :<div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                
            </div>
        </div>

        }

        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} onKeyDown={handleKeyDown} value={input} type="text" placeholder='Enter a prompt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:<img src={assets.send_dim_icon} alt="" />}
                </div>
            </div>
            <p className="bottom-info">
               Lumi can be dumb sometimes.
            </p>
        </div>

    </div>
    </div>
  )
}

export default Main
