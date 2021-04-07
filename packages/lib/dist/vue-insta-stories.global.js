(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue-demi'), require('animejs')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue-demi', 'animejs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VueInstaStory = {}, global.VueDemi, global.anime));
}(this, (function (exports, vueDemi, anime) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var anime__default = /*#__PURE__*/_interopDefaultLegacy(anime);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    var Image = vueDemi.defineComponent({
        props: {
            story: {
                type: Object,
                required: true
            }
        },
        render: function () {
            var _this = this;
            var style = {
                width: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
                margin: "auto"
            };
            var imageLoaded = function () {
                _this.$emit('play', _this.story.url);
            };
            return vueDemi.h('img', { src: this.story.url, style: style, onLoad: imageLoaded });
        }
    });

    var Video = vueDemi.defineComponent({
        props: {
            story: {
                type: Object,
                required: true
            },
            isPaused: {
                type: Boolean,
                required: true
            }
        },
        watch: {
            isPaused: function (val) {
                if (val)
                    this.vid.pause();
                else
                    this.vid.play();
            }
        },
        data: function () { return ({
            muted: false
        }); },
        computed: {
            vid: function () {
                return this.$refs.vid;
            }
        },
        render: function () {
            var _this = this;
            var style = {
                width: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
                margin: "auto"
            };
            var videoAttrs = {
                controls: true,
                autoPlay: true,
                playsInline: true,
                muted: this.muted,
                'webkit-playsinline': true
            };
            var onLoadeddata = function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(this.vid.duration);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, this.vid.play()];
                        case 2:
                            _a.sent();
                            return [3, 4];
                        case 3:
                            _a.sent();
                            this.muted = true;
                            this.$nextTick(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.vid.play()];
                                    case 1: return [2, _a.sent()];
                                }
                            }); }); });
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            }); };
            return vueDemi.h('video', __assign(__assign({ src: this.story.url, ref: "vid" }, videoAttrs), { style: style, onLoadeddata: onLoadeddata }));
        }
    });

    var getRender = function (type) {
        switch (type) {
            case 'image':
                return Image;
            case 'video':
                return Video;
            default:
                throw new Error("Did not find a render for type " + type);
        }
    };
    var render = function (_a) {
        var story = _a.story, onPlay = _a.onPlay, isPaused = _a.isPaused;
        return vueDemi.h(getRender(story.type), { story: story, onPlay: onPlay, isPaused: isPaused });
    };

    var fadeOut = function (el) {
        el.animate([
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration: 200,
            fill: 'forwards',
        });
    };
    var fadeIn = function (el) {
        el.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 200,
            fill: 'forwards',
        });
    };

    var getX = function (e) {
        var _a;
        if (e instanceof MouseEvent)
            return e.clientX;
        var touch = (_a = e.touches[0]) !== null && _a !== void 0 ? _a : e.changedTouches[0];
        return touch.clientX;
    };

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = ".stories {\n  float: left;\n  position: relative;\n  height: 100vh;\n  width: 100vw;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  background: #111;\n}\n.header {\n  position: absolute;\n  z-index: 10;\n  top: 22px;\n  left: 16px;\n}\n\n.timeline {\n  position: absolute;\n  display: flex;\n  flex-grow: 0;\n  width: 100%;\n  background: -webkit-gradient(\n    linear,\n    top,\n    bottom,\n    from(rgba(0, 0, 0, 0.2)),\n    to(rgba(0, 0, 0, 0))\n  );\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));\n  padding-bottom: 8px; /* To add more space for gradient */\n  z-index: 10;\n}\n\n.timeline > .slice {\n  background: rgba(255, 255, 255, 0.5);\n  height: 2px;\n  border-radius: 2px;\n  margin: 6px 3px;\n  width: 100%;\n}\n\n.timeline > .slice > .progress {\n  background: #fff;\n  height: 2px;\n  border-radius: 2px;\n  width: 0%;\n}";
    styleInject(css_248z);

    var Stories = vueDemi.defineComponent({
        name: "Stories",
        props: {
            stories: {
                type: Array,
                required: true
            },
            interval: {
                type: Number,
                default: 2000,
            },
            currentIndex: {
                type: Number,
                default: 0,
            },
        },
        watch: {
            currentIndex: {
                handler: function (val) {
                    console.log("watch", val);
                    this.index = val;
                    this.resetSlide();
                },
            },
            paused: {
                handler: function (val) {
                    if (val)
                        this.pause();
                    else
                        this.play();
                }
            }
        },
        data: function () {
            var timeline = anime__default['default'].timeline({
                autoplay: false,
                duration: this.interval,
                easing: "linear",
            });
            return {
                index: this.currentIndex,
                timeline: timeline,
                paused: false,
            };
        },
        computed: {
            items: function () {
                return this.stories.map(function (i) {
                    if (typeof i == 'string')
                        return { url: i, type: 'image' };
                    else
                        return i;
                });
            },
        },
        methods: {
            resetSlide: function () {
                this.timeline.pause();
                this.timeline.seek(this.index * this.interval);
            },
            nextSlide: function () {
                if (this.index < this.stories.length - 1) {
                    this.index++;
                    this.resetSlide();
                }
            },
            previousSlide: function () {
                if (this.index > 0) {
                    this.index--;
                    this.resetSlide();
                }
            },
            togglePause: function () {
                this.paused = !this.paused;
            },
            pause: function () {
                this.timeline.pause();
                fadeOut(this.$refs.timeline);
                fadeOut(this.$refs.header);
            },
            play: function () {
                this.timeline.play();
                fadeIn(this.$refs.timeline);
                fadeIn(this.$refs.header);
            }
        },
        mounted: function () {
            var _this = this;
            var $timeline = this.$el.getElementsByClassName("timeline")[0];
            this.items.forEach(function (story, index) {
                var slices = $timeline.getElementsByClassName("slice");
                _this.timeline.add({
                    targets: slices[index].getElementsByClassName("progress"),
                    duration: story.duration,
                    width: "100%",
                    changeBegin: function () {
                        _this.index = index;
                        _this.$emit("onStoryStart", index);
                        _this.$emit("update:currentIndex", index);
                    },
                    changeComplete: function () {
                        _this.$emit("onStoryEnd", index);
                    },
                    complete: function () {
                        if (index === _this.stories.length - 1) {
                            _this.$emit("onAllStoriesEnd");
                        }
                    },
                });
            });
        },
        render: function () {
            var _this = this;
            var slices = this.items.map(function (_, key) { return vueDemi.h('div', { class: 'slice', key: key }, vueDemi.h('div', { class: 'progress' })); });
            var story = this.items[this.index];
            var onPlay = function (who) {
                _this.timeline.play();
            };
            var mouseDown = function (e) {
                e.preventDefault();
                _this.togglePause();
            };
            var mouseUp = function (e) {
                e.preventDefault();
                if (_this.paused)
                    _this.paused = false;
                else {
                    var x = getX(e);
                    var t = window.innerWidth / 3;
                    if (x > t) {
                        _this.nextSlide();
                    }
                    else {
                        _this.previousSlide();
                    }
                }
            };
            var storiesEvents = {
                onTouchstart: mouseDown,
                onTouchend: mouseUp,
                onMousedown: mouseDown,
                onMouseup: mouseUp
            };
            return vueDemi.h('div', __assign({ ref: 'stories', class: 'stories' }, storiesEvents), [
                vueDemi.h('div', { class: 'timeline', ref: 'timeline' }, slices),
                vueDemi.h('div', { class: 'header', ref: 'header' }, this.$slots.header),
                render({ story: story, onPlay: onPlay, isPaused: this.paused })
            ]);
        }
    });

    exports.Stories = Stories;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vue-insta-stories.global.js.map
