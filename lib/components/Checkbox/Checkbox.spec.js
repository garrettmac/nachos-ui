var _jsxFileName="src/components/Checkbox/Checkbox.spec.js";require("react-native");var _react=require("react");var _react2=_interopRequireDefault(_react);var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);var _Checkbox=require("../Checkbox");var _Checkbox2=_interopRequireDefault(_Checkbox);var _Theme=require("../Theme");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}it("should render correctly",function(){var component=_reactTestRenderer2.default.create(_react2.default.createElement(_Theme.Provider,{__source:{fileName:_jsxFileName,lineNumber:10}},_react2.default.createElement(_Checkbox2.default,{checked:true,__source:{fileName:_jsxFileName,lineNumber:11}})));var tree=component.toJSON();expect(tree).toMatchSnapshot();});it("should render disabled",function(){var wrapper=_reactTestRenderer2.default.create(_react2.default.createElement(_Checkbox2.default,{disabled:true,__source:{fileName:_jsxFileName,lineNumber:19}}));var tree=wrapper.toJSON();expect(tree).toMatchSnapshot();});