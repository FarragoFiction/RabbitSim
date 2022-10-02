//TODO: make sure all assets are kept locally so when i upload it still works

//your soul will build your body into a home.
/*

people are watching a "lets play" of zampanio. 

every ten seconds theres a flash of an ai melted "BE KIND: REWIND"

they're discussing the 'rumors' about what happens to people who play zampanio. joking that its okay, they're only WATCHING someone play it.

actually did you here that they found the streamers comatose body in an alleyway somewhere?

in the console, truth is crooning to you. come. join.

dig a little deeper. what could it hurt?

if you rewind, the chat rewinds as well. they notice. you've caught them in a loop. if the video itself loops, too.

*/



/*
    multiple ways we could do this. the easiest is "when your time code hits, add yourself with a lil sound";

    but one thing that could be interesting is 'if the video is rewound, so too is time'. (could play with that)
*/
//yes yes, i'm bad for using global variables, so sue me, i'm going fast

/*
        new iWantToBelieve(0, [new ChatLine(0, "test")]),
        new uMad(0, [new ChatLine(0, "test")]),
        new hatsuneMikuFan1997(0, [new ChatLine(0, "test")]),
        new asinineAssasin(0, [new ChatLine(0, "test")]),


*/

const stories = [
    {video_src: "Films/LudumDareNorth.mp4",chat: [
        new iWantToBelieve(0, [new ChatLine(0, "ok ok ok"),new ChatLine(1, "SO")]),
        new uMad(3, [new ChatLine(0, "omg how is teh quality this shitty"),new ChatLine(2, "what even is this audio lulz")]),
        new iWantToBelieve(10, [new ChatLine(0, "would you let me FINISH"),new ChatLine(2, "SO"),new ChatLine(4, "this is the only copy i could find of the stream")]),
        new hatsuneMikuFan1997(20, [new ChatLine(0, "Man when Parker-senpai snipes someone he really goes hard, huh?")]),
        new asinineAssasin(30, [new ChatLine(0, "Could we *please* not talk about two conspiracy theories at once? I have a big enough headache as it is...        ")]),
        new hatsuneMikuFan1997(33, [new ChatLine(0, "Sorry -_-;;")]),
        new iWantToBelieve(40, [new ChatLine(0, "THANK you AA"),new ChatLine(1, "AS I WAS SAYING"),new ChatLine(4, "the original stream got taken down"),new ChatLine(10, "and we should be GRATEFUL that some rando had a screen capture archived")]),
        new asinineAssasin(55, [new ChatLine(0, "Not to rain on your parade, but without audio...and without a good enough resolution to actually read anything... "),new ChatLine(5, "I'm not sure, exactly, what you're hoping to prove to us?")]),
        new uMad(72, [new ChatLine(0, "uh did anyone else see that?")]),
        new hatsuneMikuFan1997(75, [new ChatLine(0, "See what?"),new ChatLine(0, " <_<"),new ChatLine(0, " >_>")]),
        new uMad(80, [new ChatLine(0, "nvm probably just a glitch or something"),new ChatLine(0, "<img width='200' src ='memes/glitch.jpg'/>")]),


    ]},
    {video_src: "Films/LudumDareNorth.mp4",chat: [
        new Rando1(0, [new ChatLine(0, "first guy says something almost immediately"), new ChatLine(1, "testing 1 seconds later, this might overlap, not sure how to handle"), new ChatLine(6, "testing 6 seconds later, this might overlap, not sure how to handle")]),
        new Rando1(5, [new ChatLine(0, "first guy says something at time code 5"), new ChatLine(1, "testing 1 seconds later, this might overlap, not sure how to handle")]),
        new Rando2(15, [new ChatLine(0, "second guy speaks up after 10 seconds"), new ChatLine(1, "testing 1 seconds later")]),
        new Rando1(17, [new ChatLine(0, "first guy responds almost immediately"), new ChatLine(10, "testing ten seconds later")]),
        new Rando2(20, [new ChatLine(0, "second guy responds quickly too"), new ChatLine(1, "testing 1 seconds later")]),
        new Rando1(65, [new ChatLine(0, "first guy is quiet for a while, then says something"), new ChatLine(10, "testing ten seconds later")]),

    ]},
    {video_src: "http://farragofiction.com/ZampanioHotlink/Films/thirdEast.mp4",chat:[
        new Rando1(5, [new ChatLine(0, "wait, isn't this different?")]),
        new Rando2(15, [new ChatLine(0, "no i think it was always like this")]),
    ]}
]
