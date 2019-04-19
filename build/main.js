"use strict";var _regenerator=require("babel-runtime/regenerator"),_regenerator2=_interopRequireDefault(_regenerator),_promise=require("babel-runtime/core-js/promise"),_promise2=_interopRequireDefault(_promise),_asyncToGenerator2=require("babel-runtime/helpers/asyncToGenerator"),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_assign=require("babel-runtime/core-js/object/assign"),_assign2=_interopRequireDefault(_assign),exec=function(){var r=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function e(r){var a=1<arguments.length&&void 0!==arguments[1]&&arguments[1];return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this instanceof mysql&&(r=this.sqlObj.sqlStr,this.sqlObj={}),e.abrupt("return",new _promise2.default(function(n,o){if(!connection)return o("Please initialize mysql first."),!1;connection.query(r,function(e,r,t){e?o(e):n(r),ispool||a||connection.end()})}));case 2:case"end":return e.stop()}},e,this)}));return function(e){return r.apply(this,arguments)}}(),transaction=function(){var e=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function e(){var s=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new _promise2.default(function(){var t=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function e(r,t){var n,o,a,i;return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(connection){e.next=3;break}return t("Please initialize mysql first."),e.abrupt("return",!1);case 3:if(s&&s.length){e.next=6;break}return t("The parameter is empty."),e.abrupt("return",!1);case 6:return e.next=8,exec("start transaction;",!0);case 8:n=[],o=0,a=s.length;case 10:if(o<a)return e.prev=11,e.next=14,exec(s[o],!0);e.next=28;break;case 14:i=e.sent,n.push(i),e.next=25;break;case 18:return e.prev=18,e.t0=e.catch(11),e.next=22,exec("rollback;",!0);case 22:return ispool||connection.end(),t(e.t0),e.abrupt("return");case 25:o++,e.next=10;break;case 28:if(n.length==s.length)return e.next=31,exec("commit;",!0);e.next=35;break;case 31:ispool||connection.end(),r(n),e.next=39;break;case 35:return e.next=37,exec("rollback;",!0);case 37:ispool||connection.end(),t(n);case 39:case"end":return e.stop()}},e,this,[[11,18]])}));return function(e,r){return t.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),_common=require("./common"),common=_interopRequireWildcard(_common),_curd=require("./curd"),curd=_interopRequireWildcard(_curd);function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var connection=null,ispool=!0,sqljson=(0,_assign2.default)({},common,curd);function mysql(){this.sqlObj={},this.istransaction=!1}for(var key in sqljson)mysql.prototype[key]=sqljson[key];function init(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=require("mysql2");ispool="boolean"!=typeof e.ispool||e.ispool,connection=ispool?r.createPool({host:e.host||"127.0.0.1",user:e.user||"root",password:e.password||"root",database:e.database||"test",port:e.port||3306,waitForConnections:e.waitConnection||!0,connectionLimit:e.connectionLimit||10,queueLimit:e.queueLimit||0}):mysql.createConnection({host:e.host||"127.0.0.1",user:e.user||"root",password:e.password||"root",database:e.database||"test",port:e.port||3306})}mysql.prototype.exec=exec,module.exports={init:init,exec:exec,transaction:transaction,sql:new mysql};