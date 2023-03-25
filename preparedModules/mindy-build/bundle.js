/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board/boot.ts":
/*!***************************!*\
  !*** ./src/board/boot.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.boot = void 0;
var Drawer_1 = __webpack_require__(/*! ../rendering/Drawer */ "./src/rendering/Drawer.ts");
var Renderer_1 = __webpack_require__(/*! ../rendering/Renderer */ "./src/rendering/Renderer.ts");
var SelectionDrawer_1 = __webpack_require__(/*! ../rendering/SelectionDrawer */ "./src/rendering/SelectionDrawer.ts");
var TextDrawer_1 = __webpack_require__(/*! ../rendering/TextDrawer */ "./src/rendering/TextDrawer.ts");
var TextEditorDrawer_1 = __webpack_require__(/*! ../rendering/TextEditorDrawer */ "./src/rendering/TextEditorDrawer.ts");
var BoardCursor_1 = __webpack_require__(/*! ./components/BoardCursor */ "./src/board/components/BoardCursor.ts");
var BoardSelection_1 = __webpack_require__(/*! ./components/BoardSelection */ "./src/board/components/BoardSelection.ts");
var BoardTextEditor_1 = __webpack_require__(/*! ./components/BoardTextEditor */ "./src/board/components/BoardTextEditor.ts");
var BoardBoxesController_1 = __webpack_require__(/*! ./controllers/BoardBoxesController */ "./src/board/controllers/BoardBoxesController.ts");
var BoardCursorController_1 = __webpack_require__(/*! ./controllers/BoardCursorController */ "./src/board/controllers/BoardCursorController.ts");
var BoardRenderingController_1 = __webpack_require__(/*! ./controllers/BoardRenderingController */ "./src/board/controllers/BoardRenderingController.ts");
var BoardSelectionController_1 = __webpack_require__(/*! ./controllers/BoardSelectionController */ "./src/board/controllers/BoardSelectionController.ts");
var BoardViewportController_1 = __webpack_require__(/*! ./controllers/BoardViewportController */ "./src/board/controllers/BoardViewportController.ts");
var BoardBoxesDrawer_1 = __webpack_require__(/*! ./rendering/BoardBoxesDrawer */ "./src/board/rendering/BoardBoxesDrawer.ts");
var BoardDrawer_1 = __webpack_require__(/*! ./rendering/BoardDrawer */ "./src/board/rendering/BoardDrawer.ts");
var DebugDrawer_1 = __webpack_require__(/*! ./rendering/DebugDrawer */ "./src/board/rendering/DebugDrawer.ts");
var BoardBoxesService_1 = __webpack_require__(/*! ./services/BoardBoxesService */ "./src/board/services/BoardBoxesService.ts");
var BoardCursorService_1 = __webpack_require__(/*! ./services/BoardCursorService */ "./src/board/services/BoardCursorService.ts");
var BoardSelectionService_1 = __webpack_require__(/*! ./services/BoardSelectionService */ "./src/board/services/BoardSelectionService.ts");
var BoardViewportService_1 = __webpack_require__(/*! ./services/BoardViewportService */ "./src/board/services/BoardViewportService.ts");
var BoardBoxesStore_1 = __webpack_require__(/*! ./stores/BoardBoxesStore */ "./src/board/stores/BoardBoxesStore.ts");
var BoardViewportStore_1 = __webpack_require__(/*! ./stores/BoardViewportStore */ "./src/board/stores/BoardViewportStore.ts");
var boot = function (canvasContext, containerElement) {
    canvasContext.canvas.draggable = false;
    // Stores
    var boardViewportStore = new BoardViewportStore_1.BoardViewportStore();
    var boardBoxesStore = new BoardBoxesStore_1.BoardBoxesStore();
    // Components
    var boardCursor = new BoardCursor_1.BoardCursor({
        containerElement: containerElement,
        boardViewportStore: boardViewportStore,
    });
    var boardTextEditor = new BoardTextEditor_1.BoardTextEditor({
        canvasContext: canvasContext,
        cursor: boardCursor,
    });
    var boardSelection = new BoardSelection_1.BoardSelection({ cursor: boardCursor, boardViewportStore: boardViewportStore, boardBoxesStore: boardBoxesStore });
    // Global rendering
    var renderer = new Renderer_1.Renderer();
    var drawer = new Drawer_1.Drawer(canvasContext);
    var textDrawer = new TextDrawer_1.TextDrawer({ drawer: drawer });
    var selectionDrawer = new SelectionDrawer_1.SelectionDrawer({ drawer: drawer, selection: boardSelection });
    var textEditorDrawer = new TextEditorDrawer_1.TextEditorDrawer({ drawer: drawer, textEditor: boardTextEditor, textDrawer: textDrawer });
    // Rendering
    var boardDrawer = new BoardDrawer_1.BoardDrawer({
        drawer: drawer,
        boardViewportStore: boardViewportStore,
        boardCursor: boardCursor,
    });
    var boardBoxesDrawer = new BoardBoxesDrawer_1.BoardBoxesDrawer({
        drawer: drawer,
        boardBoxesStore: boardBoxesStore,
        boardSelection: boardSelection,
        textDrawer: textDrawer,
        boardTextEditor: boardTextEditor,
    });
    var debugDrawer = new DebugDrawer_1.DebugDrawer({
        drawer: drawer,
        boardViewportStore: boardViewportStore,
        boardSelection: boardSelection,
        boardCursor: boardCursor,
        textDrawer: textDrawer,
    });
    // Services
    var boardBoxesService = new BoardBoxesService_1.BoardBoxesService({
        boardBoxesStore: boardBoxesStore,
        boardCursor: boardCursor,
        boardTextEditor: boardTextEditor,
        boardViewportStore: boardViewportStore,
    });
    var boardCursorService = new BoardCursorService_1.BoardCursorService({
        boardBoxesStore: boardBoxesStore,
        boardCursor: boardCursor,
        boardViewportStore: boardViewportStore,
    });
    var boardSelectionService = new BoardSelectionService_1.BoardSelectionService({
        boardBoxesStore: boardBoxesStore,
        boardSelection: boardSelection,
        boardViewportStore: boardViewportStore,
    });
    var boardViewportService = new BoardViewportService_1.BoardViewportService({
        boardViewportStore: boardViewportStore,
        boardCursor: boardCursor,
    });
    // Controllers
    new BoardBoxesController_1.BoardBoxesController({
        boardBoxesStore: boardBoxesStore,
        boardTextEditor: boardTextEditor,
    });
    new BoardViewportController_1.BoardViewportController({ boardBoxesStore: boardBoxesStore, boardCursor: boardCursor, boardViewportService: boardViewportService, boardViewportStore: boardViewportStore });
    new BoardCursorController_1.BoardCursorController({
        boardBoxesService: boardBoxesService,
        boardBoxesStore: boardBoxesStore,
        boardCursor: boardCursor,
        boardCursorService: boardCursorService,
        boardSelection: boardSelection,
        boardTextEditor: boardTextEditor,
    });
    new BoardSelectionController_1.BoardSelectionController({
        boardBoxesStore: boardBoxesStore,
        boardSelection: boardSelection,
        boardSelectionService: boardSelectionService,
        boardViewportStore: boardViewportStore,
    });
    new BoardRenderingController_1.BoardRenderingController({
        boardBoxesDrawer: boardBoxesDrawer,
        boardDrawer: boardDrawer,
        debugDrawer: debugDrawer,
        renderer: renderer,
        textEditorDrawer: textEditorDrawer,
        selectionDrawer: selectionDrawer,
    });
    window.bvs = boardViewportStore;
    window.bbs = boardBoxesStore;
    window.c = boardCursor;
};
exports.boot = boot;


/***/ }),

/***/ "./src/board/components/BoardCursor.ts":
/*!*********************************************!*\
  !*** ./src/board/components/BoardCursor.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardCursor = void 0;
var Cursor_1 = __webpack_require__(/*! ../../components/Cursor */ "./src/components/Cursor.ts");
var subtract_1 = __webpack_require__(/*! ../../math/vectors/subtract */ "./src/math/vectors/subtract.ts");
var BoardCursor = /** @class */ (function (_super) {
    __extends(BoardCursor, _super);
    function BoardCursor(d) {
        var _this = _super.call(this, d.containerElement) || this;
        _this.d = d;
        return _this;
    }
    Object.defineProperty(BoardCursor.prototype, "boardPosition", {
        get: function () {
            return (0, subtract_1.subtract)(this.position.clone(), this.d.boardViewportStore.offset);
        },
        enumerable: false,
        configurable: true
    });
    return BoardCursor;
}(Cursor_1.Cursor));
exports.BoardCursor = BoardCursor;


/***/ }),

/***/ "./src/board/components/BoardSelection.ts":
/*!************************************************!*\
  !*** ./src/board/components/BoardSelection.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardSelection = void 0;
var Selection_1 = __webpack_require__(/*! ../../components/Selection */ "./src/components/Selection.ts");
var move_1 = __webpack_require__(/*! ../../math/rectangle/move */ "./src/math/rectangle/move.ts");
var BoardSelection = /** @class */ (function (_super) {
    __extends(BoardSelection, _super);
    function BoardSelection(d) {
        var _this = _super.call(this, d.cursor) || this;
        _this.d = d;
        _this.selectStartEvent.subscribe(function () { return _this.handleSelectStart(); });
        _this.selectEndEvent.subscribe(function () { return _this.handleSelectEnd(); });
        return _this;
    }
    Object.defineProperty(BoardSelection.prototype, "boardSelectedArea", {
        get: function () {
            return this.selectedArea ? (0, move_1.move)(this.selectedArea.clone(), this.d.boardViewportStore.offset, -1) : undefined;
        },
        enumerable: false,
        configurable: true
    });
    BoardSelection.prototype.handleSelectStart = function () {
        this.canSelect = Boolean(this.selectedArea && !this.d.boardViewportStore.isMovingViewPort && !this.d.boardBoxesStore.cursorOverBox);
    };
    BoardSelection.prototype.handleSelectEnd = function () {
        this.canSelect = true;
    };
    return BoardSelection;
}(Selection_1.Selection));
exports.BoardSelection = BoardSelection;


/***/ }),

/***/ "./src/board/components/BoardTextEditor.ts":
/*!*************************************************!*\
  !*** ./src/board/components/BoardTextEditor.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardTextEditor = void 0;
var TextEditor_1 = __webpack_require__(/*! ../../components/TextEditor */ "./src/components/TextEditor.ts");
var BoardTextEditor = /** @class */ (function (_super) {
    __extends(BoardTextEditor, _super);
    function BoardTextEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoardTextEditor.prototype.showAt = function (box) {
        this.content = box.content;
        this.shownForBox = box;
        _super.prototype.showAt.call(this, box, box);
    };
    BoardTextEditor.prototype.hide = function () {
        _super.prototype.hide.call(this);
        if (!this.shownForBox) {
            return;
        }
        this.shownForBox.content = this.content;
        this.shownForBox = undefined;
    };
    return BoardTextEditor;
}(TextEditor_1.TextEditor));
exports.BoardTextEditor = BoardTextEditor;


/***/ }),

/***/ "./src/board/controllers/BoardBoxesController.ts":
/*!*******************************************************!*\
  !*** ./src/board/controllers/BoardBoxesController.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardBoxesController = void 0;
var keyboard_1 = __webpack_require__(/*! ../../utils/keyboard */ "./src/utils/keyboard.ts");
var BoardBoxesController = /** @class */ (function () {
    function BoardBoxesController(d) {
        var _this = this;
        this.d = d;
        this.d.boardTextEditor.contentHeightEvent.subscribe(function (data) { return _this.handleHeightChange(data); });
        (0, keyboard_1.onKeyPressed)(keyboard_1.KEYS.delete, function () { return _this.handleDeletePressed(); });
    }
    BoardBoxesController.prototype.handleHeightChange = function (_a) {
        var height = _a.height;
        if (this.d.boardTextEditor.shownForBox) {
            this.d.boardTextEditor.shownForBox.height = height;
        }
    };
    BoardBoxesController.prototype.handleDeletePressed = function () {
        var e_1, _a;
        this.d.boardTextEditor.hide();
        try {
            for (var _b = __values(this.d.boardBoxesStore.selectedBoxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), box = _d[1];
                this.d.boardBoxesStore.delete(box);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return BoardBoxesController;
}());
exports.BoardBoxesController = BoardBoxesController;


/***/ }),

/***/ "./src/board/controllers/BoardCursorController.ts":
/*!********************************************************!*\
  !*** ./src/board/controllers/BoardCursorController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardCursorController = void 0;
var BoardCursorController = /** @class */ (function () {
    function BoardCursorController(d) {
        var _this = this;
        this.d = d;
        this.d.boardCursor.moveEvent.subscribe(function () { return _this.handleCursorMove(); });
        this.d.boardCursor.tapEvent.subscribe(function () { return _this.handleTap(); });
        this.d.boardCursor.doubleTabEvent.subscribe(function () { return _this.handleDoubleTap(); });
        this.d.boardCursor.dragStartEvent.subscribe(function () { return _this.handleDragStart(); });
        this.d.boardCursor.dragEvent.subscribe(function (data) { return _this.handleDrag(data); });
        this.d.boardCursor.upEvent.subscribe(function (data) { return _this.handleUp(data); });
    }
    BoardCursorController.prototype.handleCursorMove = function () {
        this.d.boardCursorService.hoverCursorOverBox();
        // We need to handle moving the cursor only to highlight boxes
        // if the user is not dragging a box already.
        if (this.d.boardBoxesStore.draggingBox || this.d.boardSelection.selectedArea) {
            return;
        }
        this.d.boardCursorService.highlightBox();
    };
    BoardCursorController.prototype.handleTap = function () {
        this.d.boardCursorService.selectBox();
        if (!this.d.boardBoxesStore.cursorOverBox ||
            this.d.boardBoxesStore.cursorOverBox !== this.d.boardTextEditor.shownForBox) {
            this.d.boardTextEditor.hide();
        }
    };
    BoardCursorController.prototype.handleDoubleTap = function () {
        if (this.d.boardBoxesStore.cursorOverBox) {
            this.d.boardTextEditor.showAt(this.d.boardBoxesStore.cursorOverBox);
        }
        else {
            this.d.boardBoxesService.createBoxAtCursor();
        }
    };
    BoardCursorController.prototype.handleDragStart = function () {
        if (!this.d.boardBoxesStore.cursorOverBox) {
            return;
        }
        if (!this.d.boardBoxesStore.selectedBoxes.has(this.d.boardBoxesStore.cursorOverBox.id)) {
            this.d.boardCursorService.selectBox();
        }
        this.d.boardBoxesStore.draggingBox = this.d.boardBoxesStore.cursorOverBox;
        this.d.boardTextEditor.hide();
    };
    BoardCursorController.prototype.handleDrag = function (dragData) {
        this.d.boardCursorService.dragBox(dragData);
    };
    BoardCursorController.prototype.handleUp = function (dragData) {
        this.d.boardCursorService.connectBoxes(dragData);
        this.d.boardBoxesStore.draggingBox = undefined;
    };
    return BoardCursorController;
}());
exports.BoardCursorController = BoardCursorController;


/***/ }),

/***/ "./src/board/controllers/BoardRenderingController.ts":
/*!***********************************************************!*\
  !*** ./src/board/controllers/BoardRenderingController.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardRenderingController = void 0;
var BoardRenderingController = /** @class */ (function () {
    function BoardRenderingController(d) {
        var _this = this;
        this.isDebugDrawerEnabled = false;
        this.d = d;
        if (this.isDebugDrawerEnabled) {
            this.d.boardBoxesDrawer.afterBoxDrawnEvent.subscribe(function (box) { return _this.d.debugDrawer.rectangleCoordinates(box); });
        }
        this.d.renderer.animationEvent.subscribe(function () { return _this.handleAnimate(); });
    }
    BoardRenderingController.prototype.handleAnimate = function () {
        // Sync some global settings
        this.d.boardDrawer.cursor();
        this.d.boardDrawer.dimensions();
        this.d.boardDrawer.clearBoard();
        this.d.boardDrawer.resetTransform();
        this.d.boardDrawer.transform();
        // 1nd layer
        this.d.boardBoxesDrawer.relations();
        // 2rd layer
        this.d.boardBoxesDrawer.boxes();
        this.d.textEditorDrawer.textEditor();
        // 3th layer
        this.d.selectionDrawer.selectedArea();
        this.isDebugDrawerEnabled && this.d.debugDrawer.selectedAreaCoordinates();
        // 4th layer
        this.isDebugDrawerEnabled && this.d.debugDrawer.centerGuides();
        // 5th layer
        this.isDebugDrawerEnabled && this.d.debugDrawer.cursorCoordinates();
    };
    return BoardRenderingController;
}());
exports.BoardRenderingController = BoardRenderingController;


/***/ }),

/***/ "./src/board/controllers/BoardSelectionController.ts":
/*!***********************************************************!*\
  !*** ./src/board/controllers/BoardSelectionController.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardSelectionController = void 0;
var BoardSelectionController = /** @class */ (function () {
    function BoardSelectionController(d) {
        var _this = this;
        this.d = d;
        this.d.boardSelection.selectEvent.subscribe(function () { return _this.handleSelect(); });
    }
    BoardSelectionController.prototype.handleSelect = function () {
        if (this.d.boardBoxesStore.cursorOverBox || this.d.boardViewportStore.isMovingViewPort) {
            return;
        }
        this.d.boardSelectionService.selectBoxes();
    };
    return BoardSelectionController;
}());
exports.BoardSelectionController = BoardSelectionController;


/***/ }),

/***/ "./src/board/controllers/BoardViewportController.ts":
/*!**********************************************************!*\
  !*** ./src/board/controllers/BoardViewportController.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardViewportController = void 0;
var add_1 = __webpack_require__(/*! ../../math/vectors/add */ "./src/math/vectors/add.ts");
var Vector_1 = __webpack_require__(/*! ../../math/vectors/Vector */ "./src/math/vectors/Vector.ts");
var Drawer_1 = __webpack_require__(/*! ../../rendering/Drawer */ "./src/rendering/Drawer.ts");
var keyboard_1 = __webpack_require__(/*! ../../utils/keyboard */ "./src/utils/keyboard.ts");
var BoardViewportController = /** @class */ (function () {
    function BoardViewportController(d) {
        var _this = this;
        this.d = d;
        this.d.boardCursor.scrollEvent.subscribe(function (data) { return _this.handleScroll(data); });
        this.d.boardCursor.dragEvent.subscribe(function (data) { return _this.handleDrag(data); });
        (0, keyboard_1.onKeyDown)(keyboard_1.KEYS.space, function () { return _this.handleSpaceDown(); });
        (0, keyboard_1.onKeyUp)(keyboard_1.KEYS.space, function () { return _this.handleSpaceUp(); });
        (0, keyboard_1.onKeysDown)([keyboard_1.KEYS.alt, keyboard_1.KEYS.plus], function () { return _this.d.boardViewportService.zoomToCursor(new Vector_1.Vector({ x: 0, y: -50 })); });
        window.addEventListener('resize', function () { return _this.handleResize(); });
        this.handleResize();
    }
    BoardViewportController.prototype.handleScroll = function (_a) {
        var delta = _a.delta;
        this.d.boardViewportService.zoomToCursor(delta);
    };
    BoardViewportController.prototype.handleSpaceDown = function () {
        if (this.d.boardBoxesStore.draggingBox) {
            return;
        }
        this.d.boardViewportStore.isMovingViewPort = true;
        this.d.boardCursor.cursorType = Drawer_1.CursorType.Grab;
    };
    BoardViewportController.prototype.handleDrag = function (_a) {
        var delta = _a.delta;
        if (!this.d.boardViewportStore.isMovingViewPort) {
            return;
        }
        (0, add_1.add)(this.d.boardViewportStore.offset, delta);
    };
    BoardViewportController.prototype.handleSpaceUp = function () {
        if (!this.d.boardViewportStore.isMovingViewPort) {
            return;
        }
        this.d.boardViewportStore.isMovingViewPort = false;
        this.d.boardCursor.cursorType = Drawer_1.CursorType.Default;
    };
    BoardViewportController.prototype.handleResize = function () {
        this.d.boardViewportStore.width = window.innerWidth;
        this.d.boardViewportStore.height = window.innerHeight;
    };
    return BoardViewportController;
}());
exports.BoardViewportController = BoardViewportController;


/***/ }),

/***/ "./src/board/rendering/BoardBoxesDrawer.ts":
/*!*************************************************!*\
  !*** ./src/board/rendering/BoardBoxesDrawer.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardBoxesDrawer = void 0;
var center_1 = __webpack_require__(/*! ../../math/vectors/center */ "./src/math/vectors/center.ts");
var canvasText_1 = __webpack_require__(/*! ../../utils/canvasText */ "./src/utils/canvasText.ts");
var PubSub_1 = __webpack_require__(/*! ../../utils/pubSub/PubSub */ "./src/utils/pubSub/PubSub.ts");
var BoardBoxesDrawer = /** @class */ (function () {
    function BoardBoxesDrawer(d) {
        var _this = this;
        this.afterBoxDrawnPubSub = new PubSub_1.PubSub();
        this.afterBoxDrawnEvent = this.afterBoxDrawnPubSub.event;
        this.boxContentLinesCache = new Map();
        this.d = d;
        // TODO find a better way
        this.d.boardBoxesStore.deleteEvent.subscribe(function (box) { return _this.handleDelete(box); });
    }
    BoardBoxesDrawer.prototype.relations = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.d.boardBoxesStore.relations), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), relation = _d[1];
                this.relation(relation);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BoardBoxesDrawer.prototype.boxes = function () {
        for (var i = 0, l = this.d.boardBoxesStore.prioritizedBoxes.length; i < l; i++) {
            var box = this.d.boardBoxesStore.prioritizedBoxes[i];
            this.box(box);
        }
    };
    BoardBoxesDrawer.prototype.box = function (box) {
        var isSelected = this.d.boardBoxesStore.selectedBoxes.has(box.id);
        var isHighlighted = this.d.boardBoxesStore.highlightedBoxes.has(box.id);
        this.d.drawer.rectangle({
            strokeStyle: isSelected ? 'blue' : 'transparent',
            fillStyle: isHighlighted ? 'red' : 'skyblue',
            rectangle: box,
        });
        if (box.content) {
            this.boxContent(box);
        }
        this.afterBoxDrawnPubSub.publish(box);
    };
    BoardBoxesDrawer.prototype.getCachedBoxContentLines = function (box) {
        var linesCache = this.boxContentLinesCache.get(box.id);
        // Invalidate / create cache if required
        if (!linesCache || box.content !== linesCache.content || box.width !== linesCache.width) {
            var lines = (0, canvasText_1.createTextBlockLines)(this.d.drawer.context, {
                text: box.content,
                rectangle: box,
            }).lines;
            linesCache = {
                lines: lines,
                content: box.content,
                width: box.width,
            };
            this.boxContentLinesCache.set(box.id, linesCache);
        }
        return linesCache.lines;
    };
    BoardBoxesDrawer.prototype.boxContent = function (box) {
        // The content is already rendered by the editor
        if (this.d.boardTextEditor.shownForBox === box) {
            return;
        }
        this.d.textDrawer.textLinesAfterPoint({
            position: box,
            lines: this.getCachedBoxContentLines(box),
        });
    };
    BoardBoxesDrawer.prototype.relation = function (relation) {
        var fromBox = relation.fromBox, toBox = relation.toBox;
        this.d.drawer.line({
            from: (0, center_1.center)(fromBox.clone(), {
                x: fromBox.x + fromBox.width,
                y: fromBox.y + fromBox.height,
            }),
            to: (0, center_1.center)(toBox.clone(), {
                x: toBox.x + toBox.width,
                y: toBox.y + toBox.height,
            }),
        });
    };
    // TODO move to boxes store cache
    BoardBoxesDrawer.prototype.handleDelete = function (box) {
        this.boxContentLinesCache.delete(box.id);
    };
    return BoardBoxesDrawer;
}());
exports.BoardBoxesDrawer = BoardBoxesDrawer;


/***/ }),

/***/ "./src/board/rendering/BoardDrawer.ts":
/*!********************************************!*\
  !*** ./src/board/rendering/BoardDrawer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardDrawer = void 0;
var Rectangle_1 = __webpack_require__(/*! ../../math/rectangle/Rectangle */ "./src/math/rectangle/Rectangle.ts");
var BoardDrawer = /** @class */ (function () {
    function BoardDrawer(d) {
        this.d = d;
    }
    BoardDrawer.prototype.cursor = function () {
        this.d.drawer.cursor(this.d.boardCursor.cursorType);
    };
    BoardDrawer.prototype.clearBoard = function () {
        this.d.drawer.clearArea({
            area: new Rectangle_1.Rectangle({
                x: 0,
                y: 0,
                width: this.d.boardViewportStore.width,
                height: this.d.boardViewportStore.height,
            }),
            offset: this.d.boardViewportStore.offset,
        });
    };
    BoardDrawer.prototype.dimensions = function () {
        this.d.drawer.dimensions({
            width: this.d.boardViewportStore.width,
            height: this.d.boardViewportStore.height,
        });
    };
    BoardDrawer.prototype.transform = function () {
        var _a;
        (_a = this.d.drawer).transform.apply(_a, __spreadArray([], __read(this.d.boardViewportStore.transform.rawMatrix2d), false));
    };
    BoardDrawer.prototype.resetTransform = function () {
        this.d.drawer.resetTransform();
    };
    return BoardDrawer;
}());
exports.BoardDrawer = BoardDrawer;


/***/ }),

/***/ "./src/board/rendering/DebugDrawer.ts":
/*!********************************************!*\
  !*** ./src/board/rendering/DebugDrawer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DebugDrawer = void 0;
var centralize_1 = __webpack_require__(/*! ../../math/rectangle/centralize */ "./src/math/rectangle/centralize.ts");
var Rectangle_1 = __webpack_require__(/*! ../../math/rectangle/Rectangle */ "./src/math/rectangle/Rectangle.ts");
var add_1 = __webpack_require__(/*! ../../math/vectors/add */ "./src/math/vectors/add.ts");
var Vector_1 = __webpack_require__(/*! ../../math/vectors/Vector */ "./src/math/vectors/Vector.ts");
var DebugDrawer = /** @class */ (function () {
    function DebugDrawer(d) {
        this.d = d;
    }
    DebugDrawer.prototype.cursorCoordinates = function () {
        this.d.drawer.saveAndReset();
        this.pointCoordinates(this.d.boardCursor.position, this.d.boardCursor.boardPosition);
        this.d.drawer.restore();
    };
    DebugDrawer.prototype.selectedAreaCoordinates = function () {
        if (!this.d.boardSelection.selectedArea ||
            !this.d.boardSelection.boardSelectedArea ||
            this.d.boardViewportStore.isMovingViewPort) {
            return;
        }
        this.d.drawer.saveAndReset();
        this.rectangleCoordinates(this.d.boardSelection.selectedArea, this.d.boardSelection.boardSelectedArea);
        this.d.drawer.restore();
    };
    DebugDrawer.prototype.pointCoordinates = function (position, positionToGetText) {
        if (positionToGetText === void 0) { positionToGetText = position; }
        this.d.textDrawer.textAfterPoint({
            fontSize: 11,
            text: positionToGetText.toString(),
            position: (0, add_1.add)(position.clone(), new Vector_1.Vector({
                x: 15,
                y: -5,
            })),
        });
    };
    DebugDrawer.prototype.rectangleCoordinates = function (rectangle, rectangleToGetText) {
        if (rectangleToGetText === void 0) { rectangleToGetText = rectangle; }
        this.d.textDrawer.textLinesAfterPoint({
            lines: [rectangleToGetText.toString()],
            position: rectangle,
            fontSize: 11,
        });
    };
    DebugDrawer.prototype.centerGuides = function () {
        var rectangleSize = 3;
        this.d.drawer.saveAndReset();
        // Center point
        this.d.drawer.rectangle({
            rectangle: (0, centralize_1.centralize)(new Rectangle_1.Rectangle({
                x: this.d.boardViewportStore.absoluteCenter.x,
                y: this.d.boardViewportStore.absoluteCenter.y,
                width: rectangleSize,
                height: rectangleSize,
            })),
        });
        // Vertical guide line
        this.d.drawer.line({
            from: this.d.boardViewportStore.top,
            to: this.d.boardViewportStore.bottom,
        });
        // Horizontal guide line
        this.d.drawer.line({
            from: this.d.boardViewportStore.left,
            to: this.d.boardViewportStore.right,
        });
        // Coordinates
        this.d.textDrawer.textAfterPoint({
            position: this.d.boardViewportStore.absoluteCenter,
            text: this.d.boardViewportStore.center.toString(),
            fontSize: 11,
        });
        this.d.drawer.restore();
    };
    return DebugDrawer;
}());
exports.DebugDrawer = DebugDrawer;


/***/ }),

/***/ "./src/board/services/BoardBoxesService.ts":
/*!*************************************************!*\
  !*** ./src/board/services/BoardBoxesService.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardBoxesService = void 0;
var Box_1 = __webpack_require__(/*! ../../entities/Box */ "./src/entities/Box.ts");
var divide_1 = __webpack_require__(/*! ../../math/vectors/divide */ "./src/math/vectors/divide.ts");
var Vector_1 = __webpack_require__(/*! ../../math/vectors/Vector */ "./src/math/vectors/Vector.ts");
var canvasText_1 = __webpack_require__(/*! ../../utils/canvasText */ "./src/utils/canvasText.ts");
var BoardBoxesService = /** @class */ (function () {
    function BoardBoxesService(d) {
        this.d = d;
    }
    BoardBoxesService.prototype.createBoxAtCursor = function () {
        var _a = (0, canvasText_1.mergeWithDefaultTextOptions)({}), lineHeight = _a.lineHeight, padding = _a.padding;
        var newBox = new Box_1.Box({
            x: 0,
            y: 0,
            width: 150,
            height: lineHeight + padding * 2,
        });
        var newPosition = (0, divide_1.divide)(new Vector_1.Vector({
            x: this.d.boardCursor.boardPosition.x - (newBox.width * this.d.boardViewportStore.zoom.x) / 2,
            y: this.d.boardCursor.boardPosition.y - (newBox.height * this.d.boardViewportStore.zoom.y) / 2,
        }), this.d.boardViewportStore.zoom);
        newBox.x = newPosition.x;
        newBox.y = newPosition.y;
        this.d.boardBoxesStore.add(newBox);
        this.d.boardBoxesStore.highlightedBoxes.set(newBox.id, newBox);
        this.d.boardBoxesStore.selectedBoxes.set(newBox.id, newBox);
        this.d.boardTextEditor.showAt(newBox);
        this.d.boardBoxesStore.cursorOverBox = newBox;
    };
    return BoardBoxesService;
}());
exports.BoardBoxesService = BoardBoxesService;


/***/ }),

