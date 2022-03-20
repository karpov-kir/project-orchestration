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
var components_1 = __webpack_require__(/*! ../components */ "./src/components/index.ts");
var rendering_1 = __webpack_require__(/*! ../rendering */ "./src/rendering/index.ts");
var components_2 = __webpack_require__(/*! ./components */ "./src/board/components/index.ts");
var controllers_1 = __webpack_require__(/*! ./controllers */ "./src/board/controllers/index.ts");
var rendering_2 = __webpack_require__(/*! ./rendering */ "./src/board/rendering/index.ts");
var stores_1 = __webpack_require__(/*! ./stores */ "./src/board/stores/index.ts");
var boot = function (canvasContext, containerElement) {
    canvasContext.canvas.draggable = false;
    // Stores
    var boardViewportStore = new stores_1.BoardViewportStore();
    var boardBoxesStore = new stores_1.BoardBoxesStore();
    // Global components
    var cursor = new components_1.Cursor(containerElement);
    var selection = new components_1.Selection(cursor);
    var textEditor = new components_1.TextEditor(containerElement);
    // Board components
    var boardCursor = new components_2.BoardCursor({
        cursor: cursor,
        getBoxByPosition: function (position, zoomLevel) { return boardBoxesStore.getBoxByPosition(position, zoomLevel); },
        boardViewportStore: boardViewportStore,
    });
    var boardSelection = new components_2.BoardSelection({ selection: selection, getOffset: function () { return boardViewportStore.offset; } });
    var boardTextEditor = new components_2.BoardTextEditor({ textEditor: textEditor });
    // Rendering
    var renderer = new rendering_1.Renderer();
    var drawer = new rendering_1.Drawer(canvasContext);
    // Must go before box drawer
    var boardDrawer = new rendering_2.BoardDrawer({
        drawer: drawer,
        boardViewportStore: boardViewportStore,
    });
    var boardBoxesDrawer = new rendering_2.BoardBoxesDrawer({
        drawer: drawer,
        boardBoxesStore: boardBoxesStore,
        boardViewportStore: boardViewportStore,
    });
    var debugDrawer = new rendering_2.DebugDrawer({
        drawer: drawer,
        boardViewportStore: boardViewportStore,
    });
    // Controllers
    new controllers_1.BoardBoxesController({
        getSelectedBoxes: function () { return boardBoxesStore.selectedBoxes; },
        deleteBox: function (box) { return boardBoxesStore.delete(box); },
        boardTextEditor: boardTextEditor,
    });
    new controllers_1.BoardViewportController({ boardViewportStore: boardViewportStore, boardCursor: boardCursor });
    new controllers_1.BoardCursorController({
        boardBoxesStore: boardBoxesStore,
        boardCursor: boardCursor,
        boardTextEditor: boardTextEditor,
        boardSelection: boardSelection,
        getZoomLevel: function () { return boardViewportStore.zoomLevel; },
    });
    new controllers_1.BoardSelectionController({
        boardSelection: boardSelection,
        boardBoxesStore: boardBoxesStore,
        boardCursor: boardCursor,
        boardViewportStore: boardViewportStore,
    });
    new controllers_1.BoardRenderController({
        boardBoxesDrawer: boardBoxesDrawer,
        boardDrawer: boardDrawer,
        debugDrawer: debugDrawer,
        renderer: renderer,
    });
    window.bvs = boardViewportStore;
    window.bbs = boardBoxesStore;
    window.c = cursor;
    window.bc = boardCursor;
};
exports.boot = boot;


/***/ }),

/***/ "./src/board/components/boardCursor/BoardCursor.ts":
/*!*********************************************************!*\
  !*** ./src/board/components/boardCursor/BoardCursor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardCursor = void 0;
var BoardCursor = /** @class */ (function () {
    function BoardCursor(d) {
        var _this = this;
        this.d = d;
        this._position = this.d.cursor.position.clone();
        this.d.cursor.onMove(function () { return _this.syncCursorWithStore(); });
        this.d.cursor.onDragStart(function () { return _this.handleDragStart(); });
        // Share to drawers. It's updated automatically.
        this.d.boardViewportStore.cursorPosition = this.position;
        this.d.boardViewportStore.absoluteCursorPosition = this.absolutePosition;
    }
    Object.defineProperty(BoardCursor.prototype, "position", {
        get: function () {
            this._position.updateFrom(this.absolutePosition.clone().substract(this.d.boardViewportStore.offset));
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardCursor.prototype, "absolutePosition", {
        get: function () {
            return this.d.cursor.position;
        },
        enumerable: false,
        configurable: true
    });
    BoardCursor.prototype.onMove = function (callback) {
        this.d.cursor.onMove(callback);
    };
    BoardCursor.prototype.onDown = function (callback) {
        this.d.cursor.onDown(callback);
    };
    BoardCursor.prototype.onTap = function (callback) {
        this.d.cursor.onTap(callback);
    };
    BoardCursor.prototype.onDoubleTap = function (callback) {
        this.d.cursor.onDoubleTap(callback);
    };
    BoardCursor.prototype.onDragStart = function (callback) {
        this.d.cursor.onDragStart(callback);
    };
    BoardCursor.prototype.onDrag = function (callback) {
        this.d.cursor.onDrag(callback);
    };
    BoardCursor.prototype.onUp = function (callback) {
        this.d.cursor.onUp(callback);
    };
    BoardCursor.prototype.onScroll = function (callback) {
        this.d.cursor.onScroll(callback);
    };
    BoardCursor.prototype.syncCursorWithStore = function () {
        this.previousCursorOverBox = this.cursorOverBox;
        this.cursorOverBox = this.d.getBoxByPosition(this.position, this.d.boardViewportStore.zoomLevel);
    };
    BoardCursor.prototype.handleDragStart = function () {
        if (!this.cursorOverBox) {
            return;
        }
    };
    return BoardCursor;
}());
exports.BoardCursor = BoardCursor;


/***/ }),

/***/ "./src/board/components/boardCursor/BoardCursorInterface.ts":
/*!******************************************************************!*\
  !*** ./src/board/components/boardCursor/BoardCursorInterface.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/board/components/boardCursor/index.ts":
/*!***************************************************!*\
  !*** ./src/board/components/boardCursor/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BoardCursor */ "./src/board/components/boardCursor/BoardCursor.ts"), exports);
__exportStar(__webpack_require__(/*! ./BoardCursorInterface */ "./src/board/components/boardCursor/BoardCursorInterface.ts"), exports);


/***/ }),

/***/ "./src/board/components/boardSelection/BoardSelection.ts":
/*!***************************************************************!*\
  !*** ./src/board/components/boardSelection/BoardSelection.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardSelection = void 0;
var rectangle_1 = __webpack_require__(/*! ../../../math/rectangle */ "./src/math/rectangle/index.ts");
var BoardSelection = /** @class */ (function () {
    function BoardSelection(d) {
        this.d = d;
    }
    Object.defineProperty(BoardSelection.prototype, "selectedArea", {
        get: function () {
            return this.d.selection.selectedArea
                ? new rectangle_1.Rectangle(this.d.selection.selectedArea.start.clone().substract(this.d.getOffset()), this.d.selection.selectedArea.end.clone().substract(this.d.getOffset()))
                : undefined;
        },
        enumerable: false,
        configurable: true
    });
    BoardSelection.prototype.onSelect = function (callback) {
        this.d.selection.onSelect(callback);
    };
    BoardSelection.prototype.onSelectEnd = function (callback) {
        this.d.selection.onSelectEnd(callback);
    };
    return BoardSelection;
}());
exports.BoardSelection = BoardSelection;


/***/ }),

/***/ "./src/board/components/boardSelection/BoardSelectionInterface.ts":
/*!************************************************************************!*\
  !*** ./src/board/components/boardSelection/BoardSelectionInterface.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/board/components/boardSelection/index.ts":
/*!******************************************************!*\
  !*** ./src/board/components/boardSelection/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BoardSelection */ "./src/board/components/boardSelection/BoardSelection.ts"), exports);
__exportStar(__webpack_require__(/*! ./BoardSelectionInterface */ "./src/board/components/boardSelection/BoardSelectionInterface.ts"), exports);


/***/ }),

/***/ "./src/board/components/boardTextEditor/BoardTextEditor.ts":
/*!*****************************************************************!*\
  !*** ./src/board/components/boardTextEditor/BoardTextEditor.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardTextEditor = void 0;
var BoardTextEditor = /** @class */ (function () {
    function BoardTextEditor(d) {
        var _this = this;
        this.d = d;
        this.d.textEditor.onInput(function (event) { return _this.handleInput(event); });
    }
    BoardTextEditor.prototype.showAt = function (box) {
        this.showForBox = box;
        this.d.textEditor.width = box.width;
        this.d.textEditor.height = box.height;
        this.d.textEditor.showAt(box.position);
        this.d.textEditor.content = box.content;
    };
    BoardTextEditor.prototype.hide = function () {
        this.showForBox = undefined;
        this.d.textEditor.hide();
    };
    BoardTextEditor.prototype.onHeightChange = function (callback) {
        this.d.textEditor.onHeightChange(callback);
    };
    BoardTextEditor.prototype.handleInput = function (event) {
        if (!this.showForBox) {
            return;
        }
        return (this.showForBox.content = event.target.value);
    };
    return BoardTextEditor;
}());
exports.BoardTextEditor = BoardTextEditor;


/***/ }),

/***/ "./src/board/components/boardTextEditor/BoardTextEditorInterface.ts":
/*!**************************************************************************!*\
  !*** ./src/board/components/boardTextEditor/BoardTextEditorInterface.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/board/components/boardTextEditor/index.ts":
/*!*******************************************************!*\
  !*** ./src/board/components/boardTextEditor/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BoardTextEditor */ "./src/board/components/boardTextEditor/BoardTextEditor.ts"), exports);
__exportStar(__webpack_require__(/*! ./BoardTextEditorInterface */ "./src/board/components/boardTextEditor/BoardTextEditorInterface.ts"), exports);


/***/ }),

/***/ "./src/board/components/index.ts":
/*!***************************************!*\
  !*** ./src/board/components/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./boardCursor */ "./src/board/components/boardCursor/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./boardSelection */ "./src/board/components/boardSelection/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./boardTextEditor */ "./src/board/components/boardTextEditor/index.ts"), exports);


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
var keyboard_1 = __webpack_require__(/*! ../../utils/keyboard */ "./src/utils/keyboard/index.ts");
var BoardBoxesController = /** @class */ (function () {
    function BoardBoxesController(d) {
        var _this = this;
        this.d = d;
        this.d.boardTextEditor.onHeightChange(function (event, data) { return _this.handleHeightChange(data); });
        (0, keyboard_1.onKeyPressed)(keyboard_1.KEYS.delete, function () { return _this.handleDeletePressed(); });
    }
    BoardBoxesController.prototype.handleHeightChange = function (_a) {
        var delta = _a.delta;
        if (this.d.boardTextEditor.showForBox) {
            this.d.boardTextEditor.showForBox.height += delta;
        }
    };
    BoardBoxesController.prototype.handleDeletePressed = function () {
        var e_1, _a;
        this.d.boardTextEditor.hide();
        try {
            for (var _b = __values(this.d.getSelectedBoxes()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), box = _d[1];
                this.d.deleteBox(box);
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
exports.BoardCursorController = void 0;
var entities_1 = __webpack_require__(/*! ../../entities */ "./src/entities/index.ts");
var vectors_1 = __webpack_require__(/*! ../../math/vectors */ "./src/math/vectors/index.ts");
var BoardCursorController = /** @class */ (function () {
    function BoardCursorController(d) {
        var _this = this;
        this.d = d;
        this.d.boardCursor.onMove(function () { return _this.handleCursorMove(); });
        this.d.boardCursor.onDown(function () { return _this.handleDown(); });
        this.d.boardCursor.onTap(function () { return _this.handleTap(); });
        this.d.boardCursor.onDoubleTap(function () { return _this.handleDoubleTap(); });
        this.d.boardCursor.onDragStart(function () { return _this.handleDragStart(); });
        this.d.boardCursor.onDrag(function (event, position, data) { return _this.handleDrag(data); });
        this.d.boardCursor.onUp(function (event, position, data) { return _this.handleUp(data); });
    }
    BoardCursorController.prototype.handleCursorMove = function () {
        // We need to handle moving the cursor only to highlight boxes
        // if the user is not dragging a box already.
        if (this.d.boardBoxesStore.draggingBox || this.d.boardSelection.selectedArea) {
            return;
        }
        if (this.d.boardCursor.previousCursorOverBox &&
            this.d.boardCursor.cursorOverBox !== this.d.boardCursor.previousCursorOverBox) {
            this.d.boardBoxesStore.highlightedBoxes.delete(this.d.boardCursor.previousCursorOverBox.id);
        }
        if (this.d.boardCursor.cursorOverBox) {
            this.d.boardBoxesStore.highlightedBoxes.set(this.d.boardCursor.cursorOverBox.id, this.d.boardCursor.cursorOverBox);
        }
    };
    BoardCursorController.prototype.handleDown = function () {
        if (this.d.boardCursor.cursorOverBox) {
            if (this.d.boardBoxesStore.selectedBoxes.size === 1) {
                this.d.boardBoxesStore.selectedBoxes.clear();
            }
            this.d.boardBoxesStore.selectedBoxes.set(this.d.boardCursor.cursorOverBox.id, this.d.boardCursor.cursorOverBox);
        }
        else {
            this.d.boardBoxesStore.selectedBoxes.clear();
        }
    };
    BoardCursorController.prototype.handleTap = function () {
        if (this.d.boardCursor.cursorOverBox) {
            this.d.boardTextEditor.showAt(this.d.boardCursor.cursorOverBox);
        }
        else {
            this.d.boardTextEditor.hide();
        }
    };
    BoardCursorController.prototype.handleDoubleTap = function () {
        if (this.d.boardCursor.cursorOverBox) {
            return;
        }
        var newBox = new entities_1.Box();
        newBox.position = new vectors_1.Vector({
            x: this.d.boardCursor.position.x - (newBox.width * this.d.getZoomLevel()) / 2,
            y: this.d.boardCursor.position.y - (newBox.height * this.d.getZoomLevel()) / 2,
        }).devide(new vectors_1.Vector({
            x: this.d.getZoomLevel(),
            y: this.d.getZoomLevel(),
        }));
        this.d.boardBoxesStore.add(newBox);
        this.d.boardBoxesStore.highlightedBoxes.set(newBox.id, newBox);
        this.d.boardBoxesStore.selectedBoxes.set(newBox.id, newBox);
        this.d.boardTextEditor.showAt(newBox);
        this.d.boardCursor.cursorOverBox = newBox;
    };
    BoardCursorController.prototype.handleDragStart = function () {
        if (!this.d.boardCursor.cursorOverBox) {
            return;
        }
        this.d.boardBoxesStore.draggingBox = this.d.boardCursor.cursorOverBox;
        this.d.boardTextEditor.hide();
    };
    BoardCursorController.prototype.handleDrag = function (_a) {
        var e_1, _b, e_2, _c;
        var delta = _a.delta;
        if (!this.d.boardBoxesStore.draggingBox) {
            return;
        }
        var draggingBoxRectangle = this.d.boardBoxesStore.draggingBox.toRectangle();
        try {
            // TODO group boxes to clusters to iterate less (improve performance).
            // TODO optimise via `draggingBoxOverBoxes`.
            for (var _d = __values(this.d.boardBoxesStore.prioritizedBoxes), _e = _d.next(); !_e.done; _e = _d.next()) {
                var box = _e.value;
                if (box === this.d.boardBoxesStore.draggingBox) {
                    continue;
                }
                var isAlreadyHovered = this.d.boardBoxesStore.draggingBoxOverBoxes.has(box.id);
                var hasIntersection = draggingBoxRectangle.intersects(box.toRectangle());
                if (hasIntersection && !isAlreadyHovered) {
                    this.d.boardBoxesStore.draggingBoxOverBoxes.set(box.id, box);
                    this.d.boardBoxesStore.highlightedBoxes.set(box.id, box);
                }
                else if (!hasIntersection && isAlreadyHovered) {
                    this.d.boardBoxesStore.draggingBoxOverBoxes.delete(box.id);
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
        var zoomedDelta = delta.devide(new vectors_1.Vector({
            x: this.d.getZoomLevel(),
            y: this.d.getZoomLevel(),
        }));
        try {
            for (var _f = __values(this.d.boardBoxesStore.selectedBoxes), _g = _f.next(); !_g.done; _g = _f.next()) {
                var _h = __read(_g.value, 2), box = _h[1];
                box.position.add(zoomedDelta);
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
    BoardCursorController.prototype.handleUp = function (_a) {
        var e_3, _b, e_4, _c;
        var totalDelta = _a.totalDelta;
        if (!this.d.boardBoxesStore.draggingBox) {
            if (this.d.boardCursor.cursorOverBox) {
                this.d.boardBoxesStore.selectedBoxes.clear();
                this.d.boardBoxesStore.selectedBoxes.set(this.d.boardCursor.cursorOverBox.id, this.d.boardCursor.cursorOverBox);
            }
            return;
        }
        try {
            for (var _d = __values(this.d.boardBoxesStore.draggingBoxOverBoxes), _e = _d.next(); !_e.done; _e = _d.next()) {
                var _f = __read(_e.value, 1), id = _f[0];
                this.d.boardBoxesStore.highlightedBoxes.delete(id);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (this.d.boardBoxesStore.draggingBoxOverBoxes.size > 0) {
            try {
                for (var _g = __values(this.d.boardBoxesStore.selectedBoxes), _h = _g.next(); !_h.done; _h = _g.next()) {
                    var _j = __read(_h.value, 2), box = _j[1];
                    box.position.substract(totalDelta);
                    this.d.boardBoxesStore.connectBox(box, this.d.boardBoxesStore.draggingBoxOverBoxes);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        this.d.boardBoxesStore.draggingBoxOverBoxes.clear();
        this.d.boardBoxesStore.draggingBox = undefined;
    };
    return BoardCursorController;
}());
exports.BoardCursorController = BoardCursorController;


/***/ }),

/***/ "./src/board/controllers/BoardRenderController.ts":
/*!********************************************************!*\
  !*** ./src/board/controllers/BoardRenderController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardRenderController = void 0;
var BoardRenderController = /** @class */ (function () {
    function BoardRenderController(d) {
        var _this = this;
        this.d = d;
        this.d.renderer.onAnimate(function () { return _this.handleAnimate(); });
    }
    // TODO optimise rendering
    BoardRenderController.prototype.handleAnimate = function () {
        var _this = this;
        // Sync some global settings
        this.d.boardDrawer.cursor();
        this.d.boardDrawer.dimensions();
        // 1st layer
        this.d.boardDrawer.clearBoard();
        this.d.debugDrawer.colorBoard();
        // 2nd layer
        this.d.boardBoxesDrawer.relations();
        // 3rd layer
        this.d.boardBoxesDrawer.boxes({
            onAfterBoxDrawn: function (box) { return _this.d.debugDrawer.rectangleCoordinates(box); },
        });
        // 4th layer
        this.d.boardBoxesDrawer.selectedArea();
        this.d.debugDrawer.selectedAreaCoordinates();
        // 5th layer
        this.d.debugDrawer.centerGuides();
        // 5th layer
        this.d.debugDrawer.cursorCoordinates();
    };
    return BoardRenderController;
}());
exports.BoardRenderController = BoardRenderController;


/***/ }),

/***/ "./src/board/controllers/BoardSelectionController.ts":
/*!***********************************************************!*\
  !*** ./src/board/controllers/BoardSelectionController.ts ***!
  \***********************************************************/
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
exports.BoardSelectionController = void 0;
var vectors_1 = __webpack_require__(/*! ../../math/vectors */ "./src/math/vectors/index.ts");
var BoardSelectionController = /** @class */ (function () {
    function BoardSelectionController(d) {
        var _this = this;
        this.d = d;
        this.d.boardSelection.onSelect(function () { return _this.handleSelect(); });
        this.d.boardSelection.onSelectEnd(function () { return _this.handleSelectEnd(); });
    }
    BoardSelectionController.prototype.handleSelect = function () {
        var e_1, _a;
        if (this.d.boardCursor.cursorOverBox || this.d.boardViewportStore.isMovingViewPort) {
            return;
        }
        this.d.boardViewportStore.selectedArea = this.d.boardSelection.selectedArea;
        try {
            for (var _b = __values(this.d.boardBoxesStore.prioritizedBoxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var box = _c.value;
                var zoomedBox = box.toRectangle().multiply(new vectors_1.Vector({
                    x: this.d.boardViewportStore.zoomLevel,
                    y: this.d.boardViewportStore.zoomLevel,
                }));
                if (this.d.boardSelection.selectedArea.intersects(zoomedBox)) {
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
    BoardSelectionController.prototype.handleSelectEnd = function () {
        this.d.boardViewportStore.selectedArea = undefined;
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
var vectors_1 = __webpack_require__(/*! ../../math/vectors */ "./src/math/vectors/index.ts");
var rendering_1 = __webpack_require__(/*! ../../rendering */ "./src/rendering/index.ts");
var keyboard_1 = __webpack_require__(/*! ../../utils/keyboard */ "./src/utils/keyboard/index.ts");
var BoardViewportController = /** @class */ (function () {
    function BoardViewportController(d) {
        var _this = this;
        this.d = d;
        this.d.boardCursor.onScroll(function (event, position, data) { return _this.handleScroll(data); });
        this.d.boardCursor.onDrag(function (event, position, data) { return _this.handleDrag(data); });
        (0, keyboard_1.onKeyDown)(keyboard_1.KEYS.space, function () { return _this.handleSpaceDown(); });
        (0, keyboard_1.onKeyUp)(keyboard_1.KEYS.space, function () { return _this.handleSpaceUp(); });
        (0, keyboard_1.onKeysDown)([keyboard_1.KEYS.alt, keyboard_1.KEYS.plus], function () { return _this.zoom(1); });
        window.addEventListener('resize', function () { return _this.handleResize(); });
        this.handleResize();
    }
    BoardViewportController.prototype.zoom = function (
    // -1 - zoom out, 1 - zoom in
    zoomDirection) {
        var maxZoomLevel = 100;
        var minZoomLevel = 0.3;
        var _a = this.d, boardViewportStore = _a.boardViewportStore, boardCursor = _a.boardCursor, _b = _a.boardViewportStore, zoomLevel = _b.zoomLevel, cursorPosition = _b.cursorPosition, offset = _b.offset, absoluteCursorPosition = _b.absoluteCursorPosition;
        // From 0 (0%) to 1 (100%) or more
        var zoomIntensity = 0.05;
        var zoomRelativeDifference = zoomDirection * zoomIntensity;
        var newZoomLevel = zoomLevel + zoomRelativeDifference;
        if (newZoomLevel < minZoomLevel) {
            newZoomLevel = minZoomLevel;
        }
        else if (newZoomLevel > maxZoomLevel) {
            newZoomLevel = maxZoomLevel;
        }
        if (zoomLevel === newZoomLevel) {
            return;
        }
        // 0 - 0%, 1 - 100% (x2), so 0.05 - 5%
        var zoomChange = newZoomLevel - zoomLevel;
        var adjustOffsetVector = absoluteCursorPosition.clone().multiply(new vectors_1.Vector({
            x: zoomChange,
            y: zoomChange,
        }));
        boardViewportStore.zoomLevel = newZoomLevel;
        offset.substract(adjustOffsetVector);
        boardCursor.syncCursorWithStore();
    };
    BoardViewportController.prototype.handleScroll = function (_a) {
        var delta = _a.delta;
        var zoomDirection = -1 * Math.sign(delta.y);
        this.zoom(zoomDirection);
    };
    BoardViewportController.prototype.handleSpaceDown = function () {
        if (this.d.boardCursor.cursorOverBox) {
            return;
        }
        this.d.boardViewportStore.isMovingViewPort = true;
        this.d.boardViewportStore.cursorType = rendering_1.CursorType.Grab;
    };
    BoardViewportController.prototype.handleDrag = function (_a) {
        var delta = _a.delta;
        if (!this.d.boardViewportStore.isMovingViewPort) {
            return;
        }
        this.d.boardViewportStore.offset.add(delta);
    };
    BoardViewportController.prototype.handleSpaceUp = function () {
        if (!this.d.boardViewportStore.isMovingViewPort) {
            return;
        }
        this.d.boardViewportStore.isMovingViewPort = false;
        this.d.boardViewportStore.cursorType = rendering_1.CursorType.Default;
    };
    BoardViewportController.prototype.handleResize = function () {
        this.d.boardViewportStore.width = window.innerWidth;
        this.d.boardViewportStore.height = window.innerHeight;
    };
    return BoardViewportController;
}());
exports.BoardViewportController = BoardViewportController;


/***/ }),

/***/ "./src/board/controllers/index.ts":
/*!****************************************!*\
  !*** ./src/board/controllers/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BoardBoxesController */ "./src/board/controllers/BoardBoxesController.ts"), exports);
__exportStar(__webpack_require__(/*! ./BoardViewportController */ "./src/board/controllers/BoardViewportController.ts"), exports);
__exportStar(__webpack_require__(/*! ./BoardCursorController */ "./src/board/controllers/BoardCursorController.ts"), exports);
__exportStar(__webpack_require__(/*! ./BoardRenderController */ "./src/board/controllers/BoardRenderController.ts"), exports);
__exportStar(__webpack_require__(/*! ./BoardSelectionController */ "./src/board/controllers/BoardSelectionController.ts"), exports);


/***/ }),

/***/ "./src/board/index.ts":
/*!****************************!*\
  !*** ./src/board/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./boot */ "./src/board/boot.ts"), exports);


/***/ }),

/***/ "./src/board/rendering/boardBoxesDrawer/BoardBoxesDrawer.ts":
/*!******************************************************************!*\
  !*** ./src/board/rendering/boardBoxesDrawer/BoardBoxesDrawer.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {


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
var BoardBoxesDrawer = /** @class */ (function () {
    function BoardBoxesDrawer(d) {
        var _this = this;
        this.afterBoxDrawnCallbacks = [];
        this.boxContentLinesCache = new Map();
        this.d = d;
        // TODO find a better way
        this.d.boardBoxesStore.onDelete(function (box) { return _this.handleDelete(box); });
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
    BoardBoxesDrawer.prototype.boxes = function (options) {
        for (var i = 0, l = this.d.boardBoxesStore.prioritizedBoxes.length; i < l; i++) {
            var box = this.d.boardBoxesStore.prioritizedBoxes[i];
            this.box(box, options);
        }
    };
    BoardBoxesDrawer.prototype.selectedArea = function () {
        if (this.d.boardViewportStore.selectedArea) {
            this.d.drawer.rectangle({
                rectangle: this.d.boardViewportStore.selectedArea,
                strokeStyle: 'rgb(22 22 22 / 40%)',
                fillStyle: 'rgb(101 141 255 / 40%)',
                offset: this.d.boardViewportStore.offset,
            });
        }
    };
    BoardBoxesDrawer.prototype.box = function (box, _a) {
        var onAfterBoxDrawn = _a.onAfterBoxDrawn;
        var isSelected = this.d.boardBoxesStore.selectedBoxes.has(box.id);
        var isHighlighted = this.d.boardBoxesStore.highlightedBoxes.has(box.id);
        this.d.drawer.rectangle({
            strokeStyle: isSelected ? 'blue' : 'transparent',
            fillStyle: isHighlighted ? 'red' : 'skyblue',
            rectangle: box,
            zoomLevel: this.d.boardViewportStore.zoomLevel,
            offset: this.d.boardViewportStore.offset,
        });
        if (box.content) {
            this.boxContent(box);
        }
        if (onAfterBoxDrawn) {
            onAfterBoxDrawn(box);
        }
    };
    BoardBoxesDrawer.prototype.getCachedBoxContentLines = function (box) {
        var linesCache = this.boxContentLinesCache.get(box.id);
        // Invalidate / create cache if required
        if (!linesCache || box.content !== linesCache.content || box.width !== linesCache.width) {
            var newLines = this.d.drawer.getTextLines({
                text: box.content,
                rectangle: box,
            });
            linesCache = {
                lines: newLines,
                content: box.content,
                width: box.width,
            };
            this.boxContentLinesCache.set(box.id, linesCache);
        }
        return linesCache.lines;
    };
    BoardBoxesDrawer.prototype.boxContent = function (box) {
        this.d.drawer.textLinesAfterPoint({
            position: box.toRectangle().start,
            lines: this.getCachedBoxContentLines(box),
            offset: this.d.boardViewportStore.offset,
            zoomLevel: this.d.boardViewportStore.zoomLevel,
        });
    };
    BoardBoxesDrawer.prototype.relation = function (relation) {
        var fromBox = relation.fromBox, toBox = relation.toBox;
        var fromRectangle = fromBox.toRectangle();
        var toRectangle = toBox.toRectangle();
        var fromPosition = fromRectangle.start.center(fromRectangle.end);
        var toPosition = toRectangle.start.center(toRectangle.end);
        this.d.drawer.line({
            from: fromPosition,
            to: toPosition,
            zoomLevel: this.d.boardViewportStore.zoomLevel,
            offset: this.d.boardViewportStore.offset,
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

/***/ "./src/board/rendering/boardBoxesDrawer/BoardBoxesDrawerInterface.ts":
/*!***************************************************************************!*\
  !*** ./src/board/rendering/boardBoxesDrawer/BoardBoxesDrawerInterface.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/board/rendering/boardBoxesDrawer/index.ts":
/*!*******************************************************!*\
  !*** ./src/board/rendering/boardBoxesDrawer/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BoardBoxesDrawer */ "./src/board/rendering/boardBoxesDrawer/BoardBoxesDrawer.ts"), exports);
__exportStar(__webpack_require__(/*! ./BoardBoxesDrawerInterface */ "./src/board/rendering/boardBoxesDrawer/BoardBoxesDrawerInterface.ts"), exports);


/***/ }),

/***/ "./src/board/rendering/boardDrawer/BoardDrawer.ts":
/*!********************************************************!*\
  !*** ./src/board/rendering/boardDrawer/BoardDrawer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardDrawer = void 0;
var rectangle_1 = __webpack_require__(/*! ../../../math/rectangle */ "./src/math/rectangle/index.ts");
var vectors_1 = __webpack_require__(/*! ../../../math/vectors */ "./src/math/vectors/index.ts");
var BoardDrawer = /** @class */ (function () {
    function BoardDrawer(d) {
        this.d = d;
    }
    BoardDrawer.prototype.cursor = function () {
        this.d.drawer.cursor(this.d.boardViewportStore.cursorType);
    };
    BoardDrawer.prototype.clearBoard = function () {
        this.d.drawer.clearArea({
            area: new rectangle_1.Rectangle(new vectors_1.Vector(), new vectors_1.Vector({
                x: this.d.boardViewportStore.width,
                y: this.d.boardViewportStore.height,
            })),
            offset: this.d.boardViewportStore.offset,
        });
    };
    BoardDrawer.prototype.dimensions = function () {
        this.d.drawer.dimensions({
            width: this.d.boardViewportStore.width,
            height: this.d.boardViewportStore.height,
        });
    };
    return BoardDrawer;
}());
exports.BoardDrawer = BoardDrawer;


/***/ }),

/***/ "./src/board/rendering/boardDrawer/BoardDrawerInterface.ts":
/*!*****************************************************************!*\
  !*** ./src/board/rendering/boardDrawer/BoardDrawerInterface.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/board/rendering/boardDrawer/index.ts":
/*!**************************************************!*\
  !*** ./src/board/rendering/boardDrawer/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BoardDrawer */ "./src/board/rendering/boardDrawer/BoardDrawer.ts"), exports);
__exportStar(__webpack_require__(/*! ./BoardDrawerInterface */ "./src/board/rendering/boardDrawer/BoardDrawerInterface.ts"), exports);


/***/ }),

/***/ "./src/board/rendering/debugDrawer/DebugDrawer.ts":
/*!********************************************************!*\
  !*** ./src/board/rendering/debugDrawer/DebugDrawer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DebugDrawer = void 0;
var rectangle_1 = __webpack_require__(/*! ../../../math/rectangle */ "./src/math/rectangle/index.ts");
var vectors_1 = __webpack_require__(/*! ../../../math/vectors */ "./src/math/vectors/index.ts");
var utils_1 = __webpack_require__(/*! ../../../utils */ "./src/utils/index.ts");
var DebugDrawer = /** @class */ (function () {
    function DebugDrawer(d) {
        this.d = d;
    }
    DebugDrawer.prototype.colorBoard = function () {
        var styles = ['red', 'green', 'blue', 'black'];
        var max = styles.length - 1;
        var min = 0;
        var style = (0, utils_1.getRandomInteger)(min, max);
        // this.context.fillStyle = styles[];
        // this.context.fillRect(startX, startY, width, height);
    };
    DebugDrawer.prototype.cursorCoordinates = function () {
        this.pointCoordinates({
            position: this.d.boardViewportStore.cursorPosition,
            zoomable: false,
        });
    };
    DebugDrawer.prototype.selectedAreaCoordinates = function () {
        if (this.d.boardViewportStore.selectedArea) {
            this.rectangleCoordinates(this.d.boardViewportStore.selectedArea, false);
        }
    };
    DebugDrawer.prototype.pointCoordinates = function (_a) {
        var position = _a.position, _b = _a.zoomable, zoomable = _b === void 0 ? true : _b;
        var zoomLevel = zoomable ? this.d.boardViewportStore.zoomLevel : 1;
        this.d.drawer.textAfterPoint({
            fontSize: 11,
            text: position.toString(),
            position: position.clone().add(new vectors_1.Vector({
                x: 15,
                y: -5,
            })),
            offset: this.d.boardViewportStore.offset,
            zoomLevel: zoomLevel,
        });
    };
    DebugDrawer.prototype.rectangleCoordinates = function (_rectangle, zoomable) {
        if (zoomable === void 0) { zoomable = true; }
        var zoomLevel = zoomable ? this.d.boardViewportStore.zoomLevel : 1;
        var zoomVector = new vectors_1.Vector({
            x: zoomLevel,
            y: zoomLevel,
        });
        var rectangle = _rectangle instanceof rectangle_1.DimensionsRectangle ? _rectangle.toRectangle() : _rectangle;
        var zoomedRectangle = rectangle.clone().multiply(zoomVector);
        this.d.drawer.textLinesAfterPoint({
            lines: ["".concat(zoomedRectangle.start.toString(), " (z)"), rectangle.start.toString()],
            position: new vectors_1.Vector(rectangle.start),
            fontSize: 11,
            offset: this.d.boardViewportStore.offset,
            zoomLevel: zoomLevel,
        });
    };
    DebugDrawer.prototype.centerGuides = function () {
        var rectangleSize = 3;
        // Center point
        this.d.drawer.rectangle({
            rectangle: new rectangle_1.Rectangle(this.d.boardViewportStore.center.clone(), this.d.boardViewportStore.center.clone().add(new vectors_1.Vector({
                x: rectangleSize,
                y: rectangleSize,
            })))
                .add(this.d.boardViewportStore.offset)
                .centralize(),
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
        this.d.drawer.textAfterPoint({
            position: this.d.boardViewportStore.center,
            text: this.d.boardViewportStore.center.toString(),
            fontSize: 11,
            offset: this.d.boardViewportStore.offset,
        });
    };
    return DebugDrawer;
}());
exports.DebugDrawer = DebugDrawer;


/***/ }),

/***/ "./src/board/rendering/debugDrawer/DebugDrawerInterface.ts":
/*!*****************************************************************!*\
  !*** ./src/board/rendering/debugDrawer/DebugDrawerInterface.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/board/rendering/debugDrawer/index.ts":
/*!**************************************************!*\
  !*** ./src/board/rendering/debugDrawer/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./DebugDrawer */ "./src/board/rendering/debugDrawer/DebugDrawer.ts"), exports);
__exportStar(__webpack_require__(/*! ./DebugDrawerInterface */ "./src/board/rendering/debugDrawer/DebugDrawerInterface.ts"), exports);


/***/ }),

/***/ "./src/board/rendering/index.ts":
/*!**************************************!*\
  !*** ./src/board/rendering/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./boardBoxesDrawer */ "./src/board/rendering/boardBoxesDrawer/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./boardDrawer */ "./src/board/rendering/boardDrawer/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./debugDrawer */ "./src/board/rendering/debugDrawer/index.ts"), exports);


/***/ }),

/***/ "./src/board/stores/boardBoxesStore/BoardBoxesStore.ts":
/*!*************************************************************!*\
  !*** ./src/board/stores/boardBoxesStore/BoardBoxesStore.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardBoxesStore = void 0;
var entities_1 = __webpack_require__(/*! ../../../entities */ "./src/entities/index.ts");
var vectors_1 = __webpack_require__(/*! ../../../math/vectors */ "./src/math/vectors/index.ts");
var BoardBoxesStore = /** @class */ (function () {
    function BoardBoxesStore() {
        this.deleteCallbacks = [];
        this.boxes = new Map();
        // Boxes which were touched last are at the ned of this array.
        // Boxes with the highest priority (at the end) should be rendered last.
        this.prioritizedBoxes = [];
        this.draggingBoxOverBoxes = new Map();
        this.relations = new Map();
        this.highlightedBoxes = new Map();
        this.selectedBoxes = new Map();
    }
    // TODO can be optimised? E.g. use a linked list + map approach.
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
        // TODO can be optimised? E.g. use a linked list + map approach.
        if (prioritizedBoxIndex !== -1) {
            this.prioritizedBoxes.splice(prioritizedBoxIndex, 1);
        }
        this.deleteCallbacks.forEach(function (callback) { return callback(box); });
    };
    // TODO don't iterate all boxes (improve performance).
    BoardBoxesStore.prototype.getBoxByPosition = function (position, zoomLevel) {
        if (zoomLevel === void 0) { zoomLevel = 1; }
        var zoomVector = new vectors_1.Vector({
            x: zoomLevel,
            y: zoomLevel,
        });
        for (var i = this.prioritizedBoxes.length - 1; i >= 0; i--) {
            var box = this.prioritizedBoxes[i];
            if (box.toRectangle().multiply(zoomVector).isPointInside(position)) {
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
                var relation = new entities_1.Relation(fromBox, toBox);
                fromBox.relations.push(relation);
                toBox.relations.push(relation);
                _this.relations.set(relation.id, relation);
            }
        });
    };
    BoardBoxesStore.prototype.onDelete = function (callback) {
        this.deleteCallbacks.push(callback);
    };
    return BoardBoxesStore;
}());
exports.BoardBoxesStore = BoardBoxesStore;


