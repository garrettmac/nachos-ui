Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="src/components/Gravatar/gravatar.story.js";var _storybook=require("../../storybook");var _react=require("react");var _react2=_interopRequireDefault(_react);var _index=require("./index");var _index2=_interopRequireDefault(_index);var _reactNative=require("react-native");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Example=function Example(){var gravatarStyle={margin:15};return _react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:12}},_react2.default.createElement(_index2.default,{email:"blah@blah.com",style:gravatarStyle,__source:{fileName:_jsxFileName,lineNumber:13}}),_react2.default.createElement(_index2.default,{email:"blahblah@blah.com",size:150,rating:"pg","default":"retro",style:gravatarStyle,__source:{fileName:_jsxFileName,lineNumber:14}}),_react2.default.createElement(_index2.default,{md5:"313cbdb52db5b6bb6b3f14bc4ddae461",size:100,circle:true,style:gravatarStyle,__source:{fileName:_jsxFileName,lineNumber:21}}));};(0,_storybook.storiesOf)("Gravatar",module).add("default",(0,_storybook.withInfo)()(Example));exports.default=Example;module.exports=exports["default"];