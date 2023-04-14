const ukuleleAudio = document.getElementById('audio-ukulele');
const loboAudio = document.getElementById('lobo-pede');
const cebolinhaAudio = document.getElementById('cebolinha');


function toggleAudioUkulele(){
    loboAudio.pause();
    cebolinhaAudio.pause();
    ukuleleAudio.play();
}

function toggleLobo(){  
    cebolinhaAudio.pause();
    ukuleleAudio.pause();  
    loboAudio.play();
}

function toggleCebolinha(){
    ukuleleAudio.pause();  
    loboAudio.pause();
    cebolinhaAudio.play();
}

function toggleTextinhoCientifico(){
    document.getElementById('textinho').style.display = 'none';
    document.getElementById('timeline').style.display = 'none';
    document.getElementById('video-dos-gatinhos').style.display = 'none';
    var display = document.getElementById('fragmentacao-do-amor').style.display;
    if (display == 'none') {
        document.getElementById('fragmentacao-do-amor').style.display = 'block';
    } else {
        document.getElementById('fragmentacao-do-amor').style.display = 'none';
        document.getElementById('maps').style.display = 'none';
    }
}

function toggleMaps(){
    var display = document.getElementById('maps').style.display;
    if (display == 'none') {
        document.getElementById('maps').style.display = 'block';
    } else {
        document.getElementById('maps').style.display = 'none';
    }
}



function toggleTextinho() {
    document.getElementById('maps').style.display = 'none';
    document.getElementById('fragmentacao-do-amor').style.display = 'none';
    document.getElementById('timeline').style.display = 'none';
    document.getElementById('video-dos-gatinhos').style.display = 'none';
    var display = document.getElementById('textinho').style.display;
    if (display == 'none') {
        document.getElementById('textinho').style.display = 'block';
    } else {
        document.getElementById('textinho').style.display = 'none';
    }
}

function toggleGatinho(){
    document.getElementById('maps').style.display = 'none';
    document.getElementById('fragmentacao-do-amor').style.display = 'none';
    document.getElementById('timeline').style.display = 'none';
    document.getElementById('textinho').style.display = 'none';
    var display = document.getElementById('video-dos-gatinhos').style.display;
    if (display == 'none') {
        document.getElementById('video-dos-gatinhos').style.display = 'block';
    } else {
        document.getElementById('video-dos-gatinhos').style.display = 'none';
    }
}


function toggleTimeline(){
    document.getElementById('maps').style.display = 'none';
    document.getElementById('fragmentacao-do-amor').style.display = 'none';
    document.getElementById('textinho').style.display = 'none';
    document.getElementById('video-dos-gatinhos').style.display = 'none';
    var display = document.getElementById('timeline').style.display;
    if (display == 'none') {
        document.getElementById('timeline').style.display = 'block';
    } else {
        document.getElementById('timeline').style.display = 'none';
    }
}


