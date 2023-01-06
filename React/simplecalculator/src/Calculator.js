import {useState, useRef} from 'react';
import './calculator.css'

export default function Calculator(){
    const [calcData, setCalcData]=useState({
        result:0
    })

    const inpref=useRef(null)
    const resref=useRef(null)


    function handleadd(){
        setCalcData({
            result:calcData.result+ Number(inpref.current.value)
        })
    }

    function handlesub(){
        setCalcData({
            result:calcData.result-Number(inpref.current.value)
        })
    }
    function handlemult(){
        setCalcData({
            result:calcData.result*Number(inpref.current.value)
        })
    }
    function handlediv(){
        setCalcData({
            result:calcData.result/Number(inpref.current.value)
        })
    }

    function handleResInp(){
        inpref.current.value=0
    }
    function handleResRes(){
        setCalcData({
            result:0
        })
    }
    return(
    <div>
        <h1>Simple Working Calculator</h1>
        <div>
            <p ref={resref}>{calcData.result}</p>
        </div>
        <input ref={inpref} type="number" placeholder="Enter a number"></input>
        <div>
            <button className="btn" onClick={handleadd}>add</button>
            <button className="btn" onClick={handlesub}>subtract</button>
            <button className="btn" onClick={handlemult}>multiply</button>
            <button className="btn" onClick={handlediv}>divide</button>
            <button className="btn rst-btn" onClick={handleResInp}>reset input</button>
            <button className="btn rst-btn" onClick={handleResRes}>reset result</button>
        </div>
    </div>
    );
    
}