/***/ "./src/board/services/BoardCursorService.ts":
/*!**************************************************!*\
  !*** ./src/board/services/BoardCursorService.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardCursorService = void 0;
var intersects_1 = __webpack_require__(/*! ../../math/rectangle/intersects */ "./src/math/rectangle/intersects.ts");
var move_1 = __webpack_require__(/*! ../../math/rectangle/move */ "./src/math/rectangle/move.ts");
var divide_1 = __webpack_require__(/*! ../../math/vectors/divide */ "./src/math/vectors/divide.ts");
var keyboard_1 = __webpack_require__(/*! ../../utils/keyboard */ "./src/utils/keyboard.ts");
var BoardCursorService = /** @class */ (function () {
    function BoardCursorService(d) {
        this.d = d;
    }
    BoardCursorService.prototype.selectBox = function () {
        if (!(0, keyboard_1.isKeyPressed)(keyboard_1.KEYS.controlOSSpecific)) {
            this.d.boardBoxesStore.selectedBoxes.clear();
        }
        if (this.d.boardBoxesStore.cursorOverBox) {
            this.d.boardBoxesStore.selectedBoxes.set(this.d.boardBoxesStore.cursorOverBox.id, this.d.boardBoxesStore.cursorOverBox);
        }
    };
    BoardCursorService.prototype.highlightBox = function () {
        if (this.d.boardBoxesStore.previousCursorOverBox &&
            this.d.boardBoxesStore.cursorOverBox !== this.d.boardBoxesStore.previousCursorOverBox) {
            this.d.boardBoxesStore.highlightedBoxes.delete(this.d.boardBoxesStore.previousCursorOverBox.id);
        }
        if (this.d.boardBoxesStore.cursorOverBox) {
            this.d.boardBoxesStore.highlightedBoxes.set(this.d.boardBoxesStore.cursorOverBox.id, this.d.boardBoxesStore.cursorOverBox);
        }
    };
    BoardCursorService.prototype.hoverCursorOverBox = function () {
        this.d.boardBoxesStore.previousCursorOverBox = this.d.boardBoxesStore.cursorOverBox;
        this.d.boardBoxesStore.cursorOverBox = this.d.boardBoxesStore.getBoxByPosition(this.d.boardCursor.boardPosition, this.d.boardViewportStore.zoom);
    };
    BoardCursorService.prototype.dragBox = function (_a) {
        var e_1, _b, e_2, _c;
        var delta = _a.delta;
        if (!this.d.boardBoxesStore.draggingBox || this.d.boardViewportStore.isMovingViewPort) {
            return;
        }
        try {
            for (var _d = __values(this.d.boardBoxesStore.prioritizedBoxes), _e = _d.next(); !_e.done; _e = _d.next()) {
                var box = _e.value;
                if (box === this.d.boardBoxesStore.draggingBox) {
                    continue;
                }
                var isAlreadyHovered = this.d.boardBoxesStore.boxesUnderDraggingBox.has(box.id);
                var hasIntersection = (0, intersects_1.intersects)(this.d.boardBoxesStore.draggingBox, box);
                if (hasIntersection && !isAlreadyHovered) {
                    this.d.boardBoxesStore.boxesUnderDraggingBox.set(box.id, box);
                    this.d.boardBoxesStore.highlightedBoxes.set(box.id, box);
                }
                else if (!hasIntersection && isAlreadyHovered) {
                    this.d.boardBoxesStore.boxesUnderDraggingBox.delete(box.id);
                    this.d.boardBoxesStore.highlightedBoxes.delete(box.id);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var zoomedDelta = (0, divide_1.divide)(delta.clone(), this.d.boardViewportStore.zoom);
        try {
            for (var _f = __values(this.d.boardBoxesStore.selectedBoxes), _g = _f.next(); !_g.done; _g = _f.next()) {
                var _h = __read(_g.value, 2), box = _h[1];
                (0, move_1.move)(box, zoomedDelta);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    BoardCursorService.prototype.connectBoxes = function (_a) {
        var e_3, _b;
        var totalDelta = _a.totalDelta;
        var zoomedDelta = (0, divide_1.divide)(totalDelta.clone(), this.d.boardViewportStore.zoom);
        if (this.d.boardBoxesStore.boxesUnderDraggingBox.size > 0) {
            try {
                for (var _c = __values(this.d.boardBoxesStore.selectedBoxes), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), box = _e[1];
                    // Move box back
                    (0, move_1.move)(box, zoomedDelta, -1);
                    this.d.boardBoxesStore.connectBox(box, this.d.boardBoxesStore.boxesUnderDraggingBox);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        this.d.boardBoxesStore.highlightedBoxes.clear();
        this.d.boardBoxesStore.boxesUnderDraggingBox.clear();
        this.highlightBox();
    };
    return BoardCursorService;
}());
exports.BoardCursorService = BoardCursorService;


/***/ }),

/***/ "./src/board/services/BoardSelectionService.ts":
/*!*****************************************************!*\
  !*** ./src/board/services/BoardSelectionService.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardSelectionService = void 0;
var intersects_1 = __webpack_require__(/*! ../../math/rectangle/intersects */ "./src/math/rectangle/intersects.ts");
var multiplyByVector_1 = __webpack_require__(/*! ../../math/rectangle/multiplyByVector */ "./src/math/rectangle/multiplyByVector.ts");
var BoardSelectionService = /** @class */ (function () {
    function BoardSelectionService(d) {
        this.d = d;
    }
    BoardSelectionService.prototype.selectBoxes = function () {
        var e_1, _a;
        if (!this.d.boardSelection.boardSelectedArea) {
            // Should never happen
            console.warn('Missing selected area');
            return;
        }
        try {
            for (var _b = __values(this.d.boardBoxesStore.prioritizedBoxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var box = _c.value;
                var zoomedBox = (0, multiplyByVector_1.multiplyByVector)(box.clone(), this.d.boardViewportStore.zoom);
                if ((0, intersects_1.intersects)(this.d.boardSelection.boardSelectedArea, zoomedBox)) {
                    this.d.boardBoxesStore.selectedBoxes.set(box.id, box);
                }
                else {
                    this.d.boardBoxesStore.selectedBoxes.delete(box.id);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return BoardSelectionService;
}());
exports.BoardSelectionService = BoardSelectionService;


/***/ }),

/***/ "./src/board/services/BoardViewportService.ts":
/*!****************************************************!*\
  !*** ./src/board/services/BoardViewportService.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardViewportService = void 0;
var zoomToPoint_1 = __webpack_require__(/*! ../../math/matrixes2d/zoomToPoint */ "./src/math/matrixes2d/zoomToPoint.ts");
var Vector_1 = __webpack_require__(/*! ../../math/vectors/Vector */ "./src/math/vectors/Vector.ts");
var BoardViewportService = /** @class */ (function () {
    function BoardViewportService(d) {
        this.d = d;
    }
    BoardViewportService.prototype.zoomToCursor = function (delta) {
        var _a = this.d, boardViewportStore = _a.boardViewportStore, transform = _a.boardViewportStore.transform, boardCursor = _a.boardCursor;
        var _d = __read((0, zoomToPoint_1.zoomToPoint)(transform.clone(), boardCursor.position, delta).rawMatrix2d, 6), zoomX = _d[0], _b = _d[1], _c = _d[2], zoomY = _d[3], offsetX = _d[4], offsetY = _d[5];
        var newOffset = new Vector_1.Vector({ x: offsetX, y: offsetY });
        boardViewportStore.offset = newOffset;
        boardViewportStore.zoom.x = zoomX;
        boardViewportStore.zoom.y = zoomY;
    };
    return BoardViewportService;
}());
exports.BoardViewportService = BoardViewportService;


/***/ }),

/***/ "./src/board/stores/BoardBoxesStore.ts":
/*!*********************************************!*\
  !*** ./src/board/stores/BoardBoxesStore.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardBoxesStore = void 0;
var Relation_1 = __webpack_require__(/*! ../../entities/Relation */ "./src/entities/Relation.ts");
var isPointInside_1 = __webpack_require__(/*! ../../math/rectangle/isPointInside */ "./src/math/rectangle/isPointInside.ts");
var multiplyByVector_1 = __webpack_require__(/*! ../../math/rectangle/multiplyByVector */ "./src/math/rectangle/multiplyByVector.ts");
var PubSub_1 = __webpack_require__(/*! ../../utils/pubSub/PubSub */ "./src/utils/pubSub/PubSub.ts");
var BoardBoxesStore = /** @class */ (function () {
    function BoardBoxesStore() {
        this.deletePubSub = new PubSub_1.PubSub();
        this.deleteEvent = this.deletePubSub.event;
        this.boxes = new Map();
        // Boxes which were touched last are at the ned of this array.
        // Boxes with the highest priority (at the end) should be rendered last.
        this.prioritizedBoxes = [];
        this.boxesUnderDraggingBox = new Map();
        this.relations = new Map();
        this.highlightedBoxes = new Map();
        this.selectedBoxes = new Map();
    }
    // TODO can be optimized? E.g. use a linked list + map approach.
    BoardBoxesStore.prototype.riseBoxPriority = function (box) {
        var index = -1;
        // Check from end in case if the box has the max priority
        // eslint-disable-next-line for-direction
        for (var i = this.prioritizedBoxes.length - 1; i >= 0; i++) {
            var box_1 = this.prioritizedBoxes[i];
            if (this.prioritizedBoxes[i] === box_1) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            return;
        }
        this.prioritizedBoxes.splice(index, 1);
        this.prioritizedBoxes.push(box);
    };
    BoardBoxesStore.prototype.add = function (box) {
        this.boxes.set(box.id, box);
        this.prioritizedBoxes.push(box);
        return box;
    };
    BoardBoxesStore.prototype.delete = function (box) {
        var _this = this;
        this.boxes.delete(box.id);
        this.selectedBoxes.delete(box.id);
        this.highlightedBoxes.delete(box.id);
        var prioritizedBoxIndex = this.prioritizedBoxes.indexOf(box);
        box.relations.forEach(function (relation) {
            var toBoxRelationIndex = relation.toBox.relations.indexOf(relation);
            relation.toBox.relations.splice(toBoxRelationIndex, 1);
            _this.relations.delete(relation.id);
        });
        // TODO can be optimized? E.g. use a linked list + map approach.
        if (prioritizedBoxIndex !== -1) {
            this.prioritizedBoxes.splice(prioritizedBoxIndex, 1);
        }
        this.deletePubSub.publish(box);
    };
    // TODO don't iterate all boxes (improve performance).
    BoardBoxesStore.prototype.getBoxByPosition = function (position, zoom) {
        for (var i = this.prioritizedBoxes.length - 1; i >= 0; i--) {
            var box = this.prioritizedBoxes[i];
            if ((0, isPointInside_1.isPointInside)(position, (0, multiplyByVector_1.multiplyByVector)(box.clone(), zoom))) {
                return box;
            }
        }
    };
    BoardBoxesStore.prototype.connectBox = function (fromBox, toBoxes) {
        var _this = this;
        toBoxes.forEach(function (toBox) {
            var existedRelation = fromBox.relations.find(function (relationToCheck) {
                return (toBox.id === relationToCheck.toBox.id && fromBox.id === relationToCheck.fromBox.id) ||
                    (toBox.id === relationToCheck.fromBox.id && fromBox.id === relationToCheck.toBox.id);
            });
            // If relation exists, then we need to delete this relation
            if (existedRelation) {
                fromBox.relations = fromBox.relations.filter(function (_a) {
                    var id = _a.id;
                    return existedRelation.id !== id;
                });
                toBox.relations = fromBox.relations.filter(function (_a) {
                    var id = _a.id;
                    return existedRelation.id !== id;
                });
                _this.relations.delete(existedRelation.id);
            }
            // Create relation
            else {
                var relation = new Relation_1.Relation(fromBox, toBox);
                fromBox.relations.push(relation);
                toBox.relations.push(relation);
                _this.relations.set(relation.id, relation);
            }
        });
    };
    return BoardBoxesStore;
}());
exports.BoardBoxesStore = BoardBoxesStore;


/***/ }),

/***/ "./src/board/stores/BoardViewportStore.ts":
/*!************************************************!*\
  !*** ./src/board/stores/BoardViewportStore.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardViewportStore = void 0;
var Matrix2d_1 = __webpack_require__(/*! ../../math/matrixes2d/Matrix2d */ "./src/math/matrixes2d/Matrix2d.ts");
var add_1 = __webpack_require__(/*! ../../math/vectors/add */ "./src/math/vectors/add.ts");
var subtract_1 = __webpack_require__(/*! ../../math/vectors/subtract */ "./src/math/vectors/subtract.ts");
var Vector_1 = __webpack_require__(/*! ../../math/vectors/Vector */ "./src/math/vectors/Vector.ts");
var BoardViewportStore = /** @class */ (function () {
    function BoardViewportStore() {
        this.zoom = new Vector_1.Vector({ x: 1, y: 1 });
        this.offset = new Vector_1.Vector();
        this.isMovingViewPort = false;
        this.width = 0;
        this.height = 0;
    }
    Object.defineProperty(BoardViewportStore.prototype, "absoluteCenter", {
        get: function () {
            return new Vector_1.Vector({
                x: this.width / 2,
                y: this.height / 2,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardViewportStore.prototype, "center", {
        get: function () {
            return (0, subtract_1.subtract)(this.absoluteCenter.clone(), this.offset);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardViewportStore.prototype, "left", {
        get: function () {
            return new Vector_1.Vector({
                x: 0,
                y: this.height / 2,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardViewportStore.prototype, "top", {
        get: function () {
            return new Vector_1.Vector({
                x: this.width / 2,
                y: 0,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardViewportStore.prototype, "right", {
        get: function () {
            return (0, add_1.add)(this.left.clone(), new Vector_1.Vector({
                x: this.width,
                y: 0,
            }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardViewportStore.prototype, "bottom", {
        get: function () {
            return (0, add_1.add)(this.top.clone(), new Vector_1.Vector({
                x: 0,
                y: this.height,
            }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardViewportStore.prototype, "transform", {
        get: function () {
            return new Matrix2d_1.Matrix2d({
                rawMatrix2d: [this.zoom.x, 0, 0, this.zoom.y, this.offset.x, this.offset.y],
            });
        },
        enumerable: false,
        configurable: true
    });
    return BoardViewportStore;
}());
exports.BoardViewportStore = BoardViewportStore;


/***/ }),

/***/ "./src/components/Cursor.ts":
/*!**********************************!*\
  !*** ./src/components/Cursor.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cursor = void 0;
var Vector_1 = __webpack_require__(/*! ../math/vectors/Vector */ "./src/math/vectors/Vector.ts");
var Drawer_1 = __webpack_require__(/*! ../rendering/Drawer */ "./src/rendering/Drawer.ts");
var extendedClickHandler_1 = __webpack_require__(/*! ../utils/dom/extendedClickHandler */ "./src/utils/dom/extendedClickHandler.ts");
var getPositionFromMouseEvent_1 = __webpack_require__(/*! ../utils/dom/getPositionFromMouseEvent */ "./src/utils/dom/getPositionFromMouseEvent.ts");
var PubSub_1 = __webpack_require__(/*! ../utils/pubSub/PubSub */ "./src/utils/pubSub/PubSub.ts");
var Cursor = /** @class */ (function () {
    function Cursor(containerElement, position) {
        if (position === void 0) { position = new Vector_1.Vector(); }
        var _this = this;
        this.cursorType = Drawer_1.CursorType.Default;
        this.movePubSub = new PubSub_1.PubSub();
        this.moveEvent = this.movePubSub.event;
        this.tabPubSub = new PubSub_1.PubSub();
        this.tapEvent = this.tabPubSub.event;
        this.doubleTapPubSub = new PubSub_1.PubSub();
        this.doubleTabEvent = this.doubleTapPubSub.event;
        this.dragStartPubSub = new PubSub_1.PubSub();
        this.dragStartEvent = this.dragStartPubSub.event;
        this.dragPubSub = new PubSub_1.PubSub();
        this.dragEvent = this.dragPubSub.event;
        this.dragEndPubSub = new PubSub_1.PubSub();
        this.dragEndEvent = this.dragEndPubSub.event;
        this.upPubSub = new PubSub_1.PubSub();
        this.upEvent = this.upPubSub.event;
        this.downPubSub = new PubSub_1.PubSub();
        this.downEvent = this.downPubSub.event;
        this.scrollPubSub = new PubSub_1.PubSub();
        this.scrollEvent = this.scrollPubSub.event;
        this.position = position;
        this.containerElement = containerElement;
        this.containerElement.addEventListener('wheel', function (event) { return _this.handleScroll(event); });
        this.containerElement.addEventListener('mousemove', function (event) { return _this.handleMove(event); });
        (0, extendedClickHandler_1.extendedClickHandler)(containerElement, {
            debug: false,
            silenceClickAfterDrag: true,
            dragMode: extendedClickHandler_1.DragMode.Down,
            onClick: function (data) { return _this.handleClick(data); },
            onDoubleClick: function (data) { return _this.handleDoubleClick(data); },
            onDragStart: function (data) { return _this.handleDragStart(data); },
            onDrag: function (data) { return _this.handleDrag(data); },
            onDragEnd: function (data) { return _this.handleDragEnd(data); },
            onMouseDown: function (data) { return _this.handleMouseDown(data); },
            onMouseUp: function (data) { return _this.handleMouseUp(data); },
        });
    }
    Cursor.prototype.handleMove = function (event) {
        this.position.updateFrom((0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, this.containerElement));
        this.movePubSub.publish({ event: event, position: this.position });
    };
    Cursor.prototype.handleClick = function (data) {
        this.tabPubSub.publish(data);
    };
    Cursor.prototype.handleDoubleClick = function (data) {
        this.doubleTapPubSub.publish(data);
    };
    Cursor.prototype.handleDragStart = function (data) {
        this.dragStartPubSub.publish(data);
    };
    Cursor.prototype.handleDrag = function (data) {
        this.dragPubSub.publish(data);
    };
    Cursor.prototype.handleDragEnd = function (data) {
        this.dragEndPubSub.publish(data);
    };
    Cursor.prototype.handleMouseUp = function (data) {
        this.upPubSub.publish(data);
    };
    Cursor.prototype.handleMouseDown = function (data) {
        this.downPubSub.publish(data);
    };
    Cursor.prototype.handleScroll = function (event) {
        this.scrollPubSub.publish({
            event: event,
            position: this.position,
            delta: new Vector_1.Vector({
                x: event.deltaX,
                y: event.deltaY,
            }),
        });
    };
    return Cursor;
}());
exports.Cursor = Cursor;


/***/ }),

/***/ "./src/components/Selection.ts":
/*!*************************************!*\
  !*** ./src/components/Selection.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Selection = void 0;
var Rectangle_1 = __webpack_require__(/*! ../math/rectangle/Rectangle */ "./src/math/rectangle/Rectangle.ts");
var sort_1 = __webpack_require__(/*! ../math/vectors/sort */ "./src/math/vectors/sort.ts");
var getPositionFromMouseEvent_1 = __webpack_require__(/*! ../utils/dom/getPositionFromMouseEvent */ "./src/utils/dom/getPositionFromMouseEvent.ts");
var PubSub_1 = __webpack_require__(/*! ../utils/pubSub/PubSub */ "./src/utils/pubSub/PubSub.ts");
var Selection = /** @class */ (function () {
    function Selection(cursor) {
        var _this = this;
        this.isMouseDown = false;
        this.selectStartPubSub = new PubSub_1.PubSub();
        this.selectStartEvent = this.selectStartPubSub.event;
        this.selectPubSub = new PubSub_1.PubSub();
        this.selectEvent = this.selectPubSub.event;
        this.selectEndPubSub = new PubSub_1.PubSub();
        this.selectEndEvent = this.selectEndPubSub.event;
        this.canSelect = true;
        this.cursor = cursor;
        this.cursor.downEvent.subscribe(function (_a) {
            var event = _a.event;
            return _this.handleDown(event);
        });
        this.cursor.moveEvent.subscribe(function (_a) {
            var event = _a.event;
            return _this.handleMove(event);
        });
        this.cursor.upEvent.subscribe(function (_a) {
            var event = _a.event;
            return _this.handleUp(event);
        });
    }
    Object.defineProperty(Selection.prototype, "selectedArea", {
        get: function () {
            if (this.canSelect === false) {
                return;
            }
            return this._selectedArea;
        },
        enumerable: false,
        configurable: true
    });
    Selection.prototype.getSelection = function (event) {
        if (!this.lastDownEvent) {
            return new Rectangle_1.Rectangle();
        }
        var pointFromLastDown = (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(this.lastDownEvent, this.cursor.containerElement);
        var currentPoint = (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, this.cursor.containerElement);
        var _a = __read((0, sort_1.sort)(pointFromLastDown, currentPoint), 2), fromPoint = _a[0], toPoint = _a[1];
        return Rectangle_1.Rectangle.fromPoints(fromPoint, toPoint);
    };
    Selection.prototype.handleDown = function (event) {
        this.lastDownEvent = event;
        this.isMouseDown = true;
        this._selectedArea = this.getSelection(event);
        this.selectStartPubSub.publish({
            event: event,
        });
    };
    Selection.prototype.handleMove = function (event) {
        var selectedArea = this._selectedArea;
        if (!selectedArea) {
            return;
        }
        if (!this.isMouseDown || this.canSelect === false) {
            return;
        }
        selectedArea.updateFrom(this.getSelection(event));
        this.selectPubSub.publish({
            event: event,
            selectedArea: selectedArea,
        });
    };
    Selection.prototype.handleUp = function (event) {
        this.isMouseDown = false;
        var selectedArea = this._selectedArea;
        // TODO investigate why this happens on double click
        if (!selectedArea) {
            // Should never happen
            console.warn('Missing selected area');
            return;
        }
        selectedArea.updateFrom(this.getSelection(event));
        this.selectEndPubSub.publish({
            event: event,
            selectedArea: selectedArea,
        });
        this._selectedArea = undefined;
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),

/***/ "./src/components/TextEditor.ts":
/*!**************************************!*\
  !*** ./src/components/TextEditor.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextEditor = void 0;
var Rectangle_1 = __webpack_require__(/*! ../math/rectangle/Rectangle */ "./src/math/rectangle/Rectangle.ts");
var canvasText_1 = __webpack_require__(/*! ../utils/canvasText */ "./src/utils/canvasText.ts");
var keyboard_1 = __webpack_require__(/*! ../utils/keyboard */ "./src/utils/keyboard.ts");
var PubSub_1 = __webpack_require__(/*! ../utils/pubSub/PubSub */ "./src/utils/pubSub/PubSub.ts");
var TextEditor = /** @class */ (function () {
    function TextEditor(d) {
        var _this = this;
        this.isListenersAttached = false;
        this.inputPubSub = new PubSub_1.PubSub();
        this.inputEvent = this.inputPubSub.event;
        this.contentHeightPubSub = new PubSub_1.PubSub();
        this.contentHeightEvent = this.contentHeightPubSub.event;
        this._content = '';
        this.fontSize = 14;
        this.width = 0;
        this.height = 0;
        this.handleKeydown = function (event) {
            var isLetterOrNumber = event.key.length === 1;
            if (isLetterOrNumber) {
                _this.content += event.key;
            }
            else if ((0, keyboard_1.isKeyPressed)(keyboard_1.KEYS.enter, event)) {
                _this.content += '\n';
            }
            else if ((0, keyboard_1.isKeyPressed)(keyboard_1.KEYS.backspace, event)) {
                _this.content = _this.content.slice(0, -1);
            }
            _this.inputPubSub.publish({
                event: event,
                textEditor: _this,
            });
        };
        this.d = d;
        this.textBlockLines = this.createTextBlockLines();
    }
    Object.defineProperty(TextEditor.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (content) {
            if (this._content === content) {
                return;
            }
            var previousHeight = this.textBlockLines.textBlockMetrics.heightWidthPaddings;
            this._content = content;
            this.textBlockLines = this.createTextBlockLines();
            var newHeight = this.textBlockLines.textBlockMetrics.heightWidthPaddings;
            if (previousHeight !== newHeight) {
                this.contentHeightPubSub.publish({
                    height: newHeight,
                    delta: newHeight - previousHeight,
                });
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextEditor.prototype, "editorRectangle", {
        get: function () {
            return new Rectangle_1.Rectangle(__assign(__assign({}, (this.shownAt || { x: 0, y: 0 })), { width: this.width, height: this.height }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextEditor.prototype, "shownAt", {
        get: function () {
            return this._shownAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextEditor.prototype, "isShown", {
        get: function () {
            return Boolean(this._shownAt);
        },
        enumerable: false,
        configurable: true
    });
    TextEditor.prototype.createTextBlockLines = function () {
        return (0, canvasText_1.createTextBlockLines)(this.d.canvasContext, {
            text: this.content,
            fontSize: this.fontSize,
            rectangle: this.editorRectangle,
        });
    };
    TextEditor.prototype.attachKeyboardListeners = function () {
        if (this.isListenersAttached) {
            return;
        }
        this.isListenersAttached = true;
        document.addEventListener('keydown', this.handleKeydown);
    };
    TextEditor.prototype.detachKeyboardListeners = function () {
        this.isListenersAttached = false;
        document.removeEventListener('keydown', this.handleKeydown);
    };
    TextEditor.prototype.showAt = function (position, dimensions) {
        if (dimensions) {
            this.width = dimensions.width;
            this.height = dimensions.height;
        }
        this._shownAt = position;
        this.textBlockLines = this.createTextBlockLines();
        this.attachKeyboardListeners();
    };
    TextEditor.prototype.hide = function () {
        this._shownAt = undefined;
        this.detachKeyboardListeners();
    };
    return TextEditor;
}());
exports.TextEditor = TextEditor;


/***/ }),

/***/ "./src/entities/Box.ts":
/*!*****************************!*\
  !*** ./src/entities/Box.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Box = void 0;
var Rectangle_1 = __webpack_require__(/*! ../math/rectangle/Rectangle */ "./src/math/rectangle/Rectangle.ts");
var idGenerator_1 = __webpack_require__(/*! ../utils/idGenerator */ "./src/utils/idGenerator.ts");
var generateId = (0, idGenerator_1.getIdGenerator)();
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._id = generateId();
        _this.content = '';
        _this.relations = [];
        return _this;
    }
    Object.defineProperty(Box.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}(Rectangle_1.Rectangle));
exports.Box = Box;


/***/ }),

/***/ "./src/entities/Relation.ts":
/*!**********************************!*\
  !*** ./src/entities/Relation.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Relation = void 0;
var idGenerator_1 = __webpack_require__(/*! ../utils/idGenerator */ "./src/utils/idGenerator.ts");
var generateId = (0, idGenerator_1.getIdGenerator)();
var Relation = /** @class */ (function () {
    function Relation(fromBox, toBox) {
        this._id = generateId();
        this.fromBox = fromBox;
        this.toBox = toBox;
    }
    Object.defineProperty(Relation.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return Relation;
}());
exports.Relation = Relation;


/***/ }),

/***/ "./src/math/map.ts":
/*!*************************!*\
  !*** ./src/math/map.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.map = void 0;
// https://stackoverflow.com/a/5650012
var map = function (value, start1, stop1, start2, stop2) {
    return start2 + ((stop2 - start2) * (value - start1)) / (stop1 - start1);
};
exports.map = map;


/***/ }),

/***/ "./src/math/matrixes2d/Matrix2d.ts":
/*!*****************************************!*\
  !*** ./src/math/matrixes2d/Matrix2d.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Matrix2d = void 0;
var Matrix2d = /** @class */ (function () {
    function Matrix2d(_a) {
        var _b = _a === void 0 ? { rawMatrix2d: [1, 0, 0, 1, 0, 0] } : _a, _c = __read(_b.rawMatrix2d, 6), a = _c[0], b = _c[1], c = _c[2], d = _c[3], tx = _c[4], ty = _c[5];
        this.rawMatrix2d = [a, b, c, d, tx, ty];
    }
    Matrix2d.prototype.clone = function () {
        return new Matrix2d(this);
    };
    Matrix2d.prototype.updateFrom = function (_a) {
        var rawMatrix2d = _a.rawMatrix2d;
        this.rawMatrix2d = rawMatrix2d;
        return this;
    };
    Matrix2d.prototype.toString = function (limited) {
        var a = limited ? this.rawMatrix2d[0].toFixed(1) : this.rawMatrix2d[0];
        var b = limited ? this.rawMatrix2d[1].toFixed(1) : this.rawMatrix2d[1];
        var c = limited ? this.rawMatrix2d[2].toFixed(1) : this.rawMatrix2d[2];
        var d = limited ? this.rawMatrix2d[3].toFixed(1) : this.rawMatrix2d[3];
        var tx = limited ? this.rawMatrix2d[4].toFixed(1) : this.rawMatrix2d[4];
        var ty = limited ? this.rawMatrix2d[5].toFixed(1) : this.rawMatrix2d[5];
        return "".concat(a, ":").concat(b, ":").concat(c, ":").concat(d, ":").concat(tx, ":").concat(ty);
    };
    return Matrix2d;
}());
exports.Matrix2d = Matrix2d;


/***/ }),

/***/ "./src/math/matrixes2d/fromScale.ts":
/*!******************************************!*\
  !*** ./src/math/matrixes2d/fromScale.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromScale = void 0;
var fromScale = function (vector) { return ({
    rawMatrix2d: [vector.x, 0, 0, vector.y, 0, 0],
}); };
exports.fromScale = fromScale;


/***/ }),

/***/ "./src/math/matrixes2d/fromTranslation.ts":
/*!************************************************!*\
  !*** ./src/math/matrixes2d/fromTranslation.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromTranslation = void 0;
var fromTranslation = function (vector) { return ({
    rawMatrix2d: [1, 0, 0, 1, vector.x, vector.y],
}); };
exports.fromTranslation = fromTranslation;


/***/ }),

/***/ "./src/math/matrixes2d/multiply.ts":
/*!*****************************************!*\
  !*** ./src/math/matrixes2d/multiply.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.multiply = void 0;
// TODO figure out math
// https://github.com/toji/gl-matrix/blob/8962b2e7727594022e59e48e605049c69403da60/src/mat2d.js#L182
var multiply = function (matrixA, matrixB, destination) {
    if (destination === void 0) { destination = matrixA; }
    var rawMatrix2dA = matrixA.rawMatrix2d;
    var rawMatrix2dB = matrixB.rawMatrix2d;
    var rawMatrixDestination = destination.rawMatrix2d;
    var a0 = rawMatrix2dA[0];
    var a1 = rawMatrix2dA[1];
    var a2 = rawMatrix2dA[2];
    var a3 = rawMatrix2dA[3];
    var a4 = rawMatrix2dA[4];
    var a5 = rawMatrix2dA[5];
    var b0 = rawMatrix2dB[0];
    var b1 = rawMatrix2dB[1];
    var b2 = rawMatrix2dB[2];
    var b3 = rawMatrix2dB[3];
    var b4 = rawMatrix2dB[4];
    var b5 = rawMatrix2dB[5];
    rawMatrixDestination[0] = a0 * b0 + a2 * b1;
    rawMatrixDestination[1] = a1 * b0 + a3 * b1;
    rawMatrixDestination[2] = a0 * b2 + a2 * b3;
    rawMatrixDestination[3] = a1 * b2 + a3 * b3;
    rawMatrixDestination[4] = a0 * b4 + a2 * b5 + a4;
    rawMatrixDestination[5] = a1 * b4 + a3 * b5 + a5;
    return destination;
};
exports.multiply = multiply;


/***/ }),

/***/ "./src/math/matrixes2d/zoomToPoint.ts":
/*!********************************************!*\
  !*** ./src/math/matrixes2d/zoomToPoint.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zoomToPoint = void 0;
var map_1 = __webpack_require__(/*! ../map */ "./src/math/map.ts");
var multiply_1 = __webpack_require__(/*! ../vectors/multiply */ "./src/math/vectors/multiply.ts");
var Vector_1 = __webpack_require__(/*! ../vectors/Vector */ "./src/math/vectors/Vector.ts");
var fromScale_1 = __webpack_require__(/*! ./fromScale */ "./src/math/matrixes2d/fromScale.ts");
var fromTranslation_1 = __webpack_require__(/*! ./fromTranslation */ "./src/math/matrixes2d/fromTranslation.ts");
var multiply_2 = __webpack_require__(/*! ./multiply */ "./src/math/matrixes2d/multiply.ts");
var zoomToPoint = function (matrix, point, delta) {
    // 1 - zoom in, -1 - zoom out
    var zoomDirection = -1 * Math.sign(delta.y);
    var originalRawMatrixCopy = __spreadArray([], __read(matrix.rawMatrix2d), false);
    var maxZoomLevel = 4;
    var minZoomLevel = 0.2;
    var zoomIntensity = (0, map_1.map)(Math.abs(delta.y), 0, 50, 0, 0.1); // 0.05;
    var zoomRelativeDifference = zoomDirection * zoomIntensity;
    var fromPoint = point;
    var toPoint = (0, multiply_1.multiply)(fromPoint.clone(), new Vector_1.Vector({ x: -1, y: -1 }));
    var relativeZoom = new Vector_1.Vector({ x: 1 + zoomRelativeDifference, y: 1 + zoomRelativeDifference });
    var toPointMatrix = (0, fromTranslation_1.fromTranslation)(toPoint);
    var scaleMatrix = (0, fromScale_1.fromScale)(relativeZoom);
    var fromPointMatrix = (0, fromTranslation_1.fromTranslation)(fromPoint);
    // https://medium.com/@benjamin.botto/zooming-at-the-mouse-coordinates-with-affine-transformations-86e7312fd50b
    matrix = (0, multiply_2.multiply)(toPointMatrix, matrix, matrix);
    matrix = (0, multiply_2.multiply)(scaleMatrix, matrix, matrix);
    matrix = (0, multiply_2.multiply)(fromPointMatrix, matrix, matrix);
    var _a = __read(matrix.rawMatrix2d, 4), zoomX = _a[0], _b = _a[1], _c = _a[2], zoomY = _a[3];
    if (zoomX > maxZoomLevel || zoomX < minZoomLevel || zoomY > maxZoomLevel || zoomY < minZoomLevel) {
        matrix.rawMatrix2d[0] = originalRawMatrixCopy[0];
        matrix.rawMatrix2d[1] = originalRawMatrixCopy[1];
        matrix.rawMatrix2d[2] = originalRawMatrixCopy[2];
        matrix.rawMatrix2d[3] = originalRawMatrixCopy[3];
        matrix.rawMatrix2d[4] = originalRawMatrixCopy[4];
        matrix.rawMatrix2d[5] = originalRawMatrixCopy[5];
    }
    return matrix;
};
exports.zoomToPoint = zoomToPoint;


/***/ }),

/***/ "./src/math/rectangle/Rectangle.ts":
/*!*****************************************!*\
  !*** ./src/math/rectangle/Rectangle.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(_a) {
        var _b = _a === void 0 ? { x: 0, y: 0, width: 0, height: 0 } : _a, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Rectangle.fromPoints = function (start, end) {
        return new Rectangle({
            x: start.x,
            y: start.y,
            width: Math.abs(end.x - start.x),
            height: Math.abs(end.y - start.y),
        });
    };
    Rectangle.prototype.clone = function () {
        return new Rectangle(this);
    };
    Rectangle.prototype.updateFrom = function (rectangle) {
        this.x = rectangle.x;
        this.y = rectangle.y;
        this.width = rectangle.width;
        this.height = rectangle.height;
        return this;
    };
    Rectangle.prototype.toString = function (limited) {
        if (limited === void 0) { limited = true; }
        var x = limited ? this.x.toFixed(1) : this.x;
        var y = limited ? this.y.toFixed(1) : this.y;
        var width = limited ? this.width.toFixed(1) : this.width;
        var height = limited ? this.height.toFixed(1) : this.height;
        return "".concat(x, ":").concat(y, ":").concat(width, ":").concat(height);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;


/***/ }),

/***/ "./src/math/rectangle/centralize.ts":
/*!******************************************!*\
  !*** ./src/math/rectangle/centralize.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.centralize = void 0;
var subtract_1 = __webpack_require__(/*! ../vectors/subtract */ "./src/math/vectors/subtract.ts");
var centralize = function (rectangle) {
    var centralizeVector = {
        x: rectangle.width / 2,
        y: rectangle.height / 2,
    };
    (0, subtract_1.subtract)(rectangle, centralizeVector);
    return rectangle;
};
exports.centralize = centralize;


/***/ }),

/***/ "./src/math/rectangle/intersects.ts":
/*!******************************************!*\
  !*** ./src/math/rectangle/intersects.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.intersects = void 0;
var touches_1 = __webpack_require__(/*! ./touches */ "./src/math/rectangle/touches.ts");
function intersects(rectangleA, rectangleB, mode) {
    if (mode === void 0) { mode = 'touch'; }
    switch (mode) {
        case 'center': {
            throw new Error('Not implemented');
        }
        case 'cover': {
            throw new Error('Not implemented');
        }
        case 'touch': {
            return (0, touches_1.touches)(rectangleA, rectangleB);
        }
        default:
            throw new Error('Not implemented');
    }
}
exports.intersects = intersects;


/***/ }),

/***/ "./src/math/rectangle/isPointInside.ts":
/*!*********************************************!*\
  !*** ./src/math/rectangle/isPointInside.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isPointInside = void 0;
var isPointInside = function (point, rectangle) {
    if (point.x < rectangle.x || point.x > rectangle.x + rectangle.width) {
        return false;
    }
    if (point.y < rectangle.y || point.y > rectangle.y + rectangle.height) {
        return false;
    }
    return true;
};
exports.isPointInside = isPointInside;


/***/ }),

/***/ "./src/math/rectangle/move.ts":
/*!************************************!*\
  !*** ./src/math/rectangle/move.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.move = void 0;
var add_1 = __webpack_require__(/*! ../vectors/add */ "./src/math/vectors/add.ts");
var subtract_1 = __webpack_require__(/*! ../vectors/subtract */ "./src/math/vectors/subtract.ts");
var move = function (rectangle, vector, direction) {
    if (direction === void 0) { direction = 1; }
    if (direction === 1) {
        (0, add_1.add)(rectangle, vector);
    }
    else {
        (0, subtract_1.subtract)(rectangle, vector);
    }
    return rectangle;
};
exports.move = move;


/***/ }),

/***/ "./src/math/rectangle/multiplyByVector.ts":
/*!************************************************!*\
  !*** ./src/math/rectangle/multiplyByVector.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.multiplyByVector = void 0;
var multiply_1 = __webpack_require__(/*! ../vectors/multiply */ "./src/math/vectors/multiply.ts");
var scale_1 = __webpack_require__(/*! ./scale */ "./src/math/rectangle/scale.ts");
var multiplyByVector = function (rectangle, vector) {
    (0, scale_1.scale)(rectangle, vector);
    (0, multiply_1.multiply)(rectangle, vector);
    return rectangle;
};
exports.multiplyByVector = multiplyByVector;


/***/ }),

/***/ "./src/math/rectangle/scale.ts":
/*!*************************************!*\
  !*** ./src/math/rectangle/scale.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scale = void 0;
var scale = function (rectangle, vector) {
    rectangle.width *= vector.x;
    rectangle.height *= vector.y;
    return rectangle;
};
exports.scale = scale;


/***/ }),

/***/ "./src/math/rectangle/touches.ts":
/*!***************************************!*\
  !*** ./src/math/rectangle/touches.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


// https://gist.github.com/Daniel-Hug/d7984d82b58d6d2679a087d896ca3d2b
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.touches = void 0;
// Check if rectangle a touches rectangle b.
// Each object (a and b) should have 2 properties to represent the
// top-left corner (x1, y1) and 2 for the bottom-right corner (x2, y2).
function touches(rectangleA, rectangleB) {
    // Has horizontal gap
    if (rectangleA.x > rectangleB.x + rectangleB.width || rectangleB.x > rectangleA.x + rectangleA.width) {
        return false;
    }
    // Has vertical gap
    if (rectangleA.y > rectangleB.y + rectangleB.height || rectangleB.y > rectangleA.y + rectangleA.height) {
        return false;
    }
    return true;
}
exports.touches = touches;


/***/ }),

/***/ "./src/math/vectors/Vector.ts":
/*!************************************!*\
  !*** ./src/math/vectors/Vector.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(_a) {
        var _b = _a === void 0 ? {
            x: 0,
            y: 0,
        } : _a, x = _b.x, y = _b.y;
        this.x = x;
        this.y = y;
    }
    Vector.prototype.clone = function () {
        return new Vector(this);
    };
    Vector.prototype.updateFrom = function (vector) {
        this.x = vector.x;
        this.y = vector.y;
        return this;
    };
    Vector.prototype.toString = function (limited) {
        if (limited === void 0) { limited = true; }
        var x = limited ? this.x.toFixed(1) : this.x;
        var y = limited ? this.y.toFixed(1) : this.y;
        return "".concat(x, ":").concat(y);
    };
    return Vector;
}());
exports.Vector = Vector;


/***/ }),

/***/ "./src/math/vectors/add.ts":
/*!*********************************!*\
  !*** ./src/math/vectors/add.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.add = void 0;
var add = function (vectorA, vectorB) {
    vectorA.x += vectorB.x;
    vectorA.y += vectorB.y;
    return vectorA;
};
exports.add = add;


/***/ }),

/***/ "./src/math/vectors/center.ts":
/*!************************************!*\
  !*** ./src/math/vectors/center.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.center = void 0;
var center = function (from, to) {
    from.x = from.x + (to.x - from.x) / 2;
    from.y = from.y + (to.y - from.y) / 2;
    return from;
};
exports.center = center;


/***/ }),

/***/ "./src/math/vectors/divide.ts":
/*!************************************!*\
  !*** ./src/math/vectors/divide.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.divide = void 0;
var divide = function (vectorA, vectorB) {
    vectorA.x /= vectorB.x;
    vectorA.y /= vectorB.y;
    return vectorA;
};
exports.divide = divide;


/***/ }),

/***/ "./src/math/vectors/multiply.ts":
/*!**************************************!*\
  !*** ./src/math/vectors/multiply.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.multiply = void 0;
var multiply = function (vectorA, vectorB) {
    vectorA.x *= vectorB.x;
    vectorA.y *= vectorB.y;
    return vectorA;
};
exports.multiply = multiply;


/***/ }),

/***/ "./src/math/vectors/sort.ts":
/*!**********************************!*\
  !*** ./src/math/vectors/sort.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sort = void 0;
var sort = function (vectorA, vectorB) {
    var topLeft;
    var topRight;
    var bottomLeft;
    var bottomRight;
    if (isFirstTopLeft(vectorA, vectorB)) {
        topLeft = vectorA;
    }
    else if (isFirstTopLeft(vectorB, vectorA)) {
        topLeft = vectorB;
    }
    if (isFirstBottomRight(vectorA, vectorB)) {
        bottomRight = vectorA;
    }
    else if (isFirstBottomRight(vectorB, vectorA)) {
        bottomRight = vectorB;
    }
    if (topLeft && bottomRight) {
        return [
            {
                x: topLeft.x,
                y: topLeft.y,
            },
            {
                x: bottomRight.x,
                y: bottomRight.y,
            },
        ];
    }
    if (isFirstTopRight(vectorA, vectorB)) {
        topRight = vectorA;
    }
    else if (isFirstTopRight(vectorB, vectorA)) {
        topRight = vectorB;
    }
    if (isFirstBottomLeft(vectorA, vectorB)) {
        bottomLeft = vectorA;
    }
    else if (isFirstBottomLeft(vectorB, vectorA)) {
        bottomLeft = vectorB;
    }
    if (!topLeft && topRight && bottomLeft) {
        topLeft = {
            x: bottomLeft.x,
            y: topRight.y,
        };
    }
    if (!bottomRight && topRight && bottomLeft) {
        bottomRight = {
            x: topRight.x,
            y: bottomLeft.y,
        };
    }
    if (!topLeft || !bottomRight) {
        return [
            {
                x: vectorA.x,
                y: vectorA.y,
            },
            {
                x: vectorB.x,
                y: vectorB.y,
            },
        ];
    }
    return [topLeft, bottomRight];
};
exports.sort = sort;
function isFirstTopLeft(vectorA, vectorB) {
    return vectorA.x < vectorB.x && vectorA.y < vectorB.y;
}
function isFirstTopRight(vectorA, vectorB) {
    return vectorA.x > vectorB.x && vectorA.y < vectorB.y;
}
function isFirstBottomLeft(vectorA, vectorB) {
    return vectorA.x < vectorB.x && vectorA.y > vectorB.y;
}
function isFirstBottomRight(vectorA, vectorB) {
    return vectorA.x > vectorB.x && vectorA.y > vectorB.y;
}


/***/ }),

