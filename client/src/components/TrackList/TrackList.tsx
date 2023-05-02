import React, {FC} from 'react';
import {ITrack} from "../../types/track";
import {Box, Grid} from "@mui/material";
import {TrackItem} from "../TrackItem/TrackItem";

interface ITrackList {
    tracks: ITrack[]
}

export const TrackList: FC<ITrackList> = ({tracks}) => {
    return (
        <Grid container direction={'column'}>
            <Box p={2}>
                {
                    tracks.map(track => <TrackItem key={track._id} track={track} />)
                }
            </Box>
        </Grid>
    );
};