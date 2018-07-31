

/* 
 Author’s name: Kaveri Sonani, 
Student Number: 300985891, 
Last Modified by: July 30, 2018, 
Program description: 2D Scrolling Game,
 
*/



module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionButton: objects.Button;
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

            this._welcomeLabel = new objects.Label("Welcome!", "60px", "Consolas", "#FFFF00", 420, 240, true);
            this._startButton = new objects.Button("StartButton", 520, 360, true);
            this._instructionButton = new objects.Button("NextButton", 300, 360, true);

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
           
            console.log("Started - START SCENE");
            this.addChild(this._ocean);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._instructionButton);

        
            

            

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);

            this._instructionButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INSTRUCTION;
            }, this);
        }
    }
}