/***/ }),

/***/ "./src/board/stores/boardBoxesStore/BoardBoxesStoreInterface.ts":
/*!**********************************************************************!*\
  !*** ./src/board/stores/boardBoxesStore/BoardBoxesStoreInterface.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/board/stores/boardBoxesStore/index.ts":
/*!***************************************************!*\
  !*** ./src/board/stores/boardBoxesStore/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BoardBoxesStore */ "./src/board/stores/boardBoxesStore/BoardBoxesStore.ts"), exports);
__exportStar(__webpack_require__(/*! ./BoardBoxesStoreInterface */ "./src/board/stores/boardBoxesStore/BoardBoxesStoreInterface.ts"), exports);


/***/ }),

/***/ "./src/board/stores/boardViewportStore/BoardViewportStore.ts":
/*!*******************************************************************!*\
  !*** ./src/board/stores/boardViewportStore/BoardViewportStore.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardViewportStore = void 0;
var vectors_1 = __webpack_require__(/*! ../../../math/vectors */ "./src/math/vectors/index.ts");
var rendering_1 = __webpack_require__(/*! ../../../rendering */ "./src/rendering/index.ts");
var BoardViewportStore = /** @class */ (function () {
    function BoardViewportStore() {
        this.zoomLevel = 1;
        this.offset = new vectors_1.Vector();
        this.cursorType = rendering_1.CursorType.Default;
        this.isMovingViewPort = false;
        this.cursorPosition = new vectors_1.Vector();
        this.absoluteCursorPosition = new vectors_1.Vector();
        this.width = 0;
        this.height = 0;
    }
    Object.defineProperty(BoardViewportStore.prototype, "center", {
        get: function () {
            return new vectors_1.Vector({
                x: this.width / 2,
                y: this.height / 2,
            }).substract(this.offset);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardViewportStore.prototype, "left", {
        get: function () {
            return new vectors_1.Vector({
                x: 0,
                y: this.height / 2,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardViewportStore.prototype, "top", {
        get: function () {
            return new vectors_1.Vector({
                x: this.width / 2,
                y: 0,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardViewportStore.prototype, "right", {
        get: function () {
            return this.left.add(new vectors_1.Vector({
                x: this.width,
                y: 0,
            }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardViewportStore.prototype, "bottom", {
        get: function () {
            return this.top.add(new vectors_1.Vector({
                x: 0,
                y: this.height,
            }));
        },
        enumerable: false,
        configurable: true
    });
    return BoardViewportStore;
}());
exports.BoardViewportStore = BoardViewportStore;


/***/ }),

/***/ "./src/board/stores/boardViewportStore/BoardViewportStoreInterface.ts":
/*!****************************************************************************!*\
  !*** ./src/board/stores/boardViewportStore/BoardViewportStoreInterface.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/board/stores/boardViewportStore/index.ts":
/*!******************************************************!*\
  !*** ./src/board/stores/boardViewportStore/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BoardViewportStore */ "./src/board/stores/boardViewportStore/BoardViewportStore.ts"), exports);
__exportStar(__webpack_require__(/*! ./BoardViewportStoreInterface */ "./src/board/stores/boardViewportStore/BoardViewportStoreInterface.ts"), exports);


/***/ }),

/***/ "./src/board/stores/index.ts":
/*!***********************************!*\
  !*** ./src/board/stores/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./boardBoxesStore */ "./src/board/stores/boardBoxesStore/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./boardViewportStore */ "./src/board/stores/boardViewportStore/index.ts"), exports);


/***/ }),

/***/ "./src/components/cursor/Cursor.ts":
/*!*****************************************!*\
  !*** ./src/components/cursor/Cursor.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cursor = void 0;
var vectors_1 = __webpack_require__(/*! ../../math/vectors */ "./src/math/vectors/index.ts");
var dom_1 = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom/index.ts");
var Cursor = /** @class */ (function () {
    function Cursor(containerElement, position) {
        var _this = this;
        if (position === void 0) { position = new vectors_1.Vector(); }
        this.downCallbacks = [];
        this.tapCallbacks = [];
        this.doubleTapCallbacks = [];
        this.dragStartCallbacks = [];
        this.dragCallbacks = [];
        this.dragEndCallbacks = [];
        this.upCallbacks = [];
        this.scrollCallbacks = [];
        this.position = position;
        this.containerElement = containerElement;
        this.containerElement.addEventListener('wheel', function (event) { return _this.handleScroll(event); });
        this.containerElement.addEventListener('mousemove', function (event) { return _this.handleMove(event); });
        (0, dom_1.extendedClickHandler)(containerElement, {
            debug: false,
            silenceClickAfterDrag: true,
            dragMode: dom_1.DragMode.Down,
            onClick: function (event) { return _this.handleClick(event); },
            onDoubleClick: function (event) { return _this.handleDoubleClick(event); },
            onDragStart: function (event, data) { return _this.handleDragStart(event, data); },
            onDrag: function (event, data) { return _this.handleDrag(event, data); },
            onDragEnd: function (event, data) { return _this.handleDragEnd(event, data); },
            onMouseDown: function (event) { return _this.handleMouseDown(event); },
            onMouseUp: function (event, data) { return _this.handleMouseUp(event, data); },
        });
    }
    Cursor.prototype.onDown = function (callback) {
        this.downCallbacks.push(callback);
    };
    Cursor.prototype.onTap = function (callback) {
        this.tapCallbacks.push(callback);
    };
    Cursor.prototype.onDoubleTap = function (callback) {
        this.doubleTapCallbacks.push(callback);
    };
    Cursor.prototype.onMove = function (callback) {
        var _this = this;
        this.containerElement.addEventListener('mousemove', function (event) { return callback(event, _this.position); });
    };
    Cursor.prototype.onDragStart = function (callback) {
        this.dragStartCallbacks.push(callback);
    };
    Cursor.prototype.onDrag = function (callback) {
        this.dragCallbacks.push(callback);
    };
    Cursor.prototype.onDragEnd = function (callback) {
        this.dragEndCallbacks.push(callback);
    };
    Cursor.prototype.onUp = function (callback) {
        this.upCallbacks.push(callback);
    };
    Cursor.prototype.onScroll = function (callback) {
        this.scrollCallbacks.push(callback);
    };
    // ==============================
    Cursor.prototype.handleMove = function (event) {
        this.position.updateFrom((0, dom_1.getPositionFromMouseEvent)(event, this.containerElement));
    };
    Cursor.prototype.handleMouseDown = function (event) {
        var _this = this;
        this.downCallbacks.forEach(function (callback) { return callback(event, _this.position); });
    };
    Cursor.prototype.handleClick = function (event) {
        var _this = this;
        this.tapCallbacks.forEach(function (callback) { return callback(event, _this.position); });
    };
    Cursor.prototype.handleDoubleClick = function (event) {
        var _this = this;
        this.doubleTapCallbacks.forEach(function (callback) { return callback(event, _this.position); });
    };
    Cursor.prototype.handleDragStart = function (event, data) {
        var _this = this;
        this.dragStartCallbacks.forEach(function (callback) { return callback(event, _this.position, data); });
    };
    Cursor.prototype.handleDrag = function (event, data) {
        var _this = this;
        this.dragCallbacks.forEach(function (callback) { return callback(event, _this.position, data); });
    };
    Cursor.prototype.handleDragEnd = function (event, data) {
        var _this = this;
        this.dragEndCallbacks.forEach(function (callback) { return callback(event, _this.position, data); });
    };
    Cursor.prototype.handleMouseUp = function (event, data) {
        var _this = this;
        this.upCallbacks.forEach(function (callback) { return callback(event, _this.position, data); });
    };
    Cursor.prototype.handleScroll = function (event) {
        var _this = this;
        var scrollData = {
            delta: new vectors_1.Vector({
                x: event.deltaX,
                y: event.deltaY,
            }),
        };
        this.scrollCallbacks.forEach(function (callback) { return callback(event, _this.position, scrollData); });
    };
    return Cursor;
}());
exports.Cursor = Cursor;


/***/ }),

/***/ "./src/components/cursor/CursorInterface.ts":
/*!**************************************************!*\
  !*** ./src/components/cursor/CursorInterface.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/components/cursor/index.ts":
/*!****************************************!*\
  !*** ./src/components/cursor/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Cursor */ "./src/components/cursor/Cursor.ts"), exports);
__exportStar(__webpack_require__(/*! ./CursorInterface */ "./src/components/cursor/CursorInterface.ts"), exports);


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./cursor */ "./src/components/cursor/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./selection */ "./src/components/selection/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./textEditor */ "./src/components/textEditor/index.ts"), exports);


/***/ }),

/***/ "./src/components/selection/Selection.ts":
/*!***********************************************!*\
  !*** ./src/components/selection/Selection.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Selection = void 0;
var rectangle_1 = __webpack_require__(/*! ../../math/rectangle */ "./src/math/rectangle/index.ts");
var dom_1 = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom/index.ts");
var Selection = /** @class */ (function () {
    function Selection(cursor) {
        var _this = this;
        this.isMouseDown = false;
        this.selectStartCallbacks = [];
        this.selectCallbacks = [];
        this.selectEndCallbacks = [];
        this.cursor = cursor;
        this.cursor.onDown(function (event) { return _this.handleDown(event); });
        this.cursor.onMove(function (event) { return _this.handleMove(event); });
        this.cursor.onUp(function (event) { return _this.handleUp(event); });
    }
    Selection.prototype.onSelectStart = function (callback) {
        this.selectStartCallbacks.push(callback);
    };
    Selection.prototype.onSelect = function (callback) {
        this.selectCallbacks.push(callback);
    };
    Selection.prototype.onSelectEnd = function (callback) {
        this.selectEndCallbacks.push(callback);
    };
    Selection.prototype.getSelection = function (event) {
        if (!this.lastDownEvent) {
            return new rectangle_1.Rectangle();
        }
        var pointFromLastDown = (0, dom_1.getPositionFromMouseEvent)(this.lastDownEvent, this.cursor.containerElement);
        var currentPoint = (0, dom_1.getPositionFromMouseEvent)(event, this.cursor.containerElement);
        return new rectangle_1.Rectangle(pointFromLastDown, currentPoint).sort();
    };
    Selection.prototype.handleDown = function (event) {
        var _this = this;
        this.lastDownEvent = event;
        this.isMouseDown = true;
        this.selectedArea = this.getSelection(event);
        this.selectStartCallbacks.forEach(function (callback) { return callback(event, _this); });
    };
    Selection.prototype.handleMove = function (event) {
        var _this = this;
        if (!this.isMouseDown) {
            return;
        }
        this.selectedArea.updateFrom(this.getSelection(event));
        this.selectCallbacks.forEach(function (callback) { return callback(event, _this, _this.selectedArea); });
    };
    Selection.prototype.handleUp = function (event) {
        var _this = this;
        this.isMouseDown = false;
        // TODO investigate why this happens on double click
        if (!this.selectedArea) {
            return;
        }
        this.selectedArea.updateFrom(this.getSelection(event));
        this.selectEndCallbacks.forEach(function (callback) { return callback(event, _this, _this.selectedArea); });
        this.selectedArea = undefined;
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),

/***/ "./src/components/selection/SelectionInterface.ts":
/*!********************************************************!*\
  !*** ./src/components/selection/SelectionInterface.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/components/selection/index.ts":
/*!*******************************************!*\
  !*** ./src/components/selection/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Selection */ "./src/components/selection/Selection.ts"), exports);
__exportStar(__webpack_require__(/*! ./SelectionInterface */ "./src/components/selection/SelectionInterface.ts"), exports);


/***/ }),

/***/ "./src/components/textEditor/TextEditor.ts":
/*!*************************************************!*\
  !*** ./src/components/textEditor/TextEditor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextEditor = void 0;
var keyboard_1 = __webpack_require__(/*! ../../utils/keyboard */ "./src/utils/keyboard/index.ts");
var TextEditor = /** @class */ (function () {
    function TextEditor(containerElement) {
        var _this = this;
        this.width = 100;
        this._height = 100;
        this._content = '';
        this.textAreaElement = document.createElement('textarea');
        this.textAreaWrapperElement = document.createElement('div');
        this.heightChangeCallbacks = [];
        this.lastHeightCallbackFiredFor = this.height;
        this.textAreaElement.style.margin = '0';
        this.textAreaElement.style.padding = '5px';
        this.textAreaElement.style.background = 'transparent';
        this.textAreaElement.style.position = 'absolute';
        this.textAreaElement.style.border = 'none';
        this.textAreaElement.style.resize = 'none';
        this.textAreaElement.style.outline = 'none';
        this.textAreaElement.style.boxSizing = 'border-box';
        this.textAreaElement.style.overflow = 'hidden';
        this.textAreaElement.style.left = '0';
        this.textAreaElement.style.top = '0';
        this.textAreaElement.style.color = 'transparent';
        this.textAreaElement.style.caretColor = 'black';
        this.textAreaElement.style.fontFamily = 'Roboto';
        this.textAreaElement.style.lineHeight = '16px';
        this.textAreaElement.style.fontSize = '14px';
        this.textAreaWrapperElement.style.overflow = 'hidden';
        this.textAreaWrapperElement.style.width = '100%';
        this.textAreaWrapperElement.style.height = '100%';
        this.textAreaWrapperElement.style.display = 'none';
        this.textAreaWrapperElement.style.position = 'absolute';
        this.textAreaWrapperElement.style.left = '0px';
        this.textAreaWrapperElement.style.top = '0px';
        containerElement.appendChild(this.textAreaWrapperElement);
        this.textAreaWrapperElement.appendChild(this.textAreaElement);
        this.textAreaElement.addEventListener('input', function (event) { return _this.handleInput(event); });
        // TODO expose onHide with reason 'keyboard' and clean `showForBox` in `BoxTextEditor`
        (0, keyboard_1.onKeyDown)(keyboard_1.KEYS.escape, function () { return _this.hide(); });
    }
    Object.defineProperty(TextEditor.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this.textAreaElement.style.height = "".concat(height, "px");
            this._height = height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextEditor.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (content) {
            this._content = content;
            this.textAreaElement.value = content;
        },
        enumerable: false,
        configurable: true
    });
    TextEditor.prototype.showAt = function (position) {
        this.textAreaWrapperElement.style.display = 'block';
        this.textAreaElement.style.width = "".concat(this.width, "px");
        this.textAreaElement.style.left = "".concat(position.x, "px");
        this.textAreaElement.style.top = "".concat(position.y, "px");
        this.lastHeightCallbackFiredFor = this.height;
        this.textAreaElement.focus();
    };
    TextEditor.prototype.hide = function () {
        this.textAreaElement.blur();
        this.textAreaWrapperElement.style.display = 'none';
        this.content = '';
    };
    TextEditor.prototype.onInput = function (callback) {
        this.textAreaElement.addEventListener('input', function (event) { return callback(event); });
    };
    TextEditor.prototype.onChange = function (callback) {
        this.textAreaElement.addEventListener('change', function (event) { return callback(event); });
    };
    TextEditor.prototype.onHeightChange = function (callback) {
        this.heightChangeCallbacks.push(callback);
    };
    TextEditor.prototype.handleInput = function (event) {
        var _this = this;
        this.content = event.target.value;
        if (this.lastHeightCallbackFiredFor !== this.textAreaElement.scrollHeight) {
            this.height = this.textAreaElement.scrollHeight;
            this.heightChangeCallbacks.forEach(function (callback) {
                return callback(event, {
                    height: _this.height,
                    delta: _this.height - _this.lastHeightCallbackFiredFor,
                });
            });
            this.lastHeightCallbackFiredFor = this.height;
        }
    };
    return TextEditor;
}());
exports.TextEditor = TextEditor;


/***/ }),

/***/ "./src/components/textEditor/TextEditorInterface.ts":
/*!**********************************************************!*\
  !*** ./src/components/textEditor/TextEditorInterface.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/components/textEditor/index.ts":
/*!********************************************!*\
  !*** ./src/components/textEditor/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./TextEditor */ "./src/components/textEditor/TextEditor.ts"), exports);
__exportStar(__webpack_require__(/*! ./TextEditorInterface */ "./src/components/textEditor/TextEditorInterface.ts"), exports);


/***/ }),

/***/ "./src/entities/box/Box.ts":
/*!*********************************!*\
  !*** ./src/entities/box/Box.ts ***!
  \*********************************/
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
var rectangle_1 = __webpack_require__(/*! ../../math/rectangle */ "./src/math/rectangle/index.ts");
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
var generateId = (0, utils_1.getIdGenerator)();
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
}(rectangle_1.DimensionsRectangle));
exports.Box = Box;


/***/ }),

/***/ "./src/entities/box/BoxInterface.ts":
/*!******************************************!*\
  !*** ./src/entities/box/BoxInterface.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/entities/box/index.ts":
/*!***********************************!*\
  !*** ./src/entities/box/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Box */ "./src/entities/box/Box.ts"), exports);
__exportStar(__webpack_require__(/*! ./BoxInterface */ "./src/entities/box/BoxInterface.ts"), exports);


/***/ }),

/***/ "./src/entities/index.ts":
/*!*******************************!*\
  !*** ./src/entities/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./box */ "./src/entities/box/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./relation */ "./src/entities/relation/index.ts"), exports);


/***/ }),

/***/ "./src/entities/relation/Relation.ts":
/*!*******************************************!*\
  !*** ./src/entities/relation/Relation.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Relation = void 0;
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
var generateId = (0, utils_1.getIdGenerator)();
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

/***/ "./src/entities/relation/RelationInterface.ts":
/*!****************************************************!*\
  !*** ./src/entities/relation/RelationInterface.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/entities/relation/index.ts":
/*!****************************************!*\
  !*** ./src/entities/relation/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Relation */ "./src/entities/relation/Relation.ts"), exports);
__exportStar(__webpack_require__(/*! ./RelationInterface */ "./src/entities/relation/RelationInterface.ts"), exports);


/***/ }),

/***/ "./src/math/convertRadiansToDegrees.ts":
/*!*********************************************!*\
  !*** ./src/math/convertRadiansToDegrees.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertRadiansToDegrees = void 0;
var convertRadiansToDegrees = function (radians) {
    return radians * (180 / Math.PI);
};
exports.convertRadiansToDegrees = convertRadiansToDegrees;


/***/ }),

/***/ "./src/math/polygon/Polygon.ts":
/*!*************************************!*\
  !*** ./src/math/polygon/Polygon.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Polygon = exports.Edge = void 0;
var vectors_1 = __webpack_require__(/*! ../vectors */ "./src/math/vectors/index.ts");
var Edge = /** @class */ (function () {
    function Edge(from, to) {
        this.from = from;
        this.to = to;
    }
    Object.defineProperty(Edge.prototype, "center", {
        get: function () {
            return (0, vectors_1.center)(this.from, this.to);
        },
        enumerable: false,
        configurable: true
    });
    return Edge;
}());
exports.Edge = Edge;
var Polygon = /** @class */ (function () {
    function Polygon(vertices) {
        this._vertices = [];
        this.vertices = vertices;
    }
    Object.defineProperty(Polygon.prototype, "vertices", {
        get: function () {
            return this._vertices;
        },
        set: function (vertices) {
            if (vertices.length < 3) {
                throw new Error('At least 3 vertices required');
            }
            this._vertices = vertices;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "edges", {
        // TODO memoize? Redo to not calculate each time (calculate when vertices changed only)?
        get: function () {
            var edges = [];
            for (var i = 0, l = this.vertices.length; i < l; i++) {
                var vertexA = this.vertices[i];
                var vertexB = void 0;
                if (this.vertices[i + 1]) {
                    vertexB = this.vertices[i + 1];
                }
                else {
                    vertexB = this.vertices[0];
                }
                edges.push(new Edge(vertexA, vertexB));
            }
            return edges;
        },
        enumerable: false,
        configurable: true
    });
    return Polygon;
}());
exports.Polygon = Polygon;


/***/ }),

/***/ "./src/math/polygon/index.ts":
/*!***********************************!*\
  !*** ./src/math/polygon/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./intersect */ "./src/math/polygon/intersect.ts"), exports);
__exportStar(__webpack_require__(/*! ./Polygon */ "./src/math/polygon/Polygon.ts"), exports);


/***/ }),

/***/ "./src/math/polygon/intersect.ts":
/*!***************************************!*\
  !*** ./src/math/polygon/intersect.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.intersects = void 0;
var touches_1 = __webpack_require__(/*! ./touches */ "./src/math/polygon/touches.ts");
function intersects(polygonA, polygonB, mode) {
    if (mode === void 0) { mode = 'touch'; }
    switch (mode) {
        case 'center': {
            throw new Error('Not implemented');
        }
        case 'cover': {
            throw new Error('Not implemented');
        }
        case 'touch': {
            return (0, touches_1.touches)(polygonA, polygonB);
        }
        default:
            throw new Error('Not implemented');
    }
}
exports.intersects = intersects;


/***/ }),

/***/ "./src/math/polygon/touches.ts":
/*!*************************************!*\
  !*** ./src/math/polygon/touches.ts ***!
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
exports.touches = void 0;
var vectors_1 = __webpack_require__(/*! ../vectors */ "./src/math/vectors/index.ts");
// Check if polygon a touches polygon b
// https://www.codeproject.com/Articles/15573/2D-Polygon-Collision-Detection
function touches(polygonA, polygonB) {
    var edgeCountA = polygonA.edges.length;
    var edgeCountB = polygonB.edges.length;
    var edge;
    for (var edgeIndex = 0; edgeIndex < edgeCountA + edgeCountB; edgeIndex++) {
        if (edgeIndex < edgeCountA) {
            edge = polygonA.edges[edgeIndex];
        }
        else {
            edge = polygonB.edges[edgeIndex - edgeCountA];
        }
        var point = edge.to.substract(edge.from);
        var axis = new vectors_1.Vector({
            x: point.x,
            y: -1 * point.y,
        }).normalize();
        var _a = __read(projectPolygon(axis, polygonA), 2), minA = _a[0], maxA = _a[1];
        var _b = __read(projectPolygon(axis, polygonB), 2), minB = _b[0], maxB = _b[1];
        if (intervalDistance(minA, maxA, minB, maxB) > 0) {
            return false;
        }
    }
    return true;
}
exports.touches = touches;
// Calculate the projection of a polygon on an axis
// and returns it as a [min, max] interval.
function projectPolygon(axis, polygon) {
    // To project a point on an axis use the dot product
    var dotProduct = axis.dotProduct(polygon.vertices[0]);
    var min = dotProduct;
    var max = dotProduct;
    for (var i = 0; i < polygon.vertices.length; i++) {
        dotProduct = polygon.vertices[i].dotProduct(axis);
        if (dotProduct < min) {
            min = dotProduct;
        }
        else if (dotProduct > max) {
            max = dotProduct;
        }
    }
    return [min, max];
}
// Calculate the distance between [minA, maxA] and [minB, maxB].
// The distance will be negative if the intervals overlap.
function intervalDistance(minA, maxA, minB, maxB) {
    if (minA < minB) {
        return minB - maxA;
    }
    else {
        return minA - maxB;
    }
}


/***/ }),

/***/ "./src/math/rectangle/DimensionsRectangle.ts":
/*!***************************************************!*\
  !*** ./src/math/rectangle/DimensionsRectangle.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DimensionsRectangle = void 0;
var vectors_1 = __webpack_require__(/*! ../vectors */ "./src/math/vectors/index.ts");
var Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "./src/math/rectangle/Rectangle.ts");
var DimensionsRectangle = /** @class */ (function () {
    function DimensionsRectangle(position, width, height) {
        if (position === void 0) { position = new vectors_1.Vector(); }
        if (width === void 0) { width = 100; }
        if (height === void 0) { height = 50; }
        this.position = position;
        this.height = height;
        this.width = width;
    }
    DimensionsRectangle.prototype.toRectangle = function () {
        return new Rectangle_1.Rectangle(this.position, new vectors_1.Vector({
            x: this.position.x + this.width,
            y: this.position.y + this.height,
        }));
    };
    return DimensionsRectangle;
}());
exports.DimensionsRectangle = DimensionsRectangle;


/***/ }),

/***/ "./src/math/rectangle/Rectangle.ts":
/*!*****************************************!*\
  !*** ./src/math/rectangle/Rectangle.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rectangle = void 0;
var polygon_1 = __webpack_require__(/*! ../polygon */ "./src/math/polygon/index.ts");
var vectors_1 = __webpack_require__(/*! ../vectors */ "./src/math/vectors/index.ts");
var intersects_1 = __webpack_require__(/*! ./intersects */ "./src/math/rectangle/intersects.ts");
var isPointInside_1 = __webpack_require__(/*! ./isPointInside */ "./src/math/rectangle/isPointInside.ts");
var Rectangle = /** @class */ (function () {
    function Rectangle(start, end) {
        if (start === void 0) { start = new vectors_1.Vector(); }
        if (end === void 0) { end = new vectors_1.Vector(); }
        this.start = start.clone();
        this.end = end.clone();
    }
    Rectangle.prototype.toPolygon = function () {
        return new polygon_1.Polygon([
            this.start,
            new vectors_1.Vector({
                x: this.end.x,
                y: this.start.y,
            }),
            this.end,
            new vectors_1.Vector({
                x: this.start.x,
                y: this.end.y,
            }),
        ]);
    };
    Rectangle.prototype.updateFrom = function (rectangle) {
        this.start.x = rectangle.start.x;
        this.start.y = rectangle.start.y;
        this.end.x = rectangle.end.x;
        this.end.y = rectangle.end.y;
    };
    Rectangle.prototype.clone = function () {
        return new Rectangle(this.start, this.end);
    };
    Rectangle.prototype.isPointInside = function (point) {
        return (0, isPointInside_1.isPointInside)(point, this);
    };
    Rectangle.prototype.centralize = function () {
        var centralizeVector = new vectors_1.Vector({
            x: this.width / 2,
            y: this.height / 2,
        });
        this.start.substract(centralizeVector);
        this.end.substract(centralizeVector);
        return this;
    };
    Rectangle.prototype.intersects = function (rectangleB) {
        return (0, intersects_1.intersects)(this, rectangleB);
    };
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return Math.abs(this.end.x - this.start.x);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return Math.abs(this.end.y - this.start.y);
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.multiply = function (vector) {
        this.start.multiply(vector);
        this.end.multiply(vector);
        return this;
    };
    Rectangle.prototype.add = function (vector) {
        this.start.add(vector);
        this.end.add(vector);
        return this;
    };
    Rectangle.prototype.substract = function (vector) {
        this.start.substract(vector);
        this.end.substract(vector);
        return this;
    };
    Rectangle.prototype.sort = function () {
        var a = this.start;
        var b = this.end;
        var topLeft;
        var topRight;
        var bottomLeft;
        var bottomRight;
        if (isFirstTopLeft(a, b)) {
            topLeft = a;
        }
        else if (isFirstTopLeft(b, a)) {
            topLeft = b;
        }
        if (isFirstBottomRight(a, b)) {
            bottomRight = a;
        }
        else if (isFirstBottomRight(b, a)) {
            bottomRight = b;
        }
        if (topLeft && bottomRight) {
            this.start = topLeft;
            this.end = bottomRight;
            return this;
        }
        if (isFirstTopRight(a, b)) {
            topRight = a;
        }
        else if (isFirstTopRight(b, a)) {
            topRight = b;
        }
        if (isFirstBottomLeft(a, b)) {
            bottomLeft = a;
        }
        else if (isFirstBottomLeft(b, a)) {
            bottomLeft = b;
        }
        if (!topLeft && topRight && bottomLeft) {
            topLeft = new vectors_1.Vector({
                x: bottomLeft.x,
                y: topRight.y,
            });
        }
        if (!bottomRight && topRight && bottomLeft) {
            bottomRight = new vectors_1.Vector({
                x: topRight.x,
                y: bottomLeft.y,
            });
        }
        if (!topLeft || !bottomRight) {
            return this;
        }
        this.start = topLeft;
        this.end = bottomRight;
        return this;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function isFirstTopLeft(a, b) {
    return a.x < b.x && a.y < b.y;
}
function isFirstTopRight(a, b) {
    return a.x > b.x && a.y < b.y;
}
function isFirstBottomLeft(a, b) {
    return a.x < b.x && a.y > b.y;
}
function isFirstBottomRight(a, b) {
    return a.x > b.x && a.y > b.y;
}


/***/ }),

/***/ "./src/math/rectangle/contains.ts":
/*!****************************************!*\
  !*** ./src/math/rectangle/contains.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


// https://gist.github.com/Daniel-Hug/d7984d82b58d6d2679a087d896ca3d2b
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.contains = void 0;
// Check if rectangle a contains rectangle b.
// Each object (a and b) should have 2 properties to represent the
// top-left corner (x1, y1) and 2 for the bottom-right corner (x2, y2).
function contains(a, b) {
    return !(b.start.x < a.start.x || b.start.y < a.start.y || b.end.x > a.end.x || b.end.y > a.end.y);
}
exports.contains = contains;


/***/ }),

/***/ "./src/math/rectangle/index.ts":
/*!*************************************!*\
  !*** ./src/math/rectangle/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./contains */ "./src/math/rectangle/contains.ts"), exports);
__exportStar(__webpack_require__(/*! ./DimensionsRectangle */ "./src/math/rectangle/DimensionsRectangle.ts"), exports);
__exportStar(__webpack_require__(/*! ./intersects */ "./src/math/rectangle/intersects.ts"), exports);
__exportStar(__webpack_require__(/*! ./isPointInside */ "./src/math/rectangle/isPointInside.ts"), exports);
__exportStar(__webpack_require__(/*! ./overlaps */ "./src/math/rectangle/overlaps.ts"), exports);
__exportStar(__webpack_require__(/*! ./Rectangle */ "./src/math/rectangle/Rectangle.ts"), exports);
__exportStar(__webpack_require__(/*! ./touches */ "./src/math/rectangle/touches.ts"), exports);


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
    if (point.x < rectangle.start.x || point.x > rectangle.end.x) {
        return false;
    }
    if (point.y < rectangle.start.y || point.y > rectangle.end.y) {
        return false;
    }
    return true;
};
exports.isPointInside = isPointInside;


/***/ }),

/***/ "./src/math/rectangle/overlaps.ts":
/*!****************************************!*\
  !*** ./src/math/rectangle/overlaps.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


// https://gist.github.com/Daniel-Hug/d7984d82b58d6d2679a087d896ca3d2b
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.overlaps = void 0;
// Check if rectangle a overlaps rectangle b.
// Each object (a and b) should have 2 properties to represent the
// top-left corner (x1, y1) and 2 for the bottom-right corner (x2, y2).
function overlaps(a, b) {
    // No horizontal overlap
    if (a.start.x >= b.end.x || b.start.x >= a.end.x) {
        return false;
    }
    // No vertical overlap
    if (a.start.y >= b.end.y || b.start.y >= a.end.y) {
        return false;
    }
    return true;
}
exports.overlaps = overlaps;


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
    if (rectangleA.start.x > rectangleB.end.x || rectangleB.start.x > rectangleA.end.x) {
        return false;
    }
    // Has vertical gap
    if (rectangleA.start.y > rectangleB.end.y || rectangleB.start.y > rectangleA.end.y) {
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector = void 0;
var add_1 = __webpack_require__(/*! ./add */ "./src/math/vectors/add.ts");
var center_1 = __webpack_require__(/*! ./center */ "./src/math/vectors/center.ts");
var devide_1 = __webpack_require__(/*! ./devide */ "./src/math/vectors/devide.ts");
var dotProduct_1 = __webpack_require__(/*! ./dotProduct */ "./src/math/vectors/dotProduct.ts");
var magnitude_1 = __webpack_require__(/*! ./magnitude */ "./src/math/vectors/magnitude.ts");
var multiply_1 = __webpack_require__(/*! ./multiply */ "./src/math/vectors/multiply.ts");
var normalize_1 = __webpack_require__(/*! ./normalize */ "./src/math/vectors/normalize.ts");
var subtract_1 = __webpack_require__(/*! ./subtract */ "./src/math/vectors/subtract.ts");
var Vector = /** @class */ (function () {
    function Vector(coordinates) {
        if (coordinates === void 0) { coordinates = {
            x: 0,
            y: 0,
        }; }
        this.x = coordinates.x;
        this.y = coordinates.y;
    }
    Vector.prototype.clone = function () {
        return new Vector(this);
    };
    Vector.prototype.updateFrom = function (vector) {
        this.x = vector.x;
        this.y = vector.y;
    };
    Vector.prototype.substract = function (vectorB) {
        var subtracted = (0, subtract_1.subtract)(this, vectorB);
        this.x = subtracted.x;
        this.y = subtracted.y;
        return this;
    };
    Vector.prototype.add = function (vectorB) {
        var added = (0, add_1.add)(this, vectorB);
        this.x = added.x;
        this.y = added.y;
        return this;
    };
    Vector.prototype.multiply = function (vectorB) {
        var multiplied = (0, multiply_1.multiply)(this, vectorB);
        this.x = multiplied.x;
        this.y = multiplied.y;
        return this;
    };
    Vector.prototype.devide = function (vectorB) {
        var devided = (0, devide_1.devide)(this, vectorB);
        this.x = devided.x;
        this.y = devided.y;
        return this;
    };
    Vector.prototype.normalize = function () {
        var normalized = (0, normalize_1.normalize)(this);
        this.x = normalized.x;
        this.y = normalized.y;
        return this;
    };
    Vector.prototype.dotProduct = function (vectorB) {
        return (0, dotProduct_1.dotProduct)(this, vectorB);
    };
    Vector.prototype.center = function (to) {
        return (0, center_1.center)(this, to);
    };
    Vector.prototype.magnitude = function () {
        return (0, magnitude_1.magnitude)(this);
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
var add = function (_vectorA, vectorB) {
    var vectorA = _vectorA.clone();
    vectorA.x += vectorB.x;
    vectorA.y += vectorB.y;
    return vectorA;
};
exports.add = add;


/***/ }),

/***/ "./src/math/vectors/angleBetween.ts":
/*!******************************************!*\
  !*** ./src/math/vectors/angleBetween.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.angleBetween = void 0;
var convertRadiansToDegrees_1 = __webpack_require__(/*! ../convertRadiansToDegrees */ "./src/math/convertRadiansToDegrees.ts");
var dotProduct_1 = __webpack_require__(/*! ./dotProduct */ "./src/math/vectors/dotProduct.ts");
var normalize_1 = __webpack_require__(/*! ./normalize */ "./src/math/vectors/normalize.ts");
// https://habr.com/ru/post/131931/
var angleBetween = function (vectorA, vectorB) {
    return (0, convertRadiansToDegrees_1.convertRadiansToDegrees)(Math.acos((0, dotProduct_1.dotProduct)((0, normalize_1.normalize)(vectorA), (0, normalize_1.normalize)(vectorB))));
};
exports.angleBetween = angleBetween;


/***/ }),

/***/ "./src/math/vectors/areParallel.ts":
/*!*****************************************!*\
  !*** ./src/math/vectors/areParallel.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.areParallel = void 0;
// http://problemsphysics.com/vectors/parallel_perpend_vectors.html
var areParallel = function (vectorA, vectorB) {
    return vectorA.x * vectorB.y === vectorB.x * vectorA.y;
};
exports.areParallel = areParallel;


/***/ }),

/***/ "./src/math/vectors/center.ts":
/*!************************************!*\
  !*** ./src/math/vectors/center.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.center = void 0;
var Vector_1 = __webpack_require__(/*! ./Vector */ "./src/math/vectors/Vector.ts");
var center = function (from, to) {
    var x = from.x + (to.x - from.x) / 2;
    var y = from.y + (to.y - from.y) / 2;
    return new Vector_1.Vector({ x: x, y: y });
};
exports.center = center;


/***/ }),

/***/ "./src/math/vectors/devide.ts":
/*!************************************!*\
  !*** ./src/math/vectors/devide.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.devide = void 0;
var devide = function (_vectorA, vectorB) {
    var vectorA = _vectorA.clone();
    vectorA.x /= vectorB.x;
    vectorA.y /= vectorB.y;
    return vectorA;
};
exports.devide = devide;


/***/ }),

/***/ "./src/math/vectors/dotProduct.ts":
/*!****************************************!*\
  !*** ./src/math/vectors/dotProduct.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dotProduct = void 0;
// https://www.mathsisfun.com/algebra/vectors-dot-product.html
var dotProduct = function (vectorA, vectorB) {
    return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
};
exports.dotProduct = dotProduct;


/***/ }),

/***/ "./src/math/vectors/index.ts":
/*!***********************************!*\
  !*** ./src/math/vectors/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./add */ "./src/math/vectors/add.ts"), exports);
__exportStar(__webpack_require__(/*! ./angleBetween */ "./src/math/vectors/angleBetween.ts"), exports);
__exportStar(__webpack_require__(/*! ./areParallel */ "./src/math/vectors/areParallel.ts"), exports);
__exportStar(__webpack_require__(/*! ./center */ "./src/math/vectors/center.ts"), exports);
__exportStar(__webpack_require__(/*! ./devide */ "./src/math/vectors/devide.ts"), exports);
__exportStar(__webpack_require__(/*! ./dotProduct */ "./src/math/vectors/dotProduct.ts"), exports);
__exportStar(__webpack_require__(/*! ./magnitude */ "./src/math/vectors/magnitude.ts"), exports);
__exportStar(__webpack_require__(/*! ./multiply */ "./src/math/vectors/multiply.ts"), exports);
__exportStar(__webpack_require__(/*! ./normalize */ "./src/math/vectors/normalize.ts"), exports);
__exportStar(__webpack_require__(/*! ./subtract */ "./src/math/vectors/subtract.ts"), exports);
__exportStar(__webpack_require__(/*! ./Vector */ "./src/math/vectors/Vector.ts"), exports);


/***/ }),

/***/ "./src/math/vectors/magnitude.ts":
/*!***************************************!*\
  !*** ./src/math/vectors/magnitude.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.magnitude = void 0;
var magnitude = function (_a) {
    var x = _a.x, y = _a.y;
    return Math.sqrt(x * x + y * y);
};
exports.magnitude = magnitude;


/***/ }),

