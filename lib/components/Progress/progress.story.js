Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="src/components/Progress/progress.story.js";var _storybook=require("../../storybook");var _react=require("react");var _react2=_interopRequireDefault(_react);var _index=require("./index");var _index2=_interopRequireDefault(_index);var _reactNative=require("react-native");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Example=function Example(){var progressStyle={margin:15};return _react2.default.createElement(_reactNative.View,{style:{flex:1,flexDirection:"column"},__source:{fileName:_jsxFileName,lineNumber:11}},_react2.default.createElement(_index2.default,{progress:0.1,style:progressStyle,__source:{fileName:_jsxFileName,lineNumber:12}}),_react2.default.createElement(_index2.default,{progress:0.5,style:progressStyle,__source:{fileName:_jsxFileName,lineNumber:13}}));};(0,_storybook.storiesOf)("Progress",module).add("default",(0,_storybook.withInfo)()(Example));exports.default=Example;module.exports=exports["default"];