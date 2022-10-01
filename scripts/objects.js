

class ChatLine{
    content = "";
    offset = 0;//offset from when you were asked to render.
    constructor(offset,content){
        this.offset = offset;
        this.content = content;
    }

    //TODO only render self after x seconds have gone by since you were asked
    renderSelf = (target)=>{
        const p = createElementWithParentAndClass("p",target);
        p.innerHTML = this.content;
    }


}

class ChatItem{
    icon_src;
    name;
    isMe = false;
    targetTimecode; //NOT display time code. display time code is when it actually went on screen, local time
    displayTimecode;
    lines = []; //chat lines
    constructor(name, icon_src, targetTimecode, lines){
        this.name = name;
        this.icon_src = icon_src;
        this.targetTimecode = targetTimecode;
        this.lines = lines;
    }

    renderSelf = (target)=>{
        /*
        <div class="your chat">
          <img class="circle chat-icon"
            src="http://farragofiction.com/TwoGayJokes/Stories/MurderGameIcons/theend.png" />
          <div class="chat-header">

            <div class="name">theEnd</div>
            <div class="timestamp">12:03 am</div>
          </div>
          <div class="chat-content">

            <p>...</p>
            <p>:(</p>
          </div>
        </div>
        */
       const container = createElementWithParentAndClass("div",target, `${this.isMe? "my":"your"} chat`);
       const img = createElementWithParentAndClass("img",container, "circle chat-icon");
       img.src = this.icon_src;
       const header = createElementWithParentAndClass("div",container, "chat-header");
       const name = createElementWithParentAndClass("div",header, "name");
       name.innerHTML = this.name;
       const timestamp = createElementWithParentAndClass("div",header, "timestamp");
       timestamp.innerHTML = ` ${new Date().toLocaleTimeString()}`;

       const content = createElementWithParentAndClass("div",container, "chat-content");
       for (let line of this.lines){
        line.renderSelf(content);
       }

    }


}

class Rando1 extends ChatItem{
    isMe = true;
    constructor( targetTimecode, lines){
        super("Rando1", "http://farragofiction.com/TwoGayJokes/Stories/MurderGameIcons/k.png", targetTimecode, lines);
    }
}

class Rando2 extends ChatItem{
    constructor( targetTimecode, lines){
        super("Rando2", "http://farragofiction.com/TwoGayJokes/Stories/MurderGameIcons/theshot.png", targetTimecode, lines);
    }
}

const createElementWithClass = (eleName, className) => {
    const ele = document.createElement(eleName);
    if (className) {
        ele.className = className;
    }
    return ele;
}

const createElementWithParentAndClass = (eleName, parent, className) => {
    const ele = createElementWithClass(eleName, className);
    parent.append(ele);
    return ele;
}

