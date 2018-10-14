Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/components/Input/index.js";var _react=require("react");var _react2=_interopRequireDefault(_react);var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require("react-native");var _Icon=require("../Icon");var _Icon2=_interopRequireDefault(_Icon);var _Theme=require("../Theme");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}var Input=function Input(props){var theme=props.theme,width=props.width,status=props.status,style=props.style,disabled=props.disabled,icon=props.icon,iconSize=props.iconSize;var _StyleSheet$flatten=_reactNative.StyleSheet.flatten(theme[status]),statusColor=_StyleSheet$flatten.color,statusTheme=_objectWithoutProperties(_StyleSheet$flatten,["color"]);var IconComponent=void 0;if(icon){IconComponent=_react2.default.createElement(_Icon2.default,{name:icon||iconStates[status],size:iconSize,color:statusColor,style:[theme.icon],__source:{fileName:_jsxFileName,lineNumber:17}});}var rest=_objectWithoutProperties(props,[]);delete rest.editable;delete rest.inputStyle;delete rest.style;delete rest.disabled;delete rest.status;delete rest.icon;delete rest.height;delete rest.width;delete rest.iconSize;delete rest.iconStates;return _react2.default.createElement(_reactNative.View,{style:[theme.base,statusTheme,style,{width:width},disabled?theme.disabled:{}],__source:{fileName:_jsxFileName,lineNumber:41}},_react2.default.createElement(_reactNative.TextInput,_extends({},rest,{editable:!disabled,style:[theme.base,theme.input,props.inputStyle,{width:width}],__source:{fileName:_jsxFileName,lineNumber:50}})),IconComponent);};Input.themeConfig={props:{},style:{base:{alignSelf:"stretch",borderWidth:1,height:46},normal:{backgroundColor:"#fff",borderColor:"#bdc1cc",borderStyle:"solid",color:"#bdc1cc"},disabled:{opacity:0.2},valid:{borderColor:"#66bd2b",borderStyle:"solid",color:"#66bd2b"},error:{borderColor:"#e03126",borderStyle:"solid",color:"#e03126"},warn:{borderColor:"#ff8c2f",borderStyle:"solid",color:"#ff8c2f"},input:{borderColor:"transparent",paddingLeft:12,paddingRight:6},icon:{top:12,right:12,position:"absolute",backgroundColor:"transparent"}}};Input.propTypes={value:_propTypes2.default.string,disabled:_propTypes2.default.bool,status:_propTypes2.default.oneOf(["normal","valid","error","warn"]),width:_propTypes2.default.number,height:_propTypes2.default.number,style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array]),inputStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array]),icon:_propTypes2.default.string,theme:_propTypes2.default.object};Input.defaultProps={iconSize:20,iconStates:{valid:"md-checkmark",warn:"md-alert",error:"md-close"},value:"",disabled:false,status:"normal"};exports.default=(0,_Theme.withTheme)("Input",Input);module.exports=exports["default"];