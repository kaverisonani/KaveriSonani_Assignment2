/* 
 Author’s name: Kaveri Sonani, 
Student Number: 300985891, 
Last Modified by: July 30, 2018, 
Program description: 2D Scrolling Game,
 
*/



module managers {
    export class Game {
        public static AssetManager:createjs.LoadQueue;
        public static CurrentScene:objects.Scene;
        public static CurrentState:config.Scene;
        public static Stage:createjs.Stage;
        public static scoreBoard: managers.ScoreBoard;
    }
}