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
,new ChatLine(0, "test")

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
        new hatsuneMikuFan1997(75, [new ChatLine(0, "See what?"),new ChatLine(1, " <_<"),new ChatLine(2, " >_>")]),
        new uMad(80, [new ChatLine(0, "nvm probably just a glitch or something"),new ChatLine(0, "<img width='200' src ='memes/glitch.jpg'/>")]),
        new iWantToBelieve(85, [new ChatLine(0, "look, i dunno what to tell yall"),new ChatLine(2, "this is what we have"),new ChatLine(3, "maybe it clears up later on"),new ChatLine(5, "IN ANY CASE"),new ChatLine(6, "miku"),new ChatLine(10, "you were saying in the server you had never heard about this creepy pasta?")]),
        new hatsuneMikuFan1997(96, [new ChatLine(0, "Nope!")]),
        new asinineAssasin(97, [new ChatLine(0, "Here we go, again.")]),
        new iWantToBelieve(100, [new ChatLine(0, "SO"),new ChatLine(2, "theres this game"),new ChatLine(3, "Zampanio"),new ChatLine(4, "that PROBABLY doesn't exist"),new ChatLine(6, "lots of impossible stuff is claimed about it")]),
        new hatsuneMikuFan1997(108, [new ChatLine(0, "Like what?")]),
        new iWantToBelieve(113, [new ChatLine(0, "doesn't matter",new ChatLine(2, "whats IMPORTANT is"))]),
        new asinineAssasin(117, [new ChatLine(0, "Oh, no, no, no.",new ChatLine(2, "You tell her about your precious 'rumors'."))]),
        new iWantToBelieve(120, [new ChatLine(0, "a;ksjdf;ajkdf"),new ChatLine(2, "will you all just let me SPEAK?"),new ChatLine(3, "fiiiine"),new ChatLine(4, "weird stuff like it predates PONG"),new ChatLine(8, "and if you try to talk about it either you vanish, or what you said does")]),
        new asinineAssasin(130, [new ChatLine(0, "As you see, strictly credible rumors.")]),
        new hatsuneMikuFan1997(133, [new ChatLine(0, "Scary... @_@")]),
        new uMad(134, [new ChatLine(0, "sus")]),
        new iWantToBelieve(135, [new ChatLine(0, "LIKE i said, not important"),new ChatLine(1, "what IS important"),new ChatLine(3, "is this guy claims he got a copy"),new ChatLine(4, "tho like"),new ChatLine(7, "screenshots of the comments section say he just found some kind of fan work"),new ChatLine(9, "and then the stream gets taken down"),new ChatLine(10, "and no one ever hears from him again")]),
        new hatsuneMikuFan1997(147, [new ChatLine(0, "Parker senpai works fast ^_^")]),
        new uMad(148, [new ChatLine(0, "wut")]),
        new hatsuneMikuFan1997(153, [new ChatLine(0, "Parker-senpai! This streamer guy was REALLY mean to him and we aaaaaallll know what happens to people mean to our Precious Cinnamon Bun~!")]),
        new iWantToBelieve(160, [new ChatLine(0, "right"),new ChatLine(1, "thats part of it"),new ChatLine(2, "theres this entire niche like"),new ChatLine(4, "community of streamers theres weird rumors about"),new ChatLine(7, "sometimes people accuse them of being associated with Zampanio"),new ChatLine(8, "or of like"),new ChatLine(10, "'disappearing' the people who find it?"),new ChatLine(11, "POINT is"),new ChatLine(13, "cuz the guy used his real name"),new ChatLine(15, "after a while of him being afk"),new ChatLine(18, "someone found a newspaper article in their home town about this dude"),new ChatLine(19, "same name"),new ChatLine(21, "who was found with a gunshot wound in his shoulder"),new ChatLine(23, "completely non-responsive"),new ChatLine(25, "with the most terrified look on his face"),new ChatLine(27, "apparently the only thing he says anymore is"),new ChatLine(30, "'zampanio is a really fun game. you should play it'")]),
        new uMad(195, [new ChatLine(0, "there it is again!")]),
        new iWantToBelieve(196, [new ChatLine(0, "mad!"),new ChatLine(1, "can you pay ATTENTION"),new ChatLine(1, "i'm trying to education you heathens")]),
        new asinineAssasin(198, [new ChatLine(0, "No, as much as it pains me to admit it, he's right."),new ChatLine(1, "I saw it too.")]),
        new hatsuneMikuFan1997(201, [new ChatLine(0, "Is that it!?"),new ChatLine(0, "I think I see it too")]),

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


/*
        new iWantToBelieve(0, [new ChatLine(0, "test")]),
        new uMad(0, [new ChatLine(0, "test")]),
        new hatsuneMikuFan1997(0, [new ChatLine(0, "test")]),
        new asinineAssasin(0, [new ChatLine(0, "test")]),
,new ChatLine(0, "test")

*/
