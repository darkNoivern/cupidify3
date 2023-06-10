import React, { useState, useEffect } from 'react'
import '../styles/lovesongs.css'
import Tilt from 'react-vanilla-tilt'
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import scene from '../images/gameimage.svg'

import { songsdata } from './audios.js';

const LoveSongs = () => {

    const [index, setIndex] = useState(0);
    const [playing, setPlaying] = useState(false);

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {

        var audio = document.getElementById("audio");

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        const handleLoadedData = () => {
            setDuration(audio.duration);
        };

        document.getElementById("audio").addEventListener('ended', function () {
            setIndex((index + 1) % songsdata.length);
            // playSong();
            // setPlaying(true);
        });

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadeddata', handleLoadedData);

        return () => {

            document.getElementById("audio").removeEventListener('ended', function () {
                setIndex((index + 1) % songsdata.length);
                // playSong();
                // setPlaying(true);      
            });

            // window.removeEventListener('keydown', handleKeyDown);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadeddata', handleLoadedData);
        }

    }, [index])

    useEffect(() => {
        if (playing) {
            playSong();
        } else {
            pauseSong();
        }
    }, [index]);


    const togglePlay = () => {
        const audioElement = document.getElementById('audio');
        if (playing) {
            audioElement.pause();
        } else {
            audioElement.play();
        }
        setPlaying(!playing);
    };

    const playSong = () => {
        const audioElement = document.getElementById('audio');
        audioElement.play();
        setPlaying(true);
    }
    const pauseSong = () => {
        const audioElement = document.getElementById('audio');
        audioElement.pause();
        setPlaying(false);
    }

    return (
        <>
            <div>
                <h1 className='flexy text-white py-4'>
                    Music
                </h1>
                <div className="flexy mt-5">
                    <Tilt className="card music-player-card">

                        <img src={scene} className="card-img-top rotate-music-img" alt="..." />
                        
                        <div className="title text-valentine">
                            <marquee scrollamount="1">{songsdata[index].title}</marquee>
                        </div>

                        <div className="navigation mt-3 mb-4">
                            <div className="navigation_wrapper">
                                <div className="seek_bar bg-valentine" style={{ width: `${(currentTime / duration) * 100 + "%"}` }}></div>
                            </div>
                        </div>

                        <div className="card-body text-valentine d-flex justify-content-between">

                            <IconButton
                                onClick={() => {
                                    setIndex((index - 1 + songsdata.length) % songsdata.length);
                                    playSong();
                                }}
                                className='text-white sp-shadow'>
                                <SkipPreviousIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => { togglePlay(); }}
                                className='bg-valentine text-white sp-shadow'>
                                {playing === true ?
                                    <PauseIcon />
                                    :
                                    <PlayArrowIcon />
                                }
                            </IconButton>

                            <audio id="audio" src={songsdata[index].url}></audio>
                            <IconButton
                                onClick={() => {
                                    setIndex((index + 1) % songsdata.length);
                                    playSong();
                                }}
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