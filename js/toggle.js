function toggleAudio(el){
    const audio = document.getElementById(el);
    audio.play();
}

function toggleUkulele(){
    var display = document.getElementById('secret-audio').style.display;
    if(display == 'none'){
        document.getElementById('secret-audio').style.display = 'block';
    }else {
        document.getElementById('secret-audio').style.display = 'none';
    }
}


function toggleCongratulations(el){
    document.getElementById('secret').style.display = 'none';
    document.getElementById('timeline-post').style.display = 'none';
    document.getElementById('dreamgirl-post').style.display = 'none';
    var display = document.getElementById(el).style.display;
    if(display == 'none'){
        document.getElementById('fake-template').style.display = 'none';
        document.getElementById(el).style.display = 'block';
    }else {
        document.getElementById(el).style.display = 'none';
        document.getElementById('fake-template').style.display = 'block';
    }
}

function toggleDreamgirl(el){
    document.getElementById('secret').style.display = 'none';
    document.getElementById('timeline-post').style.display = 'none';
    document.getElementById('congratulations-post').style.display = 'none';
    var display = document.getElementById(el).style.display;
    if(display == 'none'){
        document.getElementById('fake-template').style.display = 'none';
        document.getElementById(el).style.display = 'block';
    }else {
        document.getElementById(el).style.display = 'none';
        document.getElementById('fake-template').style.display = 'block';
    }
}

function toggleTimeline(el){
    document.getElementById('dreamgirl-post').style.display = 'none';
    document.getElementById('congratulations-post').style.display = 'none';
    var display = document.getElementById(el).style.display;
    if(display == 'none'){
        document.getElementById('fake-template').style.display = 'none';
        document.getElementById(el).style.display = 'block';
    }else {
        document.getElementById(el).style.display = 'none';
    }
}

function toggleSecret(el){
    document.getElementById('dreamgirl-post').style.display = 'none';
    document.getElementById('congratulations-post').style.display = 'none';
    var display = document.getElementById(el).style.display;
    if(display == 'none'){
        document.getElementById('fake-template').style.display = 'none';
        document.getElementById(el).style.display = 'block';
    }else {
        document.getElementById(el).style.display = 'none';
        document.getElementById('timeline-post').style.display = 'none';
        document.getElementById('fake-template').style.display = 'block';
    }
}



