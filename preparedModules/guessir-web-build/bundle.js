/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
__webpack_require__(/*! ./styles.css */ "./src/styles.css");
var lexemeBuilder_1 = __webpack_require__(/*! ./lexemeBuilder */ "./src/lexemeBuilder/index.ts");
var renderers_1 = __webpack_require__(/*! ./renderers */ "./src/renderers/index.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var defaultText = "\n  Hello! I'm a simple tool to turn any English text to a word guessing game.\n  \n  In order to create your own text check the instructions below.\n";
var couldNotLoadRemoteTextText = "\n  Hello! I could not load the remote text. Please, verify your URL or create a new text.\n";
function boot() {
    return __awaiter(this, void 0, void 0, function () {
        var text, title, allowShowingText, allowShowingFirstLetters, _a, remoteTextUrl, restRemoteTextParameters, error_1, lexemeAnalysis, renderManager;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    text = '';
                    title = '';
                    allowShowingText = true;
                    allowShowingFirstLetters = true;
                    if (!(0, utils_1.hasRemoteTextParametersInUrl)()) return [3 /*break*/, 5];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    _a = (0, utils_1.parseRemoteTextParametersFromUrl)(), remoteTextUrl = _a.remoteTextUrl, restRemoteTextParameters = __rest(_a, ["remoteTextUrl"]);
                    (allowShowingFirstLetters = restRemoteTextParameters.allowShowingFirstLetters, allowShowingText = restRemoteTextParameters.allowShowingText);
                    return [4 /*yield*/, (0, utils_1.loadRemoteText)(remoteTextUrl)];
                case 2:
                    (_b = _c.sent(), text = _b.text, title = _b.title);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _c.sent();
                    console.error(error_1);
                    text = couldNotLoadRemoteTextText;
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    text = defaultText;
                    _c.label = 6;
                case 6:
                    lexemeAnalysis = new lexemeBuilder_1.LexemeBuilder().buildLexemes(text);
                    renderManager = new renderers_1.RenderManager(lexemeAnalysis, title, allowShowingText, allowShowingFirstLetters);
                    renderManager.init(document.body);
                    return [2 /*return*/];
            }
        });
    });
}
boot();


/***/ }),

/***/ "./src/lexemeBuilder/LexemeBuilder.ts":
/*!********************************************!*\
  !*** ./src/lexemeBuilder/LexemeBuilder.ts ***!
  \********************************************/
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
exports.LexemeBuilder = void 0;
var LexemeNormalizer_1 = __webpack_require__(/*! ./LexemeNormalizer */ "./src/lexemeBuilder/LexemeNormalizer.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/lexemeBuilder/types.ts");
var LexemeBuilder = /** @class */ (function () {
    function LexemeBuilder() {
        this.lexemes = new Map();
        this.lexemesByWordLike = new Map();
        this.wordLikeCount = 0;
        this.specialCharacterCount = 0;
        this.lastLexemeIndex = -1;
    }
    LexemeBuilder.prototype.buildLexemes = function (rawText) {
        var text = rawText.trim();
        var primitiveLexeme = '';
        var normalizedPrimitiveLexeme = '';
        var startIndex = undefined;
        var shouldProcessPrimitiveLexeme = false;
        for (var i = 0, l = text.length; i < l; i++) {
            var character = text[i];
            var normalizedCharacter = LexemeNormalizer_1.LexemeNormalizer.normalizeCharacter(character);
            if (startIndex === undefined) {
                startIndex = i;
            }
            if (LexemeNormalizer_1.LexemeNormalizer.isWordCharacter(normalizedCharacter)) {
                var nextNormalizedCharacter = 
                // Can be undefined if this is beyond the text
                text[i + 1] === undefined ? undefined : LexemeNormalizer_1.LexemeNormalizer.normalizeCharacter(text[i + 1]);
                // If the next character is not a part of the word, then the word is finished
                var isWordBoundary = nextNormalizedCharacter === undefined || !LexemeNormalizer_1.LexemeNormalizer.isWordCharacter(nextNormalizedCharacter);
                // Cumulate this primitive lexeme till the end of the word
                primitiveLexeme = (primitiveLexeme + character);
                normalizedPrimitiveLexeme = (normalizedPrimitiveLexeme +
                    normalizedCharacter);
                shouldProcessPrimitiveLexeme = isWordBoundary;
                if (isWordBoundary) {
                    normalizedPrimitiveLexeme = LexemeNormalizer_1.LexemeNormalizer.normalizeWord(primitiveLexeme, normalizedPrimitiveLexeme);
                }
            }
            else {
                primitiveLexeme = character;
                normalizedPrimitiveLexeme = normalizedCharacter;
                shouldProcessPrimitiveLexeme = true;
            }
            if (shouldProcessPrimitiveLexeme) {
                this.processPrimitiveLexeme(primitiveLexeme, normalizedPrimitiveLexeme, startIndex, i);
                startIndex = undefined;
                primitiveLexeme = '';
                normalizedPrimitiveLexeme = '';
                shouldProcessPrimitiveLexeme = false;
            }
        }
        var lexemes = this.lexemes;
        var lexemesByWordLike = this.lexemesByWordLike;
        var wordLikeCount = this.wordLikeCount;
        var specialCharacterCount = this.specialCharacterCount;
        // Clean up
        this.lexemes = new Map();
        this.lexemesByWordLike = new Map();
        this.wordLikeCount = 0;
        this.specialCharacterCount = 0;
        this.lastLexemeIndex = -1;
        return {
            lexemes: lexemes,
            lexemesByWordLike: lexemesByWordLike,
            wordLikeCount: wordLikeCount,
            specialCharacterCount: specialCharacterCount,
        };
    };
    LexemeBuilder.prototype.processPrimitiveLexeme = function (primitiveLexeme, normalizedPrimitiveLexeme, startIndex, endIndex) {
        var _this = this;
        var newBaseLexeme = {
            endIndex: endIndex,
            startIndex: startIndex,
            original: primitiveLexeme,
            normalized: normalizedPrimitiveLexeme,
            uncontracted: LexemeNormalizer_1.LexemeNormalizer.uncontractPrimitiveLexeme(normalizedPrimitiveLexeme),
        };
        var newLexeme = __assign(__assign({}, newBaseLexeme), { type: LexemeNormalizer_1.LexemeNormalizer.getLexemeType(newBaseLexeme) });
        // Split constructions like `I'm/We'll/they've` to different lexemes
        if (newLexeme.uncontracted !== newLexeme.normalized) {
            this.splitToLexemes(newLexeme, startIndex, endIndex);
            return;
        }
        var isLastSpace = this.isLastLexemesMatch(1, function (lexeme) { return lexeme.normalized === ' '; });
        var isCurrentPunctuation = LexemeBuilder.PUNCTUATION_CHARACTERS.includes(newLexeme.normalized);
        var isCurrentNewLine = newLexeme.normalized === '\n';
        if (
        // Replace trailing space followed by a punctuation with this punctuation
        (isLastSpace && isCurrentPunctuation) ||
            // Replace trailing space followed by a new line with this new line
            (isLastSpace && isCurrentNewLine)) {
            this.deleteLastLexemes(function (lexeme) { return lexeme.normalized === ' '; });
        }
        if (this.canAddLexeme(newLexeme)) {
            var newLexemeIndex_1 = ++this.lastLexemeIndex;
            this.lexemes.set(newLexemeIndex_1, newLexeme);
            if (newLexeme.type === types_1.LexemeType.SpecialCharacter) {
                this.specialCharacterCount++;
            }
            else {
                this.wordLikeCount++;
                LexemeNormalizer_1.LexemeNormalizer.getGroupingWords(newLexeme.normalized).forEach(function (GroupWordLikeNominal) {
                    var lexemesByWordLike = _this.lexemesByWordLike.get(GroupWordLikeNominal) || new Map();
                    lexemesByWordLike.set(newLexemeIndex_1, newLexeme);
                    _this.lexemesByWordLike.set(GroupWordLikeNominal, lexemesByWordLike);
                });
            }
        }
    };
    LexemeBuilder.prototype.splitToLexemes = function (lexeme, startIndex, endIndex) {
        var _this = this;
        var newNormalizedPrimitiveLexemes = lexeme.uncontracted.split(' ');
        newNormalizedPrimitiveLexemes.forEach(function (newNormalizedPrimitiveLexeme, index) {
            _this.processPrimitiveLexeme(lexeme.original, LexemeNormalizer_1.LexemeNormalizer.normalizeWord(lexeme.original, newNormalizedPrimitiveLexeme), startIndex, endIndex);
            if (index < newNormalizedPrimitiveLexemes.length - 1) {
                _this.processPrimitiveLexeme(' ', ' ', startIndex, endIndex);
            }
        });
    };
    LexemeBuilder.prototype.canAddLexeme = function (newLexeme) {
        var lastLexeme = this.lexemes.get(this.lastLexemeIndex);
        var isVeryFirstLexeme = !lastLexeme;
        if (isVeryFirstLexeme) {
            // Allow the very first lexeme only if it's a word or a letter
            return newLexeme.type === types_1.LexemeType.Word || newLexeme.type === types_1.LexemeType.Letter;
        }
        else {
            // No more than two `\n` in a row
            if (newLexeme.normalized === '\n' && this.isLastLexemesMatch(2, function (lexeme) { return lexeme.normalized === '\n'; })) {
                return false;
            }
            // No more than one ` ` in a row
            if (newLexeme.normalized === ' ' && this.isLastLexemesMatch(1, function (lexeme) { return lexeme.normalized === ' '; })) {
                return false;
            }
        }
        return true;
    };
    LexemeBuilder.prototype.isLastLexemesMatch = function (count, filter) {
        var lexemeIndex = this.lastLexemeIndex;
        while (count > 0) {
            var lexeme = this.lexemes.get(lexemeIndex);
            if (!lexeme || !filter(lexeme)) {
                return false;
            }
            lexemeIndex--;
            count--;
        }
        return true;
    };
    LexemeBuilder.prototype.deleteLastLexemes = function (filter) {
        var _this = this;
        var lexeme = this.lexemes.get(this.lastLexemeIndex);
        while (lexeme && filter(lexeme)) {
            if (lexeme.type === types_1.LexemeType.SpecialCharacter) {
                this.specialCharacterCount--;
            }
            else {
                this.wordLikeCount--;
                LexemeNormalizer_1.LexemeNormalizer.getGroupingWords(lexeme.normalized).forEach(function (GroupWordLikeNominal) {
                    var lexemes = _this.lexemesByWordLike.get(GroupWordLikeNominal) || new Map();
                    lexemes.delete(_this.lastLexemeIndex);
                    if (!lexemes.size) {
                        _this.lexemesByWordLike.delete(GroupWordLikeNominal);
                    }
                });
            }
            this.lexemes.delete(this.lastLexemeIndex);
            this.lastLexemeIndex--;
            lexeme = this.lexemes.get(this.lastLexemeIndex);
        }
        return true;
    };
    LexemeBuilder.PUNCTUATION_CHARACTERS = [',', '.', '!', '?', ';'];
    return LexemeBuilder;
}());
exports.LexemeBuilder = LexemeBuilder;


/***/ }),

/***/ "./src/lexemeBuilder/LexemeNormalizer.ts":
/*!***********************************************!*\
  !*** ./src/lexemeBuilder/LexemeNormalizer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LexemeNormalizer = void 0;
var types_1 = __webpack_require__(/*! ./types */ "./src/lexemeBuilder/types.ts");
var LexemeNormalizer = /** @class */ (function () {
    function LexemeNormalizer() {
    }
    LexemeNormalizer.normalizeWord = function (primitiveLexeme, normalizedPrimitiveLexeme) {
        var converted = LexemeNormalizer.NORMALIZED_WORDS_TO_NORMALIZED_WORDS.get(normalizedPrimitiveLexeme) || normalizedPrimitiveLexeme;
        // Convert word to the title case of the original word is started from a capital letter
        if (converted[0] !== primitiveLexeme[0] && converted[0].toUpperCase() === primitiveLexeme[0]) {
            converted = (converted[0].toUpperCase() + converted.substring(1));
        }
        return converted;
    };
    LexemeNormalizer.normalizeCharacter = function (character) {
        var lowerCasedCharacter = character.toLowerCase();
        return (LexemeNormalizer.CHARACTERS_TO_NORMALIZED_CHARACTERS.get(lowerCasedCharacter) ||
            lowerCasedCharacter);
    };
    LexemeNormalizer.uncontractPrimitiveLexeme = function (normalizedPrimitiveLexeme) {
        return (LexemeNormalizer.NORMALIZED_CONTRACTION_TO_NORMALIZED_NORMAL.get(normalizedPrimitiveLexeme) ||
            normalizedPrimitiveLexeme);
    };
    LexemeNormalizer.isWordCharacter = function (normalizedPrimitiveLexeme) {
        if (normalizedPrimitiveLexeme.length !== 1) {
            throw new Error('Can be used only for characters');
        }
        return (LexemeNormalizer.isLetter(normalizedPrimitiveLexeme) ||
            LexemeNormalizer.isWordHelpingCharacter(normalizedPrimitiveLexeme));
    };
    LexemeNormalizer.isLetter = function (normalizedPrimitiveLexeme) {
        return LexemeNormalizer.LETTER_RE.test(normalizedPrimitiveLexeme);
    };
    LexemeNormalizer.isWordHelpingCharacter = function (normalizedPrimitiveLexeme) {
        return (LexemeNormalizer.NORMALIZED_CONTRACTION_CHARACTERS.includes(normalizedPrimitiveLexeme) ||
            LexemeNormalizer.NORMALIZED_WORD_SEPARATION_CHARACTERS.includes(normalizedPrimitiveLexeme));
    };
    LexemeNormalizer.getLexemeType = function (baseLexeme) {
        if (baseLexeme.normalized.length === 1) {
            if (LexemeNormalizer.isWordHelpingCharacter(baseLexeme.normalized)) {
                return types_1.LexemeType.WordHelping;
            }
            if (LexemeNormalizer.isLetter(baseLexeme.normalized)) {
                return types_1.LexemeType.Letter;
            }
            return types_1.LexemeType.SpecialCharacter;
        }
        return types_1.LexemeType.Word;
    };
    // To workaround words like `Item's/I'd/She'd/He'd/He's/She's`. We cannot uncontract them, as they can be
    // uncontracted in multiple ways (e.g. she's - she is / she has), so we can simply
    // let the user to use just e.g. `she` and count it as `she's` and as `she`.
    LexemeNormalizer.getGroupingWords = function (normalizedPrimitiveLexeme) {
        var length = normalizedPrimitiveLexeme.length;
        // Keep as lower-cased for easy access
        var GroupWordLikeNominal = normalizedPrimitiveLexeme.toLowerCase();
        // Separate words that end with `'s`, e.g. `
        if (GroupWordLikeNominal[length - 1] === 's' && GroupWordLikeNominal[length - 2] === "'") {
            return [GroupWordLikeNominal.slice(0, -2), GroupWordLikeNominal];
        }
        return [GroupWordLikeNominal];
    };
    LexemeNormalizer.CHARACTERS_TO_NORMALIZED_CHARACTERS = new Map([
        ['—', '-'],
        ['’', "'"],
        ['`', "'"],
    ]);
    LexemeNormalizer.NORMALIZED_WORDS_TO_NORMALIZED_WORDS = new Map([['i', 'I']]);
    LexemeNormalizer.NORMALIZED_CONTRACTION_CHARACTERS = ["'"];
    LexemeNormalizer.NORMALIZED_WORD_SEPARATION_CHARACTERS = ['-'];
    LexemeNormalizer.LETTER_RE = /^[A-Za-z]$/;
    LexemeNormalizer.NORMALIZED_CONTRACTION_TO_NORMALIZED_NORMAL = new Map([
        ["don't", 'do not'],
        ["doesn't", 'does not'],
        ["didn't", 'did not'],
        ["haven't", 'have not'],
        ["hadn't", 'had not'],
        ["shouldn't", 'should'],
        ["wouldn't", 'would not'],
        ["couldn't", 'could not'],
        ["mustn't", 'must not'],
        ["can't", 'cannot'],
        ["needn't", 'need not'],
        ["won't", 'will not'],
        ["I'm", 'I am'],
        ["I've", 'I have'],
        ["I'll", 'I will'],
        ["she'll", 'she will'],
        ["he'll", 'he will'],
        ["we're", 'we are'],
        ["we've", 'we have'],
        ["we'll", 'we will'],
        ["they're", 'they are'],
        ["they've", 'they have'],
        ["they'll", 'they will'],
        // I'd, She'd, He'd, He's, She's covered in `getGroupingWords`, read more there.
    ]);
    return LexemeNormalizer;
}());
exports.LexemeNormalizer = LexemeNormalizer;


