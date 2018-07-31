/* 
 Author’s name: Kaveri Sonani, 
Student Number: 300985891, 
Last Modified by: July 30, 2018, 
Program description: 2D Scrolling Game,
 
*/



module objects {
    export class Plane extends objects.GameObject {
        // member variables

        // constructors
        constructor() {
            super("plane");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the right boundary
            if(this.x > (config.Screen.WIDTH - this.halfWidth)) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }

            // check the left boundary
            if(this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
        }

         // public methods
         public Start():void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 430;

            
        }

        public Update():void {
            this.y = managers.Game.Stage.mouseY;
           
            this._checkBounds();
        }

        public Reset():void {

        }
    }
}