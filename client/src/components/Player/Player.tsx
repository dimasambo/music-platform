import React, {ChangeEvent, FC, useEffect} from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import {StyledPlayer} from './StyledPlayer';
import {ITrack} from "../../types/track";
import TrackProgressLine from "../TrackProgressLine/TrackProgressLine";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../Redux/redux-store";
import {pauseTrack, playTrack, setCurrentTime, setDuration, setVolume} from "../../Redux/player/player-slice";

let audio: any;

const Player: FC = ({}) => {
    const {pause, currentTime, volume, duration, active} = useSelector((state: State) => state.player)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!audio) {
            audio = new Audio()
        } else {
            setAudio()
            play()
        }
    }, [active])

    const setAudio = () => {
        if(active) {
            audio.src = 'http://localhost:3000/' + active.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                dispatch(setDuration(Math.ceil(audio.duration)))
            }
            audio.ontimeupdate = () => {
                dispatch(setCurrentTime(Math.ceil(audio.currentTime)))
            }
        }
    }

    const play = () => {
        if(pause) {
            dispatch(playTrack())
            audio.play()
        } else {
            dispatch(pauseTrack())
            audio.pause()
        }
    }

    const handlerVolume = (e: ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        dispatch(setVolume(Number(e.target.value)))
    }

    const handlerCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        dispatch(setCurrentTime(Number(e.target.value)))
    }

    if(!active) {
        return null
    }

    return (
        <StyledPlayer>
            <IconButton onClick={play}>
                {!pause
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <Grid className={'trackInfo__grid'} container direction={'column'}>
                <div>{active?.name}</div>
                <div className={'artist'}>{active?.artist}</div>
            </Grid>
            <TrackProgressLine left={currentTime} right={duration} onChange={handlerCurrentTime} />
            <VolumeUp className={'volumeUp'}/>
            <TrackProgressLine left={volume} right={100} onChange={handlerVolume}/>

        </StyledPlayer>
    );
};

export default Player;