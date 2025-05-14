System.register("chunks:///_virtual/main",["./Root.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/Root.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,i,o,r,a,l,s,c,u,d,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized,r=e.asyncToGenerator,a=e.regeneratorRuntime},function(e){l=e.cclegacy,s=e._decorator,c=e.EditBox,u=e.Button,d=e.Label,p=e.Component}],execute:function(){var f,h,y,L,g,v,T,b,B;l._RF.push({},"90f7cTgDXBNy4CLPKQ0RIWh","Root",void 0);var I=s.ccclass,A=s.property;e("Root",(f=I("Root"),h=A(c),y=A(u),L=A(d),f((T=t((v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,i(t,"levelEditBox",T,o(t)),i(t,"sendBtn",b,o(t)),i(t,"logLabel",B,o(t)),t.curLevel="",t.TRIBALLY_API="https://api.tribally.games/activity/create",t.TRIBALLY_KEY="efe20782b94493838ad5889d5dcdf919",t.APP_ID="fcaffb66-1ebe-4d97-92d1-f95d93eae7d1",t}n(t,e);var l=t.prototype;return l.start=function(){this.levelEditBox.getComponent(c).node.on(c.EventType.TEXT_CHANGED,this.onTextChange,this),this.sendBtn.node.on("click",this.onSendClick,this)},l.update=function(e){},l.onTextChange=function(e){this.curLevel=e.string},l.onSendClick=function(){console.log("CUR TEDT: ",this.curLevel),this.sendToTribally(Number(this.curLevel))},l.sendToTribally=function(){var e=r(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={activityId:this.APP_ID,gameStartedAt:"2025-05-01T12:00:00Z",players:[{playerId:"zz",isWinner:!0,level:t}]},e.next=3,fetch(this.TRIBALLY_API,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":this.TRIBALLY_KEY},body:JSON.stringify(n)});case 3:e.sent.ok?(console.log("SUCCESS send activity to TRIBALLY"),this.logLabel.string="SUCCESS send activity to TRIBALLY"):(console.log("FAIL to send activity to TRIBALLY"),this.logLabel.string="FAIL to send activity to TRIBALLY");case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t}(p)).prototype,"levelEditBox",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=t(v.prototype,"sendBtn",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=t(v.prototype,"logLabel",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=v))||g));l._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});