webpackJsonp([3], [function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o() {
        c["default"].preload.showPreloadArea()
    }
    function a(e) {
        o(), c["default"].preload.onReady(function() {
            return c["default"].showPPT()
        }), l["default"].isMusicOff() || c["default"].buildBackgroundMusic(), c["default"].ensurePages([0], function() {})
    }
    function r(e, t, n) {
        return h["default"].log(e, t, n), h["default"].logPiwik(l["default"].getEnvironment(), e + " " + t + " " + n), !1
    }
    var s = n(4),
        l = i(s),
        u = n(21),
        c = i(u),
        d = n(8),
        f = i(d),
        p = n(1),
        h = i(p),
        g = n(3),
        m = i(g),
        v = n(15),
        w = i(v),
        b = n(7),
        y = i(b),
        k = n(58),
        x = (i(k), n(56)),
        P = i(x);
    y["default"].send("homeStart"), w["default"].init(window.projectVersion), $(window).on("touchmove", function(e) {
        e.preventDefault()
    });
	////////////////**********************电脑访问跳转到电脑版
	h["default"].judgePC() && (window.location.href = "pc.html");
	//h["default"].judgePC() && (window.location.href = "/pcviewer/" + h["default"].viewerGetTail());
    var A = {
        lastCallback: function() {
            h["default"].getUrlParameter("answerid") || P["default"].showAD({
                replay: function() {
                    c["default"].showPage(0)
                }
            })
        },
        pageChangeCallback: function() {
            c["default"].currentPageIndex === f["default"].getPageLength() - 1 && P["default"].loadStart()
        }
    };
    c["default"].setOption(A), l["default"].setProjectId(window.projectVersion.id), m["default"].isLocal() ? window.localView = function(e) {
        f["default"].localInt(e).then(a)
    } : f["default"].init().then(a)["catch"](function(e) {
        h["default"].error(e)
    }), window.onerror = r, window.onDataStoryLoad = function() {
        window.dataStoryLoad = !0, y["default"].pushAll()
    }
}, , , function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(1),
        s = i(r),
        l = function() {
            function e() {
                o(this, e), this.host = "/", this.examResultPage = -1
            }
            return a(e, [{
                key: "getInterActionUrl",
                value: function(e) {
                    var t = {
                        dianzan: {
                            svg: "dianzan.svg"
                        },
                        like: {
                            svg: "heart.svg"
                        },
                        sad: {
                            svg: "sad.svg"
                        },
                        flower: {
                            svg: "flower.svg"
                        }
                    };
                    return e ? this.host + "k/images/InterAction/" + t[e].svg : null
                }
            },
            {
                key: "isAppNormalMode",
                value: function() {
                    return "function" != typeof window.callPhantom
                }
            },
            {
                key: "isIOS",
                value: function() {
                    var e = navigator.userAgent;
                    return e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1 || e.indexOf("Safari") > -1
                }
            },
            {
                key: "isFF",
                value: function() {
                    var e = navigator.userAgent.toLowerCase();
                    return e.indexOf("mozilla") > -1 && e.indexOf("firefox") > -1
                }
            },
            {
                key: "isWX",
                value: function() {
                    var e = navigator.userAgent;
                    return e.indexOf("MicroMessenger") > -1
                }
            },
            {
                key: "isMobile",
                value: function() {
                    return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                }
            },
            {
                key: "isLocal",
                value: function() {
                    return -1 !== window.location.pathname.indexOf("APPLOCAL")
                }
            },
            {
                key: "addTail",
                value: function(e, t, n) {
                    var i = void 0,
					    //////////////////************去除图片后缀 src
                        o = t ? t : "",
                        a = n ? n + "w_" : "";
                    ////////////************去除图片后缀 80Q.@
					return e.indexOf("aliyuncs") >= 0 || !this.isAppNormalMode() ? e : (i = this.isIOS() || this.isFF() ? "" + o : ".webp", e + "" + a + i)
					//return e.indexOf("aliyuncs") >= 0 || !this.isAppNormalMode() ? e : (i = this.isIOS() || this.isFF() ? "80Q." + o : ".webp", e + "@" + a + i)
                }
            },
            {
                key: "getUid",
                value: function() {
                    return window.projectVersion ? window.projectVersion.uid || "" : ""
                }
            },
            {
                key: "isExam",
                value: function(e) {
                    if (void 0 !== this.exam) return this.exam;
                    var t = e.some(function(e) {
                        var t = e.content.some(function(e) {
                            return "examChoice" === e.type ? !0 : void 0
                        });
                        return t ? !0 : void 0
                    });
                    return this.exam = t, t
                }
            },
            {
                key: "isShareExam",
                value: function(e) {
                    return this.isExam(e) && void 0 !== s["default"].getUrlParameter("answerid")
                }
            },
            {
                key: "isADtrans",
                value: function() {
                    var e = s["default"].getUrlParameter("task_id"),
                        t = s["default"].getUrlParameter("member_id");
                    return void 0 !== e && void 0 !== t && this.isWX()
                }
            }]), e
        }(),
        u = new l;
    t["default"] = u, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(1),
        s = i(r),
        l = n(3),
        u = i(l),
        c = function() {
            function e() {
                o(this, e), this.canvas = {
                    standardWidth: 640,
                    standardHeight: 1008
                }, "production" === this.getEnvironment() ? (this.ADtransHost = "http://chuanbo.maka.im", this.urlHost = "http://viewer.maka.im", this.apiHost = "http://api.maka.im") : (this.ADtransHost = "http://test.chuanbo.maka.im", this.urlHost = "http://test.viewer.maka.im", this.apiHost = "http://test.api.maka.im"), this.postFormUrl = this.apiHost + "/api/form/", this.eventClickUrl = this.apiHost + "/api/eventClick", this.glassBreakVoice = "http://m.maka.mobi/maka/app/gfile/public/files/edisk/music/2015/05/12/0dbb52cdd178ea1c953d5aaf9c562e10.mp3", this.engFontUrl = "http://global-maka-public.oss-cn-beijing.aliyuncs.com/fonts/", this.language = {
                    submitForm: "提交",
                    submiting: "提交中...",
                    pleaseInput: "请输入",
                    submitSuccess: "提交成功!",
                    submitFail: "网络不给力哦～请稍后再试!"
                }
            }
            return a(e, [{
                key: "isTurnOffOssCrop",
                value: function() {
                    return !1
                }
            },
            {
                key: "getImgUrl",
                value: function(e) {
					//////*********************
					return e ? 0 === e.trim().toLowerCase().indexOf("http://") || 0 === e.trim().toLowerCase().indexOf("https://") ? e : "aliyun" === s["default"].getUrlParameter("env") ? "" + e : "" + e : ""
                    //return e ? 0 === e.trim().toLowerCase().indexOf("http://") || 0 === e.trim().toLowerCase().indexOf("https://") ? e : "aliyun" === s["default"].getUrlParameter("env") ? "http://makapicture.oss-cn-beijing-internal.aliyuncs.com/" + e : "http://img1.maka.im/" + e : "http://img1.maka.im"
                }
            },
            {
                key: "addCrop",
                value: function(e, t) {
                    var n = t.left < 0 ? 0 : t.left,
                        i = t.top < 0 ? 0 : t.top,
                        o = t.width < 0 ? 0 : t.width,
                        a = t.height < 0 ? 0 : t.height,
                        r = void 0;
					////////*******************图片大小后缀
					return e.indexOf("aliyuncs") >= 0 && (e = e.replace("maka-test.oss-cn-beijing.aliyuncs.com", "test.img.maka.im")), r = u["default"].isIOS() || u["default"].isFF() ? "" : "", e
                    //return e.indexOf("aliyuncs") >= 0 && (e = e.replace("maka-test.oss-cn-beijing.aliyuncs.com", "test.img.maka.im")), r = u["default"].isIOS() || u["default"].isFF() ? ".src" : ".webp", e + "@" + n + "-" + i + "-" + o + "-" + a + "a_90Q" + r
                }
            },
            {
                key: "isGif",
                value: function(e) {
                    var t = /\.gif/i,
                        n = t.exec(e);
                    return !!n
                }
            },
            {
                key: "getButtonLogo",
                value: function(e) {
                    return "images/button2/" + e
                }
            },
            {
                key: "getShapeUrl",
                value: function(e) {
                    ////////*************svg路径
					return e
					//return "http://res.maka.im/shapeSVG/" + e
                }
            },
            {
                key: "getPhoneCallUrl",
                value: function(e) {
                    return "images/phonecall/" + e
                }
            },
            {
                key: "getGlassBreakUrl",
                value: function(e) {
                    return "images/glassbreak/" + e
                }
            },
            {
                key: "getPButtonUrl",
                value: function(e) {
                    return "images/buttonSvg/" + e
                }
            },
            {
                key: "getInterActionBtn",
                value: function(e) {
                    return "images/InterAction/" + e
                }
            },
            {
                key: "getMusicUrl",
                value: function(e) {
					////////////////////////******************mp3地址处理
					return 1 === parseInt(e.version) && ("" + e.id).indexOf("/") > 0 ? this.isHttpHead(e.id) ? e.id : "production" === this.getEnvironment() ? "" + e.id : "" + e.id : "" + e.id + ".mp3"
                    //return 1 === parseInt(e.version) && ("" + e.id).indexOf("/") > 0 ? this.isHttpHead(e.id) ? e.id : "production" === this.getEnvironment() ? "http://res.maka.im/" + e.id : "http://maka-test.oss-cn-beijing.aliyuncs.com/" + e.id : "http://m1.maka.im/gfilemusic/" + e.id + ".mp3"
					///////////////************
                }
            },
            {
                key: "getContentJSONUrl",
                value: function() {
                    var e = void 0,
                        t = "",
                        n = this.getProjectId(),
                        i = this.getEnvironment(),
                        o = u["default"].getUid();
                    if (t = this.isAppNormalMode() ? window.projectVersion.p_version : (new Date).getTime(), this.isTemplate()) {
                        if (this.isStoreTemplatePreview() || this.isRemoveDesignerAd()) e = "/api/storeTemplate/" + n + "?dataType=pdata&v=" + t;
                        else if (this.isVersionedTemplatePreview()) {
                            var a = s["default"].getUrlParameter("version");
                            a = a ? "&version=" + a : "", e = "/api/requestVersionedTemplate/" + n + "?dataType=pdata&v=" + t + a
                        } else e = "/api/template/" + n + "?dataType=pdata&v=" + t;
                        return "aliyun" !== s["default"].getUrlParameter("env") && ("test" === i ? e = "http://test.api.maka.im" + e : "production" === i && (e = "http://api.maka.im" + e)), e
                    }
                    //////////////*************数据路径
					return this.isAppNormalMode() ? (e = window.customConfig.dataurl, "test" === i || "development" === i ? e = "" + e : "production" === i && (e = "" + e)) : (e = "/api/event/" + n + "?dataType=all&ts=" + t, "test" === i ? e = "http://test.api.maka.im" + e : "production" === i && (e = "http://api.maka.im" + e)), e
					//return this.isAppNormalMode() ? (e = "/user/" + o + "/event/" + n + "/" + n + "_v" + t + ".json?hash=" + s["default"].getHashCode("" + window.location.hostname), "test" === i || "development" === i ? e = "http://maka-test.oss-cn-beijing.aliyuncs.com" + e : "production" === i && (e = "http://res.maka.im" + e)) : (e = "/api/event/" + n + "?dataType=all&ts=" + t, "test" === i ? e = "http://test.api.maka.im" + e : "production" === i && (e = "http://api.maka.im" + e)), e
                }
            },
            {
                key: "getEnvironment",
                value: function() {
                    var e = void 0;
                    return e = window.location.host.indexOf("localhost") >= 0 || window.location.host.indexOf("192.") >= 0 ? "development" : window.location.host.indexOf("test") >= 0 ? "test" : "production"
                }
            },
            {
                key: "getSPEventUrl",
                value: function() {
                    var e = void 0;
                    return e = "production" === this.getEnvironment() ? "http://api.maka.im/" : "/", e + "api/viewerSpevent/" + this.getProjectId()
                }
            },
            {
                key: "getWxKeyURL",
                value: function() {
                    /////////***********微信用户路径
					var e = "2/viewerWechatSign.json";
					//var e = this.apiHost + "/api/viewerWechatSign";
                    return e
                }
            },
            {
                key: "isHttpHead",
                value: function(e) {
                    return e = "" + e, 0 === e.trim().toLowerCase().indexOf("http://") || 0 === e.trim().toLowerCase().indexOf("https://")
                }
            },
            {
                key: "isAppNormalMode",
                value: function() {
                    return "function" != typeof window.callPhantom
                }
            },
            {
                key: "isStoreTemplatePreview",
                value: function() {
                    return "storeTemplate" === s["default"].getUrlParameter("mode") || "storeTemplete" === s["default"].getUrlParameter("mode")
                }
            },
            {
                key: "isVersionedTemplatePreview",
                value: function() {
                    return "requestVersionedTemplate" === s["default"].getUrlParameter("mode")
                }
            },
            {
                key: "isMusicOff",
                value: function() {
                    return "true" === s["default"].getUrlParameter("musicOff")
                }
            },
            {
                key: "isWxDebug",
                value: function() {
                    return "true" === s["default"].getUrlParameter("wxdebug")
                }
            },
            {
                key: "isRemoveDesignerAd",
                value: function() {
                    return "true" === s["default"].getUrlParameter("TempAdmode") ? !1 : "storeTemplate" === s["default"].getUrlParameter("mode")
                }
            },
            {
                key: "isTemplate",
                value: function() {
                    return -1 !== this.getProjectId().indexOf("T_")
                }
            },
            {
                key: "getProjectId",
                value: function() {
                    return self.projectId
                }
            },
            {
                key: "setProjectId",
                value: function(e) {
                    self.projectId = e
                }
            },
            {
                key: "getExamShareUrl",
                value: function() {
                    return this.apiHost + "/api/share"
                }
            },
            {
                key: "getExamAnswerUrl",
                value: function() {
                    return this.apiHost + "/api/answer"
                }
            },
            {
                key: "getLoginUrl",
                value: function() {
                    return this.apiHost + "/wechat/authorize?callback=" + encodeURIComponent(location.href)
                }
            },
            {
                key: "getADtransRecordUrl",
                value: function() {
                    return this.ADtransHost + "/api/user_view_record/add"
                }
            },
            {
                key: "getADtransLoginUrl",
                value: function(e) {
                    return this.ADtransHost + "/api/wechat/auth_page_base?success_url=" + encodeURIComponent(e)
                }
            }]), e
        }(),
        d = new c;
    window.Config = d, t["default"] = d, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i() {}
    function o(e) {
        try {
            return e.then
        } catch (t) {
            return v = t, w
        }
    }
    function a(e, t) {
        try {
            return e(t)
        } catch (n) {
            return v = n, w
        }
    }
    function r(e, t, n) {
        try {
            e(t, n)
        } catch (i) {
            return v = i, w
        }
    }
    function s(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._45 = 0, this._81 = 0, this._65 = null, this._54 = null, e !== i && g(e, this)
    }
    function l(e, t, n) {
        return new e.constructor(function(o, a) {
            var r = new s(i);
            r.then(o, a), u(e, new h(t, n, r))
        })
    }
    function u(e, t) {
        for (; 3 === e._81;) e = e._65;
        return s._10 && s._10(e), 0 === e._81 ? 0 === e._45 ? (e._45 = 1, void(e._54 = t)) : 1 === e._45 ? (e._45 = 2, void(e._54 = [e._54, t])) : void e._54.push(t) : void c(e, t)
    }
    function c(e, t) {
        m(function() {
            var n = 1 === e._81 ? t.onFulfilled : t.onRejected;
            if (null === n) return void(1 === e._81 ? d(t.promise, e._65) : f(t.promise, e._65));
            var i = a(n, e._65);
            i === w ? f(t.promise, v) : d(t.promise, i)
        })
    }
    function d(e, t) {
        if (t === e) return f(e, new TypeError("A promise cannot be resolved with itself."));
        if (t && ("object" == typeof t || "function" == typeof t)) {
            var n = o(t);
            if (n === w) return f(e, v);
            if (n === e.then && t instanceof s) return e._81 = 3, e._65 = t, void p(e);
            if ("function" == typeof n) return void g(n.bind(t), e)
        }
        e._81 = 1, e._65 = t, p(e)
    }
    function f(e, t) {
        e._81 = 2, e._65 = t, s._97 && s._97(e, t), p(e)
    }
    function p(e) {
        if (1 === e._45 && (u(e, e._54), e._54 = null), 2 === e._45) {
            for (var t = 0; t < e._54.length; t++) u(e, e._54[t]);
            e._54 = null
        }
    }
    function h(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
    }
    function g(e, t) {
        var n = !1,
            i = r(e, function(e) {
                n || (n = !0, d(t, e))
            }, function(e) {
                n || (n = !0, f(t, e))
            });
        n || i !== w || (n = !0, f(t, v))
    }
    var m = n(14),
        v = null,
        w = {};
    e.exports = s, s._10 = null, s._97 = null, s._61 = i, s.prototype.then = function(e, t) {
        if (this.constructor !== s) return l(this, e, t);
        var n = new s(i);
        return u(this, new h(e, t, n)), n
    }
}, function(e, t, n) {
    "use strict";
    e.exports = n(44)
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(1),
        s = i(r),
        l = n(4),
        u = i(l),
        c = function() {
            function e() {
                o(this, e), this.waitingReq = []
            }
            return a(e, [{
                key: "send",
                value: function(e, t) {
                    if (u["default"].isAppNormalMode()) {
                        var n = void 0,
                            i = (new Date).getTime();
                        switch (e) {
                        case "homeStart":
                            n = "home_page_load_start:" + i;
                            break;
                        case "homeEnd":
                            n = "home_page_load_end:" + i;
                            break;
                        case "pageLoadStart":
                            n = "page_" + t + "_load_start:" + i;
                            break;
                        case "pageLoadEnd":
                            n = "page_" + t + "_load_end:" + i;
                            break;
                        case "pageVisit":
                            n = "page_" + t + "_visit:" + i;
                            break;
                        case "pageLeave":
                            n = "page_" + t + "_unload:" + i;
                            break;
                        case "closeMusic":
                            n = "close_music:" + i;
                            break;
                        case "makaAD":
                            n = "maka_ad_" + t + ":" + i
                        }
                        window.dataStoryLoad ? this.sendToDataStory(n) : this.waitingReq.push(n)
                    }
                }
            },
            {
                key: "pushAll",
                value: function() {
                    var e = this;
                    "undefined" != typeof DS && DS.ready(function() {
                        for (var t in e.waitingReq) e.sendToDataStory(e.waitingReq[t])
                    })
                }
            },
            {
                key: "sendToDataStory",
                value: function(e) {
                    try {
                        "undefined" != typeof DS && DS.sendBtnName && DS.sendBtnName(e)
                    } catch (t) {
                        s["default"].log("send error " + e + t)
                    }
                }
            }]), e
        }();
    t["default"] = new c, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(1),
        u = i(l),
        c = n(6),
        d = i(c),
        f = n(3),
        p = i(f),
        h = n(38),
        g = i(h),
        m = function() {
            function e() {
                o(this, e)
            }
            return a(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    if (console.log("captrue init" + window.Config.getContentJSONUrl()), p["default"].isADtrans()) {
                        var t = u["default"].getCookie("openid"),
                            n = u["default"].getUrlParameter("sign");
                        if (void 0 === t || void 0 === n) return void(location.href = Config.getADtransLoginUrl(location.href));
                        var i = u["default"].getUrlParameter("task_id"),
                            o = u["default"].getUrlParameter("member_id"),
                            a = window.projectVersion.id;
                        p["default"].isWX(), "wx";
                        s["default"].ajax({
                            type: "get",
                            url: Config.getADtransRecordUrl(),
                            dataType: "json",
                            data: {
                                task_id: i,
                                member_id: o,
                                event_id: a,
                                plat_type: "wx",
                                plat_id: t,
                                sign: n
                            },
                            success: function(e) {}
                        })
                    }
                    return new d["default"](function(t, n) {
                        console.log(window.Config.getContentJSONUrl()), s["default"].ajax({
                            type: "GET",
                            dataType: "json",
                            url: window.Config.getContentJSONUrl(),
                            success: function(n) {
                                if (e.pdata = n.data.pdata, e.contentJSON = n.data.pdata.json, e.music = n.data.pdata.music, p["default"].isExam(e.contentJSON) && p["default"].isWX()) {
                                    if (void 0 === u["default"].getCookie("openid")) return void(location.href = Config.getLoginUrl());
                                    var i = u["default"].getUrlParameter("thumb"),
                                        o = u["default"].getCookie("thumb");
                                    if (i = "undefined" == i ? void 0 : i, o = "undefined" == o ? void 0 : o, void 0 == i && void 0 == o) return void(location.href = Config.getLoginUrl());
                                    if (void 0 == o) {
                                        var a = decodeURIComponent(u["default"].getUrlParameter("thumb"));
                                        u["default"].setCookie("thumb", a, 7)
                                    }
                                }
                                e.contentJSON = (0, g["default"])(e.contentJSON), t(e.contentJSON)
                            },
                            error: function(e) {
                                u["default"].log(e), n(e)
                            }
                        })
                    })
                }
            },
            {
                key: "localInt",
                value: function(e) {
                    return this.pdata = e.data.pdata, this.contentJSON = e.data.pdata.json, this.music = e.data.pdata.music, d["default"].resolve(this.contentJSON)
                }
            },
            {
                key: "hasPage",
                value: function(e) {
                    return e >= 0 && e < this.contentJSON.length
                }
            },
            {
                key: "getPage",
                value: function(e) {
                    if (this.hasPage(e)) return this.contentJSON[e];
                    throw "MAKA EXCEPTION: index不合法"
                }
            },
            {
                key: "getPageLength",
                value: function() {
                    return this.contentJSON.length
                }
            },
            {
                key: "get",
                value: function() {
                    return this.contentJSON
                }
            },
            {
                key: "getIsloop",
                value: function() {
                    return "true" === this.pdata.loop || this.pdata.loop === !0
                }
            },
            {
                key: "getMusicId",
                value: function() {
                    return this.music && this.music.id ? this.music.id : null
                }
            },
            {
                key: "getMusic",
                value: function() {
                    return this.music ? this.music : null
                }
            }]), e
        }();
    t["default"] = new m, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    !
    function(t, n) {
        var i = n();
        e.exports = i
    }(void 0, function() {
        var e = [],
            t = [],
            n = [],
            i = "transform",
            o = window.getComputedStyle(document.documentElement, ""),
            a = (Array.prototype.slice.call(o).join("").match(/-(moz|webkit|ms)-/) || "" === o.OLink && ["", "o"])[1];
        "webkit" === a && (i = "webkitTransform");
        var r = function(e, t, n) {
            var i = e;
            if (void 0 !== i.length) {
                for (var o = {
                    chainers: [],
                    then: function(e) {
                        return console.log("DeprecationWarning: then() is renamed to snabbt()"), this.snabbt(e)
                    },
                    snabbt: function(e) {
                        var t = this.chainers.length;
                        return this.chainers.forEach(function(n, i) {
                            n.snabbt(s(e, i, t))
                        }), o
                    },
                    setValue: function(e) {
                        return this.chainers.forEach(function(t) {
                            t.setValue(e)
                        }), o
                    },
                    finish: function(e) {
                        return this.chainers.forEach(function(t) {
                            t.finish(e)
                        }), o
                    },
                    rollback: function(e) {
                        return this.chainers.forEach(function(t) {
                            t.rollback(e)
                        }), o
                    }
                }, a = 0, r = i.length; r > a; ++a)"string" == typeof t ? o.chainers.push(l(i[a], t, s(n, a, r))) : o.chainers.push(l(i[a], s(t, a, r), n));
                return o
            }
            return "string" == typeof t ? l(i, t, s(n, 0, 1)) : l(i, s(t, 0, 1), n)
        },
            s = function(e, t, n) {
                if (!e) return e;
                var i = X(e);
                q(e.delay) && (i.delay = e.delay(t, n)), q(e.callback) && (console.log("DeprecationWarning: callback is renamed to complete"), i.complete = function() {
                    e.callback.call(this, t, n)
                });
                var o = q(e.allDone),
                    a = q(e.complete);
                (a || o) && (i.complete = function() {
                    a && e.complete.call(this, t, n), o && t == n - 1 && e.allDone()
                }), q(e.valueFeeder) && (i.valueFeeder = function(i, o) {
                    return e.valueFeeder(i, o, t, n)
                }), q(e.easing) && (i.easing = function(i) {
                    return e.easing(i, t, n)
                });
                var r = ["position", "rotation", "skew", "rotationPost", "scale", "scalePost", "width", "height", "opacity", "fromPosition", "fromRotation", "fromSkew", "fromRotationPost", "fromScale", "fromScalePost", "fromWidth", "fromHeight", "fromOpacity", "transformOrigin", "duration", "delay"];
                return r.forEach(function(o) {
                    q(e[o]) && (i[o] = e[o](t, n))
                }), i
            },
            l = function(e, n, i) {
                function o(n) {
                    return v.tick(n), v.updateElement(e), v.isStopped() ? void 0 : v.completed() ? void(a.loop > 1 && !v.isStopped() ? (a.loop -= 1, v.restart(), w(o)) : (a.complete && a.complete.call(e), b.length && (a = b.pop(), l = g(a, d, !0), d = g(a, X(d)), a = m(l, d, a), v = y(a, e), t.push([e, v]), v.tick(n), w(o)))) : w(o)
                }
                if ("attention" === n) return u(e, i);
                if ("stop" === n) return c(e);
                var a = n;
                f();
                var r = h(e),
                    l = r;
                l = g(a, l, !0);
                var d = X(r);
                d = g(a, d);
                var p = m(l, d, a),
                    v = y(p);
                t.push([e, v]), v.updateElement(e, !0);
                var b = [],
                    k = {
                        snabbt: function(e) {
                            return b.unshift(s(e, 0, 1)), k
                        },
                        then: function(e) {
                            return console.log("DeprecationWarning: then() is renamed to snabbt()"), this.snabbt(e)
                        }
                    };
                return w(o), a.manual ? v : k
            },
            u = function(e, n) {
                function i(t) {
                    a.tick(t), a.updateElement(e), a.completed() ? (n.callback && n.callback(e), n.loop && n.loop > 1 && (n.loop--, a.restart(), w(i))) : w(i)
                }
                var o = g(n, L({}));
                n.movement = o;
                var a = k(n);
                t.push([e, a]), w(i)
            },
            c = function(e) {
                for (var n = 0, i = t.length; i > n; ++n) {
                    var o = t[n],
                        a = o[0],
                        r = o[1];
                    a === e && r.stop()
                }
            },
            d = function(e, t) {
                for (var n = 0, i = e.length; i > n; ++n) {
                    var o = e[n],
                        a = o[0],
                        r = o[1];
                    if (a === t) {
                        var s = r.getCurrentState();
                        return r.stop(), s
                    }
                }
            },
            f = function() {
                n = n.filter(function(e) {
                    return p(e[0]).body
                })
            },
            p = function(e) {
                for (var t = e; t.parentNode;) t = t.parentNode;
                return t
            },
            h = function(e) {
                var i = d(t, e);
                return i ? i : d(n, e)
            },
            g = function(e, t, n) {
                t || (t = L({
                    position: [0, 0, 0],
                    rotation: [0, 0, 0],
                    rotationPost: [0, 0, 0],
                    scale: [1, 1],
                    scalePost: [1, 1],
                    skew: [0, 0]
                }));
                var i = "position",
                    o = "rotation",
                    a = "skew",
                    r = "rotationPost",
                    s = "scale",
                    l = "scalePost",
                    u = "width",
                    c = "height",
                    d = "opacity";
                return n && (i = "fromPosition", o = "fromRotation", a = "fromSkew", r = "fromRotationPost", s = "fromScale", l = "fromScalePost", u = "fromWidth", c = "fromHeight", d = "fromOpacity"), t.position = F(e[i], t.position), t.rotation = F(e[o], t.rotation), t.rotationPost = F(e[r], t.rotationPost), t.skew = F(e[a], t.skew), t.scale = F(e[s], t.scale), t.scalePost = F(e[l], t.scalePost), t.opacity = e[d], t.width = e[u], t.height = e[c], t
            },
            m = function(e, t, n) {
                return n.startState = e, n.endState = t, n
            },
            v = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
            function(e) {
                return setTimeout(e, 1e3 / 60)
            },
            w = function(t) {
                0 === e.length && v(b), e.push(t)
            },
            b = function Y(i) {
                for (var o = e.length, a = 0; o > a; ++a) e[a](i);
                e.splice(0, o);
                var r = t.filter(function(e) {
                    return e[1].completed()
                });
                n = n.filter(function(e) {
                    for (var t = 0, n = r.length; n > t; ++t) if (e[0] === r[t][0]) return !1;
                    return !0
                }), n = n.concat(r), t = t.filter(function(e) {
                    return !e[1].completed()
                }), 0 !== e.length && v(Y)
            },
            y = function(e) {
                var t = e.startState,
                    n = e.endState,
                    i = F(e.duration, 500),
                    o = F(e.delay, 0),
                    a = e.perspective,
                    r = E(F(e.easing, "linear"), e),
                    s = 0 === i ? n.clone() : t.clone();
                e.transformOrigin;
                s.transformOrigin = e.transformOrigin;
                var l, u, c = 0,
                    d = 0,
                    f = !1,
                    p = !1,
                    h = e.manual,
                    g = 0,
                    m = o / i;
                return u = e.valueFeeder ? H(e.valueFeeder, t, n, s) : N(t, n, s), {
                    stop: function() {
                        f = !0
                    },
                    isStopped: function() {
                        return f
                    },
                    finish: function(e) {
                        h = !1;
                        var t = i * g;
                        c = d - t, l = e, r.resetFrom(g)
                    },
                    rollback: function(e) {
                        h = !1, u.setReverse();
                        var t = i * (1 - g);
                        c = d - t, l = e, r.resetFrom(g)
                    },
                    restart: function() {
                        c = void 0, r.resetFrom(0)
                    },
                    tick: function(t) {
                        if (!f) {
                            if (h) return d = t, void this.updateCurrentTransform();
                            if (c || (c = t), t - c > o) {
                                !p && e.startCallback && e.startCallback(), p = !0, d = t - o;
                                var n = Math.min(Math.max(0, d - c), i);
                                r.tick(n / i), this.updateCurrentTransform(), this.completed() && l && l()
                            }
                        }
                    },
                    getCurrentState: function() {
                        return s
                    },
                    setValue: function(e) {
                        p = !0, g = Math.min(Math.max(e, 1e-4), 1 + m)
                    },
                    updateCurrentTransform: function() {
                        var e = r.getValue();
                        if (h) {
                            var t = Math.max(1e-5, g - m);
                            r.isSpring ? e = t : (r.tick(t, !0), e = r.getValue())
                        }
                        u.tween(e)
                    },
                    completed: function() {
                        return f ? !0 : 0 === c ? !1 : r.completed()
                    },
                    updateElement: function(e, t) {
                        if (p || t) {
                            var n = u.asMatrix(),
                                i = u.getProperties();
                            W(e, n, a), V(e, i)
                        }
                    }
                }
            },
            k = function(e) {
                var t = e.movement;
                e.initialVelocity = .1, e.equilibriumPosition = 0;
                var n = C(e),
                    i = !1,
                    o = t.position,
                    a = t.rotation,
                    r = t.rotationPost,
                    s = t.scale,
                    l = t.scalePost,
                    u = t.skew,
                    c = L({
                        position: o ? [0, 0, 0] : void 0,
                        rotation: a ? [0, 0, 0] : void 0,
                        rotationPost: r ? [0, 0, 0] : void 0,
                        scale: s ? [0, 0] : void 0,
                        skew: u ? [0, 0] : void 0
                    });
                return {
                    stop: function() {
                        i = !0
                    },
                    isStopped: function(e) {
                        return i
                    },
                    tick: function(e) {
                        i || n.equilibrium || (n.tick(), this.updateMovement())
                    },
                    updateMovement: function() {
                        var e = n.getValue();
                        o && (c.position[0] = t.position[0] * e, c.position[1] = t.position[1] * e, c.position[2] = t.position[2] * e), a && (c.rotation[0] = t.rotation[0] * e, c.rotation[1] = t.rotation[1] * e, c.rotation[2] = t.rotation[2] * e), r && (c.rotationPost[0] = t.rotationPost[0] * e, c.rotationPost[1] = t.rotationPost[1] * e, c.rotationPost[2] = t.rotationPost[2] * e), s && (c.scale[0] = 1 + t.scale[0] * e, c.scale[1] = 1 + t.scale[1] * e), l && (c.scalePost[0] = 1 + t.scalePost[0] * e, c.scalePost[1] = 1 + t.scalePost[1] * e), u && (c.skew[0] = t.skew[0] * e, c.skew[1] = t.skew[1] * e)
                    },
                    updateElement: function(e) {
                        W(e, c.asMatrix()), V(e, c.getProperties())
                    },
                    getCurrentState: function() {
                        return c
                    },
                    completed: function() {
                        return n.equilibrium || i
                    },
                    restart: function() {
                        n = C(e)
                    }
                }
            },
            x = function(e) {
                return e
            },
            P = function(e) {
                return (Math.cos(e * Math.PI + Math.PI) + 1) / 2
            },
            A = function(e) {
                return e * e
            },
            S = function(e) {
                return -Math.pow(e - 1, 2) + 1
            },
            C = function(e) {
                var t = F(e.startPosition, 0),
                    n = F(e.equilibriumPosition, 1),
                    i = F(e.initialVelocity, 0),
                    o = F(e.springConstant, .8),
                    a = F(e.springDeceleration, .9),
                    r = F(e.springMass, 10),
                    s = !1;
                return {
                    isSpring: !0,
                    tick: function(e, l) {
                        if (0 !== e && !l && !s) {
                            var u = -(t - n) * o,
                                c = u / r;
                            i += c, t += i, i *= a, Math.abs(t - n) < .001 && Math.abs(i) < .001 && (s = !0)
                        }
                    },
                    resetFrom: function(e) {
                        console.log("resetting spring from " + e), t = e, i = 0
                    },
                    getValue: function() {
                        return s ? n : t
                    },
                    completed: function() {
                        return s
                    }
                }
            },
            I = {
                linear: x,
                ease: P,
                easeIn: A,
                easeOut: S
            },
            E = function(e, t) {
                if ("spring" == e) return C(t);
                var n = e;
                q(e) || (n = I[e]);
                var i, o = n,
                    a = 0;
                return {
                    tick: function(e) {
                        a = o(e), i = e
                    },
                    resetFrom: function(e) {
                        i = 0
                    },
                    getValue: function() {
                        return a
                    },
                    completed: function() {
                        return i >= 1 ? i : !1
                    }
                }
            },
            T = function(e, t, n, i) {
                e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t, e[13] = n, e[14] = i, e[15] = 1
            },
            j = function(e, t) {
                e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = Math.cos(t), e[6] = -Math.sin(t), e[7] = 0, e[8] = 0, e[9] = Math.sin(t), e[10] = Math.cos(t), e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1
            },
            D = function(e, t) {
                e[0] = Math.cos(t), e[1] = 0, e[2] = Math.sin(t), e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = -Math.sin(t), e[9] = 0, e[10] = Math.cos(t), e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1
            },
            O = function(e, t) {
                e[0] = Math.cos(t), e[1] = -Math.sin(t), e[2] = 0, e[3] = 0, e[4] = Math.sin(t), e[5] = Math.cos(t), e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1
            },
            M = function(e, t, n) {
                e[0] = 1, e[1] = Math.tan(t), e[2] = 0, e[3] = 0, e[4] = Math.tan(n), e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1
            },
            R = function(e, t, n) {
                e[0] = t, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = n, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1
            },
            _ = function(e) {
                e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1
            },
            U = function(e, t) {
                t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]
            },
            B = function() {
                var e = new Float32Array(16),
                    t = new Float32Array(16),
                    n = new Float32Array(16);
                return _(e), {
                    data: e,
                    asCSS: function() {
                        for (var t = "matrix3d(", n = 0; 15 > n; ++n) t += Math.abs(e[n]) < 1e-4 ? "0," : e[n].toFixed(10) + ",";
                        return t += Math.abs(e[15]) < 1e-4 ? "0)" : e[15].toFixed(10) + ")"
                    },
                    clear: function() {
                        _(e)
                    },
                    translate: function(i, o, a) {
                        return U(e, t), T(n, i, o, a), z(t, n, e), this
                    },
                    rotateX: function(i) {
                        return U(e, t), j(n, i), z(t, n, e), this

                    },
                    rotateY: function(i) {
                        return U(e, t), D(n, i), z(t, n, e), this
                    },
                    rotateZ: function(i) {
                        return U(e, t), O(n, i), z(t, n, e), this
                    },
                    scale: function(i, o) {
                        return U(e, t), R(n, i, o), z(t, n, e), this
                    },
                    skew: function(i, o) {
                        return U(e, t), M(n, i, o), z(t, n, e), this
                    }
                }
            },
            z = function(e, t, n) {
                return n[0] = e[0] * t[0] + e[1] * t[4] + e[2] * t[8] + e[3] * t[12], n[1] = e[0] * t[1] + e[1] * t[5] + e[2] * t[9] + e[3] * t[13], n[2] = e[0] * t[2] + e[1] * t[6] + e[2] * t[10] + e[3] * t[14], n[3] = e[0] * t[3] + e[1] * t[7] + e[2] * t[11] + e[3] * t[15], n[4] = e[4] * t[0] + e[5] * t[4] + e[6] * t[8] + e[7] * t[12], n[5] = e[4] * t[1] + e[5] * t[5] + e[6] * t[9] + e[7] * t[13], n[6] = e[4] * t[2] + e[5] * t[6] + e[6] * t[10] + e[7] * t[14], n[7] = e[4] * t[3] + e[5] * t[7] + e[6] * t[11] + e[7] * t[15], n[8] = e[8] * t[0] + e[9] * t[4] + e[10] * t[8] + e[11] * t[12], n[9] = e[8] * t[1] + e[9] * t[5] + e[10] * t[9] + e[11] * t[13], n[10] = e[8] * t[2] + e[9] * t[6] + e[10] * t[10] + e[11] * t[14], n[11] = e[8] * t[3] + e[9] * t[7] + e[10] * t[11] + e[11] * t[15], n[12] = e[12] * t[0] + e[13] * t[4] + e[14] * t[8] + e[15] * t[12], n[13] = e[12] * t[1] + e[13] * t[5] + e[14] * t[9] + e[15] * t[13], n[14] = e[12] * t[2] + e[13] * t[6] + e[14] * t[10] + e[15] * t[14], n[15] = e[12] * t[3] + e[13] * t[7] + e[14] * t[11] + e[15] * t[15], n
            },
            L = function Z(e) {
                var t = B(),
                    n = {
                        opacity: void 0,
                        width: void 0,
                        height: void 0
                    };
                return {
                    position: e.position,
                    rotation: e.rotation,
                    rotationPost: e.rotationPost,
                    skew: e.skew,
                    scale: e.scale,
                    scalePost: e.scalePost,
                    opacity: e.opacity,
                    width: e.width,
                    height: e.height,
                    clone: function() {
                        return Z({
                            position: this.position ? this.position.slice(0) : void 0,
                            rotation: this.rotation ? this.rotation.slice(0) : void 0,
                            rotationPost: this.rotationPost ? this.rotationPost.slice(0) : void 0,
                            skew: this.skew ? this.skew.slice(0) : void 0,
                            scale: this.scale ? this.scale.slice(0) : void 0,
                            scalePost: this.scalePost ? this.scalePost.slice(0) : void 0,
                            height: this.height,
                            width: this.width,
                            opacity: this.opacity
                        })
                    },
                    asMatrix: function() {
                        var e = t;
                        return e.clear(), this.transformOrigin && e.translate(-this.transformOrigin[0], -this.transformOrigin[1], -this.transformOrigin[2]), this.scale && e.scale(this.scale[0], this.scale[1]), this.skew && e.skew(this.skew[0], this.skew[1]), this.rotation && (e.rotateX(this.rotation[0]), e.rotateY(this.rotation[1]), e.rotateZ(this.rotation[2])), this.position && e.translate(this.position[0], this.position[1], this.position[2]), this.rotationPost && (e.rotateX(this.rotationPost[0]), e.rotateY(this.rotationPost[1]), e.rotateZ(this.rotationPost[2])), this.scalePost && e.scale(this.scalePost[0], this.scalePost[1]), this.transformOrigin && e.translate(this.transformOrigin[0], this.transformOrigin[1], this.transformOrigin[2]), e
                    },
                    getProperties: function() {
                        return n.opacity = this.opacity, n.width = this.width + "px", n.height = this.height + "px", n
                    }
                }
            },
            N = function(e, t, n) {
                var i = e,
                    o = t,
                    a = n,
                    r = void 0 !== o.position,
                    s = void 0 !== o.rotation,
                    l = void 0 !== o.rotationPost,
                    u = void 0 !== o.scale,
                    c = void 0 !== o.scalePost,
                    d = void 0 !== o.skew,
                    f = void 0 !== o.width,
                    p = void 0 !== o.height,
                    h = void 0 !== o.opacity;
                return {
                    tween: function(e) {
                        if (r) {
                            var t = o.position[0] - i.position[0],
                                n = o.position[1] - i.position[1],
                                g = o.position[2] - i.position[2];
                            a.position[0] = i.position[0] + e * t, a.position[1] = i.position[1] + e * n, a.position[2] = i.position[2] + e * g
                        }
                        if (s) {
                            var m = o.rotation[0] - i.rotation[0],
                                v = o.rotation[1] - i.rotation[1],
                                w = o.rotation[2] - i.rotation[2];
                            a.rotation[0] = i.rotation[0] + e * m, a.rotation[1] = i.rotation[1] + e * v, a.rotation[2] = i.rotation[2] + e * w
                        }
                        if (l) {
                            var b = o.rotationPost[0] - i.rotationPost[0],
                                y = o.rotationPost[1] - i.rotationPost[1],
                                k = o.rotationPost[2] - i.rotationPost[2];
                            a.rotationPost[0] = i.rotationPost[0] + e * b, a.rotationPost[1] = i.rotationPost[1] + e * y, a.rotationPost[2] = i.rotationPost[2] + e * k
                        }
                        if (d) {
                            var x = o.skew[0] - i.skew[0],
                                P = o.skew[1] - i.skew[1];
                            a.skew[0] = i.skew[0] + e * x, a.skew[1] = i.skew[1] + e * P
                        }
                        if (u) {
                            var A = o.scale[0] - i.scale[0],
                                S = o.scale[1] - i.scale[1];
                            a.scale[0] = i.scale[0] + e * A, a.scale[1] = i.scale[1] + e * S
                        }
                        if (c) {
                            var C = o.scalePost[0] - i.scalePost[0],
                                I = o.scalePost[1] - i.scalePost[1];
                            a.scalePost[0] = i.scalePost[0] + e * C, a.scalePost[1] = i.scalePost[1] + e * I
                        }
                        if (f) {
                            var E = o.width - i.width;
                            a.width = i.width + e * E
                        }
                        if (p) {
                            var T = o.height - i.height;
                            a.height = i.height + e * T
                        }
                        if (h) {
                            var j = o.opacity - i.opacity;
                            a.opacity = i.opacity + e * j
                        }
                    },
                    asMatrix: function() {
                        return a.asMatrix()
                    },
                    getProperties: function() {
                        return a.getProperties()
                    },
                    setReverse: function() {
                        var e = i;
                        i = o, o = e
                    }
                }
            },
            H = function(e, t, n, i) {
                var o = e(0, B()),
                    a = t,
                    r = n,
                    s = i,
                    l = !1;
                return {
                    tween: function(t) {
                        l && (t = 1 - t), o.clear(), o = e(t, o);
                        var n = r.width - a.width,
                            i = r.height - a.height,
                            u = r.opacity - a.opacity;
                        void 0 !== r.width && (s.width = a.width + t * n), void 0 !== r.height && (s.height = a.height + t * i), void 0 !== r.opacity && (s.opacity = a.opacity + t * u)
                    },
                    asMatrix: function() {
                        return o
                    },
                    getProperties: function() {
                        return s.getProperties()
                    },
                    setReverse: function() {
                        l = !0
                    }
                }
            },
            F = function(e, t) {
                return "undefined" == typeof e ? t : e
            },
            W = function(e, t, n) {
                var o = "";
                n && (o = "perspective(" + n + "px) ");
                var a = t.asCSS();
                e.style[i] = o + a
            },
            V = function(e, t) {
                for (var n in t) e.style[n] = t[n]
            },
            q = function(e) {
                return "function" == typeof e
            },
            X = function(e) {
                if (!e) return e;
                var t = {};
                for (var n in e) t[n] = e[n];
                return t
            };
        return window.jQuery && !
        function(e) {
            e.fn.snabbt = function(e, t) {
                return r(this.get(), e, t)
            }
        }(jQuery), r.createMatrix = B, r.setElementTransform = W, r
    })
}, function(e, t, n) {
    var i;
/*! Hammer.JS - v2.0.6 - 2015-12-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2015 Jorik Tangelder;
 * Licensed under the  license */
    !
    function(o, a, r, s) {
        "use strict";
        function l(e, t, n) {
            return setTimeout(p(e, n), t)
        }
        function u(e, t, n) {
            return Array.isArray(e) ? (c(e, n[t], n), !0) : !1
        }
        function c(e, t, n) {
            var i;
            if (e) if (e.forEach) e.forEach(t, n);
            else if (e.length !== s) for (i = 0; i < e.length;) t.call(n, e[i], i, e), i++;
            else
            for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e)
        }
        function d(e, t, n) {
            var i = "DEPRECATED METHOD: " + t + "\n" + n + " AT \n";
            return function() {
                var t = new Error("get-stack-trace"),
                    n = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    a = o.console && (o.console.warn || o.console.log);
                return a && a.call(o.console, i, n), e.apply(this, arguments)
            }
        }
        function f(e, t, n) {
            var i, o = t.prototype;
            i = e.prototype = Object.create(o), i.constructor = e, i._super = o, n && de(i, n)
        }
        function p(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        function h(e, t) {
            return typeof e == he ? e.apply(t ? t[0] || s : s, t) : e
        }
        function g(e, t) {
            return e === s ? t : e
        }
        function m(e, t, n) {
            c(y(t), function(t) {
                e.addEventListener(t, n, !1)
            })
        }
        function v(e, t, n) {
            c(y(t), function(t) {
                e.removeEventListener(t, n, !1)
            })
        }
        function w(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        }
        function b(e, t) {
            return e.indexOf(t) > -1
        }
        function y(e) {
            return e.trim().split(/\s+/g)
        }
        function k(e, t, n) {
            if (e.indexOf && !n) return e.indexOf(t);
            for (var i = 0; i < e.length;) {
                if (n && e[i][n] == t || !n && e[i] === t) return i;
                i++
            }
            return -1
        }
        function x(e) {
            return Array.prototype.slice.call(e, 0)
        }
        function P(e, t, n) {
            for (var i = [], o = [], a = 0; a < e.length;) {
                var r = t ? e[a][t] : e[a];
                k(o, r) < 0 && i.push(e[a]), o[a] = r, a++
            }
            return n && (i = t ? i.sort(function(e, n) {
                return e[t] > n[t]
            }) : i.sort()), i
        }
        function A(e, t) {
            for (var n, i, o = t[0].toUpperCase() + t.slice(1), a = 0; a < fe.length;) {
                if (n = fe[a], i = n ? n + o : t, i in e) return i;
                a++
            }
            return s
        }
        function S() {
            return ye++
        }
        function C(e) {
            var t = e.ownerDocument || e;
            return t.defaultView || t.parentWindow || o
        }
        function I(e, t) {
            var n = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                h(e.options.enable, [e]) && n.handler(t)
            }, this.init()
        }
        function E(e) {
            var t, n = e.options.inputClass;
            return new(t = n ? n : Pe ? F : Ae ? q : xe ? Y : H)(e, T)
        }
        function T(e, t, n) {
            var i = n.pointers.length,
                o = n.changedPointers.length,
                a = t & je && i - o === 0,
                r = t & (Oe | Me) && i - o === 0;
            n.isFirst = !! a, n.isFinal = !! r, a && (e.session = {}), n.eventType = t, j(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
        }
        function j(e, t) {
            var n = e.session,
                i = t.pointers,
                o = i.length;
            n.firstInput || (n.firstInput = M(t)), o > 1 && !n.firstMultiple ? n.firstMultiple = M(t) : 1 === o && (n.firstMultiple = !1);
            var a = n.firstInput,
                r = n.firstMultiple,
                s = r ? r.center : a.center,
                l = t.center = R(i);
            t.timeStamp = ve(), t.deltaTime = t.timeStamp - a.timeStamp, t.angle = z(s, l), t.distance = B(s, l), D(n, t), t.offsetDirection = U(t.deltaX, t.deltaY);
            var u = _(t.deltaTime, t.deltaX, t.deltaY);
            t.overallVelocityX = u.x, t.overallVelocityY = u.y, t.overallVelocity = me(u.x) > me(u.y) ? u.x : u.y, t.scale = r ? N(r.pointers, i) : 1, t.rotation = r ? L(r.pointers, i) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length, O(n, t);
            var c = e.element;
            w(t.srcEvent.target, c) && (c = t.srcEvent.target), t.target = c
        }
        function D(e, t) {
            var n = t.center,
                i = e.offsetDelta || {},
                o = e.prevDelta || {},
                a = e.prevInput || {};
            t.eventType !== je && a.eventType !== Oe || (o = e.prevDelta = {
                x: a.deltaX || 0,
                y: a.deltaY || 0
            }, i = e.offsetDelta = {
                x: n.x,
                y: n.y
            }), t.deltaX = o.x + (n.x - i.x), t.deltaY = o.y + (n.y - i.y)
        }
        function O(e, t) {
            var n, i, o, a, r = e.lastInterval || t,
                l = t.timeStamp - r.timeStamp;
            if (t.eventType != Me && (l > Te || r.velocity === s)) {
                var u = t.deltaX - r.deltaX,
                    c = t.deltaY - r.deltaY,
                    d = _(l, u, c);
                i = d.x, o = d.y, n = me(d.x) > me(d.y) ? d.x : d.y, a = U(u, c), e.lastInterval = t
            } else n = r.velocity, i = r.velocityX, o = r.velocityY, a = r.direction;
            t.velocity = n, t.velocityX = i, t.velocityY = o, t.direction = a
        }
        function M(e) {
            for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
                clientX: ge(e.pointers[n].clientX),
                clientY: ge(e.pointers[n].clientY)
            }, n++;
            return {
                timeStamp: ve(),
                pointers: t,
                center: R(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }
        function R(e) {
            var t = e.length;
            if (1 === t) return {
                x: ge(e[0].clientX),
                y: ge(e[0].clientY)
            };
            for (var n = 0, i = 0, o = 0; t > o;) n += e[o].clientX, i += e[o].clientY, o++;
            return {
                x: ge(n / t),
                y: ge(i / t)
            }
        }
        function _(e, t, n) {
            return {
                x: t / e || 0,
                y: n / e || 0
            }
        }
        function U(e, t) {
            return e === t ? Re : me(e) >= me(t) ? 0 > e ? _e : Ue : 0 > t ? Be : ze
        }
        function B(e, t, n) {
            n || (n = Fe);
            var i = t[n[0]] - e[n[0]],
                o = t[n[1]] - e[n[1]];
            return Math.sqrt(i * i + o * o)
        }
        function z(e, t, n) {
            n || (n = Fe);
            var i = t[n[0]] - e[n[0]],
                o = t[n[1]] - e[n[1]];
            return 180 * Math.atan2(o, i) / Math.PI
        }
        function L(e, t) {
            return z(t[1], t[0], We) + z(e[1], e[0], We)
        }
        function N(e, t) {
            return B(t[0], t[1], We) / B(e[0], e[1], We)
        }
        function H() {
            this.evEl = qe, this.evWin = Xe, this.allow = !0, this.pressed = !1, I.apply(this, arguments)
        }
        function F() {
            this.evEl = Qe, this.evWin = Je, I.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        function W() {
            this.evTarget = Ke, this.evWin = $e, this.started = !1, I.apply(this, arguments)
        }
        function V(e, t) {
            var n = x(e.touches),
                i = x(e.changedTouches);
            return t & (Oe | Me) && (n = P(n.concat(i), "identifier", !0)), [n, i]
        }
        function q() {
            this.evTarget = tt, this.targetIds = {}, I.apply(this, arguments)
        }
        function X(e, t) {
            var n = x(e.touches),
                i = this.targetIds;
            if (t & (je | De) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
            var o, a, r = x(e.changedTouches),
                s = [],
                l = this.target;
            if (a = n.filter(function(e) {
                return w(e.target, l)
            }), t === je) for (o = 0; o < a.length;) i[a[o].identifier] = !0, o++;
            for (o = 0; o < r.length;) i[r[o].identifier] && s.push(r[o]), t & (Oe | Me) && delete i[r[o].identifier], o++;
            return s.length ? [P(a.concat(s), "identifier", !0), s] : void 0
        }
        function Y() {
            I.apply(this, arguments);
            var e = p(this.handler, this);
            this.touch = new q(this.manager, e), this.mouse = new H(this.manager, e)
        }
        function Z(e, t) {
            this.manager = e, this.set(t)
        }
        function Q(e) {
            if (b(e, st)) return st;
            var t = b(e, lt),
                n = b(e, ut);
            return t && n ? st : t || n ? t ? lt : ut : b(e, rt) ? rt : at
        }
        function J(e) {
            this.options = de({}, this.defaults, e || {}), this.id = S(), this.manager = null, this.options.enable = g(this.options.enable, !0), this.state = ct, this.simultaneous = {}, this.requireFail = []
        }
        function G(e) {
            return e & gt ? "cancel" : e & pt ? "end" : e & ft ? "move" : e & dt ? "start" : ""
        }
        function K(e) {
            return e == ze ? "down" : e == Be ? "up" : e == _e ? "left" : e == Ue ? "right" : ""
        }
        function $(e, t) {
            var n = t.manager;
            return n ? n.get(e) : e
        }
        function ee() {
            J.apply(this, arguments)
        }
        function te() {
            ee.apply(this, arguments), this.pX = null, this.pY = null
        }
        function ne() {
            ee.apply(this, arguments)
        }
        function ie() {
            J.apply(this, arguments), this._timer = null, this._input = null
        }
        function oe() {
            ee.apply(this, arguments)
        }
        function ae() {
            ee.apply(this, arguments)
        }
        function re() {
            J.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }
        function se(e, t) {
            return t = t || {}, t.recognizers = g(t.recognizers, se.defaults.preset), new le(e, t)
        }
        function le(e, t) {
            this.options = de({}, se.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = e, this.input = E(this), this.touchAction = new Z(this, this.options.touchAction), ue(this, !0), c(this.options.recognizers, function(e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
            }, this)
        }
        function ue(e, t) {
            var n = e.element;
            n.style && c(e.options.cssProps, function(e, i) {
                n.style[A(n.style, i)] = t ? e : ""
            })
        }
        function ce(e, t) {
            var n = a.createEvent("Event");
            n.initEvent(e, !0, !0), n.gesture = t, t.target.dispatchEvent(n)
        }
        var de, fe = ["", "webkit", "Moz", "MS", "ms", "o"],
            pe = a.createElement("div"),
            he = "function",
            ge = Math.round,
            me = Math.abs,
            ve = Date.now;
        de = "function" != typeof Object.assign ?
        function(e) {
            if (e === s || null === e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (i !== s && null !== i) for (var o in i) i.hasOwnProperty(o) && (t[o] = i[o])
            }
            return t
        } : Object.assign;
        var we = d(function(e, t, n) {
            for (var i = Object.keys(t), o = 0; o < i.length;)(!n || n && e[i[o]] === s) && (e[i[o]] = t[i[o]]), o++;
            return e
        }, "extend", "Use `assign`."),
            be = d(function(e, t) {
                return we(e, t, !0)
            }, "merge", "Use `assign`."),
            ye = 1,
            ke = /mobile|tablet|ip(ad|hone|od)|android/i,
            xe = "ontouchstart" in o,
            Pe = A(o, "PointerEvent") !== s,
            Ae = xe && ke.test(navigator.userAgent),
            Se = "touch",
            Ce = "pen",
            Ie = "mouse",
            Ee = "kinect",
            Te = 25,
            je = 1,
            De = 2,
            Oe = 4,
            Me = 8,
            Re = 1,
            _e = 2,
            Ue = 4,
            Be = 8,
            ze = 16,
            Le = _e | Ue,
            Ne = Be | ze,
            He = Le | Ne,
            Fe = ["x", "y"],
            We = ["clientX", "clientY"];
        I.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(C(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(C(this.element), this.evWin, this.domHandler)
            }
        };
        var Ve = {
            mousedown: je,
            mousemove: De,
            mouseup: Oe
        },
            qe = "mousedown",
            Xe = "mousemove mouseup";
        f(H, I, {
            handler: function(e) {
                var t = Ve[e.type];
                t & je && 0 === e.button && (this.pressed = !0), t & De && 1 !== e.which && (t = Oe), this.pressed && this.allow && (t & Oe && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: Ie,
                    srcEvent: e
                }))
            }
        });
        var Ye = {
            pointerdown: je,
            pointermove: De,
            pointerup: Oe,
            pointercancel: Me,
            pointerout: Me
        },
            Ze = {
                2: Se,
                3: Ce,
                4: Ie,
                5: Ee
            },
            Qe = "pointerdown",
            Je = "pointermove pointerup pointercancel";
        o.MSPointerEvent && !o.PointerEvent && (Qe = "MSPointerDown", Je = "MSPointerMove MSPointerUp MSPointerCancel"), f(F, I, {
            handler: function(e) {
                var t = this.store,
                    n = !1,
                    i = e.type.toLowerCase().replace("ms", ""),
                    o = Ye[i],
                    a = Ze[e.pointerType] || e.pointerType,
                    r = a == Se,
                    s = k(t, e.pointerId, "pointerId");
                o & je && (0 === e.button || r) ? 0 > s && (t.push(e), s = t.length - 1) : o & (Oe | Me) && (n = !0), 0 > s || (t[s] = e, this.callback(this.manager, o, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: a,
                    srcEvent: e
                }), n && t.splice(s, 1))
            }
        });
        var Ge = {
            touchstart: je,
            touchmove: De,
            touchend: Oe,
            touchcancel: Me
        },
            Ke = "touchstart",
            $e = "touchstart touchmove touchend touchcancel";
        f(W, I, {
            handler: function(e) {
                var t = Ge[e.type];
                if (t === je && (this.started = !0), this.started) {
                    var n = V.call(this, e, t);
                    t & (Oe | Me) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, t, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: Se,
                        srcEvent: e
                    })
                }
            }
        });
        var et = {
            touchstart: je,
            touchmove: De,
            touchend: Oe,
            touchcancel: Me
        },
            tt = "touchstart touchmove touchend touchcancel";
        f(q, I, {
            handler: function(e) {
                var t = et[e.type],
                    n = X.call(this, e, t);
                n && this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: Se,
                    srcEvent: e
                })
            }
        }), f(Y, I, {
            handler: function(e, t, n) {
                var i = n.pointerType == Se,
                    o = n.pointerType == Ie;
                if (i) this.mouse.allow = !1;
                else if (o && !this.mouse.allow) return;
                t & (Oe | Me) && (this.mouse.allow = !0), this.callback(e, t, n)
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var nt = A(pe.style, "touchAction"),
            it = nt !== s,
            ot = "compute",
            at = "auto",
            rt = "manipulation",
            st = "none",
            lt = "pan-x",
            ut = "pan-y";
        Z.prototype = {
            set: function(e) {
                e == ot && (e = this.compute()), it && this.manager.element.style && (this.manager.element.style[nt] = e), this.actions = e.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var e = [];
                return c(this.manager.recognizers, function(t) {
                    h(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                }), Q(e.join(" "))
            },
            preventDefaults: function(e) {
                if (!it) {
                    var t = e.srcEvent,
                        n = e.offsetDirection;
                    if (this.manager.session.prevented) return void t.preventDefault();
                    var i = this.actions,
                        o = b(i, st),
                        a = b(i, ut),
                        r = b(i, lt);
                    if (o) {
                        var s = 1 === e.pointers.length,
                            l = e.distance < 2,
                            u = e.deltaTime < 250;
                        if (s && l && u) return
                    }
                    if (!r || !a) return o || a && n & Le || r && n & Ne ? this.preventSrc(t) : void 0
                }
            },
            preventSrc: function(e) {
                this.manager.session.prevented = !0, e.preventDefault()
            }
        };
        var ct = 1,
            dt = 2,
            ft = 4,
            pt = 8,
            ht = pt,
            gt = 16,
            mt = 32;
        J.prototype = {
            defaults: {},
            set: function(e) {
                return de(this.options, e), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(e) {
                if (u(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return e = $(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
            },
            dropRecognizeWith: function(e) {
                return u(e, "dropRecognizeWith", this) ? this : (e = $(e, this), delete this.simultaneous[e.id], this)
            },
            requireFailure: function(e) {
                if (u(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return e = $(e, this), -1 === k(t, e) && (t.push(e), e.requireFailure(this)), this
            },
            dropRequireFailure: function(e) {
                if (u(e, "dropRequireFailure", this)) return this;
                e = $(e, this);
                var t = k(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(e) {
                return !!this.simultaneous[e.id]
            },
            emit: function(e) {
                function t(t) {
                    n.manager.emit(t, e)
                }
                var n = this,
                    i = this.state;
                pt > i && t(n.options.event + G(i)), t(n.options.event), e.additionalEvent && t(e.additionalEvent), i >= pt && t(n.options.event + G(i))
            },
            tryEmit: function(e) {
                return this.canEmit() ? this.emit(e) : void(this.state = mt)
            },
            canEmit: function() {
                for (var e = 0; e < this.requireFail.length;) {
                    if (!(this.requireFail[e].state & (mt | ct))) return !1;
                    e++
                }
                return !0
            },
            recognize: function(e) {
                var t = de({}, e);
                return h(this.options.enable, [this, t]) ? (this.state & (ht | gt | mt) && (this.state = ct), this.state = this.process(t), void(this.state & (dt | ft | pt | gt) && this.tryEmit(t))) : (this.reset(), void(this.state = mt))
            },
            process: function(e) {},
            getTouchAction: function() {},
            reset: function() {}
        }, f(ee, J, {
            defaults: {
                pointers: 1
            },
            attrTest: function(e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            },
            process: function(e) {
                var t = this.state,
                    n = e.eventType,
                    i = t & (dt | ft),
                    o = this.attrTest(e);
                return i && (n & Me || !o) ? t | gt : i || o ? n & Oe ? t | pt : t & dt ? t | ft : dt : mt
            }
        }), f(te, ee, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: He
            },
            getTouchAction: function() {
                var e = this.options.direction,
                    t = [];
                return e & Le && t.push(ut), e & Ne && t.push(lt), t
            },
            directionTest: function(e) {
                var t = this.options,
                    n = !0,
                    i = e.distance,
                    o = e.direction,
                    a = e.deltaX,
                    r = e.deltaY;
                return o & t.direction || (t.direction & Le ? (o = 0 === a ? Re : 0 > a ? _e : Ue, n = a != this.pX, i = Math.abs(e.deltaX)) : (o = 0 === r ? Re : 0 > r ? Be : ze, n = r != this.pY, i = Math.abs(e.deltaY))), e.direction = o, n && i > t.threshold && o & t.direction
            },
            attrTest: function(e) {
                return ee.prototype.attrTest.call(this, e) && (this.state & dt || !(this.state & dt) && this.directionTest(e))
            },
            emit: function(e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var t = K(e.direction);
                t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
            }
        }), f(ne, ee, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [st]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & dt)
            },
            emit: function(e) {
                if (1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    e.additionalEvent = this.options.event + t
                }
                this._super.emit.call(this, e)
            }
        }), f(ie, J, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [at]
            },
            process: function(e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    i = e.distance < t.threshold,
                    o = e.deltaTime > t.time;
                if (this._input = e, !i || !n || e.eventType & (Oe | Me) && !o) this.reset();
                else if (e.eventType & je) this.reset(), this._timer = l(function() {
                    this.state = ht, this.tryEmit()
                }, t.time, this);
                else if (e.eventType & Oe) return ht;
                return mt
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(e) {
                this.state === ht && (e && e.eventType & Oe ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ve(), this.manager.emit(this.options.event, this._input)))
            }
        }), f(oe, ee, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [st]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & dt)
            }
        }), f(ae, ee, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: Le | Ne,
                pointers: 1
            },
            getTouchAction: function() {
                return te.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var t, n = this.options.direction;
                return n & (Le | Ne) ? t = e.overallVelocity : n & Le ? t = e.overallVelocityX : n & Ne && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && me(t) > this.options.velocity && e.eventType & Oe
            },
            emit: function(e) {
                var t = K(e.offsetDirection);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
            }
        }), f(re, J, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [rt]
            },
            process: function(e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    i = e.distance < t.threshold,
                    o = e.deltaTime < t.time;
                if (this.reset(), e.eventType & je && 0 === this.count) return this.failTimeout();
                if (i && o && n) {
                    if (e.eventType != Oe) return this.failTimeout();
                    var a = this.pTime ? e.timeStamp - this.pTime < t.interval : !0,
                        r = !this.pCenter || B(this.pCenter, e.center) < t.posThreshold;
                    this.pTime = e.timeStamp, this.pCenter = e.center, r && a ? this.count += 1 : this.count = 1, this._input = e;
                    var s = this.count % t.taps;
                    if (0 === s) return this.hasRequireFailures() ? (this._timer = l(function() {
                        this.state = ht, this.tryEmit()
                    }, t.interval, this), dt) : ht
                }
                return mt
            },
            failTimeout: function() {
                return this._timer = l(function() {
                    this.state = mt
                }, this.options.interval, this), mt
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == ht && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), se.VERSION = "2.0.6", se.defaults = {
            domEvents: !1,
            touchAction: ot,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [oe,
                {
                    enable: !1
                }],
                [ne,
                {
                    enable: !1
                }, ["rotate"]],
                [ae,
                {
                    direction: Le
                }],
                [te,
                {
                    direction: Le
                }, ["swipe"]],
                [re],
                [re,
                {
                    event: "doubletap",
                    taps: 2
                }, ["tap"]],
                [ie]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var vt = 1,
            wt = 2;
        le.prototype = {
            set: function(e) {
                return de(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
            },
            stop: function(e) {
                this.session.stopped = e ? wt : vt
            },
            recognize: function(e) {
                var t = this.session;
                if (!t.stopped) {
                    this.touchAction.preventDefaults(e);
                    var n, i = this.recognizers,
                        o = t.curRecognizer;
                    (!o || o && o.state & ht) && (o = t.curRecognizer = null);
                    for (var a = 0; a < i.length;) n = i[a], t.stopped === wt || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(e), !o && n.state & (dt | ft | pt) && (o = t.curRecognizer = n), a++
                }
            },
            get: function(e) {
                if (e instanceof J) return e;
                for (var t = this.recognizers, n = 0; n < t.length; n++) if (t[n].options.event == e) return t[n];
                return null
            },
            add: function(e) {
                if (u(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
            },
            remove: function(e) {
                if (u(e, "remove", this)) return this;
                if (e = this.get(e)) {
                    var t = this.recognizers,
                        n = k(t, e); - 1 !== n && (t.splice(n, 1), this.touchAction.update())
                }
                return this
            },
            on: function(e, t) {
                var n = this.handlers;
                return c(y(e), function(e) {
                    n[e] = n[e] || [], n[e].push(t)
                }), this
            },
            off: function(e, t) {
                var n = this.handlers;
                return c(y(e), function(e) {
                    t ? n[e] && n[e].splice(k(n[e], t), 1) : delete n[e]
                }), this
            },
            emit: function(e, t) {
                this.options.domEvents && ce(e, t);
                var n = this.handlers[e] && this.handlers[e].slice();
                if (n && n.length) {
                    t.type = e, t.preventDefault = function() {
                        t.srcEvent.preventDefault()
                    };
                    for (var i = 0; i < n.length;) n[i](t), i++
                }
            },
            destroy: function() {
                this.element && ue(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, de(se, {
            INPUT_START: je,
            INPUT_MOVE: De,
            INPUT_END: Oe,
            INPUT_CANCEL: Me,
            STATE_POSSIBLE: ct,
            STATE_BEGAN: dt,
            STATE_CHANGED: ft,
            STATE_ENDED: pt,
            STATE_RECOGNIZED: ht,
            STATE_CANCELLED: gt,
            STATE_FAILED: mt,
            DIRECTION_NONE: Re,
            DIRECTION_LEFT: _e,
            DIRECTION_RIGHT: Ue,
            DIRECTION_UP: Be,
            DIRECTION_DOWN: ze,
            DIRECTION_HORIZONTAL: Le,
            DIRECTION_VERTICAL: Ne,
            DIRECTION_ALL: He,
            Manager: le,
            Input: I,
            TouchAction: Z,
            TouchInput: q,
            MouseInput: H,
            PointerEventInput: F,
            TouchMouseInput: Y,
            SingleTouchInput: W,
            Recognizer: J,
            AttrRecognizer: ee,
            Tap: re,
            Pan: te,
            Swipe: ae,
            Pinch: ne,
            Rotate: oe,
            Press: ie,
            on: m,
            off: v,
            each: c,
            merge: be,
            extend: we,
            assign: de,
            inherit: f,
            bindFn: p,
            prefixed: A
        });
        var bt = "undefined" != typeof o ? o : "undefined" != typeof self ? self : {};
        bt.Hammer = se, i = function() {
            return se
        }.call(t, n, t, e), !(i !== s && (e.exports = i))
    }(window, document, "Hammer")
}, function(e, t) {
    "use strict";
    function n(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    var i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
    e.exports = Object.assign ||
    function(e, t) {
        for (var a, r, s = n(e), l = 1; l < arguments.length; l++) {
            a = Object(arguments[l]);
            for (var u in a) i.call(a, u) && (s[u] = a[u]);
            if (Object.getOwnPropertySymbols) {
                r = Object.getOwnPropertySymbols(a);
                for (var c = 0; c < r.length; c++) o.call(a, r[c]) && (s[r[c]] = a[r[c]])
            }
        }
        return s
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        pButtonSvg: {
            "1.png": "1.svg",
            "2.png": "2.svg",
            "02.png": "02.svg",
            "3.png": "3.svg",
            "03.png": "03.svg",
            "4.png": "4.svg",
            "04.png": "04.svg",
            "5.png": "5.svg",
            "05.png": "05.svg",
            "6.png": "6.svg",
            "7.png": "7.svg",
            "8.png": "8.svg",
            "9.png": "9.svg"
        }
    };
    t["default"] = n, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(10),
        u = i(l),
        c = n(1),
        d = (i(c), n(11)),
        f = i(d),
        p = function() {
            function e(t, n) {
                o(this, e), t.content.data = t.content.data.reduce(function(e, t, n, i) {
                    return null !== t && t.name ? e.push(t) : e, e
                }, []), this.obj = t, this.height = t.height || t.h, this.width = t.width || t.w, this.top = t.top, this.left = t.left, this.scale = n, this.showSwipe = this._getShowSwipe(t), this.curChartIndex = 0, this.chartNumber = t.content.data.length, this.chartOption = this._prepareChartOption(), this._prepareElements()
            }
            return a(e, [{
                key: "_getShowSwipe",
                value: function(e) {
                    return 1 === e.content.multiple
                }
            },
            {
                key: "_prepareElements",
                value: function() {
                    this.showSwipe && this._prepareSwipeImgElm(), this._prepareChartElm(), this._prepareWrapperElm()
                }
            },
            {
                key: "_prepareWrapperElm",
                value: function() {
                    this.wrapperElm = (0, s["default"])('<div class="chart-wrapper"></div>'), this.wrapperElm.css({
                        position: "absolute",
                        width: this.scale(this.width),
                        height: this.scale(this.height),
                        left: this.scale(this.left),
                        top: this.scale(this.top),
                        background: "rgba(0,0,0,0)"
                    }), this.showSwipe && this.wrapperElm.append(this.swipeImgElm), this.wrapperElm.append(this.chartElm)
                }
            },
            {
                key: "_prepareSwipeImgElm",
                value: function() {
                    return this.swipeImgElm = (0, s["default"])('<img src="images/swiper/swipewarn.png"></img>'), this.swipeImgElm.css({
                        position: "absolute",
                        width: this.scale(180),
                        left: this.scale(230),
                        marginTop: this.scale(-90),
                        top: "50%",
                        display: "none",
                        "z-index": 99
                    }), this.swipeImgElm
                }
            },
            {
                key: "_prepareChartElm",
                value: function() {
                    var e = this;
                    if (this.chartElm = (0, s["default"])('<div class="chart"></div>'), this.chartElm.css({
                        position: "absolute",
                        width: this.scale(this.width),
                        height: this.scale(this.height),
                        left: 0,
                        top: this.showSwipe ? 50 : 0,
                        "z-index": 0
                    }), this.showSwipe) {
                        var t = new u["default"](this.chartElm[0]);
                        t.on("swipeleft", function() {
                            e._renderSwipeLegend && e._renderSwipeLegend(!1), e.curChartIndex = (e.curChartIndex - 1 + e.chartNumber) % e.chartNumber, e._renderSwipeLegend && e._renderSwipeLegend(!0), e.singleSeries(e.curChartIndex, e.obj.content.type)
                        }), t.on("swiperight", function() {
                            e._renderSwipeLegend && e._renderSwipeLegend(!1), e.curChartIndex = (e.curChartIndex + 1) % e.chartNumber, e._renderSwipeLegend && e._renderSwipeLegend(!0), e.singleSeries(e.curChartIndex, e.obj.content.type)
                        })
                    }
                    return this.chartElm
                }
            },
            {
                key: "_prepareChartOption",
                value: function() {
                    var e = this.obj.content,
                        t = e.options,
                        n = "14px",
                        i = t.lineColor || "#b3b3b3",
                        o = 3 === e.multiple ? "normal" : null,
                        a = e.data,
                        r = t.colors,
                        s = this,
                        l = {
                            chart: {
                                type: e.type,
                                backgroundColor: t.backgroundColor,
                                plotBorderWidth: "pie" == e.type ? 0 : 1,
                                animation: {
                                    duration: 300
                                }
                            },
                            title: {
                                text: null
                            },
                            colors: r,
                            legend: {
                                symbolWidth: 14,
                                symbolHeight: 14,
                                itemStyle: {
                                    color: i,
                                    fontSize: "12px"
                                }
                            },
                            credits: {
                                enabled: !1
                            },
                            tooltip: {
                                style: {
                                    fontSize: n
                                }
                            },
                            series: a
                        };
                    return "pie" !== e.type && (l = (0, f["default"])({}, l, {
                        plotOptions: {
                            line: {
                                dataLabels: {
                                    enabled: !0
                                }
                            },
                            column: {
                                borderWidth: 0,
                                stacking: o
                            },
                            bar: {
                                borderWidth: 0,
                                stacking: o
                            },
                            area: {
                                stacking: "normal"
                            }
                        },
                        xAxis: {
                            lineColor: i,
                            gridLineColor: i,
                            categories: t.xAxis.categories,
                            labels: {
                                staggerLines: 1,
                                distance: 50,
                                style: {
                                    paddingTop: "30px",
                                    color: i
                                }
                            }
                        },
                        yAxis: {
                            lineColor: i,
                            gridLineColor: i,
                            max: t.yAxis.max || null,
                            min: t.yAxis.min || null,
                            title: {
                                text: t.yAxis.title.text,
                                style: {
                                    color: i
                                }
                            },
                            labels: {
                                style: {
                                    fontSize: n,
                                    color: i
                                }
                            }
                        }
                    }), l.plotOptions[e.type].events = {
                        legendItemClick: function(t) {
                            return 1 === e.multiple ? (setTimeout(function(t) {
                                return function() {
                                    s.singleSeries(t, e.type)
                                }
                            }(this.index), 0), !1) : void 0
                        }
                    }), l
                }
            },
            {
                key: "_renderHighcharts",
                value: function() {
                    this.curChart = window.Highcharts.createChart(this.chartElm[0], this.chartOption), this.showSwipe && this.singleSeries(0, this.obj.content.type), this.swipeImgElm && this.swipeImgElm.hide()
                }
            },
            {
                key: "_renderSwipeImg",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        e.swipeImgElm && e.obj.content.data.length > 1 && e.swipeImgElm.fadeIn()
                    }.bind(this), 700), setTimeout(function() {
                        e.swipeImgElm && e.swipeImgElm.fadeOut()
                    }.bind(this), 3500)
                }
            },
            {
                key: "singleSeries",
                value: function(e, t) {
                    "pie" === t && this.chartOption.series.forEach(function(t, n) {
                        t.showInLegend = e == n
                    }), window.Highcharts.destroy(this.curChart), this.chartOption.series.forEach(function(t, n) {
                        t.visible = e == n
                    }), this.curChart = window.Highcharts.createChart(this.chartElm[0], this.chartOption)
                }
            },
            {
                key: "render",
                value: function() {
                    this._renderHighcharts(), this._renderSwipeImg()
                }
            },
            {
                key: "getElement",
                value: function() {
                    return this.wrapperElm
                }
            }]), e
        }();
    t["default"] = p, e.exports = t["default"]
}, function(e, t) {
    (function(t) {
        "use strict";
        function n(e) {
            s.length || (r(), l = !0), s[s.length] = e
        }
        function i() {
            for (; u < s.length;) {
                var e = u;
                if (u += 1, s[e].call(), u > c) {
                    for (var t = 0, n = s.length - u; n > t; t++) s[t] = s[t + u];
                    s.length -= u, u = 0
                }
            }
            s.length = 0, u = 0, l = !1
        }
        function o(e) {
            var t = 1,
                n = new d(e),
                i = document.createTextNode("");
            return n.observe(i, {
                characterData: !0
            }), function() {
                t = -t, i.data = t
            }
        }
        function a(e) {
            return function() {
                function t() {
                    clearTimeout(n), clearInterval(i), e()
                }
                var n = setTimeout(t, 0),
                    i = setInterval(t, 50)
            }
        }
        e.exports = n;
        var r, s = [],
            l = !1,
            u = 0,
            c = 1024,
            d = t.MutationObserver || t.WebKitMutationObserver;
        r = "function" == typeof d ? o(i) : a(i), n.requestFlush = r, n.makeRequestCallFromTimer = a
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        p["default"].log(t), "undefined" != typeof e && e.config({
            debug: window.Config.isWxDebug(),
            appId: t.wechat.appId,
            timestamp: t.wechat.timestamp,
            nonceStr: t.wechat.nonceStr,
            signature: t.wechat.signature,
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
        })
    }
    function a(e, t, n) {
        console.log("jdkready"), "undefined" != typeof e && e.ready(function() {
            e.onMenuShareAppMessage({
                title: t.title,
                desc: t.content,
                link: t.link,
                imgUrl: t.thumb,
                type: "",
                configUrl: "",
                success: function() {
                    "undefined" != typeof DS && DS.sendRepost("appMessage")
                },
                cancel: function() {}
            }), e.onMenuShareTimeline({
                title: n ? t.content : t.title,
                link: t.link,
                imgUrl: t.thumb,
                success: function() {
                    "undefined" != typeof DS && DS.sendRepost("timeline")
                },
                cancel: function() {}
            }), e.onMenuShareQQ({
                title: t.title,
                desc: t.content,
                link: t.link,
                imgUrl: t.thumb,
                success: function() {
                    "undefined" != typeof DS && DS.sendRepost("QQ")
                },
                cancel: function() {}
            }), e.onMenuShareWeibo({
                title: t.title,
                desc: t.content,
                link: t.link,
                imgUrl: t.thumb,
                success: function() {
                    "undefined" != typeof DS && DS.sendRepost("Weibo")
                },
                cancel: function() {}
            })
        })
    }
    function r(e, t) {
        d["default"].getJSON(window.Config.getWxKeyURL(), function(n) {
            200 === n.code && (e.wechat = n.data.wechat, t(e))
        })
    }
    function s(e) {
        window.Config.isTurnOffOssCrop() || e.thumb.indexOf("img1.maka.im") > 0 && (e.thumb.indexOf("@") > 0 ? e.thumb = e.thumb + "_100w" : e.thumb = e.thumb + "@100w")
    }
    function l(e) {
        s(e), r(e, function(e) {
            var t = window.wx,
                n = void 0,
                i = g["default"].isADtrans();
            e.link = n = window.location.host + "/k/" + e.id, i && (e.link = e.link + "?task_id=" + p["default"].getUrlParameter("task_id") + "&member_id=" + p["default"].getUrlParameter("member_id")), o(t, e), a(t, e), "undefined" != typeof DS && DS.ready(function() {
                e.link = DS.linkChange(n), i && (e.link = e.link + "&task_id=" + p["default"].getUrlParameter("task_id") + "&member_id=" + p["default"].getUrlParameter("member_id")), o(window.wx, e), a(window.wx, e)
            })
        })
    }
    function u(e) {
        var t = (0, v["default"])({}, window.projectVersion, e),
            n = t.link,
            i = g["default"].isADtrans();
        i && (t.link = t.link + "?task_id=" + p["default"].getUrlParameter("task_id") + "&member_id=" + p["default"].getUrlParameter("member_id")), a(window.wx, t, !0), "undefined" != typeof DS && DS.ready(function() {
            t.link = DS.linkChange(n), i && (t.link = t.link + "&task_id=" + p["default"].getUrlParameter("task_id") + "&member_id=" + p["default"].getUrlParameter("member_id")), a(window.wx, t, !0)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = n(2),
        d = i(c),
        f = n(1),
        p = i(f),
        h = n(3),
        g = i(h),
        m = n(11),
        v = i(m);
    t["default"] = {
        init: l,
        wxReconfig: u
    }, e.exports = t["default"]
}, , function(e, t, n) {
    var i = n(18);
    e.exports = i
}, function(e, t) {
    (function() {
        var t, n, i;
        i = null, t = function() {
            return i = document.createElement("style"), document.head.appendChild(i)
        }, n = function(e) {
            var t;
            return t = i.sheet, t.insertRule(e, t.cssRules.length), i
        }, n.reset = function() {
            return document.head.removeChild(i), t()
        }, n.newStyle = function() {
            return t()
        }, t(), e.exports = n
    }).call(this)
}, function(e, t) {
    "use strict";
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        o = function() {
            function e() {
                n(this, e)
            }
            return i(e, [{
                key: "stopAnimation",
                value: function(e) {
                    if (this.getInEffect(e)) {
                        var t = this.getInEffect(e),
                            n = e.dom.children().first();
                        n.addClass(t.show), n.addClass("animated"), n.css({
                            animation: t.show + " " + t.speed + "ms ease " + t.delay + "ms both",
                            "animation-play-state": "paused"
                        })
                    }
                }
            },
            {
                key: "getInEffect",
                value: function(e) {
                    var t = {};
                    return e.animationVersion && 1 === e.animationVersion || e.elementAnimations && e.elementAnimations.animation_in && e.elementAnimations.animation_in.show ? (t.show = e.elementAnimations.animation_in.show, t.delay = e.elementAnimations.animation_in.delay, t.delay > 0 && t.delay < 10 && (t.delay = 1e3 * t.delay), t.speed = e.elementAnimations.animation_in.speed, t.speed > 0 && t.speed < 10 && (t.speed = 1e3 * t.speed)) : (t.show = e.show, t.delay = e.delay, t.speed = e.speed), "" !== t.show && "noeffect" !== t.show && t.show || (t = !1), e.forceNoEffect && (t = !1), t
                }
            },
            {
                key: "actAnimation",
                value: function(e) {
                    var t = this.getInEffect(e);
                    if (t && e.dom) {
                        var n = e.dom.children().first();
                        t && n.css({
                            "animation-play-state": "running"
                        })
                    }
                }
            }]), e
        }();
    t["default"] = new o, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(6),
        u = i(l),
        c = n(1),
        d = i(c),
        f = n(12),
        p = i(f),
        h = n(7),
        g = i(h),
        m = n(17),
        v = i(m),
        w = n(3),
        b = i(w),
        y = null,
        k = function() {
            function e() {
                o(this, e), y = this, this.loadEnd = {}, this.loading = {}, this.loadingWait = {}
            }
            return a(e, [{
                key: "preparePage",
                value: function(e) {
                    var t = [];
                    if (e.loaded === !0) {
                        var n = u["default"].resolve(e);
                        return n
                    }
                    if (g["default"].send("pageLoadStart", e.index), e.bgpic && "0" !== e.bgpic && " " !== e.bgpic) try {
                        var i = void 0,
                            o = {};
                        if (console.log("log" + e.bgpic), 0 === e.bgpic.indexOf("user/")) i = window.Config.getImgUrl(e.bgpic);
                        else if (e.bgpic.indexOf("test.img.maka.im") > 0) i = e.bgpic;
						///////////////**************
						else if (true) i = e.bgpic;
                        //else if (e.bgpic.indexOf("img1") > 0) i = e.bgpic;
                        else {
                            var a = /id\/[A-Z0-9]{0,40}/,
                                r = a.exec(e.bgpic),
                                l = /\.jpg|\.png|\.jpeg|\.gif/i,
                                c = l.exec(e.bgpic),
                                f = "";
                            c && (f = c[0]);
                            var h = r[0].substr(3) + f;
                            i = window.Config.getImgUrl(h)
                        }
                        e.bgpicCropData && !window.Config.isGif(e.bgpic) && window.Config.isAppNormalMode() ? i = window.Config.addCrop(i, e.bgpicCropData) : window.Config.isGif(e.bgpic) || (i = b["default"].addTail(i)), o.inw = e.bgpicwidth;
                        var m = y.loadImage(i, o, e);
                        m = m.then(function(t) {
                            return e.bgDom = (0, s["default"])(t), t
                        }), t.push(m)
                    } catch (w) {
                        d["default"].log(w), d["default"].logPiwik(window.Config.getEnvironment(), window.Config.isAppNormalMode(), w)
                    }
                    return e.content.map(function(n) {
                        switch (n.type) {
                        case "pic":
                            if (!n.picid) if (n.con) {
                                var i = n.con.split("/");
                                n.picid = i[i.length - 3]
                            } else n.picid = 0;
                            var o = window.Config.getImgUrl(n.picid);
                            n.cropData && !window.Config.isGif(n.picid) && window.Config.isAppNormalMode() ? o = window.Config.addCrop(o, n.cropData) : window.Config.isGif(n.picid) || (o = b["default"].addTail(o));
                            var a = y.loadImage(o, n, e);
                            a = a.then(function(e) {
                                return n.inw && "auto" !== n.inw || (n.inw = e.width), n.dom = (0, s["default"])(e), e
                            }), t.push(a);
                            break;
                        case "pButton":
                            if (n.model_type && "count_down" !== n.model_type) {
                                var r = y.loadSvgImg(window.Config.getPButtonUrl(p["default"].pButtonSvg[n.pic_id]));
                                r = r.then(function(e) {
                                    return n.buttonSvg = e, e
                                }), t.push(r)
                            }
                            break;
                        case "pEraser":
                            var o = window.Config.getImgUrl(n.picid),
                                l = b["default"].addTail(o, "jpg");
                            console.log("erase" + l);
                            var u = y.loadImage(l, n, e);
                            u = u.then(function(e) {
                                return n.inw && "auto" !== n.inw || (n.inw = e.width), n.imgDom = (0, s["default"])(e), e
                            }), t.push(u);
                            break;
                        case "comparison":
                            if (!n.picdata) break;
                            n.picdata.map(function(i) {
                                var o = window.Config.getImgUrl(i.picid),
                                    a = y.loadImage(o, n, e);
                                a = a.then(function(e) {
                                    return i.dom = (0, s["default"])(e), e
                                }), t.push(a)
                            });
                            break;
                        case "pshape":
                            if (!n.shape) break;
							//////////*************修正svg路径
							"0" === n.shape && (n.shape = "1.svg"), n.shape.indexOf("/SVG/") < 0 && (n.shape = n.shape);
                            //"0" === n.shape && (n.shape = "1.svg"), n.shape.indexOf("/SVG/") < 0 && (n.shape = "svg/Default/SVG/" + n.shape);
                            var c = y.loadSvgImg(window.Config.getShapeUrl(n.shape));
                            c = c.then(function(e) {
                                var t = (0, s["default"])(e);
                                return d["default"].processSVG(t), n.svgXml = t, t
                            }), t.push(c);
                            break;
                        case "interActionButton":
                            var c = y.loadSvgImg(b["default"].getInterActionUrl(n.funcType));
                            c = c.then(function(e) {
                                return n.svgXml = e, e
                            }), t.push(c);
                            break;
                        case "fingerPrint":
                            var f = y.loadImage(window.Config.getImgUrl(n.picid), n, e);
                            f = f.then(function(e) {
                                return n.dom = (0, s["default"])(e), e
                            }), t.push(f);
                            break;
                        case "phone_call":
                            var h = y.loadImage(window.Config.getPhoneCallUrl("phonecall_bg.png"), n, e),
                                g = y.loadImage(window.Config.getPhoneCallUrl("phonecall_info.png"), n, e),
                                m = y.loadImage(window.Config.getPhoneCallUrl("phonecall_remind.png"), n, e),
                                w = y.loadImage(window.Config.getPhoneCallUrl("phonecall.png"), n, e);
                            h = h.then(function(e) {
                                return n.bgDom = (0, s["default"])(e), e
                            }), g = g.then(function(e) {
                                return n.phoneInfoDom = (0, s["default"])(e), e
                            }), m = m.then(function(e) {
                                return n.phoneRemindDom = (0, s["default"])(e), e
                            }), w = w.then(function(e) {
                                return n.phonecallDom = (0, s["default"])(e), e
                            }), t.push(h), t.push(g), t.push(m), t.push(w);
                            break;
                        case "glass_break":
                            var k = [1, 2, 3, 4, 5];
                            n.imgDom = new Array(5), k.map(function(i) {
                                var o = y.loadImage(window.Config.getGlassBreakUrl(i + ".png"), n, e);
                                o = o.then(function(e) {
                                    return n.imgDom[i - 1] = e, e
                                }), t.push(o)
                            });
                            break;
                        case "slide":
                            var x = y.loadSwiper();
                            t.push(x);
                            for (var P in n.data) {
                                var A = n.data[P],
                                    S = window.Config.getImgUrl(A.picid),
                                    C = window.Config.getImgUrl(A.picid);
                                window.Config.isGif(S) || (C = b["default"].addTail(C, "jpg", A.inw));
                                var I = new Image;
                                I.src = C, A.imgDom = (0, s["default"])(I)
                            }
                            break;
                        case "eleform":
                            y.loadImage("images/sending.gif", n, e), y.loadImage("images/sendsucess.png", n, e);
                            break;
                        case "charts":
                            var E = y.loadHighcharts();
                            t.push(E);
                            break;
                        case "text":
                        case "ptext":
                            if (n.fontId) {
                                var T, j = n.fontId;
                                if (n.fontId.indexOf("makafont_") >= 0 && (T = window.Config.engFontUrl + n.fontId + ".ttf"), !y.loadEnd[T]) {
                                    y.loadEnd[T] = !0;
                                    var D = y.loadFont(T, n, e).then(function() {
                                        var e = '@font-face {font-family: "' + j + '"; src: url("' + T + '");font-weight: normal; font-style: normal;}';
                                        (0, v["default"])(e)
                                    });
                                    t.push(D)
                                }
                            }
                        }
                    }), console.log(t), e.loaded = !0, t
                }
            },
            {
                key: "loadFont",
                value: function(e, t, n) {
                    return d["default"].log(t, n), new u["default"](function(t) {
                        s["default"].ajax({
                            type: "GET",
                            dataType: "text",
                            url: e,
                            cache: !0,
                            success: function() {
                                t()
                            },
                            error: function() {
                                t(null)
                            }
                        })
                    })
                }
            },
            {
                key: "loadImage",
                value: function(e, t, n) {
                    return new u["default"](function(i) {
                        var o = new Image,
                            a = !1;
                        if (o.onload = function() {
                            a || (d["default"].log("Load image succeeded..." + e), a = !0, i(o))
                        }, o.onerror = function(t) {
                            d["default"].logPiwik(window.Config.getEnvironment(), window.Config.isAppNormalMode(), "Load image failed " + e + t), a || (d["default"].log("Load image failed " + e + t), a = !0, i(o))
                        }, window.Config.isTurnOffOssCrop()) o.src = e;
                        else {
                            var r = /\.jpg|\.jpeg/i,
                                s = r.exec(e);
                            if (s && !e.indexOf("@")) if (t && 0 !== t.inw && "auto" !== t.inw && t.inw && window.Config.isAppNormalMode()) {
                                var l = t.inw > 500 ? 1e3 : parseInt(2 * t.inw);
                                o.src = e + "@" + l + "w_75Q"
                            } else o.src = e;
                            else o.src = e
                        }
                        0 !== n.index && window.Config.isAppNormalMode() && "pEraser" !== t.type && (a || (a = !0, i(o)))
                    })
                }
            },
            {
                key: "loadSwiper",
                value: function() {
                    return new u["default"](function(e) {
                        n.e(0, function(t) {
                            window.LightSlider = n(55), n(54), e(window.LightSlider)
                        })
                    })
                }
            },
            {
                key: "loadHighcharts",
                value: function() {
                    return console.log("load chart"), new u["default"](function(e) {
                        n.e(1, function(t) {
                            console.log("chart end"), window.Highcharts = n(16), e(window.Highcharts)
                        })
                    })
                }
            },
            {
                key: "loadSvgImg",
                value: function(e) {
                    return new u["default"](function(t) {
                        y.loadEnd[e] ? t(y.loadEnd[e]) : y.loading[e] ? (console.log("load wait"), y.loadingWait[e].push(t)) : (y.loading[e] = !0, y.loadingWait[e] = [], y.loadingWait[e].push(t), console.log("load start"), s["default"].ajax({
                            type: "GET",
                            dataType: "text",
                            url: e + "?t=" + d["default"].getHashCode(),
                            cache: !0,
                            success: function(t) {
                                console.log("load end");
                                var n = t;
                                for (var i in y.loadingWait[e]) {
                                    var o = y.loadingWait[e][i];
                                    o(n)
                                }
                                y.loadEnd[e] = n, y.loading[e] = !1
                            },
                            error: function() {
                                d["default"].log("Load svgUrl failed " + e), y.loading[e] = !1;
                                for (var t in y.loadingWait[e]) {
                                    var n = y.loadingWait[e][t];
                                    n(null)
                                }
                            }
                        }))
                    })
                }
            }]), e
        }();
    t["default"] = k, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(6),
        u = i(l),
        c = n(8),
        d = i(c),
        f = n(20),
        p = i(f),
        h = n(10),
        g = i(h),
        m = n(1),
        v = i(m),
        w = n(3),
        b = (i(w), n(50)),
        y = i(b),
        k = n(51),
        x = i(k),
        P = n(13),
        A = i(P),
        S = n(32),
        C = i(S),
        I = n(33),
        E = i(I),
        T = n(25),
        j = i(T),
        D = n(34),
        O = i(D),
        M = n(7),
        R = i(M),
        _ = n(24),
        U = i(_),
        B = n(29),
        z = i(B),
        L = n(31),
        N = i(L),
        H = n(30),
        F = i(H),
        W = n(35),
        V = i(W),
        q = n(36),
        X = i(q),
        Y = n(28),
        Z = i(Y),
        Q = n(23),
        J = i(Q),
        G = n(27),
        K = i(G),
        $ = n(26),
        ee = i($),
        te = n(22),
        ne = i(te),
        ie = n(19),
        oe = i(ie);
    n(40), n(39);
    var ae = null,
        re = function() {
            function e() {
                o(this, e), this.currentPageIndex = 0, this.pageChangeHandlers = [], this.pageEffect = [], this.swipeDownLock = !1, this.examinationResult = null, window.Config.isAppNormalMode() && (this.audioEffect = new Audio), this.pageZLevel = {
                    top: 999,
                    bottom: 0,
                    music: 1e3
                }, this.lazyLoader = new p["default"], this.firstEnsurePagesStarted = !1, ae = this, this.initSwiper(), this.ensureCanvas(), this.preload = new E["default"], this.option = {}
            }
            return a(e, [{
                key: "setOption",
                value: function(e) {
                    this.option = e
                }
            },
            {
                key: "initSwiper",
                value: function() {
                    var e = this;
                    v["default"].log("Initing page swiper...");
                    var t = document.getElementById("maka-pages");
                    this.hammerPages = new g["default"].Manager(t);
                    var n = new g["default"].Pan;
                    n.set({
                        direction: g["default"].DIRECTION_ALL,
                        preventDefault: !0
                    }), this.hammerPages.add(n), this.hammerPages.get("pan").set({
                        direction: g["default"].DIRECTION_VERTICAL
                    }), this.hammerPages.on("pan", this.onPan.bind(this)), (0, s["default"])(window).on("message", function(t) {
                        var n = JSON.parse(t.originalEvent.data);
                        "nextPage" === n.type ? e.showNextPage() : "prevPage" === n.type ? e.showPreviousPage() : "showPage" === n.type && e.showPage(n.index)
                    })
                }
            },
            {
                key: "ensureCanvas",
                value: function() {
                    var e, t, n, i, o = window.Config.canvas.standardWidth,
                        a = window.Config.canvas.standardHeight,
                        r = document.body.clientWidth / o,
                        l = document.body.clientHeight / a;
                    ae.scaleRatio = l > r ? r : l, ae.bgScaleRatio = r > l ? r : l, l > r ? (e = o > document.body.clientWidth ? document.body.clientWidth : o, t = e * (a / o), n = o < document.body.clientWidth ? (document.body.clientWidth - o) / 2 : 0, i = t < document.body.clientHeight ? (document.body.clientHeight - t) / 2 : 0) : (t = a > document.body.clientHeight ? document.body.clientHeight : a, e = t * (o / a), i = a < document.body.clientHeight ? (document.body.clientHeight - a) / 2 : 0, n = e < document.body.clientWidth ? (document.body.clientWidth - e) / 2 : 0), v["default"].log("Ensuring canvas..."), (0, s["default"])(".maka-canvas").css({
                        width: "100%",
                        height: "100%",
                        left: "0px",
                        top: "0px",
                        position: "absolute"
                    }), ae.ratio = {
                        height: l,
                        width: r
                    }, ae.contentsize = {
                        width: e + "px",
                        height: t + "px",
                        left: n + "px",
                        top: i + "px",
                        position: "absolute"
                    }
                }
            },
            {
                key: "scale",
                value: function(e) {
                    if ("string" == typeof e && -1 !== e.indexOf("px")) {
                        var t = parseInt(e.substr(0, e.length - 1));
                        return parseInt(Math.round(t * ae.scaleRatio)) + "px"
                    }
                    return e = parseInt(Math.round(e * ae.scaleRatio)), e + "px"
                }
            },
            {
                key: "setCommonCSS",
                value: function(e, t) {
                    (0, s["default"])(e).css({
                        width: this.scale(t.w),
                        height: this.scale(t.h),
                        left: this.scale(t.left),
                        top: this.scale(t.right),
                        rotate: t.rotate,
                        opacity: t.opacity,
                        display: "absolute"
                    })
                }
            },
            {
                key: "showPPT",
                value: function() {
                    if (this.preload.hide(), this.currentPageIndex = 0, window.Config.isAppNormalMode()) {
                        var e = d["default"].getPage(0);
                        ae.showPageInAnimation(e)
                    }
                    ae.showBackgroundMusic(), ae.onPageChange(0), (0, s["default"])(".maka-page-0").show(), (0, s["default"])(".maka-pages").show(), R["default"].send("pageVisit", ae.currentPageIndex), ae.showAdarea(), ae.showArrow(), ae.option.pageChangeCallback && ae.option.pageChangeCallback(), ae.ensurePages([1])
                }
            },
            {
                key: "buildBackgroundMusic",
                value: function() {
                    var e = this;
                    if (window.Config.isAppNormalMode()) {
                        var t = d["default"].getMusic();
                        d["default"].getMusicId() && !
                        function() {
                            e.audioBackground = new Audio, ae.audioBackground.src = window.Config.getMusicUrl(t), ae.audioBackground.loop = !0, ae.audioBackground.play();
                            var n = function i() {
                                ae.toggleBackgroundMusic(!0), ae.audioBackground.paused || (0, s["default"])("body").off("touchstart touchmove touchend", i), v["default"].log("Start play music for user.......")
                            };
                            (0, s["default"])("body").on("touchstart touchmove touchend", n)
                        }()
                    }
                }
            },
            {
                key: "showBackgroundMusic",
                value: function() {
                    var e = d["default"].getMusicId();
                    if (e && (ae.musicDom = (0, s["default"])("<img/>"), ae.musicDom.css({
                        width: ae.scale(60),
                        height: ae.scale(60),
                        right: ae.scale(30),
                        top: ae.scale(30),
                        opacity: 1,
                        position: "absolute",
                        display: "block",
                        "z-index": ae.pageZLevel.music
                    }), ae.isMusicOn = !0, ae.musicDom.attr({
                        src: x["default"]
                    }), (0, s["default"])(".maka-pages").append(ae.musicDom), window.Config.isAppNormalMode())) {
                        var t = new g["default"](ae.musicDom.get(0));
                        t.on("tap", ae.toggleBackgroundMusic)
                    }
                }
            },
            {
                key: "toggleBackgroundMusic",
                value: function(e) {
                    window.Config.isAppNormalMode() && (e === !0 ? ae.isMusicOn = e : ae.isMusicOn = !ae.isMusicOn, ae.musicDom && (ae.isMusicOn ? (ae.musicDom.attr({
                        src: x["default"]
                    }), ae.audioBackground && ae.audioBackground.play()) : (ae.musicDom.attr({
                        src: y["default"]
                    }), ae.audioBackground && ae.audioBackground.pause(), R["default"].send("closeMusic"))), ae.audioBackground.paused && (ae.isMusicOn = !1, ae.musicDom.attr({
                        src: y["default"]
                    })))
                }
            },
            {
                key: "ensurePages",
                value: function(e, t) {
                    if (e && 0 !== e.length) {
                        t = t ||
                        function() {};
                        var n = [],
                            i = [];
                        ae.firstEnsurePagesStarted || (ae.preload.increaseSteps(1), v["default"].runAsync(function() {
                            ae.preload.increaseProgress()
                        })), e.forEach(function(e) {
                            if (d["default"].hasPage(e)) {
                                var t = d["default"].getPage(e);
                                t.index = e;
                                var i = ae.lazyLoader.preparePage(t);
                                if (console.log(i.length), !ae.firstEnsurePagesStarted) {
                                    ae.preload.increaseSteps(i.length);
                                    for (var o = 0; o < i.length; o++) i[o].then(function(e) {
                                        ae.preload.increaseProgress()
                                    })
                                }
                                n.push({
                                    page: t,
                                    promiseArray: i
                                })
                            }
                        }), n.forEach(function(e) {
                            var t = new u["default"](function(t) {
                                u["default"].all(e.promiseArray).then(function() {
                                    ae.renderPage(e.page), t(e.page)
                                })
                            });
                            ae.firstEnsurePagesStarted || (ae.preload.increaseSteps(1), t = t.then(function() {
                                ae.preload.increaseProgress(1)
                            })), i.push(t)
                        }), u["default"].all(i).then(function() {
                            t()
                        })["catch"](v["default"].log), ae.firstEnsurePagesStarted = !0
                    }
                }
            },
            {
                key: "ensureAllPages",
                value: function(e) {
                    for (var t = [], n = d["default"].getPageLength(), i = 0; n > i; i++) t.push(i);
                    this.ensurePages(t, e)
                }
            },
            {
                key: "showPreviousPage",
                value: function() {
                    if (v["default"].log("Decide to show previous page, currentPageIndex:" + ae.currentPageIndex), ae.currentPageIndex > 0) {
                        var e, t, n, i, o, a, r = function() {
                            R["default"].send("pageVisit", ae.currentPageIndex - 1), R["default"].send("pageLeave", ae.currentPageIndex), e = "maka-page-" + ae.currentPageIndex, t = (0, s["default"])("." + e), n = ae.currentPageIndex - 1;
                            var r = ae.currentPageIndex;
                            if (i = "maka-page-" + n, o = (0, s["default"])("." + i), window.Config.isAppNormalMode()) {
                                var l = d["default"].getPage(ae.currentPageIndex);
                                if (l.swipeDownLock) return {
                                    v: void 0
                                };
                                ae.panDownAnimations || l.swipeDownLock || ae.initpanDownAnimations(l), ae.animateToPrevPage(function() {
                                    var e = d["default"].getPage(r),
                                        i = d["default"].getPage(n);
                                    t.hide(), o.show(), ae.hidePageElement(e), ae.showPageInAnimation(i), ae.showAdarea(), ae.showArrow()
                                })
                            } else t.hide(), o.show(), a = d["default"].getPage(n), ae.showPageInAnimation(a);
                            ae.onPageChange(n), ae.currentPageIndex = n, ae.option.pageChangeCallback && ae.option.pageChangeCallback()
                        }();
                        if ("object" == typeof r) return r.v
                    }
                    ae.showAdarea(), ae.showArrow()
                }
            },
            {
                key: "showPage",
                value: function(e) {
                    e !== ae.currentPageIndex && ae.ensurePages([e], function() {
                        var t = e,
                            n = ae.currentPageIndex,
                            i = (0, s["default"])(".maka-page-" + t),
                            o = (0, s["default"])(".maka-page-" + n);
                        ne["default"].clearAnimation(i), i.hide(), o.hide(), i.fadeIn(function() {
                            var i = d["default"].getPage(t);
                            ae.showPageInAnimation(i);
                            var o = d["default"].getPage(n);
                            ae.hidePageElement(o), ae.currentPageIndex = e, ae.option.pageChangeCallback && ae.option.pageChangeCallback(), ae.showAdarea(), ae.showArrow()
                        }), console.log("showPage1"), ae.panUpAnimations = null, ae.panDownAnimations = null
                    })
                }
            },
            {
                key: "showNextPage",
                value: function(e) {
                    v["default"].log("Decide to show next page, currentPageIndex:" + ae.currentPageIndex), ae.hasNextPage() ? !
                    function() {
                        var t = d["default"].getPageLength(),
                            n = ae.currentPageIndex,
                            i = (n + 1) % t;
                        ae.ensurePages([i], function() {
                            R["default"].send("pageVisit", i), R["default"].send("pageLeave", n);
                            var t = (0, s["default"])(".maka-page-" + i),
                                o = (0, s["default"])(".maka-page-" + n);
                            if (window.Config.isAppNormalMode()) {
                                var a = d["default"].getPage(n);
                                if (a.swipeUpLock) return;
                                ae.panUpAnimations || a.swipeUpLock || ae.initpanUpAnimations(a), t.show(), ae.animateToNextPage(function() {
                                    var e = d["default"].getPage(n),
                                        a = d["default"].getPage(i);
                                    o.hide(), t.show(), ae.hidePageElement(e), ae.showPageInAnimation(a), ae.showAdarea(), ae.showArrow(), ae.ensurePages([i + 1, i + 2, i + 3]), ae.panUpAnimations = null
                                })
                            } else {
                                o.hide(), t.show();
                                var r = d["default"].getPage(ae.currentPageIndex);
                                ae.showPageInAnimation(r), ae.ensurePages([i + 1, i + 2, i + 3])
                            }
                            ae.onPageChange(i), ae.currentPageIndex = i, ae.showAdarea(), ae.showArrow(), ae.option.pageChangeCallback && ae.option.pageChangeCallback(), e && e()
                        })
                    }() : this.option.lastCallback && this.option.lastCallback()
                }
            },
            {
                key: "onPageChange",
                value: function(e) {
                    ae.pageChangeHandlers.map(function(t) {
                        t(e)
                    })
                }
            },
            {
                key: "hasNextPage",
                value: function() {
                    return ae.currentPageIndex < d["default"].getPageLength() - 1 || d["default"].getIsloop() && window.Config.isAppNormalMode()
                }
            },
            {
                key: "getCurrentPageIndex",
                value: function() {
                    return ae.currentPageIndex
                }
            },
            {
                key: "showAdarea",
                value: function() {
                    if (window.Config.isAppNormalMode()) {
                        var e = (0, s["default"])(".maka-adArea"),
                            t = 100;
                        ae.currentPageIndex === d["default"].getPageLength() - 1 ? (e.fadeIn(), v["default"].log("show"), "free_user" === window.projectVersion.viplevel && v["default"].parentPost({
                            type: "showAD"
                        }), (0, s["default"])(".maka-adArea").unbind(), (0, s["default"])(".maka-adArea").on("click", function() {
                            R["default"].send("makaAD", t)
                        })) : (v["default"].parentPost({
                            type: "hideAD"
                        }), e.hide(), v["default"].log("hide"))
                    }
                }
            },
            {
                key: "showArrow",
                value: function() {
                    var e = (0, s["default"])(".maka-Arrow"),
                        t = d["default"].getPage(ae.currentPageIndex);
                    t.MWChains && t.MWChains.nextPage && !t.MWChains.nextPage.done ? e.hide() : t.swipeUpLock || t.swipeDownLock || ae.currentPageIndex === d["default"].getPageLength() - 1 ? e.hide() : e.show()
                }
            },
            {
                key: "hideArrow",
                value: function() {
                    var e = (0, s["default"])(".maka-Arrow");
                    e.hide()
                }
            },
            {
                key: "hidePageElement",
                value: function(e) {
                    window.Config.isAppNormalMode() && e.content.forEach(function(e) {
                        "video" === e.type ? e.ele.removeSrc() : "charts" === e.type ? e.dom.hide() : oe["default"].stopAnimation(e)
                    })
                }
            },
            {
                key: "showPageInAnimation",
                value: function(e) {
                    window.Config.isAppNormalMode() && e.content.forEach(function(e) {
                        oe["default"].actAnimation(e), e.showCallback && e.showCallback(), "charts" === e.type && (e.chartElement.render(), e.dom.fadeIn()), "video" === e.type && e.ele.setSrc()
                    })
                }
            },
            {
                key: "animateToNextPage",
                value: function(e) {
                    var t = ae.panUpAnimations ? ae.panUpAnimations.length : 1,
                        n = ne["default"].debouncedCallback(e, t);
                    for (var i in ae.panUpAnimations) ae.panUpAnimations[i].finish(n);
                    ae.panUpAnimations = null, ae.panDownAnimations = null
                }
            },
            {
                key: "animateToPrevPage",
                value: function(e) {
                    var t = ae.panDownAnimations ? ae.panDownAnimations.length : 1,
                        n = ne["default"].debouncedCallback(e, t);
                    for (var i in ae.panDownAnimations) ae.panDownAnimations[i].finish(n);
                    ae.panUpAnimations = null, ae.panDownAnimations = null
                }
            },
            {
                key: "onSwipeDown",
                value: function() {
                    ae.showPreviousPage()
                }
            },
            {
                key: "onSwipeUp",
                value: function() {
                    ae.showNextPage()
                }
            },
            {
                key: "initpanUpAnimations",
                value: function(e) {
                    var t = (0, s["default"])(".maka-page-" + (ae.currentPageIndex + 1) % d["default"].getPageLength()),
                        n = (0, s["default"])(".maka-page-" + ae.currentPageIndex);
                    ae.panUpAnimations = [], ae.panUpAnimations.push(ne["default"].getLeaveEffect(e.effect, n)), ae.panUpAnimations.push(ne["default"].getEntryEffect(e.effect, t))
                }
            },
            {
                key: "initpanDownAnimations",
                value: function(e) {
                    e = d["default"].getPage(e.index - 1);
                    var t = (0, s["default"])(".maka-page-" + ae.currentPageIndex),
                        n = (0, s["default"])(".maka-page-" + (ae.currentPageIndex - 1));
                    ae.panDownAnimations = [], ae.panDownAnimations.push(ne["default"].getBackEffect(e.effect, n)), ae.panDownAnimations.push(ne["default"].getOutEffect(e.effect, t))
                }
            },
            {
                key: "onPan",
                value: function(e) {
                    var t = document.body.clientHeight,
                        n = e.deltaY / t,
                        i = (0, s["default"])(".maka-page-" + (ae.currentPageIndex + 1)),
                        o = (0, s["default"])(".maka-page-" + (ae.currentPageIndex - 1)),
                        a = d["default"].getPage(ae.currentPageIndex);
                    e.deltaY < 0 && !ae.panUpAnimations && ae.hasNextPage() && !e.isFinal && !a.swipeUpLock && ae.initpanUpAnimations(a), e.deltaY > 0 && !ae.panDownAnimations && ae.currentPageIndex > 0 && !e.isFinal && !a.swipeDownLock && ae.initpanDownAnimations(a), n > 1 ? n = 1 : -1 > n && (n = -1);
                    var r = e.changedPointers[0].clientX < 4 || e.changedPointers[0].clientX > document.body.clientWidth - 4,
                        l = e.changedPointers[0].clientY < 4 || e.changedPointers[0].clientY > document.body.clientHeight - 4;
                    if ((r || l) && (console.log(e.changedPointers[0].clientX + "x" + document.body.clientWidth + "y" + e.changedPointers[0].clientY), this.hammerPages.stop(), e.isFinal = !0), e.isFinal) if (0 > n) if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) ae.showNextPage();
                    else {
                        for (var u in ae.panUpAnimations) ae.panUpAnimations[u].rollback();
                        ae.panUpAnimations = null
                    } else if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) ae.showPreviousPage();
                    else {
                        for (var u in ae.panDownAnimations) ae.panDownAnimations[u].rollback();
                        ae.panDownAnimations = null
                    } else if (0 > n && -.1 > n && !a.swipeUpLock) ae.ensurePages([ae.currentPageIndex + 1], function() {
                        i.show();
                        for (var e in ae.panUpAnimations) ae.panUpAnimations[e].setValue(-n);
                        for (var e in ae.panDownAnimations) ae.panDownAnimations[e].setValue(0)
                    });
                    else if (n > 0 && n > .1 && !a.swipeDownLock) {
                        o.show();
                        for (var u in ae.panDownAnimations) ae.panDownAnimations[u].setValue(n);
                        for (var u in ae.panUpAnimations) ae.panUpAnimations[u].setValue(0)
                    }
                }
            },
            {
                key: "rotate",
                value: function(e) {
                    return "rotate(" + e + "deg)"
                }
            },
            {
                key: "ms",
                value: function(e) {
                    return e + "ms"
                }
            },
            {
                key: "addpx",
                value: function(e) {
                    return parseInt(e) + "px"
                }
            },
            {
                key: "shadow",
                value: function(e) {
                    return "0 0 " + ae.addpx(e) + " black"
                }
            },
            {
                key: "url",
                value: function(e) {
                    return -1 === e.indexOf("http") ? "http://" + e : e
                }
            },
            {
                key: "renderImg",
                value: function(e) {
                    var t = (0, s["default"])("<div></div>"),
                        n = (0, s["default"])("<div></div>");
                    t.css({
                        width: ae.scale(e.w),
                        height: ae.scale(e.h),
                        left: ae.scale(e.left),
                        top: ae.scale(e.top),
                        position: "absolute",
                        opacity: e.opacity,
                        transform: ae.rotate(e.rotate)
                    });
                    var i = window.Config.isAppNormalMode() ? "100% 100%" : "contain",
                        o = void 0,
                        a = void 0,
                        r = void 0;
                    e.cropData && !window.Config.isGif(e.picid) && window.Config.isAppNormalMode() ? (r = i, o = 0, a = 0) : (r = "auto" === e.inw || 0 === e.inw ? i : ae.scale(e.inw), o = ae.scale(e.intop), a = ae.scale(e.inleft)), n.css({
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        borderRadius: ae.scale(e.borderradius * e.h / 200),
                        boxShadow: ae.shadow(e.boxshadow),
                        "background-image": "url(" + e.dom.context.src + ")",
                        "background-repeat": "no-repeat",
                        "background-size": r,
                        "background-position": a + " " + o
                    });
                    var l = (0, s["default"])("<img/>");
                    return l.css("opacity", 0), l.attr("src", e.dom.context.src), n.append(l), t.append(n), t
                }
            },
            {
                key: "renderText",
                value: function(e) {
                    var t = (0, s["default"])("<div></div>"),
                        n = (0, s["default"])("<div></div>");
                    if (e.version >= 21 && n.addClass("no_margin"), t.css({
                        position: "absolute",
                        width: ae.scale(e.w),
                        top: ae.scale(e.top),
                        left: ae.scale(e.left),
                        transform: ae.rotate(e.rotate),
                        "transform-origin": "center",
                        opacity: e.opacity
                    }), n.css({
                        width: "100%",
                        color: e.ftcolor,
                        fontSize: ae.scale(e.ftsize),
                        background: e.bgcolor,
                        textAlign: e.textalign,
                        fontWeight: e.fontbold ? "bold" : "normal",
                        textDecoration: e.udl ? "underline" : "none",
                        lineHeight: e.lineheight,
                        borderStyle: e["border-style"],
                        borderColor: e["border-color"],
                        borderWidth: ae.scale(e["border-width"]),
                        fontStyle: e.fontitalic ? "italic" : "normal",
                        borderRadius: ae.scale(e.borderradius * e.height / 200),
                        boxShadow: ae.shadow(e.boxshadow),
                        wordWrap: "break-word",
                        whiteSpace: "pre-wrap"
                    }), e.fontId && n.css({
                        "font-family": e.fontId
                    }), "text" === e.type) {
                        var i;
                        switch (e.textvalign) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = e.h / 2 - e.tl / 2;
                            break;
                        case "bottom":
                            i = e.h - e.tl
                        }
                        n.css({
                            marginTop: ae.scale(i),
                            height: "auto"
                        })
                    }
                    if (n.append(e.con), t.append(n), "text" === e.type) {
                        var o = n.get(0).firstChild;
                        for (v["default"].log(o.toString()); o.hasChildNodes();) parseInt(o.style.fontSize) && (o.style.fontSize = ae.scale(parseInt(o.style.fontSize))), o = o.firstChild
                    }
                    return t
                }
            },
            {
                key: "renderShape",
                value: function(e) {
                    var t = new V["default"](e, this.scale);
                    return t.getElement()
                }
            },
            {
                key: "renderButton",
                value: function(e) {
                    var t = (0, s["default"])("<div></div>"),
                        n = (0, s["default"])("<div></div>"),
                        i = (0, s["default"])("<a></a>");
                    t.css({
                        position: "absolute",
                        width: ae.scale(e.w),
                        height: ae.scale(e.height),
                        top: ae.scale(e.top),
                        left: ae.scale(e.left),
                        transform: ae.rotate(e.rotate)
                    }), n.css({
                        position: "absolute",
                        width: "100%",
                        color: e.ftcolor || "#585858",
                        fontSize: ae.scale(e.ftsize),
                        lineHeight: e.lineheight,
                        opacity: e.opacity,
                        borderStyle: e["border-style"],
                        borderColor: e["border-color"],
                        borderWidth: ae.scale(e["border-width"]),
                        background: e.bgcolor,
                        textAlign: e.textalign,
                        borderRadius: ae.scale(e.borderradius * e.height / 200),
                        boxShadow: ae.shadow(e.boxshadow),
                        wordWrap: "break-word"
                    }), n.append(e.con);
                    var o = n.get(0).firstChild;
                    return o && o.hasChildNodes() && (parseInt(o.style.fontSize) && (o.style.fontSize = ae.scale(parseInt(o.style.fontSize))), o = o.firstChild), e.url ? (i.attr({
                        href: ae.url(e.url)
                    }), i.css({
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    }), i.append(n), t.append(i)) : t.append(n), t
                }
            },
            {
                key: "renderSpecialButton",
                value: function(e) {
                    var t = new O["default"](e, ae.scale);
                    return t.getElement()
                }
            },
            {
                key: "renderPhoneCallButton",
                value: function(e) {
                    var t = new N["default"](e, ae.scale);
                    return t.getDom()
                }
            },
            {
                key: "renderFormList",
                value: function(e) {
                    var t = (0, s["default"])("<div></div>"),
                        n = (0, s["default"])("<div></div>"),
                        i = [];
                    return t.css({
                        position: "absolute",
                        width: ae.scale(e.w),
                        height: ae.scale(e.h),
                        top: ae.scale(e.top),
                        left: ae.scale(e.left)
                    }), e.qlist.map(function(n) {
                        var o = (0, s["default"])("<input>");
                        o.css({
                            border: "2px solid " + e.formcolor,
                            height: ae.scale(80),
                            marginBottom: ae.scale(20),
                            fontSize: ae.scale(30)
                        }), o.attr({
                            type: "text",
                            "class": "form-input",
                            placeholder: n.name,
                            name: n.id
                        }), i.push(o), t.append(o)
                    }), n.css({
                        height: ae.scale(80),
                        fontSize: ae.scale(30),
                        marginTop: ae.scale(20),
                        lineHeight: ae.scale(80),
                        background: e.formcolor
                    }), n.attr({
                        "class": "form-submit"
                    }), n.append(e.btn_name || window.Config.language.submitForm), t.append(n), n.on("click", function() {
                        var t = {};
                        t.formdata = {};
                        var n = (0, s["default"])("<div></div>"),
                            o = (0, s["default"])('<img src="images/sending.gif"/>'),
                            a = (0, s["default"])("<p>" + window.Config.language.submiting + "</p>");
                        n.css({
                            position: "fixed",
                            width: "100%",
                            height: "100%",
                            top: "0px",
                            left: "0px",
                            zIndex: "999",
                            background: "rgba(42,50,65,1)"
                        }), o.css({
                            position: "absolute",
                            width: ae.scale("140"),
                            top: "30%",
                            left: "50%",
                            marginLeft: ae.scale("-70")
                        }), a.css({
                            position: "absolute",
                            margin: "0",
                            width: "80%",
                            top: "50%",
                            left: "10%",
                            textAlign: "center",
                            color: "white",
                            fontSize: ae.scale("40")
                        });
                        var r = window.Config.getProjectId();
                        if (t.formid = r + "_" + e.formid, "" === i[0].val().replace(/^\s\s*/, "").replace(/\s\s*$/, "")) a.html(window.Config.language.pleaseInput + e.qlist[0].name), n.append(a);
                        else if ("" === i[1].val().replace(/^\s\s*/, "").replace(/\s\s*$/, "") && i.length >= 2) a.html(window.Config.language.pleaseInput + e.qlist[1].name), n.append(a);
                        else {
                            for (var l in i) t.formdata[i[l].attr("name")] = i[l].val();
                            n.append(o), n.append(a), s["default"].ajax({
                                type: "post",
                                url: window.Config.postFormUrl + window.Config.getProjectId() + "_" + e.formid,
                                dataType: "html",
                                cache: !1,
                                data: t,
                                success: function() {
                                    for (var t in i) i[t].val("");
                                    setTimeout(function() {
                                        a.html(window.Config.language.submitSuccess + "<br>" + e.sucmsg), o.attr("src", "images/sendsucess.png"), n.css({
                                            background: "rgba(0,0,0,0.8)"
                                        }), n.show()
                                    }, 200)
                                },
                                error: function() {
                                    a.html(window.Config.language.submitFail), n.append(a), setTimeout(function() {
                                        n.remove()
                                    }, 2e3)
                                }
                            })
                        }(0, s["default"])(".maka-canvas").append(n), ae.hideArrow(), n.on("mousedown touchstart", function(e) {
                            e.preventDefault(), n.unbind(), ae.showArrow(), n.remove()
                        })
                    }), t
                }
            },
            {
                key: "renderComparison",
                value: function(e) {
                    var t, n = (0, s["default"])("<div></div>"),
                        i = (0, s["default"])("<div></div>"),
                        o = (0, s["default"])("<div></div>");
                    n.css({
                        position: "absolute",
                        width: ae.scale(e.width),
                        height: ae.scale(e.height),
                        top: ae.scale(e.top)
                    }), i.css({
                        position: "absolute",
                        width: ae.scale(e.width),
                        height: ae.scale(e.height),
                        overflow: "hidden"
                    }), o.css({
                        position: "absolute",
                        width: ae.scale(e.width / 2),
                        height: ae.scale(e.height),
                        overflow: "hidden"
                    }), e.picdata.map(function(t, n) {
                        switch (n) {
                        case 0:
                            var a = t.inw ? t.inw : e.width,
                                r = t.inleft ? t.inleft : 0,
                                l = t.intop ? t.intop : 0;
                            (0, s["default"])(t.dom).css({
                                position: "absolute",
                                width: ae.scale(a),
                                left: ae.scale(r),
                                top: ae.scale(l),
                                userDrag: "none",
                                userSelect: "none"
                            }), i.append(t.dom);
                            break;
                        case 1:
                            var u = t.inw ? t.inw : e.width,
                                c = t.inleft ? t.inleft : 0,
                                d = t.intop ? t.intop : 0;
                            (0, s["default"])(t.dom).css({
                                position: "absolute",
                                width: ae.scale(u),
                                left: ae.scale(c),
                                top: ae.scale(d),
                                userDrag: "none",
                                userSelect: "none"
                            }), o.append(t.dom)
                        }
                    }), n.append(i), n.append(o);
                    var a = new g["default"](n.get(0));
                    return a.on("panstart", function() {
                        t = parseInt(o.get(0).style.width)
                    }), a.on("pan", function(n) {
                        t + n.deltaX < e.width * ae.scaleRatio && t + n.deltaX > 0 && o.css({
                            width: ae.addpx(t + n.deltaX)
                        })
                    }), n
                }
            },
            {
                key: "renderFingerPrint",
                value: function(e, t) {
                    t.swipeUpLock = !0;
                    var n = (0, s["default"])("<div></div>"),
                        i = (0, s["default"])("<div></div>");
                    n.css({
                        position: "absolute",
                        width: ae.scale(e.w),
                        height: ae.scale(e.h),
                        top: ae.scale(e.top),
                        left: ae.scale(e.left)
                    }), i.css({
                        position: "absolute",
                        width: ae.scale(e.w),
                        height: ae.scale(e.h),
                        top: 0,
                        left: 0,
                        userSelect: "none",
                        "-webkit-touch-callout": "none",
                        background: "rgba(0,0,0,0.0)"
                    }), (0, s["default"])(e.dom).css({
                        position: "absolute",
                        width: ae.scale(e.inw),
                        top: ae.scale(e.intop),
                        left: ae.scale(e.inleft),
                        userSelect: "none",
                        "-webkit-touch-callout": "none"
                    }), n.append(e.dom), n.append(i);
                    var o, a = !1,
                        r = 0,
                        l = i,
                        u = function() {
                            e.unlocking = !0, r = 0;
                            var i = (0, s["default"])("<div>解锁成功</div>");
                            n.append(i), i.css({
                                background: "rgba(0,0,0,0.6)",
                                color: "white",
                                position: "absolute",
                                top: "-50%",
                                left: "50%",
                                width: "120px",
                                height: "30px",
                                margin: "-15px 0 0 -60px",
                                "text-align": "center",
                                "line-height": "30px",
                                "border-radius": "100px",
                                "font-size": "16px"
                            }), setTimeout(function() {
                                i.fadeOut(1e3), a ? (ae.showNextPage(), e.unlocking = !1) : (a = !0, t.swipeUpLock = !1, e.unlocking = !1, ae.showNextPage())
                            }, 1500)
                        };
                    if ("VUT6I6NZ6H2BPG1G3I54" === e.picid) l.on("touchstart mousedown", function() {
                        e.unlocking || o || (o = window.setInterval(function() {
                            r += 10, (0, s["default"])(e.dom).css({
                                transform: "scale(" + (1 + r / 1e3) + ")"
                            }), r > 1500 && (clearInterval(o), u())
                        }, 10))
                    }), l.on("touchend mouseup", function() {
                        1500 > r && (r = 0, (0, s["default"])(e.dom).css({
                            transform: "scale(1)"
                        }), window.clearInterval(o), o = null)
                    });
                    else {
                        var c = (0, s["default"])('<div class="scanBar"></div>');
                        c.css({
                            position: "absolute",
                            width: ae.scale(e.w),
                            height: ae.scale(e.h),
                            bottom: "-5px",
                            left: 0,
                            display: "none",
                            "border-top": "solid 5px rgba(255,255,255,0.3)"
                        }), i.append(c), l.on("touchstart mousedown", function() {
                            o || e.unlocking || (c.show(), c.css({
                                animation: "moveUp 1500ms linear 10ms both"
                            }), o = window.setInterval(function() {
                                r += 10, r > 1500 && (clearInterval(o), u(), c.hide(), c.css({
                                    animation: "none"
                                }))
                            }, 10))
                        }), l.on("touchend mouseup", function() {
                            1500 > r && (r = 0, c.hide(), c.css({
                                animation: "none"
                            }), window.clearInterval(o), o = null)
                        })
                    }
                    return n
                }
            },
            {
                key: "renderPhoneCall",
                value: function(e, t) {
                    t.swipeUpLock = !0;
                    var n = function(n) {
                        if (window.Config.isAppNormalMode()) {
                            var i = t.index,
                                o = e;
                            n !== i || o.hasClick ? ae.audioEffect.pause() : (ae.audioEffect.src = "music/phonecall_music.mp3", ae.audioEffect.loop = !0, ae.audioEffect.play())
                        }
                    };
                    window.Config.isAppNormalMode() && ae.pageChangeHandlers.push(n);
                    var i = (0, s["default"])("<div></div>"),
                        o = (0, s["default"])("<div></div>"),
                        a = (0, s["default"])("<div></div>"),
                        r = (0, s["default"])("<div></div>");
                    if (i.css({
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                        color: "#ffffff"
                    }), (0, s["default"])(e.bgDom).css({
                        position: "absolute",
                        width: "100%",
                        left: "0px",
                        top: "0px"
                    }), (0, s["default"])(e.phoneInfoDom).css({
                        position: "absolute",
                        right: ae.scale("90"),
                        top: ae.scale("560"),
                        width: ae.scale("53"),
                        height: ae.scale("80")
                    }), (0, s["default"])(e.phoneRemindDom).css({
                        position: "absolute",
                        left: ae.scale("90"),
                        top: ae.scale("560"),
                        width: ae.scale("82"),
                        height: ae.scale("82")
                    }), o.css({
                        top: ae.scale("650"),
                        position: "relative"
                    }), (0, s["default"])(e.phonecallDom).css({
                        width: ae.scale("126")
                    }), a.css({
                        position: "relative",
                        top: ae.scale("60"),
                        fontSize: ae.scale("40")
                    }), r.css({
                        position: "relative",
                        top: ae.scale("100"),
                        fontSize: ae.scale("30")
                    }), a.append(e.text1), r.append(e.text2), i.append(e.bgDom), i.append(a), i.append(r), i.append(e.phoneInfoDom), i.append(e.phoneRemindDom), o.append(e.phonecallDom), i.append(o), window.Config.isAppNormalMode()) {
                        var l = new g["default"](e.phonecallDom[0]);
                        l.on("tap", function() {
                            v["default"].log("click phone call"), e.hasClick = !0, t.swipeUpLock = !1, ae.showNextPage()
                        })
                    }
                    return i
                }
            },
            {
                key: "renderGlassBreak",
                value: function(e, t) {
                    t.swipeUpLock = !0;
                    var n = function(n) {
                        var i = (0, s["default"])("<div>用力砸我</div>"),
                            a = e,
                            r = t.index;
                        i.css({
                            position: "absolute",
                            color: "white",
                            textAlign: "center",
                            fontSize: ae.scale("40"),
                            zIndex: "999",
                            width: "100%",
                            height: "100%",
                            paddingTop: "50%"
                        }), n !== r || a.hasBreak || (o.append(i), setTimeout(function() {
                            i.remove()
                        }, 2e3))
                    };
                    ae.pageChangeHandlers.push(n);
                    var i, o = (0, s["default"])("<div></div>");
                    if (o.css({
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    }), e.imgDom.map(function(e, t) {
                        switch (i = e, t) {
                        case 0:
                            (0, s["default"])(i).css({
                                top: "0px",
                                left: "0px"
                            });
                            break;
                        case 1:
                            (0, s["default"])(i).css({
                                top: ae.scale("30"),
                                left: ae.scale("-200")
                            });
                            break;
                        case 2:
                            (0, s["default"])(i).css({
                                top: ae.scale("400"),
                                left: ae.scale("-180")
                            });
                            break;
                        case 3:
                            (0, s["default"])(i).css({
                                top: ae.scale("400"),
                                left: "0px"
                            });
                            break;
                        case 4:
                            (0, s["default"])(i).css({
                                top: ae.scale("140"),
                                left: ae.scale("260")
                            })
                        }(0, s["default"])(i).css({
                            position: "absolute",
                            width: ae.scale("640"),
                            opacity: 0
                        }), (0, s["default"])(i).attr({
                            "class": "glass" + t
                        }), o.append(i)
                    }), window.Config.isAppNormalMode()) {
                        var a = 0,
                            r = new g["default"](o.get(0));
                        r.on("tap", function() {
                            5 > a && (ae.audioEffect.src = window.Config.glassBreakVoice, ae.audioEffect.play()), (0, s["default"])(o).children(".glass" + a).css({
                                opacity: 1
                            }), ++a > 4 && (e.hasBreak = !0, window.setTimeout(function() {
                                t.swipeUpLock = !1, ae.showNextPage()
                            }, 350))
                        })
                    }
                    return o
                }
            },
            {
                key: "renderSlide",
                value: function(e) {
                    var t, n, i, o = (0, s["default"])('<div class="swiper-container" style="z-index: 0"></div>'),
                        a = (0, s["default"])("<ul></ul>");
                    return o.css({
                        position: "absolute",
                        width: e.width ? ae.scale(e.width) : ae.scale(e.w),
                        height: e.height ? ae.scale(e.height) : ae.scale(e.h),
                        left: ae.scale(e.left),
                        top: ae.scale(e.top),
                        overflow: "hidden"
                    }), o.append(a), e.cb = function() {
                        e.slider = a.lightSlider({
                            item: 1,
                            slideMove: 1,
                            autoWidth: !0,
                            speed: 600,
                            loop: !0,
                            slideMargin: 0,
                            enableTouch: !0,
                            enableDrag: !0,
                            controls: !1
                        })
                    }, e.data.map(function(o) {
                        t = (0, s["default"])("<li></li>");
                        var r = (0, s["default"])("<div></div>");
                        (0, s["default"])(o.imgDom).css({
                            position: "absolute",
                            width: ae.scale(o.inw),
                            height: ae.scale(o.inh),
                            left: ae.scale(o.inleft),
                            top: ae.scale(o.intop)
                        }), t.css({
                            position: "relative",
                            width: e.width ? ae.scale(e.width) : ae.scale(e.w),
                            height: e.height ? ae.scale(e.height) : ae.scale(e.h),
                            overflow: "hidden",
                            background: "#ffffff",
                            lineHeight: "1.5"
                        }), r.css({
                            position: "absolute",
                            overflow: "hidden",
                            width: ae.scale(e.picWidth),
                            height: ae.scale(e.picHeight)
                        }), r.append(o.imgDom), t.append(r), o.titleText && (n = (0, s["default"])("<div></div>"), n.css({
                            position: "absolute",
                            width: ae.scale(o.titleText.width),
                            left: ae.scale(o.titleText.left),
                            top: ae.scale(o.titleText.top),
                            fontSize: ae.scale(o.titleText.fontsize),
                            lineHeight: o.titleText.lineheight,
                            color: o.titleText.fontcolor
                        }), n.append(o.titleText.con), t.append(n)), o.contentText && (i = (0, s["default"])("<div></div>"), o.contentText.opacity ? i.css({
                            position: "absolute",
                            width: "100%",
                            top: ae.scale(o.contentText.top),
                            fontSize: ae.scale(o.contentText.fontsize),
                            lineHeight: o.contentText.lineheight,
                            color: o.contentText.fontcolor,
                            textAlign: "center",
                            background: "black",
                            opacity: o.contentText.opacity
                        }) : i.css({
                            position: "absolute",
                            width: ae.scale(o.contentText.width),
                            left: ae.scale(o.contentText.left),
                            top: ae.scale(o.contentText.top),
                            fontSize: ae.scale(o.contentText.fontsize),
                            lineHeight: o.contentText.lineheight,
                            color: o.contentText.fontcolor
                        }), i.append(o.contentText.con), t.append(i)), a.append(t)
                    }), e.slider = ae.slide, o
                }
            },
            {
                key: "renderChart",
                value: function(e) {
                    var t = void 0;
                    return t = "pie" !== e.content.type ? new A["default"](e, ae.scale) : new C["default"](e, ae.scale), e.chartElement = t, e.chartElement.render(), t.getElement()
                }
            },
            {
                key: "renderEraser",
                value: function(e, t) {
                    var n = new j["default"](e, ae, t);
                    return n.getDom()
                }
            },
            {
                key: "renderCountDown",
                value: function(e, t) {
                    var n = new U["default"](e, ae.scale);
                    return n.getDom()
                }
            },
            {
                key: "renderLinkButton",
                value: function(e, t) {
                    var n = new F["default"](e, ae.scale);
                    return n.getDom()
                }
            },
            {
                key: "renderExamination",
                value: function(e, t) {
                    t.swipeUpLock = !0;
                    var n = new Z["default"](e, ae.scale, ae, t);
                    return n.getDom()
                }
            },
            {
                key: "renderAnswer",
                value: function(e, t) {
                    var n = new J["default"](e, ae.scale, ae, d["default"].contentJSON);
                    return n.getDom()
                }
            },
            {
                key: "renderExamConfirm",
                value: function(e, t) {
                    t.swipeUpLock = !0;
                    var n = new K["default"](e, t, ae.scale, ae);
                    return n.getDom()
                }
            },
            {
                key: "renderExamChoice",
                value: function(e, t) {
                    var n = new ee["default"](e, ae.scale, ae);
                    return n.getDom()
                }
            },
            {
                key: "renderInterAction",
                value: function(e, t) {
                    var n = new z["default"](e, ae.scale);
                    return n.getDom()
                }
            },
            {
                key: "renderPage",
                value: function(e) {
                    if (!e.rendered && !e.rendering) {
                        e.rendering = !0, R["default"].send("pageLoadEnd", e.index), v["default"].log("Start rendering page ", e.index);
                        var t = (0, s["default"])('<div class="maka-page maka-page-' + e.index + '"></div>');
                        t.css({
                            "z-index": this.pageZLevel.top - e.index
                        });
                        var n = (0, s["default"])("<div></div>"),
                            i = (0, s["default"])('<div class="maka-eleCanvas"></div>');
                        if (i.css(ae.contentsize), t.css({
                            "z-index": 999 - e.index
                        }), n.css({
                            position: "absolute",
                            width: 640 * ae.bgScaleRatio + "px",
                            height: 1008 * ae.bgScaleRatio + "px",
                            top: "50%",
                            left: "50%",
                            "margin-left": -320 * ae.bgScaleRatio + "px",
                            "margin-top": -504 * ae.bgScaleRatio + "px",
                            overflow: "hidden",
                            backgroundColor: e.bgcolor
                        }), e.bgpic && v["default"].trim(e.bgpic) && "0" !== v["default"].trim(e.bgpic)) {
                            if (e.bgpicCropData && !window.Config.isGif(e.bgpic && window.Config.isAppNormalMode()))(0, s["default"])(e.bgDom).css({
                                position: "absolute",
                                width: 640 * ae.bgScaleRatio + "px",
                                height: 1008 * ae.bgScaleRatio + "px",
                                top: 0,
                                left: 0,
                                userDrag: "none",
                                userSelect: "none",
                                opacity: e.opacity
                            });
                            else {
                                var o = ae.bgScaleRatio * e.bgpicwidth * (0, s["default"])(e.bgDom).context.naturalHeight / (0, s["default"])(e.bgDom).context.naturalWidth,
                                    a = 1;
                                o < document.body.clientHeight && (a = 1 + (document.body.clientHeight - o) / o), (0, s["default"])(e.bgDom).css({
                                    position: "absolute",
                                    width: Math.ceil(ae.bgScaleRatio * e.bgpicwidth * a) + "px",
                                    top: ae.bgScaleRatio * e.bgpictop + "px",
                                    left: ae.bgScaleRatio * e.bgpicleft + "px",
                                    userDrag: "none",
                                    userSelect: "none",
                                    opacity: e.opacity
                                })
                            }
                            n.append(e.bgDom)
                        }
                        t.append(n), t.append(i), (0, s["default"])(".maka-pages").append(t), e.MWChains = {}, e.content.map(function(t) {
                            var n = (0, s["default"])("<div></div>");
                            switch (console.log(t.type), t.type) {
                            case "pic":
                                n = ae.renderImg(t);
                                break;
                            case "text":
                                n = ae.renderText(t);
                                break;
                            case "ptext":
                                n = ae.renderText(t);
                                break;
                            case "pshape":
                                n = ae.renderShape(t);
                                break;
                            case "btn":
                                n = ae.renderButton(t);
                                break;
                            case "pButton":
                                n = ae.renderSpecialButton(t);
                                break;
                            case "eleform":
                                n = ae.renderFormList(t);
                                break;
                            case "comparison":
                                n = ae.renderComparison(t);
                                break;
                            case "phone_call":
                                n = ae.renderPhoneCall(t, e);
                                break;
                            case "fingerPrint":
                                n = ae.renderFingerPrint(t, e);
                                break;
                            case "glass_break":
                                n = ae.renderGlassBreak(t, e);
                                break;
                            case "slide":
                                n = ae.renderSlide(t);
                                break;
                            case "charts":
                                n = ae.renderChart(t);
                                break;
                            case "pEraser":
                                n = ae.renderEraser(t, e);
                                break;
                            case "countDown":
                                n = ae.renderCountDown(t, e);
                                break;
                            case "interActionButton":
                                n = ae.renderInterAction(t, e);
                                break;
                            case "phoneCallButton":
                                n = ae.renderPhoneCallButton(t, e);
                                break;
                            case "linkButton":
                                n = ae.renderLinkButton(t, e);
                                break;
                            case "video":
                                var o = new X["default"](t, ae.scale);
                                n = o.getDom(), t.ele = o;
                                break;
                            case "examination":
                                n = ae.renderExamination(t, e);
                                break;
                            case "answer":
                                n = ae.renderAnswer(t, e);
                                break;
                            case "examConfirm":
                                n = ae.renderExamConfirm(t, e);
                                break;
                            case "examChoice":
                                n = ae.renderExamChoice(t, ae.scale);
                                break;
                            default:
                                ae.setCommonCSS(t.dom, t)
                            }
                            t.dom = n, i.append(n), t.cb && t.cb()
                        });
                        var r = d["default"].getPage(e.index);
                        ae.hidePageElement(r), v["default"].log("Finish rendering page ", e.index), e.rendering = !1, e.rendered = !0
                    }
                }
            }]), e
        }(),
        se = new re;
    window.onresize = se.ensureCanvas, t["default"] = se, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(9),
        s = i(r),
        l = function() {
            function e() {
                o(this, e)
            }
            return a(e, [{
                key: "stopAnimation",
                value: function(e) {
                    (0, s["default"])(e, "stop")
                }
            },
            {
                key: "clearAnimation",
                value: function(e) {
                    this.stopAnimation(e), e.css({
                        transform: ""
                    }), this.stopAnimation(e)
                }
            },
            {
                key: "getLeaveEffect",
                value: function(e, t) {
                    var n = null,
                        i = window.innerHeight,
                        o = window.innerWidth;
                    return "toup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        fromScale: [1, 1],
                        fromOpacity: 1,
                        position: [0, -i, 0],
                        manual: !0,
                        easing: "linear",
                        duration: 500
                    }) : "moveup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        fromScale: [1, 1],
                        fromOpacity: 1,
                        position: [0, -i, 0],
                        manual: !0,
                        easing: "linear",
                        duration: 500
                    }) : "flipup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        fromScale: [1, 1],
                        fromOpacity: 1,
                        rotation: [Math.PI / 2, 0, 0],
                        manual: !0,
                        easing: "linear",
                        duration: 500
                    }) : "news" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromScale: [1, 1],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        fromOpacity: 1,
                        rotation: [0, 0, 5 * Math.PI],
                        scale: [.6, .6],
                        opacity: 0,
                        manual: !0,
                        easing: "ease",
                        duration: 700
                    }) : "scaleup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromOpacity: 1,
                        fromScale: [1, 1],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: [.6, .6],
                        opacity: 0,
                        manual: !0,
                        easing: "ease",
                        duration: 500
                    }) : "carouup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromOpacity: 1,
                        fromScale: [1, 1],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        position: [0, -i, 0],
                        scale: [.6, .6],
                        manual: !0,
                        easing: "ease",
                        duration: 500
                    }) : "fall" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [-o / 2, -i / 2, 0],
                        fromOpacity: 1,
                        fromScale: [1, 1],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        position: [0, i, 0],
                        rotation: [0, 0, -.3],
                        manual: !0,
                        easing: "ease",
                        duration: 800
                    }) : "" !== e && (n = (0, s["default"])(t, {
                        position: [0, -i, 0],
                        fromPosition: [0, 0, 0],
                        scale: [1, 1],
                        rotation: [0, 0, 0],
                        manual: !0,
                        easing: "linear",
                        duration: 500
                    })), n
                }
            },
            {
                key: "getEntryEffect",
                value: function(e, t) {
                    var n = null,
                        i = window.innerHeight;
                    return console.log("ety" + e), "toup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        fromScale: [1, 1],
                        fromOpacity: 1,
                        position: [0, 0, 0],
                        manual: !0,
                        easing: "linear",
                        duration: 500
                    }) : "moveup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromScale: [1, 1],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, i, 0],
                        position: [0, 0, 0],
                        manual: !0,
                        easing: "linear",
                        duration: 500
                    }) : "flipup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromScale: [1, 1],
                        fromRotation: [-Math.PI / 2, 0, 0],
                        fromPosition: [0, 0, 0],
                        rotation: [0, 0, 0],
                        manual: !0,
                        easing: "easeIn",
                        duration: 500,
                        delay: 400
                    }) : "news" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromOpacity: 0,
                        fromScale: [.6, .6],
                        fromRotation: [0, 0, 5 * Math.PI],
                        fromPosition: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: [1, 1],
                        opacity: 1,
                        manual: !0,
                        easing: "ease",
                        duration: 700,
                        delay: 1e3
                    }) : "scaleup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromOpacity: 0,
                        fromScale: [1.2, 1.2],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: [1, 1],
                        opacity: 1,
                        manual: !0,
                        easing: "ease",
                        duration: 500
                    }) : "carouup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromOpacity: 1,
                        fromScale: [.9, .9],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        position: [0, 0, 0],
                        scale: [1, 1],
                        manual: !0,
                        easing: "ease",
                        duration: 500
                    }) : "" !== e && (n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromScale: [1, 1],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        fromOpacity: 1,
                        scale: [1, 1],
                        manual: !0,
                        easing: "easeIn",
                        duration: 500
                    })), n
                }
            },
            {
                key: "getOutEffect",
                value: function(e, t) {
                    var n = null,
                        i = window.innerHeight;
                    return "toup" === e ? n = (0, s["default"])(t, {
                        position: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        transformOrigin: [0, 0, 0],
                        fromScale: [1, 1],
                        rotation: [0, 0, 0],
                        manual: !0,
                        easing: "linear",
                        duration: 500
                    }) : "flipup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromScale: [1, 1],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        rotation: [Math.PI / 2, 0, 0],
                        manual: !0,
                        easing: "easeIn",
                        duration: 500
                    }) : "moveup" === e ? n = (0, s["default"])(t, {
                        position: [0, i, 0],
                        fromPosition: [0, 0, 0],
                        transformOrigin: [0, 0, 0],
                        fromScale: [1, 1],
                        rotation: [0, 0, 0],
                        manual: !0,
                        easing: "linear",
                        duration: 500
                    }) : "news" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromOpacity: 1,
                        fromScale: [1, 1],
                        fromRotation: [0, 0, 5 * Math.PI],
                        fromPosition: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: [.6, .6],
                        opacity: 0,
                        manual: !0,
                        easing: "ease",
                        duration: 700
                    }) : "scaleup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromOpacity: 1,
                        fromScale: [1, 1],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: [1.2, 1.2],
                        opacity: 0,
                        manual: !0,
                        easing: "ease",
                        duration: 500
                    }) : "" !== e && (n = (0, s["default"])(t, {
                        fromPosition: [0, 0, 0],
                        fromRotation: [0, 0, 0],
                        position: [0, 0, 0],
                        scale: [1, 1],
                        rotation: [0, 0, 0],
                        manual: !0,
                        easing: "linear",
                        duration: 500
                    })), n
                }
            },
            {
                key: "getBackEffect",
                value: function(e, t) {
                    var n = null,
                        i = window.innerHeight;
                    return "toup" === e ? n = (0, s["default"])(t, {
                        position: [0, 0, 0],
                        fromPosition: [0, -i, 0],
                        transformOrigin: [0, 0, 0],
                        fromScale: [1, 1],
                        rotation: [0, 0, 0],
                        manual: !0,
                        easing: "linear",
                        duration: 500
                    }) : "flipup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromScale: [1, 1],
                        fromRotation: [-Math.PI / 2, 0, 0],
                        fromPosition: [0, 0, 0],
                        rotation: [0, 0, 0],
                        manual: !0,
                        easing: "easeIn",
                        duration: 500,
                        delay: 400
                    }) : "moveup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromPosition: [0, -i, 0],
                        fromScale: [1, 1],
                        fromRotation: [0, 0, 0],
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        manual: !0,
                        easing: "linear",
                        duration: 500
                    }) : "news" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromOpacity: 0,
                        fromScale: [.6, .6],
                        fromRotation: [0, 0, 5 * Math.PI],
                        fromPosition: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: [1, 1],
                        opacity: 1,
                        manual: !0,
                        easing: "ease",
                        duration: 700,
                        delay: 1e3
                    }) : "scaleup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromOpacity: 0,
                        fromScale: [.6, .6],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: [1, 1],
                        opacity: 1,
                        manual: !0,
                        easing: "ease",
                        duration: 500
                    }) : "carouup" === e ? n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromOpacity: 1,
                        fromScale: [.6, .6],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, -i, 0],
                        position: [0, 0, 0],
                        scale: [1, 1],
                        manual: !0,
                        easing: "linear",
                        duration: 500
                    }) : "" !== e && (n = (0, s["default"])(t, {
                        transformOrigin: [0, 0, 0],
                        fromPosition: [0, -i, 0],
                        fromRotation: [0, 0, 0],
                        fromOpacity: 1,
                        fromScale: [1, 1],
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: [1, 1],
                        manual: !0,
                        easing: "linear",
                        duration: 800
                    })), console.log(n), n
                }
            },
            {
                key: "debouncedCallback",
                value: function(e, t) {
                    var n = t;
                    return function() {
                        n--, 0 === n && e()
                    }
                }
            }]), e
        }();
    t["default"] = new l, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(1),
        u = i(l),
        c = n(3),
        d = i(c),
        f = n(15),
        p = i(f),
        h = n(4),
        g = i(h),
        m = function() {
            function e(t, n, i, a) {
                o(this, e), this.scale = n, this.obj = t, this.PPT = i, this.playBtnClickType = 1, this.shareExam = d["default"].isShareExam(a), this.initDom(t, n, i)
            }
            return a(e, [{
                key: "initDom",
                value: function(e, t, n) {
                    var i = {
                        avatarSide: t(140),
                        avatarMarginT: t(50),
                        avatarMarginB: t(44),
                        button: {
                            width: t(592),
                            height: t(100),
                            "font-size": t(28.8),
                            "border-radius": t(12.8),
                            "background-color": "#4A4A4A",
                            bottom: t(80)
                        }
                    },
                        o = (0, s["default"])("<div></div>"),
                        a = (0, s["default"])("<div></div>"),
                        r = (0, s["default"])('<div><img class="avatar" src="images/user.png" alt="用户头像"></div>'),
                        l = (0, s["default"])('<div class="examResult"><div class="exam-result"></div></div>'),
                        u = (0, s["default"])('<div class="lazyShow">再玩一次</div>'),
                        c = (0, s["default"])('<div class="linkIntro"><a href="http://mp.weixin.qq.com/s?__biz=MjM5ODc3OTM5Mw==&mid=204874023&idx=1&sn=d194c99b10e9dbd1c7757a79293927fc#rd">创建我的测试游戏</a></div>');
                    o.css({
                        position: "absolute",
                        width: t(e.w),
                        "font-size": t(e.fontSize || 28),
                        top: t(e.top),
                        left: t(e.left),
                        color: e.colorTheme.fontColor
                    }), r.css({
                        width: i.avatarSide,
                        height: i.avatarSide,
                        margin: i.avatarMarginT + " auto " + i.avatarMarginB,
                        "border-radius": "50%",
                        overflow: "hidden",
                        border: "1px solid rgba(0,0,0,0.1)",
                        "box-sizing": "border-box"
                    }), r.find("img").css({
                        height: "100%",
                        width: "100%",
                        "border-radius": "50%"
                    }), l.css({
                        width: "100%",
                        height: "auto",
                        padding: t(20),
                        "font-size": t(e.fontSize || 28),
                        "box-sizing": "border-box"
                    }), l.find("p").css({
                        margin: 0,
                        "line-height": t(38),
                        "text-align": "center"
                    }), u.css({
                        display: "none",
                        width: t(560),
                        height: t(80),
                        bottom: t(100),
                        left: "50%",
                        color: "#fff",
                        "line-height": t(80),
                        position: "fixed",
                        "margin-left": -.5 * parseInt(t(560)) + "px",
                        "text-align": "center",
                        "border-radius": t(6),
                        backgroundColor: "#18ccc0"
                    }), c.css({
                        display: "none",
                        width: "100%",
                        height: "40px",
                        bottom: "0px",
                        left: "0px",
                        background: "rgba(0, 0, 0, 0.5)",
                        position: "fixed",
                        "line-height": "40px",
                        "text-align": "center",
                        "font-size": "18px"
                    }), c.find("a").css({
                        color: "#fff",
                        "text-decoration": "none"
                    }), a.append(r), a.append(l), o.append(a), o.append(u), o.append(c), this.eleDom = o, e.showCallback = this.shareExam ? this.shareRender.bind(this) : this.afterRender.bind(this);
                    var d = "ontouchend" in document ? "touchstart" : "click";
                    this.eleDom.find(".lazyShow").on(d, this.playBtnClick.bind(this))
                }
            },
            {
                key: "playBtnClick",
                value: function() {
                    1 === this.playBtnClickType ? location.href = location.href.replace(/answerid=[^&]*(&)?/, "") : location.href = location.href
                }
            },
            {
                key: "shareRender",
                value: function() {
                    var e = this;
                    s["default"].ajax({
                        type: "GET",
                        data: {
                            uuid: u["default"].getUrlParameter("answerid")
                        },
                        dataType: "json",
                        url: g["default"].getExamShareUrl(),
                        success: function(t) {
                            if (200 !== t.code) return void e.fetchInfoFail(t);
                            var n = e.obj.answers[parseInt(t.data.result) - 1];
                            e.eleDom.find("img").attr("src", t.data.thumb), e.eleDom.find("div.exam-result").css({
                                backgroundColor: n.choiceBackground,
                                color: n.fontColor
                            }).html("" + n.content), e.playBtnClickType = 1, e.eleDom.find(".lazyShow").text("我也要玩").show(), 0 === window.projectVersion.vipclass && e.eleDom.find(".linkIntro").show()
                        },
                        error: function(t) {
                            e.fetchInfoFail(t)
                        }
                    })
                }
            },
            {
                key: "afterRender",
                value: function() {
                    var e = this.obj.answers,
                        t = this.PPT.examinationResult || 1,
                        n = e[t - 1],
                        i = u["default"].getCookie("openid"),
                        o = unescape(u["default"].getCookie("thumb"));
                    this.eleDom.find("div.examResult").css({
                        "background-color": n.choiceBackground,
                        color: n.fontColor
                    }), this.eleDom.find("div.exam-result").html("" + n.content), this.playBtnClickType = 2, this.eleDom.find(".lazyShow").text("再玩一次").show(), d["default"].isWX() && (this.eleDom.find("img").attr("src", o), s["default"].ajax({
                        type: "post",
                        data: {
                            result: t,
                            eventId: window.projectVersion.id,
                            openId: i,
                            thumb: o
                        },
                        dataType: "json",
                        url: g["default"].getExamAnswerUrl(),
                        success: function(e) {
                            if (200 === e.code) {
                                var t = -1 === location.href.indexOf("?") ? "?" : "&",
                                    i = "" + location.href + t + "answerid=" + e.data.uuid;
                                p["default"].wxReconfig({
                                    link: i,
                                    content: n.content
                                })
                            }
                        }
                    }))
                }
            },
            {
                key: "getDom",
                value: function() {
                    return this.eleDom
                }
            },
            {
                key: "fetchInfoFail",
                value: function(e) {
                    u["default"].error(e), this.eleDom.find("div.exam-result").html("信息获取失败"), this.playBtnClickType = 1, this.eleDom.find(".lazyShow").text("我也要玩").show(), 0 === window.projectVersion.vipclass && this.eleDom.find(".linkIntro").show()
                }
            }]), e
        }();
    t["default"] = m, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(1),
        u = (i(l), function() {
            function e(t, n) {
                o(this, e), this.scale = n, this.obj = t, this.initDom(t, n)
            }
            return a(e, [{
                key: "initDom",
                value: function(e, t) {
                    var n = (0, s["default"])("<div></div>"),
                        i = (0, s["default"])("<div></div>");
                    console.log(this.obj), n.css({
                        position: "absolute",
                        color: this.obj.ftColor,
                        background: this.obj.bgColor,
                        top: this.scale(this.obj.top),
                        left: this.scale(this.obj.left),
                        transform: "rotate(" + this.obj.rotate + "deg)",
                        opacity: this.obj.opacity,
                        fontSize: this.scale(60),
                        height: this.scale(80),
                        lineHeight: 1,
                        "box-sizing": "border-box"
                    }), i.css({
                        padding: "0 " + this.scale(30),
                        height: this.scale(80),
                        lineHeight: this.scale(80),
                        fontSize: this.scale(60)
                    });
                    var o = {
                        fontSize: this.scale(35),
                        "vertical-align": t(47),
                        margin: t(10)
                    },
                        a = {
                            "font-size": this.scale(60),
                            "vertical-align": this.scale(40)
                        };
                    this.dayLeft = (0, s["default"])("<span></span>"), this.hourLeft = (0, s["default"])("<span></span>"), this.minLeft = (0, s["default"])("<span></span>"), this.secLeft = (0, s["default"])("<span></span>"), this.dayLeft.css(a), this.hourLeft.css(a), this.minLeft.css(a), this.secLeft.css(a), this.dayText = (0, s["default"])("<span>天</span>"), this.hourText = (0, s["default"])("<span>时</span>"), this.minText = (0, s["default"])("<span>分</span>"), this.secText = (0, s["default"])("<span>秒</span>"), this.dayText.css(o), this.hourText.css(o), this.minText.css(o), this.secText.css(o), i.append(this.dayLeft), i.append(this.dayText), i.append(this.hourLeft), i.append(this.hourText), i.append(this.minLeft), i.append(this.minText), i.append(this.secLeft), i.append(this.secText), n.append(i), this.updateLeft(), this.startTimer(), this.eleDom = n
                }
            },
            {
                key: "startTimer",
                value: function() {
                    var e = this;
                    this.timer = setInterval(function() {
                        e.updateLeft()
                    }, 1e3)
                }
            },
            {
                key: "updateLeft",
                value: function() {
                    var e = this.LeftTimeText();
                    this.dayLeft.html(e.day), this.hourLeft.html(e.hour), this.minLeft.html(e.min), this.secLeft.html(e.sec)
                }
            },
            {
                key: "LeftTimeText",
                value: function() {
                    var e = Date.parse(new Date),
                        t = this.obj.deadlineTime,
                        n = t - e > 0 ? t - e : 0,
                        i = {};
                    return i.day = parseInt(n / 864e5), i.hour = parseInt(n / 36e5 % 24), i.min = parseInt(n / 6e4 % 60), i.sec = parseInt(n / 1e3 % 60), i
                }
            },
            {
                key: "getDom",
                value: function() {
                    return this.eleDom
                }
            }]), e
        }());
    t["default"] = u, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r);
    n(37);
    var l = function() {
        function e(t, n, i) {
            o(this, e), this.eleDom = (0, s["default"])('<div class="eraser"></div>');
            var a = this.eleDom,
                r = n;
            t.forceNoEffect = !0;
            var l = !1;
            i.swipeDownLock = !0, i.swipeUpLock = !0, t.showCallback = function() {
                if (!l) {
                    var e = (0, s["default"])("<div>擦一擦</div>");
                    a.append(e), e.css({
                        background: "rgba(0,0,0,0.6)",
                        color: "white",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "120px",
                        height: "30px",
                        margin: "-15px 0 0 -60px",
                        "text-align": "center",
                        "line-height": "30px",
                        "border-radius": "100px",
                        "font-size": "20px"
                    }), setTimeout(function() {
                        e.fadeOut(1e3)
                    }, 800)
                }
            };
            var u = void 0,
                c = void 0,
                d = void 0,
                f = void 0,
                p = void 0,
                h = void 0,
                g = void 0;
            if (t.w >= 640 && t.h >= 1e3) {
                u = window.innerWidth, c = window.innerHeight, d = -parseInt(r.contentsize.top), f = -parseInt(r.contentsize.left);
                var m = window.innerWidth / 640 > window.innerHeight / 1008 ? window.innerWidth / 640 : window.innerHeight / 1008;
                g = parseInt(m * t.inw), h = parseInt(m * t.inleft), p = parseInt(m * t.intop)
            } else u = parseInt(r.scale(t.w)), c = parseInt(r.scale(t.h)), f = parseInt(r.scale(t.left)), g = parseInt(r.scale(t.inw)), h = parseInt(r.scale(t.inleft)), p = parseInt(r.scale(t.intop));
            this.eleDom.css({
                position: "absolute",
                width: u,
                height: c,
                left: f,
                top: d,
                "z-index": 999
            });
            var v = parseInt(t.imgDom.context.naturalWidth),
                w = {};
            w.w = 10 * parseInt(v * u / g / 10), w.h = 10 * parseInt(w.w * c / u / 10), w.x = parseInt(h * w.w / u), w.y = parseInt(p * w.w / u), this.eleDom.append(t.imgDom), (0, s["default"])(t.imgDom).eraser({
                canvasWidth: u,
                canvasHeight: c,
                cropConfig: w,
                completeRatio: .5,
                completeFunction: function() {
                    l = !0, a.fadeOut(800, function() {
                        setTimeout(function() {
                            i.swipeDownLock = !1, i.swipeUpLock = !1, a.remove(), r.showArrow()
                        }, 1500)
                    })
                }
            }), console.log("erasor")
        }
        return a(e, [{
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]), e
    }();
    t["default"] = l, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(1),
        u = (i(l), n(3)),
        c = (i(u), function() {
            function e(t, n, i) {
                o(this, e), this.obj = t, this.initDom(t, n, i)
            }
            return a(e, [{
                key: "initDom",
                value: function(e, t, n) {
                    function i() {
                        var t = (0, s["default"])(this).parent().data("groupid");
                        1 == e.choiceType ? ((0, s["default"])(".examination-option[data-groupid=" + t + "]").find(".examination-btn").css({
                            borderColor: d.preBorder
                        }).end().find(".examination-selected").css({
                            display: "none"
                        }).end().find(".examination-cover").removeClass("active"), (0, s["default"])(this).addClass("active").parent().find(".examination-btn").css({
                            borderColor: d.aftBorder
                        }).end().find(".examination-selected").css({
                            display: "block"
                        })) : ((0, s["default"])(".examination-option[data-groupid=" + t + "]").find(".examination-btn").css("display", "none").end().find(".examination-cover").removeClass("active"), (0, s["default"])(this).addClass("active").parent().find(".examination-btn").css({
                            display: "flex"
                        }));
                        var i = (0, s["default"])(this).data("answer");
                        i == n.examinationResult ? (0, s["default"])(".examination-confirm-html[data-groupid=" + t + "]").eq(0).html("你已测试，查看结果") : (0, s["default"])(".examination-confirm-html[data-groupid=" + t + "]").eq(0).html("确定")
                    }
                    var o = (0, s["default"])('<div class="examination-option" data-groupid=' + e.groupId + "></div>"),
                        a = (0, s["default"])("<div></div>"),
                        r = (0, s["default"])('<div class="examination-btn"></div>'),
                        l = (0, s["default"])("<div data-answer=" + e.answer + ' class="examination-cover"></div>'),
                        u = (0, s["default"])('<div class="examination-selected"></div>'),
                        c = (0, s["default"])('<span class="icon-checkmark"></span>'),
                        d = e.choiceTokenCofig;
                    o.css({
                        position: "absolute",
                        width: t(e.w),
                        height: t(e.h),
                        top: t(e.top),
                        left: t(e.left)
                    }), a.css({
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backgroundColor: e.backgroundColor,
                        borderRadius: t(e.borderRadius),
                        textAlign: "center",
                        lineHeight: t(e.h),
                        color: "#fff"
                    }), l.css({
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "transparent",
                        zIndex: 999
                    }), r.css({
                        position: "absolute",
                        display: "none",
                        width: t(d.w),
                        height: t(d.h),
                        top: t(d.top),
                        left: t(d.left),
                        backgroundColor: d.backgroundColor,
                        borderColor: d.preBorder,
                        borderRadius: "50%",
                        justifyContent: "center",
                        boxShadow: "0 1px 10px 0px rgba(0, 0, 0, 0.5)",
                        alignItems: "center",
                        zIndex: 99,
                        boxSizing: "border-box"
                    }), 1 == e.choiceType && r.css({
                        display: "flex",
                        border: t(4) + " solid " + d.preBorder,
                        boxShadow: "none"
                    }), u.css({
                        display: "none",
                        borderRadius: "50%",
                        backgroundColor: d.aftBorder,
                        width: t(parseInt(d.w) - 16),
                        height: t(parseInt(d.h) - 16)
                    }), c.css({
                        fontSize: t(30),
                        color: d.aftBorder
                    }), r.append(1 == e.choiceType ? u : c), l.append(r), o.append(a), o.append(l), this.eleDom = o;
                    var f = "ontouchend" in document ? "touchstart" : "click";
                    o.on(f, ".examination-cover", i)
                }
            },
            {
                key: "getDom",
                value: function() {
                    return this.eleDom
                }
            }]), e
        }());
    t["default"] = c, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(1),
        u = (i(l), n(3)),
        c = (i(u), n(8)),
        d = i(c),
        f = function() {
            function e(t, n, i, a) {
                o(this, e), this.obj = t, this.examResultPage = -1, this.getResultPage(), this.initDom(t, n, i, a)
            }
            return a(e, [{
                key: "initDom",
                value: function(e, t, n, i) {
                    var o = this,
                        a = e.groupId,
                        r = (0, s["default"])("<div></div>"),
                        l = (0, s["default"])("<div></div>"),
                        u = (0, s["default"])('<div class="examination-confirm-html" data-groupid=' + a + ">确定</div>");
                    r.css({
                        position: "absolute",
                        width: n(e.w),
                        height: n(e.h),
                        top: n(e.top),
                        left: n(e.left),
                        fontSize: n(32),
                        backgroundColor: e.backgroundColor,
                        borderRadius: n(e.borderRadius),
                        textAlign: "center",
                        lineHeight: n(e.h),
                        color: "#fff",
                        fontWeight: "bold"
                    }), l.append(u), r.append(l);
                    var c = "ontouchend" in document ? "touchstart" : "click";
                    r.on(c, function() {
                        var e = this,
                            n = 0 === (0, s["default"])(".examination-option[data-groupid=" + a + "] .examination-cover.active").length;
                        n || (i.examinationResult = (0, s["default"])(".examination-cover.active").eq(0).data("answer"), setTimeout(function() {
                            t.swipeUpLock = !1, -1 == o.examResultPage ? i.showNextPage() : i.showPage(o.examResultPage), (0, s["default"])(e).find(".examination-confirm-html").eq(0).html("你已测试，查看结果")
                        }, 100))
                    }), this.eleDom = r
                }
            },
            {
                key: "getResultPage",
                value: function() {
                    var e = this,
                        t = d["default"].contentJSON;

                    t.some(function(t, n) {
                        var i = t.content.some(function(t) {
                            return "answer" === t.type ? (e.examResultPage = n, !0) : void 0
                        });
                        return i ? !0 : void 0
                    })
                }
            },
            {
                key: "getDom",
                value: function() {
                    return this.eleDom
                }
            }]), e
        }();
    t["default"] = f, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(1),
        u = (i(l), function() {
            function e(t, n, i, a) {
                o(this, e), this.scale = n, this.obj = t, this.page = a, this.PPT = i, this.initDom(t, n, i, a)
            }
            return a(e, [{
                key: "initDom",
                value: function(e, t, n, i) {
                    var o = this,
                        a = 0;
                    e.answers.some(function(e, t) {
                        return e.correct === !0 ? void(a = t) : void 0
                    });
                    var r = {
                        eleWidth: t(e.w || 600),
                        seqWidth: t(100),
                        questionMarginT: t(16),
                        questionMarginB: t(40),
                        radioMarginR: t(52),
                        radioMarginL: t(30),
                        radioSide: t(23),
                        radioBorder: t(4),
                        lineHeight: t(80),
                        spacing: t(20),
                        fontSize: t(e.fontSize || 28)
                    },
                        l = (0, s["default"])("<div></div>"),
                        u = (0, s["default"])("<div></div>"),
                        c = (0, s["default"])("<div>" + o.obj.order + "/" + e.qNumber + "</div>"),
                        d = (0, s["default"])("<div>" + e.question + "</div>"),
                        f = (0, s["default"])("<section></section>");
                    e.answers.forEach(function(e, t) {
                        f.append("<p data-index=" + t + '><span class="uRadio"></span><span>' + e.content + "</span></>")
                    }), l.css({
                        position: "absolute",
                        "background-color": "transparent",
                        color: e.colorTheme.fontColor,
                        top: t(e.top),
                        left: t(e.left),
                        width: r.eleWidth,
                        "font-size": r.fontSize,
                        "box-sizing": "border-sbox"
                    }), c.css({
                        width: r.seqWidth,
                        height: r.seqWidth,
                        "background-color": e.colorTheme.choiceBackground,
                        "line-height": r.seqWidth,
                        "border-radius": "50%",
                        "text-align": "center"
                    }), d.css({
                        width: "100%",
                        margin: r.questionMarginT + " 0 " + r.questionMarginB + " 0"
                    }), f.find("p").css({
                        "background-color": e.colorTheme.choiceBackground,
                        height: r.lineHeight,
                        "line-height": r.lineHeight,
                        margin: 0,
                        "margin-top": r.spacing
                    }), f.find(".uRadio").css({
                        display: "inline-block",
                        width: r.radioSide,
                        height: r.radioSide,
                        border: r.radioBorder + " solid #D6D6D6",
                        "line-height": r.radioSide,
                        "border-radius": "50%",
                        margin: "0 " + r.radioMarginR + " 0 " + r.radioMarginL,
                        "text-align": "center",
                        "background-color": "transparent",
                        "background-clip": "content-box",
                        padding: t(5)
                    }), f.find("span").css({
                        "vertical-align": "middle"
                    }), c.appendTo(u), d.appendTo(u), f.appendTo(u), u.appendTo(l), this.eleDom = l, f.on("click", "p", function() {
                        f.find("p.clicked").removeClass("clicked"), (0, s["default"])(this).addClass("clicked"), n.examinationResult[i.index] = (0, s["default"])(this).data("index") === a, o.renderStyle(), setTimeout(function() {
                            i.swipeUpLock = !1, n.showNextPage()
                        }, 100)
                    })
                }
            },
            {
                key: "getDom",
                value: function() {
                    return this.eleDom
                }
            },
            {
                key: "renderStyle",
                value: function() {
                    this.eleDom.find("p").css({
                        "background-color": this.obj.colorTheme.choiceBackground
                    }).end().find("p.clicked").css({
                        "background-color": "#aaa"
                    }).end().find("p .uRadio").css({
                        "border-color": "D6D6D6",
                        "background-color": "transparent"
                    }).end().find("p.clicked .uRadio").css({
                        "border-color": this.obj.colorTheme.fontColor,
                        "background-color": this.obj.colorTheme.fontColor
                    })
                }
            }]), e
        }());
    t["default"] = u, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(1),
        u = i(l),
        c = n(4),
        d = i(c),
        f = n(6),
        p = i(f),
        h = {
            dianzan: {
                text: "点赞"
            },
            like: {
                text: "喜欢"
            },
            sad: {
                text: "蜡烛"
            },
            flower: {
                text: "送花"
            }
        },
        g = function() {
            function e(t, n) {
                o(this, e), this.scale = n, this.obj = t, this.initDom(t, n)
            }
            return a(e, [{
                key: "svg",
                value: function t(e) {
                    var n = e,
                        t = (0, s["default"])("<div>" + n + "</div>");
                    return t.find("svg").attr("preserveAspectRatio", "none meet").css({
                        width: "100%",
                        height: "100%",
                        opacity: this.obj.opacity
                    }), t.find("[fill]").attr("fill", this.obj.ftColor), t.html()
                }
            },
            {
                key: "initDom",
                value: function(e, t) {
                    var n, i = this,
                        o = (0, s["default"])("<div></div>"),
                        a = (0, s["default"])("<div></div>"),
                        r = (0, s["default"])("<span>" + i.svg(i.obj.svgXml) + "</span>"),
                        l = (0, s["default"])("<span> " + h[i.obj.funcType].text + " </span>");
                    r.css({
                        position: "absolute",
                        width: i.scale(i.obj.ftsize),
                        height: i.scale(i.obj.ftsize),
                        left: i.scale(.6 * parseInt(i.obj.ftsize)),
                        top: "50%",
                        marginTop: i.scale(-.5 * parseInt(i.obj.ftsize))
                    }), o.css({
                        position: "absolute",
                        color: i.obj.ftColor,
                        "box-sizing": "border-box",
                        "white-space": "nowrap",
                        top: i.scale(i.obj.top),
                        left: i.scale(i.obj.left),
                        transform: "rotate(" + i.obj.rotate + "deg)",
                        opacity: i.obj.opacity,
                        fontSize: i.scale(i.obj.ftsize),
                        height: "auto",
                        "line-height": i.scale(2 * parseInt(i.obj.ftsize))
                    }), a.css({
                        paddingRight: i.scale(.6 * parseInt(i.obj.ftsize)),
                        background: i.obj.bgColor,
                        "border-radius": i.scale(i.obj.ftsize),
                        paddingLeft: i.scale(2 * parseInt(i.obj.ftsize))
                    });
                    var c = function() {
                        var e = void 0;
                        "sad" === i.obj.funcType && (e = "sad-clicked.svg"), "dianzan" === i.obj.funcType && (e = "dianzan-clicked.svg"), "like" === i.obj.funcType && (e = "heart-clicked.svg"), "flower" === i.obj.funcType && (e = "flower-clicked.svg"), i._loadSvg(d["default"].getInterActionBtn(e)).then(function(e) {
                            r[0].innerHTML = i.svg(e)
                        })
                    },
                        f = i.getButtonClick();
                    "clicked" === u["default"].getCookie(i._getButtonId()) ? f.then(function(e) {
                        c(), l[0].innerText = e.count ? e.count : 0
                    }) : a.click(function() {
                        f.then(function(e) {
                            if (!i.posting) {
                                i.posting = !0, c();
                                var t = e.count ? e.count : 0;
                                i._setButtonClick(n).then(function(e) {
                                    l[0].innerText = parseInt(t) + 1, i.posting = !0
                                })["catch"](function(e) {
                                    u["default"].error(e)
                                })
                            }
                        })
                    }.bind(i)), a.append(r), a.append(l), o.append(a), i.eleDom = o
                }
            },
            {
                key: "_getButtonId",
                value: function() {
                    return d["default"].getProjectId() + "_btn_" + this.obj.button_id
                }
            },
            {
                key: "getButtonClick",
                value: function() {
                    var e = this,
                        t = new p["default"](function(t, n) {
                            s["default"].ajax({
                                type: "get",
                                url: d["default"].eventClickUrl + "/" + d["default"].getProjectId(),
                                dataType: "json",
                                cache: !1,
                                data: {
                                    pid: d["default"].getProjectId(),
                                    btnid: e._getButtonId()
                                },
                                success: function(e) {
                                    t(e.data)
                                },
                                error: function(e) {
                                    n(e)
                                }
                            })
                        });
                    return t
                }
            },
            {
                key: "_setButtonClick",
                value: function() {
                    var e = this,
                        t = new p["default"](function(t, n) {
                            s["default"].ajax({
                                type: "post",
                                url: d["default"].eventClickUrl,
                                dataType: "json",
                                cache: !1,
                                data: {
                                    pid: d["default"].getProjectId(),
                                    btnid: e._getButtonId()
                                },
                                success: function() {
                                    u["default"].setCookie(e._getButtonId(), "clicked"), t()
                                },
                                error: function(e) {
                                    n(e)
                                }
                            })
                        });
                    return t
                }
            },
            {
                key: "_loadSvg",
                value: function(e) {
                    return new p["default"](function(t) {
                        s["default"].get(e, function(e) {
                            t(e)
                        }, "text")
                    })
                }
            },
            {
                key: "getDom",
                value: function() {
                    return this.eleDom
                }
            }]), e
        }();
    t["default"] = g, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(1),
        u = (i(l), function() {
            function e(t, n) {
                o(this, e), this.scale = n, this.obj = t, this.initDom(t, n)
            }
            return a(e, [{
                key: "initDom",
                value: function(e, t) {
                    var n = (0, s["default"])("<div></div>"),
                        i = (0, s["default"])("<div></div>"),
                        o = (0, s["default"])("<div>" + this.obj.text + "</div>");
                    n.css({
                        position: "absolute",
                        color: this.obj.ftColor,
                        top: this.scale(this.obj.top),
                        left: this.scale(this.obj.left),
                        transform: "rotate(" + this.obj.rotate + "deg)",
                        opacity: this.obj.opacity,
                        lineHeight: 1,
                        "box-sizing": "border-box"
                    }), o.css({
                        lineHeight: this.obj.lineheight,
                        fontSize: this.scale(this.obj.ftsize),
                        margin: "auto 0",
                        wordWrap: "break-word",
                        textAlign: "center",
                        width: "100%"
                    }), i.css({
                        background: this.obj.bgColor,
                        display: "flex",
                        height: this.scale(this.obj.h),
                        width: this.scale(this.obj.w),
                        borderRadius: this.scale(this.obj.borderradius * this.obj.h / 200)
                    });
                    var a = void 0;
                    a = 0 === e.url.indexOf("http:") || 0 === e.url.indexOf("https:") ? e.url : "http://" + e.url, n.on("click", function() {
                        window.open(a)
                    }), o.appendTo(i), i.appendTo(n), this.eleDom = n
                }
            },
            {
                key: "getDom",
                value: function() {
                    return this.eleDom
                }
            }]), e
        }());
    t["default"] = u, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(1),
        u = (i(l), function() {
            function e(t, n) {
                o(this, e), this.scale = n, this.obj = t, this.initDom(t, n)
            }
            return a(e, [{
                key: "initDom",
                value: function(e, t) {
                    var i = (0, s["default"])("<div></div>"),
                        o = (0, s["default"])("<div></div>"),
                        a = n(48),
                        r = (0, s["default"])("<div>" + a + "</div>");
                    r.find("svg").attr("preserveAspectRatio", "none meet").css({
                        width: "100%",
                        height: "100%",
                        opacity: this.obj.opacity
                    }), r.find("[fill]").attr("fill", this.obj.ftColor);
                    var l = (0, s["default"])("<span>" + r.html() + "</span>"),
                        u = (0, s["default"])("<span>" + this.obj.text + "</span>");
                    l.css({
                        position: "absolute",
                        left: this.scale((parseInt(this.obj.ftsize, 10) + 40) / 2),
                        top: "50%",
                        "margin-left": "-" + this.scale(parseInt(this.obj.ftsize) / 2),
                        "margin-top": "-" + this.scale(parseInt(this.obj.ftsize) / 2),
                        width: this.scale(this.obj.ftsize),
                        height: this.scale(this.obj.ftsize),
                        fontSize: this.scale(this.obj.ftsize)
                    }), i.css({
                        position: "absolute",
                        color: this.obj.ftColor,
                        top: this.scale(this.obj.top),
                        left: this.scale(this.obj.left),
                        transform: "rotate(" + this.obj.rotate + "deg)",
                        opacity: this.obj.opacity,
                        fontSize: this.scale(this.obj.ftsize),
                        "box-sizing": "border-box"
                    }), o.css({
                        paddingRight: this.scale(20),
                        background: this.obj.bgColor,
                        borderRadius: this.scale(this.obj.borderradius * (this.obj.ftsize + 40) / 200),
                        lineHeight: this.scale(this.obj.ftsize + 40),
                        "text-decoration": "none",
                        "white-space": "nowrap",
                        paddingLeft: this.scale(parseInt(this.obj.ftsize, 10) + 40)
                    }), o.append(l), o.append(u), i.append(o), i.on("click", function() {
                        window.open("tel:" + e.tel)
                    }), this.eleDom = i
                }
            },
            {
                key: "getDom",
                value: function() {
                    return this.eleDom
                }
            }]), e
        }());
    t["default"] = u, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        s = function(e, t, n) {
            for (var i = !0; i;) {
                var o = e,
                    a = t,
                    r = n;
                i = !1, null === o && (o = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(o, a);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(r)
                }
                var u = Object.getPrototypeOf(o);
                if (null === u) return;
                e = u, t = a, n = r, i = !0, s = u = void 0
            }
        },
        l = n(13),
        u = i(l),
        c = n(1),
        d = (i(c), n(11)),
        f = i(d),
        p = function(e) {
            function t(e, n) {
                o(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, n)
            }
            return a(t, e), r(t, [{
                key: "_getShowSwipe",
                value: function(e) {
                    return e.content.data.length > 1
                }
            },
            {
                key: "_prepareElements",
                value: function() {
                    s(Object.getPrototypeOf(t.prototype), "_prepareElements", this).call(this), this._prepareSwipeLegendElm()
                }
            },
            {
                key: "_prepareWrapperElm",
                value: function() {
                    s(Object.getPrototypeOf(t.prototype), "_prepareWrapperElm", this).call(this), this._prepareSwipeLegendElm(), this.showSwipe && this.wrapperElm.append(this.swipeLegendElm)
                }
            },
            {
                key: "_prepareChartOption",
                value: function() {
                    var e = s(Object.getPrototypeOf(t.prototype), "_prepareChartOption", this).call(this);
                    return e = (0, f["default"])({}, e, {
                        plotOptions: {
                            pie: {
                                allowPointSelect: !0,
                                dataLabels: {
                                    formatter: function() {
                                        return this.percentage > 5 ? this.percentage.toFixed(1) + "%" : ""
                                    },
                                    distance: -parseInt(this.scale(this.width).replace("px", "")) / 6,
                                    color: "white",
                                    style: {
                                        fontSize: "18px"
                                    }
                                },
                                showInLegend: !0
                            }
                        }
                    })
                }
            },
            {
                key: "_prepareSwipeLegendElm",
                value: function() {
                    var e = this;
                    e.swipeLegendElm = $('<div class="chart-swipe-legend"></div>'), e.swipeLegendElm.css({
                        position: "absolute",
                        left: 0,
                        top: e.scale(10),
                        width: e.scale(e.width),
                        "text-align": "center",
                        "z-index": 0
                    });
                    var t = e.obj.content.options.lineColor || "gray";
                    if (e.showSwipe) {
                        var n = e.obj.content.data;
                        n.forEach(function(n, i) {
                            var o = $('<span class="swipe-legend-title">' + n.name + "</span>");
                            o.css({
                                margin: e.scale(10),
                                fontSize: 0 === i ? e.scale(24) : e.scale(20),
                                opacity: 0 === i ? 1 : .3,
                                color: t
                            }), o.click(function() {
                                e._renderSwipeLegend(!1), e.curChartIndex = $(this).index(), e._renderSwipeLegend(!0), e.singleSeries(e.curChartIndex, e.obj.content.type)
                            }), e.swipeLegendElm.append(o)
                        }.bind(e))
                    }
                    return this.swipeLegendElm
                }
            },
            {
                key: "_renderSwipeLegend",
                value: function(e) {
                    this.wrapperElm.find(".swipe-legend-title").eq(this.curChartIndex).css({
                        fontSize: e ? this.scale(24) : this.scale(20),
                        opacity: e ? 1 : .3
                    })
                }
            }]), t
        }(u["default"]);
    t["default"] = p, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(1),
        u = i(l),
        c = n(7),
        d = i(c),
        f = n(4),
        p = i(f),
        h = n(49),
        g = i(h),
        m = n(9),
        v = i(m),
        w = function() {
            function e() {
                o(this, e), this.element = (0, s["default"])(".maka-preload"), this.zoomElement = this.element.find(".zoom"), this.loadElement = this.element.find(".load"), this.pie1Element = this.loadElement.find(".pie1"), this.pie2Element = this.loadElement.find(".pie2"), this.thumbElement = this.loadElement.find(".thumb"), this.percentageElement = this.element.find(".percentage"), this.markElement = this.element.find(".mark"), this.percent = 0, this.degree = 0, this.steps = 0, this.curStep = 0, this.enabled = !0, this.callback = function() {}, this.finishDelay = 500, this.showPreload = !1
            }
            return a(e, [{
                key: "showPreloadArea",
                value: function() {
                    this.zoomElement.hide(), this.loadElement.fadeIn(), this.percentageElement.fadeIn(), this.showPreload = !0
                }
            },
            {
                key: "increaseProgress",
                value: function() {
                    if (u["default"].log("increaseProgress, step progress: " + (this.curStep + 1) + "/" + this.steps), this.enabled) {
                        if (0 === this.percent) var e = setInterval(function() {
                            if (this.showPreload) {
                                var t = parseInt(360 * this.percent),
                                    n = this;
                                t <= this.degree && this.degree < 359 ? this.degree += .01 : 360 === t ? this.degree += 20 : t - this.degree > 180 ? this.degree += 2 : t - this.degree > 40 ? this.degree += 1 : t - this.degree < 10 && 330 > t ? this.degree += 1 : t > this.degree && (this.degree += .5), this.degree > 360 && (this.degree = 360, clearInterval(e), d["default"].send("homeEnd"), p["default"].isTemplate() && !p["default"].isRemoveDesignerAd(), setTimeout(function() {
                                    n.callback()
                                }, this.finishDelay)), this.loading(this.degree)
                            }
                        }.bind(this), 1);
                        this.curStep++, this.percent = this.curStep / this.steps, console.log("per" + this.percent)
                    }
                }
            },
            {
                key: "loading",
                value: function(e) {
                    180 >= e && e >= 0 ? this.pie1Element.css({
                        transform: "rotate(" + e + "deg)"
                    }) : 360 >= e && e > 180 && (this.pie1Element.css({
                        transform: "rotate(180deg)"
                    }), this.pie2Element.css({
                        "border-radius": "155px",
                        background: "rgba(252, 157, 170, 0.5)",
                        transform: "rotate(" + e + "deg)"
                    })), this.percentageElement.find(".num").html(parseInt(e / 3.6))
                }
            },
            {
                key: "increaseSteps",
                value: function(e) {
                    return this.steps += e, this.steps
                }
            },
            {
                key: "enable",
                value: function() {
                    this.enabled = !0
                }
            },
            {
                key: "disable",
                value: function() {
                    this.enabled = !1
                }
            },
            {
                key: "onReady",
                value: function(e) {
                    this.callback = e
                }
            },
            {
                key: "showDesingerAd",
                value: function() {
                    var e = this;
                    this.element.html("");
                    var t = (0, s["default"])("<img/>");
                    t.attr({
                        src: g["default"]
                    }), this.element.css({
                        "text-align": "center"
                    }), window.innerHeight / 646 > window.innerWidth / 410 ? t.css({
                        width: "100%"
                    }) : t.css({
                        height: "100%"
                    }), t.hide(), this.element.append(t), t.fadeIn(), t.on("touchstart mousedown", function(t) {
                        t.stopPropagation(), t.preventDefault(), setTimeout(function() {
                            e.callback(), (0, s["default"])(".maka-preload").addClass("pt-page-moveToTop").fadeOut(3e3)
                        }, 100)
                    })
                }
            },
            {
                key: "hide",
                value: function() {
                    (0, v["default"])((0, s["default"])(".maka-preload"), {
                        fromOpacity: 1,
                        opacity: 0,
                        easing: "ease",
                        duration: 300,
                        complete: function() {
                            (0, s["default"])(".maka-preload").hide()
                        }
                    })
                }
            }]), e
        }();
    t["default"] = w, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(4),
        u = i(l),
        c = n(1),
        d = i(c),
        f = n(12),
        p = i(f),
        h = n(6),
        g = i(h),
        m = function() {
            function e(t, n) {
                o(this, e), this.obj = t, this.scale = n, this._prepareElements()
            }
            return a(e, [{
                key: "_prepareElements",
                value: function() {
                    var e = this,
                        t = (0, s["default"])("<div></div>"),
                        n = (0, s["default"])("<a></a>");
                    if (t.css({
                        position: "absolute",
                        width: this.scale(this.obj.width),
                        height: this.scale(this.obj.tl),
                        top: this.scale(this.obj.top),
                        left: this.scale(this.obj.left),
                        transform: "rotate(" + this.obj.rotate + ")deg",
                        opacity: this.obj.opacity
                    }), "interaction" === this.obj.model_type && t.css({
                        width: "auto"
                    }), "link" === this.obj.model_type || "phone" === this.obj.model_type || "interaction" === this.obj.model_type) {
                        var i = (0, s["default"])("<div></div>"),
                            o = (0, s["default"])("<div></div>");
                        n.css({
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            animationDuration: this.obj.speed + "ms"
                        }), i.css({
                            position: "absolute",
                            width: this.scale(this.obj.picwidth),
                            height: this.scale(this.obj.picheight)
                        });
                        var a = (0, s["default"])(this.obj.buttonSvg);
                        switch (a.css({
                            width: this.scale(this.obj.picwidth),
                            height: this.scale(this.obj.picheight)
                        }), a.find("[fill]").attr({
                            fill: this.obj.ftcolor
                        }), i.append(a), o.css({
                            position: "absolute",
                            left: this.scale(this.obj.picwidth),
                            fontSize: this.scale(this.obj.ftsize),
                            color: this.obj.ftcolor,
                            lineHeight: this.scale(this.obj.lineheight),
                            marginLeft: "5px"
                        }), this.obj.model_type) {
                        case "link":
                            n.attr({
                                href: this._url(this.obj.url)
                            }), o.text(this.obj.con);
                            break;
                        case "phone":
                            o.text(this.obj.con), this.obj.phoneNumber && n.attr("href", "tel:" + this.obj.phoneNumber);
                            break;
                        case "interaction":
                            var r = this,
                                l = function() {
                                    r._loadSvg(u["default"].getPButtonUrl(p["default"].pButtonSvg[r.obj.after_pic_id])).then(function(e) {
                                        console.log(r.obj), r.obj.buttonAfterSvg = (0, s["default"])(e), r.obj.buttonAfterSvg.find("[fill]").attr({
                                            fill: r.obj.ftcolor
                                        }), a.children().replaceWith(r.obj.buttonAfterSvg)
                                    })
                                };
                            "clicked" === d["default"].getCookie(this._getButtonId()) ? l() : a.click(function() {
                                e.posting || (e.posting = !0, l(), e._setButtonClick().then(function(t) {
                                    o.text(t), e.posting = !0
                                })["catch"](function(e) {
                                    d["default"].error(e)
                                }))
                            }.bind(this)), this._getButtonClick().then(function(t) {
                                t.count ? (e.buttonClickCount = t.count, o.text(e.buttonClickCount)) : (e.buttonClickCount = 0, o.text(e.buttonClickCount))
                            }.bind(this))["catch"](function(e) {
                                d["default"].error(e)
                            })
                        }
                        n.append(i), n.append(o)
                    } else if ("count_down" === this.obj.model_type) {
                        var c, f, h, g, m, v, w = (0, s["default"])('<span id="day"></span>'),
                            b = (0, s["default"])('<span id="hour"></span>'),
                            y = (0, s["default"])('<span id="minute"></span>'),
                            k = (0, s["default"])('<span id="second"></span>'),
                            x = 1e3,
                            P = 60 * x,
                            A = 60 * P,
                            S = 24 * A;
                        n.css({
                            position: "absolute",
                            width: "100%",
                            animationDuration: this.obj.speed + "ms",
                            textAlign: "center",
                            color: this.obj.ftcolor,
                            lineHeight: this.scale(this.obj.lineheight),
                            fontSize: this.scale(this.obj.ftsize)
                        });
                        var C = this.obj.deadline_date + " " + this.obj.deadline_time;
                        C = C.replace(/-/g, "/");
                        var I = new Date(C),
                            E = I.getTime();
                        if (m = new Date, v = m.getTime(), E - v > 0) {
                            c = Math.floor((E - v) / S), f = Math.floor((E - v) / A) % 24, h = Math.floor((E - v) / P) % 60, g = Math.floor((E - v) / x) % 60, w.append(10 > c ? "0" + c : c), b.append(10 > f ? "0" + f : f), y.append(10 > h ? "0" + h : h), k.append(10 > g ? "0" + g : g), n.append(w), n.append((0, s["default"])('<span class="timeSpace">:</span>')), n.append(b), n.append((0, s["default"])('<span class="timeSpace">:</span>')), n.append(y), n.append((0, s["default"])('<span class="timeSpace">:</span>')), n.append(k);
                            var T = setInterval(function() {
                                v += 1e3, E - v ? (c = Math.floor((E - v) / S), f = Math.floor((E - v) / A) % 24, h = Math.floor((E - v) / P) % 60, g = Math.floor((E - v) / x) % 60, window.document.getElementById("day").innerHTML = 10 > c ? "0" + c : c, window.document.getElementById("hour").innerHTML = 10 > f ? "0" + f : f, window.document.getElementById("minute").innerHTML = 10 > h ? "0" + h : h, window.document.getElementById("second").innerHTML = 10 > g ? "0" + g : g) : clearInterval(T)
                            }, 1e3)
                        } else n.append("00"), n.append((0, s["default"])('<span class="time-space">:</span>')), n.append("00"), n.append((0, s["default"])('<span class="time-space">:</span>')), n.append("00"), n.append((0, s["default"])('<span class="time-space">:</span>')), n.append("00")
                    }
                    t.append(n), this.eleDom = t
                }
            },
            {
                key: "_url",
                value: function(e) {
                    return -1 === e.indexOf("http") ? "http://" + e : e
                }
            },
            {
                key: "_getButtonId",
                value: function() {
                    return u["default"].getProjectId() + "_btn_" + this.obj.button_id
                }
            },
            {
                key: "_setButtonClick",
                value: function() {
                    var e = this,
                        t = new g["default"](function(t, n) {
                            s["default"].ajax({
                                type: "post",
                                url: u["default"].eventClickUrl,
                                dataType: "json",
                                cache: !1,
                                data: {
                                    pid: u["default"].getProjectId(),
                                    btnid: e._getButtonId()
                                },
                                success: function() {
                                    d["default"].setCookie(e._getButtonId(), "clicked"), t(++e.buttonClickCount)
                                },
                                error: function(e) {
                                    n(e)
                                }
                            })
                        });
                    return t
                }
            },
            {
                key: "_getButtonClick",
                value: function() {
                    var e = this,
                        t = new g["default"](function(t, n) {
                            s["default"].ajax({
                                type: "get",
                                url: u["default"].eventClickUrl + "/" + u["default"].getProjectId(),
                                dataType: "json",
                                cache: !1,
                                data: {
                                    btnid: e._getButtonId()
                                },
                                success: function(e) {
                                    t(e.data)
                                },
                                error: function(e) {
                                    n(e)
                                }
                            })
                        });
                    return t
                }
            },
            {
                key: "_loadSvg",
                value: function(e) {
                    return console.log(e), new g["default"](function(t) {
                        s["default"].get(e, function(e) {
                            t(e)
                        }, "text")
                    })
                }
            },
            {
                key: "getElement",
                value: function() {
                    return this.eleDom
                }
            }]), e
        }();
    t["default"] = m, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(1),
        u = i(l),
        c = function() {
            function e(t, n) {
                o(this, e), this.scale = n, this.obj = t, this.initDom()
            }
            return a(e, [{
                key: "initDom",
                value: function() {
                    var e, t = this.obj,
                        n = this,
                        i = (0, s["default"])("<div></div>"),
                        o = (0, s["default"])("<div></div>");
                    if (i.css({
                        position: "absolute",
                        width: n.scale(t.w),
                        height: n.scale(t.h),
                        top: n.scale(t.top),
                        left: n.scale(t.left),
                        transform: u["default"].rotate(t.rotate)
                    }), o.css({
                        position: "absolute",
                        width: n.scale(t.w),
                        height: n.scale(t.h)
                    }), t.svgXml) {
                        e = (0, s["default"])(t.svgXml), e.css({
                            position: "absolute",
                            width: n.scale(t.w),
                            height: n.scale(t.h),
                            opacity: t.opacity
                        });
                        var a = (0, s["default"])("<div></div>");
                        if (a.append(e), a.find("svg").get(0).setAttribute("preserveAspectRatio", "none meet"), console.log("rendershaper", t), "" === t.shapecolor && (t.shapecolor = "rgba(0,0,0,0)"), !t.colorScheme && t.shapecolor) e.find("[fill]").attr({
                            fill: t.shapecolor
                        });
                        else {
                            var r = this.obj.colorScheme;
                            for (var l in r) e.find("." + l + "-fill").attr("fill", r[l]), e.find("." + l + "-stroke").attr("stroke", r[l])
                        }
                    } else e = (0, s["default"])("<div></div>"), e.css({
                        position: "absolute",
                        width: n.scale(t.w),
                        height: n.scale(t.h),
                        backgroundColor: t.shapecolor,
                        opacity: t.opacity
                    });
                    o.append(e), i.append(o), this.eleDom = i
                }
            },
            {
                key: "getElement",
                value: function() {
                    return this.eleDom
                }
            }]), e
        }();
    t["default"] = c, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {

                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(1),
        u = (i(l), function() {
            function e(t, n) {
                o(this, e), this.scale = n, this.obj = t, this.initDom(t, n)
            }
            return a(e, [{
                key: "initDom",
                value: function(e, t) {
                    var n = (0, s["default"])("<div></div>"),
                        i = (0, s["default"])('<iframe frameborder="0" allowfullscreen></iframe>');
                    if (0 === e.urlCon.indexOf("http:") || 0 === e.urlCon.indexOf("https:")) this.urlCon = e.urlCon;
                    else {
                        var o = unescape(e.urlCon),
                            a = o.split("src=");
                        a.length > 1 && a[1].split('"').length > 1 && (this.urlCon = a[1].split('"')[1])
                    }
                    n.css({
                        position: "absolute",
                        top: this.scale(this.obj.top),
                        left: this.scale(this.obj.left),
                        height: this.scale(this.obj.h),
                        width: this.scale(this.obj.w),
                        background: "black"
                    }), i.css({
                        height: "100%",
                        width: "100%"
                    }), i.appendTo(n), this.eleDom = n
                }
            },
            {
                key: "getDom",
                value: function() {
                    return this.eleDom
                }
            },
            {
                key: "removeSrc",
                value: function() {
                    var e = this.eleDom;
                    console.log("remove src"), (0, s["default"])(e.find("iframe")).attr({
                        src: ""
                    })
                }
            },
            {
                key: "setSrc",
                value: function() {
                    var e = this.eleDom,
                        t = this.urlCon;
                    console.log("set src"), (0, s["default"])(e.find("iframe")).attr({
                        src: t
                    })
                }
            }]), e
        }());
    t["default"] = u, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var o = n(2),
        a = i(o);
    !
    function(e) {
        var t = {
            init: function(n) {
                return this.each(function() {
                    var i = e(this),
                        o = i.data("eraser");
                    if (!o) {
                        var a = function() {
                            var a = e("<canvas/>"),
                                r = a.get(0),
                                s = r.getContext("2d"),
                                l = window.devicePixelRatio || 1,
                                u = s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1,
                                c = l / u,
                                d = n.canvasWidth,
                                f = n.canvasHeight,
                                p = d * c,
                                h = f * c,
                                g = i.offset(),
                                m = (n && n.size ? n.size : 40) * c,
                                v = n && n.completeRatio ? n.completeRatio : .7,
                                w = n && n.completeFunction ? n.completeFunction : null,
                                b = n && n.progressFunction ? n.progressFunction : null,
                                y = "auto" == i.css("z-index") ? 1 : i.css("z-index"),
                                k = [],
                                x = Math.floor(p / m),
                                P = x * Math.floor(h / m),
                                A = P,
                                S = i[0];
                            for (i.after(a), r.id = S.id, r.className = S.className, r.width = p, r.height = h, r.style.width = d.toString() + "px", r.style.height = f.toString() + "px", s.drawImage(S, -n.cropConfig.x, -n.cropConfig.y, n.cropConfig.w, n.cropConfig.h, 0, 0, p, h), i.remove(), s.globalCompositeOperation = "destination-out", s.strokeStyle = "rgba(255,0,0,255)", s.lineWidth = m, s.lineCap = "round", a.bind("mousedown.eraser", t.mouseDown), a.bind("touchstart.eraser", t.touchStart), a.bind("touchmove.eraser", t.touchMove), a.bind("touchend.eraser", t.touchEnd); A--;) k.push(1);
                            o = {
                                posX: g.left,
                                posY: g.top,
                                touchDown: !1,
                                touchID: -999,
                                touchX: 0,
                                touchY: 0,
                                ptouchX: 0,
                                ptouchY: 0,
                                canvas: a,
                                ctx: s,
                                w: p,
                                h: h,
                                scaleRatio: c,
                                source: S,
                                size: m,
                                parts: k,
                                colParts: x,
                                numParts: P,
                                ratio: 0,
                                complete: !1,
                                completeRatio: v,
                                completeFunction: w,
                                progressFunction: b,
                                zIndex: y
                            }, a.data("eraser", o), e(window).resize(function() {
                                var e = a.offset();
                                o.posX = e.left, o.posY = e.top
                            })
                        };
                        this.complete && this.naturalWidth > 0 ? a() : i.load(a)
                    }
                })
            },
            touchStart: function(n) {
                var i = e(this),
                    o = i.data("eraser");
                if (!o.touchDown) {
                    var a = n.originalEvent.changedTouches[0],
                        r = a.pageX - o.posX,
                        s = a.pageY - o.posY;
                    r *= o.scaleRatio, s *= o.scaleRatio, t.evaluatePoint(o, r, s), o.touchDown = !0, o.touchID = a.identifier, o.touchX = r, o.touchY = s, n.preventDefault()
                }
            },
            touchMove: function(n) {
                var i = e(this),
                    o = i.data("eraser");
                if (o.touchDown) for (var a = n.originalEvent.changedTouches, r = a.length; r--;) if (a[r].identifier == o.touchID) {
                    var s = a[r].pageX - o.posX,
                        l = a[r].pageY - o.posY;
                    s *= o.scaleRatio, l *= o.scaleRatio, t.evaluatePoint(o, s, l), o.ctx.beginPath(), o.ctx.moveTo(o.touchX, o.touchY), o.touchX = s, o.touchY = l, o.ctx.lineTo(o.touchX, o.touchY), o.ctx.stroke(), i.css({
                        "z-index": i.css("z-index") == o.zIndex ? parseInt(o.zIndex) + 1 : o.zIndex
                    }), n.preventDefault();
                    break
                }
            },
            touchEnd: function(t) {
                var n = e(this),
                    i = n.data("eraser");
                if (i.touchDown) for (var o = t.originalEvent.changedTouches, a = o.length; a--;) if (o[a].identifier == i.touchID) {
                    i.touchDown = !1, t.preventDefault();
                    break
                }
            },
            evaluatePoint: function(e, t, n) {
                var i = Math.floor(t / e.size) + Math.floor(n / e.size) * e.colParts;
                i >= 0 && i < e.numParts && (e.ratio += e.parts[i], e.parts[i] = 0, e.complete || (i = e.ratio / e.numParts, i >= e.completeRatio ? (e.complete = !0, null != e.completeFunction && e.completeFunction()) : null != e.progressFunction && e.progressFunction(i)))
            },
            mouseDown: function(n) {
                var i = e(this),
                    o = i.data("eraser"),
                    a = n.pageX - o.posX,
                    r = n.pageY - o.posY;
                a *= o.scaleRatio, r *= o.scaleRatio, t.evaluatePoint(o, a, r), o.touchDown = !0, o.touchX = a, o.touchY = r, o.ctx.beginPath(), o.ctx.moveTo(o.touchX - 1, o.touchY), o.ctx.lineTo(o.touchX, o.touchY), o.ctx.stroke(), i.bind("mousemove.eraser", t.mouseMove), e(document).bind("mouseup.eraser", o, t.mouseUp), n.preventDefault()
            },
            mouseMove: function(n) {
                var i = e(this),
                    o = i.data("eraser"),
                    a = n.pageX - o.posX,
                    r = n.pageY - o.posY;
                a *= o.scaleRatio, r *= o.scaleRatio, t.evaluatePoint(o, a, r), o.ctx.beginPath(), o.ctx.moveTo(o.touchX, o.touchY), o.touchX = a, o.touchY = r, o.ctx.lineTo(o.touchX, o.touchY), o.ctx.stroke(), i.css({
                    "z-index": i.css("z-index") == o.zIndex ? parseInt(o.zIndex) + 1 : o.zIndex
                }), n.preventDefault()
            },
            mouseUp: function(t) {
                var n = t.data,
                    i = n.canvas;
                n.touchDown = !1, i.unbind("mousemove.eraser"), e(document).unbind("mouseup.eraser"), t.preventDefault()
            },
            clear: function() {
                var t = e(this),
                    n = t.data("eraser");
                if (n) {
                    n.ctx.clearRect(0, 0, n.w, n.h), console.log("clear", n);
                    for (var i = n.numParts; i--;) n.parts[i] = 0;
                    n.ratio = n.numParts, n.complete = !0, null != n.completeFunction && n.completeFunction()
                }
            },
            size: function(t) {
                var n = e(this),
                    i = n.data("eraser");
                i && t && (i.size = t, i.ctx.lineWidth = t)
            },
            reset: function() {
                var t = e(this),
                    n = t.data("eraser");
                if (n) {
                    n.ctx.globalCompositeOperation = "source-over", n.ctx.drawImage(n.source, 0, 0, n.w, n.h), n.ctx.globalCompositeOperation = "destination-out";
                    for (var i = n.numParts; i--;) n.parts[i] = 1;
                    n.ratio = 0, n.complete = !1, n.touchDown = !1
                }
            },
            progress: function() {
                var t = e(this),
                    n = t.data("eraser");
                return n ? n.ratio / n.numParts : 0
            }
        };
        e.fn.eraser = function(n) {
            return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not yet exist on jQuery.eraser") : t.init.apply(this, arguments)
        }
    }(a["default"])
}, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e) {
        var t = e.reduce(function(e, t, n, i) {
            if (1 === e.length) return e;
            var o = t.content.some(function(e) {
                return "answer" === e.type ? !0 : void 0
            });
            return o ? (e.push(t), e) : e
        }, []);
        return 0 !== t.length ? t : e
    }
    function a(e) {
        console.log("patchpage", e), "undefined" === e.bgpic && (e.bgpic = null)
    }
    function r(e) {
		/////////////*******************修正svg路径
		delete e.height, e.rotate = parseInt(e.rotate), e.shape && "0" !== e.shape || (e.shape = "1.svg"), e.shape.indexOf("/SVG/") < 0 && (e.shape = e.shape), e.h = e.h < 0 ? 0 : e.h, e.shapecolor && (e.colorScheme = {
        //delete e.height, e.rotate = parseInt(e.rotate), e.shape && "0" !== e.shape || (e.shape = "1.svg"), e.shape.indexOf("/SVG/") < 0 && (e.shape = "svg/Default/SVG/" + e.shape), e.h = e.h < 0 ? 0 : e.h, e.shapecolor && (e.colorScheme = {
            color1: e.shapecolor
        }, delete e.shapecolor)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = n(3),
        l = i(s);
    t["default"] = function(e) {
        for (var t in e) {
            a(e[t]);
            var n = e[t].content;
            for (var i in n) {
                var s = n[i];
                switch (s.type) {
                case "charts":
                    s.content || delete n[i];
                    break;
                case "pshape":
                    r(s);
                    break;
                case "linkButton":
                    s.url || delete n[i]
                }
            }
        }
        return l["default"].isExam(e) && l["default"].isShareExam() && (e = o(e)), e
    }, e.exports = t["default"]
}, function(e, t) {},
39, function(e, t, n) {
    "use strict";
    var i = n(5);
    e.exports = i, i.prototype.done = function(e, t) {
        var n = arguments.length ? this.then.apply(this, arguments) : this;
        n.then(null, function(e) {
            setTimeout(function() {
                throw e
            }, 0)
        })
    }
}, function(e, t, n) {
    "use strict";
    function i(e) {
        var t = new o(o._61);
        return t._81 = 1, t._65 = e, t
    }
    var o = n(5);
    e.exports = o;
    var a = i(!0),
        r = i(!1),
        s = i(null),
        l = i(void 0),
        u = i(0),
        c = i("");
    o.resolve = function(e) {
        if (e instanceof o) return e;
        if (null === e) return s;
        if (void 0 === e) return l;
        if (e === !0) return a;
        if (e === !1) return r;
        if (0 === e) return u;
        if ("" === e) return c;
        if ("object" == typeof e || "function" == typeof e) try {
            var t = e.then;
            if ("function" == typeof t) return new o(t.bind(e))
        } catch (n) {
            return new o(function(e, t) {
                t(n)
            })
        }
        return i(e)
    }, o.all = function(e) {
        var t = Array.prototype.slice.call(e);
        return new o(function(e, n) {
            function i(r, s) {
                if (s && ("object" == typeof s || "function" == typeof s)) {
                    if (s instanceof o && s.then === o.prototype.then) {
                        for (; 3 === s._81;) s = s._65;
                        return 1 === s._81 ? i(r, s._65) : (2 === s._81 && n(s._65), void s.then(function(e) {
                            i(r, e)
                        }, n))
                    }
                    var l = s.then;
                    if ("function" == typeof l) {
                        var u = new o(l.bind(s));
                        return void u.then(function(e) {
                            i(r, e)
                        }, n)
                    }
                }
                t[r] = s, 0 === --a && e(t)
            }
            if (0 === t.length) return e([]);
            for (var a = t.length, r = 0; r < t.length; r++) i(r, t[r])
        })
    }, o.reject = function(e) {
        return new o(function(t, n) {
            n(e)
        })
    }, o.race = function(e) {
        return new o(function(t, n) {
            e.forEach(function(e) {
                o.resolve(e).then(t, n)
            })
        })
    }, o.prototype["catch"] = function(e) {
        return this.then(null, e)
    }
}, function(e, t, n) {
    "use strict";
    var i = n(5);
    e.exports = i, i.prototype["finally"] = function(e) {
        return this.then(function(t) {
            return i.resolve(e()).then(function() {
                return t
            })
        }, function(t) {
            return i.resolve(e()).then(function() {
                throw t
            })
        })
    }
}, function(e, t, n) {
    "use strict";
    e.exports = n(5), n(41), n(43), n(42), n(45), n(46)
}, function(e, t, n) {
    "use strict";
    function i(e, t) {
        for (var n = [], i = 0; t > i; i++) n.push("a" + i);
        var o = ["return function (" + n.join(",") + ") {", "var self = this;", "return new Promise(function (rs, rj) {", "var res = fn.call(", ["self"].concat(n).concat([s]).join(","), ");", "if (res &&", '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ") {rs(res);}", "});", "};"].join("");
        return Function(["Promise", "fn"], o)(a, e)
    }
    function o(e) {
        for (var t = Math.max(e.length - 1, 3), n = [], i = 0; t > i; i++) n.push("a" + i);
        var o = ["return function (" + n.join(",") + ") {", "var self = this;", "var args;", "var argLength = arguments.length;", "if (arguments.length > " + t + ") {", "args = new Array(arguments.length + 1);", "for (var i = 0; i < arguments.length; i++) {", "args[i] = arguments[i];", "}", "}", "return new Promise(function (rs, rj) {", "var cb = " + s + ";", "var res;", "switch (argLength) {", n.concat(["extra"]).map(function(e, t) {
            return "case " + t + ":res = fn.call(" + ["self"].concat(n.slice(0, t)).concat("cb").join(",") + ");break;"
        }).join(""), "default:", "args[argLength] = cb;", "res = fn.apply(self, args);", "}", "if (res &&", '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ") {rs(res);}", "});", "};"].join("");
        return Function(["Promise", "fn"], o)(a, e)
    }
    var a = n(5),
        r = n(47);
    e.exports = a, a.denodeify = function(e, t) {
        return "number" == typeof t && t !== 1 / 0 ? i(e, t) : o(e)
    };
    var s = "function (err, res) {if (err) { rj(err); } else { rs(res); }}";
    a.nodeify = function(e) {
        return function() {
            var t = Array.prototype.slice.call(arguments),
                n = "function" == typeof t[t.length - 1] ? t.pop() : null,
                i = this;
            try {
                return e.apply(this, arguments).nodeify(n, i)
            } catch (o) {
                if (null === n || "undefined" == typeof n) return new a(function(e, t) {
                    t(o)
                });
                r(function() {
                    n.call(i, o)
                })
            }
        }
    }, a.prototype.nodeify = function(e, t) {
        return "function" != typeof e ? this : void this.then(function(n) {
            r(function() {
                e.call(t, null, n)
            })
        }, function(n) {
            r(function() {
                e.call(t, n)
            })
        })
    }
}, function(e, t, n) {
    "use strict";
    var i = n(5);
    e.exports = i, i.enableSynchronous = function() {
        i.prototype.isPending = function() {
            return 0 == this.getState()
        }, i.prototype.isFulfilled = function() {
            return 1 == this.getState()
        }, i.prototype.isRejected = function() {
            return 2 == this.getState()
        }, i.prototype.getValue = function() {
            if (3 === this._81) return this._65.getValue();
            if (!this.isFulfilled()) throw new Error("Cannot get a value of an unfulfilled promise.");
            return this._65
        }, i.prototype.getReason = function() {
            if (3 === this._81) return this._65.getReason();
            if (!this.isRejected()) throw new Error("Cannot get a rejection reason of a non-rejected promise.");
            return this._65
        }, i.prototype.getState = function() {
            return 3 === this._81 ? this._65.getState() : -1 === this._81 || -2 === this._81 ? 0 : this._81
        }
    }, i.disableSynchronous = function() {
        i.prototype.isPending = void 0, i.prototype.isFulfilled = void 0, i.prototype.isRejected = void 0, i.prototype.getValue = void 0, i.prototype.getReason = void 0, i.prototype.getState = void 0
    }
}, function(e, t, n) {
    "use strict";

    function i() {
        if (l.length) throw l.shift()
    }
    function o(e) {
        var t;
        t = s.length ? s.pop() : new a, t.task = e, r(t)
    }
    function a() {
        this.task = null
    }
    var r = n(14),
        s = [],
        l = [],
        u = r.makeRequestCallFromTimer(i);
    e.exports = o, a.prototype.call = function() {
        try {
            this.task.call()
        } catch (e) {
            o.onerror ? o.onerror(e) : (l.push(e), u())
        } finally {
            this.task = null, s[s.length] = this
        }
    }
}, function(e, t) {
    e.exports = '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg style="width:308px;height:308px;" version="1.1" id="图形" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve">\n  <path class="svgpath" data-index="path_0" fill="#272636" d="M46.267733 102.109867c-36.471467 45.431467-117.265067 261.802667 229.034667 616.0384 364.9024 373.4016 600.234667 293.461333 640.699733 251.409067L672.1024 726.016c-34.133333 33.9456-77.9776 3.7376-162.218667-64.802133-55.688533-45.380267-119.9104-106.376533-175.530667-175.223467-39.048533-48.196267-73.557333-98.850133-37.922133-134.485333L46.267733 102.109867z" />\n<path class="svgpath" data-index="path_1" fill="#272636" d="M1004.219733 882.3808c15.8208-15.8208 14.2336-39.936-0.1536-54.340267l0-0.238933c0 0-190.327467-189.627733-190.446933-189.7472-15.018667-15.0528-39.133867-14.711467-54.135467 0.119467l-68.9664 68.983467 244.548267 244.206933c0 0 69.0688-68.795733 69.000533-68.864L1004.219733 882.3808z" />\n<path class="svgpath" data-index="path_2" fill="#272636" d="M384.375467 263.68c15.786667-15.854933 14.301867-39.867733 0-54.203733L384.375467 209.237333c0 0-195.84-195.191467-195.9424-195.2256-15.069867-15.121067-39.185067-14.762667-54.1184 0.034133L65.3312 83.0976l249.9584 249.6c0 0 69.0688-68.7104 69.0688-68.846933L384.3584 263.68z" />\n\n</svg>\n';
}, function(e, t, n) {
    e.exports = n.p + "c9757c74222bb0af79d6bad4fd46edc2.png"
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABs1JREFUeNrUWW1MU1cYhqZT+ZYF6NVtUjAZRUQrH44sW5SZ+RFZxKgRlzlZHBOJitsSyJQhMiTBuQ2jGywukcmfsqAD5xbZBqiTRB0f1QrSRaFINcUR5cNEYCTsPt1Oc3q4be+9bRN9f7T369z7nPc85z3v+xzfqakpH3et6MCBFcPDw2ljT56oh4eGYsl15XNK5eQ/k5M4njFz5mhISEinf0DAnwGBgbUFBQUD7n7XVy54AB6wWHaZzf3LBgcHQ6W2j4nRtKo47qeg4OBv5XZEMvjCwsKM20ZjUa+pN8bHAxYUGDgWuyCuJlylypfaCdHgS0pKFnUZDD84A63RxPbNU6stAQEBY+y9vt5ejh8l7sGDByGOOhEXv6jyq/LyDz0KPj8vr7CjrfWT0cePZ9HXg4OCxhdpl3SvWbtW/0ZqqknMB+/09MxuaGjQXGpq0vbd7VOx96PUUcYF8fHLxIyCS/BZ27c33bxpSGVBr1i56sr7WVlXng8NHZNLmabmZnV1VdXy7u5bkewovPra62lFBw82ygLP00TF0+QiS5OVq9dczd2794I7oIU6cfTLL9JpSvEdGF+SmFRadvhwsWTwb2/e3E0Dh7d37t5Tl75uXbePF+zho0ezPt23L729vc3OWW+uWr2luLhYJxo8S5WIiIjhwqJiXWJigsVdkG1t7VxnVyd35/Zt7q7JxIWFhw99fuRIHfXtrfy3o8VQSCk0OVngJ09VV8qhCSanwWDgOtrb1QDKcttq/12zgj9VXa2lgcMQJG7euF7F0ziJncRKNhwiqtBUgcfFACdA/zIauVudner798zcyOjoTLEdBfCK48fW4Xjnrt31huvX1Zf/uLQY5/fu338xPKK/kj9c75A2LM/z9+2vccVxgP4od0+mo/jtygAU/zTwd7du1eM4Y9OmbDqcsvxX0CsnDRxRRczkPF1bq/UGcNihsjIdRp+cY2Wn2yuEbqABwqGPF80VcNj86OghrCfkHM6Fk+3AI8mivY4GnozjcoATw0JIe5+f+B/bgUd2SHsdDTwFFO9DzrN+w8aLmEM/n28oEwscBifS3jcau5OwgNqiDdJachO5ijtej5wXOfBSZKQlfvFiU9yCOAu7NrBRRcw7N2zcqP/xdK0N4+jIyA7+r1gJytD5OJIsOaATEhKNn5WW1jnruBBwnDvzPOE+nEIiD8+UtwBegQqIflBsdjjN41FRFinAAZici3JOcrIt8vFryEIr51G60fm4NyaoEHCp70hKTjbRqy54r6BrThQSTyNwmFartcM2MTGRqqAvCFVATwNwEnXYa4rx8TH/p5UqzszPz2+GYnxiwv9ZA24DHxwUPPisAbcWLw8fPlZ46mUvx8RYpABH5eTuN5VQsmh5Qm6uMjIyMssVcADW6/Ucnv3t/Hmt1ArMbrL6+v6thASHMPp/miAZPPKgc+fOaRwBB+DvTpxIafy1IUVKccIaSkc7xY4vCxXQDskF5OUoLqS81Blw2NHy8uXIS9wBDkNlRY5fmDvXbPU+RE/6oZaWFrWryglShdjJaezqUntiTt3Qd2jIcXiEqtUKHkUtRE9y45ezZ1OEGtfV12ve27Yt850tGblms3k2CzwtLU2w6vLz93e68KHAdwUc36ZHTsVxx235PNRa26TlMzfiWZq3ZaWHNqP6Fyok8A9eC304Ni7O5DxKaVwmgvVnztjeHRYW9ojIIFbwkJmhj5AHIMHRjXU6ndZRBUSfC1leXt4FFCJCHkadTGs2jtQ0WjKJjp5/1k76AHVyBwZqrl27us0qpfAPoxFJjwP5jrkCzs2ZM+SsA/zPBYS7xsbfNcgQQ4JDxsSIWLQj4WBI4dOkD6SYl5qbTEQJZsUmR4UEKUS+rqjQeXoV/aaiIqW66uQqcr506SvfHz12LHOaegDvQx+nwya0Q1fAUeGggvI0cIwSDRxcp70uqFWywtPChfE9RIIj4ZBMaLFDL0cmzPkgK5uOMEKC6zTwLH3oFMBbSRYLfH9+fgatlLF0mUYbmj5QZaGPO1rhvGWgCjxOA+dHvlkIuCB4kjdA2KevQfSEdig1fZAyOXflZO+gqYI0gC/stzhq43RbB9LalZbLJ2kKeWpLh47jQls78DiAO9ubcrknBV0H+jhkZlYJQycgCEFXkQoaSz5WTiHN3hHHJYMnk/hef3+lXt+R7kglg66CxQdVvtCIkB0RzB0kWUJZJsIhT9ccR9s4ssDTNJKygYzREZMKy91IlrV9j05ArYXo6Q7f4WnkKnJ2v2WDp+kE0RPaISQ4dm0QMkQQ5ONIa13ts3oVvFBnoGQJxmS+5nQXLGv/CjAAHMWHsk7d/PsAAAAASUVORK5CYII="
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABsJJREFUeNrUWX1MU1cUh4YgDhAlSqsiLeikWNHKtyIKM1O3qBCnA5e4YJSJxG04HURxFFghwc2IwwnGJaD8Yf0MbjOKGaDMzTo+LEKlXQY8PtQWDVgKE/hj7J1mF2+fr+1r+7rA+afvfry+3z333HPP+R3n8fFxJ7ZEKpVyx8bG4lDb29vbo7+/fwieOc7Oz3Nyc6udWBRne8ADWP3g4F6tRrP56ZPepfqhITdL78yfN693jg+3gcvjnbJ3MTaBz87OTuomiINqtSrMno/Pnj17ICBg4Y9zuNzMo0ePah0KHkD/pVbndBKdgWxuv6eHx0jQEtFFaxfBCDyYx5OenlKF4mEC3bhQGNQVJBIRYeHhhFgs1njPmjVCndPY2MRTPlbyWpqbBY8UD4WDev00up1YERqWlpeXJ2MFfI5Esq71UXP5k6dPffH+GZ6eo+vWb5B/sG2bYmFAwEtrtV15/brw+rVrUSpVG586FhERee5kcXGyXeDBTOS/3SvDDyICvSclRU6nYWulprZWUFFeHktdxNKlwbV8f/8d5szIJPjMjIzsurt3cvE+vh9fm19YKLNF05bkdElJVEV52QaqZxKHhoWZWgDHlKk8bGw4jPetjlnTLLt8udQRwEHS9u2TnzpdegZ2FvWBqXZ1dl5grHk4nHW1NQRuKjuTd1XBn7MBsn9gwE2hUPAa6usFbUqlwE8g0OTm5t5C4+0dHTOzMjOTurq7uJbOwBvgP0pMVOGucP3G9x7gf26LTQNQUoO83t4eXl9fnxd1zv0HfxiZJywg7ZOUVNwjvbth4w6qFzICfyA9/YT8/u/pqB0SEqr+vqREZg1QlUrF62xv5/V0dfFw7ZkTKnjkWvenpe7F3WjkylVBuP274OaibHmUito+Pj66rwsKKi19mG6b2ZDQ0BANmCs6xC9evJj1XKstJB+T3ziwMIDb+edfHKxk4gqvXrkiZhs4fojhAkTttsfKRFCyEXjogAH8xnwnLo5wmgSyMzn5DnoG5f6n/dfgITI09i6vX3CEgDvENWpOQIn43I6O9i1GNg8hLX4Rsa11+M8FfL4mePlyQrREpAF7hv6VkRESJu/Hb90qVxXk85Htwz0E4bQLmAwe2r6/ZYvcXq0uensxQV7tGgjU2FBEQny8qqT4u1HkOkll7yd/ql2Gh4a24ROjo6MJW7XrqNABZJl4herer3XLDc6lT2tQNufv4eFw3D3a+vGQ8HCVo4CDgMnhYYMBvE6nE6FOX98FGqdJKnBWqPEXZ2x01HNi60k7nazg0SFH8s/4+ByO0xQWTl+f1m8qAp87d643x8eH2z0VwT979qx/apsN3hgeHnabrEAhiaH2uXjNnNlG/hqSj26C4P0fICCTunnjhtia9+AdvO3q6lrr4jZ9+oTzp6Mh2JDzFRXiq5cuxtJlUUwFsjGcpIKkhOPl5fUzNRtiE/ixY8diS04Vx9sDHKSpvl6InufN9201mA1EZ40N9QMQrUEHbKelYApSNN2gzg1SvurbVVFMP2qrQLaGJzxcHu+niZCYDAvukuANVB5QcWCX1CzKFDlkr0A8xSRbM+I2Z8w4M+FtgG5GAxB2/nD2bBT1kBXmS5NsAQ4Bm7nxxYFCwtIBx3c3MFDYgJJwA3gwHX+BvxpNgMm4a5LJZGI6YpSJZGRk3AHCCieTcHbicFaWWVoFFIl/208gOP4Ge7AoMBCo6wtI+yeLimIRXxMZEUmQWbxZkB6eniaT9W++/dbAQgC5+qdabXB5TBIVsHVc66BgnLsx4m2ohFPmkayLkMUYUrHNm9JNeQzIMcvOnStn28Umbd+eih9UKvFkdMMuCQ7+EHwoapOpVwJ4FnjetSflFmRLdGnf8aIiGdvAvzx0KAEHLhavqDTLmBm0TWGHwRuUna8oRd4HFlNd/YuQ6dbbIlTG2BRbTEtxp+zeXdPa2hKHLyA7J09GTQgcIRKJZOPtWzcj8dt01eqYTXTFN5P8PNX+wTz2ffpZJToDjoh5vjpyJKGpqdGo3kVHsNLaPMX+1+LuEzxQYUF+ImiGLsKzR+AC3PXxzlQcOGh8zdpYibn6lMWaFNWE0C6wUdoxdWubMxWrwKNDDJUSapEYFgF8SnRMjIqpOYHvrqqqEtbV1NAStLDbsOtMSpqM67BSqXTZ45aWS+ZqsODvodLh7u4+gi6uIb3esGBzxQWkbVHwstITRUUHmO6c1RVwtgvJthaQbQKPkz7AGZLaXIvCaWsEAiwIbSFCtKV0bxd46kJ0Ot2mkVevBLqXL4Po5rhOm6YnEx/lW+7u9e4eHldsBYzLvwIMAIPgz2aEbfwsAAAAAElFTkSuQmCC"
}, , , , , function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(10),
        u = i(l),
        c = n(9),
        d = i(c),
        f = n(1),
        p = i(f),
        h = n(7),
        g = i(h),
        m = "ontouchend" in document ? "touchstart" : "click",
        v = function() {
            function e() {
                o(this, e)
            }
            return a(e, [{
                key: "loadStart",
                value: function() {
                    this.hasLoad || (this.hasLoad = !0, this.initSwiper())
                }
            },
            {
                key: "initSwiper",
                value: function() {
                    var e = this,
                        t = (0, s["default"])(".ADpage").eq(0),
                        i = new u["default"](t[0]);
                    i.add(new u["default"].Pan({
                        direction: u["default"].DIRECTION_ALL,
                        threshold: 0,
                        preventDefault: !0
                    })), i.on("pandown", function() {
                        e.reporting || e.hideAD()
                    });
                    var o = (0, s["default"])(".ADpage"),
                        a = (0, s["default"])('<img style="position:absolute;left:50%;"src="' + window.projectVersion.origin_thumb + '"/>');
                    a.css({
                        width: p["default"].scale(250),
                        "margin-left": p["default"].scale(-130),
                        top: p["default"].scale(240)
                    });
                    var r = (0, s["default"])('<div style="position:absolute;left:50%;">' + window.projectVersion.title + "</div>");
                    r.css({
                        top: p["default"].scale(565),
                        "font-size": p["default"].scale(30),
                        width: p["default"].scale(300),
                        "margin-left": p["default"].scale(-150),
                        color: "#EBEBEB",
                        textAlign: "center",
                        lineHeight: 1.5,
                        wordBreak: "break-all"
                    });
                    var l = (0, s["default"])('<div style="position:absolute;left:50%;"></div>');
                    l.css({
                        top: p["default"].scale(585),
                        width: p["default"].scale(70),
                        marginLeft: p["default"].scale(-240),
                        borderBottom: "solid 1px white"
                    });
                    var c = (0, s["default"])('<div style="position:absolute;left:50%;"></div>');
                    c.css({
                        top: p["default"].scale(585),
                        width: p["default"].scale(70),
                        marginLeft: p["default"].scale(170),
                        borderBottom: "solid 1px white"
                    });
                    var d = (0, s["default"])("<div>免费创建我的MAKA</div>");
                    d.css({
                        position: "absolute",
                        padding: p["default"].scale(2) + " " + p["default"].scale(0),
                        color: "#18ccc0",
                        width: p["default"].scale(324),
                        textAlign: "center",
                        height: p["default"].scale(48),
                        fontSize: p["default"].scale(26),
                        lineHeight: p["default"].scale(48),
                        border: "solid 1px #18ccc0",
                        borderRadius: p["default"].scale(24),
                        left: "50%",
                        bottom: p["default"].scale(200),
                        marginLeft: p["default"].scale(-162),
                        letterSpacing: "1px"
                    });
                    var f = void 0,
                        h = parseInt(1e3 * Math.random());
                    f = 200 > h ? "http://mp.weixin.qq.com/s?__biz=MjM5ODc3OTM5Mw==&mid=529385884&idx=1&sn=c5ca3d0bec03c2ce0e85fb8e9f826495&scene=1&srcid=0421RTET4vsAmwoacjnD6bFI&pass_ticket=vkTaE4XlUXn3z1Xvx%2FbKiOuLq%2FNnRVOsDE7d9OB7BFHZTC66nyXnUSzfUUq1zA%2FE#rd" : "http://mp.weixin.qq.com/s?__biz=MjM5ODc3OTM5Mw==&mid=204874023&idx=1&sn=d194c99b10e9dbd1c7757a79293927fc#rd", d.on(m, function() {
                        var e = 102;
                        g["default"].send("makaAD", e), window.location.href = f
                    }), d.on("click", function() {
                        window.open(f)
                    });
                    var v = (0, s["default"])("<div>返回</div>");
                    v.css({
                        position: "absolute",
                        top: p["default"].scale(46),
                        color: "white",
                        right: p["default"].scale(26),
                        fontSize: p["default"].scale(24),
                        lineHeight: p["default"].scale(24),
                        padding: p["default"].scale(24)
                    }), v.on(m, function() {
                        e.replay()
                    });
                    var w = (0, s["default"])("<div>举报</div>");
                    w.css({
                        position: "absolute",
                        top: p["default"].scale(46),
                        left: p["default"].scale(40),
                        fontSize: p["default"].scale(25),
                        lineHeight: p["default"].scale(24),
                        padding: p["default"].scale(24),
                        color: "#EBEBEB"
                    });
                    var b = (0, s["default"])('<img src="' + n(71) + '" alt="" />');
                    b.css({
                        position: "absolute",
                        left: p["default"].scale(-5),
                        top: "50%",
                        marginTop: p["default"].scale(-14),
                        height: p["default"].scale(24)
                    }), w.prepend(b), o.append(v), o.append(w), o.append(a), o.append(r), o.append(l), o.append(c), 0 === window.projectVersion.vipclass && o.append(d), w.on(m, function() {
                        e.showReport()
                    })
                }
            },
            {
                key: "showReport",
                value: function() {
                    function e() {
                        y || (y = !0, b.css({
                            background: "rgb(24, 204, 192)"
                        }), b.on(m, function() {
                            i()
                        }))
                    }
                    function t() {
                        o.reporting = !1, l.fadeOut(200), r.fadeOut(200)
                    }
                    function i() {
                        var e = n(72),
                            i = (0, s["default"])('\n        <div style="position:absolute;left:50%;margin-left:-100px;top:30%;width:200px;height:160px;background:rgba(0,0,0,0.4);border-radius:10px">\n          <div style="text-align:center;margin-top:20px;">\n            <img src="' + e + '" alt=""/>\n          </div>\n          <div style="font-size:20px;text-align:center;color:white;margin-top:20px;">\n            提交成功\n          </div>\n        </div>\n        ');
                        a.append(i), setTimeout(function() {
                            i.fadeOut(1e3, function() {
                                t()
                            })
                        }, 1e3)
                    }
                    var o = this;
                    o.reporting = !0;
                    var a = (0, s["default"])(".ADpage"),
                        r = (0, s["default"])("<div></div>"),
                        l = (0, s["default"])("<div></div>");
                    l.css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.4)"
                    }), r.css({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: p["default"].scale(540),
                        height: p["default"].scale(800),
                        marginLeft: p["default"].scale(-270),
                        marginTop: p["default"].scale(-400),
                        background: "white",
                        borderRadius: p["default"].scale(10)
                    });
                    var u = (0, s["default"])("<div>选择举报类型</div>");
                    u.css({
                        padding: p["default"].scale(40) + " " + p["default"].scale(40),
                        fontSize: p["default"].scale(24),
                        color: "#18ccc0"
                    }), r.append(u);
                    var c = n(68),
                        d = (0, s["default"])('\n      <div style="position:absolute;width:' + p["default"].scale(24) + ";height:" + p["default"].scale(24) + ";top:" + p["default"].scale(40) + ";right:" + p["default"].scale(40) + '">\n        <img style="width:100%" src="' + c + '" alt=""/>\n      </div>\n      ');
                    r.append(d), d.on(m, function() {
                        t()
                    });
                    for (var f = ["色情", "诈骗", "谣言", "垃圾广告", "政治敏感", "侵权（抄袭冒用", "其他"], h = 0; h < f.length; h++) {
                        var g = n(67),
                            v = n(70),
                            w = (0, s["default"])('\n        <div class="reportType" style="line-height:' + p["default"].scale(76) + ';width:100%">\n          <div style="border-bottom:solid 1px #ebebeb;height:' + p["default"].scale(76) + ";margin:" + p["default"].scale(0) + " " + p["default"].scale(40) + '">\n            <span style="font-size:' + p["default"].scale(24) + ';color:#83817b">' + f[h] + '</span>\n            <span class="reportIcon" style="position:relative;margin-top:' + p["default"].scale(24) + ";display:block;float:right;width:" + p["default"].scale(24) + ";height:" + p["default"].scale(24) + ';">\n              <img class="active" src="' + g + '" style="display:none;width:100%"></img>\n              <img class="inactive" src="' + v + '" style="width:100%"></img>\n            </span>\n          </div>\n        </div>');
                        w.on(m, function() {
                            r.find(".reportType").each(function() {
                                (0, s["default"])(this).find(".active").hide(), (0, s["default"])(this).find(".inactive").show()
                            }), (0, s["default"])(this).find(".active").show(), (0, s["default"])(this).find(".inactive").hide(), e()
                        }), r.append(w)
                    }
                    var b = (0, s["default"])('\n      <div style="font-size:' + p["default"].scale(24) + ";background:gray;color:white;text-align:center;line-height:" + p["default"].scale(76) + ";height:" + p["default"].scale(76) + ";margin:" + p["default"].scale(20) + " " + p["default"].scale(40) + '">提交</div>\n      ');
                    r.append(b), l.show(), r.show(), a.append(l), a.append(r), l.on(m, function() {
                        t()
                    });
                    var y = !1
                }
            },
            {
                key: "replay",
                value: function() {
                    this.hideADreplay(), this.options.replay()
                }
            },
            {
                key: "showAD",
                value: function(e) {/*//////////////////////去除广告
                    this.options = e;
                    var t = (0, s["default"])(".ADpage");
                    t.fadeIn(), (0, d["default"])(t, "stop"), (0, s["default"])(".maka-pages").eq(0).css({
                        "-webkit-filter": "blur(8px)"
                    }), (0, d["default"])((0, s["default"])(".ADpage").eq(0), {
                        fromPosition: [0, 500, 0],
                        position: [0, 0, 0],
                        easing: "ease",
                        duration: 500
                    })
                */}
            },
            {
                key: "hideADreplay",
                value: function() {
                    var e = (0, s["default"])(".ADpage");
                    e.fadeOut(), (0, d["default"])(e, "stop"), (0, s["default"])(".maka-pages").eq(0).css({
                        "-webkit-filter": "blur(0px)"
                    }), (0, d["default"])((0, s["default"])(".ADpage").eq(0), {
                        fromPosition: [0, 0, 0],
                        position: [0, -500, 0],
                        easing: "ease",
                        duration: 500
                    })
                }
            },
            {
                key: "hideAD",
                value: function() {
                    var e = (0, s["default"])(".ADpage");
                    e.fadeOut(), (0, d["default"])(e, "stop"), (0, s["default"])(".maka-pages").eq(0).css({
                        "-webkit-filter": "blur(0px)"
                    }), (0, d["default"])((0, s["default"])(".ADpage").eq(0), {
                        fromPosition: [0, 0, 0],
                        position: [0, 500, 0],
                        easing: "ease",
                        duration: 500
                    })
                }
            }]), e
        }();
    t["default"] = new v, e.exports = t["default"]
}, , function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
        r = n(2),
        s = i(r),
        l = n(10),
        u = i(l),
        c = n(4),
        d = i(c),
        f = n(9),
        p = i(f),
        h = function() {
            function e() {
                var t = this;
                o(this, e), this.loaded = !1, this.hasSP = !1, this.isReady = !1, this.SPURL = "", this.spPage = (0, s["default"])('<div class="SPpage"></div>'), this.iframe = (0, s["default"])('<iframe border=0 style="border:0;outline:0" width="100%" height="100%"></iframe>'), this.spPage.hide(), this.spPage.append(this.iframe), this.spPage.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "white",
                    "z-index": 999
                }), (0, s["default"])(".maka-pages").eq(0).append(this.spPage), this.spPage.hide(), this.hammer = new u["default"]((0, s["default"])(".SPpage").get(0)), this.hammer.on("swipedown", this.hideSP.bind(this)), (0, s["default"])(window).on("message", function(e) {
                    var n = JSON.parse(e.originalEvent.data);
                    "hideSP" === n.type && t.hideSP()
                })
            }
            return a(e, [{
                key: "loadSP",
                value: function() {
                    var e = this;
                    if ("wemedia" === window.projectVersion.viplevel) return e.hasSP = !0, e.loaded = !0, void(this.SPURL = "/user/wemedia/" + window.projectVersion.uid);
                    d["default"].getSPEventUrl();
                    e.loaded
                }
            },
            {
                key: "isHasSP",
                value: function() {
                    return this.hasSP
                }
            },
            {
                key: "showSP",
                value: function() {
                    if (this.hasSP && this.loaded) {
                        this.isReady || (this.iframe.attr("src", this.SPURL), this.isReady = !0), this.spPage.hide();
                        var e = window.innerHeight;
                        (0, p["default"])(this.spPage, {
                            transformOrigin: [0, 0, 0],
                            fromRotation: [0, 0, 0],
                            fromPosition: [0, e, 0],
                            fromOpacity: 1,
                            position: [0, 0, 0],
                            easing: "linear",
                            duration: 500
                        }), this.spPage.fadeIn()
                    }
                }
            },
            {
                key: "hideSP",
                value: function() {
                    console.log("hide");
                    var e = window.innerHeight;
                    (0, p["default"])(this.spPage, {
                        transformOrigin: [0, 0, 0],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, 0, 0],
                        fromOpacity: 1,
                        position: [0, e, 0],
                        easing: "linear",
                        duration: 500
                    }), this.spPage.fadeOut()
                }
            }]), e
        }();
    t["default"] = new h, e.exports = t["default"]
}, , , , , , , , , function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAA3FJREFUSA29VjtMVEEUvTP7A/wgAWVZkMRAWAoUZUNs+KgJihUmdlqolYlSWJloY2w0sbJAEyu10M5EKlESvjaGLIpS7BKICcKyIATxA+x3nDP75uUJy2c3wVO8nXlzz7lvZu5nGW2B0k+DVSKROCeIWkiwcsGEBxQmWEg+JhlRN7PZXk8fbRzbTErapUeJf9AnKPmAhDiV3mLNW8Z6GPGbM75G/5oVNV3n6IQQ9sDwwEO5ek06Yfl2h2jdV8ha84uoKjeP3A6XIoZjEQqu/KG3SwvU9WNBLMVjjBiTG6fH1XVNN/oYiytD4/GPo/LPgwXRaPIVkTjp4lxcLS5j7cXltMdms3LWjX8lEtQxO0lPZqdEJJmUmqzX6eTnJ480LmpjrgfYiXbidrpEp/cYu+U5tKUT8PEhsAUHXHwotKCp9c0duf39HfKorsPwTXUdczuc2obGVpfpxfwM9f9cpKnoqnpf5syh5r0FdLGohKpy8kzbcCxKZwPDIhyN4CgfhX3N7VhUjoyLH3Ixpr6qNm+3IsaEoDtTE/T8e4iScpwOXHIu7ffQ3bIKcsgxMLL8m9qCH0VEcmSA1CNA1NEZ0cVwJ1YnF8a/0NO56Q2dQBQfABvY4sMAaEALwaS05TvmGXnvTcbiAUTXUM1xpi/+9rdxJaCY23xcOVBK9w5WKmsESP3oBxWNNrvNyykeb8MKQlg7wZ3guDIFOOAC0IImxkh4LjfbggnyRAMXv9GdaJt0v+CAq3Emv1AN4YOjrGCGZNRAdGULK9ebuyslI31wXbt0xmNFh3A2zqxcrQkfZsJmI7oVR5CREtITV1VYMlC7NJCM2cLKnZXJC8iImOEo9ZiMraSiBWNkfLawclF0FaQPLr11Y9K1NJ96KZ8oK8j4TAEOuBqo7AB8cLLbOzFBqUeSAahdKCuZAhxd96AFTWigMfJQbUNQFr8e9BOUeg3UroYMjhC24GhAy+hRPei+KurQGdG00E9QEAEUyJeVhwllZbNjxBpsYGstqtCCptKWeuZF/Jc2gR2gSQX8A+/QtNCTnlXUmJUc69sBTuPyxGiqF8kuW+1rOt1ntHQzYfEC7VdushdNC/3kfugr6QDZzBFsYAuOanhGK9dOwDWPTgupne30nxPtDL87/nfL6gxjNEb0LNVONvgDiVxUabKWbJn/Bep34KjvFu/hAAAAAElFTkSuQmCC"
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAnRJREFUSA2llj1oFFEQx2fe7R54fpSKEAsrY0CxEZGAeCHaCIKxsLBKIfZphNu7ZJPsXRNIKVaCISBqcZ2lIlaxMMiBsdFCbSwU0tyJud1x5pJ37tfb2z1fce923tz/997MvNlD4OF5zikI1G1C2p2YsJ7Oz7u/xT7uaLXcKfL7N1jvq+PYLxDdANk46e/1twDo2EAYsaNKh645jvNjHBBv+i75+Jj1yvJ7RGjXF5tz2FyuPwqA7odFEeAjWpWZorADyAZDVFhPWfY5RQBW2Cjf2TZF/e6rZrN5Ir5mehYIBPAkDjnwtxRa1kM+3l5coAhMQ4igFNfh2L2p1ZY+KMdx3wOV7owLGwHZPnzEmkNE4nTsD2958Rag/4x3ZWubnk05ywGZXVhwf4nOECQPRWBFIAlQXhhRd1YSb8iJhGt4EtGUETnRvin7ZJzc7wh0sgjECJKFrDDqDUVmxNSTaJ/UE+nF3LARENHLBImDwAj953yLExdb1jmUHc7JVV1dA1vKR6RVpKwDlPwK78a4Ib5/5V7PTlyJuJZRQBwzSzishLjDjbia1RuNoNwQDRwBSw1dFoR39gVVsjcC0dnA7702NeIEKAvCid+uHLUvQpDeG7NgkdCNgoRvfGbpp4RxCBIIvxk3Ut8nhntSBDYAjQPRNZAXhq2VxuUAgrdFe5cGyTwCtnVm8vy0Coju/Q9EQPWllbbp5ckFcunzp84FxbHrinNkGHIS8Yk9ZMEUUlepsrXObeSn/h2D34WrS9vzzBrGHevf5hE3HzS8nUExrK25x//0/JtEwe70Fbtdrbr9PMImn9XV+mleu87/VL7VGt5L8fsLbFJ2drlcQ8AAAAAASUVORK5CYII="
}, , function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAthJREFUSA29VktoU0EUvfcljxKwBUlbqItKXSRUwY34IdXaKHWrICpIN8WVIuJClASrwZYGxYUUqQupLtSFiKAgLiw2EmnQhSAWjAm6UKSBVhDaQqn5XOdMOuFpSaP12bvIzOTNnPNm5t5zHlONGByMBUqF/AEi7iaRViFehyVMMknMX4hk1PLaj6LRWHY5KK72MH6pb0uR5IqI7Kk2x/k/M495iM9GLvS/cf5v+kuIEomYN5UsXBOWE6Je3+fzSSDYzsFgOzU2NVN9fb1eOzs7S9NTU5TNpimbScv8/LziIrWMh0Od3tPhcKxgSND+QhSPx9cW83MPFUHY67Vl+44Qhzo6qa6uzrlmSX9hYYFS40l6/SolhUIehAmPveZgJBL5biZXiLCT8Zf5ZyBpaGiQQ0d6uKVFX4eZW7PN5Sbpwf27MjMzo8k6dtn7zM48ZnVgw84hIToMkt5jx9nvbzSP/rjFsW7ctJnT7ydE7bLt62fxj71IPgWAJsLFl1huquOioz29KyIxb4Njbl3fxhPv3kpJilu7w11PnieSOQsTytlFjDv52+MyBM4WGMBCMgEbz/hy//ngj5J8QHadPHWGa128E3C5PhLk+tBVnY0e2w5aeZH9WIAUdosEeMACJvooeHV0quJVoE7cjkDAYHK3BVkBAYrR7WhqXsRUHJbRLlPxbpIZTHDorHMT3Imlsk4Hq/yztAqrIbTL7ZibW8QUUnWkpZ7o2/SU2zxadDWo4lBHJ6MYZDJp14mg7OVQnmUzP8YAUo8icyuABUzgwRitc30DGZgW/ARS71YAq+xRPAb31VkHZ4RpwU8g9f8awAAWMIENPK3eUNe9XbubiqXitk8fMwKpX6kcIXvv3bmlNU5l2nD04sAIiCp1BPuFM8K0bo/cWNHOsBOsNcYHTJAgKg6LwapYOYgQq/JxUqYq//73zy0nGfowxrJnVf+ARC2iTH5f6xz/BIh4g5vgZq6tAAAAAElFTkSuQmCC"
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAYAAACtv5zzAAAAAXNSR0IArs4c6QAAAo9JREFUSA2tlU1oE0EUx7PZpsa6RZNs/P5ArSB4UIQK3gQRBfHgSQ96VUEQBG+FoqdCoTdPXhQ8eRBETwVRxB4LKljt3YhCutlsimJNNvH3gp1O3Fmy2frgMW/e+7/3n5l9O5PJJBTP8yaXkGq1Ooe9O2FaJpsESN3D7Xb7HtgZy7LcTqczkSRPMH0JKLYB3BkBU/w3g4ceYyc7xddPrDgAx3CEVU8Sv0DhPEQ/sb9hbxYlNsz4Ed9MqVR6jB2aahl3wJHcpOAHEraReCWXy7nlctlBD7muu7VYLI4QGyc2C+4++FdBEBRNBBEfW79GQpPxeiRocNTr9QPgF8DPQzZsgKy5arXaXoA/0Dtr3v6WdBUk0mHSCPECcBrcIiuJ/TZx2eTdQj1yN+qYnm9A8DLn+gDt6KAkNrkP0U0s8qyOVwSw7wKwh+54owOS2jTAMgt7B/6knqMIbNs+KAG6ZEEHDGh/Aj+m5yiCMAwLBFZYxS8dMIhNrg9e6ihRBNlsdgSA/EypheOVfPlHlCgC5fnPxr8EA3dPv/UoArZnA14vgeSrmkKuT/bRphVxphW+Y4UaPW+FTnCUwotpi0sexecYdugXX5eAgNz551jBrADTCv/QZzrxS7PZPL9ao0vAJXcVEptr+flqIO1Inafk3lD5jUbD5ZqooFPKuQ6D4xmjVos76ZKUsZi8hvUUW3vJPIipPYRffqDG3/go4woqT6hJTlNT3objQxR+weQ9agJ2fWBOEN/P5Ik4mF9kWML3VuYGecT3DGn9ZUMs6mK7t9mpL93BozKK/ZXxbhQZ9SR6WHzf39JqteZJ387q24xBPp8fdxzne7RkrycRgaRwHA47kaPhZrefFQqFem8p8+wPNm40uiI7dNsAAAAASUVORK5CYII="
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABHCAYAAABVsFofAAAAAXNSR0IArs4c6QAACHxJREFUeAHtnFuoVFUYxz1ZapmJUZR4oeNDpi8ZUWRoHY0udIyIfCnqQZ8qXyJ7Cd80IiiCsJc0iBPRTaIiKHoIoyLsRgZRGKGZUVZQ5r0yT7/fnLU4M9PeM3vP3nucsT74n7VmXf7fZdZee+219pmBCV2U0dHRGai7EiwA8wPOI50GzgRngMPgIDgAfgI7Ar4i/WBgYOA30q7IQJVaCIb8S8DNYBlYBE4BncpxOm4HW8Fr4H2CNUpaiVQSHIIyiLWrwJ3gAhDlKJlt4HMQR8T35B0ljhZHjaPHUeRomg3iCLuY/BVgCoiyi8yz4GmCZL53haAsBM+CYyDKbjIPg+Wg3rHcjtg/8MgnbxT1qXdhbtKqO2DULPACOA6UP8EIGAJVjc6BwK8e9Snq145ZVfvclh8jTgVrwQGgHAEbwdy2nUtsoL6gV/2K9mjXqSWqyU6F4nngExBlCxnniBMm6gfaEUX75nXVIBSuBPuCBTtJr++qAW2UaQ/QLkU7V7bpUk41ijaoMYjf0vRymMtl0S5QP4o2lKuhjg1FE8EmoPwF1tRV92xWO4O9JDX7J5ZqLKQGJn4Lh8gPl6qgYjLtBdqtvATKCxBkccT8Sn5xxb5UQq/dQPuVTaUogSjOMUa+LwMTA6H9II6gYnMQRN6VFOeYvrqUYkCaU/0I/pB0eBejo+uYeLvui8m3ORBpn/HLSVrRv3zrIDq48o0LvC1pSvq5HP/iDUY/s6+kaXw/UFxI9eQ6pugXo1/BP5LRtZn4aOhDZHxW6qmVbyYHcjTCT1fSiv62f1ilkU+1ykl5OTXHTj9r3uJ3c13DZxq5H3Mc+HR7Qh8iGwyr8IN+Bn/1O30/iEo3jJSNFdrTc9T6W/Ma/xONo3IQuKPmxtGcxEYnaSH+zg1+679bvDWp3+x2z9dnjufZj90zVt1ff3Gso11H/P1Ov4H+G4dxkRR421aGxmv6J4fdZ4Nt4LpOrNZvoBiH8SDzYamlyG4wXtGJlhPQB5tds8RF61HyN+U1Q7+B/itL7R8vK8+VFC+pys6BxlSU+xdHPMZ5E1wamCeTvkx5rt2/4LeXlhLjMWECRJ8CZflYXX/8xd7TwTsaniBOrpfk8YT2Hh8pn9b6kZkB/gaubQqdK+UxpGhbbJ0M3gJp8nheHRBNAcbBeMxw1KwAyta8ZCeqPbaeBl7X6BR5slPb4NsaOIedcy4KRB7R9rxguLfb58CKFGOfofyulLosxTEOCwzO/NDDs+ueFgKjvSMgbbJ9kbrVBW8qMQ7zvazeDcNoeS9HBhu91T4VbE1KXqEw+75MirNwxEn5XYOzI2i6MKV9TxRj4xPBzqTkDQonlWEoPBcGBTsMzg/hw8wi5HBMApcV4UjrC++jwcak5G0KS7vLwjUzKPnB4MSNLRdTHQkcbqu+CrwN3tgRSUon+B4EafIeFVNTunZUDN+ZQdkBg+NiSfEukFvsB+IGmTx/gFtyEyV0gGedhCnyIeVnJXQrVASn/ijHDM7+WnZ01Depcgn9nCRHQv/6xKOc23KRNTWm/331hE35z/g8o6lLKR/hnRZ07S8050DizuHBQNacuMpsfPzPaD797mkmq/v8BflzMlLlbgZ3w5xT6G4F2RLwO0gStx5zLchovxrYL0m09fzcHufoAH/D3arwOgfCy0E8hyb7L7k3i330uh044pLEfZbK97XR0bDO2RwsuTuLA2lt4FgEfglcSckDaX0tp8OtIN4cmvt/R8EFrfqXVYeeu4PyzS7Hx5fLBTSwZPf94CGwN4XmIZSuT6qj3OekuE3Z3ES+a+D/trmios/jj1MYNhwiVcpTOVxes3sCZ1LySL1TNLgWuHuXJD9TmH5cUk9UUh59W4Mhww7n0vdz4BwEu0CaeBTiMuAqEF8JaW7rHHZxST5nokFf436OvSgsfScQzjnga5Amrqjj6ry5jXe/Sh5FWkUJnXEyru0EOuco8ZK6buxj8b/MER7vXA2+TGFznzbpkeUQ5TfS/+OUflUWR/9jPGojZ2n46naTlnr6AN+5YHvgb5ccpsGyKr1P40avl7n+K7XTh1pbPljhOkIZSiPotBxO57WPJG8hPpPd0KmOov3QPRRsMw6NA4SC9aFypKiipP5wnwV+DDqak+MU3JPUr1tl6B8JRv17uUHFIHARVtlZOdwGaC+oFwOzrltBSNKD/rlAv/V/MKmNd63K37JAx1TwPVAMzIOJxnSxEBtcWijJb1loC5U+ZWtwpe/nwO+u4TfgsS7GIFEVNswG+qvfrRecNIgbV/+1N7viUXBiEGuFBOf/dwLTw1O7vNYSJGUnmN6qbb/W6VfwjyTj26Q6S2M3zOMrHSfl5YV/8UVJ/cx33kWHeWAfUNb06whJslt/al518gZ7JIRgZSBxw3w4lvdzqh9Af5S0Y+VsLkKwoUYztrWwOFuv3myFH4tB3CLZUIqVEG4KAXKPpS8DpN1A+5Vy/t/K6ELmQddLsiJGvq8uMe0NdpOU/J96dQGKI8hrti8mae0EcY7R/o5OdjNdgpDHOYhs7XbYk+sgbHMds0Ujg5Qzx7SLEsq8i8XbvAvF69v16Wa99gDtUrSz2F0pr/EodB0UF4pka99S5YdurezEBh8i60eL9s1r1aeyOhS7kvZRI26U+3Tr4/+cypQmEKsv6FW/oj3alW/lm8BduAgjZgGf5n3sV9w4cmdtCDRuORbWNkYgb+BXj/oU9WtH+38sK8mOzDQY5X6QG2buqEXZTeZh4LHHlMxkCQ3tH3jkkzeK+tTbej8mgbNVUVXfqluNq8AdwHyUVr+85K8vHQGnA98VEs5hHs8KD/hcgE4GUXaRcfeukl9eqiQ40XK+SfmXAM+oloH/f7OLICQKwfJtrLRfe3OkOGocPY4i8RPwRQfR9V97+wfA9tLOB8sVkwAAAABJRU5ErkJggg=="
}]);