/***/ }),

/***/ "./src/lexemeBuilder/index.ts":
/*!************************************!*\
  !*** ./src/lexemeBuilder/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./LexemeBuilder */ "./src/lexemeBuilder/LexemeBuilder.ts"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./src/lexemeBuilder/types.ts"), exports);


/***/ }),

/***/ "./src/lexemeBuilder/types.ts":
/*!************************************!*\
  !*** ./src/lexemeBuilder/types.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LexemeType = void 0;
var LexemeType;
(function (LexemeType) {
    LexemeType["Word"] = "w";
    LexemeType["SpecialCharacter"] = "sc";
    LexemeType["Letter"] = "l";
    // E.g. dash in `re-configured` or apostrophe in`don't`
    LexemeType["WordHelping"] = "wh";
})(LexemeType = exports.LexemeType || (exports.LexemeType = {}));


/***/ }),

/***/ "./src/pubSub/PubSub.ts":
/*!******************************!*\
  !*** ./src/pubSub/PubSub.ts ***!
  \******************************/
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


/***/ }),

/***/ "./src/pubSub/index.ts":
/*!*****************************!*\
  !*** ./src/pubSub/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./PubSub */ "./src/pubSub/PubSub.ts"), exports);


/***/ }),

/***/ "./src/renderers/ControlsRenderer.ts":
/*!*******************************************!*\
  !*** ./src/renderers/ControlsRenderer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlsRenderer = void 0;
var pubSub_1 = __webpack_require__(/*! ../pubSub */ "./src/pubSub/index.ts");
var ControlsRenderer = /** @class */ (function () {
    function ControlsRenderer(allowShowingText, allowShowingFirstLetters) {
        this.guessPubSub = new pubSub_1.PubSub();
        this.showFirstLettersPubSub = new pubSub_1.PubSub();
        this.showTextPubSub = new pubSub_1.PubSub();
        this.isTextShown = false;
        this.isFirstLettersShown = false;
        this.guessEvent = this.guessPubSub.event;
        this.showFirstLettersEvent = this.showFirstLettersPubSub.event;
        this.showTextEvent = this.showTextPubSub.event;
        this.containerElement = document.createElement('div');
        this.containerElement.id = 'controls-container';
        this.initElement(allowShowingText, allowShowingFirstLetters);
    }
    ControlsRenderer.prototype.getElement = function () {
        return this.containerElement;
    };
    ControlsRenderer.prototype.initElement = function (allowShowingText, allowShowingFirstLetters) {
        this.containerElement.innerHTML = "\n      <input id=\"guess-input\" type=\"text\" />\n      <button id=\"show-text-button\" type=\"button\">Show text</button>\n      <button id=\"show-first-letters-button\" type=\"button\">Show first letters</button>\n      <button id=\"guess-button\" type=\"button\">Guess</button>\n    ";
        var showTextButtonElement = this.containerElement.querySelector('#show-text-button');
        var showFirstLettersButtonElement = this.containerElement.querySelector('#show-first-letters-button');
        if (!allowShowingText) {
            showTextButtonElement.classList.add('hide');
        }
        if (!allowShowingFirstLetters) {
            showFirstLettersButtonElement.classList.add('hide');
        }
        this.attachGuessHandler();
        this.attachShowFirstLettersHandler();
        this.attachShowTextHandler();
    };
    ControlsRenderer.prototype.attachGuessHandler = function () {
        var _this = this;
        var buttonElement = this.containerElement.querySelector('#guess-button');
        var inputElement = this.containerElement.querySelector('#guess-input');
        buttonElement.addEventListener('click', function () {
            var word = inputElement.value.trim().toLowerCase();
            if (!word) {
                return;
            }
            _this.guessPubSub.publish(word);
        });
    };
    ControlsRenderer.prototype.attachShowTextHandler = function () {
        var _this = this;
        var showTextButtonElement = this.containerElement.querySelector('#show-text-button');
        var showFirstLettersButtonElement = this.containerElement.querySelector('#show-first-letters-button');
        showTextButtonElement.addEventListener('click', function () {
            _this.isTextShown = !_this.isTextShown;
            showTextButtonElement.innerText = _this.isTextShown ? 'Hide text' : 'Show text';
            _this.showTextPubSub.publish(_this.isTextShown);
            showFirstLettersButtonElement.disabled = _this.isTextShown;
        });
    };
    ControlsRenderer.prototype.attachShowFirstLettersHandler = function () {
        var _this = this;
        var showTextButtonElement = this.containerElement.querySelector('#show-text-button');
        var showFirstLettersButtonElement = this.containerElement.querySelector('#show-first-letters-button');
        showFirstLettersButtonElement.addEventListener('click', function () {
            if (_this.isTextShown) {
                return;
            }
            _this.isFirstLettersShown = !_this.isFirstLettersShown;
            showFirstLettersButtonElement.innerText = _this.isFirstLettersShown
                ? 'Hide first letters text'
                : 'Show first letters text';
            _this.showFirstLettersPubSub.publish(_this.isFirstLettersShown);
            showTextButtonElement.disabled = _this.isFirstLettersShown;
        });
    };
    return ControlsRenderer;
}());
exports.ControlsRenderer = ControlsRenderer;


/***/ }),

/***/ "./src/renderers/RenderManager.ts":
/*!****************************************!*\
  !*** ./src/renderers/RenderManager.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderManager = void 0;
var ControlsRenderer_1 = __webpack_require__(/*! ./ControlsRenderer */ "./src/renderers/ControlsRenderer.ts");
var ScoreRenderer_1 = __webpack_require__(/*! ./ScoreRenderer */ "./src/renderers/ScoreRenderer.ts");
var textRenderer_1 = __webpack_require__(/*! ./textRenderer */ "./src/renderers/textRenderer/index.ts");
var UtilsRenderer_1 = __webpack_require__(/*! ./UtilsRenderer */ "./src/renderers/UtilsRenderer.ts");
var RenderManager = /** @class */ (function () {
    function RenderManager(lexemesAnalysis, title, allowShowingText, allowShowingFirstLetters) {
        this.guessirContainer = document.createElement('div');
        this.guessirContainer.id = 'guessir';
        this.textRenderer = new textRenderer_1.TextRenderer(lexemesAnalysis, title);
        this.controlsRenderer = new ControlsRenderer_1.ControlsRenderer(allowShowingText, allowShowingFirstLetters);
        this.scoreRenderer = new ScoreRenderer_1.ScoreRenderer(lexemesAnalysis.wordLikeCount);
        this.utilsRenderer = new UtilsRenderer_1.UtilsRenderer();
    }
    RenderManager.prototype.init = function (containerElement) {
        var _this = this;
        containerElement.appendChild(this.guessirContainer);
        this.textRenderer.userWordShowEvent.subscribe(function (lexeme) { return _this.handleUserWordShow(lexeme); });
        this.controlsRenderer.guessEvent.subscribe(function (word) { return _this.handleGuess(word); });
        this.controlsRenderer.showTextEvent.subscribe(function (isTextShown) { return _this.handleShowText(isTextShown); });
        this.controlsRenderer.showFirstLettersEvent.subscribe(function (isFirstLettersShown) {
            return _this.handleShowFirstLetters(isFirstLettersShown);
        });
        this.guessirContainer.appendChild(this.textRenderer.getElement());
        this.guessirContainer.appendChild(this.controlsRenderer.getElement());
        this.guessirContainer.appendChild(this.scoreRenderer.getElement());
        this.guessirContainer.appendChild(this.utilsRenderer.getElement());
    };
    RenderManager.prototype.handleUserWordShow = function (_lexeme) {
        this.scoreRenderer.addScore(-1);
    };
    RenderManager.prototype.handleGuess = function (word) {
        var shownCount = this.textRenderer.showLexemesByWord(word);
        this.scoreRenderer.addScore(shownCount);
    };
    RenderManager.prototype.handleShowText = function (isTextShown) {
        this.textRenderer.toggleText(isTextShown);
        if (isTextShown) {
            this.scoreRenderer.addScore(-7);
        }
    };
    RenderManager.prototype.handleShowFirstLetters = function (isFirstLettersShown) {
        this.textRenderer.toggleFirstLetters(isFirstLettersShown);
        if (isFirstLettersShown) {
            this.scoreRenderer.addScore(-2);
        }
    };
    return RenderManager;
}());
exports.RenderManager = RenderManager;


/***/ }),

/***/ "./src/renderers/ScoreRenderer.ts":
/*!****************************************!*\
  !*** ./src/renderers/ScoreRenderer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScoreRenderer = void 0;
var ScoreRenderer = /** @class */ (function () {
    function ScoreRenderer(wordLikeCount) {
        this.wordLikeCount = 0;
        this.score = 0;
        this.wordLikeCount = wordLikeCount;
        this.containerElement = document.createElement('div');
        this.containerElement.id = 'score-container';
        this.initElement();
    }
    ScoreRenderer.prototype.getElement = function () {
        return this.containerElement;
    };
    ScoreRenderer.prototype.addScore = function (value) {
        this.score += value;
        var currentScoreElement = this.containerElement.querySelector('#current-score');
        currentScoreElement.innerText = this.score.toString();
    };
    ScoreRenderer.prototype.initElement = function () {
        this.containerElement.innerHTML = "\n      Score:&nbsp;\n      <div id=\"current-score\">".concat(this.score, "</div>\n      /\n      <div id=\"total-score\">").concat(this.wordLikeCount, "</div>\n    ");
    };
    return ScoreRenderer;
}());
exports.ScoreRenderer = ScoreRenderer;


/***/ }),

/***/ "./src/renderers/UtilsRenderer.ts":
/*!****************************************!*\
  !*** ./src/renderers/UtilsRenderer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UtilsRenderer = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var UtilsRenderer = /** @class */ (function () {
    function UtilsRenderer() {
        this.aNotepadUrl = '';
        this.generatedUrl = '';
        this.containerElement = document.createElement('div');
        this.containerElement.id = 'utils-container';
        this.initElement();
    }
    UtilsRenderer.prototype.getElement = function () {
        return this.containerElement;
    };
    UtilsRenderer.prototype.initElement = function () {
        this.containerElement.innerHTML = "\n      <details>\n        <summary>How to create a new text</summary>\n        <ul>\n          <li>\n            Create your text on\n            <a href=\"https://anotepad.com\" target=\"_blank\">aNotepad</a>\n            (it must be a plain text note)\n          </li>\n          <li>\n              Paste your aNotepad note URL to <input id=\"a-notepad-url\" type=\"text\">\n          </li>\n          <li>\n              Configure:\n              <br />\n              <label>\n                <input checked type=\"checkbox\" id=\"allow-showing-first-letters\">Allow showing first letters\n              </label>\n              <br />\n              <label>\n                <input checked type=\"checkbox\" id=\"allow-showing-text\">Allow showing text\n              </label>\n          </li>\n          <li>\n              Click <button disabled id=\"generate-url\" type=\"button\">this button</button> to get your link!\n          </li>\n          <li id=\"generated-url-container\" class=\"hide\">\n            <div id=\"generated-url\"></div>\n            <button id=\"copy-generated-url\">Copy</button>\n          </li>\n        </ul>\n      </details>\n    ";
        this.attachInputHandlers();
        this.attachGenerateUrlHandler();
        this.attachCopyGeneratedUrlHandler();
    };
    UtilsRenderer.prototype.attachInputHandlers = function () {
        var _this = this;
        var allowShowingFirstLettersInputElement = this.containerElement.querySelector('#allow-showing-first-letters');
        var allowShowingTextInputElement = this.containerElement.querySelector('#allow-showing-text');
        var aNotepadUrlInputElement = this.containerElement.querySelector('#a-notepad-url');
        [allowShowingFirstLettersInputElement, allowShowingTextInputElement].forEach(function (element) {
            element.addEventListener('change', function () {
                _this.handleInputsChange();
            });
        });
        aNotepadUrlInputElement.addEventListener('input', function () {
            _this.handleInputsChange();
        });
    };
    UtilsRenderer.prototype.handleInputsChange = function () {
        var aNotepadUrlInputElement = this.containerElement.querySelector('#a-notepad-url');
        var generateUrlButtonElement = this.containerElement.querySelector('#generate-url');
        var generatedUrlContainerElement = this.containerElement.querySelector('#generated-url-container');
        var copyGeneratedUrlButtonElement = this.containerElement.querySelector('#copy-generated-url');
        var url = aNotepadUrlInputElement.value.trim();
        this.aNotepadUrl = '';
        generatedUrlContainerElement.classList.add('hide');
        copyGeneratedUrlButtonElement.innerText = 'Copy';
        try {
            var parsedUrl = new URL(url);
            if (parsedUrl.hostname === 'anotepad.com') {
                this.aNotepadUrl = parsedUrl.href;
            }
        }
        catch (error) { }
        if (url && !this.aNotepadUrl) {
            aNotepadUrlInputElement.classList.add('invalid');
        }
        else {
            aNotepadUrlInputElement.classList.remove('invalid');
        }
        generateUrlButtonElement.disabled = !this.aNotepadUrl;
    };
    UtilsRenderer.prototype.attachGenerateUrlHandler = function () {
        var _this = this;
        var generateUrlButtonElement = this.containerElement.querySelector('#generate-url');
        var allowShowingFirstLettersInputElement = this.containerElement.querySelector('#allow-showing-first-letters');
        var generatedUrlContainerElement = this.containerElement.querySelector('#generated-url-container');
        var generatedUrlElement = this.containerElement.querySelector('#generated-url');
        var allowShowingTextInputElement = this.containerElement.querySelector('#allow-showing-text');
        generateUrlButtonElement.addEventListener('click', function () {
            var allowShowingFirstLetters = allowShowingFirstLettersInputElement.checked;
            var allowShowingText = allowShowingTextInputElement.checked;
            _this.generatedUrl = (0, utils_1.generateTextUrl)({
                allowShowingFirstLetters: allowShowingFirstLetters,
                allowShowingText: allowShowingText,
                remoteTextUrl: _this.aNotepadUrl,
            });
            generatedUrlContainerElement.classList.remove('hide');
            generatedUrlElement.innerText = _this.generatedUrl;
        });
    };
    UtilsRenderer.prototype.attachCopyGeneratedUrlHandler = function () {
        var _this = this;
        var copyGeneratedUrlButtonElement = this.containerElement.querySelector('#copy-generated-url');
        var changeTextTimeoutId;
        copyGeneratedUrlButtonElement.addEventListener('click', function () {
            navigator.clipboard.writeText(_this.generatedUrl);
            copyGeneratedUrlButtonElement.innerText = 'Copied!';
            if (changeTextTimeoutId) {
                clearTimeout(changeTextTimeoutId);
            }
            changeTextTimeoutId = setTimeout(function () {
                copyGeneratedUrlButtonElement.innerText = 'Copy';
            }, 50000);
        });
    };
    return UtilsRenderer;
}());
exports.UtilsRenderer = UtilsRenderer;


