"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorld = void 0;
var react_1 = __importStar(require("react"));
/**
 * Main Component
 */
function HelloWorld(props) {
    var _a;
    react_1.useEffect(function () {
        console.log('Incoming message: ', props.message);
    }, [props.message]);
    return react_1.default.createElement("div", null, (_a = props.message) !== null && _a !== void 0 ? _a : 'No Message');
}
exports.HelloWorld = HelloWorld;
//# sourceMappingURL=index.js.map