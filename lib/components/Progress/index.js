Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="src/components/Progress/index.js";var _react=require("react");var _react2=_interopRequireDefault(_react);var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require("react-native");var _Theme=require("../Theme");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Progress=function Progress(props){var theme=props.theme,progress=props.progress,style=props.style,color=props.color,width=props.width,height=props.height;var outerStyle={borderRadius:height/2,width:width,height:height};var innerStyle={height:height,width:width*progress,borderRadius:height/2};if(color)innerStyle.backgroundColor=color;return _react2.default.createElement(_reactNative.View,{style:[theme.outerStyle,outerStyle,style],__source:{fileName:_jsxFileName,lineNumber:23}},_react2.default.createElement(_reactNative.View,{style:[theme.innerStyle,innerStyle],__source:{fileName:_jsxFileName,lineNumber:24}}));};Progress.themeConfig={props:{},style:{outerStyle:{backgroundColor:"@disabledColor",overflow:"hidden"},innerStyle:{backgroundColor:"@primaryColor"}}};Progress.propTypes={progress:_propTypes2.default.number.isRequired,style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array]),width:_propTypes2.default.number,height:_propTypes2.default.number,color:_propTypes2.default.string,theme:_propTypes2.default.object};Progress.defaultProps={width:300,height:6,progress:0};exports.default=(0,_Theme.withTheme)("Progress",Progress);module.exports=exports["default"];