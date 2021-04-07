import { defineComponent, h } from 'vue-demi';
import anime from 'animejs';

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

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

var Image = defineComponent({
    props: {
        story: {
            type: Object,
            required: true
        }
    },
    render: function () {
        var style = {
            width: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            margin: "auto"
        };
        var imageLoaded = function () {
        };
        return h('img', { src: this.story.url, style: style, onLoad: imageLoaded });
    }
});

var Video = defineComponent({
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
            controls: false,
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
                        this.$emit('action', 'duration', this.vid.duration * 1000);
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
        this.$emit('action', 'pause');
        var onPlaying = function () {
            _this.$emit('action', 'play');
        };
        return h('video', __assign(__assign({ src: this.story.url, ref: "vid" }, videoAttrs), { style: style, onLoadeddata: onLoadeddata, onPlaying: onPlaying }));
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
var render = function (_a, $slots) {
    var story = _a.story, otherProps = __rest(_a, ["story"]);
    var type = story.type, template = story.template;
    if (type === 'custom') {
        console.log(story);
        if (!template)
            throw new Error("if you use custom type you must define `template`");
        var slot = $slots[template];
        if (!slot)
            throw new Error("unable to find the template '" + template + "'");
        return slot(__assign({ story: story }, otherProps));
    }
    return h(getRender(type), __assign({ story: story }, otherProps));
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

var Stories = defineComponent({
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
        currentIndex: function (val) {
            console.log("watch", val);
            this.index = val;
            this.resetSlide();
        },
        paused: function (val) {
            if (val)
                this.pause();
            else
                this.play();
        },
        stories: {
            immediate: true,
            handler: function (val) {
                var _this = this;
                this.items = val.map(function (i) {
                    var defaults = {
                        duration: _this.interval,
                        type: 'image',
                    };
                    if (typeof i == 'string')
                        return __assign(__assign({}, defaults), { url: i });
                    else
                        return __assign(__assign({}, defaults), i);
                });
            }
        }
    },
    data: function () {
        var timeline = anime.timeline({
            autoplay: false,
            duration: this.interval,
            easing: "linear",
        });
        return {
            index: this.currentIndex,
            timeline: timeline,
            paused: false,
            mouseDownTimeout: undefined,
            items: []
        };
    },
    methods: {
        resetSlide: function () {
            this.timeline.pause();
            var offset = this.items.slice(0, this.index).reduce(function (tot, _a) {
                var duration = _a.duration;
                return tot + duration;
            }, 0);
            this.timeline.seek(offset);
            this.timeline.play();
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
        pause: function (anim) {
            if (anim === void 0) { anim = true; }
            this.timeline.pause();
            if (anim) {
                fadeOut(this.$refs.timeline);
                fadeOut(this.$refs.header);
            }
        },
        play: function (anim) {
            if (anim === void 0) { anim = true; }
            this.timeline.play();
            if (anim) {
                fadeIn(this.$refs.timeline);
                fadeIn(this.$refs.header);
            }
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
        this.timeline.play();
    },
    render: function () {
        var _this = this;
        var slices = this.items.map(function (_, key) { return h('div', { class: 'slice', key: key }, h('div', { class: 'progress' })); });
        var story = this.items[this.index];
        var onAction = function (action, data) {
            switch (action) {
                case 'play':
                    _this.play(false);
                    break;
                case 'pause':
                    _this.pause(false);
                    break;
                case 'duration':
                    var duration = data;
                    console.log(duration);
                    break;
                default:
                    console.log(action, data);
            }
        };
        var mouseDown = function (e) {
            e.preventDefault();
            _this.mouseDownTimeout = setTimeout(function () { return _this.togglePause(); }, 150);
        };
        var mouseUp = function (e) {
            e.preventDefault();
            _this.mouseDownTimeout && clearTimeout(_this.mouseDownTimeout);
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
        var renderProps = { story: story, onAction: onAction, isPaused: this.paused };
        var header = this.$slots.header;
        return h('div', __assign({ ref: 'stories', class: 'stories' }, storiesEvents), [
            h('div', { class: 'timeline', ref: 'timeline' }, slices),
            header ? h('div', { class: 'header', ref: 'header' }, header()) : null,
            render(renderProps, this.$slots)
        ]);
    }
});

export { Stories };
//# sourceMappingURL=vue-insta-stories.esm.js.map