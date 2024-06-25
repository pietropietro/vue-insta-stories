'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vueDemi = require('vue-demi');

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

var adaptOnsV3 = function (ons) {
    if (!ons)
        return null;
    return Object.entries(ons).reduce(function (ret, _a) {
        var _b;
        var key = _a[0], handler = _a[1];
        key = key.charAt(0).toUpperCase() + key.slice(1);
        key = "on" + key;
        return __assign(__assign({}, ret), (_b = {}, _b[key] = handler, _b));
    }, {});
};
var h = function (type, options, chidren) {
    if (options === void 0) { options = {}; }
    if (vueDemi.isVue2)
        return vueDemi.h(type, options, chidren);
    var props = options.props, domProps = options.domProps, on = options.on, extraOptions = __rest(options, ["props", "domProps", "on"]);
    var ons = adaptOnsV3(on);
    var params = __assign(__assign(__assign(__assign({}, extraOptions), props), domProps), ons);
    return vueDemi.h(type, params, chidren);
};
var slot = function (s, attrs) {
    if (typeof s == 'function')
        return s(attrs);
    return s;
};

var Image = vueDemi.defineComponent({
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
        var params = {
            style: style,
            domProps: {
                src: this.story.url
            },
        };
        return h('img', params);
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
            return this.$el;
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
        var loadeddata = function () { return __awaiter(_this, void 0, void 0, function () {
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
        var playing = function () {
            _this.$emit('action', 'play');
        };
        var params = {
            style: style,
            domProps: __assign({ src: this.story.url }, videoAttrs),
            on: {
                loadeddata: loadeddata,
                playing: playing
            },
        };
        return h('video', params);
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
    var story = _a.story, isPaused = _a.isPaused, onAction = _a.onAction;
    var attrs = { props: { story: story, isPaused: isPaused }, on: { action: onAction } };
    var type = story.type, template = story.template;
    if (template) {
        var slot$1 = $slots[template];
        if (!slot$1)
            throw new Error("unable to find the template '" + template + "'");
        return slot(slot$1, attrs);
    }
    return h(getRender(type), attrs);
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

var css_248z = ".vue-insta-stories {\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  background: #111;\n}\n\n.vue-insta-stories-full {\n  position: absolute;\n  height: 100vh;\n  height: -webkit-fill-available;\n  width: 100vw;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.vue-insta-stories-page {\n position: relative;\n height: 730px default;\n width: 420px default;\n}\n\n.vue-insta-stories .header {\n  position: absolute;\n  z-index: 10;\n  top: 22px;\n  left: 16px;\n}\n\n.vue-insta-stories .timeline {\n  position: absolute;\n  display: flex;\n  flex-grow: 0;\n  width: 100%;\n  background: -webkit-gradient(\n    linear,\n    top,\n    bottom,\n    from(rgba(0, 0, 0, 0.2)),\n    to(rgba(0, 0, 0, 0))\n  );\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));\n  padding-bottom: 8px; /* To add more space for gradient */\n  z-index: 10;\n}\n\n.vue-insta-stories .timeline > .slice {\n  background: rgba(255, 255, 255, 0.5);\n  height: 2px;\n  border-radius: 2px;\n  margin: 6px 3px;\n  width: 100%;\n}\n\n.vue-insta-stories .timeline > .slice > .progress {\n  background: #fff;\n  height: 2px;\n  border-radius: 2px;\n  width: 0%;\n}\n\n.see-more-wrapper {\n  flex-grow: 1;\n  display: flex;\n  position: relative;\n}\n\n.see-more-wrapper .see-more {\n  position: absolute;\n  height: 10vh;\n  flex-direction: column;\n  width: 100%;\n  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  bottom: 0;\n  z-index: 10;\n}\n\n.see-more-wrapper .see-more-text, .see-more-wrapper .see-more-icon {\n  color: white;\n  letter-spacing: 0.1em;\n  font-weight: bold;\n  font-size: 1rem;\n  transition: opacity 300ms ease-in-out;\n}\n.see-more-wrapper .see-more-text {\n  letter-spacing: 0.1em;\n  margin-bottom: 2.2vh;\n}";
styleInject(css_248z);

var Progress = vueDemi.defineComponent({
    props: {
        progress: {
            type: Number,
            required: true
        }
    },
    render: function () {
        var style = { width: this.progress + "%" };
        return h('div', { class: 'slice', }, [h('div', { class: 'progress', style: style })]);
    }
});
var Timeline = vueDemi.defineComponent({
    props: {
        stories: {
            type: Array,
            required: true
        },
        currentIndex: {
            type: Number,
            required: true
        },
        isPaused: {
            type: Boolean,
            required: true
        }
    },
    data: function () { return ({
        count: 0,
        startTime: 0,
        savedTimeStamp: 0,
        deltaPaused: 0,
        lastPaused: 0,
        animFrameId: -1,
    }); },
    watch: {
        currentIndex: {
            immediate: true,
            handler: function () {
                this.count = 0;
                this.startTime = 0;
                this.deltaPaused = 0;
                cancelAnimationFrame(this.animFrameId);
                this.animFrameId = requestAnimationFrame(this.incrementCount);
            },
        },
        isPaused: {
            immediate: true,
            handler: function (paused) {
                cancelAnimationFrame(this.animFrameId);
                if (paused) {
                    this.lastPaused = performance.now();
                }
                else {
                    if (this.lastPaused)
                        this.deltaPaused += performance.now() - this.lastPaused;
                    this.animFrameId = requestAnimationFrame(this.incrementCount);
                }
            }
        }
    },
    computed: {
        currentStory: function () {
            return this.stories[this.currentIndex];
        },
    },
    emits: ['storyEnd'],
    methods: {
        storyEnd: function () {
            this.$emit('storyEnd', this.currentIndex);
        },
        incrementCount: function (timestamp) {
            if (!this.startTime)
                this.startTime = timestamp;
            var runtime = timestamp - this.startTime - this.deltaPaused;
            this.count = (runtime / this.currentStory.duration) * 100;
            if (this.count < 100)
                this.animFrameId = requestAnimationFrame(this.incrementCount);
            else {
                this.storyEnd();
                cancelAnimationFrame(this.animFrameId);
            }
        }
    },
    render: function () {
        var current = this.currentIndex;
        var count = this.count;
        var elements = this.stories.map(function (_, i) {
            var progress = i == current ? count : (i < current ? 100 : 0);
            var key = i;
            return h(Progress, { key: key, props: { progress: progress } });
        });
        return h('div', { class: 'timeline', ref: 'timeline' }, elements);
    }
});

var WithSeeMore = vueDemi.defineComponent({
    name: "WithSeeMore",
    props: {
        enabled: {
            type: Boolean,
            default: true,
        },
        label: {
            type: String,
            required: false,
        },
    },
    data: function () { return ({
        opacity: 0,
        yDown: undefined
    }); },
    methods: {
        emit: function () {
            this.$emit("action");
        },
    },
    mounted: function () {
        this.opacity = 0.9;
    },
    render: function () {
        var _this = this;
        var mouseDown = function (e) {
            var _a;
            e.stopPropagation();
            if (e instanceof TouchEvent) {
                var touch = (_a = e.touches[0]) !== null && _a !== void 0 ? _a : e.changedTouches[0];
                _this.yDown = touch.clientY;
            }
        };
        var mouseUp = function (e) {
            e.stopPropagation();
            _this.emit();
        };
        var touchMove = function (e) {
            var _a;
            e.stopPropagation();
            if (!_this.yDown)
                return;
            var touch = (_a = e.touches[0]) !== null && _a !== void 0 ? _a : e.changedTouches[0];
            var yDiff = _this.yDown - touch.clientY;
            if (yDiff > 0) {
                _this.emit();
            }
            _this.yDown = undefined;
        };
        var events = {
            mouseup: mouseUp,
            touchend: mouseUp,
            touchstart: mouseDown,
            mousedown: mouseDown,
            touchmove: touchMove
        };
        var style = { opacity: this.opacity };
        var label = this.label || "See more";
        var seeMore = h('div', { class: 'see-more', on: events }, [
            h('span', { class: 'see-more-icon', style: style }, '^'),
            h('span', { class: 'see-more-text', style: style }, label)
        ]);
        return h('div', { class: 'see-more-wrapper' }, [
            slot(this.$slots.default),
            seeMore
        ]);
    },
});
var wrapWithSeeMore = function (storyNode, options, action) {
    if (!options)
        return storyNode;
    var vnode = vueDemi.isVue2 ? [storyNode] : { default: function () { return storyNode; } };
    var label = options === true ? undefined : options.label;
    return h(WithSeeMore, { props: { label: label }, on: { action: action } }, vnode);
};

var fadeOut = function (el) {
    el.animate([
        { opacity: 0 }
    ], {
        duration: 200,
        fill: 'forwards',
    });
};
var fadeIn = function (el) {
    el.animate([
        { opacity: 1 }
    ], {
        duration: 200,
        fill: 'forwards',
    });
};

var getX = function (e) {
    var _a;
    if (e instanceof MouseEvent)
        return e.offsetX;
    var touch = (_a = e.touches[0]) !== null && _a !== void 0 ? _a : e.changedTouches[0];
    return touch.clientX;
};

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
        isPaused: {
            type: Boolean,
            required: false
        },
        loop: {
            type: Boolean,
            default: false,
            required: false,
        }
    },
    emits: ['storyStart', 'storyEnd', 'allStoriesEnd', 'update:currentIndex', 'update:isPaused', 'seeMore', 'next', 'prev'],
    watch: {
        currentIndex: function (val) {
            this.index = val;
        },
        index: {
            immediate: true,
            handler: function (current) {
                this.$emit('update:currentIndex', current);
                this.$emit('storyStart', current);
            },
        },
        isPaused: {
            immediate: true,
            handler: function (val) {
                this.paused = val;
            },
        },
        paused: function (val) {
            if (val)
                this.pause();
            else
                this.play();
            this.$emit('update:isPaused', val);
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
        return {
            index: this.currentIndex,
            paused: false,
            mouseDownTimeout: undefined,
            items: []
        };
    },
    methods: {
        nextSlide: function (emit) {
            if (emit === void 0) { emit = true; }
            emit && this.$emit('next');
            if (this.index < this.stories.length - 1) {
                this.index++;
            }
            else if (this.loop) {
                this.index = 0;
            }
        },
        previousSlide: function () {
            this.$emit('prev');
            if (this.index > 0)
                this.index--;
        },
        togglePause: function () {
            this.paused = !this.paused;
        },
        pause: function () {
            fadeOut(this.$refs.timeline.$el);
            if (this.$refs.header)
                fadeOut(this.$refs.header);
        },
        play: function () {
            fadeIn(this.$refs.timeline.$el);
            if (this.$refs.header)
                fadeIn(this.$refs.header);
        },
        storyEnd: function (index) {
            this.$emit('storyEnd', index);
            this.nextSlide(false);
            if (index === this.stories.length - 1) {
                if (this.loop)
                    this.index = 0;
                else
                    this.$emit('allStoriesEnd');
            }
        },
    },
    render: function () {
        var _this = this;
        var story = this.items[this.index];
        var timelineProps = {
            props: {
                stories: this.items,
                currentIndex: this.index,
                isPaused: this.paused,
            },
            on: {
                storyEnd: this.storyEnd,
            }
        };
        var onAction = function (action, data) {
            switch (action) {
                case 'play':
                    break;
                case 'pause':
                    break;
                case 'duration':
                    var duration = data;
                    _this.items[_this.index].duration = duration;
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
                var width = _this.$refs.stories.getBoundingClientRect().width;
                var t = width / 3;
                if (x > t) {
                    _this.nextSlide();
                }
                else {
                    _this.previousSlide();
                }
            }
        };
        var storiesEvents = {
            touchstart: mouseDown,
            touchend: mouseUp,
            mousedown: mouseDown,
            mouseup: mouseUp
        };
        var onSeeMore = function () {
            _this.paused = true;
            _this.$emit('seeMore', story);
        };
        var renderProps = { story: story, onAction: onAction, isPaused: this.paused };
        var header = this.$slots.header;
        var storyVnode = render(renderProps, this.$slots);
        return h('div', { ref: 'stories', class: 'vue-insta-stories', on: storiesEvents }, [
            h(Timeline, __assign({ ref: 'timeline' }, timelineProps)),
            header ? h('div', { class: 'header', ref: 'header' }, slot(header, { story: story })) : null,
            wrapWithSeeMore(storyVnode, story.seeMore, onSeeMore)
        ]);
    }
});

exports.Stories = Stories;
