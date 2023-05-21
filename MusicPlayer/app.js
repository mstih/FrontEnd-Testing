var playButton = document.getElementById('playButton');
var stopButton = document.getElementById('stopButton');
var volumeButton = document.getElementById('volumeButton');




var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'white',
    progressColor: 'rgba(110,255,110,1)',
    barWidth: 3,
    height: 80,
    responsive: true,
    hideScrollbar: true,
    barRadius: 2,
});

wavesurfer.load('Kanye West - All Mine.mp3');
playButton.onclick = function() {
    wavesurfer.playPause();
    if(playButton.src.includes('play.png')){
        playButton.src = 'pause.png';
    } else{
        playButton.src = 'play.png';
    }
};
stopButton.onclick = function() {
    wavesurfer.stop();
    playButton.src = 'play.png';
};
volumeButton.onclick = function() {
    wavesurfer.toggleMute();
    if(volumeButton.src.includes('volume.png')){
        volumeButton.src = 'mute.png';
    }else{
        volumeButton.src = 'volume.png';
    }
};

wavesurfer.on('finish', function () {
    playButton.src = 'play.png';
    wavesurfer.stop();
});