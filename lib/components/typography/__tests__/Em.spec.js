var _jsxFileName="src/components/typography/__tests__/Em.spec.js";require("react-native");var _react=require("react");var _react2=_interopRequireDefault(_react);var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);var _Em=require("../Em");var _Em2=_interopRequireDefault(_Em);var _Theme=require("../../Theme");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}it("should render correctly",function(){var component=_reactTestRenderer2.default.create(_react2.default.createElement(_Theme.Provider,{__source:{fileName:_jsxFileName,lineNumber:10}},_react2.default.createElement(_Em2.default,{__source:{fileName:_jsxFileName,lineNumber:11}},"Text")));var tree=component.toJSON();expect(tree).toMatchSnapshot();});