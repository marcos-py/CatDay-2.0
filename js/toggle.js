function toggleAudio(el){
    const audio = document.getElementById(el);
    audio.play();
}

function toggleTextinho() {
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
    document.getElementById('textinho').style.display = 'none';
    document.getElementById('video-dos-gatinhos').style.display = 'none';
    var display = document.getElementById('timeline').style.display;
    if (display == 'none') {
        document.getElementById('timeline').style.display = 'block';
    } else {
        document.getElementById('timeline').style.display = 'none';
    }
}