/***/ "./src/math/vectors/subtract.ts":
/*!**************************************!*\
  !*** ./src/math/vectors/subtract.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.subtract = void 0;
var subtract = function (vectorA, vectorB) {
    vectorA.x -= vectorB.x;
    vectorA.y -= vectorB.y;
    return vectorA;
};
exports.subtract = subtract;


/***/ }),

/***/ "./src/rendering/Drawer.ts":
/*!*********************************!*\
  !*** ./src/rendering/Drawer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Drawer = exports.CursorType = void 0;
var move_1 = __webpack_require__(/*! ../math/rectangle/move */ "./src/math/rectangle/move.ts");
var Vector_1 = __webpack_require__(/*! ../math/vectors/Vector */ "./src/math/vectors/Vector.ts");
var CursorType;
(function (CursorType) {
    CursorType["Default"] = "default";
    CursorType["Grab"] = "grab";
})(CursorType = exports.CursorType || (exports.CursorType = {}));
var Drawer = /** @class */ (function () {
    function Drawer(context) {
        this.context = context;
    }
    Drawer.prototype.clearArea = function (_a) {
        var _area = _a.area, _b = _a.offset, offset = _b === void 0 ? new Vector_1.Vector() : _b;
        var area = (0, move_1.move)(_area.clone(), offset);
        this.context.clearRect(area.x, area.y, area.width, area.height);
    };
    Drawer.prototype.rectangle = function (_a) {
        var _b = _a.fillStyle, fillStyle = _b === void 0 ? 'red' : _b, _c = _a.lineWidth, lineWidth = _c === void 0 ? 1 : _c, _d = _a.strokeStyle, strokeStyle = _d === void 0 ? 'transparent' : _d, rectangle = _a.rectangle;
        this.context.strokeStyle = strokeStyle;
        this.context.lineWidth = lineWidth;
        this.context.fillStyle = fillStyle;
        this.context.beginPath();
        this.context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        this.context.fill();
        this.context.stroke();
    };
    Drawer.prototype.line = function (_a) {
        var from = _a.from, to = _a.to, _b = _a.strokeStyle, strokeStyle = _b === void 0 ? 'black' : _b, _c = _a.lineWidth, lineWidth = _c === void 0 ? 1 : _c;
        this.context.strokeStyle = strokeStyle;
        this.context.lineWidth = lineWidth;
        this.context.beginPath();
        this.context.moveTo(from.x, from.y);
        this.context.lineTo(to.x, to.y);
        this.context.stroke();
    };
    Drawer.prototype.cursor = function (type) {
        this.context.canvas.style.cursor = type;
    };
    Drawer.prototype.dimensions = function (_a) {
        var width = _a.width, height = _a.height;
        this.context.canvas.width = width;
        this.context.canvas.height = height;
    };
    Drawer.prototype.transform = function (a, b, c, d, e, f) {
        this.context.transform(a, b, c, d, e, f);
    };
    Drawer.prototype.resetTransform = function () {
        this.context.resetTransform();
    };
    Drawer.prototype.save = function () {
        this.context.save();
    };
    Drawer.prototype.saveAndReset = function () {
        this.save();
        this.resetTransform();
    };
    Drawer.prototype.restore = function () {
        this.context.restore();
    };
    return Drawer;
}());
exports.Drawer = Drawer;


/***/ }),

/***/ "./src/rendering/Renderer.ts":
/*!***********************************!*\
  !*** ./src/rendering/Renderer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Renderer = void 0;
var PubSub_1 = __webpack_require__(/*! ../utils/pubSub/PubSub */ "./src/utils/pubSub/PubSub.ts");
var Renderer = /** @class */ (function () {
    function Renderer() {
        this.lastAnimation = Date.now();
        this.fps = 60;
        this.fpsInterval = 1000 / this.fps;
        this.animationPubSub = new PubSub_1.PubSub();
        this.animationEvent = this.animationPubSub.event;
        this.animate();
    }
    Renderer.prototype.animate = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.animate(); });
        var now = Date.now();
        var elapsed = now - this.lastAnimation;
        if (elapsed > this.fpsInterval) {
            this.lastAnimation = now - (elapsed % this.fpsInterval);
            this.animationPubSub.publish({ delta: elapsed });
        }
    };
    return Renderer;
}());
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/rendering/SelectionDrawer.ts":
/*!******************************************!*\
  !*** ./src/rendering/SelectionDrawer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectionDrawer = void 0;
var SelectionDrawer = /** @class */ (function () {
    function SelectionDrawer(d) {
        this.d = d;
    }
    SelectionDrawer.prototype.selectedArea = function () {
        if (!this.d.selection.selectedArea) {
            return;
        }
        this.d.drawer.saveAndReset();
        this.d.drawer.rectangle({
            rectangle: this.d.selection.selectedArea,
            strokeStyle: 'rgb(22 22 22 / 40%)',
            fillStyle: 'rgb(101 141 255 / 40%)',
        });
        this.d.drawer.restore();
    };
    return SelectionDrawer;
}());
exports.SelectionDrawer = SelectionDrawer;


/***/ }),

/***/ "./src/rendering/TextDrawer.ts":
/*!*************************************!*\
  !*** ./src/rendering/TextDrawer.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextDrawer = void 0;
var canvasText_1 = __webpack_require__(/*! ../utils/canvasText */ "./src/utils/canvasText.ts");
var TextDrawer = /** @class */ (function () {
    function TextDrawer(d) {
        this.d = d;
    }
    TextDrawer.prototype.textLinesAfterPoint = function (options) {
        var _this = this;
        var position = options.position, lines = options.lines, fontFamily = options.fontFamily;
        var _a = (0, canvasText_1.mergeWithDefaultTextOptions)(options), lineHeight = _a.lineHeight, padding = _a.padding, fontSize = _a.fontSize;
        var lineHeightOffset = lineHeight / fontSize;
        this.d.drawer.context.fillStyle = 'black';
        this.d.drawer.context.font = "".concat(fontSize, "px ").concat(fontFamily);
        this.d.drawer.context.textAlign = 'left';
        this.d.drawer.context.textBaseline = 'top';
        var topOffset = 0;
        lines.forEach(function (line) {
            _this.d.drawer.context.fillText(line, position.x + padding, position.y + padding + lineHeightOffset + topOffset);
            topOffset += lineHeight;
        });
    };
    TextDrawer.prototype.textInRectangle = function (options) {
        var textBlockLines = (0, canvasText_1.createTextBlockLines)(this.d.drawer.context, options);
        var rectangle = options.rectangle;
        this.textLinesAfterPoint(__assign(__assign({}, options), { position: rectangle, lines: textBlockLines.lines }));
    };
    TextDrawer.prototype.textAfterPoint = function (options) {
        var position = options.position, text = options.text;
        var _a = (0, canvasText_1.mergeWithDefaultTextOptions)(options), padding = _a.padding, fontSize = _a.fontSize, fontFamily = _a.fontFamily;
        this.d.drawer.context.fillStyle = 'black';
        this.d.drawer.context.font = "".concat(fontSize, "px ").concat(fontFamily);
        this.d.drawer.context.textAlign = 'left';
        this.d.drawer.context.textBaseline = 'top';
        this.d.drawer.context.fillText(text, position.x + padding, position.y + padding);
    };
    return TextDrawer;
}());
exports.TextDrawer = TextDrawer;


/***/ }),

/***/ "./src/rendering/TextEditorDrawer.ts":
/*!*******************************************!*\
  !*** ./src/rendering/TextEditorDrawer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextEditorDrawer = void 0;
var add_1 = __webpack_require__(/*! ../math/vectors/add */ "./src/math/vectors/add.ts");
var Vector_1 = __webpack_require__(/*! ../math/vectors/Vector */ "./src/math/vectors/Vector.ts");
var TextEditorDrawer = /** @class */ (function () {
    function TextEditorDrawer(d) {
        this.d = d;
    }
    TextEditorDrawer.prototype.cursor = function () {
        var _a = this.d.textEditor.textBlockLines, _b = _a.textBlockMetrics, lastLinePosition = _b.lastLinePosition, lastLineWidth = _b.lastLineWidth, lineHeight = _a.textOptions.lineHeight;
        this.d.drawer.line({
            from: (0, add_1.add)(lastLinePosition.clone(), new Vector_1.Vector({ x: lastLineWidth, y: 0 })),
            to: (0, add_1.add)(lastLinePosition.clone(), new Vector_1.Vector({
                x: lastLineWidth,
                y: lineHeight,
            })),
        });
    };
    TextEditorDrawer.prototype.text = function (shownAt) {
        var lines = this.d.textEditor.textBlockLines.lines;
        this.d.textDrawer.textLinesAfterPoint({
            lines: lines,
            position: shownAt,
        });
    };
    TextEditorDrawer.prototype.textEditor = function () {
        if (!this.d.textEditor.shownAt) {
            return;
        }
        this.cursor();
        this.text(this.d.textEditor.shownAt);
    };
    return TextEditorDrawer;
}());
exports.TextEditorDrawer = TextEditorDrawer;


/***/ }),

/***/ "./src/utils/canvasText.ts":
/*!*********************************!*\
  !*** ./src/utils/canvasText.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createTextBlockLines = exports.mergeWithDefaultTextOptions = void 0;
var add_1 = __webpack_require__(/*! ../math/vectors/add */ "./src/math/vectors/add.ts");
var Vector_1 = __webpack_require__(/*! ../math/vectors/Vector */ "./src/math/vectors/Vector.ts");
var mergeWithDefaultTextOptions = function (_a) {
    var _b = _a.fontFamily, fontFamily = _b === void 0 ? 'Roboto' : _b, _c = _a.fontSize, fontSize = _c === void 0 ? 14 : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 16 : _d, _e = _a.padding, padding = _e === void 0 ? 5 : _e;
    return ({
        fontFamily: fontFamily,
        fontSize: fontSize,
        lineHeight: lineHeight,
        padding: padding,
    });
};
exports.mergeWithDefaultTextOptions = mergeWithDefaultTextOptions;
var createTextBlockLines = function (canvasContext, options) {
    var _a;
    var textOptions = (0, exports.mergeWithDefaultTextOptions)(options);
    var fontFamily = textOptions.fontFamily, fontSize = textOptions.fontSize, padding = textOptions.padding, lineHeight = textOptions.lineHeight;
    var text = options.text, rectangle = options.rectangle;
    canvasContext.font = "".concat(fontSize, "px ").concat(fontFamily);
    canvasContext.textAlign = 'left';
    canvasContext.textBaseline = 'top';
    var widthToFitText = rectangle.width - padding * 2;
    var lines = [];
    var metrics = [];
    var biggestWidth = 0;
    var characterCount = text.length;
    var buffer = '';
    var lastBufferMetrics = canvasContext.measureText('');
    // Create an empty line if the text is empty
    if (text === '') {
        lines.push(buffer);
        metrics.push(lastBufferMetrics);
    }
    for (var i = 0; i < characterCount; i++) {
        var character = text[i];
        var isLastCharacter = i === characterCount - 1;
        if (character === '\n') {
            // Store previous line
            lines.push(buffer);
            metrics.push(lastBufferMetrics);
            biggestWidth = Math.max(biggestWidth, lastBufferMetrics.width);
            buffer = '';
            lastBufferMetrics = canvasContext.measureText('');
            // If the last character is the new line character it means,
            // that there won't be iterations anymore and we need to store
            // the last line as empty.
            if (isLastCharacter) {
                lines.push(buffer);
                metrics.push(lastBufferMetrics);
            }
        }
        else {
            var previousBuffer = buffer;
            buffer += character;
            var bufferMetrics = canvasContext.measureText(buffer);
            if (bufferMetrics.width > widthToFitText) {
                if (buffer.length === 1) {
                    lines.push(buffer);
                    metrics.push(bufferMetrics);
                }
                else {
                    lines.push(previousBuffer);
                    metrics.push(lastBufferMetrics);
                    i--;
                }
                buffer = '';
                biggestWidth = Math.max(biggestWidth, metrics[metrics.length - 1].width);
                lastBufferMetrics = canvasContext.measureText('');
            }
            else {
                lastBufferMetrics = bufferMetrics;
            }
        }
    }
    if (buffer) {
        lines.push(buffer);
        metrics.push(canvasContext.measureText(buffer));
    }
    var height = lines.length * lineHeight;
    return {
        textOptions: textOptions,
        lines: lines,
        lineMetrics: metrics,
        textBlockMetrics: {
            width: biggestWidth,
            widthWithPaddings: biggestWidth + padding * 2,
            height: height,
            heightWidthPaddings: height + padding * 2,
            lastLineWidth: ((_a = metrics[metrics.length - 1]) === null || _a === void 0 ? void 0 : _a.width) || 0,
            lastLinePosition: (0, add_1.add)(rectangle.clone(), new Vector_1.Vector({
                x: padding,
                y: padding + height - (lines.length ? lineHeight : 0),
            })),
        },
    };
};
exports.createTextBlockLines = createTextBlockLines;


/***/ }),

/***/ "./src/utils/dom/extendedClickHandler.ts":
/*!***********************************************!*\
  !*** ./src/utils/dom/extendedClickHandler.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extendedClickHandler = exports.DragMode = void 0;
var subtract_1 = __webpack_require__(/*! ../../math/vectors/subtract */ "./src/math/vectors/subtract.ts");
var Vector_1 = __webpack_require__(/*! ../../math/vectors/Vector */ "./src/math/vectors/Vector.ts");
var getPositionFromMouseEvent_1 = __webpack_require__(/*! ./getPositionFromMouseEvent */ "./src/utils/dom/getPositionFromMouseEvent.ts");
var DragMode;
(function (DragMode) {
    DragMode["Down"] = "down";
    DragMode["DoubleDown"] = "double-down";
})(DragMode = exports.DragMode || (exports.DragMode = {}));
var extendedClickHandler = function (element, _options) {
    if (_options === void 0) { _options = {}; }
    var options = __assign({
        silenceClickAfterDrag: false,
        silenceMouseUpAfterDrag: false,
        silenceMouseDownAfterDrag: false,
        enableDrag: true,
        dragMode: DragMode.Down,
        debug: false,
        doubleClickThreshold: 280,
    }, _options);
    if (options.debug) {
        console.log('Extended click handler options:', options);
    }
    var lastClickTime = 0;
    var isDragging = false;
    var isDoubleClick = false;
    var isMouseDown = false;
    var lastMouseDownTime = 0;
    var isDoubleMouseDown = false;
    var shouldSilenceClick = false;
    var shouldSilenceMouseUp = false;
    var shouldSilenceMouseDown = false;
    var lastMouseDownEvent;
    var lastDragEvent;
    var shouldCallDragStartCallback = false;
    element.addEventListener('mousedown', function (event) {
        var mouseDownTime = new Date().getTime();
        var timePassed = mouseDownTime - lastMouseDownTime;
        isDoubleMouseDown = timePassed < options.doubleClickThreshold;
        lastMouseDownTime = mouseDownTime;
        isMouseDown = true;
        lastMouseDownEvent = event;
        shouldCallDragStartCallback = true;
        if (shouldSilenceMouseDown) {
            shouldSilenceMouseDown = false;
            return;
        }
        if (isDoubleMouseDown) {
            if (options.debug) {
                console.log('Double mouse down', (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, element));
            }
            if (options.onDoubleMouseDown) {
                options.onDoubleMouseDown(event);
            }
        }
        else {
            if (options.debug) {
                console.log('Mouse down', (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, element));
            }
            if (options.onMouseDown) {
                options.onMouseDown({
                    event: event,
                    position: (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, element),
                });
            }
        }
    });
    // Using document so you can drag outside of the canvas, use element
    // if you cannot drag outside of the canvas.
    element.addEventListener('mousemove', function (event) {
        if (isMouseDown) {
            isDragging = true;
        }
        if (isDragging && options.enableDrag) {
            var shouldDrag = (isDoubleMouseDown && options.dragMode === DragMode.DoubleDown) ||
                (!isDoubleMouseDown && options.dragMode === DragMode.Down);
            if (shouldDrag) {
                if (options.silenceMouseDownAfterDrag) {
                    shouldSilenceMouseDown = true;
                }
                if (options.silenceMouseUpAfterDrag) {
                    shouldSilenceMouseUp = true;
                }
                if (options.silenceClickAfterDrag) {
                    shouldSilenceClick = true;
                }
                if (options.onDrag || options.onDragStart || options.debug) {
                    var dragData = getDragData(event);
                    if ((options.onDragStart || options.debug) && shouldCallDragStartCallback) {
                        var _totalDelta = dragData.totalDelta, _delta = dragData.delta, dragStartData = __rest(dragData, ["totalDelta", "delta"]);
                        if (options.debug) {
                            console.log('Drag start', dragStartData);
                        }
                        if (options.onDragStart) {
                            options.onDragStart(dragStartData);
                        }
                        shouldCallDragStartCallback = false;
                    }
                    if (options.debug) {
                        console.log(isDoubleMouseDown ? 'Double click mode drag' : 'Click mode drag', dragData);
                    }
                    if (options.onDrag) {
                        options.onDrag(dragData);
                    }
                }
                lastDragEvent = event;
            }
        }
    });
    element.addEventListener('mouseup', function (event) {
        var dragData = getDragData(event);
        if (isDragging) {
            if (options.debug) {
                console.log('Drag end', dragData);
            }
            if (options.onDragEnd) {
                options.onDragEnd(dragData);
            }
        }
        isDragging = false;
        isMouseDown = false;
        // Must be set to `undefined` only after `getDragData` is used
        lastDragEvent = undefined;
        if (shouldSilenceMouseUp) {
            shouldSilenceMouseUp = false;
            return;
        }
        if (options.debug) {
            console.log('Mouse up', (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, element));
        }
        if (options.onMouseUp) {
            // `dragData` is still can be useful e.g. in cases
            // when we always need to handle `mouseup` event in one place
            // but differently if there was a drag event or not
            options.onMouseUp(dragData);
        }
    });
    element.addEventListener('click', function (event) {
        var clickTime = new Date().getTime();
        var timePassed = clickTime - lastClickTime;
        var position = (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, element);
        isDoubleClick = timePassed < options.doubleClickThreshold;
        lastClickTime = clickTime;
        if (shouldSilenceClick) {
            shouldSilenceClick = false;
            return;
        }
        if (isDoubleClick) {
            if (options.debug) {
                console.log('Double click', position);
            }
            if (options.onDoubleClick) {
                options.onDoubleClick({
                    event: event,
                    position: position,
                });
            }
        }
        else if (!isDoubleClick) {
            if (options.debug) {
                console.log('Click', position);
            }
            if (options.onClick) {
                options.onClick({
                    event: event,
                    position: position,
                });
            }
        }
    });
    element.addEventListener('dragstart', function () {
        throw new Error('Only simulated drag is supported');
    });
    element.addEventListener('dragend', function () {
        throw new Error('Only simulated drag is supported');
    });
    // This is redundant as there is simulated implementation of double click in this helper
    // element.addEventListener('dblclick', () => {...})
    function getDragData(event) {
        if (!lastMouseDownEvent) {
            return {
                event: event,
                position: (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, element),
                startedAt: new Vector_1.Vector(),
                totalDelta: new Vector_1.Vector(),
                delta: new Vector_1.Vector(),
            };
        }
        var pointFromLastMouseDown = (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(lastMouseDownEvent, element);
        var pointFromLastDrag = lastDragEvent ? (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(lastDragEvent, element) : undefined;
        var currentPoint = (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, element);
        return {
            event: event,
            position: (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, element),
            startedAt: currentPoint,
            totalDelta: (0, subtract_1.subtract)(currentPoint.clone(), pointFromLastMouseDown),
            delta: (0, subtract_1.subtract)(currentPoint.clone(), pointFromLastDrag || pointFromLastMouseDown),
        };
    }
};
exports.extendedClickHandler = extendedClickHandler;


/***/ }),

/***/ "./src/utils/dom/getPositionFromMouseEvent.ts":
/*!****************************************************!*\
  !*** ./src/utils/dom/getPositionFromMouseEvent.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPositionFromMouseEvent = void 0;
var subtract_1 = __webpack_require__(/*! ../../math/vectors/subtract */ "./src/math/vectors/subtract.ts");
var Vector_1 = __webpack_require__(/*! ../../math/vectors/Vector */ "./src/math/vectors/Vector.ts");
var getPositionFromMouseEvent = function (event, container) {
    var viewportMousePosition = new Vector_1.Vector({
        x: event.pageX,
        y: event.pageY,
    });
    var boundingRect = container.getBoundingClientRect();
    var topLeftContainerPosition = new Vector_1.Vector({
        x: boundingRect.left,
        y: boundingRect.top,
    });
    return (0, subtract_1.subtract)(viewportMousePosition, topLeftContainerPosition);
};
exports.getPositionFromMouseEvent = getPositionFromMouseEvent;


/***/ }),

/***/ "./src/utils/idGenerator.ts":
/*!**********************************!*\
  !*** ./src/utils/idGenerator.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getIdGenerator = void 0;
var getIdGenerator = function () {
    var lastId = 1;
    return function () {
        return lastId++;
    };
};
exports.getIdGenerator = getIdGenerator;


/***/ }),

/***/ "./src/utils/isMac.ts":
/*!****************************!*\
  !*** ./src/utils/isMac.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isMac = void 0;
var isMac = function () { return window.navigator.platform.toUpperCase().indexOf('MAC') >= 0; };
exports.isMac = isMac;


/***/ }),

