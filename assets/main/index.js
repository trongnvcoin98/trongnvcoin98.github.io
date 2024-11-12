System.register("chunks:///_virtual/APIHandler.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b70cbqzva9DQIVa/fc77ZRD", "APIHandler", undefined);
      //SHOULD: contain function for HTTP API requests, such as fetching or updating player info, it should contain core API calls.

      var APIHandler = exports('APIHandler', /*#__PURE__*/function () {
        function APIHandler() {}
        APIHandler.instance = function instance() {
          if (!APIHandler._instance) {
            APIHandler._instance = new APIHandler();
          }
          return APIHandler._instance;
        };
        var _proto = APIHandler.prototype;
        _proto.get = /*#__PURE__*/function () {
          var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
            var response;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return fetch(url, {
                    method: 'GET',
                    mode: 'no-cors',
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });
                case 3:
                  response = _context.sent;
                  if (!(response.status == 200)) {
                    _context.next = 8;
                    break;
                  }
                  return _context.abrupt("return", response);
                case 8:
                  console.log("GET fail will status: ", response.status);
                  return _context.abrupt("return", null);
                case 10:
                  _context.next = 16;
                  break;
                case 12:
                  _context.prev = 12;
                  _context.t0 = _context["catch"](0);
                  console.log("Error GET data: ", _context.t0);
                  return _context.abrupt("return", null);
                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[0, 12]]);
          }));
          function get(_x) {
            return _get.apply(this, arguments);
          }
          return get;
        }();
        _proto.post = /*#__PURE__*/function () {
          var _post = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data, url) {
            var response, dataRes;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return fetch(url, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                  });
                case 3:
                  response = _context2.sent;
                  if (!(response.status == 200)) {
                    _context2.next = 9;
                    break;
                  }
                  dataRes = response.json();
                  return _context2.abrupt("return", dataRes);
                case 9:
                  console.log("POST fail with status: ", response.status);
                case 10:
                  return _context2.abrupt("return", null);
                case 13:
                  _context2.prev = 13;
                  _context2.t0 = _context2["catch"](0);
                  console.log("Error POST data: ", _context2.t0);
                  return _context2.abrupt("return", null);
                case 17:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[0, 13]]);
          }));
          function post(_x2, _x3) {
            return _post.apply(this, arguments);
          }
          return post;
        }();
        return APIHandler;
      }());
      APIHandler._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasePopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Define.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Label, Button, Component, PopupName;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      PopupName = module.PopupName;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "565bblJgQVCoJO+3m96zkzM", "BasePopup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BasePopup = exports('BasePopup', (_dec = ccclass('BasePopup'), _dec2 = property({
        type: Enum(PopupName)
      }), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Label), _dec9 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BasePopup, _Component);
        function BasePopup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "title", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeBtn", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftBtn", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightBtn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftBtnText", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightBtnText", _descriptor8, _assertThisInitialized(_this));
          _this.leftBtnFunc = function () {};
          _this.rightBtnFunc = function () {};
          return _this;
        }
        var _proto = BasePopup.prototype;
        _proto.setup = function setup(data) {
          this.title.string = data.title;
          this.content.string = data.content;
          this.leftBtnFunc = data == null ? void 0 : data.leftBtnFunction;
          this.rightBtnFunc = data == null ? void 0 : data.rightBtnFunction;
          this.leftBtnText.string = data == null ? void 0 : data.leftBtnText;
          this.rightBtnText.string = data.rightBtnText;
          this.leftBtn.node.active = (data == null ? void 0 : data.leftBtnText) != null;
          this.rightBtn.node.active = data.rightBtnText != null;
        };
        _proto.start = function start() {
          this.closeBtn.node.on("click", this.onCloseBtnClick, this);
          this.leftBtn.node.on("click", this.onLeftBtnClick, this);
          this.rightBtn.node.on("click", this.onRighBtnClick, this);
        };
        _proto.update = function update(deltaTime) {};
        _proto.onCloseBtnClick = function onCloseBtnClick() {
          this.node.active = false;
        };
        _proto.onLeftBtnClick = function onLeftBtnClick() {
          var _this$leftBtnFunc;
          (_this$leftBtnFunc = this.leftBtnFunc) == null || _this$leftBtnFunc.call(this);
          this.node.active = false;
        };
        _proto.onRighBtnClick = function onRighBtnClick() {
          var _this$rightBtnFunc;
          (_this$rightBtnFunc = this.rightBtnFunc) == null || _this$rightBtnFunc.call(this);
          this.node.active = false;
        };
        return BasePopup;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PopupName.ERROR;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "leftBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rightBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "leftBtnText", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rightBtnText", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseSkill.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c537buXsVlAc5lftaApShLf", "BaseSkill", undefined);
      var BaseSkill = exports('BaseSkill',
      // activateAt(x: number, y: number, skillId: SkillId): MoveResponse

      function BaseSkill(name, skillId, description, skillAttr) {
        this.name = void 0;
        this.skillId = void 0;
        this.description = void 0;
        this.attribute = void 0;
        this.name = name;
        this.skillId = skillId;
        this.description = description;
        this.attribute = skillAttr;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Cell.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainLogic.ts', './Define.ts', './InGameManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Vec2, Color, UITransform, Component, MainLogic, ObjectType, SkillId, InGameManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Vec2 = module.Vec2;
      Color = module.Color;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      MainLogic = module.MainLogic;
    }, function (module) {
      ObjectType = module.ObjectType;
      SkillId = module.SkillId;
    }, function (module) {
      InGameManager = module.InGameManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;
      cclegacy._RF.push({}, "43224aY2xZGm6WnQz/wlYXx", "Cell", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Cell = exports('Cell', (_dec = ccclass('Cell'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Node), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cell, _Component);
        function Cell() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "valueNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "valueText", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "seedSkill", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "seedTurn", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "seedOwner", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bombSkill", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bombTurn", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iceSkill", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iceTurn", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blockSkill", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blockTurn", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "thornSkill", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "thornTurn", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "thornOwner", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "disguiseSkill", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "disguiseText", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "disguiseTurn", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "disguiseWarn", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "placeHolder", _descriptor19, _assertThisInitialized(_this));
          _this.pos = new Vec2();
          _this.onClickFun = function () {};
          _this.onMoveTouchFun = function () {};
          _this.onEndTouchFun = function () {};
          _this.onTouchBoardFun = function () {};
          _this.onMoveBoardFun = function () {};
          _this.placeholderTween = void 0;
          _this.deltaVec = new Vec2();
          return _this;
        }
        var _proto = Cell.prototype;
        _proto.start = function start() {
          this.resetCell();
          this.node.on(Node.EventType.TOUCH_START, this.onCellClick, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
        };
        _proto.update = function update(deltaTime) {};
        _proto.setup = function setup(pos, onClick, value) {
          this.pos = pos;
          this.onClickFun = onClick;
          if (value != "") {
            this.valueText.string = value;
            this.valueNode.active = true;
          } else {
            this.valueText.string = "";
            this.valueNode.active = false;
          }
        };
        _proto.setTouchAction = function setTouchAction(startTouch, moveTouch, onEndTouch) {
          this.onClickFun = startTouch;
          this.onMoveTouchFun = moveTouch;
          this.onEndTouchFun = onEndTouch;
        };
        _proto.updateValue = function updateValue(value) {
          value = value.toString();
          this.valueText.string = value;
          this.valueNode.active = value == "X" || value == "O";
          this.valueText.color = value == "X" ? Color.RED : Color.GREEN;
          this.seedSkill.active = value == ObjectType.SEED;
          this.blockSkill.active = value == ObjectType.BLOCK;
          this.thornSkill.active = value == ObjectType.THORN;
          if (value.indexOf(ObjectType.ICE) != -1) {
            var tmpValue = value.replace(ObjectType.ICE, "");
            this.valueText.string = tmpValue;
            this.valueNode.active = tmpValue == "X" || tmpValue == "O";
            this.valueText.color = tmpValue == "X" ? Color.RED : Color.GREEN;
          }
        };
        _proto.wasUsed = function wasUsed() {
          return this.valueNode.active;
        };
        _proto.getValueText = function getValueText() {
          return this.valueText.string;
        };
        _proto.resetCell = function resetCell() {
          this.valueNode.active = false;
          this.valueText.string = "";
          this.seedSkill.active = false;
          this.bombSkill.active = false;
          this.iceSkill.active = false;
          this.blockSkill.active = false;
          this.thornSkill.active = false;
          this.disguiseSkill.active = false;
        };
        _proto.onCellClick = function onCellClick(event) {
          this.onClickFun(this.pos);
          this.onTouchBoardFun(event.getUILocation()); // check here
        };

        _proto.removeBomb = function removeBomb() {
          this.bombSkill.active = false;
        };
        _proto.updateIce = function updateIce(turn) {
          this.iceSkill.active = true;
          this.iceTurn.string = turn.toString();
        };
        _proto.updateBlock = function updateBlock(turn) {
          this.blockSkill.active = true;
          this.blockTurn.string = turn.toString();
        };
        _proto.removeIce = function removeIce() {
          this.iceSkill.active = false;
        };
        _proto.updateThorn = function updateThorn(info) {
          this.thornSkill.active = true;
          this.thornTurn.string = info.existTurn.toString();
          this.thornOwner.string = info.owner.toString();
        };
        _proto.removeThorn = function removeThorn() {
          this.thornSkill.active = false;
        };
        _proto.removeDisguise = function removeDisguise() {
          this.disguiseSkill.active = false;
        };
        _proto.updateDisguise = function updateDisguise(info, curTurn) {
          this.disguiseSkill.active = true;
          this.disguiseTurn.string = info.existTurn.toString();
          this.disguiseWarn.string = info.owner == "O" ? "X" : "O";
          this.disguiseText.string = info.owner == "O" ? "X" : "O";
          this.disguiseText.color = info.owner == "X" ? Color.GREEN : Color.RED;
          this.disguiseTurn.node.active = info.owner == curTurn;
          this.disguiseWarn.node.active = info.owner == curTurn;
          if (curTurn == info.owner) {
            this.disguiseText.string = info.owner;
            this.disguiseText.color = info.owner == "X" ? Color.RED : Color.GREEN;
          }
        };
        _proto.activePlaceHolder = function activePlaceHolder() {
          this.placeHolder.active = true;
          // this.placeholderTween = tween(this.placeHolder.getComponent(UIOpacity))
          // .to(1, {opacity: 255}, {easing: "linear"})
          // .to(0.7, {opacity: 50}, {easing: "linear"})
          // .union()
          // .repeatForever()
          // .start();
        };

        _proto.deactivePlaceHolder = function deactivePlaceHolder() {
          // this.placeholderTween.stop();
          this.placeHolder.active = false;
        };
        _proto.touchMove = function touchMove(event) {
          // console.log("NODE POS: " , this.node.getWorldPosition());
          // console.log("DELTA: ", event.getUILocation());
          if (InGameManager.instance.selectedSkill == SkillId.RAIN) {
            var nodePos = this.node.getWorldPosition();
            var width = this.node.getComponent(UITransform).width;
            var deltaDis = new Vec2();
            deltaDis.x = event.getUILocation().x - nodePos.x;
            deltaDis.y = event.getUILocation().y - nodePos.y;
            var numX = Math.floor(Math.abs(deltaDis.x / width));
            var numY = Math.floor(Math.abs(deltaDis.y / width));
            numX = deltaDis.x < 0 ? -numX : numX;
            numY = deltaDis.y < 0 ? numY : -numY;
            var modX = deltaDis.x % width;
            var modY = deltaDis.y % width;
            if (deltaDis.x < 0 && modX < -width / 2) {
              numX -= 1;
            }
            if (deltaDis.x > 0 && modX > width / 2) {
              numX += 1;
            }
            if (deltaDis.y < 0 && modY < width / 2) {
              numY += 1; // because difference direction of array logic and UI
            }

            if (deltaDis.y > 0 && modY > width / 2) {
              numY -= 1; // because difference direction of array logic and UI
            }

            this.deltaVec = new Vec2(this.pos.x + numX, this.pos.y + numY);
            if (this.deltaVec.x >= MainLogic._intance.sizeChess || this.deltaVec.y >= MainLogic._intance.sizeChess || this.deltaVec.x < 0 || this.deltaVec.y < 0) {
              return;
            }
            this.onMoveTouchFun(this.deltaVec);
          } else {
            this.onMoveBoardFun(event.getDelta());
          }
        };
        _proto.touchEnd = function touchEnd() {
          this.onEndTouchFun(this.pos);
        }

        //#region MoveBoard
        ;

        _proto.setTouchBoardFun = function setTouchBoardFun(onTouch) {
          this.onTouchBoardFun = onTouch;
        };
        _proto.setMoveBoardAction = function setMoveBoardAction(onMove) {
          this.onMoveBoardFun = onMove;
        }
        //#endregion

        //#region SKILL OBEJECT:
        ;

        _proto.unactiveAllSkillObject = function unactiveAllSkillObject() {
          this.seedSkill.active = false;
          this.bombSkill.active = false;
          this.iceSkill.active = false;
          this.blockSkill.active = false;
          this.thornSkill.active = false;
          this.disguiseSkill.active = false;
        };
        _proto.updateSkillObject = function updateSkillObject(skillObject) {
          switch (skillObject.skillId) {
            case SkillId.SEED:
              {
                var remainTurn = skillObject.existTurn - skillObject.countTurn;
                this.seedSkill.active = true;
                this.seedTurn.string = remainTurn.toString();
                this.seedOwner.string = skillObject.owner.toString();
                break;
              }
            case SkillId.BOMB:
              {
                var _remainTurn = skillObject.existTurn - skillObject.countTurn;
                this.bombSkill.active = true;
                this.bombTurn.string = _remainTurn.toString();
                break;
              }
          }
        }

        //#endregion
        ;

        return Cell;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "valueNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "valueText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "seedSkill", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "seedTurn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "seedOwner", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bombSkill", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bombTurn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "iceSkill", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "iceTurn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "blockSkill", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "blockTurn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "thornSkill", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "thornTurn", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "thornOwner", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "disguiseSkill", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "disguiseText", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "disguiseTurn", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "disguiseWarn", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "placeHolder", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Chessboard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Cell.ts', './EventMgr.ts', './InGameManager.ts', './Define.ts', './MainLogic.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, instantiate, Vec2, Vec3, UITransform, Rect, Component, Cell, eventMgr, EventName, InGameManager, define, MainLogic;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Rect = module.Rect;
      Component = module.Component;
    }, function (module) {
      Cell = module.Cell;
    }, function (module) {
      eventMgr = module.default;
      EventName = module.EventName;
    }, function (module) {
      InGameManager = module.InGameManager;
    }, function (module) {
      define = module.default;
    }, function (module) {
      MainLogic = module.MainLogic;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "41a6exRCnlGYrTxX1st1m2/", "Chessboard", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Chessboard = exports('Chessboard', (_dec = ccclass('Chessboard'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Chessboard, _Component);
        function Chessboard() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cellPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chessboardRender", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "boardMask", _descriptor3, _assertThisInitialized(_this));
          _this.cells = [];
          _this.curTouch = void 0;
          _this.curPlaceHolder = [];
          _this.startTouchPos = void 0;
          _this.curMovePos = void 0;
          _this.curSelectPos = null;
          _this.lastMovePos = -1;
          _this.oldBoard = void 0;
          _this.originBoardPos = void 0;
          _this.curBoardScale = void 0;
          _this.oldSkillObjects = void 0;
          return _this;
        }
        var _proto = Chessboard.prototype;
        _proto.onEnable = function onEnable() {
          if (this.cells.length == 0) {
            var _InGameManager$instan;
            var board = (_InGameManager$instan = InGameManager.instance.curState) == null ? void 0 : _InGameManager$instan.board;
            this.updateBoard(board);
          }
        };
        _proto.start = function start() {
          this.originBoardPos = this.chessboardRender.worldPosition.clone();
          this.curBoardScale = this.chessboardRender.scale.clone();
          eventMgr.on(EventName.UPDATE_BOARD, this.updateBoard, this);
          eventMgr.on(EventName.UPDATE_SKILL_OBJECT, this.updateSkillObjects, this);
          eventMgr.on(EventName.INIT_BOARD, this.initChessboard, this);
          eventMgr.on(EventName.UPDATE_ICE_SHOW, this.updateIce, this);
          eventMgr.on(EventName.UPDATE_BLOCK_SHOW, this.updateBlock, this);
          eventMgr.on(EventName.UPDATE_THORN_SHOW, this.updateThorn, this);
          eventMgr.on(EventName.UPDATE_DISGUISE_SHOW, this.updateDisguise, this);
          eventMgr.on(EventName.RESET_BOARD, this.resetChessboard, this);
          eventMgr.on(EventName.REMOVE_BOMB, this.removeBomb, this);
          eventMgr.on(EventName.REMOVE_ICE, this.removeIce, this);
          eventMgr.on(EventName.REMOVE_THORN, this.removeThorn, this);
          eventMgr.on(EventName.REMOVE_DISGUISE, this.removeDisguise, this);
          eventMgr.on(EventName.UPDATE_PLACEHODLER, this.updatePlaceholder, this);
          eventMgr.on(EventName.CLEAR_PLACEHOLDER, this.clearPlaceholder, this);
          eventMgr.on(EventName.ZOOM_IN_BOARD, this.onZoomIn, this);
          eventMgr.on(EventName.ZOOM_OUT_BOARD, this.onZoomOut, this);
          eventMgr.on(EventName.END_GAME, this.onEndGame, this);
        };
        _proto.update = function update(deltaTime) {};
        _proto.initChessboard = function initChessboard(board) {
          this.cells = [];
          // let size = board?.items;
          var size = define.boardSize;
          for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
              var newCell = instantiate(this.cellPrefab);
              var cellComp = newCell.getComponent(Cell);
              cellComp.setup(new Vec2(x, y), this.onCellClick.bind(this), "");
              cellComp.setTouchAction(this.onCellClick.bind(this), this.onCellMoveTouch.bind(this), this.onCellEndTouch.bind(this));
              cellComp.setTouchBoardFun(this.onTouchBoardPos.bind(this));
              cellComp.setMoveBoardAction(this.onMoveBoard.bind(this));
              this.cells.push(newCell);
              this.chessboardRender.addChild(newCell);
            }
          }
        };
        _proto.resetChessboard = function resetChessboard() {
          this.cells.forEach(function (cell) {
            return cell.getComponent(Cell).resetCell();
          });
        };
        _proto.onCellClick = function onCellClick(pos) {
          // call nguoc qua logic de lam gi do
          this.curTouch = pos;
          // MainLogic._intance.selectedCellStart(pos);
        };

        _proto.onCellEndTouch = function onCellEndTouch(pos) {
          // MainLogic._intance.selectedCellConfirm(pos);

          if (!this.curSelectPos) this.updateSeleting(pos);else {
            if (Vec2.equals(pos, this.curSelectPos)) {
              InGameManager.instance.handleCellClick(pos);
            } else {
              this.updateSeleting(pos);
            }
          }
        };
        _proto.onCellMoveTouch = function onCellMoveTouch(pos) {
          if (this.curTouch == pos) return;
          // MainLogic._intance.selectedCellChange(pos);
        };

        _proto.convertXYtoNum = function convertXYtoNum(x, y) {
          return x + define.boardSize * y;
        };
        _proto.updateSeleting = function updateSeleting(pos) {
          if (this.curSelectPos) {
            if (Vec2.equals(pos, this.curSelectPos)) return;
            var numPos = this.convertXYtoNum(this.curSelectPos.x, this.curSelectPos.y);
            if (numPos != this.lastMovePos) {
              this.cells[this.convertXYtoNum(this.curSelectPos.x, this.curSelectPos.y)].getComponent(Cell).deactivePlaceHolder();
            }
          }
          this.cells[this.convertXYtoNum(pos.x, pos.y)].getComponent(Cell).activePlaceHolder();
          this.curSelectPos = pos.clone();
        };
        _proto.updateBoard = function updateBoard(board) {
          if (!board) return;
          if (this.cells.length == 0) {
            this.initChessboard(board);
          }
          if (board.length > 0) {
            for (var i = 0; i < board.length; i++) {
              var value = board[i].value;
              this.cells[i].getComponent(Cell).updateValue(value);
            }
            this.updateLastMove(board);
            this.showLastMove();
            this.oldBoard = JSON.parse(JSON.stringify(board));
          }
        };
        _proto.updateSkillObjects = function updateSkillObjects(skillObjects) {
          if (!skillObjects) return;
          this.unactiveAllSkillObjects();
          if (skillObjects.length > 0) {
            for (var i = 0; i < skillObjects.length; i++) {
              console.log("SKILL OBEJCT: ", skillObjects[i]);
              this.updateCellByObject(skillObjects[i]);
            }
          }
          // todo: remove old skill object
        };

        _proto.unactiveAllSkillObjects = function unactiveAllSkillObjects() {
          this.cells.forEach(function (cell) {
            return cell.getComponent(Cell).unactiveAllSkillObject();
          });
        };
        _proto.updateCellByObject = function updateCellByObject(object) {
          var cellPos = object.y * define.boardSize + object.x;
          this.cells[cellPos].getComponent(Cell).updateSkillObject(object);
        };
        _proto.updateLastMove = function updateLastMove(newBoard) {
          var diffPos = -1;
          if (!this.oldBoard) {
            for (var i = 0; i < newBoard.length; i++) {
              if (newBoard[i].value) {
                this.lastMovePos = i;
                return;
              }
            }
            return;
          }
          for (var _i = 0; _i < newBoard.length; _i++) {
            if (this.oldBoard[_i].value != newBoard[_i].value) {
              diffPos = _i;
              break;
            }
          }
          if (diffPos != -1) {
            if (this.lastMovePos != -1) {
              this.cells[this.lastMovePos].getComponent(Cell).deactivePlaceHolder();
            }
            this.lastMovePos = diffPos;
          }
        };
        _proto.showLastMove = function showLastMove() {
          if (this.lastMovePos == -1) return;
          this.cells[this.lastMovePos].getComponent(Cell).activePlaceHolder();
          var pos = this.cells[this.lastMovePos].getWorldPosition().clone();
          if (!this.isInBoardView(pos)) {
            var deltaMove = new Vec3(0);
            Vec3.subtract(deltaMove, this.originBoardPos, pos);
            var boardPos = this.chessboardRender.position;
            this.chessboardRender.setPosition(boardPos.x + deltaMove.x, boardPos.y + deltaMove.y);
          }
        };
        _proto.isInBoardView = function isInBoardView(pos) {
          var oPos = this.boardMask.getWorldPosition().clone();
          var maskSize = this.boardMask.getComponent(UITransform);
          oPos.x = oPos.x - maskSize.width / 2;
          oPos.y = oPos.y - maskSize.height / 2;
          var newRect = new Rect(oPos.x, oPos.y, maskSize.width, maskSize.height);
          return newRect.contains(new Vec2(pos.x, pos.y));
        };
        _proto.removeBomb = function removeBomb(rBombList) {
          for (var i = 0; i < rBombList.length; i++) {
            var target = rBombList[i];
            var numTarget = this.convertXYtoNum(target.pos.x, target.pos.y);
            this.cells[numTarget].getComponent(Cell).removeBomb();
          }
        }
        //#endregion

        //#region  ICE
        ;

        _proto.updateIce = function updateIce() {
          var iceList = MainLogic._intance.iceList;
          for (var i = 0; i < iceList.length; i++) {
            var target = iceList[i];
            var numTarget = this.convertXYtoNum(target.pos.x, target.pos.y);
            this.cells[numTarget].getComponent(Cell).updateIce(target.existTurn);
          }
        };
        _proto.removeIce = function removeIce(rIceList) {
          for (var i = 0; i < rIceList.length; i++) {
            var target = rIceList[i];
            var numTarget = this.convertXYtoNum(target.pos.x, target.pos.y);
            this.cells[numTarget].getComponent(Cell).removeIce();
          }
        }
        //#endregion

        //#region BLOCK
        ;

        _proto.updateBlock = function updateBlock() {
          var blockList = MainLogic._intance.blockList;
          for (var i = 0; i < blockList.length; i++) {
            var target = blockList[i];
            var numTarget = this.convertXYtoNum(target.pos.x, target.pos.y);
            this.cells[numTarget].getComponent(Cell).updateBlock(target.existTurn);
          }
        }
        //#endregion

        //#region Thorn
        ;

        _proto.updateThorn = function updateThorn() {
          var thornList = MainLogic._intance.thornList;
          for (var i = 0; i < thornList.length; i++) {
            var target = thornList[i];
            var numTarget = this.convertXYtoNum(target.pos.x, target.pos.y);
            this.cells[numTarget].getComponent(Cell).updateThorn(target);
          }
        };
        _proto.removeThorn = function removeThorn(rThornList) {
          for (var i = 0; i < rThornList.length; i++) {
            var target = rThornList[i];
            var numTarget = this.convertXYtoNum(target.pos.x, target.pos.y);
            this.cells[numTarget].getComponent(Cell).removeThorn();
          }
        }
        //#endregion

        //#region Disguise
        ;

        _proto.updateDisguise = function updateDisguise(curTurn) {
          var disguiseList = MainLogic._intance.disguiseList;
          for (var i = 0; i < disguiseList.length; i++) {
            var target = disguiseList[i];
            var numTarget = this.convertXYtoNum(target.pos.x, target.pos.y);
            this.cells[numTarget].getComponent(Cell).updateDisguise(target, curTurn);
          }
        };
        _proto.removeDisguise = function removeDisguise(rDisguiseList) {
          for (var i = 0; i < rDisguiseList.length; i++) {
            var target = rDisguiseList[i];
            var numTarget = this.convertXYtoNum(target.pos.x, target.pos.y);
            this.cells[numTarget].getComponent(Cell).removeDisguise();
          }
        }

        //#endregion

        //#region Placeholder
        ;

        _proto.updatePlaceholder = function updatePlaceholder(list) {
          this.curPlaceHolder = list;
          for (var i = 0; i < list.length; i++) {
            var indexCell = this.convertXYtoNum(list[i].x, list[i].y);
            this.cells[indexCell].getComponent(Cell).activePlaceHolder();
          }
        };
        _proto.clearPlaceholder = function clearPlaceholder(list) {
          var clearTargets = list ? list : this.curPlaceHolder;
          for (var i = 0; i < clearTargets.length; i++) {
            var indexCell = this.convertXYtoNum(clearTargets[i].x, clearTargets[i].y);
            this.cells[indexCell].getComponent(Cell).deactivePlaceHolder();
          }
        }
        //#endregion

        //#region MoveBoard
        ;

        _proto.onMoveBoard = function onMoveBoard(delta) {
          var curBoardPos = this.chessboardRender.position.clone();
          this.chessboardRender.setPosition(new Vec3(curBoardPos.x + delta.x, curBoardPos.y + delta.y));
          if (!InGameManager.instance.isMovingBoard()) {
            Vec2.add(this.curMovePos, this.curMovePos, delta);
            if (this.curMovePos.x - this.startTouchPos.x > 35 || this.curMovePos.y - this.startTouchPos.y > 35) {
              InGameManager.instance.setMovingBoard(true);
            }
          }
        };
        _proto.onTouchBoardPos = function onTouchBoardPos(pos) {
          this.startTouchPos = pos.clone();
          this.curMovePos = pos.clone();
        }
        //#endregion

        //#region ZOOM
        ;

        _proto.onZoomIn = function onZoomIn() {
          var curScale = this.chessboardRender.scale;
          if (curScale.x < 1) {
            this.chessboardRender.setScale(curScale.x + define.zoomChangeRate, curScale.y + define.zoomChangeRate);
            this.curBoardScale = curScale.clone();
            this.alignFocusWhenZoom(true);
          }
        };
        _proto.onZoomOut = function onZoomOut() {
          var curScale = this.chessboardRender.scale;
          if (curScale.x > 0.4) {
            this.chessboardRender.setScale(curScale.x - define.zoomChangeRate, curScale.y - define.zoomChangeRate);
            this.curBoardScale = curScale.clone();
            this.alignFocusWhenZoom(false);
          }
        };
        _proto.alignFocusWhenZoom = function alignFocusWhenZoom(isZoomIn) {
          var newScale = this.curBoardScale.x;
          var oldScale = isZoomIn ? newScale - define.zoomChangeRate : newScale + define.zoomChangeRate;
          var boardPos = this.chessboardRender.position;
          this.chessboardRender.setPosition(boardPos.x * newScale / oldScale, boardPos.y * newScale / oldScale);
        }
        //#endregion
        ;

        _proto.onEndGame = function onEndGame() {
          if (this.lastMovePos != -1) this.cells[this.lastMovePos].getComponent(Cell).deactivePlaceHolder();
          if (this.curSelectPos) {
            var pos = this.convertXYtoNum(this.curSelectPos.x, this.curSelectPos.y);
            this.cells[pos].getComponent(Cell).deactivePlaceHolder();
          }
          this.curSelectPos = null;
          this.lastMovePos = -1;
          this.oldBoard = null;
        };
        return Chessboard;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "chessboardRender", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "boardMask", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Define.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "87e99Y8lYpFH5gGPowJVg0u", "Define", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SkillId = exports('SkillId', /*#__PURE__*/function (SkillId) {
        SkillId["NONE"] = "NONE";
        SkillId["SEED"] = "SEED";
        SkillId["BOMB"] = "BOMB";
        SkillId["RAIN"] = "RAIN";
        SkillId["QUAKE"] = "QUAKE";
        SkillId["TIME"] = "TIME";
        SkillId["FROZONE"] = "FROZONE";
        SkillId["BLOCKAGE"] = "BLOCKAGE";
        SkillId["THORN_BALL"] = "THORN_BALL";
        SkillId["DISGUISE"] = "DISGUISE";
        return SkillId;
      }({}));
      var PetImgBySkill = exports('PetImgBySkill', /*#__PURE__*/function (PetImgBySkill) {
        PetImgBySkill["SEED"] = "Nature_mushroom";
        PetImgBySkill["BOMB"] = "flamea";
        PetImgBySkill["RAIN"] = "Water_crab";
        PetImgBySkill["QUAKE"] = "meteor_golem";
        PetImgBySkill["TIME"] = "Fire_creature";
        PetImgBySkill["BLOCKAGE"] = "kitsune";
        PetImgBySkill["FROZONE"] = "blizzard_fox";
        PetImgBySkill["THORN"] = "Metal_hedgehog";
        PetImgBySkill["DISGUISE"] = "dumposaurus";
        return PetImgBySkill;
      }({}));
      var Define = function Define() {
        this.boardSize = 25;
        this.seedGrownTurn = 3;
        this.bombExplodeTurn = 3;
        this.quakeNumEachSide = 2;
        this.turnTime = 25;
        this.timeSkillTurnNum = 5;
        this.iceExistTurn = 3;
        this.numBlockInBlokageSkill = 3;
        this.blockExistTurn = 3;
        this.thornExistTurn = 5;
        this.thornMoveRadius = 5;
        this.thornMoveRate = [0.25, 0.5, 0.25];
        this.disguiseNum = 3;
        this.disguiseExistTurn = 5;
        this.oponentSkills = [SkillId.SEED, SkillId.BOMB, SkillId.TIME];
        this.selfSkills = [SkillId.SEED, SkillId.BOMB, SkillId.TIME];
        this.zoomChangeRate = 0.1;
      };
      var define = exports('default', new Define());
      var ObjectType = exports('ObjectType', /*#__PURE__*/function (ObjectType) {
        ObjectType["SEED"] = "SEED";
        ObjectType["ICE"] = "+ICE";
        ObjectType["THORN"] = "THORN";
        ObjectType["BLOCK"] = "BLOCK";
        return ObjectType;
      }({}));
      var PlaceholderType = exports('PlaceholderType', /*#__PURE__*/function (PlaceholderType) {
        PlaceholderType["NONE"] = "NONE";
        PlaceholderType["SIZE_FIVE"] = "SIZE_FIVE";
        PlaceholderType["X_CELLS"] = "X_CELLS";
        PlaceholderType["O_CELLS"] = "O_CELLS";
        PlaceholderType["EMPTY_CELLS"] = "EMPTY_CELLS";
        return PlaceholderType;
      }({}));
      var SkillName = exports('SkillName', /*#__PURE__*/function (SkillName) {
        SkillName["SEED"] = "H\u1EA1t m\u1EA7m hy v\u1ECDng";
        SkillName["BOMB"] = "Bom h\u1EB9n l\u01B0\u1EE3t";
        SkillName["RAIN"] = "C\u01A1n m\u01B0a cu\u1ED1n s\u1EA1ch";
        SkillName["QUAKE"] = "\u0110\u1ED9ng \u0111\u1EA5t";
        SkillName["TIME"] = "Gi\u1EA3m th\u1EDDi gian";
        SkillName["BLOCKAGE"] = "Ch\u01B0\u1EDBng ng\u1EA1i v\u1EADt";
        SkillName["FROZONE"] = "\u0110\xF3ng b\u0103ng";
        SkillName["THORN"] = "C\u1EA7u gai";
        SkillName["DISGUISE"] = "Ngu\u1EF5 trang";
        return SkillName;
      }({}));
      var SkillDes = exports('SkillDes', /*#__PURE__*/function (SkillDes) {
        SkillDes["SEED"] = "\u0110\xE1nh d\u1EA5u 1 v\u1ECB tr\xED qua 3 turn, th\xEC s\u1EBD n\u1EA3y m\u1EA7m l\xEAn 1 qu\xE2n c\u1EDD c\u1EE7a b\xEAn m\xECnh";
        SkillDes["BOMB"] = "\u0110\u1EB7t bom l\xEAn 1 qu\xE2n c\u1EDD c\u1EE7a \u0111\u1ED1i th\u1EE7, ch\u1EC9 \u0111\u1ECBnh, n\u1ED5 ch\u1EADm sau 3 turn";
        SkillDes["RAIN"] = "Spawn 1 \xF4 m\u01B0a k\xEDch th\u01B0\u1EDBc (5 x 5) tr\xEAn b\xE0n c\u1EDD";
        SkillDes["QUAKE"] = "T\u1EA1o \u0111\u1ED9ng \u0111\u1EA5t v\xE0 ph\xE1 c\u1EDD c\u1EA3 2 b\xEAn (m\u1ED7i b\xEAn 2 con).";
        SkillDes["TIME"] = "Tr\u1EEB 50% th\u01A1i gian ch\u01A1i c\u1EE7a \u0111\u1ED1i th\u1EE7 trong 5 turn";
        SkillDes["BLOCKAGE"] = "T\u1EA1o 3 ch\u01B0\u1EDBng ng\u1EA1i v\u1EADt tr\xEAn b\xE0n c\u1EDD ng\u0103n ng\u01B0\u1EDDi ch\u01A1i 2 b\xEAn \u0111\u1EB7t c\u1EDD trong 3 turn.";
        SkillDes["FROZONE"] = "\u0110\xF3ng b\u0103ng qu\xE2n c\u1EDD \u0111\u1ED1i ph\u01B0\u01A1ng l\xE0m cho qu\xE2n c\u1EDD \u0111\xF3 kh\xF4ng \u0111c t\xEDnh trong 3 turn k\u1EBF ti\u1EBFp. Sau 3 turn s\u1EBD \u0111\u01B0\u1EE3c t\xEDnh l\u1EA1i b\xECnh th\u01B0\u1EDDng.";
        SkillDes["THORN"] = "T\u1EA1o 1 qu\u1EA3 c\u1EA7u gai. Sau m\u1ED7i l\u01B0\u1EE3t, c\u1EA7u gai s\u1EBD nh\u1EA3y \u0111\u1EBFn m\u1ED9t \xF4 b\u1EA5t k\xEC(tr\u1EEB nh\u1EEFng \xF4 c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i). Ng\u0103n ng\u01B0\u1EDDi ch\u01A1i \u0111\u1EB7t c\u1EDD v\xE0 ph\xE1 h\u1EE7y c\u1EDD \u0111\u1ED1i ph\u01B0\u01A1ng";
        SkillDes["DISGUISE"] = "3 con b\u1EA5t k\xEC c\u1EE7a b\xEAn m\xECnh s\u1EBD bi\u1EBFn th\xE0nh m\xE0u c\u1EE7a \u0111\u1ED1i ph\u01B0\u01A1ng. Nh\u01B0ng v\u1EABn t\xEDnh th\u1EAFng thua nh\u01B0 b\xECnh th\u01B0\u1EDDng.";
        return SkillDes;
      }({}));
      var ClassicMode = exports('ClassicMode', /*#__PURE__*/function (ClassicMode) {
        ClassicMode["FREE_TO_PLAY"] = "FREE_TO_PLAY";
        ClassicMode["QUICK_PLAY"] = "QUICK_PLAY";
        return ClassicMode;
      }({}));
      var PopupName = exports('PopupName', /*#__PURE__*/function (PopupName) {
        PopupName["ERROR"] = "ErrorPopup";
        return PopupName;
      }({}));
      var MessageType = exports('MessageType', /*#__PURE__*/function (MessageType) {
        MessageType["NORMAL_MOVE"] = "NORMAL_MOVE";
        MessageType["SKILL_MOVE"] = "SKILL_MOVE";
        MessageType["UNKNOWN"] = "UNKNOWN";
        MessageType["CHAT"] = "CHAT";
        MessageType["PLAYER_PARTICIPATION"] = "PLAYER_PARTICIPATION";
        MessageType["ROOM_STATUS_CHANGE"] = "ROOM_STATUS_CHANGE";
        MessageType["GAME_START"] = "GAME_START";
        MessageType["ERROR"] = "ERROR";
        MessageType["RESULT"] = "RESULT";
        return MessageType;
      }({}));
      var ElementType = exports('ElementType', /*#__PURE__*/function (ElementType) {
        ElementType["FIRE"] = "FIRE";
        ElementType["METAL"] = "METAL";
        ElementType["WATER"] = "WATER";
        ElementType["NATURE"] = "NATURE";
        ElementType["EARTH"] = "EARTH";
        return ElementType;
      }({}));
      var SkillType = exports('SkillType', /*#__PURE__*/function (SkillType) {
        SkillType["SPAWN"] = "SPAWN";
        SkillType["PLAYER_EFFECT"] = "PLAYER_EFFECT";
        SkillType["BOARD_EFFECT"] = "BOARD_EFFECT";
        return SkillType;
      }({}));
      var EffectTargetType = exports('EffectTargetType', /*#__PURE__*/function (EffectTargetType) {
        EffectTargetType["OPPONENT"] = "OPPONENT";
        EffectTargetType["SELF"] = "SELF";
        EffectTargetType["CELL"] = "CELL";
        EffectTargetType["BOARD"] = "BOARD";
        return EffectTargetType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DefineMatchLogin.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5d75drwDQ5HtLbC2AHaNFbB", "DefineMatchLogin", undefined);
      var Config = exports('Config', /*#__PURE__*/function (Config) {
        Config["HOST"] = "";
        return Config;
      }({}));
      var RoomType = exports('RoomType', /*#__PURE__*/function (RoomType) {
        RoomType["NORMAL"] = "NORMAL";
        RoomType["SKILL"] = "SKILL";
        return RoomType;
      }({}));
      var RoomMode = exports('RoomMode', /*#__PURE__*/function (RoomMode) {
        RoomMode["PVP"] = "PVP";
        return RoomMode;
      }({}));
      var PlatformSource = exports('PlatformSource', /*#__PURE__*/function (PlatformSource) {
        PlatformSource["ETERNAL"] = "ETERNAL";
        PlatformSource["CYBORG"] = "CYBORG";
        return PlatformSource;
      }({}));
      var Partner = exports('Partner', /*#__PURE__*/function (Partner) {
        Partner["COIN98"] = "coin98";
        Partner["RAMPER"] = "ramper";
        return Partner;
      }({}));
      var PlayerStatus = exports('PlayerStatus', /*#__PURE__*/function (PlayerStatus) {
        PlayerStatus["PLAYING"] = "PLAYING";
        PlayerStatus["READY"] = "READY";
        PlayerStatus["DNS"] = "DNS";
        PlayerStatus["GAME_OVER"] = "GAME_OVER";
        PlayerStatus["DISCONNECT"] = "DISCONNECT";
        return PlayerStatus;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ErrorPopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePopup.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BasePopup;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BasePopup = module.BasePopup;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f3c9eqoJqZLzbRFxsbjEBUl", "ErrorPopup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ErrorPopup = exports('ErrorPopup', (_dec = ccclass('ErrorPopup'), _dec(_class = /*#__PURE__*/function (_BasePopup) {
        _inheritsLoose(ErrorPopup, _BasePopup);
        function ErrorPopup() {
          return _BasePopup.apply(this, arguments) || this;
        }
        var _proto = ErrorPopup.prototype;
        _proto.start = function start() {
          _BasePopup.prototype.start.call(this);
        };
        _proto.update = function update(deltaTime) {};
        _proto.setup = function setup(data) {
          if (!data) return;
          _BasePopup.prototype.setup.call(this, data);
        };
        return ErrorPopup;
      }(BasePopup)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, EventTarget;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "faf52SkO9NEt7aLLFFy9IBQ", "EventMgr", undefined);
      var EventMgr = /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(EventMgr, _EventTarget);
        function EventMgr() {
          return _EventTarget.apply(this, arguments) || this;
        }
        return EventMgr;
      }(EventTarget);
      var EventName = exports('EventName', /*#__PURE__*/function (EventName) {
        EventName["LOGIN"] = "LOGIN";
        EventName["IN_GAME"] = "IN_GAME";
        EventName["INIT_BOARD"] = "INIT_BOARD";
        EventName["UPDATE_BOARD"] = "UPDATE_BOARD";
        EventName["UPDATE_SKILL_OBJECT"] = "UPDATE_SKILL_OBJECT";
        EventName["UPDATE_SELF_MOVE_VALUE"] = "UPDATE_SELF_MOVE_VALUE";
        EventName["END_GAME"] = "END_GAME";
        EventName["RESET_BOARD"] = "RESET_BOARD";
        EventName["CHANGE_SELECT_SKILL"] = "UPDATE_SKILL_NAME";
        EventName["UPDATE_SEED_SHOW"] = "UPDATE_SEED_SHOW";
        EventName["UPDATE_TURN_INFO"] = "UPDATE_TURN_INFO";
        EventName["UPDATE_BOMB_SHOW"] = "UPDATE_BOMB_SHOW";
        EventName["REMOVE_BOMB"] = "REMOVE_BOMB";
        EventName["UPDATE_ICE_SHOW"] = "UPDATE_ICE_SHOW";
        EventName["REMOVE_ICE"] = "REMOVE_ICE";
        EventName["UPDATE_BLOCK_SHOW"] = "UPDATE_BLOCK_SHOW";
        EventName["UPDATE_THORN_SHOW"] = "UPDATE_THORN_SHOW";
        EventName["REMOVE_THORN"] = "REMOVE_THORN";
        EventName["UPDATE_DISGUISE_SHOW"] = "UPDATE_DISGUISE_SHOW";
        EventName["REMOVE_DISGUISE"] = "REMOVE_DISGUISE";
        EventName["UPDATE_PLACEHODLER"] = "UPDATE_PLACEHODLER";
        EventName["CLEAR_PLACEHOLDER"] = "CLEAR_PLACEHOLDER";
        EventName["SHOW_TOAST"] = "SHOW_TOAST";
        EventName["CLEAR_SKILL_USING"] = "CLEAR_SKILL_USING";
        EventName["START_PLAY_WITH_BOT"] = "START_PLAY_WITH_BOT";
        EventName["ZOOM_IN_BOARD"] = "ZOOM_IN_BOARD";
        EventName["ZOOM_OUT_BOARD"] = "ZOOM_OUT_BOARD";
        EventName["SHOW_POPUP"] = "SHOW_POPUP";
        EventName["SHOW_OVERLAY"] = "SHOW_OVERLAY";
        EventName["ANOTHER_JOIN_ROOM"] = "ANOTHER_JOIN_ROOM";
        EventName["UPDATE_SELF_SESSION_ID"] = "UPDATE_SELF_SESSION_ID";
        EventName["UPDATE_ROOM_TYPE"] = "UPDATE_ROOM_TYPE";
        EventName["LOGIN_SUCCESS"] = "LOGIN_SUCCESS";
        EventName["MATCH_MAKING_SUCCESS"] = "MATCH_MAKING_SUCCESS";
        EventName["EXIT_MATCH"] = "EXIT_MATCH";
        EventName["ROOM_STATE_CHANGE"] = "ROOM_STATE_CHANGE";
        EventName["PLAYER_STATE_CHANGE"] = "PLAYER_STATE_CHANGE";
        return EventName;
      }({})); //
      var eventMgr = exports('default', new EventMgr());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ScreenManager.ts', './EventMgr.ts', './ScreenBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Component, ScreenManager, eventMgr, EventName, ScreenType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      ScreenManager = module.ScreenManager;
    }, function (module) {
      eventMgr = module.default;
      EventName = module.EventName;
    }, function (module) {
      ScreenType = module.ScreenType;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "de361Ipqs9EUYauGmXbg8mX", "GameManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["NONE"] = 0] = "NONE";
        GameState[GameState["LOGIN"] = 1] = "LOGIN";
        GameState[GameState["SELECT_CORE_MODE"] = 2] = "SELECT_CORE_MODE";
        GameState[GameState["TEAM_SETUP"] = 3] = "TEAM_SETUP";
        GameState[GameState["SELECT_PLAY_TYPE"] = 4] = "SELECT_PLAY_TYPE";
        GameState[GameState["MATCH_MAKING"] = 5] = "MATCH_MAKING";
        GameState[GameState["IN_GAME"] = 6] = "IN_GAME";
        GameState[GameState["END_GAME"] = 7] = "END_GAME";
        return GameState;
      }(GameState || {});
      var GameManager = exports('GameManager', (_dec = ccclass('GameManager'), _dec2 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameManager, _Component);
        function GameManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loadingOverlay", _descriptor, _assertThisInitialized(_this));
          _this.sampleVar = 0;
          _this.state = GameState.NONE;
          return _this;
        }
        var _proto = GameManager.prototype;
        _proto.onLoad = function onLoad() {
          if (GameManager._instance == null) {
            GameManager._instance = this;
          } else {
            this.node.destroy();
          }
        };
        _proto.onEnable = function onEnable() {
          this.doSthing();
        };
        _proto.start = function start() {
          this.handleCustomEvent();
          this.setState(GameState.LOGIN); // entry point
        };

        _proto.handleCustomEvent = function handleCustomEvent() {
          eventMgr.on(EventName.LOGIN_SUCCESS, this.onLoginSuccess, this);
          eventMgr.on(EventName.MATCH_MAKING_SUCCESS, this.onMatchMakingSuccess, this);
          eventMgr.on(EventName.EXIT_MATCH, this.onExitMatch, this);
        };
        _proto.getCurGameState = function getCurGameState() {
          return this.state;
        };
        _proto.doSthing = function doSthing() {
          console.log("GM do Something");
        };
        _proto.setState = function setState(stateSet) {
          if (this.state == stateSet) return;
          this.state = stateSet;
          switch (this.state) {
            case GameState.LOGIN:
              eventMgr.emit(EventName.LOGIN);
              break;
            case GameState.MATCH_MAKING:
              ScreenManager.instance.showScreen(ScreenType.MATCHING);
              break;
            case GameState.IN_GAME:
              console.log("VO IN GAME");
              eventMgr.emit(EventName.IN_GAME);
              break;
          }
        };
        _proto.onLoginSuccess = function onLoginSuccess() {
          this.setState(GameState.MATCH_MAKING);
        };
        _proto.onMatchMakingSuccess = function onMatchMakingSuccess() {
          console.log("IN--------GAME");
          this.setState(GameState.IN_GAME);
        };
        _proto.onExitMatch = function onExitMatch() {
          this.setState(GameState.MATCH_MAKING);
        };
        _proto.showLoadingOverlay = function showLoadingOverlay() {
          this.loadingOverlay.active = true;
        };
        _proto.hideLoadingOverlay = function hideLoadingOverlay() {
          this.loadingOverlay.active = false;
        };
        _createClass(GameManager, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              console.error('GameManger is not initialized!');
            }
            return this._instance;
          }
        }]);
        return GameManager;
      }(Component), _class3._instance = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingOverlay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InGameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WebSocketHandler.ts', './EventMgr.ts', './ScreenManager.ts', './BaseSkill.ts', './SkillInfo.ts', './Define.ts', './ScreenBase.ts', './DefineMatchLogin.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Component, WebSocketHandler, eventMgr, EventName, ScreenManager, BaseSkill, SkillInfo, define, SkillId, EffectTargetType, ScreenType, RoomType;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      WebSocketHandler = module.WebSocketHandler;
    }, function (module) {
      eventMgr = module.default;
      EventName = module.EventName;
    }, function (module) {
      ScreenManager = module.ScreenManager;
    }, function (module) {
      BaseSkill = module.BaseSkill;
    }, function (module) {
      SkillInfo = module.SkillInfo;
    }, function (module) {
      define = module.default;
      SkillId = module.SkillId;
      EffectTargetType = module.EffectTargetType;
    }, function (module) {
      ScreenType = module.ScreenType;
    }, function (module) {
      RoomType = module.RoomType;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "8b9dczhUVJJE5CwpuEy47iX", "InGameManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var InGameState = /*#__PURE__*/function (InGameState) {
        InGameState[InGameState["NONE"] = 0] = "NONE";
        InGameState[InGameState["START"] = 1] = "START";
        InGameState[InGameState["RESUME"] = 2] = "RESUME";
        InGameState[InGameState["IN_TURN"] = 3] = "IN_TURN";
        InGameState[InGameState["WIN"] = 4] = "WIN";
        InGameState[InGameState["LOSE"] = 5] = "LOSE";
        return InGameState;
      }(InGameState || {});
      var InGameManager = exports('InGameManager', (_dec = ccclass('InGameManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(InGameManager, _Component);
        function InGameManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.inGameState = InGameState.NONE;
          _this.sampleVar = 0;
          _this.curSessionID = "";
          _this.curTurn = false;
          _this.selectedSkill = "";
          _this.boardMoving = false;
          _this.roomType = null;
          _this.classicMode = null;
          _this.curState = null;
          _this.selfSkills = void 0;
          _this.oponentSkills = void 0;
          _this.moveValue = "";
          return _this;
        }
        var _proto = InGameManager.prototype;
        _proto.setState = function setState(stateSet) {
          console.log("SET STATE: ", stateSet);
          console.log("CUR STATE: ", this.inGameState);
          if (this.inGameState == stateSet) return;
          this.inGameState = stateSet;
          switch (this.inGameState) {
            case InGameState.START:
              // set , init something.
              console.log("SET START state INGAME MANAGER");
              ScreenManager.instance.showScreen(ScreenType.IN_GAME);
              break;
            case InGameState.IN_TURN:
              break;
            case InGameState.RESUME:
              if (this.roomType == RoomType.SKILL) {
                this.initSelfSkill();
                this.initOponentSkill();
              }
              break;
            case InGameState.LOSE:
              break;
            case InGameState.WIN:
              break;
          }
        };
        _proto.initSelfSkill = function initSelfSkill() {
          var _this2 = this;
          var _loop = function _loop(i) {
            var info = SkillInfo.find(function (item) {
              return item.skillId == define.selfSkills[i];
            });
            if (info) {
              var skill = new BaseSkill(info.name, info.skillId, info.description, info.attributes);
              _this2.selfSkills.insertSkill(define.selfSkills[i], skill);
            }
          };
          for (var i = 0; i < define.selfSkills.keys.length; i++) {
            _loop(i);
          }
        };
        _proto.initOponentSkill = function initOponentSkill() {
          var _this3 = this;
          var _loop2 = function _loop2(i) {
            var info = SkillInfo.find(function (item) {
              return item.skillId == define.oponentSkills[i];
            });
            if (info) {
              var skill = new BaseSkill(info.name, info.skillId, info.description, info.attributes);
              _this3.oponentSkills.insertSkill(define.oponentSkills[i], skill);
            }
          };
          for (var i = 0; i < define.oponentSkills.keys.length; i++) {
            _loop2(i);
          }
        };
        _proto.onLoad = function onLoad() {
          if (InGameManager._instance == null) {
            InGameManager._instance = this;
          } else {
            this.node.destroy();
          }
          eventMgr.on(EventName.IN_GAME, this.onInGame, this);
          console.log("INGAME LOAD");
        };
        _proto.start = function start() {
          eventMgr.on(EventName.UPDATE_SELF_SESSION_ID, this.setCurSessionID, this);
          eventMgr.on(EventName.ROOM_STATE_CHANGE, this.handleStateChange, this);
          eventMgr.on(EventName.PLAYER_STATE_CHANGE, this.handlePlayerChange, this);
        };
        _proto.onInGame = function onInGame() {
          console.log("ON IN GAME");
          this.setState(InGameState.START);
        };
        _proto.setCurSessionID = function setCurSessionID(id) {
          this.curSessionID = id;
        };
        _proto.handleStateChange = function handleStateChange(state) {
          console.log("State CHANGE: ", state);
          this.curState = state;
          this.updateBoard([].concat(state.board));
          this.updateResult(state.winner);
          if (this.roomType == RoomType.SKILL) {
            this.updateSkillObject(state.skillObjects);
          }
          if (state.currentTurn == this.curSessionID) {
            this.curTurn = true;
          } else {
            this.curTurn = false;
          }
          this.updateTurn();
        };
        _proto.handlePlayerChange = function handlePlayerChange(info, sessionID) {
          if (!info) return;
          if (sessionID == this.curSessionID) {
            this.moveValue = info.moveValue;
          } else {
            this.moveValue = info.moveValue == "X" ? "O" : "X";
          }
        };
        _proto.updateBoard = function updateBoard(board) {
          eventMgr.emit(EventName.UPDATE_BOARD, board);
        };
        _proto.updateResult = function updateResult(winner) {
          if (winner != null && winner.winnerId) {
            this.setState(winner.winnerId == this.curSessionID ? InGameState.WIN : InGameState.LOSE);
            console.log("WIIIINNN :", winner.winnerId);
            eventMgr.emit(EventName.END_GAME, winner.winnerId == this.curSessionID);
          }
        };
        _proto.updateSkillObject = function updateSkillObject(skillObjects) {
          eventMgr.emit(EventName.UPDATE_SKILL_OBJECT, skillObjects);
        };
        _proto.updateTurn = function updateTurn() {
          eventMgr.emit(EventName.UPDATE_TURN_INFO, this.curTurn);
        };
        _proto.handleCellClick = function handleCellClick(pos) {
          if (this.boardMoving) {
            this.boardMoving = false;
            return;
          }
          if (!this.curTurn) return;
          console.log("HANDLE CELL CLICK ", pos);
          if (this.selectedSkill != "") {
            WebSocketHandler.instance.sendSkillMove({
              skillId: this.selectedSkill,
              x: pos.x,
              y: pos.y
            });
            this.selectedSkill = ""; // Reset the skill selection after using it
          } else {
            var _WebSocketHandler$ins;
            (_WebSocketHandler$ins = WebSocketHandler.instance) == null || _WebSocketHandler$ins.sendMove({
              moveType: "NORMAL",
              x: pos.x,
              y: pos.y
            });
          }
        };
        _proto.handleSkill = function handleSkill(skillType) {
          console.log(skillType);
          if (skillType !== SkillId.QUAKE && skillType !== SkillId.BLOCKAGE && skillType != SkillId.TIME) {
            this.selectedSkill = skillType; // Set the selected skill
            return;
          } else {
            WebSocketHandler.instance.sendSkillMove({
              skillId: skillType,
              targetType: EffectTargetType.OPPONENT,
              x: 0,
              y: 0
            });
          }
        };
        _proto.isMovingBoard = function isMovingBoard() {
          return this.boardMoving;
        };
        _proto.setMovingBoard = function setMovingBoard(moving) {
          this.boardMoving = moving;
        };
        _proto.setRoomType = function setRoomType(type) {
          this.roomType = type;
          eventMgr.emit(EventName.UPDATE_ROOM_TYPE);
        };
        _proto.setClassicMode = function setClassicMode(mode) {
          this.classicMode = mode;
        };
        _proto.leaveRoom = function leaveRoom() {
          WebSocketHandler.instance.leave();
          eventMgr.emit(EventName.EXIT_MATCH);
        };
        _createClass(InGameManager, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              console.error('InGameManger is not initialized!');
            }
            return this._instance;
          }
        }]);
        return InGameManager;
      }(Component), _class2._instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InGameScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventMgr.ts', './InGameManager.ts', './Define.ts', './MainLogic.ts', './SkillButton.ts', './ScreenBase.ts', './DefineMatchLogin.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, Label, Prefab, instantiate, tween, UIOpacity, eventMgr, EventName, InGameManager, define, SkillId, ClassicMode, SkillName, SkillDes, MainLogic, SkillButton, ScreenBase, RoomType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      eventMgr = module.default;
      EventName = module.EventName;
    }, function (module) {
      InGameManager = module.InGameManager;
    }, function (module) {
      define = module.default;
      SkillId = module.SkillId;
      ClassicMode = module.ClassicMode;
      SkillName = module.SkillName;
      SkillDes = module.SkillDes;
    }, function (module) {
      MainLogic = module.MainLogic;
    }, function (module) {
      SkillButton = module.SkillButton;
    }, function (module) {
      ScreenBase = module.ScreenBase;
    }, function (module) {
      RoomType = module.RoomType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;
      cclegacy._RF.push({}, "2590f3wWD9IyaUKK0XupVSt", "InGameScreen", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var InGameScreen = exports('InGameScreen', (_dec = ccclass('InGameScreen'), _dec2 = property(Button), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property({
        group: {
          name: "Turn",
          style: "section"
        }
      }), _dec10 = property(Node), _dec11 = property({
        group: {
          name: "Turn",
          style: "section"
        }
      }), _dec12 = property(Node), _dec13 = property({
        group: {
          name: "Skill Info",
          style: "section"
        }
      }), _dec14 = property(Node), _dec15 = property({
        group: {
          name: "Skill Info",
          style: "section"
        }
      }), _dec16 = property(Label), _dec17 = property({
        group: {
          name: "Skill Info",
          style: "section"
        }
      }), _dec18 = property(Label), _dec19 = property({
        group: {
          name: "Skill Info",
          style: "section"
        }
      }), _dec20 = property(Label), _dec21 = property({
        group: {
          name: "Skill Info",
          style: "section"
        }
      }), _dec22 = property(Label), _dec23 = property({
        group: {
          name: "Skill Info",
          style: "section"
        }
      }), _dec24 = property(Button), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Prefab), _dec28 = property({
        group: {
          name: "Zoom",
          style: "section"
        }
      }), _dec29 = property(Button), _dec30 = property({
        group: {
          name: "Zoom",
          style: "section"
        }
      }), _dec31 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_ScreenBase) {
        _inheritsLoose(InGameScreen, _ScreenBase);
        function InGameScreen() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ScreenBase.call.apply(_ScreenBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "exitBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultNotiNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultText", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeToPlayResultGift", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "quickPlayResultGift", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turnText", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "usingSkill", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oponentActiveBg", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfActiveBg", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfSkillInfo", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfSkillName", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfSkillDes", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oponentTime", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfTime", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useSkillBtn", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfSkillContainer", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oponentSkillContainer", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skillButtonPref", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zoomIn", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zoomOut", _descriptor20, _assertThisInitialized(_this));
          _this.curSelectSkill = null;
          _this.selfSkills = [];
          _this.oponentSkills = [];
          _this.curTurn = null;
          _this.curTime = 0;
          return _this;
        }
        var _proto = InGameScreen.prototype;
        _proto.start = function start() {
          this.exitBtn.node.on("click", this.onExitClick, this);
          this.useSkillBtn.node.on("click", this.onUseSkillClick, this);
          this.zoomIn.node.on("click", this.onZoomInClick, this);
          this.zoomOut.node.on("click", this.onZoomOutClick, this);
          eventMgr.on(EventName.END_GAME, this.onEndGame, this);
          eventMgr.on(EventName.UPDATE_TURN_INFO, this.updateTurnInfo, this);
          eventMgr.on(EventName.CLEAR_SKILL_USING, this.clearSkillUsing, this);
          eventMgr.on(EventName.UPDATE_ROOM_TYPE, this.onUpdateRoomType, this);
          eventMgr.on(EventName.CHANGE_SELECT_SKILL, this.onSelectedSkillChange, this);
          console.log("IN game START");
          eventMgr.emit(EventName.SHOW_TOAST, "Touch 2 times to confirm the position of chess piece");
          //tmp
        };

        _proto.onEnable = function onEnable() {
          this.resultNotiNode.active = false;
          var roomType = InGameManager.instance.roomType;
          this.setupBoard(roomType);
          var turn = InGameManager.instance.curTurn;
          this.updateTurnInfo(turn);
        };
        _proto.onUpdateRoomType = function onUpdateRoomType() {
          var roomType = InGameManager.instance.roomType;
          this.setupBoard(roomType);
        };
        _proto.setupBoard = function setupBoard(roomType) {
          if (roomType == RoomType.SKILL) {
            this.setupSkill();
            this.selfSkillInfo.active = true;
          } else {
            this.clearSkillUI();
            this.selfSkillInfo.active = false;
          }
        };
        _proto.update = function update(deltaTime) {
          if (this.curTurn) {
            this.curTime -= deltaTime;
            this.oponentActiveBg.active = !this.curTurn;
            this.selfActiveBg.active = this.curTurn;
            var targetTimeLabel = this.curTurn ? this.selfTime : this.oponentTime;
            targetTimeLabel.string = Math.floor(this.curTime).toString();
          }
        };
        _proto.onResetClick = function onResetClick() {
          MainLogic._intance.resetBoad();
        };
        _proto.onExitClick = function onExitClick() {
          this.resultNotiNode.active = false;
          InGameManager.instance.leaveRoom();
        };
        _proto.onUseSkillClick = function onUseSkillClick() {
          InGameManager.instance.handleSkill(this.curSelectSkill);
          this.clearUsingSkillText();
        };
        _proto.setupSkill = function setupSkill() {
          this.clearSkillUI();
          for (var i = 0; i < define.oponentSkills.length; i++) {
            var type = define.oponentSkills[i];
            var newOpSkillBtn = instantiate(this.skillButtonPref);
            newOpSkillBtn.getComponent(SkillButton).setup(type);
            this.oponentSkillContainer.addChild(newOpSkillBtn);
          }
          for (var _i = 0; _i < define.selfSkills.length; _i++) {
            var _type = define.selfSkills[_i];
            var newSelfSkillBtn = instantiate(this.skillButtonPref);
            newSelfSkillBtn.getComponent(SkillButton).setup(_type);
            this.selfSkillContainer.addChild(newSelfSkillBtn);
          }
        };
        _proto.clearSkillUI = function clearSkillUI() {
          this.oponentSkillContainer.destroyAllChildren();
          this.oponentSkillContainer.removeAllChildren();
          this.selfSkillContainer.destroyAllChildren();
          this.selfSkillContainer.removeAllChildren();
        };
        _proto.onSelectedSkillChange = function onSelectedSkillChange(skillType) {
          this.updateSkillName(skillType);
          this.curSelectSkill = skillType;
        };
        _proto.clearUsingSkillText = function clearUsingSkillText() {
          this.curSelectSkill = SkillId.NONE;
          this.updateSkillName(this.curSelectSkill);
        }

        //#region Handle event
        ;

        _proto.onEndGame = function onEndGame(win) {
          var _this2 = this;
          this.resultText.string = win ? "You WIN" : "You LOSE";
          eventMgr.emit(EventName.SHOW_TOAST, win ? "You WIN" : "You LOSE");
          this.scheduleOnce(function () {
            _this2.showEndGameResult();
          }, 2);
        };
        _proto.showEndGameResult = function showEndGameResult() {
          this.resultNotiNode.active = true;
          var inIngameIns = InGameManager.instance;
          if (inIngameIns.roomType == RoomType.NORMAL) {
            this.freeToPlayResultGift.active = inIngameIns.classicMode == ClassicMode.FREE_TO_PLAY;
            this.quickPlayResultGift.active = inIngameIns.classicMode == ClassicMode.QUICK_PLAY;
          } else {
            this.freeToPlayResultGift.active = false;
            this.quickPlayResultGift.active = false;
          }
        };
        _proto.updateSkillName = function updateSkillName(skillType) {
          var targetSkillName = this.selfSkillName;
          var targetSkillDes = this.selfSkillDes;
          switch (skillType) {
            case SkillId.SEED:
              this.usingSkill.string = "Skill:" + SkillName.SEED;
              targetSkillName.string = SkillName.SEED;
              targetSkillDes.string = SkillDes.SEED;
              break;
            case SkillId.BOMB:
              this.usingSkill.string = "Skill:" + SkillName.BOMB;
              targetSkillName.string = SkillName.BOMB;
              targetSkillDes.string = SkillDes.BOMB;
              break;
            case SkillId.RAIN:
              this.usingSkill.string = "Skill:" + SkillName.RAIN;
              targetSkillName.string = SkillName.RAIN;
              targetSkillDes.string = SkillDes.RAIN;
              break;
            case SkillId.QUAKE:
              this.usingSkill.string = "Skill:" + SkillName.QUAKE;
              targetSkillName.string = SkillName.QUAKE;
              targetSkillDes.string = SkillDes.QUAKE;
              break;
            case SkillId.TIME:
              this.usingSkill.string = "Skill:" + SkillName.TIME;
              targetSkillName.string = SkillName.TIME;
              targetSkillDes.string = SkillDes.TIME;
              break;
            case SkillId.BLOCKAGE:
              this.usingSkill.string = "Skill:" + SkillName.BLOCKAGE;
              targetSkillName.string = SkillName.BLOCKAGE;
              targetSkillDes.string = SkillDes.BLOCKAGE;
              break;
            case SkillId.FROZONE:
              this.usingSkill.string = "Skill:" + SkillName.FROZONE;
              targetSkillName.string = SkillName.FROZONE;
              targetSkillDes.string = SkillDes.FROZONE;
              break;
            case SkillId.THORN_BALL:
              this.usingSkill.string = "Skill: " + SkillName.THORN;
              targetSkillName.string = SkillName.THORN;
              targetSkillDes.string = SkillDes.THORN;
              break;
            case SkillId.DISGUISE:
              this.usingSkill.string = "Skill: " + SkillName.DISGUISE;
              targetSkillName.string = SkillName.DISGUISE;
              targetSkillDes.string = SkillDes.DISGUISE;
              break;
            case SkillId.NONE:
              // this.usingSkill.string = "";
              // targetSkillName.string = "----------------";
              // targetSkillDes.string = "-------";
              break;
          }
        };
        _proto.updateTurnInfo = function updateTurnInfo(isTurn) {
          if (this.curTurn == isTurn) return;
          this.curTurn = isTurn;
          this.curTime = define.turnTime;
          this.turnText.string = isTurn ? InGameManager.instance.moveValue : "";
          this.oponentActiveBg.active = !isTurn;
          this.selfActiveBg.active = isTurn;
          this.selfTime.node.active = isTurn;
          this.oponentTime.node.active = !isTurn;
          this.flickerPlayerBg();
        };
        _proto.clearSkillUsing = function clearSkillUsing() {
          this.selfSkillName.string = "----------------";
          this.selfSkillDes.string = "-------";
        };
        _proto.flickerPlayerBg = function flickerPlayerBg() {
          tween(this.oponentActiveBg.getComponent(UIOpacity)).to(0.5, {
            opacity: 10
          }).to(0.5, {
            opacity: 255
          }).union().repeatForever().start();
          tween(this.selfActiveBg.getComponent(UIOpacity)).to(0.5, {
            opacity: 10
          }).to(0.5, {
            opacity: 255
          }).union().repeatForever().start();
        }

        //#endregion Handle event
        ;

        _proto.onNoSkillClick = function onNoSkillClick() {
          MainLogic._intance.unuseSkill();
        }

        //#region ZOOM
        ;

        _proto.onZoomInClick = function onZoomInClick() {
          eventMgr.emit(EventName.ZOOM_IN_BOARD);
        };
        _proto.onZoomOutClick = function onZoomOutClick() {
          eventMgr.emit(EventName.ZOOM_OUT_BOARD);
        }
        //#endregion
        ;

        return InGameScreen;
      }(ScreenBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "exitBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "resultNotiNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resultText", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "freeToPlayResultGift", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "quickPlayResultGift", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "turnText", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "usingSkill", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "oponentActiveBg", [_dec9, _dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "selfActiveBg", [_dec11, _dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "selfSkillInfo", [_dec13, _dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "selfSkillName", [_dec15, _dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "selfSkillDes", [_dec17, _dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "oponentTime", [_dec19, _dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "selfTime", [_dec21, _dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "useSkillBtn", [_dec23, _dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "selfSkillContainer", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "oponentSkillContainer", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "skillButtonPref", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "zoomIn", [_dec28, _dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "zoomOut", [_dec30, _dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JoinRoomRequest.ts", ['cc', './DefineMatchLogin.ts', './UserManager.ts'], function (exports) {
  var cclegacy, RoomType, RoomMode, UserManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      RoomType = module.RoomType;
      RoomMode = module.RoomMode;
    }, function (module) {
      UserManager = module.UserManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "93cafETaO9CSpOYabClWOsm", "JoinRoomRequest", undefined);
      var JoinRoomRequest = exports('JoinRoomRequest', /*#__PURE__*/function () {
        function JoinRoomRequest() {}
        var _proto = JoinRoomRequest.prototype;
        _proto.getInfoNormalMode = function getInfoNormalMode() {
          var userProfile = UserManager.instance.userProfile;
          var request = {
            roomType: RoomType.NORMAL,
            roomMode: RoomMode.PVP,
            address: userProfile.wallets['tomo'].publicKey,
            avatar: "",
            username: userProfile.tgUser.userName
          };
          return request;
        };
        _proto.getInfoSkillMode = function getInfoSkillMode() {
          var userProfile = UserManager.instance.userProfile;
          var request = {
            roomType: RoomType.SKILL,
            roomMode: RoomMode.PVP,
            address: userProfile.wallets['tomo'].publicKey,
            avatar: "",
            username: userProfile.tgUser.userName
          };
          return request;
        };
        return JoinRoomRequest;
      }());

      //get player profile and preferences
      // get game setting.
      // collect to create a request follow profile info and game setting.
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingOverlay.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b32b9/JQHhAQqR9bz5B9cfX", "LoadingOverlay", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LoadingOverlay = exports('LoadingOverlay', (_dec = ccclass('LoadingOverlay'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadingOverlay, _Component);
        function LoadingOverlay() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = LoadingOverlay.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return LoadingOverlay;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "db213vsIpNJO47Bu9ZIB//U", "LoginManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // export declare namespace RamperInstant {
      //     export function initializeAsync(
      //         options: {gameId: string, serverEng: string, partner: string },
      //         onReceiveMessageCallback: (data: any) => void
      //     ): Promise<any>;

      //     export function doSignIn(ccWebView: WebView): void;
      //     export function doSignOut(ccWebView: WebView): void;
      // }

      var LoginManager = exports('LoginManager', (_dec = ccclass('LoginManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoginManager, _Component);
        function LoginManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.userProfile = null;
          return _this;
        }
        var _proto = LoginManager.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return LoginManager;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.cjs.mjs_cjs=&original=.js', './EventMgr.ts', './ScreenBase.ts', './DefineMatchLogin.ts', './UserManager.ts', './index.cjs.js'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _extends, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, Button, eventMgr, EventName, ScreenBase, Partner, UserManager, _cjsExports;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _extends = module.extends;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Button = module.Button;
    }, null, function (module) {
      eventMgr = module.default;
      EventName = module.EventName;
    }, function (module) {
      ScreenBase = module.ScreenBase;
    }, function (module) {
      Partner = module.Partner;
    }, function (module) {
      UserManager = module.UserManager;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "a4016d4eUFEdKT90FkTNVFW", "LoginScreen", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LoginScreen = exports('LoginScreen', (_dec = ccclass('LoginScreen'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Button), _dec14 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_ScreenBase) {
        _inheritsLoose(LoginScreen, _ScreenBase);
        function LoginScreen() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ScreenBase.call.apply(_ScreenBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "webMsgText", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "userRefText", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "userProfileText", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sdkVerText", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "indiciator", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "signMsgButtonNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameConnectButtonNode", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "getReferralButtonNode", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "setReferralButtonNode", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "copyRefCodeButtonNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "setRefCodeEditBoxNode", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fakePassLogin", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "copyJWT", _descriptor13, _assertThisInitialized(_this));
          _this.userRefInfo = null;
          _this.targetRefCode = '';
          _this.JWT = "";
          return _this;
        }
        var _proto = LoginScreen.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.indiciator.active = true;
          this.signMsgButtonNode.active = false;
          this.gameConnectButtonNode.active = false;
          this.getReferralButtonNode.active = false;
          this.setReferralButtonNode.active = false;
          var config = {
            gameId: 'eternal',
            partner: Partner.COIN98,
            appId: 'knywqhljpx',
            source: 'ETERNAL',
            onSignInFail: function onSignInFail(ev) {
              console.error('ev onSignInFail', ev);
              _this2.indiciator.active = false;
            },
            onSignInSucess: function onSignInSucess(uProfile) {
              console.log('sign-in-success', uProfile);
              UserManager.instance.userProfile = _extends({}, uProfile['data']);
              var usrProfile = UserManager.instance.userProfile;
              console.log("USER PROFILE : ", usrProfile);
              _this2.updateUserProfile();
              console.log(UserManager.instance.userProfile);
              _this2.webMsgText.string = "Hello " + usrProfile.tgUser.name;
              _this2.indiciator.active = false;
              var wallet = _extends({}, usrProfile.wallets['tomo']);
              if (wallet) {
                _this2.webMsgText.string += "\nChain:" + usrProfile.chainConfig + "\nPublicKey:" + JSON.stringify(wallet.publicKey);
              }
              _this2.gameConnectButtonNode.active = true;
              _this2.getReferralButtonNode.active = false;
              _this2.setReferralButtonNode.active = false;
              _this2.signMsgButtonNode.active = false;
            },
            onSignMessage: function onSignMessage(msg) {
              _this2.webMsgText.string += "\n" + msg;
              console.log('sign-message-success', msg);
              _this2.indiciator.active = false;
              _this2.gameConnectButtonNode.active = true;
              _this2.getReferralButtonNode.active = false;
              _this2.setReferralButtonNode.active = false;
              _this2.signMsgButtonNode.active = false;
              _this2.updateUserProfile();
            }
          };
          _cjsExports.initializeAsync(config, 'preprod').then(function () {
            console.log('Init ramper success ' + _cjsExports.getSDKVersion());
            _this2.sdkVerText.string += "\nSDK-" + _cjsExports.getSDKVersion();
          })["catch"](function (reason) {
            console.error(reason.message);
          });
          this.gameConnectButtonNode.on('click', this.onClickGameConnect.bind(this));
          this.getReferralButtonNode.on('click', this.onClickGetReferral.bind(this));
          this.copyRefCodeButtonNode.on('click', this.onClickClipboardRefCode.bind(this));
          this.signMsgButtonNode.on('click', function () {
            _this2.indiciator.active = true;
            _this2.signMsgButtonNode.active = false;
          });
          this.setReferralButtonNode.children[1].on('click', this.onClickSetReferral.bind(this));
          this.setReferralButtonNode.children[0].on('editing-did-ended', this.onEditingDidEnded.bind(this));
          this.fakePassLogin.node.on('click', this.onFakePassLoginClick, this);
          this.copyJWT.node.on('click', this.onCopyJWTClick, this);
        };
        _proto.onEditingDidEnded = function onEditingDidEnded(editbox) {
          console.log('[editingDidEnded]' + editbox.string);
          this.targetRefCode = editbox.string;
          this.setReferralButtonNode.children[1].active = true;
        };
        _proto.updateUserProfile = function updateUserProfile() {
          var usrProfile = UserManager.instance.userProfile;
          if (usrProfile) {
            this.userProfileText.string = "Name:" + usrProfile.tgUser.name + "\nAddress:" + usrProfile.wallets['tomo'].publicKey;
          }
          this.userRefText.node.active = false;
          this.userRefText.string = "";
          if (this.userRefInfo) {
            for (var i in this.userRefInfo) {
              this.userRefText.node.active = true;
              this.userRefText.string += i + ": " + this.userRefInfo[i] + "\n";
            }
          }
        };
        _proto.onClickClipboardRefCode = function onClickClipboardRefCode(ev) {
          this.copyRefCode(this.userRefInfo.refCode);
        }

        // Function to copy text to the clipboard
        ;

        _proto.copyRefCode = /*#__PURE__*/
        function () {
          var _copyRefCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(refCode) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return navigator.clipboard.writeText(refCode);
                case 3:
                  console.log('Text copied to clipboard:', refCode);
                  _context.next = 9;
                  break;
                case 6:
                  _context.prev = 6;
                  _context.t0 = _context["catch"](0);
                  console.error('Failed to copy: ', _context.t0);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[0, 6]]);
          }));
          function copyRefCode(_x) {
            return _copyRefCode.apply(this, arguments);
          }
          return copyRefCode;
        }();
        _proto.onClickGameConnect = function onClickGameConnect(ev) {
          var _this3 = this;
          this.indiciator.active = true;
          this.gameConnectButtonNode.active = false;
          _cjsExports.gameConnect().then(function (resp) {
            _this3.webMsgText.string = JSON.stringify(resp);
            _this3.JWT = JSON.stringify(resp);
            _this3.getReferralButtonNode.active = true;
            _this3.setReferralButtonNode.active = false;
            _this3.indiciator.active = false;
            eventMgr.emit(EventName.LOGIN_SUCCESS);
          })["catch"](function (err) {
            return console.error(err);
          });
        };
        _proto.onClickSetReferral = function onClickSetReferral(ev) {
          this.indiciator.active = true;
          this.setReferralButtonNode.active = false;
          console.log("NEW LIB RAMPER DON'T HAVE SET REFERAL");
          // RamperTelegram.setReferral(this.targetRefCode,
          //     PlatformSource.ETERNAL)
          //     .then(resp => {
          //         this.webMsgText.string = resp;

          //         console.log("[Main]onClickSetReferral", resp);
          //         this.updateUserProfile();
          //         this.getReferralButtonNode.active = true;
          //         this.gameConnectButtonNode.active = false;
          //         this.indiciator.active = false;
          //         this.onClickGetReferral(null);
          //     }).catch(err => console.error(err));
        };

        _proto.onClickGetReferral = function onClickGetReferral(ev) {
          var _this4 = this;
          this.indiciator.active = true;
          this.getReferralButtonNode.active = false;
          _cjsExports.getReferral().then(function (resp) {
            _this4.userRefInfo = _extends({}, resp.data);
            _this4.webMsgText.string = JSON.stringify(resp);
            _this4.gameConnectButtonNode.active = false;
            _this4.setReferralButtonNode.active = true;
            _this4.indiciator.active = false;
            _this4.updateUserProfile();
            console.log("[Main]onClickGetReferral", resp);
          })["catch"](function (err) {
            return console.error(err);
          });
        };
        _proto.onWebViewLoaded = function onWebViewLoaded() {
          console.log('WebView has finished loading');
        };
        _proto.onFakePassLoginClick = function onFakePassLoginClick() {
          eventMgr.emit(EventName.LOGIN_SUCCESS);
        };
        _proto.onCopyJWTClick = function onCopyJWTClick() {
          navigator.clipboard.writeText(this.JWT);
          console.log("COPIED JWT TO CLIPBOARD");
        };
        return LoginScreen;
      }(ScreenBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "webMsgText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "userRefText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "userProfileText", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sdkVerText", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "indiciator", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "signMsgButtonNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gameConnectButtonNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "getReferralButtonNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "setReferralButtonNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "copyRefCodeButtonNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "setRefCodeEditBoxNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "fakePassLogin", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "copyJWT", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./InGameScreen.ts', './LoginManager.ts', './LoginScreen.ts', './JoinRoomRequest.ts', './MatchingScreen.ts', './BasePopup.ts', './ErrorPopup.ts', './LoadingOverlay.ts', './DefineMatchLogin.ts', './BaseSkill.ts', './MoveResponse.ts', './SkillInfo.ts', './SkillObject.ts', './SkillRepository.ts', './UserProfile.ts', './EventMgr.ts', './GameManager.ts', './InGameManager.ts', './PopupManager.ts', './ScreenManager.ts', './SoundManager.ts', './UserManager.ts', './Cell.ts', './Chessboard.ts', './Define.ts', './SpawnObject.ts', './MainLogic.ts', './SkillButton.ts', './APIHandler.ts', './NetworkManager.ts', './WebSocketHandler.ts', './ScreenBase.ts', './ToastHolder.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainLogic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Define.ts', './EventMgr.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, Vec2, Rect, Component, define, SkillId, PlaceholderType, ObjectType, eventMgr, EventName;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
      Rect = module.Rect;
      Component = module.Component;
    }, function (module) {
      define = module.default;
      SkillId = module.SkillId;
      PlaceholderType = module.PlaceholderType;
      ObjectType = module.ObjectType;
    }, function (module) {
      eventMgr = module.default;
      EventName = module.EventName;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fd028cUNWNHw4xryux6RrFZ", "MainLogic", undefined);
      // import { Bot } from './Bot';

      var MainLogic = exports('MainLogic', /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainLogic, _Component);
        function MainLogic() {
          var _this;
          _this = _Component.call(this) || this;
          _this.sizeChess = 25;
          _this.turn = 0;
          _this.chessboard = [];
          _this.seedList = [];
          _this.bombList = [];
          _this.iceList = [];
          _this.blockList = [];
          _this.thornList = [];
          _this.disguiseList = [];
          // removeBombList: bomb[] = [];
          _this.removeSkillList = [];
          // isUsingSeed: boolean = false;
          // isUsingBomb: boolean = false;
          // isUsingRain: boolean = false;
          _this.initDone = false;
          _this.curPlaceholder = [];
          _this.curUsingSkill = SkillId.NONE;
          _this.timeSchedule = void 0;
          _this.curTime = 0;
          _this.oTurnReduceTime = 0;
          _this.xTurnReduceTime = 0;
          _this.isPlayWithBot = false;
          _this.boardMoving = false;
          return _this;
        }
        var _proto = MainLogic.prototype;
        _proto.startCountTime = function startCountTime() {
          var _this2 = this;
          this.curTime = 0;
          this.timeSchedule = setInterval(function () {
            _this2.curTime += 1;
            var checkTimeX = _this2.xTurnReduceTime > 0 ? Math.ceil(define.turnTime / 2) : define.turnTime;
            var checkTimeO = _this2.oTurnReduceTime > 0 ? Math.ceil(define.turnTime / 2) : define.turnTime;
            var checkTime = _this2.turn % 2 == 0 ? checkTimeO : checkTimeX;
            if (_this2.curTime >= checkTime) {
              eventMgr.emit(EventName.END_GAME, _this2.turn + 1);
              _this2.endCountTime();
            }
          }, 1000);
        };
        _proto.endCountTime = function endCountTime() {
          this.curTime = 0;
          clearInterval(this.timeSchedule);
        };
        _proto.initChessboardData = function initChessboardData() {
          for (var x = 0; x < this.sizeChess; x++) {
            this.chessboard[x] = [];
            for (var y = 0; y < this.sizeChess; y++) {
              this.chessboard[x].push("");
            }
          }
          eventMgr.emit(EventName.INIT_BOARD);
          this.initDone = true;
          this.startCountTime();
        };
        _proto.toggleSkill = function toggleSkill(skillType) {
          eventMgr.emit(EventName.CLEAR_PLACEHOLDER);
          this.curUsingSkill = skillType;
          if (skillType == SkillId.NONE) {
            this.showPlaceHolder(PlaceholderType.NONE);
          }
        };
        _proto.unuseSkill = function unuseSkill() {
          this.toggleSkill(SkillId.NONE);
        };
        _proto.nextTurn = function nextTurn() {
          this.turn += 1;
          this.curTime = 0;
          this.curUsingSkill = SkillId.NONE;
          this.updateSeedByTurn();
          this.updateBombByTurn();
          this.updateIceByTurn();
          this.updateBlockByTurn();
          this.updateThornByTurn();
          this.updateDisguiseByTurn();
          eventMgr.emit(EventName.UPDATE_BOARD);
          eventMgr.emit(EventName.UPDATE_SEED_SHOW);
          eventMgr.emit(EventName.UPDATE_BOMB_SHOW);
          eventMgr.emit(EventName.UPDATE_ICE_SHOW);
          eventMgr.emit(EventName.UPDATE_BLOCK_SHOW);
          eventMgr.emit(EventName.UPDATE_THORN_SHOW);
          eventMgr.emit(EventName.UPDATE_DISGUISE_SHOW, this.turn % 2 == 0 ? "O" : "X");
          eventMgr.emit(EventName.UPDATE_TURN_INFO, this.turn % 2 == 0 ? "O" : "X");
          if (this.oTurnReduceTime > 0) {
            this.oTurnReduceTime -= 1;
          }
          if (this.xTurnReduceTime > 0) {
            this.xTurnReduceTime -= 1;
          }
          eventMgr.emit(EventName.CLEAR_SKILL_USING);
          if (this.isPlayWithBot && this.turn % 2 == 1) {
            this.onInBotTurn();
          }
        };
        _proto.isMovingBoard = function isMovingBoard() {
          return this.boardMoving;
        };
        _proto.setMovingBoard = function setMovingBoard(moving) {
          this.boardMoving = moving;
        };
        _proto.selectedCellStart = function selectedCellStart(pos) {
          if (this.curUsingSkill == SkillId.RAIN) {
            eventMgr.emit(EventName.CLEAR_PLACEHOLDER, this.curPlaceholder);
            this.curPlaceholder = this.getPlaceholder(PlaceholderType.SIZE_FIVE, pos);
            eventMgr.emit(EventName.UPDATE_PLACEHODLER, this.curPlaceholder);
          }
        };
        _proto.selectedCellChange = function selectedCellChange(pos) {
          if (this.curUsingSkill != SkillId.RAIN) return;
          eventMgr.emit(EventName.CLEAR_PLACEHOLDER, this.curPlaceholder);
          this.curPlaceholder = this.getPlaceholder(PlaceholderType.SIZE_FIVE, pos);
          eventMgr.emit(EventName.UPDATE_PLACEHODLER, this.curPlaceholder);
        };
        _proto.selectedCellConfirm = function selectedCellConfirm(pos) {
          if (this.boardMoving) {
            this.boardMoving = false;
            return;
          }
          switch (this.curUsingSkill) {
            case SkillId.SEED:
              if (this.setSeedAt(pos)) {
                this.toggleSkill(SkillId.NONE);
                this.showPlaceHolder(PlaceholderType.NONE);
                eventMgr.emit(EventName.UPDATE_SEED_SHOW);
              }
              break;
            case SkillId.BOMB:
              if (this.setBombAt(pos)) {
                this.toggleSkill(SkillId.NONE);
                this.showPlaceHolder(PlaceholderType.NONE);
                eventMgr.emit(EventName.UPDATE_BOMB_SHOW);
              } else {
                eventMgr.emit(EventName.SHOW_TOAST, "Invalid bomb pos");
              }
              break;
            case SkillId.RAIN:
              console.log("CONFIRM CHANGE: ", pos);
              var rainRegion = this.curPlaceholder;
              this.rainInRegion(rainRegion);
              eventMgr.emit(EventName.UPDATE_SEED_SHOW);
              eventMgr.emit(EventName.UPDATE_BOMB_SHOW);
              eventMgr.emit(EventName.UPDATE_BOARD);
              // action rain login
              eventMgr.emit(EventName.CLEAR_PLACEHOLDER, this.curPlaceholder);
              this.curPlaceholder = [];
              this.toggleSkill(SkillId.NONE);
              break;
            case SkillId.FROZONE:
              if (this.setIceAt(pos)) {
                this.toggleSkill(SkillId.NONE);
                this.showPlaceHolder(PlaceholderType.NONE);
                eventMgr.emit(EventName.UPDATE_ICE_SHOW);
              } else {
                eventMgr.emit(EventName.SHOW_TOAST, "Invalid ice pos");
              }
              break;
            case SkillId.THORN_BALL:
              if (this.setThornAt(pos)) {
                this.toggleSkill(SkillId.NONE);
                this.showPlaceHolder(PlaceholderType.NONE);
                eventMgr.emit(EventName.UPDATE_THORN_SHOW);
              } else {
                eventMgr.emit(EventName.SHOW_TOAST, "Invalid thorn pos");
              }
              break;
            default:
              var tryMoveResult = this.addStone(pos.x, pos.y, this.turn % 2 == 1);
              if (tryMoveResult) {
                if (this.checkWin(pos, this.chessboard)) {
                  eventMgr.emit(EventName.END_GAME, this.turn);
                } else {
                  this.nextTurn();
                  eventMgr.emit(EventName.UPDATE_BOARD);
                }
              }
              break;
          }
        };
        _proto.addStone = function addStone(x, y, xMove) {
          var result = false;
          var curChessMan = xMove ? "X" : "O";
          if (this.chessboard[x][y] == "") {
            this.chessboard[x][y] = curChessMan;
            result = true;
          }
          if (this.chessboard[x][y] == ObjectType.SEED) {
            var k = this.findSeedAt(new Vec2(x, y));
            if (k && k.owner != curChessMan) {
              this.removeSeedAt(new Vec2(x, y));
              this.chessboard[x][y] = curChessMan;
              result = true;
            }
          }
          return result;
        };
        _proto.resetBoad = function resetBoad() {
          for (var i = 0; i < this.sizeChess; i++) {
            for (var j = 0; j < this.sizeChess; j++) {
              this.chessboard[j][i] = "";
            }
          }
          this.seedList = [];
          this.bombList = [];
          this.iceList = [];
          this.blockList = [];
          this.thornList = [];
          this.disguiseList = [];
          eventMgr.emit(EventName.UPDATE_TURN_INFO, false);
          eventMgr.emit(EventName.RESET_BOARD);
          this.turn = 0;
          this.endCountTime();
          this.startCountTime();
          this.oTurnReduceTime = 0;
          this.xTurnReduceTime = 0;
          this.unuseSkill();
        };
        _proto.getBoardAtPos = function getBoardAtPos(x, y, board) {
          if (x < 0 || x >= this.sizeChess || y < 0 || y >= this.sizeChess) return null;
          return board[x][y];
        };
        _proto.checkWin = function checkWin(pos, board, value) {
          var d = 0,
            k = pos.x;
          var i = pos.x,
            j = pos.y;
          var valueCheck = value ? value : this.getBoardAtPos(i, j, board);
          //check row
          while (this.getBoardAtPos(k, j, board) == valueCheck) {
            d++;
            k++;
          }
          k = i - 1;
          while (this.getBoardAtPos(k, j, board) == valueCheck) {
            d++;
            k--;
          }
          if (d == 5) return true;
          d = 0;
          var h = j;
          // check column
          while (this.getBoardAtPos(i, h, board) == valueCheck) {
            d++;
            h++;
          }
          h = j - 1;
          while (this.getBoardAtPos(i, h, board) == valueCheck) {
            d++;
            h--;
          }
          if (d == 5) return true;

          //check diagonal 1
          h = i, k = j, d = 0;
          while (this.getBoardAtPos(h, k, board) == valueCheck) {
            d++;
            h++;
            k++;
          }
          h = i - 1;
          k = j - 1;
          while (this.getBoardAtPos(h, k, board) == valueCheck) {
            d++;
            h--;
            k--;
          }
          if (d == 5) return true;

          // check diagonal 2

          h = i, k = j, d = 0;
          while (this.getBoardAtPos(h, k, board) == valueCheck) {
            d++;
            h++;
            k--;
          }
          h = i - 1;
          k = j + 1;
          while (this.getBoardAtPos(h, k, board) == valueCheck) {
            d++;
            h--;
            k++;
          }
          if (d >= 5) return true;
          return false;
        }

        //#region Skill Seed
        ;

        _proto.resetSeedList = function resetSeedList() {
          this.seedList = [];
        };
        _proto.updateSeedByTurn = function updateSeedByTurn() {
          for (var i = 0; i < this.seedList.length; i++) {
            var seedI = this.seedList[i];
            if (this.turn % 2 == 0 && seedI.owner == "O") {
              seedI.livedTurn += 1;
            }
            if (this.turn % 2 == 1 && seedI.owner == "X") {
              seedI.livedTurn += 1;
            }
            if (seedI.livedTurn >= define.seedGrownTurn) {
              this.chessboard[seedI.pos.x][seedI.pos.y] = seedI.owner;
              if (this.checkWin(seedI.pos, this.chessboard)) {
                eventMgr.emit(EventName.END_GAME, this.turn);
              }
            }
          }
          this.seedList = this.seedList.filter(function (item) {
            return item.livedTurn < define.seedGrownTurn;
          });
        };
        _proto.addRemoveSkillPos = function addRemoveSkillPos(cellNum, skillOrder) {
          var removeSkillPos = {
            cellNum: cellNum,
            skillOrder: skillOrder
          };
          this.removeSkillList.push(removeSkillPos);
        };
        _proto.useSeed = function useSeed() {
          this.toggleSkill(SkillId.SEED);
          this.showPlaceHolder(PlaceholderType.EMPTY_CELLS);
        };
        _proto.setSeedAt = function setSeedAt(pos) {
          if (this.chessboard[pos.x][pos.y] != "") return false;
          this.chessboard[pos.x][pos.y] = ObjectType.SEED;
          var newSeed = {
            pos: pos,
            owner: this.turn % 2 == 0 ? "O" : "X",
            livedTurn: 1
          };
          this.seedList.push(newSeed);
          return true;
        };
        _proto.removeSeedAt = function removeSeedAt(pos) {
          this.seedList = this.seedList.filter(function (item) {
            return item.pos.x != pos.x && item.pos.y != pos.y;
          });
        };
        _proto.findSeedAt = function findSeedAt(pos) {
          return this.seedList.find(function (item) {
            return item.pos.x == pos.x && item.pos.y == pos.y;
          });
        };
        _proto.removeSeed = function removeSeed(removeList) {
          for (var i = 0; i < removeList.length; i++) {
            this.chessboard[removeList[i].pos.x][removeList[i].pos.y] = "";
          }
        }

        //#endregion SKILL SEED

        //#region SKILL BOMB
        ;

        _proto.useBomb = function useBomb() {
          this.toggleSkill(SkillId.BOMB);
          this.showPlaceHolder(this.turn % 2 == 0 ? PlaceholderType.X_CELLS : PlaceholderType.O_CELLS);
        };
        _proto.setBombAt = function setBombAt(pos) {
          var valuePos = this.chessboard[pos.x][pos.y];
          var targetText = this.turn % 2 == 0 ? "X" : "O";
          if (valuePos != targetText) return false;
          var newBomb = {
            pos: pos,
            owner: this.turn % 2 == 0 ? "O" : "X",
            existTurn: 1
          };
          this.bombList.push(newBomb);
          return true;
        };
        _proto.updateBombByTurn = function updateBombByTurn() {
          for (var i = 0; i < this.bombList.length; i++) {
            this.bombList[i].existTurn += 1;
            if (this.bombList[i].existTurn > define.bombExplodeTurn) {
              var pos = this.bombList[i].pos;
              this.chessboard[pos.x][pos.y] = "";
            }
          }
          var removeBombList = this.bombList.filter(function (item) {
            return item.existTurn > define.bombExplodeTurn;
          });
          this.bombList = this.bombList.filter(function (item) {
            return item.existTurn <= define.bombExplodeTurn;
          });
          if (removeBombList.length > 0) {
            eventMgr.emit(EventName.REMOVE_BOMB, removeBombList);
          }
        }

        //#endregion SKILL BOMB

        //#region Placeholder
        ;

        _proto.showPlaceHolder = function showPlaceHolder(type) {
          eventMgr.emit(EventName.CLEAR_PLACEHOLDER, this.curPlaceholder);
          this.curPlaceholder = this.getPlaceholder(type);
          eventMgr.emit(EventName.UPDATE_PLACEHODLER, this.curPlaceholder);
        };
        _proto.getPlaceholder = function getPlaceholder(type, pos) {
          //Note: when get new placeholder, deactive old placeholder.
          var result = [];
          if (type == PlaceholderType.SIZE_FIVE) {
            for (var y = pos.y - 2; y <= pos.y + 2; y++) {
              for (var x = pos.x - 2; x <= pos.x + 2; x++) {
                if (x < 0 || y < 0 || x >= this.sizeChess || y >= this.sizeChess) continue;
                var newPos = new Vec2(x, y);
                result.push(newPos);
              }
            }
          }
          if (type == PlaceholderType.EMPTY_CELLS) {
            for (var _x = 0; _x < this.sizeChess; _x++) {
              for (var _y = 0; _y < this.sizeChess; _y++) {
                if (this.chessboard[_x][_y] == "") {
                  var _newPos = new Vec2(_x, _y);
                  result.push(_newPos);
                }
              }
            }
          }
          if (type == PlaceholderType.O_CELLS) {
            for (var _x2 = 0; _x2 < this.sizeChess; _x2++) {
              for (var _y2 = 0; _y2 < this.sizeChess; _y2++) {
                if (this.chessboard[_x2][_y2] == "O") {
                  var _newPos2 = new Vec2(_x2, _y2);
                  result.push(_newPos2);
                }
              }
            }
          }
          if (type == PlaceholderType.X_CELLS) {
            for (var _x3 = 0; _x3 < this.sizeChess; _x3++) {
              for (var _y3 = 0; _y3 < this.sizeChess; _y3++) {
                if (this.chessboard[_x3][_y3] == "X") {
                  var _newPos3 = new Vec2(_x3, _y3);
                  result.push(_newPos3);
                }
              }
            }
          }
          return result;
        }

        //#endregion

        //#region Skill Rain
        ;

        _proto.useRain = function useRain() {
          this.toggleSkill(SkillId.RAIN);
        };
        _proto.rainInRegion = function rainInRegion(region) {
          var rainRect = this.getRect(region);
          var curTurnText = this.turn % 2 == 0 ? "O" : "X";
          var removeBombList = this.bombList.filter(function (bomb) {
            return bomb.owner != curTurnText && rainRect.contains(bomb.pos);
          });
          if (removeBombList.length > 0) {
            eventMgr.emit(EventName.REMOVE_BOMB, removeBombList);
          }
          var removeSeedList = this.seedList.filter(function (seed) {
            return seed.owner != curTurnText && rainRect.contains(seed.pos);
          });
          this.removeSeed(removeSeedList);
          this.seedList = this.seedList.filter(function (seed) {
            return seed.owner == curTurnText || !rainRect.contains(seed.pos);
          });
          this.bombList = this.bombList.filter(function (bomb) {
            return bomb.owner == curTurnText || !rainRect.contains(bomb.pos);
          });
          var removeThornList = this.bombList.filter(function (thorn) {
            return thorn.owner != curTurnText && rainRect.contains(thorn.pos);
          });
          if (removeThornList.length > 0) {
            eventMgr.emit(EventName.REMOVE_THORN, removeThornList);
            for (var i = 0; i < removeThornList.length; i++) {
              this.chessboard[removeThornList[i].pos.x][removeThornList[i].pos.y] == "";
            }
          }
          this.thornList = this.thornList.filter(function (thorn) {
            return thorn.owner == curTurnText || !rainRect.contains(thorn.pos);
          });
        };
        _proto.getRect = function getRect(region) {
          // rect: x, y , width, height
          var minPos = new Vec2(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
          var maxPos = new Vec2(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
          for (var i = 0; i < region.length; i++) {
            if (region[i].x < minPos.x) minPos.x = region[i].x;
            if (region[i].y < minPos.y) minPos.y = region[i].y;
            if (region[i].x > maxPos.x) maxPos.x = region[i].x;
            if (region[i].y > maxPos.y) maxPos.y = region[i].y;
          }
          return new Rect(minPos.x, minPos.y, Math.abs(maxPos.x - minPos.x), Math.abs(maxPos.y - minPos.y));
        }

        //#endregion

        //#region SKILL QUAKE
        ;

        _proto.useQuake = function useQuake() {
          this.toggleSkill(SkillId.QUAKE);
          this.destroyChessman();
        };
        _proto.destroyChessman = function destroyChessman() {
          var numDestroyX = define.quakeNumEachSide;
          var numDestroyO = define.quakeNumEachSide;
          var removeBombList = [];
          for (var i = 0; i < this.bombList.length; i++) {
            var _bomb = this.bombList[i];
            if (_bomb.owner == "O" && numDestroyX > 0) {
              var pos = this.bombList[i].pos;
              this.chessboard[pos.x][pos.y] = "";
              removeBombList.push(_bomb);
              numDestroyX -= 1;
            }
            if (_bomb.owner == "X" && numDestroyO > 0) {
              var _pos = this.bombList[i].pos;
              this.chessboard[_pos.x][_pos.y] = "";
              removeBombList.push(_bomb);
              numDestroyO -= 1;
            }
          }
          eventMgr.emit(EventName.REMOVE_BOMB, removeBombList);
          this.bombList = this.bombList.filter(function (item) {
            return removeBombList.indexOf(item) == -1;
          });
          if (numDestroyX > 0 || numDestroyO > 0) {
            var XList = [];
            var OList = [];
            for (var x = 0; x < this.sizeChess; x++) {
              for (var y = 0; y < this.sizeChess; y++) {
                if (this.chessboard[x][y] == "X") {
                  XList.push(new Vec2(x, y));
                }
                if (this.chessboard[x][y] == "O") {
                  OList.push(new Vec2(x, y));
                }
              }
            }
            while (numDestroyX > 0 && XList.length > 0) {
              var randDesPos = Math.floor(Math.random() * XList.length);
              this.chessboard[XList[randDesPos].x][XList[randDesPos].y] = "";
              XList.splice(randDesPos, 1);
              numDestroyX -= 1;
            }
            while (numDestroyO > 0 && OList.length > 0) {
              var _randDesPos = Math.floor(Math.random() * OList.length);
              this.chessboard[OList[_randDesPos].x][OList[_randDesPos].y] = "";
              OList.splice(_randDesPos, 1);
              numDestroyO -= 1;
            }
          }
          eventMgr.emit(EventName.UPDATE_BOARD);
        }

        //#endregion

        //#region Skill Time
        ;

        _proto.useTime = function useTime() {
          this.toggleSkill(SkillId.TIME);
          if (this.turn % 2 != 0) {
            this.oTurnReduceTime += define.timeSkillTurnNum;
          } else {
            this.xTurnReduceTime += define.timeSkillTurnNum;
          }
        }

        //#endregion

        //#region BLOCKAGE
        ;

        _proto.useBlockage = function useBlockage() {
          this.toggleSkill(SkillId.BLOCKAGE);
          this.setBlock();
          eventMgr.emit(EventName.UPDATE_BOARD);
          eventMgr.emit(EventName.UPDATE_BLOCK_SHOW);
        };
        _proto.setBlock = function setBlock() {
          // ban co trong
          // move near co doi thu
          // move near co minh

          var blockPos = this.getBlockPos();
          for (var i = 0; i < blockPos.length; i++) {
            var blockI = blockPos[i];
            var newBlock = {
              pos: blockPos[i].clone(),
              owner: this.turn % 2 == 0 ? "O" : "X",
              existTurn: 1
            };
            this.blockList.push(newBlock);
            this.chessboard[blockI.x][blockI.y] = ObjectType.BLOCK;
          }
        };
        _proto.getBlockPos = function getBlockPos() {
          var result = [];
          if (this.turn == 0) {
            // ban co trong
            for (var i = 0; i < define.numBlockInBlokageSkill; i++) {
              var x = Math.floor(Math.random() * this.sizeChess);
              var y = Math.floor(Math.random() * this.sizeChess);
              result.push(new Vec2(x, y));
            }
          } else {
            result = this.getBlockPosAround();
          }
          return result;
        };
        _proto.getBlockPosAround = function getBlockPosAround() {
          var result = [];
          var numBlock = define.numBlockInBlokageSkill;
          var aroundPos = this.generateMove(this.chessboard); // lay vi tri xung quanh cac o co hien tai

          var target = this.turn % 2 == 0 ? "X" : "O";
          var suitPos = [];
          for (var i = 0; i < aroundPos.length; i++) {
            // loc ra cac vi tri gan target
            if (this.isNearTarget(target, aroundPos[i])) {
              suitPos.push(aroundPos[i]);
            }
          }
          if (suitPos.length > numBlock) {
            var _loop = function _loop() {
              var rand = Math.floor(Math.random() * suitPos.length);
              if (result.findIndex(function (item) {
                return item.x == suitPos[rand].x && item.y == suitPos[rand].y;
              }) == -1) {
                result.push(suitPos[rand].clone());
              }
            };
            // lay so luong can

            while (result.length < numBlock) {
              _loop();
            }
          }
          if (suitPos.length == numBlock) result = suitPos;
          if (suitPos.length < numBlock) {
            // them neu thieu
            var numMiss = numBlock - suitPos.length;
            var _loop2 = function _loop2() {
              var rand = Math.floor(Math.random() * aroundPos.length);
              if (result.findIndex(function (item) {
                return item.x == aroundPos[rand].x && item.y == aroundPos[rand].y;
              }) == -1) {
                result.push(aroundPos[rand].clone());
              }
            };
            while (result.length < numMiss) {
              _loop2();
            }
          }
          return result;
        };
        _proto.generateMove = function generateMove(board) {
          var moveList = [];
          var boardSize = this.sizeChess;
          for (var x = 0; x < boardSize; x++) {
            for (var y = 0; y < boardSize; y++) {
              if (board[x][y] != "") continue;
              if (x > 0) {
                if (y > 0) {
                  if (board[x - 1][y - 1] != "" || board[x][y - 1] != "") {
                    var move = new Vec2(x, y);
                    moveList.push(move);
                    continue;
                  }
                }
                if (y < boardSize - 1) {
                  if (board[x - 1][y + 1] != "" || board[x][y + 1] != "") {
                    var _move = new Vec2(x, y);
                    moveList.push(_move);
                    continue;
                  }
                }
                if (board[x - 1][y] != "") {
                  var _move2 = new Vec2(x, y);
                  moveList.push(_move2);
                  continue;
                }
              }
              if (x < boardSize - 1) {
                if (y > 0) {
                  if (board[x + 1][y - 1] != "" || board[x][y - 1] != "") {
                    var _move3 = new Vec2(x, y);
                    moveList.push(_move3);
                    continue;
                  }
                  if (y < boardSize - 1) {
                    if (board[x + 1][y + 1] || board[x][y + 1] != "") {
                      var _move4 = new Vec2(x, y);
                      moveList.push(_move4);
                      continue;
                    }
                  }
                  if (board[x + 1][y] != "") {
                    var _move5 = new Vec2(x, y);
                    moveList.push(_move5);
                    continue;
                  }
                }
              }
            }
          }
          return moveList;
        };
        _proto.isNearTarget = function isNearTarget(target, pos) {
          for (var x = pos.x - 1; x <= pos.x + 1; x++) {
            for (var y = pos.y - 1; y <= pos.y + 1; y++) {
              if (x < 0 || x >= this.sizeChess || y < 0 || y >= this.sizeChess) continue;
              if (this.chessboard[x][y] == target) return true;
            }
          }
          return false;
        };
        _proto.updateBlockByTurn = function updateBlockByTurn() {
          for (var i = 0; i < this.blockList.length; i++) {
            var _block = this.blockList[i];
            _block.existTurn += 1;
            if (_block.existTurn > define.blockExistTurn) {
              var pos = _block.pos;
              this.chessboard[pos.x][pos.y] = "";
            }
          }
          this.blockList = this.blockList.filter(function (item) {
            return item.existTurn <= define.blockExistTurn;
          });
        }

        //#endregion

        //#region FROZONE
        ;

        _proto.useFrozone = function useFrozone() {
          this.toggleSkill(SkillId.FROZONE);
          this.showPlaceHolder(this.turn % 2 == 0 ? PlaceholderType.X_CELLS : PlaceholderType.O_CELLS);
        };
        _proto.setIceAt = function setIceAt(pos) {
          var valuePos = this.chessboard[pos.x][pos.y];
          var targetText = this.turn % 2 == 0 ? "X" : "O";
          if (valuePos != targetText) return false;
          var newIce = {
            pos: pos,
            owner: this.turn % 2 == 0 ? "O" : "X",
            existTurn: 1
          };
          this.chessboard[pos.x][pos.y] = valuePos + ObjectType.ICE;
          this.iceList.push(newIce);
          return true;
        };
        _proto.updateIceByTurn = function updateIceByTurn() {
          for (var i = 0; i < this.iceList.length; i++) {
            this.iceList[i].existTurn += 1;
            if (this.iceList[i].existTurn > define.iceExistTurn) {
              var pos = this.iceList[i].pos;
              this.chessboard[pos.x][pos.y] = this.chessboard[pos.x][pos.y].replace(ObjectType.ICE, "");
            }
          }
          var removeIceList = this.iceList.filter(function (item) {
            return item.existTurn > define.iceExistTurn;
          });
          this.iceList = this.iceList.filter(function (item) {
            return item.existTurn <= define.iceExistTurn;
          });
          if (removeIceList.length > 0) {
            eventMgr.emit(EventName.REMOVE_ICE, removeIceList);
          }
        }
        //#endregion

        //#region Skill Thorn
        ;

        _proto.useThorn = function useThorn() {
          this.toggleSkill(SkillId.THORN_BALL);
          this.showPlaceHolder(PlaceholderType.EMPTY_CELLS);
        };
        _proto.setThornAt = function setThornAt(pos) {
          if (this.chessboard[pos.x][pos.y] != "") return false;
          this.chessboard[pos.x][pos.y] = ObjectType.THORN;
          var newThorn = {
            pos: pos,
            owner: this.turn % 2 == 0 ? "O" : "X",
            existTurn: 1
          };
          this.thornList.push(newThorn);
          return true;
        };
        _proto.updateThornByTurn = function updateThornByTurn() {
          if (this.thornList.length == 0) return;
          for (var i = 0; i < this.thornList.length; i++) {
            var iThorn = this.thornList[i];
            iThorn.existTurn += 1;
            if (iThorn.existTurn <= define.thornExistTurn) {
              var newThornPos = this.getNextThornMove(iThorn).clone();
              this.chessboard[iThorn.pos.x][iThorn.pos.y] = "";
              iThorn.pos = newThornPos.clone();
              this.chessboard[newThornPos.x][newThornPos.y] = ObjectType.THORN;
            } else {
              this.chessboard[iThorn.pos.x][iThorn.pos.y] = "";
            }
          }
          var removeThornList = this.thornList.filter(function (item) {
            return item.existTurn > define.thornExistTurn;
          });
          this.thornList = this.thornList.filter(function (item) {
            return item.existTurn <= define.thornExistTurn;
          });
          if (removeThornList.length > 0) {
            eventMgr.emit(EventName.REMOVE_THORN, removeThornList);
          }
        };
        _proto.getNextThornMove = function getNextThornMove(target) {
          var moveableList = this.getThornMoveableList(target.pos);
          var nextMovePos = this.calculateNextMove(target, moveableList);
          return nextMovePos;
        };
        _proto.getThornMoveableList = function getThornMoveableList(target) {
          var result = [];
          for (var x = target.x - 5; x <= target.x + 5; x++) {
            for (var y = target.y - 5; y <= target.y + 5; y++) {
              if (x < 0 || x >= this.sizeChess || y < 0 || y >= this.sizeChess) continue;
              if (x == target.x && y == target.y) continue;
              result.push(new Vec2(x, y));
            }
          }
          return result;
        };
        _proto.calculateNextMove = function calculateNextMove(target, moveableList) {
          var result;
          var emptyMoveList = [];
          var enermyMoveList = [];
          var obstacalMoveList = [];
          var firstMove = target.existTurn <= 2;
          // calculate rand lists
          for (var i = 0; i < moveableList.length; i++) {
            var pos = moveableList[i];
            var valuePos = this.chessboard[pos.x][pos.y];
            if (valuePos == "") {
              emptyMoveList.push(pos.clone());
            } else if (valuePos != target.owner && valuePos != "") {
              enermyMoveList.push(pos.clone());
            } else if (valuePos == ObjectType.BLOCK) {
              obstacalMoveList.push(pos.clone());
            }
            // doi phuong: 25%
            // chuong ngai vat: 50%
            // o trong: 25%
          }

          if (firstMove && emptyMoveList.length > 0) {
            var rand = Math.floor(Math.random() * emptyMoveList.length);
            result = emptyMoveList[rand].clone();
          } else {
            var randFactorEmptyList = emptyMoveList.length > 0 ? 1 : 0;
            var randFactorEnermyList = enermyMoveList.length > 0 ? 1 : 0;
            var randFactorObstacalList = obstacalMoveList.length > 0 ? 1 : 0;
            var enermyPecent = randFactorEnermyList * define.thornMoveRate[0];
            var obstacalPercent = randFactorObstacalList * define.thornMoveRate[1];
            var emptyPercent = randFactorEmptyList * define.thornMoveRate[2];
            var sumFactor = enermyPecent + obstacalPercent + emptyPercent;
            var randPercent = Math.random() * sumFactor;
            var randList;
            if (randPercent < enermyPecent) {
              randList = enermyMoveList;
            } else if (randPercent >= enermyPecent && randPercent < enermyPecent + obstacalPercent) {
              randList = obstacalMoveList;
            } else {
              randList = emptyMoveList;
            }
            var _rand = Math.floor(Math.random() * randList.length);
            result = randList[_rand].clone();
          }
          return result;
          // result: Vec2
        }

        //#endregion

        //#region DISGUISE
        ;

        _proto.useDisguise = function useDisguise() {
          this.toggleSkill(SkillId.DISGUISE);
          this.startDisguise();
          eventMgr.emit(EventName.UPDATE_DISGUISE_SHOW, this.turn % 2 == 0 ? "O" : "X");
        };
        _proto.startDisguise = function startDisguise() {
          var _this3 = this;
          var target = this.turn % 2 == 0 ? "O" : "X";
          var randList = this.getPosHasValue(target); // list of current chessman

          if (randList.length == 0) {
            eventMgr.emit(EventName.SHOW_TOAST, "You must have at least 1 chessman to disguise");
            return;
          } else if (randList.length <= define.disguiseNum) {
            // handle casa that have less chessman than the number of disguise num config to choose
            if (this.disguiseList.length == 0) {
              for (var i = 0; i < randList.length; i++) {
                var newDisguise = {
                  pos: new Vec2(randList[i].x, randList[i].y),
                  owner: target,
                  existTurn: 1
                };
                this.disguiseList.push(newDisguise);
              }
            } else {
              var _loop3 = function _loop3(_i) {
                if (_this3.disguiseList.findIndex(function (item) {
                  return item.pos.x == randList[_i].x && item.pos.y == randList[_i].y;
                }) != -1) {
                  // restart exist turn
                  var item = _this3.disguiseList.find(function (item) {
                    return item.pos.x == randList[_i].x && item.pos.y == randList[_i].y;
                  });
                  item.existTurn = 1;
                } else {
                  var _newDisguise = {
                    pos: new Vec2(randList[_i].x, randList[_i].y),
                    owner: target,
                    existTurn: 1
                  };
                  _this3.disguiseList.push(_newDisguise);
                }
              };
              for (var _i = 0; _i < randList.length; _i++) {
                _loop3(_i);
              }
            }
            eventMgr.emit(EventName.UPDATE_BOARD);
            return;
          } else {
            // handle case that have more chessman to choose than disguise num config

            if (randList.length - this.disguiseList.length >= define.disguiseNum) {
              // handle case that have many unuse chessman to rand

              if (randList.length - this.disguiseList.length == define.disguiseNum) {
                var _loop4 = function _loop4(_i2) {
                  if (_this3.disguiseList.findIndex(function (item) {
                    return item.pos.x == randList[_i2].x && item.pos.x == randList[_i2].y;
                  }) == -1) {
                    var _newDisguise2 = {
                      pos: new Vec2(randList[_i2].x, randList[_i2].y),
                      owner: target,
                      existTurn: 1
                    };
                    _this3.disguiseList.push(_newDisguise2);
                  }
                };
                for (var _i2 = 0; _i2 < randList.length; _i2++) {
                  _loop4(_i2);
                }
              } else {
                var newDisguiseCount = 0;
                randList = randList.filter(function (item) {
                  return _this3.disguiseList.findIndex(function (itemx) {
                    return itemx.pos.x == item.x && itemx.pos.y == item.y;
                  }) == -1;
                });
                if (randList.length <= define.disguiseNum) {
                  for (var _i3 = 0; _i3 < randList.length; _i3++) {
                    var _newDisguise3 = {
                      pos: new Vec2(randList[_i3].x, randList[_i3].y),
                      owner: target,
                      existTurn: 1
                    };
                    this.disguiseList.push(_newDisguise3);
                  }
                  return;
                }
                var _loop5 = function _loop5() {
                  var randPos = Math.floor(Math.random() * randList.length);
                  var pos = randList[randPos];
                  if (_this3.disguiseList.findIndex(function (item) {
                    return item.pos.x == pos.x && item.pos.y == pos.y;
                  }) == -1) {
                    var _newDisguise4 = {
                      pos: new Vec2(pos.x, pos.y),
                      owner: target,
                      existTurn: 1
                    };
                    _this3.disguiseList.push(_newDisguise4);
                    newDisguiseCount += 1;
                  }
                };
                while (newDisguiseCount < define.disguiseNum) {
                  _loop5();
                }
              }
            } else {
              var _loop6 = function _loop6(_i4) {
                if (_this3.disguiseList.findIndex(function (item) {
                  return item.pos.x == randList[_i4].x && item.pos.y == randList[_i4].y;
                }) == -1) {
                  var _newDisguise5 = {
                    pos: new Vec2(randList[_i4].x, randList[_i4].y),
                    owner: target,
                    existTurn: 1
                  };
                  _this3.disguiseList.push(_newDisguise5);
                }
              };
              for (var _i4 = 0; _i4 < randList.length; _i4++) {
                _loop6(_i4);
              }
            }
            // select when length > 3

            // tranh nhung o da nguy trang
            // neu tranh o nguy trang maf ko du thi replace current exist turn cuar cai da nguy trang.
          }
        };

        _proto.getPosHasValue = function getPosHasValue(target) {
          var result = [];
          for (var x = 0; x < this.sizeChess; x++) {
            for (var y = 0; y < this.sizeChess; y++) {
              if (this.chessboard[x][y] == target) {
                result.push(new Vec2(x, y));
              }
            }
          }
          return result;
        };
        _proto.updateDisguiseByTurn = function updateDisguiseByTurn() {
          if (this.disguiseList.length == 0) return;
          for (var i = 0; i < this.disguiseList.length; i++) {
            var item = this.disguiseList[i];
            item.existTurn += 1;
          }
          var disguiseRemoveList = this.disguiseList.filter(function (item) {
            return item.existTurn > define.disguiseExistTurn;
          });
          eventMgr.emit(EventName.REMOVE_DISGUISE, disguiseRemoveList);
          this.disguiseList = this.disguiseList.filter(function (item) {
            return item.existTurn <= define.disguiseExistTurn;
          });
        }
        //#endregion

        //#region BOT
        ;

        _proto.startPlayWithBot = function startPlayWithBot() {
          this.isPlayWithBot = true;
        };
        _proto.onInBotTurn = function onInBotTurn() {
          this.blockUserAction();
          this.botUseSkill();

          // let nextMove = Bot._instance.calculateNextMove();
          // this.selectedCellStart(nextMove);
          // get move
          // move
        };

        _proto.blockUserAction = function blockUserAction() {
          // console.log("BLOCK USER ACTION");
        };
        _proto.botUseSkill = function botUseSkill() {
          // console.log("BOT USE SKILL");
        }

        //#endregion
        ;

        _createClass(MainLogic, null, [{
          key: "_intance",
          get: function get() {
            if (!MainLogic.instance) {
              MainLogic.instance = new MainLogic();
            }
            return MainLogic.instance;
          }
        }]);
        return MainLogic;
      }(Component));
      MainLogic.instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MatchingScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventMgr.ts', './GameManager.ts', './InGameManager.ts', './SoundManager.ts', './UserManager.ts', './WebSocketHandler.ts', './Define.ts', './ScreenBase.ts', './DefineMatchLogin.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Label, eventMgr, EventName, GameManager, InGameManager, SoundManager, SoundName, UserManager, WebSocketHandler, ClassicMode, define, ScreenBase, RoomType, RoomMode;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Label = module.Label;
    }, function (module) {
      eventMgr = module.default;
      EventName = module.EventName;
    }, function (module) {
      GameManager = module.GameManager;
    }, function (module) {
      InGameManager = module.InGameManager;
    }, function (module) {
      SoundManager = module.SoundManager;
      SoundName = module.SoundName;
    }, function (module) {
      UserManager = module.UserManager;
    }, function (module) {
      WebSocketHandler = module.WebSocketHandler;
    }, function (module) {
      ClassicMode = module.ClassicMode;
      define = module.default;
    }, function (module) {
      ScreenBase = module.ScreenBase;
    }, function (module) {
      RoomType = module.RoomType;
      RoomMode = module.RoomMode;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "a3a5aqYXrpLvpbtsPqzJL00", "MatchingScreen", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MatchingScreen = exports('MatchingScreen', (_dec = ccclass('MatchingScreen'), _dec2 = property(Node), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Button), _dec14 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_ScreenBase) {
        _inheritsLoose(MatchingScreen, _ScreenBase);
        function MatchingScreen() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ScreenBase.call.apply(_ScreenBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "startPhase", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "classicModeBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skillModeBtn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "classicModeSelectPhase", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeToPlayBtn", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "quickPlayBtn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "matchPhase", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "findingIndicator", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "player1Name", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "player2", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "player2Name", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cancelBtn", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingText", _descriptor13, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MatchingScreen.prototype;
        _proto.start = function start() {
          this.classicModeBtn.node.on("click", this.onClassicModeClick, this);
          this.skillModeBtn.node.on("click", this.onSkillModeBtnClick, this);
          this.cancelBtn.node.on("click", this.onCancelMatchingClick, this);
          this.freeToPlayBtn.node.on("click", this.onFreeToPlayClick, this);
          this.quickPlayBtn.node.on("click", this.onQuickPlayClick, this);
          this.onStart();
        };
        _proto.update = function update(deltaTime) {};
        _proto.onEnable = function onEnable() {
          //todo: get self session id 
          this.startPhase.active = true;
          this.matchPhase.active = false;
          this.classicModeSelectPhase.active = false;
        };
        _proto.onStart = function onStart() {
          this.handleCustomEvent();
        };
        _proto.handleCustomEvent = function handleCustomEvent() {
          console.log("START CATCH IN MATCH");
          eventMgr.on(EventName.ANOTHER_JOIN_ROOM, this.onAnotherJoinRoom, this);
          eventMgr.on(EventName.UPDATE_SELF_SESSION_ID, this.updateSelfSessionID, this);
        };
        _proto.onClassicModeClick = function onClassicModeClick() {
          this.startPhase.active = false;
          this.classicModeSelectPhase.active = true;
          SoundManager.instance.playSound(SoundName.BIP);
        };
        _proto.onFreeToPlayClick = function onFreeToPlayClick() {
          InGameManager.instance.setClassicMode(ClassicMode.FREE_TO_PLAY);
          this.goMatching();
          SoundManager.instance.playSound(SoundName.START);
        };
        _proto.goMatching = function goMatching() {
          GameManager.instance.showLoadingOverlay();
          InGameManager.instance.setRoomType(RoomType.NORMAL);
          var matchInfo = this.getMatchingInfo(RoomType.NORMAL);
          var curRoom = WebSocketHandler.instance.connect(matchInfo);
          if (curRoom) {
            GameManager.instance.hideLoadingOverlay();
            this.onMatching();
          }
        };
        _proto.getMatchingInfo = function getMatchingInfo(roomType) {
          var userProfile = UserManager.instance.userProfile;
          var skillList = [];
          if (roomType == RoomType.SKILL) {
            // todo: get skill list
            skillList = define.selfSkills;
          }
          var request = {
            roomType: roomType,
            roomMode: RoomMode.PVP,
            address: userProfile.wallets['tomo'].publicKey,
            avatar: "",
            username: userProfile.tgUser.userName,
            skillIds: roomType == RoomType.SKILL ? skillList : []
          };
          return request;
        };
        _proto.onQuickPlayClick = function onQuickPlayClick() {
          InGameManager.instance.setClassicMode(ClassicMode.QUICK_PLAY);
          this.goMatching();
        };
        _proto.onSkillModeBtnClick = function onSkillModeBtnClick() {
          GameManager.instance.showLoadingOverlay();
          InGameManager.instance.setRoomType(RoomType.SKILL);
          var matchInfo = this.getMatchingInfo(RoomType.SKILL);
          var curRoom = WebSocketHandler.instance.connect(matchInfo);
          if (curRoom) {
            GameManager.instance.hideLoadingOverlay();
            this.onMatching();
          }
        };
        _proto.onMatching = function onMatching() {
          this.startPhase.active = false;
          this.classicModeSelectPhase.active = false;
          this.matchPhase.active = true;
          this.findingIndicator.active = true;
          this.player2.active = false;
        };
        _proto.onCancelMatchingClick = function onCancelMatchingClick() {
          this.startPhase.active = true;
          this.matchPhase.active = false;
          InGameManager.instance.leaveRoom();
        };
        _proto.onFoundPlayer2 = function onFoundPlayer2() {
          this.player2.active = true;
          this.findingIndicator.active = false;
          this.loadingText.node.active = true;
        }

        // handle custom event
        ;

        _proto.onAnotherJoinRoom = function onAnotherJoinRoom(player) {
          var _this2 = this;
          console.log("UPDATE JOIN : ", player);
          this.onFoundPlayer2();
          this.player2Name.string = player.toString();
          this.scheduleOnce(function () {
            _this2.loadIngameScene();
          }, 2);
        };
        _proto.updateSelfSessionID = function updateSelfSessionID(id) {
          console.log("HAVE EVEN");
          this.player1Name.string = id;
        };
        _proto.loadIngameScene = function loadIngameScene() {
          // ingame
          eventMgr.emit(EventName.MATCH_MAKING_SUCCESS);
        };
        return MatchingScreen;
      }(ScreenBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startPhase", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "classicModeBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skillModeBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "classicModeSelectPhase", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "freeToPlayBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "quickPlayBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "matchPhase", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "findingIndicator", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "player1Name", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "player2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "player2Name", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "cancelBtn", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "loadingText", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoveResponse.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "22ecaZLpAdNeI0Bx2PYiwm+", "MoveResponse", undefined);
      var MoveStatus = exports('MoveStatus', /*#__PURE__*/function (MoveStatus) {
        MoveStatus[MoveStatus["FAIL"] = 0] = "FAIL";
        MoveStatus[MoveStatus["SUCCESS"] = 1] = "SUCCESS";
        return MoveStatus;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetworkManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "0578bgr7ttM45v/70t+Stvq", "NetworkManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // It should: central point for initilizing and managing network connections. Include methods to connect server, handle reconect, close connect.

      var NetworkManager = exports('NetworkManager', (_dec = ccclass('NetworkManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NetworkManager, _Component);
        function NetworkManager() {
          return _Component.apply(this, arguments) || this;
        }
        NetworkManager.instance = function instance() {
          if (!NetworkManager._instance) {
            NetworkManager._instance = new NetworkManager();
          }
          return NetworkManager._instance;
        };
        var _proto = NetworkManager.prototype;
        _proto.connectToServer = function connectToServer() {};
        _proto.sendMessage = function sendMessage(message, data) {};
        return NetworkManager;
      }(Component), _class2._instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventMgr.ts', './BasePopup.ts', './ErrorPopup.ts', './Define.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, resources, Prefab, instantiate, Component, eventMgr, EventName, BasePopup, ErrorPopup, PopupName;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      resources = module.resources;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      eventMgr = module.default;
      EventName = module.EventName;
    }, function (module) {
      BasePopup = module.BasePopup;
    }, function (module) {
      ErrorPopup = module.ErrorPopup;
    }, function (module) {
      PopupName = module.PopupName;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "21bc63LMjhIaZ5z93ifqOiV", "PopupManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupManager = exports('PopupManager', (_dec = ccclass('PopupManager'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PopupManager, _Component);
        function PopupManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "popupContainer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PopupManager.prototype;
        _proto.start = function start() {
          this.loadPopup();
          eventMgr.on(EventName.SHOW_POPUP, this.onShowPopup, this);
        };
        _proto.loadPopup = function loadPopup() {
          var _this2 = this;
          resources.loadDir('prefabs/popups', Prefab, function (err, prefabs) {
            if (err) {
              console.error("Fail to load prefab popups");
              return;
            } else {
              prefabs.forEach(function (prefab) {
                var newPopup = instantiate(prefab);
                _this2.popupContainer.addChild(newPopup);
              });
              _this2.deactiveAllPopup();
            }
          });
        };
        _proto.update = function update(deltaTime) {};
        _proto.onShowPopup = function onShowPopup(type, data) {
          this.deactiveAllPopup();
          switch (type) {
            case PopupName.ERROR:
              var pu = this.popupContainer.children.find(function (popup) {
                return popup.getComponent(BasePopup).type == type;
              });
              if (pu) {
                pu.active = true;
                pu.getComponent(ErrorPopup).setup(data);
              }
              break;
          }
        };
        _proto.deactiveAllPopup = function deactiveAllPopup() {
          this.popupContainer.children.forEach(function (child) {
            return child.active = false;
          });
        };
        return PopupManager;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScreenBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e6a1fhKV0VFIrpgDNbZXIy+", "ScreenBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ScreenType = exports('ScreenType', /*#__PURE__*/function (ScreenType) {
        ScreenType[ScreenType["NONE"] = 0] = "NONE";
        ScreenType[ScreenType["LOGIN"] = 1] = "LOGIN";
        ScreenType[ScreenType["MATCHING"] = 2] = "MATCHING";
        ScreenType[ScreenType["IN_GAME"] = 3] = "IN_GAME";
        return ScreenType;
      }({}));
      var ScreenBase = exports('ScreenBase', (_dec = ccclass('ScreenBase'), _dec2 = property({
        type: Enum(ScreenType)
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScreenBase, _Component);
        function ScreenBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ScreenBase.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        _proto.show = function show() {
          this.node.active = true;
        };
        _proto.hide = function hide() {
          this.node.active = false;
        };
        return ScreenBase;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ScreenType.NONE;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScreenManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventMgr.ts', './ScreenBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Component, eventMgr, EventName, ScreenBase, ScreenType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      eventMgr = module.default;
      EventName = module.EventName;
    }, function (module) {
      ScreenBase = module.ScreenBase;
      ScreenType = module.ScreenType;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "4bdb9WbgpRBNrfBuuplag49", "ScreenManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ScreenManager = exports('ScreenManager', (_dec = ccclass('ScreenManager'), _dec2 = property(ScreenBase), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScreenManager, _Component);
        function ScreenManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "screens", _descriptor, _assertThisInitialized(_this));
          _this.curScr = null;
          return _this;
        }
        var _proto = ScreenManager.prototype;
        _proto.onLoad = function onLoad() {
          if (ScreenManager._instance == null) {
            ScreenManager._instance = this;
          } else {
            this.node.destroy();
          }
        };
        _proto.start = function start() {
          eventMgr.on(EventName.LOGIN, this.onLogIn, this);
        };
        _proto.update = function update(deltaTime) {};
        _proto.showScreen = function showScreen(scrType) {
          var _this$curScr;
          this.deactiveAllScreen();
          var needShow = this.screens.find(function (src) {
            return src.getComponent(ScreenBase).type == scrType;
          });
          if (!this.curScr || ((_this$curScr = this.curScr) == null ? void 0 : _this$curScr.type) != needShow.type) {
            needShow.show();
          }
        };
        _proto.deactiveAllScreen = function deactiveAllScreen() {
          for (var i = 0; i < this.screens.length; i++) {
            this.screens[i].hide();
          }
        };
        _proto.onLogIn = function onLogIn() {
          this.showScreen(ScreenType.LOGIN);
        };
        _createClass(ScreenManager, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              console.error('InGameManger is not initialized!');
            }
            return this._instance;
          }
        }]);
        return ScreenManager;
      }(Component), _class3._instance = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "screens", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Define.ts', './EventMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Component, SkillId, PetImgBySkill, eventMgr, EventName;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      SkillId = module.SkillId;
      PetImgBySkill = module.PetImgBySkill;
    }, function (module) {
      eventMgr = module.default;
      EventName = module.EventName;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "73bd8xAC89G9KyQga0vyEvE", "SkillButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SkillButton = exports('SkillButton', (_dec = ccclass('SkillButton'), _dec2 = property(Sprite), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SkillButton, _Component);
        function SkillButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "skillPetImg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "petImgs", _descriptor2, _assertThisInitialized(_this));
          _this.skill = SkillId.NONE;
          return _this;
        }
        var _proto = SkillButton.prototype;
        _proto.start = function start() {
          this.node.on('click', this.onSelectSkill, this);
        };
        _proto.update = function update(deltaTime) {};
        _proto.setup = function setup(type) {
          this.skill = type;
          var imgName = "";
          imgName = PetImgBySkill[Object.keys(PetImgBySkill).find(function (key) {
            return key == type;
          })];
          console.log("IMG NAME: ", imgName);
          this.skillPetImg.spriteFrame = this.petImgs.find(function (spriteFrame) {
            return spriteFrame.name == imgName;
          });
        };
        _proto.onSelectSkill = function onSelectSkill() {
          eventMgr.emit(EventName.CHANGE_SELECT_SKILL, this.skill);
        };
        return SkillButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skillPetImg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "petImgs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillInfo.ts", ['cc', './Define.ts'], function (exports) {
  var cclegacy, ElementType, SkillId, SkillType;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ElementType = module.ElementType;
      SkillId = module.SkillId;
      SkillType = module.SkillType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cbe88JXkp5DTZfPcclVRFR5", "SkillInfo", undefined);
      var SkillInfo = exports('SkillInfo', [{
        name: 'Time Manipulation',
        elementType: ElementType.FIRE,
        skillId: SkillId.TIME,
        skillType: SkillType.PLAYER_EFFECT,
        description: "Reduces opponent's play time by 50% for 5 turns, limiting the opponent to only 50% of their usual play time per turn.",
        attributes: {
          castRate: 1,
          isAoeSkill: false,
          existTurn: 5,
          timeReductionPercentage: 0.5
        }
      }, {
        name: 'Cleansing rain',
        elementType: ElementType.WATER,
        skillId: SkillId.RAIN,
        skillType: SkillType.BOARD_EFFECT,
        description: 'Clear all skill objects on a 5x5 area.',
        attributes: {
          castRate: 1,
          isAoeSkill: true,
          aoeRange: 5,
          existTurn: 0
        }
      }, {
        name: 'Thorn ball',
        elementType: ElementType.NATURE,
        skillId: SkillId.THORN_BALL,
        skillType: SkillType.SPAWN,
        description: "Creates a thorn ball that randomly moves to a new cell each turn and can destroy opponent's pieces if it lands on them.",
        attributes: {
          castRate: 1,
          isAoeSkill: false,
          existTurn: 5,
          jumpRange: 5,
          targetJumpRate: {
            opponent: 0.25,
            blockage: 0.5,
            empty: 0.25
          }
        }
      }, {
        name: 'Sprouting',
        elementType: ElementType.NATURE,
        skillId: SkillId.SEED,
        skillType: SkillType.SPAWN,
        description: "Marks a cell to grow into a player's piece after 3 turns.",
        attributes: {
          castRate: 1,
          isAoeSkill: false,
          existTurn: 6
        }
      }, {
        name: 'Timing bomb',
        elementType: ElementType.FIRE,
        skillId: SkillId.BOMB,
        skillType: SkillType.SPAWN,
        description: "Place a bomb on an opponent's chessman. Explode in 3 turns",
        attributes: {
          castRate: 1,
          isAoeSkill: false,
          existTurn: 5
        }
      }]);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillObject.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "22112XXccFMxbaJ/qohSk3S", "SkillObject", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillRepository.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a5f58pqiDJNCoYRd/5dGikr", "SkillRepository", undefined);
      var SortType = exports('SortType', /*#__PURE__*/function (SortType) {
        SortType[SortType["NAME"] = 0] = "NAME";
        SortType[SortType["CAST_RATE"] = 1] = "CAST_RATE";
        SortType[SortType["AOE_RANGE"] = 2] = "AOE_RANGE";
        SortType[SortType["EXIST_TURN"] = 3] = "EXIST_TURN";
        return SortType;
      }({}));
      var SkillRepository = exports('SkillRepository', /*#__PURE__*/function () {
        function SkillRepository(skillList) {
          var _this = this;
          this.gameSkillList = new Map();
          if (!skillList) return;
          skillList.forEach(function (key, value) {
            _this.gameSkillList.set(key, value);
          });
        }
        var _proto = SkillRepository.prototype;
        _proto.searchSkill = function searchSkill(key) {
          return this.gameSkillList.get(key);
        };
        _proto.insertSkill = function insertSkill(key, value) {
          var _this$gameSkillList;
          (_this$gameSkillList = this.gameSkillList) == null || _this$gameSkillList.set(key, value);
        };
        _proto.sortSkill = function sortSkill(sortType) {
          switch (sortType) {
            case SortType.CAST_RATE:
              this.gameSkillList = new Map([].concat(this.gameSkillList.entries()).sort(function (a, b) {
                return a[1].attribute.castRate - b[1].attribute.castRate;
              }));
              break;
            case SortType.NAME:
              this.gameSkillList = new Map([].concat(this.gameSkillList.entries()).sort(function (a, b) {
                return a[1].name.localeCompare(b[1].name);
              }));
              break;
            case SortType.AOE_RANGE:
              this.gameSkillList = new Map([].concat(this.gameSkillList.entries()).sort(function (a, b) {
                return a[1].attribute.aoeRange - b[1].attribute.aoeRange;
              }));
              break;
            case SortType.EXIST_TURN:
              this.gameSkillList = new Map([].concat(this.gameSkillList.entries()).sort(function (a, b) {
                return a[1].attribute.existTurn - b[1].attribute.existTurn;
              }));
              break;
          }
        };
        return SkillRepository;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SoundManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, CCBoolean, director, AudioSource, resources, AudioClip, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCBoolean = module.CCBoolean;
      director = module.director;
      AudioSource = module.AudioSource;
      resources = module.resources;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "e00595pnKdMRrNCiBZhOoL6", "SoundManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SoundName = exports('SoundName', /*#__PURE__*/function (SoundName) {
        SoundName["BIP"] = "bip";
        SoundName["START"] = "start";
        SoundName["BACKGROUND"] = "background";
        return SoundName;
      }({}));
      var SoundManager = exports('SoundManager', (_dec = ccclass('SoundManager'), _dec2 = property(CCBoolean), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SoundManager, _Component);
        function SoundManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mute", _descriptor, _assertThisInitialized(_this));
          _this.audioSource = null;
          _this.clips = [];
          return _this;
        }
        var _proto = SoundManager.prototype;
        _proto.onLoad = function onLoad() {
          if (SoundManager._instance == null) {
            SoundManager._instance = this;
            director.addPersistRootNode(this.node);
          } else {
            this.node.destroy();
          }
        };
        _proto.start = function start() {
          this.audioSource = this.getComponent(AudioSource);
          if (!this.audioSource) {
            this.audioSource = this.addComponent(AudioSource);
          }
          this.loadSound();
          this.muteSound();
        };
        _proto.update = function update(deltaTime) {};
        _proto.loadSound = function loadSound() {
          var _this2 = this;
          resources.loadDir("sounds", AudioClip, function (err, clips) {
            if (err) {
              console.error("FAIL TO LOAD SOUND: ", err);
              return;
            }
            _this2.clips = clips;
            _this2.playBackgroundMusic();
          });
        };
        _proto.playBackgroundMusic = function playBackgroundMusic() {
          this.playSound(SoundName.BACKGROUND, true);
        };
        _proto.playSound = function playSound(name, loop) {
          if (loop === void 0) {
            loop = false;
          }
          var sound = this.clips.find(function (clip) {
            return clip.name == name;
          });
          if (sound) {
            if (!loop) {
              this.audioSource.playOneShot(sound);
            } else {
              this.audioSource.loop = true;
              this.audioSource.clip = sound;
              this.audioSource.play();
            }
          }
        };
        _proto.muteSound = function muteSound() {
          if (this.mute) {
            this.audioSource.volume = 0;
          }
        };
        _createClass(SoundManager, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              console.error('InGameManger is not initialized!');
            }
            return this._instance;
          }
        }]);
        return SoundManager;
      }(Component), _class3._instance = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "mute", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpawnObject.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "9ad69bPqPNGLJjN7ut6eqS5", "SpawnObject", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpawnObject = exports('SpawnObject', (_dec = ccclass('SpawnObject'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpawnObject, _Component);
        function SpawnObject() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SpawnObject.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return SpawnObject;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToastHolder.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, eventMgr, EventName;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      eventMgr = module.default;
      EventName = module.EventName;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1e006XxWIJL5oPFbeB1yNxe", "ToastHolder", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ToastHolder = exports('ToastHolder', (_dec = ccclass('ToastHolder'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ToastHolder, _Component);
        function ToastHolder() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "toastHolder", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toastContentText", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ToastHolder.prototype;
        _proto.start = function start() {
          eventMgr.on(EventName.SHOW_TOAST, this.showToast, this);
        };
        _proto.update = function update(deltaTime) {};
        _proto.showToast = function showToast(text) {
          var _this2 = this;
          this.toastHolder.active = true;
          this.toastContentText.string = text;
          this.scheduleOnce(function () {
            _this2.toastHolder.active = false;
          }, 2);
        };
        return ToastHolder;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toastHolder", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toastContentText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "61ce3kmFUhKxKd7wUmSsrV9", "UserManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UserManager = exports('UserManager', (_dec = ccclass('UserManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UserManager, _Component);
        function UserManager() {
          var _this;
          _this = _Component.call(this) || this;
          _this.userProfile = void 0;
          return _this;
        }
        var _proto = UserManager.prototype;
        _proto.setProfile = function setProfile() {
          console.log("USER MGR SET PROFILE");
        };
        _createClass(UserManager, null, [{
          key: "instance",
          get: function get() {
            if (!UserManager._instance) {
              UserManager._instance = new UserManager();
            }
            return UserManager._instance;
          }
        }]);
        return UserManager;
      }(Component), _class2._instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserProfile.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "023f8ftRHNKJIdL0Z+OFXPz", "UserProfile", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WebSocketHandler.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './colyseus-cocos-creator.mjs_cjs=&original=.js', './EventMgr.ts', './Define.ts', './colyseus-cocos-creator.js'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, director, Component, eventMgr, EventName, MessageType, PopupName, _cjsExports;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }, null, function (module) {
      eventMgr = module.default;
      EventName = module.EventName;
    }, function (module) {
      MessageType = module.MessageType;
      PopupName = module.PopupName;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3;
      cclegacy._RF.push({}, "f2acfW0Op1FCoo/rHWpKZKI", "WebSocketHandler", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //SHOULD: Separate real-time communication here: connection and message handling logic.

      var WebSocketHandler = exports('WebSocketHandler', (_dec = ccclass('WebSocketHandler'), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WebSocketHandler, _Component);
        function WebSocketHandler() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "hostname", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "port", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useSSL", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roomID", _descriptor4, _assertThisInitialized(_this));
          _this.client = void 0;
          _this.room = void 0;
          _this.selfSessionId = "";
          _this.roomType = null;
          return _this;
        }
        var _proto = WebSocketHandler.prototype;
        _proto.onLoad = function onLoad() {
          if (WebSocketHandler._instance == null) {
            WebSocketHandler._instance = this;
            director.addPersistRootNode(this.node);
          } else {
            this.node.destroy();
          }
        };
        _proto.start = function start() {
          var _this2 = this;
          var setting = (this.useSSL ? "wss" : "ws") + "://" + this.hostname + ([443, 80].findIndex(function (item) {
            return item == _this2.port;
          }) != -1 || this.useSSL ? "" : ":" + this.port);
          console.log("SETTING: ", setting);
          this.client = new _cjsExports.Client(setting);
        };
        _proto.connect = /*#__PURE__*/function () {
          var _connect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(matchInfo) {
            var _this3 = this;
            var _error$message, _error$message2, dataPu, _dataPu, _dataPu2;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.roomType = matchInfo.roomType;
                  _context.prev = 1;
                  _context.next = 4;
                  return this.client.joinOrCreate(this.roomID, matchInfo);
                case 4:
                  this.room = _context.sent;
                  console.log("SessionID: ", this.room.sessionId);
                  this.selfSessionId = this.room.sessionId;
                  eventMgr.emit(EventName.UPDATE_SELF_SESSION_ID, this.selfSessionId);
                  this.room.onMessage("*", function (type, message) {
                    _this3.onReceiveMessage(type, message);
                  });
                  this.room.onStateChange(function (state) {
                    _this3.handleStateChange(state);
                  });
                  this.room.onLeave(function (code) {
                    console.log("onLeave: ", code);
                  });
                  this.room.state.listen("players", function (player) {
                    console.log("PLAYER ID ", player);
                  });
                  this.room.state.players.onChange(function (player, sessionId) {
                    _this3.handlePlayerChange(player, sessionId);
                    if (sessionId != _this3.selfSessionId) {
                      eventMgr.emit(EventName.ANOTHER_JOIN_ROOM, sessionId);
                      console.log("EMIT  player 2");
                    }
                  });
                  return _context.abrupt("return", this.room);
                case 16:
                  _context.prev = 16;
                  _context.t0 = _context["catch"](1);
                  console.log("ERROR: ", _context.t0);
                  if ((_error$message = _context.t0.message) != null && _error$message.includes("match-making")) {
                    dataPu = {
                      title: "MATCHING ERROR!!!",
                      content: "No available rooms matching the criteria.",
                      leftBtnText: "OK"
                    };
                    eventMgr.emit(EventName.SHOW_POPUP, PopupName.ERROR, dataPu);
                  } else if ((_error$message2 = _context.t0.message) != null && _error$message2.includes("unauthorized")) {
                    _dataPu = {
                      title: "MATCHING ERROR!!!",
                      content: "Access denied. Please check your credentials or permissions.",
                      leftBtnText: "OK"
                    };
                    eventMgr.emit(EventName.SHOW_POPUP, PopupName.ERROR, _dataPu);
                  } else {
                    _dataPu2 = {
                      title: "MATCHING ERROR!!!",
                      content: "An unexpected error occurred: " + _context.t0.message,
                      leftBtnText: "OK"
                    };
                    eventMgr.emit(EventName.SHOW_POPUP, PopupName.ERROR, _dataPu2);
                  }
                  return _context.abrupt("return", null);
                case 21:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[1, 16]]);
          }));
          function connect(_x) {
            return _connect.apply(this, arguments);
          }
          return connect;
        }();
        _proto.leave = function leave() {
          var _this$room;
          (_this$room = this.room) == null || _this$room.leave();
        };
        _proto.sendMove = function sendMove(content) {
          var _this$room2;
          (_this$room2 = this.room) == null || _this$room2.send("NORMAL_MOVE", content);
        };
        _proto.sendSkillMove = function sendSkillMove(content) {
          var _this$room3;
          console.log("SKILL MOVE: ", content);
          (_this$room3 = this.room) == null || _this$room3.send("SKILL_MOVE", content);
        };
        _proto.onReceiveMessage = function onReceiveMessage(type, msg) {
          console.log("receive Message", type, " + ", msg);
          this.handleMessage(type, msg);
        };
        _proto.handleMessage = function handleMessage(type, msg) {
          switch (type) {
            case MessageType.ERROR:
              var dataPu = {
                title: "ERROR!!!",
                content: "" + msg,
                leftBtnText: "OK"
              };
              eventMgr.emit(EventName.SHOW_POPUP, PopupName.ERROR, dataPu);
              break;
          }
        };
        _proto.handleStateChange = function handleStateChange(state) {
          eventMgr.emit(EventName.ROOM_STATE_CHANGE, state);
        };
        _proto.handlePlayerChange = function handlePlayerChange(player, sessionId) {
          eventMgr.emit(EventName.PLAYER_STATE_CHANGE, player, sessionId);
        };
        _createClass(WebSocketHandler, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              console.error('WebSocketHandler is not initialized!');
            }
            return this._instance;
          }
        }]);
        return WebSocketHandler;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hostname", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "10.40.0.74";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "port", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3000;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "useSSL", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "roomID", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "coin98_caro";
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

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