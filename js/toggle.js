function toggleAudio(el){
    const audio = document.getElementById(el);
    audio.play();
}

function toggleUkuleleImg() {
    document.getElementById('video-dos-gatinhos').style.display = 'none';
    document.getElementById('textinho').style.display = 'none';
    var display = document.getElementById('ukulele').style.display;
    if (display == 'none') {
        document.getElementById('audio-ukulele').style.display = 'none';
        document.getElementById('ukulele').style.display = 'block';
    } else {
        document.getElementById('audio-ukulele').style.display = 'none';
        document.getElementById('ukulele').style.display = 'none';
    }
}

function toggleUkulele() {
    var display = document.getElementById('audio-ukulele').style.display;
    if (display == 'none') {
        document.getElementById('audio-ukulele').style.display = 'block';
    } else {
        document.getElementById('audio-ukulele').style.display = 'none';
    }
}

function toggleTextinho() {
    document.getElementById('video-dos-gatinhos').style.display = 'none';
    document.getElementById('audio-ukulele').style.display = 'none';
    document.getElementById('ukulele').style.display = 'none';
    var display = document.getElementById('textinho').style.display;
    if (display == 'none') {
        document.getElementById('textinho').style.display = 'block';
    } else {
        document.getElementById('textinho').style.display = 'none';
    }
}

function toggleGatinho(){
    document.getElementById('textinho').style.display = 'none';
    document.getElementById('audio-ukulele').style.display = 'none';
    document.getElementById('ukulele').style.display = 'none';
    var display = document.getElementById('video-dos-gatinhos').style.display;
    if (display == 'none') {
        document.getElementById('video-dos-gatinhos').style.display = 'block';
    } else {
        document.getElementById('video-dos-gatinhos').style.display = 'none';
    }
}



function toggleDreamgirl(el) {
    document.getElementById('secret').style.display = 'none';
    document.getElementById('timeline-post').style.display = 'none';
    document.getElementById('congratulations-post').style.display = 'none';
    var display = document.getElementById(el).style.display;
    if (display == 'none') {
        document.getElementById('fake-template').style.display = 'none';
        document.getElementById(el).style.display = 'block';
    } else {
        document.getElementById(el).style.display = 'none';
        document.getElementById('fake-template').style.display = 'block';
    }
}

function toggleTimeline(el) {
    document.getElementById('dreamgirl-post').style.display = 'none';
    document.getElementById('congratulations-post').style.display = 'none';
    var display = document.getElementById(el).style.display;
    if (display == 'none') {
        document.getElementById('fake-template').style.display = 'none';
        document.getElementById(el).style.display = 'block';
    } else {
        document.getElementById(el).style.display = 'none';
    }
}

function toggleSecret(el) {
    document.getElementById('dreamgirl-post').style.display = 'none';
    document.getElementById('congratulations-post').style.display = 'none';
    var display = document.getElementById(el).style.display;
    if (display == 'none') {
        document.getElementById('fake-template').style.display = 'none';
        document.getElementById(el).style.display = 'block';
    } else {
        document.getElementById(el).style.display = 'none';
        document.getElementById('timeline-post').style.display = 'none';
        document.getElementById('fake-template').style.display = 'block';
    }
}



