

/* 
 Author’s name: Kaveri Sonani, 
Student Number: 300985891, 
Last Modified by: July 30, 2018, 
Program description: 2D Scrolling Game,
 
*/




module scenes {
    export class Instruction extends objects.Scene {
        // member variables
        private line1: objects.Label;
        private line2: objects.Label;
        private line3: objects.Label;
        private _startButton: objects.Button;
        private _ocean: objects.Ocean;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._ocean = new objects.Ocean();
            this.line1 = new objects.Label("Don't touch the enemies other wise \n \n your bird life is reduced", "30px", "Consolas", "#FFFF00", 320, 100, true);
            this.line2 = new objects.Label("Move Your Character with Mouse to eat grass \n \n that will improve your score", "30px", "Consolas", "#FFFF00", 380, 200, true);
            this.line3 = new objects.Label("You have 5 Lives", "50px", "Consolas", "#FFFF00", 320, 300, true);
            this._startButton = new objects.Button("StartButton", 320, 400, true);

            this.Main();
        }

        public Update():void {

            this._ocean.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log("Instruction - INST SCENE");
            this.addChild(this._ocean);
            
            this.addChild(this.line1);
            this.addChild(this.line2);
            this.addChild(this.line3);
            this.addChild(this._startButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}