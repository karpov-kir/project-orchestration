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
        _this.positionModifiers.push(function (position) { return (0, subtract_1.subtract)(position, _this.d.boardViewportStore.offset); });
        return _this;
    }
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
        _this.selectedAreaModifiers.push(function (selectedArea) { return (0, move_1.move)(selectedArea, _this.d.boardViewportStore.offset, -1); });
        return _this;
    }
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
        // if the user is not dragging or a box or creating a selection already.
        if (this.d.boardBoxesStore.draggingBox || this.d.boardSelection.absoluteSelectedArea) {
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
        this.pointCoordinates(this.d.boardCursor.absolutePosition, this.d.boardCursor.position);
        this.d.drawer.restore();
    };
    DebugDrawer.prototype.selectedAreaCoordinates = function () {
        if (!this.d.boardSelection.absoluteSelectedArea ||
            !this.d.boardSelection.selectedArea ||
            this.d.boardViewportStore.isMovingViewPort) {
            return;
        }
        this.d.drawer.saveAndReset();
        this.rectangleCoordinates(this.d.boardSelection.absoluteSelectedArea, this.d.boardSelection.selectedArea);
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
            x: this.d.boardCursor.position.x - (newBox.width * this.d.boardViewportStore.zoom.x) / 2,
            y: this.d.boardCursor.position.y - (newBox.height * this.d.boardViewportStore.zoom.y) / 2,
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
        this.d.boardBoxesStore.cursorOverBox = this.d.boardBoxesStore.getBoxByPosition(this.d.boardCursor.position, this.d.boardViewportStore.zoom);
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
        if (!this.d.boardSelection.selectedArea) {
            // Should never happen
            console.warn('Missing selected area');
            return;
        }
        try {
            for (var _b = __values(this.d.boardBoxesStore.prioritizedBoxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var box = _c.value;
                var zoomedBox = (0, multiplyByVector_1.multiplyByVector)(box.clone(), this.d.boardViewportStore.zoom);
                if ((0, intersects_1.intersects)(this.d.boardSelection.selectedArea, zoomedBox)) {
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
        var _d = __read((0, zoomToPoint_1.zoomToPoint)(transform.clone(), boardCursor.absolutePosition, delta).rawMatrix2d, 6), zoomX = _d[0], _b = _d[1], _c = _d[2], zoomY = _d[3], offsetX = _d[4], offsetY = _d[5];
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
    function Cursor(containerElement) {
        var _this = this;
        this.cursorType = Drawer_1.CursorType.Default;
        this.positionModifiers = [];
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
        this.absolutePosition = new Vector_1.Vector();
        this.position = this.applyPositionModifiers(this.absolutePosition);
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
    Cursor.prototype.applyPositionModifiers = function (absolutePosition) {
        var newPosition = absolutePosition.clone();
        this.positionModifiers.forEach(function (modifier) {
            newPosition = modifier(newPosition);
        });
        return newPosition;
    };
    Cursor.prototype.handleMove = function (event) {
        this.absolutePosition = (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, this.containerElement);
        this.position = this.applyPositionModifiers(this.absolutePosition);
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
        this.selectedAreaModifiers = [];
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
    Object.defineProperty(Selection.prototype, "absoluteSelectedArea", {
        get: function () {
            if (this.canSelect === false) {
                return;
            }
            return this._absoluteSelectedArea;
        },
        enumerable: false,
        configurable: true
    });
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
    Selection.prototype.applySelectedAreaModifiers = function (absoluteSelectedArea) {
        var newSelectedArea = absoluteSelectedArea.clone();
        this.selectedAreaModifiers.forEach(function (modifier) {
            newSelectedArea = modifier(newSelectedArea);
        });
        return newSelectedArea;
    };
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
        this._absoluteSelectedArea = this.getSelection(event);
        this._selectedArea = this.applySelectedAreaModifiers(this._absoluteSelectedArea);
        this.selectStartPubSub.publish({
            event: event,
        });
    };
    Selection.prototype.handleMove = function (event) {
        if (!this._absoluteSelectedArea) {
            return;
        }
        if (!this.isMouseDown || this.canSelect === false) {
            return;
        }
        this._absoluteSelectedArea = this.getSelection(event);
        this._selectedArea = this.applySelectedAreaModifiers(this._absoluteSelectedArea);
        this.selectPubSub.publish({
            event: event,
            selectedArea: this._selectedArea,
        });
    };
    Selection.prototype.handleUp = function (event) {
        this.isMouseDown = false;
        // TODO investigate why this happens on double click
        if (!this._absoluteSelectedArea) {
            // Should never happen
            console.warn('Missing selected area');
            return;
        }
        this._absoluteSelectedArea = this.getSelection(event);
        this._selectedArea = this.applySelectedAreaModifiers(this._absoluteSelectedArea);
        this.selectEndPubSub.publish({
            event: event,
            selectedArea: this._selectedArea,
        });
        this._absoluteSelectedArea = undefined;
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
var insertSubString_1 = __webpack_require__(/*! ../utils/insertSubString */ "./src/utils/insertSubString.ts");
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
            var insertBeforePosition = _this.textCursorData.nextCharacterIndex;
            if (isLetterOrNumber) {
                _this.content = (0, insertSubString_1.insertSubString)(_this.content, insertBeforePosition, event.key);
            }
            else if ((0, keyboard_1.isKeyPressed)(keyboard_1.KEYS.enter, event)) {
                _this.content = (0, insertSubString_1.insertSubString)(_this.content, insertBeforePosition, '\n');
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
        this.textCursorData = (0, canvasText_1.getTextCursorData)(this.d.canvasContext, this.textBlockLines);
        this.d.cursor.tapEvent.subscribe(function () { return _this.handleTap(); });
    }
    Object.defineProperty(TextEditor.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (content) {
            if (this._content === content) {
                return;
            }
            var previousHeight = this.textBlockLines.textBlockMetrics.heightWithPaddings;
            this._content = content;
            this.textBlockLines = this.createTextBlockLines();
            var newHeight = this.textBlockLines.textBlockMetrics.heightWithPaddings;
            this.textCursorData = (0, canvasText_1.getTextCursorData)(this.d.canvasContext, this.textBlockLines);
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
    TextEditor.prototype.handleTap = function () {
        if (!this.shownAt) {
            return;
        }
        this.textCursorData = (0, canvasText_1.getTextCursorData)(this.d.canvasContext, this.textBlockLines, this.d.cursor.position, this.textCursorData.position);
    };
    TextEditor.prototype.showAt = function (position, dimensions) {
        if (dimensions) {
            this.width = dimensions.width;
            this.height = dimensions.height;
        }
        this._shownAt = position;
        this.textBlockLines = this.createTextBlockLines();
        this.textCursorData = (0, canvasText_1.getTextCursorData)(this.d.canvasContext, this.textBlockLines);
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
        if (!this.d.selection.absoluteSelectedArea) {
            return;
        }
        this.d.drawer.saveAndReset();
        this.d.drawer.rectangle({
            rectangle: this.d.selection.absoluteSelectedArea,
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
        var lineHeight = this.d.textEditor.textBlockLines.textOptions.lineHeight;
        this.d.drawer.line({
            from: this.d.textEditor.textCursorData.position,
            to: (0, add_1.add)(this.d.textEditor.textCursorData.position.clone(), new Vector_1.Vector({
                x: 0,
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
exports.getTextCursorData = exports.createTextBlockLines = exports.mergeWithDefaultTextOptions = void 0;
var add_1 = __webpack_require__(/*! ../math/vectors/add */ "./src/math/vectors/add.ts");
var Vector_1 = __webpack_require__(/*! ../math/vectors/Vector */ "./src/math/vectors/Vector.ts");
var isPointInside_1 = __webpack_require__(/*! ./../math/rectangle/isPointInside */ "./src/math/rectangle/isPointInside.ts");
var subtract_1 = __webpack_require__(/*! ./../math/vectors/subtract */ "./src/math/vectors/subtract.ts");
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
    var characterCount = text.length;
    var biggestWidth = 0;
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
        var previousBuffer = buffer;
        buffer += character;
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
    var heightWithPaddings = height + padding * 2;
    var finalRectangle = rectangle.clone();
    finalRectangle.height = heightWithPaddings;
    return {
        textOptions: textOptions,
        lines: lines,
        lineMetrics: metrics,
        textBlockMetrics: {
            originalRectangle: rectangle,
            rectangle: finalRectangle,
            width: biggestWidth,
            widthWithPaddings: biggestWidth + padding * 2,
            height: height,
            heightWithPaddings: heightWithPaddings,
            lastLineWidth: ((_a = metrics[metrics.length - 1]) === null || _a === void 0 ? void 0 : _a.width) || 0,
            lastLinePosition: (0, add_1.add)(rectangle.clone(), new Vector_1.Vector({
                x: padding,
                y: padding + height - (lines.length ? lineHeight : 0),
            })),
        },
    };
};
exports.createTextBlockLines = createTextBlockLines;
var getTextCursorData = function (canvasContext, _a, tapPosition, defaultPosition) {
    var _b = _a.textBlockMetrics, lastLinePosition = _b.lastLinePosition, lastLineWidth = _b.lastLineWidth, rectangle = _b.rectangle, _c = _a.textOptions, padding = _c.padding, lineHeight = _c.lineHeight, lines = _a.lines;
    var TextCursorData = new Vector_1.Vector(defaultPosition) || (0, add_1.add)(lastLinePosition.clone(), new Vector_1.Vector({ x: lastLineWidth, y: 0 }));
    if (tapPosition && (0, isPointInside_1.isPointInside)(tapPosition, rectangle)) {
        var positionWithinRectangle = (0, subtract_1.subtract)(tapPosition.clone(), rectangle);
        var positionWithTextArea = (0, subtract_1.subtract)(positionWithinRectangle.clone(), new Vector_1.Vector({ x: padding, y: padding }));
        if (positionWithTextArea.y >= 0 && positionWithTextArea.x >= 0) {
            var lineIndex = Math.floor(positionWithTextArea.y / lineHeight);
            var line = lines[lineIndex];
            var xWithinTextArea = 0;
            var buffer = '';
            var characterIndex = 0;
            // TODO use binary search
            for (characterIndex; characterIndex < line.length; characterIndex++) {
                var character = line[characterIndex];
                var nextCharacter = line[characterIndex + 1];
                buffer += character;
                var newX = canvasContext.measureText(buffer).width;
                var characterWidth = newX - xWithinTextArea;
                if (newX > positionWithTextArea.x || nextCharacter === '\n') {
                    var howFarXFromClickToNextCharacter = newX - positionWithTextArea.x;
                    // Check which character (left or right) is closer to the clicked position,
                    // if the right one, then take one step forward.
                    if (howFarXFromClickToNextCharacter < characterWidth / 2) {
                        xWithinTextArea = newX;
                    }
                    else {
                        characterIndex--;
                    }
                    break;
                }
                xWithinTextArea = newX;
            }
            var nextCharacterIndexInLine = line.length ? characterIndex + 1 : 0;
            var nextCharacterIndex = nextCharacterIndexInLine;
            for (var i = 0; i < lineIndex; i++) {
                nextCharacterIndex += lines[i].length;
            }
            return {
                position: new Vector_1.Vector({
                    x: padding + xWithinTextArea + rectangle.x,
                    y: padding + lineIndex * lineHeight + rectangle.y,
                }),
                height: lineHeight,
                lineIndex: lineIndex,
                nextCharacterIndexInLine: line.length ? characterIndex + 1 : 0,
                nextCharacterIndex: nextCharacterIndex,
            };
        }
    }
    return {
        position: TextCursorData,
        height: lineHeight,
        lineIndex: 0,
        nextCharacterIndexInLine: 0,
        nextCharacterIndex: 0,
    };
};
exports.getTextCursorData = getTextCursorData;


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

/***/ "./src/utils/insertSubString.ts":
/*!**************************************!*\
  !*** ./src/utils/insertSubString.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.insertSubString = void 0;
var insertSubString = function (value, insertBeforePosition, insertValue) {
    return value.substring(0, insertBeforePosition) + insertValue + value.substring(insertBeforePosition);
};
exports.insertSubString = insertSubString;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZC9jb21wb25lbnRzL0JvYXJkQ3Vyc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9jb21wb25lbnRzL0JvYXJkU2VsZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9jb21wb25lbnRzL0JvYXJkVGV4dEVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvY29udHJvbGxlcnMvQm9hcmRCb3hlc0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL2NvbnRyb2xsZXJzL0JvYXJkQ3Vyc29yQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvY29udHJvbGxlcnMvQm9hcmRSZW5kZXJpbmdDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9jb250cm9sbGVycy9Cb2FyZFNlbGVjdGlvbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL2NvbnRyb2xsZXJzL0JvYXJkVmlld3BvcnRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9yZW5kZXJpbmcvQm9hcmRCb3hlc0RyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvcmVuZGVyaW5nL0JvYXJkRHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9yZW5kZXJpbmcvRGVidWdEcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL3NlcnZpY2VzL0JvYXJkQm94ZXNTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9zZXJ2aWNlcy9Cb2FyZEN1cnNvclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL3NlcnZpY2VzL0JvYXJkU2VsZWN0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvc2VydmljZXMvQm9hcmRWaWV3cG9ydFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL3N0b3Jlcy9Cb2FyZEJveGVzU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL3N0b3Jlcy9Cb2FyZFZpZXdwb3J0U3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3Vyc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZXh0RWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdGllcy9Cb3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0aWVzL1JlbGF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL21hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9tYXRyaXhlczJkL01hdHJpeDJkLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL21hdHJpeGVzMmQvZnJvbVNjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL21hdHJpeGVzMmQvZnJvbVRyYW5zbGF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL21hdHJpeGVzMmQvbXVsdGlwbHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvbWF0cml4ZXMyZC96b29tVG9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9yZWN0YW5nbGUvUmVjdGFuZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3JlY3RhbmdsZS9jZW50cmFsaXplLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3JlY3RhbmdsZS9pbnRlcnNlY3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3JlY3RhbmdsZS9pc1BvaW50SW5zaWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3JlY3RhbmdsZS9tb3ZlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3JlY3RhbmdsZS9tdWx0aXBseUJ5VmVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3JlY3RhbmdsZS9zY2FsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9yZWN0YW5nbGUvdG91Y2hlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC92ZWN0b3JzL1ZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC92ZWN0b3JzL2FkZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC92ZWN0b3JzL2NlbnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC92ZWN0b3JzL2RpdmlkZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC92ZWN0b3JzL211bHRpcGx5LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcnMvc29ydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC92ZWN0b3JzL3N1YnRyYWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJpbmcvRHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJpbmcvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmluZy9TZWxlY3Rpb25EcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmluZy9UZXh0RHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJpbmcvVGV4dEVkaXRvckRyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2FudmFzVGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tL2V4dGVuZGVkQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kb20vZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaWRHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luc2VydFN1YlN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXNNYWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2tleWJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wdWJTdWIvUHViU3ViLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSAnLi4vcmVuZGVyaW5nL0RyYXdlcic7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcmluZy9SZW5kZXJlcic7XG5pbXBvcnQgeyBTZWxlY3Rpb25EcmF3ZXIgfSBmcm9tICcuLi9yZW5kZXJpbmcvU2VsZWN0aW9uRHJhd2VyJztcbmltcG9ydCB7IFRleHREcmF3ZXIgfSBmcm9tICcuLi9yZW5kZXJpbmcvVGV4dERyYXdlcic7XG5pbXBvcnQgeyBUZXh0RWRpdG9yRHJhd2VyIH0gZnJvbSAnLi4vcmVuZGVyaW5nL1RleHRFZGl0b3JEcmF3ZXInO1xuaW1wb3J0IHsgQm9hcmRDdXJzb3IgfSBmcm9tICcuL2NvbXBvbmVudHMvQm9hcmRDdXJzb3InO1xuaW1wb3J0IHsgQm9hcmRTZWxlY3Rpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvQm9hcmRTZWxlY3Rpb24nO1xuaW1wb3J0IHsgQm9hcmRUZXh0RWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL0JvYXJkVGV4dEVkaXRvcic7XG5pbXBvcnQgeyBCb2FyZEJveGVzQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvQm9hcmRCb3hlc0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgQm9hcmRDdXJzb3JDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9Cb2FyZEN1cnNvckNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQm9hcmRSZW5kZXJpbmdDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9Cb2FyZFJlbmRlcmluZ0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgQm9hcmRTZWxlY3Rpb25Db250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9Cb2FyZFNlbGVjdGlvbkNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQm9hcmRWaWV3cG9ydENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL0JvYXJkVmlld3BvcnRDb250cm9sbGVyJztcbmltcG9ydCB7IEJvYXJkQm94ZXNEcmF3ZXIgfSBmcm9tICcuL3JlbmRlcmluZy9Cb2FyZEJveGVzRHJhd2VyJztcbmltcG9ydCB7IEJvYXJkRHJhd2VyIH0gZnJvbSAnLi9yZW5kZXJpbmcvQm9hcmREcmF3ZXInO1xuaW1wb3J0IHsgRGVidWdEcmF3ZXIgfSBmcm9tICcuL3JlbmRlcmluZy9EZWJ1Z0RyYXdlcic7XG5pbXBvcnQgeyBCb2FyZEJveGVzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvQm9hcmRCb3hlc1NlcnZpY2UnO1xuaW1wb3J0IHsgQm9hcmRDdXJzb3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9Cb2FyZEN1cnNvclNlcnZpY2UnO1xuaW1wb3J0IHsgQm9hcmRTZWxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9Cb2FyZFNlbGVjdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgQm9hcmRWaWV3cG9ydFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0JvYXJkVmlld3BvcnRTZXJ2aWNlJztcbmltcG9ydCB7IEJvYXJkQm94ZXNTdG9yZSB9IGZyb20gJy4vc3RvcmVzL0JvYXJkQm94ZXNTdG9yZSc7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U3RvcmUgfSBmcm9tICcuL3N0b3Jlcy9Cb2FyZFZpZXdwb3J0U3RvcmUnO1xuXG5leHBvcnQgY29uc3QgYm9vdCA9IChjYW52YXNDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNhbnZhc0NvbnRleHQuY2FudmFzLmRyYWdnYWJsZSA9IGZhbHNlO1xuXG4gIC8vIFN0b3Jlc1xuICBjb25zdCBib2FyZFZpZXdwb3J0U3RvcmUgPSBuZXcgQm9hcmRWaWV3cG9ydFN0b3JlKCk7XG4gIGNvbnN0IGJvYXJkQm94ZXNTdG9yZSA9IG5ldyBCb2FyZEJveGVzU3RvcmUoKTtcblxuICAvLyBDb21wb25lbnRzXG4gIGNvbnN0IGJvYXJkQ3Vyc29yID0gbmV3IEJvYXJkQ3Vyc29yKHtcbiAgICBjb250YWluZXJFbGVtZW50LFxuICAgIGJvYXJkVmlld3BvcnRTdG9yZSxcbiAgfSk7XG4gIGNvbnN0IGJvYXJkVGV4dEVkaXRvciA9IG5ldyBCb2FyZFRleHRFZGl0b3Ioe1xuICAgIGNhbnZhc0NvbnRleHQsXG4gICAgY3Vyc29yOiBib2FyZEN1cnNvcixcbiAgfSk7XG4gIGNvbnN0IGJvYXJkU2VsZWN0aW9uID0gbmV3IEJvYXJkU2VsZWN0aW9uKHsgY3Vyc29yOiBib2FyZEN1cnNvciwgYm9hcmRWaWV3cG9ydFN0b3JlLCBib2FyZEJveGVzU3RvcmUgfSk7XG5cbiAgLy8gR2xvYmFsIHJlbmRlcmluZ1xuICBjb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuICBjb25zdCBkcmF3ZXIgPSBuZXcgRHJhd2VyKGNhbnZhc0NvbnRleHQpO1xuICBjb25zdCB0ZXh0RHJhd2VyID0gbmV3IFRleHREcmF3ZXIoeyBkcmF3ZXIgfSk7XG4gIGNvbnN0IHNlbGVjdGlvbkRyYXdlciA9IG5ldyBTZWxlY3Rpb25EcmF3ZXIoeyBkcmF3ZXIsIHNlbGVjdGlvbjogYm9hcmRTZWxlY3Rpb24gfSk7XG4gIGNvbnN0IHRleHRFZGl0b3JEcmF3ZXIgPSBuZXcgVGV4dEVkaXRvckRyYXdlcih7IGRyYXdlciwgdGV4dEVkaXRvcjogYm9hcmRUZXh0RWRpdG9yLCB0ZXh0RHJhd2VyIH0pO1xuXG4gIC8vIFJlbmRlcmluZ1xuICBjb25zdCBib2FyZERyYXdlciA9IG5ldyBCb2FyZERyYXdlcih7XG4gICAgZHJhd2VyLFxuICAgIGJvYXJkVmlld3BvcnRTdG9yZSxcbiAgICBib2FyZEN1cnNvcixcbiAgfSk7XG4gIGNvbnN0IGJvYXJkQm94ZXNEcmF3ZXIgPSBuZXcgQm9hcmRCb3hlc0RyYXdlcih7XG4gICAgZHJhd2VyLFxuICAgIGJvYXJkQm94ZXNTdG9yZSxcbiAgICBib2FyZFNlbGVjdGlvbixcbiAgICB0ZXh0RHJhd2VyLFxuICAgIGJvYXJkVGV4dEVkaXRvcixcbiAgfSk7XG4gIGNvbnN0IGRlYnVnRHJhd2VyID0gbmV3IERlYnVnRHJhd2VyKHtcbiAgICBkcmF3ZXIsXG4gICAgYm9hcmRWaWV3cG9ydFN0b3JlLFxuICAgIGJvYXJkU2VsZWN0aW9uLFxuICAgIGJvYXJkQ3Vyc29yLFxuICAgIHRleHREcmF3ZXIsXG4gIH0pO1xuXG4gIC8vIFNlcnZpY2VzXG4gIGNvbnN0IGJvYXJkQm94ZXNTZXJ2aWNlID0gbmV3IEJvYXJkQm94ZXNTZXJ2aWNlKHtcbiAgICBib2FyZEJveGVzU3RvcmUsXG4gICAgYm9hcmRDdXJzb3IsXG4gICAgYm9hcmRUZXh0RWRpdG9yLFxuICAgIGJvYXJkVmlld3BvcnRTdG9yZSxcbiAgfSk7XG4gIGNvbnN0IGJvYXJkQ3Vyc29yU2VydmljZSA9IG5ldyBCb2FyZEN1cnNvclNlcnZpY2Uoe1xuICAgIGJvYXJkQm94ZXNTdG9yZSxcbiAgICBib2FyZEN1cnNvcixcbiAgICBib2FyZFZpZXdwb3J0U3RvcmUsXG4gIH0pO1xuICBjb25zdCBib2FyZFNlbGVjdGlvblNlcnZpY2UgPSBuZXcgQm9hcmRTZWxlY3Rpb25TZXJ2aWNlKHtcbiAgICBib2FyZEJveGVzU3RvcmUsXG4gICAgYm9hcmRTZWxlY3Rpb24sXG4gICAgYm9hcmRWaWV3cG9ydFN0b3JlLFxuICB9KTtcbiAgY29uc3QgYm9hcmRWaWV3cG9ydFNlcnZpY2UgPSBuZXcgQm9hcmRWaWV3cG9ydFNlcnZpY2Uoe1xuICAgIGJvYXJkVmlld3BvcnRTdG9yZSxcbiAgICBib2FyZEN1cnNvcixcbiAgfSk7XG5cbiAgLy8gQ29udHJvbGxlcnNcbiAgbmV3IEJvYXJkQm94ZXNDb250cm9sbGVyKHtcbiAgICBib2FyZEJveGVzU3RvcmUsXG4gICAgYm9hcmRUZXh0RWRpdG9yLFxuICB9KTtcbiAgbmV3IEJvYXJkVmlld3BvcnRDb250cm9sbGVyKHsgYm9hcmRCb3hlc1N0b3JlLCBib2FyZEN1cnNvciwgYm9hcmRWaWV3cG9ydFNlcnZpY2UsIGJvYXJkVmlld3BvcnRTdG9yZSB9KTtcbiAgbmV3IEJvYXJkQ3Vyc29yQ29udHJvbGxlcih7XG4gICAgYm9hcmRCb3hlc1NlcnZpY2UsXG4gICAgYm9hcmRCb3hlc1N0b3JlLFxuICAgIGJvYXJkQ3Vyc29yLFxuICAgIGJvYXJkQ3Vyc29yU2VydmljZSxcbiAgICBib2FyZFNlbGVjdGlvbixcbiAgICBib2FyZFRleHRFZGl0b3IsXG4gIH0pO1xuICBuZXcgQm9hcmRTZWxlY3Rpb25Db250cm9sbGVyKHtcbiAgICBib2FyZEJveGVzU3RvcmUsXG4gICAgYm9hcmRTZWxlY3Rpb24sXG4gICAgYm9hcmRTZWxlY3Rpb25TZXJ2aWNlLFxuICAgIGJvYXJkVmlld3BvcnRTdG9yZSxcbiAgfSk7XG4gIG5ldyBCb2FyZFJlbmRlcmluZ0NvbnRyb2xsZXIoe1xuICAgIGJvYXJkQm94ZXNEcmF3ZXIsXG4gICAgYm9hcmREcmF3ZXIsXG4gICAgZGVidWdEcmF3ZXIsXG4gICAgcmVuZGVyZXIsXG4gICAgdGV4dEVkaXRvckRyYXdlcixcbiAgICBzZWxlY3Rpb25EcmF3ZXIsXG4gIH0pO1xuXG4gICh3aW5kb3cgYXMgYW55KS5idnMgPSBib2FyZFZpZXdwb3J0U3RvcmU7XG4gICh3aW5kb3cgYXMgYW55KS5iYnMgPSBib2FyZEJveGVzU3RvcmU7XG4gICh3aW5kb3cgYXMgYW55KS5jID0gYm9hcmRDdXJzb3I7XG59O1xuIiwiaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DdXJzb3InO1xuaW1wb3J0IHsgc3VidHJhY3QgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMvc3VidHJhY3QnO1xuaW1wb3J0IHsgQm9hcmRWaWV3cG9ydFN0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL0JvYXJkVmlld3BvcnRTdG9yZSc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLy4uLy4uL21hdGgvdmVjdG9ycy9WZWN0b3InO1xuXG50eXBlIEJvYXJkQ3Vyc29yRGVwZW5kZW5jaWVzID0ge1xuICBjb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgYm9hcmRWaWV3cG9ydFN0b3JlOiBCb2FyZFZpZXdwb3J0U3RvcmU7XG59O1xuXG5leHBvcnQgY2xhc3MgQm9hcmRDdXJzb3IgZXh0ZW5kcyBDdXJzb3Ige1xuICBwcml2YXRlIGQ6IEJvYXJkQ3Vyc29yRGVwZW5kZW5jaWVzO1xuXG4gIGNvbnN0cnVjdG9yKGQ6IEJvYXJkQ3Vyc29yRGVwZW5kZW5jaWVzKSB7XG4gICAgc3VwZXIoZC5jb250YWluZXJFbGVtZW50KTtcblxuICAgIHRoaXMuZCA9IGQ7XG5cbiAgICB0aGlzLnBvc2l0aW9uTW9kaWZpZXJzLnB1c2goKHBvc2l0aW9uOiBWZWN0b3IpID0+IHN1YnRyYWN0KHBvc2l0aW9uLCB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLm9mZnNldCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDdXJzb3IgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0N1cnNvcic7XG5pbXBvcnQgeyBTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlbGVjdGlvbic7XG5pbXBvcnQgeyBtb3ZlIH0gZnJvbSAnLi4vLi4vbWF0aC9yZWN0YW5nbGUvbW92ZSc7XG5pbXBvcnQgeyBCb2FyZEJveGVzU3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRCb3hlc1N0b3JlJztcbmltcG9ydCB7IEJvYXJkVmlld3BvcnRTdG9yZSB9IGZyb20gJy4uL3N0b3Jlcy9Cb2FyZFZpZXdwb3J0U3RvcmUnO1xuXG50eXBlIEJvYXJkU2VsZWN0aW9uRGVwZW5kZW5jaWVzID0ge1xuICBjdXJzb3I6IEN1cnNvcjtcbiAgYm9hcmRWaWV3cG9ydFN0b3JlOiBCb2FyZFZpZXdwb3J0U3RvcmU7XG4gIGJvYXJkQm94ZXNTdG9yZTogQm9hcmRCb3hlc1N0b3JlO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkU2VsZWN0aW9uIGV4dGVuZHMgU2VsZWN0aW9uIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZFNlbGVjdGlvbkRlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZFNlbGVjdGlvbkRlcGVuZGVuY2llcykge1xuICAgIHN1cGVyKGQuY3Vyc29yKTtcblxuICAgIHRoaXMuZCA9IGQ7XG5cbiAgICB0aGlzLnNlbGVjdFN0YXJ0RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlU2VsZWN0U3RhcnQoKSk7XG4gICAgdGhpcy5zZWxlY3RFbmRFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVTZWxlY3RFbmQoKSk7XG4gICAgdGhpcy5zZWxlY3RlZEFyZWFNb2RpZmllcnMucHVzaCgoc2VsZWN0ZWRBcmVhKSA9PiBtb3ZlKHNlbGVjdGVkQXJlYSwgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5vZmZzZXQsIC0xKSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdFN0YXJ0KCkge1xuICAgIHRoaXMuY2FuU2VsZWN0ID0gQm9vbGVhbihcbiAgICAgIHRoaXMuc2VsZWN0ZWRBcmVhICYmICF0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmlzTW92aW5nVmlld1BvcnQgJiYgIXRoaXMuZC5ib2FyZEJveGVzU3RvcmUuY3Vyc29yT3ZlckJveCxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZWxlY3RFbmQoKSB7XG4gICAgdGhpcy5jYW5TZWxlY3QgPSB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUZXh0RWRpdG9yIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXh0RWRpdG9yJztcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2VudGl0aWVzL0JveCc7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZFRleHRFZGl0b3IgZXh0ZW5kcyBUZXh0RWRpdG9yIHtcbiAgcHVibGljIHNob3duRm9yQm94PzogQm94O1xuXG4gIHB1YmxpYyBzaG93QXQoYm94OiBCb3gpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBib3guY29udGVudDtcbiAgICB0aGlzLnNob3duRm9yQm94ID0gYm94O1xuICAgIHN1cGVyLnNob3dBdChib3gsIGJveCk7XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpIHtcbiAgICBzdXBlci5oaWRlKCk7XG5cbiAgICBpZiAoIXRoaXMuc2hvd25Gb3JCb3gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3duRm9yQm94LmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgdGhpcy5zaG93bkZvckJveCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGVpZ2h0RGF0YSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGV4dEVkaXRvcic7XG5pbXBvcnQgeyBLRVlTLCBvbktleVByZXNzZWQgfSBmcm9tICcuLi8uLi91dGlscy9rZXlib2FyZCc7XG5pbXBvcnQgeyBCb2FyZFRleHRFZGl0b3IgfSBmcm9tICcuLi9jb21wb25lbnRzL0JvYXJkVGV4dEVkaXRvcic7XG5pbXBvcnQgeyBCb2FyZEJveGVzU3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRCb3hlc1N0b3JlJztcblxudHlwZSBCb2FyZEJveGVzQ29udHJvbGxlckRlcGVuZGVuY2llcyA9IHtcbiAgYm9hcmRUZXh0RWRpdG9yOiBCb2FyZFRleHRFZGl0b3I7XG4gIGJvYXJkQm94ZXNTdG9yZTogQm9hcmRCb3hlc1N0b3JlO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkQm94ZXNDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZEJveGVzQ29udHJvbGxlckRlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZEJveGVzQ29udHJvbGxlckRlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG5cbiAgICB0aGlzLmQuYm9hcmRUZXh0RWRpdG9yLmNvbnRlbnRIZWlnaHRFdmVudC5zdWJzY3JpYmUoKGRhdGEpID0+IHRoaXMuaGFuZGxlSGVpZ2h0Q2hhbmdlKGRhdGEpKTtcbiAgICBvbktleVByZXNzZWQoS0VZUy5kZWxldGUsICgpID0+IHRoaXMuaGFuZGxlRGVsZXRlUHJlc3NlZCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSGVpZ2h0Q2hhbmdlKHsgaGVpZ2h0IH06IEhlaWdodERhdGEpIHtcbiAgICBpZiAodGhpcy5kLmJvYXJkVGV4dEVkaXRvci5zaG93bkZvckJveCkge1xuICAgICAgdGhpcy5kLmJvYXJkVGV4dEVkaXRvci5zaG93bkZvckJveC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEZWxldGVQcmVzc2VkKCkge1xuICAgIHRoaXMuZC5ib2FyZFRleHRFZGl0b3IuaGlkZSgpO1xuXG4gICAgZm9yIChjb25zdCBbLCBib3hdIG9mIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuc2VsZWN0ZWRCb3hlcykge1xuICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5kZWxldGUoYm94KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERyYWdEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvZG9tL2V4dGVuZGVkQ2xpY2tIYW5kbGVyJztcbmltcG9ydCB7IEJvYXJkQ3Vyc29yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb2FyZEN1cnNvcic7XG5pbXBvcnQgeyBCb2FyZFNlbGVjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQm9hcmRTZWxlY3Rpb24nO1xuaW1wb3J0IHsgQm9hcmRUZXh0RWRpdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb2FyZFRleHRFZGl0b3InO1xuaW1wb3J0IHsgQm9hcmRCb3hlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9Cb2FyZEJveGVzU2VydmljZSc7XG5pbXBvcnQgeyBCb2FyZEN1cnNvclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9Cb2FyZEN1cnNvclNlcnZpY2UnO1xuaW1wb3J0IHsgQm9hcmRCb3hlc1N0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL0JvYXJkQm94ZXNTdG9yZSc7XG5cbnR5cGUgQm9hcmRDdXJzb3JDb250cm9sbGVyRGVwZW5kZW5jaWVzID0ge1xuICBib2FyZEJveGVzU3RvcmU6IEJvYXJkQm94ZXNTdG9yZTtcbiAgYm9hcmRDdXJzb3I6IEJvYXJkQ3Vyc29yO1xuICBib2FyZFRleHRFZGl0b3I6IEJvYXJkVGV4dEVkaXRvcjtcbiAgYm9hcmRTZWxlY3Rpb246IEJvYXJkU2VsZWN0aW9uO1xuICBib2FyZEN1cnNvclNlcnZpY2U6IEJvYXJkQ3Vyc29yU2VydmljZTtcbiAgYm9hcmRCb3hlc1NlcnZpY2U6IEJvYXJkQm94ZXNTZXJ2aWNlO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkQ3Vyc29yQ29udHJvbGxlciB7XG4gIHByaXZhdGUgZDogQm9hcmRDdXJzb3JDb250cm9sbGVyRGVwZW5kZW5jaWVzO1xuXG4gIGNvbnN0cnVjdG9yKGQ6IEJvYXJkQ3Vyc29yQ29udHJvbGxlckRlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG5cbiAgICB0aGlzLmQuYm9hcmRDdXJzb3IubW92ZUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZUN1cnNvck1vdmUoKSk7XG4gICAgdGhpcy5kLmJvYXJkQ3Vyc29yLnRhcEV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZVRhcCgpKTtcbiAgICB0aGlzLmQuYm9hcmRDdXJzb3IuZG91YmxlVGFiRXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlRG91YmxlVGFwKCkpO1xuICAgIHRoaXMuZC5ib2FyZEN1cnNvci5kcmFnU3RhcnRFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVEcmFnU3RhcnQoKSk7XG4gICAgdGhpcy5kLmJvYXJkQ3Vyc29yLmRyYWdFdmVudC5zdWJzY3JpYmUoKGRhdGEpID0+IHRoaXMuaGFuZGxlRHJhZyhkYXRhKSk7XG4gICAgdGhpcy5kLmJvYXJkQ3Vyc29yLnVwRXZlbnQuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLmhhbmRsZVVwKGRhdGEpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ3Vyc29yTW92ZSgpIHtcbiAgICB0aGlzLmQuYm9hcmRDdXJzb3JTZXJ2aWNlLmhvdmVyQ3Vyc29yT3ZlckJveCgpO1xuXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgbW92aW5nIHRoZSBjdXJzb3Igb25seSB0byBoaWdobGlnaHQgYm94ZXNcbiAgICAvLyBpZiB0aGUgdXNlciBpcyBub3QgZHJhZ2dpbmcgb3IgYSBib3ggb3IgY3JlYXRpbmcgYSBzZWxlY3Rpb24gYWxyZWFkeS5cbiAgICBpZiAodGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5kcmFnZ2luZ0JveCB8fCB0aGlzLmQuYm9hcmRTZWxlY3Rpb24uYWJzb2x1dGVTZWxlY3RlZEFyZWEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmQuYm9hcmRDdXJzb3JTZXJ2aWNlLmhpZ2hsaWdodEJveCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVUYXAoKSB7XG4gICAgdGhpcy5kLmJvYXJkQ3Vyc29yU2VydmljZS5zZWxlY3RCb3goKTtcblxuICAgIGlmIChcbiAgICAgICF0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmN1cnNvck92ZXJCb3ggfHxcbiAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuY3Vyc29yT3ZlckJveCAhPT0gdGhpcy5kLmJvYXJkVGV4dEVkaXRvci5zaG93bkZvckJveFxuICAgICkge1xuICAgICAgdGhpcy5kLmJvYXJkVGV4dEVkaXRvci5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEb3VibGVUYXAoKSB7XG4gICAgaWYgKHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuY3Vyc29yT3ZlckJveCkge1xuICAgICAgdGhpcy5kLmJvYXJkVGV4dEVkaXRvci5zaG93QXQodGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTZXJ2aWNlLmNyZWF0ZUJveEF0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEcmFnU3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmN1cnNvck92ZXJCb3gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZC5ib2FyZEJveGVzU3RvcmUuc2VsZWN0ZWRCb3hlcy5oYXModGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94LmlkKSkge1xuICAgICAgdGhpcy5kLmJvYXJkQ3Vyc29yU2VydmljZS5zZWxlY3RCb3goKTtcbiAgICB9XG5cbiAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94ID0gdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94O1xuICAgIHRoaXMuZC5ib2FyZFRleHRFZGl0b3IuaGlkZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEcmFnKGRyYWdEYXRhOiBEcmFnRGF0YSkge1xuICAgIHRoaXMuZC5ib2FyZEN1cnNvclNlcnZpY2UuZHJhZ0JveChkcmFnRGF0YSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVVwKGRyYWdEYXRhOiBEcmFnRGF0YSkge1xuICAgIHRoaXMuZC5ib2FyZEN1cnNvclNlcnZpY2UuY29ubmVjdEJveGVzKGRyYWdEYXRhKTtcbiAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94ID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uLy4uL3JlbmRlcmluZy9SZW5kZXJlcic7XG5pbXBvcnQgeyBTZWxlY3Rpb25EcmF3ZXIgfSBmcm9tICcuLi8uLi9yZW5kZXJpbmcvU2VsZWN0aW9uRHJhd2VyJztcbmltcG9ydCB7IFRleHRFZGl0b3JEcmF3ZXIgfSBmcm9tICcuLi8uLi9yZW5kZXJpbmcvVGV4dEVkaXRvckRyYXdlcic7XG5pbXBvcnQgeyBCb2FyZEJveGVzRHJhd2VyIH0gZnJvbSAnLi4vcmVuZGVyaW5nL0JvYXJkQm94ZXNEcmF3ZXInO1xuaW1wb3J0IHsgQm9hcmREcmF3ZXIgfSBmcm9tICcuLi9yZW5kZXJpbmcvQm9hcmREcmF3ZXInO1xuaW1wb3J0IHsgRGVidWdEcmF3ZXIgfSBmcm9tICcuLi9yZW5kZXJpbmcvRGVidWdEcmF3ZXInO1xuXG50eXBlIEJvYXJkRHJhd2VyQ29udHJvbGxlckRlcGVuZGVuY2llcyA9IHtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyO1xuICBib2FyZERyYXdlcjogQm9hcmREcmF3ZXI7XG4gIGJvYXJkQm94ZXNEcmF3ZXI6IEJvYXJkQm94ZXNEcmF3ZXI7XG4gIHNlbGVjdGlvbkRyYXdlcjogU2VsZWN0aW9uRHJhd2VyO1xuICBkZWJ1Z0RyYXdlcjogRGVidWdEcmF3ZXI7XG4gIHRleHRFZGl0b3JEcmF3ZXI6IFRleHRFZGl0b3JEcmF3ZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgQm9hcmRSZW5kZXJpbmdDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZERyYXdlckNvbnRyb2xsZXJEZXBlbmRlbmNpZXM7XG4gIHByaXZhdGUgaXNEZWJ1Z0RyYXdlckVuYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZERyYXdlckNvbnRyb2xsZXJEZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLmQgPSBkO1xuXG4gICAgaWYgKHRoaXMuaXNEZWJ1Z0RyYXdlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZC5ib2FyZEJveGVzRHJhd2VyLmFmdGVyQm94RHJhd25FdmVudC5zdWJzY3JpYmUoKGJveCkgPT4gdGhpcy5kLmRlYnVnRHJhd2VyLnJlY3RhbmdsZUNvb3JkaW5hdGVzKGJveCkpO1xuICAgIH1cblxuICAgIHRoaXMuZC5yZW5kZXJlci5hbmltYXRpb25FdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVBbmltYXRlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBbmltYXRlKCkge1xuICAgIC8vIFN5bmMgc29tZSBnbG9iYWwgc2V0dGluZ3NcbiAgICB0aGlzLmQuYm9hcmREcmF3ZXIuY3Vyc29yKCk7XG4gICAgdGhpcy5kLmJvYXJkRHJhd2VyLmRpbWVuc2lvbnMoKTtcbiAgICB0aGlzLmQuYm9hcmREcmF3ZXIuY2xlYXJCb2FyZCgpO1xuICAgIHRoaXMuZC5ib2FyZERyYXdlci5yZXNldFRyYW5zZm9ybSgpO1xuICAgIHRoaXMuZC5ib2FyZERyYXdlci50cmFuc2Zvcm0oKTtcblxuICAgIC8vIDFuZCBsYXllclxuICAgIHRoaXMuZC5ib2FyZEJveGVzRHJhd2VyLnJlbGF0aW9ucygpO1xuXG4gICAgLy8gMnJkIGxheWVyXG4gICAgdGhpcy5kLmJvYXJkQm94ZXNEcmF3ZXIuYm94ZXMoKTtcbiAgICB0aGlzLmQudGV4dEVkaXRvckRyYXdlci50ZXh0RWRpdG9yKCk7XG5cbiAgICAvLyAzdGggbGF5ZXJcbiAgICB0aGlzLmQuc2VsZWN0aW9uRHJhd2VyLnNlbGVjdGVkQXJlYSgpO1xuICAgIHRoaXMuaXNEZWJ1Z0RyYXdlckVuYWJsZWQgJiYgdGhpcy5kLmRlYnVnRHJhd2VyLnNlbGVjdGVkQXJlYUNvb3JkaW5hdGVzKCk7XG5cbiAgICAvLyA0dGggbGF5ZXJcbiAgICB0aGlzLmlzRGVidWdEcmF3ZXJFbmFibGVkICYmIHRoaXMuZC5kZWJ1Z0RyYXdlci5jZW50ZXJHdWlkZXMoKTtcblxuICAgIC8vIDV0aCBsYXllclxuICAgIHRoaXMuaXNEZWJ1Z0RyYXdlckVuYWJsZWQgJiYgdGhpcy5kLmRlYnVnRHJhd2VyLmN1cnNvckNvb3JkaW5hdGVzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJvYXJkU2VsZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb2FyZFNlbGVjdGlvbic7XG5pbXBvcnQgeyBCb2FyZFNlbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9Cb2FyZFNlbGVjdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgQm9hcmRCb3hlc1N0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL0JvYXJkQm94ZXNTdG9yZSc7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRWaWV3cG9ydFN0b3JlJztcblxudHlwZSBCb2FyZFNlbGVjdGlvbkNvbnRyb2xsZXJEZXBlbmRlbmNpZXMgPSB7XG4gIGJvYXJkU2VsZWN0aW9uOiBCb2FyZFNlbGVjdGlvbjtcbiAgYm9hcmRCb3hlc1N0b3JlOiBCb2FyZEJveGVzU3RvcmU7XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlO1xuICBib2FyZFNlbGVjdGlvblNlcnZpY2U6IEJvYXJkU2VsZWN0aW9uU2VydmljZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBCb2FyZFNlbGVjdGlvbkNvbnRyb2xsZXIge1xuICBwcml2YXRlIGQ6IEJvYXJkU2VsZWN0aW9uQ29udHJvbGxlckRlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZFNlbGVjdGlvbkNvbnRyb2xsZXJEZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLmQgPSBkO1xuXG4gICAgdGhpcy5kLmJvYXJkU2VsZWN0aW9uLnNlbGVjdEV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VsZWN0KCkge1xuICAgIGlmICh0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmN1cnNvck92ZXJCb3ggfHwgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5pc01vdmluZ1ZpZXdQb3J0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kLmJvYXJkU2VsZWN0aW9uU2VydmljZS5zZWxlY3RCb3hlcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTY3JvbGxEYXRhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DdXJzb3InO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzL2FkZCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMvVmVjdG9yJztcbmltcG9ydCB7IEN1cnNvclR5cGUgfSBmcm9tICcuLi8uLi9yZW5kZXJpbmcvRHJhd2VyJztcbmltcG9ydCB7IERyYWdEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvZG9tL2V4dGVuZGVkQ2xpY2tIYW5kbGVyJztcbmltcG9ydCB7IEtFWVMsIG9uS2V5RG93biwgb25LZXlzRG93biwgb25LZXlVcCB9IGZyb20gJy4uLy4uL3V0aWxzL2tleWJvYXJkJztcbmltcG9ydCB7IEJvYXJkQ3Vyc29yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb2FyZEN1cnNvcic7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL0JvYXJkVmlld3BvcnRTZXJ2aWNlJztcbmltcG9ydCB7IEJvYXJkQm94ZXNTdG9yZSB9IGZyb20gJy4uL3N0b3Jlcy9Cb2FyZEJveGVzU3RvcmUnO1xuaW1wb3J0IHsgQm9hcmRWaWV3cG9ydFN0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL0JvYXJkVmlld3BvcnRTdG9yZSc7XG5cbnR5cGUgQm9hcmRNYW5hZ2VyRGVwZW5kZW5jaWVzID0ge1xuICBib2FyZEN1cnNvcjogQm9hcmRDdXJzb3I7XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlO1xuICBib2FyZEJveGVzU3RvcmU6IEJvYXJkQm94ZXNTdG9yZTtcbiAgYm9hcmRWaWV3cG9ydFNlcnZpY2U6IEJvYXJkVmlld3BvcnRTZXJ2aWNlO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkVmlld3BvcnRDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZE1hbmFnZXJEZXBlbmRlbmNpZXM7XG5cbiAgY29uc3RydWN0b3IoZDogQm9hcmRNYW5hZ2VyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcblxuICAgIHRoaXMuZC5ib2FyZEN1cnNvci5zY3JvbGxFdmVudC5zdWJzY3JpYmUoKGRhdGEpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKGRhdGEpKTtcbiAgICB0aGlzLmQuYm9hcmRDdXJzb3IuZHJhZ0V2ZW50LnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy5oYW5kbGVEcmFnKGRhdGEpKTtcblxuICAgIG9uS2V5RG93bihLRVlTLnNwYWNlLCAoKSA9PiB0aGlzLmhhbmRsZVNwYWNlRG93bigpKTtcbiAgICBvbktleVVwKEtFWVMuc3BhY2UsICgpID0+IHRoaXMuaGFuZGxlU3BhY2VVcCgpKTtcbiAgICBvbktleXNEb3duKFtLRVlTLmFsdCwgS0VZUy5wbHVzXSwgKCkgPT4gdGhpcy5kLmJvYXJkVmlld3BvcnRTZXJ2aWNlLnpvb21Ub0N1cnNvcihuZXcgVmVjdG9yKHsgeDogMCwgeTogLTUwIH0pKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5oYW5kbGVSZXNpemUoKSk7XG4gICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2Nyb2xsKHsgZGVsdGEgfTogU2Nyb2xsRGF0YSkge1xuICAgIHRoaXMuZC5ib2FyZFZpZXdwb3J0U2VydmljZS56b29tVG9DdXJzb3IoZGVsdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTcGFjZURvd24oKSB7XG4gICAgaWYgKHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuZHJhZ2dpbmdCb3gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmlzTW92aW5nVmlld1BvcnQgPSB0cnVlO1xuICAgIHRoaXMuZC5ib2FyZEN1cnNvci5jdXJzb3JUeXBlID0gQ3Vyc29yVHlwZS5HcmFiO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEcmFnKHsgZGVsdGEgfTogRHJhZ0RhdGEpIHtcbiAgICBpZiAoIXRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuaXNNb3ZpbmdWaWV3UG9ydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFkZCh0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLm9mZnNldCwgZGVsdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTcGFjZVVwKCkge1xuICAgIGlmICghdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5pc01vdmluZ1ZpZXdQb3J0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5pc01vdmluZ1ZpZXdQb3J0ID0gZmFsc2U7XG4gICAgdGhpcy5kLmJvYXJkQ3Vyc29yLmN1cnNvclR5cGUgPSBDdXJzb3JUeXBlLkRlZmF1bHQ7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2VudGl0aWVzL0JveCc7XG5pbXBvcnQgeyBSZWxhdGlvbiB9IGZyb20gJy4uLy4uL2VudGl0aWVzL1JlbGF0aW9uJztcbmltcG9ydCB7IGNlbnRlciB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9jZW50ZXInO1xuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSAnLi4vLi4vcmVuZGVyaW5nL0RyYXdlcic7XG5pbXBvcnQgeyBUZXh0RHJhd2VyIH0gZnJvbSAnLi4vLi4vcmVuZGVyaW5nL1RleHREcmF3ZXInO1xuaW1wb3J0IHsgY3JlYXRlVGV4dEJsb2NrTGluZXMgfSBmcm9tICcuLi8uLi91dGlscy9jYW52YXNUZXh0JztcbmltcG9ydCB7IFB1YlN1YiB9IGZyb20gJy4uLy4uL3V0aWxzL3B1YlN1Yi9QdWJTdWInO1xuaW1wb3J0IHsgQm9hcmRTZWxlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL0JvYXJkU2VsZWN0aW9uJztcbmltcG9ydCB7IEJvYXJkQm94ZXNTdG9yZSB9IGZyb20gJy4uL3N0b3Jlcy9Cb2FyZEJveGVzU3RvcmUnO1xuaW1wb3J0IHsgQm9hcmRUZXh0RWRpdG9yIH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL0JvYXJkVGV4dEVkaXRvcic7XG5cbnR5cGUgQm9hcmRCb3hlc0RyYXdlckRlcGVuZGVuY2llcyA9IHtcbiAgZHJhd2VyOiBEcmF3ZXI7XG4gIHRleHREcmF3ZXI6IFRleHREcmF3ZXI7XG4gIGJvYXJkQm94ZXNTdG9yZTogQm9hcmRCb3hlc1N0b3JlO1xuICBib2FyZFNlbGVjdGlvbjogQm9hcmRTZWxlY3Rpb247XG4gIGJvYXJkVGV4dEVkaXRvcjogQm9hcmRUZXh0RWRpdG9yO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkQm94ZXNEcmF3ZXIgaW1wbGVtZW50cyBCb2FyZEJveGVzRHJhd2VyIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZEJveGVzRHJhd2VyRGVwZW5kZW5jaWVzO1xuXG4gIHByaXZhdGUgYWZ0ZXJCb3hEcmF3blB1YlN1YiA9IG5ldyBQdWJTdWI8Qm94PigpO1xuICBwdWJsaWMgYWZ0ZXJCb3hEcmF3bkV2ZW50ID0gdGhpcy5hZnRlckJveERyYXduUHViU3ViLmV2ZW50O1xuXG4gIHByaXZhdGUgYm94Q29udGVudExpbmVzQ2FjaGU6IE1hcDxcbiAgICBudW1iZXIsXG4gICAge1xuICAgICAgY29udGVudDogc3RyaW5nO1xuICAgICAgbGluZXM6IHN0cmluZ1tdO1xuICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICB9XG4gID4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoZDogQm9hcmRCb3hlc0RyYXdlckRlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG5cbiAgICAvLyBUT0RPIGZpbmQgYSBiZXR0ZXIgd2F5XG4gICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5kZWxldGVFdmVudC5zdWJzY3JpYmUoKGJveCkgPT4gdGhpcy5oYW5kbGVEZWxldGUoYm94KSk7XG4gIH1cblxuICBwdWJsaWMgcmVsYXRpb25zKCkge1xuICAgIGZvciAoY29uc3QgWywgcmVsYXRpb25dIG9mIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUucmVsYXRpb25zKSB7XG4gICAgICB0aGlzLnJlbGF0aW9uKHJlbGF0aW9uKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYm94ZXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnByaW9yaXRpemVkQm94ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBib3ggPSB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnByaW9yaXRpemVkQm94ZXNbaV07XG5cbiAgICAgIHRoaXMuYm94KGJveCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBib3goYm94OiBCb3gpIHtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzLmhhcyhib3guaWQpO1xuICAgIGNvbnN0IGlzSGlnaGxpZ2h0ZWQgPSB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmhpZ2hsaWdodGVkQm94ZXMuaGFzKGJveC5pZCk7XG5cbiAgICB0aGlzLmQuZHJhd2VyLnJlY3RhbmdsZSh7XG4gICAgICBzdHJva2VTdHlsZTogaXNTZWxlY3RlZCA/ICdibHVlJyA6ICd0cmFuc3BhcmVudCcsXG4gICAgICBmaWxsU3R5bGU6IGlzSGlnaGxpZ2h0ZWQgPyAncmVkJyA6ICdza3libHVlJyxcbiAgICAgIHJlY3RhbmdsZTogYm94LFxuICAgIH0pO1xuXG4gICAgaWYgKGJveC5jb250ZW50KSB7XG4gICAgICB0aGlzLmJveENvbnRlbnQoYm94KTtcbiAgICB9XG5cbiAgICB0aGlzLmFmdGVyQm94RHJhd25QdWJTdWIucHVibGlzaChib3gpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWNoZWRCb3hDb250ZW50TGluZXMoYm94OiBCb3gpIHtcbiAgICBsZXQgbGluZXNDYWNoZSA9IHRoaXMuYm94Q29udGVudExpbmVzQ2FjaGUuZ2V0KGJveC5pZCk7XG5cbiAgICAvLyBJbnZhbGlkYXRlIC8gY3JlYXRlIGNhY2hlIGlmIHJlcXVpcmVkXG4gICAgaWYgKCFsaW5lc0NhY2hlIHx8IGJveC5jb250ZW50ICE9PSBsaW5lc0NhY2hlLmNvbnRlbnQgfHwgYm94LndpZHRoICE9PSBsaW5lc0NhY2hlLndpZHRoKSB7XG4gICAgICBjb25zdCB7IGxpbmVzIH0gPSBjcmVhdGVUZXh0QmxvY2tMaW5lcyh0aGlzLmQuZHJhd2VyLmNvbnRleHQsIHtcbiAgICAgICAgdGV4dDogYm94LmNvbnRlbnQsXG4gICAgICAgIHJlY3RhbmdsZTogYm94LFxuICAgICAgfSk7XG5cbiAgICAgIGxpbmVzQ2FjaGUgPSB7XG4gICAgICAgIGxpbmVzLFxuICAgICAgICBjb250ZW50OiBib3guY29udGVudCxcbiAgICAgICAgd2lkdGg6IGJveC53aWR0aCxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYm94Q29udGVudExpbmVzQ2FjaGUuc2V0KGJveC5pZCwgbGluZXNDYWNoZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzQ2FjaGUubGluZXM7XG4gIH1cblxuICBwcml2YXRlIGJveENvbnRlbnQoYm94OiBCb3gpIHtcbiAgICAvLyBUaGUgY29udGVudCBpcyBhbHJlYWR5IHJlbmRlcmVkIGJ5IHRoZSBlZGl0b3JcbiAgICBpZiAodGhpcy5kLmJvYXJkVGV4dEVkaXRvci5zaG93bkZvckJveCA9PT0gYm94KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kLnRleHREcmF3ZXIudGV4dExpbmVzQWZ0ZXJQb2ludCh7XG4gICAgICBwb3NpdGlvbjogYm94LFxuICAgICAgbGluZXM6IHRoaXMuZ2V0Q2FjaGVkQm94Q29udGVudExpbmVzKGJveCksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbGF0aW9uKHJlbGF0aW9uOiBSZWxhdGlvbikge1xuICAgIGNvbnN0IHsgZnJvbUJveCwgdG9Cb3ggfSA9IHJlbGF0aW9uO1xuXG4gICAgdGhpcy5kLmRyYXdlci5saW5lKHtcbiAgICAgIGZyb206IGNlbnRlcihmcm9tQm94LmNsb25lKCksIHtcbiAgICAgICAgeDogZnJvbUJveC54ICsgZnJvbUJveC53aWR0aCxcbiAgICAgICAgeTogZnJvbUJveC55ICsgZnJvbUJveC5oZWlnaHQsXG4gICAgICB9KSxcbiAgICAgIHRvOiBjZW50ZXIodG9Cb3guY2xvbmUoKSwge1xuICAgICAgICB4OiB0b0JveC54ICsgdG9Cb3gud2lkdGgsXG4gICAgICAgIHk6IHRvQm94LnkgKyB0b0JveC5oZWlnaHQsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRPRE8gbW92ZSB0byBib3hlcyBzdG9yZSBjYWNoZVxuICBwcml2YXRlIGhhbmRsZURlbGV0ZShib3g6IEJveCkge1xuICAgIHRoaXMuYm94Q29udGVudExpbmVzQ2FjaGUuZGVsZXRlKGJveC5pZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4uLy4uL21hdGgvcmVjdGFuZ2xlL1JlY3RhbmdsZSc7XG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuLi8uLi9yZW5kZXJpbmcvRHJhd2VyJztcbmltcG9ydCB7IEJvYXJkQ3Vyc29yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb2FyZEN1cnNvcic7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRWaWV3cG9ydFN0b3JlJztcblxudHlwZSBCb2FyZERyYXdlckRlcGVuZGVuY2llcyA9IHtcbiAgZHJhd2VyOiBEcmF3ZXI7XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlO1xuICBib2FyZEN1cnNvcjogQm9hcmRDdXJzb3I7XG59O1xuXG5leHBvcnQgY2xhc3MgQm9hcmREcmF3ZXIge1xuICBwcml2YXRlIGQ6IEJvYXJkRHJhd2VyRGVwZW5kZW5jaWVzO1xuXG4gIGNvbnN0cnVjdG9yKGQ6IEJvYXJkRHJhd2VyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcbiAgfVxuXG4gIHB1YmxpYyBjdXJzb3IoKSB7XG4gICAgdGhpcy5kLmRyYXdlci5jdXJzb3IodGhpcy5kLmJvYXJkQ3Vyc29yLmN1cnNvclR5cGUpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQm9hcmQoKSB7XG4gICAgdGhpcy5kLmRyYXdlci5jbGVhckFyZWEoe1xuICAgICAgYXJlYTogbmV3IFJlY3RhbmdsZSh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuaGVpZ2h0LFxuICAgICAgfSksXG4gICAgICBvZmZzZXQ6IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUub2Zmc2V0LFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5kLmRyYXdlci5kaW1lbnNpb25zKHtcbiAgICAgIHdpZHRoOiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmhlaWdodCxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0cmFuc2Zvcm0oKSB7XG4gICAgdGhpcy5kLmRyYXdlci50cmFuc2Zvcm0oLi4udGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS50cmFuc2Zvcm0ucmF3TWF0cml4MmQpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0VHJhbnNmb3JtKCkge1xuICAgIHRoaXMuZC5kcmF3ZXIucmVzZXRUcmFuc2Zvcm0oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2VudHJhbGl6ZSB9IGZyb20gJy4uLy4uL21hdGgvcmVjdGFuZ2xlL2NlbnRyYWxpemUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnLi4vLi4vbWF0aC9yZWN0YW5nbGUvUmVjdGFuZ2xlJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9hZGQnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzL1ZlY3Rvcic7XG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuLi8uLi9yZW5kZXJpbmcvRHJhd2VyJztcbmltcG9ydCB7IFRleHREcmF3ZXIgfSBmcm9tICcuLi8uLi9yZW5kZXJpbmcvVGV4dERyYXdlcic7XG5pbXBvcnQgeyBCb2FyZEN1cnNvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQm9hcmRDdXJzb3InO1xuaW1wb3J0IHsgQm9hcmRTZWxlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL0JvYXJkU2VsZWN0aW9uJztcbmltcG9ydCB7IEJvYXJkVmlld3BvcnRTdG9yZSB9IGZyb20gJy4uL3N0b3Jlcy9Cb2FyZFZpZXdwb3J0U3RvcmUnO1xuXG5leHBvcnQgdHlwZSBQb2ludENvb3JkaW5hdGVzT3B0aW9ucyA9IHtcbiAgcG9zaXRpb246IFZlY3Rvcjtcbn07XG5cbnR5cGUgRGVidWdEcmF3ZXJEZXBlbmRlbmNpZXMgPSB7XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlO1xuICBib2FyZEN1cnNvcjogQm9hcmRDdXJzb3I7XG4gIGJvYXJkU2VsZWN0aW9uOiBCb2FyZFNlbGVjdGlvbjtcbiAgZHJhd2VyOiBEcmF3ZXI7XG4gIHRleHREcmF3ZXI6IFRleHREcmF3ZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgRGVidWdEcmF3ZXIge1xuICBwcml2YXRlIGQ6IERlYnVnRHJhd2VyRGVwZW5kZW5jaWVzO1xuXG4gIGNvbnN0cnVjdG9yKGQ6IERlYnVnRHJhd2VyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcbiAgfVxuXG4gIHB1YmxpYyBjdXJzb3JDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLmQuZHJhd2VyLnNhdmVBbmRSZXNldCgpO1xuICAgIHRoaXMucG9pbnRDb29yZGluYXRlcyh0aGlzLmQuYm9hcmRDdXJzb3IuYWJzb2x1dGVQb3NpdGlvbiwgdGhpcy5kLmJvYXJkQ3Vyc29yLnBvc2l0aW9uKTtcbiAgICB0aGlzLmQuZHJhd2VyLnJlc3RvcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RlZEFyZWFDb29yZGluYXRlcygpIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5kLmJvYXJkU2VsZWN0aW9uLmFic29sdXRlU2VsZWN0ZWRBcmVhIHx8XG4gICAgICAhdGhpcy5kLmJvYXJkU2VsZWN0aW9uLnNlbGVjdGVkQXJlYSB8fFxuICAgICAgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5pc01vdmluZ1ZpZXdQb3J0XG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kLmRyYXdlci5zYXZlQW5kUmVzZXQoKTtcbiAgICB0aGlzLnJlY3RhbmdsZUNvb3JkaW5hdGVzKHRoaXMuZC5ib2FyZFNlbGVjdGlvbi5hYnNvbHV0ZVNlbGVjdGVkQXJlYSwgdGhpcy5kLmJvYXJkU2VsZWN0aW9uLnNlbGVjdGVkQXJlYSk7XG4gICAgdGhpcy5kLmRyYXdlci5yZXN0b3JlKCk7XG4gIH1cblxuICBwdWJsaWMgcG9pbnRDb29yZGluYXRlcyhwb3NpdGlvbjogVmVjdG9yLCBwb3NpdGlvblRvR2V0VGV4dDogVmVjdG9yID0gcG9zaXRpb24pIHtcbiAgICB0aGlzLmQudGV4dERyYXdlci50ZXh0QWZ0ZXJQb2ludCh7XG4gICAgICBmb250U2l6ZTogMTEsXG4gICAgICB0ZXh0OiBwb3NpdGlvblRvR2V0VGV4dC50b1N0cmluZygpLFxuICAgICAgcG9zaXRpb246IGFkZChcbiAgICAgICAgcG9zaXRpb24uY2xvbmUoKSxcbiAgICAgICAgbmV3IFZlY3Rvcih7XG4gICAgICAgICAgeDogMTUsXG4gICAgICAgICAgeTogLTUsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZWN0YW5nbGVDb29yZGluYXRlcyhyZWN0YW5nbGU6IFJlY3RhbmdsZSwgcmVjdGFuZ2xlVG9HZXRUZXh0OiBSZWN0YW5nbGUgPSByZWN0YW5nbGUpIHtcbiAgICB0aGlzLmQudGV4dERyYXdlci50ZXh0TGluZXNBZnRlclBvaW50KHtcbiAgICAgIGxpbmVzOiBbcmVjdGFuZ2xlVG9HZXRUZXh0LnRvU3RyaW5nKCldLFxuICAgICAgcG9zaXRpb246IHJlY3RhbmdsZSxcbiAgICAgIGZvbnRTaXplOiAxMSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjZW50ZXJHdWlkZXMoKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlU2l6ZSA9IDM7XG5cbiAgICB0aGlzLmQuZHJhd2VyLnNhdmVBbmRSZXNldCgpO1xuXG4gICAgLy8gQ2VudGVyIHBvaW50XG4gICAgdGhpcy5kLmRyYXdlci5yZWN0YW5nbGUoe1xuICAgICAgcmVjdGFuZ2xlOiBjZW50cmFsaXplKFxuICAgICAgICBuZXcgUmVjdGFuZ2xlKHtcbiAgICAgICAgICB4OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmFic29sdXRlQ2VudGVyLngsXG4gICAgICAgICAgeTogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5hYnNvbHV0ZUNlbnRlci55LFxuICAgICAgICAgIHdpZHRoOiByZWN0YW5nbGVTaXplLFxuICAgICAgICAgIGhlaWdodDogcmVjdGFuZ2xlU2l6ZSxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgIH0pO1xuXG4gICAgLy8gVmVydGljYWwgZ3VpZGUgbGluZVxuICAgIHRoaXMuZC5kcmF3ZXIubGluZSh7XG4gICAgICBmcm9tOiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLnRvcCxcbiAgICAgIHRvOiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmJvdHRvbSxcbiAgICB9KTtcblxuICAgIC8vIEhvcml6b250YWwgZ3VpZGUgbGluZVxuICAgIHRoaXMuZC5kcmF3ZXIubGluZSh7XG4gICAgICBmcm9tOiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmxlZnQsXG4gICAgICB0bzogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5yaWdodCxcbiAgICB9KTtcblxuICAgIC8vIENvb3JkaW5hdGVzXG4gICAgdGhpcy5kLnRleHREcmF3ZXIudGV4dEFmdGVyUG9pbnQoe1xuICAgICAgcG9zaXRpb246IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuYWJzb2x1dGVDZW50ZXIsXG4gICAgICB0ZXh0OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmNlbnRlci50b1N0cmluZygpLFxuICAgICAgZm9udFNpemU6IDExLFxuICAgIH0pO1xuXG4gICAgdGhpcy5kLmRyYXdlci5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2VudGl0aWVzL0JveCc7XG5pbXBvcnQgeyBkaXZpZGUgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMvZGl2aWRlJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9WZWN0b3InO1xuaW1wb3J0IHsgbWVyZ2VXaXRoRGVmYXVsdFRleHRPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FudmFzVGV4dCc7XG5pbXBvcnQgeyBCb2FyZEN1cnNvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQm9hcmRDdXJzb3InO1xuaW1wb3J0IHsgQm9hcmRUZXh0RWRpdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb2FyZFRleHRFZGl0b3InO1xuaW1wb3J0IHsgQm9hcmRCb3hlc1N0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL0JvYXJkQm94ZXNTdG9yZSc7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRWaWV3cG9ydFN0b3JlJztcblxudHlwZSBCb2FyZEJveGVzU2VydmljZURlcGVuZGVuY2llcyA9IHtcbiAgYm9hcmRCb3hlc1N0b3JlOiBCb2FyZEJveGVzU3RvcmU7XG4gIGJvYXJkQ3Vyc29yOiBCb2FyZEN1cnNvcjtcbiAgYm9hcmRUZXh0RWRpdG9yOiBCb2FyZFRleHRFZGl0b3I7XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkQm94ZXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZEJveGVzU2VydmljZURlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZEJveGVzU2VydmljZURlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQm94QXRDdXJzb3IoKSB7XG4gICAgY29uc3QgeyBsaW5lSGVpZ2h0LCBwYWRkaW5nIH0gPSBtZXJnZVdpdGhEZWZhdWx0VGV4dE9wdGlvbnMoe30pO1xuICAgIGNvbnN0IG5ld0JveCA9IG5ldyBCb3goe1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgaGVpZ2h0OiBsaW5lSGVpZ2h0ICsgcGFkZGluZyAqIDIsXG4gICAgfSk7XG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBkaXZpZGUoXG4gICAgICBuZXcgVmVjdG9yKHtcbiAgICAgICAgeDogdGhpcy5kLmJvYXJkQ3Vyc29yLnBvc2l0aW9uLnggLSAobmV3Qm94LndpZHRoICogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS56b29tLngpIC8gMixcbiAgICAgICAgeTogdGhpcy5kLmJvYXJkQ3Vyc29yLnBvc2l0aW9uLnkgLSAobmV3Qm94LmhlaWdodCAqIHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuem9vbS55KSAvIDIsXG4gICAgICB9KSxcbiAgICAgIHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuem9vbSxcbiAgICApO1xuXG4gICAgbmV3Qm94LnggPSBuZXdQb3NpdGlvbi54O1xuICAgIG5ld0JveC55ID0gbmV3UG9zaXRpb24ueTtcblxuICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuYWRkKG5ld0JveCk7XG4gICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5oaWdobGlnaHRlZEJveGVzLnNldChuZXdCb3guaWQsIG5ld0JveCk7XG4gICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzLnNldChuZXdCb3guaWQsIG5ld0JveCk7XG4gICAgdGhpcy5kLmJvYXJkVGV4dEVkaXRvci5zaG93QXQobmV3Qm94KTtcblxuICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuY3Vyc29yT3ZlckJveCA9IG5ld0JveDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW50ZXJzZWN0cyB9IGZyb20gJy4uLy4uL21hdGgvcmVjdGFuZ2xlL2ludGVyc2VjdHMnO1xuaW1wb3J0IHsgbW92ZSB9IGZyb20gJy4uLy4uL21hdGgvcmVjdGFuZ2xlL21vdmUnO1xuaW1wb3J0IHsgZGl2aWRlIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzL2RpdmlkZSc7XG5pbXBvcnQgeyBEcmFnRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL2RvbS9leHRlbmRlZENsaWNrSGFuZGxlcic7XG5pbXBvcnQgeyBpc0tleVByZXNzZWQsIEtFWVMgfSBmcm9tICcuLi8uLi91dGlscy9rZXlib2FyZCc7XG5pbXBvcnQgeyBCb2FyZEN1cnNvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQm9hcmRDdXJzb3InO1xuaW1wb3J0IHsgQm9hcmRCb3hlc1N0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL0JvYXJkQm94ZXNTdG9yZSc7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRWaWV3cG9ydFN0b3JlJztcblxudHlwZSBCb2FyZEN1cnNvclNlcnZpY2VEZXBlbmRlbmNpZXMgPSB7XG4gIGJvYXJkQm94ZXNTdG9yZTogQm9hcmRCb3hlc1N0b3JlO1xuICBib2FyZEN1cnNvcjogQm9hcmRDdXJzb3I7XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkQ3Vyc29yU2VydmljZSB7XG4gIHByaXZhdGUgZDogQm9hcmRDdXJzb3JTZXJ2aWNlRGVwZW5kZW5jaWVzO1xuXG4gIGNvbnN0cnVjdG9yKGQ6IEJvYXJkQ3Vyc29yU2VydmljZURlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Qm94KCkge1xuICAgIGlmICghaXNLZXlQcmVzc2VkKEtFWVMuY29udHJvbE9TU3BlY2lmaWMpKSB7XG4gICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnNlbGVjdGVkQm94ZXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94KSB7XG4gICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnNlbGVjdGVkQm94ZXMuc2V0KFxuICAgICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmN1cnNvck92ZXJCb3guaWQsXG4gICAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuY3Vyc29yT3ZlckJveCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhpZ2hsaWdodEJveCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnByZXZpb3VzQ3Vyc29yT3ZlckJveCAmJlxuICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94ICE9PSB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnByZXZpb3VzQ3Vyc29yT3ZlckJveFxuICAgICkge1xuICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5oaWdobGlnaHRlZEJveGVzLmRlbGV0ZSh0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnByZXZpb3VzQ3Vyc29yT3ZlckJveC5pZCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuY3Vyc29yT3ZlckJveCkge1xuICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5oaWdobGlnaHRlZEJveGVzLnNldChcbiAgICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94LmlkLFxuICAgICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmN1cnNvck92ZXJCb3gsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBob3ZlckN1cnNvck92ZXJCb3goKSB7XG4gICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5wcmV2aW91c0N1cnNvck92ZXJCb3ggPSB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmN1cnNvck92ZXJCb3g7XG4gICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5jdXJzb3JPdmVyQm94ID0gdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5nZXRCb3hCeVBvc2l0aW9uKFxuICAgICAgdGhpcy5kLmJvYXJkQ3Vyc29yLnBvc2l0aW9uLFxuICAgICAgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS56b29tLFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZHJhZ0JveCh7IGRlbHRhIH06IERyYWdEYXRhKSB7XG4gICAgaWYgKCF0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94IHx8IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuaXNNb3ZpbmdWaWV3UG9ydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgYm94IG9mIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUucHJpb3JpdGl6ZWRCb3hlcykge1xuICAgICAgaWYgKGJveCA9PT0gdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5kcmFnZ2luZ0JveCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNBbHJlYWR5SG92ZXJlZCA9IHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuYm94ZXNVbmRlckRyYWdnaW5nQm94Lmhhcyhib3guaWQpO1xuICAgICAgY29uc3QgaGFzSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0cyh0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94LCBib3gpO1xuXG4gICAgICBpZiAoaGFzSW50ZXJzZWN0aW9uICYmICFpc0FscmVhZHlIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuYm94ZXNVbmRlckRyYWdnaW5nQm94LnNldChib3guaWQsIGJveCk7XG4gICAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuaGlnaGxpZ2h0ZWRCb3hlcy5zZXQoYm94LmlkLCBib3gpO1xuICAgICAgfSBlbHNlIGlmICghaGFzSW50ZXJzZWN0aW9uICYmIGlzQWxyZWFkeUhvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5ib3hlc1VuZGVyRHJhZ2dpbmdCb3guZGVsZXRlKGJveC5pZCk7XG4gICAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuaGlnaGxpZ2h0ZWRCb3hlcy5kZWxldGUoYm94LmlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB6b29tZWREZWx0YSA9IGRpdmlkZShkZWx0YS5jbG9uZSgpLCB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLnpvb20pO1xuXG4gICAgZm9yIChjb25zdCBbLCBib3hdIG9mIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuc2VsZWN0ZWRCb3hlcykge1xuICAgICAgbW92ZShib3gsIHpvb21lZERlbHRhKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdEJveGVzKHsgdG90YWxEZWx0YSB9OiBEcmFnRGF0YSkge1xuICAgIGNvbnN0IHpvb21lZERlbHRhID0gZGl2aWRlKHRvdGFsRGVsdGEuY2xvbmUoKSwgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS56b29tKTtcblxuICAgIGlmICh0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmJveGVzVW5kZXJEcmFnZ2luZ0JveC5zaXplID4gMCkge1xuICAgICAgZm9yIChjb25zdCBbLCBib3hdIG9mIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuc2VsZWN0ZWRCb3hlcykge1xuICAgICAgICAvLyBNb3ZlIGJveCBiYWNrXG4gICAgICAgIG1vdmUoYm94LCB6b29tZWREZWx0YSwgLTEpO1xuICAgICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmNvbm5lY3RCb3goYm94LCB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmJveGVzVW5kZXJEcmFnZ2luZ0JveCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5oaWdobGlnaHRlZEJveGVzLmNsZWFyKCk7XG4gICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5ib3hlc1VuZGVyRHJhZ2dpbmdCb3guY2xlYXIoKTtcbiAgICB0aGlzLmhpZ2hsaWdodEJveCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbnRlcnNlY3RzIH0gZnJvbSAnLi4vLi4vbWF0aC9yZWN0YW5nbGUvaW50ZXJzZWN0cyc7XG5pbXBvcnQgeyBtdWx0aXBseUJ5VmVjdG9yIH0gZnJvbSAnLi4vLi4vbWF0aC9yZWN0YW5nbGUvbXVsdGlwbHlCeVZlY3Rvcic7XG5pbXBvcnQgeyBCb2FyZFNlbGVjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQm9hcmRTZWxlY3Rpb24nO1xuaW1wb3J0IHsgQm9hcmRCb3hlc1N0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL0JvYXJkQm94ZXNTdG9yZSc7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U3RvcmUgfSBmcm9tICcuLi9zdG9yZXMvQm9hcmRWaWV3cG9ydFN0b3JlJztcblxudHlwZSBCb2FyZFNlbGVjdGlvblNlcnZpY2VEZXBlbmRlbmNpZXMgPSB7XG4gIGJvYXJkQm94ZXNTdG9yZTogQm9hcmRCb3hlc1N0b3JlO1xuICBib2FyZFNlbGVjdGlvbjogQm9hcmRTZWxlY3Rpb247XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkU2VsZWN0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgZDogQm9hcmRTZWxlY3Rpb25TZXJ2aWNlRGVwZW5kZW5jaWVzO1xuXG4gIGNvbnN0cnVjdG9yKGQ6IEJvYXJkU2VsZWN0aW9uU2VydmljZURlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Qm94ZXMoKSB7XG4gICAgaWYgKCF0aGlzLmQuYm9hcmRTZWxlY3Rpb24uc2VsZWN0ZWRBcmVhKSB7XG4gICAgICAvLyBTaG91bGQgbmV2ZXIgaGFwcGVuXG4gICAgICBjb25zb2xlLndhcm4oJ01pc3Npbmcgc2VsZWN0ZWQgYXJlYScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgYm94IG9mIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUucHJpb3JpdGl6ZWRCb3hlcykge1xuICAgICAgY29uc3Qgem9vbWVkQm94ID0gbXVsdGlwbHlCeVZlY3Rvcihib3guY2xvbmUoKSwgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS56b29tKTtcblxuICAgICAgaWYgKGludGVyc2VjdHModGhpcy5kLmJvYXJkU2VsZWN0aW9uLnNlbGVjdGVkQXJlYSwgem9vbWVkQm94KSkge1xuICAgICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnNlbGVjdGVkQm94ZXMuc2V0KGJveC5pZCwgYm94KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuc2VsZWN0ZWRCb3hlcy5kZWxldGUoYm94LmlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHpvb21Ub1BvaW50IH0gZnJvbSAnLi4vLi4vbWF0aC9tYXRyaXhlczJkL3pvb21Ub1BvaW50JztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9WZWN0b3InO1xuaW1wb3J0IHsgQm9hcmRDdXJzb3IgfSBmcm9tICcuLi9jb21wb25lbnRzL0JvYXJkQ3Vyc29yJztcbmltcG9ydCB7IEJvYXJkVmlld3BvcnRTdG9yZSB9IGZyb20gJy4uL3N0b3Jlcy9Cb2FyZFZpZXdwb3J0U3RvcmUnO1xuXG50eXBlIEJvYXJkVmlld3BvcnRTZXJ2aWNlRGVwZW5kZW5jaWVzID0ge1xuICBib2FyZFZpZXdwb3J0U3RvcmU6IEJvYXJkVmlld3BvcnRTdG9yZTtcbiAgYm9hcmRDdXJzb3I6IEJvYXJkQ3Vyc29yO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkVmlld3BvcnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZFZpZXdwb3J0U2VydmljZURlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZFZpZXdwb3J0U2VydmljZURlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG4gIH1cblxuICBwdWJsaWMgem9vbVRvQ3Vyc29yKGRlbHRhOiBWZWN0b3IpIHtcbiAgICBjb25zdCB7XG4gICAgICBib2FyZFZpZXdwb3J0U3RvcmUsXG4gICAgICBib2FyZFZpZXdwb3J0U3RvcmU6IHsgdHJhbnNmb3JtIH0sXG4gICAgICBib2FyZEN1cnNvcixcbiAgICB9ID0gdGhpcy5kO1xuICAgIGNvbnN0IFt6b29tWCwgX2IsIF9jLCB6b29tWSwgb2Zmc2V0WCwgb2Zmc2V0WV0gPSB6b29tVG9Qb2ludChcbiAgICAgIHRyYW5zZm9ybS5jbG9uZSgpLFxuICAgICAgYm9hcmRDdXJzb3IuYWJzb2x1dGVQb3NpdGlvbixcbiAgICAgIGRlbHRhLFxuICAgICkucmF3TWF0cml4MmQ7XG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gbmV3IFZlY3Rvcih7IHg6IG9mZnNldFgsIHk6IG9mZnNldFkgfSk7XG5cbiAgICBib2FyZFZpZXdwb3J0U3RvcmUub2Zmc2V0ID0gbmV3T2Zmc2V0O1xuICAgIGJvYXJkVmlld3BvcnRTdG9yZS56b29tLnggPSB6b29tWDtcbiAgICBib2FyZFZpZXdwb3J0U3RvcmUuem9vbS55ID0gem9vbVk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2VudGl0aWVzL0JveCc7XG5pbXBvcnQgeyBSZWxhdGlvbiB9IGZyb20gJy4uLy4uL2VudGl0aWVzL1JlbGF0aW9uJztcbmltcG9ydCB7IGlzUG9pbnRJbnNpZGUgfSBmcm9tICcuLi8uLi9tYXRoL3JlY3RhbmdsZS9pc1BvaW50SW5zaWRlJztcbmltcG9ydCB7IG11bHRpcGx5QnlWZWN0b3IgfSBmcm9tICcuLi8uLi9tYXRoL3JlY3RhbmdsZS9tdWx0aXBseUJ5VmVjdG9yJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9WZWN0b3InO1xuaW1wb3J0IHsgUHViU3ViIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHViU3ViL1B1YlN1Yic7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZEJveGVzU3RvcmUge1xuICBwcml2YXRlIGRlbGV0ZVB1YlN1YiA9IG5ldyBQdWJTdWI8Qm94PigpO1xuICBwdWJsaWMgZGVsZXRlRXZlbnQgPSB0aGlzLmRlbGV0ZVB1YlN1Yi5ldmVudDtcblxuICBwdWJsaWMgYm94ZXM6IE1hcDxudW1iZXIsIEJveD4gPSBuZXcgTWFwKCk7XG4gIC8vIEJveGVzIHdoaWNoIHdlcmUgdG91Y2hlZCBsYXN0IGFyZSBhdCB0aGUgbmVkIG9mIHRoaXMgYXJyYXkuXG4gIC8vIEJveGVzIHdpdGggdGhlIGhpZ2hlc3QgcHJpb3JpdHkgKGF0IHRoZSBlbmQpIHNob3VsZCBiZSByZW5kZXJlZCBsYXN0LlxuICBwdWJsaWMgcHJpb3JpdGl6ZWRCb3hlczogQm94W10gPSBbXTtcbiAgcHVibGljIGJveGVzVW5kZXJEcmFnZ2luZ0JveDogTWFwPG51bWJlciwgQm94PiA9IG5ldyBNYXAoKTtcbiAgcHVibGljIHJlbGF0aW9uczogTWFwPG51bWJlciwgUmVsYXRpb24+ID0gbmV3IE1hcCgpO1xuXG4gIHB1YmxpYyBoaWdobGlnaHRlZEJveGVzOiBNYXA8bnVtYmVyLCBCb3g+ID0gbmV3IE1hcCgpO1xuICBwdWJsaWMgc2VsZWN0ZWRCb3hlczogTWFwPG51bWJlciwgQm94PiA9IG5ldyBNYXAoKTtcbiAgcHVibGljIGRyYWdnaW5nQm94PzogQm94O1xuXG4gIHB1YmxpYyBjdXJzb3JPdmVyQm94PzogQm94O1xuICBwdWJsaWMgcHJldmlvdXNDdXJzb3JPdmVyQm94PzogQm94O1xuXG4gIC8vIFRPRE8gY2FuIGJlIG9wdGltaXplZD8gRS5nLiB1c2UgYSBsaW5rZWQgbGlzdCArIG1hcCBhcHByb2FjaC5cbiAgcHVibGljIHJpc2VCb3hQcmlvcml0eShib3g6IEJveCkge1xuICAgIGxldCBpbmRleCA9IC0xO1xuXG4gICAgLy8gQ2hlY2sgZnJvbSBlbmQgaW4gY2FzZSBpZiB0aGUgYm94IGhhcyB0aGUgbWF4IHByaW9yaXR5XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZvci1kaXJlY3Rpb25cbiAgICBmb3IgKGxldCBpID0gdGhpcy5wcmlvcml0aXplZEJveGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSsrKSB7XG4gICAgICBjb25zdCBib3ggPSB0aGlzLnByaW9yaXRpemVkQm94ZXNbaV07XG5cbiAgICAgIGlmICh0aGlzLnByaW9yaXRpemVkQm94ZXNbaV0gPT09IGJveCkge1xuICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByaW9yaXRpemVkQm94ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnByaW9yaXRpemVkQm94ZXMucHVzaChib3gpO1xuICB9XG5cbiAgcHVibGljIGFkZChib3g6IEJveCkge1xuICAgIHRoaXMuYm94ZXMuc2V0KGJveC5pZCwgYm94KTtcbiAgICB0aGlzLnByaW9yaXRpemVkQm94ZXMucHVzaChib3gpO1xuXG4gICAgcmV0dXJuIGJveDtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGUoYm94OiBCb3gpIHtcbiAgICB0aGlzLmJveGVzLmRlbGV0ZShib3guaWQpO1xuICAgIHRoaXMuc2VsZWN0ZWRCb3hlcy5kZWxldGUoYm94LmlkKTtcbiAgICB0aGlzLmhpZ2hsaWdodGVkQm94ZXMuZGVsZXRlKGJveC5pZCk7XG5cbiAgICBjb25zdCBwcmlvcml0aXplZEJveEluZGV4ID0gdGhpcy5wcmlvcml0aXplZEJveGVzLmluZGV4T2YoYm94KTtcblxuICAgIGJveC5yZWxhdGlvbnMuZm9yRWFjaCgocmVsYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHRvQm94UmVsYXRpb25JbmRleCA9IHJlbGF0aW9uLnRvQm94LnJlbGF0aW9ucy5pbmRleE9mKHJlbGF0aW9uKTtcblxuICAgICAgcmVsYXRpb24udG9Cb3gucmVsYXRpb25zLnNwbGljZSh0b0JveFJlbGF0aW9uSW5kZXgsIDEpO1xuXG4gICAgICB0aGlzLnJlbGF0aW9ucy5kZWxldGUocmVsYXRpb24uaWQpO1xuICAgIH0pO1xuXG4gICAgLy8gVE9ETyBjYW4gYmUgb3B0aW1pemVkPyBFLmcuIHVzZSBhIGxpbmtlZCBsaXN0ICsgbWFwIGFwcHJvYWNoLlxuICAgIGlmIChwcmlvcml0aXplZEJveEluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5wcmlvcml0aXplZEJveGVzLnNwbGljZShwcmlvcml0aXplZEJveEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlbGV0ZVB1YlN1Yi5wdWJsaXNoKGJveCk7XG4gIH1cblxuICAvLyBUT0RPIGRvbid0IGl0ZXJhdGUgYWxsIGJveGVzIChpbXByb3ZlIHBlcmZvcm1hbmNlKS5cbiAgcHVibGljIGdldEJveEJ5UG9zaXRpb24ocG9zaXRpb246IFZlY3Rvciwgem9vbTogVmVjdG9yKSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMucHJpb3JpdGl6ZWRCb3hlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgYm94ID0gdGhpcy5wcmlvcml0aXplZEJveGVzW2ldO1xuXG4gICAgICBpZiAoaXNQb2ludEluc2lkZShwb3NpdGlvbiwgbXVsdGlwbHlCeVZlY3Rvcihib3guY2xvbmUoKSwgem9vbSkpKSB7XG4gICAgICAgIHJldHVybiBib3g7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbm5lY3RCb3goZnJvbUJveDogQm94LCB0b0JveGVzOiBCb3hbXSB8IE1hcDxudW1iZXIsIEJveD4pIHtcbiAgICB0b0JveGVzLmZvckVhY2goKHRvQm94KSA9PiB7XG4gICAgICBjb25zdCBleGlzdGVkUmVsYXRpb24gPSBmcm9tQm94LnJlbGF0aW9ucy5maW5kKFxuICAgICAgICAocmVsYXRpb25Ub0NoZWNrKSA9PlxuICAgICAgICAgICh0b0JveC5pZCA9PT0gcmVsYXRpb25Ub0NoZWNrLnRvQm94LmlkICYmIGZyb21Cb3guaWQgPT09IHJlbGF0aW9uVG9DaGVjay5mcm9tQm94LmlkKSB8fFxuICAgICAgICAgICh0b0JveC5pZCA9PT0gcmVsYXRpb25Ub0NoZWNrLmZyb21Cb3guaWQgJiYgZnJvbUJveC5pZCA9PT0gcmVsYXRpb25Ub0NoZWNrLnRvQm94LmlkKSxcbiAgICAgICk7XG5cbiAgICAgIC8vIElmIHJlbGF0aW9uIGV4aXN0cywgdGhlbiB3ZSBuZWVkIHRvIGRlbGV0ZSB0aGlzIHJlbGF0aW9uXG4gICAgICBpZiAoZXhpc3RlZFJlbGF0aW9uKSB7XG4gICAgICAgIGZyb21Cb3gucmVsYXRpb25zID0gZnJvbUJveC5yZWxhdGlvbnMuZmlsdGVyKCh7IGlkIH0pID0+IGV4aXN0ZWRSZWxhdGlvbi5pZCAhPT0gaWQpO1xuICAgICAgICB0b0JveC5yZWxhdGlvbnMgPSBmcm9tQm94LnJlbGF0aW9ucy5maWx0ZXIoKHsgaWQgfSkgPT4gZXhpc3RlZFJlbGF0aW9uLmlkICE9PSBpZCk7XG5cbiAgICAgICAgdGhpcy5yZWxhdGlvbnMuZGVsZXRlKGV4aXN0ZWRSZWxhdGlvbi5pZCk7XG4gICAgICB9XG4gICAgICAvLyBDcmVhdGUgcmVsYXRpb25cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCByZWxhdGlvbiA9IG5ldyBSZWxhdGlvbihmcm9tQm94LCB0b0JveCk7XG5cbiAgICAgICAgZnJvbUJveC5yZWxhdGlvbnMucHVzaChyZWxhdGlvbik7XG4gICAgICAgIHRvQm94LnJlbGF0aW9ucy5wdXNoKHJlbGF0aW9uKTtcblxuICAgICAgICB0aGlzLnJlbGF0aW9ucy5zZXQocmVsYXRpb24uaWQsIHJlbGF0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWF0cml4MmQgfSBmcm9tICcuLi8uLi9tYXRoL21hdHJpeGVzMmQvTWF0cml4MmQnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzL2FkZCc7XG5pbXBvcnQgeyBzdWJ0cmFjdCB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9zdWJ0cmFjdCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMvVmVjdG9yJztcblxuZXhwb3J0IGNsYXNzIEJvYXJkVmlld3BvcnRTdG9yZSB7XG4gIHB1YmxpYyBnZXQgYWJzb2x1dGVDZW50ZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3Ioe1xuICAgICAgeDogdGhpcy53aWR0aCAvIDIsXG4gICAgICB5OiB0aGlzLmhlaWdodCAvIDIsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNlbnRlcigpIHtcbiAgICByZXR1cm4gc3VidHJhY3QodGhpcy5hYnNvbHV0ZUNlbnRlci5jbG9uZSgpLCB0aGlzLm9mZnNldCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxlZnQoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3Ioe1xuICAgICAgeDogMCxcbiAgICAgIHk6IHRoaXMuaGVpZ2h0IC8gMixcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdG9wKCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHtcbiAgICAgIHg6IHRoaXMud2lkdGggLyAyLFxuICAgICAgeTogMCxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmlnaHQoKSB7XG4gICAgcmV0dXJuIGFkZChcbiAgICAgIHRoaXMubGVmdC5jbG9uZSgpLFxuICAgICAgbmV3IFZlY3Rvcih7XG4gICAgICAgIHg6IHRoaXMud2lkdGgsXG4gICAgICAgIHk6IDAsXG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldCBib3R0b20oKSB7XG4gICAgcmV0dXJuIGFkZChcbiAgICAgIHRoaXMudG9wLmNsb25lKCksXG4gICAgICBuZXcgVmVjdG9yKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogdGhpcy5oZWlnaHQsXG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldCB0cmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRyaXgyZCh7XG4gICAgICByYXdNYXRyaXgyZDogW3RoaXMuem9vbS54LCAwLCAwLCB0aGlzLnpvb20ueSwgdGhpcy5vZmZzZXQueCwgdGhpcy5vZmZzZXQueV0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgem9vbSA9IG5ldyBWZWN0b3IoeyB4OiAxLCB5OiAxIH0pO1xuICBwdWJsaWMgb2Zmc2V0ID0gbmV3IFZlY3RvcigpO1xuICBwdWJsaWMgaXNNb3ZpbmdWaWV3UG9ydCA9IGZhbHNlO1xuICBwdWJsaWMgd2lkdGggPSAwO1xuICBwdWJsaWMgaGVpZ2h0ID0gMDtcbn1cbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uL21hdGgvdmVjdG9ycy9WZWN0b3InO1xuaW1wb3J0IHsgQ3Vyc29yVHlwZSB9IGZyb20gJy4uL3JlbmRlcmluZy9EcmF3ZXInO1xuaW1wb3J0IHsgRHJhZ0RhdGEsIERyYWdNb2RlLCBEcmFnU3RhcnREYXRhLCBleHRlbmRlZENsaWNrSGFuZGxlciwgTW91c2VEYXRhIH0gZnJvbSAnLi4vdXRpbHMvZG9tL2V4dGVuZGVkQ2xpY2tIYW5kbGVyJztcbmltcG9ydCB7IGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQgfSBmcm9tICcuLi91dGlscy9kb20vZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudCc7XG5pbXBvcnQgeyBQdWJTdWIgfSBmcm9tICcuLi91dGlscy9wdWJTdWIvUHViU3ViJztcblxuZXhwb3J0IHR5cGUgU2Nyb2xsRGF0YSA9IE1vdXNlRGF0YSAmIHtcbiAgZGVsdGE6IFZlY3Rvcjtcbn07XG5cbmV4cG9ydCB0eXBlIFBvc2l0aW9uTW9kaWZpZXIgPSAocG9zaXRpb246IFZlY3RvcikgPT4gVmVjdG9yO1xuXG5leHBvcnQgY2xhc3MgQ3Vyc29yIHtcbiAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3I7XG4gIHB1YmxpYyBhYnNvbHV0ZVBvc2l0aW9uOiBWZWN0b3I7XG4gIHB1YmxpYyBjb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHVibGljIGN1cnNvclR5cGU6IEN1cnNvclR5cGUgPSBDdXJzb3JUeXBlLkRlZmF1bHQ7XG5cbiAgcHJvdGVjdGVkIHBvc2l0aW9uTW9kaWZpZXJzOiBQb3NpdGlvbk1vZGlmaWVyW10gPSBbXTtcblxuICBwcml2YXRlIG1vdmVQdWJTdWIgPSBuZXcgUHViU3ViPE1vdXNlRGF0YT4oKTtcbiAgcHVibGljIG1vdmVFdmVudCA9IHRoaXMubW92ZVB1YlN1Yi5ldmVudDtcblxuICBwcml2YXRlIHRhYlB1YlN1YiA9IG5ldyBQdWJTdWI8TW91c2VEYXRhPigpO1xuICBwdWJsaWMgdGFwRXZlbnQgPSB0aGlzLnRhYlB1YlN1Yi5ldmVudDtcblxuICBwcml2YXRlIGRvdWJsZVRhcFB1YlN1YiA9IG5ldyBQdWJTdWI8TW91c2VEYXRhPigpO1xuICBwdWJsaWMgZG91YmxlVGFiRXZlbnQgPSB0aGlzLmRvdWJsZVRhcFB1YlN1Yi5ldmVudDtcblxuICBwcml2YXRlIGRyYWdTdGFydFB1YlN1YiA9IG5ldyBQdWJTdWI8RHJhZ1N0YXJ0RGF0YT4oKTtcbiAgcHVibGljIGRyYWdTdGFydEV2ZW50ID0gdGhpcy5kcmFnU3RhcnRQdWJTdWIuZXZlbnQ7XG5cbiAgcHJpdmF0ZSBkcmFnUHViU3ViID0gbmV3IFB1YlN1YjxEcmFnRGF0YT4oKTtcbiAgcHVibGljIGRyYWdFdmVudCA9IHRoaXMuZHJhZ1B1YlN1Yi5ldmVudDtcblxuICBwcml2YXRlIGRyYWdFbmRQdWJTdWIgPSBuZXcgUHViU3ViPERyYWdEYXRhPigpO1xuICBwdWJsaWMgZHJhZ0VuZEV2ZW50ID0gdGhpcy5kcmFnRW5kUHViU3ViLmV2ZW50O1xuXG4gIHByaXZhdGUgdXBQdWJTdWIgPSBuZXcgUHViU3ViPERyYWdEYXRhPigpO1xuICBwdWJsaWMgdXBFdmVudCA9IHRoaXMudXBQdWJTdWIuZXZlbnQ7XG5cbiAgcHJpdmF0ZSBkb3duUHViU3ViID0gbmV3IFB1YlN1YjxNb3VzZURhdGE+KCk7XG4gIHB1YmxpYyBkb3duRXZlbnQgPSB0aGlzLmRvd25QdWJTdWIuZXZlbnQ7XG5cbiAgcHJpdmF0ZSBzY3JvbGxQdWJTdWIgPSBuZXcgUHViU3ViPFNjcm9sbERhdGE+KCk7XG4gIHB1YmxpYyBzY3JvbGxFdmVudCA9IHRoaXMuc2Nyb2xsUHViU3ViLmV2ZW50O1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uID0gbmV3IFZlY3RvcigpO1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLmFwcGx5UG9zaXRpb25Nb2RpZmllcnModGhpcy5hYnNvbHV0ZVBvc2l0aW9uKTtcblxuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgKGV2ZW50KSA9PiB0aGlzLmhhbmRsZVNjcm9sbChldmVudCkpO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHRoaXMuaGFuZGxlTW92ZShldmVudCkpO1xuICAgIGV4dGVuZGVkQ2xpY2tIYW5kbGVyKGNvbnRhaW5lckVsZW1lbnQsIHtcbiAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgIHNpbGVuY2VDbGlja0FmdGVyRHJhZzogdHJ1ZSxcbiAgICAgIGRyYWdNb2RlOiBEcmFnTW9kZS5Eb3duLFxuICAgICAgb25DbGljazogKGRhdGEpID0+IHRoaXMuaGFuZGxlQ2xpY2soZGF0YSksXG4gICAgICBvbkRvdWJsZUNsaWNrOiAoZGF0YSkgPT4gdGhpcy5oYW5kbGVEb3VibGVDbGljayhkYXRhKSxcbiAgICAgIG9uRHJhZ1N0YXJ0OiAoZGF0YSkgPT4gdGhpcy5oYW5kbGVEcmFnU3RhcnQoZGF0YSksXG4gICAgICBvbkRyYWc6IChkYXRhKSA9PiB0aGlzLmhhbmRsZURyYWcoZGF0YSksXG4gICAgICBvbkRyYWdFbmQ6IChkYXRhKSA9PiB0aGlzLmhhbmRsZURyYWdFbmQoZGF0YSksXG4gICAgICBvbk1vdXNlRG93bjogKGRhdGEpID0+IHRoaXMuaGFuZGxlTW91c2VEb3duKGRhdGEpLFxuICAgICAgb25Nb3VzZVVwOiAoZGF0YSkgPT4gdGhpcy5oYW5kbGVNb3VzZVVwKGRhdGEpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVBvc2l0aW9uTW9kaWZpZXJzKGFic29sdXRlUG9zaXRpb246IFZlY3Rvcikge1xuICAgIGxldCBuZXdQb3NpdGlvbiA9IGFic29sdXRlUG9zaXRpb24uY2xvbmUoKTtcblxuICAgIHRoaXMucG9zaXRpb25Nb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgIG5ld1Bvc2l0aW9uID0gbW9kaWZpZXIobmV3UG9zaXRpb24pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uID0gZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgdGhpcy5jb250YWluZXJFbGVtZW50KTtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5hcHBseVBvc2l0aW9uTW9kaWZpZXJzKHRoaXMuYWJzb2x1dGVQb3NpdGlvbik7XG4gICAgdGhpcy5tb3ZlUHViU3ViLnB1Ymxpc2goeyBldmVudCwgcG9zaXRpb246IHRoaXMucG9zaXRpb24gfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWNrKGRhdGE6IE1vdXNlRGF0YSkge1xuICAgIHRoaXMudGFiUHViU3ViLnB1Ymxpc2goZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZURvdWJsZUNsaWNrKGRhdGE6IE1vdXNlRGF0YSkge1xuICAgIHRoaXMuZG91YmxlVGFwUHViU3ViLnB1Ymxpc2goZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZURyYWdTdGFydChkYXRhOiBEcmFnU3RhcnREYXRhKSB7XG4gICAgdGhpcy5kcmFnU3RhcnRQdWJTdWIucHVibGlzaChkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRHJhZyhkYXRhOiBEcmFnRGF0YSkge1xuICAgIHRoaXMuZHJhZ1B1YlN1Yi5wdWJsaXNoKGRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEcmFnRW5kKGRhdGE6IERyYWdEYXRhKSB7XG4gICAgdGhpcy5kcmFnRW5kUHViU3ViLnB1Ymxpc2goZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1vdXNlVXAoZGF0YTogRHJhZ0RhdGEpIHtcbiAgICB0aGlzLnVwUHViU3ViLnB1Ymxpc2goZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1vdXNlRG93bihkYXRhOiBNb3VzZURhdGEpIHtcbiAgICB0aGlzLmRvd25QdWJTdWIucHVibGlzaChkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2Nyb2xsKGV2ZW50OiBXaGVlbEV2ZW50KSB7XG4gICAgdGhpcy5zY3JvbGxQdWJTdWIucHVibGlzaCh7XG4gICAgICBldmVudCxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgZGVsdGE6IG5ldyBWZWN0b3Ioe1xuICAgICAgICB4OiBldmVudC5kZWx0YVgsXG4gICAgICAgIHk6IGV2ZW50LmRlbHRhWSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi9tYXRoL3JlY3RhbmdsZS9SZWN0YW5nbGUnO1xuaW1wb3J0IHsgc29ydCB9IGZyb20gJy4uL21hdGgvdmVjdG9ycy9zb3J0JztcbmltcG9ydCB7IGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQgfSBmcm9tICcuLi91dGlscy9kb20vZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudCc7XG5pbXBvcnQgeyBQdWJTdWIgfSBmcm9tICcuLi91dGlscy9wdWJTdWIvUHViU3ViJztcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gJy4vY3Vyc29yJztcblxuZXhwb3J0IHR5cGUgU2VsZWN0U3RhcnREYXRhID0ge1xuICBldmVudDogTW91c2VFdmVudDtcbn07XG5cbmV4cG9ydCB0eXBlIFNlbGVjdERhdGEgPSBTZWxlY3RTdGFydERhdGEgJiB7XG4gIHNlbGVjdGVkQXJlYTogUmVjdGFuZ2xlO1xufTtcblxuZXhwb3J0IHR5cGUgU2VsZWN0ZWRBcmVhTW9kaWZpZXIgPSAoc2VsZWN0ZWRBcmVhOiBSZWN0YW5nbGUpID0+IFJlY3RhbmdsZTtcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbiB7XG4gIHByaXZhdGUgY3Vyc29yOiBDdXJzb3I7XG4gIHByaXZhdGUgbGFzdERvd25FdmVudD86IE1vdXNlRXZlbnQ7XG4gIHByaXZhdGUgaXNNb3VzZURvd24gPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgc2VsZWN0ZWRBcmVhTW9kaWZpZXJzOiBTZWxlY3RlZEFyZWFNb2RpZmllcltdID0gW107XG5cbiAgcHJpdmF0ZSBzZWxlY3RTdGFydFB1YlN1YiA9IG5ldyBQdWJTdWI8U2VsZWN0U3RhcnREYXRhPigpO1xuICBwdWJsaWMgc2VsZWN0U3RhcnRFdmVudCA9IHRoaXMuc2VsZWN0U3RhcnRQdWJTdWIuZXZlbnQ7XG5cbiAgcHJpdmF0ZSBzZWxlY3RQdWJTdWIgPSBuZXcgUHViU3ViPFNlbGVjdERhdGE+KCk7XG4gIHB1YmxpYyBzZWxlY3RFdmVudCA9IHRoaXMuc2VsZWN0UHViU3ViLmV2ZW50O1xuXG4gIHByaXZhdGUgc2VsZWN0RW5kUHViU3ViID0gbmV3IFB1YlN1YjxTZWxlY3REYXRhPigpO1xuICBwdWJsaWMgc2VsZWN0RW5kRXZlbnQgPSB0aGlzLnNlbGVjdEVuZFB1YlN1Yi5ldmVudDtcblxuICBwcml2YXRlIF9hYnNvbHV0ZVNlbGVjdGVkQXJlYT86IFJlY3RhbmdsZTtcblxuICBwdWJsaWMgZ2V0IGFic29sdXRlU2VsZWN0ZWRBcmVhKCkge1xuICAgIGlmICh0aGlzLmNhblNlbGVjdCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fYWJzb2x1dGVTZWxlY3RlZEFyZWE7XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RlZEFyZWE/OiBSZWN0YW5nbGU7XG5cbiAgcHVibGljIGdldCBzZWxlY3RlZEFyZWEoKSB7XG4gICAgaWYgKHRoaXMuY2FuU2VsZWN0ID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEFyZWE7XG4gIH1cblxuICBwdWJsaWMgY2FuU2VsZWN0ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihjdXJzb3I6IEN1cnNvcikge1xuICAgIHRoaXMuY3Vyc29yID0gY3Vyc29yO1xuXG4gICAgdGhpcy5jdXJzb3IuZG93bkV2ZW50LnN1YnNjcmliZSgoeyBldmVudCB9KSA9PiB0aGlzLmhhbmRsZURvd24oZXZlbnQpKTtcbiAgICB0aGlzLmN1cnNvci5tb3ZlRXZlbnQuc3Vic2NyaWJlKCh7IGV2ZW50IH0pID0+IHRoaXMuaGFuZGxlTW92ZShldmVudCkpO1xuICAgIHRoaXMuY3Vyc29yLnVwRXZlbnQuc3Vic2NyaWJlKCh7IGV2ZW50IH0pID0+IHRoaXMuaGFuZGxlVXAoZXZlbnQpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlTZWxlY3RlZEFyZWFNb2RpZmllcnMoYWJzb2x1dGVTZWxlY3RlZEFyZWE6IFJlY3RhbmdsZSkge1xuICAgIGxldCBuZXdTZWxlY3RlZEFyZWEgPSBhYnNvbHV0ZVNlbGVjdGVkQXJlYS5jbG9uZSgpO1xuXG4gICAgdGhpcy5zZWxlY3RlZEFyZWFNb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgIG5ld1NlbGVjdGVkQXJlYSA9IG1vZGlmaWVyKG5ld1NlbGVjdGVkQXJlYSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3U2VsZWN0ZWRBcmVhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3Rpb24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMubGFzdERvd25FdmVudCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludEZyb21MYXN0RG93biA9IGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQodGhpcy5sYXN0RG93bkV2ZW50LCB0aGlzLmN1cnNvci5jb250YWluZXJFbGVtZW50KTtcbiAgICBjb25zdCBjdXJyZW50UG9pbnQgPSBnZXRQb3NpdGlvbkZyb21Nb3VzZUV2ZW50KGV2ZW50LCB0aGlzLmN1cnNvci5jb250YWluZXJFbGVtZW50KTtcbiAgICBjb25zdCBbZnJvbVBvaW50LCB0b1BvaW50XSA9IHNvcnQocG9pbnRGcm9tTGFzdERvd24sIGN1cnJlbnRQb2ludCk7XG5cbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21Qb2ludHMoZnJvbVBvaW50LCB0b1BvaW50KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMubGFzdERvd25FdmVudCA9IGV2ZW50O1xuICAgIHRoaXMuaXNNb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMuX2Fic29sdXRlU2VsZWN0ZWRBcmVhID0gdGhpcy5nZXRTZWxlY3Rpb24oZXZlbnQpO1xuICAgIHRoaXMuX3NlbGVjdGVkQXJlYSA9IHRoaXMuYXBwbHlTZWxlY3RlZEFyZWFNb2RpZmllcnModGhpcy5fYWJzb2x1dGVTZWxlY3RlZEFyZWEpO1xuXG4gICAgdGhpcy5zZWxlY3RTdGFydFB1YlN1Yi5wdWJsaXNoKHtcbiAgICAgIGV2ZW50LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9hYnNvbHV0ZVNlbGVjdGVkQXJlYSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc01vdXNlRG93biB8fCB0aGlzLmNhblNlbGVjdCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9hYnNvbHV0ZVNlbGVjdGVkQXJlYSA9IHRoaXMuZ2V0U2VsZWN0aW9uKGV2ZW50KTtcbiAgICB0aGlzLl9zZWxlY3RlZEFyZWEgPSB0aGlzLmFwcGx5U2VsZWN0ZWRBcmVhTW9kaWZpZXJzKHRoaXMuX2Fic29sdXRlU2VsZWN0ZWRBcmVhKTtcbiAgICB0aGlzLnNlbGVjdFB1YlN1Yi5wdWJsaXNoKHtcbiAgICAgIGV2ZW50LFxuICAgICAgc2VsZWN0ZWRBcmVhOiB0aGlzLl9zZWxlY3RlZEFyZWEsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5pc01vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgLy8gVE9ETyBpbnZlc3RpZ2F0ZSB3aHkgdGhpcyBoYXBwZW5zIG9uIGRvdWJsZSBjbGlja1xuICAgIGlmICghdGhpcy5fYWJzb2x1dGVTZWxlY3RlZEFyZWEpIHtcbiAgICAgIC8vIFNob3VsZCBuZXZlciBoYXBwZW5cbiAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBzZWxlY3RlZCBhcmVhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fYWJzb2x1dGVTZWxlY3RlZEFyZWEgPSB0aGlzLmdldFNlbGVjdGlvbihldmVudCk7XG4gICAgdGhpcy5fc2VsZWN0ZWRBcmVhID0gdGhpcy5hcHBseVNlbGVjdGVkQXJlYU1vZGlmaWVycyh0aGlzLl9hYnNvbHV0ZVNlbGVjdGVkQXJlYSk7XG4gICAgdGhpcy5zZWxlY3RFbmRQdWJTdWIucHVibGlzaCh7XG4gICAgICBldmVudCxcbiAgICAgIHNlbGVjdGVkQXJlYTogdGhpcy5fc2VsZWN0ZWRBcmVhLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fYWJzb2x1dGVTZWxlY3RlZEFyZWEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2VsZWN0ZWRBcmVhID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi9tYXRoL3JlY3RhbmdsZS9SZWN0YW5nbGUnO1xuaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gJy4uL21hdGgvcmVjdGFuZ2xlL3R5cGVzJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uL21hdGgvdmVjdG9ycy9WZWN0b3InO1xuaW1wb3J0IHsgVGV4dEJsb2NrTGluZXMgfSBmcm9tICcuLi9yZW5kZXJpbmcvdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlVGV4dEJsb2NrTGluZXMsIGdldFRleHRDdXJzb3JEYXRhIH0gZnJvbSAnLi4vdXRpbHMvY2FudmFzVGV4dCc7XG5pbXBvcnQgeyBUZXh0Q3Vyc29yRGF0YSB9IGZyb20gJy4uL3V0aWxzL2NhbnZhc1RleHQnO1xuaW1wb3J0IHsgaW5zZXJ0U3ViU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvaW5zZXJ0U3ViU3RyaW5nJztcbmltcG9ydCB7IGlzS2V5UHJlc3NlZCwgS0VZUyB9IGZyb20gJy4uL3V0aWxzL2tleWJvYXJkJztcbmltcG9ydCB7IFB1YlN1YiB9IGZyb20gJy4uL3V0aWxzL3B1YlN1Yi9QdWJTdWInO1xuaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSAnLi9DdXJzb3InO1xuXG5leHBvcnQgdHlwZSBIZWlnaHREYXRhID0ge1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgZGVsdGE6IG51bWJlcjtcbn07XG5cbnR5cGUgVGV4dEVkaXRvckRlcGVuZGVuY2llcyA9IHtcbiAgY2FudmFzQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBjdXJzb3I6IEN1cnNvcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBUZXh0RWRpdG9yIGltcGxlbWVudHMgRGltZW5zaW9ucyB7XG4gIHByaXZhdGUgZDogVGV4dEVkaXRvckRlcGVuZGVuY2llcztcbiAgcHJpdmF0ZSBfc2hvd25BdD86IFZlY3RvcjtcbiAgcHJpdmF0ZSBpc0xpc3RlbmVyc0F0dGFjaGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBpbnB1dFB1YlN1YiA9IG5ldyBQdWJTdWI8e1xuICAgIGV2ZW50OiBLZXlib2FyZEV2ZW50O1xuICAgIHRleHRFZGl0b3I6IFRleHRFZGl0b3I7XG4gIH0+KCk7XG4gIHB1YmxpYyBpbnB1dEV2ZW50ID0gdGhpcy5pbnB1dFB1YlN1Yi5ldmVudDtcblxuICBwcml2YXRlIGNvbnRlbnRIZWlnaHRQdWJTdWIgPSBuZXcgUHViU3ViPEhlaWdodERhdGE+KCk7XG4gIHB1YmxpYyBjb250ZW50SGVpZ2h0RXZlbnQgPSB0aGlzLmNvbnRlbnRIZWlnaHRQdWJTdWIuZXZlbnQ7XG5cbiAgcHJpdmF0ZSBfY29udGVudCA9ICcnO1xuXG4gIHB1YmxpYyBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgY29udGVudChjb250ZW50OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fY29udGVudCA9PT0gY29udGVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZpb3VzSGVpZ2h0ID0gdGhpcy50ZXh0QmxvY2tMaW5lcy50ZXh0QmxvY2tNZXRyaWNzLmhlaWdodFdpdGhQYWRkaW5ncztcbiAgICB0aGlzLl9jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLnRleHRCbG9ja0xpbmVzID0gdGhpcy5jcmVhdGVUZXh0QmxvY2tMaW5lcygpO1xuICAgIGNvbnN0IG5ld0hlaWdodCA9IHRoaXMudGV4dEJsb2NrTGluZXMudGV4dEJsb2NrTWV0cmljcy5oZWlnaHRXaXRoUGFkZGluZ3M7XG5cbiAgICB0aGlzLnRleHRDdXJzb3JEYXRhID0gZ2V0VGV4dEN1cnNvckRhdGEodGhpcy5kLmNhbnZhc0NvbnRleHQsIHRoaXMudGV4dEJsb2NrTGluZXMpO1xuXG4gICAgaWYgKHByZXZpb3VzSGVpZ2h0ICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgIHRoaXMuY29udGVudEhlaWdodFB1YlN1Yi5wdWJsaXNoKHtcbiAgICAgICAgaGVpZ2h0OiBuZXdIZWlnaHQsXG4gICAgICAgIGRlbHRhOiBuZXdIZWlnaHQgLSBwcmV2aW91c0hlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb250U2l6ZSA9IDE0O1xuICBwdWJsaWMgd2lkdGggPSAwO1xuICBwdWJsaWMgaGVpZ2h0ID0gMDtcblxuICBwdWJsaWMgdGV4dEJsb2NrTGluZXM6IFRleHRCbG9ja0xpbmVzO1xuICBwdWJsaWMgdGV4dEN1cnNvckRhdGE6IFRleHRDdXJzb3JEYXRhO1xuXG4gIHB1YmxpYyBnZXQgZWRpdG9yUmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHtcbiAgICAgIC4uLih0aGlzLnNob3duQXQgfHwgeyB4OiAwLCB5OiAwIH0pLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldCBzaG93bkF0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaG93bkF0O1xuICB9XG5cbiAgcHVibGljIGdldCBpc1Nob3duKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuX3Nob3duQXQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZDogVGV4dEVkaXRvckRlcGVuZGVuY2llcykge1xuICAgIHRoaXMuZCA9IGQ7XG4gICAgdGhpcy50ZXh0QmxvY2tMaW5lcyA9IHRoaXMuY3JlYXRlVGV4dEJsb2NrTGluZXMoKTtcbiAgICB0aGlzLnRleHRDdXJzb3JEYXRhID0gZ2V0VGV4dEN1cnNvckRhdGEodGhpcy5kLmNhbnZhc0NvbnRleHQsIHRoaXMudGV4dEJsb2NrTGluZXMpO1xuXG4gICAgdGhpcy5kLmN1cnNvci50YXBFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVUYXAoKSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVRleHRCbG9ja0xpbmVzKCkge1xuICAgIHJldHVybiBjcmVhdGVUZXh0QmxvY2tMaW5lcyh0aGlzLmQuY2FudmFzQ29udGV4dCwge1xuICAgICAgdGV4dDogdGhpcy5jb250ZW50LFxuICAgICAgZm9udFNpemU6IHRoaXMuZm9udFNpemUsXG4gICAgICByZWN0YW5nbGU6IHRoaXMuZWRpdG9yUmVjdGFuZ2xlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVLZXlkb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgY29uc3QgaXNMZXR0ZXJPck51bWJlciA9IGV2ZW50LmtleS5sZW5ndGggPT09IDE7XG4gICAgY29uc3QgaW5zZXJ0QmVmb3JlUG9zaXRpb24gPSB0aGlzLnRleHRDdXJzb3JEYXRhLm5leHRDaGFyYWN0ZXJJbmRleDtcblxuICAgIGlmIChpc0xldHRlck9yTnVtYmVyKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBpbnNlcnRTdWJTdHJpbmcodGhpcy5jb250ZW50LCBpbnNlcnRCZWZvcmVQb3NpdGlvbiwgZXZlbnQua2V5KTtcbiAgICB9IGVsc2UgaWYgKGlzS2V5UHJlc3NlZChLRVlTLmVudGVyLCBldmVudCkpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IGluc2VydFN1YlN0cmluZyh0aGlzLmNvbnRlbnQsIGluc2VydEJlZm9yZVBvc2l0aW9uLCAnXFxuJyk7XG4gICAgfSBlbHNlIGlmIChpc0tleVByZXNzZWQoS0VZUy5iYWNrc3BhY2UsIGV2ZW50KSkge1xuICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnNsaWNlKDAsIC0xKTtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0UHViU3ViLnB1Ymxpc2goe1xuICAgICAgZXZlbnQsXG4gICAgICB0ZXh0RWRpdG9yOiB0aGlzLFxuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgYXR0YWNoS2V5Ym9hcmRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuaXNMaXN0ZW5lcnNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNMaXN0ZW5lcnNBdHRhY2hlZCA9IHRydWU7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bik7XG4gIH1cblxuICBwcml2YXRlIGRldGFjaEtleWJvYXJkTGlzdGVuZXJzKCkge1xuICAgIHRoaXMuaXNMaXN0ZW5lcnNBdHRhY2hlZCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd24pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVUYXAoKSB7XG4gICAgaWYgKCF0aGlzLnNob3duQXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRleHRDdXJzb3JEYXRhID0gZ2V0VGV4dEN1cnNvckRhdGEoXG4gICAgICB0aGlzLmQuY2FudmFzQ29udGV4dCxcbiAgICAgIHRoaXMudGV4dEJsb2NrTGluZXMsXG4gICAgICB0aGlzLmQuY3Vyc29yLnBvc2l0aW9uLFxuICAgICAgdGhpcy50ZXh0Q3Vyc29yRGF0YS5wb3NpdGlvbixcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHNob3dBdChwb3NpdGlvbjogVmVjdG9yLCBkaW1lbnNpb25zPzogRGltZW5zaW9ucykge1xuICAgIGlmIChkaW1lbnNpb25zKSB7XG4gICAgICB0aGlzLndpZHRoID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgdGhpcy5fc2hvd25BdCA9IHBvc2l0aW9uO1xuICAgIHRoaXMudGV4dEJsb2NrTGluZXMgPSB0aGlzLmNyZWF0ZVRleHRCbG9ja0xpbmVzKCk7XG4gICAgdGhpcy50ZXh0Q3Vyc29yRGF0YSA9IGdldFRleHRDdXJzb3JEYXRhKHRoaXMuZC5jYW52YXNDb250ZXh0LCB0aGlzLnRleHRCbG9ja0xpbmVzKTtcbiAgICB0aGlzLmF0dGFjaEtleWJvYXJkTGlzdGVuZXJzKCk7XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpIHtcbiAgICB0aGlzLl9zaG93bkF0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGV0YWNoS2V5Ym9hcmRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnLi4vbWF0aC9yZWN0YW5nbGUvUmVjdGFuZ2xlJztcbmltcG9ydCB7IGdldElkR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbHMvaWRHZW5lcmF0b3InO1xuaW1wb3J0IHsgUmVsYXRpb24gfSBmcm9tICcuL1JlbGF0aW9uJztcblxuY29uc3QgZ2VuZXJhdGVJZCA9IGdldElkR2VuZXJhdG9yKCk7XG5cbmV4cG9ydCBjbGFzcyBCb3ggZXh0ZW5kcyBSZWN0YW5nbGUge1xuICBwcml2YXRlIF9pZCA9IGdlbmVyYXRlSWQoKTtcblxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIHB1YmxpYyBjb250ZW50ID0gJyc7XG4gIHB1YmxpYyByZWxhdGlvbnM6IFJlbGF0aW9uW10gPSBbXTtcbn1cbiIsImltcG9ydCB7IGdldElkR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbHMvaWRHZW5lcmF0b3InO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi9Cb3gnO1xuXG5jb25zdCBnZW5lcmF0ZUlkID0gZ2V0SWRHZW5lcmF0b3IoKTtcblxuZXhwb3J0IGNsYXNzIFJlbGF0aW9uIHtcbiAgcHJpdmF0ZSBfaWQgPSBnZW5lcmF0ZUlkKCk7XG5cbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBwdWJsaWMgZnJvbUJveDogQm94O1xuICBwdWJsaWMgdG9Cb3g6IEJveDtcblxuICBjb25zdHJ1Y3Rvcihmcm9tQm94OiBCb3gsIHRvQm94OiBCb3gpIHtcbiAgICB0aGlzLmZyb21Cb3ggPSBmcm9tQm94O1xuICAgIHRoaXMudG9Cb3ggPSB0b0JveDtcbiAgfVxufVxuIiwiLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU2NTAwMTJcbmV4cG9ydCBjb25zdCBtYXAgPSAodmFsdWU6IG51bWJlciwgc3RhcnQxOiBudW1iZXIsIHN0b3AxOiBudW1iZXIsIHN0YXJ0MjogbnVtYmVyLCBzdG9wMjogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHN0YXJ0MiArICgoc3RvcDIgLSBzdGFydDIpICogKHZhbHVlIC0gc3RhcnQxKSkgLyAoc3RvcDEgLSBzdGFydDEpO1xufTtcbiIsImltcG9ydCB7IE1hdGhFbnRpdHkgfSBmcm9tICcuLi90eXBlcyc7XG4vLyBodHRwczovL2dsbWF0cml4Lm5ldC9kb2NzL21vZHVsZS1tYXQyZC5odG1sXG5pbXBvcnQgeyBCYXNlTWF0cml4MmQsIFJhd01hdHJpeDJkIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBNYXRyaXgyZCBpbXBsZW1lbnRzIEJhc2VNYXRyaXgyZCwgTWF0aEVudGl0eTxNYXRyaXgyZD4ge1xuICBwdWJsaWMgcmF3TWF0cml4MmQ6IFJhd01hdHJpeDJkO1xuXG4gIGNvbnN0cnVjdG9yKHsgcmF3TWF0cml4MmQ6IFthLCBiLCBjLCBkLCB0eCwgdHldIH06IEJhc2VNYXRyaXgyZCA9IHsgcmF3TWF0cml4MmQ6IFsxLCAwLCAwLCAxLCAwLCAwXSB9KSB7XG4gICAgdGhpcy5yYXdNYXRyaXgyZCA9IFthLCBiLCBjLCBkLCB0eCwgdHldO1xuICB9XG5cbiAgcHVibGljIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgTWF0cml4MmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRnJvbSh7IHJhd01hdHJpeDJkIH06IEJhc2VNYXRyaXgyZCkge1xuICAgIHRoaXMucmF3TWF0cml4MmQgPSByYXdNYXRyaXgyZDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nKGxpbWl0ZWQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBhID0gbGltaXRlZCA/IHRoaXMucmF3TWF0cml4MmRbMF0udG9GaXhlZCgxKSA6IHRoaXMucmF3TWF0cml4MmRbMF07XG4gICAgY29uc3QgYiA9IGxpbWl0ZWQgPyB0aGlzLnJhd01hdHJpeDJkWzFdLnRvRml4ZWQoMSkgOiB0aGlzLnJhd01hdHJpeDJkWzFdO1xuICAgIGNvbnN0IGMgPSBsaW1pdGVkID8gdGhpcy5yYXdNYXRyaXgyZFsyXS50b0ZpeGVkKDEpIDogdGhpcy5yYXdNYXRyaXgyZFsyXTtcbiAgICBjb25zdCBkID0gbGltaXRlZCA/IHRoaXMucmF3TWF0cml4MmRbM10udG9GaXhlZCgxKSA6IHRoaXMucmF3TWF0cml4MmRbM107XG4gICAgY29uc3QgdHggPSBsaW1pdGVkID8gdGhpcy5yYXdNYXRyaXgyZFs0XS50b0ZpeGVkKDEpIDogdGhpcy5yYXdNYXRyaXgyZFs0XTtcbiAgICBjb25zdCB0eSA9IGxpbWl0ZWQgPyB0aGlzLnJhd01hdHJpeDJkWzVdLnRvRml4ZWQoMSkgOiB0aGlzLnJhd01hdHJpeDJkWzVdO1xuXG4gICAgcmV0dXJuIGAke2F9OiR7Yn06JHtjfToke2R9OiR7dHh9OiR7dHl9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZVZlY3RvciB9IGZyb20gJy4uL3ZlY3RvcnMvdHlwZXMnO1xuaW1wb3J0IHsgQmFzZU1hdHJpeDJkIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tU2NhbGUgPSAodmVjdG9yOiBCYXNlVmVjdG9yKTogQmFzZU1hdHJpeDJkID0+ICh7XG4gIHJhd01hdHJpeDJkOiBbdmVjdG9yLngsIDAsIDAsIHZlY3Rvci55LCAwLCAwXSxcbn0pO1xuIiwiaW1wb3J0IHsgQmFzZVZlY3RvciB9IGZyb20gJy4uL3ZlY3RvcnMvdHlwZXMnO1xuaW1wb3J0IHsgQmFzZU1hdHJpeDJkIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tVHJhbnNsYXRpb24gPSAodmVjdG9yOiBCYXNlVmVjdG9yKTogQmFzZU1hdHJpeDJkID0+ICh7XG4gIHJhd01hdHJpeDJkOiBbMSwgMCwgMCwgMSwgdmVjdG9yLngsIHZlY3Rvci55XSxcbn0pO1xuIiwiaW1wb3J0IHsgQmFzZU1hdHJpeDJkIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIFRPRE8gZmlndXJlIG91dCBtYXRoXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdG9qaS9nbC1tYXRyaXgvYmxvYi84OTYyYjJlNzcyNzU5NDAyMmU1OWU0OGU2MDUwNDljNjk0MDNkYTYwL3NyYy9tYXQyZC5qcyNMMTgyXG5leHBvcnQgY29uc3QgbXVsdGlwbHkgPSAoXG4gIG1hdHJpeEE6IEJhc2VNYXRyaXgyZCxcbiAgbWF0cml4QjogQmFzZU1hdHJpeDJkLFxuICBkZXN0aW5hdGlvbjogQmFzZU1hdHJpeDJkID0gbWF0cml4QSxcbik6IEJhc2VNYXRyaXgyZCA9PiB7XG4gIGNvbnN0IHsgcmF3TWF0cml4MmQ6IHJhd01hdHJpeDJkQSB9ID0gbWF0cml4QTtcbiAgY29uc3QgeyByYXdNYXRyaXgyZDogcmF3TWF0cml4MmRCIH0gPSBtYXRyaXhCO1xuICBjb25zdCB7IHJhd01hdHJpeDJkOiByYXdNYXRyaXhEZXN0aW5hdGlvbiB9ID0gZGVzdGluYXRpb247XG5cbiAgY29uc3QgYTAgPSByYXdNYXRyaXgyZEFbMF07XG4gIGNvbnN0IGExID0gcmF3TWF0cml4MmRBWzFdO1xuICBjb25zdCBhMiA9IHJhd01hdHJpeDJkQVsyXTtcbiAgY29uc3QgYTMgPSByYXdNYXRyaXgyZEFbM107XG4gIGNvbnN0IGE0ID0gcmF3TWF0cml4MmRBWzRdO1xuICBjb25zdCBhNSA9IHJhd01hdHJpeDJkQVs1XTtcblxuICBjb25zdCBiMCA9IHJhd01hdHJpeDJkQlswXTtcbiAgY29uc3QgYjEgPSByYXdNYXRyaXgyZEJbMV07XG4gIGNvbnN0IGIyID0gcmF3TWF0cml4MmRCWzJdO1xuICBjb25zdCBiMyA9IHJhd01hdHJpeDJkQlszXTtcbiAgY29uc3QgYjQgPSByYXdNYXRyaXgyZEJbNF07XG4gIGNvbnN0IGI1ID0gcmF3TWF0cml4MmRCWzVdO1xuXG4gIHJhd01hdHJpeERlc3RpbmF0aW9uWzBdID0gYTAgKiBiMCArIGEyICogYjE7XG4gIHJhd01hdHJpeERlc3RpbmF0aW9uWzFdID0gYTEgKiBiMCArIGEzICogYjE7XG4gIHJhd01hdHJpeERlc3RpbmF0aW9uWzJdID0gYTAgKiBiMiArIGEyICogYjM7XG4gIHJhd01hdHJpeERlc3RpbmF0aW9uWzNdID0gYTEgKiBiMiArIGEzICogYjM7XG4gIHJhd01hdHJpeERlc3RpbmF0aW9uWzRdID0gYTAgKiBiNCArIGEyICogYjUgKyBhNDtcbiAgcmF3TWF0cml4RGVzdGluYXRpb25bNV0gPSBhMSAqIGI0ICsgYTMgKiBiNSArIGE1O1xuXG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn07XG4iLCJpbXBvcnQgeyBtYXAgfSBmcm9tICcuLi9tYXAnO1xuaW1wb3J0IHsgbXVsdGlwbHkgYXMgbXVsdGlwbHlWZWN0b3IgfSBmcm9tICcuLi92ZWN0b3JzL211bHRpcGx5JztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uL3ZlY3RvcnMvVmVjdG9yJztcbmltcG9ydCB7IGZyb21TY2FsZSB9IGZyb20gJy4vZnJvbVNjYWxlJztcbmltcG9ydCB7IGZyb21UcmFuc2xhdGlvbiB9IGZyb20gJy4vZnJvbVRyYW5zbGF0aW9uJztcbmltcG9ydCB7IG11bHRpcGx5IH0gZnJvbSAnLi9tdWx0aXBseSc7XG5pbXBvcnQgeyBCYXNlTWF0cml4MmQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHpvb21Ub1BvaW50ID0gKG1hdHJpeDogQmFzZU1hdHJpeDJkLCBwb2ludDogVmVjdG9yLCBkZWx0YTogVmVjdG9yKTogQmFzZU1hdHJpeDJkID0+IHtcbiAgLy8gMSAtIHpvb20gaW4sIC0xIC0gem9vbSBvdXRcbiAgY29uc3Qgem9vbURpcmVjdGlvbiA9IC0xICogTWF0aC5zaWduKGRlbHRhLnkpO1xuICBjb25zdCBvcmlnaW5hbFJhd01hdHJpeENvcHkgPSBbLi4ubWF0cml4LnJhd01hdHJpeDJkXTtcbiAgY29uc3QgbWF4Wm9vbUxldmVsID0gNDtcbiAgY29uc3QgbWluWm9vbUxldmVsID0gMC4yO1xuICBjb25zdCB6b29tSW50ZW5zaXR5ID0gbWFwKE1hdGguYWJzKGRlbHRhLnkpLCAwLCA1MCwgMCwgMC4xKTsgLy8gMC4wNTtcbiAgY29uc3Qgem9vbVJlbGF0aXZlRGlmZmVyZW5jZSA9IHpvb21EaXJlY3Rpb24gKiB6b29tSW50ZW5zaXR5O1xuXG4gIGNvbnN0IGZyb21Qb2ludCA9IHBvaW50O1xuICBjb25zdCB0b1BvaW50ID0gbXVsdGlwbHlWZWN0b3IoZnJvbVBvaW50LmNsb25lKCksIG5ldyBWZWN0b3IoeyB4OiAtMSwgeTogLTEgfSkpO1xuICBjb25zdCByZWxhdGl2ZVpvb20gPSBuZXcgVmVjdG9yKHsgeDogMSArIHpvb21SZWxhdGl2ZURpZmZlcmVuY2UsIHk6IDEgKyB6b29tUmVsYXRpdmVEaWZmZXJlbmNlIH0pO1xuXG4gIGNvbnN0IHRvUG9pbnRNYXRyaXggPSBmcm9tVHJhbnNsYXRpb24odG9Qb2ludCk7XG4gIGNvbnN0IHNjYWxlTWF0cml4ID0gZnJvbVNjYWxlKHJlbGF0aXZlWm9vbSk7XG4gIGNvbnN0IGZyb21Qb2ludE1hdHJpeCA9IGZyb21UcmFuc2xhdGlvbihmcm9tUG9pbnQpO1xuXG4gIC8vIGh0dHBzOi8vbWVkaXVtLmNvbS9AYmVuamFtaW4uYm90dG8vem9vbWluZy1hdC10aGUtbW91c2UtY29vcmRpbmF0ZXMtd2l0aC1hZmZpbmUtdHJhbnNmb3JtYXRpb25zLTg2ZTczMTJmZDUwYlxuICBtYXRyaXggPSBtdWx0aXBseSh0b1BvaW50TWF0cml4LCBtYXRyaXgsIG1hdHJpeCk7XG4gIG1hdHJpeCA9IG11bHRpcGx5KHNjYWxlTWF0cml4LCBtYXRyaXgsIG1hdHJpeCk7XG4gIG1hdHJpeCA9IG11bHRpcGx5KGZyb21Qb2ludE1hdHJpeCwgbWF0cml4LCBtYXRyaXgpO1xuXG4gIGNvbnN0IFt6b29tWCwgX2IsIF9jLCB6b29tWV0gPSBtYXRyaXgucmF3TWF0cml4MmQ7XG5cbiAgaWYgKHpvb21YID4gbWF4Wm9vbUxldmVsIHx8IHpvb21YIDwgbWluWm9vbUxldmVsIHx8IHpvb21ZID4gbWF4Wm9vbUxldmVsIHx8IHpvb21ZIDwgbWluWm9vbUxldmVsKSB7XG4gICAgbWF0cml4LnJhd01hdHJpeDJkWzBdID0gb3JpZ2luYWxSYXdNYXRyaXhDb3B5WzBdO1xuICAgIG1hdHJpeC5yYXdNYXRyaXgyZFsxXSA9IG9yaWdpbmFsUmF3TWF0cml4Q29weVsxXTtcbiAgICBtYXRyaXgucmF3TWF0cml4MmRbMl0gPSBvcmlnaW5hbFJhd01hdHJpeENvcHlbMl07XG4gICAgbWF0cml4LnJhd01hdHJpeDJkWzNdID0gb3JpZ2luYWxSYXdNYXRyaXhDb3B5WzNdO1xuICAgIG1hdHJpeC5yYXdNYXRyaXgyZFs0XSA9IG9yaWdpbmFsUmF3TWF0cml4Q29weVs0XTtcbiAgICBtYXRyaXgucmF3TWF0cml4MmRbNV0gPSBvcmlnaW5hbFJhd01hdHJpeENvcHlbNV07XG4gIH1cblxuICByZXR1cm4gbWF0cml4O1xufTtcbiIsImltcG9ydCB7IE1hdGhFbnRpdHkgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBCYXNlVmVjdG9yIH0gZnJvbSAnLi4vdmVjdG9ycy90eXBlcyc7XG5pbXBvcnQgeyBCYXNlUmVjdGFuZ2xlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUgaW1wbGVtZW50cyBCYXNlUmVjdGFuZ2xlLCBNYXRoRW50aXR5PFJlY3RhbmdsZT4ge1xuICBwdWJsaWMgeDogbnVtYmVyO1xuICBwdWJsaWMgeTogbnVtYmVyO1xuICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbiAgcHVibGljIGhlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbVBvaW50cyhzdGFydDogQmFzZVZlY3RvciwgZW5kOiBCYXNlVmVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoe1xuICAgICAgeDogc3RhcnQueCxcbiAgICAgIHk6IHN0YXJ0LnksXG4gICAgICB3aWR0aDogTWF0aC5hYnMoZW5kLnggLSBzdGFydC54KSxcbiAgICAgIGhlaWdodDogTWF0aC5hYnMoZW5kLnkgLSBzdGFydC55KSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9OiBCYXNlUmVjdGFuZ2xlID0geyB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgcHVibGljIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZyb20ocmVjdGFuZ2xlOiBCYXNlUmVjdGFuZ2xlKSB7XG4gICAgdGhpcy54ID0gcmVjdGFuZ2xlLng7XG4gICAgdGhpcy55ID0gcmVjdGFuZ2xlLnk7XG4gICAgdGhpcy53aWR0aCA9IHJlY3RhbmdsZS53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHJlY3RhbmdsZS5oZWlnaHQ7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZyhsaW1pdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHggPSBsaW1pdGVkID8gdGhpcy54LnRvRml4ZWQoMSkgOiB0aGlzLng7XG4gICAgY29uc3QgeSA9IGxpbWl0ZWQgPyB0aGlzLnkudG9GaXhlZCgxKSA6IHRoaXMueTtcbiAgICBjb25zdCB3aWR0aCA9IGxpbWl0ZWQgPyB0aGlzLndpZHRoLnRvRml4ZWQoMSkgOiB0aGlzLndpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IGxpbWl0ZWQgPyB0aGlzLmhlaWdodC50b0ZpeGVkKDEpIDogdGhpcy5oZWlnaHQ7XG5cbiAgICByZXR1cm4gYCR7eH06JHt5fToke3dpZHRofToke2hlaWdodH1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBzdWJ0cmFjdCB9IGZyb20gJy4uL3ZlY3RvcnMvc3VidHJhY3QnO1xuaW1wb3J0IHsgQmFzZVJlY3RhbmdsZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgY2VudHJhbGl6ZSA9IDxUIGV4dGVuZHMgQmFzZVJlY3RhbmdsZT4ocmVjdGFuZ2xlOiBUKTogVCA9PiB7XG4gIGNvbnN0IGNlbnRyYWxpemVWZWN0b3IgPSB7XG4gICAgeDogcmVjdGFuZ2xlLndpZHRoIC8gMixcbiAgICB5OiByZWN0YW5nbGUuaGVpZ2h0IC8gMixcbiAgfTtcblxuICBzdWJ0cmFjdChyZWN0YW5nbGUsIGNlbnRyYWxpemVWZWN0b3IpO1xuXG4gIHJldHVybiByZWN0YW5nbGU7XG59O1xuIiwiaW1wb3J0IHsgdG91Y2hlcyB9IGZyb20gJy4vdG91Y2hlcyc7XG5pbXBvcnQgeyBCYXNlUmVjdGFuZ2xlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3RzKFxuICByZWN0YW5nbGVBOiBCYXNlUmVjdGFuZ2xlLFxuICByZWN0YW5nbGVCOiBCYXNlUmVjdGFuZ2xlLFxuICBtb2RlOiAnY2VudGVyJyB8ICdjb3ZlcicgfCAndG91Y2gnID0gJ3RvdWNoJyxcbik6IGJvb2xlYW4ge1xuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlICdjZW50ZXInOiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cbiAgICBjYXNlICdjb3Zlcic6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuICAgIGNhc2UgJ3RvdWNoJzoge1xuICAgICAgcmV0dXJuIHRvdWNoZXMocmVjdGFuZ2xlQSwgcmVjdGFuZ2xlQik7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlVmVjdG9yIH0gZnJvbSAnLi4vdmVjdG9ycy90eXBlcyc7XG5pbXBvcnQgeyBCYXNlUmVjdGFuZ2xlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBpc1BvaW50SW5zaWRlID0gKHBvaW50OiBCYXNlVmVjdG9yLCByZWN0YW5nbGU6IEJhc2VSZWN0YW5nbGUpOiBib29sZWFuID0+IHtcbiAgaWYgKHBvaW50LnggPCByZWN0YW5nbGUueCB8fCBwb2ludC54ID4gcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocG9pbnQueSA8IHJlY3RhbmdsZS55IHx8IHBvaW50LnkgPiByZWN0YW5nbGUueSArIHJlY3RhbmdsZS5oZWlnaHQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCJpbXBvcnQgeyBhZGQgfSBmcm9tICcuLi92ZWN0b3JzL2FkZCc7XG5pbXBvcnQgeyBzdWJ0cmFjdCB9IGZyb20gJy4uL3ZlY3RvcnMvc3VidHJhY3QnO1xuaW1wb3J0IHsgQmFzZVZlY3RvciB9IGZyb20gJy4uL3ZlY3RvcnMvdHlwZXMnO1xuaW1wb3J0IHsgQmFzZVJlY3RhbmdsZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgbW92ZSA9IDxUIGV4dGVuZHMgQmFzZVJlY3RhbmdsZT4ocmVjdGFuZ2xlOiBULCB2ZWN0b3I6IEJhc2VWZWN0b3IsIGRpcmVjdGlvbjogMSB8IC0xID0gMSk6IFQgPT4ge1xuICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgYWRkKHJlY3RhbmdsZSwgdmVjdG9yKTtcbiAgfSBlbHNlIHtcbiAgICBzdWJ0cmFjdChyZWN0YW5nbGUsIHZlY3Rvcik7XG4gIH1cblxuICByZXR1cm4gcmVjdGFuZ2xlO1xufTtcbiIsImltcG9ydCB7IG11bHRpcGx5IH0gZnJvbSAnLi4vdmVjdG9ycy9tdWx0aXBseSc7XG5pbXBvcnQgeyBCYXNlVmVjdG9yIH0gZnJvbSAnLi4vdmVjdG9ycy90eXBlcyc7XG5pbXBvcnQgeyBzY2FsZSB9IGZyb20gJy4vc2NhbGUnO1xuaW1wb3J0IHsgQmFzZVJlY3RhbmdsZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgbXVsdGlwbHlCeVZlY3RvciA9IDxUIGV4dGVuZHMgQmFzZVJlY3RhbmdsZT4ocmVjdGFuZ2xlOiBULCB2ZWN0b3I6IEJhc2VWZWN0b3IpOiBUID0+IHtcbiAgc2NhbGUocmVjdGFuZ2xlLCB2ZWN0b3IpO1xuICBtdWx0aXBseShyZWN0YW5nbGUsIHZlY3Rvcik7XG5cbiAgcmV0dXJuIHJlY3RhbmdsZTtcbn07XG4iLCJpbXBvcnQgeyBCYXNlVmVjdG9yIH0gZnJvbSAnLi4vdmVjdG9ycy90eXBlcyc7XG5pbXBvcnQgeyBCYXNlUmVjdGFuZ2xlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBzY2FsZSA9IDxUIGV4dGVuZHMgQmFzZVJlY3RhbmdsZT4ocmVjdGFuZ2xlOiBULCB2ZWN0b3I6IEJhc2VWZWN0b3IpOiBUID0+IHtcbiAgcmVjdGFuZ2xlLndpZHRoICo9IHZlY3Rvci54O1xuICByZWN0YW5nbGUuaGVpZ2h0ICo9IHZlY3Rvci55O1xuXG4gIHJldHVybiByZWN0YW5nbGU7XG59O1xuIiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vRGFuaWVsLUh1Zy9kNzk4NGQ4MmI1OGQ2ZDI2NzlhMDg3ZDg5NmNhM2QyYlxuXG5pbXBvcnQgeyBCYXNlUmVjdGFuZ2xlIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIENoZWNrIGlmIHJlY3RhbmdsZSBhIHRvdWNoZXMgcmVjdGFuZ2xlIGIuXG4vLyBFYWNoIG9iamVjdCAoYSBhbmQgYikgc2hvdWxkIGhhdmUgMiBwcm9wZXJ0aWVzIHRvIHJlcHJlc2VudCB0aGVcbi8vIHRvcC1sZWZ0IGNvcm5lciAoeDEsIHkxKSBhbmQgMiBmb3IgdGhlIGJvdHRvbS1yaWdodCBjb3JuZXIgKHgyLCB5MikuXG5leHBvcnQgZnVuY3Rpb24gdG91Y2hlcyhyZWN0YW5nbGVBOiBCYXNlUmVjdGFuZ2xlLCByZWN0YW5nbGVCOiBCYXNlUmVjdGFuZ2xlKTogYm9vbGVhbiB7XG4gIC8vIEhhcyBob3Jpem9udGFsIGdhcFxuICBpZiAocmVjdGFuZ2xlQS54ID4gcmVjdGFuZ2xlQi54ICsgcmVjdGFuZ2xlQi53aWR0aCB8fCByZWN0YW5nbGVCLnggPiByZWN0YW5nbGVBLnggKyByZWN0YW5nbGVBLndpZHRoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gSGFzIHZlcnRpY2FsIGdhcFxuICBpZiAocmVjdGFuZ2xlQS55ID4gcmVjdGFuZ2xlQi55ICsgcmVjdGFuZ2xlQi5oZWlnaHQgfHwgcmVjdGFuZ2xlQi55ID4gcmVjdGFuZ2xlQS55ICsgcmVjdGFuZ2xlQS5oZWlnaHQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IE1hdGhFbnRpdHkgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBCYXNlVmVjdG9yIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBWZWN0b3IgaW1wbGVtZW50cyBCYXNlVmVjdG9yLCBNYXRoRW50aXR5PFZlY3Rvcj4ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB7IHgsIHkgfTogQmFzZVZlY3RvciA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH0sXG4gICkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGcm9tKHZlY3RvcjogQmFzZVZlY3Rvcikge1xuICAgIHRoaXMueCA9IHZlY3Rvci54O1xuICAgIHRoaXMueSA9IHZlY3Rvci55O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgdG9TdHJpbmcobGltaXRlZCA9IHRydWUpIHtcbiAgICBjb25zdCB4ID0gbGltaXRlZCA/IHRoaXMueC50b0ZpeGVkKDEpIDogdGhpcy54O1xuICAgIGNvbnN0IHkgPSBsaW1pdGVkID8gdGhpcy55LnRvRml4ZWQoMSkgOiB0aGlzLnk7XG5cbiAgICByZXR1cm4gYCR7eH06JHt5fWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2VWZWN0b3IgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGFkZCA9IDxUIGV4dGVuZHMgQmFzZVZlY3Rvcj4odmVjdG9yQTogVCwgdmVjdG9yQjogQmFzZVZlY3Rvcik6IFQgPT4ge1xuICB2ZWN0b3JBLnggKz0gdmVjdG9yQi54O1xuICB2ZWN0b3JBLnkgKz0gdmVjdG9yQi55O1xuXG4gIHJldHVybiB2ZWN0b3JBO1xufTtcbiIsImltcG9ydCB7IEJhc2VWZWN0b3IgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGNlbnRlciA9IDxUIGV4dGVuZHMgQmFzZVZlY3Rvcj4oZnJvbTogVCwgdG86IEJhc2VWZWN0b3IpOiBUID0+IHtcbiAgZnJvbS54ID0gZnJvbS54ICsgKHRvLnggLSBmcm9tLngpIC8gMjtcbiAgZnJvbS55ID0gZnJvbS55ICsgKHRvLnkgLSBmcm9tLnkpIC8gMjtcblxuICByZXR1cm4gZnJvbTtcbn07XG4iLCJpbXBvcnQgeyBCYXNlVmVjdG9yIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBkaXZpZGUgPSA8VCBleHRlbmRzIEJhc2VWZWN0b3I+KHZlY3RvckE6IFQsIHZlY3RvckI6IEJhc2VWZWN0b3IpOiBUID0+IHtcbiAgdmVjdG9yQS54IC89IHZlY3RvckIueDtcbiAgdmVjdG9yQS55IC89IHZlY3RvckIueTtcblxuICByZXR1cm4gdmVjdG9yQTtcbn07XG4iLCJpbXBvcnQgeyBCYXNlVmVjdG9yIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBtdWx0aXBseSA9IDxUIGV4dGVuZHMgQmFzZVZlY3Rvcj4odmVjdG9yQTogVCwgdmVjdG9yQjogQmFzZVZlY3Rvcik6IFQgPT4ge1xuICB2ZWN0b3JBLnggKj0gdmVjdG9yQi54O1xuICB2ZWN0b3JBLnkgKj0gdmVjdG9yQi55O1xuXG4gIHJldHVybiB2ZWN0b3JBO1xufTtcbiIsImltcG9ydCB7IEJhc2VWZWN0b3IgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSAodmVjdG9yQTogQmFzZVZlY3RvciwgdmVjdG9yQjogQmFzZVZlY3Rvcik6IFtCYXNlVmVjdG9yLCBCYXNlVmVjdG9yXSA9PiB7XG4gIGxldCB0b3BMZWZ0OiBCYXNlVmVjdG9yIHwgdW5kZWZpbmVkO1xuICBsZXQgdG9wUmlnaHQ6IEJhc2VWZWN0b3IgfCB1bmRlZmluZWQ7XG4gIGxldCBib3R0b21MZWZ0OiBCYXNlVmVjdG9yIHwgdW5kZWZpbmVkO1xuICBsZXQgYm90dG9tUmlnaHQ6IEJhc2VWZWN0b3IgfCB1bmRlZmluZWQ7XG5cbiAgaWYgKGlzRmlyc3RUb3BMZWZ0KHZlY3RvckEsIHZlY3RvckIpKSB7XG4gICAgdG9wTGVmdCA9IHZlY3RvckE7XG4gIH0gZWxzZSBpZiAoaXNGaXJzdFRvcExlZnQodmVjdG9yQiwgdmVjdG9yQSkpIHtcbiAgICB0b3BMZWZ0ID0gdmVjdG9yQjtcbiAgfVxuXG4gIGlmIChpc0ZpcnN0Qm90dG9tUmlnaHQodmVjdG9yQSwgdmVjdG9yQikpIHtcbiAgICBib3R0b21SaWdodCA9IHZlY3RvckE7XG4gIH0gZWxzZSBpZiAoaXNGaXJzdEJvdHRvbVJpZ2h0KHZlY3RvckIsIHZlY3RvckEpKSB7XG4gICAgYm90dG9tUmlnaHQgPSB2ZWN0b3JCO1xuICB9XG5cbiAgaWYgKHRvcExlZnQgJiYgYm90dG9tUmlnaHQpIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICB4OiB0b3BMZWZ0LngsXG4gICAgICAgIHk6IHRvcExlZnQueSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHg6IGJvdHRvbVJpZ2h0LngsXG4gICAgICAgIHk6IGJvdHRvbVJpZ2h0LnksXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBpZiAoaXNGaXJzdFRvcFJpZ2h0KHZlY3RvckEsIHZlY3RvckIpKSB7XG4gICAgdG9wUmlnaHQgPSB2ZWN0b3JBO1xuICB9IGVsc2UgaWYgKGlzRmlyc3RUb3BSaWdodCh2ZWN0b3JCLCB2ZWN0b3JBKSkge1xuICAgIHRvcFJpZ2h0ID0gdmVjdG9yQjtcbiAgfVxuXG4gIGlmIChpc0ZpcnN0Qm90dG9tTGVmdCh2ZWN0b3JBLCB2ZWN0b3JCKSkge1xuICAgIGJvdHRvbUxlZnQgPSB2ZWN0b3JBO1xuICB9IGVsc2UgaWYgKGlzRmlyc3RCb3R0b21MZWZ0KHZlY3RvckIsIHZlY3RvckEpKSB7XG4gICAgYm90dG9tTGVmdCA9IHZlY3RvckI7XG4gIH1cblxuICBpZiAoIXRvcExlZnQgJiYgdG9wUmlnaHQgJiYgYm90dG9tTGVmdCkge1xuICAgIHRvcExlZnQgPSB7XG4gICAgICB4OiBib3R0b21MZWZ0LngsXG4gICAgICB5OiB0b3BSaWdodC55LFxuICAgIH07XG4gIH1cblxuICBpZiAoIWJvdHRvbVJpZ2h0ICYmIHRvcFJpZ2h0ICYmIGJvdHRvbUxlZnQpIHtcbiAgICBib3R0b21SaWdodCA9IHtcbiAgICAgIHg6IHRvcFJpZ2h0LngsXG4gICAgICB5OiBib3R0b21MZWZ0LnksXG4gICAgfTtcbiAgfVxuXG4gIGlmICghdG9wTGVmdCB8fCAhYm90dG9tUmlnaHQpIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICB4OiB2ZWN0b3JBLngsXG4gICAgICAgIHk6IHZlY3RvckEueSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHg6IHZlY3RvckIueCxcbiAgICAgICAgeTogdmVjdG9yQi55LFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIFt0b3BMZWZ0LCBib3R0b21SaWdodF07XG59O1xuXG5mdW5jdGlvbiBpc0ZpcnN0VG9wTGVmdCh2ZWN0b3JBOiBCYXNlVmVjdG9yLCB2ZWN0b3JCOiBCYXNlVmVjdG9yKSB7XG4gIHJldHVybiB2ZWN0b3JBLnggPCB2ZWN0b3JCLnggJiYgdmVjdG9yQS55IDwgdmVjdG9yQi55O1xufVxuXG5mdW5jdGlvbiBpc0ZpcnN0VG9wUmlnaHQodmVjdG9yQTogQmFzZVZlY3RvciwgdmVjdG9yQjogQmFzZVZlY3Rvcikge1xuICByZXR1cm4gdmVjdG9yQS54ID4gdmVjdG9yQi54ICYmIHZlY3RvckEueSA8IHZlY3RvckIueTtcbn1cblxuZnVuY3Rpb24gaXNGaXJzdEJvdHRvbUxlZnQodmVjdG9yQTogQmFzZVZlY3RvciwgdmVjdG9yQjogQmFzZVZlY3Rvcikge1xuICByZXR1cm4gdmVjdG9yQS54IDwgdmVjdG9yQi54ICYmIHZlY3RvckEueSA+IHZlY3RvckIueTtcbn1cblxuZnVuY3Rpb24gaXNGaXJzdEJvdHRvbVJpZ2h0KHZlY3RvckE6IEJhc2VWZWN0b3IsIHZlY3RvckI6IEJhc2VWZWN0b3IpIHtcbiAgcmV0dXJuIHZlY3RvckEueCA+IHZlY3RvckIueCAmJiB2ZWN0b3JBLnkgPiB2ZWN0b3JCLnk7XG59XG4iLCJpbXBvcnQgeyBCYXNlVmVjdG9yIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdCA9IDxUIGV4dGVuZHMgQmFzZVZlY3Rvcj4odmVjdG9yQTogVCwgdmVjdG9yQjogQmFzZVZlY3Rvcik6IFQgPT4ge1xuICB2ZWN0b3JBLnggLT0gdmVjdG9yQi54O1xuICB2ZWN0b3JBLnkgLT0gdmVjdG9yQi55O1xuXG4gIHJldHVybiB2ZWN0b3JBO1xufTtcbiIsImltcG9ydCB7IG1vdmUgfSBmcm9tICcuLi9tYXRoL3JlY3RhbmdsZS9tb3ZlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4uL21hdGgvcmVjdGFuZ2xlL1JlY3RhbmdsZSc7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vbWF0aC9yZWN0YW5nbGUvdHlwZXMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3JzL1ZlY3Rvcic7XG5cbmV4cG9ydCBlbnVtIEN1cnNvclR5cGUge1xuICBEZWZhdWx0ID0gJ2RlZmF1bHQnLFxuICBHcmFiID0gJ2dyYWInLFxufVxuXG5leHBvcnQgdHlwZSBDbGVhckFyZWFPcHRpb25zID0ge1xuICBhcmVhOiBSZWN0YW5nbGU7XG4gIG9mZnNldD86IFZlY3Rvcjtcbn07XG5cbmV4cG9ydCB0eXBlIFJlY3RhbmdsZU9wdGlvbnMgPSB7XG4gIGZpbGxTdHlsZT86IHN0cmluZztcbiAgc3Ryb2tlU3R5bGU/OiBzdHJpbmc7XG4gIGxpbmVXaWR0aD86IG51bWJlcjtcbiAgcmVjdGFuZ2xlOiBSZWN0YW5nbGU7XG59O1xuXG5leHBvcnQgdHlwZSBMaW5lT3B0aW9ucyA9IHtcbiAgZnJvbTogVmVjdG9yO1xuICB0bzogVmVjdG9yO1xuICBzdHJva2VTdHlsZT86IHN0cmluZztcbiAgbGluZVdpZHRoPzogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIERyYXdlciB7XG4gIHB1YmxpYyBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgY29uc3RydWN0b3IoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckFyZWEoeyBhcmVhOiBfYXJlYSwgb2Zmc2V0ID0gbmV3IFZlY3RvcigpIH06IENsZWFyQXJlYU9wdGlvbnMpIHtcbiAgICBjb25zdCBhcmVhID0gbW92ZShfYXJlYS5jbG9uZSgpLCBvZmZzZXQpO1xuXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdChhcmVhLngsIGFyZWEueSwgYXJlYS53aWR0aCwgYXJlYS5oZWlnaHQpO1xuICB9XG5cbiAgcHVibGljIHJlY3RhbmdsZSh7IGZpbGxTdHlsZSA9ICdyZWQnLCBsaW5lV2lkdGggPSAxLCBzdHJva2VTdHlsZSA9ICd0cmFuc3BhcmVudCcsIHJlY3RhbmdsZSB9OiBSZWN0YW5nbGVPcHRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY29udGV4dC5yZWN0KHJlY3RhbmdsZS54LCByZWN0YW5nbGUueSwgcmVjdGFuZ2xlLndpZHRoLCByZWN0YW5nbGUuaGVpZ2h0KTtcbiAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBsaW5lKHsgZnJvbSwgdG8sIHN0cm9rZVN0eWxlID0gJ2JsYWNrJywgbGluZVdpZHRoID0gMSB9OiBMaW5lT3B0aW9ucykge1xuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xuICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG5cbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhmcm9tLngsIGZyb20ueSk7XG4gICAgdGhpcy5jb250ZXh0LmxpbmVUbyh0by54LCB0by55KTtcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICBwdWJsaWMgY3Vyc29yKHR5cGU6IEN1cnNvclR5cGUpIHtcbiAgICB0aGlzLmNvbnRleHQuY2FudmFzLnN0eWxlLmN1cnNvciA9IHR5cGU7XG4gIH1cblxuICBwdWJsaWMgZGltZW5zaW9ucyh7IHdpZHRoLCBoZWlnaHQgfTogRGltZW5zaW9ucykge1xuICAgIHRoaXMuY29udGV4dC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbnRleHQuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyB0cmFuc2Zvcm0oYTogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyLCBlOiBudW1iZXIsIGY6IG51bWJlcikge1xuICAgIHRoaXMuY29udGV4dC50cmFuc2Zvcm0oYSwgYiwgYywgZCwgZSwgZik7XG4gIH1cblxuICBwdWJsaWMgcmVzZXRUcmFuc2Zvcm0oKSB7XG4gICAgdGhpcy5jb250ZXh0LnJlc2V0VHJhbnNmb3JtKCk7XG4gIH1cblxuICBwdWJsaWMgc2F2ZSgpIHtcbiAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICB9XG5cbiAgcHVibGljIHNhdmVBbmRSZXNldCgpIHtcbiAgICB0aGlzLnNhdmUoKTtcbiAgICB0aGlzLnJlc2V0VHJhbnNmb3JtKCk7XG4gIH1cblxuICBwdWJsaWMgcmVzdG9yZSgpIHtcbiAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQdWJTdWIgfSBmcm9tICcuLi91dGlscy9wdWJTdWIvUHViU3ViJztcblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgcHJpdmF0ZSBsYXN0QW5pbWF0aW9uID0gRGF0ZS5ub3coKTtcbiAgcHJpdmF0ZSBmcHMgPSA2MDtcbiAgcHJpdmF0ZSBmcHNJbnRlcnZhbCA9IDEwMDAgLyB0aGlzLmZwcztcblxuICBwcml2YXRlIGFuaW1hdGlvblB1YlN1YiA9IG5ldyBQdWJTdWI8eyBkZWx0YTogbnVtYmVyIH0+KCk7XG4gIHB1YmxpYyBhbmltYXRpb25FdmVudCA9IHRoaXMuYW5pbWF0aW9uUHViU3ViLmV2ZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhbmltYXRlKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmFuaW1hdGUoKSk7XG5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGVsYXBzZWQgPSBub3cgLSB0aGlzLmxhc3RBbmltYXRpb247XG5cbiAgICBpZiAoZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMubGFzdEFuaW1hdGlvbiA9IG5vdyAtIChlbGFwc2VkICUgdGhpcy5mcHNJbnRlcnZhbCk7XG4gICAgICB0aGlzLmFuaW1hdGlvblB1YlN1Yi5wdWJsaXNoKHsgZGVsdGE6IGVsYXBzZWQgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBTZWxlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL1NlbGVjdGlvbic7XG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuL0RyYXdlcic7XG5cbnR5cGUgU2VsZWN0aW9uRHJhd2VyRGVwZW5kZW5jaWVzID0ge1xuICBkcmF3ZXI6IERyYXdlcjtcbiAgc2VsZWN0aW9uOiBTZWxlY3Rpb247XG59O1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uRHJhd2VyIHtcbiAgcHJpdmF0ZSBkOiBTZWxlY3Rpb25EcmF3ZXJEZXBlbmRlbmNpZXM7XG5cbiAgY29uc3RydWN0b3IoZDogU2VsZWN0aW9uRHJhd2VyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RlZEFyZWEoKSB7XG4gICAgaWYgKCF0aGlzLmQuc2VsZWN0aW9uLmFic29sdXRlU2VsZWN0ZWRBcmVhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kLmRyYXdlci5zYXZlQW5kUmVzZXQoKTtcbiAgICB0aGlzLmQuZHJhd2VyLnJlY3RhbmdsZSh7XG4gICAgICByZWN0YW5nbGU6IHRoaXMuZC5zZWxlY3Rpb24uYWJzb2x1dGVTZWxlY3RlZEFyZWEsXG4gICAgICBzdHJva2VTdHlsZTogJ3JnYigyMiAyMiAyMiAvIDQwJSknLFxuICAgICAgZmlsbFN0eWxlOiAncmdiKDEwMSAxNDEgMjU1IC8gNDAlKScsXG4gICAgfSk7XG4gICAgdGhpcy5kLmRyYXdlci5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4uL21hdGgvcmVjdGFuZ2xlL1JlY3RhbmdsZSc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcnMvVmVjdG9yJztcbmltcG9ydCB7IGNyZWF0ZVRleHRCbG9ja0xpbmVzLCBtZXJnZVdpdGhEZWZhdWx0VGV4dE9wdGlvbnMgfSBmcm9tICcuLi91dGlscy9jYW52YXNUZXh0JztcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJy4vRHJhd2VyJztcbmltcG9ydCB7IFRleHRPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFRleHRJblJlY3RhbmdsZU9wdGlvbnMgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgcmVjdGFuZ2xlOiBSZWN0YW5nbGU7XG59ICYgUGFydGlhbDxUZXh0T3B0aW9ucz47XG5cbmV4cG9ydCB0eXBlIFRleHRBZnRlclBvaW50T3B0aW9ucyA9IHtcbiAgdGV4dDogc3RyaW5nO1xuICBwb3NpdGlvbjogVmVjdG9yO1xufSAmIFBhcnRpYWw8VGV4dE9wdGlvbnM+O1xuXG5leHBvcnQgdHlwZSBUZXh0TGluZXNPcHRpb25zID0ge1xuICBsaW5lczogc3RyaW5nW107XG4gIHBvc2l0aW9uOiBWZWN0b3I7XG59ICYgUGFydGlhbDxUZXh0T3B0aW9ucz47XG5cbnR5cGUgVGV4dERyYXdlckRlcGVuZGVuY2llcyA9IHtcbiAgZHJhd2VyOiBEcmF3ZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgVGV4dERyYXdlciB7XG4gIHByaXZhdGUgZDogVGV4dERyYXdlckRlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBUZXh0RHJhd2VyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcbiAgfVxuXG4gIHB1YmxpYyB0ZXh0TGluZXNBZnRlclBvaW50KG9wdGlvbnM6IFRleHRMaW5lc09wdGlvbnMpIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBsaW5lcywgZm9udEZhbWlseSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB7IGxpbmVIZWlnaHQsIHBhZGRpbmcsIGZvbnRTaXplIH0gPSBtZXJnZVdpdGhEZWZhdWx0VGV4dE9wdGlvbnMob3B0aW9ucyk7XG4gICAgY29uc3QgbGluZUhlaWdodE9mZnNldCA9IGxpbmVIZWlnaHQgLyBmb250U2l6ZTtcblxuICAgIHRoaXMuZC5kcmF3ZXIuY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuZC5kcmF3ZXIuY29udGV4dC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtmb250RmFtaWx5fWA7XG4gICAgdGhpcy5kLmRyYXdlci5jb250ZXh0LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICB0aGlzLmQuZHJhd2VyLmNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG5cbiAgICBsZXQgdG9wT2Zmc2V0ID0gMDtcbiAgICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICB0aGlzLmQuZHJhd2VyLmNvbnRleHQuZmlsbFRleHQobGluZSwgcG9zaXRpb24ueCArIHBhZGRpbmcsIHBvc2l0aW9uLnkgKyBwYWRkaW5nICsgbGluZUhlaWdodE9mZnNldCArIHRvcE9mZnNldCk7XG4gICAgICB0b3BPZmZzZXQgKz0gbGluZUhlaWdodDtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0ZXh0SW5SZWN0YW5nbGUob3B0aW9uczogVGV4dEluUmVjdGFuZ2xlT3B0aW9ucykge1xuICAgIGNvbnN0IHRleHRCbG9ja0xpbmVzID0gY3JlYXRlVGV4dEJsb2NrTGluZXModGhpcy5kLmRyYXdlci5jb250ZXh0LCBvcHRpb25zKTtcbiAgICBjb25zdCB7IHJlY3RhbmdsZSB9ID0gb3B0aW9ucztcblxuICAgIHRoaXMudGV4dExpbmVzQWZ0ZXJQb2ludCh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgcG9zaXRpb246IHJlY3RhbmdsZSxcbiAgICAgIGxpbmVzOiB0ZXh0QmxvY2tMaW5lcy5saW5lcyxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0ZXh0QWZ0ZXJQb2ludChvcHRpb25zOiBUZXh0QWZ0ZXJQb2ludE9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCB0ZXh0IH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHsgcGFkZGluZywgZm9udFNpemUsIGZvbnRGYW1pbHkgfSA9IG1lcmdlV2l0aERlZmF1bHRUZXh0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIHRoaXMuZC5kcmF3ZXIuY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuZC5kcmF3ZXIuY29udGV4dC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtmb250RmFtaWx5fWA7XG4gICAgdGhpcy5kLmRyYXdlci5jb250ZXh0LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICB0aGlzLmQuZHJhd2VyLmNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG5cbiAgICB0aGlzLmQuZHJhd2VyLmNvbnRleHQuZmlsbFRleHQodGV4dCwgcG9zaXRpb24ueCArIHBhZGRpbmcsIHBvc2l0aW9uLnkgKyBwYWRkaW5nKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGV4dEVkaXRvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dEVkaXRvcic7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcnMvYWRkJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uL21hdGgvdmVjdG9ycy9WZWN0b3InO1xuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSAnLi9EcmF3ZXInO1xuaW1wb3J0IHsgVGV4dERyYXdlciB9IGZyb20gJy4vVGV4dERyYXdlcic7XG5cbnR5cGUgVGV4dEVkaXRvckRyYXdlckRlcGVuZGVuY2llcyA9IHtcbiAgZHJhd2VyOiBEcmF3ZXI7XG4gIHRleHREcmF3ZXI6IFRleHREcmF3ZXI7XG4gIHRleHRFZGl0b3I6IFRleHRFZGl0b3I7XG59O1xuXG5leHBvcnQgY2xhc3MgVGV4dEVkaXRvckRyYXdlciB7XG4gIHByaXZhdGUgZDogVGV4dEVkaXRvckRyYXdlckRlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBUZXh0RWRpdG9yRHJhd2VyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcbiAgfVxuXG4gIHByaXZhdGUgY3Vyc29yKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRleHRPcHRpb25zOiB7IGxpbmVIZWlnaHQgfSxcbiAgICB9ID0gdGhpcy5kLnRleHRFZGl0b3IudGV4dEJsb2NrTGluZXM7XG5cbiAgICB0aGlzLmQuZHJhd2VyLmxpbmUoe1xuICAgICAgZnJvbTogdGhpcy5kLnRleHRFZGl0b3IudGV4dEN1cnNvckRhdGEucG9zaXRpb24sXG4gICAgICB0bzogYWRkKFxuICAgICAgICB0aGlzLmQudGV4dEVkaXRvci50ZXh0Q3Vyc29yRGF0YS5wb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgICBuZXcgVmVjdG9yKHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IGxpbmVIZWlnaHQsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdGV4dChzaG93bkF0OiBWZWN0b3IpIHtcbiAgICBjb25zdCB7IGxpbmVzIH0gPSB0aGlzLmQudGV4dEVkaXRvci50ZXh0QmxvY2tMaW5lcztcblxuICAgIHRoaXMuZC50ZXh0RHJhd2VyLnRleHRMaW5lc0FmdGVyUG9pbnQoe1xuICAgICAgbGluZXMsXG4gICAgICBwb3NpdGlvbjogc2hvd25BdCxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0ZXh0RWRpdG9yKCkge1xuICAgIGlmICghdGhpcy5kLnRleHRFZGl0b3Iuc2hvd25BdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3Vyc29yKCk7XG4gICAgdGhpcy50ZXh0KHRoaXMuZC50ZXh0RWRpdG9yLnNob3duQXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi9tYXRoL3JlY3RhbmdsZS9SZWN0YW5nbGUnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3JzL2FkZCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcnMvVmVjdG9yJztcbmltcG9ydCB7IFRleHRCbG9ja0xpbmVzLCBUZXh0T3B0aW9ucyB9IGZyb20gJy4uL3JlbmRlcmluZy90eXBlcyc7XG5pbXBvcnQgeyBpc1BvaW50SW5zaWRlIH0gZnJvbSAnLi8uLi9tYXRoL3JlY3RhbmdsZS9pc1BvaW50SW5zaWRlJztcbmltcG9ydCB7IHN1YnRyYWN0IH0gZnJvbSAnLi8uLi9tYXRoL3ZlY3RvcnMvc3VidHJhY3QnO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVUZXh0QmxvY2tMaW5lc09wdGlvbnMgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgcmVjdGFuZ2xlOiBSZWN0YW5nbGU7XG59ICYgT21pdDxQYXJ0aWFsPFRleHRPcHRpb25zPiwgJ2xpbmVIZWlnaHQnPjtcblxuZXhwb3J0IHR5cGUgVGV4dEN1cnNvckRhdGEgPSB7XG4gIHBvc2l0aW9uOiBWZWN0b3I7XG4gIGhlaWdodDogbnVtYmVyO1xuICBuZXh0Q2hhcmFjdGVySW5kZXhJbkxpbmU6IG51bWJlcjtcbiAgbmV4dENoYXJhY3RlckluZGV4OiBudW1iZXI7XG4gIGxpbmVJbmRleDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lcmdlV2l0aERlZmF1bHRUZXh0T3B0aW9ucyA9ICh7XG4gIGZvbnRGYW1pbHkgPSAnUm9ib3RvJyxcbiAgZm9udFNpemUgPSAxNCxcbiAgbGluZUhlaWdodCA9IDE2LFxuICBwYWRkaW5nID0gNSxcbn06IFBhcnRpYWw8VGV4dE9wdGlvbnM+KTogVGV4dE9wdGlvbnMgPT4gKHtcbiAgZm9udEZhbWlseSxcbiAgZm9udFNpemUsXG4gIGxpbmVIZWlnaHQsXG4gIHBhZGRpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRleHRCbG9ja0xpbmVzID0gKFxuICBjYW52YXNDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gIG9wdGlvbnM6IENyZWF0ZVRleHRCbG9ja0xpbmVzT3B0aW9ucyxcbik6IFRleHRCbG9ja0xpbmVzID0+IHtcbiAgY29uc3QgdGV4dE9wdGlvbnMgPSBtZXJnZVdpdGhEZWZhdWx0VGV4dE9wdGlvbnMob3B0aW9ucyk7XG4gIGNvbnN0IHsgZm9udEZhbWlseSwgZm9udFNpemUsIHBhZGRpbmcsIGxpbmVIZWlnaHQgfSA9IHRleHRPcHRpb25zO1xuICBjb25zdCB7IHRleHQsIHJlY3RhbmdsZSB9ID0gb3B0aW9ucztcblxuICBjYW52YXNDb250ZXh0LmZvbnQgPSBgJHtmb250U2l6ZX1weCAke2ZvbnRGYW1pbHl9YDtcbiAgY2FudmFzQ29udGV4dC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gIGNhbnZhc0NvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG5cbiAgY29uc3Qgd2lkdGhUb0ZpdFRleHQgPSByZWN0YW5nbGUud2lkdGggLSBwYWRkaW5nICogMjtcbiAgY29uc3QgbGluZXM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IG1ldHJpY3M6IFRleHRNZXRyaWNzW10gPSBbXTtcbiAgY29uc3QgY2hhcmFjdGVyQ291bnQgPSB0ZXh0Lmxlbmd0aDtcblxuICBsZXQgYmlnZ2VzdFdpZHRoID0gMDtcbiAgbGV0IGJ1ZmZlciA9ICcnO1xuICBsZXQgbGFzdEJ1ZmZlck1ldHJpY3MgPSBjYW52YXNDb250ZXh0Lm1lYXN1cmVUZXh0KCcnKTtcblxuICAvLyBDcmVhdGUgYW4gZW1wdHkgbGluZSBpZiB0aGUgdGV4dCBpcyBlbXB0eVxuICBpZiAodGV4dCA9PT0gJycpIHtcbiAgICBsaW5lcy5wdXNoKGJ1ZmZlcik7XG4gICAgbWV0cmljcy5wdXNoKGxhc3RCdWZmZXJNZXRyaWNzKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhcmFjdGVyQ291bnQ7IGkrKykge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IHRleHRbaV07XG4gICAgY29uc3QgaXNMYXN0Q2hhcmFjdGVyID0gaSA9PT0gY2hhcmFjdGVyQ291bnQgLSAxO1xuICAgIGNvbnN0IHByZXZpb3VzQnVmZmVyID0gYnVmZmVyO1xuXG4gICAgYnVmZmVyICs9IGNoYXJhY3RlcjtcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09ICdcXG4nKSB7XG4gICAgICAvLyBTdG9yZSBwcmV2aW91cyBsaW5lXG4gICAgICBsaW5lcy5wdXNoKGJ1ZmZlcik7XG4gICAgICBtZXRyaWNzLnB1c2gobGFzdEJ1ZmZlck1ldHJpY3MpO1xuICAgICAgYmlnZ2VzdFdpZHRoID0gTWF0aC5tYXgoYmlnZ2VzdFdpZHRoLCBsYXN0QnVmZmVyTWV0cmljcy53aWR0aCk7XG4gICAgICBidWZmZXIgPSAnJztcbiAgICAgIGxhc3RCdWZmZXJNZXRyaWNzID0gY2FudmFzQ29udGV4dC5tZWFzdXJlVGV4dCgnJyk7XG5cbiAgICAgIC8vIElmIHRoZSBsYXN0IGNoYXJhY3RlciBpcyB0aGUgbmV3IGxpbmUgY2hhcmFjdGVyIGl0IG1lYW5zLFxuICAgICAgLy8gdGhhdCB0aGVyZSB3b24ndCBiZSBpdGVyYXRpb25zIGFueW1vcmUgYW5kIHdlIG5lZWQgdG8gc3RvcmVcbiAgICAgIC8vIHRoZSBsYXN0IGxpbmUgYXMgZW1wdHkuXG4gICAgICBpZiAoaXNMYXN0Q2hhcmFjdGVyKSB7XG4gICAgICAgIGxpbmVzLnB1c2goYnVmZmVyKTtcbiAgICAgICAgbWV0cmljcy5wdXNoKGxhc3RCdWZmZXJNZXRyaWNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYnVmZmVyTWV0cmljcyA9IGNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQoYnVmZmVyKTtcblxuICAgICAgaWYgKGJ1ZmZlck1ldHJpY3Mud2lkdGggPiB3aWR0aFRvRml0VGV4dCkge1xuICAgICAgICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGxpbmVzLnB1c2goYnVmZmVyKTtcbiAgICAgICAgICBtZXRyaWNzLnB1c2goYnVmZmVyTWV0cmljcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGluZXMucHVzaChwcmV2aW91c0J1ZmZlcik7XG4gICAgICAgICAgbWV0cmljcy5wdXNoKGxhc3RCdWZmZXJNZXRyaWNzKTtcbiAgICAgICAgICBpLS07XG4gICAgICAgIH1cblxuICAgICAgICBidWZmZXIgPSAnJztcbiAgICAgICAgYmlnZ2VzdFdpZHRoID0gTWF0aC5tYXgoYmlnZ2VzdFdpZHRoLCBtZXRyaWNzW21ldHJpY3MubGVuZ3RoIC0gMV0ud2lkdGgpO1xuICAgICAgICBsYXN0QnVmZmVyTWV0cmljcyA9IGNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQoJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdEJ1ZmZlck1ldHJpY3MgPSBidWZmZXJNZXRyaWNzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChidWZmZXIpIHtcbiAgICBsaW5lcy5wdXNoKGJ1ZmZlcik7XG4gICAgbWV0cmljcy5wdXNoKGNhbnZhc0NvbnRleHQubWVhc3VyZVRleHQoYnVmZmVyKSk7XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBsaW5lcy5sZW5ndGggKiBsaW5lSGVpZ2h0O1xuICBjb25zdCBoZWlnaHRXaXRoUGFkZGluZ3MgPSBoZWlnaHQgKyBwYWRkaW5nICogMjtcbiAgY29uc3QgZmluYWxSZWN0YW5nbGUgPSByZWN0YW5nbGUuY2xvbmUoKTtcblxuICBmaW5hbFJlY3RhbmdsZS5oZWlnaHQgPSBoZWlnaHRXaXRoUGFkZGluZ3M7XG5cbiAgcmV0dXJuIHtcbiAgICB0ZXh0T3B0aW9ucyxcbiAgICBsaW5lcyxcbiAgICBsaW5lTWV0cmljczogbWV0cmljcyxcbiAgICB0ZXh0QmxvY2tNZXRyaWNzOiB7XG4gICAgICBvcmlnaW5hbFJlY3RhbmdsZTogcmVjdGFuZ2xlLFxuICAgICAgcmVjdGFuZ2xlOiBmaW5hbFJlY3RhbmdsZSxcbiAgICAgIHdpZHRoOiBiaWdnZXN0V2lkdGgsXG4gICAgICB3aWR0aFdpdGhQYWRkaW5nczogYmlnZ2VzdFdpZHRoICsgcGFkZGluZyAqIDIsXG4gICAgICBoZWlnaHQsXG4gICAgICBoZWlnaHRXaXRoUGFkZGluZ3MsXG4gICAgICBsYXN0TGluZVdpZHRoOiBtZXRyaWNzW21ldHJpY3MubGVuZ3RoIC0gMV0/LndpZHRoIHx8IDAsXG4gICAgICBsYXN0TGluZVBvc2l0aW9uOiBhZGQoXG4gICAgICAgIHJlY3RhbmdsZS5jbG9uZSgpLFxuICAgICAgICBuZXcgVmVjdG9yKHtcbiAgICAgICAgICB4OiBwYWRkaW5nLFxuICAgICAgICAgIHk6IHBhZGRpbmcgKyBoZWlnaHQgLSAobGluZXMubGVuZ3RoID8gbGluZUhlaWdodCA6IDApLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUZXh0Q3Vyc29yRGF0YSA9IChcbiAgY2FudmFzQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICB7XG4gICAgdGV4dEJsb2NrTWV0cmljczogeyBsYXN0TGluZVBvc2l0aW9uLCBsYXN0TGluZVdpZHRoLCByZWN0YW5nbGUgfSxcbiAgICB0ZXh0T3B0aW9uczogeyBwYWRkaW5nLCBsaW5lSGVpZ2h0IH0sXG4gICAgbGluZXMsXG4gIH06IFRleHRCbG9ja0xpbmVzLFxuICB0YXBQb3NpdGlvbj86IFZlY3RvcixcbiAgZGVmYXVsdFBvc2l0aW9uPzogVmVjdG9yLFxuKTogVGV4dEN1cnNvckRhdGEgPT4ge1xuICBjb25zdCBUZXh0Q3Vyc29yRGF0YSA9XG4gICAgbmV3IFZlY3RvcihkZWZhdWx0UG9zaXRpb24pIHx8IGFkZChsYXN0TGluZVBvc2l0aW9uLmNsb25lKCksIG5ldyBWZWN0b3IoeyB4OiBsYXN0TGluZVdpZHRoLCB5OiAwIH0pKTtcblxuICBpZiAodGFwUG9zaXRpb24gJiYgaXNQb2ludEluc2lkZSh0YXBQb3NpdGlvbiwgcmVjdGFuZ2xlKSkge1xuICAgIGNvbnN0IHBvc2l0aW9uV2l0aGluUmVjdGFuZ2xlID0gc3VidHJhY3QodGFwUG9zaXRpb24uY2xvbmUoKSwgcmVjdGFuZ2xlKTtcbiAgICBjb25zdCBwb3NpdGlvbldpdGhUZXh0QXJlYSA9IHN1YnRyYWN0KHBvc2l0aW9uV2l0aGluUmVjdGFuZ2xlLmNsb25lKCksIG5ldyBWZWN0b3IoeyB4OiBwYWRkaW5nLCB5OiBwYWRkaW5nIH0pKTtcblxuICAgIGlmIChwb3NpdGlvbldpdGhUZXh0QXJlYS55ID49IDAgJiYgcG9zaXRpb25XaXRoVGV4dEFyZWEueCA+PSAwKSB7XG4gICAgICBjb25zdCBsaW5lSW5kZXggPSBNYXRoLmZsb29yKHBvc2l0aW9uV2l0aFRleHRBcmVhLnkgLyBsaW5lSGVpZ2h0KTtcbiAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tsaW5lSW5kZXhdO1xuICAgICAgbGV0IHhXaXRoaW5UZXh0QXJlYSA9IDA7XG4gICAgICBsZXQgYnVmZmVyID0gJyc7XG4gICAgICBsZXQgY2hhcmFjdGVySW5kZXggPSAwO1xuXG4gICAgICAvLyBUT0RPIHVzZSBiaW5hcnkgc2VhcmNoXG4gICAgICBmb3IgKGNoYXJhY3RlckluZGV4OyBjaGFyYWN0ZXJJbmRleCA8IGxpbmUubGVuZ3RoOyBjaGFyYWN0ZXJJbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IGxpbmVbY2hhcmFjdGVySW5kZXhdO1xuICAgICAgICBjb25zdCBuZXh0Q2hhcmFjdGVyID0gbGluZVtjaGFyYWN0ZXJJbmRleCArIDFdO1xuICAgICAgICBidWZmZXIgKz0gY2hhcmFjdGVyO1xuXG4gICAgICAgIGNvbnN0IG5ld1ggPSBjYW52YXNDb250ZXh0Lm1lYXN1cmVUZXh0KGJ1ZmZlcikud2lkdGg7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlcldpZHRoID0gbmV3WCAtIHhXaXRoaW5UZXh0QXJlYTtcblxuICAgICAgICBpZiAobmV3WCA+IHBvc2l0aW9uV2l0aFRleHRBcmVhLnggfHwgbmV4dENoYXJhY3RlciA9PT0gJ1xcbicpIHtcbiAgICAgICAgICBjb25zdCBob3dGYXJYRnJvbUNsaWNrVG9OZXh0Q2hhcmFjdGVyID0gbmV3WCAtIHBvc2l0aW9uV2l0aFRleHRBcmVhLng7XG5cbiAgICAgICAgICAvLyBDaGVjayB3aGljaCBjaGFyYWN0ZXIgKGxlZnQgb3IgcmlnaHQpIGlzIGNsb3NlciB0byB0aGUgY2xpY2tlZCBwb3NpdGlvbixcbiAgICAgICAgICAvLyBpZiB0aGUgcmlnaHQgb25lLCB0aGVuIHRha2Ugb25lIHN0ZXAgZm9yd2FyZC5cbiAgICAgICAgICBpZiAoaG93RmFyWEZyb21DbGlja1RvTmV4dENoYXJhY3RlciA8IGNoYXJhY3RlcldpZHRoIC8gMikge1xuICAgICAgICAgICAgeFdpdGhpblRleHRBcmVhID0gbmV3WDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhcmFjdGVySW5kZXgtLTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHhXaXRoaW5UZXh0QXJlYSA9IG5ld1g7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5leHRDaGFyYWN0ZXJJbmRleEluTGluZSA9IGxpbmUubGVuZ3RoID8gY2hhcmFjdGVySW5kZXggKyAxIDogMDtcbiAgICAgIGxldCBuZXh0Q2hhcmFjdGVySW5kZXggPSBuZXh0Q2hhcmFjdGVySW5kZXhJbkxpbmU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZUluZGV4OyBpKyspIHtcbiAgICAgICAgbmV4dENoYXJhY3RlckluZGV4ICs9IGxpbmVzW2ldLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3Ioe1xuICAgICAgICAgIHg6IHBhZGRpbmcgKyB4V2l0aGluVGV4dEFyZWEgKyByZWN0YW5nbGUueCxcbiAgICAgICAgICB5OiBwYWRkaW5nICsgbGluZUluZGV4ICogbGluZUhlaWdodCArIHJlY3RhbmdsZS55LFxuICAgICAgICB9KSxcbiAgICAgICAgaGVpZ2h0OiBsaW5lSGVpZ2h0LFxuICAgICAgICBsaW5lSW5kZXgsXG4gICAgICAgIG5leHRDaGFyYWN0ZXJJbmRleEluTGluZTogbGluZS5sZW5ndGggPyBjaGFyYWN0ZXJJbmRleCArIDEgOiAwLFxuICAgICAgICBuZXh0Q2hhcmFjdGVySW5kZXgsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IFRleHRDdXJzb3JEYXRhLFxuICAgIGhlaWdodDogbGluZUhlaWdodCxcbiAgICBsaW5lSW5kZXg6IDAsXG4gICAgbmV4dENoYXJhY3RlckluZGV4SW5MaW5lOiAwLFxuICAgIG5leHRDaGFyYWN0ZXJJbmRleDogMCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBzdWJ0cmFjdCB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9zdWJ0cmFjdCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMvVmVjdG9yJztcbmltcG9ydCB7IGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQgfSBmcm9tICcuL2dldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQnO1xuXG5leHBvcnQgZW51bSBEcmFnTW9kZSB7XG4gIERvd24gPSAnZG93bicsXG4gIERvdWJsZURvd24gPSAnZG91YmxlLWRvd24nLFxufVxuXG5leHBvcnQgdHlwZSBNb3VzZURhdGEgPSB7XG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xuICBwb3NpdGlvbjogVmVjdG9yO1xufTtcblxuZXhwb3J0IHR5cGUgRHJhZ1N0YXJ0RGF0YSA9IE1vdXNlRGF0YSAmIHtcbiAgc3RhcnRlZEF0OiBWZWN0b3I7XG59O1xuXG5leHBvcnQgdHlwZSBEcmFnRGF0YSA9IERyYWdTdGFydERhdGEgJiB7XG4gIHRvdGFsRGVsdGE6IFZlY3RvcjtcbiAgZGVsdGE6IFZlY3Rvcjtcbn07XG5cbmV4cG9ydCBjb25zdCBleHRlbmRlZENsaWNrSGFuZGxlciA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIF9vcHRpb25zOiB7XG4gICAgLy8gSW4gbWlsbGlzZWNvbmRzXG4gICAgZG91YmxlQ2xpY2tUaHJlc2hvbGQ/OiBudW1iZXI7XG4gICAgc2lsZW5jZUNsaWNrQWZ0ZXJEcmFnPzogYm9vbGVhbjtcbiAgICBzaWxlbmNlTW91c2VVcEFmdGVyRHJhZz86IGJvb2xlYW47XG4gICAgc2lsZW5jZU1vdXNlRG93bkFmdGVyRHJhZz86IGJvb2xlYW47XG4gICAgZW5hYmxlRHJhZz86IGJvb2xlYW47XG4gICAgZGVidWc/OiBib29sZWFuO1xuICAgIGRyYWdNb2RlPzogRHJhZ01vZGU7XG4gICAgb25DbGljaz86IChkYXRhOiBNb3VzZURhdGEpID0+IHZvaWQ7XG4gICAgb25Eb3VibGVDbGljaz86IChkYXRhOiBNb3VzZURhdGEpID0+IHZvaWQ7XG4gICAgb25EcmFnU3RhcnQ/OiAoZGF0YTogRHJhZ1N0YXJ0RGF0YSkgPT4gdm9pZDtcbiAgICBvbkRyYWc/OiAoZGF0YTogRHJhZ0RhdGEpID0+IHZvaWQ7XG4gICAgb25EcmFnRW5kPzogKGRhdGE6IERyYWdEYXRhKSA9PiB2b2lkO1xuICAgIG9uTW91c2VEb3duPzogKGRhdGE6IE1vdXNlRGF0YSkgPT4gdm9pZDtcbiAgICBvbkRvdWJsZU1vdXNlRG93bj86IChkYXRhOiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xuICAgIG9uTW91c2VVcD86IChkYXRhOiBEcmFnRGF0YSkgPT4gdm9pZDtcbiAgfSA9IHt9LFxuKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4ue1xuICAgICAgc2lsZW5jZUNsaWNrQWZ0ZXJEcmFnOiBmYWxzZSxcbiAgICAgIHNpbGVuY2VNb3VzZVVwQWZ0ZXJEcmFnOiBmYWxzZSxcbiAgICAgIHNpbGVuY2VNb3VzZURvd25BZnRlckRyYWc6IGZhbHNlLFxuICAgICAgZW5hYmxlRHJhZzogdHJ1ZSxcbiAgICAgIGRyYWdNb2RlOiBEcmFnTW9kZS5Eb3duLFxuICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgZG91YmxlQ2xpY2tUaHJlc2hvbGQ6IDI4MCxcbiAgICB9LFxuICAgIC4uLl9vcHRpb25zLFxuICB9O1xuXG4gIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS5sb2coJ0V4dGVuZGVkIGNsaWNrIGhhbmRsZXIgb3B0aW9uczonLCBvcHRpb25zKTtcbiAgfVxuXG4gIGxldCBsYXN0Q2xpY2tUaW1lID0gMDtcbiAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgbGV0IGlzRG91YmxlQ2xpY2sgPSBmYWxzZTtcbiAgbGV0IGlzTW91c2VEb3duID0gZmFsc2U7XG4gIGxldCBsYXN0TW91c2VEb3duVGltZSA9IDA7XG4gIGxldCBpc0RvdWJsZU1vdXNlRG93biA9IGZhbHNlO1xuICBsZXQgc2hvdWxkU2lsZW5jZUNsaWNrID0gZmFsc2U7XG4gIGxldCBzaG91bGRTaWxlbmNlTW91c2VVcCA9IGZhbHNlO1xuICBsZXQgc2hvdWxkU2lsZW5jZU1vdXNlRG93biA9IGZhbHNlO1xuICBsZXQgbGFzdE1vdXNlRG93bkV2ZW50OiBNb3VzZUV2ZW50IHwgdW5kZWZpbmVkO1xuICBsZXQgbGFzdERyYWdFdmVudDogTW91c2VFdmVudCB8IHVuZGVmaW5lZDtcbiAgbGV0IHNob3VsZENhbGxEcmFnU3RhcnRDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VEb3duVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHRpbWVQYXNzZWQgPSBtb3VzZURvd25UaW1lIC0gbGFzdE1vdXNlRG93blRpbWU7XG5cbiAgICBpc0RvdWJsZU1vdXNlRG93biA9IHRpbWVQYXNzZWQgPCBvcHRpb25zLmRvdWJsZUNsaWNrVGhyZXNob2xkO1xuICAgIGxhc3RNb3VzZURvd25UaW1lID0gbW91c2VEb3duVGltZTtcblxuICAgIGlzTW91c2VEb3duID0gdHJ1ZTtcbiAgICBsYXN0TW91c2VEb3duRXZlbnQgPSBldmVudDtcblxuICAgIHNob3VsZENhbGxEcmFnU3RhcnRDYWxsYmFjayA9IHRydWU7XG5cbiAgICBpZiAoc2hvdWxkU2lsZW5jZU1vdXNlRG93bikge1xuICAgICAgc2hvdWxkU2lsZW5jZU1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0RvdWJsZU1vdXNlRG93bikge1xuICAgICAgaWYgKG9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RvdWJsZSBtb3VzZSBkb3duJywgZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgZWxlbWVudCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5vbkRvdWJsZU1vdXNlRG93bikge1xuICAgICAgICBvcHRpb25zLm9uRG91YmxlTW91c2VEb3duKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ01vdXNlIGRvd24nLCBnZXRQb3NpdGlvbkZyb21Nb3VzZUV2ZW50KGV2ZW50LCBlbGVtZW50KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm9uTW91c2VEb3duKSB7XG4gICAgICAgIG9wdGlvbnMub25Nb3VzZURvd24oe1xuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIHBvc2l0aW9uOiBnZXRQb3NpdGlvbkZyb21Nb3VzZUV2ZW50KGV2ZW50LCBlbGVtZW50KSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBVc2luZyBkb2N1bWVudCBzbyB5b3UgY2FuIGRyYWcgb3V0c2lkZSBvZiB0aGUgY2FudmFzLCB1c2UgZWxlbWVudFxuICAvLyBpZiB5b3UgY2Fubm90IGRyYWcgb3V0c2lkZSBvZiB0aGUgY2FudmFzLlxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgIGlmIChpc01vdXNlRG93bikge1xuICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzRHJhZ2dpbmcgJiYgb3B0aW9ucy5lbmFibGVEcmFnKSB7XG4gICAgICBjb25zdCBzaG91bGREcmFnID1cbiAgICAgICAgKGlzRG91YmxlTW91c2VEb3duICYmIG9wdGlvbnMuZHJhZ01vZGUgPT09IERyYWdNb2RlLkRvdWJsZURvd24pIHx8XG4gICAgICAgICghaXNEb3VibGVNb3VzZURvd24gJiYgb3B0aW9ucy5kcmFnTW9kZSA9PT0gRHJhZ01vZGUuRG93bik7XG5cbiAgICAgIGlmIChzaG91bGREcmFnKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnNpbGVuY2VNb3VzZURvd25BZnRlckRyYWcpIHtcbiAgICAgICAgICBzaG91bGRTaWxlbmNlTW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnNpbGVuY2VNb3VzZVVwQWZ0ZXJEcmFnKSB7XG4gICAgICAgICAgc2hvdWxkU2lsZW5jZU1vdXNlVXAgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2lsZW5jZUNsaWNrQWZ0ZXJEcmFnKSB7XG4gICAgICAgICAgc2hvdWxkU2lsZW5jZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLm9uRHJhZyB8fCBvcHRpb25zLm9uRHJhZ1N0YXJ0IHx8IG9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICBjb25zdCBkcmFnRGF0YSA9IGdldERyYWdEYXRhKGV2ZW50KTtcblxuICAgICAgICAgIGlmICgob3B0aW9ucy5vbkRyYWdTdGFydCB8fCBvcHRpb25zLmRlYnVnKSAmJiBzaG91bGRDYWxsRHJhZ1N0YXJ0Q2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdG90YWxEZWx0YTogX3RvdGFsRGVsdGEsIGRlbHRhOiBfZGVsdGEsIC4uLmRyYWdTdGFydERhdGEgfSA9IGRyYWdEYXRhO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJhZyBzdGFydCcsIGRyYWdTdGFydERhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vbkRyYWdTdGFydCkge1xuICAgICAgICAgICAgICBvcHRpb25zLm9uRHJhZ1N0YXJ0KGRyYWdTdGFydERhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaG91bGRDYWxsRHJhZ1N0YXJ0Q2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXNEb3VibGVNb3VzZURvd24gPyAnRG91YmxlIGNsaWNrIG1vZGUgZHJhZycgOiAnQ2xpY2sgbW9kZSBkcmFnJywgZHJhZ0RhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHRpb25zLm9uRHJhZykge1xuICAgICAgICAgICAgb3B0aW9ucy5vbkRyYWcoZHJhZ0RhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3REcmFnRXZlbnQgPSBldmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdEYXRhID0gZ2V0RHJhZ0RhdGEoZXZlbnQpO1xuXG4gICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEcmFnIGVuZCcsIGRyYWdEYXRhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMub25EcmFnRW5kKSB7XG4gICAgICAgIG9wdGlvbnMub25EcmFnRW5kKGRyYWdEYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgaXNNb3VzZURvd24gPSBmYWxzZTtcblxuICAgIC8vIE11c3QgYmUgc2V0IHRvIGB1bmRlZmluZWRgIG9ubHkgYWZ0ZXIgYGdldERyYWdEYXRhYCBpcyB1c2VkXG4gICAgbGFzdERyYWdFdmVudCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChzaG91bGRTaWxlbmNlTW91c2VVcCkge1xuICAgICAgc2hvdWxkU2lsZW5jZU1vdXNlVXAgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coJ01vdXNlIHVwJywgZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgZWxlbWVudCkpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9uTW91c2VVcCkge1xuICAgICAgLy8gYGRyYWdEYXRhYCBpcyBzdGlsbCBjYW4gYmUgdXNlZnVsIGUuZy4gaW4gY2FzZXNcbiAgICAgIC8vIHdoZW4gd2UgYWx3YXlzIG5lZWQgdG8gaGFuZGxlIGBtb3VzZXVwYCBldmVudCBpbiBvbmUgcGxhY2VcbiAgICAgIC8vIGJ1dCBkaWZmZXJlbnRseSBpZiB0aGVyZSB3YXMgYSBkcmFnIGV2ZW50IG9yIG5vdFxuICAgICAgb3B0aW9ucy5vbk1vdXNlVXAoZHJhZ0RhdGEpO1xuICAgIH1cbiAgfSk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNsaWNrVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHRpbWVQYXNzZWQgPSBjbGlja1RpbWUgLSBsYXN0Q2xpY2tUaW1lO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgZWxlbWVudCk7XG5cbiAgICBpc0RvdWJsZUNsaWNrID0gdGltZVBhc3NlZCA8IG9wdGlvbnMuZG91YmxlQ2xpY2tUaHJlc2hvbGQ7XG4gICAgbGFzdENsaWNrVGltZSA9IGNsaWNrVGltZTtcblxuICAgIGlmIChzaG91bGRTaWxlbmNlQ2xpY2spIHtcbiAgICAgIHNob3VsZFNpbGVuY2VDbGljayA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0RvdWJsZUNsaWNrKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBjb25zb2xlLmxvZygnRG91YmxlIGNsaWNrJywgcG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5vbkRvdWJsZUNsaWNrKSB7XG4gICAgICAgIG9wdGlvbnMub25Eb3VibGVDbGljayh7XG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzRG91YmxlQ2xpY2spIHtcbiAgICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGljaycsIHBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMub25DbGljaykge1xuICAgICAgICBvcHRpb25zLm9uQ2xpY2soe1xuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcignT25seSBzaW11bGF0ZWQgZHJhZyBpcyBzdXBwb3J0ZWQnKTtcbiAgfSk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcignT25seSBzaW11bGF0ZWQgZHJhZyBpcyBzdXBwb3J0ZWQnKTtcbiAgfSk7XG5cbiAgLy8gVGhpcyBpcyByZWR1bmRhbnQgYXMgdGhlcmUgaXMgc2ltdWxhdGVkIGltcGxlbWVudGF0aW9uIG9mIGRvdWJsZSBjbGljayBpbiB0aGlzIGhlbHBlclxuICAvLyBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKCkgPT4gey4uLn0pXG4gIGZ1bmN0aW9uIGdldERyYWdEYXRhKGV2ZW50OiBNb3VzZUV2ZW50KTogRHJhZ0RhdGEge1xuICAgIGlmICghbGFzdE1vdXNlRG93bkV2ZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBldmVudCxcbiAgICAgICAgcG9zaXRpb246IGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQoZXZlbnQsIGVsZW1lbnQpLFxuICAgICAgICBzdGFydGVkQXQ6IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgdG90YWxEZWx0YTogbmV3IFZlY3RvcigpLFxuICAgICAgICBkZWx0YTogbmV3IFZlY3RvcigpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludEZyb21MYXN0TW91c2VEb3duID0gZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChsYXN0TW91c2VEb3duRXZlbnQsIGVsZW1lbnQpO1xuICAgIGNvbnN0IHBvaW50RnJvbUxhc3REcmFnID0gbGFzdERyYWdFdmVudCA/IGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQobGFzdERyYWdFdmVudCwgZWxlbWVudCkgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgY3VycmVudFBvaW50ID0gZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgZWxlbWVudCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQsXG4gICAgICBwb3NpdGlvbjogZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgZWxlbWVudCksXG4gICAgICBzdGFydGVkQXQ6IGN1cnJlbnRQb2ludCxcbiAgICAgIHRvdGFsRGVsdGE6IHN1YnRyYWN0KGN1cnJlbnRQb2ludC5jbG9uZSgpLCBwb2ludEZyb21MYXN0TW91c2VEb3duKSxcbiAgICAgIGRlbHRhOiBzdWJ0cmFjdChjdXJyZW50UG9pbnQuY2xvbmUoKSwgcG9pbnRGcm9tTGFzdERyYWcgfHwgcG9pbnRGcm9tTGFzdE1vdXNlRG93biksXG4gICAgfTtcbiAgfVxufTtcbiIsImltcG9ydCB7IHN1YnRyYWN0IH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzL3N1YnRyYWN0JztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycy9WZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudCA9IChldmVudDogTW91c2VFdmVudCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCB2aWV3cG9ydE1vdXNlUG9zaXRpb24gPSBuZXcgVmVjdG9yKHtcbiAgICB4OiBldmVudC5wYWdlWCxcbiAgICB5OiBldmVudC5wYWdlWSxcbiAgfSk7XG4gIGNvbnN0IGJvdW5kaW5nUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgdG9wTGVmdENvbnRhaW5lclBvc2l0aW9uID0gbmV3IFZlY3Rvcih7XG4gICAgeDogYm91bmRpbmdSZWN0LmxlZnQsXG4gICAgeTogYm91bmRpbmdSZWN0LnRvcCxcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnRyYWN0KHZpZXdwb3J0TW91c2VQb3NpdGlvbiwgdG9wTGVmdENvbnRhaW5lclBvc2l0aW9uKTtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0SWRHZW5lcmF0b3IgPSAoKSA9PiB7XG4gIGxldCBsYXN0SWQgPSAxO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmV0dXJuIGxhc3RJZCsrO1xuICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBpbnNlcnRTdWJTdHJpbmcgPSAodmFsdWU6IHN0cmluZywgaW5zZXJ0QmVmb3JlUG9zaXRpb246IG51bWJlciwgaW5zZXJ0VmFsdWU6IHN0cmluZykgPT5cbiAgdmFsdWUuc3Vic3RyaW5nKDAsIGluc2VydEJlZm9yZVBvc2l0aW9uKSArIGluc2VydFZhbHVlICsgdmFsdWUuc3Vic3RyaW5nKGluc2VydEJlZm9yZVBvc2l0aW9uKTtcbiIsImV4cG9ydCBjb25zdCBpc01hYyA9ICgpID0+IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0udG9VcHBlckNhc2UoKS5pbmRleE9mKCdNQUMnKSA+PSAwO1xuIiwiaW1wb3J0IHsgaXNNYWMgfSBmcm9tICcuL2lzTWFjJztcbmltcG9ydCB7IFB1YlN1YiB9IGZyb20gJy4vcHViU3ViL1B1YlN1Yic7XG5cbnR5cGUgS2V5UHJlc3NDYWxsYmFjayA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZDtcblxuY29uc3QgZ2xvYmFsbHlQcmVzc2VkS2V5cyA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XG4vLyBXZSB1c3VhbGx5IHVzZSBudW1lcmljIGNvZGUgb2YgYSBrZXkgdG8gb3V0bGluZSBhIHBoeXNpY2FsIGtleSB3ZSB3YW50IHRvIHVzZVxuLy8gYnV0IGlmIGl0J3MgYSBjdXN0b20ga2V5LCB0aGVuIGEgYmlnIHRpZXIgaXMgYSB3YXkgdG8gc2VwYXJhdGUgdGhlIGxvZ2ljLlxuY29uc3QgQ1VTVE9NX0tFWV9USUVSX01PRElGSUVSID0gMTAwMDAwMDtcbmxldCBhcmVLZXlib2FyZExpc3RlbmVyc0F0dGFjaGVkID0gZmFsc2U7XG5cbmxpc3RlbktleWJvYXJkKGZhbHNlKTtcblxuLy8gVmFsdWVzIGFyZSBgZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZWAgZm9yIHRoZSBwaHlzaWNhbCBrZXlzIGFuZFxuLy8gYSBudW1iZXIgKyBgQ1VTVE9NX0tFWV9USUVSX01PRElGSUVSYCBmb3IgY3VzdG9tIGtleXMuXG5leHBvcnQgZW51bSBLRVlTIHtcbiAgYmFja3NwYWNlID0gOCxcbiAgdGFiID0gOSxcbiAgY29udHJvbCA9IDE3LFxuICBlc2NhcGUgPSAyNyxcbiAgLy8gT3B0aW9uIG9uIE1hY09TXG4gIGFsdCA9IDE4LFxuICBkZWxldGUgPSA0NixcbiAgLy8gQ29tbWFuZCBvbiBNYWNPU1xuICBtZXRhID0gOTEsXG4gIHNwYWNlID0gMzIsXG4gIHBsdXMgPSAxODcsXG4gIGVudGVyID0gMTMsXG5cbiAgY29udHJvbE9TU3BlY2lmaWMgPSBDVVNUT01fS0VZX1RJRVJfTU9ESUZJRVIgKyAxNyxcbn1cblxuLy8gSWYgYGV2ZW50YCBpcyBub3QgcGFzc2VkIHRoYW4gdGhlIGtleSB3aWxsIGJlIGNoZWNrZWRcbi8vIGFnYWluc3QgZ2xvYmFsbHkgcHJlc3NlZCBrZXlzIChgZ2xvYmFsbHlQcmVzc2VkS2V5c2ApIGF0IHRoZSBtb21lbnQuXG5leHBvcnQgY29uc3QgaXNLZXlQcmVzc2VkID0gKGtleTogS0VZUywgZXZlbnQ/OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gIGxldCBrZXlDb2Rlc1RvQ2hlY2s6IG51bWJlcltdID0gW107XG4gIGxldCBpc1ByZXNzZWQgPSBmYWxzZTtcblxuICBpZiAoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcblxuICAgIGtleUNvZGVzVG9DaGVjay5wdXNoKGtleUNvZGUpO1xuICB9IGVsc2Uge1xuICAgIGtleUNvZGVzVG9DaGVjayA9IEFycmF5LmZyb20oZ2xvYmFsbHlQcmVzc2VkS2V5cy52YWx1ZXMoKSk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleUNvZGVzVG9DaGVjay5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBrZXlDb2RlID0ga2V5Q29kZXNUb0NoZWNrW2ldO1xuXG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgS0VZUy5jb250cm9sT1NTcGVjaWZpYzpcbiAgICAgICAgaXNQcmVzc2VkID0gaXNNYWMoKSA/IGtleUNvZGUgPT09IEtFWVMubWV0YSA6IGtleUNvZGUgPT09IEtFWVMuY29udHJvbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpc1ByZXNzZWQgPSBrZXlDb2RlID09PSBrZXk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChpc1ByZXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGtleURvd25QdWJTdWJzID0gbmV3IE1hcDxLRVlTLCBQdWJTdWI8S2V5Ym9hcmRFdmVudD4+KCk7XG5jb25zdCBrZXlzRG93blB1YlN1YnMgPSBuZXcgTWFwPHN0cmluZywgUHViU3ViPEtleWJvYXJkRXZlbnQ+PigpO1xuY29uc3Qga2V5VXBQdWJTdWJzID0gbmV3IE1hcDxLRVlTLCBQdWJTdWI8S2V5Ym9hcmRFdmVudD4+KCk7XG5jb25zdCBrZXlQcmVzc1B1YlN1YnMgPSBuZXcgTWFwPEtFWVMsIFB1YlN1YjxLZXlib2FyZEV2ZW50Pj4oKTtcblxuZXhwb3J0IGNvbnN0IG9uS2V5RG93biA9IChrZXk6IEtFWVMsIGNhbGxiYWNrOiBLZXlQcmVzc0NhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGtleURvd25QdWJTdWIgPSBrZXlEb3duUHViU3Vicy5nZXQoa2V5KSB8fCBuZXcgUHViU3ViPEtleWJvYXJkRXZlbnQ+KCk7XG5cbiAga2V5RG93blB1YlN1Yi5ldmVudC5zdWJzY3JpYmUoY2FsbGJhY2spO1xuICBrZXlEb3duUHViU3Vicy5zZXQoa2V5LCBrZXlEb3duUHViU3ViKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvbktleXNEb3duID0gKF9rZXlzOiBLRVlTW10sIGNhbGxiYWNrOiBLZXlQcmVzc0NhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGtleXNUb2tlbiA9IFsuLi5fa2V5c10uc29ydCgpLmpvaW4oJy0nKTtcbiAgY29uc3Qga2V5c0Rvd25QdWJTdWIgPSBrZXlzRG93blB1YlN1YnMuZ2V0KGtleXNUb2tlbikgfHwgbmV3IFB1YlN1YjxLZXlib2FyZEV2ZW50PigpO1xuXG4gIGtleXNEb3duUHViU3ViLmV2ZW50LnN1YnNjcmliZShjYWxsYmFjayk7XG4gIGtleXNEb3duUHViU3Vicy5zZXQoa2V5c1Rva2VuLCBrZXlzRG93blB1YlN1Yik7XG59O1xuXG5leHBvcnQgY29uc3Qgb25LZXlVcCA9IChrZXk6IEtFWVMsIGNhbGxiYWNrOiBLZXlQcmVzc0NhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGtleVVwUHViU3ViID0ga2V5VXBQdWJTdWJzLmdldChrZXkpIHx8IG5ldyBQdWJTdWI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICBrZXlVcFB1YlN1Yi5ldmVudC5zdWJzY3JpYmUoY2FsbGJhY2spO1xuICBrZXlVcFB1YlN1YnMuc2V0KGtleSwga2V5VXBQdWJTdWIpO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uS2V5UHJlc3NlZCA9IChrZXk6IEtFWVMsIGNhbGxiYWNrOiBLZXlQcmVzc0NhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGtleVByZXNzUHViU3ViID0ga2V5UHJlc3NQdWJTdWJzLmdldChrZXkpIHx8IG5ldyBQdWJTdWI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICBrZXlQcmVzc1B1YlN1Yi5ldmVudC5zdWJzY3JpYmUoY2FsbGJhY2spO1xuICBrZXlQcmVzc1B1YlN1YnMuc2V0KGtleSwga2V5UHJlc3NQdWJTdWIpO1xufTtcblxuZnVuY3Rpb24gbGlzdGVuS2V5Ym9hcmQoZGVidWcgPSBmYWxzZSkge1xuICBpZiAoYXJlS2V5Ym9hcmRMaXN0ZW5lcnNBdHRhY2hlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFyZUtleWJvYXJkTGlzdGVuZXJzQXR0YWNoZWQgPSB0cnVlO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcblxuICAgIGdsb2JhbGx5UHJlc3NlZEtleXMuc2V0KGtleUNvZGUsIGtleUNvZGUpO1xuXG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZygnS2V5IGRvd24nLCBrZXlDb2RlLCBnZXRLZXlOYW1lKGtleUNvZGUpLCBnbG9iYWxseVByZXNzZWRLZXlzKTtcbiAgICB9XG5cbiAgICBrZXlEb3duUHViU3Vicy5nZXQoa2V5Q29kZSk/LnB1Ymxpc2goZXZlbnQpO1xuXG4gICAgZm9yIChjb25zdCBbdG9rZW4sIHB1YlN1Yl0gb2Yga2V5c0Rvd25QdWJTdWJzKSB7XG4gICAgICBjb25zdCBrZXlzID0gdG9rZW4uc3BsaXQoJy0nKTtcbiAgICAgIGxldCBzaG91bGRGaXJlID0gdHJ1ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBwYXJzZUludChrZXlzW2ldLCAxMCk7XG5cbiAgICAgICAgaWYgKCFnbG9iYWxseVByZXNzZWRLZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgc2hvdWxkRmlyZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGRGaXJlKSB7XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XG5cbiAgICBnbG9iYWxseVByZXNzZWRLZXlzLmRlbGV0ZShrZXlDb2RlKTtcblxuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coJ0tleSB1cCcsIGtleUNvZGUsIGdldEtleU5hbWUoa2V5Q29kZSksIGdsb2JhbGx5UHJlc3NlZEtleXMpO1xuICAgIH1cblxuICAgIGtleVVwUHViU3Vicy5nZXQoa2V5Q29kZSk/LnB1Ymxpc2goZXZlbnQpO1xuICAgIGtleVByZXNzUHViU3Vicy5nZXQoa2V5Q29kZSk/LnB1Ymxpc2goZXZlbnQpO1xuICB9KTtcblxuICAvLyBPbmx5IGZvciBkZWJ1ZyBwdXJwb3Nlc1xuICBmdW5jdGlvbiBnZXRLZXlOYW1lKGtleUNvZGU6IHVua25vd24pIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoS0VZUykuZmluZCgoW2VudW1LZXlDb2RlXSkgPT4gcGFyc2VJbnQoZW51bUtleUNvZGUsIDEwKSA9PT0ga2V5Q29kZSk/LlsxXTtcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBQdWJTdWJFdmVudDxUPiB7XG4gIHN1YnNjcmliZShzdWJzY3JpYmVyOiAoZGF0YTogVCkgPT4gdm9pZCk6IHZvaWQ7XG4gIHVuc3Vic2NyaWJlKHN1YnNjcmliZXI6IChkYXRhOiBUKSA9PiB2b2lkKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFB1YlN1YjxUPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcnMgPSBuZXcgU2V0PChkYXRhOiBUKSA9PiB2b2lkPigpO1xuXG4gIHB1YmxpYyByZWFkb25seSBldmVudDogUHViU3ViRXZlbnQ8VD4gPSB7XG4gICAgc3Vic2NyaWJlOiAoc3Vic2NyaWJlcjogKGRhdGE6IFQpID0+IHZvaWQpID0+IHRoaXMuc3Vic2NyaWJlKHN1YnNjcmliZXIpLFxuICAgIHVuc3Vic2NyaWJlOiAoc3Vic2NyaWJlcjogKGRhdGE6IFQpID0+IHZvaWQpID0+IHRoaXMudW5zdWJzY3JpYmUoc3Vic2NyaWJlciksXG4gIH07XG5cbiAgcHVibGljIHB1Ymxpc2goZGF0YTogVCkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaCgoc3Vic2NyaWJlcikgPT4gc3Vic2NyaWJlcihkYXRhKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN1YnNjcmliZXJDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmVycy5zaXplO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmUoc3Vic2NyaWJlcjogKGRhdGE6IFQpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpYmVycy5oYXMoc3Vic2NyaWJlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUHJvdmlkZWQgc3Vic2NyaWJlciBpcyBhbHJlYWR5IHN1YnNjcmliZWQnKTtcbiAgICB9XG5cbiAgICB0aGlzLnN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUoc3Vic2NyaWJlcjogKGRhdGE6IFQpID0+IHZvaWQpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IGJvb3QgfSBmcm9tICcuL2JvYXJkL2Jvb3QnO1xuXG5jb25zdCBodG1sRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSBhcyBIVE1MSHRtbEVsZW1lbnQ7XG5jb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBIVE1MQm9keUVsZW1lbnQ7XG5cbmNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuY29udGFpbmVyRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG5jb25zdCBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5jb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuY29uc3QgcmVzZXRTdHlsZXMgPSAoZWxlbWVudDogRWxlbWVudENTU0lubGluZVN0eWxlKSA9PiB7XG4gIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICBlbGVtZW50LnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzAnO1xufTtcblxucmVzZXRTdHlsZXMoaHRtbEVsZW1lbnQpO1xucmVzZXRTdHlsZXMoYm9keUVsZW1lbnQpO1xucmVzZXRTdHlsZXMoY29udGFpbmVyRWxlbWVudCk7XG5yZXNldFN0eWxlcyhjYW52YXNFbGVtZW50KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXJFbGVtZW50KTtcbmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzRWxlbWVudCk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmJvb3QoY2FudmFzQ29udGV4dCwgY29udGFpbmVyRWxlbWVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=