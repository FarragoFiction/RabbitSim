//TODO: make sure all assets are kept locally so when i upload it still works

/*

people are watching a "lets play" of zampanio. 

every ten seconds theres a flash of something wrong.

they're discussing the 'rumors' about what happens to people who play zampanio. joking that its okay, they're only WATCHING someone play it.

actually did you here that they found the streamers comatose body in an alleyway somewhere?

in the console, truth is crooning to you. come. join.

dig a little deeper. what could it hurt?

*/

window.onload = ()=>{
    startSimulation();
}

const startSimulation = ()=>{
    const video = document.querySelector('#player');
    video.onplay = ()=>{
        window.alert("playing");
    }
}


const story = [
    new Rando1(5,[new ChatLine(0,"first guy says something at time code 5"), new ChatLine(10, "testing ten seconds later, this might overlap, not sure how to handle")]),
    new Rando2(15,[new ChatLine(0,"second guy speaks up after 10 seconds"), new ChatLine(10, "testing ten seconds later")]),

]



class ChatLine{
    content = "";
    offset = 0;//offset from when the first one goes.
    constructor(offset,content){
        this.offset = offset;
        this.content = content;
    }
}

class ChatItem{
    icon_src;
    name;
    targetTimecode; //NOT display time code. display time code is when it actually went on screen, local time
    displayTimecode;
    lines = []; //chat lines
    constructor(name, icon_src, targetTimecode, lines){
        this.name = name;
        this.icon_src = icon_src;
        this.targetTimecode = targetTimecode;
        this.lines = lines;
    }
}

class Rando1 extends ChatItem{
    constructor( targetTimecode, lines){
        super("Rando1", "http://farragofiction.com/TwoGayJokes/Stories/MurderGameIcons/k.png", targetTimecode, lines);
    }
}

class Rando2 extends ChatItem{
    constructor( targetTimecode, lines){
        super("Rando2", "http://farragofiction.com/TwoGayJokes/Stories/MurderGameIcons/theshot.pngg", targetTimecode, lines);
    }
}