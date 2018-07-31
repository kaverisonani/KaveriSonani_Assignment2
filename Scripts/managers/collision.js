/*
 Author’s name: Kaveri Sonani,
Student Number: 300985891,
Last Modified by: July 30, 2018,
Program description: 2D Scrolling Game,
 
*/
var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "island":
                            createjs.Sound.play("yay");
                            managers.Game.scoreBoard.Score += 100;
                            break;
                        case "cloud":
                            createjs.Sound.play("thunder");
                            managers.Game.scoreBoard.Lives -= 1;
                            break;
                        //case "bullet":
                        //createjs.Sound.play("explosion");
                        //managers.Game.scoreBoard.Score += 100;
                        //break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map