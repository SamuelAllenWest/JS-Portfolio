class DrumKit{
    constructor(){
        //Gets all the pads 
        this.pads = document.querySelectorAll('.pad');
        
        //Gets the audio sound
        this.kickAudio=document.querySelector('.kick-sound');
        this.snareAudio=document.querySelector('.snare-sound');
        this.hihatAudio=document.querySelector('.hihat-sound');

        //Gets the select objects
        this.selects = document.querySelectorAll('select');

        //Get Mute Buttons
        this.muteButtons= document.querySelectorAll('.mute');

        //Get Play Button
        this.playButton=document.querySelector('.play');

        //Get Slider 
        this.tempoSlider= document.querySelector('.tempo-slider');


        //Tracks our track 
        this.index=0;

        //Vairable to determine our beats per minute 
        this.bpm=140;

        //Detect if its Playing 
        this.isPlaying = null;
    }
    repeat(){
        //Creating a step variable to go through all the instances; the % is modular; when we reach multiples of 8, it becomes 0
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);

        //Loop over pads 
        activeBars.forEach(bar => {
            bar.style.animation =  `playTrack 0.3s alternate ease-in-out 2`;

            //Check if pad is active 
            if(bar.classList.contains('active')){
                if(bar.classList.contains('kick-pad')){
                    this.kickAudio.currentTime=0;
                    this.kickAudio.play();
                }
                if(bar.classList.contains('snare-pad')){
                    this.snareAudio.currentTime=0;
                    this.snareAudio.play();
                }
                if(bar.classList.contains('hihat-pad')){
                    this.hihatAudio.currentTime=0;
                    this.hihatAudio.play();
                }
            }
        });
        this.index++;
    }
    start(){
        //Set interval to loop over the repeat method multiple times 

        const interval = (60/this.bpm*1000);
        if(!this.isPlaying){
            this.isPlaying= setInterval(() => {
                this.repeat();
            }, interval);
        }
        //setInteveral is in miliseconds; 1000 = 1 s
        //Arrow function keeps outer this; doesn't craete a new one 
        else{
            //Clear the interval
            clearInterval(this.isPlaying);
            this.isPlaying=null;
        }        
    }

    updateButton(){
        if(!this.isPlaying){this.playButton.innerText = "Play";this.playButton.classList.remove('active')}
        else{this.playButton.innerText = "Stop";this.playButton.classList.add('active')}
    }
    activePad(){
        console.log(this);
        this.classList.toggle('active');
    }
    changeSound(event){
        const selectionName = event.target.name;
        const selectionValue = event.target.value;
        switch(selectionName){
            case "kick-select":
                this.kickAudio.src=selectionValue;
                break;
            case "snare-select":
                this.snareAudio.src=selectionValue;
                break;
            case "hihat-select":
                this.hihatAudio.src=selectionValue;
                break;
        }
    }
    mute(event){
        const muteIndex = event.target.getAttribute('data-track');
        event.target.classList.toggle('active');
        if(event.target.classList.contains('active')){
            switch(muteIndex){
                case '0':
                    this.kickAudio.volume=0;
                    break;
                case '1':
                    this.snareAudio.volume=0;
                    break;
                case '2':
                    this.hihatAudio.volume=0;
                    break;
            }
        }
        else{
            switch(muteIndex){
                case '0':
                    this.kickAudio.volume=1;
                    break;
                case '1':
                    this.snareAudio.volume=1;
                    break;
                case '2':
                    this.hihatAudio.volume=1;
                    break;
            }
        }
    }

    changeTempo(event){
        const tempoText= document.querySelector('.tempo-nr');
        
        tempoText.innerText=event.target.value;
    }
    updateTempo(event){
        this.bpm=event.target.value;
        clearInterval(this.isPlaying);
        this.isPlaying=null;

        const playButton=document.querySelector('.play');
        if(playButton.classList.contains('active')){
            this.start();
        }

    }

}

const drumKit= new DrumKit(); 

drumKit.pads.forEach(pad => {
    pad.addEventListener('click', drumKit.activePad) 
    pad.addEventListener('animationend', function(){
        this.style.animation ='';
    })

});

drumKit.playButton.addEventListener('click', ()=>{
    drumKit.start();
    drumKit.updateButton();
});

drumKit.selects.forEach(select =>{
    select.addEventListener('change',function(event){
        drumKit.changeSound(event);
    })
})

drumKit.muteButtons.forEach(button =>{
    button.addEventListener('click', function(event){
        drumKit.mute(event);
    })
})

//Change triggers event on mouse up; input runs in each instance of a change
drumKit.tempoSlider.addEventListener('input', function(event){
    drumKit.changeTempo(event);
})
drumKit.tempoSlider.addEventListener('change', function(event){
    drumKit.updateTempo(event);
})