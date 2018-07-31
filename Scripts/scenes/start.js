/*
 Author’s name: Kaveri Sonani,
Student Number: 300985891,
Last Modified by: July 30, 2018,
Program description: 2D Scrolling Game,
 
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._welcomeLabel = new objects.Label("Welcome!", "60px", "Consolas", "#FFFF00", 420, 240, true);
            this._startButton = new objects.Button("StartButton", 520, 360, true);
            this._instructionButton = new objects.Button("NextButton", 300, 360, true);
            this.Main();
        };
        Start.prototype.Update = function () {
            this._ocean.Update();
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("Started - START SCENE");
            this.addChild(this._ocean);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._instructionButton);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._instructionButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.INSTRUCTION;
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map