var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'white',
    progressColor: '#3F84DA',
    barWidth: 3,
    barRadius:3,
    barGap:2,
    height:90,
    responsive:true,
    hideScrollbar:true,
});


let songs = [
        {
        songName: 'Cheap Thrills',
        artistName: 'Sia',
        songUrl: 'media/songs/cheap.mp3',
        imgUrl:'media/covers/cheap.jpg'
        },
        {
        songName: 'Filhaal',
        artistName: 'Akshay Kumar',
        songUrl: 'media/songs/filhaal.mp3',
        imgUrl:'media/covers/filhaal.jpg'
        },
        {
        songName: 'Saiyaan ji',
        artistName: 'Honey Singh',
        songUrl: 'media/songs/saiyaan.mp3',
        imgUrl:'media/covers/saiyaan.jpg'
        },
        {
        songName: 'Vaaste',
        artistName: 'Dhvani',
        songUrl: 'media/songs/vaaste.mp3',
        imgUrl:'media/covers/vaaste.jpg'
        }
]




var playBtn = document.querySelector("#play");
var muteBtn = document.querySelector("#mute");
var nextBtn = document.querySelector("#next");
var prevBtn = document.querySelector("#prev");
var bgVideo = document.querySelector("#bgvideo");



var songName = document.querySelector("#song");
var artistName = document.querySelector("#artist");
var cover = document.querySelector("#cover");


playBtn.onclick = function() {
    wavesurfer.playPause();
    if (bgVideo.paused) 
    bgVideo.play(); 
    else 
    bgVideo.pause();
    if(playBtn.src.includes("play.png")){
        playBtn.src="media/pause.png";
    }else{
        playBtn.src="media/play.png";
    }

}

muteBtn.onclick = function() {
    wavesurfer.toggleMute()
    if(mute.src.includes("volume.png")){
        muteBtn.src="media/mute.png";
    }else{
        muteBtn.src="media/volume.png";
    }
}

wavesurfer.on('finish', nextSong)

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        wavesurfer.playPause()
    if(playBtn.src.includes("play.png")){
        playBtn.src="media/pause.png";
    }else{
        playBtn.src="media/play.png";
    }
    }
    if(e.keyCode == 77){
        wavesurfer.toggleMute()
    if(mute.src.includes("volume.png")){
        muteBtn.src="media/mute.png";
    }else{
        muteBtn.src="media/volume.png";
    }
    }
    if(e.keyCode == 39){
        nextSong();
    }
    if(e.keyCode == 37){
        prevSong();
    }
}

let i = 0;

wavesurfer.load(songs[i].songUrl);


nextBtn.addEventListener('click', nextSong)
prevBtn.addEventListener('click', prevSong)


function nextSong(){

    if(i < songs.length - 1 ){
		i++;
		wavesurfer.load(songs[i].songUrl);
        if(playBtn.src.includes("pause.png")){
            setTimeout(() =>{
                wavesurfer.play()
                },3000)
        }
        songName.innerText=songs[i].songName;
        artistName.innerText=songs[i].artistName;
        artistName.innerText=songs[i].artistName;
        cover.src=songs[i].imgUrl;
		
	}else{
        i = 0;
		index_no = 0;
		wavesurfer.load(songs[i].songUrl);
        if(playBtn.src.includes("pause.png")){
            setTimeout(() =>{
                wavesurfer.play()
                },3000)
        }
        songName.innerText=songs[i].songName;
        artistName.innerText=songs[i].artistName;
        cover.src=songs[i].imgUrl;
	}
}
function prevSong(){

    if(i > 0 ){
		i--;
		wavesurfer.load(songs[i].songUrl);
        if(playBtn.src.includes("pause.png")){
            setTimeout(() =>{
                wavesurfer.play()
                },2000)
        }
        songName.innerText=songs[i].songName;
        artistName.innerText=songs[i].artistName;
        cover.src=songs[i].imgUrl;
		
	}else{
		i =songs.length -1;
		wavesurfer.load(songs[i].songUrl);
        if(playBtn.src.includes("pause.png")){
            setTimeout(() =>{
                wavesurfer.play()
                },2000)
        }
        songName.innerText=songs[i].songName;
        artistName.innerText=songs[i].artistName;
        cover.src=songs[i].imgUrl;
	}
}