/***/ "./src/utils/keyboard.ts":
/*!*******************************!*\
  !*** ./src/utils/keyboard.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.onKeyPressed = exports.onKeyUp = exports.onKeysDown = exports.onKeyDown = exports.isKeyPressed = exports.KEYS = void 0;
var isMac_1 = __webpack_require__(/*! ./isMac */ "./src/utils/isMac.ts");
var PubSub_1 = __webpack_require__(/*! ./pubSub/PubSub */ "./src/utils/pubSub/PubSub.ts");
var globallyPressedKeys = new Map();
// We usually use numeric code of a key to outline a physical key we want to use
// but if it's a custom key, then a big tier is a way to separate the logic.
var CUSTOM_KEY_TIER_MODIFIER = 1000000;
var areKeyboardListenersAttached = false;
listenKeyboard(false);
// Values are `event.which || event.keyCode` for the physical keys and
// a number + `CUSTOM_KEY_TIER_MODIFIER` for custom keys.
var KEYS;
(function (KEYS) {
    KEYS[KEYS["backspace"] = 8] = "backspace";
    KEYS[KEYS["tab"] = 9] = "tab";
    KEYS[KEYS["control"] = 17] = "control";
    KEYS[KEYS["escape"] = 27] = "escape";
    // Option on MacOS
    KEYS[KEYS["alt"] = 18] = "alt";
    KEYS[KEYS["delete"] = 46] = "delete";
    // Command on MacOS
    KEYS[KEYS["meta"] = 91] = "meta";
    KEYS[KEYS["space"] = 32] = "space";
    KEYS[KEYS["plus"] = 187] = "plus";
    KEYS[KEYS["enter"] = 13] = "enter";
    KEYS[KEYS["controlOSSpecific"] = CUSTOM_KEY_TIER_MODIFIER + 17] = "controlOSSpecific";
})(KEYS = exports.KEYS || (exports.KEYS = {}));
// If `event` is not passed than the key will be checked
// against globally pressed keys (`globallyPressedKeys`) at the moment.
var isKeyPressed = function (key, event) {
    var keyCodesToCheck = [];
    var isPressed = false;
    if (event) {
        var keyCode = event.which || event.keyCode;
        keyCodesToCheck.push(keyCode);
    }
    else {
        keyCodesToCheck = Array.from(globallyPressedKeys.values());
    }
    for (var i = 0, l = keyCodesToCheck.length; i < l; i++) {
        var keyCode = keyCodesToCheck[i];
        switch (key) {
            case KEYS.controlOSSpecific:
                isPressed = (0, isMac_1.isMac)() ? keyCode === KEYS.meta : keyCode === KEYS.control;
                break;
            default:
                isPressed = keyCode === key;
                break;
        }
        if (isPressed) {
            return true;
        }
    }
    return false;
};
exports.isKeyPressed = isKeyPressed;
var keyDownPubSubs = new Map();
var keysDownPubSubs = new Map();
var keyUpPubSubs = new Map();
var keyPressPubSubs = new Map();
var onKeyDown = function (key, callback) {
    var keyDownPubSub = keyDownPubSubs.get(key) || new PubSub_1.PubSub();
    keyDownPubSub.event.subscribe(callback);
    keyDownPubSubs.set(key, keyDownPubSub);
};
exports.onKeyDown = onKeyDown;
var onKeysDown = function (_keys, callback) {
    var keysToken = __spreadArray([], __read(_keys), false).sort().join('-');
    var keysDownPubSub = keysDownPubSubs.get(keysToken) || new PubSub_1.PubSub();
    keysDownPubSub.event.subscribe(callback);
    keysDownPubSubs.set(keysToken, keysDownPubSub);
};
exports.onKeysDown = onKeysDown;
var onKeyUp = function (key, callback) {
    var keyUpPubSub = keyUpPubSubs.get(key) || new PubSub_1.PubSub();
    keyUpPubSub.event.subscribe(callback);
    keyUpPubSubs.set(key, keyUpPubSub);
};
exports.onKeyUp = onKeyUp;
var onKeyPressed = function (key, callback) {
    var keyPressPubSub = keyPressPubSubs.get(key) || new PubSub_1.PubSub();
    keyPressPubSub.event.subscribe(callback);
    keyPressPubSubs.set(key, keyPressPubSub);
};
exports.onKeyPressed = onKeyPressed;
function listenKeyboard(debug) {
    if (debug === void 0) { debug = false; }
    if (areKeyboardListenersAttached) {
        return;
    }
    areKeyboardListenersAttached = true;
    document.addEventListener('keydown', function (event) {
        var e_1, _a;
        var _b;
        var keyCode = event.which || event.keyCode;
        globallyPressedKeys.set(keyCode, keyCode);
        if (debug) {
            console.log('Key down', keyCode, getKeyName(keyCode), globallyPressedKeys);
        }
        (_b = keyDownPubSubs.get(keyCode)) === null || _b === void 0 ? void 0 : _b.publish(event);
        try {
            for (var keysDownPubSubs_1 = __values(keysDownPubSubs), keysDownPubSubs_1_1 = keysDownPubSubs_1.next(); !keysDownPubSubs_1_1.done; keysDownPubSubs_1_1 = keysDownPubSubs_1.next()) {
                var _c = __read(keysDownPubSubs_1_1.value, 2), token = _c[0], pubSub = _c[1];
                var keys = token.split('-');
                var shouldFire = true;
                for (var i = 0, l = keys.length; i < l; i++) {
                    var key = parseInt(keys[i], 10);
                    if (!globallyPressedKeys.has(key)) {
                        shouldFire = false;
                        break;
                    }
                }
                if (shouldFire) {
                    pubSub.publish(event);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keysDownPubSubs_1_1 && !keysDownPubSubs_1_1.done && (_a = keysDownPubSubs_1.return)) _a.call(keysDownPubSubs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
    document.addEventListener('keyup', function (event) {
        var _a, _b;
        var keyCode = event.which || event.keyCode;
        globallyPressedKeys.delete(keyCode);
        if (debug) {
            console.log('Key up', keyCode, getKeyName(keyCode), globallyPressedKeys);
        }
        (_a = keyUpPubSubs.get(keyCode)) === null || _a === void 0 ? void 0 : _a.publish(event);
        (_b = keyPressPubSubs.get(keyCode)) === null || _b === void 0 ? void 0 : _b.publish(event);
    });
    // Only for debug purposes
    function getKeyName(keyCode) {
        var _a;
        return (_a = Object.entries(KEYS).find(function (_a) {
            var _b = __read(_a, 1), enumKeyCode = _b[0];
            return parseInt(enumKeyCode, 10) === keyCode;
        })) === null || _a === void 0 ? void 0 : _a[1];
    }
}


/***/ }),

/***/ "./src/utils/pubSub/PubSub.ts":
/*!************************************!*\
  !*** ./src/utils/pubSub/PubSub.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PubSub = void 0;
var PubSub = /** @class */ (function () {
    function PubSub() {
        var _this = this;
        this.subscribers = new Set();
        this.event = {
            subscribe: function (subscriber) { return _this.subscribe(subscriber); },
            unsubscribe: function (subscriber) { return _this.unsubscribe(subscriber); },
        };
    }
    PubSub.prototype.publish = function (data) {
        this.subscribers.forEach(function (subscriber) { return subscriber(data); });
    };
    Object.defineProperty(PubSub.prototype, "subscriberCount", {
        get: function () {
            return this.subscribers.size;
        },
        enumerable: false,
        configurable: true
    });
    PubSub.prototype.subscribe = function (subscriber) {
        if (this.subscribers.has(subscriber)) {
            throw new Error('Provided subscriber is already subscribed');
        }
        this.subscribers.add(subscriber);
    };
    PubSub.prototype.unsubscribe = function (subscriber) {
        this.subscribers.delete(subscriber);
    };
    return PubSub;
}());
exports.PubSub = PubSub;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var boot_1 = __webpack_require__(/*! ./board/boot */ "./src/board/boot.ts");
var htmlElement = document.querySelector('html');
var bodyElement = document.querySelector('body');
var containerElement = document.createElement('div');
containerElement.style.overflow = 'hidden';
var canvasElement = document.createElement('canvas');
var canvasContext = canvasElement.getContext('2d');
var resetStyles = function (element) {
    element.style.width = '100%';
    element.style.height = '100%';
    element.style.margin = '0';
    element.style.padding = '0';
};
resetStyles(htmlElement);
resetStyles(bodyElement);
resetStyles(containerElement);
resetStyles(canvasElement);
document.body.appendChild(containerElement);
containerElement.appendChild(canvasElement);
// =============================
(0, boot_1.boot)(canvasContext, containerElement);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUU1QyxnQ0FBZ0M7QUFFaEMsZUFBSSxFQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL2Jvb3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL2NvbXBvbmVudHMvQm9hcmRDdXJzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL2NvbXBvbmVudHMvQm9hcmRTZWxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL2NvbXBvbmVudHMvQm9hcmRUZXh0RWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9jb250cm9sbGVycy9Cb2FyZEJveGVzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvY29udHJvbGxlcnMvQm9hcmRDdXJzb3JDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9jb250cm9sbGVycy9Cb2FyZFJlbmRlcmluZ0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL2NvbnRyb2xsZXJzL0JvYXJkU2VsZWN0aW9uQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvY29udHJvbGxlcnMvQm9hcmRWaWV3cG9ydENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL3JlbmRlcmluZy9Cb2FyZEJveGVzRHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9yZW5kZXJpbmcvQm9hcmREcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL3JlbmRlcmluZy9EZWJ1Z0RyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvc2VydmljZXMvQm9hcmRCb3hlc1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL3NlcnZpY2VzL0JvYXJkQ3Vyc29yU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvc2VydmljZXMvQm9hcmRTZWxlY3Rpb25TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9zZXJ2aWNlcy9Cb2FyZFZpZXdwb3J0U2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvc3RvcmVzL0JvYXJkQm94ZXNTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvc3RvcmVzL0JvYXJkVmlld3BvcnRTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdXJzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RleHRFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0aWVzL0JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXRpZXMvUmVsYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL21hdHJpeGVzMmQvTWF0cml4MmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvbWF0cml4ZXMyZC9mcm9tU2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvbWF0cml4ZXMyZC9mcm9tVHJhbnNsYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvbWF0cml4ZXMyZC9tdWx0aXBseS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9tYXRyaXhlczJkL3pvb21Ub1BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3JlY3RhbmdsZS9SZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvcmVjdGFuZ2xlL2NlbnRyYWxpemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvcmVjdGFuZ2xlL2ludGVyc2VjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvcmVjdGFuZ2xlL2lzUG9pbnRJbnNpZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvcmVjdGFuZ2xlL21vdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvcmVjdGFuZ2xlL211bHRpcGx5QnlWZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvcmVjdGFuZ2xlL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3JlY3RhbmdsZS90b3VjaGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcnMvVmVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcnMvYWRkLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcnMvY2VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcnMvZGl2aWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcnMvbXVsdGlwbHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvdmVjdG9ycy9zb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcnMvc3VidHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmluZy9EcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmluZy9SZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyaW5nL1NlbGVjdGlvbkRyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyaW5nL1RleHREcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmluZy9UZXh0RWRpdG9yRHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jYW52YXNUZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kb20vZXh0ZW5kZWRDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RvbS9nZXRQb3NpdGlvbkZyb21Nb3VzZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pZEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXNNYWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2tleWJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wdWJTdWIvUHViU3ViLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSAnLi4vcmVuZGVyaW5nL0RyYXdlcic7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcmluZy9SZW5kZXJlcic7XG5pbXBvcnQgeyBTZWxlY3Rpb25EcmF3ZXIgfSBmcm9tICcuLi9yZW5kZXJpbmcvU2VsZWN0aW9uRHJhd2VyJztcbmltcG9ydCB7IFRleHREcmF3ZXIgfSBmcm9tICcuLi9yZW5kZXJpbmcvVGV4dERyYXdlcic7XG5pbXBvcnQgeyBUZXh0RWRpdG9yRHJhd2VyIH0gZnJvbSAnLi4vcmVuZGVyaW5nL1RleHRFZGl0b3JEcmF3ZXInO1xuaW1wb3J0IHsgQm9hcmRDdXJzb3IgfSBmcm9tICcuL2NvbXBvbmVudHMvQm9hcmRDdXJzb3InO1xuaW1wb3J0IHsgQm9hcmRTZWxlY3Rpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvQm9hcmRTZWxlY3Rpb24nO1xuaW1wb3J0IHsgQm9hcmRUZXh0RWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL0JvYXJkVGV4dEVkaXRvcic7XG5pbXBvcnQgeyBCb2FyZEJveGVzQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvQm9hcmRCb3hlc0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgQm9hcmRDdXJzb3JDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9Cb2FyZEN1cnNvckNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQm9hcmRSZW5kZXJpbmdDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9Cb2FyZFJlbmRlcmluZ0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgQm9hcmRTZWxlY3Rpb25Db250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9Cb2FyZFNlbGVjdGlvbkNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQm9hcmRWaWV3cG9ydENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL0JvYXJkVmlld3BvcnRDb250cm9sbGVyJztcbmltcG9ydCB7IEJvYXJkQm94ZXNEcmF3ZXIgfSBmcm9tICcuL3JlbmRlcmluZy9Cb2FyZEJveGVzRHJhd2VyJztcbmltcG9ydCB7IEJvYXJkRHJhd2VyIH0gZnJvbSAnLi9yZW5kZXJpbmcvQm9hcmREcmF3ZXInO1xuaW1wb3J0IHsgRGVidWdEcmF3ZXIgfSBmcm9tICcuL3JlbmRlcmluZy9EZWJ1Z0RyYXdlcic7XG5pbXBvcnQgeyBCb2FyZEJveGVzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvQm9hcmRCb3hlc1NlcnZpY2UnO1xuaW1wb3J0IHsgQm9hcmRDdXJzb3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9Cb2FyZEN1cnNvclNlcnZpY2UnO1xuaW1wb3J0IHsgQm9hcmRTZWxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9Cb2FyZFNlbGVjdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgQm9hcmRWaWV3cG9ydFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0JvYXJkVmlld3BvcnRTZXJ2aWNlJztcbmltcG9ydCB7IEJvYXJkQm94ZXNTdG9yZSB9IGZyb20gJy4vc3RvcmVzL0JvYXJkQm94ZXNTdG9yZSc7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U3RvcmUgfSBmcm9tICcuL3N0b3Jlcy9Cb2FyZFZpZXdwb3J0U3RvcmUnO1xuXG5leHBvcnQgY29uc3QgYm9vdCA9IChjYW52YXNDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNhbnZhc0NvbnRleHQuY2FudmFzLmRyYWdnYWJsZSA9IGZhbHNlO1xuXG4gIC8vIFN0b3Jlc1xuICBjb25zdCBib2FyZFZpZXdwb3J0U3RvcmUgPSBuZXcgQm9hcmRWaWV3cG9ydFN0b3JlKCk7XG4gIGNvbnN0IGJvYXJkQm94ZXNTdG9yZSA9IG5ldyBCb2FyZEJveGVzU3RvcmUoKTtcblxuICAvLyBDb21wb25lbnRzXG4gIGNvbnN0IGJvYXJkQ3Vyc29yID0gbmV3IEJvYXJkQ3Vyc29yKHtcbiAgICBjb250YWluZXJFbGVtZW50LFxuICAgIGJvYXJkVmlld3BvcnRTdG9yZSxcbiAgfSk7XG4gIGNvbnN0IGJvYXJkVGV4dEVkaXRvciA9IG5ldyBCb2FyZFRleHRFZGl0b3Ioe1xuICAgIGNhbnZhc0NvbnRleHQsXG4gICAgY3Vyc29yOiBib2FyZEN1cnNvcixcbiAgfSk7XG4gIGNvbnN0IGJvYXJkU2VsZWN0aW9uID0gbmV3IEJvYXJkU2VsZWN0aW9uKHsgY3Vyc29yOiBib2FyZEN1cnNvciwgYm9hcmRWaWV3cG9ydFN0b3JlLCBib2FyZEJveGVzU3RvcmUgfSk7XG5cbiAgLy8gR2xvYmFsIHJlbmRlcmluZ1xuICBjb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuICBjb25zdCBkcmF3ZXIgPSBuZXcgRHJhd2VyKGNhbnZhc0NvbnRleHQpO1xuICBjb25zdCB0ZXh0RHJhd2VyID0gbmV3IFRleHREcmF3ZXIoeyBkcmF3ZXIgfSk7XG4gIGNvbnN0IHNlbGVjdGlvbkRyYXdlciA9IG5ldyBTZWxlY3Rpb25EcmF3ZXIoeyBkcmF3ZXIsIHNlbGVjdGlvbjogYm9hcmRTZWxlY3Rpb24gfSk7XG4gIGNvbnN0IHRleHRFZGl0b3JEcmF3ZXIgPSBuZXcgVGV4dEVkaXRvckRyYXdlcih7IGRyYXdlciwgdGV4dEVkaXRvcjogYm9hcmRUZXh0RWRpdG9yLCB0ZXh0RHJhd2VyIH0pO1xuXG4gIC8vIFJlbmRlcmluZ1xuICBjb25zdCBib2FyZERyYXdlciA9IG5ldyBCb2FyZERyYXdlcih7XG4gICAgZHJhd2VyLFxuICAgIGJvYXJkVmlld3BvcnRTdG9yZSxcbiAgICBib2FyZEN1cnNvcixcbiAgfSk7XG4gIGNvbnN0IGJvYXJkQm94ZXNEcmF3ZXIgPSBuZXcgQm9hcmRCb3hlc0RyYXdlcih7XG4gICAgZHJhd2VyLFxuICAgIGJvYXJkQm94ZXNTdG9yZSxcbiAgICBib2FyZFNlbGVjdGlvbixcbiAgICB0ZXh0RHJhd2VyLFxuICAgIGJvYXJkVGV4dEVkaXRvcixcbiAgfSk7XG4gIGNvbnN0IGRlYnVnRHJhd2VyID0gbmV3IERlYnVnRHJhd2VyKHtcbiAgICBkcmF3ZXIsXG4gICAgYm9hcmRWaWV3cG9ydFN0b3JlLFxuICAgIGJvYXJkU2VsZWN0aW9uLFxuICAgIGJvYXJkQ3Vyc29yLFxuICAgIHRleHREcmF3ZXIsXG4gIH0pO1xuXG4gIC8vIFNlcnZpY2VzXG4gIGNvbnN0IGJvYXJkQm94ZXNTZXJ2aWNlID0gbmV3IEJvYXJkQm94ZXNTZXJ2aWNlKHtcbiAgICBib2FyZEJveGVzU3RvcmUsXG4gICAgYm9hcmRDdXJzb3IsXG4gICAgYm9hcmRUZXh0RWRpdG9yLFxuICAgIGJvYXJkVmlld3BvcnRTdG9yZSxcbiAgfSk7XG4gIGNvbnN0IGJvYXJkQ3Vyc29yU2VydmljZSA9IG5ldyBCb2FyZEN1cnNvclNlcnZpY2Uoe1xuICAgIGJvYXJkQm94ZXNTdG9yZSxcbiAgICBib2FyZEN1cnNvcixcbiAgICBib2FyZFZpZXdwb3J0U3RvcmUsXG4gIH0pO1xuICBjb25zdCBib2FyZFNlbGVjdGlvblNlcnZpY2UgPSBuZXcgQm9hcmRTZWxlY3Rpb25TZXJ2aWNlKHtcbiAgICBib2FyZEJveGVzU3RvcmUsXG4gICAgYm9hcmRTZWxlY3Rpb24sXG4gICAgYm9hcmRWaWV3cG9ydFN0b3JlLFxuICB9KTtcbiAgY29uc3QgYm9hcmRWaWV3cG9ydFNlcnZpY2UgPSBuZXcgQm9hcmRWaWV3cG9ydFNlcnZpY2Uoe1xuICAgIGJvYXJkVmlld3BvcnRTdG9yZSxcbiAgICBib2FyZEN1cnNvcixcbiAgfSk7XG5cbiAgLy8gQ29udHJvbGxlcnNcbiAgbmV3IEJvYXJkQm94ZXNDb250cm9sbGVyKHtcbiAgICBib2FyZEJveGVzU3RvcmUsXG4gICAgYm9hcmRUZXh0RWRpdG9yLFxuICB9KTtcbiAgbmV3IEJvYXJkVmlld3BvcnRDb250cm9sbGVyKHsgYm9hcmRCb3hlc1N0b3JlLCBib2FyZEN1cnNvciwgYm9hcmRWaWV3cG9ydFNlcnZpY2UsIGJvYXJkVmlld3BvcnRTdG9yZSB9KTtcbiAgbmV3IEJvYXJkQ3Vyc29yQ29udHJvbGxlcih7XG4gICAgYm9hcmRCb3hlc1NlcnZpY2UsXG4gICAgYm9hcmRCb3hlc1N0b3JlLFxuICAgIGJvYXJkQ3Vyc29yLFxuICAgIGJvYXJkQ3Vyc29yU2VydmljZSxcbiAgICBib2FyZFNlbGVjdGlvbixcbiAgICBib2FyZFRleHRFZGl0b3IsXG4gIH0pO1xuICBuZXcgQm9hcmRTZWxlY3Rpb25Db250cm9sbGVyKHtcbiAgICBib2FyZEJveGVzU3RvcmUsXG4gICAgYm9hcmRTZWxlY3Rpb24sXG4gICAgYm9hcmRTZWxlY3Rpb25TZXJ2aWNlLFxuICAgIGJvYXJkVmlld3BvcnRTdG9yZSxcbiAgfSk7XG4gIG5ldyBCb2FyZFJlbmRlcmluZ0NvbnRyb2xsZXIoe1xuICAgIGJvYXJkQm94ZXNEcmF3ZXIsXG4gICAgYm9hcmREcmF3ZXIsXG4gICAgZGVidWdEcmF3ZXIsXG4gICAgcmVuZGVyZXIsXG4gICAgdGV4dEVkaXRvckRyYXdlcixcbiAgICBzZWxlY3Rpb25EcmF3ZXIsXG4gIH0pO1xuXG4gICh3aW5kb3cgYXMgYW55KS5idnMgPSBib2FyZFZpZXdwb3J0U3RvcmU7XG4gICh3aW5kb3cgYXMgYW55KS5iYnMgPSBib2FyZEJveGVzU3RvcmU7XG4gICh3aW5kb3cgYXMgYW55KS5jID0gYm9hcmRDdXJzb3I7XG59O1xuIiwiaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DdXJzb3InO1xuaW1wb3J0IHsgc3VidHJhY3QgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMvc3VidHJhY3QnO1xuaW1wb3J0IHsgQm9hcmRWaWV3cG9ydFN0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL0JvYXJkVmlld3BvcnRTdG9yZSc7XG5cbnR5cGUgQm9hcmRDdXJzb3JEZXBlbmRlbmNpZXMgPSB7XG4gIGNvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBib2FyZFZpZXdwb3J0U3RvcmU6IEJvYXJkVmlld3BvcnRTdG9yZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBCb2FyZEN1cnNvciBleHRlbmRzIEN1cnNvciB7XG4gIHByaXZhdGUgZDogQm9hcmRDdXJzb3JEZXBlbmRlbmNpZXM7XG5cbiAgcHVibGljIGdldCBib2FyZFBvc2l0aW9uKCkge1xuICAgIHJldHVybiBzdWJ0cmFjdCh0aGlzLnBvc2l0aW9uLmNsb25lKCksIHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUub2Zmc2V0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGQ6IEJvYXJkQ3Vyc29yRGVwZW5kZW5jaWVzKSB7XG4gICAgc3VwZXIoZC5jb250YWluZXJFbGVtZW50KTtcbiAgICB0aGlzLmQgPSBkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDdXJzb3IgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0N1cnNvcic7XG5pbXBvcnQgeyBTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlbGVjdGlvbic7XG5pbXBvcnQgeyBtb3ZlIH0gZnJvbSAnLi4vLi4vbWF0aC9yZWN0YW5nbGUvbW92ZSc7XG5pbXBvcnQgeyBCb2FyZEJveGVzU3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRCb3hlc1N0b3JlJztcbmltcG9ydCB7IEJvYXJkVmlld3BvcnRTdG9yZSB9IGZyb20gJy4uL3N0b3Jlcy9Cb2FyZFZpZXdwb3J0U3RvcmUnO1xuXG50eXBlIEJvYXJkU2VsZWN0aW9uRGVwZW5kZW5jaWVzID0ge1xuICBjdXJzb3I6IEN1cnNvcjtcbiAgYm9hcmRWaWV3cG9ydFN0b3JlOiBCb2FyZFZpZXdwb3J0U3RvcmU7XG4gIGJvYXJkQm94ZXNTdG9yZTogQm9hcmRCb3hlc1N0b3JlO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkU2VsZWN0aW9uIGV4dGVuZHMgU2VsZWN0aW9uIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZFNlbGVjdGlvbkRlcGVuZGVuY2llcztcblxuICBwdWJsaWMgZ2V0IGJvYXJkU2VsZWN0ZWRBcmVhKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkQXJlYSA/IG1vdmUodGhpcy5zZWxlY3RlZEFyZWEuY2xvbmUoKSwgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5vZmZzZXQsIC0xKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGQ6IEJvYXJkU2VsZWN0aW9uRGVwZW5kZW5jaWVzKSB7XG4gICAgc3VwZXIoZC5jdXJzb3IpO1xuXG4gICAgdGhpcy5kID0gZDtcblxuICAgIHRoaXMuc2VsZWN0U3RhcnRFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVTZWxlY3RTdGFydCgpKTtcbiAgICB0aGlzLnNlbGVjdEVuZEV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZVNlbGVjdEVuZCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VsZWN0U3RhcnQoKSB7XG4gICAgdGhpcy5jYW5TZWxlY3QgPSBCb29sZWFuKFxuICAgICAgdGhpcy5zZWxlY3RlZEFyZWEgJiYgIXRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuaXNNb3ZpbmdWaWV3UG9ydCAmJiAhdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94LFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdEVuZCgpIHtcbiAgICB0aGlzLmNhblNlbGVjdCA9IHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRleHRFZGl0b3IgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RleHRFZGl0b3InO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvQm94JztcblxuZXhwb3J0IGNsYXNzIEJvYXJkVGV4dEVkaXRvciBleHRlbmRzIFRleHRFZGl0b3Ige1xuICBwdWJsaWMgc2hvd25Gb3JCb3g/OiBCb3g7XG5cbiAgcHVibGljIHNob3dBdChib3g6IEJveCkge1xuICAgIHRoaXMuY29udGVudCA9IGJveC5jb250ZW50O1xuICAgIHRoaXMuc2hvd25Gb3JCb3ggPSBib3g7XG4gICAgc3VwZXIuc2hvd0F0KGJveCwgYm94KTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlKCkge1xuICAgIHN1cGVyLmhpZGUoKTtcblxuICAgIGlmICghdGhpcy5zaG93bkZvckJveCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd25Gb3JCb3guY29udGVudCA9IHRoaXMuY29udGVudDtcbiAgICB0aGlzLnNob3duRm9yQm94ID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIZWlnaHREYXRhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXh0RWRpdG9yJztcbmltcG9ydCB7IEtFWVMsIG9uS2V5UHJlc3NlZCB9IGZyb20gJy4uLy4uL3V0aWxzL2tleWJvYXJkJztcbmltcG9ydCB7IEJvYXJkVGV4dEVkaXRvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQm9hcmRUZXh0RWRpdG9yJztcbmltcG9ydCB7IEJvYXJkQm94ZXNTdG9yZSB9IGZyb20gJy4uL3N0b3Jlcy9Cb2FyZEJveGVzU3RvcmUnO1xuXG50eXBlIEJvYXJkQm94ZXNDb250cm9sbGVyRGVwZW5kZW5jaWVzID0ge1xuICBib2FyZFRleHRFZGl0b3I6IEJvYXJkVGV4dEVkaXRvcjtcbiAgYm9hcmRCb3hlc1N0b3JlOiBCb2FyZEJveGVzU3RvcmU7XG59O1xuXG5leHBvcnQgY2xhc3MgQm9hcmRCb3hlc0NvbnRyb2xsZXIge1xuICBwcml2YXRlIGQ6IEJvYXJkQm94ZXNDb250cm9sbGVyRGVwZW5kZW5jaWVzO1xuXG4gIGNvbnN0cnVjdG9yKGQ6IEJvYXJkQm94ZXNDb250cm9sbGVyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcblxuICAgIHRoaXMuZC5ib2FyZFRleHRFZGl0b3IuY29udGVudEhlaWdodEV2ZW50LnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy5oYW5kbGVIZWlnaHRDaGFuZ2UoZGF0YSkpO1xuICAgIG9uS2V5UHJlc3NlZChLRVlTLmRlbGV0ZSwgKCkgPT4gdGhpcy5oYW5kbGVEZWxldGVQcmVzc2VkKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVIZWlnaHRDaGFuZ2UoeyBoZWlnaHQgfTogSGVpZ2h0RGF0YSkge1xuICAgIGlmICh0aGlzLmQuYm9hcmRUZXh0RWRpdG9yLnNob3duRm9yQm94KSB7XG4gICAgICB0aGlzLmQuYm9hcmRUZXh0RWRpdG9yLnNob3duRm9yQm94LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZURlbGV0ZVByZXNzZWQoKSB7XG4gICAgdGhpcy5kLmJvYXJkVGV4dEVkaXRvci5oaWRlKCk7XG5cbiAgICBmb3IgKGNvbnN0IFssIGJveF0gb2YgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzKSB7XG4gICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRlbGV0ZShib3gpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRHJhZ0RhdGEgfSBmcm9tICcuLi8uLi91dGlscy9kb20vZXh0ZW5kZWRDbGlja0hhbmRsZXInO1xuaW1wb3J0IHsgQm9hcmRDdXJzb3IgfSBmcm9tICcuLi9jb21wb25lbnRzL0JvYXJkQ3Vyc29yJztcbmltcG9ydCB7IEJvYXJkU2VsZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb2FyZFNlbGVjdGlvbic7XG5pbXBvcnQgeyBCb2FyZFRleHRFZGl0b3IgfSBmcm9tICcuLi9jb21wb25lbnRzL0JvYXJkVGV4dEVkaXRvcic7XG5pbXBvcnQgeyBCb2FyZEJveGVzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL0JvYXJkQm94ZXNTZXJ2aWNlJztcbmltcG9ydCB7IEJvYXJkQ3Vyc29yU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL0JvYXJkQ3Vyc29yU2VydmljZSc7XG5pbXBvcnQgeyBCb2FyZEJveGVzU3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRCb3hlc1N0b3JlJztcblxudHlwZSBCb2FyZEN1cnNvckNvbnRyb2xsZXJEZXBlbmRlbmNpZXMgPSB7XG4gIGJvYXJkQm94ZXNTdG9yZTogQm9hcmRCb3hlc1N0b3JlO1xuICBib2FyZEN1cnNvcjogQm9hcmRDdXJzb3I7XG4gIGJvYXJkVGV4dEVkaXRvcjogQm9hcmRUZXh0RWRpdG9yO1xuICBib2FyZFNlbGVjdGlvbjogQm9hcmRTZWxlY3Rpb247XG4gIGJvYXJkQ3Vyc29yU2VydmljZTogQm9hcmRDdXJzb3JTZXJ2aWNlO1xuICBib2FyZEJveGVzU2VydmljZTogQm9hcmRCb3hlc1NlcnZpY2U7XG59O1xuXG5leHBvcnQgY2xhc3MgQm9hcmRDdXJzb3JDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZEN1cnNvckNvbnRyb2xsZXJEZXBlbmRlbmNpZXM7XG5cbiAgY29uc3RydWN0b3IoZDogQm9hcmRDdXJzb3JDb250cm9sbGVyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcblxuICAgIHRoaXMuZC5ib2FyZEN1cnNvci5tb3ZlRXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlQ3Vyc29yTW92ZSgpKTtcbiAgICB0aGlzLmQuYm9hcmRDdXJzb3IudGFwRXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlVGFwKCkpO1xuICAgIHRoaXMuZC5ib2FyZEN1cnNvci5kb3VibGVUYWJFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVEb3VibGVUYXAoKSk7XG4gICAgdGhpcy5kLmJvYXJkQ3Vyc29yLmRyYWdTdGFydEV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZURyYWdTdGFydCgpKTtcbiAgICB0aGlzLmQuYm9hcmRDdXJzb3IuZHJhZ0V2ZW50LnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy5oYW5kbGVEcmFnKGRhdGEpKTtcbiAgICB0aGlzLmQuYm9hcmRDdXJzb3IudXBFdmVudC5zdWJzY3JpYmUoKGRhdGEpID0+IHRoaXMuaGFuZGxlVXAoZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDdXJzb3JNb3ZlKCkge1xuICAgIHRoaXMuZC5ib2FyZEN1cnNvclNlcnZpY2UuaG92ZXJDdXJzb3JPdmVyQm94KCk7XG5cbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBtb3ZpbmcgdGhlIGN1cnNvciBvbmx5IHRvIGhpZ2hsaWdodCBib3hlc1xuICAgIC8vIGlmIHRoZSB1c2VyIGlzIG5vdCBkcmFnZ2luZyBhIGJveCBhbHJlYWR5LlxuICAgIGlmICh0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94IHx8IHRoaXMuZC5ib2FyZFNlbGVjdGlvbi5zZWxlY3RlZEFyZWEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmQuYm9hcmRDdXJzb3JTZXJ2aWNlLmhpZ2hsaWdodEJveCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVUYXAoKSB7XG4gICAgdGhpcy5kLmJvYXJkQ3Vyc29yU2VydmljZS5zZWxlY3RCb3goKTtcblxuICAgIGlmIChcbiAgICAgICF0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmN1cnNvck92ZXJCb3ggfHxcbiAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuY3Vyc29yT3ZlckJveCAhPT0gdGhpcy5kLmJvYXJkVGV4dEVkaXRvci5zaG93bkZvckJveFxuICAgICkge1xuICAgICAgdGhpcy5kLmJvYXJkVGV4dEVkaXRvci5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEb3VibGVUYXAoKSB7XG4gICAgaWYgKHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuY3Vyc29yT3ZlckJveCkge1xuICAgICAgdGhpcy5kLmJvYXJkVGV4dEVkaXRvci5zaG93QXQodGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTZXJ2aWNlLmNyZWF0ZUJveEF0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEcmFnU3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmN1cnNvck92ZXJCb3gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZC5ib2FyZEJveGVzU3RvcmUuc2VsZWN0ZWRCb3hlcy5oYXModGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94LmlkKSkge1xuICAgICAgdGhpcy5kLmJvYXJkQ3Vyc29yU2VydmljZS5zZWxlY3RCb3goKTtcbiAgICB9XG5cbiAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94ID0gdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94O1xuICAgIHRoaXMuZC5ib2FyZFRleHRFZGl0b3IuaGlkZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEcmFnKGRyYWdEYXRhOiBEcmFnRGF0YSkge1xuICAgIHRoaXMuZC5ib2FyZEN1cnNvclNlcnZpY2UuZHJhZ0JveChkcmFnRGF0YSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVVwKGRyYWdEYXRhOiBEcmFnRGF0YSkge1xuICAgIHRoaXMuZC5ib2FyZEN1cnNvclNlcnZpY2UuY29ubmVjdEJveGVzKGRyYWdEYXRhKTtcbiAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94ID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uLy4uL3JlbmRlcmluZy9SZW5kZXJlcic7XG5pbXBvcnQgeyBTZWxlY3Rpb25EcmF3ZXIgfSBmcm9tICcuLi8uLi9yZW5kZXJpbmcvU2VsZWN0aW9uRHJhd2VyJztcbmltcG9ydCB7IFRleHRFZGl0b3JEcmF3ZXIgfSBmcm9tICcuLi8uLi9yZW5kZXJpbmcvVGV4dEVkaXRvckRyYXdlcic7XG5pbXBvcnQgeyBCb2FyZEJveGVzRHJhd2VyIH0gZnJvbSAnLi4vcmVuZGVyaW5nL0JvYXJkQm94ZXNEcmF3ZXInO1xuaW1wb3J0IHsgQm9hcmREcmF3ZXIgfSBmcm9tICcuLi9yZW5kZXJpbmcvQm9hcmREcmF3ZXInO1xuaW1wb3J0IHsgRGVidWdEcmF3ZXIgfSBmcm9tICcuLi9yZW5kZXJpbmcvRGVidWdEcmF3ZXInO1xuXG50eXBlIEJvYXJkRHJhd2VyQ29udHJvbGxlckRlcGVuZGVuY2llcyA9IHtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyO1xuICBib2FyZERyYXdlcjogQm9hcmREcmF3ZXI7XG4gIGJvYXJkQm94ZXNEcmF3ZXI6IEJvYXJkQm94ZXNEcmF3ZXI7XG4gIHNlbGVjdGlvbkRyYXdlcjogU2VsZWN0aW9uRHJhd2VyO1xuICBkZWJ1Z0RyYXdlcjogRGVidWdEcmF3ZXI7XG4gIHRleHRFZGl0b3JEcmF3ZXI6IFRleHRFZGl0b3JEcmF3ZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgQm9hcmRSZW5kZXJpbmdDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZERyYXdlckNvbnRyb2xsZXJEZXBlbmRlbmNpZXM7XG4gIHByaXZhdGUgaXNEZWJ1Z0RyYXdlckVuYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZERyYXdlckNvbnRyb2xsZXJEZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLmQgPSBkO1xuXG4gICAgaWYgKHRoaXMuaXNEZWJ1Z0RyYXdlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZC5ib2FyZEJveGVzRHJhd2VyLmFmdGVyQm94RHJhd25FdmVudC5zdWJzY3JpYmUoKGJveCkgPT4gdGhpcy5kLmRlYnVnRHJhd2VyLnJlY3RhbmdsZUNvb3JkaW5hdGVzKGJveCkpO1xuICAgIH1cblxuICAgIHRoaXMuZC5yZW5kZXJlci5hbmltYXRpb25FdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVBbmltYXRlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBbmltYXRlKCkge1xuICAgIC8vIFN5bmMgc29tZSBnbG9iYWwgc2V0dGluZ3NcbiAgICB0aGlzLmQuYm9hcmREcmF3ZXIuY3Vyc29yKCk7XG4gICAgdGhpcy5kLmJvYXJkRHJhd2VyLmRpbWVuc2lvbnMoKTtcbiAgICB0aGlzLmQuYm9hcmREcmF3ZXIuY2xlYXJCb2FyZCgpO1xuICAgIHRoaXMuZC5ib2FyZERyYXdlci5yZXNldFRyYW5zZm9ybSgpO1xuICAgIHRoaXMuZC5ib2FyZERyYXdlci50cmFuc2Zvcm0oKTtcblxuICAgIC8vIDFuZCBsYXllclxuICAgIHRoaXMuZC5ib2FyZEJveGVzRHJhd2VyLnJlbGF0aW9ucygpO1xuXG4gICAgLy8gMnJkIGxheWVyXG4gICAgdGhpcy5kLmJvYXJkQm94ZXNEcmF3ZXIuYm94ZXMoKTtcbiAgICB0aGlzLmQudGV4dEVkaXRvckRyYXdlci50ZXh0RWRpdG9yKCk7XG5cbiAgICAvLyAzdGggbGF5ZXJcbiAgICB0aGlzLmQuc2VsZWN0aW9uRHJhd2VyLnNlbGVjdGVkQXJlYSgpO1xuICAgIHRoaXMuaXNEZWJ1Z0RyYXdlckVuYWJsZWQgJiYgdGhpcy5kLmRlYnVnRHJhd2VyLnNlbGVjdGVkQXJlYUNvb3JkaW5hdGVzKCk7XG5cbiAgICAvLyA0dGggbGF5ZXJcbiAgICB0aGlzLmlzRGVidWdEcmF3ZXJFbmFibGVkICYmIHRoaXMuZC5kZWJ1Z0RyYXdlci5jZW50ZXJHdWlkZXMoKTtcblxuICAgIC8vIDV0aCBsYXllclxuICAgIHRoaXMuaXNEZWJ1Z0RyYXdlckVuYWJsZWQgJiYgdGhpcy5kLmRlYnVnRHJhd2VyLmN1cnNvckNvb3JkaW5hdGVzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJvYXJkU2VsZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb2FyZFNlbGVjdGlvbic7XG5pbXBvcnQgeyBCb2FyZFNlbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9Cb2FyZFNlbGVjdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgQm9hcmRCb3hlc1N0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL0JvYXJkQm94ZXNTdG9yZSc7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRWaWV3cG9ydFN0b3JlJztcblxudHlwZSBCb2FyZFNlbGVjdGlvbkNvbnRyb2xsZXJEZXBlbmRlbmNpZXMgPSB7XG4gIGJvYXJkU2VsZWN0aW9uOiBCb2FyZFNlbGVjdGlvbjtcbiAgYm9hcmRCb3hlc1N0b3JlOiBCb2FyZEJveGVzU3RvcmU7XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlO1xuICBib2FyZFNlbGVjdGlvblNlcnZpY2U6IEJvYXJkU2VsZWN0aW9uU2VydmljZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBCb2FyZFNlbGVjdGlvbkNvbnRyb2xsZXIge1xuICBwcml2YXRlIGQ6IEJvYXJkU2VsZWN0aW9uQ29udHJvbGxlckRlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZFNlbGVjdGlvbkNvbnRyb2xsZXJEZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLmQgPSBkO1xuXG4gICAgdGhpcy5kLmJvYXJkU2VsZWN0aW9uLnNlbGVjdEV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VsZWN0KCkge1xuICAgIGlmICh0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmN1cnNvck92ZXJCb3ggfHwgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5pc01vdmluZ1ZpZXdQb3J0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kLmJvYXJkU2VsZWN0aW9uU2VydmljZS5zZWxlY3RCb3hlcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTY3JvbGxEYXRhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DdXJzb3InO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzL2FkZCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMvVmVjdG9yJztcbmltcG9ydCB7IEN1cnNvclR5cGUgfSBmcm9tICcuLi8uLi9yZW5kZXJpbmcvRHJhd2VyJztcbmltcG9ydCB7IERyYWdEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvZG9tL2V4dGVuZGVkQ2xpY2tIYW5kbGVyJztcbmltcG9ydCB7IEtFWVMsIG9uS2V5RG93biwgb25LZXlzRG93biwgb25LZXlVcCB9IGZyb20gJy4uLy4uL3V0aWxzL2tleWJvYXJkJztcbmltcG9ydCB7IEJvYXJkQ3Vyc29yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb2FyZEN1cnNvcic7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL0JvYXJkVmlld3BvcnRTZXJ2aWNlJztcbmltcG9ydCB7IEJvYXJkQm94ZXNTdG9yZSB9IGZyb20gJy4uL3N0b3Jlcy9Cb2FyZEJveGVzU3RvcmUnO1xuaW1wb3J0IHsgQm9hcmRWaWV3cG9ydFN0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL0JvYXJkVmlld3BvcnRTdG9yZSc7XG5cbnR5cGUgQm9hcmRNYW5hZ2VyRGVwZW5kZW5jaWVzID0ge1xuICBib2FyZEN1cnNvcjogQm9hcmRDdXJzb3I7XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlO1xuICBib2FyZEJveGVzU3RvcmU6IEJvYXJkQm94ZXNTdG9yZTtcbiAgYm9hcmRWaWV3cG9ydFNlcnZpY2U6IEJvYXJkVmlld3BvcnRTZXJ2aWNlO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkVmlld3BvcnRDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZE1hbmFnZXJEZXBlbmRlbmNpZXM7XG5cbiAgY29uc3RydWN0b3IoZDogQm9hcmRNYW5hZ2VyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcblxuICAgIHRoaXMuZC5ib2FyZEN1cnNvci5zY3JvbGxFdmVudC5zdWJzY3JpYmUoKGRhdGEpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKGRhdGEpKTtcbiAgICB0aGlzLmQuYm9hcmRDdXJzb3IuZHJhZ0V2ZW50LnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy5oYW5kbGVEcmFnKGRhdGEpKTtcblxuICAgIG9uS2V5RG93bihLRVlTLnNwYWNlLCAoKSA9PiB0aGlzLmhhbmRsZVNwYWNlRG93bigpKTtcbiAgICBvbktleVVwKEtFWVMuc3BhY2UsICgpID0+IHRoaXMuaGFuZGxlU3BhY2VVcCgpKTtcbiAgICBvbktleXNEb3duKFtLRVlTLmFsdCwgS0VZUy5wbHVzXSwgKCkgPT4gdGhpcy5kLmJvYXJkVmlld3BvcnRTZXJ2aWNlLnpvb21Ub0N1cnNvcihuZXcgVmVjdG9yKHsgeDogMCwgeTogLTUwIH0pKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5oYW5kbGVSZXNpemUoKSk7XG4gICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2Nyb2xsKHsgZGVsdGEgfTogU2Nyb2xsRGF0YSkge1xuICAgIHRoaXMuZC5ib2FyZFZpZXdwb3J0U2VydmljZS56b29tVG9DdXJzb3IoZGVsdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTcGFjZURvd24oKSB7XG4gICAgaWYgKHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuZHJhZ2dpbmdCb3gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmlzTW92aW5nVmlld1BvcnQgPSB0cnVlO1xuICAgIHRoaXMuZC5ib2FyZEN1cnNvci5jdXJzb3JUeXBlID0gQ3Vyc29yVHlwZS5HcmFiO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEcmFnKHsgZGVsdGEgfTogRHJhZ0RhdGEpIHtcbiAgICBpZiAoIXRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuaXNNb3ZpbmdWaWV3UG9ydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFkZCh0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLm9mZnNldCwgZGVsdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTcGFjZVVwKCkge1xuICAgIGlmICghdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5pc01vdmluZ1ZpZXdQb3J0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5pc01vdmluZ1ZpZXdQb3J0ID0gZmFsc2U7XG4gICAgdGhpcy5kLmJvYXJkQ3Vyc29yLmN1cnNvclR5cGUgPSBDdXJzb3JUeXBlLkRlZmF1bHQ7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2VudGl0aWVzL0JveCc7XG5pbXBvcnQgeyBSZWxhdGlvbiB9IGZyb20gJy4uLy4uL2VudGl0aWVzL1JlbGF0aW9uJztcbmltcG9ydCB7IGNlbnRlciB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9jZW50ZXInO1xuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSAnLi4vLi4vcmVuZGVyaW5nL0RyYXdlcic7XG5pbXBvcnQgeyBUZXh0RHJhd2VyIH0gZnJvbSAnLi4vLi4vcmVuZGVyaW5nL1RleHREcmF3ZXInO1xuaW1wb3J0IHsgY3JlYXRlVGV4dEJsb2NrTGluZXMgfSBmcm9tICcuLi8uLi91dGlscy9jYW52YXNUZXh0JztcbmltcG9ydCB7IFB1YlN1YiB9IGZyb20gJy4uLy4uL3V0aWxzL3B1YlN1Yi9QdWJTdWInO1xuaW1wb3J0IHsgQm9hcmRTZWxlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL0JvYXJkU2VsZWN0aW9uJztcbmltcG9ydCB7IEJvYXJkQm94ZXNTdG9yZSB9IGZyb20gJy4uL3N0b3Jlcy9Cb2FyZEJveGVzU3RvcmUnO1xuaW1wb3J0IHsgQm9hcmRUZXh0RWRpdG9yIH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL0JvYXJkVGV4dEVkaXRvcic7XG5cbnR5cGUgQm9hcmRCb3hlc0RyYXdlckRlcGVuZGVuY2llcyA9IHtcbiAgZHJhd2VyOiBEcmF3ZXI7XG4gIHRleHREcmF3ZXI6IFRleHREcmF3ZXI7XG4gIGJvYXJkQm94ZXNTdG9yZTogQm9hcmRCb3hlc1N0b3JlO1xuICBib2FyZFNlbGVjdGlvbjogQm9hcmRTZWxlY3Rpb247XG4gIGJvYXJkVGV4dEVkaXRvcjogQm9hcmRUZXh0RWRpdG9yO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkQm94ZXNEcmF3ZXIgaW1wbGVtZW50cyBCb2FyZEJveGVzRHJhd2VyIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZEJveGVzRHJhd2VyRGVwZW5kZW5jaWVzO1xuXG4gIHByaXZhdGUgYWZ0ZXJCb3hEcmF3blB1YlN1YiA9IG5ldyBQdWJTdWI8Qm94PigpO1xuICBwdWJsaWMgYWZ0ZXJCb3hEcmF3bkV2ZW50ID0gdGhpcy5hZnRlckJveERyYXduUHViU3ViLmV2ZW50O1xuXG4gIHByaXZhdGUgYm94Q29udGVudExpbmVzQ2FjaGU6IE1hcDxcbiAgICBudW1iZXIsXG4gICAge1xuICAgICAgY29udGVudDogc3RyaW5nO1xuICAgICAgbGluZXM6IHN0cmluZ1tdO1xuICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICB9XG4gID4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoZDogQm9hcmRCb3hlc0RyYXdlckRlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG5cbiAgICAvLyBUT0RPIGZpbmQgYSBiZXR0ZXIgd2F5XG4gICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5kZWxldGVFdmVudC5zdWJzY3JpYmUoKGJveCkgPT4gdGhpcy5oYW5kbGVEZWxldGUoYm94KSk7XG4gIH1cblxuICBwdWJsaWMgcmVsYXRpb25zKCkge1xuICAgIGZvciAoY29uc3QgWywgcmVsYXRpb25dIG9mIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUucmVsYXRpb25zKSB7XG4gICAgICB0aGlzLnJlbGF0aW9uKHJlbGF0aW9uKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYm94ZXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnByaW9yaXRpemVkQm94ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBib3ggPSB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnByaW9yaXRpemVkQm94ZXNbaV07XG5cbiAgICAgIHRoaXMuYm94KGJveCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBib3goYm94OiBCb3gpIHtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzLmhhcyhib3guaWQpO1xuICAgIGNvbnN0IGlzSGlnaGxpZ2h0ZWQgPSB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmhpZ2hsaWdodGVkQm94ZXMuaGFzKGJveC5pZCk7XG5cbiAgICB0aGlzLmQuZHJhd2VyLnJlY3RhbmdsZSh7XG4gICAgICBzdHJva2VTdHlsZTogaXNTZWxlY3RlZCA/ICdibHVlJyA6ICd0cmFuc3BhcmVudCcsXG4gICAgICBmaWxsU3R5bGU6IGlzSGlnaGxpZ2h0ZWQgPyAncmVkJyA6ICdza3libHVlJyxcbiAgICAgIHJlY3RhbmdsZTogYm94LFxuICAgIH0pO1xuXG4gICAgaWYgKGJveC5jb250ZW50KSB7XG4gICAgICB0aGlzLmJveENvbnRlbnQoYm94KTtcbiAgICB9XG5cbiAgICB0aGlzLmFmdGVyQm94RHJhd25QdWJTdWIucHVibGlzaChib3gpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWNoZWRCb3hDb250ZW50TGluZXMoYm94OiBCb3gpIHtcbiAgICBsZXQgbGluZXNDYWNoZSA9IHRoaXMuYm94Q29udGVudExpbmVzQ2FjaGUuZ2V0KGJveC5pZCk7XG5cbiAgICAvLyBJbnZhbGlkYXRlIC8gY3JlYXRlIGNhY2hlIGlmIHJlcXVpcmVkXG4gICAgaWYgKCFsaW5lc0NhY2hlIHx8IGJveC5jb250ZW50ICE9PSBsaW5lc0NhY2hlLmNvbnRlbnQgfHwgYm94LndpZHRoICE9PSBsaW5lc0NhY2hlLndpZHRoKSB7XG4gICAgICBjb25zdCB7IGxpbmVzIH0gPSBjcmVhdGVUZXh0QmxvY2tMaW5lcyh0aGlzLmQuZHJhd2VyLmNvbnRleHQsIHtcbiAgICAgICAgdGV4dDogYm94LmNvbnRlbnQsXG4gICAgICAgIHJlY3RhbmdsZTogYm94LFxuICAgICAgfSk7XG5cbiAgICAgIGxpbmVzQ2FjaGUgPSB7XG4gICAgICAgIGxpbmVzLFxuICAgICAgICBjb250ZW50OiBib3guY29udGVudCxcbiAgICAgICAgd2lkdGg6IGJveC53aWR0aCxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYm94Q29udGVudExpbmVzQ2FjaGUuc2V0KGJveC5pZCwgbGluZXNDYWNoZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzQ2FjaGUubGluZXM7XG4gIH1cblxuICBwcml2YXRlIGJveENvbnRlbnQoYm94OiBCb3gpIHtcbiAgICAvLyBUaGUgY29udGVudCBpcyBhbHJlYWR5IHJlbmRlcmVkIGJ5IHRoZSBlZGl0b3JcbiAgICBpZiAodGhpcy5kLmJvYXJkVGV4dEVkaXRvci5zaG93bkZvckJveCA9PT0gYm94KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kLnRleHREcmF3ZXIudGV4dExpbmVzQWZ0ZXJQb2ludCh7XG4gICAgICBwb3NpdGlvbjogYm94LFxuICAgICAgbGluZXM6IHRoaXMuZ2V0Q2FjaGVkQm94Q29udGVudExpbmVzKGJveCksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbGF0aW9uKHJlbGF0aW9uOiBSZWxhdGlvbikge1xuICAgIGNvbnN0IHsgZnJvbUJveCwgdG9Cb3ggfSA9IHJlbGF0aW9uO1xuXG4gICAgdGhpcy5kLmRyYXdlci5saW5lKHtcbiAgICAgIGZyb206IGNlbnRlcihmcm9tQm94LmNsb25lKCksIHtcbiAgICAgICAgeDogZnJvbUJveC54ICsgZnJvbUJveC53aWR0aCxcbiAgICAgICAgeTogZnJvbUJveC55ICsgZnJvbUJveC5oZWlnaHQsXG4gICAgICB9KSxcbiAgICAgIHRvOiBjZW50ZXIodG9Cb3guY2xvbmUoKSwge1xuICAgICAgICB4OiB0b0JveC54ICsgdG9Cb3gud2lkdGgsXG4gICAgICAgIHk6IHRvQm94LnkgKyB0b0JveC5oZWlnaHQsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRPRE8gbW92ZSB0byBib3hlcyBzdG9yZSBjYWNoZVxuICBwcml2YXRlIGhhbmRsZURlbGV0ZShib3g6IEJveCkge1xuICAgIHRoaXMuYm94Q29udGVudExpbmVzQ2FjaGUuZGVsZXRlKGJveC5pZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4uLy4uL21hdGgvcmVjdGFuZ2xlL1JlY3RhbmdsZSc7XG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuLi8uLi9yZW5kZXJpbmcvRHJhd2VyJztcbmltcG9ydCB7IEJvYXJkQ3Vyc29yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb2FyZEN1cnNvcic7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRWaWV3cG9ydFN0b3JlJztcblxudHlwZSBCb2FyZERyYXdlckRlcGVuZGVuY2llcyA9IHtcbiAgZHJhd2VyOiBEcmF3ZXI7XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlO1xuICBib2FyZEN1cnNvcjogQm9hcmRDdXJzb3I7XG59O1xuXG5leHBvcnQgY2xhc3MgQm9hcmREcmF3ZXIge1xuICBwcml2YXRlIGQ6IEJvYXJkRHJhd2VyRGVwZW5kZW5jaWVzO1xuXG4gIGNvbnN0cnVjdG9yKGQ6IEJvYXJkRHJhd2VyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcbiAgfVxuXG4gIHB1YmxpYyBjdXJzb3IoKSB7XG4gICAgdGhpcy5kLmRyYXdlci5jdXJzb3IodGhpcy5kLmJvYXJkQ3Vyc29yLmN1cnNvclR5cGUpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQm9hcmQoKSB7XG4gICAgdGhpcy5kLmRyYXdlci5jbGVhckFyZWEoe1xuICAgICAgYXJlYTogbmV3IFJlY3RhbmdsZSh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuaGVpZ2h0LFxuICAgICAgfSksXG4gICAgICBvZmZzZXQ6IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUub2Zmc2V0LFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5kLmRyYXdlci5kaW1lbnNpb25zKHtcbiAgICAgIHdpZHRoOiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmhlaWdodCxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0cmFuc2Zvcm0oKSB7XG4gICAgdGhpcy5kLmRyYXdlci50cmFuc2Zvcm0oLi4udGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS50cmFuc2Zvcm0ucmF3TWF0cml4MmQpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0VHJhbnNmb3JtKCkge1xuICAgIHRoaXMuZC5kcmF3ZXIucmVzZXRUcmFuc2Zvcm0oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2VudHJhbGl6ZSB9IGZyb20gJy4uLy4uL21hdGgvcmVjdGFuZ2xlL2NlbnRyYWxpemUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnLi4vLi4vbWF0aC9yZWN0YW5nbGUvUmVjdGFuZ2xlJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9hZGQnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzL1ZlY3Rvcic7XG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuLi8uLi9yZW5kZXJpbmcvRHJhd2VyJztcbmltcG9ydCB7IFRleHREcmF3ZXIgfSBmcm9tICcuLi8uLi9yZW5kZXJpbmcvVGV4dERyYXdlcic7XG5pbXBvcnQgeyBCb2FyZEN1cnNvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQm9hcmRDdXJzb3InO1xuaW1wb3J0IHsgQm9hcmRTZWxlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL0JvYXJkU2VsZWN0aW9uJztcbmltcG9ydCB7IEJvYXJkVmlld3BvcnRTdG9yZSB9IGZyb20gJy4uL3N0b3Jlcy9Cb2FyZFZpZXdwb3J0U3RvcmUnO1xuXG5leHBvcnQgdHlwZSBQb2ludENvb3JkaW5hdGVzT3B0aW9ucyA9IHtcbiAgcG9zaXRpb246IFZlY3Rvcjtcbn07XG5cbnR5cGUgRGVidWdEcmF3ZXJEZXBlbmRlbmNpZXMgPSB7XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlO1xuICBib2FyZEN1cnNvcjogQm9hcmRDdXJzb3I7XG4gIGJvYXJkU2VsZWN0aW9uOiBCb2FyZFNlbGVjdGlvbjtcbiAgZHJhd2VyOiBEcmF3ZXI7XG4gIHRleHREcmF3ZXI6IFRleHREcmF3ZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgRGVidWdEcmF3ZXIge1xuICBwcml2YXRlIGQ6IERlYnVnRHJhd2VyRGVwZW5kZW5jaWVzO1xuXG4gIGNvbnN0cnVjdG9yKGQ6IERlYnVnRHJhd2VyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcbiAgfVxuXG4gIHB1YmxpYyBjdXJzb3JDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLmQuZHJhd2VyLnNhdmVBbmRSZXNldCgpO1xuICAgIHRoaXMucG9pbnRDb29yZGluYXRlcyh0aGlzLmQuYm9hcmRDdXJzb3IucG9zaXRpb24sIHRoaXMuZC5ib2FyZEN1cnNvci5ib2FyZFBvc2l0aW9uKTtcbiAgICB0aGlzLmQuZHJhd2VyLnJlc3RvcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RlZEFyZWFDb29yZGluYXRlcygpIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5kLmJvYXJkU2VsZWN0aW9uLnNlbGVjdGVkQXJlYSB8fFxuICAgICAgIXRoaXMuZC5ib2FyZFNlbGVjdGlvbi5ib2FyZFNlbGVjdGVkQXJlYSB8fFxuICAgICAgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5pc01vdmluZ1ZpZXdQb3J0XG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kLmRyYXdlci5zYXZlQW5kUmVzZXQoKTtcbiAgICB0aGlzLnJlY3RhbmdsZUNvb3JkaW5hdGVzKHRoaXMuZC5ib2FyZFNlbGVjdGlvbi5zZWxlY3RlZEFyZWEsIHRoaXMuZC5ib2FyZFNlbGVjdGlvbi5ib2FyZFNlbGVjdGVkQXJlYSk7XG4gICAgdGhpcy5kLmRyYXdlci5yZXN0b3JlKCk7XG4gIH1cblxuICBwdWJsaWMgcG9pbnRDb29yZGluYXRlcyhwb3NpdGlvbjogVmVjdG9yLCBwb3NpdGlvblRvR2V0VGV4dDogVmVjdG9yID0gcG9zaXRpb24pIHtcbiAgICB0aGlzLmQudGV4dERyYXdlci50ZXh0QWZ0ZXJQb2ludCh7XG4gICAgICBmb250U2l6ZTogMTEsXG4gICAgICB0ZXh0OiBwb3NpdGlvblRvR2V0VGV4dC50b1N0cmluZygpLFxuICAgICAgcG9zaXRpb246IGFkZChcbiAgICAgICAgcG9zaXRpb24uY2xvbmUoKSxcbiAgICAgICAgbmV3IFZlY3Rvcih7XG4gICAgICAgICAgeDogMTUsXG4gICAgICAgICAgeTogLTUsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZWN0YW5nbGVDb29yZGluYXRlcyhyZWN0YW5nbGU6IFJlY3RhbmdsZSwgcmVjdGFuZ2xlVG9HZXRUZXh0OiBSZWN0YW5nbGUgPSByZWN0YW5nbGUpIHtcbiAgICB0aGlzLmQudGV4dERyYXdlci50ZXh0TGluZXNBZnRlclBvaW50KHtcbiAgICAgIGxpbmVzOiBbcmVjdGFuZ2xlVG9HZXRUZXh0LnRvU3RyaW5nKCldLFxuICAgICAgcG9zaXRpb246IHJlY3RhbmdsZSxcbiAgICAgIGZvbnRTaXplOiAxMSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjZW50ZXJHdWlkZXMoKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlU2l6ZSA9IDM7XG5cbiAgICB0aGlzLmQuZHJhd2VyLnNhdmVBbmRSZXNldCgpO1xuXG4gICAgLy8gQ2VudGVyIHBvaW50XG4gICAgdGhpcy5kLmRyYXdlci5yZWN0YW5nbGUoe1xuICAgICAgcmVjdGFuZ2xlOiBjZW50cmFsaXplKFxuICAgICAgICBuZXcgUmVjdGFuZ2xlKHtcbiAgICAgICAgICB4OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmFic29sdXRlQ2VudGVyLngsXG4gICAgICAgICAgeTogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5hYnNvbHV0ZUNlbnRlci55LFxuICAgICAgICAgIHdpZHRoOiByZWN0YW5nbGVTaXplLFxuICAgICAgICAgIGhlaWdodDogcmVjdGFuZ2xlU2l6ZSxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgIH0pO1xuXG4gICAgLy8gVmVydGljYWwgZ3VpZGUgbGluZVxuICAgIHRoaXMuZC5kcmF3ZXIubGluZSh7XG4gICAgICBmcm9tOiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLnRvcCxcbiAgICAgIHRvOiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmJvdHRvbSxcbiAgICB9KTtcblxuICAgIC8vIEhvcml6b250YWwgZ3VpZGUgbGluZVxuICAgIHRoaXMuZC5kcmF3ZXIubGluZSh7XG4gICAgICBmcm9tOiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmxlZnQsXG4gICAgICB0bzogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5yaWdodCxcbiAgICB9KTtcblxuICAgIC8vIENvb3JkaW5hdGVzXG4gICAgdGhpcy5kLnRleHREcmF3ZXIudGV4dEFmdGVyUG9pbnQoe1xuICAgICAgcG9zaXRpb246IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuYWJzb2x1dGVDZW50ZXIsXG4gICAgICB0ZXh0OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmNlbnRlci50b1N0cmluZygpLFxuICAgICAgZm9udFNpemU6IDExLFxuICAgIH0pO1xuXG4gICAgdGhpcy5kLmRyYXdlci5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2VudGl0aWVzL0JveCc7XG5pbXBvcnQgeyBkaXZpZGUgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMvZGl2aWRlJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9WZWN0b3InO1xuaW1wb3J0IHsgbWVyZ2VXaXRoRGVmYXVsdFRleHRPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FudmFzVGV4dCc7XG5pbXBvcnQgeyBCb2FyZEN1cnNvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQm9hcmRDdXJzb3InO1xuaW1wb3J0IHsgQm9hcmRUZXh0RWRpdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb2FyZFRleHRFZGl0b3InO1xuaW1wb3J0IHsgQm9hcmRCb3hlc1N0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL0JvYXJkQm94ZXNTdG9yZSc7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRWaWV3cG9ydFN0b3JlJztcblxudHlwZSBCb2FyZEJveGVzU2VydmljZURlcGVuZGVuY2llcyA9IHtcbiAgYm9hcmRCb3hlc1N0b3JlOiBCb2FyZEJveGVzU3RvcmU7XG4gIGJvYXJkQ3Vyc29yOiBCb2FyZEN1cnNvcjtcbiAgYm9hcmRUZXh0RWRpdG9yOiBCb2FyZFRleHRFZGl0b3I7XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkQm94ZXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZEJveGVzU2VydmljZURlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZEJveGVzU2VydmljZURlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQm94QXRDdXJzb3IoKSB7XG4gICAgY29uc3QgeyBsaW5lSGVpZ2h0LCBwYWRkaW5nIH0gPSBtZXJnZVdpdGhEZWZhdWx0VGV4dE9wdGlvbnMoe30pO1xuICAgIGNvbnN0IG5ld0JveCA9IG5ldyBCb3goe1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgaGVpZ2h0OiBsaW5lSGVpZ2h0ICsgcGFkZGluZyAqIDIsXG4gICAgfSk7XG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBkaXZpZGUoXG4gICAgICBuZXcgVmVjdG9yKHtcbiAgICAgICAgeDogdGhpcy5kLmJvYXJkQ3Vyc29yLmJvYXJkUG9zaXRpb24ueCAtIChuZXdCb3gud2lkdGggKiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLnpvb20ueCkgLyAyLFxuICAgICAgICB5OiB0aGlzLmQuYm9hcmRDdXJzb3IuYm9hcmRQb3NpdGlvbi55IC0gKG5ld0JveC5oZWlnaHQgKiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLnpvb20ueSkgLyAyLFxuICAgICAgfSksXG4gICAgICB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLnpvb20sXG4gICAgKTtcblxuICAgIG5ld0JveC54ID0gbmV3UG9zaXRpb24ueDtcbiAgICBuZXdCb3gueSA9IG5ld1Bvc2l0aW9uLnk7XG5cbiAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmFkZChuZXdCb3gpO1xuICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuaGlnaGxpZ2h0ZWRCb3hlcy5zZXQobmV3Qm94LmlkLCBuZXdCb3gpO1xuICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuc2VsZWN0ZWRCb3hlcy5zZXQobmV3Qm94LmlkLCBuZXdCb3gpO1xuICAgIHRoaXMuZC5ib2FyZFRleHRFZGl0b3Iuc2hvd0F0KG5ld0JveCk7XG5cbiAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmN1cnNvck92ZXJCb3ggPSBuZXdCb3g7XG4gIH1cbn1cbiIsImltcG9ydCB7IGludGVyc2VjdHMgfSBmcm9tICcuLi8uLi9tYXRoL3JlY3RhbmdsZS9pbnRlcnNlY3RzJztcbmltcG9ydCB7IG1vdmUgfSBmcm9tICcuLi8uLi9tYXRoL3JlY3RhbmdsZS9tb3ZlJztcbmltcG9ydCB7IGRpdmlkZSB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9kaXZpZGUnO1xuaW1wb3J0IHsgRHJhZ0RhdGEgfSBmcm9tICcuLi8uLi91dGlscy9kb20vZXh0ZW5kZWRDbGlja0hhbmRsZXInO1xuaW1wb3J0IHsgaXNLZXlQcmVzc2VkLCBLRVlTIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5Ym9hcmQnO1xuaW1wb3J0IHsgQm9hcmRDdXJzb3IgfSBmcm9tICcuLi9jb21wb25lbnRzL0JvYXJkQ3Vyc29yJztcbmltcG9ydCB7IEJvYXJkQm94ZXNTdG9yZSB9IGZyb20gJy4uL3N0b3Jlcy9Cb2FyZEJveGVzU3RvcmUnO1xuaW1wb3J0IHsgQm9hcmRWaWV3cG9ydFN0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL0JvYXJkVmlld3BvcnRTdG9yZSc7XG5cbnR5cGUgQm9hcmRDdXJzb3JTZXJ2aWNlRGVwZW5kZW5jaWVzID0ge1xuICBib2FyZEJveGVzU3RvcmU6IEJvYXJkQm94ZXNTdG9yZTtcbiAgYm9hcmRDdXJzb3I6IEJvYXJkQ3Vyc29yO1xuICBib2FyZFZpZXdwb3J0U3RvcmU6IEJvYXJkVmlld3BvcnRTdG9yZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBCb2FyZEN1cnNvclNlcnZpY2Uge1xuICBwcml2YXRlIGQ6IEJvYXJkQ3Vyc29yU2VydmljZURlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZEN1cnNvclNlcnZpY2VEZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLmQgPSBkO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdEJveCgpIHtcbiAgICBpZiAoIWlzS2V5UHJlc3NlZChLRVlTLmNvbnRyb2xPU1NwZWNpZmljKSkge1xuICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuY3Vyc29yT3ZlckJveCkge1xuICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzLnNldChcbiAgICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94LmlkLFxuICAgICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmN1cnNvck92ZXJCb3gsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoaWdobGlnaHRCb3goKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5wcmV2aW91c0N1cnNvck92ZXJCb3ggJiZcbiAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuY3Vyc29yT3ZlckJveCAhPT0gdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5wcmV2aW91c0N1cnNvck92ZXJCb3hcbiAgICApIHtcbiAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuaGlnaGxpZ2h0ZWRCb3hlcy5kZWxldGUodGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5wcmV2aW91c0N1cnNvck92ZXJCb3guaWQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmN1cnNvck92ZXJCb3gpIHtcbiAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuaGlnaGxpZ2h0ZWRCb3hlcy5zZXQoXG4gICAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuY3Vyc29yT3ZlckJveC5pZCxcbiAgICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94LFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaG92ZXJDdXJzb3JPdmVyQm94KCkge1xuICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUucHJldmlvdXNDdXJzb3JPdmVyQm94ID0gdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94O1xuICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuY3Vyc29yT3ZlckJveCA9IHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuZ2V0Qm94QnlQb3NpdGlvbihcbiAgICAgIHRoaXMuZC5ib2FyZEN1cnNvci5ib2FyZFBvc2l0aW9uLFxuICAgICAgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS56b29tLFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZHJhZ0JveCh7IGRlbHRhIH06IERyYWdEYXRhKSB7XG4gICAgaWYgKCF0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94IHx8IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuaXNNb3ZpbmdWaWV3UG9ydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgYm94IG9mIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUucHJpb3JpdGl6ZWRCb3hlcykge1xuICAgICAgaWYgKGJveCA9PT0gdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5kcmFnZ2luZ0JveCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNBbHJlYWR5SG92ZXJlZCA9IHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuYm94ZXNVbmRlckRyYWdnaW5nQm94Lmhhcyhib3guaWQpO1xuICAgICAgY29uc3QgaGFzSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0cyh0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94LCBib3gpO1xuXG4gICAgICBpZiAoaGFzSW50ZXJzZWN0aW9uICYmICFpc0FscmVhZHlIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuYm94ZXNVbmRlckRyYWdnaW5nQm94LnNldChib3guaWQsIGJveCk7XG4gICAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuaGlnaGxpZ2h0ZWRCb3hlcy5zZXQoYm94LmlkLCBib3gpO1xuICAgICAgfSBlbHNlIGlmICghaGFzSW50ZXJzZWN0aW9uICYmIGlzQWxyZWFkeUhvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5ib3hlc1VuZGVyRHJhZ2dpbmdCb3guZGVsZXRlKGJveC5pZCk7XG4gICAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuaGlnaGxpZ2h0ZWRCb3hlcy5kZWxldGUoYm94LmlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB6b29tZWREZWx0YSA9IGRpdmlkZShkZWx0YS5jbG9uZSgpLCB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLnpvb20pO1xuXG4gICAgZm9yIChjb25zdCBbLCBib3hdIG9mIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuc2VsZWN0ZWRCb3hlcykge1xuICAgICAgbW92ZShib3gsIHpvb21lZERlbHRhKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdEJveGVzKHsgdG90YWxEZWx0YSB9OiBEcmFnRGF0YSkge1xuICAgIGNvbnN0IHpvb21lZERlbHRhID0gZGl2aWRlKHRvdGFsRGVsdGEuY2xvbmUoKSwgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS56b29tKTtcblxuICAgIGlmICh0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmJveGVzVW5kZXJEcmFnZ2luZ0JveC5zaXplID4gMCkge1xuICAgICAgZm9yIChjb25zdCBbLCBib3hdIG9mIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuc2VsZWN0ZWRCb3hlcykge1xuICAgICAgICAvLyBNb3ZlIGJveCBiYWNrXG4gICAgICAgIG1vdmUoYm94LCB6b29tZWREZWx0YSwgLTEpO1xuICAgICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmNvbm5lY3RCb3goYm94LCB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmJveGVzVW5kZXJEcmFnZ2luZ0JveCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5oaWdobGlnaHRlZEJveGVzLmNsZWFyKCk7XG4gICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5ib3hlc1VuZGVyRHJhZ2dpbmdCb3guY2xlYXIoKTtcbiAgICB0aGlzLmhpZ2hsaWdodEJveCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbnRlcnNlY3RzIH0gZnJvbSAnLi4vLi4vbWF0aC9yZWN0YW5nbGUvaW50ZXJzZWN0cyc7XG5pbXBvcnQgeyBtdWx0aXBseUJ5VmVjdG9yIH0gZnJvbSAnLi4vLi4vbWF0aC9yZWN0YW5nbGUvbXVsdGlwbHlCeVZlY3Rvcic7XG5pbXBvcnQgeyBCb2FyZFNlbGVjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQm9hcmRTZWxlY3Rpb24nO1xuaW1wb3J0IHsgQm9hcmRCb3hlc1N0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL0JvYXJkQm94ZXNTdG9yZSc7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRWaWV3cG9ydFN0b3JlJztcblxudHlwZSBCb2FyZFNlbGVjdGlvblNlcnZpY2VEZXBlbmRlbmNpZXMgPSB7XG4gIGJvYXJkQm94ZXNTdG9yZTogQm9hcmRCb3hlc1N0b3JlO1xuICBib2FyZFNlbGVjdGlvbjogQm9hcmRTZWxlY3Rpb247XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkU2VsZWN0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgZDogQm9hcmRTZWxlY3Rpb25TZXJ2aWNlRGVwZW5kZW5jaWVzO1xuXG4gIGNvbnN0cnVjdG9yKGQ6IEJvYXJkU2VsZWN0aW9uU2VydmljZURlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Qm94ZXMoKSB7XG4gICAgaWYgKCF0aGlzLmQuYm9hcmRTZWxlY3Rpb24uYm9hcmRTZWxlY3RlZEFyZWEpIHtcbiAgICAgIC8vIFNob3VsZCBuZXZlciBoYXBwZW5cbiAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBzZWxlY3RlZCBhcmVhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBib3ggb2YgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5wcmlvcml0aXplZEJveGVzKSB7XG4gICAgICBjb25zdCB6b29tZWRCb3ggPSBtdWx0aXBseUJ5VmVjdG9yKGJveC5jbG9uZSgpLCB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLnpvb20pO1xuXG4gICAgICBpZiAoaW50ZXJzZWN0cyh0aGlzLmQuYm9hcmRTZWxlY3Rpb24uYm9hcmRTZWxlY3RlZEFyZWEsIHpvb21lZEJveCkpIHtcbiAgICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzLnNldChib3guaWQsIGJveCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnNlbGVjdGVkQm94ZXMuZGVsZXRlKGJveC5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyB6b29tVG9Qb2ludCB9IGZyb20gJy4uLy4uL21hdGgvbWF0cml4ZXMyZC96b29tVG9Qb2ludCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMvVmVjdG9yJztcbmltcG9ydCB7IEJvYXJkQ3Vyc29yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb2FyZEN1cnNvcic7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRWaWV3cG9ydFN0b3JlJztcblxudHlwZSBCb2FyZFZpZXdwb3J0U2VydmljZURlcGVuZGVuY2llcyA9IHtcbiAgYm9hcmRWaWV3cG9ydFN0b3JlOiBCb2FyZFZpZXdwb3J0U3RvcmU7XG4gIGJvYXJkQ3Vyc29yOiBCb2FyZEN1cnNvcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBCb2FyZFZpZXdwb3J0U2VydmljZSB7XG4gIHByaXZhdGUgZDogQm9hcmRWaWV3cG9ydFNlcnZpY2VEZXBlbmRlbmNpZXM7XG5cbiAgY29uc3RydWN0b3IoZDogQm9hcmRWaWV3cG9ydFNlcnZpY2VEZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLmQgPSBkO1xuICB9XG5cbiAgcHVibGljIHpvb21Ub0N1cnNvcihkZWx0YTogVmVjdG9yKSB7XG4gICAgY29uc3Qge1xuICAgICAgYm9hcmRWaWV3cG9ydFN0b3JlLFxuICAgICAgYm9hcmRWaWV3cG9ydFN0b3JlOiB7IHRyYW5zZm9ybSB9LFxuICAgICAgYm9hcmRDdXJzb3IsXG4gICAgfSA9IHRoaXMuZDtcbiAgICBjb25zdCBbem9vbVgsIF9iLCBfYywgem9vbVksIG9mZnNldFgsIG9mZnNldFldID0gem9vbVRvUG9pbnQoXG4gICAgICB0cmFuc2Zvcm0uY2xvbmUoKSxcbiAgICAgIGJvYXJkQ3Vyc29yLnBvc2l0aW9uLFxuICAgICAgZGVsdGEsXG4gICAgKS5yYXdNYXRyaXgyZDtcbiAgICBjb25zdCBuZXdPZmZzZXQgPSBuZXcgVmVjdG9yKHsgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WSB9KTtcblxuICAgIGJvYXJkVmlld3BvcnRTdG9yZS5vZmZzZXQgPSBuZXdPZmZzZXQ7XG4gICAgYm9hcmRWaWV3cG9ydFN0b3JlLnpvb20ueCA9IHpvb21YO1xuICAgIGJvYXJkVmlld3BvcnRTdG9yZS56b29tLnkgPSB6b29tWTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvQm94JztcbmltcG9ydCB7IFJlbGF0aW9uIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvUmVsYXRpb24nO1xuaW1wb3J0IHsgaXNQb2ludEluc2lkZSB9IGZyb20gJy4uLy4uL21hdGgvcmVjdGFuZ2xlL2lzUG9pbnRJbnNpZGUnO1xuaW1wb3J0IHsgbXVsdGlwbHlCeVZlY3RvciB9IGZyb20gJy4uLy4uL21hdGgvcmVjdGFuZ2xlL211bHRpcGx5QnlWZWN0b3InO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzL1ZlY3Rvcic7XG5pbXBvcnQgeyBQdWJTdWIgfSBmcm9tICcuLi8uLi91dGlscy9wdWJTdWIvUHViU3ViJztcblxuZXhwb3J0IGNsYXNzIEJvYXJkQm94ZXNTdG9yZSB7XG4gIHByaXZhdGUgZGVsZXRlUHViU3ViID0gbmV3IFB1YlN1YjxCb3g+KCk7XG4gIHB1YmxpYyBkZWxldGVFdmVudCA9IHRoaXMuZGVsZXRlUHViU3ViLmV2ZW50O1xuXG4gIHB1YmxpYyBib3hlczogTWFwPG51bWJlciwgQm94PiA9IG5ldyBNYXAoKTtcbiAgLy8gQm94ZXMgd2hpY2ggd2VyZSB0b3VjaGVkIGxhc3QgYXJlIGF0IHRoZSBuZWQgb2YgdGhpcyBhcnJheS5cbiAgLy8gQm94ZXMgd2l0aCB0aGUgaGlnaGVzdCBwcmlvcml0eSAoYXQgdGhlIGVuZCkgc2hvdWxkIGJlIHJlbmRlcmVkIGxhc3QuXG4gIHB1YmxpYyBwcmlvcml0aXplZEJveGVzOiBCb3hbXSA9IFtdO1xuICBwdWJsaWMgYm94ZXNVbmRlckRyYWdnaW5nQm94OiBNYXA8bnVtYmVyLCBCb3g+ID0gbmV3IE1hcCgpO1xuICBwdWJsaWMgcmVsYXRpb25zOiBNYXA8bnVtYmVyLCBSZWxhdGlvbj4gPSBuZXcgTWFwKCk7XG5cbiAgcHVibGljIGhpZ2hsaWdodGVkQm94ZXM6IE1hcDxudW1iZXIsIEJveD4gPSBuZXcgTWFwKCk7XG4gIHB1YmxpYyBzZWxlY3RlZEJveGVzOiBNYXA8bnVtYmVyLCBCb3g+ID0gbmV3IE1hcCgpO1xuICBwdWJsaWMgZHJhZ2dpbmdCb3g/OiBCb3g7XG5cbiAgcHVibGljIGN1cnNvck92ZXJCb3g/OiBCb3g7XG4gIHB1YmxpYyBwcmV2aW91c0N1cnNvck92ZXJCb3g/OiBCb3g7XG5cbiAgLy8gVE9ETyBjYW4gYmUgb3B0aW1pemVkPyBFLmcuIHVzZSBhIGxpbmtlZCBsaXN0ICsgbWFwIGFwcHJvYWNoLlxuICBwdWJsaWMgcmlzZUJveFByaW9yaXR5KGJveDogQm94KSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG5cbiAgICAvLyBDaGVjayBmcm9tIGVuZCBpbiBjYXNlIGlmIHRoZSBib3ggaGFzIHRoZSBtYXggcHJpb3JpdHlcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZm9yLWRpcmVjdGlvblxuICAgIGZvciAobGV0IGkgPSB0aGlzLnByaW9yaXRpemVkQm94ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpKyspIHtcbiAgICAgIGNvbnN0IGJveCA9IHRoaXMucHJpb3JpdGl6ZWRCb3hlc1tpXTtcblxuICAgICAgaWYgKHRoaXMucHJpb3JpdGl6ZWRCb3hlc1tpXSA9PT0gYm94KSB7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJpb3JpdGl6ZWRCb3hlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMucHJpb3JpdGl6ZWRCb3hlcy5wdXNoKGJveCk7XG4gIH1cblxuICBwdWJsaWMgYWRkKGJveDogQm94KSB7XG4gICAgdGhpcy5ib3hlcy5zZXQoYm94LmlkLCBib3gpO1xuICAgIHRoaXMucHJpb3JpdGl6ZWRCb3hlcy5wdXNoKGJveCk7XG5cbiAgICByZXR1cm4gYm94O1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZShib3g6IEJveCkge1xuICAgIHRoaXMuYm94ZXMuZGVsZXRlKGJveC5pZCk7XG4gICAgdGhpcy5zZWxlY3RlZEJveGVzLmRlbGV0ZShib3guaWQpO1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRCb3hlcy5kZWxldGUoYm94LmlkKTtcblxuICAgIGNvbnN0IHByaW9yaXRpemVkQm94SW5kZXggPSB0aGlzLnByaW9yaXRpemVkQm94ZXMuaW5kZXhPZihib3gpO1xuXG4gICAgYm94LnJlbGF0aW9ucy5mb3JFYWNoKChyZWxhdGlvbikgPT4ge1xuICAgICAgY29uc3QgdG9Cb3hSZWxhdGlvbkluZGV4ID0gcmVsYXRpb24udG9Cb3gucmVsYXRpb25zLmluZGV4T2YocmVsYXRpb24pO1xuXG4gICAgICByZWxhdGlvbi50b0JveC5yZWxhdGlvbnMuc3BsaWNlKHRvQm94UmVsYXRpb25JbmRleCwgMSk7XG5cbiAgICAgIHRoaXMucmVsYXRpb25zLmRlbGV0ZShyZWxhdGlvbi5pZCk7XG4gICAgfSk7XG5cbiAgICAvLyBUT0RPIGNhbiBiZSBvcHRpbWl6ZWQ/IEUuZy4gdXNlIGEgbGlua2VkIGxpc3QgKyBtYXAgYXBwcm9hY2guXG4gICAgaWYgKHByaW9yaXRpemVkQm94SW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnByaW9yaXRpemVkQm94ZXMuc3BsaWNlKHByaW9yaXRpemVkQm94SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHRoaXMuZGVsZXRlUHViU3ViLnB1Ymxpc2goYm94KTtcbiAgfVxuXG4gIC8vIFRPRE8gZG9uJ3QgaXRlcmF0ZSBhbGwgYm94ZXMgKGltcHJvdmUgcGVyZm9ybWFuY2UpLlxuICBwdWJsaWMgZ2V0Qm94QnlQb3NpdGlvbihwb3NpdGlvbjogVmVjdG9yLCB6b29tOiBWZWN0b3IpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5wcmlvcml0aXplZEJveGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBib3ggPSB0aGlzLnByaW9yaXRpemVkQm94ZXNbaV07XG5cbiAgICAgIGlmIChpc1BvaW50SW5zaWRlKHBvc2l0aW9uLCBtdWx0aXBseUJ5VmVjdG9yKGJveC5jbG9uZSgpLCB6b29tKSkpIHtcbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdEJveChmcm9tQm94OiBCb3gsIHRvQm94ZXM6IEJveFtdIHwgTWFwPG51bWJlciwgQm94Pikge1xuICAgIHRvQm94ZXMuZm9yRWFjaCgodG9Cb3gpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0ZWRSZWxhdGlvbiA9IGZyb21Cb3gucmVsYXRpb25zLmZpbmQoXG4gICAgICAgIChyZWxhdGlvblRvQ2hlY2spID0+XG4gICAgICAgICAgKHRvQm94LmlkID09PSByZWxhdGlvblRvQ2hlY2sudG9Cb3guaWQgJiYgZnJvbUJveC5pZCA9PT0gcmVsYXRpb25Ub0NoZWNrLmZyb21Cb3guaWQpIHx8XG4gICAgICAgICAgKHRvQm94LmlkID09PSByZWxhdGlvblRvQ2hlY2suZnJvbUJveC5pZCAmJiBmcm9tQm94LmlkID09PSByZWxhdGlvblRvQ2hlY2sudG9Cb3guaWQpLFxuICAgICAgKTtcblxuICAgICAgLy8gSWYgcmVsYXRpb24gZXhpc3RzLCB0aGVuIHdlIG5lZWQgdG8gZGVsZXRlIHRoaXMgcmVsYXRpb25cbiAgICAgIGlmIChleGlzdGVkUmVsYXRpb24pIHtcbiAgICAgICAgZnJvbUJveC5yZWxhdGlvbnMgPSBmcm9tQm94LnJlbGF0aW9ucy5maWx0ZXIoKHsgaWQgfSkgPT4gZXhpc3RlZFJlbGF0aW9uLmlkICE9PSBpZCk7XG4gICAgICAgIHRvQm94LnJlbGF0aW9ucyA9IGZyb21Cb3gucmVsYXRpb25zLmZpbHRlcigoeyBpZCB9KSA9PiBleGlzdGVkUmVsYXRpb24uaWQgIT09IGlkKTtcblxuICAgICAgICB0aGlzLnJlbGF0aW9ucy5kZWxldGUoZXhpc3RlZFJlbGF0aW9uLmlkKTtcbiAgICAgIH1cbiAgICAgIC8vIENyZWF0ZSByZWxhdGlvblxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aW9uID0gbmV3IFJlbGF0aW9uKGZyb21Cb3gsIHRvQm94KTtcblxuICAgICAgICBmcm9tQm94LnJlbGF0aW9ucy5wdXNoKHJlbGF0aW9uKTtcbiAgICAgICAgdG9Cb3gucmVsYXRpb25zLnB1c2gocmVsYXRpb24pO1xuXG4gICAgICAgIHRoaXMucmVsYXRpb25zLnNldChyZWxhdGlvbi5pZCwgcmVsYXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXgyZCB9IGZyb20gJy4uLy4uL21hdGgvbWF0cml4ZXMyZC9NYXRyaXgyZCc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMvYWRkJztcbmltcG9ydCB7IHN1YnRyYWN0IH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzL3N1YnRyYWN0JztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9WZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgQm9hcmRWaWV3cG9ydFN0b3JlIHtcbiAgcHVibGljIGdldCBhYnNvbHV0ZUNlbnRlcigpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih7XG4gICAgICB4OiB0aGlzLndpZHRoIC8gMixcbiAgICAgIHk6IHRoaXMuaGVpZ2h0IC8gMixcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2VudGVyKCkge1xuICAgIHJldHVybiBzdWJ0cmFjdCh0aGlzLmFic29sdXRlQ2VudGVyLmNsb25lKCksIHRoaXMub2Zmc2V0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGVmdCgpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih7XG4gICAgICB4OiAwLFxuICAgICAgeTogdGhpcy5oZWlnaHQgLyAyLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldCB0b3AoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3Ioe1xuICAgICAgeDogdGhpcy53aWR0aCAvIDIsXG4gICAgICB5OiAwLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldCByaWdodCgpIHtcbiAgICByZXR1cm4gYWRkKFxuICAgICAgdGhpcy5sZWZ0LmNsb25lKCksXG4gICAgICBuZXcgVmVjdG9yKHtcbiAgICAgICAgeDogdGhpcy53aWR0aCxcbiAgICAgICAgeTogMCxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGJvdHRvbSgpIHtcbiAgICByZXR1cm4gYWRkKFxuICAgICAgdGhpcy50b3AuY2xvbmUoKSxcbiAgICAgIG5ldyBWZWN0b3Ioe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiB0aGlzLmhlaWdodCxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gbmV3IE1hdHJpeDJkKHtcbiAgICAgIHJhd01hdHJpeDJkOiBbdGhpcy56b29tLngsIDAsIDAsIHRoaXMuem9vbS55LCB0aGlzLm9mZnNldC54LCB0aGlzLm9mZnNldC55XSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB6b29tID0gbmV3IFZlY3Rvcih7IHg6IDEsIHk6IDEgfSk7XG4gIHB1YmxpYyBvZmZzZXQgPSBuZXcgVmVjdG9yKCk7XG4gIHB1YmxpYyBpc01vdmluZ1ZpZXdQb3J0ID0gZmFsc2U7XG4gIHB1YmxpYyB3aWR0aCA9IDA7XG4gIHB1YmxpYyBoZWlnaHQgPSAwO1xufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3JzL1ZlY3Rvcic7XG5pbXBvcnQgeyBDdXJzb3JUeXBlIH0gZnJvbSAnLi4vcmVuZGVyaW5nL0RyYXdlcic7XG5pbXBvcnQgeyBEcmFnRGF0YSwgRHJhZ01vZGUsIERyYWdTdGFydERhdGEsIGV4dGVuZGVkQ2xpY2tIYW5kbGVyLCBNb3VzZURhdGEgfSBmcm9tICcuLi91dGlscy9kb20vZXh0ZW5kZWRDbGlja0hhbmRsZXInO1xuaW1wb3J0IHsgZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudCB9IGZyb20gJy4uL3V0aWxzL2RvbS9nZXRQb3NpdGlvbkZyb21Nb3VzZUV2ZW50JztcbmltcG9ydCB7IFB1YlN1YiB9IGZyb20gJy4uL3V0aWxzL3B1YlN1Yi9QdWJTdWInO1xuXG5leHBvcnQgdHlwZSBTY3JvbGxEYXRhID0gTW91c2VEYXRhICYge1xuICBkZWx0YTogVmVjdG9yO1xufTtcblxuZXhwb3J0IGNsYXNzIEN1cnNvciB7XG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yO1xuICBwdWJsaWMgY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHB1YmxpYyBjdXJzb3JUeXBlOiBDdXJzb3JUeXBlID0gQ3Vyc29yVHlwZS5EZWZhdWx0O1xuXG4gIHByaXZhdGUgbW92ZVB1YlN1YiA9IG5ldyBQdWJTdWI8TW91c2VEYXRhPigpO1xuICBwdWJsaWMgbW92ZUV2ZW50ID0gdGhpcy5tb3ZlUHViU3ViLmV2ZW50O1xuXG4gIHByaXZhdGUgdGFiUHViU3ViID0gbmV3IFB1YlN1YjxNb3VzZURhdGE+KCk7XG4gIHB1YmxpYyB0YXBFdmVudCA9IHRoaXMudGFiUHViU3ViLmV2ZW50O1xuXG4gIHByaXZhdGUgZG91YmxlVGFwUHViU3ViID0gbmV3IFB1YlN1YjxNb3VzZURhdGE+KCk7XG4gIHB1YmxpYyBkb3VibGVUYWJFdmVudCA9IHRoaXMuZG91YmxlVGFwUHViU3ViLmV2ZW50O1xuXG4gIHByaXZhdGUgZHJhZ1N0YXJ0UHViU3ViID0gbmV3IFB1YlN1YjxEcmFnU3RhcnREYXRhPigpO1xuICBwdWJsaWMgZHJhZ1N0YXJ0RXZlbnQgPSB0aGlzLmRyYWdTdGFydFB1YlN1Yi5ldmVudDtcblxuICBwcml2YXRlIGRyYWdQdWJTdWIgPSBuZXcgUHViU3ViPERyYWdEYXRhPigpO1xuICBwdWJsaWMgZHJhZ0V2ZW50ID0gdGhpcy5kcmFnUHViU3ViLmV2ZW50O1xuXG4gIHByaXZhdGUgZHJhZ0VuZFB1YlN1YiA9IG5ldyBQdWJTdWI8RHJhZ0RhdGE+KCk7XG4gIHB1YmxpYyBkcmFnRW5kRXZlbnQgPSB0aGlzLmRyYWdFbmRQdWJTdWIuZXZlbnQ7XG5cbiAgcHJpdmF0ZSB1cFB1YlN1YiA9IG5ldyBQdWJTdWI8RHJhZ0RhdGE+KCk7XG4gIHB1YmxpYyB1cEV2ZW50ID0gdGhpcy51cFB1YlN1Yi5ldmVudDtcblxuICBwcml2YXRlIGRvd25QdWJTdWIgPSBuZXcgUHViU3ViPE1vdXNlRGF0YT4oKTtcbiAgcHVibGljIGRvd25FdmVudCA9IHRoaXMuZG93blB1YlN1Yi5ldmVudDtcblxuICBwcml2YXRlIHNjcm9sbFB1YlN1YiA9IG5ldyBQdWJTdWI8U2Nyb2xsRGF0YT4oKTtcbiAgcHVibGljIHNjcm9sbEV2ZW50ID0gdGhpcy5zY3JvbGxQdWJTdWIuZXZlbnQ7XG5cbiAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQsIHBvc2l0aW9uOiBWZWN0b3IgPSBuZXcgVmVjdG9yKCkpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXJFbGVtZW50O1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChldmVudCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoZXZlbnQpKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB0aGlzLmhhbmRsZU1vdmUoZXZlbnQpKTtcbiAgICBleHRlbmRlZENsaWNrSGFuZGxlcihjb250YWluZXJFbGVtZW50LCB7XG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICBzaWxlbmNlQ2xpY2tBZnRlckRyYWc6IHRydWUsXG4gICAgICBkcmFnTW9kZTogRHJhZ01vZGUuRG93bixcbiAgICAgIG9uQ2xpY2s6IChkYXRhKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGRhdGEpLFxuICAgICAgb25Eb3VibGVDbGljazogKGRhdGEpID0+IHRoaXMuaGFuZGxlRG91YmxlQ2xpY2soZGF0YSksXG4gICAgICBvbkRyYWdTdGFydDogKGRhdGEpID0+IHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGRhdGEpLFxuICAgICAgb25EcmFnOiAoZGF0YSkgPT4gdGhpcy5oYW5kbGVEcmFnKGRhdGEpLFxuICAgICAgb25EcmFnRW5kOiAoZGF0YSkgPT4gdGhpcy5oYW5kbGVEcmFnRW5kKGRhdGEpLFxuICAgICAgb25Nb3VzZURvd246IChkYXRhKSA9PiB0aGlzLmhhbmRsZU1vdXNlRG93bihkYXRhKSxcbiAgICAgIG9uTW91c2VVcDogKGRhdGEpID0+IHRoaXMuaGFuZGxlTW91c2VVcChkYXRhKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTW92ZShldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMucG9zaXRpb24udXBkYXRlRnJvbShnZXRQb3NpdGlvbkZyb21Nb3VzZUV2ZW50KGV2ZW50LCB0aGlzLmNvbnRhaW5lckVsZW1lbnQpKTtcbiAgICB0aGlzLm1vdmVQdWJTdWIucHVibGlzaCh7IGV2ZW50LCBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2soZGF0YTogTW91c2VEYXRhKSB7XG4gICAgdGhpcy50YWJQdWJTdWIucHVibGlzaChkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRG91YmxlQ2xpY2soZGF0YTogTW91c2VEYXRhKSB7XG4gICAgdGhpcy5kb3VibGVUYXBQdWJTdWIucHVibGlzaChkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRHJhZ1N0YXJ0KGRhdGE6IERyYWdTdGFydERhdGEpIHtcbiAgICB0aGlzLmRyYWdTdGFydFB1YlN1Yi5wdWJsaXNoKGRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEcmFnKGRhdGE6IERyYWdEYXRhKSB7XG4gICAgdGhpcy5kcmFnUHViU3ViLnB1Ymxpc2goZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZURyYWdFbmQoZGF0YTogRHJhZ0RhdGEpIHtcbiAgICB0aGlzLmRyYWdFbmRQdWJTdWIucHVibGlzaChkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTW91c2VVcChkYXRhOiBEcmFnRGF0YSkge1xuICAgIHRoaXMudXBQdWJTdWIucHVibGlzaChkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTW91c2VEb3duKGRhdGE6IE1vdXNlRGF0YSkge1xuICAgIHRoaXMuZG93blB1YlN1Yi5wdWJsaXNoKGRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTY3JvbGwoZXZlbnQ6IFdoZWVsRXZlbnQpIHtcbiAgICB0aGlzLnNjcm9sbFB1YlN1Yi5wdWJsaXNoKHtcbiAgICAgIGV2ZW50LFxuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBkZWx0YTogbmV3IFZlY3Rvcih7XG4gICAgICAgIHg6IGV2ZW50LmRlbHRhWCxcbiAgICAgICAgeTogZXZlbnQuZGVsdGFZLFxuICAgICAgfSksXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4uL21hdGgvcmVjdGFuZ2xlL1JlY3RhbmdsZSc7XG5pbXBvcnQgeyBzb3J0IH0gZnJvbSAnLi4vbWF0aC92ZWN0b3JzL3NvcnQnO1xuaW1wb3J0IHsgZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudCB9IGZyb20gJy4uL3V0aWxzL2RvbS9nZXRQb3NpdGlvbkZyb21Nb3VzZUV2ZW50JztcbmltcG9ydCB7IFB1YlN1YiB9IGZyb20gJy4uL3V0aWxzL3B1YlN1Yi9QdWJTdWInO1xuaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSAnLi9jdXJzb3InO1xuXG5leHBvcnQgdHlwZSBTZWxlY3RTdGFydERhdGEgPSB7XG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xufTtcblxuZXhwb3J0IHR5cGUgU2VsZWN0RGF0YSA9IFNlbGVjdFN0YXJ0RGF0YSAmIHtcbiAgc2VsZWN0ZWRBcmVhOiBSZWN0YW5nbGU7XG59O1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uIHtcbiAgcHJpdmF0ZSBjdXJzb3I6IEN1cnNvcjtcbiAgcHJpdmF0ZSBsYXN0RG93bkV2ZW50PzogTW91c2VFdmVudDtcbiAgcHJpdmF0ZSBpc01vdXNlRG93biA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc2VsZWN0U3RhcnRQdWJTdWIgPSBuZXcgUHViU3ViPFNlbGVjdFN0YXJ0RGF0YT4oKTtcbiAgcHVibGljIHNlbGVjdFN0YXJ0RXZlbnQgPSB0aGlzLnNlbGVjdFN0YXJ0UHViU3ViLmV2ZW50O1xuXG4gIHByaXZhdGUgc2VsZWN0UHViU3ViID0gbmV3IFB1YlN1YjxTZWxlY3REYXRhPigpO1xuICBwdWJsaWMgc2VsZWN0RXZlbnQgPSB0aGlzLnNlbGVjdFB1YlN1Yi5ldmVudDtcblxuICBwcml2YXRlIHNlbGVjdEVuZFB1YlN1YiA9IG5ldyBQdWJTdWI8U2VsZWN0RGF0YT4oKTtcbiAgcHVibGljIHNlbGVjdEVuZEV2ZW50ID0gdGhpcy5zZWxlY3RFbmRQdWJTdWIuZXZlbnQ7XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRBcmVhPzogUmVjdGFuZ2xlO1xuXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRBcmVhKCkge1xuICAgIGlmICh0aGlzLmNhblNlbGVjdCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRBcmVhO1xuICB9XG5cbiAgcHVibGljIGNhblNlbGVjdCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoY3Vyc29yOiBDdXJzb3IpIHtcbiAgICB0aGlzLmN1cnNvciA9IGN1cnNvcjtcblxuICAgIHRoaXMuY3Vyc29yLmRvd25FdmVudC5zdWJzY3JpYmUoKHsgZXZlbnQgfSkgPT4gdGhpcy5oYW5kbGVEb3duKGV2ZW50KSk7XG4gICAgdGhpcy5jdXJzb3IubW92ZUV2ZW50LnN1YnNjcmliZSgoeyBldmVudCB9KSA9PiB0aGlzLmhhbmRsZU1vdmUoZXZlbnQpKTtcbiAgICB0aGlzLmN1cnNvci51cEV2ZW50LnN1YnNjcmliZSgoeyBldmVudCB9KSA9PiB0aGlzLmhhbmRsZVVwKGV2ZW50KSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNlbGVjdGlvbihldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5sYXN0RG93bkV2ZW50KSB7XG4gICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50RnJvbUxhc3REb3duID0gZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudCh0aGlzLmxhc3REb3duRXZlbnQsIHRoaXMuY3Vyc29yLmNvbnRhaW5lckVsZW1lbnQpO1xuICAgIGNvbnN0IGN1cnJlbnRQb2ludCA9IGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQoZXZlbnQsIHRoaXMuY3Vyc29yLmNvbnRhaW5lckVsZW1lbnQpO1xuICAgIGNvbnN0IFtmcm9tUG9pbnQsIHRvUG9pbnRdID0gc29ydChwb2ludEZyb21MYXN0RG93biwgY3VycmVudFBvaW50KTtcblxuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbVBvaW50cyhmcm9tUG9pbnQsIHRvUG9pbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5sYXN0RG93bkV2ZW50ID0gZXZlbnQ7XG4gICAgdGhpcy5pc01vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5fc2VsZWN0ZWRBcmVhID0gdGhpcy5nZXRTZWxlY3Rpb24oZXZlbnQpO1xuXG4gICAgdGhpcy5zZWxlY3RTdGFydFB1YlN1Yi5wdWJsaXNoKHtcbiAgICAgIGV2ZW50LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRBcmVhID0gdGhpcy5fc2VsZWN0ZWRBcmVhO1xuXG4gICAgaWYgKCFzZWxlY3RlZEFyZWEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNNb3VzZURvd24gfHwgdGhpcy5jYW5TZWxlY3QgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZWN0ZWRBcmVhLnVwZGF0ZUZyb20odGhpcy5nZXRTZWxlY3Rpb24oZXZlbnQpKTtcbiAgICB0aGlzLnNlbGVjdFB1YlN1Yi5wdWJsaXNoKHtcbiAgICAgIGV2ZW50LFxuICAgICAgc2VsZWN0ZWRBcmVhLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVVcChldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMuaXNNb3VzZURvd24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHNlbGVjdGVkQXJlYSA9IHRoaXMuX3NlbGVjdGVkQXJlYTtcblxuICAgIC8vIFRPRE8gaW52ZXN0aWdhdGUgd2h5IHRoaXMgaGFwcGVucyBvbiBkb3VibGUgY2xpY2tcbiAgICBpZiAoIXNlbGVjdGVkQXJlYSkge1xuICAgICAgLy8gU2hvdWxkIG5ldmVyIGhhcHBlblxuICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIHNlbGVjdGVkIGFyZWEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxlY3RlZEFyZWEudXBkYXRlRnJvbSh0aGlzLmdldFNlbGVjdGlvbihldmVudCkpO1xuICAgIHRoaXMuc2VsZWN0RW5kUHViU3ViLnB1Ymxpc2goe1xuICAgICAgZXZlbnQsXG4gICAgICBzZWxlY3RlZEFyZWEsXG4gICAgfSk7XG5cbiAgICB0aGlzLl9zZWxlY3RlZEFyZWEgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4uL21hdGgvcmVjdGFuZ2xlL1JlY3RhbmdsZSc7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vbWF0aC9yZWN0YW5nbGUvdHlwZXMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3JzL1ZlY3Rvcic7XG5pbXBvcnQgeyBUZXh0QmxvY2tMaW5lcyB9IGZyb20gJy4uL3JlbmRlcmluZy90eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVUZXh0QmxvY2tMaW5lcyB9IGZyb20gJy4uL3V0aWxzL2NhbnZhc1RleHQnO1xuaW1wb3J0IHsgaXNLZXlQcmVzc2VkLCBLRVlTIH0gZnJvbSAnLi4vdXRpbHMva2V5Ym9hcmQnO1xuaW1wb3J0IHsgUHViU3ViIH0gZnJvbSAnLi4vdXRpbHMvcHViU3ViL1B1YlN1Yic7XG5pbXBvcnQgeyBDdXJzb3IgfSBmcm9tICcuL0N1cnNvcic7XG5cbmV4cG9ydCB0eXBlIEhlaWdodERhdGEgPSB7XG4gIGhlaWdodDogbnVtYmVyO1xuICBkZWx0YTogbnVtYmVyO1xufTtcblxudHlwZSBUZXh0RWRpdG9yRGVwZW5kZW5jaWVzID0ge1xuICBjYW52YXNDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIGN1cnNvcjogQ3Vyc29yO1xufTtcblxuZXhwb3J0IGNsYXNzIFRleHRFZGl0b3IgaW1wbGVtZW50cyBEaW1lbnNpb25zIHtcbiAgcHJpdmF0ZSBkOiBUZXh0RWRpdG9yRGVwZW5kZW5jaWVzO1xuICBwcml2YXRlIF9zaG93bkF0PzogVmVjdG9yO1xuICBwcml2YXRlIGlzTGlzdGVuZXJzQXR0YWNoZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGlucHV0UHViU3ViID0gbmV3IFB1YlN1Yjx7XG4gICAgZXZlbnQ6IEtleWJvYXJkRXZlbnQ7XG4gICAgdGV4dEVkaXRvcjogVGV4dEVkaXRvcjtcbiAgfT4oKTtcbiAgcHVibGljIGlucHV0RXZlbnQgPSB0aGlzLmlucHV0UHViU3ViLmV2ZW50O1xuXG4gIHByaXZhdGUgY29udGVudEhlaWdodFB1YlN1YiA9IG5ldyBQdWJTdWI8SGVpZ2h0RGF0YT4oKTtcbiAgcHVibGljIGNvbnRlbnRIZWlnaHRFdmVudCA9IHRoaXMuY29udGVudEhlaWdodFB1YlN1Yi5ldmVudDtcblxuICBwcml2YXRlIF9jb250ZW50ID0gJyc7XG5cbiAgcHVibGljIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG5cbiAgcHVibGljIHNldCBjb250ZW50KGNvbnRlbnQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9jb250ZW50ID09PSBjb250ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcHJldmlvdXNIZWlnaHQgPSB0aGlzLnRleHRCbG9ja0xpbmVzLnRleHRCbG9ja01ldHJpY3MuaGVpZ2h0V2lkdGhQYWRkaW5ncztcbiAgICB0aGlzLl9jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLnRleHRCbG9ja0xpbmVzID0gdGhpcy5jcmVhdGVUZXh0QmxvY2tMaW5lcygpO1xuICAgIGNvbnN0IG5ld0hlaWdodCA9IHRoaXMudGV4dEJsb2NrTGluZXMudGV4dEJsb2NrTWV0cmljcy5oZWlnaHRXaWR0aFBhZGRpbmdzO1xuXG4gICAgaWYgKHByZXZpb3VzSGVpZ2h0ICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgIHRoaXMuY29udGVudEhlaWdodFB1YlN1Yi5wdWJsaXNoKHtcbiAgICAgICAgaGVpZ2h0OiBuZXdIZWlnaHQsXG4gICAgICAgIGRlbHRhOiBuZXdIZWlnaHQgLSBwcmV2aW91c0hlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb250U2l6ZSA9IDE0O1xuICBwdWJsaWMgd2lkdGggPSAwO1xuICBwdWJsaWMgaGVpZ2h0ID0gMDtcblxuICBwdWJsaWMgdGV4dEJsb2NrTGluZXM6IFRleHRCbG9ja0xpbmVzO1xuXG4gIHB1YmxpYyBnZXQgZWRpdG9yUmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHtcbiAgICAgIC4uLih0aGlzLnNob3duQXQgfHwgeyB4OiAwLCB5OiAwIH0pLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldCBzaG93bkF0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaG93bkF0O1xuICB9XG5cbiAgcHVibGljIGdldCBpc1Nob3duKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuX3Nob3duQXQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZDogVGV4dEVkaXRvckRlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG4gICAgdGhpcy50ZXh0QmxvY2tMaW5lcyA9IHRoaXMuY3JlYXRlVGV4dEJsb2NrTGluZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVGV4dEJsb2NrTGluZXMoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVRleHRCbG9ja0xpbmVzKHRoaXMuZC5jYW52YXNDb250ZXh0LCB7XG4gICAgICB0ZXh0OiB0aGlzLmNvbnRlbnQsXG4gICAgICBmb250U2l6ZTogdGhpcy5mb250U2l6ZSxcbiAgICAgIHJlY3RhbmdsZTogdGhpcy5lZGl0b3JSZWN0YW5nbGUsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUtleWRvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBjb25zdCBpc0xldHRlck9yTnVtYmVyID0gZXZlbnQua2V5Lmxlbmd0aCA9PT0gMTtcblxuICAgIGlmIChpc0xldHRlck9yTnVtYmVyKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgKz0gZXZlbnQua2V5O1xuICAgIH0gZWxzZSBpZiAoaXNLZXlQcmVzc2VkKEtFWVMuZW50ZXIsIGV2ZW50KSkge1xuICAgICAgdGhpcy5jb250ZW50ICs9ICdcXG4nO1xuICAgIH0gZWxzZSBpZiAoaXNLZXlQcmVzc2VkKEtFWVMuYmFja3NwYWNlLCBldmVudCkpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5zbGljZSgwLCAtMSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dFB1YlN1Yi5wdWJsaXNoKHtcbiAgICAgIGV2ZW50LFxuICAgICAgdGV4dEVkaXRvcjogdGhpcyxcbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIGF0dGFjaEtleWJvYXJkTGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLmlzTGlzdGVuZXJzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzTGlzdGVuZXJzQXR0YWNoZWQgPSB0cnVlO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd24pO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXRhY2hLZXlib2FyZExpc3RlbmVycygpIHtcbiAgICB0aGlzLmlzTGlzdGVuZXJzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93QXQocG9zaXRpb246IFZlY3RvciwgZGltZW5zaW9ucz86IERpbWVuc2lvbnMpIHtcbiAgICBpZiAoZGltZW5zaW9ucykge1xuICAgICAgdGhpcy53aWR0aCA9IGRpbWVuc2lvbnMud2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3duQXQgPSBwb3NpdGlvbjtcbiAgICB0aGlzLnRleHRCbG9ja0xpbmVzID0gdGhpcy5jcmVhdGVUZXh0QmxvY2tMaW5lcygpO1xuICAgIHRoaXMuYXR0YWNoS2V5Ym9hcmRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlKCkge1xuICAgIHRoaXMuX3Nob3duQXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZXRhY2hLZXlib2FyZExpc3RlbmVycygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi9tYXRoL3JlY3RhbmdsZS9SZWN0YW5nbGUnO1xuaW1wb3J0IHsgZ2V0SWRHZW5lcmF0b3IgfSBmcm9tICcuLi91dGlscy9pZEdlbmVyYXRvcic7XG5pbXBvcnQgeyBSZWxhdGlvbiB9IGZyb20gJy4vUmVsYXRpb24nO1xuXG5jb25zdCBnZW5lcmF0ZUlkID0gZ2V0SWRHZW5lcmF0b3IoKTtcblxuZXhwb3J0IGNsYXNzIEJveCBleHRlbmRzIFJlY3RhbmdsZSB7XG4gIHByaXZhdGUgX2lkID0gZ2VuZXJhdGVJZCgpO1xuXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgcHVibGljIGNvbnRlbnQgPSAnJztcbiAgcHVibGljIHJlbGF0aW9uczogUmVsYXRpb25bXSA9IFtdO1xufVxuIiwiaW1wb3J0IHsgZ2V0SWRHZW5lcmF0b3IgfSBmcm9tICcuLi91dGlscy9pZEdlbmVyYXRvcic7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuL0JveCc7XG5cbmNvbnN0IGdlbmVyYXRlSWQgPSBnZXRJZEdlbmVyYXRvcigpO1xuXG5leHBvcnQgY2xhc3MgUmVsYXRpb24ge1xuICBwcml2YXRlIF9pZCA9IGdlbmVyYXRlSWQoKTtcblxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIHB1YmxpYyBmcm9tQm94OiBCb3g7XG4gIHB1YmxpYyB0b0JveDogQm94O1xuXG4gIGNvbnN0cnVjdG9yKGZyb21Cb3g6IEJveCwgdG9Cb3g6IEJveCkge1xuICAgIHRoaXMuZnJvbUJveCA9IGZyb21Cb3g7XG4gICAgdGhpcy50b0JveCA9IHRvQm94O1xuICB9XG59XG4iLCIvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTY1MDAxMlxuZXhwb3J0IGNvbnN0IG1hcCA9ICh2YWx1ZTogbnVtYmVyLCBzdGFydDE6IG51bWJlciwgc3RvcDE6IG51bWJlciwgc3RhcnQyOiBudW1iZXIsIHN0b3AyOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gc3RhcnQyICsgKChzdG9wMiAtIHN0YXJ0MikgKiAodmFsdWUgLSBzdGFydDEpKSAvIChzdG9wMSAtIHN0YXJ0MSk7XG59O1xuIiwiaW1wb3J0IHsgTWF0aEVudGl0eSB9IGZyb20gJy4uL3R5cGVzJztcbi8vIGh0dHBzOi8vZ2xtYXRyaXgubmV0L2RvY3MvbW9kdWxlLW1hdDJkLmh0bWxcbmltcG9ydCB7IEJhc2VNYXRyaXgyZCwgUmF3TWF0cml4MmQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIE1hdHJpeDJkIGltcGxlbWVudHMgQmFzZU1hdHJpeDJkLCBNYXRoRW50aXR5PE1hdHJpeDJkPiB7XG4gIHB1YmxpYyByYXdNYXRyaXgyZDogUmF3TWF0cml4MmQ7XG5cbiAgY29uc3RydWN0b3IoeyByYXdNYXRyaXgyZDogW2EsIGIsIGMsIGQsIHR4LCB0eV0gfTogQmFzZU1hdHJpeDJkID0geyByYXdNYXRyaXgyZDogWzEsIDAsIDAsIDEsIDAsIDBdIH0pIHtcbiAgICB0aGlzLnJhd01hdHJpeDJkID0gW2EsIGIsIGMsIGQsIHR4LCB0eV07XG4gIH1cblxuICBwdWJsaWMgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRyaXgyZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGcm9tKHsgcmF3TWF0cml4MmQgfTogQmFzZU1hdHJpeDJkKSB7XG4gICAgdGhpcy5yYXdNYXRyaXgyZCA9IHJhd01hdHJpeDJkO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgdG9TdHJpbmcobGltaXRlZDogYm9vbGVhbikge1xuICAgIGNvbnN0IGEgPSBsaW1pdGVkID8gdGhpcy5yYXdNYXRyaXgyZFswXS50b0ZpeGVkKDEpIDogdGhpcy5yYXdNYXRyaXgyZFswXTtcbiAgICBjb25zdCBiID0gbGltaXRlZCA/IHRoaXMucmF3TWF0cml4MmRbMV0udG9GaXhlZCgxKSA6IHRoaXMucmF3TWF0cml4MmRbMV07XG4gICAgY29uc3QgYyA9IGxpbWl0ZWQgPyB0aGlzLnJhd01hdHJpeDJkWzJdLnRvRml4ZWQoMSkgOiB0aGlzLnJhd01hdHJpeDJkWzJdO1xuICAgIGNvbnN0IGQgPSBsaW1pdGVkID8gdGhpcy5yYXdNYXRyaXgyZFszXS50b0ZpeGVkKDEpIDogdGhpcy5yYXdNYXRyaXgyZFszXTtcbiAgICBjb25zdCB0eCA9IGxpbWl0ZWQgPyB0aGlzLnJhd01hdHJpeDJkWzRdLnRvRml4ZWQoMSkgOiB0aGlzLnJhd01hdHJpeDJkWzRdO1xuICAgIGNvbnN0IHR5ID0gbGltaXRlZCA/IHRoaXMucmF3TWF0cml4MmRbNV0udG9GaXhlZCgxKSA6IHRoaXMucmF3TWF0cml4MmRbNV07XG5cbiAgICByZXR1cm4gYCR7YX06JHtifToke2N9OiR7ZH06JHt0eH06JHt0eX1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlVmVjdG9yIH0gZnJvbSAnLi4vdmVjdG9ycy90eXBlcyc7XG5pbXBvcnQgeyBCYXNlTWF0cml4MmQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGZyb21TY2FsZSA9ICh2ZWN0b3I6IEJhc2VWZWN0b3IpOiBCYXNlTWF0cml4MmQgPT4gKHtcbiAgcmF3TWF0cml4MmQ6IFt2ZWN0b3IueCwgMCwgMCwgdmVjdG9yLnksIDAsIDBdLFxufSk7XG4iLCJpbXBvcnQgeyBCYXNlVmVjdG9yIH0gZnJvbSAnLi4vdmVjdG9ycy90eXBlcyc7XG5pbXBvcnQgeyBCYXNlTWF0cml4MmQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGZyb21UcmFuc2xhdGlvbiA9ICh2ZWN0b3I6IEJhc2VWZWN0b3IpOiBCYXNlTWF0cml4MmQgPT4gKHtcbiAgcmF3TWF0cml4MmQ6IFsxLCAwLCAwLCAxLCB2ZWN0b3IueCwgdmVjdG9yLnldLFxufSk7XG4iLCJpbXBvcnQgeyBCYXNlTWF0cml4MmQgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gVE9ETyBmaWd1cmUgb3V0IG1hdGhcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90b2ppL2dsLW1hdHJpeC9ibG9iLzg5NjJiMmU3NzI3NTk0MDIyZTU5ZTQ4ZTYwNTA0OWM2OTQwM2RhNjAvc3JjL21hdDJkLmpzI0wxODJcbmV4cG9ydCBjb25zdCBtdWx0aXBseSA9IChcbiAgbWF0cml4QTogQmFzZU1hdHJpeDJkLFxuICBtYXRyaXhCOiBCYXNlTWF0cml4MmQsXG4gIGRlc3RpbmF0aW9uOiBCYXNlTWF0cml4MmQgPSBtYXRyaXhBLFxuKTogQmFzZU1hdHJpeDJkID0+IHtcbiAgY29uc3QgeyByYXdNYXRyaXgyZDogcmF3TWF0cml4MmRBIH0gPSBtYXRyaXhBO1xuICBjb25zdCB7IHJhd01hdHJpeDJkOiByYXdNYXRyaXgyZEIgfSA9IG1hdHJpeEI7XG4gIGNvbnN0IHsgcmF3TWF0cml4MmQ6IHJhd01hdHJpeERlc3RpbmF0aW9uIH0gPSBkZXN0aW5hdGlvbjtcblxuICBjb25zdCBhMCA9IHJhd01hdHJpeDJkQVswXTtcbiAgY29uc3QgYTEgPSByYXdNYXRyaXgyZEFbMV07XG4gIGNvbnN0IGEyID0gcmF3TWF0cml4MmRBWzJdO1xuICBjb25zdCBhMyA9IHJhd01hdHJpeDJkQVszXTtcbiAgY29uc3QgYTQgPSByYXdNYXRyaXgyZEFbNF07XG4gIGNvbnN0IGE1ID0gcmF3TWF0cml4MmRBWzVdO1xuXG4gIGNvbnN0IGIwID0gcmF3TWF0cml4MmRCWzBdO1xuICBjb25zdCBiMSA9IHJhd01hdHJpeDJkQlsxXTtcbiAgY29uc3QgYjIgPSByYXdNYXRyaXgyZEJbMl07XG4gIGNvbnN0IGIzID0gcmF3TWF0cml4MmRCWzNdO1xuICBjb25zdCBiNCA9IHJhd01hdHJpeDJkQls0XTtcbiAgY29uc3QgYjUgPSByYXdNYXRyaXgyZEJbNV07XG5cbiAgcmF3TWF0cml4RGVzdGluYXRpb25bMF0gPSBhMCAqIGIwICsgYTIgKiBiMTtcbiAgcmF3TWF0cml4RGVzdGluYXRpb25bMV0gPSBhMSAqIGIwICsgYTMgKiBiMTtcbiAgcmF3TWF0cml4RGVzdGluYXRpb25bMl0gPSBhMCAqIGIyICsgYTIgKiBiMztcbiAgcmF3TWF0cml4RGVzdGluYXRpb25bM10gPSBhMSAqIGIyICsgYTMgKiBiMztcbiAgcmF3TWF0cml4RGVzdGluYXRpb25bNF0gPSBhMCAqIGI0ICsgYTIgKiBiNSArIGE0O1xuICByYXdNYXRyaXhEZXN0aW5hdGlvbls1XSA9IGExICogYjQgKyBhMyAqIGI1ICsgYTU7XG5cbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcbiIsImltcG9ydCB7IG1hcCB9IGZyb20gJy4uL21hcCc7XG5pbXBvcnQgeyBtdWx0aXBseSBhcyBtdWx0aXBseVZlY3RvciB9IGZyb20gJy4uL3ZlY3RvcnMvbXVsdGlwbHknO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vdmVjdG9ycy9WZWN0b3InO1xuaW1wb3J0IHsgZnJvbVNjYWxlIH0gZnJvbSAnLi9mcm9tU2NhbGUnO1xuaW1wb3J0IHsgZnJvbVRyYW5zbGF0aW9uIH0gZnJvbSAnLi9mcm9tVHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgbXVsdGlwbHkgfSBmcm9tICcuL211bHRpcGx5JztcbmltcG9ydCB7IEJhc2VNYXRyaXgyZCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3Qgem9vbVRvUG9pbnQgPSAobWF0cml4OiBCYXNlTWF0cml4MmQsIHBvaW50OiBWZWN0b3IsIGRlbHRhOiBWZWN0b3IpOiBCYXNlTWF0cml4MmQgPT4ge1xuICAvLyAxIC0gem9vbSBpbiwgLTEgLSB6b29tIG91dFxuICBjb25zdCB6b29tRGlyZWN0aW9uID0gLTEgKiBNYXRoLnNpZ24oZGVsdGEueSk7XG4gIGNvbnN0IG9yaWdpbmFsUmF3TWF0cml4Q29weSA9IFsuLi5tYXRyaXgucmF3TWF0cml4MmRdO1xuICBjb25zdCBtYXhab29tTGV2ZWwgPSA0O1xuICBjb25zdCBtaW5ab29tTGV2ZWwgPSAwLjI7XG4gIGNvbnN0IHpvb21JbnRlbnNpdHkgPSBtYXAoTWF0aC5hYnMoZGVsdGEueSksIDAsIDUwLCAwLCAwLjEpOyAvLyAwLjA1O1xuICBjb25zdCB6b29tUmVsYXRpdmVEaWZmZXJlbmNlID0gem9vbURpcmVjdGlvbiAqIHpvb21JbnRlbnNpdHk7XG5cbiAgY29uc3QgZnJvbVBvaW50ID0gcG9pbnQ7XG4gIGNvbnN0IHRvUG9pbnQgPSBtdWx0aXBseVZlY3Rvcihmcm9tUG9pbnQuY2xvbmUoKSwgbmV3IFZlY3Rvcih7IHg6IC0xLCB5OiAtMSB9KSk7XG4gIGNvbnN0IHJlbGF0aXZlWm9vbSA9IG5ldyBWZWN0b3IoeyB4OiAxICsgem9vbVJlbGF0aXZlRGlmZmVyZW5jZSwgeTogMSArIHpvb21SZWxhdGl2ZURpZmZlcmVuY2UgfSk7XG5cbiAgY29uc3QgdG9Qb2ludE1hdHJpeCA9IGZyb21UcmFuc2xhdGlvbih0b1BvaW50KTtcbiAgY29uc3Qgc2NhbGVNYXRyaXggPSBmcm9tU2NhbGUocmVsYXRpdmVab29tKTtcbiAgY29uc3QgZnJvbVBvaW50TWF0cml4ID0gZnJvbVRyYW5zbGF0aW9uKGZyb21Qb2ludCk7XG5cbiAgLy8gaHR0cHM6Ly9tZWRpdW0uY29tL0BiZW5qYW1pbi5ib3R0by96b29taW5nLWF0LXRoZS1tb3VzZS1jb29yZGluYXRlcy13aXRoLWFmZmluZS10cmFuc2Zvcm1hdGlvbnMtODZlNzMxMmZkNTBiXG4gIG1hdHJpeCA9IG11bHRpcGx5KHRvUG9pbnRNYXRyaXgsIG1hdHJpeCwgbWF0cml4KTtcbiAgbWF0cml4ID0gbXVsdGlwbHkoc2NhbGVNYXRyaXgsIG1hdHJpeCwgbWF0cml4KTtcbiAgbWF0cml4ID0gbXVsdGlwbHkoZnJvbVBvaW50TWF0cml4LCBtYXRyaXgsIG1hdHJpeCk7XG5cbiAgY29uc3QgW3pvb21YLCBfYiwgX2MsIHpvb21ZXSA9IG1hdHJpeC5yYXdNYXRyaXgyZDtcblxuICBpZiAoem9vbVggPiBtYXhab29tTGV2ZWwgfHwgem9vbVggPCBtaW5ab29tTGV2ZWwgfHwgem9vbVkgPiBtYXhab29tTGV2ZWwgfHwgem9vbVkgPCBtaW5ab29tTGV2ZWwpIHtcbiAgICBtYXRyaXgucmF3TWF0cml4MmRbMF0gPSBvcmlnaW5hbFJhd01hdHJpeENvcHlbMF07XG4gICAgbWF0cml4LnJhd01hdHJpeDJkWzFdID0gb3JpZ2luYWxSYXdNYXRyaXhDb3B5WzFdO1xuICAgIG1hdHJpeC5yYXdNYXRyaXgyZFsyXSA9IG9yaWdpbmFsUmF3TWF0cml4Q29weVsyXTtcbiAgICBtYXRyaXgucmF3TWF0cml4MmRbM10gPSBvcmlnaW5hbFJhd01hdHJpeENvcHlbM107XG4gICAgbWF0cml4LnJhd01hdHJpeDJkWzRdID0gb3JpZ2luYWxSYXdNYXRyaXhDb3B5WzRdO1xuICAgIG1hdHJpeC5yYXdNYXRyaXgyZFs1XSA9IG9yaWdpbmFsUmF3TWF0cml4Q29weVs1XTtcbiAgfVxuXG4gIHJldHVybiBtYXRyaXg7XG59O1xuIiwiaW1wb3J0IHsgTWF0aEVudGl0eSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IEJhc2VWZWN0b3IgfSBmcm9tICcuLi92ZWN0b3JzL3R5cGVzJztcbmltcG9ydCB7IEJhc2VSZWN0YW5nbGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBpbXBsZW1lbnRzIEJhc2VSZWN0YW5nbGUsIE1hdGhFbnRpdHk8UmVjdGFuZ2xlPiB7XG4gIHB1YmxpYyB4OiBudW1iZXI7XG4gIHB1YmxpYyB5OiBudW1iZXI7XG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG5cbiAgcHVibGljIHN0YXRpYyBmcm9tUG9pbnRzKHN0YXJ0OiBCYXNlVmVjdG9yLCBlbmQ6IEJhc2VWZWN0b3IpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh7XG4gICAgICB4OiBzdGFydC54LFxuICAgICAgeTogc3RhcnQueSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhlbmQueCAtIHN0YXJ0LngpLFxuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhlbmQueSAtIHN0YXJ0LnkpLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH06IEJhc2VSZWN0YW5nbGUgPSB7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBwdWJsaWMgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRnJvbShyZWN0YW5nbGU6IEJhc2VSZWN0YW5nbGUpIHtcbiAgICB0aGlzLnggPSByZWN0YW5nbGUueDtcbiAgICB0aGlzLnkgPSByZWN0YW5nbGUueTtcbiAgICB0aGlzLndpZHRoID0gcmVjdGFuZ2xlLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gcmVjdGFuZ2xlLmhlaWdodDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nKGxpbWl0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgeCA9IGxpbWl0ZWQgPyB0aGlzLngudG9GaXhlZCgxKSA6IHRoaXMueDtcbiAgICBjb25zdCB5ID0gbGltaXRlZCA/IHRoaXMueS50b0ZpeGVkKDEpIDogdGhpcy55O1xuICAgIGNvbnN0IHdpZHRoID0gbGltaXRlZCA/IHRoaXMud2lkdGgudG9GaXhlZCgxKSA6IHRoaXMud2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gbGltaXRlZCA/IHRoaXMuaGVpZ2h0LnRvRml4ZWQoMSkgOiB0aGlzLmhlaWdodDtcblxuICAgIHJldHVybiBgJHt4fToke3l9OiR7d2lkdGh9OiR7aGVpZ2h0fWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IHN1YnRyYWN0IH0gZnJvbSAnLi4vdmVjdG9ycy9zdWJ0cmFjdCc7XG5pbXBvcnQgeyBCYXNlUmVjdGFuZ2xlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBjZW50cmFsaXplID0gPFQgZXh0ZW5kcyBCYXNlUmVjdGFuZ2xlPihyZWN0YW5nbGU6IFQpOiBUID0+IHtcbiAgY29uc3QgY2VudHJhbGl6ZVZlY3RvciA9IHtcbiAgICB4OiByZWN0YW5nbGUud2lkdGggLyAyLFxuICAgIHk6IHJlY3RhbmdsZS5oZWlnaHQgLyAyLFxuICB9O1xuXG4gIHN1YnRyYWN0KHJlY3RhbmdsZSwgY2VudHJhbGl6ZVZlY3Rvcik7XG5cbiAgcmV0dXJuIHJlY3RhbmdsZTtcbn07XG4iLCJpbXBvcnQgeyB0b3VjaGVzIH0gZnJvbSAnLi90b3VjaGVzJztcbmltcG9ydCB7IEJhc2VSZWN0YW5nbGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdHMoXG4gIHJlY3RhbmdsZUE6IEJhc2VSZWN0YW5nbGUsXG4gIHJlY3RhbmdsZUI6IEJhc2VSZWN0YW5nbGUsXG4gIG1vZGU6ICdjZW50ZXInIHwgJ2NvdmVyJyB8ICd0b3VjaCcgPSAndG91Y2gnLFxuKTogYm9vbGVhbiB7XG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgJ2NlbnRlcic6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuICAgIGNhc2UgJ2NvdmVyJzoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG4gICAgY2FzZSAndG91Y2gnOiB7XG4gICAgICByZXR1cm4gdG91Y2hlcyhyZWN0YW5nbGVBLCByZWN0YW5nbGVCKTtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2VWZWN0b3IgfSBmcm9tICcuLi92ZWN0b3JzL3R5cGVzJztcbmltcG9ydCB7IEJhc2VSZWN0YW5nbGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGlzUG9pbnRJbnNpZGUgPSAocG9pbnQ6IEJhc2VWZWN0b3IsIHJlY3RhbmdsZTogQmFzZVJlY3RhbmdsZSk6IGJvb2xlYW4gPT4ge1xuICBpZiAocG9pbnQueCA8IHJlY3RhbmdsZS54IHx8IHBvaW50LnggPiByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwb2ludC55IDwgcmVjdGFuZ2xlLnkgfHwgcG9pbnQueSA+IHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsImltcG9ydCB7IGFkZCB9IGZyb20gJy4uL3ZlY3RvcnMvYWRkJztcbmltcG9ydCB7IHN1YnRyYWN0IH0gZnJvbSAnLi4vdmVjdG9ycy9zdWJ0cmFjdCc7XG5pbXBvcnQgeyBCYXNlVmVjdG9yIH0gZnJvbSAnLi4vdmVjdG9ycy90eXBlcyc7XG5pbXBvcnQgeyBCYXNlUmVjdGFuZ2xlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBtb3ZlID0gPFQgZXh0ZW5kcyBCYXNlUmVjdGFuZ2xlPihyZWN0YW5nbGU6IFQsIHZlY3RvcjogQmFzZVZlY3RvciwgZGlyZWN0aW9uOiAxIHwgLTEgPSAxKTogVCA9PiB7XG4gIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcbiAgICBhZGQocmVjdGFuZ2xlLCB2ZWN0b3IpO1xuICB9IGVsc2Uge1xuICAgIHN1YnRyYWN0KHJlY3RhbmdsZSwgdmVjdG9yKTtcbiAgfVxuXG4gIHJldHVybiByZWN0YW5nbGU7XG59O1xuIiwiaW1wb3J0IHsgbXVsdGlwbHkgfSBmcm9tICcuLi92ZWN0b3JzL211bHRpcGx5JztcbmltcG9ydCB7IEJhc2VWZWN0b3IgfSBmcm9tICcuLi92ZWN0b3JzL3R5cGVzJztcbmltcG9ydCB7IHNjYWxlIH0gZnJvbSAnLi9zY2FsZSc7XG5pbXBvcnQgeyBCYXNlUmVjdGFuZ2xlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBtdWx0aXBseUJ5VmVjdG9yID0gPFQgZXh0ZW5kcyBCYXNlUmVjdGFuZ2xlPihyZWN0YW5nbGU6IFQsIHZlY3RvcjogQmFzZVZlY3Rvcik6IFQgPT4ge1xuICBzY2FsZShyZWN0YW5nbGUsIHZlY3Rvcik7XG4gIG11bHRpcGx5KHJlY3RhbmdsZSwgdmVjdG9yKTtcblxuICByZXR1cm4gcmVjdGFuZ2xlO1xufTtcbiIsImltcG9ydCB7IEJhc2VWZWN0b3IgfSBmcm9tICcuLi92ZWN0b3JzL3R5cGVzJztcbmltcG9ydCB7IEJhc2VSZWN0YW5nbGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHNjYWxlID0gPFQgZXh0ZW5kcyBCYXNlUmVjdGFuZ2xlPihyZWN0YW5nbGU6IFQsIHZlY3RvcjogQmFzZVZlY3Rvcik6IFQgPT4ge1xuICByZWN0YW5nbGUud2lkdGggKj0gdmVjdG9yLng7XG4gIHJlY3RhbmdsZS5oZWlnaHQgKj0gdmVjdG9yLnk7XG5cbiAgcmV0dXJuIHJlY3RhbmdsZTtcbn07XG4iLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9EYW5pZWwtSHVnL2Q3OTg0ZDgyYjU4ZDZkMjY3OWEwODdkODk2Y2EzZDJiXG5cbmltcG9ydCB7IEJhc2VSZWN0YW5nbGUgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gQ2hlY2sgaWYgcmVjdGFuZ2xlIGEgdG91Y2hlcyByZWN0YW5nbGUgYi5cbi8vIEVhY2ggb2JqZWN0IChhIGFuZCBiKSBzaG91bGQgaGF2ZSAyIHByb3BlcnRpZXMgdG8gcmVwcmVzZW50IHRoZVxuLy8gdG9wLWxlZnQgY29ybmVyICh4MSwgeTEpIGFuZCAyIGZvciB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciAoeDIsIHkyKS5cbmV4cG9ydCBmdW5jdGlvbiB0b3VjaGVzKHJlY3RhbmdsZUE6IEJhc2VSZWN0YW5nbGUsIHJlY3RhbmdsZUI6IEJhc2VSZWN0YW5nbGUpOiBib29sZWFuIHtcbiAgLy8gSGFzIGhvcml6b250YWwgZ2FwXG4gIGlmIChyZWN0YW5nbGVBLnggPiByZWN0YW5nbGVCLnggKyByZWN0YW5nbGVCLndpZHRoIHx8IHJlY3RhbmdsZUIueCA+IHJlY3RhbmdsZUEueCArIHJlY3RhbmdsZUEud2lkdGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBIYXMgdmVydGljYWwgZ2FwXG4gIGlmIChyZWN0YW5nbGVBLnkgPiByZWN0YW5nbGVCLnkgKyByZWN0YW5nbGVCLmhlaWdodCB8fCByZWN0YW5nbGVCLnkgPiByZWN0YW5nbGVBLnkgKyByZWN0YW5nbGVBLmhlaWdodCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgTWF0aEVudGl0eSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IEJhc2VWZWN0b3IgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIFZlY3RvciBpbXBsZW1lbnRzIEJhc2VWZWN0b3IsIE1hdGhFbnRpdHk8VmVjdG9yPiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHsgeCwgeSB9OiBCYXNlVmVjdG9yID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfSxcbiAgKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgcHVibGljIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZyb20odmVjdG9yOiBCYXNlVmVjdG9yKSB7XG4gICAgdGhpcy54ID0gdmVjdG9yLng7XG4gICAgdGhpcy55ID0gdmVjdG9yLnk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZyhsaW1pdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHggPSBsaW1pdGVkID8gdGhpcy54LnRvRml4ZWQoMSkgOiB0aGlzLng7XG4gICAgY29uc3QgeSA9IGxpbWl0ZWQgPyB0aGlzLnkudG9GaXhlZCgxKSA6IHRoaXMueTtcblxuICAgIHJldHVybiBgJHt4fToke3l9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZVZlY3RvciB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgYWRkID0gPFQgZXh0ZW5kcyBCYXNlVmVjdG9yPih2ZWN0b3JBOiBULCB2ZWN0b3JCOiBCYXNlVmVjdG9yKTogVCA9PiB7XG4gIHZlY3RvckEueCArPSB2ZWN0b3JCLng7XG4gIHZlY3RvckEueSArPSB2ZWN0b3JCLnk7XG5cbiAgcmV0dXJuIHZlY3RvckE7XG59O1xuIiwiaW1wb3J0IHsgQmFzZVZlY3RvciB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgY2VudGVyID0gPFQgZXh0ZW5kcyBCYXNlVmVjdG9yPihmcm9tOiBULCB0bzogQmFzZVZlY3Rvcik6IFQgPT4ge1xuICBmcm9tLnggPSBmcm9tLnggKyAodG8ueCAtIGZyb20ueCkgLyAyO1xuICBmcm9tLnkgPSBmcm9tLnkgKyAodG8ueSAtIGZyb20ueSkgLyAyO1xuXG4gIHJldHVybiBmcm9tO1xufTtcbiIsImltcG9ydCB7IEJhc2VWZWN0b3IgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGRpdmlkZSA9IDxUIGV4dGVuZHMgQmFzZVZlY3Rvcj4odmVjdG9yQTogVCwgdmVjdG9yQjogQmFzZVZlY3Rvcik6IFQgPT4ge1xuICB2ZWN0b3JBLnggLz0gdmVjdG9yQi54O1xuICB2ZWN0b3JBLnkgLz0gdmVjdG9yQi55O1xuXG4gIHJldHVybiB2ZWN0b3JBO1xufTtcbiIsImltcG9ydCB7IEJhc2VWZWN0b3IgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IG11bHRpcGx5ID0gPFQgZXh0ZW5kcyBCYXNlVmVjdG9yPih2ZWN0b3JBOiBULCB2ZWN0b3JCOiBCYXNlVmVjdG9yKTogVCA9PiB7XG4gIHZlY3RvckEueCAqPSB2ZWN0b3JCLng7XG4gIHZlY3RvckEueSAqPSB2ZWN0b3JCLnk7XG5cbiAgcmV0dXJuIHZlY3RvckE7XG59O1xuIiwiaW1wb3J0IHsgQmFzZVZlY3RvciB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3Qgc29ydCA9ICh2ZWN0b3JBOiBCYXNlVmVjdG9yLCB2ZWN0b3JCOiBCYXNlVmVjdG9yKTogW0Jhc2VWZWN0b3IsIEJhc2VWZWN0b3JdID0+IHtcbiAgbGV0IHRvcExlZnQ6IEJhc2VWZWN0b3IgfCB1bmRlZmluZWQ7XG4gIGxldCB0b3BSaWdodDogQmFzZVZlY3RvciB8IHVuZGVmaW5lZDtcbiAgbGV0IGJvdHRvbUxlZnQ6IEJhc2VWZWN0b3IgfCB1bmRlZmluZWQ7XG4gIGxldCBib3R0b21SaWdodDogQmFzZVZlY3RvciB8IHVuZGVmaW5lZDtcblxuICBpZiAoaXNGaXJzdFRvcExlZnQodmVjdG9yQSwgdmVjdG9yQikpIHtcbiAgICB0b3BMZWZ0ID0gdmVjdG9yQTtcbiAgfSBlbHNlIGlmIChpc0ZpcnN0VG9wTGVmdCh2ZWN0b3JCLCB2ZWN0b3JBKSkge1xuICAgIHRvcExlZnQgPSB2ZWN0b3JCO1xuICB9XG5cbiAgaWYgKGlzRmlyc3RCb3R0b21SaWdodCh2ZWN0b3JBLCB2ZWN0b3JCKSkge1xuICAgIGJvdHRvbVJpZ2h0ID0gdmVjdG9yQTtcbiAgfSBlbHNlIGlmIChpc0ZpcnN0Qm90dG9tUmlnaHQodmVjdG9yQiwgdmVjdG9yQSkpIHtcbiAgICBib3R0b21SaWdodCA9IHZlY3RvckI7XG4gIH1cblxuICBpZiAodG9wTGVmdCAmJiBib3R0b21SaWdodCkge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHg6IHRvcExlZnQueCxcbiAgICAgICAgeTogdG9wTGVmdC55LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgeDogYm90dG9tUmlnaHQueCxcbiAgICAgICAgeTogYm90dG9tUmlnaHQueSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIGlmIChpc0ZpcnN0VG9wUmlnaHQodmVjdG9yQSwgdmVjdG9yQikpIHtcbiAgICB0b3BSaWdodCA9IHZlY3RvckE7XG4gIH0gZWxzZSBpZiAoaXNGaXJzdFRvcFJpZ2h0KHZlY3RvckIsIHZlY3RvckEpKSB7XG4gICAgdG9wUmlnaHQgPSB2ZWN0b3JCO1xuICB9XG5cbiAgaWYgKGlzRmlyc3RCb3R0b21MZWZ0KHZlY3RvckEsIHZlY3RvckIpKSB7XG4gICAgYm90dG9tTGVmdCA9IHZlY3RvckE7XG4gIH0gZWxzZSBpZiAoaXNGaXJzdEJvdHRvbUxlZnQodmVjdG9yQiwgdmVjdG9yQSkpIHtcbiAgICBib3R0b21MZWZ0ID0gdmVjdG9yQjtcbiAgfVxuXG4gIGlmICghdG9wTGVmdCAmJiB0b3BSaWdodCAmJiBib3R0b21MZWZ0KSB7XG4gICAgdG9wTGVmdCA9IHtcbiAgICAgIHg6IGJvdHRvbUxlZnQueCxcbiAgICAgIHk6IHRvcFJpZ2h0LnksXG4gICAgfTtcbiAgfVxuXG4gIGlmICghYm90dG9tUmlnaHQgJiYgdG9wUmlnaHQgJiYgYm90dG9tTGVmdCkge1xuICAgIGJvdHRvbVJpZ2h0ID0ge1xuICAgICAgeDogdG9wUmlnaHQueCxcbiAgICAgIHk6IGJvdHRvbUxlZnQueSxcbiAgICB9O1xuICB9XG5cbiAgaWYgKCF0b3BMZWZ0IHx8ICFib3R0b21SaWdodCkge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHg6IHZlY3RvckEueCxcbiAgICAgICAgeTogdmVjdG9yQS55LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgeDogdmVjdG9yQi54LFxuICAgICAgICB5OiB2ZWN0b3JCLnksXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gW3RvcExlZnQsIGJvdHRvbVJpZ2h0XTtcbn07XG5cbmZ1bmN0aW9uIGlzRmlyc3RUb3BMZWZ0KHZlY3RvckE6IEJhc2VWZWN0b3IsIHZlY3RvckI6IEJhc2VWZWN0b3IpIHtcbiAgcmV0dXJuIHZlY3RvckEueCA8IHZlY3RvckIueCAmJiB2ZWN0b3JBLnkgPCB2ZWN0b3JCLnk7XG59XG5cbmZ1bmN0aW9uIGlzRmlyc3RUb3BSaWdodCh2ZWN0b3JBOiBCYXNlVmVjdG9yLCB2ZWN0b3JCOiBCYXNlVmVjdG9yKSB7XG4gIHJldHVybiB2ZWN0b3JBLnggPiB2ZWN0b3JCLnggJiYgdmVjdG9yQS55IDwgdmVjdG9yQi55O1xufVxuXG5mdW5jdGlvbiBpc0ZpcnN0Qm90dG9tTGVmdCh2ZWN0b3JBOiBCYXNlVmVjdG9yLCB2ZWN0b3JCOiBCYXNlVmVjdG9yKSB7XG4gIHJldHVybiB2ZWN0b3JBLnggPCB2ZWN0b3JCLnggJiYgdmVjdG9yQS55ID4gdmVjdG9yQi55O1xufVxuXG5mdW5jdGlvbiBpc0ZpcnN0Qm90dG9tUmlnaHQodmVjdG9yQTogQmFzZVZlY3RvciwgdmVjdG9yQjogQmFzZVZlY3Rvcikge1xuICByZXR1cm4gdmVjdG9yQS54ID4gdmVjdG9yQi54ICYmIHZlY3RvckEueSA+IHZlY3RvckIueTtcbn1cbiIsImltcG9ydCB7IEJhc2VWZWN0b3IgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHN1YnRyYWN0ID0gPFQgZXh0ZW5kcyBCYXNlVmVjdG9yPih2ZWN0b3JBOiBULCB2ZWN0b3JCOiBCYXNlVmVjdG9yKTogVCA9PiB7XG4gIHZlY3RvckEueCAtPSB2ZWN0b3JCLng7XG4gIHZlY3RvckEueSAtPSB2ZWN0b3JCLnk7XG5cbiAgcmV0dXJuIHZlY3RvckE7XG59O1xuIiwiaW1wb3J0IHsgbW92ZSB9IGZyb20gJy4uL21hdGgvcmVjdGFuZ2xlL21vdmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnLi4vbWF0aC9yZWN0YW5nbGUvUmVjdGFuZ2xlJztcbmltcG9ydCB7IERpbWVuc2lvbnMgfSBmcm9tICcuLi9tYXRoL3JlY3RhbmdsZS90eXBlcyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcnMvVmVjdG9yJztcblxuZXhwb3J0IGVudW0gQ3Vyc29yVHlwZSB7XG4gIERlZmF1bHQgPSAnZGVmYXVsdCcsXG4gIEdyYWIgPSAnZ3JhYicsXG59XG5cbmV4cG9ydCB0eXBlIENsZWFyQXJlYU9wdGlvbnMgPSB7XG4gIGFyZWE6IFJlY3RhbmdsZTtcbiAgb2Zmc2V0PzogVmVjdG9yO1xufTtcblxuZXhwb3J0IHR5cGUgUmVjdGFuZ2xlT3B0aW9ucyA9IHtcbiAgZmlsbFN0eWxlPzogc3RyaW5nO1xuICBzdHJva2VTdHlsZT86IHN0cmluZztcbiAgbGluZVdpZHRoPzogbnVtYmVyO1xuICByZWN0YW5nbGU6IFJlY3RhbmdsZTtcbn07XG5cbmV4cG9ydCB0eXBlIExpbmVPcHRpb25zID0ge1xuICBmcm9tOiBWZWN0b3I7XG4gIHRvOiBWZWN0b3I7XG4gIHN0cm9rZVN0eWxlPzogc3RyaW5nO1xuICBsaW5lV2lkdGg/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgRHJhd2VyIHtcbiAgcHVibGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgcHVibGljIGNsZWFyQXJlYSh7IGFyZWE6IF9hcmVhLCBvZmZzZXQgPSBuZXcgVmVjdG9yKCkgfTogQ2xlYXJBcmVhT3B0aW9ucykge1xuICAgIGNvbnN0IGFyZWEgPSBtb3ZlKF9hcmVhLmNsb25lKCksIG9mZnNldCk7XG5cbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KGFyZWEueCwgYXJlYS55LCBhcmVhLndpZHRoLCBhcmVhLmhlaWdodCk7XG4gIH1cblxuICBwdWJsaWMgcmVjdGFuZ2xlKHsgZmlsbFN0eWxlID0gJ3JlZCcsIGxpbmVXaWR0aCA9IDEsIHN0cm9rZVN0eWxlID0gJ3RyYW5zcGFyZW50JywgcmVjdGFuZ2xlIH06IFJlY3RhbmdsZU9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG5cbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jb250ZXh0LnJlY3QocmVjdGFuZ2xlLngsIHJlY3RhbmdsZS55LCByZWN0YW5nbGUud2lkdGgsIHJlY3RhbmdsZS5oZWlnaHQpO1xuICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgcHVibGljIGxpbmUoeyBmcm9tLCB0bywgc3Ryb2tlU3R5bGUgPSAnYmxhY2snLCBsaW5lV2lkdGggPSAxIH06IExpbmVPcHRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcblxuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmNvbnRleHQubW92ZVRvKGZyb20ueCwgZnJvbS55KTtcbiAgICB0aGlzLmNvbnRleHQubGluZVRvKHRvLngsIHRvLnkpO1xuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBjdXJzb3IodHlwZTogQ3Vyc29yVHlwZSkge1xuICAgIHRoaXMuY29udGV4dC5jYW52YXMuc3R5bGUuY3Vyc29yID0gdHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBkaW1lbnNpb25zKHsgd2lkdGgsIGhlaWdodCB9OiBEaW1lbnNpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29udGV4dC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgcHVibGljIHRyYW5zZm9ybShhOiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIsIGU6IG51bWJlciwgZjogbnVtYmVyKSB7XG4gICAgdGhpcy5jb250ZXh0LnRyYW5zZm9ybShhLCBiLCBjLCBkLCBlLCBmKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldFRyYW5zZm9ybSgpIHtcbiAgICB0aGlzLmNvbnRleHQucmVzZXRUcmFuc2Zvcm0oKTtcbiAgfVxuXG4gIHB1YmxpYyBzYXZlKCkge1xuICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG4gIH1cblxuICBwdWJsaWMgc2F2ZUFuZFJlc2V0KCkge1xuICAgIHRoaXMuc2F2ZSgpO1xuICAgIHRoaXMucmVzZXRUcmFuc2Zvcm0oKTtcbiAgfVxuXG4gIHB1YmxpYyByZXN0b3JlKCkge1xuICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFB1YlN1YiB9IGZyb20gJy4uL3V0aWxzL3B1YlN1Yi9QdWJTdWInO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICBwcml2YXRlIGxhc3RBbmltYXRpb24gPSBEYXRlLm5vdygpO1xuICBwcml2YXRlIGZwcyA9IDYwO1xuICBwcml2YXRlIGZwc0ludGVydmFsID0gMTAwMCAvIHRoaXMuZnBzO1xuXG4gIHByaXZhdGUgYW5pbWF0aW9uUHViU3ViID0gbmV3IFB1YlN1Yjx7IGRlbHRhOiBudW1iZXIgfT4oKTtcbiAgcHVibGljIGFuaW1hdGlvbkV2ZW50ID0gdGhpcy5hbmltYXRpb25QdWJTdWIuZXZlbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGFuaW1hdGUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZSgpKTtcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgY29uc3QgZWxhcHNlZCA9IG5vdyAtIHRoaXMubGFzdEFuaW1hdGlvbjtcblxuICAgIGlmIChlbGFwc2VkID4gdGhpcy5mcHNJbnRlcnZhbCkge1xuICAgICAgdGhpcy5sYXN0QW5pbWF0aW9uID0gbm93IC0gKGVsYXBzZWQgJSB0aGlzLmZwc0ludGVydmFsKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uUHViU3ViLnB1Ymxpc2goeyBkZWx0YTogZWxhcHNlZCB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFNlbGVjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0aW9uJztcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJy4vRHJhd2VyJztcblxudHlwZSBTZWxlY3Rpb25EcmF3ZXJEZXBlbmRlbmNpZXMgPSB7XG4gIGRyYXdlcjogRHJhd2VyO1xuICBzZWxlY3Rpb246IFNlbGVjdGlvbjtcbn07XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25EcmF3ZXIge1xuICBwcml2YXRlIGQ6IFNlbGVjdGlvbkRyYXdlckRlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBTZWxlY3Rpb25EcmF3ZXJEZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLmQgPSBkO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkQXJlYSgpIHtcbiAgICBpZiAoIXRoaXMuZC5zZWxlY3Rpb24uc2VsZWN0ZWRBcmVhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kLmRyYXdlci5zYXZlQW5kUmVzZXQoKTtcbiAgICB0aGlzLmQuZHJhd2VyLnJlY3RhbmdsZSh7XG4gICAgICByZWN0YW5nbGU6IHRoaXMuZC5zZWxlY3Rpb24uc2VsZWN0ZWRBcmVhLFxuICAgICAgc3Ryb2tlU3R5bGU6ICdyZ2IoMjIgMjIgMjIgLyA0MCUpJyxcbiAgICAgIGZpbGxTdHlsZTogJ3JnYigxMDEgMTQxIDI1NSAvIDQwJSknLFxuICAgIH0pO1xuICAgIHRoaXMuZC5kcmF3ZXIucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi9tYXRoL3JlY3RhbmdsZS9SZWN0YW5nbGUnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3JzL1ZlY3Rvcic7XG5pbXBvcnQgeyBjcmVhdGVUZXh0QmxvY2tMaW5lcywgbWVyZ2VXaXRoRGVmYXVsdFRleHRPcHRpb25zIH0gZnJvbSAnLi4vdXRpbHMvY2FudmFzVGV4dCc7XG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuL0RyYXdlcic7XG5pbXBvcnQgeyBUZXh0T3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBUZXh0SW5SZWN0YW5nbGVPcHRpb25zID0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHJlY3RhbmdsZTogUmVjdGFuZ2xlO1xufSAmIFBhcnRpYWw8VGV4dE9wdGlvbnM+O1xuXG5leHBvcnQgdHlwZSBUZXh0QWZ0ZXJQb2ludE9wdGlvbnMgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgcG9zaXRpb246IFZlY3Rvcjtcbn0gJiBQYXJ0aWFsPFRleHRPcHRpb25zPjtcblxuZXhwb3J0IHR5cGUgVGV4dExpbmVzT3B0aW9ucyA9IHtcbiAgbGluZXM6IHN0cmluZ1tdO1xuICBwb3NpdGlvbjogVmVjdG9yO1xufSAmIFBhcnRpYWw8VGV4dE9wdGlvbnM+O1xuXG50eXBlIFRleHREcmF3ZXJEZXBlbmRlbmNpZXMgPSB7XG4gIGRyYXdlcjogRHJhd2VyO1xufTtcblxuZXhwb3J0IGNsYXNzIFRleHREcmF3ZXIge1xuICBwcml2YXRlIGQ6IFRleHREcmF3ZXJEZXBlbmRlbmNpZXM7XG5cbiAgY29uc3RydWN0b3IoZDogVGV4dERyYXdlckRlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG4gIH1cblxuICBwdWJsaWMgdGV4dExpbmVzQWZ0ZXJQb2ludChvcHRpb25zOiBUZXh0TGluZXNPcHRpb25zKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgbGluZXMsIGZvbnRGYW1pbHkgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgeyBsaW5lSGVpZ2h0LCBwYWRkaW5nLCBmb250U2l6ZSB9ID0gbWVyZ2VXaXRoRGVmYXVsdFRleHRPcHRpb25zKG9wdGlvbnMpO1xuICAgIGNvbnN0IGxpbmVIZWlnaHRPZmZzZXQgPSBsaW5lSGVpZ2h0IC8gZm9udFNpemU7XG5cbiAgICB0aGlzLmQuZHJhd2VyLmNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmQuZHJhd2VyLmNvbnRleHQuZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Zm9udEZhbWlseX1gO1xuICAgIHRoaXMuZC5kcmF3ZXIuY29udGV4dC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgdGhpcy5kLmRyYXdlci5jb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuXG4gICAgbGV0IHRvcE9mZnNldCA9IDA7XG4gICAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgdGhpcy5kLmRyYXdlci5jb250ZXh0LmZpbGxUZXh0KGxpbmUsIHBvc2l0aW9uLnggKyBwYWRkaW5nLCBwb3NpdGlvbi55ICsgcGFkZGluZyArIGxpbmVIZWlnaHRPZmZzZXQgKyB0b3BPZmZzZXQpO1xuICAgICAgdG9wT2Zmc2V0ICs9IGxpbmVIZWlnaHQ7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdGV4dEluUmVjdGFuZ2xlKG9wdGlvbnM6IFRleHRJblJlY3RhbmdsZU9wdGlvbnMpIHtcbiAgICBjb25zdCB0ZXh0QmxvY2tMaW5lcyA9IGNyZWF0ZVRleHRCbG9ja0xpbmVzKHRoaXMuZC5kcmF3ZXIuY29udGV4dCwgb3B0aW9ucyk7XG4gICAgY29uc3QgeyByZWN0YW5nbGUgfSA9IG9wdGlvbnM7XG5cbiAgICB0aGlzLnRleHRMaW5lc0FmdGVyUG9pbnQoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIHBvc2l0aW9uOiByZWN0YW5nbGUsXG4gICAgICBsaW5lczogdGV4dEJsb2NrTGluZXMubGluZXMsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdGV4dEFmdGVyUG9pbnQob3B0aW9uczogVGV4dEFmdGVyUG9pbnRPcHRpb25zKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgdGV4dCB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB7IHBhZGRpbmcsIGZvbnRTaXplLCBmb250RmFtaWx5IH0gPSBtZXJnZVdpdGhEZWZhdWx0VGV4dE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICB0aGlzLmQuZHJhd2VyLmNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmQuZHJhd2VyLmNvbnRleHQuZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Zm9udEZhbWlseX1gO1xuICAgIHRoaXMuZC5kcmF3ZXIuY29udGV4dC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgdGhpcy5kLmRyYXdlci5jb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuXG4gICAgdGhpcy5kLmRyYXdlci5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHBvc2l0aW9uLnggKyBwYWRkaW5nLCBwb3NpdGlvbi55ICsgcGFkZGluZyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRleHRFZGl0b3IgfSBmcm9tICcuLi9jb21wb25lbnRzL1RleHRFZGl0b3InO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3JzL2FkZCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcnMvVmVjdG9yJztcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJy4vRHJhd2VyJztcbmltcG9ydCB7IFRleHREcmF3ZXIgfSBmcm9tICcuL1RleHREcmF3ZXInO1xuXG50eXBlIFRleHRFZGl0b3JEcmF3ZXJEZXBlbmRlbmNpZXMgPSB7XG4gIGRyYXdlcjogRHJhd2VyO1xuICB0ZXh0RHJhd2VyOiBUZXh0RHJhd2VyO1xuICB0ZXh0RWRpdG9yOiBUZXh0RWRpdG9yO1xufTtcblxuZXhwb3J0IGNsYXNzIFRleHRFZGl0b3JEcmF3ZXIge1xuICBwcml2YXRlIGQ6IFRleHRFZGl0b3JEcmF3ZXJEZXBlbmRlbmNpZXM7XG5cbiAgY29uc3RydWN0b3IoZDogVGV4dEVkaXRvckRyYXdlckRlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG4gIH1cblxuICBwcml2YXRlIGN1cnNvcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0ZXh0QmxvY2tNZXRyaWNzOiB7IGxhc3RMaW5lUG9zaXRpb24sIGxhc3RMaW5lV2lkdGggfSxcbiAgICAgIHRleHRPcHRpb25zOiB7IGxpbmVIZWlnaHQgfSxcbiAgICB9ID0gdGhpcy5kLnRleHRFZGl0b3IudGV4dEJsb2NrTGluZXM7XG5cbiAgICB0aGlzLmQuZHJhd2VyLmxpbmUoe1xuICAgICAgZnJvbTogYWRkKGxhc3RMaW5lUG9zaXRpb24uY2xvbmUoKSwgbmV3IFZlY3Rvcih7IHg6IGxhc3RMaW5lV2lkdGgsIHk6IDAgfSkpLFxuICAgICAgdG86IGFkZChcbiAgICAgICAgbGFzdExpbmVQb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgICBuZXcgVmVjdG9yKHtcbiAgICAgICAgICB4OiBsYXN0TGluZVdpZHRoLFxuICAgICAgICAgIHk6IGxpbmVIZWlnaHQsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdGV4dChzaG93bkF0OiBWZWN0b3IpIHtcbiAgICBjb25zdCB7IGxpbmVzIH0gPSB0aGlzLmQudGV4dEVkaXRvci50ZXh0QmxvY2tMaW5lcztcblxuICAgIHRoaXMuZC50ZXh0RHJhd2VyLnRleHRMaW5lc0FmdGVyUG9pbnQoe1xuICAgICAgbGluZXMsXG4gICAgICBwb3NpdGlvbjogc2hvd25BdCxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0ZXh0RWRpdG9yKCkge1xuICAgIGlmICghdGhpcy5kLnRleHRFZGl0b3Iuc2hvd25BdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3Vyc29yKCk7XG4gICAgdGhpcy50ZXh0KHRoaXMuZC50ZXh0RWRpdG9yLnNob3duQXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi9tYXRoL3JlY3RhbmdsZS9SZWN0YW5nbGUnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3JzL2FkZCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcnMvVmVjdG9yJztcbmltcG9ydCB7IFRleHRCbG9ja0xpbmVzLCBUZXh0T3B0aW9ucyB9IGZyb20gJy4uL3JlbmRlcmluZy90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIGNyZWF0ZVRleHRCbG9ja0xpbmVzT3B0aW9ucyA9IHtcbiAgdGV4dDogc3RyaW5nO1xuICByZWN0YW5nbGU6IFJlY3RhbmdsZTtcbn0gJiBPbWl0PFBhcnRpYWw8VGV4dE9wdGlvbnM+LCAnbGluZUhlaWdodCc+O1xuXG5leHBvcnQgY29uc3QgbWVyZ2VXaXRoRGVmYXVsdFRleHRPcHRpb25zID0gKHtcbiAgZm9udEZhbWlseSA9ICdSb2JvdG8nLFxuICBmb250U2l6ZSA9IDE0LFxuICBsaW5lSGVpZ2h0ID0gMTYsXG4gIHBhZGRpbmcgPSA1LFxufTogUGFydGlhbDxUZXh0T3B0aW9ucz4pOiBUZXh0T3B0aW9ucyA9PiAoe1xuICBmb250RmFtaWx5LFxuICBmb250U2l6ZSxcbiAgbGluZUhlaWdodCxcbiAgcGFkZGluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGV4dEJsb2NrTGluZXMgPSAoXG4gIGNhbnZhc0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgb3B0aW9uczogY3JlYXRlVGV4dEJsb2NrTGluZXNPcHRpb25zLFxuKTogVGV4dEJsb2NrTGluZXMgPT4ge1xuICBjb25zdCB0ZXh0T3B0aW9ucyA9IG1lcmdlV2l0aERlZmF1bHRUZXh0T3B0aW9ucyhvcHRpb25zKTtcbiAgY29uc3QgeyBmb250RmFtaWx5LCBmb250U2l6ZSwgcGFkZGluZywgbGluZUhlaWdodCB9ID0gdGV4dE9wdGlvbnM7XG4gIGNvbnN0IHsgdGV4dCwgcmVjdGFuZ2xlIH0gPSBvcHRpb25zO1xuXG4gIGNhbnZhc0NvbnRleHQuZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Zm9udEZhbWlseX1gO1xuICBjYW52YXNDb250ZXh0LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgY2FudmFzQ29udGV4dC50ZXh0QmFzZWxpbmUgPSAndG9wJztcblxuICBjb25zdCB3aWR0aFRvRml0VGV4dCA9IHJlY3RhbmdsZS53aWR0aCAtIHBhZGRpbmcgKiAyO1xuICBjb25zdCBsaW5lczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgbWV0cmljczogVGV4dE1ldHJpY3NbXSA9IFtdO1xuICBsZXQgYmlnZ2VzdFdpZHRoID0gMDtcbiAgY29uc3QgY2hhcmFjdGVyQ291bnQgPSB0ZXh0Lmxlbmd0aDtcblxuICBsZXQgYnVmZmVyID0gJyc7XG4gIGxldCBsYXN0QnVmZmVyTWV0cmljcyA9IGNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQoJycpO1xuXG4gIC8vIENyZWF0ZSBhbiBlbXB0eSBsaW5lIGlmIHRoZSB0ZXh0IGlzIGVtcHR5XG4gIGlmICh0ZXh0ID09PSAnJykge1xuICAgIGxpbmVzLnB1c2goYnVmZmVyKTtcbiAgICBtZXRyaWNzLnB1c2gobGFzdEJ1ZmZlck1ldHJpY3MpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFyYWN0ZXJDb3VudDsgaSsrKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyID0gdGV4dFtpXTtcbiAgICBjb25zdCBpc0xhc3RDaGFyYWN0ZXIgPSBpID09PSBjaGFyYWN0ZXJDb3VudCAtIDE7XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSAnXFxuJykge1xuICAgICAgLy8gU3RvcmUgcHJldmlvdXMgbGluZVxuICAgICAgbGluZXMucHVzaChidWZmZXIpO1xuICAgICAgbWV0cmljcy5wdXNoKGxhc3RCdWZmZXJNZXRyaWNzKTtcbiAgICAgIGJpZ2dlc3RXaWR0aCA9IE1hdGgubWF4KGJpZ2dlc3RXaWR0aCwgbGFzdEJ1ZmZlck1ldHJpY3Mud2lkdGgpO1xuICAgICAgYnVmZmVyID0gJyc7XG4gICAgICBsYXN0QnVmZmVyTWV0cmljcyA9IGNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQoJycpO1xuXG4gICAgICAvLyBJZiB0aGUgbGFzdCBjaGFyYWN0ZXIgaXMgdGhlIG5ldyBsaW5lIGNoYXJhY3RlciBpdCBtZWFucyxcbiAgICAgIC8vIHRoYXQgdGhlcmUgd29uJ3QgYmUgaXRlcmF0aW9ucyBhbnltb3JlIGFuZCB3ZSBuZWVkIHRvIHN0b3JlXG4gICAgICAvLyB0aGUgbGFzdCBsaW5lIGFzIGVtcHR5LlxuICAgICAgaWYgKGlzTGFzdENoYXJhY3Rlcikge1xuICAgICAgICBsaW5lcy5wdXNoKGJ1ZmZlcik7XG4gICAgICAgIG1ldHJpY3MucHVzaChsYXN0QnVmZmVyTWV0cmljcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzQnVmZmVyID0gYnVmZmVyO1xuICAgICAgYnVmZmVyICs9IGNoYXJhY3RlcjtcbiAgICAgIGNvbnN0IGJ1ZmZlck1ldHJpY3MgPSBjYW52YXNDb250ZXh0Lm1lYXN1cmVUZXh0KGJ1ZmZlcik7XG5cbiAgICAgIGlmIChidWZmZXJNZXRyaWNzLndpZHRoID4gd2lkdGhUb0ZpdFRleHQpIHtcbiAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBsaW5lcy5wdXNoKGJ1ZmZlcik7XG4gICAgICAgICAgbWV0cmljcy5wdXNoKGJ1ZmZlck1ldHJpY3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpbmVzLnB1c2gocHJldmlvdXNCdWZmZXIpO1xuICAgICAgICAgIG1ldHJpY3MucHVzaChsYXN0QnVmZmVyTWV0cmljcyk7XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG5cbiAgICAgICAgYnVmZmVyID0gJyc7XG4gICAgICAgIGJpZ2dlc3RXaWR0aCA9IE1hdGgubWF4KGJpZ2dlc3RXaWR0aCwgbWV0cmljc1ttZXRyaWNzLmxlbmd0aCAtIDFdLndpZHRoKTtcbiAgICAgICAgbGFzdEJ1ZmZlck1ldHJpY3MgPSBjYW52YXNDb250ZXh0Lm1lYXN1cmVUZXh0KCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhc3RCdWZmZXJNZXRyaWNzID0gYnVmZmVyTWV0cmljcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYnVmZmVyKSB7XG4gICAgbGluZXMucHVzaChidWZmZXIpO1xuICAgIG1ldHJpY3MucHVzaChjYW52YXNDb250ZXh0Lm1lYXN1cmVUZXh0KGJ1ZmZlcikpO1xuICB9XG5cbiAgY29uc3QgaGVpZ2h0ID0gbGluZXMubGVuZ3RoICogbGluZUhlaWdodDtcbiAgcmV0dXJuIHtcbiAgICB0ZXh0T3B0aW9ucyxcbiAgICBsaW5lcyxcbiAgICBsaW5lTWV0cmljczogbWV0cmljcyxcbiAgICB0ZXh0QmxvY2tNZXRyaWNzOiB7XG4gICAgICB3aWR0aDogYmlnZ2VzdFdpZHRoLFxuICAgICAgd2lkdGhXaXRoUGFkZGluZ3M6IGJpZ2dlc3RXaWR0aCArIHBhZGRpbmcgKiAyLFxuICAgICAgaGVpZ2h0LFxuICAgICAgaGVpZ2h0V2lkdGhQYWRkaW5nczogaGVpZ2h0ICsgcGFkZGluZyAqIDIsXG4gICAgICBsYXN0TGluZVdpZHRoOiBtZXRyaWNzW21ldHJpY3MubGVuZ3RoIC0gMV0/LndpZHRoIHx8IDAsXG4gICAgICBsYXN0TGluZVBvc2l0aW9uOiBhZGQoXG4gICAgICAgIHJlY3RhbmdsZS5jbG9uZSgpLFxuICAgICAgICBuZXcgVmVjdG9yKHtcbiAgICAgICAgICB4OiBwYWRkaW5nLFxuICAgICAgICAgIHk6IHBhZGRpbmcgKyBoZWlnaHQgLSAobGluZXMubGVuZ3RoID8gbGluZUhlaWdodCA6IDApLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgfSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBzdWJ0cmFjdCB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9zdWJ0cmFjdCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMvVmVjdG9yJztcbmltcG9ydCB7IGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQgfSBmcm9tICcuL2dldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQnO1xuXG5leHBvcnQgZW51bSBEcmFnTW9kZSB7XG4gIERvd24gPSAnZG93bicsXG4gIERvdWJsZURvd24gPSAnZG91YmxlLWRvd24nLFxufVxuXG5leHBvcnQgdHlwZSBNb3VzZURhdGEgPSB7XG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xuICBwb3NpdGlvbjogVmVjdG9yO1xufTtcblxuZXhwb3J0IHR5cGUgRHJhZ1N0YXJ0RGF0YSA9IE1vdXNlRGF0YSAmIHtcbiAgc3RhcnRlZEF0OiBWZWN0b3I7XG59O1xuXG5leHBvcnQgdHlwZSBEcmFnRGF0YSA9IERyYWdTdGFydERhdGEgJiB7XG4gIHRvdGFsRGVsdGE6IFZlY3RvcjtcbiAgZGVsdGE6IFZlY3Rvcjtcbn07XG5cbmV4cG9ydCBjb25zdCBleHRlbmRlZENsaWNrSGFuZGxlciA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIF9vcHRpb25zOiB7XG4gICAgLy8gSW4gbWlsbGlzZWNvbmRzXG4gICAgZG91YmxlQ2xpY2tUaHJlc2hvbGQ/OiBudW1iZXI7XG4gICAgc2lsZW5jZUNsaWNrQWZ0ZXJEcmFnPzogYm9vbGVhbjtcbiAgICBzaWxlbmNlTW91c2VVcEFmdGVyRHJhZz86IGJvb2xlYW47XG4gICAgc2lsZW5jZU1vdXNlRG93bkFmdGVyRHJhZz86IGJvb2xlYW47XG4gICAgZW5hYmxlRHJhZz86IGJvb2xlYW47XG4gICAgZGVidWc/OiBib29sZWFuO1xuICAgIGRyYWdNb2RlPzogRHJhZ01vZGU7XG4gICAgb25DbGljaz86IChkYXRhOiBNb3VzZURhdGEpID0+IHZvaWQ7XG4gICAgb25Eb3VibGVDbGljaz86IChkYXRhOiBNb3VzZURhdGEpID0+IHZvaWQ7XG4gICAgb25EcmFnU3RhcnQ/OiAoZGF0YTogRHJhZ1N0YXJ0RGF0YSkgPT4gdm9pZDtcbiAgICBvbkRyYWc/OiAoZGF0YTogRHJhZ0RhdGEpID0+IHZvaWQ7XG4gICAgb25EcmFnRW5kPzogKGRhdGE6IERyYWdEYXRhKSA9PiB2b2lkO1xuICAgIG9uTW91c2VEb3duPzogKGRhdGE6IE1vdXNlRGF0YSkgPT4gdm9pZDtcbiAgICBvbkRvdWJsZU1vdXNlRG93bj86IChkYXRhOiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xuICAgIG9uTW91c2VVcD86IChkYXRhOiBEcmFnRGF0YSkgPT4gdm9pZDtcbiAgfSA9IHt9LFxuKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4ue1xuICAgICAgc2lsZW5jZUNsaWNrQWZ0ZXJEcmFnOiBmYWxzZSxcbiAgICAgIHNpbGVuY2VNb3VzZVVwQWZ0ZXJEcmFnOiBmYWxzZSxcbiAgICAgIHNpbGVuY2VNb3VzZURvd25BZnRlckRyYWc6IGZhbHNlLFxuICAgICAgZW5hYmxlRHJhZzogdHJ1ZSxcbiAgICAgIGRyYWdNb2RlOiBEcmFnTW9kZS5Eb3duLFxuICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgZG91YmxlQ2xpY2tUaHJlc2hvbGQ6IDI4MCxcbiAgICB9LFxuICAgIC4uLl9vcHRpb25zLFxuICB9O1xuXG4gIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS5sb2coJ0V4dGVuZGVkIGNsaWNrIGhhbmRsZXIgb3B0aW9uczonLCBvcHRpb25zKTtcbiAgfVxuXG4gIGxldCBsYXN0Q2xpY2tUaW1lID0gMDtcbiAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgbGV0IGlzRG91YmxlQ2xpY2sgPSBmYWxzZTtcbiAgbGV0IGlzTW91c2VEb3duID0gZmFsc2U7XG4gIGxldCBsYXN0TW91c2VEb3duVGltZSA9IDA7XG4gIGxldCBpc0RvdWJsZU1vdXNlRG93biA9IGZhbHNlO1xuICBsZXQgc2hvdWxkU2lsZW5jZUNsaWNrID0gZmFsc2U7XG4gIGxldCBzaG91bGRTaWxlbmNlTW91c2VVcCA9IGZhbHNlO1xuICBsZXQgc2hvdWxkU2lsZW5jZU1vdXNlRG93biA9IGZhbHNlO1xuICBsZXQgbGFzdE1vdXNlRG93bkV2ZW50OiBNb3VzZUV2ZW50IHwgdW5kZWZpbmVkO1xuICBsZXQgbGFzdERyYWdFdmVudDogTW91c2VFdmVudCB8IHVuZGVmaW5lZDtcbiAgbGV0IHNob3VsZENhbGxEcmFnU3RhcnRDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VEb3duVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHRpbWVQYXNzZWQgPSBtb3VzZURvd25UaW1lIC0gbGFzdE1vdXNlRG93blRpbWU7XG5cbiAgICBpc0RvdWJsZU1vdXNlRG93biA9IHRpbWVQYXNzZWQgPCBvcHRpb25zLmRvdWJsZUNsaWNrVGhyZXNob2xkO1xuICAgIGxhc3RNb3VzZURvd25UaW1lID0gbW91c2VEb3duVGltZTtcblxuICAgIGlzTW91c2VEb3duID0gdHJ1ZTtcbiAgICBsYXN0TW91c2VEb3duRXZlbnQgPSBldmVudDtcblxuICAgIHNob3VsZENhbGxEcmFnU3RhcnRDYWxsYmFjayA9IHRydWU7XG5cbiAgICBpZiAoc2hvdWxkU2lsZW5jZU1vdXNlRG93bikge1xuICAgICAgc2hvdWxkU2lsZW5jZU1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0RvdWJsZU1vdXNlRG93bikge1xuICAgICAgaWYgKG9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RvdWJsZSBtb3VzZSBkb3duJywgZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgZWxlbWVudCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5vbkRvdWJsZU1vdXNlRG93bikge1xuICAgICAgICBvcHRpb25zLm9uRG91YmxlTW91c2VEb3duKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ01vdXNlIGRvd24nLCBnZXRQb3NpdGlvbkZyb21Nb3VzZUV2ZW50KGV2ZW50LCBlbGVtZW50KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm9uTW91c2VEb3duKSB7XG4gICAgICAgIG9wdGlvbnMub25Nb3VzZURvd24oe1xuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIHBvc2l0aW9uOiBnZXRQb3NpdGlvbkZyb21Nb3VzZUV2ZW50KGV2ZW50LCBlbGVtZW50KSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBVc2luZyBkb2N1bWVudCBzbyB5b3UgY2FuIGRyYWcgb3V0c2lkZSBvZiB0aGUgY2FudmFzLCB1c2UgZWxlbWVudFxuICAvLyBpZiB5b3UgY2Fubm90IGRyYWcgb3V0c2lkZSBvZiB0aGUgY2FudmFzLlxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgIGlmIChpc01vdXNlRG93bikge1xuICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzRHJhZ2dpbmcgJiYgb3B0aW9ucy5lbmFibGVEcmFnKSB7XG4gICAgICBjb25zdCBzaG91bGREcmFnID1cbiAgICAgICAgKGlzRG91YmxlTW91c2VEb3duICYmIG9wdGlvbnMuZHJhZ01vZGUgPT09IERyYWdNb2RlLkRvdWJsZURvd24pIHx8XG4gICAgICAgICghaXNEb3VibGVNb3VzZURvd24gJiYgb3B0aW9ucy5kcmFnTW9kZSA9PT0gRHJhZ01vZGUuRG93bik7XG5cbiAgICAgIGlmIChzaG91bGREcmFnKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnNpbGVuY2VNb3VzZURvd25BZnRlckRyYWcpIHtcbiAgICAgICAgICBzaG91bGRTaWxlbmNlTW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnNpbGVuY2VNb3VzZVVwQWZ0ZXJEcmFnKSB7XG4gICAgICAgICAgc2hvdWxkU2lsZW5jZU1vdXNlVXAgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2lsZW5jZUNsaWNrQWZ0ZXJEcmFnKSB7XG4gICAgICAgICAgc2hvdWxkU2lsZW5jZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLm9uRHJhZyB8fCBvcHRpb25zLm9uRHJhZ1N0YXJ0IHx8IG9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICBjb25zdCBkcmFnRGF0YSA9IGdldERyYWdEYXRhKGV2ZW50KTtcblxuICAgICAgICAgIGlmICgob3B0aW9ucy5vbkRyYWdTdGFydCB8fCBvcHRpb25zLmRlYnVnKSAmJiBzaG91bGRDYWxsRHJhZ1N0YXJ0Q2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdG90YWxEZWx0YTogX3RvdGFsRGVsdGEsIGRlbHRhOiBfZGVsdGEsIC4uLmRyYWdTdGFydERhdGEgfSA9IGRyYWdEYXRhO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJhZyBzdGFydCcsIGRyYWdTdGFydERhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vbkRyYWdTdGFydCkge1xuICAgICAgICAgICAgICBvcHRpb25zLm9uRHJhZ1N0YXJ0KGRyYWdTdGFydERhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaG91bGRDYWxsRHJhZ1N0YXJ0Q2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXNEb3VibGVNb3VzZURvd24gPyAnRG91YmxlIGNsaWNrIG1vZGUgZHJhZycgOiAnQ2xpY2sgbW9kZSBkcmFnJywgZHJhZ0RhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHRpb25zLm9uRHJhZykge1xuICAgICAgICAgICAgb3B0aW9ucy5vbkRyYWcoZHJhZ0RhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3REcmFnRXZlbnQgPSBldmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdEYXRhID0gZ2V0RHJhZ0RhdGEoZXZlbnQpO1xuXG4gICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEcmFnIGVuZCcsIGRyYWdEYXRhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMub25EcmFnRW5kKSB7XG4gICAgICAgIG9wdGlvbnMub25EcmFnRW5kKGRyYWdEYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgaXNNb3VzZURvd24gPSBmYWxzZTtcblxuICAgIC8vIE11c3QgYmUgc2V0IHRvIGB1bmRlZmluZWRgIG9ubHkgYWZ0ZXIgYGdldERyYWdEYXRhYCBpcyB1c2VkXG4gICAgbGFzdERyYWdFdmVudCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChzaG91bGRTaWxlbmNlTW91c2VVcCkge1xuICAgICAgc2hvdWxkU2lsZW5jZU1vdXNlVXAgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coJ01vdXNlIHVwJywgZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgZWxlbWVudCkpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9uTW91c2VVcCkge1xuICAgICAgLy8gYGRyYWdEYXRhYCBpcyBzdGlsbCBjYW4gYmUgdXNlZnVsIGUuZy4gaW4gY2FzZXNcbiAgICAgIC8vIHdoZW4gd2UgYWx3YXlzIG5lZWQgdG8gaGFuZGxlIGBtb3VzZXVwYCBldmVudCBpbiBvbmUgcGxhY2VcbiAgICAgIC8vIGJ1dCBkaWZmZXJlbnRseSBpZiB0aGVyZSB3YXMgYSBkcmFnIGV2ZW50IG9yIG5vdFxuICAgICAgb3B0aW9ucy5vbk1vdXNlVXAoZHJhZ0RhdGEpO1xuICAgIH1cbiAgfSk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNsaWNrVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHRpbWVQYXNzZWQgPSBjbGlja1RpbWUgLSBsYXN0Q2xpY2tUaW1lO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgZWxlbWVudCk7XG5cbiAgICBpc0RvdWJsZUNsaWNrID0gdGltZVBhc3NlZCA8IG9wdGlvbnMuZG91YmxlQ2xpY2tUaHJlc2hvbGQ7XG4gICAgbGFzdENsaWNrVGltZSA9IGNsaWNrVGltZTtcblxuICAgIGlmIChzaG91bGRTaWxlbmNlQ2xpY2spIHtcbiAgICAgIHNob3VsZFNpbGVuY2VDbGljayA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0RvdWJsZUNsaWNrKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBjb25zb2xlLmxvZygnRG91YmxlIGNsaWNrJywgcG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5vbkRvdWJsZUNsaWNrKSB7XG4gICAgICAgIG9wdGlvbnMub25Eb3VibGVDbGljayh7XG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzRG91YmxlQ2xpY2spIHtcbiAgICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGljaycsIHBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMub25DbGljaykge1xuICAgICAgICBvcHRpb25zLm9uQ2xpY2soe1xuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcignT25seSBzaW11bGF0ZWQgZHJhZyBpcyBzdXBwb3J0ZWQnKTtcbiAgfSk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcignT25seSBzaW11bGF0ZWQgZHJhZyBpcyBzdXBwb3J0ZWQnKTtcbiAgfSk7XG5cbiAgLy8gVGhpcyBpcyByZWR1bmRhbnQgYXMgdGhlcmUgaXMgc2ltdWxhdGVkIGltcGxlbWVudGF0aW9uIG9mIGRvdWJsZSBjbGljayBpbiB0aGlzIGhlbHBlclxuICAvLyBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKCkgPT4gey4uLn0pXG4gIGZ1bmN0aW9uIGdldERyYWdEYXRhKGV2ZW50OiBNb3VzZUV2ZW50KTogRHJhZ0RhdGEge1xuICAgIGlmICghbGFzdE1vdXNlRG93bkV2ZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBldmVudCxcbiAgICAgICAgcG9zaXRpb246IGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQoZXZlbnQsIGVsZW1lbnQpLFxuICAgICAgICBzdGFydGVkQXQ6IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgdG90YWxEZWx0YTogbmV3IFZlY3RvcigpLFxuICAgICAgICBkZWx0YTogbmV3IFZlY3RvcigpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludEZyb21MYXN0TW91c2VEb3duID0gZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChsYXN0TW91c2VEb3duRXZlbnQsIGVsZW1lbnQpO1xuICAgIGNvbnN0IHBvaW50RnJvbUxhc3REcmFnID0gbGFzdERyYWdFdmVudCA/IGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQobGFzdERyYWdFdmVudCwgZWxlbWVudCkgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgY3VycmVudFBvaW50ID0gZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgZWxlbWVudCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQsXG4gICAgICBwb3NpdGlvbjogZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgZWxlbWVudCksXG4gICAgICBzdGFydGVkQXQ6IGN1cnJlbnRQb2ludCxcbiAgICAgIHRvdGFsRGVsdGE6IHN1YnRyYWN0KGN1cnJlbnRQb2ludC5jbG9uZSgpLCBwb2ludEZyb21MYXN0TW91c2VEb3duKSxcbiAgICAgIGRlbHRhOiBzdWJ0cmFjdChjdXJyZW50UG9pbnQuY2xvbmUoKSwgcG9pbnRGcm9tTGFzdERyYWcgfHwgcG9pbnRGcm9tTGFzdE1vdXNlRG93biksXG4gICAgfTtcbiAgfVxufTtcbiIsImltcG9ydCB7IHN1YnRyYWN0IH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzL3N1YnRyYWN0JztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9WZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudCA9IChldmVudDogTW91c2VFdmVudCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCB2aWV3cG9ydE1vdXNlUG9zaXRpb24gPSBuZXcgVmVjdG9yKHtcbiAgICB4OiBldmVudC5wYWdlWCxcbiAgICB5OiBldmVudC5wYWdlWSxcbiAgfSk7XG4gIGNvbnN0IGJvdW5kaW5nUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgdG9wTGVmdENvbnRhaW5lclBvc2l0aW9uID0gbmV3IFZlY3Rvcih7XG4gICAgeDogYm91bmRpbmdSZWN0LmxlZnQsXG4gICAgeTogYm91bmRpbmdSZWN0LnRvcCxcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnRyYWN0KHZpZXdwb3J0TW91c2VQb3NpdGlvbiwgdG9wTGVmdENvbnRhaW5lclBvc2l0aW9uKTtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0SWRHZW5lcmF0b3IgPSAoKSA9PiB7XG4gIGxldCBsYXN0SWQgPSAxO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmV0dXJuIGxhc3RJZCsrO1xuICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBpc01hYyA9ICgpID0+IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0udG9VcHBlckNhc2UoKS5pbmRleE9mKCdNQUMnKSA+PSAwO1xuIiwiaW1wb3J0IHsgaXNNYWMgfSBmcm9tICcuL2lzTWFjJztcbmltcG9ydCB7IFB1YlN1YiB9IGZyb20gJy4vcHViU3ViL1B1YlN1Yic7XG5cbnR5cGUgS2V5UHJlc3NDYWxsYmFjayA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZDtcblxuY29uc3QgZ2xvYmFsbHlQcmVzc2VkS2V5cyA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XG4vLyBXZSB1c3VhbGx5IHVzZSBudW1lcmljIGNvZGUgb2YgYSBrZXkgdG8gb3V0bGluZSBhIHBoeXNpY2FsIGtleSB3ZSB3YW50IHRvIHVzZVxuLy8gYnV0IGlmIGl0J3MgYSBjdXN0b20ga2V5LCB0aGVuIGEgYmlnIHRpZXIgaXMgYSB3YXkgdG8gc2VwYXJhdGUgdGhlIGxvZ2ljLlxuY29uc3QgQ1VTVE9NX0tFWV9USUVSX01PRElGSUVSID0gMTAwMDAwMDtcbmxldCBhcmVLZXlib2FyZExpc3RlbmVyc0F0dGFjaGVkID0gZmFsc2U7XG5cbmxpc3RlbktleWJvYXJkKGZhbHNlKTtcblxuLy8gVmFsdWVzIGFyZSBgZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZWAgZm9yIHRoZSBwaHlzaWNhbCBrZXlzIGFuZFxuLy8gYSBudW1iZXIgKyBgQ1VTVE9NX0tFWV9USUVSX01PRElGSUVSYCBmb3IgY3VzdG9tIGtleXMuXG5leHBvcnQgZW51bSBLRVlTIHtcbiAgYmFja3NwYWNlID0gOCxcbiAgdGFiID0gOSxcbiAgY29udHJvbCA9IDE3LFxuICBlc2NhcGUgPSAyNyxcbiAgLy8gT3B0aW9uIG9uIE1hY09TXG4gIGFsdCA9IDE4LFxuICBkZWxldGUgPSA0NixcbiAgLy8gQ29tbWFuZCBvbiBNYWNPU1xuICBtZXRhID0gOTEsXG4gIHNwYWNlID0gMzIsXG4gIHBsdXMgPSAxODcsXG4gIGVudGVyID0gMTMsXG5cbiAgY29udHJvbE9TU3BlY2lmaWMgPSBDVVNUT01fS0VZX1RJRVJfTU9ESUZJRVIgKyAxNyxcbn1cblxuLy8gSWYgYGV2ZW50YCBpcyBub3QgcGFzc2VkIHRoYW4gdGhlIGtleSB3aWxsIGJlIGNoZWNrZWRcbi8vIGFnYWluc3QgZ2xvYmFsbHkgcHJlc3NlZCBrZXlzIChgZ2xvYmFsbHlQcmVzc2VkS2V5c2ApIGF0IHRoZSBtb21lbnQuXG5leHBvcnQgY29uc3QgaXNLZXlQcmVzc2VkID0gKGtleTogS0VZUywgZXZlbnQ/OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gIGxldCBrZXlDb2Rlc1RvQ2hlY2s6IG51bWJlcltdID0gW107XG4gIGxldCBpc1ByZXNzZWQgPSBmYWxzZTtcblxuICBpZiAoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcblxuICAgIGtleUNvZGVzVG9DaGVjay5wdXNoKGtleUNvZGUpO1xuICB9IGVsc2Uge1xuICAgIGtleUNvZGVzVG9DaGVjayA9IEFycmF5LmZyb20oZ2xvYmFsbHlQcmVzc2VkS2V5cy52YWx1ZXMoKSk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleUNvZGVzVG9DaGVjay5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBrZXlDb2RlID0ga2V5Q29kZXNUb0NoZWNrW2ldO1xuXG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgS0VZUy5jb250cm9sT1NTcGVjaWZpYzpcbiAgICAgICAgaXNQcmVzc2VkID0gaXNNYWMoKSA/IGtleUNvZGUgPT09IEtFWVMubWV0YSA6IGtleUNvZGUgPT09IEtFWVMuY29udHJvbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpc1ByZXNzZWQgPSBrZXlDb2RlID09PSBrZXk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChpc1ByZXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGtleURvd25QdWJTdWJzID0gbmV3IE1hcDxLRVlTLCBQdWJTdWI8S2V5Ym9hcmRFdmVudD4+KCk7XG5jb25zdCBrZXlzRG93blB1YlN1YnMgPSBuZXcgTWFwPHN0cmluZywgUHViU3ViPEtleWJvYXJkRXZlbnQ+PigpO1xuY29uc3Qga2V5VXBQdWJTdWJzID0gbmV3IE1hcDxLRVlTLCBQdWJTdWI8S2V5Ym9hcmRFdmVudD4+KCk7XG5jb25zdCBrZXlQcmVzc1B1YlN1YnMgPSBuZXcgTWFwPEtFWVMsIFB1YlN1YjxLZXlib2FyZEV2ZW50Pj4oKTtcblxuZXhwb3J0IGNvbnN0IG9uS2V5RG93biA9IChrZXk6IEtFWVMsIGNhbGxiYWNrOiBLZXlQcmVzc0NhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGtleURvd25QdWJTdWIgPSBrZXlEb3duUHViU3Vicy5nZXQoa2V5KSB8fCBuZXcgUHViU3ViPEtleWJvYXJkRXZlbnQ+KCk7XG5cbiAga2V5RG93blB1YlN1Yi5ldmVudC5zdWJzY3JpYmUoY2FsbGJhY2spO1xuICBrZXlEb3duUHViU3Vicy5zZXQoa2V5LCBrZXlEb3duUHViU3ViKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvbktleXNEb3duID0gKF9rZXlzOiBLRVlTW10sIGNhbGxiYWNrOiBLZXlQcmVzc0NhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGtleXNUb2tlbiA9IFsuLi5fa2V5c10uc29ydCgpLmpvaW4oJy0nKTtcbiAgY29uc3Qga2V5c0Rvd25QdWJTdWIgPSBrZXlzRG93blB1YlN1YnMuZ2V0KGtleXNUb2tlbikgfHwgbmV3IFB1YlN1YjxLZXlib2FyZEV2ZW50PigpO1xuXG4gIGtleXNEb3duUHViU3ViLmV2ZW50LnN1YnNjcmliZShjYWxsYmFjayk7XG4gIGtleXNEb3duUHViU3Vicy5zZXQoa2V5c1Rva2VuLCBrZXlzRG93blB1YlN1Yik7XG59O1xuXG5leHBvcnQgY29uc3Qgb25LZXlVcCA9IChrZXk6IEtFWVMsIGNhbGxiYWNrOiBLZXlQcmVzc0NhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGtleVVwUHViU3ViID0ga2V5VXBQdWJTdWJzLmdldChrZXkpIHx8IG5ldyBQdWJTdWI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICBrZXlVcFB1YlN1Yi5ldmVudC5zdWJzY3JpYmUoY2FsbGJhY2spO1xuICBrZXlVcFB1YlN1YnMuc2V0KGtleSwga2V5VXBQdWJTdWIpO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uS2V5UHJlc3NlZCA9IChrZXk6IEtFWVMsIGNhbGxiYWNrOiBLZXlQcmVzc0NhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGtleVByZXNzUHViU3ViID0ga2V5UHJlc3NQdWJTdWJzLmdldChrZXkpIHx8IG5ldyBQdWJTdWI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICBrZXlQcmVzc1B1YlN1Yi5ldmVudC5zdWJzY3JpYmUoY2FsbGJhY2spO1xuICBrZXlQcmVzc1B1YlN1YnMuc2V0KGtleSwga2V5UHJlc3NQdWJTdWIpO1xufTtcblxuZnVuY3Rpb24gbGlzdGVuS2V5Ym9hcmQoZGVidWcgPSBmYWxzZSkge1xuICBpZiAoYXJlS2V5Ym9hcmRMaXN0ZW5lcnNBdHRhY2hlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFyZUtleWJvYXJkTGlzdGVuZXJzQXR0YWNoZWQgPSB0cnVlO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcblxuICAgIGdsb2JhbGx5UHJlc3NlZEtleXMuc2V0KGtleUNvZGUsIGtleUNvZGUpO1xuXG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZygnS2V5IGRvd24nLCBrZXlDb2RlLCBnZXRLZXlOYW1lKGtleUNvZGUpLCBnbG9iYWxseVByZXNzZWRLZXlzKTtcbiAgICB9XG5cbiAgICBrZXlEb3duUHViU3Vicy5nZXQoa2V5Q29kZSk/LnB1Ymxpc2goZXZlbnQpO1xuXG4gICAgZm9yIChjb25zdCBbdG9rZW4sIHB1YlN1Yl0gb2Yga2V5c0Rvd25QdWJTdWJzKSB7XG4gICAgICBjb25zdCBrZXlzID0gdG9rZW4uc3BsaXQoJy0nKTtcbiAgICAgIGxldCBzaG91bGRGaXJlID0gdHJ1ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBwYXJzZUludChrZXlzW2ldLCAxMCk7XG5cbiAgICAgICAgaWYgKCFnbG9iYWxseVByZXNzZWRLZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgc2hvdWxkRmlyZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGRGaXJlKSB7XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XG5cbiAgICBnbG9iYWxseVByZXNzZWRLZXlzLmRlbGV0ZShrZXlDb2RlKTtcblxuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coJ0tleSB1cCcsIGtleUNvZGUsIGdldEtleU5hbWUoa2V5Q29kZSksIGdsb2JhbGx5UHJlc3NlZEtleXMpO1xuICAgIH1cblxuICAgIGtleVVwUHViU3Vicy5nZXQoa2V5Q29kZSk/LnB1Ymxpc2goZXZlbnQpO1xuICAgIGtleVByZXNzUHViU3Vicy5nZXQoa2V5Q29kZSk/LnB1Ymxpc2goZXZlbnQpO1xuICB9KTtcblxuICAvLyBPbmx5IGZvciBkZWJ1ZyBwdXJwb3Nlc1xuICBmdW5jdGlvbiBnZXRLZXlOYW1lKGtleUNvZGU6IHVua25vd24pIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoS0VZUykuZmluZCgoW2VudW1LZXlDb2RlXSkgPT4gcGFyc2VJbnQoZW51bUtleUNvZGUsIDEwKSA9PT0ga2V5Q29kZSk/LlsxXTtcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBQdWJTdWJFdmVudDxUPiB7XG4gIHN1YnNjcmliZShzdWJzY3JpYmVyOiAoZGF0YTogVCkgPT4gdm9pZCk6IHZvaWQ7XG4gIHVuc3Vic2NyaWJlKHN1YnNjcmliZXI6IChkYXRhOiBUKSA9PiB2b2lkKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFB1YlN1YjxUPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcnMgPSBuZXcgU2V0PChkYXRhOiBUKSA9PiB2b2lkPigpO1xuXG4gIHB1YmxpYyByZWFkb25seSBldmVudDogUHViU3ViRXZlbnQ8VD4gPSB7XG4gICAgc3Vic2NyaWJlOiAoc3Vic2NyaWJlcjogKGRhdGE6IFQpID0+IHZvaWQpID0+IHRoaXMuc3Vic2NyaWJlKHN1YnNjcmliZXIpLFxuICAgIHVuc3Vic2NyaWJlOiAoc3Vic2NyaWJlcjogKGRhdGE6IFQpID0+IHZvaWQpID0+IHRoaXMudW5zdWJzY3JpYmUoc3Vic2NyaWJlciksXG4gIH07XG5cbiAgcHVibGljIHB1Ymxpc2goZGF0YTogVCkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaCgoc3Vic2NyaWJlcikgPT4gc3Vic2NyaWJlcihkYXRhKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN1YnNjcmliZXJDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmVycy5zaXplO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmUoc3Vic2NyaWJlcjogKGRhdGE6IFQpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpYmVycy5oYXMoc3Vic2NyaWJlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUHJvdmlkZWQgc3Vic2NyaWJlciBpcyBhbHJlYWR5IHN1YnNjcmliZWQnKTtcbiAgICB9XG5cbiAgICB0aGlzLnN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUoc3Vic2NyaWJlcjogKGRhdGE6IFQpID0+IHZvaWQpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IGJvb3QgfSBmcm9tICcuL2JvYXJkL2Jvb3QnO1xuXG5jb25zdCBodG1sRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSBhcyBIVE1MSHRtbEVsZW1lbnQ7XG5jb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBIVE1MQm9keUVsZW1lbnQ7XG5cbmNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuY29udGFpbmVyRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG5jb25zdCBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5jb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuY29uc3QgcmVzZXRTdHlsZXMgPSAoZWxlbWVudDogRWxlbWVudENTU0lubGluZVN0eWxlKSA9PiB7XG4gIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICBlbGVtZW50LnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzAnO1xufTtcblxucmVzZXRTdHlsZXMoaHRtbEVsZW1lbnQpO1xucmVzZXRTdHlsZXMoYm9keUVsZW1lbnQpO1xucmVzZXRTdHlsZXMoY29udGFpbmVyRWxlbWVudCk7XG5yZXNldFN0eWxlcyhjYW52YXNFbGVtZW50KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXJFbGVtZW50KTtcbmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzRWxlbWVudCk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmJvb3QoY2FudmFzQ29udGV4dCwgY29udGFpbmVyRWxlbWVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=