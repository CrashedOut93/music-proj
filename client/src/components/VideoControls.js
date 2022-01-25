import React, {forwardRef} from 'react';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IconButton from '@material-ui/core/IconButton';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import FullScreenIcon from '@mui/icons-material/Fullscreen';
import Popover from '@mui/material/Popover';
import{ useState }from "react";
import  VolumeOff from  '@mui/icons-material/VolumeOff'

const useStyles = makeStyles({
    controlsWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 1,
    },
    controlIcons: {
        color: "#ffd500",
        fontSize: 50,
        transform: "scale(0.9)",
        "&:hover" : {
            color: "fff",
            transform: "scale(1)",
        },
    },
    bottomIcons: {
        color: "#999",
        "&:hover": {
            color: "#fff",
        },
    },
    volumeSlider: {
        width: 100,
    },
});

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
    </Tooltip>
    );
}

const PrettoSlider = styled(Slider)({
    color: '#ffd500',
    height: 8,
    '& .MuiSlider-track': {
    border: 'none',
    },
    '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
    },
    '&:before': {
        display: 'none',
    },
    },
    '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
      '& > *': {
        transform: 'rotate(45deg)',
    },
    },
});

export default forwardRef(({ 
                        onPlayPause, 
                        playing, 
                        onRewind, 
                        onFastForward, 
                        muted, 
                        onMute, 
                        onVolumeChange, 
                        onVolumeSeekUp, 
                        volume,
                        onPlaybackRateChange,
                        playbackRate,
                        played,
                        onSeek,
                        onSeekMouseDown,
                        onSeekMouseUp,
                        elapsedTime,
                        totalDuration,
                        onChangeDisplayFormat,
                        onBookmark,
                        onToggleFullScreen
                        },ref) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
};

    const handleClose = () => {
    setAnchorEl(null);
};

    const open = Boolean(anchorEl);
    const id = open ? 'playbackkrate-popover' : undefined;
    return ( 
    <>

        <div className={classes.controlsWrapper} ref={ref}>
            {/*Top controls*/}
            <Grid 
                container direction="row" 
                alignItems="center" 
                justify="space-between" 
                style={{padding:16}}>
                <Grid item>
                    <Typography variant="h5" style={{color: '#ffd500'}}>Y-Chibi, 2 Many Times</Typography>
                </Grid>

                <Grid item>
                <Button
                    onClick={onBookmark}
                    variant="contained"
                    color="primary"
                    startIcon={<BookmarkIcon />}
                >
                Bookmark
                </Button>
                </Grid>
            </Grid>

            { /*middle controls*/ }
                <Grid container direction="row" alignItems="center" justify="center">

                    <IconButton onClick={onRewind} className={classes.controlIcons} aria-label='reqind'>
                        <FastRewindIcon fontSize="inherit" />
                    </IconButton>

                    <IconButton 
                        onClick={onPlayPause}
                        className={classes.controlIcons} aria-label='reqind'>
                        {playing ?  
                            (<PauseIcon fontSize="inherit" />) 
                            : 
                            (<PlayArrowIcon fontSize="inherit" />)}
                    </IconButton>

                    <IconButton onClick={onFastForward} className={classes.controlIcons} aria-label='reqind'>
                        <FastForwardIcon fontSize="inherit" />
                    </IconButton>

                </Grid>

            { /*bottom controls*/ }
            <Grid 
                container direction="row" 
                justify="space-between" 
                alignItems="center" 
                style={{ paddng: 16 }}
                >
            

            <Grid item xs={12}>
                <PrettoSlider
                    min={0}
                    max={100}
                    value={played * 100}
                    ValueLabelComponent={(props) => (
                        <ValueLabelComponent {...props} value={elapsedTime} />)}
                    onChange={onSeek}
                    onMouseDown={onSeekMouseDown}
                    onChangeCommitted={onSeekMouseUp}


                />
            </Grid>

                <Grid item>
                    <Grid container alignItems="center" direction="row">
                    
                        <IconButton 
                            onClick={onPlayPause}
                            className={classes.bottomIcons}>
                            {playing ?  
                        (<PauseIcon fontSize="large" />) 
                        : 
                        (<PlayArrowIcon fontSize="large" />)}
                        </IconButton>

                        <IconButton onClick={onMute} className={classes.bottomIcons}>
                        {muted ? 
                        (<VolumeOff fontSize="large" />)
                        :
                        (<VolumeUpIcon fontSize="large" />)}
                        </IconButton>

                        <Button onClick={onChangeDisplayFormat}
                            variant="text"
                            style={{ color: "#fff", marginLeft: 16 }}
                        >
                        <Typography>{elapsedTime}/{totalDuration}</Typography>
                        </Button>
                        
                        <div className={classes.volumeSlider} style={{ marginLeft: 8 }}>
                        <Slider
                        min={0}
                        max={100}
                        value={volume * 100}                       
                        style={{ color: "#ffd500" }}
                        onChange={onVolumeChange}
                        onChangeCommitted={onVolumeSeekUp}
                        />
                        </div>                        
                    </Grid>                    
                </Grid>   
                        <Grid item>
                            <Button 
                                variant="text" 
                                className={classes.bottomIcons}
                                onClick={handlePopover}
                            >
                                <Typography>{playbackRate}X</Typography>
                            </Button>

                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            transformOrigin={{ 
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            >
                                <Grid container direction="column-reverse">
                                {[0.5,1,1.5,2].map(rate=>(<Button onClick={() =>onPlaybackRateChange(rate)} variant="text">
                                    <Typography color={rate === playbackRate ? "secondary" : "default"} >{rate}</Typography>
                                </Button>))}
                                </Grid>
                            </Popover>

                            <IconButton onClick={onToggleFullScreen} className={classes.bottomIcons}>
                                <FullScreenIcon fontSize="large" />
                            </IconButton>
                        </Grid>            
            </Grid>
        </div>
    </>
    );
})

