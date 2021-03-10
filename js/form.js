class Form{
    constructor(){
        this.input=createInput('Name');
        this.button=createButton('Play');
        this.greeting=createElement('h3');
        this.reset=createButton('Reset');
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();

    }
    display(){
        var title=createElement('h2');
        title.html('Car Racing Game');
        title.position(displayWidth/2-100,0);
        this.input.position(displayWidth/2-100,displayHeight/2-80);
        this.button.position(displayWidth/2-35,displayHeight/2);
        this.reset.position(displayWidth-100,20);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome "+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            // this.input.show();
            //this.button.show();
            background("white");
            game.start();
        })
    }
}