/***/ "./src/math/vectors/multiply.ts":
/*!**************************************!*\
  !*** ./src/math/vectors/multiply.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.multiply = void 0;
var multiply = function (_vectorA, vectorB) {
    var vectorA = _vectorA.clone();
    vectorA.x *= vectorB.x;
    vectorA.y *= vectorB.y;
    return vectorA;
};
exports.multiply = multiply;


/***/ }),

/***/ "./src/math/vectors/normalize.ts":
/*!***************************************!*\
  !*** ./src/math/vectors/normalize.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalize = void 0;
var magnitude_1 = __webpack_require__(/*! ./magnitude */ "./src/math/vectors/magnitude.ts");
var normalize = function (_vector) {
    var vector = _vector.clone();
    var vectorMagnitude = (0, magnitude_1.magnitude)(vector);
    vector.x /= vectorMagnitude;
    vector.y /= vectorMagnitude;
    return vector;
};
exports.normalize = normalize;


/***/ }),

/***/ "./src/math/vectors/subtract.ts":
/*!**************************************!*\
  !*** ./src/math/vectors/subtract.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.subtract = void 0;
var subtract = function (_vectorA, vectorB) {
    var vectorA = _vectorA.clone();
    vectorA.x -= vectorB.x;
    vectorA.y -= vectorB.y;
    return vectorA;
};
exports.subtract = subtract;


/***/ }),

/***/ "./src/rendering/drawer/Drawer.ts":
/*!****************************************!*\
  !*** ./src/rendering/drawer/Drawer.ts ***!
  \****************************************/
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
exports.Drawer = void 0;
var rectangle_1 = __webpack_require__(/*! ../../math/rectangle */ "./src/math/rectangle/index.ts");
var vectors_1 = __webpack_require__(/*! ../../math/vectors */ "./src/math/vectors/index.ts");
var Drawer = /** @class */ (function () {
    function Drawer(context) {
        this._offset = new vectors_1.Vector();
        this.context = context;
    }
    Drawer.mergeWithDefaultTextOptions = function (_a) {
        var _b = _a.fontFamily, fontFamily = _b === void 0 ? 'Roboto' : _b, _c = _a.fontSize, fontSize = _c === void 0 ? 14 : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 16 : _d, _e = _a.padding, padding = _e === void 0 ? 5 : _e;
        return {
            fontFamily: fontFamily,
            fontSize: fontSize,
            lineHeight: lineHeight,
            padding: padding,
        };
    };
    Drawer.prototype.clearArea = function (_a) {
        var _area = _a.area, _b = _a.offset, offset = _b === void 0 ? new vectors_1.Vector() : _b;
        var area = _area.clone().add(offset);
        var startX = area.start.x;
        var startY = area.start.y;
        var width = area.end.x - startX;
        var height = area.end.y - startY;
        this.context.clearRect(startX, startY, width, height);
    };
    Drawer.prototype.rectangle = function (_a) {
        var _b = _a.fillStyle, fillStyle = _b === void 0 ? 'red' : _b, _c = _a.lineWidth, lineWidth = _c === void 0 ? 1 : _c, _d = _a.strokeStyle, strokeStyle = _d === void 0 ? 'transparent' : _d, _rectangle = _a.rectangle, _e = _a.zoomLevel, zoomLevel = _e === void 0 ? 1 : _e, _f = _a.offset, offset = _f === void 0 ? new vectors_1.Vector() : _f;
        var rectangle = (_rectangle instanceof rectangle_1.DimensionsRectangle ? _rectangle.toRectangle() : _rectangle)
            .clone()
            .multiply(new vectors_1.Vector({
            x: zoomLevel,
            y: zoomLevel,
        }))
            .add(offset);
        this.context.strokeStyle = strokeStyle;
        this.context.lineWidth = lineWidth;
        this.context.fillStyle = fillStyle;
        this.context.beginPath();
        this.context.rect(rectangle.start.x, rectangle.start.y, rectangle.width, rectangle.height);
        this.context.fill();
        this.context.stroke();
    };
    Drawer.prototype.line = function (_a) {
        var _from = _a.from, _to = _a.to, _b = _a.strokeStyle, strokeStyle = _b === void 0 ? 'black' : _b, _c = _a.lineWidth, lineWidth = _c === void 0 ? 1 : _c, _d = _a.zoomLevel, zoomLevel = _d === void 0 ? 1 : _d, _e = _a.offset, offset = _e === void 0 ? new vectors_1.Vector() : _e;
        var from = _from
            .clone()
            .multiply(new vectors_1.Vector({ x: zoomLevel, y: zoomLevel }))
            .add(offset);
        var to = _to
            .clone()
            .multiply(new vectors_1.Vector({ x: zoomLevel, y: zoomLevel }))
            .add(offset);
        this.context.strokeStyle = strokeStyle;
        this.context.lineWidth = lineWidth;
        this.context.beginPath();
        this.context.moveTo(from.x, from.y);
        this.context.lineTo(to.x, to.y);
        this.context.stroke();
    };
    Drawer.prototype.getTextLines = function (options) {
        var _a = Drawer.mergeWithDefaultTextOptions(options), fontFamily = _a.fontFamily, _fontSize = _a.fontSize, _padding = _a.padding;
        var text = options.text, _rectangle = options.rectangle, _b = options.zoomLevel, zoomLevel = _b === void 0 ? 1 : _b;
        var fontSize = _fontSize * zoomLevel;
        var padding = _fontSize * _padding;
        this.context.font = "".concat(fontSize, "px ").concat(fontFamily);
        this.context.textAlign = 'left';
        this.context.textBaseline = 'top';
        var rectangle = (_rectangle instanceof rectangle_1.DimensionsRectangle ? _rectangle.toRectangle() : _rectangle)
            .clone()
            .multiply(new vectors_1.Vector({
            x: zoomLevel,
            y: zoomLevel,
        }));
        var widthToFitText = rectangle.width - padding * 2;
        var lines = [];
        var characterCount = text.length;
        var buffer = '';
        var previousBuffer = '';
        for (var i = 0; i < characterCount; i++) {
            var character = text[i];
            previousBuffer = buffer;
            buffer += character;
            var bufferWidth = this.context.measureText(buffer).width;
            if (character === '\n') {
                lines.push(previousBuffer);
                buffer = '';
            }
            else if (bufferWidth > widthToFitText) {
                lines.push(previousBuffer);
                buffer = '';
                i--;
            }
        }
        if (buffer) {
            lines.push(buffer);
        }
        return lines;
    };
    Drawer.prototype.textLinesAfterPoint = function (options) {
        var _this = this;
        var _position = options.position, lines = options.lines, fontFamily = options.fontFamily, _a = options.offset, offset = _a === void 0 ? new vectors_1.Vector() : _a, _b = options.zoomLevel, zoomLevel = _b === void 0 ? 1 : _b;
        var _c = Drawer.mergeWithDefaultTextOptions(options), _lineHeight = _c.lineHeight, _padding = _c.padding, _fontSize = _c.fontSize;
        var lineHeight = _lineHeight * zoomLevel;
        var padding = _padding * zoomLevel;
        var fontSize = _fontSize * zoomLevel;
        var lineHeightOffset = lineHeight / fontSize;
        var position = _position
            .clone()
            .multiply(new vectors_1.Vector({
            x: zoomLevel,
            y: zoomLevel,
        }))
            .add(offset);
        this.context.fillStyle = 'black';
        this.context.font = "".concat(fontSize, "px ").concat(fontFamily);
        this.context.textAlign = 'left';
        this.context.textBaseline = 'top';
        var topOffset = 0;
        lines.forEach(function (line) {
            _this.context.fillText(line, position.x + padding, position.y + padding + lineHeightOffset + topOffset);
            topOffset += lineHeight;
        });
    };
    Drawer.prototype.textInRectangle = function (options) {
        var lines = this.getTextLines(options);
        var _rectangle = options.rectangle;
        var rectangle = _rectangle instanceof rectangle_1.DimensionsRectangle ? _rectangle.toRectangle() : _rectangle;
        this.textLinesAfterPoint(__assign(__assign({}, options), { position: rectangle.start, lines: lines }));
    };
    Drawer.prototype.textAfterPoint = function (options) {
        var _position = options.position, text = options.text, _a = options.offset, offset = _a === void 0 ? new vectors_1.Vector() : _a, _b = options.zoomLevel, zoomLevel = _b === void 0 ? 1 : _b;
        var position = _position
            .clone()
            .multiply(new vectors_1.Vector({
            x: zoomLevel,
            y: zoomLevel,
        }))
            .add(offset);
        var _c = Drawer.mergeWithDefaultTextOptions(options), padding = _c.padding, _fontSize = _c.fontSize, fontFamily = _c.fontFamily;
        var fontSize = _fontSize * zoomLevel;
        this.context.fillStyle = 'black';
        this.context.font = "".concat(fontSize, "px ").concat(fontFamily);
        this.context.textAlign = 'left';
        this.context.textBaseline = 'top';
        this.context.fillText(text, position.x + padding, position.y + padding);
    };
    Drawer.prototype.cursor = function (type) {
        this.context.canvas.style.cursor = type;
    };
    Drawer.prototype.dimensions = function (_a) {
        var width = _a.width, height = _a.height;
        this.context.canvas.width = width;
        this.context.canvas.height = height;
    };
    return Drawer;
}());
exports.Drawer = Drawer;


/***/ }),

/***/ "./src/rendering/drawer/DrawerInterface.ts":
/*!*************************************************!*\
  !*** ./src/rendering/drawer/DrawerInterface.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CursorType = void 0;
var CursorType;
(function (CursorType) {
    CursorType["Default"] = "default";
    CursorType["Grab"] = "grab";
})(CursorType = exports.CursorType || (exports.CursorType = {}));


/***/ }),

/***/ "./src/rendering/drawer/index.ts":
/*!***************************************!*\
  !*** ./src/rendering/drawer/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Drawer */ "./src/rendering/drawer/Drawer.ts"), exports);
__exportStar(__webpack_require__(/*! ./DrawerInterface */ "./src/rendering/drawer/DrawerInterface.ts"), exports);


/***/ }),

/***/ "./src/rendering/index.ts":
/*!********************************!*\
  !*** ./src/rendering/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./drawer */ "./src/rendering/drawer/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./renderer */ "./src/rendering/renderer/index.ts"), exports);


/***/ }),

/***/ "./src/rendering/renderer/RendererInterface.ts":
/*!*****************************************************!*\
  !*** ./src/rendering/renderer/RendererInterface.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/rendering/renderer/Renrerer.ts":
/*!********************************************!*\
  !*** ./src/rendering/renderer/Renrerer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Renderer = void 0;
var Renderer = /** @class */ (function () {
    function Renderer() {
        this.lastAnimation = Date.now();
        this.fps = 60;
        this.fpsInterval = 1000 / this.fps;
        this.animationCallbacks = [];
        this.animate();
    }
    Renderer.prototype.animate = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.animate(); });
        var now = Date.now();
        var elapsed = now - this.lastAnimation;
        if (elapsed > this.fpsInterval) {
            this.lastAnimation = now - (elapsed % this.fpsInterval);
            this.animationCallbacks.forEach(function (callback) { return callback(elapsed); });
        }
    };
    Renderer.prototype.onAnimate = function (callback) {
        this.animationCallbacks.push(callback);
    };
    return Renderer;
}());
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/rendering/renderer/index.ts":
/*!*****************************************!*\
  !*** ./src/rendering/renderer/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./RendererInterface */ "./src/rendering/renderer/RendererInterface.ts"), exports);
__exportStar(__webpack_require__(/*! ./Renrerer */ "./src/rendering/renderer/Renrerer.ts"), exports);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extendedClickHandler = exports.DragMode = void 0;
var vectors_1 = __webpack_require__(/*! ../../math/vectors */ "./src/math/vectors/index.ts");
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
                options.onMouseDown(event);
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
                        var dragStartData = {
                            startedAt: dragData.startedAt,
                        };
                        if (options.debug) {
                            console.log('Drag start', dragStartData);
                        }
                        if (options.onDragStart) {
                            options.onDragStart(event, dragStartData);
                        }
                        shouldCallDragStartCallback = false;
                    }
                    if (options.debug) {
                        console.log(isDoubleMouseDown ? 'Double click mode drag' : 'Click mode drag', dragData);
                    }
                    if (options.onDrag) {
                        options.onDrag(event, dragData);
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
                options.onDragEnd(event, dragData);
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
            options.onMouseUp(event, dragData);
        }
    });
    element.addEventListener('click', function (event) {
        var clickTime = new Date().getTime();
        var timePassed = clickTime - lastClickTime;
        isDoubleClick = timePassed < options.doubleClickThreshold;
        lastClickTime = clickTime;
        if (shouldSilenceClick) {
            shouldSilenceClick = false;
            return;
        }
        if (isDoubleClick) {
            if (options.debug) {
                console.log('Double click', (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, element));
            }
            if (options.onDoubleClick) {
                options.onDoubleClick(event);
            }
        }
        else if (!isDoubleClick) {
            if (options.debug) {
                console.log('Click', (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, element));
            }
            if (options.onClick) {
                options.onClick(event);
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
                startedAt: new vectors_1.Vector(),
                totalDelta: new vectors_1.Vector(),
                delta: new vectors_1.Vector(),
            };
        }
        var pointFromLastMouseDown = (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(lastMouseDownEvent, element);
        var pointFromLastDrag = lastDragEvent ? (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(lastDragEvent, element) : undefined;
        var currentPoint = (0, getPositionFromMouseEvent_1.getPositionFromMouseEvent)(event, element);
        return {
            startedAt: currentPoint,
            totalDelta: currentPoint.clone().substract(pointFromLastMouseDown),
            delta: currentPoint.clone().substract(pointFromLastDrag || pointFromLastMouseDown),
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
var vectors_1 = __webpack_require__(/*! ../../math/vectors */ "./src/math/vectors/index.ts");
var getPositionFromMouseEvent = function (event, container) {
    var viewportMousePosition = new vectors_1.Vector({
        x: event.pageX,
        y: event.pageY,
    });
    var boundingRect = container.getBoundingClientRect();
    var topLeftContainerPosition = new vectors_1.Vector({
        x: boundingRect.left,
        y: boundingRect.top,
    });
    return viewportMousePosition.substract(topLeftContainerPosition);
};
exports.getPositionFromMouseEvent = getPositionFromMouseEvent;


/***/ }),

/***/ "./src/utils/dom/index.ts":
/*!********************************!*\
  !*** ./src/utils/dom/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./extendedClickHandler */ "./src/utils/dom/extendedClickHandler.ts"), exports);
__exportStar(__webpack_require__(/*! ./getPositionFromMouseEvent */ "./src/utils/dom/getPositionFromMouseEvent.ts"), exports);


/***/ }),

/***/ "./src/utils/getRandomInteger.ts":
/*!***************************************!*\
  !*** ./src/utils/getRandomInteger.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRandomInteger = void 0;
var getRandomInteger = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
exports.getRandomInteger = getRandomInteger;


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

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./getRandomInteger */ "./src/utils/getRandomInteger.ts"), exports);
__exportStar(__webpack_require__(/*! ./idGenerator */ "./src/utils/idGenerator.ts"), exports);


/***/ }),

/***/ "./src/utils/keyboard/index.ts":
/*!*************************************!*\
  !*** ./src/utils/keyboard/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./keyboard */ "./src/utils/keyboard/keyboard.ts"), exports);


/***/ }),

/***/ "./src/utils/keyboard/keyboard.ts":
/*!****************************************!*\
  !*** ./src/utils/keyboard/keyboard.ts ***!
  \****************************************/
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
exports.onKeyPressed = exports.onKeyUp = exports.onKeysDown = exports.onKeyDown = exports.isKeyPressed = exports.KEYS = void 0;
var platform_1 = __webpack_require__(/*! ../platform */ "./src/utils/platform/index.ts");
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
                isPressed = (0, platform_1.isMac)() ? keyCode === KEYS.meta : keyCode === KEYS.control;
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
var keyDownCallbacks = {};
// Todo migrate to Map
var keysDownCallbacks = {};
var keyUpCallbacks = {};
var keyPressCallbacks = {};
var onKeyDown = function (key, callback) {
    if (!keyDownCallbacks[key]) {
        keyDownCallbacks[key] = [];
    }
    keyDownCallbacks[key].push(callback);
};
exports.onKeyDown = onKeyDown;
var onKeysDown = function (_keys, callback) {
    var keysToken = __spreadArray([], __read(_keys), false).sort().join('-');
    if (!keysDownCallbacks[keysToken]) {
        keysDownCallbacks[keysToken] = [];
    }
    keysDownCallbacks[keysToken].push(callback);
};
exports.onKeysDown = onKeysDown;
var onKeyUp = function (key, callback) {
    if (!keyUpCallbacks[key]) {
        keyUpCallbacks[key] = [];
    }
    keyUpCallbacks[key].push(callback);
};
exports.onKeyUp = onKeyUp;
var onKeyPressed = function (key, callback) {
    if (!keyPressCallbacks[key]) {
        keyPressCallbacks[key] = [];
    }
    keyPressCallbacks[key].push(callback);
};
exports.onKeyPressed = onKeyPressed;
function listenKeyboard(debug) {
    if (debug === void 0) { debug = false; }
    if (areKeyboardListenersAttached) {
        return;
    }
    areKeyboardListenersAttached = true;
    document.addEventListener('keydown', function (event) {
        var keyCode = event.which || event.keyCode;
        globallyPressedKeys.set(keyCode, keyCode);
        if (debug) {
            console.log('Key down', keyCode, getKeyName(keyCode), globallyPressedKeys);
        }
        if (keyDownCallbacks[keyCode]) {
            keyDownCallbacks[keyCode].forEach(function (callback) { return callback(event); });
        }
        for (var token in keysDownCallbacks) {
            var callbacks = keysDownCallbacks[token];
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
                callbacks.forEach(function (callback) {
                    callback(event);
                });
            }
        }
    });
    document.addEventListener('keyup', function (event) {
        var keyCode = event.which || event.keyCode;
        globallyPressedKeys.delete(keyCode);
        if (debug) {
            console.log('Key up', keyCode, getKeyName(keyCode), globallyPressedKeys);
        }
        if (keyUpCallbacks[keyCode]) {
            keyUpCallbacks[keyCode].forEach(function (callback) { return callback(event); });
        }
        if (keyPressCallbacks[keyCode]) {
            keyPressCallbacks[keyCode].forEach(function (callback) { return callback(event); });
        }
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

/***/ "./src/utils/platform/index.ts":
/*!*************************************!*\
  !*** ./src/utils/platform/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./isMac */ "./src/utils/platform/isMac.ts"), exports);


/***/ }),

