import React, { useEffect, useState } from 'react';
import AnimatedNumber from "animated-number-react";
import party from "party-js";
import '../styles/lovecalculator.css'

const LoveCalculator = () => {

    const [num, setNum] = useState(0);
    const [name,setName] = useState('');
    const [cname,setCName] = useState('');
    const [reset, setReset] = useState(true);
    const [unlock, setUnlock] = useState(false);
    const [fixColor, setFixColor] = useState("text-valentine");
    
    const dialogue = [
    'Padhai likhai krro IAS YAS bano',
    'Aur Devdas kya haal hai',
    'Baat Chit kiya krro thoda',
    'Aur thoda mehnat wehnat crow warna koi aur leke jayega',
    'Lage raho Majnu Bhai',
    'Addha rasta toh aa hi gaye baki bhi hojayega',
    'Your Love needs a little more love',
    'Srivalli Gana try kiya kya ??',
    'Prompose krdo 😎',
    'Itna percent toh mere boards mei bhi nhi tha !! Comgrats !!',
    'Tera toh set hogya , Apne developers ka bhi laga de',]

    const animate = () => {
        setReset(false);
        let xi = Math.floor((Math.random()*101));

        if(xi<=30){
            setFixColor("text-danger");
        }
        else if(xi<=60){
            setFixColor("text-warning");
        }
        else if(xi<=90){
            setFixColor("text-lime");
        }
        else {
            setFixColor("text-success");
            setInterval(2000);
            party.confetti(document.querySelector('.partyJS'), {
                count: party.variation.range(20, 40),
            });
        }
        
        setNum(xi);
        setUnlock(false);

    }

    const formatValue = (value) => {
        return (`${value.toFixed(0)} %`);
    }

    const myname = (event) => {
        setReset(true);
        setUnlock(true);
        setFixColor("text-valentine");
        setName(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1));
    }
    
    const mycname = (event) => {
        setReset(true);
        setUnlock(true);
        setFixColor("text-valentine");
        setCName(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1));
    }

    return (
        <>
            <div className="lcbg">
            <div className='text-valentine game-heading flexy my-5 pt-5 pb-4'>
                Love Calculator <i class=" ms-2 heartbeat icon"></i>
            </div>
                <div className="row mx-0 mt-5 mb-3">
                    <div className="col col-6 flexy">
                        <input 
                        type="text" 
                        value={name}
                        onChange={myname}
                        className='form-control mouserat text-dark lover-input' 
                        placeholder='Enter your name' />
                    </div>
                    <div className="col col-6 flexy">
                        <input 
                        type="text" 
                        value={cname}
                        onChange={mycname}
                        className='form-control mouserat text-dark lover-input' 
                        placeholder="Enter Crush's name" />
                    </div>
                </div>
                <div className="flexy my-md-5 my-4">
                { 
                    ((name!=='') && (cname!=='') && unlock) ? 
                    <button onClick={() => { 
                        animate();    
                        }} className="button ui bg-valentine text-white">
                        Click
                    </button>
                    :
                    <button onClick={() => { animate(); }} disabled className="button ui bg-valentine text-white">Click</button>
                }
                </div>
                <div className="row mx-0 mt-5 sp-lc-section">
                    <div className="col col-12 col-md-4 flexy text-valentine lovername">{(name === '') ? `Your Name` : name}</div>
                        <div className="col col-12 col-md-4 partyJS flexy">
                    {
                        ( reset ) ? 
                            <div className='animate-lc text-valentine'>0 %</div>
                        :
                        <div>

                            <AnimatedNumber 
                            component={"text"} 
                            className={`animate-lc ${fixColor}`} 
                            value={num} 
                            duration={1000} 
                            formatValue={formatValue} />
                            </div>
                    }
                    </div>
                    <div className="col col-12 col-md-4 flexy text-valentine lovername">{(cname === '') ? `Crush's Name` : cname}</div>
                </div>
                <div className={`py-4 px-3 flexy dialogue-style ${fixColor}`}>
                {(reset) ? '' : <><i class="quote style-quote left icon me-3"></i>{`${dialogue[Math.floor(num/10)]}`}<i class="quote style-quote right icon ms-3"></i></>}
                </div>
            </div>
        </>
    )
}

export default LoveCalculator;