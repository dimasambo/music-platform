import React, {ChangeEvent, FC, useState} from 'react';
import {StyledCreateTrackInfo} from './StyledCreateTrackInfo';
import {Grid, TextField} from "@mui/material";
import {IReturnedValues} from "../../hooks/useInput";

interface IProps {
    name: IReturnedValues
    artist: IReturnedValues
    text: IReturnedValues
}

export const CreateTrackInfo: FC<IProps> = ({artist, name, text}) => {
    return (
        <StyledCreateTrackInfo>
            <Grid container direction={'column'} className={'trackInfo__wrapper'}>
                <TextField {...name} className={'field'} label={'Track Name'}
                           value={name.value} onChange={name.handleChange}/>
                <TextField {...artist} className={'field'} label={'Author Name'}
                           value={artist.value} onChange={artist.handleChange}/>
                <TextField {...text} className={'field'} label={"Track's words"} multiline rows={3}
                           value={text.value} onChange={text.handleChange}/>
            </Grid>
        </StyledCreateTrackInfo>
    );
};