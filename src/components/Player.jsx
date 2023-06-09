import React, { useRef } from 'react';
import { IconButton } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Player = ({ audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs }) => {

    const clickRef = useRef();

    const PlayPause = () => {
        setisplaying(!isplaying);

    }

    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        audioElem.current.currentTime = divprogress / 100 * currentSong.length;

    }

    const skipBack = () => {
        const index = songs.findIndex(x => x.title == currentSong.title);
        if (index == 0) {
            setCurrentSong(songs[songs.length - 1])
        }
        else {
            setCurrentSong(songs[index - 1])
        }
        audioElem.current.currentTime = 0;

    }


    const skiptoNext = () => {
        const index = songs.findIndex(x => x.title == currentSong.title);

        if (index == songs.length - 1) {
            setCurrentSong(songs[0])
        }
        else {
            setCurrentSong(songs[index + 1])
        }
        audioElem.current.currentTime = 0;

    }

    return (
        <div className='player_container'>
            <div className="title">
                <marquee scrollamount="1">{currentSong.title}</marquee>
            </div>
            <div className="navigation mt-3 mb-4">
                <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
                    <div className="seek_bar bg-valentine" style={{ width: `${currentSong.progress + "%"}` }}></div>
                </div>
            </div>
            <div className="controls d-flex justify-content-between">

                <IconButton className='text-white sp-shadow'>
                    <SkipPreviousIcon className='btn_action' onClick={skipBack} />
                </IconButton>
                <IconButton className='bg-valentine text-white sp-shadow'>
                    {isplaying ? <PauseIcon className='btn_action pp' onClick={PlayPause} /> : <PlayArrowIcon className='btn_action pp' onClick={PlayPause} />}
                </IconButton>
                <audio id="audio" src='https://drive.google.com/file/d/1N7ETbjuPbECPebIfWSx60Kuz9KAvXQ2q/view?usp=drive_link'></audio>
                <IconButton className='text-white sp-shadow'>
                    <SkipNextIcon className='btn_action' onClick={skiptoNext} />
                </IconButton>

            </div>
        </div>

    )

}

export default Player