/***/ "./src/utils/platform/isMac.ts":
/*!*************************************!*\
  !*** ./src/utils/platform/isMac.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isMac = void 0;
var isMac = function () { return window.navigator.platform.toUpperCase().indexOf('MAC') >= 0; };
exports.isMac = isMac;


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
var board_1 = __webpack_require__(/*! ./board */ "./src/board/index.ts");
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
(0, board_1.boot)(canvasContext, containerElement);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBRUYsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pCLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6QixXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QixXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM1QyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFNUMsZ0NBQWdDO0FBRWhDLGdCQUFJLEVBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvYm9vdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvY29tcG9uZW50cy9ib2FyZEN1cnNvci9Cb2FyZEN1cnNvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvY29tcG9uZW50cy9ib2FyZEN1cnNvci9Cb2FyZEN1cnNvckludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvY29tcG9uZW50cy9ib2FyZEN1cnNvci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvY29tcG9uZW50cy9ib2FyZFNlbGVjdGlvbi9Cb2FyZFNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvY29tcG9uZW50cy9ib2FyZFNlbGVjdGlvbi9Cb2FyZFNlbGVjdGlvbkludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvY29tcG9uZW50cy9ib2FyZFNlbGVjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvY29tcG9uZW50cy9ib2FyZFRleHRFZGl0b3IvQm9hcmRUZXh0RWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9jb21wb25lbnRzL2JvYXJkVGV4dEVkaXRvci9Cb2FyZFRleHRFZGl0b3JJbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL2NvbXBvbmVudHMvYm9hcmRUZXh0RWRpdG9yL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9jb250cm9sbGVycy9Cb2FyZEJveGVzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvY29udHJvbGxlcnMvQm9hcmRDdXJzb3JDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9jb250cm9sbGVycy9Cb2FyZFJlbmRlckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL2NvbnRyb2xsZXJzL0JvYXJkU2VsZWN0aW9uQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvY29udHJvbGxlcnMvQm9hcmRWaWV3cG9ydENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL2NvbnRyb2xsZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvcmVuZGVyaW5nL2JvYXJkQm94ZXNEcmF3ZXIvQm9hcmRCb3hlc0RyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvcmVuZGVyaW5nL2JvYXJkQm94ZXNEcmF3ZXIvQm9hcmRCb3hlc0RyYXdlckludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvcmVuZGVyaW5nL2JvYXJkQm94ZXNEcmF3ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL3JlbmRlcmluZy9ib2FyZERyYXdlci9Cb2FyZERyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvcmVuZGVyaW5nL2JvYXJkRHJhd2VyL0JvYXJkRHJhd2VySW50ZXJmYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9yZW5kZXJpbmcvYm9hcmREcmF3ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL3JlbmRlcmluZy9kZWJ1Z0RyYXdlci9EZWJ1Z0RyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvcmVuZGVyaW5nL2RlYnVnRHJhd2VyL0RlYnVnRHJhd2VySW50ZXJmYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9yZW5kZXJpbmcvZGVidWdEcmF3ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL3JlbmRlcmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvc3RvcmVzL2JvYXJkQm94ZXNTdG9yZS9Cb2FyZEJveGVzU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL3N0b3Jlcy9ib2FyZEJveGVzU3RvcmUvQm9hcmRCb3hlc1N0b3JlSW50ZXJmYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9zdG9yZXMvYm9hcmRCb3hlc1N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9zdG9yZXMvYm9hcmRWaWV3cG9ydFN0b3JlL0JvYXJkVmlld3BvcnRTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvc3RvcmVzL2JvYXJkVmlld3BvcnRTdG9yZS9Cb2FyZFZpZXdwb3J0U3RvcmVJbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL3N0b3Jlcy9ib2FyZFZpZXdwb3J0U3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkL3N0b3Jlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jdXJzb3IvQ3Vyc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2N1cnNvci9DdXJzb3JJbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY3Vyc29yL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlbGVjdGlvbi9TZWxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0aW9uL1NlbGVjdGlvbkludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWxlY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGV4dEVkaXRvci9UZXh0RWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRFZGl0b3IvVGV4dEVkaXRvckludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0RWRpdG9yL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdGllcy9ib3gvQm94LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdGllcy9ib3gvQm94SW50ZXJmYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdGllcy9ib3gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0aWVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdGllcy9yZWxhdGlvbi9SZWxhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXRpZXMvcmVsYXRpb24vUmVsYXRpb25JbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0aWVzL3JlbGF0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL2NvbnZlcnRSYWRpYW5zVG9EZWdyZWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3BvbHlnb24vUG9seWdvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9wb2x5Z29uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3BvbHlnb24vaW50ZXJzZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3BvbHlnb24vdG91Y2hlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9yZWN0YW5nbGUvRGltZW5zaW9uc1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9yZWN0YW5nbGUvUmVjdGFuZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3JlY3RhbmdsZS9jb250YWlucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9yZWN0YW5nbGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvcmVjdGFuZ2xlL2ludGVyc2VjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvcmVjdGFuZ2xlL2lzUG9pbnRJbnNpZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvcmVjdGFuZ2xlL292ZXJsYXBzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3JlY3RhbmdsZS90b3VjaGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcnMvVmVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcnMvYWRkLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcnMvYW5nbGVCZXR3ZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcnMvYXJlUGFyYWxsZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvdmVjdG9ycy9jZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvdmVjdG9ycy9kZXZpZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvdmVjdG9ycy9kb3RQcm9kdWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvdmVjdG9ycy9tYWduaXR1ZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvdmVjdG9ycy9tdWx0aXBseS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC92ZWN0b3JzL25vcm1hbGl6ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC92ZWN0b3JzL3N1YnRyYWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJpbmcvZHJhd2VyL0RyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyaW5nL2RyYXdlci9EcmF3ZXJJbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmluZy9kcmF3ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyaW5nL3JlbmRlcmVyL1JlbmRlcmVySW50ZXJmYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJpbmcvcmVuZGVyZXIvUmVucmVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmluZy9yZW5kZXJlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tL2V4dGVuZGVkQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kb20vZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9nZXRSYW5kb21JbnRlZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pZEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2tleWJvYXJkL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9rZXlib2FyZC9rZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcGxhdGZvcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3BsYXRmb3JtL2lzTWFjLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3Vyc29yLCBTZWxlY3Rpb24sIFRleHRFZGl0b3IgfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmltcG9ydCB7IEJveEludGVyZmFjZSB9IGZyb20gJy4uL2VudGl0aWVzJztcbmltcG9ydCB7IERyYXdlciwgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXJpbmcnO1xuaW1wb3J0IHsgQm9hcmRDdXJzb3IsIEJvYXJkU2VsZWN0aW9uLCBCb2FyZFRleHRFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgQm9hcmRCb3hlc0NvbnRyb2xsZXIsXG4gIEJvYXJkQ3Vyc29yQ29udHJvbGxlcixcbiAgQm9hcmRSZW5kZXJDb250cm9sbGVyLFxuICBCb2FyZFNlbGVjdGlvbkNvbnRyb2xsZXIsXG4gIEJvYXJkVmlld3BvcnRDb250cm9sbGVyLFxufSBmcm9tICcuL2NvbnRyb2xsZXJzJztcbmltcG9ydCB7IEJvYXJkQm94ZXNEcmF3ZXIsIEJvYXJkRHJhd2VyLCBEZWJ1Z0RyYXdlciB9IGZyb20gJy4vcmVuZGVyaW5nJztcbmltcG9ydCB7IEJvYXJkQm94ZXNTdG9yZSwgQm9hcmRWaWV3cG9ydFN0b3JlIH0gZnJvbSAnLi9zdG9yZXMnO1xuXG5leHBvcnQgY29uc3QgYm9vdCA9IChjYW52YXNDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNhbnZhc0NvbnRleHQuY2FudmFzLmRyYWdnYWJsZSA9IGZhbHNlO1xuXG4gIC8vIFN0b3Jlc1xuICBjb25zdCBib2FyZFZpZXdwb3J0U3RvcmUgPSBuZXcgQm9hcmRWaWV3cG9ydFN0b3JlKCk7XG4gIGNvbnN0IGJvYXJkQm94ZXNTdG9yZSA9IG5ldyBCb2FyZEJveGVzU3RvcmUoKTtcblxuICAvLyBHbG9iYWwgY29tcG9uZW50c1xuICBjb25zdCBjdXJzb3IgPSBuZXcgQ3Vyc29yKGNvbnRhaW5lckVsZW1lbnQpO1xuICBjb25zdCBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKGN1cnNvcik7XG4gIGNvbnN0IHRleHRFZGl0b3IgPSBuZXcgVGV4dEVkaXRvcihjb250YWluZXJFbGVtZW50KTtcblxuICAvLyBCb2FyZCBjb21wb25lbnRzXG4gIGNvbnN0IGJvYXJkQ3Vyc29yID0gbmV3IEJvYXJkQ3Vyc29yKHtcbiAgICBjdXJzb3IsXG4gICAgZ2V0Qm94QnlQb3NpdGlvbjogKHBvc2l0aW9uLCB6b29tTGV2ZWwpID0+IGJvYXJkQm94ZXNTdG9yZS5nZXRCb3hCeVBvc2l0aW9uKHBvc2l0aW9uLCB6b29tTGV2ZWwpLFxuICAgIGJvYXJkVmlld3BvcnRTdG9yZSxcbiAgfSk7XG4gIGNvbnN0IGJvYXJkU2VsZWN0aW9uID0gbmV3IEJvYXJkU2VsZWN0aW9uKHsgc2VsZWN0aW9uLCBnZXRPZmZzZXQ6ICgpID0+IGJvYXJkVmlld3BvcnRTdG9yZS5vZmZzZXQgfSk7XG4gIGNvbnN0IGJvYXJkVGV4dEVkaXRvciA9IG5ldyBCb2FyZFRleHRFZGl0b3IoeyB0ZXh0RWRpdG9yIH0pO1xuXG4gIC8vIFJlbmRlcmluZ1xuICBjb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuICBjb25zdCBkcmF3ZXIgPSBuZXcgRHJhd2VyKGNhbnZhc0NvbnRleHQpO1xuICAvLyBNdXN0IGdvIGJlZm9yZSBib3ggZHJhd2VyXG4gIGNvbnN0IGJvYXJkRHJhd2VyID0gbmV3IEJvYXJkRHJhd2VyKHtcbiAgICBkcmF3ZXIsXG4gICAgYm9hcmRWaWV3cG9ydFN0b3JlLFxuICB9KTtcbiAgY29uc3QgYm9hcmRCb3hlc0RyYXdlciA9IG5ldyBCb2FyZEJveGVzRHJhd2VyKHtcbiAgICBkcmF3ZXIsXG4gICAgYm9hcmRCb3hlc1N0b3JlLFxuICAgIGJvYXJkVmlld3BvcnRTdG9yZSxcbiAgfSk7XG4gIGNvbnN0IGRlYnVnRHJhd2VyID0gbmV3IERlYnVnRHJhd2VyKHtcbiAgICBkcmF3ZXIsXG4gICAgYm9hcmRWaWV3cG9ydFN0b3JlLFxuICB9KTtcblxuICAvLyBDb250cm9sbGVyc1xuICBuZXcgQm9hcmRCb3hlc0NvbnRyb2xsZXIoe1xuICAgIGdldFNlbGVjdGVkQm94ZXM6ICgpID0+IGJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzLFxuICAgIGRlbGV0ZUJveDogKGJveDogQm94SW50ZXJmYWNlKSA9PiBib2FyZEJveGVzU3RvcmUuZGVsZXRlKGJveCksXG4gICAgYm9hcmRUZXh0RWRpdG9yLFxuICB9KTtcbiAgbmV3IEJvYXJkVmlld3BvcnRDb250cm9sbGVyKHsgYm9hcmRWaWV3cG9ydFN0b3JlLCBib2FyZEN1cnNvciB9KTtcbiAgbmV3IEJvYXJkQ3Vyc29yQ29udHJvbGxlcih7XG4gICAgYm9hcmRCb3hlc1N0b3JlLFxuICAgIGJvYXJkQ3Vyc29yLFxuICAgIGJvYXJkVGV4dEVkaXRvcixcbiAgICBib2FyZFNlbGVjdGlvbixcbiAgICBnZXRab29tTGV2ZWw6ICgpID0+IGJvYXJkVmlld3BvcnRTdG9yZS56b29tTGV2ZWwsXG4gIH0pO1xuICBuZXcgQm9hcmRTZWxlY3Rpb25Db250cm9sbGVyKHtcbiAgICBib2FyZFNlbGVjdGlvbixcbiAgICBib2FyZEJveGVzU3RvcmUsXG4gICAgYm9hcmRDdXJzb3IsXG4gICAgYm9hcmRWaWV3cG9ydFN0b3JlLFxuICB9KTtcbiAgbmV3IEJvYXJkUmVuZGVyQ29udHJvbGxlcih7XG4gICAgYm9hcmRCb3hlc0RyYXdlcixcbiAgICBib2FyZERyYXdlcixcbiAgICBkZWJ1Z0RyYXdlcixcbiAgICByZW5kZXJlcixcbiAgfSk7XG5cbiAgKHdpbmRvdyBhcyBhbnkpLmJ2cyA9IGJvYXJkVmlld3BvcnRTdG9yZTtcbiAgKHdpbmRvdyBhcyBhbnkpLmJicyA9IGJvYXJkQm94ZXNTdG9yZTtcbiAgKHdpbmRvdyBhcyBhbnkpLmMgPSBjdXJzb3I7XG4gICh3aW5kb3cgYXMgYW55KS5iYyA9IGJvYXJkQ3Vyc29yO1xufTtcbiIsImltcG9ydCB7IEN1cnNvckV2ZW50Q2FsbGJhY2ssIEN1cnNvckludGVyZmFjZSwgU2Nyb2xsRGF0YSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQm94SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vbWF0aC92ZWN0b3JzJztcbmltcG9ydCB7IERyYWdEYXRhLCBEcmFnU3RhcnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tJztcbmltcG9ydCB7IEJvYXJkVmlld3BvcnRTdG9yZUludGVyZmFjZSB9IGZyb20gJy4uLy4uL3N0b3Jlcyc7XG5pbXBvcnQgeyBCb2FyZEN1cnNvckludGVyZmFjZSB9IGZyb20gJy4vQm9hcmRDdXJzb3JJbnRlcmZhY2UnO1xuXG50eXBlIEJvYXJkQ3Vyc29yRGVwZW5kZW5jaWVzID0ge1xuICBjdXJzb3I6IEN1cnNvckludGVyZmFjZTtcbiAgZ2V0Qm94QnlQb3NpdGlvbjogKHBvc2l0aW9uOiBWZWN0b3IsIHpvb21MZXZlbDogbnVtYmVyKSA9PiBCb3hJbnRlcmZhY2UgfCB1bmRlZmluZWQ7XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlSW50ZXJmYWNlO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkQ3Vyc29yIGltcGxlbWVudHMgQm9hcmRDdXJzb3JJbnRlcmZhY2Uge1xuICBwcml2YXRlIGQ6IEJvYXJkQ3Vyc29yRGVwZW5kZW5jaWVzO1xuXG4gIHB1YmxpYyBjdXJzb3JPdmVyQm94PzogQm94SW50ZXJmYWNlO1xuICBwdWJsaWMgcHJldmlvdXNDdXJzb3JPdmVyQm94PzogQm94SW50ZXJmYWNlO1xuXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBWZWN0b3I7XG5cbiAgcHVibGljIGdldCBwb3NpdGlvbigpIHtcbiAgICB0aGlzLl9wb3NpdGlvbi51cGRhdGVGcm9tKHRoaXMuYWJzb2x1dGVQb3NpdGlvbi5jbG9uZSgpLnN1YnN0cmFjdCh0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLm9mZnNldCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBhYnNvbHV0ZVBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmQuY3Vyc29yLnBvc2l0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZDogQm9hcmRDdXJzb3JEZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLmQgPSBkO1xuXG4gICAgdGhpcy5fcG9zaXRpb24gPSB0aGlzLmQuY3Vyc29yLnBvc2l0aW9uLmNsb25lKCk7XG5cbiAgICB0aGlzLmQuY3Vyc29yLm9uTW92ZSgoKSA9PiB0aGlzLnN5bmNDdXJzb3JXaXRoU3RvcmUoKSk7XG4gICAgdGhpcy5kLmN1cnNvci5vbkRyYWdTdGFydCgoKSA9PiB0aGlzLmhhbmRsZURyYWdTdGFydCgpKTtcblxuICAgIC8vIFNoYXJlIHRvIGRyYXdlcnMuIEl0J3MgdXBkYXRlZCBhdXRvbWF0aWNhbGx5LlxuICAgIHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuY3Vyc29yUG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuICAgIHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuYWJzb2x1dGVDdXJzb3JQb3NpdGlvbiA9IHRoaXMuYWJzb2x1dGVQb3NpdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vdmUoY2FsbGJhY2s6IEN1cnNvckV2ZW50Q2FsbGJhY2spIHtcbiAgICB0aGlzLmQuY3Vyc29yLm9uTW92ZShjYWxsYmFjayk7XG4gIH1cblxuICBwdWJsaWMgb25Eb3duKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrKSB7XG4gICAgdGhpcy5kLmN1cnNvci5vbkRvd24oY2FsbGJhY2spO1xuICB9XG5cbiAgcHVibGljIG9uVGFwKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrKSB7XG4gICAgdGhpcy5kLmN1cnNvci5vblRhcChjYWxsYmFjayk7XG4gIH1cblxuICBwdWJsaWMgb25Eb3VibGVUYXAoY2FsbGJhY2s6IEN1cnNvckV2ZW50Q2FsbGJhY2spIHtcbiAgICB0aGlzLmQuY3Vyc29yLm9uRG91YmxlVGFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRyYWdTdGFydChjYWxsYmFjazogQ3Vyc29yRXZlbnRDYWxsYmFjazxbRHJhZ1N0YXJ0RGF0YV0+KSB7XG4gICAgdGhpcy5kLmN1cnNvci5vbkRyYWdTdGFydChjYWxsYmFjayk7XG4gIH1cblxuICBwdWJsaWMgb25EcmFnKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrPFtEcmFnRGF0YV0+KSB7XG4gICAgdGhpcy5kLmN1cnNvci5vbkRyYWcoY2FsbGJhY2spO1xuICB9XG5cbiAgcHVibGljIG9uVXAoY2FsbGJhY2s6IEN1cnNvckV2ZW50Q2FsbGJhY2s8W0RyYWdEYXRhXT4pIHtcbiAgICB0aGlzLmQuY3Vyc29yLm9uVXAoY2FsbGJhY2spO1xuICB9XG5cbiAgcHVibGljIG9uU2Nyb2xsKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrPFtTY3JvbGxEYXRhXT4pIHtcbiAgICB0aGlzLmQuY3Vyc29yLm9uU2Nyb2xsKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHB1YmxpYyBzeW5jQ3Vyc29yV2l0aFN0b3JlKCkge1xuICAgIHRoaXMucHJldmlvdXNDdXJzb3JPdmVyQm94ID0gdGhpcy5jdXJzb3JPdmVyQm94O1xuICAgIHRoaXMuY3Vyc29yT3ZlckJveCA9IHRoaXMuZC5nZXRCb3hCeVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuem9vbUxldmVsKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRHJhZ1N0YXJ0KCkge1xuICAgIGlmICghdGhpcy5jdXJzb3JPdmVyQm94KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDdXJzb3JFdmVudENhbGxiYWNrLCBTY3JvbGxEYXRhIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCb3hJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9tYXRoL3ZlY3RvcnMnO1xuaW1wb3J0IHsgRHJhZ0RhdGEsIERyYWdTdGFydERhdGEgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kb20nO1xuXG5leHBvcnQgdHlwZSBCb2FyZEN1cnNvckludGVyZmFjZSA9IHtcbiAgY3Vyc29yT3ZlckJveD86IEJveEludGVyZmFjZTtcbiAgcHJldmlvdXNDdXJzb3JPdmVyQm94PzogQm94SW50ZXJmYWNlO1xuICBwb3NpdGlvbjogVmVjdG9yO1xuICBhYnNvbHV0ZVBvc2l0aW9uOiBWZWN0b3I7XG5cbiAgb25Nb3ZlOiAoY2FsbGJhY2s6IEN1cnNvckV2ZW50Q2FsbGJhY2spID0+IHZvaWQ7XG4gIG9uRG93bjogKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrKSA9PiB2b2lkO1xuICBvblRhcDogKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrKSA9PiB2b2lkO1xuICBvbkRvdWJsZVRhcDogKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrKSA9PiB2b2lkO1xuICBvbkRyYWdTdGFydDogKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrPFtEcmFnU3RhcnREYXRhXT4pID0+IHZvaWQ7XG4gIG9uRHJhZzogKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrPFtEcmFnRGF0YV0+KSA9PiB2b2lkO1xuICBvblVwOiAoY2FsbGJhY2s6IEN1cnNvckV2ZW50Q2FsbGJhY2s8W0RyYWdEYXRhXT4pID0+IHZvaWQ7XG4gIG9uU2Nyb2xsOiAoY2FsbGJhY2s6IEN1cnNvckV2ZW50Q2FsbGJhY2s8W1Njcm9sbERhdGFdPikgPT4gdm9pZDtcbiAgc3luY0N1cnNvcldpdGhTdG9yZTogKCkgPT4gdm9pZDtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL0JvYXJkQ3Vyc29yJztcbmV4cG9ydCAqIGZyb20gJy4vQm9hcmRDdXJzb3JJbnRlcmZhY2UnO1xuIiwiaW1wb3J0IHsgU2VsZWN0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTZWxlY3Rpb25FdmVudENhbGxiYWNrIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi8uLi8uLi9tYXRoL3JlY3RhbmdsZSc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9tYXRoL3ZlY3RvcnMnO1xuaW1wb3J0IHsgQm9hcmRTZWxlY3Rpb25JbnRlcmZhY2UgfSBmcm9tICcuL0JvYXJkU2VsZWN0aW9uSW50ZXJmYWNlJztcblxudHlwZSBCb2FyZFNlbGVjdGlvbkRlcGVuZGVuY2llcyA9IHtcbiAgc2VsZWN0aW9uOiBTZWxlY3Rpb25JbnRlcmZhY2U7XG4gIGdldE9mZnNldDogKCkgPT4gVmVjdG9yO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkU2VsZWN0aW9uIGltcGxlbWVudHMgQm9hcmRTZWxlY3Rpb25JbnRlcmZhY2Uge1xuICBwcml2YXRlIGQ6IEJvYXJkU2VsZWN0aW9uRGVwZW5kZW5jaWVzO1xuXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRBcmVhKCkge1xuICAgIHJldHVybiB0aGlzLmQuc2VsZWN0aW9uLnNlbGVjdGVkQXJlYVxuICAgICAgPyBuZXcgUmVjdGFuZ2xlKFxuICAgICAgICAgIHRoaXMuZC5zZWxlY3Rpb24uc2VsZWN0ZWRBcmVhLnN0YXJ0LmNsb25lKCkuc3Vic3RyYWN0KHRoaXMuZC5nZXRPZmZzZXQoKSksXG4gICAgICAgICAgdGhpcy5kLnNlbGVjdGlvbi5zZWxlY3RlZEFyZWEuZW5kLmNsb25lKCkuc3Vic3RyYWN0KHRoaXMuZC5nZXRPZmZzZXQoKSksXG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZDogQm9hcmRTZWxlY3Rpb25EZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLmQgPSBkO1xuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0KGNhbGxiYWNrOiBTZWxlY3Rpb25FdmVudENhbGxiYWNrPFtSZWN0YW5nbGVdPikge1xuICAgIHRoaXMuZC5zZWxlY3Rpb24ub25TZWxlY3QoY2FsbGJhY2spO1xuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0RW5kKGNhbGxiYWNrOiBTZWxlY3Rpb25FdmVudENhbGxiYWNrPFtSZWN0YW5nbGVdPikge1xuICAgIHRoaXMuZC5zZWxlY3Rpb24ub25TZWxlY3RFbmQoY2FsbGJhY2spO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTZWxlY3Rpb25FdmVudENhbGxiYWNrIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi8uLi8uLi9tYXRoL3JlY3RhbmdsZSc7XG5cbmV4cG9ydCB0eXBlIEJvYXJkU2VsZWN0aW9uSW50ZXJmYWNlID0ge1xuICBzZWxlY3RlZEFyZWE/OiBSZWN0YW5nbGU7XG5cbiAgb25TZWxlY3Q6IChjYWxsYmFjazogU2VsZWN0aW9uRXZlbnRDYWxsYmFjazxbUmVjdGFuZ2xlXT4pID0+IHZvaWQ7XG4gIG9uU2VsZWN0RW5kOiAoY2FsbGJhY2s6IFNlbGVjdGlvbkV2ZW50Q2FsbGJhY2s8W1JlY3RhbmdsZV0+KSA9PiB2b2lkO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vQm9hcmRTZWxlY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9Cb2FyZFNlbGVjdGlvbkludGVyZmFjZSc7XG4iLCJpbXBvcnQgeyBDaGFuZ2VFdmVudCwgSGVpZ2h0Q2hhbmdlQ2FsbGJhY2ssIFRleHRFZGl0b3JJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzJztcbmltcG9ydCB7IEJveEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJvYXJkVGV4dEVkaXRvckludGVyZmFjZSB9IGZyb20gJy4vQm9hcmRUZXh0RWRpdG9ySW50ZXJmYWNlJztcblxudHlwZSBCb2FyZFRleHRFZGl0b3JEZXBlbmRlbmNpZXMgPSB7XG4gIHRleHRFZGl0b3I6IFRleHRFZGl0b3JJbnRlcmZhY2U7XG59O1xuXG5leHBvcnQgY2xhc3MgQm9hcmRUZXh0RWRpdG9yIGltcGxlbWVudHMgQm9hcmRUZXh0RWRpdG9ySW50ZXJmYWNlIHtcbiAgcHJpdmF0ZSBkOiBCb2FyZFRleHRFZGl0b3JEZXBlbmRlbmNpZXM7XG5cbiAgcHVibGljIHNob3dGb3JCb3g/OiBCb3hJbnRlcmZhY2U7XG5cbiAgY29uc3RydWN0b3IoZDogQm9hcmRUZXh0RWRpdG9yRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcblxuICAgIHRoaXMuZC50ZXh0RWRpdG9yLm9uSW5wdXQoKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0KGV2ZW50KSk7XG4gIH1cblxuICBwdWJsaWMgc2hvd0F0KGJveDogQm94SW50ZXJmYWNlKSB7XG4gICAgdGhpcy5zaG93Rm9yQm94ID0gYm94O1xuICAgIHRoaXMuZC50ZXh0RWRpdG9yLndpZHRoID0gYm94LndpZHRoO1xuICAgIHRoaXMuZC50ZXh0RWRpdG9yLmhlaWdodCA9IGJveC5oZWlnaHQ7XG4gICAgdGhpcy5kLnRleHRFZGl0b3Iuc2hvd0F0KGJveC5wb3NpdGlvbik7XG4gICAgdGhpcy5kLnRleHRFZGl0b3IuY29udGVudCA9IGJveC5jb250ZW50O1xuICB9XG5cbiAgcHVibGljIGhpZGUoKSB7XG4gICAgdGhpcy5zaG93Rm9yQm94ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZC50ZXh0RWRpdG9yLmhpZGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkhlaWdodENoYW5nZShjYWxsYmFjazogSGVpZ2h0Q2hhbmdlQ2FsbGJhY2spIHtcbiAgICB0aGlzLmQudGV4dEVkaXRvci5vbkhlaWdodENoYW5nZShjYWxsYmFjayk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUlucHV0KGV2ZW50OiBDaGFuZ2VFdmVudCkge1xuICAgIGlmICghdGhpcy5zaG93Rm9yQm94KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuICh0aGlzLnNob3dGb3JCb3guY29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhlaWdodENoYW5nZUNhbGxiYWNrIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCb3hJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9lbnRpdGllcyc7XG5cbmV4cG9ydCB0eXBlIEJvYXJkVGV4dEVkaXRvckludGVyZmFjZSA9IHtcbiAgc2hvd0ZvckJveD86IEJveEludGVyZmFjZTtcblxuICBzaG93QXQ6IChib3g6IEJveEludGVyZmFjZSkgPT4gdm9pZDtcbiAgaGlkZTogKCkgPT4gdm9pZDtcbiAgb25IZWlnaHRDaGFuZ2U6IChjYWxsYmFjazogSGVpZ2h0Q2hhbmdlQ2FsbGJhY2spID0+IHZvaWQ7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9Cb2FyZFRleHRFZGl0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9Cb2FyZFRleHRFZGl0b3JJbnRlcmZhY2UnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9ib2FyZEN1cnNvcic7XG5leHBvcnQgKiBmcm9tICcuL2JvYXJkU2VsZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vYm9hcmRUZXh0RWRpdG9yJztcbiIsImltcG9ydCB7IEhlaWdodERhdGEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcbmltcG9ydCB7IEJveEludGVyZmFjZSB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEtFWVMsIG9uS2V5UHJlc3NlZCB9IGZyb20gJy4uLy4uL3V0aWxzL2tleWJvYXJkJztcbmltcG9ydCB7IEJvYXJkVGV4dEVkaXRvckludGVyZmFjZSB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG50eXBlIEJvYXJkQm94ZXNDb250cm9sbGVyRGVwZW5kZW5jaWVzID0ge1xuICBib2FyZFRleHRFZGl0b3I6IEJvYXJkVGV4dEVkaXRvckludGVyZmFjZTtcbiAgZ2V0U2VsZWN0ZWRCb3hlczogKCkgPT4gTWFwPG51bWJlciwgQm94SW50ZXJmYWNlPjtcbiAgZGVsZXRlQm94OiAoYm94OiBCb3hJbnRlcmZhY2UpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY2xhc3MgQm9hcmRCb3hlc0NvbnRyb2xsZXIge1xuICBwcml2YXRlIGQ6IEJvYXJkQm94ZXNDb250cm9sbGVyRGVwZW5kZW5jaWVzO1xuXG4gIGNvbnN0cnVjdG9yKGQ6IEJvYXJkQm94ZXNDb250cm9sbGVyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcblxuICAgIHRoaXMuZC5ib2FyZFRleHRFZGl0b3Iub25IZWlnaHRDaGFuZ2UoKGV2ZW50LCBkYXRhKSA9PiB0aGlzLmhhbmRsZUhlaWdodENoYW5nZShkYXRhKSk7XG5cbiAgICBvbktleVByZXNzZWQoS0VZUy5kZWxldGUsICgpID0+IHRoaXMuaGFuZGxlRGVsZXRlUHJlc3NlZCgpKTtcbiAgfVxuICBwcml2YXRlIGhhbmRsZUhlaWdodENoYW5nZSh7IGRlbHRhIH06IEhlaWdodERhdGEpIHtcbiAgICBpZiAodGhpcy5kLmJvYXJkVGV4dEVkaXRvci5zaG93Rm9yQm94KSB7XG4gICAgICB0aGlzLmQuYm9hcmRUZXh0RWRpdG9yLnNob3dGb3JCb3guaGVpZ2h0ICs9IGRlbHRhO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRGVsZXRlUHJlc3NlZCgpIHtcbiAgICB0aGlzLmQuYm9hcmRUZXh0RWRpdG9yLmhpZGUoKTtcblxuICAgIGZvciAoY29uc3QgWywgYm94XSBvZiB0aGlzLmQuZ2V0U2VsZWN0ZWRCb3hlcygpKSB7XG4gICAgICB0aGlzLmQuZGVsZXRlQm94KGJveCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMnO1xuaW1wb3J0IHsgRHJhZ0RhdGEgfSBmcm9tICcuLi8uLi91dGlscy9kb20nO1xuaW1wb3J0IHsgQm9hcmRDdXJzb3JJbnRlcmZhY2UsIEJvYXJkU2VsZWN0aW9uSW50ZXJmYWNlLCBCb2FyZFRleHRFZGl0b3JJbnRlcmZhY2UgfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmltcG9ydCB7IEJvYXJkQm94ZXNTdG9yZUludGVyZmFjZSB9IGZyb20gJy4uL3N0b3Jlcyc7XG5cbnR5cGUgQm9hcmRDdXJzb3JDb250cm9sbGVyRGVwZW5kZW5jaWVzID0ge1xuICBib2FyZEJveGVzU3RvcmU6IEJvYXJkQm94ZXNTdG9yZUludGVyZmFjZTtcbiAgYm9hcmRDdXJzb3I6IEJvYXJkQ3Vyc29ySW50ZXJmYWNlO1xuICBib2FyZFRleHRFZGl0b3I6IEJvYXJkVGV4dEVkaXRvckludGVyZmFjZTtcbiAgYm9hcmRTZWxlY3Rpb246IEJvYXJkU2VsZWN0aW9uSW50ZXJmYWNlO1xuICBnZXRab29tTGV2ZWw6ICgpID0+IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBCb2FyZEN1cnNvckNvbnRyb2xsZXIge1xuICBwcml2YXRlIGQ6IEJvYXJkQ3Vyc29yQ29udHJvbGxlckRlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZEN1cnNvckNvbnRyb2xsZXJEZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLmQgPSBkO1xuXG4gICAgdGhpcy5kLmJvYXJkQ3Vyc29yLm9uTW92ZSgoKSA9PiB0aGlzLmhhbmRsZUN1cnNvck1vdmUoKSk7XG4gICAgdGhpcy5kLmJvYXJkQ3Vyc29yLm9uRG93bigoKSA9PiB0aGlzLmhhbmRsZURvd24oKSk7XG4gICAgdGhpcy5kLmJvYXJkQ3Vyc29yLm9uVGFwKCgpID0+IHRoaXMuaGFuZGxlVGFwKCkpO1xuICAgIHRoaXMuZC5ib2FyZEN1cnNvci5vbkRvdWJsZVRhcCgoKSA9PiB0aGlzLmhhbmRsZURvdWJsZVRhcCgpKTtcbiAgICB0aGlzLmQuYm9hcmRDdXJzb3Iub25EcmFnU3RhcnQoKCkgPT4gdGhpcy5oYW5kbGVEcmFnU3RhcnQoKSk7XG4gICAgdGhpcy5kLmJvYXJkQ3Vyc29yLm9uRHJhZygoZXZlbnQsIHBvc2l0aW9uLCBkYXRhKSA9PiB0aGlzLmhhbmRsZURyYWcoZGF0YSkpO1xuICAgIHRoaXMuZC5ib2FyZEN1cnNvci5vblVwKChldmVudCwgcG9zaXRpb24sIGRhdGEpID0+IHRoaXMuaGFuZGxlVXAoZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDdXJzb3JNb3ZlKCkge1xuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIG1vdmluZyB0aGUgY3Vyc29yIG9ubHkgdG8gaGlnaGxpZ2h0IGJveGVzXG4gICAgLy8gaWYgdGhlIHVzZXIgaXMgbm90IGRyYWdnaW5nIGEgYm94IGFscmVhZHkuXG4gICAgaWYgKHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuZHJhZ2dpbmdCb3ggfHwgdGhpcy5kLmJvYXJkU2VsZWN0aW9uLnNlbGVjdGVkQXJlYSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMuZC5ib2FyZEN1cnNvci5wcmV2aW91c0N1cnNvck92ZXJCb3ggJiZcbiAgICAgIHRoaXMuZC5ib2FyZEN1cnNvci5jdXJzb3JPdmVyQm94ICE9PSB0aGlzLmQuYm9hcmRDdXJzb3IucHJldmlvdXNDdXJzb3JPdmVyQm94XG4gICAgKSB7XG4gICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmhpZ2hsaWdodGVkQm94ZXMuZGVsZXRlKHRoaXMuZC5ib2FyZEN1cnNvci5wcmV2aW91c0N1cnNvck92ZXJCb3guaWQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmQuYm9hcmRDdXJzb3IuY3Vyc29yT3ZlckJveCkge1xuICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5oaWdobGlnaHRlZEJveGVzLnNldChcbiAgICAgICAgdGhpcy5kLmJvYXJkQ3Vyc29yLmN1cnNvck92ZXJCb3guaWQsXG4gICAgICAgIHRoaXMuZC5ib2FyZEN1cnNvci5jdXJzb3JPdmVyQm94LFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZURvd24oKSB7XG4gICAgaWYgKHRoaXMuZC5ib2FyZEN1cnNvci5jdXJzb3JPdmVyQm94KSB7XG4gICAgICBpZiAodGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzLnNpemUgPT09IDEpIHtcbiAgICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzLmNsZWFyKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuc2VsZWN0ZWRCb3hlcy5zZXQodGhpcy5kLmJvYXJkQ3Vyc29yLmN1cnNvck92ZXJCb3guaWQsIHRoaXMuZC5ib2FyZEN1cnNvci5jdXJzb3JPdmVyQm94KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVUYXAoKSB7XG4gICAgaWYgKHRoaXMuZC5ib2FyZEN1cnNvci5jdXJzb3JPdmVyQm94KSB7XG4gICAgICB0aGlzLmQuYm9hcmRUZXh0RWRpdG9yLnNob3dBdCh0aGlzLmQuYm9hcmRDdXJzb3IuY3Vyc29yT3ZlckJveCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZC5ib2FyZFRleHRFZGl0b3IuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRG91YmxlVGFwKCkge1xuICAgIGlmICh0aGlzLmQuYm9hcmRDdXJzb3IuY3Vyc29yT3ZlckJveCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0JveCA9IG5ldyBCb3goKTtcblxuICAgIG5ld0JveC5wb3NpdGlvbiA9IG5ldyBWZWN0b3Ioe1xuICAgICAgeDogdGhpcy5kLmJvYXJkQ3Vyc29yLnBvc2l0aW9uLnggLSAobmV3Qm94LndpZHRoICogdGhpcy5kLmdldFpvb21MZXZlbCgpKSAvIDIsXG4gICAgICB5OiB0aGlzLmQuYm9hcmRDdXJzb3IucG9zaXRpb24ueSAtIChuZXdCb3guaGVpZ2h0ICogdGhpcy5kLmdldFpvb21MZXZlbCgpKSAvIDIsXG4gICAgfSkuZGV2aWRlKFxuICAgICAgbmV3IFZlY3Rvcih7XG4gICAgICAgIHg6IHRoaXMuZC5nZXRab29tTGV2ZWwoKSxcbiAgICAgICAgeTogdGhpcy5kLmdldFpvb21MZXZlbCgpLFxuICAgICAgfSksXG4gICAgKTtcblxuICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuYWRkKG5ld0JveCk7XG4gICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5oaWdobGlnaHRlZEJveGVzLnNldChuZXdCb3guaWQsIG5ld0JveCk7XG4gICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzLnNldChuZXdCb3guaWQsIG5ld0JveCk7XG4gICAgdGhpcy5kLmJvYXJkVGV4dEVkaXRvci5zaG93QXQobmV3Qm94KTtcblxuICAgIHRoaXMuZC5ib2FyZEN1cnNvci5jdXJzb3JPdmVyQm94ID0gbmV3Qm94O1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEcmFnU3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLmQuYm9hcmRDdXJzb3IuY3Vyc29yT3ZlckJveCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuZHJhZ2dpbmdCb3ggPSB0aGlzLmQuYm9hcmRDdXJzb3IuY3Vyc29yT3ZlckJveDtcbiAgICB0aGlzLmQuYm9hcmRUZXh0RWRpdG9yLmhpZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRHJhZyh7IGRlbHRhIH06IERyYWdEYXRhKSB7XG4gICAgaWYgKCF0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ2dpbmdCb3hSZWN0YW5nbGUgPSB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94LnRvUmVjdGFuZ2xlKCk7XG5cbiAgICAvLyBUT0RPIGdyb3VwIGJveGVzIHRvIGNsdXN0ZXJzIHRvIGl0ZXJhdGUgbGVzcyAoaW1wcm92ZSBwZXJmb3JtYW5jZSkuXG4gICAgLy8gVE9ETyBvcHRpbWlzZSB2aWEgYGRyYWdnaW5nQm94T3ZlckJveGVzYC5cbiAgICBmb3IgKGNvbnN0IGJveCBvZiB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnByaW9yaXRpemVkQm94ZXMpIHtcbiAgICAgIGlmIChib3ggPT09IHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuZHJhZ2dpbmdCb3gpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzQWxyZWFkeUhvdmVyZWQgPSB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94T3ZlckJveGVzLmhhcyhib3guaWQpO1xuICAgICAgY29uc3QgaGFzSW50ZXJzZWN0aW9uID0gZHJhZ2dpbmdCb3hSZWN0YW5nbGUuaW50ZXJzZWN0cyhib3gudG9SZWN0YW5nbGUoKSk7XG5cbiAgICAgIGlmIChoYXNJbnRlcnNlY3Rpb24gJiYgIWlzQWxyZWFkeUhvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5kcmFnZ2luZ0JveE92ZXJCb3hlcy5zZXQoYm94LmlkLCBib3gpO1xuICAgICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmhpZ2hsaWdodGVkQm94ZXMuc2V0KGJveC5pZCwgYm94KTtcbiAgICAgIH0gZWxzZSBpZiAoIWhhc0ludGVyc2VjdGlvbiAmJiBpc0FscmVhZHlIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuZHJhZ2dpbmdCb3hPdmVyQm94ZXMuZGVsZXRlKGJveC5pZCk7XG4gICAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuaGlnaGxpZ2h0ZWRCb3hlcy5kZWxldGUoYm94LmlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB6b29tZWREZWx0YSA9IGRlbHRhLmRldmlkZShcbiAgICAgIG5ldyBWZWN0b3Ioe1xuICAgICAgICB4OiB0aGlzLmQuZ2V0Wm9vbUxldmVsKCksXG4gICAgICAgIHk6IHRoaXMuZC5nZXRab29tTGV2ZWwoKSxcbiAgICAgIH0pLFxuICAgICk7XG4gICAgZm9yIChjb25zdCBbLCBib3hdIG9mIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuc2VsZWN0ZWRCb3hlcykge1xuICAgICAgYm94LnBvc2l0aW9uLmFkZCh6b29tZWREZWx0YSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVVcCh7IHRvdGFsRGVsdGEgfTogRHJhZ0RhdGEpIHtcbiAgICBpZiAoIXRoaXMuZC5ib2FyZEJveGVzU3RvcmUuZHJhZ2dpbmdCb3gpIHtcbiAgICAgIGlmICh0aGlzLmQuYm9hcmRDdXJzb3IuY3Vyc29yT3ZlckJveCkge1xuICAgICAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnNlbGVjdGVkQm94ZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzLnNldCh0aGlzLmQuYm9hcmRDdXJzb3IuY3Vyc29yT3ZlckJveC5pZCwgdGhpcy5kLmJvYXJkQ3Vyc29yLmN1cnNvck92ZXJCb3gpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBbaWRdIG9mIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuZHJhZ2dpbmdCb3hPdmVyQm94ZXMpIHtcbiAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuaGlnaGxpZ2h0ZWRCb3hlcy5kZWxldGUoaWQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94T3ZlckJveGVzLnNpemUgPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IFssIGJveF0gb2YgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzKSB7XG4gICAgICAgIGJveC5wb3NpdGlvbi5zdWJzdHJhY3QodG90YWxEZWx0YSk7XG4gICAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuY29ubmVjdEJveChib3gsIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuZHJhZ2dpbmdCb3hPdmVyQm94ZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuZHJhZ2dpbmdCb3hPdmVyQm94ZXMuY2xlYXIoKTtcbiAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLmRyYWdnaW5nQm94ID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZW5kZXJlckludGVyZmFjZSB9IGZyb20gJy4uLy4uL3JlbmRlcmluZyc7XG5pbXBvcnQgeyBCb2FyZEJveGVzRHJhd2VySW50ZXJmYWNlLCBCb2FyZERyYXdlckludGVyZmFjZSwgRGVidWdEcmF3ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi9yZW5kZXJpbmcnO1xuXG50eXBlIEJvYXJkRHJhd2VyQ29udHJvbGxlckRlcGVuZGVuY2llcyA9IHtcbiAgcmVuZGVyZXI6IFJlbmRlcmVySW50ZXJmYWNlO1xuICBib2FyZERyYXdlcjogQm9hcmREcmF3ZXJJbnRlcmZhY2U7XG4gIGJvYXJkQm94ZXNEcmF3ZXI6IEJvYXJkQm94ZXNEcmF3ZXJJbnRlcmZhY2U7XG4gIGRlYnVnRHJhd2VyOiBEZWJ1Z0RyYXdlckludGVyZmFjZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBCb2FyZFJlbmRlckNvbnRyb2xsZXIge1xuICBwcml2YXRlIGQ6IEJvYXJkRHJhd2VyQ29udHJvbGxlckRlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZERyYXdlckNvbnRyb2xsZXJEZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLmQgPSBkO1xuXG4gICAgdGhpcy5kLnJlbmRlcmVyLm9uQW5pbWF0ZSgoKSA9PiB0aGlzLmhhbmRsZUFuaW1hdGUoKSk7XG4gIH1cblxuICAvLyBUT0RPIG9wdGltaXNlIHJlbmRlcmluZ1xuICBwcml2YXRlIGhhbmRsZUFuaW1hdGUoKSB7XG4gICAgLy8gU3luYyBzb21lIGdsb2JhbCBzZXR0aW5nc1xuICAgIHRoaXMuZC5ib2FyZERyYXdlci5jdXJzb3IoKTtcbiAgICB0aGlzLmQuYm9hcmREcmF3ZXIuZGltZW5zaW9ucygpO1xuXG4gICAgLy8gMXN0IGxheWVyXG4gICAgdGhpcy5kLmJvYXJkRHJhd2VyLmNsZWFyQm9hcmQoKTtcbiAgICB0aGlzLmQuZGVidWdEcmF3ZXIuY29sb3JCb2FyZCgpO1xuXG4gICAgLy8gMm5kIGxheWVyXG4gICAgdGhpcy5kLmJvYXJkQm94ZXNEcmF3ZXIucmVsYXRpb25zKCk7XG5cbiAgICAvLyAzcmQgbGF5ZXJcbiAgICB0aGlzLmQuYm9hcmRCb3hlc0RyYXdlci5ib3hlcyh7XG4gICAgICBvbkFmdGVyQm94RHJhd246IChib3gpID0+IHRoaXMuZC5kZWJ1Z0RyYXdlci5yZWN0YW5nbGVDb29yZGluYXRlcyhib3gpLFxuICAgIH0pO1xuXG4gICAgLy8gNHRoIGxheWVyXG4gICAgdGhpcy5kLmJvYXJkQm94ZXNEcmF3ZXIuc2VsZWN0ZWRBcmVhKCk7XG4gICAgdGhpcy5kLmRlYnVnRHJhd2VyLnNlbGVjdGVkQXJlYUNvb3JkaW5hdGVzKCk7XG5cbiAgICAvLyA1dGggbGF5ZXJcbiAgICB0aGlzLmQuZGVidWdEcmF3ZXIuY2VudGVyR3VpZGVzKCk7XG5cbiAgICAvLyA1dGggbGF5ZXJcbiAgICB0aGlzLmQuZGVidWdEcmF3ZXIuY3Vyc29yQ29vcmRpbmF0ZXMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzJztcbmltcG9ydCB7IEJvYXJkQ3Vyc29ySW50ZXJmYWNlLCBCb2FyZFNlbGVjdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQm9hcmRCb3hlc1N0b3JlSW50ZXJmYWNlLCBCb2FyZFZpZXdwb3J0U3RvcmVJbnRlcmZhY2UgfSBmcm9tICcuLi9zdG9yZXMnO1xuXG50eXBlIEJvYXJkU2VsZWN0aW9uQ29udHJvbGxlckRlcGVuZGVuY2llcyA9IHtcbiAgYm9hcmRTZWxlY3Rpb246IEJvYXJkU2VsZWN0aW9uSW50ZXJmYWNlO1xuICBib2FyZEJveGVzU3RvcmU6IEJvYXJkQm94ZXNTdG9yZUludGVyZmFjZTtcbiAgYm9hcmRDdXJzb3I6IEJvYXJkQ3Vyc29ySW50ZXJmYWNlO1xuICBib2FyZFZpZXdwb3J0U3RvcmU6IEJvYXJkVmlld3BvcnRTdG9yZUludGVyZmFjZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBCb2FyZFNlbGVjdGlvbkNvbnRyb2xsZXIge1xuICBwcml2YXRlIGQ6IEJvYXJkU2VsZWN0aW9uQ29udHJvbGxlckRlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZFNlbGVjdGlvbkNvbnRyb2xsZXJEZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLmQgPSBkO1xuXG4gICAgdGhpcy5kLmJvYXJkU2VsZWN0aW9uLm9uU2VsZWN0KCgpID0+IHRoaXMuaGFuZGxlU2VsZWN0KCkpO1xuICAgIHRoaXMuZC5ib2FyZFNlbGVjdGlvbi5vblNlbGVjdEVuZCgoKSA9PiB0aGlzLmhhbmRsZVNlbGVjdEVuZCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VsZWN0KCkge1xuICAgIGlmICh0aGlzLmQuYm9hcmRDdXJzb3IuY3Vyc29yT3ZlckJveCB8fCB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmlzTW92aW5nVmlld1BvcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLnNlbGVjdGVkQXJlYSA9IHRoaXMuZC5ib2FyZFNlbGVjdGlvbi5zZWxlY3RlZEFyZWE7XG5cbiAgICBmb3IgKGNvbnN0IGJveCBvZiB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnByaW9yaXRpemVkQm94ZXMpIHtcbiAgICAgIGNvbnN0IHpvb21lZEJveCA9IGJveC50b1JlY3RhbmdsZSgpLm11bHRpcGx5KFxuICAgICAgICBuZXcgVmVjdG9yKHtcbiAgICAgICAgICB4OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLnpvb21MZXZlbCxcbiAgICAgICAgICB5OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLnpvb21MZXZlbCxcbiAgICAgICAgfSksXG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5kLmJvYXJkU2VsZWN0aW9uLnNlbGVjdGVkQXJlYSEuaW50ZXJzZWN0cyh6b29tZWRCb3gpKSB7XG4gICAgICAgIHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuc2VsZWN0ZWRCb3hlcy5zZXQoYm94LmlkLCBib3gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5zZWxlY3RlZEJveGVzLmRlbGV0ZShib3guaWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VsZWN0RW5kKCkge1xuICAgIHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuc2VsZWN0ZWRBcmVhID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTY3JvbGxEYXRhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMnO1xuaW1wb3J0IHsgQ3Vyc29yVHlwZSB9IGZyb20gJy4uLy4uL3JlbmRlcmluZyc7XG5pbXBvcnQgeyBEcmFnRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBLRVlTLCBvbktleURvd24sIG9uS2V5c0Rvd24sIG9uS2V5VXAgfSBmcm9tICcuLi8uLi91dGlscy9rZXlib2FyZCc7XG5pbXBvcnQgeyBCb2FyZEN1cnNvckludGVyZmFjZSB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQm9hcmRWaWV3cG9ydFN0b3JlSW50ZXJmYWNlIH0gZnJvbSAnLi4vc3RvcmVzJztcblxudHlwZSBCb2FyZE1hbmFnZXJEZXBlbmRlbmNpZXMgPSB7XG4gIGJvYXJkQ3Vyc29yOiBCb2FyZEN1cnNvckludGVyZmFjZTtcbiAgYm9hcmRWaWV3cG9ydFN0b3JlOiBCb2FyZFZpZXdwb3J0U3RvcmVJbnRlcmZhY2U7XG59O1xuXG5leHBvcnQgY2xhc3MgQm9hcmRWaWV3cG9ydENvbnRyb2xsZXIge1xuICBwcml2YXRlIGQ6IEJvYXJkTWFuYWdlckRlcGVuZGVuY2llcztcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZE1hbmFnZXJEZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLmQgPSBkO1xuXG4gICAgdGhpcy5kLmJvYXJkQ3Vyc29yLm9uU2Nyb2xsKChldmVudCwgcG9zaXRpb24sIGRhdGEpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKGRhdGEpKTtcbiAgICB0aGlzLmQuYm9hcmRDdXJzb3Iub25EcmFnKChldmVudCwgcG9zaXRpb24sIGRhdGEpID0+IHRoaXMuaGFuZGxlRHJhZyhkYXRhKSk7XG5cbiAgICBvbktleURvd24oS0VZUy5zcGFjZSwgKCkgPT4gdGhpcy5oYW5kbGVTcGFjZURvd24oKSk7XG4gICAgb25LZXlVcChLRVlTLnNwYWNlLCAoKSA9PiB0aGlzLmhhbmRsZVNwYWNlVXAoKSk7XG4gICAgb25LZXlzRG93bihbS0VZUy5hbHQsIEtFWVMucGx1c10sICgpID0+IHRoaXMuem9vbSgxKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5oYW5kbGVSZXNpemUoKSk7XG4gICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgem9vbShcbiAgICAvLyAtMSAtIHpvb20gb3V0LCAxIC0gem9vbSBpblxuICAgIHpvb21EaXJlY3Rpb246IG51bWJlcixcbiAgKSB7XG4gICAgY29uc3QgbWF4Wm9vbUxldmVsID0gMTAwO1xuICAgIGNvbnN0IG1pblpvb21MZXZlbCA9IDAuMztcbiAgICBjb25zdCB7XG4gICAgICBib2FyZFZpZXdwb3J0U3RvcmUsXG4gICAgICBib2FyZEN1cnNvcixcbiAgICAgIGJvYXJkVmlld3BvcnRTdG9yZTogeyB6b29tTGV2ZWwsIGN1cnNvclBvc2l0aW9uLCBvZmZzZXQsIGFic29sdXRlQ3Vyc29yUG9zaXRpb24gfSxcbiAgICB9ID0gdGhpcy5kO1xuICAgIC8vIEZyb20gMCAoMCUpIHRvIDEgKDEwMCUpIG9yIG1vcmVcbiAgICBjb25zdCB6b29tSW50ZW5zaXR5ID0gMC4wNTtcbiAgICBjb25zdCB6b29tUmVsYXRpdmVEaWZmZXJlbmNlID0gem9vbURpcmVjdGlvbiAqIHpvb21JbnRlbnNpdHk7XG4gICAgbGV0IG5ld1pvb21MZXZlbCA9IHpvb21MZXZlbCArIHpvb21SZWxhdGl2ZURpZmZlcmVuY2U7XG5cbiAgICBpZiAobmV3Wm9vbUxldmVsIDwgbWluWm9vbUxldmVsKSB7XG4gICAgICBuZXdab29tTGV2ZWwgPSBtaW5ab29tTGV2ZWw7XG4gICAgfSBlbHNlIGlmIChuZXdab29tTGV2ZWwgPiBtYXhab29tTGV2ZWwpIHtcbiAgICAgIG5ld1pvb21MZXZlbCA9IG1heFpvb21MZXZlbDtcbiAgICB9XG5cbiAgICBpZiAoem9vbUxldmVsID09PSBuZXdab29tTGV2ZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyAwIC0gMCUsIDEgLSAxMDAlICh4MiksIHNvIDAuMDUgLSA1JVxuICAgIGNvbnN0IHpvb21DaGFuZ2UgPSBuZXdab29tTGV2ZWwgLSB6b29tTGV2ZWw7XG4gICAgY29uc3QgYWRqdXN0T2Zmc2V0VmVjdG9yID0gYWJzb2x1dGVDdXJzb3JQb3NpdGlvbi5jbG9uZSgpLm11bHRpcGx5KFxuICAgICAgbmV3IFZlY3Rvcih7XG4gICAgICAgIHg6IHpvb21DaGFuZ2UsXG4gICAgICAgIHk6IHpvb21DaGFuZ2UsXG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgYm9hcmRWaWV3cG9ydFN0b3JlLnpvb21MZXZlbCA9IG5ld1pvb21MZXZlbDtcbiAgICBvZmZzZXQuc3Vic3RyYWN0KGFkanVzdE9mZnNldFZlY3Rvcik7XG4gICAgYm9hcmRDdXJzb3Iuc3luY0N1cnNvcldpdGhTdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTY3JvbGwoeyBkZWx0YSB9OiBTY3JvbGxEYXRhKSB7XG4gICAgY29uc3Qgem9vbURpcmVjdGlvbiA9IC0xICogTWF0aC5zaWduKGRlbHRhLnkpO1xuICAgIHRoaXMuem9vbSh6b29tRGlyZWN0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3BhY2VEb3duKCkge1xuICAgIGlmICh0aGlzLmQuYm9hcmRDdXJzb3IuY3Vyc29yT3ZlckJveCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuaXNNb3ZpbmdWaWV3UG9ydCA9IHRydWU7XG4gICAgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5jdXJzb3JUeXBlID0gQ3Vyc29yVHlwZS5HcmFiO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEcmFnKHsgZGVsdGEgfTogRHJhZ0RhdGEpIHtcbiAgICBpZiAoIXRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuaXNNb3ZpbmdWaWV3UG9ydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUub2Zmc2V0LmFkZChkZWx0YSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNwYWNlVXAoKSB7XG4gICAgaWYgKCF0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmlzTW92aW5nVmlld1BvcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmlzTW92aW5nVmlld1BvcnQgPSBmYWxzZTtcbiAgICB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmN1cnNvclR5cGUgPSBDdXJzb3JUeXBlLkRlZmF1bHQ7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vQm9hcmRCb3hlc0NvbnRyb2xsZXInO1xuZXhwb3J0ICogZnJvbSAnLi9Cb2FyZFZpZXdwb3J0Q29udHJvbGxlcic7XG5leHBvcnQgKiBmcm9tICcuL0JvYXJkQ3Vyc29yQ29udHJvbGxlcic7XG5leHBvcnQgKiBmcm9tICcuL0JvYXJkUmVuZGVyQ29udHJvbGxlcic7XG5leHBvcnQgKiBmcm9tICcuL0JvYXJkU2VsZWN0aW9uQ29udHJvbGxlcic7XG4iLCJleHBvcnQgKiBmcm9tICcuL2Jvb3QnO1xuIiwiaW1wb3J0IHsgQm94SW50ZXJmYWNlLCBSZWxhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IERyYXdlckludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL3JlbmRlcmluZyc7XG5pbXBvcnQgeyBCb2FyZEJveGVzRHJhd2VySW50ZXJmYWNlLCBCb3hEcmF3bkNhbGxiYWNrLCBCb3hlc09wdGlvbnMgfSBmcm9tICcuLi8uLi9yZW5kZXJpbmcnO1xuaW1wb3J0IHsgQm9hcmRCb3hlc1N0b3JlSW50ZXJmYWNlLCBCb2FyZFZpZXdwb3J0U3RvcmVJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9zdG9yZXMnO1xuXG50eXBlIEJvYXJkQm94ZXNEcmF3ZXJEZXBlbmRlbmNpZXMgPSB7XG4gIGRyYXdlcjogRHJhd2VySW50ZXJmYWNlO1xuICBib2FyZEJveGVzU3RvcmU6IEJvYXJkQm94ZXNTdG9yZUludGVyZmFjZTtcbiAgYm9hcmRWaWV3cG9ydFN0b3JlOiBCb2FyZFZpZXdwb3J0U3RvcmVJbnRlcmZhY2U7XG59O1xuXG5leHBvcnQgY2xhc3MgQm9hcmRCb3hlc0RyYXdlciBpbXBsZW1lbnRzIEJvYXJkQm94ZXNEcmF3ZXJJbnRlcmZhY2Uge1xuICBwcml2YXRlIGQ6IEJvYXJkQm94ZXNEcmF3ZXJEZXBlbmRlbmNpZXM7XG4gIHByaXZhdGUgYWZ0ZXJCb3hEcmF3bkNhbGxiYWNrczogQm94RHJhd25DYWxsYmFja1tdID0gW107XG5cbiAgcHJpdmF0ZSBib3hDb250ZW50TGluZXNDYWNoZTogTWFwPFxuICAgIG51bWJlcixcbiAgICB7XG4gICAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgICBsaW5lczogc3RyaW5nW107XG4gICAgICB3aWR0aDogbnVtYmVyO1xuICAgIH1cbiAgPiA9IG5ldyBNYXAoKTtcblxuICBjb25zdHJ1Y3RvcihkOiBCb2FyZEJveGVzRHJhd2VyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcblxuICAgIC8vIFRPRE8gZmluZCBhIGJldHRlciB3YXlcbiAgICB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLm9uRGVsZXRlKChib3gpID0+IHRoaXMuaGFuZGxlRGVsZXRlKGJveCkpO1xuICB9XG5cbiAgcHVibGljIHJlbGF0aW9ucygpIHtcbiAgICBmb3IgKGNvbnN0IFssIHJlbGF0aW9uXSBvZiB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnJlbGF0aW9ucykge1xuICAgICAgdGhpcy5yZWxhdGlvbihyZWxhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGJveGVzKG9wdGlvbnM6IEJveGVzT3B0aW9ucykge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5wcmlvcml0aXplZEJveGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgYm94ID0gdGhpcy5kLmJvYXJkQm94ZXNTdG9yZS5wcmlvcml0aXplZEJveGVzW2ldO1xuXG4gICAgICB0aGlzLmJveChib3gsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RlZEFyZWEoKSB7XG4gICAgaWYgKHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuc2VsZWN0ZWRBcmVhKSB7XG4gICAgICB0aGlzLmQuZHJhd2VyLnJlY3RhbmdsZSh7XG4gICAgICAgIHJlY3RhbmdsZTogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5zZWxlY3RlZEFyZWEsXG4gICAgICAgIHN0cm9rZVN0eWxlOiAncmdiKDIyIDIyIDIyIC8gNDAlKScsXG4gICAgICAgIGZpbGxTdHlsZTogJ3JnYigxMDEgMTQxIDI1NSAvIDQwJSknLFxuICAgICAgICBvZmZzZXQ6IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUub2Zmc2V0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBib3goYm94OiBCb3hJbnRlcmZhY2UsIHsgb25BZnRlckJveERyYXduIH06IEJveGVzT3B0aW9ucykge1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB0aGlzLmQuYm9hcmRCb3hlc1N0b3JlLnNlbGVjdGVkQm94ZXMuaGFzKGJveC5pZCk7XG4gICAgY29uc3QgaXNIaWdobGlnaHRlZCA9IHRoaXMuZC5ib2FyZEJveGVzU3RvcmUuaGlnaGxpZ2h0ZWRCb3hlcy5oYXMoYm94LmlkKTtcblxuICAgIHRoaXMuZC5kcmF3ZXIucmVjdGFuZ2xlKHtcbiAgICAgIHN0cm9rZVN0eWxlOiBpc1NlbGVjdGVkID8gJ2JsdWUnIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGZpbGxTdHlsZTogaXNIaWdobGlnaHRlZCA/ICdyZWQnIDogJ3NreWJsdWUnLFxuICAgICAgcmVjdGFuZ2xlOiBib3gsXG4gICAgICB6b29tTGV2ZWw6IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuem9vbUxldmVsLFxuICAgICAgb2Zmc2V0OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLm9mZnNldCxcbiAgICB9KTtcblxuICAgIGlmIChib3guY29udGVudCkge1xuICAgICAgdGhpcy5ib3hDb250ZW50KGJveCk7XG4gICAgfVxuXG4gICAgaWYgKG9uQWZ0ZXJCb3hEcmF3bikge1xuICAgICAgb25BZnRlckJveERyYXduKGJveCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWNoZWRCb3hDb250ZW50TGluZXMoYm94OiBCb3hJbnRlcmZhY2UpIHtcbiAgICBsZXQgbGluZXNDYWNoZSA9IHRoaXMuYm94Q29udGVudExpbmVzQ2FjaGUuZ2V0KGJveC5pZCk7XG5cbiAgICAvLyBJbnZhbGlkYXRlIC8gY3JlYXRlIGNhY2hlIGlmIHJlcXVpcmVkXG4gICAgaWYgKCFsaW5lc0NhY2hlIHx8IGJveC5jb250ZW50ICE9PSBsaW5lc0NhY2hlLmNvbnRlbnQgfHwgYm94LndpZHRoICE9PSBsaW5lc0NhY2hlLndpZHRoKSB7XG4gICAgICBjb25zdCBuZXdMaW5lcyA9IHRoaXMuZC5kcmF3ZXIuZ2V0VGV4dExpbmVzKHtcbiAgICAgICAgdGV4dDogYm94LmNvbnRlbnQsXG4gICAgICAgIHJlY3RhbmdsZTogYm94LFxuICAgICAgfSk7XG5cbiAgICAgIGxpbmVzQ2FjaGUgPSB7XG4gICAgICAgIGxpbmVzOiBuZXdMaW5lcyxcbiAgICAgICAgY29udGVudDogYm94LmNvbnRlbnQsXG4gICAgICAgIHdpZHRoOiBib3gud2lkdGgsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmJveENvbnRlbnRMaW5lc0NhY2hlLnNldChib3guaWQsIGxpbmVzQ2FjaGUpO1xuICAgIH1cblxuICAgIHJldHVybiBsaW5lc0NhY2hlLmxpbmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBib3hDb250ZW50KGJveDogQm94SW50ZXJmYWNlKSB7XG4gICAgdGhpcy5kLmRyYXdlci50ZXh0TGluZXNBZnRlclBvaW50KHtcbiAgICAgIHBvc2l0aW9uOiBib3gudG9SZWN0YW5nbGUoKS5zdGFydCxcbiAgICAgIGxpbmVzOiB0aGlzLmdldENhY2hlZEJveENvbnRlbnRMaW5lcyhib3gpLFxuICAgICAgb2Zmc2V0OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLm9mZnNldCxcbiAgICAgIHpvb21MZXZlbDogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS56b29tTGV2ZWwsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbGF0aW9uKHJlbGF0aW9uOiBSZWxhdGlvbkludGVyZmFjZSkge1xuICAgIGNvbnN0IHsgZnJvbUJveCwgdG9Cb3ggfSA9IHJlbGF0aW9uO1xuICAgIGNvbnN0IGZyb21SZWN0YW5nbGUgPSBmcm9tQm94LnRvUmVjdGFuZ2xlKCk7XG4gICAgY29uc3QgdG9SZWN0YW5nbGUgPSB0b0JveC50b1JlY3RhbmdsZSgpO1xuICAgIGNvbnN0IGZyb21Qb3NpdGlvbiA9IGZyb21SZWN0YW5nbGUuc3RhcnQuY2VudGVyKGZyb21SZWN0YW5nbGUuZW5kKTtcbiAgICBjb25zdCB0b1Bvc2l0aW9uID0gdG9SZWN0YW5nbGUuc3RhcnQuY2VudGVyKHRvUmVjdGFuZ2xlLmVuZCk7XG5cbiAgICB0aGlzLmQuZHJhd2VyLmxpbmUoe1xuICAgICAgZnJvbTogZnJvbVBvc2l0aW9uLFxuICAgICAgdG86IHRvUG9zaXRpb24sXG4gICAgICB6b29tTGV2ZWw6IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuem9vbUxldmVsLFxuICAgICAgb2Zmc2V0OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLm9mZnNldCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRPRE8gbW92ZSB0byBib3hlcyBzdG9yZSBjYWNoZVxuICBwcml2YXRlIGhhbmRsZURlbGV0ZShib3g6IEJveEludGVyZmFjZSkge1xuICAgIHRoaXMuYm94Q29udGVudExpbmVzQ2FjaGUuZGVsZXRlKGJveC5pZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJveEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2VudGl0aWVzJztcblxuZXhwb3J0IHR5cGUgQm94RHJhd25DYWxsYmFjayA9IChib3g6IEJveEludGVyZmFjZSkgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgQm94ZXNPcHRpb25zID0ge1xuICBvbkFmdGVyQm94RHJhd24/OiBCb3hEcmF3bkNhbGxiYWNrO1xufTtcblxuZXhwb3J0IHR5cGUgQm9hcmRCb3hlc0RyYXdlckludGVyZmFjZSA9IHtcbiAgcmVsYXRpb25zOiAoKSA9PiB2b2lkO1xuICBib3hlczogKG9wdGlvbnM6IEJveGVzT3B0aW9ucykgPT4gdm9pZDtcbiAgc2VsZWN0ZWRBcmVhOiAoKSA9PiB2b2lkO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vQm9hcmRCb3hlc0RyYXdlcic7XG5leHBvcnQgKiBmcm9tICcuL0JvYXJkQm94ZXNEcmF3ZXJJbnRlcmZhY2UnO1xuIiwiaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnLi4vLi4vLi4vbWF0aC9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vbWF0aC92ZWN0b3JzJztcbmltcG9ydCB7IERyYXdlckludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL3JlbmRlcmluZyc7XG5pbXBvcnQgeyBCb2FyZFZpZXdwb3J0U3RvcmVJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9zdG9yZXMnO1xuaW1wb3J0IHsgQm9hcmREcmF3ZXJJbnRlcmZhY2UgfSBmcm9tICcuL0JvYXJkRHJhd2VySW50ZXJmYWNlJztcblxudHlwZSBCb2FyZERyYXdlckRlcGVuZGVuY2llcyA9IHtcbiAgZHJhd2VyOiBEcmF3ZXJJbnRlcmZhY2U7XG4gIGJvYXJkVmlld3BvcnRTdG9yZTogQm9hcmRWaWV3cG9ydFN0b3JlSW50ZXJmYWNlO1xufTtcblxuZXhwb3J0IGNsYXNzIEJvYXJkRHJhd2VyIGltcGxlbWVudHMgQm9hcmREcmF3ZXJJbnRlcmZhY2Uge1xuICBwcml2YXRlIGQ6IEJvYXJkRHJhd2VyRGVwZW5kZW5jaWVzO1xuXG4gIGNvbnN0cnVjdG9yKGQ6IEJvYXJkRHJhd2VyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcbiAgfVxuXG4gIHB1YmxpYyBjdXJzb3IoKSB7XG4gICAgdGhpcy5kLmRyYXdlci5jdXJzb3IodGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5jdXJzb3JUeXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckJvYXJkKCkge1xuICAgIHRoaXMuZC5kcmF3ZXIuY2xlYXJBcmVhKHtcbiAgICAgIGFyZWE6IG5ldyBSZWN0YW5nbGUoXG4gICAgICAgIG5ldyBWZWN0b3IoKSxcbiAgICAgICAgbmV3IFZlY3Rvcih7XG4gICAgICAgICAgeDogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS53aWR0aCxcbiAgICAgICAgICB5OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmhlaWdodCxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgb2Zmc2V0OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLm9mZnNldCxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkaW1lbnNpb25zKCkge1xuICAgIHRoaXMuZC5kcmF3ZXIuZGltZW5zaW9ucyh7XG4gICAgICB3aWR0aDogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5oZWlnaHQsXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCB0eXBlIEJvYXJkRHJhd2VySW50ZXJmYWNlID0ge1xuICBjdXJzb3I6ICgpID0+IHZvaWQ7XG4gIGNsZWFyQm9hcmQ6ICgpID0+IHZvaWQ7XG4gIGRpbWVuc2lvbnM6ICgpID0+IHZvaWQ7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9Cb2FyZERyYXdlcic7XG5leHBvcnQgKiBmcm9tICcuL0JvYXJkRHJhd2VySW50ZXJmYWNlJztcbiIsImltcG9ydCB7IERpbWVuc2lvbnNSZWN0YW5nbGUsIFJlY3RhbmdsZSB9IGZyb20gJy4uLy4uLy4uL21hdGgvcmVjdGFuZ2xlJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uLy4uLy4uL21hdGgvdmVjdG9ycyc7XG5pbXBvcnQgeyBEcmF3ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9yZW5kZXJpbmcnO1xuaW1wb3J0IHsgZ2V0UmFuZG9tSW50ZWdlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IEJvYXJkVmlld3BvcnRTdG9yZUludGVyZmFjZSB9IGZyb20gJy4uLy4uL3N0b3Jlcyc7XG5pbXBvcnQgeyBEZWJ1Z0RyYXdlckludGVyZmFjZSwgUG9pbnRDb29yZGluYXRlc09wdGlvbnMgfSBmcm9tICcuL0RlYnVnRHJhd2VySW50ZXJmYWNlJztcblxudHlwZSBEZWJ1Z0RyYXdlckRlcGVuZGVuY2llcyA9IHtcbiAgYm9hcmRWaWV3cG9ydFN0b3JlOiBCb2FyZFZpZXdwb3J0U3RvcmVJbnRlcmZhY2U7XG4gIGRyYXdlcjogRHJhd2VySW50ZXJmYWNlO1xufTtcblxuZXhwb3J0IGNsYXNzIERlYnVnRHJhd2VyIGltcGxlbWVudHMgRGVidWdEcmF3ZXJJbnRlcmZhY2Uge1xuICBwcml2YXRlIGQ6IERlYnVnRHJhd2VyRGVwZW5kZW5jaWVzO1xuXG4gIGNvbnN0cnVjdG9yKGQ6IERlYnVnRHJhd2VyRGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5kID0gZDtcbiAgfVxuXG4gIHB1YmxpYyBjb2xvckJvYXJkKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAnYmxhY2snXTtcbiAgICBjb25zdCBtYXggPSBzdHlsZXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBtaW4gPSAwO1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0UmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XG4gICAgLy8gdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHN0eWxlc1tdO1xuICAgIC8vIHRoaXMuY29udGV4dC5maWxsUmVjdChzdGFydFgsIHN0YXJ0WSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBwdWJsaWMgY3Vyc29yQ29vcmRpbmF0ZXMoKSB7XG4gICAgdGhpcy5wb2ludENvb3JkaW5hdGVzKHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLmN1cnNvclBvc2l0aW9uLFxuICAgICAgem9vbWFibGU6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkQXJlYUNvb3JkaW5hdGVzKCkge1xuICAgIGlmICh0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLnNlbGVjdGVkQXJlYSkge1xuICAgICAgdGhpcy5yZWN0YW5nbGVDb29yZGluYXRlcyh0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLnNlbGVjdGVkQXJlYSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwb2ludENvb3JkaW5hdGVzKHsgcG9zaXRpb24sIHpvb21hYmxlID0gdHJ1ZSB9OiBQb2ludENvb3JkaW5hdGVzT3B0aW9ucykge1xuICAgIGNvbnN0IHpvb21MZXZlbCA9IHpvb21hYmxlID8gdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS56b29tTGV2ZWwgOiAxO1xuXG4gICAgdGhpcy5kLmRyYXdlci50ZXh0QWZ0ZXJQb2ludCh7XG4gICAgICBmb250U2l6ZTogMTEsXG4gICAgICB0ZXh0OiBwb3NpdGlvbi50b1N0cmluZygpLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLmNsb25lKCkuYWRkKFxuICAgICAgICBuZXcgVmVjdG9yKHtcbiAgICAgICAgICB4OiAxNSxcbiAgICAgICAgICB5OiAtNSxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgb2Zmc2V0OiB0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLm9mZnNldCxcbiAgICAgIHpvb21MZXZlbCxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZWN0YW5nbGVDb29yZGluYXRlcyhfcmVjdGFuZ2xlOiBEaW1lbnNpb25zUmVjdGFuZ2xlIHwgUmVjdGFuZ2xlLCB6b29tYWJsZSA9IHRydWUpIHtcbiAgICBjb25zdCB6b29tTGV2ZWwgPSB6b29tYWJsZSA/IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuem9vbUxldmVsIDogMTtcbiAgICBjb25zdCB6b29tVmVjdG9yID0gbmV3IFZlY3Rvcih7XG4gICAgICB4OiB6b29tTGV2ZWwsXG4gICAgICB5OiB6b29tTGV2ZWwsXG4gICAgfSk7XG4gICAgY29uc3QgcmVjdGFuZ2xlID0gX3JlY3RhbmdsZSBpbnN0YW5jZW9mIERpbWVuc2lvbnNSZWN0YW5nbGUgPyBfcmVjdGFuZ2xlLnRvUmVjdGFuZ2xlKCkgOiBfcmVjdGFuZ2xlO1xuICAgIGNvbnN0IHpvb21lZFJlY3RhbmdsZSA9IHJlY3RhbmdsZS5jbG9uZSgpLm11bHRpcGx5KHpvb21WZWN0b3IpO1xuXG4gICAgdGhpcy5kLmRyYXdlci50ZXh0TGluZXNBZnRlclBvaW50KHtcbiAgICAgIGxpbmVzOiBbYCR7em9vbWVkUmVjdGFuZ2xlLnN0YXJ0LnRvU3RyaW5nKCl9ICh6KWAsIHJlY3RhbmdsZS5zdGFydC50b1N0cmluZygpXSxcbiAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKHJlY3RhbmdsZS5zdGFydCksXG4gICAgICBmb250U2l6ZTogMTEsXG4gICAgICBvZmZzZXQ6IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUub2Zmc2V0LFxuICAgICAgem9vbUxldmVsLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNlbnRlckd1aWRlcygpIHtcbiAgICBjb25zdCByZWN0YW5nbGVTaXplID0gMztcblxuICAgIC8vIENlbnRlciBwb2ludFxuICAgIHRoaXMuZC5kcmF3ZXIucmVjdGFuZ2xlKHtcbiAgICAgIHJlY3RhbmdsZTogbmV3IFJlY3RhbmdsZShcbiAgICAgICAgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5jZW50ZXIuY2xvbmUoKSxcbiAgICAgICAgdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5jZW50ZXIuY2xvbmUoKS5hZGQoXG4gICAgICAgICAgbmV3IFZlY3Rvcih7XG4gICAgICAgICAgICB4OiByZWN0YW5nbGVTaXplLFxuICAgICAgICAgICAgeTogcmVjdGFuZ2xlU2l6ZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgICAgLmFkZCh0aGlzLmQuYm9hcmRWaWV3cG9ydFN0b3JlLm9mZnNldClcbiAgICAgICAgLmNlbnRyYWxpemUoKSxcbiAgICB9KTtcblxuICAgIC8vIFZlcnRpY2FsIGd1aWRlIGxpbmVcbiAgICB0aGlzLmQuZHJhd2VyLmxpbmUoe1xuICAgICAgZnJvbTogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS50b3AsXG4gICAgICB0bzogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5ib3R0b20sXG4gICAgfSk7XG5cbiAgICAvLyBIb3Jpem9udGFsIGd1aWRlIGxpbmVcbiAgICB0aGlzLmQuZHJhd2VyLmxpbmUoe1xuICAgICAgZnJvbTogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5sZWZ0LFxuICAgICAgdG86IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUucmlnaHQsXG4gICAgfSk7XG5cbiAgICAvLyBDb29yZGluYXRlc1xuICAgIHRoaXMuZC5kcmF3ZXIudGV4dEFmdGVyUG9pbnQoe1xuICAgICAgcG9zaXRpb246IHRoaXMuZC5ib2FyZFZpZXdwb3J0U3RvcmUuY2VudGVyLFxuICAgICAgdGV4dDogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5jZW50ZXIudG9TdHJpbmcoKSxcbiAgICAgIGZvbnRTaXplOiAxMSxcbiAgICAgIG9mZnNldDogdGhpcy5kLmJvYXJkVmlld3BvcnRTdG9yZS5vZmZzZXQsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpbWVuc2lvbnNSZWN0YW5nbGUsIFJlY3RhbmdsZSB9IGZyb20gJy4uLy4uLy4uL21hdGgvcmVjdGFuZ2xlJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uLy4uLy4uL21hdGgvdmVjdG9ycyc7XG5cbmV4cG9ydCB0eXBlIFBvaW50Q29vcmRpbmF0ZXNPcHRpb25zID0ge1xuICBwb3NpdGlvbjogVmVjdG9yO1xuICB6b29tYWJsZT86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBEZWJ1Z0RyYXdlckludGVyZmFjZSA9IHtcbiAgY29sb3JCb2FyZDogKCkgPT4gdm9pZDtcbiAgcG9pbnRDb29yZGluYXRlczogKG9wdGlvbnM6IFBvaW50Q29vcmRpbmF0ZXNPcHRpb25zKSA9PiB2b2lkO1xuICByZWN0YW5nbGVDb29yZGluYXRlczogKHJlY3RhbmdsZTogRGltZW5zaW9uc1JlY3RhbmdsZSB8IFJlY3RhbmdsZSkgPT4gdm9pZDtcbiAgY3Vyc29yQ29vcmRpbmF0ZXM6ICgpID0+IHZvaWQ7XG4gIHNlbGVjdGVkQXJlYUNvb3JkaW5hdGVzOiAoKSA9PiB2b2lkO1xuICBjZW50ZXJHdWlkZXM6ICgpID0+IHZvaWQ7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9EZWJ1Z0RyYXdlcic7XG5leHBvcnQgKiBmcm9tICcuL0RlYnVnRHJhd2VySW50ZXJmYWNlJztcbiIsImV4cG9ydCAqIGZyb20gJy4vYm9hcmRCb3hlc0RyYXdlcic7XG5leHBvcnQgKiBmcm9tICcuL2JvYXJkRHJhd2VyJztcbmV4cG9ydCAqIGZyb20gJy4vZGVidWdEcmF3ZXInO1xuIiwiaW1wb3J0IHsgQm94SW50ZXJmYWNlLCBSZWxhdGlvbiwgUmVsYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9tYXRoL3ZlY3RvcnMnO1xuaW1wb3J0IHsgQm9hcmRCb3hlc1N0b3JlSW50ZXJmYWNlLCBEZWxldGVDYWxsYmFjayB9IGZyb20gJy4vQm9hcmRCb3hlc1N0b3JlSW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIEJvYXJkQm94ZXNTdG9yZSBpbXBsZW1lbnRzIEJvYXJkQm94ZXNTdG9yZUludGVyZmFjZSB7XG4gIHByaXZhdGUgZGVsZXRlQ2FsbGJhY2tzOiBEZWxldGVDYWxsYmFja1tdID0gW107XG4gIHB1YmxpYyBib3hlczogTWFwPG51bWJlciwgQm94SW50ZXJmYWNlPiA9IG5ldyBNYXAoKTtcbiAgLy8gQm94ZXMgd2hpY2ggd2VyZSB0b3VjaGVkIGxhc3QgYXJlIGF0IHRoZSBuZWQgb2YgdGhpcyBhcnJheS5cbiAgLy8gQm94ZXMgd2l0aCB0aGUgaGlnaGVzdCBwcmlvcml0eSAoYXQgdGhlIGVuZCkgc2hvdWxkIGJlIHJlbmRlcmVkIGxhc3QuXG4gIHB1YmxpYyBwcmlvcml0aXplZEJveGVzOiBCb3hJbnRlcmZhY2VbXSA9IFtdO1xuICBwdWJsaWMgZHJhZ2dpbmdCb3hPdmVyQm94ZXM6IE1hcDxudW1iZXIsIEJveEludGVyZmFjZT4gPSBuZXcgTWFwKCk7XG4gIHB1YmxpYyByZWxhdGlvbnM6IE1hcDxudW1iZXIsIFJlbGF0aW9uSW50ZXJmYWNlPiA9IG5ldyBNYXAoKTtcblxuICBwdWJsaWMgaGlnaGxpZ2h0ZWRCb3hlczogTWFwPG51bWJlciwgQm94SW50ZXJmYWNlPiA9IG5ldyBNYXAoKTtcbiAgcHVibGljIHNlbGVjdGVkQm94ZXM6IE1hcDxudW1iZXIsIEJveEludGVyZmFjZT4gPSBuZXcgTWFwKCk7XG4gIHB1YmxpYyBkcmFnZ2luZ0JveD86IEJveEludGVyZmFjZTtcblxuICAvLyBUT0RPIGNhbiBiZSBvcHRpbWlzZWQ/IEUuZy4gdXNlIGEgbGlua2VkIGxpc3QgKyBtYXAgYXBwcm9hY2guXG4gIHB1YmxpYyByaXNlQm94UHJpb3JpdHkoYm94OiBCb3hJbnRlcmZhY2UpIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcblxuICAgIC8vIENoZWNrIGZyb20gZW5kIGluIGNhc2UgaWYgdGhlIGJveCBoYXMgdGhlIG1heCBwcmlvcml0eVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmb3ItZGlyZWN0aW9uXG4gICAgZm9yIChsZXQgaSA9IHRoaXMucHJpb3JpdGl6ZWRCb3hlcy5sZW5ndGggLSAxOyBpID49IDA7IGkrKykge1xuICAgICAgY29uc3QgYm94ID0gdGhpcy5wcmlvcml0aXplZEJveGVzW2ldO1xuXG4gICAgICBpZiAodGhpcy5wcmlvcml0aXplZEJveGVzW2ldID09PSBib3gpIHtcbiAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcmlvcml0aXplZEJveGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5wcmlvcml0aXplZEJveGVzLnB1c2goYm94KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGQoYm94OiBCb3hJbnRlcmZhY2UpIHtcbiAgICB0aGlzLmJveGVzLnNldChib3guaWQsIGJveCk7XG4gICAgdGhpcy5wcmlvcml0aXplZEJveGVzLnB1c2goYm94KTtcblxuICAgIHJldHVybiBib3g7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlKGJveDogQm94SW50ZXJmYWNlKSB7XG4gICAgdGhpcy5ib3hlcy5kZWxldGUoYm94LmlkKTtcbiAgICB0aGlzLnNlbGVjdGVkQm94ZXMuZGVsZXRlKGJveC5pZCk7XG4gICAgdGhpcy5oaWdobGlnaHRlZEJveGVzLmRlbGV0ZShib3guaWQpO1xuXG4gICAgY29uc3QgcHJpb3JpdGl6ZWRCb3hJbmRleCA9IHRoaXMucHJpb3JpdGl6ZWRCb3hlcy5pbmRleE9mKGJveCk7XG5cbiAgICBib3gucmVsYXRpb25zLmZvckVhY2goKHJlbGF0aW9uKSA9PiB7XG4gICAgICBjb25zdCB0b0JveFJlbGF0aW9uSW5kZXggPSByZWxhdGlvbi50b0JveC5yZWxhdGlvbnMuaW5kZXhPZihyZWxhdGlvbik7XG5cbiAgICAgIHJlbGF0aW9uLnRvQm94LnJlbGF0aW9ucy5zcGxpY2UodG9Cb3hSZWxhdGlvbkluZGV4LCAxKTtcblxuICAgICAgdGhpcy5yZWxhdGlvbnMuZGVsZXRlKHJlbGF0aW9uLmlkKTtcbiAgICB9KTtcblxuICAgIC8vIFRPRE8gY2FuIGJlIG9wdGltaXNlZD8gRS5nLiB1c2UgYSBsaW5rZWQgbGlzdCArIG1hcCBhcHByb2FjaC5cbiAgICBpZiAocHJpb3JpdGl6ZWRCb3hJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMucHJpb3JpdGl6ZWRCb3hlcy5zcGxpY2UocHJpb3JpdGl6ZWRCb3hJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZWxldGVDYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGJveCkpO1xuICB9XG5cbiAgLy8gVE9ETyBkb24ndCBpdGVyYXRlIGFsbCBib3hlcyAoaW1wcm92ZSBwZXJmb3JtYW5jZSkuXG4gIHB1YmxpYyBnZXRCb3hCeVBvc2l0aW9uKHBvc2l0aW9uOiBWZWN0b3IsIHpvb21MZXZlbCA9IDEpIHtcbiAgICBjb25zdCB6b29tVmVjdG9yID0gbmV3IFZlY3Rvcih7XG4gICAgICB4OiB6b29tTGV2ZWwsXG4gICAgICB5OiB6b29tTGV2ZWwsXG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5wcmlvcml0aXplZEJveGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBib3ggPSB0aGlzLnByaW9yaXRpemVkQm94ZXNbaV07XG5cbiAgICAgIGlmIChib3gudG9SZWN0YW5nbGUoKS5tdWx0aXBseSh6b29tVmVjdG9yKS5pc1BvaW50SW5zaWRlKHBvc2l0aW9uKSkge1xuICAgICAgICByZXR1cm4gYm94O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0Qm94KGZyb21Cb3g6IEJveEludGVyZmFjZSwgdG9Cb3hlczogQm94SW50ZXJmYWNlW10gfCBNYXA8bnVtYmVyLCBCb3hJbnRlcmZhY2U+KSB7XG4gICAgdG9Cb3hlcy5mb3JFYWNoKCh0b0JveCkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RlZFJlbGF0aW9uID0gZnJvbUJveC5yZWxhdGlvbnMuZmluZChcbiAgICAgICAgKHJlbGF0aW9uVG9DaGVjaykgPT5cbiAgICAgICAgICAodG9Cb3guaWQgPT09IHJlbGF0aW9uVG9DaGVjay50b0JveC5pZCAmJiBmcm9tQm94LmlkID09PSByZWxhdGlvblRvQ2hlY2suZnJvbUJveC5pZCkgfHxcbiAgICAgICAgICAodG9Cb3guaWQgPT09IHJlbGF0aW9uVG9DaGVjay5mcm9tQm94LmlkICYmIGZyb21Cb3guaWQgPT09IHJlbGF0aW9uVG9DaGVjay50b0JveC5pZCksXG4gICAgICApO1xuXG4gICAgICAvLyBJZiByZWxhdGlvbiBleGlzdHMsIHRoZW4gd2UgbmVlZCB0byBkZWxldGUgdGhpcyByZWxhdGlvblxuICAgICAgaWYgKGV4aXN0ZWRSZWxhdGlvbikge1xuICAgICAgICBmcm9tQm94LnJlbGF0aW9ucyA9IGZyb21Cb3gucmVsYXRpb25zLmZpbHRlcigoeyBpZCB9KSA9PiBleGlzdGVkUmVsYXRpb24uaWQgIT09IGlkKTtcbiAgICAgICAgdG9Cb3gucmVsYXRpb25zID0gZnJvbUJveC5yZWxhdGlvbnMuZmlsdGVyKCh7IGlkIH0pID0+IGV4aXN0ZWRSZWxhdGlvbi5pZCAhPT0gaWQpO1xuXG4gICAgICAgIHRoaXMucmVsYXRpb25zLmRlbGV0ZShleGlzdGVkUmVsYXRpb24uaWQpO1xuICAgICAgfVxuICAgICAgLy8gQ3JlYXRlIHJlbGF0aW9uXG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVsYXRpb24gPSBuZXcgUmVsYXRpb24oZnJvbUJveCwgdG9Cb3gpO1xuXG4gICAgICAgIGZyb21Cb3gucmVsYXRpb25zLnB1c2gocmVsYXRpb24pO1xuICAgICAgICB0b0JveC5yZWxhdGlvbnMucHVzaChyZWxhdGlvbik7XG5cbiAgICAgICAgdGhpcy5yZWxhdGlvbnMuc2V0KHJlbGF0aW9uLmlkLCByZWxhdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25EZWxldGUoY2FsbGJhY2s6IERlbGV0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5kZWxldGVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJveEludGVyZmFjZSwgUmVsYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi8uLi8uLi9tYXRoL3JlY3RhbmdsZSc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9tYXRoL3ZlY3RvcnMnO1xuXG5leHBvcnQgdHlwZSBEZWxldGVDYWxsYmFjayA9IChib3g6IEJveEludGVyZmFjZSkgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgQm9hcmRCb3hlc1N0b3JlSW50ZXJmYWNlID0ge1xuICBib3hlczogTWFwPG51bWJlciwgQm94SW50ZXJmYWNlPjtcbiAgLy8gQm94ZXMgd2hpY2ggd2VyZSB0b3VjaGVkIGxhc3QgYXJlIGF0IHRoZSBuZWQgb2YgdGhpcyBhcnJheS5cbiAgLy8gQm94ZXMgd2l0aCB0aGUgaGlnaGVzdCBwcmlvcml0eSAoYXQgdGhlIGVuZCkgc2hvdWxkIGJlIHJlbmRlcmVkIGxhc3QuXG4gIHByaW9yaXRpemVkQm94ZXM6IEJveEludGVyZmFjZVtdO1xuICBkcmFnZ2luZ0JveE92ZXJCb3hlczogTWFwPG51bWJlciwgQm94SW50ZXJmYWNlPjtcbiAgcmVsYXRpb25zOiBNYXA8bnVtYmVyLCBSZWxhdGlvbkludGVyZmFjZT47XG5cbiAgaGlnaGxpZ2h0ZWRCb3hlczogTWFwPG51bWJlciwgQm94SW50ZXJmYWNlPjtcbiAgc2VsZWN0ZWRCb3hlczogTWFwPG51bWJlciwgQm94SW50ZXJmYWNlPjtcbiAgZHJhZ2dpbmdCb3g/OiBCb3hJbnRlcmZhY2U7XG5cbiAgcmlzZUJveFByaW9yaXR5OiAoYm94OiBCb3hJbnRlcmZhY2UpID0+IHZvaWQ7XG5cbiAgYWRkOiAoYm94OiBCb3hJbnRlcmZhY2UpID0+IEJveEludGVyZmFjZTtcbiAgZGVsZXRlOiAoYm94OiBCb3hJbnRlcmZhY2UpID0+IHZvaWQ7XG4gIGdldEJveEJ5UG9zaXRpb246IChwb3NpdGlvbjogVmVjdG9yLCB6b29tTGV2ZWw6IG51bWJlcikgPT4gQm94SW50ZXJmYWNlIHwgdW5kZWZpbmVkO1xuICBjb25uZWN0Qm94OiAoZnJvbUJveDogQm94SW50ZXJmYWNlLCB0b0JveGVzOiBCb3hJbnRlcmZhY2VbXSB8IE1hcDxudW1iZXIsIEJveEludGVyZmFjZT4pID0+IHZvaWQ7XG5cbiAgb25EZWxldGU6IChjYWxsYmFjazogRGVsZXRlQ2FsbGJhY2spID0+IHZvaWQ7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9Cb2FyZEJveGVzU3RvcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9Cb2FyZEJveGVzU3RvcmVJbnRlcmZhY2UnO1xuIiwiaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnLi4vLi4vLi4vbWF0aC9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vbWF0aC92ZWN0b3JzJztcbmltcG9ydCB7IEN1cnNvclR5cGUgfSBmcm9tICcuLi8uLi8uLi9yZW5kZXJpbmcnO1xuaW1wb3J0IHsgQm9hcmRWaWV3cG9ydFN0b3JlSW50ZXJmYWNlIH0gZnJvbSAnLi9Cb2FyZFZpZXdwb3J0U3RvcmVJbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgQm9hcmRWaWV3cG9ydFN0b3JlIGltcGxlbWVudHMgQm9hcmRWaWV3cG9ydFN0b3JlSW50ZXJmYWNlIHtcbiAgcHVibGljIGdldCBjZW50ZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3Ioe1xuICAgICAgeDogdGhpcy53aWR0aCAvIDIsXG4gICAgICB5OiB0aGlzLmhlaWdodCAvIDIsXG4gICAgfSkuc3Vic3RyYWN0KHRoaXMub2Zmc2V0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGVmdCgpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih7XG4gICAgICB4OiAwLFxuICAgICAgeTogdGhpcy5oZWlnaHQgLyAyLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldCB0b3AoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3Ioe1xuICAgICAgeDogdGhpcy53aWR0aCAvIDIsXG4gICAgICB5OiAwLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldCByaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0LmFkZChcbiAgICAgIG5ldyBWZWN0b3Ioe1xuICAgICAgICB4OiB0aGlzLndpZHRoLFxuICAgICAgICB5OiAwLFxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLnRvcC5hZGQoXG4gICAgICBuZXcgVmVjdG9yKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogdGhpcy5oZWlnaHQsXG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHpvb21MZXZlbCA9IDE7XG4gIHB1YmxpYyBvZmZzZXQ6IFZlY3RvciA9IG5ldyBWZWN0b3IoKTtcbiAgcHVibGljIGN1cnNvclR5cGU6IEN1cnNvclR5cGUgPSBDdXJzb3JUeXBlLkRlZmF1bHQ7XG4gIHB1YmxpYyBpc01vdmluZ1ZpZXdQb3J0ID0gZmFsc2U7XG4gIHB1YmxpYyBjdXJzb3JQb3NpdGlvbjogVmVjdG9yID0gbmV3IFZlY3RvcigpO1xuICBwdWJsaWMgYWJzb2x1dGVDdXJzb3JQb3NpdGlvbjogVmVjdG9yID0gbmV3IFZlY3RvcigpO1xuICBwdWJsaWMgc2VsZWN0ZWRBcmVhPzogUmVjdGFuZ2xlO1xuICBwdWJsaWMgd2lkdGggPSAwO1xuICBwdWJsaWMgaGVpZ2h0ID0gMDtcbn1cbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4uLy4uLy4uL21hdGgvcmVjdGFuZ2xlJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uLy4uLy4uL21hdGgvdmVjdG9ycyc7XG5pbXBvcnQgeyBDdXJzb3JUeXBlIH0gZnJvbSAnLi4vLi4vLi4vcmVuZGVyaW5nJztcblxuZXhwb3J0IHR5cGUgQm9hcmRWaWV3cG9ydFN0b3JlSW50ZXJmYWNlID0ge1xuICBpc01vdmluZ1ZpZXdQb3J0OiBib29sZWFuO1xuICBjdXJzb3JQb3NpdGlvbjogVmVjdG9yO1xuICBhYnNvbHV0ZUN1cnNvclBvc2l0aW9uOiBWZWN0b3I7XG4gIHpvb21MZXZlbDogbnVtYmVyO1xuICBvZmZzZXQ6IFZlY3RvcjtcbiAgY3Vyc29yVHlwZTogQ3Vyc29yVHlwZTtcbiAgc2VsZWN0ZWRBcmVhPzogUmVjdGFuZ2xlO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgY2VudGVyOiBWZWN0b3I7XG4gIGxlZnQ6IFZlY3RvcjtcbiAgdG9wOiBWZWN0b3I7XG4gIHJpZ2h0OiBWZWN0b3I7XG4gIGJvdHRvbTogVmVjdG9yO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vQm9hcmRWaWV3cG9ydFN0b3JlJztcbmV4cG9ydCAqIGZyb20gJy4vQm9hcmRWaWV3cG9ydFN0b3JlSW50ZXJmYWNlJztcbiIsImV4cG9ydCAqIGZyb20gJy4vYm9hcmRCb3hlc1N0b3JlJztcbmV4cG9ydCAqIGZyb20gJy4vYm9hcmRWaWV3cG9ydFN0b3JlJztcbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9ycyc7XG5pbXBvcnQgeyBEcmFnRGF0YSwgRHJhZ01vZGUsIERyYWdTdGFydERhdGEsIGV4dGVuZGVkQ2xpY2tIYW5kbGVyLCBnZXRQb3NpdGlvbkZyb21Nb3VzZUV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZG9tJztcbmltcG9ydCB7IEN1cnNvckV2ZW50Q2FsbGJhY2ssIEN1cnNvckludGVyZmFjZSwgU2Nyb2xsRGF0YSB9IGZyb20gJy4vQ3Vyc29ySW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIEN1cnNvciBpbXBsZW1lbnRzIEN1cnNvckludGVyZmFjZSB7XG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yO1xuICBwdWJsaWMgY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBkb3duQ2FsbGJhY2tzOiBDdXJzb3JFdmVudENhbGxiYWNrW10gPSBbXTtcbiAgcHJpdmF0ZSB0YXBDYWxsYmFja3M6IEN1cnNvckV2ZW50Q2FsbGJhY2tbXSA9IFtdO1xuICBwcml2YXRlIGRvdWJsZVRhcENhbGxiYWNrczogQ3Vyc29yRXZlbnRDYWxsYmFja1tdID0gW107XG4gIHByaXZhdGUgZHJhZ1N0YXJ0Q2FsbGJhY2tzOiBDdXJzb3JFdmVudENhbGxiYWNrPFtEcmFnU3RhcnREYXRhXT5bXSA9IFtdO1xuICBwcml2YXRlIGRyYWdDYWxsYmFja3M6IEN1cnNvckV2ZW50Q2FsbGJhY2s8W0RyYWdEYXRhXT5bXSA9IFtdO1xuICBwcml2YXRlIGRyYWdFbmRDYWxsYmFja3M6IEN1cnNvckV2ZW50Q2FsbGJhY2s8W0RyYWdEYXRhXT5bXSA9IFtdO1xuICBwcml2YXRlIHVwQ2FsbGJhY2tzOiBDdXJzb3JFdmVudENhbGxiYWNrPFtEcmFnRGF0YV0+W10gPSBbXTtcbiAgcHJpdmF0ZSBzY3JvbGxDYWxsYmFja3M6IEN1cnNvckV2ZW50Q2FsbGJhY2s8W1Njcm9sbERhdGFdPltdID0gW107XG5cbiAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQsIHBvc2l0aW9uOiBWZWN0b3IgPSBuZXcgVmVjdG9yKCkpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXJFbGVtZW50O1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChldmVudCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoZXZlbnQpKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB0aGlzLmhhbmRsZU1vdmUoZXZlbnQpKTtcbiAgICBleHRlbmRlZENsaWNrSGFuZGxlcihjb250YWluZXJFbGVtZW50LCB7XG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICBzaWxlbmNlQ2xpY2tBZnRlckRyYWc6IHRydWUsXG4gICAgICBkcmFnTW9kZTogRHJhZ01vZGUuRG93bixcbiAgICAgIG9uQ2xpY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVDbGljayhldmVudCksXG4gICAgICBvbkRvdWJsZUNsaWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlRG91YmxlQ2xpY2soZXZlbnQpLFxuICAgICAgb25EcmFnU3RhcnQ6IChldmVudCwgZGF0YSkgPT4gdGhpcy5oYW5kbGVEcmFnU3RhcnQoZXZlbnQsIGRhdGEpLFxuICAgICAgb25EcmFnOiAoZXZlbnQsIGRhdGEpID0+IHRoaXMuaGFuZGxlRHJhZyhldmVudCwgZGF0YSksXG4gICAgICBvbkRyYWdFbmQ6IChldmVudCwgZGF0YSkgPT4gdGhpcy5oYW5kbGVEcmFnRW5kKGV2ZW50LCBkYXRhKSxcbiAgICAgIG9uTW91c2VEb3duOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlTW91c2VEb3duKGV2ZW50KSxcbiAgICAgIG9uTW91c2VVcDogKGV2ZW50LCBkYXRhKSA9PiB0aGlzLmhhbmRsZU1vdXNlVXAoZXZlbnQsIGRhdGEpLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uRG93bihjYWxsYmFjazogQ3Vyc29yRXZlbnRDYWxsYmFjaykge1xuICAgIHRoaXMuZG93bkNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHB1YmxpYyBvblRhcChjYWxsYmFjazogQ3Vyc29yRXZlbnRDYWxsYmFjaykge1xuICAgIHRoaXMudGFwQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgcHVibGljIG9uRG91YmxlVGFwKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrKSB7XG4gICAgdGhpcy5kb3VibGVUYXBDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICBwdWJsaWMgb25Nb3ZlKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrKSB7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4gY2FsbGJhY2soZXZlbnQsIHRoaXMucG9zaXRpb24pKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRyYWdTdGFydChjYWxsYmFjazogQ3Vyc29yRXZlbnRDYWxsYmFjazxbRHJhZ1N0YXJ0RGF0YV0+KSB7XG4gICAgdGhpcy5kcmFnU3RhcnRDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICBwdWJsaWMgb25EcmFnKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrPFtEcmFnRGF0YV0+KSB7XG4gICAgdGhpcy5kcmFnQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgcHVibGljIG9uRHJhZ0VuZChjYWxsYmFjazogQ3Vyc29yRXZlbnRDYWxsYmFjazxbRHJhZ0RhdGFdPikge1xuICAgIHRoaXMuZHJhZ0VuZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHB1YmxpYyBvblVwKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrPFtEcmFnRGF0YV0+KSB7XG4gICAgdGhpcy51cENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHB1YmxpYyBvblNjcm9sbChjYWxsYmFjazogQ3Vyc29yRXZlbnRDYWxsYmFjazxbU2Nyb2xsRGF0YV0+KSB7XG4gICAgdGhpcy5zY3JvbGxDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBwcml2YXRlIGhhbmRsZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnVwZGF0ZUZyb20oZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgdGhpcy5jb250YWluZXJFbGVtZW50KSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMuZG93bkNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soZXZlbnQsIHRoaXMucG9zaXRpb24pKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLnRhcENhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soZXZlbnQsIHRoaXMucG9zaXRpb24pKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRG91YmxlQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmRvdWJsZVRhcENhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soZXZlbnQsIHRoaXMucG9zaXRpb24pKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRHJhZ1N0YXJ0KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBEcmFnU3RhcnREYXRhKSB7XG4gICAgdGhpcy5kcmFnU3RhcnRDYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGV2ZW50LCB0aGlzLnBvc2l0aW9uLCBkYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZURyYWcoZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IERyYWdEYXRhKSB7XG4gICAgdGhpcy5kcmFnQ2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjayhldmVudCwgdGhpcy5wb3NpdGlvbiwgZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEcmFnRW5kKGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBEcmFnRGF0YSkge1xuICAgIHRoaXMuZHJhZ0VuZENhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soZXZlbnQsIHRoaXMucG9zaXRpb24sIGRhdGEpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTW91c2VVcChldmVudDogTW91c2VFdmVudCwgZGF0YTogRHJhZ0RhdGEpIHtcbiAgICB0aGlzLnVwQ2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjayhldmVudCwgdGhpcy5wb3NpdGlvbiwgZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTY3JvbGwoZXZlbnQ6IFdoZWVsRXZlbnQpIHtcbiAgICBjb25zdCBzY3JvbGxEYXRhID0ge1xuICAgICAgZGVsdGE6IG5ldyBWZWN0b3Ioe1xuICAgICAgICB4OiBldmVudC5kZWx0YVgsXG4gICAgICAgIHk6IGV2ZW50LmRlbHRhWSxcbiAgICAgIH0pLFxuICAgIH07XG5cbiAgICB0aGlzLnNjcm9sbENhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soZXZlbnQsIHRoaXMucG9zaXRpb24sIHNjcm9sbERhdGEpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzJztcbmltcG9ydCB7IERyYWdEYXRhLCBEcmFnU3RhcnREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvZG9tJztcblxuZXhwb3J0IHR5cGUgU2Nyb2xsRGF0YSA9IHtcbiAgZGVsdGE6IFZlY3Rvcjtcbn07XG5cbmV4cG9ydCB0eXBlIEN1cnNvckV2ZW50Q2FsbGJhY2s8QWRkaXRpb25hbEFyZ3MgZXh0ZW5kcyBBcnJheTx1bmtub3duPiA9IFtdPiA9IChcbiAgZXZlbnQ6IE1vdXNlRXZlbnQsXG4gIHBvc2l0aW9uOiBWZWN0b3IsXG4gIC4uLmFyZ3M6IEFkZGl0aW9uYWxBcmdzXG4pID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIEN1cnNvckludGVyZmFjZSA9IHtcbiAgcG9zaXRpb246IFZlY3RvcjtcbiAgY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgb25Eb3duOiAoY2FsbGJhY2s6IEN1cnNvckV2ZW50Q2FsbGJhY2spID0+IHZvaWQ7XG4gIG9uVGFwOiAoY2FsbGJhY2s6IEN1cnNvckV2ZW50Q2FsbGJhY2spID0+IHZvaWQ7XG4gIG9uRG91YmxlVGFwOiAoY2FsbGJhY2s6IEN1cnNvckV2ZW50Q2FsbGJhY2spID0+IHZvaWQ7XG4gIG9uTW92ZTogKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrKSA9PiB2b2lkO1xuICBvbkRyYWdTdGFydDogKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrPFtEcmFnU3RhcnREYXRhXT4pID0+IHZvaWQ7XG4gIG9uRHJhZzogKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrPFtEcmFnRGF0YV0+KSA9PiB2b2lkO1xuICBvbkRyYWdFbmQ6IChjYWxsYmFjazogQ3Vyc29yRXZlbnRDYWxsYmFjazxbRHJhZ0RhdGFdPikgPT4gdm9pZDtcbiAgb25VcDogKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrPFtEcmFnRGF0YV0+KSA9PiB2b2lkO1xuICBvblNjcm9sbDogKGNhbGxiYWNrOiBDdXJzb3JFdmVudENhbGxiYWNrPFtTY3JvbGxEYXRhXT4pID0+IHZvaWQ7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9DdXJzb3InO1xuZXhwb3J0ICogZnJvbSAnLi9DdXJzb3JJbnRlcmZhY2UnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jdXJzb3InO1xuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi90ZXh0RWRpdG9yJztcbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4uLy4uL21hdGgvcmVjdGFuZ2xlJztcbmltcG9ydCB7IGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9kb20nO1xuaW1wb3J0IHsgQ3Vyc29ySW50ZXJmYWNlIH0gZnJvbSAnLi4vY3Vyc29yJztcbmltcG9ydCB7IFNlbGVjdGlvbkV2ZW50Q2FsbGJhY2ssIFNlbGVjdGlvbkludGVyZmFjZSB9IGZyb20gJy4vU2VsZWN0aW9uSW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbiBpbXBsZW1lbnRzIFNlbGVjdGlvbkludGVyZmFjZSB7XG4gIHByaXZhdGUgY3Vyc29yOiBDdXJzb3JJbnRlcmZhY2U7XG4gIHByaXZhdGUgbGFzdERvd25FdmVudD86IE1vdXNlRXZlbnQ7XG4gIHByaXZhdGUgaXNNb3VzZURvd24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RTdGFydENhbGxiYWNrczogU2VsZWN0aW9uRXZlbnRDYWxsYmFja1tdID0gW107XG4gIHByaXZhdGUgc2VsZWN0Q2FsbGJhY2tzOiBTZWxlY3Rpb25FdmVudENhbGxiYWNrPFtSZWN0YW5nbGVdPltdID0gW107XG4gIHByaXZhdGUgc2VsZWN0RW5kQ2FsbGJhY2tzOiBTZWxlY3Rpb25FdmVudENhbGxiYWNrPFtSZWN0YW5nbGVdPltdID0gW107XG5cbiAgcHVibGljIHNlbGVjdGVkQXJlYT86IFJlY3RhbmdsZTtcblxuICBjb25zdHJ1Y3RvcihjdXJzb3I6IEN1cnNvckludGVyZmFjZSkge1xuICAgIHRoaXMuY3Vyc29yID0gY3Vyc29yO1xuXG4gICAgdGhpcy5jdXJzb3Iub25Eb3duKChldmVudCkgPT4gdGhpcy5oYW5kbGVEb3duKGV2ZW50KSk7XG4gICAgdGhpcy5jdXJzb3Iub25Nb3ZlKChldmVudCkgPT4gdGhpcy5oYW5kbGVNb3ZlKGV2ZW50KSk7XG4gICAgdGhpcy5jdXJzb3Iub25VcCgoZXZlbnQpID0+IHRoaXMuaGFuZGxlVXAoZXZlbnQpKTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdFN0YXJ0KGNhbGxiYWNrOiBTZWxlY3Rpb25FdmVudENhbGxiYWNrKSB7XG4gICAgdGhpcy5zZWxlY3RTdGFydENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdChjYWxsYmFjazogU2VsZWN0aW9uRXZlbnRDYWxsYmFjazxbUmVjdGFuZ2xlXT4pIHtcbiAgICB0aGlzLnNlbGVjdENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdEVuZChjYWxsYmFjazogU2VsZWN0aW9uRXZlbnRDYWxsYmFjazxbUmVjdGFuZ2xlXT4pIHtcbiAgICB0aGlzLnNlbGVjdEVuZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0aW9uKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmxhc3REb3duRXZlbnQpIHtcbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRGcm9tTGFzdERvd24gPSBnZXRQb3NpdGlvbkZyb21Nb3VzZUV2ZW50KHRoaXMubGFzdERvd25FdmVudCwgdGhpcy5jdXJzb3IuY29udGFpbmVyRWxlbWVudCk7XG4gICAgY29uc3QgY3VycmVudFBvaW50ID0gZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgdGhpcy5jdXJzb3IuY29udGFpbmVyRWxlbWVudCk7XG5cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb2ludEZyb21MYXN0RG93biwgY3VycmVudFBvaW50KS5zb3J0KCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmxhc3REb3duRXZlbnQgPSBldmVudDtcbiAgICB0aGlzLmlzTW91c2VEb3duID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdGVkQXJlYSA9IHRoaXMuZ2V0U2VsZWN0aW9uKGV2ZW50KTtcblxuICAgIHRoaXMuc2VsZWN0U3RhcnRDYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGV2ZW50LCB0aGlzKSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3VzZURvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkQXJlYSEudXBkYXRlRnJvbSh0aGlzLmdldFNlbGVjdGlvbihldmVudCkpO1xuXG4gICAgdGhpcy5zZWxlY3RDYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGV2ZW50LCB0aGlzLCB0aGlzLnNlbGVjdGVkQXJlYSEpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmlzTW91c2VEb3duID0gZmFsc2U7XG5cbiAgICAvLyBUT0RPIGludmVzdGlnYXRlIHdoeSB0aGlzIGhhcHBlbnMgb24gZG91YmxlIGNsaWNrXG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkQXJlYSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRBcmVhLnVwZGF0ZUZyb20odGhpcy5nZXRTZWxlY3Rpb24oZXZlbnQpKTtcblxuICAgIHRoaXMuc2VsZWN0RW5kQ2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjayhldmVudCwgdGhpcywgdGhpcy5zZWxlY3RlZEFyZWEhKSk7XG5cbiAgICB0aGlzLnNlbGVjdGVkQXJlYSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnLi4vLi4vbWF0aC9yZWN0YW5nbGUnO1xuXG5leHBvcnQgdHlwZSBTZWxlY3Rpb25FdmVudENhbGxiYWNrPEFkZGl0aW9uYWxBcmdzIGV4dGVuZHMgQXJyYXk8dW5rbm93bj4gPSBbXT4gPSAoXG4gIGV2ZW50OiBNb3VzZUV2ZW50LFxuICBzZWxlY3Rpb246IFNlbGVjdGlvbkludGVyZmFjZSxcbiAgLi4uYXJnczogQWRkaXRpb25hbEFyZ3NcbikgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgU2VsZWN0aW9uSW50ZXJmYWNlID0ge1xuICBzZWxlY3RlZEFyZWE/OiBSZWN0YW5nbGU7XG5cbiAgb25TZWxlY3RTdGFydDogKGNhbGxiYWNrOiBTZWxlY3Rpb25FdmVudENhbGxiYWNrKSA9PiB2b2lkO1xuICBvblNlbGVjdDogKGNhbGxiYWNrOiBTZWxlY3Rpb25FdmVudENhbGxiYWNrPFtSZWN0YW5nbGVdPikgPT4gdm9pZDtcbiAgb25TZWxlY3RFbmQ6IChjYWxsYmFjazogU2VsZWN0aW9uRXZlbnRDYWxsYmFjazxbUmVjdGFuZ2xlXT4pID0+IHZvaWQ7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9TZWxlY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9TZWxlY3Rpb25JbnRlcmZhY2UnO1xuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzJztcbmltcG9ydCB7IEtFWVMsIG9uS2V5RG93biB9IGZyb20gJy4uLy4uL3V0aWxzL2tleWJvYXJkJztcbmltcG9ydCB7IENoYW5nZUNhbGxiYWNrLCBDaGFuZ2VFdmVudCwgSGVpZ2h0Q2hhbmdlQ2FsbGJhY2ssIFRleHRFZGl0b3JJbnRlcmZhY2UgfSBmcm9tICcuL1RleHRFZGl0b3JJbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgVGV4dEVkaXRvciBpbXBsZW1lbnRzIFRleHRFZGl0b3JJbnRlcmZhY2Uge1xuICBwdWJsaWMgd2lkdGggPSAxMDA7XG5cbiAgcHVibGljIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBwcml2YXRlIF9oZWlnaHQgPSAxMDA7XG5cbiAgcHVibGljIHNldCBjb250ZW50KGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMudGV4dEFyZWFFbGVtZW50LnZhbHVlID0gY29udGVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnRlbnQgPSAnJztcblxuICBwcml2YXRlIHRleHRBcmVhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHByaXZhdGUgdGV4dEFyZWFXcmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHByaXZhdGUgaGVpZ2h0Q2hhbmdlQ2FsbGJhY2tzOiBIZWlnaHRDaGFuZ2VDYWxsYmFja1tdID0gW107XG4gIHByaXZhdGUgbGFzdEhlaWdodENhbGxiYWNrRmlyZWRGb3IgPSB0aGlzLmhlaWdodDtcblxuICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudGV4dEFyZWFFbGVtZW50LnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzVweCc7XG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMudGV4dEFyZWFFbGVtZW50LnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5zdHlsZS5yZXNpemUgPSAnbm9uZSc7XG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQuc3R5bGUub3V0bGluZSA9ICdub25lJztcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIHRoaXMudGV4dEFyZWFFbGVtZW50LnN0eWxlLnRvcCA9ICcwJztcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQuc3R5bGUuY2FyZXRDb2xvciA9ICdibGFjayc7XG5cbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gJ1JvYm90byc7XG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQuc3R5bGUubGluZUhlaWdodCA9ICcxNnB4JztcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9ICcxNHB4JztcblxuICAgIHRoaXMudGV4dEFyZWFXcmFwcGVyRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIHRoaXMudGV4dEFyZWFXcmFwcGVyRWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICB0aGlzLnRleHRBcmVhV3JhcHBlckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHRoaXMudGV4dEFyZWFXcmFwcGVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMudGV4dEFyZWFXcmFwcGVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy50ZXh0QXJlYVdyYXBwZXJFbGVtZW50LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB0aGlzLnRleHRBcmVhV3JhcHBlckVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG5cbiAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMudGV4dEFyZWFXcmFwcGVyRWxlbWVudCk7XG4gICAgdGhpcy50ZXh0QXJlYVdyYXBwZXJFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMudGV4dEFyZWFFbGVtZW50KTtcblxuICAgIHRoaXMudGV4dEFyZWFFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0KGV2ZW50IGFzIENoYW5nZUV2ZW50KSk7XG5cbiAgICAvLyBUT0RPIGV4cG9zZSBvbkhpZGUgd2l0aCByZWFzb24gJ2tleWJvYXJkJyBhbmQgY2xlYW4gYHNob3dGb3JCb3hgIGluIGBCb3hUZXh0RWRpdG9yYFxuICAgIG9uS2V5RG93bihLRVlTLmVzY2FwZSwgKCkgPT4gdGhpcy5oaWRlKCkpO1xuICB9XG5cbiAgcHVibGljIHNob3dBdChwb3NpdGlvbjogVmVjdG9yKSB7XG4gICAgdGhpcy50ZXh0QXJlYVdyYXBwZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMudGV4dEFyZWFFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7dGhpcy53aWR0aH1weGA7XG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uLnh9cHhgO1xuICAgIHRoaXMudGV4dEFyZWFFbGVtZW50LnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uLnl9cHhgO1xuXG4gICAgdGhpcy5sYXN0SGVpZ2h0Q2FsbGJhY2tGaXJlZEZvciA9IHRoaXMuaGVpZ2h0O1xuXG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlKCkge1xuICAgIHRoaXMudGV4dEFyZWFFbGVtZW50LmJsdXIoKTtcblxuICAgIHRoaXMudGV4dEFyZWFXcmFwcGVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgdGhpcy5jb250ZW50ID0gJyc7XG4gIH1cblxuICBwdWJsaWMgb25JbnB1dChjYWxsYmFjazogQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4gY2FsbGJhY2soZXZlbnQgYXMgQ2hhbmdlRXZlbnQpKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZShjYWxsYmFjazogQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IGNhbGxiYWNrKGV2ZW50IGFzIENoYW5nZUV2ZW50KSk7XG4gIH1cblxuICBwdWJsaWMgb25IZWlnaHRDaGFuZ2UoY2FsbGJhY2s6IEhlaWdodENoYW5nZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5oZWlnaHRDaGFuZ2VDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUlucHV0KGV2ZW50OiBDaGFuZ2VFdmVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgIGlmICh0aGlzLmxhc3RIZWlnaHRDYWxsYmFja0ZpcmVkRm9yICE9PSB0aGlzLnRleHRBcmVhRWxlbWVudC5zY3JvbGxIZWlnaHQpIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy50ZXh0QXJlYUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXG4gICAgICB0aGlzLmhlaWdodENoYW5nZUNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT5cbiAgICAgICAgY2FsbGJhY2soZXZlbnQsIHtcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgIGRlbHRhOiB0aGlzLmhlaWdodCAtIHRoaXMubGFzdEhlaWdodENhbGxiYWNrRmlyZWRGb3IsXG4gICAgICAgIH0pLFxuICAgICAgKTtcblxuICAgICAgdGhpcy5sYXN0SGVpZ2h0Q2FsbGJhY2tGaXJlZEZvciA9IHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzJztcblxuZXhwb3J0IHR5cGUgSGVpZ2h0RGF0YSA9IHtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGRlbHRhOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBDaGFuZ2VFdmVudCA9IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfTtcbmV4cG9ydCB0eXBlIENoYW5nZUNhbGxiYWNrID0gKGV2ZW50OiBDaGFuZ2VFdmVudCkgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIEhlaWdodENoYW5nZUNhbGxiYWNrID0gKGV2ZW50OiBFdmVudCwgZGF0YTogSGVpZ2h0RGF0YSkgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgVGV4dEVkaXRvckludGVyZmFjZSA9IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGNvbnRlbnQ6IHN0cmluZztcblxuICBzaG93QXQ6IChwb3NpdGlvbjogVmVjdG9yKSA9PiB2b2lkO1xuICBoaWRlOiAoKSA9PiB2b2lkO1xuXG4gIG9uSW5wdXQ6IChjYWxsYmFjazogQ2hhbmdlQ2FsbGJhY2spID0+IHZvaWQ7XG4gIG9uQ2hhbmdlOiAoY2FsbGJhY2s6IENoYW5nZUNhbGxiYWNrKSA9PiB2b2lkO1xuICBvbkhlaWdodENoYW5nZTogKGNhbGxiYWNrOiBIZWlnaHRDaGFuZ2VDYWxsYmFjaykgPT4gdm9pZDtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL1RleHRFZGl0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9UZXh0RWRpdG9ySW50ZXJmYWNlJztcbiIsImltcG9ydCB7IERpbWVuc2lvbnNSZWN0YW5nbGUgfSBmcm9tICcuLi8uLi9tYXRoL3JlY3RhbmdsZSc7XG5pbXBvcnQgeyBnZXRJZEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFJlbGF0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vcmVsYXRpb24nO1xuaW1wb3J0IHsgQm94SW50ZXJmYWNlIH0gZnJvbSAnLi9Cb3hJbnRlcmZhY2UnO1xuXG5jb25zdCBnZW5lcmF0ZUlkID0gZ2V0SWRHZW5lcmF0b3IoKTtcblxuZXhwb3J0IGNsYXNzIEJveCBleHRlbmRzIERpbWVuc2lvbnNSZWN0YW5nbGUgaW1wbGVtZW50cyBCb3hJbnRlcmZhY2Uge1xuICBwcml2YXRlIF9pZCA9IGdlbmVyYXRlSWQoKTtcblxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIHB1YmxpYyBjb250ZW50ID0gJyc7XG4gIHB1YmxpYyByZWxhdGlvbnM6IFJlbGF0aW9uSW50ZXJmYWNlW10gPSBbXTtcbn1cbiIsImltcG9ydCB7IERpbWVuc2lvbnNSZWN0YW5nbGUgfSBmcm9tICcuLi8uLi9tYXRoL3JlY3RhbmdsZSc7XG5pbXBvcnQgeyBSZWxhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL3JlbGF0aW9uJztcblxuZXhwb3J0IHR5cGUgQm94SW50ZXJmYWNlID0ge1xuICBpZDogbnVtYmVyO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHJlbGF0aW9uczogUmVsYXRpb25JbnRlcmZhY2VbXTtcbn0gJiBEaW1lbnNpb25zUmVjdGFuZ2xlO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9Cb3gnO1xuZXhwb3J0ICogZnJvbSAnLi9Cb3hJbnRlcmZhY2UnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9ib3gnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWxhdGlvbic7XG4iLCJpbXBvcnQgeyBnZXRJZEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IEJveEludGVyZmFjZSB9IGZyb20gJy4uL2JveCc7XG5pbXBvcnQgeyBSZWxhdGlvbkludGVyZmFjZSB9IGZyb20gJy4vUmVsYXRpb25JbnRlcmZhY2UnO1xuXG5jb25zdCBnZW5lcmF0ZUlkID0gZ2V0SWRHZW5lcmF0b3IoKTtcblxuZXhwb3J0IGNsYXNzIFJlbGF0aW9uIGltcGxlbWVudHMgUmVsYXRpb25JbnRlcmZhY2Uge1xuICBwcml2YXRlIF9pZCA9IGdlbmVyYXRlSWQoKTtcblxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIHB1YmxpYyBmcm9tQm94OiBCb3hJbnRlcmZhY2U7XG4gIHB1YmxpYyB0b0JveDogQm94SW50ZXJmYWNlO1xuXG4gIGNvbnN0cnVjdG9yKGZyb21Cb3g6IEJveEludGVyZmFjZSwgdG9Cb3g6IEJveEludGVyZmFjZSkge1xuICAgIHRoaXMuZnJvbUJveCA9IGZyb21Cb3g7XG4gICAgdGhpcy50b0JveCA9IHRvQm94O1xuICB9XG59XG4iLCJpbXBvcnQgeyBCb3hJbnRlcmZhY2UgfSBmcm9tICcuLi9ib3gnO1xuXG5leHBvcnQgdHlwZSBSZWxhdGlvbkludGVyZmFjZSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgZnJvbUJveDogQm94SW50ZXJmYWNlO1xuICB0b0JveDogQm94SW50ZXJmYWNlO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vUmVsYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9SZWxhdGlvbkludGVyZmFjZSc7XG4iLCJleHBvcnQgY29uc3QgY29udmVydFJhZGlhbnNUb0RlZ3JlZXMgPSAocmFkaWFuczogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHJhZGlhbnMgKiAoMTgwIC8gTWF0aC5QSSk7XG59O1xuIiwiaW1wb3J0IHsgY2VudGVyLCBWZWN0b3IgfSBmcm9tICcuLi92ZWN0b3JzJztcblxuZXhwb3J0IGNsYXNzIEVkZ2Uge1xuICBmcm9tOiBWZWN0b3I7XG4gIHRvOiBWZWN0b3I7XG5cbiAgY29uc3RydWN0b3IoZnJvbTogVmVjdG9yLCB0bzogVmVjdG9yKSB7XG4gICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICB0aGlzLnRvID0gdG87XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNlbnRlcigpIHtcbiAgICByZXR1cm4gY2VudGVyKHRoaXMuZnJvbSwgdGhpcy50byk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvbHlnb24ge1xuICBwcml2YXRlIF92ZXJ0aWNlczogVmVjdG9yW10gPSBbXTtcblxuICBwdWJsaWMgc2V0IHZlcnRpY2VzKHZlcnRpY2VzOiBWZWN0b3JbXSkge1xuICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGggPCAzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0IGxlYXN0IDMgdmVydGljZXMgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICB0aGlzLl92ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICB9XG5cbiAgcHVibGljIGdldCB2ZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljZXM7XG4gIH1cblxuICAvLyBUT0RPIG1lbW9pemU/IFJlZG8gdG8gbm90IGNhbGN1bGF0ZSBlYWNoIHRpbWUgKGNhbGN1bGF0ZSB3aGVuIHZlcnRpY2VzIGNoYW5nZWQgb25seSk/XG4gIHB1YmxpYyBnZXQgZWRnZXMoKTogRWRnZVtdIHtcbiAgICBjb25zdCBlZGdlczogRWRnZVtdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMudmVydGljZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhBID0gdGhpcy52ZXJ0aWNlc1tpXTtcbiAgICAgIGxldCB2ZXJ0ZXhCOiBWZWN0b3I7XG5cbiAgICAgIGlmICh0aGlzLnZlcnRpY2VzW2kgKyAxXSkge1xuICAgICAgICB2ZXJ0ZXhCID0gdGhpcy52ZXJ0aWNlc1tpICsgMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJ0ZXhCID0gdGhpcy52ZXJ0aWNlc1swXTtcbiAgICAgIH1cblxuICAgICAgZWRnZXMucHVzaChuZXcgRWRnZSh2ZXJ0ZXhBLCB2ZXJ0ZXhCKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgY29uc3RydWN0b3IodmVydGljZXM6IFZlY3RvcltdKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2ludGVyc2VjdCc7XG5leHBvcnQgKiBmcm9tICcuL1BvbHlnb24nO1xuIiwiaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJy4vUG9seWdvbic7XG5pbXBvcnQgeyB0b3VjaGVzIH0gZnJvbSAnLi90b3VjaGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdHMoXG4gIHBvbHlnb25BOiBQb2x5Z29uLFxuICBwb2x5Z29uQjogUG9seWdvbixcbiAgbW9kZTogJ2NlbnRlcicgfCAnY292ZXInIHwgJ3RvdWNoJyA9ICd0b3VjaCcsXG4pOiBib29sZWFuIHtcbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSAnY2VudGVyJzoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG4gICAgY2FzZSAnY292ZXInOiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cbiAgICBjYXNlICd0b3VjaCc6IHtcbiAgICAgIHJldHVybiB0b3VjaGVzKHBvbHlnb25BLCBwb2x5Z29uQik7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi92ZWN0b3JzJztcbmltcG9ydCB7IEVkZ2UsIFBvbHlnb24gfSBmcm9tICcuL1BvbHlnb24nO1xuXG4vLyBDaGVjayBpZiBwb2x5Z29uIGEgdG91Y2hlcyBwb2x5Z29uIGJcbi8vIGh0dHBzOi8vd3d3LmNvZGVwcm9qZWN0LmNvbS9BcnRpY2xlcy8xNTU3My8yRC1Qb2x5Z29uLUNvbGxpc2lvbi1EZXRlY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiB0b3VjaGVzKHBvbHlnb25BOiBQb2x5Z29uLCBwb2x5Z29uQjogUG9seWdvbikge1xuICBjb25zdCBlZGdlQ291bnRBID0gcG9seWdvbkEuZWRnZXMubGVuZ3RoO1xuICBjb25zdCBlZGdlQ291bnRCID0gcG9seWdvbkIuZWRnZXMubGVuZ3RoO1xuXG4gIGxldCBlZGdlOiBFZGdlO1xuICBmb3IgKGxldCBlZGdlSW5kZXggPSAwOyBlZGdlSW5kZXggPCBlZGdlQ291bnRBICsgZWRnZUNvdW50QjsgZWRnZUluZGV4KyspIHtcbiAgICBpZiAoZWRnZUluZGV4IDwgZWRnZUNvdW50QSkge1xuICAgICAgZWRnZSA9IHBvbHlnb25BLmVkZ2VzW2VkZ2VJbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGVkZ2UgPSBwb2x5Z29uQi5lZGdlc1tlZGdlSW5kZXggLSBlZGdlQ291bnRBXTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludCA9IGVkZ2UudG8uc3Vic3RyYWN0KGVkZ2UuZnJvbSk7XG4gICAgY29uc3QgYXhpcyA9IG5ldyBWZWN0b3Ioe1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IC0xICogcG9pbnQueSxcbiAgICB9KS5ub3JtYWxpemUoKTtcbiAgICBjb25zdCBbbWluQSwgbWF4QV0gPSBwcm9qZWN0UG9seWdvbihheGlzLCBwb2x5Z29uQSk7XG4gICAgY29uc3QgW21pbkIsIG1heEJdID0gcHJvamVjdFBvbHlnb24oYXhpcywgcG9seWdvbkIpO1xuXG4gICAgaWYgKGludGVydmFsRGlzdGFuY2UobWluQSwgbWF4QSwgbWluQiwgbWF4QikgPiAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIENhbGN1bGF0ZSB0aGUgcHJvamVjdGlvbiBvZiBhIHBvbHlnb24gb24gYW4gYXhpc1xuLy8gYW5kIHJldHVybnMgaXQgYXMgYSBbbWluLCBtYXhdIGludGVydmFsLlxuZnVuY3Rpb24gcHJvamVjdFBvbHlnb24oYXhpczogVmVjdG9yLCBwb2x5Z29uOiBQb2x5Z29uKTogW251bWJlciwgbnVtYmVyXSB7XG4gIC8vIFRvIHByb2plY3QgYSBwb2ludCBvbiBhbiBheGlzIHVzZSB0aGUgZG90IHByb2R1Y3RcbiAgbGV0IGRvdFByb2R1Y3QgPSBheGlzLmRvdFByb2R1Y3QocG9seWdvbi52ZXJ0aWNlc1swXSk7XG4gIGxldCBtaW4gPSBkb3RQcm9kdWN0O1xuICBsZXQgbWF4ID0gZG90UHJvZHVjdDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2x5Z29uLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgZG90UHJvZHVjdCA9IHBvbHlnb24udmVydGljZXNbaV0uZG90UHJvZHVjdChheGlzKTtcblxuICAgIGlmIChkb3RQcm9kdWN0IDwgbWluKSB7XG4gICAgICBtaW4gPSBkb3RQcm9kdWN0O1xuICAgIH0gZWxzZSBpZiAoZG90UHJvZHVjdCA+IG1heCkge1xuICAgICAgbWF4ID0gZG90UHJvZHVjdDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW21pbiwgbWF4XTtcbn1cblxuLy8gQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIFttaW5BLCBtYXhBXSBhbmQgW21pbkIsIG1heEJdLlxuLy8gVGhlIGRpc3RhbmNlIHdpbGwgYmUgbmVnYXRpdmUgaWYgdGhlIGludGVydmFscyBvdmVybGFwLlxuZnVuY3Rpb24gaW50ZXJ2YWxEaXN0YW5jZShtaW5BOiBudW1iZXIsIG1heEE6IG51bWJlciwgbWluQjogbnVtYmVyLCBtYXhCOiBudW1iZXIpIHtcbiAgaWYgKG1pbkEgPCBtaW5CKSB7XG4gICAgcmV0dXJuIG1pbkIgLSBtYXhBO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBtaW5BIC0gbWF4QjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vdmVjdG9ycyc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuL1JlY3RhbmdsZSc7XG5cbmV4cG9ydCBjbGFzcyBEaW1lbnNpb25zUmVjdGFuZ2xlIHtcbiAgcG9zaXRpb246IFZlY3RvcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocG9zaXRpb24gPSBuZXcgVmVjdG9yKCksIHdpZHRoID0gMTAwLCBoZWlnaHQgPSA1MCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBwdWJsaWMgdG9SZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoXG4gICAgICB0aGlzLnBvc2l0aW9uLFxuICAgICAgbmV3IFZlY3Rvcih7XG4gICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgsXG4gICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LFxuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJy4uL3BvbHlnb24nO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vdmVjdG9ycyc7XG5pbXBvcnQgeyBpbnRlcnNlY3RzIH0gZnJvbSAnLi9pbnRlcnNlY3RzJztcbmltcG9ydCB7IGlzUG9pbnRJbnNpZGUgfSBmcm9tICcuL2lzUG9pbnRJbnNpZGUnO1xuXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgLy8gVG9wIGxlZnRcbiAgc3RhcnQ6IFZlY3RvcjtcbiAgLy8gUmlnaHQgYm90dG9tXG4gIGVuZDogVmVjdG9yO1xuXG4gIGNvbnN0cnVjdG9yKHN0YXJ0ID0gbmV3IFZlY3RvcigpLCBlbmQgPSBuZXcgVmVjdG9yKCkpIHtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQuY2xvbmUoKTtcbiAgICB0aGlzLmVuZCA9IGVuZC5jbG9uZSgpO1xuICB9XG5cbiAgcHVibGljIHRvUG9seWdvbigpIHtcbiAgICByZXR1cm4gbmV3IFBvbHlnb24oW1xuICAgICAgdGhpcy5zdGFydCxcbiAgICAgIG5ldyBWZWN0b3Ioe1xuICAgICAgICB4OiB0aGlzLmVuZC54LFxuICAgICAgICB5OiB0aGlzLnN0YXJ0LnksXG4gICAgICB9KSxcbiAgICAgIHRoaXMuZW5kLFxuICAgICAgbmV3IFZlY3Rvcih7XG4gICAgICAgIHg6IHRoaXMuc3RhcnQueCxcbiAgICAgICAgeTogdGhpcy5lbmQueSxcbiAgICAgIH0pLFxuICAgIF0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZyb20ocmVjdGFuZ2xlOiBSZWN0YW5nbGUpIHtcbiAgICB0aGlzLnN0YXJ0LnggPSByZWN0YW5nbGUuc3RhcnQueDtcbiAgICB0aGlzLnN0YXJ0LnkgPSByZWN0YW5nbGUuc3RhcnQueTtcblxuICAgIHRoaXMuZW5kLnggPSByZWN0YW5nbGUuZW5kLng7XG4gICAgdGhpcy5lbmQueSA9IHJlY3RhbmdsZS5lbmQueTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZCk7XG4gIH1cblxuICBwdWJsaWMgaXNQb2ludEluc2lkZShwb2ludDogVmVjdG9yKSB7XG4gICAgcmV0dXJuIGlzUG9pbnRJbnNpZGUocG9pbnQsIHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGNlbnRyYWxpemUoKSB7XG4gICAgY29uc3QgY2VudHJhbGl6ZVZlY3RvciA9IG5ldyBWZWN0b3Ioe1xuICAgICAgeDogdGhpcy53aWR0aCAvIDIsXG4gICAgICB5OiB0aGlzLmhlaWdodCAvIDIsXG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YXJ0LnN1YnN0cmFjdChjZW50cmFsaXplVmVjdG9yKTtcbiAgICB0aGlzLmVuZC5zdWJzdHJhY3QoY2VudHJhbGl6ZVZlY3Rvcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBpbnRlcnNlY3RzKHJlY3RhbmdsZUI6IFJlY3RhbmdsZSkge1xuICAgIHJldHVybiBpbnRlcnNlY3RzKHRoaXMsIHJlY3RhbmdsZUIpO1xuICB9XG5cbiAgcHVibGljIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModGhpcy5lbmQueCAtIHRoaXMuc3RhcnQueCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModGhpcy5lbmQueSAtIHRoaXMuc3RhcnQueSk7XG4gIH1cblxuICBwdWJsaWMgbXVsdGlwbHkodmVjdG9yOiBWZWN0b3IpIHtcbiAgICB0aGlzLnN0YXJ0Lm11bHRpcGx5KHZlY3Rvcik7XG4gICAgdGhpcy5lbmQubXVsdGlwbHkodmVjdG9yKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGFkZCh2ZWN0b3I6IFZlY3Rvcikge1xuICAgIHRoaXMuc3RhcnQuYWRkKHZlY3Rvcik7XG4gICAgdGhpcy5lbmQuYWRkKHZlY3Rvcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzdWJzdHJhY3QodmVjdG9yOiBWZWN0b3IpIHtcbiAgICB0aGlzLnN0YXJ0LnN1YnN0cmFjdCh2ZWN0b3IpO1xuICAgIHRoaXMuZW5kLnN1YnN0cmFjdCh2ZWN0b3IpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc29ydCgpIHtcbiAgICBjb25zdCBhID0gdGhpcy5zdGFydDtcbiAgICBjb25zdCBiID0gdGhpcy5lbmQ7XG5cbiAgICBsZXQgdG9wTGVmdDogVmVjdG9yIHwgdW5kZWZpbmVkO1xuICAgIGxldCB0b3BSaWdodDogVmVjdG9yIHwgdW5kZWZpbmVkO1xuICAgIGxldCBib3R0b21MZWZ0OiBWZWN0b3IgfCB1bmRlZmluZWQ7XG4gICAgbGV0IGJvdHRvbVJpZ2h0OiBWZWN0b3IgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoaXNGaXJzdFRvcExlZnQoYSwgYikpIHtcbiAgICAgIHRvcExlZnQgPSBhO1xuICAgIH0gZWxzZSBpZiAoaXNGaXJzdFRvcExlZnQoYiwgYSkpIHtcbiAgICAgIHRvcExlZnQgPSBiO1xuICAgIH1cblxuICAgIGlmIChpc0ZpcnN0Qm90dG9tUmlnaHQoYSwgYikpIHtcbiAgICAgIGJvdHRvbVJpZ2h0ID0gYTtcbiAgICB9IGVsc2UgaWYgKGlzRmlyc3RCb3R0b21SaWdodChiLCBhKSkge1xuICAgICAgYm90dG9tUmlnaHQgPSBiO1xuICAgIH1cblxuICAgIGlmICh0b3BMZWZ0ICYmIGJvdHRvbVJpZ2h0KSB7XG4gICAgICB0aGlzLnN0YXJ0ID0gdG9wTGVmdDtcbiAgICAgIHRoaXMuZW5kID0gYm90dG9tUmlnaHQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoaXNGaXJzdFRvcFJpZ2h0KGEsIGIpKSB7XG4gICAgICB0b3BSaWdodCA9IGE7XG4gICAgfSBlbHNlIGlmIChpc0ZpcnN0VG9wUmlnaHQoYiwgYSkpIHtcbiAgICAgIHRvcFJpZ2h0ID0gYjtcbiAgICB9XG5cbiAgICBpZiAoaXNGaXJzdEJvdHRvbUxlZnQoYSwgYikpIHtcbiAgICAgIGJvdHRvbUxlZnQgPSBhO1xuICAgIH0gZWxzZSBpZiAoaXNGaXJzdEJvdHRvbUxlZnQoYiwgYSkpIHtcbiAgICAgIGJvdHRvbUxlZnQgPSBiO1xuICAgIH1cblxuICAgIGlmICghdG9wTGVmdCAmJiB0b3BSaWdodCAmJiBib3R0b21MZWZ0KSB7XG4gICAgICB0b3BMZWZ0ID0gbmV3IFZlY3Rvcih7XG4gICAgICAgIHg6IGJvdHRvbUxlZnQueCxcbiAgICAgICAgeTogdG9wUmlnaHQueSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghYm90dG9tUmlnaHQgJiYgdG9wUmlnaHQgJiYgYm90dG9tTGVmdCkge1xuICAgICAgYm90dG9tUmlnaHQgPSBuZXcgVmVjdG9yKHtcbiAgICAgICAgeDogdG9wUmlnaHQueCxcbiAgICAgICAgeTogYm90dG9tTGVmdC55LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0b3BMZWZ0IHx8ICFib3R0b21SaWdodCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5zdGFydCA9IHRvcExlZnQ7XG4gICAgdGhpcy5lbmQgPSBib3R0b21SaWdodDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRmlyc3RUb3BMZWZ0KGE6IFZlY3RvciwgYjogVmVjdG9yKSB7XG4gIHJldHVybiBhLnggPCBiLnggJiYgYS55IDwgYi55O1xufVxuXG5mdW5jdGlvbiBpc0ZpcnN0VG9wUmlnaHQoYTogVmVjdG9yLCBiOiBWZWN0b3IpIHtcbiAgcmV0dXJuIGEueCA+IGIueCAmJiBhLnkgPCBiLnk7XG59XG5cbmZ1bmN0aW9uIGlzRmlyc3RCb3R0b21MZWZ0KGE6IFZlY3RvciwgYjogVmVjdG9yKSB7XG4gIHJldHVybiBhLnggPCBiLnggJiYgYS55ID4gYi55O1xufVxuXG5mdW5jdGlvbiBpc0ZpcnN0Qm90dG9tUmlnaHQoYTogVmVjdG9yLCBiOiBWZWN0b3IpIHtcbiAgcmV0dXJuIGEueCA+IGIueCAmJiBhLnkgPiBiLnk7XG59XG4iLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9EYW5pZWwtSHVnL2Q3OTg0ZDgyYjU4ZDZkMjY3OWEwODdkODk2Y2EzZDJiXG5cbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4vUmVjdGFuZ2xlJztcblxuLy8gQ2hlY2sgaWYgcmVjdGFuZ2xlIGEgY29udGFpbnMgcmVjdGFuZ2xlIGIuXG4vLyBFYWNoIG9iamVjdCAoYSBhbmQgYikgc2hvdWxkIGhhdmUgMiBwcm9wZXJ0aWVzIHRvIHJlcHJlc2VudCB0aGVcbi8vIHRvcC1sZWZ0IGNvcm5lciAoeDEsIHkxKSBhbmQgMiBmb3IgdGhlIGJvdHRvbS1yaWdodCBjb3JuZXIgKHgyLCB5MikuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMoYTogUmVjdGFuZ2xlLCBiOiBSZWN0YW5nbGUpOiBib29sZWFuIHtcbiAgcmV0dXJuICEoYi5zdGFydC54IDwgYS5zdGFydC54IHx8IGIuc3RhcnQueSA8IGEuc3RhcnQueSB8fCBiLmVuZC54ID4gYS5lbmQueCB8fCBiLmVuZC55ID4gYS5lbmQueSk7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbnRhaW5zJztcbmV4cG9ydCAqIGZyb20gJy4vRGltZW5zaW9uc1JlY3RhbmdsZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyc2VjdHMnO1xuZXhwb3J0ICogZnJvbSAnLi9pc1BvaW50SW5zaWRlJztcbmV4cG9ydCAqIGZyb20gJy4vb3ZlcmxhcHMnO1xuZXhwb3J0ICogZnJvbSAnLi9SZWN0YW5nbGUnO1xuZXhwb3J0ICogZnJvbSAnLi90b3VjaGVzJztcbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4vUmVjdGFuZ2xlJztcbmltcG9ydCB7IHRvdWNoZXMgfSBmcm9tICcuL3RvdWNoZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0cyhcbiAgcmVjdGFuZ2xlQTogUmVjdGFuZ2xlLFxuICByZWN0YW5nbGVCOiBSZWN0YW5nbGUsXG4gIG1vZGU6ICdjZW50ZXInIHwgJ2NvdmVyJyB8ICd0b3VjaCcgPSAndG91Y2gnLFxuKTogYm9vbGVhbiB7XG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgJ2NlbnRlcic6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuICAgIGNhc2UgJ2NvdmVyJzoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG4gICAgY2FzZSAndG91Y2gnOiB7XG4gICAgICByZXR1cm4gdG91Y2hlcyhyZWN0YW5nbGVBLCByZWN0YW5nbGVCKTtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uL3ZlY3RvcnMnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnLi9SZWN0YW5nbGUnO1xuXG5leHBvcnQgY29uc3QgaXNQb2ludEluc2lkZSA9IChwb2ludDogVmVjdG9yLCByZWN0YW5nbGU6IFJlY3RhbmdsZSkgPT4ge1xuICBpZiAocG9pbnQueCA8IHJlY3RhbmdsZS5zdGFydC54IHx8IHBvaW50LnggPiByZWN0YW5nbGUuZW5kLngpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocG9pbnQueSA8IHJlY3RhbmdsZS5zdGFydC55IHx8IHBvaW50LnkgPiByZWN0YW5nbGUuZW5kLnkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9EYW5pZWwtSHVnL2Q3OTg0ZDgyYjU4ZDZkMjY3OWEwODdkODk2Y2EzZDJiXG5cbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4vUmVjdGFuZ2xlJztcblxuLy8gQ2hlY2sgaWYgcmVjdGFuZ2xlIGEgb3ZlcmxhcHMgcmVjdGFuZ2xlIGIuXG4vLyBFYWNoIG9iamVjdCAoYSBhbmQgYikgc2hvdWxkIGhhdmUgMiBwcm9wZXJ0aWVzIHRvIHJlcHJlc2VudCB0aGVcbi8vIHRvcC1sZWZ0IGNvcm5lciAoeDEsIHkxKSBhbmQgMiBmb3IgdGhlIGJvdHRvbS1yaWdodCBjb3JuZXIgKHgyLCB5MikuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcmxhcHMoYTogUmVjdGFuZ2xlLCBiOiBSZWN0YW5nbGUpOiBib29sZWFuIHtcbiAgLy8gTm8gaG9yaXpvbnRhbCBvdmVybGFwXG4gIGlmIChhLnN0YXJ0LnggPj0gYi5lbmQueCB8fCBiLnN0YXJ0LnggPj0gYS5lbmQueCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIE5vIHZlcnRpY2FsIG92ZXJsYXBcbiAgaWYgKGEuc3RhcnQueSA+PSBiLmVuZC55IHx8IGIuc3RhcnQueSA+PSBhLmVuZC55KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9EYW5pZWwtSHVnL2Q3OTg0ZDgyYjU4ZDZkMjY3OWEwODdkODk2Y2EzZDJiXG5cbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4vUmVjdGFuZ2xlJztcblxuLy8gQ2hlY2sgaWYgcmVjdGFuZ2xlIGEgdG91Y2hlcyByZWN0YW5nbGUgYi5cbi8vIEVhY2ggb2JqZWN0IChhIGFuZCBiKSBzaG91bGQgaGF2ZSAyIHByb3BlcnRpZXMgdG8gcmVwcmVzZW50IHRoZVxuLy8gdG9wLWxlZnQgY29ybmVyICh4MSwgeTEpIGFuZCAyIGZvciB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciAoeDIsIHkyKS5cbmV4cG9ydCBmdW5jdGlvbiB0b3VjaGVzKHJlY3RhbmdsZUE6IFJlY3RhbmdsZSwgcmVjdGFuZ2xlQjogUmVjdGFuZ2xlKSB7XG4gIC8vIEhhcyBob3Jpem9udGFsIGdhcFxuICBpZiAocmVjdGFuZ2xlQS5zdGFydC54ID4gcmVjdGFuZ2xlQi5lbmQueCB8fCByZWN0YW5nbGVCLnN0YXJ0LnggPiByZWN0YW5nbGVBLmVuZC54KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gSGFzIHZlcnRpY2FsIGdhcFxuICBpZiAocmVjdGFuZ2xlQS5zdGFydC55ID4gcmVjdGFuZ2xlQi5lbmQueSB8fCByZWN0YW5nbGVCLnN0YXJ0LnkgPiByZWN0YW5nbGVBLmVuZC55KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBhZGQgfSBmcm9tICcuL2FkZCc7XG5pbXBvcnQgeyBjZW50ZXIgfSBmcm9tICcuL2NlbnRlcic7XG5pbXBvcnQgeyBkZXZpZGUgfSBmcm9tICcuL2RldmlkZSc7XG5pbXBvcnQgeyBkb3RQcm9kdWN0IH0gZnJvbSAnLi9kb3RQcm9kdWN0JztcbmltcG9ydCB7IG1hZ25pdHVkZSB9IGZyb20gJy4vbWFnbml0dWRlJztcbmltcG9ydCB7IG11bHRpcGx5IH0gZnJvbSAnLi9tdWx0aXBseSc7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tICcuL25vcm1hbGl6ZSc7XG5pbXBvcnQgeyBzdWJ0cmFjdCB9IGZyb20gJy4vc3VidHJhY3QnO1xuXG50eXBlIENvb3JkaW5hdGVzID0ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBWZWN0b3Ige1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb29yZGluYXRlczogQ29vcmRpbmF0ZXMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9LFxuICApIHtcbiAgICB0aGlzLnggPSBjb29yZGluYXRlcy54O1xuICAgIHRoaXMueSA9IGNvb3JkaW5hdGVzLnk7XG4gIH1cblxuICBwdWJsaWMgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRnJvbSh2ZWN0b3I6IFZlY3Rvcikge1xuICAgIHRoaXMueCA9IHZlY3Rvci54O1xuICAgIHRoaXMueSA9IHZlY3Rvci55O1xuICB9XG5cbiAgcHVibGljIHN1YnN0cmFjdCh2ZWN0b3JCOiBWZWN0b3IpIHtcbiAgICBjb25zdCBzdWJ0cmFjdGVkID0gc3VidHJhY3QodGhpcywgdmVjdG9yQik7XG5cbiAgICB0aGlzLnggPSBzdWJ0cmFjdGVkLng7XG4gICAgdGhpcy55ID0gc3VidHJhY3RlZC55O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgYWRkKHZlY3RvckI6IFZlY3Rvcikge1xuICAgIGNvbnN0IGFkZGVkID0gYWRkKHRoaXMsIHZlY3RvckIpO1xuXG4gICAgdGhpcy54ID0gYWRkZWQueDtcbiAgICB0aGlzLnkgPSBhZGRlZC55O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbXVsdGlwbHkodmVjdG9yQjogVmVjdG9yKSB7XG4gICAgY29uc3QgbXVsdGlwbGllZCA9IG11bHRpcGx5KHRoaXMsIHZlY3RvckIpO1xuXG4gICAgdGhpcy54ID0gbXVsdGlwbGllZC54O1xuICAgIHRoaXMueSA9IG11bHRpcGxpZWQueTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGRldmlkZSh2ZWN0b3JCOiBWZWN0b3IpIHtcbiAgICBjb25zdCBkZXZpZGVkID0gZGV2aWRlKHRoaXMsIHZlY3RvckIpO1xuXG4gICAgdGhpcy54ID0gZGV2aWRlZC54O1xuICAgIHRoaXMueSA9IGRldmlkZWQueTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG5vcm1hbGl6ZSgpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplKHRoaXMpO1xuXG4gICAgdGhpcy54ID0gbm9ybWFsaXplZC54O1xuICAgIHRoaXMueSA9IG5vcm1hbGl6ZWQueTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGRvdFByb2R1Y3QodmVjdG9yQjogVmVjdG9yKSB7XG4gICAgcmV0dXJuIGRvdFByb2R1Y3QodGhpcywgdmVjdG9yQik7XG4gIH1cblxuICBwdWJsaWMgY2VudGVyKHRvOiBWZWN0b3IpIHtcbiAgICByZXR1cm4gY2VudGVyKHRoaXMsIHRvKTtcbiAgfVxuXG4gIHB1YmxpYyBtYWduaXR1ZGUoKSB7XG4gICAgcmV0dXJuIG1hZ25pdHVkZSh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZyhsaW1pdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHggPSBsaW1pdGVkID8gdGhpcy54LnRvRml4ZWQoMSkgOiB0aGlzLng7XG4gICAgY29uc3QgeSA9IGxpbWl0ZWQgPyB0aGlzLnkudG9GaXhlZCgxKSA6IHRoaXMueTtcblxuICAgIHJldHVybiBgJHt4fToke3l9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InO1xuXG5leHBvcnQgY29uc3QgYWRkID0gKF92ZWN0b3JBOiBWZWN0b3IsIHZlY3RvckI6IFZlY3RvcikgPT4ge1xuICBjb25zdCB2ZWN0b3JBID0gX3ZlY3RvckEuY2xvbmUoKTtcblxuICB2ZWN0b3JBLnggKz0gdmVjdG9yQi54O1xuICB2ZWN0b3JBLnkgKz0gdmVjdG9yQi55O1xuXG4gIHJldHVybiB2ZWN0b3JBO1xufTtcbiIsImltcG9ydCB7IGNvbnZlcnRSYWRpYW5zVG9EZWdyZWVzIH0gZnJvbSAnLi4vY29udmVydFJhZGlhbnNUb0RlZ3JlZXMnO1xuaW1wb3J0IHsgZG90UHJvZHVjdCB9IGZyb20gJy4vZG90UHJvZHVjdCc7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tICcuL25vcm1hbGl6ZSc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL1ZlY3Rvcic7XG5cbi8vIGh0dHBzOi8vaGFici5jb20vcnUvcG9zdC8xMzE5MzEvXG5leHBvcnQgY29uc3QgYW5nbGVCZXR3ZWVuID0gKHZlY3RvckE6IFZlY3RvciwgdmVjdG9yQjogVmVjdG9yKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIGNvbnZlcnRSYWRpYW5zVG9EZWdyZWVzKE1hdGguYWNvcyhkb3RQcm9kdWN0KG5vcm1hbGl6ZSh2ZWN0b3JBKSwgbm9ybWFsaXplKHZlY3RvckIpKSkpO1xufTtcbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJztcblxuLy8gaHR0cDovL3Byb2JsZW1zcGh5c2ljcy5jb20vdmVjdG9ycy9wYXJhbGxlbF9wZXJwZW5kX3ZlY3RvcnMuaHRtbFxuZXhwb3J0IGNvbnN0IGFyZVBhcmFsbGVsID0gKHZlY3RvckE6IFZlY3RvciwgdmVjdG9yQjogVmVjdG9yKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiB2ZWN0b3JBLnggKiB2ZWN0b3JCLnkgPT09IHZlY3RvckIueCAqIHZlY3RvckEueTtcbn07XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL1ZlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBjZW50ZXIgPSAoZnJvbTogVmVjdG9yLCB0bzogVmVjdG9yKTogVmVjdG9yID0+IHtcbiAgY29uc3QgeCA9IGZyb20ueCArICh0by54IC0gZnJvbS54KSAvIDI7XG4gIGNvbnN0IHkgPSBmcm9tLnkgKyAodG8ueSAtIGZyb20ueSkgLyAyO1xuXG4gIHJldHVybiBuZXcgVmVjdG9yKHsgeCwgeSB9KTtcbn07XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL1ZlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBkZXZpZGUgPSAoX3ZlY3RvckE6IFZlY3RvciwgdmVjdG9yQjogVmVjdG9yKSA9PiB7XG4gIGNvbnN0IHZlY3RvckEgPSBfdmVjdG9yQS5jbG9uZSgpO1xuXG4gIHZlY3RvckEueCAvPSB2ZWN0b3JCLng7XG4gIHZlY3RvckEueSAvPSB2ZWN0b3JCLnk7XG5cbiAgcmV0dXJuIHZlY3RvckE7XG59O1xuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InO1xuXG4vLyBodHRwczovL3d3dy5tYXRoc2lzZnVuLmNvbS9hbGdlYnJhL3ZlY3RvcnMtZG90LXByb2R1Y3QuaHRtbFxuZXhwb3J0IGNvbnN0IGRvdFByb2R1Y3QgPSAodmVjdG9yQTogVmVjdG9yLCB2ZWN0b3JCOiBWZWN0b3IpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gdmVjdG9yQS54ICogdmVjdG9yQi54ICsgdmVjdG9yQS55ICogdmVjdG9yQi55O1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYWRkJztcbmV4cG9ydCAqIGZyb20gJy4vYW5nbGVCZXR3ZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vYXJlUGFyYWxsZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9jZW50ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9kZXZpZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9kb3RQcm9kdWN0JztcbmV4cG9ydCAqIGZyb20gJy4vbWFnbml0dWRlJztcbmV4cG9ydCAqIGZyb20gJy4vbXVsdGlwbHknO1xuZXhwb3J0ICogZnJvbSAnLi9ub3JtYWxpemUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdWJ0cmFjdCc7XG5leHBvcnQgKiBmcm9tICcuL1ZlY3Rvcic7XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL1ZlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBtYWduaXR1ZGUgPSAoeyB4LCB5IH06IFZlY3RvcikgPT4ge1xuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xufTtcbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJztcblxuZXhwb3J0IGNvbnN0IG11bHRpcGx5ID0gKF92ZWN0b3JBOiBWZWN0b3IsIHZlY3RvckI6IFZlY3RvcikgPT4ge1xuICBjb25zdCB2ZWN0b3JBID0gX3ZlY3RvckEuY2xvbmUoKTtcblxuICB2ZWN0b3JBLnggKj0gdmVjdG9yQi54O1xuICB2ZWN0b3JBLnkgKj0gdmVjdG9yQi55O1xuXG4gIHJldHVybiB2ZWN0b3JBO1xufTtcbiIsImltcG9ydCB7IG1hZ25pdHVkZSB9IGZyb20gJy4vbWFnbml0dWRlJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJztcblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZSA9IChfdmVjdG9yOiBWZWN0b3IpOiBWZWN0b3IgPT4ge1xuICBjb25zdCB2ZWN0b3IgPSBfdmVjdG9yLmNsb25lKCk7XG4gIGNvbnN0IHZlY3Rvck1hZ25pdHVkZSA9IG1hZ25pdHVkZSh2ZWN0b3IpO1xuXG4gIHZlY3Rvci54IC89IHZlY3Rvck1hZ25pdHVkZTtcbiAgdmVjdG9yLnkgLz0gdmVjdG9yTWFnbml0dWRlO1xuXG4gIHJldHVybiB2ZWN0b3I7XG59O1xuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InO1xuXG5leHBvcnQgY29uc3Qgc3VidHJhY3QgPSAoX3ZlY3RvckE6IFZlY3RvciwgdmVjdG9yQjogVmVjdG9yKTogVmVjdG9yID0+IHtcbiAgY29uc3QgdmVjdG9yQSA9IF92ZWN0b3JBLmNsb25lKCk7XG5cbiAgdmVjdG9yQS54IC09IHZlY3RvckIueDtcbiAgdmVjdG9yQS55IC09IHZlY3RvckIueTtcblxuICByZXR1cm4gdmVjdG9yQTtcbn07XG4iLCJpbXBvcnQgeyBEaW1lbnNpb25zUmVjdGFuZ2xlIH0gZnJvbSAnLi4vLi4vbWF0aC9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzJztcbmltcG9ydCB7XG4gIENsZWFyQXJlYU9wdGlvbnMsXG4gIEN1cnNvclR5cGUsXG4gIERpbWVuc2lvbnNPcHRpb25zLFxuICBEcmF3ZXJJbnRlcmZhY2UsXG4gIEdldFRleHRMaW5lc09wdGlvbnMsXG4gIExpbmVPcHRpb25zLFxuICBSZWN0YW5nbGVPcHRpb25zLFxuICBUZXh0QWZ0ZXJQb2ludE9wdGlvbnMsXG4gIFRleHRJblJlY3RhbmdsZU9wdGlvbnMsXG4gIFRleHRMaW5lc09wdGlvbnMsXG4gIFRleHRPcHRpb25zLFxufSBmcm9tICcuL0RyYXdlckludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBEcmF3ZXIgaW1wbGVtZW50cyBEcmF3ZXJJbnRlcmZhY2Uge1xuICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgcHJpdmF0ZSBfb2Zmc2V0ID0gbmV3IFZlY3RvcigpO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBtZXJnZVdpdGhEZWZhdWx0VGV4dE9wdGlvbnMoe1xuICAgIGZvbnRGYW1pbHkgPSAnUm9ib3RvJyxcbiAgICBmb250U2l6ZSA9IDE0LFxuICAgIGxpbmVIZWlnaHQgPSAxNixcbiAgICBwYWRkaW5nID0gNSxcbiAgfTogUGFydGlhbDxUZXh0T3B0aW9ucz4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9udEZhbWlseSxcbiAgICAgIGZvbnRTaXplLFxuICAgICAgbGluZUhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckFyZWEoeyBhcmVhOiBfYXJlYSwgb2Zmc2V0ID0gbmV3IFZlY3RvcigpIH06IENsZWFyQXJlYU9wdGlvbnMpIHtcbiAgICBjb25zdCBhcmVhID0gX2FyZWEuY2xvbmUoKS5hZGQob2Zmc2V0KTtcbiAgICBjb25zdCBzdGFydFggPSBhcmVhLnN0YXJ0Lng7XG4gICAgY29uc3Qgc3RhcnRZID0gYXJlYS5zdGFydC55O1xuICAgIGNvbnN0IHdpZHRoID0gYXJlYS5lbmQueCAtIHN0YXJ0WDtcbiAgICBjb25zdCBoZWlnaHQgPSBhcmVhLmVuZC55IC0gc3RhcnRZO1xuXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdChzdGFydFgsIHN0YXJ0WSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBwdWJsaWMgcmVjdGFuZ2xlKHtcbiAgICBmaWxsU3R5bGUgPSAncmVkJyxcbiAgICBsaW5lV2lkdGggPSAxLFxuICAgIHN0cm9rZVN0eWxlID0gJ3RyYW5zcGFyZW50JyxcbiAgICByZWN0YW5nbGU6IF9yZWN0YW5nbGUsXG4gICAgem9vbUxldmVsID0gMSxcbiAgICBvZmZzZXQgPSBuZXcgVmVjdG9yKCksXG4gIH06IFJlY3RhbmdsZU9wdGlvbnMpIHtcbiAgICBjb25zdCByZWN0YW5nbGUgPSAoX3JlY3RhbmdsZSBpbnN0YW5jZW9mIERpbWVuc2lvbnNSZWN0YW5nbGUgPyBfcmVjdGFuZ2xlLnRvUmVjdGFuZ2xlKCkgOiBfcmVjdGFuZ2xlKVxuICAgICAgLmNsb25lKClcbiAgICAgIC5tdWx0aXBseShcbiAgICAgICAgbmV3IFZlY3Rvcih7XG4gICAgICAgICAgeDogem9vbUxldmVsLFxuICAgICAgICAgIHk6IHpvb21MZXZlbCxcbiAgICAgICAgfSksXG4gICAgICApXG4gICAgICAuYWRkKG9mZnNldCk7XG5cbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG5cbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jb250ZXh0LnJlY3QocmVjdGFuZ2xlLnN0YXJ0LngsIHJlY3RhbmdsZS5zdGFydC55LCByZWN0YW5nbGUud2lkdGgsIHJlY3RhbmdsZS5oZWlnaHQpO1xuICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgcHVibGljIGxpbmUoe1xuICAgIGZyb206IF9mcm9tLFxuICAgIHRvOiBfdG8sXG4gICAgc3Ryb2tlU3R5bGUgPSAnYmxhY2snLFxuICAgIGxpbmVXaWR0aCA9IDEsXG4gICAgem9vbUxldmVsID0gMSxcbiAgICBvZmZzZXQgPSBuZXcgVmVjdG9yKCksXG4gIH06IExpbmVPcHRpb25zKSB7XG4gICAgY29uc3QgZnJvbSA9IF9mcm9tXG4gICAgICAuY2xvbmUoKVxuICAgICAgLm11bHRpcGx5KG5ldyBWZWN0b3IoeyB4OiB6b29tTGV2ZWwsIHk6IHpvb21MZXZlbCB9KSlcbiAgICAgIC5hZGQob2Zmc2V0KTtcblxuICAgIGNvbnN0IHRvID0gX3RvXG4gICAgICAuY2xvbmUoKVxuICAgICAgLm11bHRpcGx5KG5ldyBWZWN0b3IoeyB4OiB6b29tTGV2ZWwsIHk6IHpvb21MZXZlbCB9KSlcbiAgICAgIC5hZGQob2Zmc2V0KTtcblxuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xuICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG5cbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhmcm9tLngsIGZyb20ueSk7XG4gICAgdGhpcy5jb250ZXh0LmxpbmVUbyh0by54LCB0by55KTtcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VGV4dExpbmVzKG9wdGlvbnM6IEdldFRleHRMaW5lc09wdGlvbnMpIHtcbiAgICBjb25zdCB7IGZvbnRGYW1pbHksIGZvbnRTaXplOiBfZm9udFNpemUsIHBhZGRpbmc6IF9wYWRkaW5nIH0gPSBEcmF3ZXIubWVyZ2VXaXRoRGVmYXVsdFRleHRPcHRpb25zKG9wdGlvbnMpO1xuICAgIGNvbnN0IHsgdGV4dCwgcmVjdGFuZ2xlOiBfcmVjdGFuZ2xlLCB6b29tTGV2ZWwgPSAxIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGZvbnRTaXplID0gX2ZvbnRTaXplICogem9vbUxldmVsO1xuICAgIGNvbnN0IHBhZGRpbmcgPSBfZm9udFNpemUgKiBfcGFkZGluZztcblxuICAgIHRoaXMuY29udGV4dC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtmb250RmFtaWx5fWA7XG4gICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICB0aGlzLmNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG5cbiAgICBjb25zdCByZWN0YW5nbGUgPSAoX3JlY3RhbmdsZSBpbnN0YW5jZW9mIERpbWVuc2lvbnNSZWN0YW5nbGUgPyBfcmVjdGFuZ2xlLnRvUmVjdGFuZ2xlKCkgOiBfcmVjdGFuZ2xlKVxuICAgICAgLmNsb25lKClcbiAgICAgIC5tdWx0aXBseShcbiAgICAgICAgbmV3IFZlY3Rvcih7XG4gICAgICAgICAgeDogem9vbUxldmVsLFxuICAgICAgICAgIHk6IHpvb21MZXZlbCxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIGNvbnN0IHdpZHRoVG9GaXRUZXh0ID0gcmVjdGFuZ2xlLndpZHRoIC0gcGFkZGluZyAqIDI7XG4gICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICBjb25zdCBjaGFyYWN0ZXJDb3VudCA9IHRleHQubGVuZ3RoO1xuXG4gICAgbGV0IGJ1ZmZlciA9ICcnO1xuICAgIGxldCBwcmV2aW91c0J1ZmZlciA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhcmFjdGVyQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgY2hhcmFjdGVyID0gdGV4dFtpXTtcblxuICAgICAgcHJldmlvdXNCdWZmZXIgPSBidWZmZXI7XG4gICAgICBidWZmZXIgKz0gY2hhcmFjdGVyO1xuXG4gICAgICBjb25zdCBidWZmZXJXaWR0aCA9IHRoaXMuY29udGV4dC5tZWFzdXJlVGV4dChidWZmZXIpLndpZHRoO1xuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSAnXFxuJykge1xuICAgICAgICBsaW5lcy5wdXNoKHByZXZpb3VzQnVmZmVyKTtcbiAgICAgICAgYnVmZmVyID0gJyc7XG4gICAgICB9IGVsc2UgaWYgKGJ1ZmZlcldpZHRoID4gd2lkdGhUb0ZpdFRleHQpIHtcbiAgICAgICAgbGluZXMucHVzaChwcmV2aW91c0J1ZmZlcik7XG4gICAgICAgIGJ1ZmZlciA9ICcnO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJ1ZmZlcikge1xuICAgICAgbGluZXMucHVzaChidWZmZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIHB1YmxpYyB0ZXh0TGluZXNBZnRlclBvaW50KG9wdGlvbnM6IFRleHRMaW5lc09wdGlvbnMpIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uOiBfcG9zaXRpb24sIGxpbmVzLCBmb250RmFtaWx5LCBvZmZzZXQgPSBuZXcgVmVjdG9yKCksIHpvb21MZXZlbCA9IDEgfSA9IG9wdGlvbnM7XG4gICAgY29uc3Qge1xuICAgICAgbGluZUhlaWdodDogX2xpbmVIZWlnaHQsXG4gICAgICBwYWRkaW5nOiBfcGFkZGluZyxcbiAgICAgIGZvbnRTaXplOiBfZm9udFNpemUsXG4gICAgfSA9IERyYXdlci5tZXJnZVdpdGhEZWZhdWx0VGV4dE9wdGlvbnMob3B0aW9ucyk7XG4gICAgY29uc3QgbGluZUhlaWdodCA9IF9saW5lSGVpZ2h0ICogem9vbUxldmVsO1xuICAgIGNvbnN0IHBhZGRpbmcgPSBfcGFkZGluZyAqIHpvb21MZXZlbDtcbiAgICBjb25zdCBmb250U2l6ZSA9IF9mb250U2l6ZSAqIHpvb21MZXZlbDtcbiAgICBjb25zdCBsaW5lSGVpZ2h0T2Zmc2V0ID0gbGluZUhlaWdodCAvIGZvbnRTaXplO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gX3Bvc2l0aW9uXG4gICAgICAuY2xvbmUoKVxuICAgICAgLm11bHRpcGx5KFxuICAgICAgICBuZXcgVmVjdG9yKHtcbiAgICAgICAgICB4OiB6b29tTGV2ZWwsXG4gICAgICAgICAgeTogem9vbUxldmVsLFxuICAgICAgICB9KSxcbiAgICAgIClcbiAgICAgIC5hZGQob2Zmc2V0KTtcblxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuY29udGV4dC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtmb250RmFtaWx5fWA7XG4gICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICB0aGlzLmNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG5cbiAgICBsZXQgdG9wT2Zmc2V0ID0gMDtcbiAgICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQobGluZSwgcG9zaXRpb24ueCArIHBhZGRpbmcsIHBvc2l0aW9uLnkgKyBwYWRkaW5nICsgbGluZUhlaWdodE9mZnNldCArIHRvcE9mZnNldCk7XG4gICAgICB0b3BPZmZzZXQgKz0gbGluZUhlaWdodDtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0ZXh0SW5SZWN0YW5nbGUob3B0aW9uczogVGV4dEluUmVjdGFuZ2xlT3B0aW9ucykge1xuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5nZXRUZXh0TGluZXMob3B0aW9ucyk7XG4gICAgY29uc3QgeyByZWN0YW5nbGU6IF9yZWN0YW5nbGUgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgcmVjdGFuZ2xlID0gX3JlY3RhbmdsZSBpbnN0YW5jZW9mIERpbWVuc2lvbnNSZWN0YW5nbGUgPyBfcmVjdGFuZ2xlLnRvUmVjdGFuZ2xlKCkgOiBfcmVjdGFuZ2xlO1xuXG4gICAgdGhpcy50ZXh0TGluZXNBZnRlclBvaW50KHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBwb3NpdGlvbjogcmVjdGFuZ2xlLnN0YXJ0LFxuICAgICAgbGluZXMsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdGV4dEFmdGVyUG9pbnQob3B0aW9uczogVGV4dEFmdGVyUG9pbnRPcHRpb25zKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbjogX3Bvc2l0aW9uLCB0ZXh0LCBvZmZzZXQgPSBuZXcgVmVjdG9yKCksIHpvb21MZXZlbCA9IDEgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgcG9zaXRpb24gPSBfcG9zaXRpb25cbiAgICAgIC5jbG9uZSgpXG4gICAgICAubXVsdGlwbHkoXG4gICAgICAgIG5ldyBWZWN0b3Ioe1xuICAgICAgICAgIHg6IHpvb21MZXZlbCxcbiAgICAgICAgICB5OiB6b29tTGV2ZWwsXG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgICAgLmFkZChvZmZzZXQpO1xuXG4gICAgY29uc3QgeyBwYWRkaW5nLCBmb250U2l6ZTogX2ZvbnRTaXplLCBmb250RmFtaWx5IH0gPSBEcmF3ZXIubWVyZ2VXaXRoRGVmYXVsdFRleHRPcHRpb25zKG9wdGlvbnMpO1xuICAgIGNvbnN0IGZvbnRTaXplID0gX2ZvbnRTaXplICogem9vbUxldmVsO1xuXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5jb250ZXh0LmZvbnQgPSBgJHtmb250U2l6ZX1weCAke2ZvbnRGYW1pbHl9YDtcbiAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIHRoaXMuY29udGV4dC50ZXh0QmFzZWxpbmUgPSAndG9wJztcblxuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0ZXh0LCBwb3NpdGlvbi54ICsgcGFkZGluZywgcG9zaXRpb24ueSArIHBhZGRpbmcpO1xuICB9XG5cbiAgcHVibGljIGN1cnNvcih0eXBlOiBDdXJzb3JUeXBlKSB7XG4gICAgdGhpcy5jb250ZXh0LmNhbnZhcy5zdHlsZS5jdXJzb3IgPSB0eXBlO1xuICB9XG5cbiAgcHVibGljIGRpbWVuc2lvbnMoeyB3aWR0aCwgaGVpZ2h0IH06IERpbWVuc2lvbnNPcHRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29udGV4dC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaW1lbnNpb25zUmVjdGFuZ2xlLCBSZWN0YW5nbGUgfSBmcm9tICcuLi8uLi9tYXRoL3JlY3RhbmdsZSc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMnO1xuXG5leHBvcnQgZW51bSBDdXJzb3JUeXBlIHtcbiAgRGVmYXVsdCA9ICdkZWZhdWx0JyxcbiAgR3JhYiA9ICdncmFiJyxcbn1cblxuZXhwb3J0IHR5cGUgVGV4dE9wdGlvbnMgPSB7XG4gIGZvbnRGYW1pbHk6IHN0cmluZztcbiAgbGluZUhlaWdodDogbnVtYmVyO1xuICBmb250U2l6ZTogbnVtYmVyO1xuICBwYWRkaW5nOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBHZXRUZXh0TGluZXNPcHRpb25zID0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHJlY3RhbmdsZTogRGltZW5zaW9uc1JlY3RhbmdsZSB8IFJlY3RhbmdsZTtcbiAgem9vbUxldmVsPzogbnVtYmVyO1xufSAmIE9taXQ8UGFydGlhbDxUZXh0T3B0aW9ucz4sICdsaW5lSGVpZ2h0Jz47XG5cbmV4cG9ydCB0eXBlIFRleHRJblJlY3RhbmdsZU9wdGlvbnMgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgcmVjdGFuZ2xlOiBEaW1lbnNpb25zUmVjdGFuZ2xlIHwgUmVjdGFuZ2xlO1xuICBvZmZzZXQ/OiBWZWN0b3I7XG4gIHpvb21MZXZlbD86IG51bWJlcjtcbn0gJiBQYXJ0aWFsPFRleHRPcHRpb25zPjtcblxuZXhwb3J0IHR5cGUgVGV4dEFmdGVyUG9pbnRPcHRpb25zID0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBWZWN0b3I7XG4gIG9mZnNldD86IFZlY3RvcjtcbiAgem9vbUxldmVsPzogbnVtYmVyO1xufSAmIFBhcnRpYWw8VGV4dE9wdGlvbnM+O1xuXG5leHBvcnQgdHlwZSBUZXh0TGluZXNPcHRpb25zID0ge1xuICBsaW5lczogc3RyaW5nW107XG4gIHBvc2l0aW9uOiBWZWN0b3I7XG4gIG9mZnNldD86IFZlY3RvcjtcbiAgem9vbUxldmVsPzogbnVtYmVyO1xufSAmIFBhcnRpYWw8VGV4dE9wdGlvbnM+O1xuXG5leHBvcnQgdHlwZSBDbGVhckFyZWFPcHRpb25zID0ge1xuICBhcmVhOiBSZWN0YW5nbGU7XG4gIG9mZnNldD86IFZlY3Rvcjtcbn07XG5cbmV4cG9ydCB0eXBlIFJlY3RhbmdsZU9wdGlvbnMgPSB7XG4gIGZpbGxTdHlsZT86IHN0cmluZztcbiAgc3Ryb2tlU3R5bGU/OiBzdHJpbmc7XG4gIGxpbmVXaWR0aD86IG51bWJlcjtcbiAgcmVjdGFuZ2xlOiBEaW1lbnNpb25zUmVjdGFuZ2xlIHwgUmVjdGFuZ2xlO1xuICB6b29tTGV2ZWw/OiBudW1iZXI7XG4gIG9mZnNldD86IFZlY3Rvcjtcbn07XG5cbmV4cG9ydCB0eXBlIExpbmVPcHRpb25zID0ge1xuICBmcm9tOiBWZWN0b3I7XG4gIHRvOiBWZWN0b3I7XG4gIHN0cm9rZVN0eWxlPzogc3RyaW5nO1xuICBsaW5lV2lkdGg/OiBudW1iZXI7XG4gIHpvb21MZXZlbD86IG51bWJlcjtcbiAgb2Zmc2V0PzogVmVjdG9yO1xufTtcblxuZXhwb3J0IHR5cGUgRGltZW5zaW9uc09wdGlvbnMgPSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgRHJhd2VySW50ZXJmYWNlID0ge1xuICBjbGVhckFyZWE6IChvcHRpb25zOiBDbGVhckFyZWFPcHRpb25zKSA9PiB2b2lkO1xuICByZWN0YW5nbGU6IChvcHRpb25zOiBSZWN0YW5nbGVPcHRpb25zKSA9PiB2b2lkO1xuICBsaW5lOiAob3B0aW9uczogTGluZU9wdGlvbnMpID0+IHZvaWQ7XG4gIGdldFRleHRMaW5lczogKG9wdGlvbnM6IEdldFRleHRMaW5lc09wdGlvbnMpID0+IHN0cmluZ1tdO1xuICB0ZXh0TGluZXNBZnRlclBvaW50OiAob3B0aW9uczogVGV4dExpbmVzT3B0aW9ucykgPT4gdm9pZDtcbiAgdGV4dEluUmVjdGFuZ2xlOiAob3B0aW9uczogVGV4dEluUmVjdGFuZ2xlT3B0aW9ucykgPT4gdm9pZDtcbiAgdGV4dEFmdGVyUG9pbnQ6IChvcHRpb25zOiBUZXh0QWZ0ZXJQb2ludE9wdGlvbnMpID0+IHZvaWQ7XG4gIGN1cnNvcjogKHR5cGU6IEN1cnNvclR5cGUpID0+IHZvaWQ7XG4gIGRpbWVuc2lvbnM6IChvcHRpb25zOiBEaW1lbnNpb25zT3B0aW9ucykgPT4gdm9pZDtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL0RyYXdlcic7XG5leHBvcnQgKiBmcm9tICcuL0RyYXdlckludGVyZmFjZSc7XG4iLCJleHBvcnQgKiBmcm9tICcuL2RyYXdlcic7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmVyJztcbiIsImV4cG9ydCB0eXBlIEFuaW1hdGlvbkNhbGxiYWNrID0gKGRlbHRhOiBudW1iZXIpID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIFJlbmRlcmVySW50ZXJmYWNlID0ge1xuICBvbkFuaW1hdGU6IChjYWxsYmFjazogQW5pbWF0aW9uQ2FsbGJhY2spID0+IHZvaWQ7XG59O1xuIiwiaW1wb3J0IHsgQW5pbWF0aW9uQ2FsbGJhY2ssIFJlbmRlcmVySW50ZXJmYWNlIH0gZnJvbSAnLi9SZW5kZXJlckludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJlciBpbXBsZW1lbnRzIFJlbmRlcmVySW50ZXJmYWNlIHtcbiAgcHJpdmF0ZSBsYXN0QW5pbWF0aW9uID0gRGF0ZS5ub3coKTtcbiAgcHJpdmF0ZSBmcHMgPSA2MDtcbiAgcHJpdmF0ZSBmcHNJbnRlcnZhbCA9IDEwMDAgLyB0aGlzLmZwcztcbiAgcHJpdmF0ZSBhbmltYXRpb25DYWxsYmFja3M6IEFuaW1hdGlvbkNhbGxiYWNrW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgYW5pbWF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlKCkpO1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBlbGFwc2VkID0gbm93IC0gdGhpcy5sYXN0QW5pbWF0aW9uO1xuXG4gICAgaWYgKGVsYXBzZWQgPiB0aGlzLmZwc0ludGVydmFsKSB7XG4gICAgICB0aGlzLmxhc3RBbmltYXRpb24gPSBub3cgLSAoZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuICAgICAgdGhpcy5hbmltYXRpb25DYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGVsYXBzZWQpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25BbmltYXRlKGNhbGxiYWNrOiBBbmltYXRpb25DYWxsYmFjaykge1xuICAgIHRoaXMuYW5pbWF0aW9uQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL1JlbmRlcmVySW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vUmVucmVyZXInO1xuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3JzJztcbmltcG9ydCB7IGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQgfSBmcm9tICcuL2dldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQnO1xuXG5leHBvcnQgZW51bSBEcmFnTW9kZSB7XG4gIERvd24gPSAnZG93bicsXG4gIERvdWJsZURvd24gPSAnZG91YmxlLWRvd24nLFxufVxuXG5leHBvcnQgdHlwZSBEcmFnU3RhcnREYXRhID0ge1xuICBzdGFydGVkQXQ6IFZlY3Rvcjtcbn07XG5cbmV4cG9ydCB0eXBlIERyYWdEYXRhID0ge1xuICB0b3RhbERlbHRhOiBWZWN0b3I7XG4gIGRlbHRhOiBWZWN0b3I7XG59ICYgRHJhZ1N0YXJ0RGF0YTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZGVkQ2xpY2tIYW5kbGVyID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgX29wdGlvbnM6IHtcbiAgICAvLyBJbiBtaWxsaXNlY29uZHNcbiAgICBkb3VibGVDbGlja1RocmVzaG9sZD86IG51bWJlcjtcbiAgICBzaWxlbmNlQ2xpY2tBZnRlckRyYWc/OiBib29sZWFuO1xuICAgIHNpbGVuY2VNb3VzZVVwQWZ0ZXJEcmFnPzogYm9vbGVhbjtcbiAgICBzaWxlbmNlTW91c2VEb3duQWZ0ZXJEcmFnPzogYm9vbGVhbjtcbiAgICBlbmFibGVEcmFnPzogYm9vbGVhbjtcbiAgICBkZWJ1Zz86IGJvb2xlYW47XG4gICAgZHJhZ01vZGU/OiBEcmFnTW9kZTtcbiAgICBvbkNsaWNrPzogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xuICAgIG9uRG91YmxlQ2xpY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG4gICAgb25EcmFnU3RhcnQ/OiAoZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IFBpY2s8RHJhZ0RhdGEsICdzdGFydGVkQXQnPikgPT4gdm9pZDtcbiAgICBvbkRyYWc/OiAoZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IERyYWdEYXRhKSA9PiB2b2lkO1xuICAgIG9uRHJhZ0VuZD86IChldmVudDogTW91c2VFdmVudCwgZGF0YTogRHJhZ0RhdGEpID0+IHZvaWQ7XG4gICAgb25Nb3VzZURvd24/OiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG4gICAgb25Eb3VibGVNb3VzZURvd24/OiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG4gICAgb25Nb3VzZVVwPzogKGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBEcmFnRGF0YSkgPT4gdm9pZDtcbiAgfSA9IHt9LFxuKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4ue1xuICAgICAgc2lsZW5jZUNsaWNrQWZ0ZXJEcmFnOiBmYWxzZSxcbiAgICAgIHNpbGVuY2VNb3VzZVVwQWZ0ZXJEcmFnOiBmYWxzZSxcbiAgICAgIHNpbGVuY2VNb3VzZURvd25BZnRlckRyYWc6IGZhbHNlLFxuICAgICAgZW5hYmxlRHJhZzogdHJ1ZSxcbiAgICAgIGRyYWdNb2RlOiBEcmFnTW9kZS5Eb3duLFxuICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgZG91YmxlQ2xpY2tUaHJlc2hvbGQ6IDI4MCxcbiAgICB9LFxuICAgIC4uLl9vcHRpb25zLFxuICB9O1xuXG4gIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS5sb2coJ0V4dGVuZGVkIGNsaWNrIGhhbmRsZXIgb3B0aW9uczonLCBvcHRpb25zKTtcbiAgfVxuXG4gIGxldCBsYXN0Q2xpY2tUaW1lID0gMDtcbiAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgbGV0IGlzRG91YmxlQ2xpY2sgPSBmYWxzZTtcbiAgbGV0IGlzTW91c2VEb3duID0gZmFsc2U7XG4gIGxldCBsYXN0TW91c2VEb3duVGltZSA9IDA7XG4gIGxldCBpc0RvdWJsZU1vdXNlRG93biA9IGZhbHNlO1xuICBsZXQgc2hvdWxkU2lsZW5jZUNsaWNrID0gZmFsc2U7XG4gIGxldCBzaG91bGRTaWxlbmNlTW91c2VVcCA9IGZhbHNlO1xuICBsZXQgc2hvdWxkU2lsZW5jZU1vdXNlRG93biA9IGZhbHNlO1xuICBsZXQgbGFzdE1vdXNlRG93bkV2ZW50OiBNb3VzZUV2ZW50IHwgdW5kZWZpbmVkO1xuICBsZXQgbGFzdERyYWdFdmVudDogTW91c2VFdmVudCB8IHVuZGVmaW5lZDtcbiAgbGV0IHNob3VsZENhbGxEcmFnU3RhcnRDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VEb3duVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHRpbWVQYXNzZWQgPSBtb3VzZURvd25UaW1lIC0gbGFzdE1vdXNlRG93blRpbWU7XG5cbiAgICBpc0RvdWJsZU1vdXNlRG93biA9IHRpbWVQYXNzZWQgPCBvcHRpb25zLmRvdWJsZUNsaWNrVGhyZXNob2xkO1xuICAgIGxhc3RNb3VzZURvd25UaW1lID0gbW91c2VEb3duVGltZTtcblxuICAgIGlzTW91c2VEb3duID0gdHJ1ZTtcbiAgICBsYXN0TW91c2VEb3duRXZlbnQgPSBldmVudDtcblxuICAgIHNob3VsZENhbGxEcmFnU3RhcnRDYWxsYmFjayA9IHRydWU7XG5cbiAgICBpZiAoc2hvdWxkU2lsZW5jZU1vdXNlRG93bikge1xuICAgICAgc2hvdWxkU2lsZW5jZU1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0RvdWJsZU1vdXNlRG93bikge1xuICAgICAgaWYgKG9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RvdWJsZSBtb3VzZSBkb3duJywgZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgZWxlbWVudCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5vbkRvdWJsZU1vdXNlRG93bikge1xuICAgICAgICBvcHRpb25zLm9uRG91YmxlTW91c2VEb3duKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ01vdXNlIGRvd24nLCBnZXRQb3NpdGlvbkZyb21Nb3VzZUV2ZW50KGV2ZW50LCBlbGVtZW50KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm9uTW91c2VEb3duKSB7XG4gICAgICAgIG9wdGlvbnMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gVXNpbmcgZG9jdW1lbnQgc28geW91IGNhbiBkcmFnIG91dHNpZGUgb2YgdGhlIGNhbnZhcywgdXNlIGVsZW1lbnRcbiAgLy8gaWYgeW91IGNhbm5vdCBkcmFnIG91dHNpZGUgb2YgdGhlIGNhbnZhcy5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoaXNNb3VzZURvd24pIHtcbiAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpc0RyYWdnaW5nICYmIG9wdGlvbnMuZW5hYmxlRHJhZykge1xuICAgICAgY29uc3Qgc2hvdWxkRHJhZyA9XG4gICAgICAgIChpc0RvdWJsZU1vdXNlRG93biAmJiBvcHRpb25zLmRyYWdNb2RlID09PSBEcmFnTW9kZS5Eb3VibGVEb3duKSB8fFxuICAgICAgICAoIWlzRG91YmxlTW91c2VEb3duICYmIG9wdGlvbnMuZHJhZ01vZGUgPT09IERyYWdNb2RlLkRvd24pO1xuXG4gICAgICBpZiAoc2hvdWxkRHJhZykge1xuICAgICAgICBpZiAob3B0aW9ucy5zaWxlbmNlTW91c2VEb3duQWZ0ZXJEcmFnKSB7XG4gICAgICAgICAgc2hvdWxkU2lsZW5jZU1vdXNlRG93biA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zaWxlbmNlTW91c2VVcEFmdGVyRHJhZykge1xuICAgICAgICAgIHNob3VsZFNpbGVuY2VNb3VzZVVwID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnNpbGVuY2VDbGlja0FmdGVyRHJhZykge1xuICAgICAgICAgIHNob3VsZFNpbGVuY2VDbGljayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5vbkRyYWcgfHwgb3B0aW9ucy5vbkRyYWdTdGFydCB8fCBvcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgY29uc3QgZHJhZ0RhdGEgPSBnZXREcmFnRGF0YShldmVudCk7XG5cbiAgICAgICAgICBpZiAoKG9wdGlvbnMub25EcmFnU3RhcnQgfHwgb3B0aW9ucy5kZWJ1ZykgJiYgc2hvdWxkQ2FsbERyYWdTdGFydENhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnU3RhcnREYXRhID0ge1xuICAgICAgICAgICAgICBzdGFydGVkQXQ6IGRyYWdEYXRhLnN0YXJ0ZWRBdCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcmFnIHN0YXJ0JywgZHJhZ1N0YXJ0RGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9uRHJhZ1N0YXJ0KSB7XG4gICAgICAgICAgICAgIG9wdGlvbnMub25EcmFnU3RhcnQoZXZlbnQsIGRyYWdTdGFydERhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaG91bGRDYWxsRHJhZ1N0YXJ0Q2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXNEb3VibGVNb3VzZURvd24gPyAnRG91YmxlIGNsaWNrIG1vZGUgZHJhZycgOiAnQ2xpY2sgbW9kZSBkcmFnJywgZHJhZ0RhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHRpb25zLm9uRHJhZykge1xuICAgICAgICAgICAgb3B0aW9ucy5vbkRyYWcoZXZlbnQsIGRyYWdEYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0RHJhZ0V2ZW50ID0gZXZlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcmFnRGF0YSA9IGdldERyYWdEYXRhKGV2ZW50KTtcblxuICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBjb25zb2xlLmxvZygnRHJhZyBlbmQnLCBkcmFnRGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm9uRHJhZ0VuZCkge1xuICAgICAgICBvcHRpb25zLm9uRHJhZ0VuZChldmVudCwgZHJhZ0RhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICBpc01vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgLy8gTXVzdCBiZSBzZXQgdG8gYHVuZGVmaW5lZGAgb25seSBhZnRlciBgZ2V0RHJhZ0RhdGFgIGlzIHVzZWRcbiAgICBsYXN0RHJhZ0V2ZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHNob3VsZFNpbGVuY2VNb3VzZVVwKSB7XG4gICAgICBzaG91bGRTaWxlbmNlTW91c2VVcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZygnTW91c2UgdXAnLCBnZXRQb3NpdGlvbkZyb21Nb3VzZUV2ZW50KGV2ZW50LCBlbGVtZW50KSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMub25Nb3VzZVVwKSB7XG4gICAgICAvLyBgZHJhZ0RhdGFgIGlzIHN0aWxsIGNhbiBiZSB1c2VmdWwgZS5nLiBpbiBjYXNlc1xuICAgICAgLy8gd2hlbiB3ZSBhbHdheXMgbmVlZCB0byBoYW5kbGUgYG1vdXNldXBgIGV2ZW50IGluIG9uZSBwbGFjZVxuICAgICAgLy8gYnV0IGRpZmZlcmVudGx5IGlmIHRoZXJlIHdhcyBhIGRyYWcgZXZlbnQgb3Igbm90XG4gICAgICBvcHRpb25zLm9uTW91c2VVcChldmVudCwgZHJhZ0RhdGEpO1xuICAgIH1cbiAgfSk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNsaWNrVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHRpbWVQYXNzZWQgPSBjbGlja1RpbWUgLSBsYXN0Q2xpY2tUaW1lO1xuXG4gICAgaXNEb3VibGVDbGljayA9IHRpbWVQYXNzZWQgPCBvcHRpb25zLmRvdWJsZUNsaWNrVGhyZXNob2xkO1xuICAgIGxhc3RDbGlja1RpbWUgPSBjbGlja1RpbWU7XG5cbiAgICBpZiAoc2hvdWxkU2lsZW5jZUNsaWNrKSB7XG4gICAgICBzaG91bGRTaWxlbmNlQ2xpY2sgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNEb3VibGVDbGljaykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RvdWJsZSBjbGljaycsIGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQoZXZlbnQsIGVsZW1lbnQpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMub25Eb3VibGVDbGljaykge1xuICAgICAgICBvcHRpb25zLm9uRG91YmxlQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzRG91YmxlQ2xpY2spIHtcbiAgICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGljaycsIGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQoZXZlbnQsIGVsZW1lbnQpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMub25DbGljaykge1xuICAgICAgICBvcHRpb25zLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IHNpbXVsYXRlZCBkcmFnIGlzIHN1cHBvcnRlZCcpO1xuICB9KTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IHNpbXVsYXRlZCBkcmFnIGlzIHN1cHBvcnRlZCcpO1xuICB9KTtcblxuICAvLyBUaGlzIGlzIHJlZHVuZGFudCBhcyB0aGVyZSBpcyBzaW11bGF0ZWQgaW1wbGVtZW50YXRpb24gb2YgZG91YmxlIGNsaWNrIGluIHRoaXMgaGVscGVyXG4gIC8vIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7Li4ufSlcblxuICBmdW5jdGlvbiBnZXREcmFnRGF0YShldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghbGFzdE1vdXNlRG93bkV2ZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydGVkQXQ6IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgdG90YWxEZWx0YTogbmV3IFZlY3RvcigpLFxuICAgICAgICBkZWx0YTogbmV3IFZlY3RvcigpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludEZyb21MYXN0TW91c2VEb3duID0gZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChsYXN0TW91c2VEb3duRXZlbnQsIGVsZW1lbnQpO1xuICAgIGNvbnN0IHBvaW50RnJvbUxhc3REcmFnID0gbGFzdERyYWdFdmVudCA/IGdldFBvc2l0aW9uRnJvbU1vdXNlRXZlbnQobGFzdERyYWdFdmVudCwgZWxlbWVudCkgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgY3VycmVudFBvaW50ID0gZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudChldmVudCwgZWxlbWVudCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRlZEF0OiBjdXJyZW50UG9pbnQsXG4gICAgICB0b3RhbERlbHRhOiBjdXJyZW50UG9pbnQuY2xvbmUoKS5zdWJzdHJhY3QocG9pbnRGcm9tTGFzdE1vdXNlRG93biksXG4gICAgICBkZWx0YTogY3VycmVudFBvaW50LmNsb25lKCkuc3Vic3RyYWN0KHBvaW50RnJvbUxhc3REcmFnIHx8IHBvaW50RnJvbUxhc3RNb3VzZURvd24pLFxuICAgIH07XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcnMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudCA9IChldmVudDogTW91c2VFdmVudCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCB2aWV3cG9ydE1vdXNlUG9zaXRpb24gPSBuZXcgVmVjdG9yKHtcbiAgICB4OiBldmVudC5wYWdlWCxcbiAgICB5OiBldmVudC5wYWdlWSxcbiAgfSk7XG4gIGNvbnN0IGJvdW5kaW5nUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgdG9wTGVmdENvbnRhaW5lclBvc2l0aW9uID0gbmV3IFZlY3Rvcih7XG4gICAgeDogYm91bmRpbmdSZWN0LmxlZnQsXG4gICAgeTogYm91bmRpbmdSZWN0LnRvcCxcbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdwb3J0TW91c2VQb3NpdGlvbi5zdWJzdHJhY3QodG9wTGVmdENvbnRhaW5lclBvc2l0aW9uKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2V4dGVuZGVkQ2xpY2tIYW5kbGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZ2V0UG9zaXRpb25Gcm9tTW91c2VFdmVudCc7XG4iLCJleHBvcnQgY29uc3QgZ2V0UmFuZG9tSW50ZWdlciA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4iLCJleHBvcnQgY29uc3QgZ2V0SWRHZW5lcmF0b3IgPSAoKSA9PiB7XG4gIGxldCBsYXN0SWQgPSAxO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmV0dXJuIGxhc3RJZCsrO1xuICB9O1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZ2V0UmFuZG9tSW50ZWdlcic7XG5leHBvcnQgKiBmcm9tICcuL2lkR2VuZXJhdG9yJztcbiIsImV4cG9ydCAqIGZyb20gJy4va2V5Ym9hcmQnO1xuIiwiaW1wb3J0IHsgaXNNYWMgfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5cbnR5cGUgS2V5UHJlc3NDYWxsYmFjayA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZDtcblxuY29uc3QgZ2xvYmFsbHlQcmVzc2VkS2V5cyA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XG4vLyBXZSB1c3VhbGx5IHVzZSBudW1lcmljIGNvZGUgb2YgYSBrZXkgdG8gb3V0bGluZSBhIHBoeXNpY2FsIGtleSB3ZSB3YW50IHRvIHVzZVxuLy8gYnV0IGlmIGl0J3MgYSBjdXN0b20ga2V5LCB0aGVuIGEgYmlnIHRpZXIgaXMgYSB3YXkgdG8gc2VwYXJhdGUgdGhlIGxvZ2ljLlxuY29uc3QgQ1VTVE9NX0tFWV9USUVSX01PRElGSUVSID0gMTAwMDAwMDtcbmxldCBhcmVLZXlib2FyZExpc3RlbmVyc0F0dGFjaGVkID0gZmFsc2U7XG5cbmxpc3RlbktleWJvYXJkKGZhbHNlKTtcblxuLy8gVmFsdWVzIGFyZSBgZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZWAgZm9yIHRoZSBwaHlzaWNhbCBrZXlzIGFuZFxuLy8gYSBudW1iZXIgKyBgQ1VTVE9NX0tFWV9USUVSX01PRElGSUVSYCBmb3IgY3VzdG9tIGtleXMuXG5leHBvcnQgZW51bSBLRVlTIHtcbiAgYmFja3NwYWNlID0gOCxcbiAgdGFiID0gOSxcbiAgY29udHJvbCA9IDE3LFxuICBlc2NhcGUgPSAyNyxcbiAgLy8gT3B0aW9uIG9uIE1hY09TXG4gIGFsdCA9IDE4LFxuICBkZWxldGUgPSA0NixcbiAgLy8gQ29tbWFuZCBvbiBNYWNPU1xuICBtZXRhID0gOTEsXG4gIHNwYWNlID0gMzIsXG4gIHBsdXMgPSAxODcsXG5cbiAgY29udHJvbE9TU3BlY2lmaWMgPSBDVVNUT01fS0VZX1RJRVJfTU9ESUZJRVIgKyAxNyxcbn1cblxuLy8gSWYgYGV2ZW50YCBpcyBub3QgcGFzc2VkIHRoYW4gdGhlIGtleSB3aWxsIGJlIGNoZWNrZWRcbi8vIGFnYWluc3QgZ2xvYmFsbHkgcHJlc3NlZCBrZXlzIChgZ2xvYmFsbHlQcmVzc2VkS2V5c2ApIGF0IHRoZSBtb21lbnQuXG5leHBvcnQgY29uc3QgaXNLZXlQcmVzc2VkID0gKGtleTogS0VZUywgZXZlbnQ/OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gIGxldCBrZXlDb2Rlc1RvQ2hlY2s6IG51bWJlcltdID0gW107XG4gIGxldCBpc1ByZXNzZWQgPSBmYWxzZTtcblxuICBpZiAoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcblxuICAgIGtleUNvZGVzVG9DaGVjay5wdXNoKGtleUNvZGUpO1xuICB9IGVsc2Uge1xuICAgIGtleUNvZGVzVG9DaGVjayA9IEFycmF5LmZyb20oZ2xvYmFsbHlQcmVzc2VkS2V5cy52YWx1ZXMoKSk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleUNvZGVzVG9DaGVjay5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBrZXlDb2RlID0ga2V5Q29kZXNUb0NoZWNrW2ldO1xuXG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgS0VZUy5jb250cm9sT1NTcGVjaWZpYzpcbiAgICAgICAgaXNQcmVzc2VkID0gaXNNYWMoKSA/IGtleUNvZGUgPT09IEtFWVMubWV0YSA6IGtleUNvZGUgPT09IEtFWVMuY29udHJvbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpc1ByZXNzZWQgPSBrZXlDb2RlID09PSBrZXk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChpc1ByZXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGtleURvd25DYWxsYmFja3M6IHtcbiAgW2tleSBpbiBLRVlTXT86IEtleVByZXNzQ2FsbGJhY2tbXTtcbn0gPSB7fTtcblxuLy8gVG9kbyBtaWdyYXRlIHRvIE1hcFxuY29uc3Qga2V5c0Rvd25DYWxsYmFja3M6IHtcbiAgW2tleTogc3RyaW5nXTogS2V5UHJlc3NDYWxsYmFja1tdO1xufSA9IHt9O1xuXG5jb25zdCBrZXlVcENhbGxiYWNrczoge1xuICBba2V5IGluIEtFWVNdPzogS2V5UHJlc3NDYWxsYmFja1tdO1xufSA9IHt9O1xuXG5jb25zdCBrZXlQcmVzc0NhbGxiYWNrczoge1xuICBba2V5IGluIEtFWVNdPzogS2V5UHJlc3NDYWxsYmFja1tdO1xufSA9IHt9O1xuXG5leHBvcnQgY29uc3Qgb25LZXlEb3duID0gKGtleTogS0VZUywgY2FsbGJhY2s6IEtleVByZXNzQ2FsbGJhY2spID0+IHtcbiAgaWYgKCFrZXlEb3duQ2FsbGJhY2tzW2tleV0pIHtcbiAgICBrZXlEb3duQ2FsbGJhY2tzW2tleV0gPSBbXTtcbiAgfVxuXG4gIGtleURvd25DYWxsYmFja3Nba2V5XSEucHVzaChjYWxsYmFjayk7XG59O1xuXG5leHBvcnQgY29uc3Qgb25LZXlzRG93biA9IChfa2V5czogS0VZU1tdLCBjYWxsYmFjazogS2V5UHJlc3NDYWxsYmFjaykgPT4ge1xuICBjb25zdCBrZXlzVG9rZW4gPSBbLi4uX2tleXNdLnNvcnQoKS5qb2luKCctJyk7XG5cbiAgaWYgKCFrZXlzRG93bkNhbGxiYWNrc1trZXlzVG9rZW5dKSB7XG4gICAga2V5c0Rvd25DYWxsYmFja3Nba2V5c1Rva2VuXSA9IFtdO1xuICB9XG5cbiAga2V5c0Rvd25DYWxsYmFja3Nba2V5c1Rva2VuXSEucHVzaChjYWxsYmFjayk7XG59O1xuXG5leHBvcnQgY29uc3Qgb25LZXlVcCA9IChrZXk6IEtFWVMsIGNhbGxiYWNrOiBLZXlQcmVzc0NhbGxiYWNrKSA9PiB7XG4gIGlmICgha2V5VXBDYWxsYmFja3Nba2V5XSkge1xuICAgIGtleVVwQ2FsbGJhY2tzW2tleV0gPSBbXTtcbiAgfVxuXG4gIGtleVVwQ2FsbGJhY2tzW2tleV0hLnB1c2goY2FsbGJhY2spO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uS2V5UHJlc3NlZCA9IChrZXk6IEtFWVMsIGNhbGxiYWNrOiBLZXlQcmVzc0NhbGxiYWNrKSA9PiB7XG4gIGlmICgha2V5UHJlc3NDYWxsYmFja3Nba2V5XSkge1xuICAgIGtleVByZXNzQ2FsbGJhY2tzW2tleV0gPSBbXTtcbiAgfVxuXG4gIGtleVByZXNzQ2FsbGJhY2tzW2tleV0hLnB1c2goY2FsbGJhY2spO1xufTtcblxuZnVuY3Rpb24gbGlzdGVuS2V5Ym9hcmQoZGVidWcgPSBmYWxzZSkge1xuICBpZiAoYXJlS2V5Ym9hcmRMaXN0ZW5lcnNBdHRhY2hlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFyZUtleWJvYXJkTGlzdGVuZXJzQXR0YWNoZWQgPSB0cnVlO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcblxuICAgIGdsb2JhbGx5UHJlc3NlZEtleXMuc2V0KGtleUNvZGUsIGtleUNvZGUpO1xuXG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZygnS2V5IGRvd24nLCBrZXlDb2RlLCBnZXRLZXlOYW1lKGtleUNvZGUpLCBnbG9iYWxseVByZXNzZWRLZXlzKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5RG93bkNhbGxiYWNrc1trZXlDb2RlXSkge1xuICAgICAga2V5RG93bkNhbGxiYWNrc1trZXlDb2RlXSEuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB0b2tlbiBpbiBrZXlzRG93bkNhbGxiYWNrcykge1xuICAgICAgY29uc3QgY2FsbGJhY2tzID0ga2V5c0Rvd25DYWxsYmFja3NbdG9rZW5dO1xuICAgICAgY29uc3Qga2V5cyA9IHRva2VuLnNwbGl0KCctJyk7XG4gICAgICBsZXQgc2hvdWxkRmlyZSA9IHRydWU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gcGFyc2VJbnQoa2V5c1tpXSwgMTApO1xuXG4gICAgICAgIGlmICghZ2xvYmFsbHlQcmVzc2VkS2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgIHNob3VsZEZpcmUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hvdWxkRmlyZSkge1xuICAgICAgICBjYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcblxuICAgIGdsb2JhbGx5UHJlc3NlZEtleXMuZGVsZXRlKGtleUNvZGUpO1xuXG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZygnS2V5IHVwJywga2V5Q29kZSwgZ2V0S2V5TmFtZShrZXlDb2RlKSwgZ2xvYmFsbHlQcmVzc2VkS2V5cyk7XG4gICAgfVxuXG4gICAgaWYgKGtleVVwQ2FsbGJhY2tzW2tleUNvZGVdKSB7XG4gICAgICBrZXlVcENhbGxiYWNrc1trZXlDb2RlXSEuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgaWYgKGtleVByZXNzQ2FsbGJhY2tzW2tleUNvZGVdKSB7XG4gICAgICBrZXlQcmVzc0NhbGxiYWNrc1trZXlDb2RlXSEuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGV2ZW50KSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBPbmx5IGZvciBkZWJ1ZyBwdXJwb3Nlc1xuICBmdW5jdGlvbiBnZXRLZXlOYW1lKGtleUNvZGU6IHVua25vd24pIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoS0VZUykuZmluZCgoW2VudW1LZXlDb2RlXSkgPT4gcGFyc2VJbnQoZW51bUtleUNvZGUsIDEwKSA9PT0ga2V5Q29kZSk/LlsxXTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9pc01hYyc7XG4iLCJleHBvcnQgY29uc3QgaXNNYWMgPSAoKSA9PiB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTUFDJykgPj0gMDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBib290IH0gZnJvbSAnLi9ib2FyZCc7XG5cbmNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpIGFzIEhUTUxIdG1sRWxlbWVudDtcbmNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIGFzIEhUTUxCb2R5RWxlbWVudDtcblxuY29uc3QgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG5jb250YWluZXJFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbmNvbnN0IGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbmNvbnN0IGNhbnZhc0NvbnRleHQgPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG5jb25zdCByZXNldFN0eWxlcyA9IChlbGVtZW50OiBFbGVtZW50Q1NTSW5saW5lU3R5bGUpID0+IHtcbiAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gIGVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzAnO1xuICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG59O1xuXG5yZXNldFN0eWxlcyhodG1sRWxlbWVudCk7XG5yZXNldFN0eWxlcyhib2R5RWxlbWVudCk7XG5yZXNldFN0eWxlcyhjb250YWluZXJFbGVtZW50KTtcbnJlc2V0U3R5bGVzKGNhbnZhc0VsZW1lbnQpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsZW1lbnQpO1xuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXNFbGVtZW50KTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYm9vdChjYW52YXNDb250ZXh0LCBjb250YWluZXJFbGVtZW50KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==