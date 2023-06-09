import Player from './Player.jsx';
import { songsdata } from './audios.js';
import { useRef, useState, useEffect } from 'react';
import scene from '../images/gameimage.svg'
import Tilt from 'react-vanilla-tilt'
import '../styles/lovesongs.css'

const NewLoveSongs = () => {

    const [songs, setSongs] = useState(songsdata);
    const [isplaying, setisplaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(songsdata[0]);

    const audioElem = useRef();

    useEffect(() => {
        if (isplaying) {
            audioElem.current.play();
        }
        else {
            audioElem.current.pause();
        }
    }, [isplaying])

    const onPlaying = () => {
        const duration = audioElem.current.duration;
        const ct = audioElem.current.currentTime;

        setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
    }

    return (
        <div className='page-bg'>
            <h1 className='flexy text-white py-4'>
                Music
            </h1>
            <div className="flexy mt-5">
                <Tilt className="card music-player-card">
                    <img src={scene} className="card-img-top rotate-music-img" alt="..." />
                    <div className="card-body text-valentine d-flex justify-content-between">
                        <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
                        <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
                    </div>
                </Tilt>
            </div>
        </div>
    );
}

export default NewLoveSongs;