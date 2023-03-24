"use strict";
const shirorkhat = () => Math.random() > 0.5 ? 'shir' : "khat";
var Arrow;
(function (Arrow) {
    Arrow[Arrow["Up"] = 0] = "Up";
    Arrow[Arrow["Down"] = 1] = "Down";
    Arrow[Arrow["Right"] = 2] = "Right";
    Arrow[Arrow["Left"] = 3] = "Left";
})(Arrow || (Arrow = {}));
;
function Direction(dir) {
    return dir;
}
Direction(Arrow.Right);
//# sourceMappingURL=litteralTypeandenum.js.map