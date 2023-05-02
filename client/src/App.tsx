import './App.css'
import {Navbar} from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom"
import {Main} from "./pages/Main/Main";
import {Tracks} from "./pages/Tracks/Tracks";
import {CreateTracks} from "./pages/CreateTrack/CreateTracks";
import {Track} from "./pages/Track/Track";
import Player from "./components/Player/Player";

function App() {

    return (
        <>
            <Navbar/>
            <div className={'container'}>
                <Routes>
                    <Route path='/'
                           element={<Main/>}/>
                    <Route path='/tracks'
                           element={<Tracks/>}/>
                    <Route path='/tracks/create'
                           element={<CreateTracks/>}/>
                    <Route path='/tracks/:id'
                           element={<Track/>}/>
                </Routes>
            </div>
            <Player/>
        </>
    )
}

export default App
