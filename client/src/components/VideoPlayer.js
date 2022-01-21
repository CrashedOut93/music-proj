import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function VideoPlayer() {
    return ( 
    <>
    <AppBar  position="fixed">
        <Toolbar>
            <Typography variant="h6">Video Player</Typography>
        </Toolbar>
    </AppBar>
    <Toolbar />
    </>
    )
}

export default VideoPlayer;
