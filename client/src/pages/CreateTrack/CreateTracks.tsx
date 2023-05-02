import {ChangeEvent, FC, useState} from "react";
import {StepWrapper} from "../../components/StepWrapper/StepWrapper";
import {Button, Grid} from "@mui/material";
import {CreateTrackInfo} from "../../components/CreateTrackInfo/CreateTrackInfo";
import {FileUpload} from "../../components/FileUpload/FileUpload";
import {useInput} from "../../hooks/useInput";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {setTrack} from "../../Redux/track/track-slice";

export const CreateTracks: FC = () => {
    const navigate = useNavigate()

    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState<any>(null)
    const [audio, setAudio] = useState<any>(null)
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')

    const dispatch = useDispatch()

    const handleNext = () => {
        if (activeStep !== 2) {
            setActiveStep(activeStep => activeStep + 1)
        } else {
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('text', text.value)
            formData.append('artist', artist.value)
            formData.append('picture', picture)
            formData.append('audio', audio)
            try {
                // @ts-ignore
                dispatch(setTrack(formData)).then(() => navigate('/tracks'))
            } catch (e: any) {
                console.log(e)
            }
        }
    }

    return <div>
        <StepWrapper activeStep={activeStep}>
            {activeStep === 0 && <CreateTrackInfo name={name} artist={artist} text={text}/>}
            {activeStep === 1 &&
            <FileUpload setFile={setPicture} accept={'image/*'}>
                <Button>Upload Image</Button>
            </FileUpload>
            }
            {activeStep === 2 &&
            <FileUpload setFile={setAudio} accept={'audio/*'}>
                <Button>Upload Audio</Button>
            </FileUpload>
            }
        </StepWrapper>
        <Grid container justifyContent={'space-between'}>
            <Button disabled={activeStep === 0}
                    onClick={() => setActiveStep(activeStep => activeStep - 1)}>Prev</Button>
            <Button onClick={handleNext}>Next</Button>
        </Grid>
    </div>
}