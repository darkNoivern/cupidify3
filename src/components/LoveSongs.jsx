import React, { useState, useEffect } from 'react'
import '../styles/lovesongs.css'
import Tilt from 'react-vanilla-tilt'
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import scene from '../images/gameimage.svg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const LoveSongs = () => {
    const [index, setIndex] = useState(0);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        document.querySelector("audio").addEventListener('ended', function () {
            setIndex((index + 1) % 10);
            playSong();
            setPlaying(true);
        });
        return () => {

            document.querySelector("audio").removeEventListener('ended', function () {
                setIndex((index + 1) % 10);
                playSong();
                setPlaying(true);
            });

            // window.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    const playSong = () => {
        console.log('hi');
        document.querySelector("audio").play();
        setPlaying(true);
    }
    const pauseSong = () => {
        console.log('hi');
        document.querySelector("audio").pause();
        setPlaying(false);
    }
    return (
        <>
            <div>
                <h1 className='flexy text-white py-4'>
                    Music
                </h1>
                <div className="flexy">
                    <Tilt className="card music-player-card">
                        <audio src={`../sounds/song` + index + `.mp3`} id="audio"></audio>

                        {/* <div className="rotate-music-img">
                            
                        </div> */}
                        <img src={scene} className="card-img-top rotate-music-img" alt="..." />
                        <div className="card-body text-valentine d-flex justify-content-between">

                            <IconButton
                                onClick={() => { setIndex((index - 1 + 10) % 10) }}
                                className='text-white sp-shadow'>
                                <SkipPreviousIcon />
                            </IconButton>
                            {playing===true ?
                                <IconButton
                                    onClick={() => { pauseSong() }}
                                    className='bg-valentine text-white sp-shadow'>
                                    <PauseIcon />
                                </IconButton>
                                :
                                <IconButton
                                    onClick={() => { playSong() }}
                                    className='bg-valentine text-white sp-shadow'>
                                    <PlayArrowIcon />
                                </IconButton>

                            }
                            <IconButton
                                onClick={() => { setIndex((index + 1) % 10) }}
                                className='text-white sp-shadow'>
                                <SkipNextIcon />
                            </IconButton>
                        </div>
                    </Tilt>
                </div>
            </div>
        </>
    )
}

export default LoveSongs