/***/ }),

/***/ "./src/renderers/index.ts":
/*!********************************!*\
  !*** ./src/renderers/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./RenderManager */ "./src/renderers/RenderManager.ts"), exports);


/***/ }),

/***/ "./src/renderers/textRenderer/TextRenderer.ts":
/*!****************************************************!*\
  !*** ./src/renderers/textRenderer/TextRenderer.ts ***!
  \****************************************************/
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
exports.TextRenderer = void 0;
var lexemeBuilder_1 = __webpack_require__(/*! ../../lexemeBuilder */ "./src/lexemeBuilder/index.ts");
var pubSub_1 = __webpack_require__(/*! ../../pubSub */ "./src/pubSub/index.ts");
var WordRenderer_1 = __webpack_require__(/*! ./WordRenderer */ "./src/renderers/textRenderer/WordRenderer.ts");
var TextRenderer = /** @class */ (function () {
    function TextRenderer(lexemesAnalysis, title) {
        this.title = '';
        this.userWordShowPubSub = new pubSub_1.PubSub();
        this.wordRenderers = new Map();
        this.userWordShowEvent = this.userWordShowPubSub.event;
        this.lexemesAnalysis = lexemesAnalysis;
        this.title = title;
        this.containerElement = document.createElement('div');
        this.containerElement.id = 'text-container';
        this.initElement();
    }
    TextRenderer.prototype.getElement = function () {
        return this.containerElement;
    };
    TextRenderer.prototype.showLexemesByWord = function (word) {
        var e_1, _a;
        var lexemes = this.lexemesAnalysis.lexemesByWordLike.get(word);
        var shownCount = 0;
        if (!lexemes) {
            return shownCount;
        }
        try {
            for (var lexemes_1 = __values(lexemes), lexemes_1_1 = lexemes_1.next(); !lexemes_1_1.done; lexemes_1_1 = lexemes_1.next()) {
                var _b = __read(lexemes_1_1.value, 1), index = _b[0];
                var wordRenderer = this.wordRenderers.get(index);
                if (!wordRenderer) {
                    continue;
                }
                var isShownBefore = wordRenderer.isShown;
                wordRenderer.show();
                if (!isShownBefore) {
                    shownCount++;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (lexemes_1_1 && !lexemes_1_1.done && (_a = lexemes_1.return)) _a.call(lexemes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return shownCount;
    };
    TextRenderer.prototype.toggleText = function (isShown) {
        this.containerElement.classList.remove('show-text', 'show-first-letters');
        if (isShown) {
            this.containerElement.classList.add('show-text');
        }
        else {
            this.containerElement.classList.remove('show-text');
        }
    };
    TextRenderer.prototype.toggleFirstLetters = function (isShown) {
        this.containerElement.classList.remove('show-text', 'show-first-letters');
        if (isShown) {
            this.containerElement.classList.add('show-first-letters');
        }
        else {
            this.containerElement.classList.remove('show-first-letters');
        }
    };
    TextRenderer.prototype.initElement = function () {
        var e_2, _a;
        var _this = this;
        if (this.title) {
            var titleElement = document.createElement('h1');
            titleElement.innerText = this.title;
            this.containerElement.appendChild(titleElement);
        }
        try {
            for (var _b = __values(this.lexemesAnalysis.lexemes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], lexeme = _d[1];
                if (lexeme.type === lexemeBuilder_1.LexemeType.SpecialCharacter) {
                    this.containerElement.append(this.wrapSpecialCharacter(lexeme));
                }
                else {
                    var wordRenderer = new WordRenderer_1.WordRenderer(lexeme);
                    wordRenderer.userWordShowEvent.subscribe(function (lexeme) { return _this.handleUserWordShow(lexeme); });
                    this.wordRenderers.set(index, wordRenderer);
                    this.containerElement.appendChild(wordRenderer.getElement());
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    TextRenderer.prototype.wrapSpecialCharacter = function (lexeme) {
        if (lexeme.normalized === '\n') {
            return document.createElement('br');
        }
        return lexeme.normalized;
    };
    TextRenderer.prototype.handleUserWordShow = function (lexeme) {
        this.userWordShowPubSub.publish(lexeme);
    };
    return TextRenderer;
}());
exports.TextRenderer = TextRenderer;


/***/ }),

/***/ "./src/renderers/textRenderer/WordRenderer.ts":
/*!****************************************************!*\
  !*** ./src/renderers/textRenderer/WordRenderer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WordRenderer = void 0;
var pubSub_1 = __webpack_require__(/*! ../../pubSub */ "./src/pubSub/index.ts");
var WordRenderer = /** @class */ (function () {
    function WordRenderer(lexeme) {
        this.userWordShowPubSub = new pubSub_1.PubSub();
        this.isShown = false;
        this.userWordShowEvent = this.userWordShowPubSub.event;
        this.lexeme = lexeme;
        this.containerElement = document.createElement('span');
        this.containerElement.classList.add('lexeme-container');
        this.initElement();
    }
    WordRenderer.prototype.getElement = function () {
        return this.containerElement;
    };
    WordRenderer.prototype.show = function () {
        var _a;
        this.isShown = true;
        (_a = this.containerElement) === null || _a === void 0 ? void 0 : _a.classList.add('show');
    };
    WordRenderer.prototype.initElement = function () {
        this.containerElement.innerHTML = "\n      <span class=\"lexeme\">".concat(this.lexeme.normalized, "</span>\n      <span class=\"lexeme-first-letter\">").concat(this.lexeme.normalized[0], "</span>\n    ");
        this.attachClickHandler();
    };
    WordRenderer.prototype.attachClickHandler = function () {
        var _this = this;
        var _a;
        (_a = this.containerElement) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            if (_this.isShown) {
                return;
            }
            _this.show();
            _this.userWordShowPubSub.publish(_this.lexeme);
        });
    };
    return WordRenderer;
}());
exports.WordRenderer = WordRenderer;


/***/ }),

/***/ "./src/renderers/textRenderer/index.ts":
/*!*********************************************!*\
  !*** ./src/renderers/textRenderer/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./TextRenderer */ "./src/renderers/textRenderer/TextRenderer.ts"), exports);


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadRemoteText = exports.parseRemoteTextParametersFromUrl = exports.hasRemoteTextParametersInUrl = exports.generateTextUrl = void 0;
function generateTextUrl(_a) {
    var allowShowingFirstLetters = _a.allowShowingFirstLetters, allowShowingText = _a.allowShowingText, remoteTextUrl = _a.remoteTextUrl;
    var data = {
        sfl: allowShowingFirstLetters ? 1 : 0,
        st: allowShowingText ? 1 : 0,
        rUrl: remoteTextUrl,
    };
    var base64Data = btoa(JSON.stringify(data));
    var url = "".concat(window.location.origin, "?text=").concat(encodeURIComponent(base64Data));
    return url;
}
exports.generateTextUrl = generateTextUrl;
function hasRemoteTextParametersInUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    return !!urlParams.get('text');
}
exports.hasRemoteTextParametersInUrl = hasRemoteTextParametersInUrl;
function parseRemoteTextParametersFromUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    var encodedParameters = urlParams.get('text');
    if (!encodedParameters) {
        throw new Error('Missing parameters in URL');
    }
    var parameters = JSON.parse(atob(decodeURIComponent(encodedParameters)));
    return {
        allowShowingFirstLetters: Boolean(parameters.sfl),
        allowShowingText: Boolean(parameters.st),
        remoteTextUrl: parameters.rUrl,
    };
}
exports.parseRemoteTextParametersFromUrl = parseRemoteTextParametersFromUrl;
function loadRemoteText(url) {
    return __awaiter(this, void 0, void 0, function () {
        var headers, response, dataBlob, data, matchedText, matchedTitle, text, rawTitle, titleDashPosition, title, document, unescapedText;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headers = new Headers();
                    headers.append('Cache-Control', 'no-cache');
                    return [4 /*yield*/, fetch(
                        // A big thank you to https://github.com/Freeboard/thingproxy.
                        // This is a just to fun project that is not going to be used intensively, so
                        // the API should not be abused.
                        "https://thingproxy.freeboard.io/fetch/".concat(url), {
                            method: 'GET',
                            headers: headers,
                            mode: 'no-cors',
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.blob()];
                case 2:
                    dataBlob = _a.sent();
                    return [4 /*yield*/, dataBlob.text()];
                case 3:
                    data = _a.sent();
                    matchedText = /<div class="plaintext\s?">((.|\n)*)<\/div>/gim.exec(data);
                    matchedTitle = /<title>((.|\n)*)<\/title>/gim.exec(data);
                    text = (matchedText === null || matchedText === void 0 ? void 0 : matchedText[1]) || '';
                    rawTitle = (matchedTitle === null || matchedTitle === void 0 ? void 0 : matchedTitle[1]) || '';
                    titleDashPosition = rawTitle.indexOf('-');
                    title = rawTitle.slice(titleDashPosition +
                        // +1 (because index starts from 0), +1 (because of the space before title, check the format above)
                        2);
                    document = new DOMParser().parseFromString(text, 'text/html');
                    unescapedText = (document.documentElement.textContent || '').trim();
                    if (!unescapedText) {
                        throw new Error('Parsed text is empty');
                    }
                    return [2 /*return*/, {
                            text: unescapedText,
                            title: title,
                        }];
            }
        });
    });
}
exports.loadRemoteText = loadRemoteText;


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUIsUUFBUSxHQUFHLGFBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRyxDQUFDLENBQUMsS0FBSSxFQUFFLENBQUM7b0JBQ25DLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUMxQixpQkFBaUI7d0JBQ2YsbUdBQW1HO3dCQUNuRyxDQUFDLENBQ0osQ0FBQztvQkFDSSxRQUFRLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO29CQUU5RCxhQUFhLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFFMUUsSUFBSSxDQUFDLGFBQWEsRUFBRTt3QkFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO3FCQUN6QztvQkFFRCxzQkFBTzs0QkFDTCxJQUFJLEVBQUUsYUFBYTs0QkFDbkIsS0FBSzt5QkFDTixFQUFDOzs7O0NBQ0g7QUE5Q0Qsd0NBOENDOzs7Ozs7O1VDNUZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BndWVzc2lyL3dlYi8uL3NyYy9zdHlsZXMuY3NzPzE1NTMiLCJ3ZWJwYWNrOi8vQGd1ZXNzaXIvd2ViLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0BndWVzc2lyL3dlYi8uL3NyYy9sZXhlbWVCdWlsZGVyL0xleGVtZUJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vQGd1ZXNzaXIvd2ViLy4vc3JjL2xleGVtZUJ1aWxkZXIvTGV4ZW1lTm9ybWFsaXplci50cyIsIndlYnBhY2s6Ly9AZ3Vlc3Npci93ZWIvLi9zcmMvbGV4ZW1lQnVpbGRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9AZ3Vlc3Npci93ZWIvLi9zcmMvbGV4ZW1lQnVpbGRlci90eXBlcy50cyIsIndlYnBhY2s6Ly9AZ3Vlc3Npci93ZWIvLi9zcmMvcHViU3ViL1B1YlN1Yi50cyIsIndlYnBhY2s6Ly9AZ3Vlc3Npci93ZWIvLi9zcmMvcHViU3ViL2luZGV4LnRzIiwid2VicGFjazovL0BndWVzc2lyL3dlYi8uL3NyYy9yZW5kZXJlcnMvQ29udHJvbHNSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9AZ3Vlc3Npci93ZWIvLi9zcmMvcmVuZGVyZXJzL1JlbmRlck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vQGd1ZXNzaXIvd2ViLy4vc3JjL3JlbmRlcmVycy9TY29yZVJlbmRlcmVyLnRzIiwid2VicGFjazovL0BndWVzc2lyL3dlYi8uL3NyYy9yZW5kZXJlcnMvVXRpbHNSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9AZ3Vlc3Npci93ZWIvLi9zcmMvcmVuZGVyZXJzL2luZGV4LnRzIiwid2VicGFjazovL0BndWVzc2lyL3dlYi8uL3NyYy9yZW5kZXJlcnMvdGV4dFJlbmRlcmVyL1RleHRSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9AZ3Vlc3Npci93ZWIvLi9zcmMvcmVuZGVyZXJzL3RleHRSZW5kZXJlci9Xb3JkUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vQGd1ZXNzaXIvd2ViLy4vc3JjL3JlbmRlcmVycy90ZXh0UmVuZGVyZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGd1ZXNzaXIvd2ViLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL0BndWVzc2lyL3dlYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZ3Vlc3Npci93ZWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AZ3Vlc3Npci93ZWIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9AZ3Vlc3Npci93ZWIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0BndWVzc2lyL3dlYi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQgeyBMZXhlbWVCdWlsZGVyIH0gZnJvbSAnLi9sZXhlbWVCdWlsZGVyJztcbmltcG9ydCB7IFJlbmRlck1hbmFnZXIgfSBmcm9tICcuL3JlbmRlcmVycyc7XG5pbXBvcnQgeyBoYXNSZW1vdGVUZXh0UGFyYW1ldGVyc0luVXJsLCBsb2FkUmVtb3RlVGV4dCwgcGFyc2VSZW1vdGVUZXh0UGFyYW1ldGVyc0Zyb21VcmwgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZGVmYXVsdFRleHQgPSBgXG4gIEhlbGxvISBJJ20gYSBzaW1wbGUgdG9vbCB0byB0dXJuIGFueSBFbmdsaXNoIHRleHQgdG8gYSB3b3JkIGd1ZXNzaW5nIGdhbWUuXG4gIFxuICBJbiBvcmRlciB0byBjcmVhdGUgeW91ciBvd24gdGV4dCBjaGVjayB0aGUgaW5zdHJ1Y3Rpb25zIGJlbG93LlxuYDtcblxuY29uc3QgY291bGROb3RMb2FkUmVtb3RlVGV4dFRleHQgPSBgXG4gIEhlbGxvISBJIGNvdWxkIG5vdCBsb2FkIHRoZSByZW1vdGUgdGV4dC4gUGxlYXNlLCB2ZXJpZnkgeW91ciBVUkwgb3IgY3JlYXRlIGEgbmV3IHRleHQuXG5gO1xuXG5hc3luYyBmdW5jdGlvbiBib290KCkge1xuICBsZXQgdGV4dCA9ICcnO1xuICBsZXQgdGl0bGUgPSAnJztcbiAgbGV0IGFsbG93U2hvd2luZ1RleHQgPSB0cnVlO1xuICBsZXQgYWxsb3dTaG93aW5nRmlyc3RMZXR0ZXJzID0gdHJ1ZTtcblxuICBpZiAoaGFzUmVtb3RlVGV4dFBhcmFtZXRlcnNJblVybCgpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlVGV4dFVybCwgLi4ucmVzdFJlbW90ZVRleHRQYXJhbWV0ZXJzIH0gPSBwYXJzZVJlbW90ZVRleHRQYXJhbWV0ZXJzRnJvbVVybCgpO1xuICAgICAgKHsgYWxsb3dTaG93aW5nRmlyc3RMZXR0ZXJzLCBhbGxvd1Nob3dpbmdUZXh0IH0gPSByZXN0UmVtb3RlVGV4dFBhcmFtZXRlcnMpO1xuXG4gICAgICAoeyB0ZXh0LCB0aXRsZSB9ID0gYXdhaXQgbG9hZFJlbW90ZVRleHQocmVtb3RlVGV4dFVybCkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRleHQgPSBjb3VsZE5vdExvYWRSZW1vdGVUZXh0VGV4dDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGV4dCA9IGRlZmF1bHRUZXh0O1xuICB9XG5cbiAgY29uc3QgbGV4ZW1lQW5hbHlzaXMgPSBuZXcgTGV4ZW1lQnVpbGRlcigpLmJ1aWxkTGV4ZW1lcyh0ZXh0KTtcbiAgY29uc3QgcmVuZGVyTWFuYWdlciA9IG5ldyBSZW5kZXJNYW5hZ2VyKGxleGVtZUFuYWx5c2lzLCB0aXRsZSwgYWxsb3dTaG93aW5nVGV4dCwgYWxsb3dTaG93aW5nRmlyc3RMZXR0ZXJzKTtcblxuICByZW5kZXJNYW5hZ2VyLmluaXQoZG9jdW1lbnQuYm9keSk7XG59XG5cbmJvb3QoKTtcbiIsImltcG9ydCB7IExleGVtZU5vcm1hbGl6ZXIgfSBmcm9tICcuL0xleGVtZU5vcm1hbGl6ZXInO1xuaW1wb3J0IHtcbiAgR3JvdXBXb3JkTGlrZU5vbWluYWwsXG4gIExleGVtZSxcbiAgTGV4ZW1lQW5hbHlzaXMsXG4gIExleGVtZVR5cGUsXG4gIE5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWVOb21pbmFsLFxuICBQcmltaXRpdmVMZXhlbWVOb21pbmFsLFxufSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIExleGVtZUJ1aWxkZXIge1xuICBwcml2YXRlIGxleGVtZXMgPSBuZXcgTWFwPG51bWJlciwgTGV4ZW1lPigpO1xuICBwcml2YXRlIGxleGVtZXNCeVdvcmRMaWtlID0gbmV3IE1hcDxHcm91cFdvcmRMaWtlTm9taW5hbCwgTWFwPG51bWJlciwgTGV4ZW1lPj4oKTtcbiAgcHJpdmF0ZSB3b3JkTGlrZUNvdW50ID0gMDtcbiAgcHJpdmF0ZSBzcGVjaWFsQ2hhcmFjdGVyQ291bnQgPSAwO1xuICBwcml2YXRlIGxhc3RMZXhlbWVJbmRleCA9IC0xO1xuXG4gIHByaXZhdGUgc3RhdGljIFBVTkNUVUFUSU9OX0NIQVJBQ1RFUlMgPSBbJywnLCAnLicsICchJywgJz8nLCAnOyddO1xuXG4gIHB1YmxpYyBidWlsZExleGVtZXMocmF3VGV4dDogc3RyaW5nKTogTGV4ZW1lQW5hbHlzaXMge1xuICAgIGNvbnN0IHRleHQgPSByYXdUZXh0LnRyaW0oKTtcbiAgICBsZXQgcHJpbWl0aXZlTGV4ZW1lOiBQcmltaXRpdmVMZXhlbWVOb21pbmFsID0gJycgYXMgUHJpbWl0aXZlTGV4ZW1lTm9taW5hbDtcbiAgICBsZXQgbm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZTogTm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZU5vbWluYWwgPSAnJyBhcyBOb3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lTm9taW5hbDtcbiAgICBsZXQgc3RhcnRJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIGxldCBzaG91bGRQcm9jZXNzUHJpbWl0aXZlTGV4ZW1lID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRleHQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGFyYWN0ZXIgPSB0ZXh0W2ldO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZENoYXJhY3RlciA9IExleGVtZU5vcm1hbGl6ZXIubm9ybWFsaXplQ2hhcmFjdGVyKGNoYXJhY3Rlcik7XG5cbiAgICAgIGlmIChzdGFydEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IGk7XG4gICAgICB9XG5cbiAgICAgIGlmIChMZXhlbWVOb3JtYWxpemVyLmlzV29yZENoYXJhY3Rlcihub3JtYWxpemVkQ2hhcmFjdGVyKSkge1xuICAgICAgICBjb25zdCBuZXh0Tm9ybWFsaXplZENoYXJhY3RlciA9XG4gICAgICAgICAgLy8gQ2FuIGJlIHVuZGVmaW5lZCBpZiB0aGlzIGlzIGJleW9uZCB0aGUgdGV4dFxuICAgICAgICAgIHRleHRbaSArIDFdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBMZXhlbWVOb3JtYWxpemVyLm5vcm1hbGl6ZUNoYXJhY3Rlcih0ZXh0W2kgKyAxXSk7XG4gICAgICAgIC8vIElmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBub3QgYSBwYXJ0IG9mIHRoZSB3b3JkLCB0aGVuIHRoZSB3b3JkIGlzIGZpbmlzaGVkXG4gICAgICAgIGNvbnN0IGlzV29yZEJvdW5kYXJ5ID1cbiAgICAgICAgICBuZXh0Tm9ybWFsaXplZENoYXJhY3RlciA9PT0gdW5kZWZpbmVkIHx8ICFMZXhlbWVOb3JtYWxpemVyLmlzV29yZENoYXJhY3RlcihuZXh0Tm9ybWFsaXplZENoYXJhY3Rlcik7XG5cbiAgICAgICAgLy8gQ3VtdWxhdGUgdGhpcyBwcmltaXRpdmUgbGV4ZW1lIHRpbGwgdGhlIGVuZCBvZiB0aGUgd29yZFxuICAgICAgICBwcmltaXRpdmVMZXhlbWUgPSAocHJpbWl0aXZlTGV4ZW1lICsgY2hhcmFjdGVyKSBhcyBQcmltaXRpdmVMZXhlbWVOb21pbmFsO1xuICAgICAgICBub3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lID0gKG5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWUgK1xuICAgICAgICAgIG5vcm1hbGl6ZWRDaGFyYWN0ZXIpIGFzIE5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWVOb21pbmFsO1xuICAgICAgICBzaG91bGRQcm9jZXNzUHJpbWl0aXZlTGV4ZW1lID0gaXNXb3JkQm91bmRhcnk7XG5cbiAgICAgICAgaWYgKGlzV29yZEJvdW5kYXJ5KSB7XG4gICAgICAgICAgbm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZSA9IExleGVtZU5vcm1hbGl6ZXIubm9ybWFsaXplV29yZChwcmltaXRpdmVMZXhlbWUsIG5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmltaXRpdmVMZXhlbWUgPSBjaGFyYWN0ZXIgYXMgUHJpbWl0aXZlTGV4ZW1lTm9taW5hbDtcbiAgICAgICAgbm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZSA9IG5vcm1hbGl6ZWRDaGFyYWN0ZXI7XG4gICAgICAgIHNob3VsZFByb2Nlc3NQcmltaXRpdmVMZXhlbWUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvdWxkUHJvY2Vzc1ByaW1pdGl2ZUxleGVtZSkge1xuICAgICAgICB0aGlzLnByb2Nlc3NQcmltaXRpdmVMZXhlbWUocHJpbWl0aXZlTGV4ZW1lLCBub3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lLCBzdGFydEluZGV4LCBpKTtcbiAgICAgICAgc3RhcnRJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcHJpbWl0aXZlTGV4ZW1lID0gJycgYXMgUHJpbWl0aXZlTGV4ZW1lTm9taW5hbDtcbiAgICAgICAgbm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZSA9ICcnIGFzIE5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWVOb21pbmFsO1xuICAgICAgICBzaG91bGRQcm9jZXNzUHJpbWl0aXZlTGV4ZW1lID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGV4ZW1lcyA9IHRoaXMubGV4ZW1lcztcbiAgICBjb25zdCBsZXhlbWVzQnlXb3JkTGlrZSA9IHRoaXMubGV4ZW1lc0J5V29yZExpa2U7XG4gICAgY29uc3Qgd29yZExpa2VDb3VudCA9IHRoaXMud29yZExpa2VDb3VudDtcbiAgICBjb25zdCBzcGVjaWFsQ2hhcmFjdGVyQ291bnQgPSB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJDb3VudDtcblxuICAgIC8vIENsZWFuIHVwXG4gICAgdGhpcy5sZXhlbWVzID0gbmV3IE1hcDxudW1iZXIsIExleGVtZT4oKTtcbiAgICB0aGlzLmxleGVtZXNCeVdvcmRMaWtlID0gbmV3IE1hcDxHcm91cFdvcmRMaWtlTm9taW5hbCwgTWFwPG51bWJlciwgTGV4ZW1lPj4oKTtcbiAgICB0aGlzLndvcmRMaWtlQ291bnQgPSAwO1xuICAgIHRoaXMuc3BlY2lhbENoYXJhY3RlckNvdW50ID0gMDtcbiAgICB0aGlzLmxhc3RMZXhlbWVJbmRleCA9IC0xO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxleGVtZXMsXG4gICAgICBsZXhlbWVzQnlXb3JkTGlrZSxcbiAgICAgIHdvcmRMaWtlQ291bnQsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyQ291bnQsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc1ByaW1pdGl2ZUxleGVtZShcbiAgICBwcmltaXRpdmVMZXhlbWU6IFByaW1pdGl2ZUxleGVtZU5vbWluYWwsXG4gICAgbm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZTogTm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZU5vbWluYWwsXG4gICAgc3RhcnRJbmRleDogbnVtYmVyLFxuICAgIGVuZEluZGV4OiBudW1iZXIsXG4gICkge1xuICAgIGNvbnN0IG5ld0Jhc2VMZXhlbWUgPSB7XG4gICAgICBlbmRJbmRleCxcbiAgICAgIHN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsXG4gICAgICBvcmlnaW5hbDogcHJpbWl0aXZlTGV4ZW1lLFxuICAgICAgbm9ybWFsaXplZDogbm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZSxcbiAgICAgIHVuY29udHJhY3RlZDogTGV4ZW1lTm9ybWFsaXplci51bmNvbnRyYWN0UHJpbWl0aXZlTGV4ZW1lKG5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWUpLFxuICAgIH07XG4gICAgY29uc3QgbmV3TGV4ZW1lID0ge1xuICAgICAgLi4ubmV3QmFzZUxleGVtZSxcbiAgICAgIHR5cGU6IExleGVtZU5vcm1hbGl6ZXIuZ2V0TGV4ZW1lVHlwZShuZXdCYXNlTGV4ZW1lKSxcbiAgICB9O1xuXG4gICAgLy8gU3BsaXQgY29uc3RydWN0aW9ucyBsaWtlIGBJJ20vV2UnbGwvdGhleSd2ZWAgdG8gZGlmZmVyZW50IGxleGVtZXNcbiAgICBpZiAobmV3TGV4ZW1lLnVuY29udHJhY3RlZCAhPT0gbmV3TGV4ZW1lLm5vcm1hbGl6ZWQpIHtcbiAgICAgIHRoaXMuc3BsaXRUb0xleGVtZXMobmV3TGV4ZW1lLCBzdGFydEluZGV4LCBlbmRJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNMYXN0U3BhY2UgPSB0aGlzLmlzTGFzdExleGVtZXNNYXRjaCgxLCAobGV4ZW1lKSA9PiBsZXhlbWUubm9ybWFsaXplZCA9PT0gJyAnKTtcbiAgICBjb25zdCBpc0N1cnJlbnRQdW5jdHVhdGlvbiA9IExleGVtZUJ1aWxkZXIuUFVOQ1RVQVRJT05fQ0hBUkFDVEVSUy5pbmNsdWRlcyhuZXdMZXhlbWUubm9ybWFsaXplZCk7XG4gICAgY29uc3QgaXNDdXJyZW50TmV3TGluZSA9IG5ld0xleGVtZS5ub3JtYWxpemVkID09PSAnXFxuJztcblxuICAgIGlmIChcbiAgICAgIC8vIFJlcGxhY2UgdHJhaWxpbmcgc3BhY2UgZm9sbG93ZWQgYnkgYSBwdW5jdHVhdGlvbiB3aXRoIHRoaXMgcHVuY3R1YXRpb25cbiAgICAgIChpc0xhc3RTcGFjZSAmJiBpc0N1cnJlbnRQdW5jdHVhdGlvbikgfHxcbiAgICAgIC8vIFJlcGxhY2UgdHJhaWxpbmcgc3BhY2UgZm9sbG93ZWQgYnkgYSBuZXcgbGluZSB3aXRoIHRoaXMgbmV3IGxpbmVcbiAgICAgIChpc0xhc3RTcGFjZSAmJiBpc0N1cnJlbnROZXdMaW5lKVxuICAgICkge1xuICAgICAgdGhpcy5kZWxldGVMYXN0TGV4ZW1lcygobGV4ZW1lKSA9PiBsZXhlbWUubm9ybWFsaXplZCA9PT0gJyAnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYW5BZGRMZXhlbWUobmV3TGV4ZW1lKSkge1xuICAgICAgY29uc3QgbmV3TGV4ZW1lSW5kZXggPSArK3RoaXMubGFzdExleGVtZUluZGV4O1xuICAgICAgdGhpcy5sZXhlbWVzLnNldChuZXdMZXhlbWVJbmRleCwgbmV3TGV4ZW1lKTtcblxuICAgICAgaWYgKG5ld0xleGVtZS50eXBlID09PSBMZXhlbWVUeXBlLlNwZWNpYWxDaGFyYWN0ZXIpIHtcbiAgICAgICAgdGhpcy5zcGVjaWFsQ2hhcmFjdGVyQ291bnQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud29yZExpa2VDb3VudCsrO1xuXG4gICAgICAgIExleGVtZU5vcm1hbGl6ZXIuZ2V0R3JvdXBpbmdXb3JkcyhuZXdMZXhlbWUubm9ybWFsaXplZCkuZm9yRWFjaCgoR3JvdXBXb3JkTGlrZU5vbWluYWwpID0+IHtcbiAgICAgICAgICBjb25zdCBsZXhlbWVzQnlXb3JkTGlrZSA9IHRoaXMubGV4ZW1lc0J5V29yZExpa2UuZ2V0KEdyb3VwV29yZExpa2VOb21pbmFsKSB8fCBuZXcgTWFwPG51bWJlciwgTGV4ZW1lPigpO1xuICAgICAgICAgIGxleGVtZXNCeVdvcmRMaWtlLnNldChuZXdMZXhlbWVJbmRleCwgbmV3TGV4ZW1lKTtcbiAgICAgICAgICB0aGlzLmxleGVtZXNCeVdvcmRMaWtlLnNldChHcm91cFdvcmRMaWtlTm9taW5hbCwgbGV4ZW1lc0J5V29yZExpa2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNwbGl0VG9MZXhlbWVzKGxleGVtZTogTGV4ZW1lLCBzdGFydEluZGV4OiBudW1iZXIsIGVuZEluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdOb3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lcyA9IGxleGVtZS51bmNvbnRyYWN0ZWQuc3BsaXQoJyAnKSBhcyBOb3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lTm9taW5hbFtdO1xuXG4gICAgbmV3Tm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZXMuZm9yRWFjaCgobmV3Tm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMucHJvY2Vzc1ByaW1pdGl2ZUxleGVtZShcbiAgICAgICAgbGV4ZW1lLm9yaWdpbmFsLFxuICAgICAgICBMZXhlbWVOb3JtYWxpemVyLm5vcm1hbGl6ZVdvcmQobGV4ZW1lLm9yaWdpbmFsLCBuZXdOb3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lKSxcbiAgICAgICAgc3RhcnRJbmRleCxcbiAgICAgICAgZW5kSW5kZXgsXG4gICAgICApO1xuXG4gICAgICBpZiAoaW5kZXggPCBuZXdOb3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc1ByaW1pdGl2ZUxleGVtZShcbiAgICAgICAgICAnICcgYXMgUHJpbWl0aXZlTGV4ZW1lTm9taW5hbCxcbiAgICAgICAgICAnICcgYXMgTm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZU5vbWluYWwsXG4gICAgICAgICAgc3RhcnRJbmRleCxcbiAgICAgICAgICBlbmRJbmRleCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2FuQWRkTGV4ZW1lKG5ld0xleGVtZTogTGV4ZW1lKSB7XG4gICAgY29uc3QgbGFzdExleGVtZSA9IHRoaXMubGV4ZW1lcy5nZXQodGhpcy5sYXN0TGV4ZW1lSW5kZXgpO1xuICAgIGNvbnN0IGlzVmVyeUZpcnN0TGV4ZW1lID0gIWxhc3RMZXhlbWU7XG5cbiAgICBpZiAoaXNWZXJ5Rmlyc3RMZXhlbWUpIHtcbiAgICAgIC8vIEFsbG93IHRoZSB2ZXJ5IGZpcnN0IGxleGVtZSBvbmx5IGlmIGl0J3MgYSB3b3JkIG9yIGEgbGV0dGVyXG4gICAgICByZXR1cm4gbmV3TGV4ZW1lLnR5cGUgPT09IExleGVtZVR5cGUuV29yZCB8fCBuZXdMZXhlbWUudHlwZSA9PT0gTGV4ZW1lVHlwZS5MZXR0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIG1vcmUgdGhhbiB0d28gYFxcbmAgaW4gYSByb3dcbiAgICAgIGlmIChuZXdMZXhlbWUubm9ybWFsaXplZCA9PT0gJ1xcbicgJiYgdGhpcy5pc0xhc3RMZXhlbWVzTWF0Y2goMiwgKGxleGVtZSkgPT4gbGV4ZW1lLm5vcm1hbGl6ZWQgPT09ICdcXG4nKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vIG1vcmUgdGhhbiBvbmUgYCBgIGluIGEgcm93XG4gICAgICBpZiAobmV3TGV4ZW1lLm5vcm1hbGl6ZWQgPT09ICcgJyAmJiB0aGlzLmlzTGFzdExleGVtZXNNYXRjaCgxLCAobGV4ZW1lKSA9PiBsZXhlbWUubm9ybWFsaXplZCA9PT0gJyAnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGlzTGFzdExleGVtZXNNYXRjaChjb3VudDogbnVtYmVyLCBmaWx0ZXI6IChsZXhlbWU6IExleGVtZSkgPT4gYm9vbGVhbikge1xuICAgIGxldCBsZXhlbWVJbmRleCA9IHRoaXMubGFzdExleGVtZUluZGV4O1xuXG4gICAgd2hpbGUgKGNvdW50ID4gMCkge1xuICAgICAgY29uc3QgbGV4ZW1lID0gdGhpcy5sZXhlbWVzLmdldChsZXhlbWVJbmRleCk7XG5cbiAgICAgIGlmICghbGV4ZW1lIHx8ICFmaWx0ZXIobGV4ZW1lKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxleGVtZUluZGV4LS07XG4gICAgICBjb3VudC0tO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxldGVMYXN0TGV4ZW1lcyhmaWx0ZXI6IChsZXhlbWU6IExleGVtZSkgPT4gYm9vbGVhbikge1xuICAgIGxldCBsZXhlbWUgPSB0aGlzLmxleGVtZXMuZ2V0KHRoaXMubGFzdExleGVtZUluZGV4KTtcblxuICAgIHdoaWxlIChsZXhlbWUgJiYgZmlsdGVyKGxleGVtZSkpIHtcbiAgICAgIGlmIChsZXhlbWUudHlwZSA9PT0gTGV4ZW1lVHlwZS5TcGVjaWFsQ2hhcmFjdGVyKSB7XG4gICAgICAgIHRoaXMuc3BlY2lhbENoYXJhY3RlckNvdW50LS07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndvcmRMaWtlQ291bnQtLTtcblxuICAgICAgICBMZXhlbWVOb3JtYWxpemVyLmdldEdyb3VwaW5nV29yZHMobGV4ZW1lLm5vcm1hbGl6ZWQpLmZvckVhY2goKEdyb3VwV29yZExpa2VOb21pbmFsKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGV4ZW1lcyA9IHRoaXMubGV4ZW1lc0J5V29yZExpa2UuZ2V0KEdyb3VwV29yZExpa2VOb21pbmFsKSB8fCBuZXcgTWFwPG51bWJlciwgTGV4ZW1lPigpO1xuICAgICAgICAgIGxleGVtZXMuZGVsZXRlKHRoaXMubGFzdExleGVtZUluZGV4KTtcblxuICAgICAgICAgIGlmICghbGV4ZW1lcy5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLmxleGVtZXNCeVdvcmRMaWtlLmRlbGV0ZShHcm91cFdvcmRMaWtlTm9taW5hbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sZXhlbWVzLmRlbGV0ZSh0aGlzLmxhc3RMZXhlbWVJbmRleCk7XG4gICAgICB0aGlzLmxhc3RMZXhlbWVJbmRleC0tO1xuICAgICAgbGV4ZW1lID0gdGhpcy5sZXhlbWVzLmdldCh0aGlzLmxhc3RMZXhlbWVJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEJhc2VMZXhlbWUsXG4gIEdyb3VwV29yZExpa2VOb21pbmFsLFxuICBMZXhlbWVUeXBlLFxuICBOb3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lTm9taW5hbCxcbiAgUHJpbWl0aXZlTGV4ZW1lTm9taW5hbCxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBMZXhlbWVOb3JtYWxpemVyIHtcbiAgcHJpdmF0ZSBzdGF0aWMgQ0hBUkFDVEVSU19UT19OT1JNQUxJWkVEX0NIQVJBQ1RFUlMgPSBuZXcgTWFwPHN0cmluZywgTm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZU5vbWluYWw+KFtcbiAgICBbJ+KAlCcsICctJ10sXG4gICAgWyfigJknLCBcIidcIl0sXG4gICAgWydgJywgXCInXCJdLFxuICBdIGFzIEFycmF5PFtzdHJpbmcsIE5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWVOb21pbmFsXT4pO1xuICBwcml2YXRlIHN0YXRpYyBOT1JNQUxJWkVEX1dPUkRTX1RPX05PUk1BTElaRURfV09SRFMgPSBuZXcgTWFwPFxuICAgIE5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWVOb21pbmFsLFxuICAgIE5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWVOb21pbmFsXG4gID4oW1snaScsICdJJ11dIGFzIEFycmF5PFtOb3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lTm9taW5hbCwgTm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZU5vbWluYWxdPik7XG4gIHByaXZhdGUgc3RhdGljIE5PUk1BTElaRURfQ09OVFJBQ1RJT05fQ0hBUkFDVEVSUyA9IFtcIidcIl0gYXMgTm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZU5vbWluYWxbXTtcbiAgcHJpdmF0ZSBzdGF0aWMgTk9STUFMSVpFRF9XT1JEX1NFUEFSQVRJT05fQ0hBUkFDVEVSUyA9IFsnLSddIGFzIE5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWVOb21pbmFsW107XG4gIHByaXZhdGUgc3RhdGljIExFVFRFUl9SRSA9IC9eW0EtWmEtel0kLztcblxuICBwcml2YXRlIHN0YXRpYyBOT1JNQUxJWkVEX0NPTlRSQUNUSU9OX1RPX05PUk1BTElaRURfTk9STUFMID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oW1xuICAgIFtcImRvbid0XCIsICdkbyBub3QnXSxcbiAgICBbXCJkb2Vzbid0XCIsICdkb2VzIG5vdCddLFxuICAgIFtcImRpZG4ndFwiLCAnZGlkIG5vdCddLFxuXG4gICAgW1wiaGF2ZW4ndFwiLCAnaGF2ZSBub3QnXSxcbiAgICBbXCJoYWRuJ3RcIiwgJ2hhZCBub3QnXSxcblxuICAgIFtcInNob3VsZG4ndFwiLCAnc2hvdWxkJ10sXG4gICAgW1wid291bGRuJ3RcIiwgJ3dvdWxkIG5vdCddLFxuICAgIFtcImNvdWxkbid0XCIsICdjb3VsZCBub3QnXSxcbiAgICBbXCJtdXN0bid0XCIsICdtdXN0IG5vdCddLFxuICAgIFtcImNhbid0XCIsICdjYW5ub3QnXSxcbiAgICBbXCJuZWVkbid0XCIsICduZWVkIG5vdCddLFxuXG4gICAgW1wid29uJ3RcIiwgJ3dpbGwgbm90J10sXG5cbiAgICBbXCJJJ21cIiwgJ0kgYW0nXSxcbiAgICBbXCJJJ3ZlXCIsICdJIGhhdmUnXSxcbiAgICBbXCJJJ2xsXCIsICdJIHdpbGwnXSxcblxuICAgIFtcInNoZSdsbFwiLCAnc2hlIHdpbGwnXSxcblxuICAgIFtcImhlJ2xsXCIsICdoZSB3aWxsJ10sXG5cbiAgICBbXCJ3ZSdyZVwiLCAnd2UgYXJlJ10sXG4gICAgW1wid2UndmVcIiwgJ3dlIGhhdmUnXSxcbiAgICBbXCJ3ZSdsbFwiLCAnd2Ugd2lsbCddLFxuXG4gICAgW1widGhleSdyZVwiLCAndGhleSBhcmUnXSxcbiAgICBbXCJ0aGV5J3ZlXCIsICd0aGV5IGhhdmUnXSxcbiAgICBbXCJ0aGV5J2xsXCIsICd0aGV5IHdpbGwnXSxcblxuICAgIC8vIEknZCwgU2hlJ2QsIEhlJ2QsIEhlJ3MsIFNoZSdzIGNvdmVyZWQgaW4gYGdldEdyb3VwaW5nV29yZHNgLCByZWFkIG1vcmUgdGhlcmUuXG4gIF0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgbm9ybWFsaXplV29yZChcbiAgICBwcmltaXRpdmVMZXhlbWU6IFByaW1pdGl2ZUxleGVtZU5vbWluYWwsXG4gICAgbm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZTogTm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZU5vbWluYWwsXG4gICkge1xuICAgIGxldCBjb252ZXJ0ZWQgPVxuICAgICAgTGV4ZW1lTm9ybWFsaXplci5OT1JNQUxJWkVEX1dPUkRTX1RPX05PUk1BTElaRURfV09SRFMuZ2V0KG5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWUpIHx8IG5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWU7XG5cbiAgICAvLyBDb252ZXJ0IHdvcmQgdG8gdGhlIHRpdGxlIGNhc2Ugb2YgdGhlIG9yaWdpbmFsIHdvcmQgaXMgc3RhcnRlZCBmcm9tIGEgY2FwaXRhbCBsZXR0ZXJcbiAgICBpZiAoY29udmVydGVkWzBdICE9PSBwcmltaXRpdmVMZXhlbWVbMF0gJiYgY29udmVydGVkWzBdLnRvVXBwZXJDYXNlKCkgPT09IHByaW1pdGl2ZUxleGVtZVswXSkge1xuICAgICAgY29udmVydGVkID0gKGNvbnZlcnRlZFswXS50b1VwcGVyQ2FzZSgpICsgY29udmVydGVkLnN1YnN0cmluZygxKSkgYXMgTm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZU5vbWluYWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnZlcnRlZDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbm9ybWFsaXplQ2hhcmFjdGVyKGNoYXJhY3Rlcjogc3RyaW5nKSB7XG4gICAgY29uc3QgbG93ZXJDYXNlZENoYXJhY3RlciA9IGNoYXJhY3Rlci50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIExleGVtZU5vcm1hbGl6ZXIuQ0hBUkFDVEVSU19UT19OT1JNQUxJWkVEX0NIQVJBQ1RFUlMuZ2V0KGxvd2VyQ2FzZWRDaGFyYWN0ZXIpIHx8XG4gICAgICAobG93ZXJDYXNlZENoYXJhY3RlciBhcyBOb3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lTm9taW5hbClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1bmNvbnRyYWN0UHJpbWl0aXZlTGV4ZW1lKG5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWU6IE5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWVOb21pbmFsKSB7XG4gICAgcmV0dXJuIChMZXhlbWVOb3JtYWxpemVyLk5PUk1BTElaRURfQ09OVFJBQ1RJT05fVE9fTk9STUFMSVpFRF9OT1JNQUwuZ2V0KG5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWUpIHx8XG4gICAgICBub3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lKSBhcyBOb3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lTm9taW5hbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNXb3JkQ2hhcmFjdGVyKG5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWU6IE5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWVOb21pbmFsKSB7XG4gICAgaWYgKG5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWUubGVuZ3RoICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBiZSB1c2VkIG9ubHkgZm9yIGNoYXJhY3RlcnMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgTGV4ZW1lTm9ybWFsaXplci5pc0xldHRlcihub3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lKSB8fFxuICAgICAgTGV4ZW1lTm9ybWFsaXplci5pc1dvcmRIZWxwaW5nQ2hhcmFjdGVyKG5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWUpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNMZXR0ZXIobm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZTogTm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZU5vbWluYWwpIHtcbiAgICByZXR1cm4gTGV4ZW1lTm9ybWFsaXplci5MRVRURVJfUkUudGVzdChub3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNXb3JkSGVscGluZ0NoYXJhY3Rlcihub3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lOiBOb3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lTm9taW5hbCkge1xuICAgIHJldHVybiAoXG4gICAgICBMZXhlbWVOb3JtYWxpemVyLk5PUk1BTElaRURfQ09OVFJBQ1RJT05fQ0hBUkFDVEVSUy5pbmNsdWRlcyhub3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lKSB8fFxuICAgICAgTGV4ZW1lTm9ybWFsaXplci5OT1JNQUxJWkVEX1dPUkRfU0VQQVJBVElPTl9DSEFSQUNURVJTLmluY2x1ZGVzKG5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWUpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TGV4ZW1lVHlwZShiYXNlTGV4ZW1lOiBCYXNlTGV4ZW1lKSB7XG4gICAgaWYgKGJhc2VMZXhlbWUubm9ybWFsaXplZC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChMZXhlbWVOb3JtYWxpemVyLmlzV29yZEhlbHBpbmdDaGFyYWN0ZXIoYmFzZUxleGVtZS5ub3JtYWxpemVkKSkge1xuICAgICAgICByZXR1cm4gTGV4ZW1lVHlwZS5Xb3JkSGVscGluZztcbiAgICAgIH1cblxuICAgICAgaWYgKExleGVtZU5vcm1hbGl6ZXIuaXNMZXR0ZXIoYmFzZUxleGVtZS5ub3JtYWxpemVkKSkge1xuICAgICAgICByZXR1cm4gTGV4ZW1lVHlwZS5MZXR0ZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBMZXhlbWVUeXBlLlNwZWNpYWxDaGFyYWN0ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIExleGVtZVR5cGUuV29yZDtcbiAgfVxuXG4gIC8vIFRvIHdvcmthcm91bmQgd29yZHMgbGlrZSBgSXRlbSdzL0knZC9TaGUnZC9IZSdkL0hlJ3MvU2hlJ3NgLiBXZSBjYW5ub3QgdW5jb250cmFjdCB0aGVtLCBhcyB0aGV5IGNhbiBiZVxuICAvLyB1bmNvbnRyYWN0ZWQgaW4gbXVsdGlwbGUgd2F5cyAoZS5nLiBzaGUncyAtIHNoZSBpcyAvIHNoZSBoYXMpLCBzbyB3ZSBjYW4gc2ltcGx5XG4gIC8vIGxldCB0aGUgdXNlciB0byB1c2UganVzdCBlLmcuIGBzaGVgIGFuZCBjb3VudCBpdCBhcyBgc2hlJ3NgIGFuZCBhcyBgc2hlYC5cbiAgcHVibGljIHN0YXRpYyBnZXRHcm91cGluZ1dvcmRzKG5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWU6IE5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWVOb21pbmFsKTogR3JvdXBXb3JkTGlrZU5vbWluYWxbXSB7XG4gICAgY29uc3QgbGVuZ3RoID0gbm9ybWFsaXplZFByaW1pdGl2ZUxleGVtZS5sZW5ndGg7XG4gICAgLy8gS2VlcCBhcyBsb3dlci1jYXNlZCBmb3IgZWFzeSBhY2Nlc3NcbiAgICBjb25zdCBHcm91cFdvcmRMaWtlTm9taW5hbCA9IG5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWUudG9Mb3dlckNhc2UoKSBhcyBHcm91cFdvcmRMaWtlTm9taW5hbDtcblxuICAgIC8vIFNlcGFyYXRlIHdvcmRzIHRoYXQgZW5kIHdpdGggYCdzYCwgZS5nLiBgXG4gICAgaWYgKEdyb3VwV29yZExpa2VOb21pbmFsW2xlbmd0aCAtIDFdID09PSAncycgJiYgR3JvdXBXb3JkTGlrZU5vbWluYWxbbGVuZ3RoIC0gMl0gPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gW0dyb3VwV29yZExpa2VOb21pbmFsLnNsaWNlKDAsIC0yKSBhcyBHcm91cFdvcmRMaWtlTm9taW5hbCwgR3JvdXBXb3JkTGlrZU5vbWluYWxdO1xuICAgIH1cblxuICAgIHJldHVybiBbR3JvdXBXb3JkTGlrZU5vbWluYWxdO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL0xleGVtZUJ1aWxkZXInO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG4iLCJleHBvcnQgZW51bSBMZXhlbWVUeXBlIHtcbiAgV29yZCA9ICd3JyxcbiAgU3BlY2lhbENoYXJhY3RlciA9ICdzYycsXG4gIExldHRlciA9ICdsJyxcbiAgLy8gRS5nLiBkYXNoIGluIGByZS1jb25maWd1cmVkYCBvciBhcG9zdHJvcGhlIGluYGRvbid0YFxuICBXb3JkSGVscGluZyA9ICd3aCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUxleGVtZSB7XG4gIHN0YXJ0SW5kZXg6IG51bWJlcjtcbiAgZW5kSW5kZXg6IG51bWJlcjtcbiAgb3JpZ2luYWw6IFByaW1pdGl2ZUxleGVtZU5vbWluYWw7XG4gIG5vcm1hbGl6ZWQ6IE5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWVOb21pbmFsO1xuICB1bmNvbnRyYWN0ZWQ6IE5vcm1hbGl6ZWRQcmltaXRpdmVMZXhlbWVOb21pbmFsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExleGVtZUFuYWx5c2lzIHtcbiAgbGV4ZW1lczogTWFwPFxuICAgIC8vIExleGVtZSBpbmRleFxuICAgIG51bWJlcixcbiAgICBMZXhlbWVcbiAgPjtcbiAgbGV4ZW1lc0J5V29yZExpa2U6IE1hcDxcbiAgICAvLyBXb3JkXG4gICAgc3RyaW5nLFxuICAgIE1hcDxcbiAgICAgIC8vIExleGVtZSBpbmRleFxuICAgICAgbnVtYmVyLFxuICAgICAgTGV4ZW1lXG4gICAgPlxuICA+O1xuICB3b3JkTGlrZUNvdW50OiBudW1iZXI7XG4gIHNwZWNpYWxDaGFyYWN0ZXJDb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExleGVtZSBleHRlbmRzIEJhc2VMZXhlbWUge1xuICB0eXBlOiBMZXhlbWVUeXBlO1xufVxuXG4vLyBOb21pbmFsc1xuXG5leHBvcnQgdHlwZSBOb3JtYWxpemVkUHJpbWl0aXZlTGV4ZW1lTm9taW5hbCA9IHN0cmluZyAmIHtcbiAgX190eXBlOiAnbm9ybWFsaXplZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcmltaXRpdmVMZXhlbWVOb21pbmFsID0gc3RyaW5nICYge1xuICBfX3R5cGU6ICdwcmltaXRpdmUnO1xufTtcblxuZXhwb3J0IHR5cGUgR3JvdXBXb3JkTGlrZU5vbWluYWwgPSBzdHJpbmcgJiB7XG4gIF9fdHlwZTogJ2dyb3VwV29yZExpa2UnO1xufTtcbiIsImV4cG9ydCBjbGFzcyBQdWJTdWI8VD4ge1xuICBwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmliZXJzID0gbmV3IFNldDwoZGF0YTogVCkgPT4gdm9pZD4oKTtcblxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnQgPSB7XG4gICAgc3Vic2NyaWJlOiAoc3Vic2NyaWJlcjogKGRhdGE6IFQpID0+IHZvaWQpID0+IHRoaXMuc3Vic2NyaWJlKHN1YnNjcmliZXIpLFxuICAgIHVuc3Vic2NyaWJlOiAoc3Vic2NyaWJlcjogKGRhdGE6IFQpID0+IHZvaWQpID0+IHRoaXMudW5zdWJzY3JpYmUoc3Vic2NyaWJlciksXG4gIH07XG5cbiAgcHVibGljIHB1Ymxpc2goZGF0YTogVCkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaCgoc3Vic2NyaWJlcikgPT4gc3Vic2NyaWJlcihkYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZShzdWJzY3JpYmVyOiAoZGF0YTogVCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmliZXJzLmhhcyhzdWJzY3JpYmVyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm92aWRlZCBzdWJzY3JpYmVyIGlzIGFscmVhZHkgc3Vic2NyaWJlZCcpO1xuICAgIH1cblxuICAgIHRoaXMuc3Vic2NyaWJlcnMuYWRkKHN1YnNjcmliZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZShzdWJzY3JpYmVyOiAoZGF0YTogVCkgPT4gdm9pZCkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuZGVsZXRlKHN1YnNjcmliZXIpO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL1B1YlN1Yic7XG4iLCJpbXBvcnQgeyBQdWJTdWIgfSBmcm9tICcuLi9wdWJTdWInO1xuaW1wb3J0IHsgQ2hpbGRyZW5SZW5kZXJlciB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgQ29udHJvbHNSZW5kZXJlciBpbXBsZW1lbnRzIENoaWxkcmVuUmVuZGVyZXIge1xuICBwcml2YXRlIGNvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGd1ZXNzUHViU3ViID0gbmV3IFB1YlN1YjxzdHJpbmc+KCk7XG4gIHByaXZhdGUgc2hvd0ZpcnN0TGV0dGVyc1B1YlN1YiA9IG5ldyBQdWJTdWI8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBzaG93VGV4dFB1YlN1YiA9IG5ldyBQdWJTdWI8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBpc1RleHRTaG93biA9IGZhbHNlO1xuICBwcml2YXRlIGlzRmlyc3RMZXR0ZXJzU2hvd24gPSBmYWxzZTtcblxuICBwdWJsaWMgcmVhZG9ubHkgZ3Vlc3NFdmVudCA9IHRoaXMuZ3Vlc3NQdWJTdWIuZXZlbnQ7XG4gIHB1YmxpYyByZWFkb25seSBzaG93Rmlyc3RMZXR0ZXJzRXZlbnQgPSB0aGlzLnNob3dGaXJzdExldHRlcnNQdWJTdWIuZXZlbnQ7XG4gIHB1YmxpYyByZWFkb25seSBzaG93VGV4dEV2ZW50ID0gdGhpcy5zaG93VGV4dFB1YlN1Yi5ldmVudDtcblxuICBjb25zdHJ1Y3RvcihhbGxvd1Nob3dpbmdUZXh0OiBib29sZWFuLCBhbGxvd1Nob3dpbmdGaXJzdExldHRlcnM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuaWQgPSAnY29udHJvbHMtY29udGFpbmVyJztcbiAgICB0aGlzLmluaXRFbGVtZW50KGFsbG93U2hvd2luZ1RleHQsIGFsbG93U2hvd2luZ0ZpcnN0TGV0dGVycyk7XG4gIH1cblxuICBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RWxlbWVudChhbGxvd1Nob3dpbmdUZXh0OiBib29sZWFuLCBhbGxvd1Nob3dpbmdGaXJzdExldHRlcnM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPGlucHV0IGlkPVwiZ3Vlc3MtaW5wdXRcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICA8YnV0dG9uIGlkPVwic2hvdy10ZXh0LWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj5TaG93IHRleHQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gaWQ9XCJzaG93LWZpcnN0LWxldHRlcnMtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPlNob3cgZmlyc3QgbGV0dGVyczwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBpZD1cImd1ZXNzLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj5HdWVzczwvYnV0dG9uPlxuICAgIGA7XG5cbiAgICBjb25zdCBzaG93VGV4dEJ1dHRvbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctdGV4dC1idXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdCBzaG93Rmlyc3RMZXR0ZXJzQnV0dG9uRWxlbWVudCA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNzaG93LWZpcnN0LWxldHRlcnMtYnV0dG9uJyxcbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG4gICAgaWYgKCFhbGxvd1Nob3dpbmdUZXh0KSB7XG4gICAgICBzaG93VGV4dEJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cblxuICAgIGlmICghYWxsb3dTaG93aW5nRmlyc3RMZXR0ZXJzKSB7XG4gICAgICBzaG93Rmlyc3RMZXR0ZXJzQnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2hHdWVzc0hhbmRsZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNob3dGaXJzdExldHRlcnNIYW5kbGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaG93VGV4dEhhbmRsZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoR3Vlc3NIYW5kbGVyKCkge1xuICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcignI2d1ZXNzLWJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZ3Vlc3MtaW5wdXQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIGJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB3b3JkID0gaW5wdXRFbGVtZW50LnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAoIXdvcmQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmd1ZXNzUHViU3ViLnB1Ymxpc2god29yZCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaFNob3dUZXh0SGFuZGxlcigpIHtcbiAgICBjb25zdCBzaG93VGV4dEJ1dHRvbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctdGV4dC1idXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdCBzaG93Rmlyc3RMZXR0ZXJzQnV0dG9uRWxlbWVudCA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNzaG93LWZpcnN0LWxldHRlcnMtYnV0dG9uJyxcbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG4gICAgc2hvd1RleHRCdXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pc1RleHRTaG93biA9ICF0aGlzLmlzVGV4dFNob3duO1xuICAgICAgc2hvd1RleHRCdXR0b25FbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuaXNUZXh0U2hvd24gPyAnSGlkZSB0ZXh0JyA6ICdTaG93IHRleHQnO1xuICAgICAgdGhpcy5zaG93VGV4dFB1YlN1Yi5wdWJsaXNoKHRoaXMuaXNUZXh0U2hvd24pO1xuICAgICAgc2hvd0ZpcnN0TGV0dGVyc0J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0aGlzLmlzVGV4dFNob3duO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hTaG93Rmlyc3RMZXR0ZXJzSGFuZGxlcigpIHtcbiAgICBjb25zdCBzaG93VGV4dEJ1dHRvbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctdGV4dC1idXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdCBzaG93Rmlyc3RMZXR0ZXJzQnV0dG9uRWxlbWVudCA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNzaG93LWZpcnN0LWxldHRlcnMtYnV0dG9uJyxcbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG4gICAgc2hvd0ZpcnN0TGV0dGVyc0J1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1RleHRTaG93bikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNGaXJzdExldHRlcnNTaG93biA9ICF0aGlzLmlzRmlyc3RMZXR0ZXJzU2hvd247XG4gICAgICBzaG93Rmlyc3RMZXR0ZXJzQnV0dG9uRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmlzRmlyc3RMZXR0ZXJzU2hvd25cbiAgICAgICAgPyAnSGlkZSBmaXJzdCBsZXR0ZXJzIHRleHQnXG4gICAgICAgIDogJ1Nob3cgZmlyc3QgbGV0dGVycyB0ZXh0JztcbiAgICAgIHRoaXMuc2hvd0ZpcnN0TGV0dGVyc1B1YlN1Yi5wdWJsaXNoKHRoaXMuaXNGaXJzdExldHRlcnNTaG93bik7XG4gICAgICBzaG93VGV4dEJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0aGlzLmlzRmlyc3RMZXR0ZXJzU2hvd247XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IExleGVtZSwgTGV4ZW1lQW5hbHlzaXMgfSBmcm9tICcuLi9sZXhlbWVCdWlsZGVyJztcbmltcG9ydCB7IENvbnRyb2xzUmVuZGVyZXIgfSBmcm9tICcuL0NvbnRyb2xzUmVuZGVyZXInO1xuaW1wb3J0IHsgU2NvcmVSZW5kZXJlciB9IGZyb20gJy4vU2NvcmVSZW5kZXJlcic7XG5pbXBvcnQgeyBUZXh0UmVuZGVyZXIgfSBmcm9tICcuL3RleHRSZW5kZXJlcic7XG5pbXBvcnQgeyBVdGlsc1JlbmRlcmVyIH0gZnJvbSAnLi9VdGlsc1JlbmRlcmVyJztcblxuZXhwb3J0IGNsYXNzIFJlbmRlck1hbmFnZXIge1xuICBwcml2YXRlIGd1ZXNzaXJDb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gIHByaXZhdGUgdGV4dFJlbmRlcmVyOiBUZXh0UmVuZGVyZXI7XG4gIHByaXZhdGUgY29udHJvbHNSZW5kZXJlcjogQ29udHJvbHNSZW5kZXJlcjtcbiAgcHJpdmF0ZSBzY29yZVJlbmRlcmVyOiBTY29yZVJlbmRlcmVyO1xuICBwcml2YXRlIHV0aWxzUmVuZGVyZXI6IFV0aWxzUmVuZGVyZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbGV4ZW1lc0FuYWx5c2lzOiBMZXhlbWVBbmFseXNpcyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGFsbG93U2hvd2luZ1RleHQ6IGJvb2xlYW4sXG4gICAgYWxsb3dTaG93aW5nRmlyc3RMZXR0ZXJzOiBib29sZWFuLFxuICApIHtcbiAgICB0aGlzLmd1ZXNzaXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmd1ZXNzaXJDb250YWluZXIuaWQgPSAnZ3Vlc3Npcic7XG4gICAgdGhpcy50ZXh0UmVuZGVyZXIgPSBuZXcgVGV4dFJlbmRlcmVyKGxleGVtZXNBbmFseXNpcywgdGl0bGUpO1xuICAgIHRoaXMuY29udHJvbHNSZW5kZXJlciA9IG5ldyBDb250cm9sc1JlbmRlcmVyKGFsbG93U2hvd2luZ1RleHQsIGFsbG93U2hvd2luZ0ZpcnN0TGV0dGVycyk7XG4gICAgdGhpcy5zY29yZVJlbmRlcmVyID0gbmV3IFNjb3JlUmVuZGVyZXIobGV4ZW1lc0FuYWx5c2lzLndvcmRMaWtlQ291bnQpO1xuICAgIHRoaXMudXRpbHNSZW5kZXJlciA9IG5ldyBVdGlsc1JlbmRlcmVyKCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdChjb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5ndWVzc2lyQ29udGFpbmVyKTtcblxuICAgIHRoaXMudGV4dFJlbmRlcmVyLnVzZXJXb3JkU2hvd0V2ZW50LnN1YnNjcmliZSgobGV4ZW1lKSA9PiB0aGlzLmhhbmRsZVVzZXJXb3JkU2hvdyhsZXhlbWUpKTtcblxuICAgIHRoaXMuY29udHJvbHNSZW5kZXJlci5ndWVzc0V2ZW50LnN1YnNjcmliZSgod29yZCkgPT4gdGhpcy5oYW5kbGVHdWVzcyh3b3JkKSk7XG4gICAgdGhpcy5jb250cm9sc1JlbmRlcmVyLnNob3dUZXh0RXZlbnQuc3Vic2NyaWJlKChpc1RleHRTaG93bikgPT4gdGhpcy5oYW5kbGVTaG93VGV4dChpc1RleHRTaG93bikpO1xuICAgIHRoaXMuY29udHJvbHNSZW5kZXJlci5zaG93Rmlyc3RMZXR0ZXJzRXZlbnQuc3Vic2NyaWJlKChpc0ZpcnN0TGV0dGVyc1Nob3duKSA9PlxuICAgICAgdGhpcy5oYW5kbGVTaG93Rmlyc3RMZXR0ZXJzKGlzRmlyc3RMZXR0ZXJzU2hvd24pLFxuICAgICk7XG5cbiAgICB0aGlzLmd1ZXNzaXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50ZXh0UmVuZGVyZXIuZ2V0RWxlbWVudCgpKTtcbiAgICB0aGlzLmd1ZXNzaXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sc1JlbmRlcmVyLmdldEVsZW1lbnQoKSk7XG4gICAgdGhpcy5ndWVzc2lyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc2NvcmVSZW5kZXJlci5nZXRFbGVtZW50KCkpO1xuICAgIHRoaXMuZ3Vlc3NpckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnV0aWxzUmVuZGVyZXIuZ2V0RWxlbWVudCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVXNlcldvcmRTaG93KF9sZXhlbWU6IExleGVtZSkge1xuICAgIHRoaXMuc2NvcmVSZW5kZXJlci5hZGRTY29yZSgtMSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUd1ZXNzKHdvcmQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNob3duQ291bnQgPSB0aGlzLnRleHRSZW5kZXJlci5zaG93TGV4ZW1lc0J5V29yZCh3b3JkKTtcblxuICAgIHRoaXMuc2NvcmVSZW5kZXJlci5hZGRTY29yZShzaG93bkNvdW50KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2hvd1RleHQoaXNUZXh0U2hvd246IGJvb2xlYW4pIHtcbiAgICB0aGlzLnRleHRSZW5kZXJlci50b2dnbGVUZXh0KGlzVGV4dFNob3duKTtcblxuICAgIGlmIChpc1RleHRTaG93bikge1xuICAgICAgdGhpcy5zY29yZVJlbmRlcmVyLmFkZFNjb3JlKC03KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNob3dGaXJzdExldHRlcnMoaXNGaXJzdExldHRlcnNTaG93bjogYm9vbGVhbikge1xuICAgIHRoaXMudGV4dFJlbmRlcmVyLnRvZ2dsZUZpcnN0TGV0dGVycyhpc0ZpcnN0TGV0dGVyc1Nob3duKTtcblxuICAgIGlmIChpc0ZpcnN0TGV0dGVyc1Nob3duKSB7XG4gICAgICB0aGlzLnNjb3JlUmVuZGVyZXIuYWRkU2NvcmUoLTIpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2hpbGRyZW5SZW5kZXJlciB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgU2NvcmVSZW5kZXJlciBpbXBsZW1lbnRzIENoaWxkcmVuUmVuZGVyZXIge1xuICBwcml2YXRlIHdvcmRMaWtlQ291bnQgPSAwO1xuICBwcml2YXRlIHNjb3JlID0gMDtcbiAgcHJpdmF0ZSBjb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcih3b3JkTGlrZUNvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLndvcmRMaWtlQ291bnQgPSB3b3JkTGlrZUNvdW50O1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5pZCA9ICdzY29yZS1jb250YWluZXInO1xuXG4gICAgdGhpcy5pbml0RWxlbWVudCgpO1xuICB9XG5cbiAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lckVsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgYWRkU2NvcmUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuc2NvcmUgKz0gdmFsdWU7XG5cbiAgICBjb25zdCBjdXJyZW50U2NvcmVFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXNjb3JlJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBjdXJyZW50U2NvcmVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEVsZW1lbnQoKSB7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIFNjb3JlOiZuYnNwO1xuICAgICAgPGRpdiBpZD1cImN1cnJlbnQtc2NvcmVcIj4ke3RoaXMuc2NvcmV9PC9kaXY+XG4gICAgICAvXG4gICAgICA8ZGl2IGlkPVwidG90YWwtc2NvcmVcIj4ke3RoaXMud29yZExpa2VDb3VudH08L2Rpdj5cbiAgICBgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZVRleHRVcmwgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBDaGlsZHJlblJlbmRlcmVyIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBVdGlsc1JlbmRlcmVyIGltcGxlbWVudHMgQ2hpbGRyZW5SZW5kZXJlciB7XG4gIHByaXZhdGUgY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgYU5vdGVwYWRVcmwgPSAnJztcbiAgcHJpdmF0ZSBnZW5lcmF0ZWRVcmwgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuaWQgPSAndXRpbHMtY29udGFpbmVyJztcblxuICAgIHRoaXMuaW5pdEVsZW1lbnQoKTtcbiAgfVxuXG4gIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lckVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGluaXRFbGVtZW50KCkge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGV0YWlscz5cbiAgICAgICAgPHN1bW1hcnk+SG93IHRvIGNyZWF0ZSBhIG5ldyB0ZXh0PC9zdW1tYXJ5PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQ3JlYXRlIHlvdXIgdGV4dCBvblxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYW5vdGVwYWQuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+YU5vdGVwYWQ8L2E+XG4gICAgICAgICAgICAoaXQgbXVzdCBiZSBhIHBsYWluIHRleHQgbm90ZSlcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgUGFzdGUgeW91ciBhTm90ZXBhZCBub3RlIFVSTCB0byA8aW5wdXQgaWQ9XCJhLW5vdGVwYWQtdXJsXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgQ29uZmlndXJlOlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjaGVja2VkIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYWxsb3ctc2hvd2luZy1maXJzdC1sZXR0ZXJzXCI+QWxsb3cgc2hvd2luZyBmaXJzdCBsZXR0ZXJzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNoZWNrZWQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJhbGxvdy1zaG93aW5nLXRleHRcIj5BbGxvdyBzaG93aW5nIHRleHRcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgQ2xpY2sgPGJ1dHRvbiBkaXNhYmxlZCBpZD1cImdlbmVyYXRlLXVybFwiIHR5cGU9XCJidXR0b25cIj50aGlzIGJ1dHRvbjwvYnV0dG9uPiB0byBnZXQgeW91ciBsaW5rIVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGlkPVwiZ2VuZXJhdGVkLXVybC1jb250YWluZXJcIiBjbGFzcz1cImhpZGVcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJnZW5lcmF0ZWQtdXJsXCI+PC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY29weS1nZW5lcmF0ZWQtdXJsXCI+Q29weTwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2RldGFpbHM+XG4gICAgYDtcblxuICAgIHRoaXMuYXR0YWNoSW5wdXRIYW5kbGVycygpO1xuICAgIHRoaXMuYXR0YWNoR2VuZXJhdGVVcmxIYW5kbGVyKCk7XG4gICAgdGhpcy5hdHRhY2hDb3B5R2VuZXJhdGVkVXJsSGFuZGxlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hJbnB1dEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IGFsbG93U2hvd2luZ0ZpcnN0TGV0dGVyc0lucHV0RWxlbWVudCA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNhbGxvdy1zaG93aW5nLWZpcnN0LWxldHRlcnMnLFxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBhbGxvd1Nob3dpbmdUZXh0SW5wdXRFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGxvdy1zaG93aW5nLXRleHQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGFOb3RlcGFkVXJsSW5wdXRFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhLW5vdGVwYWQtdXJsJykgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIFthbGxvd1Nob3dpbmdGaXJzdExldHRlcnNJbnB1dEVsZW1lbnQsIGFsbG93U2hvd2luZ1RleHRJbnB1dEVsZW1lbnRdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0c0NoYW5nZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBhTm90ZXBhZFVybElucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlSW5wdXRzQ2hhbmdlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUlucHV0c0NoYW5nZSgpIHtcbiAgICBjb25zdCBhTm90ZXBhZFVybElucHV0RWxlbWVudCA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYS1ub3RlcGFkLXVybCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZ2VuZXJhdGVVcmxCdXR0b25FbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW5lcmF0ZS11cmwnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdCBnZW5lcmF0ZWRVcmxDb250YWluZXJFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI2dlbmVyYXRlZC11cmwtY29udGFpbmVyJyxcbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGNvbnN0IGNvcHlHZW5lcmF0ZWRVcmxCdXR0b25FbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI2NvcHktZ2VuZXJhdGVkLXVybCcsXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdCB1cmwgPSBhTm90ZXBhZFVybElucHV0RWxlbWVudC52YWx1ZS50cmltKCk7XG5cbiAgICB0aGlzLmFOb3RlcGFkVXJsID0gJyc7XG5cbiAgICBnZW5lcmF0ZWRVcmxDb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBjb3B5R2VuZXJhdGVkVXJsQnV0dG9uRWxlbWVudC5pbm5lclRleHQgPSAnQ29weSc7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpO1xuXG4gICAgICBpZiAocGFyc2VkVXJsLmhvc3RuYW1lID09PSAnYW5vdGVwYWQuY29tJykge1xuICAgICAgICB0aGlzLmFOb3RlcGFkVXJsID0gcGFyc2VkVXJsLmhyZWY7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgICBpZiAodXJsICYmICF0aGlzLmFOb3RlcGFkVXJsKSB7XG4gICAgICBhTm90ZXBhZFVybElucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFOb3RlcGFkVXJsSW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVVybEJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSAhdGhpcy5hTm90ZXBhZFVybDtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoR2VuZXJhdGVVcmxIYW5kbGVyKCkge1xuICAgIGNvbnN0IGdlbmVyYXRlVXJsQnV0dG9uRWxlbWVudCA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VuZXJhdGUtdXJsJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY29uc3QgYWxsb3dTaG93aW5nRmlyc3RMZXR0ZXJzSW5wdXRFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI2FsbG93LXNob3dpbmctZmlyc3QtbGV0dGVycycsXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGdlbmVyYXRlZFVybENvbnRhaW5lckVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjZ2VuZXJhdGVkLXVybC1jb250YWluZXInLFxuICAgICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY29uc3QgZ2VuZXJhdGVkVXJsRWxlbWVudCA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VuZXJhdGVkLXVybCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGFsbG93U2hvd2luZ1RleHRJbnB1dEVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcignI2FsbG93LXNob3dpbmctdGV4dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBnZW5lcmF0ZVVybEJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBhbGxvd1Nob3dpbmdGaXJzdExldHRlcnMgPSBhbGxvd1Nob3dpbmdGaXJzdExldHRlcnNJbnB1dEVsZW1lbnQuY2hlY2tlZDtcbiAgICAgIGNvbnN0IGFsbG93U2hvd2luZ1RleHQgPSBhbGxvd1Nob3dpbmdUZXh0SW5wdXRFbGVtZW50LmNoZWNrZWQ7XG5cbiAgICAgIHRoaXMuZ2VuZXJhdGVkVXJsID0gZ2VuZXJhdGVUZXh0VXJsKHtcbiAgICAgICAgYWxsb3dTaG93aW5nRmlyc3RMZXR0ZXJzLFxuICAgICAgICBhbGxvd1Nob3dpbmdUZXh0LFxuICAgICAgICByZW1vdGVUZXh0VXJsOiB0aGlzLmFOb3RlcGFkVXJsLFxuICAgICAgfSk7XG5cbiAgICAgIGdlbmVyYXRlZFVybENvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgZ2VuZXJhdGVkVXJsRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmdlbmVyYXRlZFVybDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ29weUdlbmVyYXRlZFVybEhhbmRsZXIoKSB7XG4gICAgY29uc3QgY29weUdlbmVyYXRlZFVybEJ1dHRvbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjY29weS1nZW5lcmF0ZWQtdXJsJyxcbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGxldCBjaGFuZ2VUZXh0VGltZW91dElkOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IHVuZGVmaW5lZDtcblxuICAgIGNvcHlHZW5lcmF0ZWRVcmxCdXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGhpcy5nZW5lcmF0ZWRVcmwpO1xuICAgICAgY29weUdlbmVyYXRlZFVybEJ1dHRvbkVsZW1lbnQuaW5uZXJUZXh0ID0gJ0NvcGllZCEnO1xuXG4gICAgICBpZiAoY2hhbmdlVGV4dFRpbWVvdXRJZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoY2hhbmdlVGV4dFRpbWVvdXRJZCk7XG4gICAgICB9XG5cbiAgICAgIGNoYW5nZVRleHRUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29weUdlbmVyYXRlZFVybEJ1dHRvbkVsZW1lbnQuaW5uZXJUZXh0ID0gJ0NvcHknO1xuICAgICAgfSwgNTAwMDApO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL1JlbmRlck1hbmFnZXInO1xuIiwiaW1wb3J0IHsgTGV4ZW1lLCBMZXhlbWVBbmFseXNpcywgTGV4ZW1lVHlwZSB9IGZyb20gJy4uLy4uL2xleGVtZUJ1aWxkZXInO1xuaW1wb3J0IHsgUHViU3ViIH0gZnJvbSAnLi4vLi4vcHViU3ViJztcbmltcG9ydCB7IENoaWxkcmVuUmVuZGVyZXIgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBXb3JkUmVuZGVyZXIgfSBmcm9tICcuL1dvcmRSZW5kZXJlcic7XG5cbmV4cG9ydCBjbGFzcyBUZXh0UmVuZGVyZXIgaW1wbGVtZW50cyBDaGlsZHJlblJlbmRlcmVyIHtcbiAgcHJpdmF0ZSBjb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBsZXhlbWVzQW5hbHlzaXM6IExleGVtZUFuYWx5c2lzO1xuICBwcml2YXRlIHRpdGxlID0gJyc7XG4gIHByaXZhdGUgdXNlcldvcmRTaG93UHViU3ViID0gbmV3IFB1YlN1YjxMZXhlbWU+KCk7XG4gIHByaXZhdGUgd29yZFJlbmRlcmVycyA9IG5ldyBNYXA8XG4gICAgLy8gTGV4ZW1lIGluZGV4XG4gICAgbnVtYmVyLFxuICAgIFdvcmRSZW5kZXJlclxuICA+KCk7XG5cbiAgcHVibGljIHVzZXJXb3JkU2hvd0V2ZW50ID0gdGhpcy51c2VyV29yZFNob3dQdWJTdWIuZXZlbnQ7XG5cbiAgY29uc3RydWN0b3IobGV4ZW1lc0FuYWx5c2lzOiBMZXhlbWVBbmFseXNpcywgdGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMubGV4ZW1lc0FuYWx5c2lzID0gbGV4ZW1lc0FuYWx5c2lzO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuaWQgPSAndGV4dC1jb250YWluZXInO1xuXG4gICAgdGhpcy5pbml0RWxlbWVudCgpO1xuICB9XG5cbiAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lckVsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgc2hvd0xleGVtZXNCeVdvcmQod29yZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBsZXhlbWVzID0gdGhpcy5sZXhlbWVzQW5hbHlzaXMubGV4ZW1lc0J5V29yZExpa2UuZ2V0KHdvcmQpO1xuICAgIGxldCBzaG93bkNvdW50ID0gMDtcblxuICAgIGlmICghbGV4ZW1lcykge1xuICAgICAgcmV0dXJuIHNob3duQ291bnQ7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBbaW5kZXhdIG9mIGxleGVtZXMpIHtcbiAgICAgIGNvbnN0IHdvcmRSZW5kZXJlciA9IHRoaXMud29yZFJlbmRlcmVycy5nZXQoaW5kZXgpO1xuXG4gICAgICBpZiAoIXdvcmRSZW5kZXJlcikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNTaG93bkJlZm9yZSA9IHdvcmRSZW5kZXJlci5pc1Nob3duO1xuXG4gICAgICB3b3JkUmVuZGVyZXIuc2hvdygpO1xuXG4gICAgICBpZiAoIWlzU2hvd25CZWZvcmUpIHtcbiAgICAgICAgc2hvd25Db3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaG93bkNvdW50O1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVRleHQoaXNTaG93bjogYm9vbGVhbikge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LXRleHQnLCAnc2hvdy1maXJzdC1sZXR0ZXJzJyk7XG5cbiAgICBpZiAoaXNTaG93bikge1xuICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3ctdGV4dCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy10ZXh0Jyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZUZpcnN0TGV0dGVycyhpc1Nob3duOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctdGV4dCcsICdzaG93LWZpcnN0LWxldHRlcnMnKTtcblxuICAgIGlmIChpc1Nob3duKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdy1maXJzdC1sZXR0ZXJzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LWZpcnN0LWxldHRlcnMnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRFbGVtZW50KCkge1xuICAgIGlmICh0aGlzLnRpdGxlKSB7XG4gICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgdGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMudGl0bGU7XG4gICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgbGV4ZW1lXSBvZiB0aGlzLmxleGVtZXNBbmFseXNpcy5sZXhlbWVzKSB7XG4gICAgICBpZiAobGV4ZW1lLnR5cGUgPT09IExleGVtZVR5cGUuU3BlY2lhbENoYXJhY3Rlcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKHRoaXMud3JhcFNwZWNpYWxDaGFyYWN0ZXIobGV4ZW1lKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB3b3JkUmVuZGVyZXIgPSBuZXcgV29yZFJlbmRlcmVyKGxleGVtZSk7XG5cbiAgICAgICAgd29yZFJlbmRlcmVyLnVzZXJXb3JkU2hvd0V2ZW50LnN1YnNjcmliZSgobGV4ZW1lKSA9PiB0aGlzLmhhbmRsZVVzZXJXb3JkU2hvdyhsZXhlbWUpKTtcbiAgICAgICAgdGhpcy53b3JkUmVuZGVyZXJzLnNldChpbmRleCwgd29yZFJlbmRlcmVyKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHdvcmRSZW5kZXJlci5nZXRFbGVtZW50KCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgd3JhcFNwZWNpYWxDaGFyYWN0ZXIobGV4ZW1lOiBMZXhlbWUpOiBIVE1MRWxlbWVudCB8IHN0cmluZyB7XG4gICAgaWYgKGxleGVtZS5ub3JtYWxpemVkID09PSAnXFxuJykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxleGVtZS5ub3JtYWxpemVkO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVVc2VyV29yZFNob3cobGV4ZW1lOiBMZXhlbWUpIHtcbiAgICB0aGlzLnVzZXJXb3JkU2hvd1B1YlN1Yi5wdWJsaXNoKGxleGVtZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IExleGVtZSB9IGZyb20gJy4uLy4uL2xleGVtZUJ1aWxkZXInO1xuaW1wb3J0IHsgUHViU3ViIH0gZnJvbSAnLi4vLi4vcHViU3ViJztcbmltcG9ydCB7IENoaWxkcmVuUmVuZGVyZXIgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBXb3JkUmVuZGVyZXIgaW1wbGVtZW50cyBDaGlsZHJlblJlbmRlcmVyIHtcbiAgcHJpdmF0ZSBsZXhlbWU6IExleGVtZTtcbiAgcHJpdmF0ZSBjb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSB1c2VyV29yZFNob3dQdWJTdWIgPSBuZXcgUHViU3ViPExleGVtZT4oKTtcblxuICBwdWJsaWMgaXNTaG93biA9IGZhbHNlO1xuICBwdWJsaWMgcmVhZG9ubHkgdXNlcldvcmRTaG93RXZlbnQgPSB0aGlzLnVzZXJXb3JkU2hvd1B1YlN1Yi5ldmVudDtcblxuICBjb25zdHJ1Y3RvcihsZXhlbWU6IExleGVtZSkge1xuICAgIHRoaXMubGV4ZW1lID0gbGV4ZW1lO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGV4ZW1lLWNvbnRhaW5lcicpO1xuXG4gICAgdGhpcy5pbml0RWxlbWVudCgpO1xuICB9XG5cbiAgcHVibGljIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyRWxlbWVudDtcbiAgfVxuXG4gIHB1YmxpYyBzaG93KCkge1xuICAgIHRoaXMuaXNTaG93biA9IHRydWU7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH1cblxuICBwcml2YXRlIGluaXRFbGVtZW50KCkge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImxleGVtZVwiPiR7dGhpcy5sZXhlbWUubm9ybWFsaXplZH08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImxleGVtZS1maXJzdC1sZXR0ZXJcIj4ke3RoaXMubGV4ZW1lLm5vcm1hbGl6ZWRbMF19PC9zcGFuPlxuICAgIGA7XG5cbiAgICB0aGlzLmF0dGFjaENsaWNrSGFuZGxlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDbGlja0hhbmRsZXIoKSB7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzU2hvd24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNob3coKTtcbiAgICAgIHRoaXMudXNlcldvcmRTaG93UHViU3ViLnB1Ymxpc2godGhpcy5sZXhlbWUpO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL1RleHRSZW5kZXJlcic7XG4iLCJpbnRlcmZhY2UgUmVtb3RlVGV4dFBhcmFtZXRlcnMge1xuICBhbGxvd1Nob3dpbmdGaXJzdExldHRlcnM6IGJvb2xlYW47XG4gIGFsbG93U2hvd2luZ1RleHQ6IGJvb2xlYW47XG4gIHJlbW90ZVRleHRVcmw6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNpbXBsaWZpZWRSZW1vdGVUZXh0UGFyYW1ldGVycyB7XG4gIHNmbDogMSB8IDA7XG4gIHN0OiAxIHwgMDtcbiAgclVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXh0VXJsKHsgYWxsb3dTaG93aW5nRmlyc3RMZXR0ZXJzLCBhbGxvd1Nob3dpbmdUZXh0LCByZW1vdGVUZXh0VXJsIH06IFJlbW90ZVRleHRQYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IGRhdGE6IFNpbXBsaWZpZWRSZW1vdGVUZXh0UGFyYW1ldGVycyA9IHtcbiAgICBzZmw6IGFsbG93U2hvd2luZ0ZpcnN0TGV0dGVycyA/IDEgOiAwLFxuICAgIHN0OiBhbGxvd1Nob3dpbmdUZXh0ID8gMSA6IDAsXG4gICAgclVybDogcmVtb3RlVGV4dFVybCxcbiAgfTtcbiAgY29uc3QgYmFzZTY0RGF0YSA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICBjb25zdCB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufT90ZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGJhc2U2NERhdGEpfWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1JlbW90ZVRleHRQYXJhbWV0ZXJzSW5VcmwoKSB7XG4gIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIHJldHVybiAhIXVybFBhcmFtcy5nZXQoJ3RleHQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVtb3RlVGV4dFBhcmFtZXRlcnNGcm9tVXJsKCk6IFJlbW90ZVRleHRQYXJhbWV0ZXJzIHtcbiAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgY29uc3QgZW5jb2RlZFBhcmFtZXRlcnMgPSB1cmxQYXJhbXMuZ2V0KCd0ZXh0Jyk7XG5cbiAgaWYgKCFlbmNvZGVkUGFyYW1ldGVycykge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBwYXJhbWV0ZXJzIGluIFVSTCcpO1xuICB9XG5cbiAgY29uc3QgcGFyYW1ldGVycyA9IEpTT04ucGFyc2UoYXRvYihkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFBhcmFtZXRlcnMpKSkgYXMgU2ltcGxpZmllZFJlbW90ZVRleHRQYXJhbWV0ZXJzO1xuXG4gIHJldHVybiB7XG4gICAgYWxsb3dTaG93aW5nRmlyc3RMZXR0ZXJzOiBCb29sZWFuKHBhcmFtZXRlcnMuc2ZsKSxcbiAgICBhbGxvd1Nob3dpbmdUZXh0OiBCb29sZWFuKHBhcmFtZXRlcnMuc3QpLFxuICAgIHJlbW90ZVRleHRVcmw6IHBhcmFtZXRlcnMuclVybCxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRSZW1vdGVUZXh0KHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXG4gIGhlYWRlcnMuYXBwZW5kKCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlJyk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAvLyBBIGJpZyB0aGFuayB5b3UgdG8gaHR0cHM6Ly9naXRodWIuY29tL0ZyZWVib2FyZC90aGluZ3Byb3h5LlxuICAgIC8vIFRoaXMgaXMgYSBqdXN0IHRvIGZ1biBwcm9qZWN0IHRoYXQgaXMgbm90IGdvaW5nIHRvIGJlIHVzZWQgaW50ZW5zaXZlbHksIHNvXG4gICAgLy8gdGhlIEFQSSBzaG91bGQgbm90IGJlIGFidXNlZC5cbiAgICBgaHR0cHM6Ly90aGluZ3Byb3h5LmZyZWVib2FyZC5pby9mZXRjaC8ke3VybH1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzLFxuICAgICAgbW9kZTogJ25vLWNvcnMnLFxuICAgIH0sXG4gICk7XG5cbiAgLy8gaWYgKCFyZXNwb25zZS5vaykge1xuICAvLyAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZldGNoIHJlbW90ZSB0ZXh0Jyk7XG4gIC8vIH1cblxuICBjb25zdCBkYXRhQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGRhdGFCbG9iLnRleHQoKTtcbiAgY29uc3QgbWF0Y2hlZFRleHQgPSAvPGRpdiBjbGFzcz1cInBsYWludGV4dFxccz9cIj4oKC58XFxuKSopPFxcL2Rpdj4vZ2ltLmV4ZWMoZGF0YSk7XG4gIGNvbnN0IG1hdGNoZWRUaXRsZSA9IC88dGl0bGU+KCgufFxcbikqKTxcXC90aXRsZT4vZ2ltLmV4ZWMoZGF0YSk7XG4gIGNvbnN0IHRleHQgPSBtYXRjaGVkVGV4dD8uWzFdIHx8ICcnO1xuICAvLyBIYXMgZm9ybWF0IGBPbmxpbmUgTm90ZXBhZCAtICN0aXRsZSNgXG4gIGNvbnN0IHJhd1RpdGxlID0gbWF0Y2hlZFRpdGxlPy5bMV0gfHwgJyc7XG4gIGNvbnN0IHRpdGxlRGFzaFBvc2l0aW9uID0gcmF3VGl0bGUuaW5kZXhPZignLScpO1xuICBjb25zdCB0aXRsZSA9IHJhd1RpdGxlLnNsaWNlKFxuICAgIHRpdGxlRGFzaFBvc2l0aW9uICtcbiAgICAgIC8vICsxIChiZWNhdXNlIGluZGV4IHN0YXJ0cyBmcm9tIDApLCArMSAoYmVjYXVzZSBvZiB0aGUgc3BhY2UgYmVmb3JlIHRpdGxlLCBjaGVjayB0aGUgZm9ybWF0IGFib3ZlKVxuICAgICAgMixcbiAgKTtcbiAgY29uc3QgZG9jdW1lbnQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHRleHQsICd0ZXh0L2h0bWwnKTtcbiAgLy8gVW5lc2NhcGUgYCZuYnNwOywgJiMzOTtgLCBldGMuXG4gIGNvbnN0IHVuZXNjYXBlZFRleHQgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnRleHRDb250ZW50IHx8ICcnKS50cmltKCk7XG5cbiAgaWYgKCF1bmVzY2FwZWRUZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJzZWQgdGV4dCBpcyBlbXB0eScpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0ZXh0OiB1bmVzY2FwZWRUZXh0LFxuICAgIHRpdGxlLFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9