import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/games.css'
import gameimage from '../images/gameimage.svg'
import newimage from '../images/newimage.svg'
// import { useParams } from 'react-router'

const Games = () => {
    // const { id } = useParams();
    return (
        <>
            <div className="flexy">
                <h1 className='text-white my-5'>
                    Games
                </h1>
            </div>
            <div>
                <div className="row mx-0 my-5 pb-5">
                    <div className="col col-md-4 col-sm-6 col-12 flexy my-4 my-md-0">
                        <div className="card game-card px-3 pt-4 pb-2">
                            <img src={newimage} className="card-img-top" alt="..." />
                            <div className="card-body d-flex justify-content-between px-0 mt-3">
                            <div className='flexy text-valentine'>#Love Calculator</div>
                                <Link exact to="/games/lovecalculator" className='button mx-0 ui round-corner bg-valentine text-white'><i class="gamepad icon"></i>Play</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-4 col-sm-6 col-12 flexy my-4 my-md-0">
                        <div className="card game-card px-3 pt-4 pb-2">
                            <img src={gameimage} className="card-img-top" alt="..." />
                            <div className="card-body d-flex justify-content-between px-0 mt-3">
                            <div className='flexy text-valentine'>#Music Player</div>
                                <Link exact to="/games/musicplayer" className='button mx-0 ui round-corner bg-valentine text-white'><i class="gamepad icon"></i>Play</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Games