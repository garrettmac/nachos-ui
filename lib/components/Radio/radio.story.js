Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="src/components/Radio/radio.story.js";var _storybook=require("../../storybook");var _react=require("react");var _react2=_interopRequireDefault(_react);var _index=require("./index");var _index2=_interopRequireDefault(_index);var _Switcher=require("../Switcher");var _Switcher2=_interopRequireDefault(_Switcher);var _reactNative=require("react-native");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Example=function Example(){var radioStyle={margin:10};return _react2.default.createElement(_reactNative.View,{style:{flex:1,flexDirection:"column"},__source:{fileName:_jsxFileName,lineNumber:13}},_react2.default.createElement(_Switcher2.default,{defaultSelected:"bus",__source:{fileName:_jsxFileName,lineNumber:14}},_react2.default.createElement(_index2.default,{value:"car",style:radioStyle,__source:{fileName:_jsxFileName,lineNumber:15}}),_react2.default.createElement(_index2.default,{value:"bus",style:radioStyle,__source:{fileName:_jsxFileName,lineNumber:16}})));};(0,_storybook.storiesOf)("Radio",module).add("default",(0,_storybook.withInfo)()(Example));exports.default=Example;module.exports=exports["default"];