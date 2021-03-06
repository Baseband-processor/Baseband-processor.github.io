/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 clipboard.js v1.5.13
 https://zenorocha.github.io/clipboard.js

 Licensed MIT  Zeno Rocha
 The buffer module from node.js, for the browser.

 @author   Feross Aboukhadijeh <https://feross.org>
 @license  MIT
 jQuery JavaScript Library v1.12.4
 http://jquery.com/

 Includes Sizzle.js
 http://sizzlejs.com/

 Copyright jQuery Foundation and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2016-05-20T17:17Z
 Sizzle CSS Selector Engine v2.2.1
 http://sizzlejs.com/

 Copyright jQuery Foundation and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2015-10-17
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(d, n, t) {
    d != Array.prototype && d != Object.prototype && (d[n] = t.value)
};
$jscomp.getGlobal = function(d) {
    return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.Symbol = function() {
    var d = 0;
    return function(n) {
        return $jscomp.SYMBOL_PREFIX + (n || "") + d++
    }
}();
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var d = $jscomp.global.Symbol.iterator;
    d || (d = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[d] && $jscomp.defineProperty(Array.prototype, d, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    });
    $jscomp.initSymbolIterator = function() {}
};
$jscomp.arrayIterator = function(d) {
    var n = 0;
    return $jscomp.iteratorPrototype(function() {
        return n < d.length ? {
            done: !1,
            value: d[n++]
        } : {
            done: !0
        }
    })
};
$jscomp.iteratorPrototype = function(d) {
    $jscomp.initSymbolIterator();
    d = {
        next: d
    };
    d[$jscomp.global.Symbol.iterator] = function() {
        return this
    };
    return d
};
$jscomp.findInternal = function(d, n, t) {
    d instanceof String && (d = String(d));
    for (var a = d.length, b = 0; b < a; b++) {
        var k = d[b];
        if (n.call(t, k, b, d)) return {
            i: b,
            v: k
        }
    }
    return {
        i: -1,
        v: void 0
    }
};
$jscomp.polyfill = function(d, n, t, a) {
    if (n) {
        t = $jscomp.global;
        d = d.split(".");
        for (a = 0; a < d.length - 1; a++) {
            var b = d[a];
            b in t || (t[b] = {});
            t = t[b]
        }
        d = d[d.length - 1];
        a = t[d];
        n = n(a);
        n != a && null != n && $jscomp.defineProperty(t, d, {
            configurable: !0,
            writable: !0,
            value: n
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(d) {
    return d ? d : function(d, t) {
        return $jscomp.findInternal(this, d, t).v
    }
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.fill", function(d) {
    return d ? d : function(d, t, a) {
        var b = this.length || 0;
        0 > t && (t = Math.max(0, b + t));
        if (null == a || a > b) a = b;
        a = Number(a);
        0 > a && (a = Math.max(0, b + a));
        for (t = Number(t || 0); t < a; t++) this[t] = d;
        return this
    }
}, "es6", "es3");
$jscomp.owns = function(d, n) {
    return Object.prototype.hasOwnProperty.call(d, n)
};
$jscomp.assign = "function" == typeof Object.assign ? Object.assign : function(d, n) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        if (a)
            for (var b in a) $jscomp.owns(a, b) && (d[b] = a[b])
    }
    return d
};
$jscomp.polyfill("Object.assign", function(d) {
    return d || $jscomp.assign
}, "es6", "es3");
$jscomp.iteratorFromArray = function(d, n) {
    $jscomp.initSymbolIterator();
    d instanceof String && (d += "");
    var t = 0,
        a = {
            next: function() {
                if (t < d.length) {
                    var b = t++;
                    return {
                        value: n(b, d[b]),
                        done: !1
                    }
                }
                a.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return a.next()
            }
        };
    a[Symbol.iterator] = function() {
        return a
    };
    return a
};
$jscomp.polyfill("Array.prototype.keys", function(d) {
    return d ? d : function() {
        return $jscomp.iteratorFromArray(this, function(d) {
            return d
        })
    }
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.values", function(d) {
    return d ? d : function() {
        return $jscomp.iteratorFromArray(this, function(d, t) {
            return t
        })
    }
}, "es8", "es3");
(function() {
    function d(n, t, a) {
        function b(w, h) {
            if (!t[w]) {
                if (!n[w]) {
                    var r = "function" == typeof require && require;
                    if (!h && r) return r(w, !0);
                    if (k) return k(w, !0);
                    h = Error("Cannot find module '" + w + "'");
                    throw h.code = "MODULE_NOT_FOUND", h;
                }
                h = t[w] = {
                    exports: {}
                };
                n[w][0].call(h.exports, function(e) {
                    return b(n[w][1][e] || e)
                }, h, h.exports, d, n, t, a)
            }
            return t[w].exports
        }
        for (var k = "function" == typeof require && require, w = 0; w < a.length; w++) b(a[w]);
        return b
    }
    return d
})()({
    1: [function(d, n, t) {
        function a(b) {
            var a, d = [];
            for (a in b) {
                var D =
                    b[a];
                null !== D && void 0 !== D && d.push(a + "\x3d" + encodeURIComponent(D))
            }
            return d.join("\x26")
        }
        n.exports = {
            makeQueryString: a,
            buildUrl: function(b, d) {
                (d = a(d)) && (b = -1 === b.indexOf("?") ? b + ("?" + d) : b + ("\x26" + d));
                return b
            },
            guid: function(b) {
                function a() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                b = b || "-";
                return a() + a() + b + a() + b + a() + b + a() + b + a() + a() + a()
            }
        }
    }, {}],
    2: [function(d, n, t) {
        var a = d("moment"),
            b = d("Logging.js"),
            k = d("Utils.js"),
            w = d("Settings.js"),
            D = d("magnet-uri"),
            h = d("EngineApiBase"),
            r = !1,
            e = h.getEngineStatus,
            c = h.openUrl,
            x = h.checkEngine,
            C = h.sendRequest;
        d = function() {
            function d(c) {
                function e(b) {
                    "function" === typeof c.onError && c.onError.call(null, b)
                }
                var a = k.buildUrl("//content-api.acestream.net/upload/jsonp", {
                    url: c.url,
                    d: c.developerId || 0,
                    a: c.affiliateId || 0,
                    z: c.zoneId || 0,
                    f: "json"
                });
                k.xhr({
                    url: a,
                    onload: function(a) {
                        if (200 == a.status) try {
                            var x = JSON.parse(a.responseText);
                            b.verbose("getContentIdByUrl: response\x3d" + JSON.stringify(x));
                            x.error ? e(x.error) : x.id ? "function" === typeof c.onSuccess && c.onSuccess.call(null,
                                x.id) : e("missing id in response")
                        } catch (za) {
                            e(za)
                        } else e("bad http status: " + a.status)
                    },
                    error: function() {
                        e("request failed")
                    }
                })
            }

            function n(c) {
                c.data.acestream && (c = c.data.acestream.msg, b.log("acestreamEventListener: got event: " + c), "close_iframe_playlist_add_item" === c && (t(), h.callHook(h.HOOK_PLAYLIST_ADD_IFRAME_CLOSED)))
            }

            function t() {
                var b = document.getElementById(w.PLAYLIST_ADD_IFRAME_ID);
                b && b.parentNode.removeChild(b);
                (b = document.getElementById(w.PLAYLIST_ADD_IFRAME_OVERLAY_ID)) && b.parentNode.removeChild(b)
            }

            function E(c) {
                var e = document;
                if (e.getElementById(w.PLAYLIST_ADD_IFRAME_ID)) b.log("addEnginePlaylistItem: iframe already exists");
                else {
                    r || (window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent && window.attachEvent("onmessage", n), r = !0);
                    var a = {};
                    x(function(b) {
                        3002800 > b.versionCode || (a.method = "playlist_add_item", c.title && (a.title = c.title), c.content_id && (a.content_id = c.content_id), c.magnet && (a.magnet = c.magnet), c.infohash && (a.infohash = c.infohash), c.transport_file_url && (a.transport_file_url =
                            c.transport_file_url), b = e.createElement("iframe"), b.id = w.PLAYLIST_ADD_IFRAME_ID, b.src = k.buildUrl("http://127.0.0.1:6878/server/iframe", a), b.style.border = "none", c.container ? (b.style.width = "100%", b.style.height = "100%", c.container.appendChild(b)) : (b.style.position = "fixed", b.style.top = "75px", b.style.left = "50%", b.style.marginLeft = "-325px", b.style.width = "650px", b.style.height = "445px", b.style.zIndex = "9999999999", e.body.appendChild(b)), c.createOverlay && (b = e.createElement("div"), b.id = w.PLAYLIST_ADD_IFRAME_OVERLAY_ID,
                            b.style.position = "fixed", b.style.left = "0", b.style.top = "0", b.style.right = "0", b.style.bottom = "0", b.style.backgroundColor = "#000000", b.style.opacity = "0.4", b.style.zIndex = "999999999", e.body.appendChild(b)))
                    })
                }
            }

            function U(b, c, e) {
                b = k.extend(b, {
                    b: 1
                });
                c && (b.player_id = c);
                C({
                    method: "open_in_player",
                    params: b,
                    onsuccess: function(b) {
                        "function" === typeof e && e.call(null, b)
                    },
                    onerror: function() {
                        "function" === typeof e && e.call(null)
                    }
                })
            }

            function N(b, c) {
                var e = b.suggest ? "suggest" : "search",
                    a = {};
                b.engineVersion = b.engineVersion ||
                    0;
                b.query && (a.query = b.query);
                b.category && (a.category = b.category);
                b.page && (a.page = b.page);
                b.page_size && (a.page_size = b.page_size);
                b.group_by_channels && (a.group_by_channels = 1);
                b.show_epg && (a.show_epg = 1);
                var x;
                (x = 3011200 <= b.engineVersion ? !1 : !0) && (a.epg_name = "__old_format__");
                C({
                    method: e,
                    needToken: !0,
                    params: a,
                    onsuccess: function(b) {
                        if (x) {
                            for (var A = 0; A < b.results.length; A++) {
                                var y = 99,
                                    e = b.results[A];
                                if (e.items && 0 < e.items.length) {
                                    var a = e.items[0].name;
                                    "-" == a.substring(0, 1) && (y = a.indexOf("-", 1), y = a.substring(1,
                                        y), y = parseInt(y))
                                }
                                e.relevance = y
                            }
                            b.results.sort(function(A, b) {
                                return A.relevance < b.relevance ? -1 : A.relevance > b.relevance ? 1 : 0
                            })
                        }
                        c(b)
                    },
                    onerror: function() {
                        c(null)
                    }
                })
            }

            function L(c, e) {
                try {
                    var a = c.suggest ? "suggest" : "search",
                        x = {
                            _r: location.href
                        };
                    c.query && (x.q = c.query);
                    c.category && (x.category = c.category);
                    c.page && (x.p = c.page);
                    c.page_size && (x.ps = c.page_size);
                    c = "https://search.acestream.net/" + a + "?";
                    for (var h in x) c += h + "\x3d" + encodeURIComponent(x[h]) + "\x26";
                    k.xhr({
                        method: "GET",
                        url: c,
                        timeout: 3E4,
                        onload: function(c) {
                            var A =
                                null;
                            if (200 == c.status) try {
                                A = JSON.parse(c.responseText)
                            } catch (y) {
                                b.log("failed to parse response")
                            } else b.log("search failed: status\x3d" + c.status);
                            "function" === typeof e && e(A)
                        }
                    })
                } catch (za) {
                    b.log("search: error: " + za), "function" === typeof e && e(null)
                }
            }

            function Ha(b, c) {
                var e = a().unix();
                C({
                    method: "get_server_epg",
                    needToken: !0,
                    params: {
                        channel_id: b.channelId,
                        min_stop: e,
                        max_start: e + 43200
                    },
                    onsuccess: function(b) {
                        b && b.results ? c(b.results) : c(null)
                    },
                    onerror: function() {
                        c(null)
                    }
                })
            }

            function Z(c, e) {
                try {
                    var x = a().unix(),
                        h = {
                            _r: location.href,
                            channel_id: c.channelId,
                            min_stop: x,
                            max_start: x + 43200
                        };
                    c = "https://search.acestream.net/epg?";
                    for (var d in h) c += d + "\x3d" + encodeURIComponent(h[d]) + "\x26";
                    k.xhr({
                        method: "GET",
                        url: c,
                        timeout: 3E4,
                        onload: function(c) {
                            var A = null;
                            if (200 == c.status) try {
                                A = JSON.parse(c.responseText)
                            } catch (y) {
                                b.log("getEpgRemote: failed to parse response")
                            } else b.log("getEpgRemote: failed: status\x3d" + c.status);
                            "function" === typeof e && (A && A.results ? e(A.results) : (b.log("getEpgRemote: missing results"), e(null)))
                        }
                    })
                } catch (za) {
                    b.log("getEpgRemote: error: " +
                        za), "function" === typeof e && e(null)
                }
            }

            function ia() {
                try {
                    if (b.log("create start engine marker"), document && document.body) {
                        var c = document.createElement("div");
                        c.style.display = "none";
                        c.id = "x-acestream-awe-start-engine";
                        document.body.appendChild(c);
                        return c
                    }
                } catch (Da) {
                    b.log("failed to create start engine marker: " + Da)
                }
                return null
            }

            function qa(c, e, a, x) {
                if ("function" !== typeof c) throw "watchStartEngineMarker: missing callback";
                void 0 === a && (a = 30, x = 100);
                "started" === e.getAttribute("data-status") ? (b.log("watchStartEngineMarker: marker started, wait engine"),
                    e && e.parentNode.removeChild(e), la(c)) : "failed" === e.getAttribute("data-status") ? (b.log("watchStartEngineMarker: marker failed, give up"), e && e.parentNode.removeChild(e), c("marker failed")) : 0 >= a ? (b.log("watchStartEngineMarker: give up"), e && e.parentNode.removeChild(e), c("marker timeout")) : (b.log("watchStartEngineMarker: retry(" + a + ") in " + x), setTimeout(function() {
                    qa(c, e, a - 1, x)
                }, x))
            }

            function la(c, a, x) {
                if ("function" !== typeof c) throw "watchEngineStatus: missing callback";
                void 0 === a && (a = 20, x = 1E3);
                e(function(e) {
                    e &&
                        e.version ? (b.log("watchEngineStatus: got engine version: " + e.version), c(null, e.version)) : 0 < a ? (b.log("watchEngineStatus: retry(" + a + ") in " + x), setTimeout(function() {
                            la(c, a - 1, x)
                        }, x)) : (b.log("watchEngineStatus: give up"), c("engine timeout"))
                })
            }
            return {
                addHook: h.addHook,
                HOOK_PLAYLIST_ADD_IFRAME_CLOSED: h.HOOK_PLAYLIST_ADD_IFRAME_CLOSED,
                HOOK_ENGINE_REQUEST_FAILED: h.HOOK_ENGINE_REQUEST_FAILED,
                AWE_getLocale: function(b) {
                    var c = null;
                    "undefined" !== typeof navigator && (c = navigator.language);
                    "function" === typeof b &&
                        b(c);
                    return c
                },
                AWE_getAvailablePlayers: function(b, c) {
                    if ("function" === typeof c) {
                        var e = {};
                        b.content_id ? e.content_id = b.content_id : b.transport_file_url ? e.url = b.transport_file_url : b.infohash ? e.infohash = b.infohash : c.call(null);
                        C({
                            method: "get_available_players",
                            params: e,
                            onsuccess: function(b) {
                                c.call(null, b)
                            },
                            onerror: function() {
                                c.call(null)
                            }
                        })
                    }
                },
                AWE_openInPlayer: U,
                AWE_getDeviceId: function(b) {
                    C({
                        api: "service",
                        method: "get_public_user_key",
                        onsuccess: function(c) {
                            "function" === typeof b && b.call(null, c)
                        },
                        onerror: function() {
                            "function" ===
                            typeof b && b.call(null)
                        }
                    })
                },
                AWE_getContentId: function(c, e) {
                    var a = {};
                    if (c.transport_file_url) d({
                        url: c.transport_file_url,
                        onSuccess: function(b) {
                            e({
                                content_id: b
                            })
                        },
                        onError: function(c) {
                            b.verbose("failed to get content id: " + c);
                            e(null)
                        }
                    });
                    else {
                        if (c.magnet) {
                            var x = D.decode(c.magnet);
                            c.infohash = x.infoHash
                        }
                        c.url && (a.url = c.url);
                        c.infohash && (a.infohash = c.infohash);
                        c.title && (a.title = c.title);
                        C({
                            method: "get_content_id",
                            params: a,
                            onsuccess: function(b) {
                                e(b)
                            },
                            onerror: function() {
                                e(null)
                            }
                        })
                    }
                },
                AWE_getMediaFiles: function(b,
                    c) {
                    var e = {};
                    b.content_id && (e.content_id = b.content_id);
                    b.url && (e.url = b.url);
                    b.infohash && (e.infohash = b.infohash);
                    b.magnet && (e.magnet = b.magnet);
                    b.mode && (e.mode = b.mode);
                    b.expand_wrapper && (e.expand_wrapper = b.expand_wrapper);
                    b.dump_transport_file && (e.dump_transport_file = b.dump_transport_file);
                    C({
                        method: "get_media_files",
                        params: e,
                        onsuccess: function(b) {
                            c(b)
                        },
                        onerror: function(b) {
                            c(null, b)
                        }
                    })
                },
                AWE_addToPlaylist: function(b, c) {
                    "function" === typeof GM_xmlhttpRequest ? C({
                        method: "playlist_add_item",
                        needToken: !0,
                        params: {
                            id: b.content_id,
                            infohash: b.infohash,
                            url: b.transport_file_url,
                            title: b.title,
                            category: b.category,
                            tags: b.tags,
                            description: b.description,
                            poster: b.poster,
                            auto_search: b.auto_search
                        },
                        onsuccess: function(b) {
                            c(b)
                        },
                        onerror: function() {
                            c(null)
                        }
                    }) : (E(b), c("ok"))
                },
                AWE_getPlaylistEpg: function(b, c) {
                    var e = a().unix();
                    C({
                        method: "get_epg_by_item_id",
                        needToken: !0,
                        params: {
                            id: b.playlistItemId,
                            min_stop: e,
                            max_start: e + 43200
                        },
                        onsuccess: function(b) {
                            b ? c(b) : c(null)
                        },
                        onerror: function() {
                            c(null)
                        }
                    })
                },
                addToPlaylistIframe: E,
                hidePlaylistAddIframe: t,
                AWE_search: function(b, c) {
                    function a(e) {
                        b.engineVersion = e;
                        3010600 <= e ? N(b, c) : L(b, c)
                    }
                    "undefined" === typeof b.engineVersion ? e(function(b) {
                        a(b.version)
                    }) : a(b.engineVersion)
                },
                startEngine: function(b) {
                    if ("function" === typeof AWE_engineStatus) AWE_engineStatus(function(b) {
                        console.log("\x3e\x3estartEngine: response", b)
                    });
                    else {
                        var c = ia();
                        c && qa(b, c)
                    }
                },
                AWE_getPlaylist: function(b, c) {
                    var e = {
                        sort: b.sort || 0,
                        offset: b.offset || 0,
                        limit: b.limit || 25
                    };
                    b.is_favorite && (e.is_favorite = 1);
                    b.name && (e.name = b.name);
                    C({
                        method: "playlist_get",
                        needToken: !0,
                        params: e,
                        onsuccess: function(b) {
                            c(b)
                        },
                        onerror: function() {
                            c(null)
                        }
                    })
                },
                AWE_setFavorite: function(b, c) {
                    C({
                        method: "get_server_params",
                        needToken: !0,
                        onsuccess: function(e) {
                            C({
                                method: "playlist_item_set_favorite",
                                needToken: !0,
                                params: {
                                    id: b.id,
                                    value: b.value ? 1 : 0,
                                    owner: e.current_media_owner
                                },
                                onsuccess: function(b) {
                                    c(b)
                                },
                                onerror: function() {
                                    c(null)
                                }
                            })
                        },
                        onerror: function() {
                            c(null)
                        }
                    })
                },
                AWE_getEpg: function(b, c) {
                    "undefined" === typeof b.engineVersion ? e(function(e) {
                            3010600 <= e.version ? Ha(b, c) : Z(b, c)
                        }) : 3010600 <=
                        b.engineVersion ? Ha(b, c) : Z(b, c)
                },
                getEngineStatus: e,
                openInPlayer: function(b, c, e, a) {
                    b = {
                        content_id: b
                    };
                    "aircast" === e ? (b.device_id = c, b.autoplay = "yes", k.openWindow(k.buildUrl("http://127.0.0.1:6878/remote-control", b)), a(!0)) : U(b, c, function(b) {
                        a(b)
                    })
                },
                getContentIdByUrl: d,
                openUrl: c,
                AWE_startJsPlayer: h.wrapGlobalFunc("AWE_startJsPlayer", function(b) {
                    throw "AWE_startJsPlayer not implemented";
                }),
                AWE_registerContextMenuCommand: h.wrapGlobalFunc("AWE_startJsPlayer", function(b, c, e, a) {
                    throw "AWE_registerContextMenuCommand not implemented";
                }),
                AWE_getConfig: h.wrapGlobalFunc("AWE_getConfig", function(b, c) {
                    throw "AWE_getConfig not implemented";
                })
            }
        }();
        n.exports = d
    }, {
        EngineApiBase: 3,
        "Logging.js": 6,
        "Settings.js": 10,
        "Utils.js": 14,
        "magnet-uri": 54,
        moment: 55
    }],
    3: [function(d, n, t) {
        function a(b, c) {
            return "function" === typeof window[b] ? window[b] : c
        }

        function b(b, c) {
            if ("function" === typeof x[b]) return c ? x[b].apply(null, c) : x[b].call(null)
        }

        function k(b) {
            w({
                method: "get_api_access_token",
                onsuccess: function(c) {
                    c && c.token ? b(c.token) : (h.log("getApiAccessToken: malformed response: " +
                        JSON.stringify(c)), b(null))
                },
                onerror: function() {
                    b(null)
                }
            })
        }

        function w(a) {
            function x(b) {
                h.log("engineapi:request failed: " + b);
                "function" === typeof a.onerror && a.onerror.call(null, b)
            }
            try {
                if (!a.method) throw "missing method";
                a.params || (a.params = {});
                a.api || (a.api = "server");
                if (a.needToken) {
                    if (null === c) {
                        k(function(b) {
                            null === b ? x("cannot get api access token") : (c = b, a.params.token = b, w(a))
                        });
                        return
                    }
                    a.params.token = c
                }
                a.params.method = a.method;
                if ("server" == a.api) var d = "http://127.0.0.1:6878/server/api";
                else if ("service" ==
                    a.api) d = "http://127.0.0.1:6878/webui/api/service";
                else throw "unknown api: " + a.api;
                var C = d + "?" + e.makeQueryString(a.params);
                r.xhr({
                    method: "GET",
                    url: C,
                    timeout: 1E4,
                    onload: function(c) {
                        if (200 == c.status) try {
                            var e = JSON.parse(c.responseText);
                            e.error ? x(e.error) : e.result ? "function" === typeof a.onsuccess && a.onsuccess.call(null, e.result) : x("malformed response from engine")
                        } catch (N) {
                            x(N)
                        } else x("bad http status: " + c.status), 0 === c.status && b("acestream-hook-engine-request-failed", [a.method])
                    },
                    onerror: function(c) {
                        x("status\x3d" +
                            c.status + " text\x3d" + c.statusText);
                        b("acestream-hook-engine-request-failed", [a.method])
                    }
                })
            } catch (E) {
                h.log("sendRequest: " + E)
            }
        }

        function D(b, c, e) {
            try {
                r.xhr({
                    method: "GET",
                    url: "http://127.0.0.1:6878/webui/api/service?method\x3dget_version",
                    timeout: 1E4,
                    onload: function(a) {
                        var x = "",
                            d = null,
                            C = 0;
                        200 == a.status ? (a = JSON.parse(a.responseText), a.error ? (C = 0, d = null, x = a.error) : a.result ? (C = parseInt(a.result.code), isNaN(C) && (C = 0), d = a.result.version) : (C = 0, d = null, x = "malformed response from engine")) : (C = 0, d = null, x = "engine returned error: " +
                            a.status);
                        x && h.log("checkEngine: error: " + x);
                        "function" === typeof b && (!C && void 0 !== c && 0 < c ? (h.log("AWE: check engine failed (" + c + "), next try in " + e), window.setTimeout(function() {
                            D(b, c - 1, e)
                        }, e)) : b.call(null, {
                            running: !!C,
                            versionCode: C,
                            versionString: d
                        }))
                    },
                    onerror: function() {
                        b.call(null, {
                            running: !1,
                            versionCode: 0,
                            versionString: null
                        })
                    }
                })
            } catch (Ga) {
                h.log("checkEngine: error: " + Ga)
            }
        }
        var h = d("Logging.js"),
            r = d("xhr.js"),
            e = d("BaseUtils.js"),
            c = null,
            x = {};
        d = a("AWE_engineStatus", function(b) {
            if ("function" !== typeof b) throw "missing callback in getEngineStatus()";
            D(function(c) {
                c.running ? b.call(null, {
                    running: c.running,
                    version: c.versionCode
                }) : b.call(null, {
                    running: !1,
                    version: 0
                })
            })
        });
        n.exports = {
            HOOK_PLAYLIST_ADD_IFRAME_CLOSED: "acestream-hook-playlist-add-iframe-closed",
            HOOK_ENGINE_REQUEST_FAILED: "acestream-hook-playlist-add-iframe-closed",
            checkEngine: D,
            sendRequest: w,
            addHook: function(b, c) {
                x[b] = c
            },
            callHook: b,
            wrapGlobalFunc: a,
            getEngineStatus: d,
            openUrl: function(b, c) {
                if ("function" !== typeof c) throw "EngineApi:openUrl: callback must be a function";
                w({
                    method: "open_url",
                    needToken: !1,
                    params: {
                        url: b,
                        where: "same",
                        new_window: 1
                    },
                    onsuccess: function(b) {
                        c(b)
                    },
                    onerror: function() {
                        c(null)
                    }
                })
            }
        }
    }, {
        "BaseUtils.js": 1,
        "Logging.js": 6,
        "xhr.js": 49
    }],
    4: [function(d, n, t) {
        function a() {
            this._eventListeners = {};
            this._proxyManagers = []
        }
        a.prototype.addEventListener = function(b, a) {
            "undefined" === typeof this._eventListeners[b] && (this._eventListeners[b] = []); - 1 === this._eventListeners[b].indexOf(a) && this._eventListeners[b].push(a)
        };
        a.prototype.removeEventListener = function(b, a) {
            "undefined" !== typeof this._eventListeners[b] &&
                (a = this._eventListeners[b].indexOf(a), -1 !== a && this._eventListeners[b].splice(a, 1))
        };
        a.prototype.emit = function(b, a) {
            var d;
            if ("undefined" !== typeof this._eventListeners[b])
                for (d = 0; d < this._eventListeners[b].length; d++) {
                    var k = this._eventListeners[b][d];
                    a ? k.apply(null, a) : k.call(null)
                }
            for (d = 0; d < this._proxyManagers.length; d++) this._proxyManagers[d].emit(b, a)
        };
        a.prototype.addEventProxy = function(b) {
            this._proxyManagers.push(b)
        };
        n.exports = a
    }, {}],
    5: [function(d, n, t) {
        n.exports = {
            SVG_DETACH_ICON: '\x3csvg fill\x3d"#000000" height\x3d"48" viewBox\x3d"0 0 24 24" width\x3d"48" xmlns\x3d"http://www.w3.org/2000/svg" xmlns:xlink\x3d"http://www.w3.org/1999/xlink"\x3e         \x3cdefs\x3e\x3cpath d\x3d"M0 0h24v24H0V0z" id\x3d"a"/\x3e\x3c/defs\x3e         \x3cdefs\x3e\x3cpath d\x3d"M0 0h24v24H0V0z" id\x3d"c"/\x3e\x3c/defs\x3e         \x3cclipPath id\x3d"b"\x3e\x3cuse overflow\x3d"visible" xlink:href\x3d"#a"/\x3e\x3c/clipPath\x3e         \x3cclipPath clip-path\x3d"url(#b)" id\x3d"d"\x3e\x3cuse overflow\x3d"visible" xlink:href\x3d"#c"/\x3e\x3c/clipPath\x3e         \x3cpath clip-path\x3d"url(#d)" d\x3d"M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/\x3e     \x3c/svg\x3e',
            SVG_DETACH_ICON_TOP: '\x3csvg fill\x3d"#000000" height\x3d"30" viewBox\x3d"0 0 24 24" width\x3d"30" xmlns\x3d"http://www.w3.org/2000/svg" xmlns:xlink\x3d"http://www.w3.org/1999/xlink"\x3e         \x3cdefs\x3e\x3cpath d\x3d"M0 0h24v24H0V0z" id\x3d"a"/\x3e\x3c/defs\x3e         \x3cdefs\x3e\x3cpath d\x3d"M0 0h24v24H0V0z" id\x3d"c"/\x3e\x3c/defs\x3e         \x3cclipPath id\x3d"b"\x3e\x3cuse overflow\x3d"visible" xlink:href\x3d"#a"/\x3e\x3c/clipPath\x3e         \x3cclipPath clip-path\x3d"url(#b)" id\x3d"d"\x3e\x3cuse overflow\x3d"visible" xlink:href\x3d"#c"/\x3e\x3c/clipPath\x3e         \x3cpath clip-path\x3d"url(#d)" d\x3d"M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/\x3e     \x3c/svg\x3e',
            SVG_PLAY_TOP: '\x3csvg fill\x3d"#000000" height\x3d"28" viewBox\x3d"0 0 24 24" width\x3d"28" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M8 5v14l11-7z"/\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3c/svg\x3e',
            SVG_SETTINGS: '\x3csvg fill\x3d"#ffffff" height\x3d"18" viewBox\x3d"0 0 24 24" width\x3d"18" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3cpath d\x3d"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/\x3e\x3c/svg\x3e',
            SVG_SETTINGS_TOP: '\x3csvg fill\x3d"#ffffff" height\x3d"16" viewBox\x3d"0 0 24 24" width\x3d"16" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3cpath d\x3d"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/\x3e\x3c/svg\x3e',
            SVG_CLOSE: '\x3csvg fill\x3d"#eee" height\x3d"24" viewBox\x3d"0 0 24 24" width\x3d"24" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3c/svg\x3e',
            SVG_ARROW_BACK: '\x3csvg fill\x3d"#eee" height\x3d"24" viewBox\x3d"0 0 24 24" width\x3d"24" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3cpath d\x3d"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/\x3e\x3c/svg\x3e',
            SVG_PLAYLIST_ADD: '\x3csvg fill\x3d"#eee" height\x3d"24" viewBox\x3d"0 0 24 24" width\x3d"24" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3cpath d\x3d"M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/\x3e\x3c/svg\x3e',
            SVG_PLAYLIST_ADDED: '\x3csvg fill\x3d"#eee" height\x3d"24" viewBox\x3d"0 0 24 24" width\x3d"24" xmlns\x3d"http://www.w3.org/2000/svg" xmlns:xlink\x3d"http://www.w3.org/1999/xlink"\x3e\x3cdefs\x3e\x3cpath d\x3d"M0 0h24v24H0V0z" id\x3d"a"/\x3e\x3c/defs\x3e\x3cclipPath id\x3d"b"\x3e\x3cuse overflow\x3d"visible" xlink:href\x3d"#a"/\x3e\x3c/clipPath\x3e\x3cpath clip-path\x3d"url(#b)" d\x3d"M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"/\x3e\x3c/svg\x3e',
            SVG_PLAYLIST_ADD_TOP: '\x3csvg fill\x3d"#eee" height\x3d"18" viewBox\x3d"0 0 24 24" width\x3d"18" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3cpath d\x3d"M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/\x3e\x3c/svg\x3e',
            SVG_PLAYLIST_ADDED_TOP: '\x3csvg fill\x3d"#eee" height\x3d"18" viewBox\x3d"0 0 24 24" width\x3d"18" xmlns\x3d"http://www.w3.org/2000/svg" xmlns:xlink\x3d"http://www.w3.org/1999/xlink"\x3e\x3cdefs\x3e\x3cpath d\x3d"M0 0h24v24H0V0z" id\x3d"a"/\x3e\x3c/defs\x3e\x3cclipPath id\x3d"b"\x3e\x3cuse overflow\x3d"visible" xlink:href\x3d"#a"/\x3e\x3c/clipPath\x3e\x3cpath clip-path\x3d"url(#b)" d\x3d"M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"/\x3e\x3c/svg\x3e',
            SVG_SHARE_24: '\x3csvg fill\x3d"#eee" height\x3d"24" viewBox\x3d"0 0 24 24" width\x3d"24" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3cpath d\x3d"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/\x3esvg\x3e',
            SVG_SHARE_18: '\x3csvg fill\x3d"#eee" height\x3d"18" viewBox\x3d"0 0 24 24" width\x3d"18" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3cpath d\x3d"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/\x3e\x3c/svg\x3e',
            SVG_MORE_VERT_24: '\x3csvg fill\x3d"#eee" height\x3d"24" viewBox\x3d"0 0 24 24" width\x3d"24" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3cpath d\x3d"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/\x3e\x3c/svg\x3e',
            SVG_MENU_18: '\x3csvg fill\x3d"#eee" height\x3d"18" viewBox\x3d"0 0 24 24" width\x3d"18" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3cpath d\x3d"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/\x3e\x3c/svg\x3e',
            SVG_MENU_24: '\x3csvg fill\x3d"#eee" height\x3d"24" viewBox\x3d"0 0 24 24" width\x3d"24" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3cpath d\x3d"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/\x3e\x3c/svg\x3e',
            PNG_ACE_CAST: '\x3cdiv class\x3d"icon-ace-cast-22"\x3e\x3c/div\x3e'
        }
    }, {}],
    6: [function(d, n, t) {
        function a(b) {
            try {
                "function" === typeof GM_log ? GM_log(b) : console.log(b)
            } catch (D) {
                k && console.error("errore in logging: " + D)
            }
        }
        var b = [],
            k = !1;
        n.exports = {
            log: a,
            verbose: function(b) {
                k && a(b)
            },
            dumpLogs: function() {
                var a = window.$;
                if (a) {
                    var d = a("\x3cdiv\x3e").css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            overflow: "auto",
                            padding: "8px",
                            "background-color": "#fff",
                            "font-size": "11px",
                            color: "#000",
                            "z-index": "2147482900"
                        }),
                        h = a("\x3ctextarea\x3e");
                    h.css({
                        width: "calc(100% - 16px)",
                        height: "90%"
                    });
                    d.append(h);
                    var r = a("\x3cbutton\x3e");
                    r.html("Close");
                    r.on("click", function() {
                        d.remove()
                    });
                    d.append(r);
                    for (r = 0; r < b.length; r++) h.append(b[r] + "\n");
                    a("body").append(d)
                }
            },
            setVerbose: function(b) {
                k =
                    b
            }
        }
    }, {}],
    7: [function(d, n, t) {
        var a = d("Logging.js"),
            b = d("EngineApi.js"),
            k = d("Settings.js"),
            w = d("PopupManager.js"),
            D = d("ui/TopMenu.js");
        n.exports = function(d) {
            function h(b, e) {
                if (!c) return null;
                if ("function" !== typeof c[b]) throw "missing context method: " + b;
                return e ? c[b].apply(c, e) : c[b].call(c)
            }
            var e = this;
            d = d || {};
            var c;
            w.addEventListener("player-selected", function() {
                e.pauseOriginalPlayer()
            });
            this.openSelectPlayerPopup = function(b) {
                e.getContentId(function(c) {
                    var e = !1;
                    if (c) {
                        e = !0;
                        var a = h("getContentTitle");
                        w.open("SelectPlayerPopup", {
                            title: a,
                            contentId: c.content_id,
                            hideCloseButton: k.USE_TOP_MENU,
                            minTopMargin: k.USE_TOP_MENU ? 50 : 0
                        })
                    }
                    "function" === typeof b && b(e)
                })
            };
            this.openPlaylistAddPopup = function(b) {
                e.getContentId(function(c) {
                    var e = !1;
                    if (c) {
                        e = !0;
                        var a = h("getContentTitle"),
                            x = h("getContentPoster");
                        w.open("function" === typeof GM_xmlhttpRequest ? "PlaylistAddPopup" : "PlaylistAddPopupIframe", {
                            title: a,
                            contentId: c.content_id,
                            poster: x,
                            hideCloseButton: k.USE_TOP_MENU,
                            minTopMargin: k.USE_TOP_MENU ? 50 : 0
                        })
                    }
                    "function" ===
                    typeof b && b(e)
                })
            };
            this.openSharePopup = function(b) {
                e.getContentId(function(c) {
                    var e = !1;
                    if (c) {
                        e = !0;
                        var a = h("getContentTitle");
                        w.open("SharePopup", {
                            title: a,
                            contentId: c.content_id,
                            hideCloseButton: k.USE_TOP_MENU,
                            minTopMargin: k.USE_TOP_MENU ? 50 : 0
                        })
                    }
                    "function" === typeof b && b(e)
                })
            };
            this.openMissingEnginePopup = function(b) {
                w.open("MissingEnginePopup");
                "function" === typeof b && b(!0)
            };
            this.openOldEnginePopup = function(b) {
                w.open("OldEnginePopup");
                "function" === typeof b && b(!0)
            };
            this.openPopup = function(b, c) {
                if ("SelectPlayerPopup" ==
                    b) e.openSelectPlayerPopup(c);
                else if ("PlaylistAddPopup" == b) e.openPlaylistAddPopup(c);
                else if ("SharePopup" == b) e.openSharePopup(c);
                else if ("MissingEnginePopup" == b) e.openMissingEnginePopup(c);
                else if ("OldEnginePopup" == b) e.openOldEnginePopup(c);
                else throw "unknown popup id: " + b;
            };
            this.openTopMenu = function(b) {
                e.getContentId(function(c) {
                    if (c) {
                        var a = h("getPlayerId"),
                            x = h("getContentTitle"),
                            d = h("getContentPoster");
                        D.open(null, {
                            contentId: c.content_id,
                            title: x,
                            poster: d,
                            engineVersion: e.getEngineVersion(),
                            source: b.source,
                            playerId: a
                        }, {
                            callback: b.callback,
                            playerContainer: e.getPlayerContainer()
                        })
                    } else "function" === typeof b.callback && b.callback(!1)
                })
            };
            this.getContentId = function(c) {
                if (!e.checkEngine()) return !1;
                var x = h("getContentDescriptor"),
                    d = {
                        title: h("getContentTitle")
                    };
                if (x) {
                    if (x.transport_file_url) d.transport_file_url = x.transport_file_url;
                    else if (x.url) d.url = x.url;
                    else if (x.direct_url) d.url = x.direct_url;
                    else if (x.infohash) d.infohash = x.infohash;
                    else if (x.magnet) d.magnet = x.magnet;
                    else if (x.contentId) {
                        c({
                            content_id: x.contentId
                        });
                        return
                    }
                    b.AWE_getContentId(d, function(b) {
                        a.log("get content id: params\x3d" + JSON.stringify(d) + " response\x3d" + JSON.stringify(b));
                        c(b)
                    })
                } else c(null)
            };
            this.checkEngine = function() {
                return c ? 0 == c.getEngineVersion() ? (a.verbose("engine is not running"), k.CHECK_ENGINE_WARNINGS && e.openMissingEnginePopup(), !1) : c.getEngineVersion() < k.MIN_SUPPORTED_ENGINE_VERSION ? (a.verbose("engine is not supported: version\x3d" + c.getEngineVersion()), k.CHECK_ENGINE_WARNINGS && e.openMissingEnginePopup(), !1) : !0 : !0
            };
            this.getEngineVersion =
                function() {
                    return c ? c.getEngineVersion() : 0
                };
            this.getPlayerContainer = function() {
                return h("getPlayerContainer")
            };
            this.clearTimer = function(b) {
                h("clearTimer", [b])
            };
            this.setTimer = function(b, c) {
                h("setTimer", [b, c])
            };
            this.pauseOriginalPlayer = function() {
                h("pauseOriginalPlayer")
            };
            (function(b) {
                if ("object" !== typeof b) throw "context must be an object";
                for (var e = "getTimer setTimer clearTimer getPlayerId getEngineVersion getContentDescriptor getContentTitle getContentPoster pauseOriginalPlayer getPlayerContainer".split(" "),
                        a = 0; a < e.length; a++) {
                    var x = e[a];
                    if ("function" !== typeof b[x]) throw "context missing method " + x;
                }
                c = b
            })(d.context)
        }
    }, {
        "EngineApi.js": 2,
        "Logging.js": 6,
        "PopupManager.js": 9,
        "Settings.js": 10,
        "ui/TopMenu.js": 46
    }],
    8: [function(d, n, t) {
        var a = d("Logging.js"),
            b = d("Settings.js"),
            k = d("Storage.js");
        n.exports = {
            rememberPlayer: function(d, D, h) {
                a.verbose("remember player: id\x3d" + d);
                k.setValue(b.VAR_SELECTED_PLAYER, {
                    playerId: d,
                    playerType: D
                }, h)
            },
            getRememberedPlayer: function() {
                var d = k.getValue(b.VAR_SELECTED_PLAYER);
                a.verbose("get remembered player: " +
                    d);
                return d
            },
            clearRememberedPlayer: function(d) {
                a.verbose("clear remembered player");
                k.setValue(b.VAR_SELECTED_PLAYER, null, d)
            }
        }
    }, {
        "Logging.js": 6,
        "Settings.js": 10,
        "Storage.js": 11
    }],
    9: [function(d, n, t) {
        function a() {
            w.safeHide(k("#" + c));
            k("body").css({
                overflow: "auto"
            })
        }

        function b() {
            if (!r) {
                var b = !1,
                    c;
                for (c in h)
                    if (h[c].isVisible()) {
                        b = !0;
                        break
                    } b || (a(), e.emit("all-popups-closed"))
            }
        }
        var k = d("jquery"),
            w = d("Utils.js");
        t = d("EventManager.js");
        var D = {
                MissingEnginePopup: d("ui/MissingEnginePopup.js"),
                OldEnginePopup: d("ui/OldEnginePopup.js"),
                MissingUserscriptPopup: d("ui/MissingUserscriptPopup.js"),
                MissingUserscriptPopupInPlayer: d("ui/MissingUserscriptPopupInPlayer.js"),
                SharePopup: d("ui/SharePopup.js"),
                PlaylistAddPopup: d("ui/PlaylistAddPopup.js"),
                PlaylistAddPopupIframe: d("ui/PlaylistAddPopupIframe.js"),
                SelectPlayerPopup: d("ui/SelectPlayerPopup.js")
            },
            h = {},
            r = !1,
            e = new t,
            c = "acestream__popup-overlay-" + Math.random().toString().substring(2, 7);
        n.exports = {
            open: function(a, d, fa) {
                if (!D[a]) throw "unknown popup class: " + a;
                if (h[a]) var x = h[a];
                else x = new D[a](d,
                    fa), x.addEventProxy(e), x.addEventListener("popup-closed", b), h[a] = x;
                r = !0;
                for (var C in h) C !== a && h[C].hide();
                r = !1;
                x.open(d, fa);
                x.needOverlay() && (a = k("#" + c), 0 == a.length && (a = k("\x3cdiv\x3e").attr("id", c).addClass("acestream__popup-overlay"), k("body").append(a)), w.safeShow(a), k("body").css({
                    overflow: "hidden"
                }))
            },
            close: function(b) {
                if (!D[b]) throw "unknown popup class: " + b;
                h[b] && h[b].hide()
            },
            hideAll: function() {
                r = !0;
                for (var b in h) h[b].hide();
                r = !1;
                a();
                e.emit("all-popups-closed")
            },
            addEventListener: function(b,
                c) {
                e.addEventListener(b, c)
            },
            removeEventListener: function(b, c) {
                e.removeEventListener(b, c)
            }
        }
    }, {
        "EventManager.js": 4,
        "Utils.js": 14,
        jquery: 53,
        "ui/MissingEnginePopup.js": 38,
        "ui/MissingUserscriptPopup.js": 39,
        "ui/MissingUserscriptPopupInPlayer.js": 40,
        "ui/OldEnginePopup.js": 41,
        "ui/PlaylistAddPopup.js": 42,
        "ui/PlaylistAddPopupIframe.js": 43,
        "ui/SelectPlayerPopup.js": 44,
        "ui/SharePopup.js": 45
    }],
    10: [function(d, n, t) {
        d = d("Utils.js");
        var a = {
            VERBOSE: !0,
            CHECK_ENGINE_WARNINGS: !1,
            MIN_SUPPORTED_ENGINE_VERSION: 3011602,
            BUTTON_HIDE_TIMEOUT: 3E3,
            FORM_HIDE_TIMEOUT: 5E3,
            DETACH_BUTTON_CLASS: "ace-cast--detach-button",
            DETACH_BUTTON_TOP_CLASS: "magicplayer--detach-button",
            DETACH_BUTTON_CENTER_CLASS: "magicplayer--detach-button-2",
            TOP_BUTTON_OFFSET: 8,
            TOP_BUTTON_OFFSET_OPERA: 36,
            VAR_REMEMBER_PLAYER_STATE: "ace-cast--remember-player-state",
            VAR_SELECTED_PLAYER: "ace-cast--selected-player",
            VAR_LAST_OPEN_POPUP: "ace-cast-last-open-popup",
            PLAYLIST_ADD_IFRAME_ID: "acestream-iframe-playlist-add-item",
            PLAYLIST_ADD_IFRAME_OVERLAY_ID: "acestream-iframe-playlist-add-item-overlay",
            TOP_MENU_REMEMBER_LAST_POPUP: !1,
            OPEN_POPUPS_IN_PARENT_WINDOW: !1,
            OPEN_POPUPS_FROM_USERSCRIPT: !1,
            USE_TOP_MENU: !0,
            USE_USERSCRIPT_STORAGE: !1
        };
        n.exports = d.extend(a, {
            set: function(b, d) {
                a[b] = d
            }
        })
    }, {
        "Utils.js": 14
    }],
    11: [function(d, n, t) {
        var a = d("Logging.js"),
            b = d("Utils.js"),
            k = d("Settings.js"),
            w = {};
        n.exports = {
            setValue: function(d, h, r) {
                r = r || {};
                a.verbose("Storage:setValue: name\x3d" + d + " value\x3d" + JSON.stringify(h));
                "function" === typeof GM_setValue ? GM_setValue(d, JSON.stringify(h)) : (k.USE_USERSCRIPT_STORAGE && !r.localOnly &&
                    b.sendFrameMessage(window.top, "storage-server-set-value", {
                        name: d,
                        value: h
                    }), "undefined" !== typeof localStorage ? localStorage.setItem(d, JSON.stringify(h)) : w[d] = h);
                r.sourceFrame && b.sendFrameMessage(r.sourceFrame, "storage-client-update-values", {
                    values: {
                        name: h
                    }
                })
            },
            getValue: function(b) {
                if ("function" === typeof GM_getValue) return (b = GM_getValue(b)) && (b = JSON.parse(b)), b;
                if ("undefined" !== typeof localStorage) {
                    if (b = localStorage.getItem(b)) try {
                        b = JSON.parse(b)
                    } catch (h) {
                        a.verbose("Storage:getValue: failed to decode: type\x3d" +
                            typeof b + " value\x3d" + b), b = null
                    }
                    return b
                }
                return w[b]
            },
            updateValues: function(a) {
                k.USE_USERSCRIPT_STORAGE && b.sendFrameMessage(window.top, "storage-server-update", {
                    variables: a
                })
            }
        }
    }, {
        "Logging.js": 6,
        "Settings.js": 10,
        "Utils.js": 14
    }],
    12: [function(d, n, t) {
        var a = d("jquery"),
            b = d("Translate.js");
        n.exports = {
            load: function(d) {
                if (!d) return a("#dummy_____element");
                d = a(d);
                d.find(".acestream__translate").each(function() {
                    var d = a(this).data("translate-attr"),
                        k = b(a(this).data("string-id")),
                        h = a(this).data("string-suffix");
                    h && (k += h);
                    d ? a(this).attr(d, k) : a(this).html(k)
                });
                return d
            }
        }
    }, {
        "Translate.js": 13,
        jquery: 53
    }],
    13: [function(d, n, t) {
        var a = d("Logging.js"),
            b = {
                en: d("./lang/en.js"),
                ru: d("./lang/ru.js")
            },
            k = function() {
                var d = navigator.language;
                if (d) {
                    var k = d.indexOf("-"); - 1 != k && (d = d.substring(0, k))
                }
                a.verbose("current lang: " + d);
                return void 0 === b[d] ? "en" : d
            }();
        n.exports = function(a) {
            return b[k] && b[k][a] ? b[k][a] : a
        }
    }, {
        "./lang/en.js": 15,
        "./lang/ru.js": 16,
        "Logging.js": 6
    }],
    14: [function(d, n, t) {
        function a(b) {
            if (!b) return null;
            var c = document.getElementsByTagName("head")[0];
            if (c) {
                var a = document.createElement("style");
                a.textContent = b;
                a.type = "text/css";
                c.appendChild(a);
                return a
            }
            return null
        }

        function b(b, c, a, d) {
            c = {
                acestream: {
                    msg: c,
                    params: a,
                    frameId: r
                }
            };
            "function" === typeof d && (a = Math.random(), h[a] = {
                callback: d,
                timer: setTimeout(function() {
                    d("timed_out")
                }, 250)
            }, c.acestream.messageId = a);
            w.verbose("sendFrameMessage: payload\x3d" + JSON.stringify(c));
            b.postMessage(c, "*")
        }

        function k(b, c) {
            if ("object" === typeof b && "function" === typeof c) {
                var a, e = 0,
                    d = b.length;
                if (void 0 === d)
                    for (a in b) {
                        if (!1 ===
                            c.call(b[a], a, b[a])) break
                    } else
                        for (a = b[0]; e < d && !1 !== c.call(a, e, a); a = b[++e]);
                return b
            }
        }
        var w = d("Logging.js");
        t = d("xhr.js");
        d = d("BaseUtils.js");
        var D = {},
            h = {},
            r = d.guid();
        n.exports = {
            makeShareUrl: function(b, c, a) {
                var e = {
                    VKONTAKTE: "http://vkontakte.ru/share.php?url\x3d{URL}",
                    LIVEJOURNAL: "http://www.livejournal.com/update.bml?url\x3d{URL}\x26subject\x3d{TITLE}",
                    TUMBLR: "http://www.tumblr.com/share/video?embed\x3d{URL}\x26caption\x3d{TITLE}",
                    REDDIT: "http://reddit.com/submit?url\x3d{URL}\x26title\x3d{TITLE}",
                    DIGG: "http://digg.com/submit?url\x3d{URL}",
                    ODNOKLASSNIKI: "http://www.odnoklassniki.ru/dk?st.cmd\x3daddShare\x26st.noresize\x3don\x26st._surl\x3d{URL}",
                    FACEBOOK: "http://www.facebook.com/sharer.php?u\x3d{URL}",
                    GOOGLEPLUS: "https://plus.google.com/share?url\x3d{URL}",
                    TWITTER: "http://twitter.com/intent/tweet?url\x3d{URL}\x26text\x3d{TITLE}",
                    SKYPE: "https://web.skype.com/share?url\x3d{URL}",
                    LINKEDIN: "http://www.linkedin.com/shareArticle?url\x3d{URL}\x26title\x3d{TITLE}"
                };
                if (void 0 === e[b]) return null;
                b = e[b];
                a = a || "";
                b = b.replace("{URL}", encodeURIComponent(c));
                return b = b.replace("{TITLE}", encodeURIComponent(a))
            },
            openWindow: function(b, c) {
                c = c || {};
                var a, e = c.id || "win-" + Math.random(),
                    d = c.width || 800,
                    h = c.height || 600;
                c.openNewTab || (a = "height\x3d" + h + ",width\x3d" + d + ",toolbar\x3d" + (c.toolbar ? "yes" : "no") + ",menubar\x3d" + (c.menubar ? "yes" : "no") + ",scrollbars\x3d" + (c.scrollbars ? "yes" : "no") + ",resizable\x3dyes,location\x3d" + (c.location ? "yes" : "no") + ",directories\x3dno,status\x3d" + (c.status ? "yes" : "no"));
                window.open(b, e, a)
            },
            addStyle: a,
            addStyleOnce: function(b, c) {
                D[b] || (w.verbose("addStyleOnce: id\x3d" + b + " length\x3d" + (c ? c.length : "null")), a(c), D[b] = 1)
            },
            makeQueryString: d.makeQueryString,
            buildUrl: d.buildUrl,
            safeHide: function(b) {
                try {
                    b.hide()
                } catch (c) {
                    b.css({
                        display: "none"
                    })
                }
            },
            safeShow: function(b, c) {
                try {
                    b.show()
                } catch (x) {
                    c || (c = "block"), b.css({
                        display: c
                    })
                }
            },
            isFrame: function() {
                try {
                    return window.self !== window.top
                } catch (e) {
                    return !0
                }
            },
            isOpera: function() {
                var b = navigator.userAgent;
                return b && -1 !== b.indexOf("OPR/") ? !0 : !1
            },
            sendFrameMessage: b,
            sendParentMessage: function(a, c, d) {
                b(window.parent, a, c, d)
            },
            gotFrameResponse: function(b, c) {
                h[b] && (clearTimeout(h[b].timer), h[b].callback(null, c), delete h[b])
            },
            cleanCssUrl: function(b) {
                return b ? b.replace(/^url\(["']?/, "").replace(/["']?\)$/, "") : null
            },
            xhr: t.xhr,
            each: k,
            extend: function(b, c, a) {
                if ("object" !== typeof c) return b;
                b && c && k(c, function(c, e) {
                    a && "function" == typeof e || (b[c] = e)
                });
                return b
            },
            detectPlatform: function() {
                var b = window.navigator;
                if ("object" !== typeof b) return "unknown";
                if (b.appVersion && -1 !== b.appVersion.toLowerCase().indexOf("android")) return "android";
                if ("undefined" != typeof b.platform) b = b.platform;
                else if ("undefined" != typeof b.appVersion) b = b.appVersion;
                else return "unknown";
                b = b.toLowerCase();
                return -1 != b.indexOf("win") ? "windows" : -1 != b.indexOf("mac") ? "mac" : -1 != b.indexOf("linux") ? "linux" : -1 != b.indexOf("x11") ? "unix" : "unknown"
            },
            detectBrowser: function() {
                return {
                    name: void 0 !== window.ActiveXObject ? "ie" : "non-ie",
                    version: ""
                }
            },
            detectPluginExt: function() {
                var b = 0,
                    c = !1,
                    a = void 0 !== window.ActiveXObject,
                    d = window.navigator,
                    h = d.userAgent.toLowerCase(),
                    r = !1; - 1 < h.indexOf("chrome") &&
                    h.indexOf("opr/") && (h = /opr\/(\d+)/.exec(h)) && (h = parseInt(h[1]), !isNaN(h) && 34 <= h && (w.log("detectPluginExt: disable for opera 34+"), r = !0));
                if (r) b = 0, c = !1;
                else if (a) {
                    try {
                        new window.ActiveXObject("TorrentStream.TSPlugin.2"), b = 1
                    } catch (E) {}
                    try {
                        new window.ActiveXObject("npace_plugin.AceWebPlugin.1"), b = 2
                    } catch (E) {}
                    try {
                        new window.ActiveXObject("npace_plugin.TSMozillaPlugin.1"), b = 2
                    } catch (E) {}
                    try {
                        new window.ActiveXObject("npts_plugin.TSMozillaPlugin.1"), b = 3
                    } catch (E) {}
                    0 != b && (c = !0)
                } else {
                    var k;
                    a = [{
                        mime: "application/x-acestream-plugin",
                        id: 2
                    }, {
                        mime: "application/x-torrentstream-plugin",
                        id: 3
                    }, {
                        mime: "application/x-tstream",
                        id: 1
                    }];
                    for (k = 0; k < a.length; k++) r = a[k].mime, h = a[k].id, "undefined" !== typeof d.mimeTypes[r] && (b = h, c = !!d.mimeTypes[r].enabledPlugin)
                }
                return {
                    type: b,
                    enabled: c
                }
            },
            isFirefox: function() {
                var b = navigator.userAgent;
                return b && -1 !== b.indexOf("Firefox/") ? !0 : !1
            },
            inheritFrom: function(b, c) {
                b.prototype = Object.create(c.prototype)
            },
            showIframePopup: function(b) {
                var c = document,
                    a = c.createElement("iframe");
                a.src = b.url;
                a.style.border = "none";
                a.style.position = "fixed";
                a.style.top = "75px";
                a.style.left = "50%";
                a.style.marginLeft = "-325px";
                a.style.width = "650px";
                a.style.height = "445px";
                a.style.zIndex = "9999999999";
                c.body.appendChild(a)
            },
            getElementWidth: function(b) {
                try {
                    var c = b.width()
                } catch (x) {
                    b.length && (c = b.get(0).offsetWidth)
                }
                return c
            },
            getElementHeight: function(b) {
                try {
                    var c = b.height()
                } catch (x) {
                    b.length && (c = b.get(0).offsetHeight)
                }
                return c
            },
            guid: d.guid,
            getFrameId: function() {
                return r
            }
        }
    }, {
        "BaseUtils.js": 1,
        "Logging.js": 6,
        "xhr.js": 49
    }],
    15: [function(d,
        n, t) {
        n.exports = {
            TV: "TV",
            Movies: "Movies",
            "Music video": "Music video",
            "Music audio": "Music audio",
            Other: "Other",
            Subcategory: "Subcategory",
            Tags: "Tags",
            Description: "Description",
            Poster: "Poster",
            Install: "Install",
            Playlist: "Playlist",
            Title: "Title",
            Category: "Category",
            "Add to playlist": "Add to playlist",
            Share: "Share",
            Menu: "Menu",
            "Select Player": "Select Player",
            "Remember choice": "Remember choice",
            Close: "Close",
            More: "More",
            "Opening video in player...": "Opening video in player...",
            "Initializing Ace Stream application...": "Please wait...\x3cbr/\x3eInitializing Ace Stream",
            missing_engine: "To playback the content you need to run Ace Stream application or install it, if you haven't installed it before",
            old_engine: "To play content use browser that supports NPAPI plugins or update Ace Stream software to be able to play content in any convenient to you player and any device, using new Ace Cast technology",
            install_acecast: 'Install \x3ca class\x3d"link" href\x3d"http://awe.acestream.me/scripts/acestream/Ace_Cast" target\x3d"_blank"\x3eAce Cast\x3c/a\x3e userscript to get more features:',
            acecast_feature_1: "- Select player to watch content in",
            acecast_feature_2: "- Playback on remote devices (TV etc)",
            acecast_feature_3: "- Add content to playlist",
            acecast_feature_4: "- Share the content the way you like",
            install_or_activate: "Install / Activate"
        }
    }, {}],
    16: [function(d, n, t) {
        n.exports = {
            TV: "\u0422\u0412",
            Movies: "\u0424\u0438\u043b\u044c\u043c\u044b",
            "Music video": "\u041c\u0443\u0437\u044b\u043a\u0430 \u0432\u0438\u0434\u0435\u043e",
            "Music audio": "\u041c\u0443\u0437\u044b\u043a\u0430 \u0430\u0443\u0434\u0438\u043e",
            Other: "\u0414\u0440\u0443\u0433\u043e\u0435",
            Subcategory: "\u041f\u043e\u0434\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",
            Tags: "\u0422\u044d\u0433\u0438",
            Description: "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
            Poster: "\u041f\u043e\u0441\u0442\u0435\u0440",
            Install: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
            Playlist: "\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442",
            Title: "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",
            Category: "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",
            "Add to playlist": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442",
            Share: "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f",
            Menu: "\u041c\u0435\u043d\u044e",
            "Select Player": "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u041f\u043b\u0435\u0435\u0440",
            "Remember choice": "\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440",
            Close: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
            More: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
            "Opening video in player...": "\u0417\u0430\u043f\u0443\u0441\u043a \u0432\u0438\u0434\u0435\u043e \u0432 \u043f\u043b\u0435\u0435\u0440\u0435...",
            "Initializing Ace Stream application...": "\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...\x3cbr/\x3e\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f Ace Stream",
            missing_engine: "\u0414\u043b\u044f \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 Ace Stream \u0438\u043b\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0435\u0433\u043e, \u0435\u0441\u043b\u0438 \u043e\u043d\u043e \u0443 \u0432\u0430\u0441 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e",
            old_engine: "\u0414\u043b\u044f \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432 NPAPI \u0438\u043b\u0438 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u041f\u041e Ace Stream, \u0434\u043b\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0432 \u043b\u044e\u0431\u043e\u043c \u0443\u0434\u043e\u0431\u043d\u043e\u043c \u0432\u0430\u043c \u043f\u043b\u0435\u0435\u0440\u0435 \u0438 \u043d\u0430 \u043b\u044e\u0431\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435, \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u043d\u043e\u0432\u043e\u0439 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 Ace Cast",
            install_acecast: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u043a\u0440\u0438\u043f\u0442 \x3ca class\x3d"link" href\x3d"http://awe.acestream.me/scripts/acestream/Ace_Cast" target\x3d"_blank"\x3eAce Cast\x3c/a\x3e, \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439:',
            acecast_feature_1: "- \u0412\u044b\u0431\u043e\u0440 \u043f\u043b\u0435\u0435\u0440\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430",
            acecast_feature_2: "- \u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 (TV \u0438 \u0434\u0440.)",
            acecast_feature_3: "- \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0432 \u043f\u043b\u0435\u0439-\u043b\u0438\u0441\u0442",
            acecast_feature_4: "- \u0414\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u043e\u043c, \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0432\u0430\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c",
            install_or_activate: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c / \u0410\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c"
        }
    }, {}],
    17: [function(d, n, t) {
            n.exports = "/*components/common.css*/\n.acestream__checkbox {\n    position: relative;\n    z-index: 1;\n    vertical-align: middle;\n    display: inline-block;\n    box-sizing: border-box;\n    width: 100%;\n    height: 24px;\n    margin: 0;\n    padding: 0 0 0 24px;\n}\n.acestream__checkbox-input {\n    position: absolute;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    -ms-appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none;\n    line-height: 24px;\n}\n.acestream__checkbox-label {\n    position: relative;\n    cursor: pointer;\n    font-size: 13px;\n    line-height: 24px;\n    margin: 0;\n    color: #444;\n    font-weight: 300;\n}\n.acestream__checkbox-dark .acestream__checkbox-label {\n    color: #fff;\n}\n.acestream__checkbox__box-outline {\n    position: absolute;\n    top: 3px;\n    left: 0;\n    display: inline-block;\n    box-sizing: border-box;\n    width: 16px;\n    height: 16px;\n    margin: 0;\n    cursor: pointer;\n    overflow: hidden;\n    border: 2px solid rgba(0,0,0,.54);\n    border-radius: 2px;\n    z-index: 2;\n}\n.acestream__checkbox-dark .acestream__checkbox__box-outline {\n    border: 2px solid rgba(255,255,255,.7);\n}\n.acestream__checkbox.is-checked .acestream__checkbox__box-outline {\n    border: 2px solid #218caf;\n}\n.acestream__checkbox.acestream__checkbox-dark.is-checked .acestream__checkbox__box-outline {\n    border-color: #33b5e5;\n}\n.acestream__checkbox__tick-outline {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    -webkit-mask: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg\x3d\x3d);\n    mask: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg\x3d\x3d);\n    background: 0 0;\n    transition-duration: .28s;\n    transition-timing-function: cubic-bezier(.4,0,.2,1);\n    transition-property: background;\n}\n.acestream__checkbox.is-checked .acestream__checkbox__tick-outline {\n    background: #218caf url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K);\n}\n.acestream__checkbox.acestream__checkbox-dark.is-checked .acestream__checkbox__tick-outline {\n    background-color: #33b5e5;\n}\n.acestream__button {\n    width: 185px;\n    height: 25px;\n    box-sizing: content-box;\n    font-weight: bold;\n    font-size: 11px;\n    text-transform: uppercase;\n    text-align: center;\n    line-height: 25px;\n    text-decoration: none;\n    display: inline-block;\n    color: #444;\n    background: #f5f5f5;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n}\n.acestream__button:hover,\n.acestream__button:visited {\n    text-decoration: none;\n}\n.acestream__button:hover,\n.acestream__button:visited:hover {\n    border: 1px solid #218caf;\n    background-color: #218caf;\n    color: #fff;\n}"
        },
        {}
    ],
    18: [function(d, n, t) {
            n.exports = '.magicplayer--detach-button {\n\tposition: absolute;\n    width: 53px;\n    height: 36px;\n    top: 0px;\n    left: 50%;\n    margin-left: -26px;\n    opacity: 0;\n    transition: opacity 0.3s;\n    cursor: pointer;\n    z-index: 999999;\n}\n.magicplayer--detach-button.visible {\n    opacity: 1;\n}\n.magicplayer--detach-button .magicplayer--detach-button-icon {\n    width: 100%;\n    height: 100%;\n}\n.magicplayer--detach-button .magicplayer--detach-button-icon-cast {\n    display: block;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAkCAYAAAApbHJOAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAADRElEQVR42uyZv28TVxzAP893vrMtLsTU6JFcKjlShRQmd8iPLgxdKnUpqH9Bt6KgDm3VDI1UFzI0eKFDBpZWbN1g6RCmig6BhI2FeEhYXOeZWA44Snw/7NfFRVFoFNviTGLxXd7p3vfe3ed93/v+eCe2lPoLOMPgyK4JnAfMAYJKxoB9Bkv2YwygDCRUV3tpfX3d+jmfz2xsbFi2bWshRGQfprXG8zyRzWb9n/L57YmJCb/TZ8WWUk8A5zjFhYWFDx4sL58pFot2v2d+bGyseuXqVebn56sdqNc7hvpkZia7ublpzc7O4rou6XQaz/MiA7Ftm1qtRqlUYmlpifHxcX/l0aPnnUB17cpHRkaYnp5+7rqu5/t+K4olqLXGsqxYqVSyV1ZWspHuKYBMJoPrujqdTgvAiHjl6UwmE733azQahGEY9mMvhWEYNhqNvrn0XtdcC/gbKEX5nn7HqRhwD/gaeDVIwXdESlkErgPV0wzVAB4Dd4GHAFLKx8BXwD/vNKPoUf4EfgeetmFed0gp15VS14ACcPE0WMoH5oFv/wP6P5FSPgOuAdsn3VIh8D2w3KH+50D6pFtq6RCQAJLAeaVU6qCiUupH4Lu3GcijsNRT4E77+hLwKfAxcAE4B/wK/KGUigG/AF+cBkdxt93mgS8B61B/vN3eBj575/VUJyVXO1v4DZg5KgFXSt2ICigKqBYwB+SO6G8C3wCR1mS9Qukj7k8c85zRpUPQffF+iUQC0zT7cqRmmqaZSCSit1S5XKZSqew6jrPn+37zQGGnU6nUWSGE1UNR6O/t7b0UBypOy7KMSqWSKpfL0UMtLi5SKBQ+Mgwj0FoLAM/z4lprY21t7eHo6OiHPUyUmpycvCyEaNq2HQAIIXSz2Yy3Wq3ooHK53H6tVjN2dnaMdiBNHtbxPK+nAOp5nhGGYRyIB0HwxnobGhrycrlc461D3bh5c3t1dXW3cOtWpl6vxyzL0gcqVFGv1/eDINhub+6XUsorx42plLoPnA2CoDo8PPzKcZykaZqvx/V9XziO0/xhbq46NTXVMVTHp0ndygUpj826t5QqRuBf6u9PaLuRiKxwYsv591C9QiUHjClpAi8YsN+j/w4AXA0kJ2homqYAAAAASUVORK5CYII\x3d);\n    background-color: transparent;\n}\n.magicplayer--detach-button .magicplayer--detach-button-icon-cast svg {\n    margin-left: 11px;\n    margin-top: 2px;\n}\n.magicplayer--detach-button .magicplayer--detach-button-icon-play {\n    opacity: 0.8;\n    background-color: #e8e8e9;\n    display: none;\n}\n.magicplayer--detach-button .magicplayer--detach-button-icon-play svg {\n    margin-left: 12px;\n    margin-top: 4px;\n}\n.magicplayer--detach-button:hover .magicplayer--detach-button-icon-cast {\n    display: none;\n}\n.magicplayer--detach-button:hover .magicplayer--detach-button-icon-play {\n    display: block;\n}\n.magicplayer--detach-button .magicplayer--actions-row {\n    position: absolute;\n    top: 0;\n    left: 0px;\n    opacity: 0;\n    width: 0px;\n    height: 36px;\n    background-color: rgba(28,28,28,0.9);\n    z-index: -1;\n    transition: left 0.1s, width 0.1s;\n    overflow: hidden;\n}\n.magicplayer--detach-button:hover .magicplayer--actions-row {\n    left: -53px;\n    width: 53px;\n    opacity: 0.8;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.magicplayer--detach-button.flipped {\n    display: none;\n}\n\n.magicplayer--detach-button-2 {\n    position: absolute;\n    width: 74px;\n    height: 92px;\n    top: 50%;\n    left: 50%;\n    margin-left: -37px;\n    margin-top: -50px;\n    background-color: transparent;\n    cursor: pointer;\n    z-index: 9999;\n    display: none;\n}\n\n.magicplayer--detach-button-2.visible {\n    display: block;\n}\n\n.magicplayer--detach-button-2 .magicplayer--detach-button-title {\n    text-align: center;\n    height: 18px;\n    color: #eee;\n    cursor: default;\n}\n\n.magicplayer--detach-button-2 .magicplayer--detach-button-icon {\n    width: 74px;\n    height: 50px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAyCAYAAAD7oU3dAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAADkklEQVR42uyazWtcVRiHn3Mmk7QToSX9eOtHsZKMG8mQQhYubLooUnHjKpBAshBpIS4sET9SdSEiLlxod9nU/gEhC0EUs1CQVBcSIU78zEBLEEqOptcYnNvMxHuPmzsS0yaZkNu5N5nzW957zuHch/d9z++cc9WiMb/itK20Q+BAOVAOlAPlQDWNWnY7wPT09MGPrl49XCqV2sIwRCmVig+z1qKUorOzs3Lh4sXlvr6+O7sZT+3GR83MzLS9PDp6Yn5+vi3N0ZDP5ysfXrmy2NvbW0kE1DPnz5+cnZ09uBdSp6en587nU1O/JVKj9gqkOObaEtdExsfHfy8UCn4QBP+EYZhoodJa20wm01IsFnMjIyPHU1HMayoUCpWurq5qioKoCmRSZw9WV1dt2tItzjnF6aOstValBVI0l1SCuh/6E/jbOfPt9TXwNuA5UFsrEJFPgLeAJQdqcx0AEJEvgDeARQdqQyRFy/sftQci8hXwKrCwJzfFMWsJ+A6YAW4ApfUvReRbY8wrwHtAvhlBrQCfApPAzyISbNZQRIrGmNeAd4EnmgnUj8AHInK93g4i8pMxZjQq8meA++7fkq5R3wCXgOs77SgiC8APjYCUdER9D7wJ3NppR2NMCzACDO331POiGnNrCxgZwIpIuOF5G/AS8EKjoikpUCFwDSiu90vGmOPAKeBh4AHgCPAL8PE6SO3AKDDcDPagFK1wADngSeBpoBs4WTOZkb6sgTLGHI5M53PN4qOmopQrABeAs8BmZ+6rEaSjwDvAuaQKaqNBLUVRci5a2h/apn3ZGHMkMphnk1yeGw1qDjgNvAgcq6N9HngfeCpps9dIUCHwCPB8nZAAetKyt2okKN3o/VkzHbPsP1Baa6WUSs0Fg1LKaq1V6lLP9/1gbW0t0FqvcfehvlVKZbTWsV69h2FYsdYG93DoKgzDrO/7QepADQ4OPtja2lq21t4VVdZauru7FyYmJmIFNTAwUJ2bm3v0Xj+GKKVUtVptTwWoXC4X+r6vAVZWVg5scNX/39x5Xuxn3p7ntXued7TeuSZWo4aGhpbrbZvNZmNfOOodUynF8PDwcmIRNXb58m2AycnJQ57nbXl9XS6XM8BN4L8aJiLP7vB45bPatwPZcrn82HZ9Ojo6gv7+/r9eHxu7vavFIcn/zE+IPL6T9ovGzDsf5Qzn/lCilwtJppKLKAfKgXKgHCgHymkz/TsAWiAmQZP/+dcAAAAASUVORK5CYII\x3d);\n}\n\n.magicplayer--detach-button-2 .magicplayer--detach-button-icon svg {\n    margin-left: 13px;\n    margin-top: 1px;\n}\n\n.magicplayer--detach-button-2 .magicplayer--menu-row {\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    padding-top: 3px;\n    padding-left: 1px;\n    height: 22px;\n    background-color: rgba(28,28,28,0.9);\n    line-height: 1em;\n    box-sizing: content-box;\n}\n.magicplayer--detach-button-2 .magicplayer--menu-row .magicplayer--menu-text {\n    height: 18px;\n    line-height: 18px;\n    font-size: 12px;\n    font-weight: 100;\n    margin-left: 3px;\n    margin-top: -2px;\n}\n\n.acestream--center-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 2147482700;\n    font-size: 13px;\n    font-family: "YouTube Noto",Roboto,arial,sans-serif;\n    box-sizing: content-box;\n}\n\n.magicplayer--flip-container {\n    perspective: 1000;\n    -webkit-perspective: 1000;\n    -moz-perspective: 1000;\n    -ms-perspective: 1000;\n\n    -ms-transform: perspective(1000px);\n    -moz-transform: perspective(1000px);\n    -moz-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n\n    transition: height 0.6s;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 99999999;\n    color: #eee;\n    font-size: 13px;\n    font-family: "YouTube Noto",Roboto,arial,sans-serif;\n    box-sizing: content-box;\n}\n.magicplayer--flip-container.flipped .front {\n    transform: rotateY(180deg);\n}\n.magicplayer--flip-container.flipped .back {\n    transform: rotateY(0deg);\n}\n.magicplayer--flip-container .front,\n.magicplayer--flip-container .back {\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    -ms-backface-visibility: hidden;\n    backface-visibility: hidden;\n\n    -webkit-transition: 0.6s;\n    -webkit-transform-style: preserve-3d;\n    -webkit-transform: rotateY(0deg);\n\n    -moz-transition: 0.6s;\n    -moz-transform-style: preserve-3d;\n    -moz-transform: rotateY(0deg);\n\n    -o-transition: 0.6s;\n    -o-transform-style: preserve-3d;\n    -o-transform: rotateY(0deg);\n\n    -ms-transition: 0.6s;\n    -ms-transform-style: preserve-3d;\n    -ms-transform: rotateY(0deg);\n\n    transition: 0.6s;\n    transform-style: preserve-3d;\n    transform: rotateY(0deg);\n\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.magicplayer--flip-container .front {\n    z-index: 2;\n    transform: rotateY(0deg);\n    width: 74px;\n    margin-left: -37px;\n}\n.magicplayer--flip-container .back {\n    z-index: 1;\n    transform: rotateY(180deg);\n    width: 200px;\n    margin-left: -100px;\n}\n\n/* Select player form */\n.magicplayer--popup-content {\n    width: 90%;\n    max-width: 300px;\n    min-width: 200px;\n    margin: 0 auto;\n    background-color: rgba(28,28,28,0.9);\n    color: #eee;\n    z-index: 101;\n    position: relative;\n    border-radius: 2px;\n}\n.magicplayer--dialog-title {\n    color: #33b5e5;\n    padding: 10px;\n    font-size: 18px;\n    border-bottom: 1px solid #33b5e5;\n    display: flex;\n    align-items: center;\n}\n.magicplayer--select-device-list {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    font-size: 11px;\n}\n.magicplayer--select-device-list li {\n    cursor: pointer;\n    padding-top: 11px;\n    padding-left: 15px;\n    font-size: 118%;\n    height: 22px;\n    box-sizing: content-box;\n}\n.magicplayer--select-device-list li:hover {\n    background-color: rgba(255,255,255,.1);\n}\n.magicplayer--dialog-button {\n    cursor: pointer;\n    display: inline-block;\n    background-color: transparent;\n    padding: 4px 8px;\n    border-radius: 2px;\n    text-transform: uppercase;\n    font-size: 14px;\n}\n.magicplayer--dialog-button:hover {\n    background-color: rgba(255,255,255,.1);\n}\n.dialog-text {\n    color: #fff;\n    font-size: 16px;\n    padding: 24px 24px 12px 24px;\n}\n.dialog-text-grey {\n    color: #c7c7c7;\n}\n.magicplayer--remember-choice-container {\n    padding: 8px 15px;\n    border-top: 1px solid rgba(255,255,255,.1);\n}\n.magicplayer--remember-choice-container input {\n    margin-left: 0;\n}\n.magicplayer--title-button-back {\n    cursor: pointer;\n    height: 24px;\n}\n.magicplayer--title-text {\n    margin-left: 8px;\n}\n.acestream--message {\n    text-align: center;\n    background-color: rgba(28,28,28,0.9);\n    color: #fff;\n    padding: 8px;\n    line-height: 1.5em;\n}\n\n.magicplayer--menu-actions {\n    height: 35px;\n    padding: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.magicplayer--menu-action {\n    margin-right: 8px;\n    cursor: pointer;\n}\n.magicplayer--menu-action-settings {\n    margin-right: 12px;\n}'
        },
        {}
    ],
    19: [function(d, n, t) {
            n.exports = '.acestream__popup {\n    font-size: 13px;\n    font-family: "YouTube Noto",Roboto,arial,sans-serif;\n    box-sizing: content-box;\n    color: #333;\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    z-index: 2147482700;\n}\n.acestream__popup-overlay {\n    position: fixed;\n    z-index: 2147482600;\n    right: 0;\n    bottom: -200px;\n    top: 0;\n    left: 0;\n    background-color: #000;\n    opacity: 0.4;\n}\n.acestream__popup-container {\n    position: relative;\n    margin-top: 100px;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 2px;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.1);\n    box-shadow: 0 1px 2px rgba(0,0,0,.1);\n}\n.acestream__popup-content-title {\n    font-size: 16px;\n    border-bottom: 1px solid rgba(0,0,0,.1);\n    display: flex;\n    align-items: center;\n    height: 62px;\n    padding-left: 22px;\n    color: #218caf;\n    text-transform: uppercase;\n    cursor: default;\n}\n.acestream__popup-close {\n    height: 24px;\n    width: 24px;\n    position: absolute;\n    right: 9px;\n    top: 19px;\n    cursor: pointer;\n    box-sizing: content-box;\n}\n.acestream__inplayer-message-container {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2147482800;\n}'
        },
        {}
    ],
    20: [function(d, n, t) {
            n.exports = ".acestream__popup-missing-engine {\n    background-color: #fff;\n    padding: 0;\n    font-size: 20px;\n    position: relative;\n}\n.acestream__popup-missing-engine .acestream__popup-close {\n    top: 9px;\n}\n.acestream__popup-missing-engine .acestream__message {\n    color: #222;\n    text-align: center;\n    font-size: 17px;\n    line-height: 22px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 36px;\n    bottom: 120px;\n    overflow-y: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 32px;\n}\n.acestream__popup-missing-engine .acestream__row-download {\n    position: absolute;\n    bottom: 55px;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 60px;\n    background-color: #444444;\n}\n.acestream__popup-missing-engine .acestream__box {\n    position: absolute;\n    height: 32px;\n    left: 43px;\n    top: 12px;\n    right: 101px;\n    background-color: #fff;\n}\n.acestream__popup-missing-engine .acestream__box .acestream__label {\n    font-size: 15px;\n    color: #444444;\n    text-decoration: none;\n    text-transform: uppercase;\n    position: absolute;\n    height: 14px;\n    top: 7px;\n    left: 0px;\n    right: 45px;\n    text-align: center;\n}\n.acestream__popup-missing-engine .acestream__icon-download {\n    position: absolute;\n    top: 4px;\n    right: 4px;\n    width: 41px;\n    height: 24px;\n    background-color: #444444;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAADFSURBVHjazNStCgJBEMDxfZWzmMTmE+hhMggKXrDaxO5DXBSMglHMPoBw+BB6SZsfYLni3zLiwq3o3i6cA5OG+cHMMqsA5TNVGWAE7IEUiH2AU96x9QGONXD9l+BAAxcuYA3oyEO8IgGGQKsI2OBzdIuObEIj1x32NGzm61LmwM72Ulay9NDi1OrSszGBDxlrZAE2tXXkwIMU2hZgVXouJjCV4gQIgMqXDIC+9JxNYIZb5MAYOAJX4P5j3oATsCz1g7XK5wDjE/70+CL0vQAAAABJRU5ErkJggg\x3d\x3d);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.acestream__popup-missing-engine .acestream__row-download:hover,\n.acestream__popup-missing-engine .acestream__row-download:hover .acestream__icon-download,\n.acestream__popup-missing-engine .acestream__row-download:hover .acestream__icon-torrent {\n    background-color: #218caf;\n}\n.acestream__popup-missing-engine .acestream__row-download:hover .acestream__label {\n    color: #218caf;\n}\n.acestream__popup-missing-engine .acestream__icon-torrent {\n    position: absolute;\n    top: 12px;\n    right: 36px;\n    width: 32px;\n    height: 32px;\n    background-color: #444444;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAA6JJREFUWIXNl02IlVUcxn/Pudf3HayYiQIpJWyX5sKBCg0Koi+oFoWVLUILFKlNRIERLgI3Bn0sXEyIuShaVSbpog8XFfQBkigZtYgkLdJQ86vmnDvznqeF74zXO/fWDM6MPZvL+9xz/v+H/3Pew/OKDsQY7wR2d/JTxMt9fX0vTGZhswu3DhgG7g8hzAM0yaaV7bO2h4D1KaU/yrJ8bZJ7zyOl9EmM8Ycpb6wRY9wTY3SM0SmlFf+1PnThcg9+shifmO33RkZGlk1VwLSiqqovhoeHF14yAcAcSZ/bvuxSCQC4LqXU9c2aCQGjPfhlMcZNnWS31/CiEEJYAwzaPjPGSTqUc95pe8KBnHYBRVEcAA508jHGXyRdPkFwjzp5uoXVcCcxPoGU0iLgUdtLgLkppQ22B5j8TdgTko7ZXggUMcaNIYT3i6LYx1jxVqu1Kue8CbjmYptNEieBF/v6+oYCgO3ls9gcYEDSUjh/BsasGOWc/8P1cwKOtm0cAU60PZ8BTrU9p5rr9Np1zVzXAGiMC7A9HzjeaDRuDSEMSnoE+EnS42VZ3gRsBJD0sKTbJL0h6WAI4fZGo3EP8B2wsyzLhcCzwN4QwtK60Q5JL4UQngohDIYQlgPHgPnjAiQdAa6qquoVoGl7Vwhho6S5KaXDtrcBH0iaa3uvpM+AzbbvrarqTWCzpD2tVmslsBUoi6LYD3wo6SQwmnPeBjRzzq8DV+ecj7aPvlX/Ls45DwDknH8HNtQC75D0dT3KB3LO99UerpP0ve31wL6iKF5NKV0v6caU0oPAl5J+yznfDISccz+wGCCEkMYn0O6V7bE7QMCftYBTtvuBstFotIC/bV8RQujPOZ+1Xdk+nVJaBTxjOwKLbN9SFMU7wIKx4p3nY4KAZrOZ66aPlWX5tKTnJP0MPGH7eFVVuyXtB97KOd8laUjS20AzhPBN7fkR2yeAFW0WU9e+QEDnVXxlVVXP12qfbLVaf9neZftdYL7ttcAcYC0Qbc8DbpC00va1OedDwKe2VwNLAGKM220vAKhrD7Q3FEBKaUtdfNYgaWtZlmvHLGj96+qZwSicvwd2AN/OYvMfgY/hwgDZH2MclDTEOZ9WTzGW90TO+VdJW2wXwJqyLPdKOtZ1cUrpo4uJ5b0QY/wqxrink++VB2Yiqoku05ytUNoT/0sBgZmJZKaLBd1C6WHg7pTStvpjYjoi2ek69Gyf8F8nMU2f572EPFSW5Y527h9eeasDr3lf/wAAAABJRU5ErkJggg\x3d\x3d);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.acestream__popup-missing-engine .acestream__row-bottom {\n    position: absolute;\n    bottom: 0;\n    height: 60px;\n    left: 0;\n    right: 0;\n    text-align: right;\n}\n.acestream__popup-missing-engine .acestream__more-button {\n    display: inline-block;\n    margin-top: 24px;\n    margin-right: 24px;\n    height: 12px;\n    font-size: 12px;\n    text-decoration: none;\n    text-transform: uppercase;\n    color: #218caf;\n}\n.acestream__popup-missing-engine .acestream__more-button:active,\n.acestream__popup-missing-engine .acestream__more-button:visited,\n.acestream__popup-missing-engine .acestream__more-button:hover {\n    color: #218caf;\n}"
        },
        {}
    ],
    21: [function(d, n, t) {
            n.exports = ".acestream__popup-missing-userscript {\n    color: #000 !important;\n    background-color: #fff !important;\n    padding: 0;\n    font-size: 16px;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n@media only screen and (max-width: 490px) {\n    .acestream__popup-missing-userscript {\n        width: 100%;\n        font-size: 14px;\n    }\n}\n.acestream__popup-missing-userscript.small {\n    font-size: 14px;\n}\n.acestream__popup-missing-userscript .acestream__popup-close {\n    top: 9px;\n}\n.acestream__popup-missing-userscript .acestream__button {\n    text-transform: none;\n    font-size: inherit;\n    font-weight: normal;\n    width: auto;\n    padding: 4px 8px;\n}\n.acestream__popup-missing-userscript .acestream__wrap {\n    padding: 32px;\n}\n.acestream__popup-missing-userscript ul {\n    list-style-type: none;\n}\n.acestream__popup-missing-userscript ul {\n    margin: 0;\n    padding: 0;\n}\n.acestream__popup-missing-userscript ul li {\n    margin-top: 4px;\n}\n.acestream__popup-missing-userscript a.link {\n    text-decoration: underline;\n    color: #218caf;\n}"
        },
        {}
    ],
    22: [function(d, n, t) {
            n.exports = ".acestream__popup-old-engine {\n    background-color: #fff;\n    padding: 0;\n    font-size: 20px;\n    position: relative;\n}\n.acestream__popup-old-engine .acestream__popup-close {\n    top: 9px;\n}\n.acestream__popup-old-engine .acestream__message {\n    color: #222;\n    text-align: center;\n    font-size: 17px;\n    line-height: 22px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 36px;\n    bottom: 120px;\n    overflow-y: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 32px;\n}\n.acestream__popup-old-engine .acestream__row-download {\n    position: absolute;\n    bottom: 55px;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 60px;\n    background-color: #444444;\n}\n.acestream__popup-old-engine .acestream__box {\n    position: absolute;\n    height: 32px;\n    left: 43px;\n    top: 12px;\n    right: 101px;\n    background-color: #fff;\n}\n.acestream__popup-old-engine .acestream__box .acestream__label {\n    font-size: 15px;\n    color: #444444;\n    text-decoration: none;\n    text-transform: uppercase;\n    position: absolute;\n    height: 14px;\n    top: 7px;\n    left: 0px;\n    right: 45px;\n    text-align: center;\n}\n.acestream__popup-old-engine .acestream__icon-download {\n    position: absolute;\n    top: 4px;\n    right: 4px;\n    width: 41px;\n    height: 24px;\n    background-color: #444444;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAADFSURBVHjazNStCgJBEMDxfZWzmMTmE+hhMggKXrDaxO5DXBSMglHMPoBw+BB6SZsfYLni3zLiwq3o3i6cA5OG+cHMMqsA5TNVGWAE7IEUiH2AU96x9QGONXD9l+BAAxcuYA3oyEO8IgGGQKsI2OBzdIuObEIj1x32NGzm61LmwM72Ulay9NDi1OrSszGBDxlrZAE2tXXkwIMU2hZgVXouJjCV4gQIgMqXDIC+9JxNYIZb5MAYOAJX4P5j3oATsCz1g7XK5wDjE/70+CL0vQAAAABJRU5ErkJggg\x3d\x3d);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.acestream__popup-old-engine .acestream__row-download:hover,\n.acestream__popup-old-engine .acestream__row-download:hover .acestream__icon-download,\n.acestream__popup-old-engine .acestream__row-download:hover .acestream__icon-torrent {\n    background-color: #218caf;\n}\n.acestream__popup-old-engine .acestream__row-download:hover .acestream__label {\n    color: #218caf;\n}\n.acestream__popup-old-engine .acestream__icon-torrent {\n    position: absolute;\n    top: 12px;\n    right: 36px;\n    width: 32px;\n    height: 32px;\n    background-color: #444444;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAA6JJREFUWIXNl02IlVUcxn/Pudf3HayYiQIpJWyX5sKBCg0Koi+oFoWVLUILFKlNRIERLgI3Bn0sXEyIuShaVSbpog8XFfQBkigZtYgkLdJQ86vmnDvznqeF74zXO/fWDM6MPZvL+9xz/v+H/3Pew/OKDsQY7wR2d/JTxMt9fX0vTGZhswu3DhgG7g8hzAM0yaaV7bO2h4D1KaU/yrJ8bZJ7zyOl9EmM8Ycpb6wRY9wTY3SM0SmlFf+1PnThcg9+shifmO33RkZGlk1VwLSiqqovhoeHF14yAcAcSZ/bvuxSCQC4LqXU9c2aCQGjPfhlMcZNnWS31/CiEEJYAwzaPjPGSTqUc95pe8KBnHYBRVEcAA508jHGXyRdPkFwjzp5uoXVcCcxPoGU0iLgUdtLgLkppQ22B5j8TdgTko7ZXggUMcaNIYT3i6LYx1jxVqu1Kue8CbjmYptNEieBF/v6+oYCgO3ls9gcYEDSUjh/BsasGOWc/8P1cwKOtm0cAU60PZ8BTrU9p5rr9Np1zVzXAGiMC7A9HzjeaDRuDSEMSnoE+EnS42VZ3gRsBJD0sKTbJL0h6WAI4fZGo3EP8B2wsyzLhcCzwN4QwtK60Q5JL4UQngohDIYQlgPHgPnjAiQdAa6qquoVoGl7Vwhho6S5KaXDtrcBH0iaa3uvpM+AzbbvrarqTWCzpD2tVmslsBUoi6LYD3wo6SQwmnPeBjRzzq8DV+ecj7aPvlX/Ls45DwDknH8HNtQC75D0dT3KB3LO99UerpP0ve31wL6iKF5NKV0v6caU0oPAl5J+yznfDISccz+wGCCEkMYn0O6V7bE7QMCftYBTtvuBstFotIC/bV8RQujPOZ+1Xdk+nVJaBTxjOwKLbN9SFMU7wIKx4p3nY4KAZrOZ66aPlWX5tKTnJP0MPGH7eFVVuyXtB97KOd8laUjS20AzhPBN7fkR2yeAFW0WU9e+QEDnVXxlVVXP12qfbLVaf9neZftdYL7ttcAcYC0Qbc8DbpC00va1OedDwKe2VwNLAGKM220vAKhrD7Q3FEBKaUtdfNYgaWtZlmvHLGj96+qZwSicvwd2AN/OYvMfgY/hwgDZH2MclDTEOZ9WTzGW90TO+VdJW2wXwJqyLPdKOtZ1cUrpo4uJ5b0QY/wqxrink++VB2Yiqoku05ytUNoT/0sBgZmJZKaLBd1C6WHg7pTStvpjYjoi2ek69Gyf8F8nMU2f572EPFSW5Y527h9eeasDr3lf/wAAAABJRU5ErkJggg\x3d\x3d);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.acestream__popup-old-engine .acestream__row-bottom {\n    position: absolute;\n    bottom: 0;\n    height: 60px;\n    left: 0;\n    right: 0;\n    text-align: right;\n}\n.acestream__popup-old-engine .acestream__more-button {\n    display: inline-block;\n    margin-top: 24px;\n    margin-right: 24px;\n    height: 12px;\n    font-size: 12px;\n    text-decoration: none;\n    text-transform: uppercase;\n    color: #218caf;\n}\n.acestream__popup-old-engine .acestream__more-button:active,\n.acestream__popup-old-engine .acestream__more-button:visited,\n.acestream__popup-old-engine .acestream__more-button:hover {\n    color: #218caf;\n}"
        },
        {}
    ],
    23: [function(d, n, t) {
            n.exports = ".acestream__popup-playlist-add {\n    background-color: #fff;\n    font-size: 13px;\n}\n.acestream__popup-playlist-add .acestream__popup-content-title {\n    padding-left: 40px;\n}\n.acestream__form {\n    background-color: #fafafa;\n    padding-left: 40px;\n    padding-top: 2px;\n    padding-bottom: 16px;\n}\n.acestream__form-row {\n    padding-top: 10px;\n}\n.acestream__form-label {\n    margin-bottom: 3px;\n    font-size: 11px;\n    font-weight: 600;\n    cursor: default;\n    line-height: 1em;\n}\n.acestream__form-input input[type\x3dtext],\n.acestream__form-input textarea,\n.acestream__form-input select {\n    width: 312px;\n    height: 29px;\n    margin: 0;\n    padding: 0 8px;\n    color: #444;\n    background-color: #fff;\n    box-sizing: border-box;\n    font-size: 12px;\n    font-weight: 300;\n    border: 1px solid rgba(0,0,0,.1);\n    border-radius: 1px;\n    line-height: 29px;\n    box-shadow: none;\n}\n.acestream__form-input textarea {\n    height: 58px;\n}\n.acestream__form-actions-row {\n    width: 312px;\n    margin-top: 14px;\n    text-align: center;\n}\n.acestream__form-row-poster {\n    width: 312px;\n}\n.acestream__poster-container {\n    width: 230px;\n    margin: 0 auto;\n}\n.acestream__poster {\n    width: 230px;\n    height: 172px;\n}"
        },
        {}
    ],
    24: [function(d, n, t) {
            n.exports = ".acestream__popup-select-player {\n    background-color: #fff;\n    font-size: 13px;\n    overflow-y: auto;\n}\n.acestream__popup-select-player .acestream__players-list {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    font-size: 11px;\n    background-color: #fff;\n}\n.acestream__popup-select-player .acestream__players-list li {\n    cursor: pointer;\n    padding-left: 62px;\n    font-size: 13px;\n    height: 47px;\n    box-sizing: content-box;\n    display: flex;\n    align-items: center;\n    color: #444;\n    border-top: 1px solid rgba(0,0,0,.1);\n}\n.acestream__popup-select-player .acestream__players-list li:hover {\n    background-color: #218caf;\n    color: #fff;\n}\n.acestream__popup-select-player .acestream__remember-choice-container {\n    padding-left: 22px;\n    background-color: #fafafa;\n    height: 47px;\n    display: flex;\n    align-items: center;\n}\n.acestream__popup-select-player .acestream__remember-choice-container input {\n    margin-left: 0;\n}\n.acestream__popup-select-player .acestream__checkbox {\n    padding-left: 40px;\n}"
        },
        {}
    ],
    25: [function(d, n, t) {
            n.exports = ".acestream__popup-share {\n    background-color: #fff;\n    padding: 16px;\n}\n.acestream__share-popup button {\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n.acestream__share-popup ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.acestream__share-popup.acestream__watch-action-panels {\n    position: relative;\n}\n.acestream__yt-card.acestream__yt-card-has-padding {\n    padding: 0px;\n}\n.acestream__yt-card {\n    margin: 0 0 10px;\n    border: 0;\n    background: #fff;\n    box-shadow: 0 1px 2px rgba(0,0,0,.1);\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.acestream__share-panel {\n    color: #555;\n}\n.acestream__yt-card .acestream__yt-uix-tabs {\n    margin-bottom: 15px;\n    border-bottom: 1px solid #e2e2e2;\n}\n.acestream__yt-uix-button-group {\n    display: inline-block;\n    white-space: nowrap;\n    vertical-align: middle;\n    padding-top: 24px;\n    padding-bottom: 0;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n.acestream__yt-card .acestream__yt-uix-tabs .acestream__yt-uix-button {\n    margin-right: 40px;\n    margin-bottom: -1px;\n    padding: 0 0 8px;\n    border-width: 0 0 2px;\n    border-radius: 0;\n    opacity: .5;\n    filter: alpha(opacity\x3d50);\n}\n.acestream__yt-uix-button-group .acestream__yt-uix-button {\n    margin-right: -1px;\n    border-radius: 0;\n}\n.acestream__share-popup.acestream__yt-card .acestream__yt-card-title {\n    font-size: 15px;\n    margin-bottom: 10px;\n}\n.acestream__share-panel-embed {\n    font-weight: 500;\n}\n.acestream__share-popup .acestream__yt-uix-button-text, .acestream__share-popup .acestream__yt-uix-button-text[disabled] {\n    border: solid 1px transparent;\n    outline: 0;\n    background: none;\n    color: #333;\n    box-shadow: none;\n}\n.acestream__share-popup .acestream__yt-uix-button {\n    display: inline-block;\n    height: 28px;\n    border: solid 1px transparent;\n    padding: 0 10px;\n    outline: 0;\n    font-weight: 500;\n    font-size: 11px;\n    text-decoration: none;\n    white-space: nowrap;\n    word-wrap: normal;\n    line-height: normal;\n    vertical-align: middle;\n    cursor: pointer;\n    border-radius: 2px;\n    box-shadow: 0 1px 0 rgba(0,0,0,0.05);\n}\n.acestream__yt-card .acestream__yt-uix-tabs .acestream__yt-uix-button:hover, .acestream__yt-card .acestream__yt-uix-tabs .acestream__yt-uix-button:active, .acestream__yt-card .acestream__yt-uix-tabs .acestream__yt-uix-button.acestream__yt-uix-button-active, .acestream__yt-card .acestream__yt-uix-tabs .acestream__yt-uix-button.acestream__yt-uix-button-toggled {\n    border-bottom-color: #218caf;\n    background: none;\n    opacity: 1;\n    filter: none;\n}\n.acestream__share-popup .acestream__clearfix:before {\n    content: '.';\n    display: block;\n    height: 0;\n    visibility: hidden;\n}\n.acestream__share-popup .acestream__clearfix:after {\n    content: '.';\n    display: block;\n    height: 0;\n    visibility: hidden;\n    clear: both;\n}\n.acestream__share-popup .acestream__share-panel-services {\n    clear: both;\n}\n.acestream__share-popup .acestream__share-group {\n    float: left;\n    list-style: none;\n}\n.acestream__share-popup .acestream__share-group li {\n    float: left;\n    margin-right: 5px;\n}\n.acestream__share-popup .acestream__share-panel-services .acestream__share-service-button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    text-align: left;\n    width: 30px;\n    height: 30px;\n}\n.yt-uix-tooltip {\n    display: inline-block;\n}\n.acestream__yt-sprite {\n    display: inline-block;\n}\n.acestream__share-service-icon {\n    vertical-align: middle;\n    margin: -1px;\n    background-repeat: no-repeat;\n    background-image: url(data:image/png;base64,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);\n}\n.acestream__share-service-icon-vkontakte {\n    background-position: 0 -896px;\n    background-size: auto;\n    width: 32px;\n    height: 32px;\n}\n.acestream__share-service-icon-facebook {\n    background-position: 0 -180px;\n    background-size: auto;\n    width: 32px;\n    height: 32px;\n}\n.acestream__share-service-icon-googleplus {\n    background-position: 0 -420px;\n    background-size: auto;\n    width: 32px;\n    height: 32px;\n}\n.acestream__share-service-icon-twitter {\n    background-position: 0 -1385px;\n    background-size: auto;\n    width: 32px;\n    height: 32px;\n}\n.acestream__share-service-icon-skype {\n    background-position: 0 -456px;\n    background-size: auto;\n    width: 32px;\n    height: 32px;\n}\n.acestream__share-service-icon-odnoklassniki {\n    background-position: 0 0;\n    background-size: auto;\n    width: 32px;\n    height: 32px;\n}\n.acestream__share-service-icon-blogger {\n    background-position: 0 -1112px;\n    background-size: auto;\n    width: 32px;\n    height: 32px;\n}\n.acestream__share-service-icon-livejournal {\n    background-position: 0 -492px;\n    background-size: auto;\n    width: 32px;\n    height: 32px;\n}\n.acestream__share-service-icon-tumblr {\n    background-position: 0 -384px;\n    background-size: auto;\n    width: 32px;\n    height: 32px;\n}\n.acestream__share-service-icon-reddit {\n    background-position: 0 -1220px;\n    background-size: auto;\n    width: 32px;\n    height: 32px;\n}\n.acestream__share-service-icon-digg {\n    background-position: 0 -276px;\n    background-size: auto;\n    width: 32px;\n    height: 32px;\n}\n.acestream__share-service-icon-linkedin {\n    background-position: 0 -932px;\n    background-size: auto;\n    width: 32px;\n    height: 32px;\n}\n.acestream__share-service-icon-ameba {\n    background-position: 0 -72px;\n    background-size: auto;\n    width: 32px;\n    height: 32px;\n}\n.acestream__share-panel-url-container.acestream__share-panel-reverse {\n    clear: left;\n    margin-bottom: 0;\n    margin-top: 10px;\n}\n.acestream__share-panel-url {\n    color: #666;\n    font-size: 1.6em;\n    padding: 3px;\n    width: 385px;\n}\n.acestream__yt-uix-form-input-text {\n    width: 250px;\n    padding: 5px 10px 6px;\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 13px;\n    cursor: text;\n}\n.acestream__yt-uix-form-input-checkbox-element, .acestream__yt-uix-form-input-radio-element, .acestream__yt-uix-form-input-text, .acestream__yt-uix-form-input-textarea {\n    box-shadow: inset 0 0 1px rgba(0,0,0,.05);\n}\n.acestream__yt-uix-form-input-select, .acestream__yt-uix-form-input-text, .acestream__yt-uix-form-input-textarea {\n    border: 1px solid #d3d3d3;\n    color: #333;\n}\n.acestream__share-panel-start-at-container {\n    display: block;\n    margin-top: 10px;\n}\n.acestream__yt-uix-form-input-radio-container, .acestream__yt-uix-form-input-checkbox-container {\n    position: relative;\n    display: inline-block;\n    height: 20px;\n    line-height: 0;\n    font-size: 0;\n    vertical-align: middle;\n}\n.acestream__yt-uix-form-input-radio-container input, .acestream__yt-uix-form-input-checkbox-container input {\n    cursor: pointer;\n    position: absolute;\n    top: 1px;\n    left: 1px;\n    border: 0;\n    outline: 0;\n    margin: 0;\n    padding: 0;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n}\n.acestream__yt-uix-form-input-radio-element, .acestream__yt-uix-form-input-checkbox-element {\n    border: 1px solid #c6c6c6;\n    display: inline-block;\n    vertical-align: middle;\n    cursor: pointer;\n}\n.acestream__yt-uix-form-input-checkbox, .acestream__yt-uix-form-input-checkbox-element {\n    width: 14px;\n    height: 14px;\n}\n.acestream__yt-uix-form-input-checkbox-element, .acestream__yt-uix-form-input-radio-element, .acestream__yt-uix-form-input-text, .acestream__yt-uix-form-input-textarea {\n    box-shadow: inset 0 0 1px rgba(0,0,0,.05);\n}\n.acestream__share-panel-start-at-time {\n    width: 50px;\n}\n.acestream__yt-uix-form-input-text {\n    width: 250px;\n    padding: 5px 10px 6px;\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 13px;\n}\n.acestream__yt-uix-form-input-checkbox-element, .acestream__yt-uix-form-input-radio-element, .acestream__yt-uix-form-input-text, .acestream__yt-uix-form-input-textarea {\n    box-shadow: inset 0 0 1px rgba(0,0,0,.05);\n}\n.acestream__yt-uix-form-input-select, .acestream__yt-uix-form-input-text, .acestream__yt-uix-form-input-textarea {\n    border: 1px solid #d3d3d3;\n    color: #333;\n}\n.acestream__yt-uix-form-input-select {\n    position: relative;\n    display: inline-block;\n    font-weight: 500;\n    font-size: 11px;\n    vertical-align: middle;\n    cursor: pointer;\n    text-shadow: 0 1px 0 rgba(255,255,255,.5);\n    background-color: #f8f8f8;\n    filter: progid:DXImageTransform.Microsoft.Gradient(GradientType\x3d0,StartColorStr\x3d#fffcfcfc,EndColorStr\x3d#fff8f8f8);\n    background-image: -moz-linear-gradient(top,#fcfcfc 0,#f8f8f8 100%);\n    background-image: -ms-linear-gradient(top,#fcfcfc 0,#f8f8f8 100%);\n    background-image: -o-linear-gradient(top,#fcfcfc 0,#f8f8f8 100%);\n    background-image: -webkit-linear-gradient(top,#fcfcfc 0,#f8f8f8 100%);\n    background-image: linear-gradient(to bottom,#fcfcfc 0,#f8f8f8 100%);\n}\n.acestream__action-close-share-popup {\n    position: absolute;\n    top: 3px;\n    right: 3px;\n    background: none;\n    border: none;\n}\n.acestream__action-close-share-popup:before {\n    background: no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjwAAAHxCAMAAABeT5ZfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpcQ8ODv///xt/zAAAAEw7MQUFBQAAAJmZmVlTUru7uwAAAPf39/z8/P///wUFBf7+/v///////wAAAPz8/P///5qampaWlm2Xx/7+/qamphgXF////////wIDAzMyMmGtFYeHiDUzMjU1NP///4iJiaGhoTc2NZucnP///0dJQv///zg3N3ecyv///////wEBAgICAztbmQEBAQEBAQAAAf7+/sLCwkmW4XZ6dEeP4bW1tf///4eHhwQDBAQDBIWFhpeXl7GxsTczMzY0MzIxMf///yAeHmWRx4aGhv///+I2H46Ojrq6uoCAgAUGBmRkZJKSkkKN3wAAADc2Nf///////zY1NFpaW1NUVFZWVoeHh5+fnwIDA5ubm4WFhZ6enrm5ueQoH4EPFnBwcNpLHKampgEBAf///+YhF+YmHlVVVUeQ3B8dHbS0tCsrK4iIiGNqXc7OzuUmHqm71cfHx+QpIiiEzV1fYuMmHpeXl5woFU2R4mKJt87Ozs3NzV1pVEqR446Ojtvb21ar4urq6udxG+Li4lVWVhx+y0KF9MvLy+UpIoykxXJycsPP4UCPzWtra+dxG+dxG+dxG0CPzR55x5YaFECPzaqrq2ZmZlVVVdbW1kdHRxt8zOdxG8QtJx5kyGGtFZ4bEuAhHNiym9yPXf///wAAAP7+/oeHh+YhFzMzM8zMzPPz8/Dw8Pz8/Pf39/Hx8QCs7bOzs+YtJ1VVVWZmZvr6+vX19UqQ4ztbmQQGB85DKZqamtzc3SQiI9clI80eILi3t46OjsTExNVNL+3t7cUaHuApJedxG3d3d3V1dbCursnJyUCPzuXl5ZOgrbK/xMbd96OyuJoaEr8sKoeCgoiWpWp6jPOuqmOg53mHm4e27OHh4XOLuffRzmB6rawkIKHH8eXo69TU1Njo+rg/KvW/vDNUlfGKhvB6deny/Ovv8XGo6RtAiOpmXr++vsszMuQ/Ovji4LLY9gCc6udOSAGk7NGBdMJeVE9cb3jS9je88emcldGclp0G6uQAAADldFJOUwAVzf44DS+AgAUSJgkU5EG1gb/wINexLR4u/x7z+cG7/vBBjlBBSPZgqTE6pNrrXON1801k0Z469x9yzETgmq5d34hZ0nxnjNmykSXCY3tZtnpTieSKcG6El/KgmI++y+2nz/6lQsL5ee62sbje7P6MeaTg9s5hNmKc+fqe3YPYTtuxuvzoauDGmf7ofe/O++/g3PifknW60Ofv6N3mz8G++byF/jdf//////////////////////////////////////////////////////////////////////////////////7XYSGFAAAgAElEQVR42uycXUwT6RrHx80WGT7VLS1WqGliUWOCElGoWCmeIOmJDHE37lHroZgY3QQhaEJyQsw5KzdebLLJXnPu39K0lZIJ1MmmkLSkF8caEi56QegNH1eGhAvvz/vOTKcz05l2Zpgpdctfw7Tz2TI/nuf/vM/bYphe+rh7QJKJ3Qh2rEL9clXTYS5rneD56QZlx9U3NzfXK71Ix4PDvz+z+VCHZxNpklb2GJVCds6U3GWwv39QtOrSmC1tG+jgrWlruqfoes0AgGal7Mw8PfwbBOAwR6cSZJr+R5I7x7CIdLqtkX0UQGJ/CtW/utovXPP0YB0ykE3wAkMbAN9d0Reew7LTaD48PAfpNLlGkjBzpQ+OaRGo4e/tF7CS8NxZXb0jvKsJQCsSt/LhAeAyL0WYCL/D4SdMSuFpnpgQrR+dcekQcw4FTyqdTqwtrCSiKRh91quMDutd4fO7ubvdeAVGnIab8zcxDfAMZBl4wK5FAE/7w0buudMdpOV2KvQ8E6urE8I1dQMDPHqczPmCTsVWB2LT2Hg4eFZISM8OiC18hplrt7rYqZskrQKWyEnW5l5oeWhuuAyaGjTAUxcHH5dCodAyiM3w4Tl1tvBWF9xtFfBAekZ5Dt3JyKU47HD/tWs3jfJVDKyjZbi64LlL3sV68k976BWMHoIzZwDg3W55eIZWV4cEhZYNgHAodHEHzMfz8LTc5u1icufhcZs0pi1U0uW59+RkLSM8K9AoJz7GUmCl6iJPHdmHd5DDeZQ68D6SDT2Nl+Fd/KXkKfChoUEUEwaHhnBu3UwMgGQIGp/FAW7He4JSnaCxwTB6QWittvjyuXPylREeZHXWIp/JnSxZbZ7nLjkMabHmk1YfPsyFHvN3QFCly0SewVVWXfl1ljCAGQtS8LlW5sp+Pjx+PeDR4JZ1gAdWW6hQR5V6tVVbMMx00LBYudAD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\x3d) -548px -373px;\n    background-size: auto;\n    width: 10px;\n    height: 10px;\n}\n.acestream__yt-uix-button-has-icon:before {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n}\n.acestream__yt-uix-button-opacity {\n    opacity: .5;\n    filter: alpha(opacity\x3d50);\n    box-shadow: none;\n}\n.acestream__wide {\n    box-sizing: border-box;\n    width: 95%;\n}\n.acestream__yt-card .acestream__yt-uix-button-expander {\n    display: block;\n    width: 100%;\n    text-transform: uppercase;\n    color: #767676;\n    border-top: 1px solid #e2e2e2;\n    box-shadow: none;\n}\n.acestream__yt-card .acestream__yt-uix-button-expander:hover {\n    color: #222;\n}\n.acestream__yt-card.acestream__yt-uix-expander .acestream__yt-uix-button-expander, .acestream__yt-card .acestream__yt-uix-expander .acestream__yt-uix-button-expander {\n    margin: 10px 0 -15px;\n}\n.acestream__yt-uix-expander .acestream__yt-uix-expander-collapsed-body, .acestream__yt-uix-expander-collapsed .acestream__yt-uix-expander-body {\n    display: none;\n}\n.acestream__yt-uix-expander-collapsed .acestream__yt-uix-expander-collapsed-body {\n    display: block;\n}\n.acestream__yt-uix-expander-head {\n    cursor: pointer;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -webkit-user-select: none;\n}\n.acestream__share-embed-options {\n    margin-top: 10px;\n}\n.acestream__share-embed-options li {\n    margin-top: 6px;\n}\n.acestream__action-copy {\n    color: #555 !important;\n}\n.acestream__action-copy i.material-icons {\n    color: #555 !important;\n    vertical-align: middle;\n    font-size: 18px;\n}\n.acestream__action-copy svg {\n    color: #555 !important;\n    vertical-align: middle;\n    font-size: 18px;\n}\n.acestream__share-panel-container {\n    padding: 0 15px;\n}\n\n"
        },
        {}
    ],
    26: [function(d, n, t) {
            n.exports = '.acestream__tooltipped {\n    position: relative;\n}\n.acestream__tooltipped::before {\n    position: absolute;\n    z-index: 1000001;\n    display: none;\n    width: 0;\n    height: 0;\n    color: rgba(0,0,0,0.8);\n    pointer-events: none;\n    content: "";\n    border: 5px solid transparent;\n}\n.acestream__tooltipped-n::before, .acestream__tooltipped-ne::before, .acestream__tooltipped-nw::before {\n    top: -5px;\n    right: 50%;\n    bottom: auto;\n    margin-right: -5px;\n    border-top-color: rgba(0,0,0,0.8);\n}\n.acestream__tooltipped-s::before, .acestream__tooltipped-se::before, .acestream__tooltipped-sw::before {\n    top: auto;\n    right: 50%;\n    bottom: -5px;\n    margin-right: -5px;\n    border-bottom-color: rgba(0,0,0,0.8);\n}\n.acestream__tooltipped:hover::before, .acestream__tooltipped:hover::after, .acestream__tooltipped:active::before, .acestream__tooltipped:active::after, .acestream__tooltipped:focus::before, .acestream__tooltipped:focus::after {\n    display: inline-block;\n    text-decoration: none;\n}\n.acestream__tooltipped::after {\n    position: absolute;\n    z-index: 1000000;\n    display: none;\n    padding: 5px 8px;\n    font: normal normal 11px/1.5 Helvetica,arial,nimbussansl,liberationsans,freesans,clean,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";\n    color: #fff;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: break-word;\n    white-space: pre;\n    pointer-events: none;\n    content: attr(aria-label);\n    background: rgba(0,0,0,0.8);\n    border-radius: 3px;\n    -webkit-font-smoothing: subpixel-antialiased;\n}\n.acestream__tooltipped-s::after, .acestream__tooltipped-se::after, .acestream__tooltipped-sw::after {\n    top: 100%;\n    right: 50%;\n    margin-top: 5px;\n}\n.acestream__tooltipped-n::after, .acestream__tooltipped-ne::after, .acestream__tooltipped-nw::after {\n    right: 50%;\n    bottom: 100%;\n    margin-bottom: 5px;\n}\n.acestream__tooltipped-s::after, .acestream__tooltipped-n::after {\n    -webkit-transform: translateX(50%);\n    -ms-transform: translateX(50%);\n    transform: translateX(50%);\n}\n.acestream__tooltipped-s.acestream__tooltipped-x90::after, .acestream__tooltipped-n.acestream__tooltipped-x90::after {\n    -webkit-transform: translateX(90%);\n    -ms-transform: translateX(90%);\n    transform: translateX(90%);\n}\n.acestream__tooltipped-s.acestream__tooltipped-x80::after, .acestream__tooltipped-n.acestream__tooltipped-x80::after {\n    -webkit-transform: translateX(80%);\n    -ms-transform: translateX(80%);\n    transform: translateX(80%);\n}\n.acestream__tooltipped-s.acestream__tooltipped-x70::after, .acestream__tooltipped-n.acestream__tooltipped-x70::after {\n    -webkit-transform: translateX(70%);\n    -ms-transform: translateX(70%);\n    transform: translateX(70%);\n}\n.acestream__tooltipped-s.acestream__tooltipped-x60::after, .acestream__tooltipped-n.acestream__tooltipped-x60::after {\n    -webkit-transform: translateX(60%);\n    -ms-transform: translateX(60%);\n    transform: translateX(60%);\n}\n.acestream__tooltipped-s.acestream__tooltipped-x50::after, .acestream__tooltipped-n.acestream__tooltipped-x50::after {\n    -webkit-transform: translateX(50%);\n    -ms-transform: translateX(50%);\n    transform: translateX(50%);\n}\n.acestream__tooltipped-s.acestream__tooltipped-x40::after, .acestream__tooltipped-n.acestream__tooltipped-x40::after {\n    -webkit-transform: translateX(40%);\n    -ms-transform: translateX(40%);\n    transform: translateX(40%);\n}\n.acestream__tooltipped-s.acestream__tooltipped-x30::after, .acestream__tooltipped-n.acestream__tooltipped-x30::after {\n    -webkit-transform: translateX(30%);\n    -ms-transform: translateX(30%);\n    transform: translateX(30%);\n}\n.acestream__tooltipped-s.acestream__tooltipped-x20::after, .acestream__tooltipped-n.acestream__tooltipped-x20::after {\n    -webkit-transform: translateX(20%);\n    -ms-transform: translateX(20%);\n    transform: translateX(20%);\n}\n.acestream__tooltipped-s.acestream__tooltipped-x10::after, .acestream__tooltipped-n.acestream__tooltipped-x10::after {\n    -webkit-transform: translateX(10%);\n    -ms-transform: translateX(10%);\n    transform: translateX(10%);\n}\n'
        },
        {}
    ],
    27: [function(d, n, t) {
            n.exports = ".acestream__top-menu {\n    position: fixed;\n    left: 50%;\n    top: 0;\n    width: 300px;\n    height: 50px;\n    margin-left: -150px;\n    background-color: #218caf;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 2147483700;\n}\n.acestream__top-menu .acestream__top-menu-action {\n    cursor: pointer;\n    margin: 0 6px;\n}\n.acestream__top-menu .acestream__menu-close {\n    cursor: pointer;\n    position: absolute;\n    top: 16px;\n    right: 24px;\n    width: 16px;\n    height: 16px;\n}\n.icon-ace-cast-22 {\n    width: 22px;\n    height: 22px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUU5NzAzOUI4NjVGMTFFNzk0OTdGN0U5QTZGNjhGNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUU5NzAzOUM4NjVGMTFFNzk0OTdGN0U5QTZGNjhGNjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRTk3MDM5OTg2NUYxMUU3OTQ5N0Y3RTlBNkY2OEY2MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRTk3MDM5QTg2NUYxMUU3OTQ5N0Y3RTlBNkY2OEY2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiqnQ80AAAG4SURBVHjatNW7SgNREIDhXJV4iYniJUpAvBQiqJ1Y+ARqZWOh7xDfwMrW3tLGMthYpJCIhVhaiVhIQAkoeEkkicnG9R+cwLJks5uoBz6M2d3JOXPOzPpN0/T9xwihF3tYRBmd/pIfEdxKPAm8gjXM/dFkp5H1k4o8H8bwBkNX0cmo66wH8SGBZek1LODRJbChAbodAnfhDjEJUtEbn1H0OLuS2+wDulmyhAEPAWdxjLDD9SiCEjPQZh4lVVu4cLvRa+B57COjK1zGCXocn2DvSubPmJJ9bCKFstl8ZG33RlFAze1opXDgcO0LR60qz2nMaFA5NWncIIdDPUUbOG03FQFcIoNJy/dhvGLHIW2uqZDNusKurXcksYkz18YhM9bmMaJF8tvxLo0tpEGlHONaUSH9W/MYKKI5N7SkJVbQ2oSeLBeltFe1IFqNBM618VQt35Uk4evI2c5nHUndkD4MI66GENNrCVRsz+ax7dc3SD/G8ampkCP2IF0K1xjVJTYauqRpCfeY0HQYlmb20jgVRe38zUq+pD/YyHlQ/w9a+kdbBeLTV1VaZ1y1PCMrKrgdt395mX4LMACI6Eh5ppaeLgAAAABJRU5ErkJggg\x3d\x3d);\n}\n@media only screen and (max-width: 300px) {\n    .acestream__top-menu {\n        width: 100%;\n        left: 0;\n        margin-left: 0;\n    }\n}"
        },
        {}
    ],
    28: [function(d, n, t) {
            n.exports = '\x3cdiv class\x3d"acestream__popup-missing-engine"\x3e\n    \x3cspan class\x3d"acestream__popup-close"\x3e\n        \x3csvg width\x3d"24" height\x3d"24" focusable\x3d"false" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" fill\x3d"#333"\x3e\n            \x3cpath d\x3d"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"\x3e\x3c/path\x3e\n        \x3c/svg\x3e\n    \x3c/span\x3e\n    \x3cdiv class\x3d"acestream__message acestream__translate" data-string-id\x3d"missing_engine"\x3e\n        missing_engine\n    \x3c/div\x3e\n\n    \x3cdiv class\x3d"acestream__row-download"\x3e\n        \x3ca href\x3d"http://dl.acestream.org/products/acestream-full/win/latest"\x3e\n            \x3cdiv class\x3d"acestream__box"\x3e\n                \x3cdiv class\x3d"acestream__label"\x3e\n                    Ace Stream Media 3.1\n                \x3c/div\x3e\n                \x3cdiv class\x3d"acestream__icon-download"\x3e\n                \x3c/div\x3e\n            \x3c/div\x3e\n        \x3c/a\x3e\n        \x3ca href\x3d"http://dl.acestream.org/products/acestream-full/win/latest/torrent"\x3e\n            \x3cdiv class\x3d"acestream__icon-torrent"\x3e\n            \x3c/div\x3e\n        \x3c/a\x3e\n    \x3c/div\x3e\n\n    \x3cdiv class\x3d"acestream__row-bottom"\x3e\n        \x3ca class\x3d"acestream__more-button acestream__translate" data-string-id\x3d"More" target\x3d"_blank" href\x3d"http://info.acestream.org/#/install"\x3e\n            More\n        \x3c/a\x3e\n    \x3c/div\x3e\n\x3c/div\x3e'
        },
        {}
    ],
    29: [function(d, n, t) {
            n.exports = '\x3cdiv class\x3d"acestream__popup-missing-userscript"\x3e\n    \x3cspan class\x3d"acestream__popup-close"\x3e\n        \x3csvg width\x3d"24" height\x3d"24" focusable\x3d"false" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" fill\x3d"#333"\x3e\n            \x3cpath d\x3d"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"\x3e\x3c/path\x3e\n        \x3c/svg\x3e\n    \x3c/span\x3e\n    \x3cdiv class\x3d"acestream__wrap"\x3e\n        \x3cdiv style\x3d"text-align: center;" class\x3d"acestream__translate" data-string-id\x3d"install_acecast"\x3e\n            install_acecast\n        \x3c/div\x3e\n        \x3cul style\x3d"margin-top: 16px;"\x3e\n            \x3cli class\x3d"acestream__translate" data-string-id\x3d"acecast_feature_1"\x3e\x3c/li\x3e\n            \x3cli class\x3d"acestream__translate" data-string-id\x3d"acecast_feature_2"\x3e\x3c/li\x3e\n            \x3cli class\x3d"acestream__translate" data-string-id\x3d"acecast_feature_3"\x3e\x3c/li\x3e\n            \x3cli class\x3d"acestream__translate" data-string-id\x3d"acecast_feature_4"\x3e\x3c/li\x3e\n        \x3c/ul\x3e\n        \x3cdiv style\x3d"text-align: center; margin-top: 32px;"\x3e\n            \x3ca class\x3d"acestream__button acestream__action-install-userscript acestream__translate" data-string-id\x3d"install_or_activate"\x3e\n                Install/Activate\n            \x3c/a\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e'
        },
        {}
    ],
    30: [function(d, n, t) {
            n.exports = '\x3cdiv class\x3d"acestream__popup-old-engine"\x3e\n    \x3cspan class\x3d"acestream__popup-close"\x3e\n        \x3csvg width\x3d"24" height\x3d"24" focusable\x3d"false" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" fill\x3d"#333"\x3e\n            \x3cpath d\x3d"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"\x3e\x3c/path\x3e\n        \x3c/svg\x3e\n    \x3c/span\x3e\n    \x3cdiv class\x3d"acestream__message acestream__translate" data-string-id\x3d"old_engine"\x3e\n        old_engine\n    \x3c/div\x3e\n\n    \x3cdiv class\x3d"acestream__row-download"\x3e\n        \x3ca href\x3d"http://dl.acestream.org/products/acestream-full/win/latest"\x3e\n            \x3cdiv class\x3d"acestream__box"\x3e\n                \x3cdiv class\x3d"acestream__label"\x3e\n                    Ace Stream Media 3.1\n                \x3c/div\x3e\n                \x3cdiv class\x3d"acestream__icon-download"\x3e\n                \x3c/div\x3e\n            \x3c/div\x3e\n        \x3c/a\x3e\n        \x3ca href\x3d"http://dl.acestream.org/products/acestream-full/win/latest/torrent"\x3e\n            \x3cdiv class\x3d"acestream__icon-torrent"\x3e\n            \x3c/div\x3e\n        \x3c/a\x3e\n    \x3c/div\x3e\n\n    \x3cdiv class\x3d"acestream__row-bottom"\x3e\n        \x3ca class\x3d"acestream__more-button acestream__translate" data-string-id\x3d"More" target\x3d"_blank" href\x3d"http://info.acestream.org/#/install"\x3e\n            More\n        \x3c/a\x3e\n    \x3c/div\x3e\n\x3c/div\x3e'
        },
        {}
    ],
    31: [function(d, n, t) {
            n.exports = '\x3cdiv class\x3d"acestream__popup-playlist-add"\x3e\n    \x3cspan class\x3d"acestream__popup-close"\x3e\n        \x3csvg focusable\x3d"false" width\x3d"24" height\x3d"24" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24"\x3e\n            \x3cpath d\x3d"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"\x3e\x3c/path\x3e\n        \x3c/svg\x3e\n    \x3c/span\x3e\n    \x3cdiv class\x3d"acestream__popup-content-title"\x3e\n        Ace Stream\x26nbsp;\x3cspan class\x3d"acestream__translate" data-string-id\x3d"Playlist"\x3ePlaylist\x3c/span\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"acestream__form"\x3e\n        \x3cdiv class\x3d"acestream__form-row"\x3e\n            \x3cdiv class\x3d"acestream__form-label"\x3e\n                \x3cspan class\x3d"acestream__translate" data-string-id\x3d"Title"\x3eTitle\x3c/span\x3e:\n            \x3c/div\x3e\n            \x3cdiv class\x3d"acestream__form-input"\x3e\n                \x3cinput type\x3d"text" class\x3d"acestream__input-title" value\x3d"" /\x3e\n            \x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv class\x3d"acestream__form-row"\x3e\n            \x3cdiv class\x3d"acestream__form-label"\x3e\n                \x3cspan class\x3d"acestream__translate" data-string-id\x3d"Category"\x3eCategory\x3c/span\x3e:\n            \x3c/div\x3e\n            \x3cdiv class\x3d"acestream__form-input"\x3e\n                \x3cselect class\x3d"acestream__input-category"\x3e\n                    \x3coption class\x3d"acestream__translate" data-string-id\x3d"TV" value\x3d"tv"\x3eTV\x3c/option\x3e\n                    \x3coption class\x3d"acestream__translate" data-string-id\x3d"Movies" value\x3d"movies"\x3eMovies\x3c/option\x3e\n                    \x3coption class\x3d"acestream__translate" data-string-id\x3d"Music video" value\x3d"music_video"\x3eMusic video\x3c/option\x3e\n                    \x3coption class\x3d"acestream__translate" data-string-id\x3d"Music audio" value\x3d"music"\x3eMusic audio\x3c/option\x3e\n                    \x3coption class\x3d"acestream__translate" data-string-id\x3d"Other" value\x3d"other"\x3eOther\x3c/option\x3e\n                \x3c/select\x3e\n            \x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv class\x3d"acestream__form-row"\x3e\n            \x3cdiv class\x3d"acestream__form-label"\x3e\n                \x3cspan class\x3d"acestream__translate" data-string-id\x3d"Tags"\x3eTags\x3c/span\x3e:\n            \x3c/div\x3e\n            \x3cdiv class\x3d"acestream__form-input"\x3e\n                \x3cinput type\x3d"text" class\x3d"acestream__input-tags" value\x3d"" /\x3e\n            \x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv class\x3d"acestream__form-row"\x3e\n            \x3cdiv class\x3d"acestream__form-label"\x3e\n                \x3cspan class\x3d"acestream__translate" data-string-id\x3d"Description"\x3eDescription\x3c/span\x3e:\n            \x3c/div\x3e\n            \x3cdiv class\x3d"acestream__form-input"\x3e\n                \x3ctextarea class\x3d"acestream__input-description"\x3e\x3c/textarea\x3e\n            \x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv class\x3d"acestream__form-row acestream__form-row-poster"\x3e\n            \x3cdiv class\x3d"acestream__poster-container"\x3e\n                \x3cdiv class\x3d"acestream__form-label"\x3e\n                    \x3cspan class\x3d"acestream__translate" data-string-id\x3d"Poster"\x3ePoster\x3c/span\x3e:\n                \x3c/div\x3e\n                \x3cimg class\x3d"acestream__poster" /\x3e\n            \x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv class\x3d"acestream__form-actions-row"\x3e\n            \x3ca class\x3d"acestream__button acestream__action-playlist-add acestream__translate" data-string-id\x3d"Add to playlist"\x3e\n                Add to playlist\n            \x3c/a\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e'
        },
        {}
    ],
    32: [function(d, n, t) {
        n.exports = '\x3cdiv class\x3d"acestream__popup-playlist-add-iframe"\x3e\n\x3c/div\x3e'
    }, {}],
    33: [function(d, n, t) {
            n.exports = '\x3cdiv class\x3d"acestream__popup-select-player"\x3e\n    \x3cspan class\x3d"acestream__popup-close"\x3e\n        \x3csvg focusable\x3d"false" width\x3d"24" height\x3d"24" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" fill\x3d"#333"\x3e\n            \x3cpath d\x3d"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"\x3e\x3c/path\x3e\n        \x3c/svg\x3e\n    \x3c/span\x3e\n    \x3cdiv class\x3d"acestream__popup-content-title acestream__translate" data-string-id\x3d"Select Player"\x3e\n        Select Player\n    \x3c/div\x3e\n    \x3cdiv class\x3d"acestream__remember-choice-container"\x3e\n        \x3clabel class\x3d"acestream__checkbox" id\x3d"acestream__remember-player" for\x3d"acestream__input-remember-player"\x3e\n            \x3cinput type\x3d"checkbox" id\x3d"acestream__input-remember-player" class\x3d"acestream__checkbox-input" checked\x3e\n            \x3cspan class\x3d"acestream__checkbox-label acestream__translate" data-string-id\x3d"Remember choice"\x3e\n                Remember choice\n            \x3c/span\x3e\n        \x3c/label\x3e\n    \x3c/div\x3e\n    \x3cul class\x3d"acestream__players-list"\x3e\n    \x3c/ul\x3e\n\x3c/div\x3e'
        },
        {}
    ],
    34: [function(d, n, t) {
            n.exports = '\x3cdiv class\x3d"acestream__popup-share acestream__share-popup acestream__watch-action-panels acestream__yt-uix-button-panel acestream__yt-card acestream__yt-card-has-padding"\x3e\n    \x3cdiv\x3e\n        \x3cdiv\x3e\n            \x3cdiv class\x3d"acestream__share-panel"\x3e\n                \x3cdiv class\x3d"acestream__yt-uix-tabs"\x3e\n                    \x3cspan class\x3d"acestream__yt-uix-button-group"\x3e\n                      \x3cbutton class\x3d"acestream__yt-uix-button acestream__yt-uix-button-size-default acestream__yt-uix-button-text acestream__yt-card-title acestream__yt-uix-button-toggled" type\x3d"button" onclick\x3d";return false;" data-tab\x3d"acestream__share-panel-services"\x3e\n                        \x3cspan class\x3d"acestream__yt-uix-button-content"\x3eShare\x3c/span\x3e\n                      \x3c/button\x3e\n                      \x3cbutton class\x3d"acestream__yt-uix-button acestream__yt-uix-button-size-default acestream__yt-uix-button-text acestream__yt-card-title" type\x3d"button" onclick\x3d";return false;" data-tab\x3d"acestream__share-panel-embed"\x3e\n                        \x3cspan class\x3d"acestream__yt-uix-button-content"\x3eEmbed\x3c/span\x3e\n                      \x3c/button\x3e\n                      \x3cbutton class\x3d"acestream__yt-uix-button acestream__yt-uix-button-size-default acestream__yt-uix-button-text acestream__yt-card-title" type\x3d"button" onclick\x3d";return false;" data-tab\x3d"acestream__share-panel-acestream-link"\x3e\n                        \x3cspan class\x3d"acestream__yt-uix-button-content"\x3eAce Stream Link\x3c/span\x3e\n                      \x3c/button\x3e\n                      \x3cbutton class\x3d"acestream__yt-uix-button acestream__yt-uix-button-size-default acestream__yt-uix-button-text acestream__yt-card-title" type\x3d"button" onclick\x3d";return false;" data-tab\x3d"acestream__share-panel-content-id"\x3e\n                        \x3cspan class\x3d"acestream__yt-uix-button-content"\x3eContent ID\x3c/span\x3e\n                      \x3c/button\x3e\n                    \x3c/span\x3e\n                \x3c/div\x3e\n\n                \x3cdiv class\x3d"acestream__share-panel-container acestream__share-panel-services-container"\x3e\n                    \x3cdiv class\x3d"acestream__clearfix"\x3e\n                        \x3cdiv class\x3d"acestream__share-panel-services "\x3e\n                            \x3cul class\x3d"acestream__share-group"\x3e\n                                \x3cli\x3e\n                                    \x3cbutton title\x3d"Share on VKontakte" data-service-name\x3d"VKONTAKTE" data-popup-width\x3d"1024" data-popup-height\x3d"650" data-tooltip-offset\x3d"90" class\x3d"acestream__tooltip acestream__share-service-button"\x3e\n                                      \x3cspan class\x3d"acestream__share-service-icon acestream__share-service-icon-vkontakte acestream__yt-sprite"\x3e\x3c/span\x3e\n                                    \x3c/button\x3e\n                                \x3c/li\x3e\n\n                                \x3cli\x3e\n                                    \x3cbutton title\x3d"Share on Facebook" data-service-name\x3d"FACEBOOK" data-popup-width\x3d"530" data-popup-height\x3d"560" data-tooltip-offset\x3d"80" class\x3d"acestream__tooltip acestream__share-service-button"\x3e\n                                      \x3cspan class\x3d"acestream__share-service-icon acestream__share-service-icon-facebook acestream__yt-sprite"\x3e\x3c/span\x3e\n                                    \x3c/button\x3e\n                                \x3c/li\x3e\n\n                                \x3cli\x3e\n                                    \x3cbutton title\x3d"Share on Google+" data-service-name\x3d"GOOGLEPLUS" data-popup-width\x3d"620" data-popup-height\x3d"620" data-tooltip-offset\x3d"80" class\x3d"acestream__tooltip acestream__share-service-button"\x3e\n                                      \x3cspan class\x3d"acestream__share-service-icon acestream__share-service-icon-googleplus acestream__yt-sprite"\x3e\x3c/span\x3e\n                                    \x3c/button\x3e\n                                \x3c/li\x3e\n\n                                \x3cli\x3e\n                                    \x3cbutton title\x3d"Share on Odnoklassniki" data-service-name\x3d"ODNOKLASSNIKI" data-popup-width\x3d"1024" data-popup-height\x3d"650" data-tooltip-offset\x3d"70" class\x3d"acestream__tooltip acestream__share-service-button"\x3e\n                                      \x3cspan class\x3d"acestream__share-service-icon acestream__share-service-icon-odnoklassniki acestream__yt-sprite"\x3e\x3c/span\x3e\n                                    \x3c/button\x3e\n                                \x3c/li\x3e\n\n                                \x3cli\x3e\n                                    \x3cbutton title\x3d"Share on Twitter" data-service-name\x3d"TWITTER" data-popup-width\x3d"550" data-popup-height\x3d"420" data-tooltip-offset\x3d"60" class\x3d"acestream__tooltip acestream__share-service-button"\x3e\n                                      \x3cspan class\x3d"acestream__share-service-icon acestream__share-service-icon-twitter acestream__yt-sprite"\x3e\x3c/span\x3e\n                                    \x3c/button\x3e\n                                \x3c/li\x3e\n\n                                \x3cli\x3e\n                                    \x3cbutton title\x3d"Share on LiveJournal" data-service-name\x3d"LIVEJOURNAL" data-popup-width\x3d"1024" data-popup-height\x3d"650" data-tooltip-offset\x3d"50" class\x3d"acestream__tooltip acestream__share-service-button"\x3e\n                                      \x3cspan class\x3d"acestream__share-service-icon acestream__share-service-icon-livejournal acestream__yt-sprite"\x3e\x3c/span\x3e\n                                    \x3c/button\x3e\n                                \x3c/li\x3e\n\n                                \x3cli\x3e\n                                    \x3cbutton title\x3d"Share on Tumblr" data-service-name\x3d"TUMBLR" data-popup-width\x3d"1024" data-popup-height\x3d"650" data-tooltip-offset\x3d"40" class\x3d"acestream__tooltip acestream__share-service-button"\x3e\n                                      \x3cspan class\x3d"acestream__share-service-icon acestream__share-service-icon-tumblr acestream__yt-sprite"\x3e\x3c/span\x3e\n                                    \x3c/button\x3e\n                                \x3c/li\x3e\n\n                                \x3cli\x3e\n                                    \x3cbutton title\x3d"Share on reddit" data-service-name\x3d"REDDIT" data-popup-width\x3d"1024" data-popup-height\x3d"650" data-tooltip-offset\x3d"30" class\x3d"acestream__tooltip acestream__share-service-button"\x3e\n                                      \x3cspan class\x3d"acestream__share-service-icon acestream__share-service-icon-reddit acestream__yt-sprite"\x3e\x3c/span\x3e\n                                    \x3c/button\x3e\n                                \x3c/li\x3e\n\n                                \x3cli\x3e\n                                    \x3cbutton title\x3d"Share on Digg" data-service-name\x3d"DIGG" data-popup-width\x3d"1024" data-popup-height\x3d"650" data-tooltip-offset\x3d"30" class\x3d"acestream__tooltip acestream__share-service-button"\x3e\n                                      \x3cspan class\x3d"acestream__share-service-icon acestream__share-service-icon-digg acestream__yt-sprite"\x3e\x3c/span\x3e\n                                    \x3c/button\x3e\n                                \x3c/li\x3e\n\n                                \x3cli\x3e\n                                    \x3cbutton title\x3d"Share on LinkedIn" data-service-name\x3d"LINKEDIN" data-popup-width\x3d"1024" data-popup-height\x3d"650" data-tooltip-offset\x3d"20" class\x3d"acestream__tooltip acestream__share-service-button"\x3e\n                                      \x3cspan class\x3d"acestream__share-service-icon acestream__share-service-icon-linkedin acestream__yt-sprite"\x3e\x3c/span\x3e\n                                    \x3c/button\x3e\n                                \x3c/li\x3e\n\n                                \x3cli\x3e\n                                    \x3cbutton title\x3d"Share on Skype" data-service-name\x3d"SKYPE" data-popup-width\x3d"1024" data-popup-height\x3d"650" data-tooltip-offset\x3d"10" class\x3d"acestream__tooltip acestream__share-service-button"\x3e\n                                      \x3cspan class\x3d"acestream__share-service-icon acestream__share-service-icon-skype acestream__yt-sprite"\x3e\x3c/span\x3e\n                                    \x3c/button\x3e\n                                \x3c/li\x3e\n\n                            \x3c/ul\x3e\n                        \x3c/div\x3e\n\n                    \x3c/div\x3e\n                    \x3cdiv class\x3d"acestream__share-panel-url-container acestream__share-panel-reverse"\x3e\n                        \x3cspan class\x3d"acestream__share-panel-url-input-container acestream__yt-uix-form-input-container acestream__yt-uix-form-input-text-container acestream__yt-uix-form-input-non-empty"\x3e\n                          \x3cinput readonly class\x3d"acestream__yt-uix-form-input-text acestream__wide acestream__share-panel-url acestream__share-web-player-link" name\x3d"share_url" value\x3d""\x3e\n                          \x3ca class\x3d"acestream__action-copy" data-clipboard-target\x3d".acestream__share-web-player-link" href\x3d"#" onclick\x3d"return false;"\x3e\n                            \x3csvg fill\x3d"#555" height\x3d"18" viewBox\x3d"0 0 24 24" width\x3d"18" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\n                                \x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\n                                \x3cpath d\x3d"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/\x3e\n                            \x3c/svg\x3e\n                          \x3c/a\x3e\n                        \x3c/span\x3e\n                    \x3c/div\x3e\n                \x3c/div\x3e\n\n                \x3cdiv class\x3d"acestream__share-panel-container acestream__share-panel-embed-container" style\x3d"display: none;"\x3e\n                    \x3cdiv class\x3d"acestream__yt-uix-expander acestream__yt-uix-expander-collapsed"\x3e\n\n                        \x3cspan class\x3d"acestream__yt-uix-form-input-container acestream__yt-uix-form-input-text-container"\x3e\n                            \x3cinput class\x3d"acestream__yt-uix-form-input-text acestream__wide acestream__share-embed-code"\x3e\n                            \x3ca class\x3d"acestream__action-copy" data-clipboard-target\x3d".acestream__share-embed-code" href\x3d"#" onclick\x3d"return false;"\x3e\n                                \x3csvg fill\x3d"#555" height\x3d"18" viewBox\x3d"0 0 24 24" width\x3d"18" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\n                                    \x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\n                                    \x3cpath d\x3d"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/\x3e\n                                \x3c/svg\x3e\n                            \x3c/a\x3e\n                        \x3c/span\x3e\n\n                        \x3cdiv class\x3d"acestream__yt-uix-expander-body"\x3e\n                            \x3cdiv class\x3d"acestream__share-embed-options"\x3e\n                                \x3clabel\x3eVideo size:\x3c/label\x3e\n                                \x3cselect class\x3d"acestream__yt-uix-form-input-select-element acestream__embed-video-size"\x3e\n                                  \x3coption value\x3d"default" data-width\x3d"560" data-height\x3d"315"\x3e560 \u00d7 315\x3c/option\x3e\n                                  \x3coption value\x3d"hd720" data-width\x3d"1280" data-height\x3d"720"\x3e1280 \u00d7 720\x3c/option\x3e\n                                  \x3coption value\x3d"large" data-width\x3d"853" data-height\x3d"480"\x3e853 \u00d7 480\x3c/option\x3e\n                                  \x3coption value\x3d"medium" data-width\x3d"640" data-height\x3d"360"\x3e640 \u00d7 360\x3c/option\x3e\n                                \x3c/select\x3e\n                            \x3c/div\x3e\n                            \x3cul class\x3d"acestream__share-embed-options"\x3e\n                                \x3cli\x3e\n                                    \x3clabel\x3e\n                                      \x3cinput type\x3d"checkbox" class\x3d"acestream__share-embed-option acestream__embed-video-autoplay" checked\x3d""\x3e\n                                      Autoplay\n                                    \x3c/label\x3e\n                                \x3c/li\x3e\n                            \x3c/ul\x3e\n                        \x3c/div\x3e\n                        \x3cbutton class\x3d"acestream__yt-uix-button acestream__yt-uix-button-size-default acestream__yt-uix-button-expander acestream__yt-uix-expander-head acestream__yt-uix-expander-collapsed-body" type\x3d"button" onclick\x3d";return false;"\x3e\n                          \x3cspan class\x3d"acestream__yt-uix-button-content"\x3eShow more\x3c/span\x3e\n                        \x3c/button\x3e\n                        \x3cbutton class\x3d"acestream__yt-uix-button acestream__yt-uix-button-size-default acestream__yt-uix-button-expander acestream__yt-uix-expander-head acestream__yt-uix-expander-body" type\x3d"button" onclick\x3d";return false;"\x3e\n                          \x3cspan class\x3d"acestream__yt-uix-button-content"\x3eShow less\x3c/span\x3e\n                        \x3c/button\x3e\n                    \x3c/div\x3e\n                \x3c/div\x3e\n\n                \x3cdiv class\x3d"acestream__share-panel-container acestream__share-panel-acestream-link-container" style\x3d"display: none;"\x3e\n                    \x3cspan class\x3d"acestream__yt-uix-form-input-container acestream__yt-uix-form-input-text-container"\x3e\n                        \x3cinput class\x3d"acestream__yt-uix-form-input-text acestream__wide acestream__share-acestream-link"\x3e\n                        \x3ca class\x3d"acestream__action-copy" data-clipboard-target\x3d".acestream__share-acestream-link" href\x3d"#" onclick\x3d"return false;"\x3e\n                            \x3csvg fill\x3d"#555" height\x3d"18" viewBox\x3d"0 0 24 24" width\x3d"18" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\n                                \x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\n                                \x3cpath d\x3d"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/\x3e\n                            \x3c/svg\x3e\n                        \x3c/a\x3e\n                    \x3c/span\x3e\n                \x3c/div\x3e\n\n                \x3cdiv class\x3d"acestream__share-panel-container acestream__share-panel-content-id-container" style\x3d"display: none;"\x3e\n                    \x3cspan class\x3d"acestream__yt-uix-form-input-container acestream__yt-uix-form-input-text-container "\x3e\n                        \x3cinput class\x3d"acestream__yt-uix-form-input-text acestream__wide acestream__share-content-id"\x3e\n                        \x3ca class\x3d"acestream__action-copy" data-clipboard-target\x3d".acestream__share-content-id" href\x3d"#" onclick\x3d"return false;"\x3e\n                            \x3csvg fill\x3d"#555" height\x3d"18" viewBox\x3d"0 0 24 24" width\x3d"18" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\n                                \x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\n                                \x3cpath d\x3d"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/\x3e\n                            \x3c/svg\x3e\n                        \x3c/a\x3e\n                    \x3c/span\x3e\n                \x3c/div\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n    \x3cspan class\x3d"acestream__popup-close"\x3e\n        \x3csvg focusable\x3d"false" width\x3d"24" height\x3d"24" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" fill\x3d"#333"\x3e\n            \x3cpath d\x3d"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"\x3e\x3c/path\x3e\n        \x3c/svg\x3e\n    \x3c/span\x3e\n\x3c/div\x3e'
        },
        {}
    ],
    35: [function(d, n, t) {
            n.exports = '\x3cdiv class\x3d"acestream__top-menu"\x3e\n    \x3cdiv class\x3d"acestream__top-menu-action icon-ace-cast-22 acestream__action-select-player" style\x3d"margin-right: 14px;"\x3e\x3c/div\x3e\n    \x3cdiv class\x3d"acestream__top-menu-action acestream__action-playlist-add"\x3e\n        \x3csvg fill\x3d"#fff" width\x3d"24" height\x3d"24" viewBox\x3d"0 0 24 24" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3cpath d\x3d"M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/\x3e\x3c/svg\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"acestream__top-menu-action acestream__action-share"\x3e\n        \x3csvg fill\x3d"#fff" width\x3d"18" height\x3d"18" viewBox\x3d"0 0 24 24" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3cpath d\x3d"M0 0h24v24H0z" fill\x3d"none"/\x3e\x3cpath d\x3d"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/\x3e\x3c/svg\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"acestream__menu-close"\x3e\n        \x3csvg fill\x3d"#fff" width\x3d"16" height\x3d"16" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" focusable\x3d"false"\x3e\n            \x3cpath d\x3d"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"\x3e\x3c/path\x3e\n        \x3c/svg\x3e\n    \x3c/div\x3e\n\x3c/div\x3e'
        },
        {}
    ],
    36: [function(d, n, t) {
        function a(b, a) {
            w.call(this);
            this.visible = !1;
            this.content = this.container = this.wrap = null;
            this.conf = k.extend(a, b || {})
        }
        var b = d("jquery"),
            k = d("Utils.js"),
            w = d("EventManager.js");
        k.inheritFrom(a, w);
        a.prototype.isVisible = function() {
            return this.visible
        };
        a.prototype.show = function() {
            this.showWrap();
            this.visible = !0;
            this.emit("popup-shown", [this])
        };
        a.prototype.hide = function() {
            this.hideWrap();
            this.visible = !1;
            this.emit("popup-closed", [this])
        };
        a.prototype.needOverlay = function() {
            return !this.conf.playerContainer
        };
        a.prototype.wrapContent = function() {
            var a = this;
            if (!this.content) throw "BasePopup::wrap: missing content";
            this.content.find(".acestream__popup-close").on("click", function(b) {
                b.preventDefault();
                a.hide()
            });
            this.content.css({
                width: "100%",
                height: "100%"
            });
            this.conf.playerContainer ? (this.wrap = b("\x3cdiv\x3e").addClass("acestream__inplayer-message-container"), this.wrap.append(this.content), this.conf.playerContainer.append(this.wrap)) : (this.wrap = b("\x3cdiv\x3e").addClass("acestream__popup"), this.container = b("\x3cdiv\x3e").addClass("acestream__popup-container"),
                this.wrap.on("click", function(d) {
                    0 == b(d.target).closest(".acestream__popup-container").length && a.hide()
                }), this.container.append(this.content), this.wrap.append(this.container), b("body").append(this.wrap));
            this.hideWrap()
        };
        a.prototype.showWrap = function() {
            this.wrap && k.safeShow(this.wrap)
        };
        a.prototype.hideWrap = function() {
            this.wrap && k.safeHide(this.wrap)
        };
        a.prototype.resize = function() {
            if (!this.conf.playerContainer) {
                var a = b(window).width();
                var d = b(window).height(),
                    r = this.conf.minTopMargin || 0;
                if (this.conf.minWidth &&
                    a < this.conf.minWidth) this.container.css({
                    width: "100%",
                    height: "calc(100% - " + r + "px)",
                    "margin-top": r + "px"
                });
                else {
                    "auto" === this.conf.height ? (this.showWrap(), this.content.css({
                        height: "auto"
                    }), a = k.getElementHeight(this.content)) : a = parseInt(this.conf.height);
                    var e = Math.floor(.8 * d);
                    a > e && (a = e);
                    d = d / 2 - a / 2;
                    d < r && (d = r);
                    this.container.css({
                        height: a + "px",
                        "margin-top": d + "px"
                    });
                    this.conf.minWidth && this.container.css({
                        width: this.conf.minWidth + "px"
                    });
                    "auto" === this.conf.height && this.content.css({
                        height: "100%"
                    })
                }
            }
        };
        n.exports =
            a
    }, {
        "EventManager.js": 4,
        "Utils.js": 14,
        jquery: 53
    }],
    37: [function(d, n, t) {
        function a(a) {
            function n() {
                J.clearTimer("form-hide")
            }

            function L() {
                if (!T.hasClass("visible")) {
                    if ("top" == H) {
                        var b = 1 == da.find("video").size() ? da.find("video") : 1 == da.find("embed").size() ? da.find("embed") : da;
                        var c = da.offset();
                        b = b.offset();
                        var a;
                        c && b && (a = Math.max(0, b.top - c.top));
                        a = 0 < a && T.hasClass("opera") ? a + h.TOP_BUTTON_OFFSET_OPERA : a + h.TOP_BUTTON_OFFSET;
                        T.css({
                            top: a + "px"
                        })
                    }
                    T.addClass("visible")
                }
            }

            function t() {
                "yes" === T.data("can-hide") &&
                    T.hasClass("visible") && T.removeClass("visible")
            }

            function qa() {
                var a = b("\x3cdiv\x3e").addClass("magicplayer--popup-content"),
                    A = b("\x3cdiv\x3e").addClass("magicplayer--dialog-title");
                A.append('\x3cdiv class\x3d"magicplayer--title-button-back"\x3e' + c.SVG_ARROW_BACK + '\x3c/div\x3e\x3cdiv class\x3d"magicplayer--title-text"\x3e' + x("Select Player") + "\x3c/div\x3e");
                var y = b("\x3cul\x3e").addClass("magicplayer--select-device-list");
                a.append(A);
                a.append(y);
                a.append('\x3cdiv class\x3d"magicplayer--remember-choice-container"\x3e\x3clabel class\x3d"acestream__checkbox acestream__checkbox-dark" for\x3d"magicplayer--remember-player-selection"\x3e\x3cinput type\x3d"checkbox" id\x3d"magicplayer--remember-player-selection" class\x3d"acestream__checkbox-input" checked\x3e\x3cspan class\x3d"acestream__checkbox-label"\x3e' +
                    x("Remember choice") + "\x3c/span\x3e\x3c/label\x3e\x3c/div\x3e");
                A = a.find("#magicplayer--remember-player-selection");
                y = fa.getValue(h.VAR_REMEMBER_PLAYER_STATE);
                A.prop("checked", "false" != y);
                A.on("change", function() {
                    var c = b(this).prop("checked");
                    fa.setValue(h.VAR_REMEMBER_PLAYER_STATE, c ? "true" : "false");
                    c || r.clearRememberedPlayer()
                });
                new D(A.parent().get(0));
                return a
            }

            function la() {
                var a = b("\x3cdiv\x3e").addClass("magicplayer--popup-content"),
                    A = b("\x3cdiv\x3e").addClass("magicplayer--dialog-title");
                A.append('\x3cdiv class\x3d"magicplayer--title-button-back"\x3e' +
                    c.SVG_ARROW_BACK + '\x3c/div\x3e\x3cdiv class\x3d"magicplayer--title-text"\x3e' + x("Menu") + "\x3c/div\x3e");
                var y = b("\x3cdiv\x3e").addClass("magicplayer--menu-actions"),
                    d = b("\x3cdiv\x3e").addClass("magicplayer--menu-action magicplayer--menu-action-settings").html(c.PNG_ACE_CAST),
                    e = b("\x3cdiv\x3e").addClass("magicplayer--menu-action magicplayer--menu-action-playlist-add").html(c.SVG_PLAYLIST_ADD),
                    h = b("\x3cdiv\x3e").addClass("magicplayer--menu-action magicplayer--menu-action-share").html(c.SVG_SHARE_18);
                d.attr("title", x("Select Player"));
                e.attr("title", x("Add to playlist"));
                h.attr("title", x("Share"));
                y.append(d);
                y.append(e);
                y.append(h);
                d.on("click", function() {
                    J.openSelectPlayerPopup(function() {
                        n();
                        ha(!1)
                    })
                });
                e.on("click", function() {
                    J.openPlaylistAddPopup(function() {
                        n();
                        ha(!1)
                    })
                });
                h.on("click", function() {
                    J.openSharePopup(function() {
                        n();
                        ha(!1)
                    })
                });
                a.append(A);
                a.append(y);
                return a
            }

            function ha(b) {
                var c = Ia;
                c.find(".front");
                c.find(".back");
                c.data("front-height");
                c.data("back-height");
                b ? (c.addClass("flipped"),
                    T.addClass("flipped")) : (c.removeClass("flipped"), T.removeClass("flipped"))
            }

            function Da() {
                h.USE_TOP_MENU ? wa && (wa.find(".acestream--message").remove(), k.safeShow(T)) : (t(), ha(!1))
            }

            function S(c, a) {
                a = a || {};
                var y = b("\x3cdiv\x3e").addClass("acestream--message");
                y.html(c);
                if (h.USE_TOP_MENU) {
                    k.safeHide(T);
                    wa.append(y);
                    c = k.getElementWidth(y);
                    var d = k.getElementHeight(y);
                    c && d && y.css({
                        "margin-top": Math.floor(-d / 2),
                        "margin-left": Math.floor(-c / 2)
                    })
                } else A(y, 45), ha(!0);
                a.hideAfter && setTimeout(function() {
                    Da()
                }, a.hideAfter)
            }

            function ba() {
                Ia.hasClass("flipped") && (n(), J.setTimer("form-hide", setTimeout(function() {
                    Ia.hasClass("flipped");
                    ha(!1)
                }, h.FORM_HIDE_TIMEOUT)))
            }

            function La() {
                if (h.USE_TOP_MENU) J.openTopMenu({
                    source: "menu-button",
                    callback: function(b) {
                        b || S("Cannot load content", {
                            hideAfter: 3E3
                        })
                    }
                });
                else {
                    var b = la();
                    A(b, 90);
                    ha(!0);
                    b.on("mousemove", function() {
                        n()
                    });
                    b.on("mouseleave", function() {
                        ba()
                    });
                    ba()
                }
            }

            function za() {
                if (!J.checkEngine()) return !1;
                C.AWE_getAvailablePlayers({
                        content_id: "94c2fd8fb9bc8f2fc71a2cbe9d4b866f227a0209"
                    },
                    function(c) {
                        if (c && c.players) {
                            var a, y = qa(),
                                d = y.find(".magicplayer--select-device-list");
                            for (a = 0; a < c.players.length; a++) {
                                var e = b("\x3cli\x3e" + c.players[a].name + "\x3c/li\x3e");
                                e.data("player-id", c.players[a].id);
                                e.data("player-type", c.players[a].type);
                                e.on("click", function() {
                                    var c = b(this).data("player-id"),
                                        a = b(this).data("player-type");
                                    J.getContentId(function(A) {
                                        A ? C.openInPlayer(A.content_id, c, a, function(A) {
                                            A && (b("#magicplayer--remember-player-selection").prop("checked") && r.rememberPlayer(c, a), ha(!1),
                                                t(), J.pauseOriginalPlayer())
                                        }) : S("Failed to load content. Please try again later.", {
                                            hideAfter: 3E3
                                        })
                                    });
                                    return !1
                                });
                                d.append(e)
                            }
                            A(y, 86 + 33 * c.players.length);
                            ha(!0);
                            y.on("mousemove", function() {
                                n()
                            });
                            y.on("mouseleave", function() {
                                n();
                                J.setTimer("form-hide", setTimeout(function() {
                                    ha(!1)
                                }, h.FORM_HIDE_TIMEOUT))
                            })
                        }
                    })
            }

            function A(b, c) {
                Ia.find(".back").empty().append(b);
                b = Ia;
                b.find(".front");
                var a = b.find(".back");
                b.data("front-height", 0);
                b.data("back-height", c);
                a.css({
                    "margin-top": -c / 2 + "px"
                })
            }

            function y(b, c) {
                function a() {
                    l ?
                        l >= h.MIN_SUPPORTED_ENGINE_VERSION ? b() : (Va("callOnEngineReady: old engine: version\x3d" + l), ra.open("OldEnginePopup")) : (Va("callOnEngineReady: engine is not running"), ra.open("MissingEnginePopup"))
                }
                if (R) a();
                else {
                    c = c || {};
                    var A = c.id || "task-" + Math.random();
                    ma.push({
                        id: A,
                        func: a
                    });
                    Va("callOnEngineReady: add tasks: id\x3d" + A + " qlen\x3d" + ma.length);
                    c.showMessage && S(x("Initializing Ace Stream application..."))
                }
            }

            function ib() {
                function b(b) {
                    J.getContentId(function(c) {
                        c ? (S(x("Opening video in player..."), {
                                hideAfter: 3E3
                            }),
                            C.openInPlayer(c.content_id, b.playerId, b.playerType, function(b) {
                                J.pauseOriginalPlayer()
                            })) : S(x("Cannot load content"), {
                            hideAfter: 3E3
                        })
                    })
                }
                var c = r.getRememberedPlayer();
                Va("current player: " + JSON.stringify(c));
                c ? b(c) : h.USE_TOP_MENU ? J.openTopMenu({
                    source: "play-button",
                    callback: function(c) {
                        c || b({
                            playerId: null,
                            playerType: "engine_api"
                        })
                    }
                }) : za()
            }

            function Va(b) {
                w.verbose("[DetachButton:" + Oa.getId() + "] " + b)
            }
            var Oa = this,
                T = null,
                H = null,
                da = null,
                Ia = null,
                wa = null,
                J = null,
                R = U,
                l = N,
                ma = [],
                Na = Ga++;
            a = a || {};
            E[Na] = this;
            this.getId =
                function() {
                    return Na
                };
            this.destroy = function() {
                T && T.remove();
                delete E[Na]
            };
            this.processEngineReadyQueue = function() {
                Va("processEngineReadyQueue: tasks in queue: " + ma.length);
                var b;
                for (b = 0; b < ma.length; b++) {
                    var c = ma[b];
                    Va("processEngineReadyQueue: execute task: id\x3d" + c.id);
                    c.func()
                }
                ma = []
            };
            this.showPlayerStartingMessage = function() {
                S(x("Opening video in player..."), {
                    hideAfter: 3E3
                })
            };
            this.setEngineVersion = function(b) {
                var c = "setEngineVersion: version\x3d" + b;
                w.log("[DetachButton:" + Oa.getId() + "] " + c);
                l = b;
                R = !0;
                Da()
            };
            (function() {
                J = new e(a);
                da = a.container;
                H = a.type;
                k.addStyleOnce("css_common", d("static/css/common.js"));
                k.addStyleOnce("css_detach_player", d("static/css/detach-player.js"));
                var A = "center" == H ? h.DETACH_BUTTON_CENTER_CLASS : h.DETACH_BUTTON_TOP_CLASS;
                if (0 < da.find("div." + h.DETACH_BUTTON_CLASS).size()) Va("createButton: already created");
                else {
                    T = b("\x3cdiv\x3e");
                    T.addClass(h.DETACH_BUTTON_CLASS);
                    T.addClass(A);
                    a.hideButton ? T.data("can-hide", "yes") : (T.addClass("visible"), T.data("can-hide", "no"));
                    k.isOpera() &&
                        T.addClass("opera");
                    Ia = b("\x3cdiv\x3e");
                    Ia.addClass("magicplayer--flip-container");
                    wa = b("\x3cdiv\x3e");
                    wa.addClass("acestream--center-container");
                    A = b("\x3cdiv\x3e").addClass("front");
                    var x = b("\x3cdiv\x3e").addClass("back");
                    if ("top" == H) {
                        da.append(T);
                        T.append('\x3cdiv class\x3d"magicplayer--detach-button-icon magicplayer--detach-button-icon-cast"\x3e\x3c/div\x3e');
                        T.append('\x3cdiv class\x3d"magicplayer--detach-button-icon magicplayer--detach-button-icon-play"\x3e' + c.SVG_PLAY_TOP + "\x3c/div\x3e");
                        var r =
                            b("\x3cdiv\x3e").addClass("magicplayer--actions-row");
                        r.append('\x3cdiv class\x3d"magicplayer--action-menu"\x3e' + c.SVG_MENU_24 + "\x3c/div\x3e");
                        T.append(r)
                    } else h.USE_TOP_MENU ? wa.append(T) : A.append(T), T.append('\x3cdiv class\x3d"magicplayer--detach-button-icon"\x3e\x3c/div\x3e'), r = b("\x3cdiv\x3e").addClass("magicplayer--menu-row").addClass("magicplayer--action-menu"), r.append('\x3cdiv class\x3d"magicplayer--menu-icon"\x3e' + c.SVG_MENU_18 + "\x3c/div\x3e"), r.append('\x3cdiv class\x3d"magicplayer--menu-text"\x3eAce Cast\x3c/div\x3e'),
                        T.append(r);
                    x.on("click", ".magicplayer--title-button-back", function() {
                        ha(!1)
                    });
                    Ia.append(A);
                    Ia.append(x);
                    T.find(".magicplayer--detach-button-icon").on("click", function() {
                        y(ib, {
                            id: "handlePlayClick",
                            showMessage: !0
                        })
                    });
                    if ("top" == H) T.find(".magicplayer--actions-row").on("click", function() {
                        y(La, {
                            id: "showMenu",
                            showMessage: !0
                        })
                    });
                    else T.find(".magicplayer--action-menu").on("click", function() {
                        y(La, {
                            id: "showMenu",
                            showMessage: !0
                        })
                    });
                    h.USE_TOP_MENU ? da.append(wa) : da.append(Ia);
                    A = a.overlays || [];
                    A.push(da);
                    if (a.hideButton)
                        for (x =
                            0; x < A.length; x++) r = A[x], "string" === typeof r && (r = b(r)), r.on("mousemove", function() {
                            L();
                            J.clearTimer("button-hide");
                            J.setTimer("button-hide", setTimeout(function() {
                                "true" != T.data("hovered") && t()
                            }, h.BUTTON_HIDE_TIMEOUT))
                        }), r.on("mouseleave", function() {
                            J.clearTimer("button-hide");
                            t()
                        });
                    T.on("mousemove", function() {
                        b(this).data("hovered", "true")
                    });
                    T.on("mouseleave", function() {
                        b(this).data("hovered", "false")
                    })
                }
            })()
        }
        var b = d("jquery"),
            k = d("Utils.js"),
            w = d("Logging.js"),
            D = d("vendor/mdl/checkbox.js"),
            h = d("Settings.js"),
            r = d("PlayerSettings.js"),
            e = d("PlayerContext.js"),
            c = d("Icons.js"),
            x = d("Translate.js"),
            C = d("EngineApi.js"),
            fa = d("Storage.js"),
            ra = d("PopupManager.js"),
            Ga = 0,
            E = {},
            U = !1,
            N = !1;
        n.exports = {
            createInstance: function(b) {
                return new a(b)
            },
            setEngineVersion: function(b) {
                N = b;
                U = !0;
                for (var c in E) E[c].setEngineVersion(b)
            },
            processEngineReadyQueue: function() {
                for (var b in E) E[b].processEngineReadyQueue(version)
            }
        }
    }, {
        "EngineApi.js": 2,
        "Icons.js": 5,
        "Logging.js": 6,
        "PlayerContext.js": 7,
        "PlayerSettings.js": 8,
        "PopupManager.js": 9,
        "Settings.js": 10,
        "Storage.js": 11,
        "Translate.js": 13,
        "Utils.js": 14,
        jquery: 53,
        "static/css/common.js": 17,
        "static/css/detach-player.js": 18,
        "vendor/mdl/checkbox.js": 48
    }],
    38: [function(d, n, t) {
        function a(a) {
            var c = this;
            D.call(this, a, r);
            this.open = function(a) {
                a = a || {};
                h.OPEN_POPUPS_IN_PARENT_WINDOW && b.isFrame() ? b.sendParentMessage("open-missing-engine-popup", a) : (c.wrap || (k.verbose("create missing engine popup"), b.addStyleOnce("css_common", d("static/css/common.js")), b.addStyleOnce("css_popup", d("static/css/popup.js")),
                    b.addStyleOnce("css_popup_missing_engine", d("static/css/popup_missing_engine.js")), c.content = w.load(d("static/html/popup_missing_engine.js")), c.wrapContent()), a.hideCloseButton ? b.safeHide(c.content.find(".acestream__popup-close")) : b.safeShow(c.content.find(".acestream__popup-close")), c.resize(), c.show())
            }
        }
        var b = d("Utils.js"),
            k = d("Logging.js"),
            w = d("Templates.js"),
            D = d("ui/BasePopup.js"),
            h = d("Settings.js"),
            r = {
                minWidth: 420,
                height: 360
            };
        b.inheritFrom(a, D);
        n.exports = a
    }, {
        "Logging.js": 6,
        "Settings.js": 10,
        "Templates.js": 12,
        "Utils.js": 14,
        "static/css/common.js": 17,
        "static/css/popup.js": 19,
        "static/css/popup_missing_engine.js": 20,
        "static/html/popup_missing_engine.js": 28,
        "ui/BasePopup.js": 36
    }],
    39: [function(d, n, t) {
        function a(a) {
            function c() {
                k.verbose("create missing userscript popup");
                b.addStyleOnce("css_common", d("static/css/common.js"));
                b.addStyleOnce("css_popup", d("static/css/popup.js"));
                b.addStyleOnce("css_popup_missing_userscript", d("static/css/popup_missing_userscript.js"));
                e.content = w.load(d("static/html/popup_missing_userscript.js"));
                e.content.on("click", ".acestream__action-install-userscript", function(c) {
                    c.preventDefault();
                    c = "http://awe.acestream.me/scripts/acestream/Ace_Cast?_r\x3d" + Math.random();
                    3011603 <= e.conf.engineVersion ? h.openUrl(c, function() {}) : b.openWindow(c, {
                        openNewTab: !0
                    })
                });
                e.wrapContent();
                if (e.conf.playerContainer) {
                    var c = b.getElementWidth(e.conf.playerContainer);
                    c && c < r.minWidth && e.content.addClass("small")
                }
            }
            var e = this;
            D.call(this, a, r);
            this.open = function(a, d) {
                a = a || {};
                d = d || {};
                e.conf.engineVersion = a.engineVersion;
                e.conf.playerContainer =
                    d.playerContainer;
                e.content || c();
                a.hideCloseButton ? b.safeHide(e.content.find(".acestream__popup-close")) : b.safeShow(e.content.find(".acestream__popup-close"));
                e.resize();
                e.show()
            }
        }
        var b = d("Utils.js"),
            k = d("Logging.js"),
            w = d("Templates.js"),
            D = d("ui/BasePopup.js"),
            h = d("EngineApi.js"),
            r = {
                minWidth: 490,
                height: 360
            };
        b.inheritFrom(a, D);
        n.exports = a
    }, {
        "EngineApi.js": 2,
        "Logging.js": 6,
        "Templates.js": 12,
        "Utils.js": 14,
        "static/css/common.js": 17,
        "static/css/popup.js": 19,
        "static/css/popup_missing_userscript.js": 21,
        "static/html/popup_missing_userscript.js": 29,
        "ui/BasePopup.js": 36
    }],
    40: [function(d, n, t) {
        function a(a) {
            b.call(this, a, k)
        }
        t = d("Utils.js");
        var b = d("ui/MissingUserscriptPopup.js"),
            k = {
                minWidth: 420,
                height: 360
            };
        t.inheritFrom(a, b);
        n.exports = a
    }, {
        "Utils.js": 14,
        "ui/MissingUserscriptPopup.js": 39
    }],
    41: [function(d, n, t) {
        function a(a) {
            var c = this;
            D.call(this, a, r);
            this.open = function(a) {
                a = a || {};
                h.OPEN_POPUPS_IN_PARENT_WINDOW && b.isFrame() ? b.sendParentMessage("open-old-engine-popup", a) : (c.wrap || (k.verbose("create old engine popup"),
                    b.addStyleOnce("css_common", d("static/css/common.js")), b.addStyleOnce("css_popup", d("static/css/popup.js")), b.addStyleOnce("css_popup_old_engine", d("static/css/popup_old_engine.js")), c.content = w.load(d("static/html/popup_old_engine.js")), c.wrapContent()), a.hideCloseButton ? b.safeHide(c.content.find(".acestream__popup-close")) : b.safeShow(c.content.find(".acestream__popup-close")), c.resize(), c.show())
            }
        }
        var b = d("Utils.js"),
            k = d("Logging.js"),
            w = d("Templates.js"),
            D = d("ui/BasePopup.js"),
            h = d("Settings.js"),
            r = {
                minWidth: 420,
                height: 360
            };
        b.inheritFrom(a, D);
        n.exports = a
    }, {
        "Logging.js": 6,
        "Settings.js": 10,
        "Templates.js": 12,
        "Utils.js": 14,
        "static/css/common.js": 17,
        "static/css/popup.js": 19,
        "static/css/popup_old_engine.js": 22,
        "static/html/popup_old_engine.js": 30,
        "ui/BasePopup.js": 36
    }],
    42: [function(d, n, t) {
        function a(c) {
            function a() {
                w.verbose("create playlist add popup");
                b.addStyleOnce("css_common", d("static/css/common.js"));
                b.addStyleOnce("css_popup", d("static/css/popup.js"));
                b.addStyleOnce("css_popup_playlist_add",
                    d("static/css/popup_playlist_add.js"));
                b.addStyleOnce("css_tooltip", d("static/css/tooltip.js"));
                C.content = D.load(d("static/html/popup_playlist_add.js"));
                C.content.find(".acestream__action-playlist-add").on("click", function(b) {
                    b.preventDefault();
                    var c = C.content.find(".acestream__input-tags").val(),
                        a = C.content.find(".acestream__input-description").val(),
                        d = C.wrap.data("poster");
                    b = {
                        content_id: C.wrap.data("content-id"),
                        title: C.content.find(".acestream__input-title").val(),
                        category: C.content.find(".acestream__input-category").val(),
                        auto_search: !1
                    };
                    if (!b.content_id) throw "missing content id";
                    a && a.length && (b.description = a);
                    d && d.length && (b.poster = d);
                    if (c && c.length) {
                        a = [];
                        c = c.split(/[,.;]+/);
                        for (d = 0; d < c.length; d++) {
                            var e = c[d].trim();
                            0 < e.length && a.push(e)
                        }
                        b.tags = JSON.stringify(a)
                    }
                    k.AWE_addToPlaylist(b, function(b) {
                        C.hide()
                    })
                });
                C.wrapContent()
            }
            var C = this;
            h.call(this, c, e);
            this.open = function(c) {
                c = c || {};
                if (r.OPEN_POPUPS_IN_PARENT_WINDOW && b.isFrame()) b.sendParentMessage("open-playlist-add-popup", c);
                else {
                    C.wrap || a();
                    c.hideCloseButton ? b.safeHide(C.content.find(".acestream__popup-close")) :
                        b.safeShow(C.content.find(".acestream__popup-close"));
                    var d = c.title || "",
                        e = c.contentId;
                    c = c.poster;
                    C.wrap.find(".acestream__input-title").val(d);
                    C.wrap.find(".acestream__input-category option[value\x3dmovies]").prop("selected", !0);
                    C.wrap.find(".acestream__input-tags").val("");
                    C.wrap.find(".acestream__input-description").val("");
                    c ? C.wrap.find(".acestream__poster").attr("src", c) : C.wrap.find(".acestream__form-row-poster").hide();
                    C.wrap.data("content-id", e);
                    C.wrap.data("title", d);
                    C.wrap.data("poster", c);
                    C.resize();
                    C.show()
                }
            }
        }
        var b = d("Utils.js"),
            k = d("EngineApi.js"),
            w = d("Logging.js"),
            D = d("Templates.js"),
            h = d("ui/BasePopup.js"),
            r = d("Settings.js"),
            e = {
                minWidth: 384,
                height: "auto"
            };
        b.inheritFrom(a, h);
        n.exports = a
    }, {
        "EngineApi.js": 2,
        "Logging.js": 6,
        "Settings.js": 10,
        "Templates.js": 12,
        "Utils.js": 14,
        "static/css/common.js": 17,
        "static/css/popup.js": 19,
        "static/css/popup_playlist_add.js": 23,
        "static/css/tooltip.js": 26,
        "static/html/popup_playlist_add.js": 31,
        "ui/BasePopup.js": 36
    }],
    43: [function(d, n, t) {
        function a(a) {
            var x =
                this;
            e.call(this, a, c);
            D.addHook(D.HOOK_PLAYLIST_ADD_IFRAME_CLOSED, function() {
                e.prototype.hide.call(x)
            });
            this.open = function(c) {
                c = c || {};
                if (k.OPEN_POPUPS_IN_PARENT_WINDOW && w.isFrame()) w.sendParentMessage("open-playlist-add-popup", c);
                else {
                    x.wrap || (h.verbose("create playlist add iframe popup"), w.addStyleOnce("css_common", d("static/css/common.js")), w.addStyleOnce("css_popup", d("static/css/popup.js")), x.content = r.load(d("static/html/popup_playlist_add_iframe.js")), x.wrapContent());
                    var a = c.title || "",
                        e = c.contentId;
                    c = c.poster;
                    D.addToPlaylistIframe({
                        container: x.content.get(0),
                        content_id: e,
                        title: a,
                        poster: c,
                        category: "movies"
                    });
                    a = b(window).height();
                    e = x.conf.minTopMargin || 0;
                    x.conf.height = a ? Math.min(445, a - e) : 445;
                    x.resize();
                    x.show()
                }
            };
            this.hide = function() {
                e.prototype.hide.call(this);
                D.hidePlaylistAddIframe()
            }
        }
        var b = d("jquery"),
            k = d("Settings.js"),
            w = d("Utils.js"),
            D = d("EngineApi.js"),
            h = d("Logging.js"),
            r = d("Templates.js"),
            e = d("ui/BasePopup.js"),
            c = {
                minWidth: 650,
                height: 240
            };
        w.inheritFrom(a, e);
        n.exports = a
    }, {
        "EngineApi.js": 2,
        "Logging.js": 6,
        "Settings.js": 10,
        "Templates.js": 12,
        "Utils.js": 14,
        jquery: 53,
        "static/css/common.js": 17,
        "static/css/popup.js": 19,
        "static/html/popup_playlist_add_iframe.js": 32,
        "ui/BasePopup.js": 36
    }],
    44: [function(d, n, t) {
        function a(a) {
            function n() {
                w.verbose("create select player popup");
                k.addStyleOnce("css_common", d("static/css/common.js"));
                k.addStyleOnce("css_popup", d("static/css/popup.js"));
                k.addStyleOnce("css_popup_select_player", d("static/css/popup_select_player.js"));
                k.addStyleOnce("css_tooltip", d("static/css/tooltip.js"));
                E.content = D.load(d("static/html/popup_select_player.js"));
                new e(E.content.find("#acestream__remember-player").get(0));
                E.content.find("#acestream__input-remember-player").on("change", function() {
                    var a = b(this).prop("checked");
                    r.setValue(c.VAR_REMEMBER_PLAYER_STATE, a ? "true" : "false", {
                        sourceFrame: E.conf.sourceFrame
                    });
                    a || (x.clearRememberedPlayer({
                        sourceFrame: E.conf.sourceFrame
                    }), E.conf.sourceFrame && k.sendFrameMessage(E.conf.sourceFrame, "clear-remembered-player"))
                });
                E.wrapContent()
            }
            var E = this;
            C.call(this,
                a, fa);
            this.open = function(a) {
                a = a || {};
                E.conf.sourceFrame = a.sourceFrame;
                if (c.OPEN_POPUPS_IN_PARENT_WINDOW && k.isFrame()) k.sendParentMessage("open-select-player-popup", a);
                else {
                    E.wrap || n();
                    var d = a.title || "";
                    E.wrap.data("content-id", a.contentId);
                    E.wrap.data("title", d);
                    a.hideCloseButton ? k.safeHide(E.content.find(".acestream__popup-close")) : k.safeShow(E.content.find(".acestream__popup-close"));
                    d = E.wrap.find("#acestream__input-remember-player");
                    var e = r.getValue(c.VAR_REMEMBER_PLAYER_STATE);
                    e = "false" != e;
                    d.prop("checked",
                        e);
                    e ? d.parent().addClass("is-checked") : d.parent().removeClass("is-checked");
                    var C = E.wrap.find(".acestream__players-list");
                    C.empty();
                    h.AWE_getAvailablePlayers({
                        content_id: "94c2fd8fb9bc8f2fc71a2cbe9d4b866f227a0209"
                    }, function(c) {
                        if (c && c.players) {
                            var d;
                            for (d = 0; d < c.players.length; d++) {
                                var e = b("\x3cli\x3e" + c.players[d].name + "\x3c/li\x3e");
                                e.data("player-id", c.players[d].id);
                                e.data("player-type", c.players[d].type);
                                e.on("click", function() {
                                    var c = b(this).data("player-id"),
                                        d = b(this).data("player-type");
                                    h.openInPlayer(E.wrap.data("content-id"),
                                        c, d,
                                        function(e) {
                                            e && (b("#acestream__input-remember-player").prop("checked") && (x.rememberPlayer(c, d, {
                                                sourceFrame: E.conf.sourceFrame
                                            }), a.sourceFrame && k.sendFrameMessage(a.sourceFrame, "remember-player", {
                                                playerId: c,
                                                playerType: d
                                            })), E.emit("player-selected"), a.sourceFrame && k.sendFrameMessage(a.sourceFrame, "external-player-started", {
                                                playerId: a.playerId
                                            }), E.hide())
                                        });
                                    return !1
                                });
                                C.append(e)
                            }
                            E.resize();
                            E.show()
                        }
                    })
                }
            }
        }
        var b = d("jquery"),
            k = d("Utils.js"),
            w = d("Logging.js"),
            D = d("Templates.js"),
            h = d("EngineApi.js"),
            r = d("Storage.js"),
            e = d("vendor/mdl/checkbox.js"),
            c = d("Settings.js"),
            x = d("PlayerSettings.js"),
            C = d("ui/BasePopup.js"),
            fa = {
                minWidth: 300,
                height: "auto"
            };
        k.inheritFrom(a, C);
        n.exports = a
    }, {
        "EngineApi.js": 2,
        "Logging.js": 6,
        "PlayerSettings.js": 8,
        "Settings.js": 10,
        "Storage.js": 11,
        "Templates.js": 12,
        "Utils.js": 14,
        jquery: 53,
        "static/css/common.js": 17,
        "static/css/popup.js": 19,
        "static/css/popup_select_player.js": 24,
        "static/css/tooltip.js": 26,
        "static/html/popup_select_player.js": 33,
        "ui/BasePopup.js": 36,
        "vendor/mdl/checkbox.js": 48
    }],
    45: [function(d, n, t) {
        function a(a) {
            function C() {
                function c() {
                    var b = E.wrap.data("content-id"),
                        c = E.content.find(".acestream__embed-video-autoplay").prop("checked") ? 1 : 0,
                        a = E.content.find(".acestream__embed-video-size option:selected"),
                        d = a.data("width");
                    a = a.data("height");
                    E.content.find(".acestream__share-embed-code").val('\x3ciframe src\x3d"//embed.acestream.net/player/' + b + "?autoplay\x3d" + c + '" width\x3d"' + d + '" height\x3d"' + a + '" /\x3e')
                }
                E.content.find(".acestream__yt-uix-tabs .acestream__yt-uix-button").on("click",
                    function(c) {
                        c.preventDefault();
                        b(".acestream__yt-uix-tabs .acestream__yt-uix-button").removeClass("acestream__yt-uix-button-toggled");
                        b(this).addClass("acestream__yt-uix-button-toggled");
                        c = b(this).data("tab");
                        w.safeHide(b(".acestream__share-panel-container"));
                        w.safeShow(b("." + c + "-container"))
                    });
                E.content.find(".acestream__yt-uix-button-expander.acestream__yt-uix-expander-collapsed-body").on("click", function(c) {
                    c.preventDefault();
                    b(this).parent().removeClass("acestream__yt-uix-expander-collapsed")
                });
                E.content.find(".acestream__yt-uix-button-expander.acestream__yt-uix-expander-body").on("click", function(c) {
                    c.preventDefault();
                    b(this).parent().addClass("acestream__yt-uix-expander-collapsed")
                });
                E.content.on("click", ".acestream__share-service-button", function(c) {
                    c.preventDefault();
                    var a = b(this).data("service-name");
                    c = b(this).data("popup-width");
                    var d = b(this).data("popup-height"),
                        e = E.wrap.data("share-url"),
                        h = E.wrap.data("title");
                    a = w.makeShareUrl(a, e, h);
                    w.openWindow(a, {
                        height: d,
                        width: c,
                        scrollbars: !0
                    })
                });
                E.content.on("mouseenter", ".acestream__tooltip", function() {
                    var c = b(this).attr("title"),
                        a = b(this).data("tooltip-offset");
                    c && b(this).removeAttr("title").attr("aria-label", c).addClass("acestream__tooltipped acestream__tooltipped-n acestream__tooltipped-x" + a)
                });
                E.content.on("mouseleave", ".acestream__tooltip", function() {
                    if (b(this).hasClass("acestream__tooltip")) {
                        var c = b(this).attr("aria-label"),
                            a = b(this).data("tooltip-offset");
                        b(this).removeAttr("aria-label").attr("title", c).removeClass("acestream__tooltipped acestream__tooltipped-n acestream__tooltipped-x" +
                            a)
                    }
                });
                E.content.on("change", ".acestream__embed-video-size", function() {
                    c()
                });
                E.content.on("change", ".acestream__embed-video-autoplay", function() {
                    c()
                })
            }

            function n() {
                var c = new k(".acestream__action-copy");
                c.on("success", function(c) {
                    var a = b(c.trigger);
                    a.attr("aria-label", "Copied").addClass("acestream__tooltipped acestream__tooltipped-n acestream__tooltipped-x20");
                    setTimeout(function() {
                        a.removeAttr("aria-label").removeClass("acestream__tooltipped acestream__tooltipped-n acestream__tooltipped-x20")
                    }, 5E3)
                });
                c.on("error", function(c) {
                    var a = b(c.trigger);
                    a.attr("aria-label", "Press Ctrl-C").addClass("acestream__tooltipped acestream__tooltipped-n acestream__tooltipped-x20");
                    setTimeout(function() {
                        a.removeAttr("aria-label").removeClass("acestream__tooltipped acestream__tooltipped-n acestream__tooltipped-x20")
                    }, 5E3)
                })
            }

            function t() {
                D.verbose("create share popup");
                w.addStyleOnce("css_common", d("static/css/common.js"));
                w.addStyleOnce("css_popup", d("static/css/popup.js"));
                w.addStyleOnce("css_popup_share", d("static/css/popup_share.js"));
                w.addStyleOnce("css_tooltip", d("static/css/tooltip.js"));
                E.content = h.load(d("static/html/popup_share.js"));
                E.content.find("button.acestream__share-service-button").each(function() {
                    b(this).attr("title", r(b(this).attr("title")))
                });
                C();
                n();
                E.wrapContent()
            }
            var E = this;
            e.call(this, a, x);
            this.open = function(b) {
                b = b || {};
                if (c.OPEN_POPUPS_IN_PARENT_WINDOW && w.isFrame()) w.sendParentMessage("open-share-popup", b);
                else {
                    E.wrap || t();
                    var a = b.title || "",
                        d = b.contentId,
                        e = "http://avod.me/play/" + d;
                    b.hideCloseButton ? w.safeHide(E.content.find(".acestream__popup-close")) :
                        w.safeShow(E.content.find(".acestream__popup-close"));
                    E.wrap.find(".acestream__share-web-player-link").val(e);
                    E.wrap.find(".acestream__share-embed-code").val('\x3ciframe src\x3d"//embed.acestream.net/player/' + d + '?autoplay\x3d1" width\x3d"560" height\x3d"315" /\x3e');
                    E.wrap.find(".acestream__share-acestream-link").val("acestream://" + d);
                    E.wrap.find(".acestream__share-content-id").val(d);
                    E.wrap.data("content-id", d);
                    E.wrap.data("share-url", e);
                    E.wrap.data("title", a);
                    E.resize();
                    E.show()
                }
            }
        }
        var b = d("jquery"),
            k = d("vendor/clipboard.min.js"),
            w = d("Utils.js"),
            D = d("Logging.js"),
            h = d("Templates.js"),
            r = d("Translate.js"),
            e = d("ui/BasePopup.js"),
            c = d("Settings.js"),
            x = {
                minWidth: 500,
                height: 200
            };
        w.inheritFrom(a, e);
        n.exports = a
    }, {
        "Logging.js": 6,
        "Settings.js": 10,
        "Templates.js": 12,
        "Translate.js": 13,
        "Utils.js": 14,
        jquery: 53,
        "static/css/common.js": 17,
        "static/css/popup.js": 19,
        "static/css/popup_share.js": 25,
        "static/css/tooltip.js": 26,
        "static/html/popup_share.js": 34,
        "ui/BasePopup.js": 36,
        "vendor/clipboard.min.js": 47
    }],
    46: [function(d,
        n, t) {
        function a() {
            w.verbose("create top menu");
            k.addStyleOnce("css_top_menu", d("static/css/top_menu.js"));
            var a = e.load(d("static/html/top_menu.js"));
            k.safeHide(a);
            a.find(".acestream__action-select-player").attr("title", D("Select Player")).on("click", function(b) {
                b.preventDefault();
                C ? C.openSelectPlayerPopup(function() {
                    r.setValue(h.VAR_LAST_OPEN_POPUP, "SelectPlayerPopup")
                }) : c.open("SelectPlayerPopup", {
                    title: fa.title,
                    contentId: fa.contentId,
                    poster: fa.poster,
                    playerId: fa.playerId,
                    sourceFrame: fa.sourceFrame,
                    hideCloseButton: !0,
                    minTopMargin: 50
                })
            });
            a.find(".acestream__action-playlist-add").attr("title", D("Add to playlist")).on("click", function(b) {
                b.preventDefault();
                C ? C.openPlaylistAddPopup(function() {
                    r.setValue(h.VAR_LAST_OPEN_POPUP, "PlaylistAddPopup")
                }) : c.open("PlaylistAddPopup", {
                    title: fa.title,
                    contentId: fa.contentId,
                    poster: fa.poster,
                    sourceFrame: fa.sourceFrame,
                    hideCloseButton: !0,
                    minTopMargin: 50
                })
            });
            a.find(".acestream__action-share").attr("title", D("Share")).on("click", function(b) {
                b.preventDefault();
                C ?
                    C.openSharePopup(function() {
                        r.setValue(h.VAR_LAST_OPEN_POPUP, "SharePopup")
                    }) : c.open("SharePopup", {
                        title: fa.title,
                        contentId: fa.contentId,
                        poster: fa.poster,
                        sourceFrame: fa.sourceFrame,
                        hideCloseButton: !0,
                        minTopMargin: 50
                    })
            });
            a.find(".acestream__menu-close").attr("title", D("Close")).on("click", function(b) {
                b.preventDefault();
                k.safeHide(a);
                c.hideAll()
            });
            c.addEventListener("all-popups-closed", function() {
                k.safeHide(a)
            });
            b("body").append(a);
            return a
        }
        var b = d("jquery"),
            k = d("Utils.js"),
            w = d("Logging.js"),
            D = d("Translate.js"),
            h = d("Settings.js"),
            r = d("Storage.js"),
            e = d("Templates.js"),
            c = d("PopupManager.js"),
            x = null,
            C = null,
            fa = null;
        n.exports = {
            open: function(b, d, e) {
                function D(b) {
                    "function" === typeof e.callback && e.callback(b)
                }
                d = d || {};
                e = e || {};
                C = b;
                fa = d;
                b = !1;
                h.OPEN_POPUPS_FROM_USERSCRIPT ? b = !0 : h.OPEN_POPUPS_IN_PARENT_WINDOW && k.isFrame() && (b = !0);
                if (b) k.sendParentMessage("open-top-menu", d, function(b, a) {
                    w.verbose("TopMenu:open: got frame response: response\x3d" + a + " err\x3d" + b);
                    if (b) {
                        b = {
                            engineVersion: d.engineVersion
                        };
                        a = {};
                        if ("play-button" ===
                            d.source) {
                            var h = "MissingUserscriptPopupInPlayer";
                            a.playerContainer = e.playerContainer
                        } else h = "MissingUserscriptPopup";
                        c.open(h, b, a);
                        D(!1)
                    } else c.close("MissingUserscriptPopup"), D(!0)
                });
                else {
                    x || (x = a());
                    var n = x;
                    if (!n) return D(!1), !1;
                    k.safeShow(n, "flex");
                    h.TOP_MENU_REMEMBER_LAST_POPUP ? (b = r.getValue(h.VAR_LAST_OPEN_POPUP)) || (b = "SelectPlayerPopup") : b = "SelectPlayerPopup";
                    C ? C.openPopup(b, function(b) {
                        b || k.safeHide(n)
                    }) : c.open(b, {
                        title: d.title,
                        contentId: d.contentId,
                        poster: d.poster,
                        playerId: d.playerId,
                        sourceFrame: d.sourceFrame,
                        hideCloseButton: !0,
                        minTopMargin: 50
                    });
                    D(!0)
                }
                return !0
            }
        }
    }, {
        "Logging.js": 6,
        "PopupManager.js": 9,
        "Settings.js": 10,
        "Storage.js": 11,
        "Templates.js": 12,
        "Translate.js": 13,
        "Utils.js": 14,
        jquery: 53,
        "static/css/top_menu.js": 27,
        "static/html/top_menu.js": 35
    }],
    47: [function(d, n, t) {
        (function(a) {
            ! function(b) {
                "object" == typeof t && "undefined" != typeof n ? n.exports = b() : "function" == typeof define && define.amd ? define([], b) : ("undefined" != typeof window ? window : "undefined" != typeof a ? a : "undefined" != typeof self ? self : this).Clipboard =
                    b()
            }(function() {
                return function h(a, w, D) {
                    function r(c, k) {
                        if (!w[c]) {
                            if (!a[c]) {
                                var x = "function" == typeof d && d;
                                if (!k && x) return x(c, !0);
                                if (e) return e(c, !0);
                                k = Error("Cannot find module '" + c + "'");
                                throw k.code = "MODULE_NOT_FOUND", k;
                            }
                            k = w[c] = {
                                exports: {}
                            };
                            a[c][0].call(k.exports, function(d) {
                                var e = a[c][1][d];
                                return r(e ? e : d)
                            }, k, k.exports, h, a, w, D)
                        }
                        return w[c].exports
                    }
                    for (var e = "function" == typeof d && d, c = 0; c < D.length; c++) r(D[c]);
                    return r
                }({
                    1: [function(a, d, D) {
                        try {
                            var h = a("matches-selector")
                        } catch (r) {
                            h = a("component-matches-selector")
                        }
                        d.exports =
                            function(a, d, c) {
                                for (c = c || document.documentElement; a && a !== c;) {
                                    if (h(a, d)) return a;
                                    a = a.parentNode
                                }
                                return h(a, d) ? a : null
                            }
                    }, {
                        "component-matches-selector": 2,
                        "matches-selector": 2
                    }],
                    2: [function(a, d, D) {
                        try {
                            var h = a("query")
                        } catch (e) {
                            h = a("component-query")
                        }
                        a = Element.prototype;
                        var r = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
                        d.exports = function(a, c) {
                            if (!a || 1 !== a.nodeType) return !1;
                            if (r) return r.call(a, c);
                            c = h.all(c, a.parentNode);
                            for (var d = 0; d < c.length; ++d)
                                if (c[d] ==
                                    a) return !0;
                            return !1
                        }
                    }, {
                        "component-query": 3,
                        query: 3
                    }],
                    3: [function(a, d, D) {
                        function h(a, d) {
                            return d.querySelector(a)
                        }
                        D = d.exports = function(a, d) {
                            return d = d || document, h(a, d)
                        };
                        D.all = function(a, d) {
                            return d = d || document, d.querySelectorAll(a)
                        };
                        D.engine = function(a) {
                            if (!a.one) throw Error(".one callback required");
                            if (!a.all) throw Error(".all callback required");
                            return h = a.one, D.all = a.all, D
                        }
                    }, {}],
                    4: [function(a, d, D) {
                        function h(a, c, d, h) {
                            return function(d) {
                                d.delegateTarget = r(d.target, c, !0);
                                d.delegateTarget && h.call(a,
                                    d)
                            }
                        }
                        var r = a("component-closest");
                        d.exports = function(a, c, d, r, k) {
                            var e = h.apply(this, arguments);
                            return a.addEventListener(d, e, k), {
                                destroy: function() {
                                    a.removeEventListener(d, e, k)
                                }
                            }
                        }
                    }, {
                        "component-closest": 1
                    }],
                    5: [function(a, d, D) {
                        D.node = function(a) {
                            return void 0 !== a && a instanceof HTMLElement && 1 === a.nodeType
                        };
                        D.nodeList = function(a) {
                            var d = Object.prototype.toString.call(a);
                            return void 0 !== a && ("[object NodeList]" === d || "[object HTMLCollection]" === d) && "length" in a && (0 === a.length || D.node(a[0]))
                        };
                        D.string = function(a) {
                            return "string" ==
                                typeof a || a instanceof String
                        };
                        D.fn = function(a) {
                            return "[object Function]" === Object.prototype.toString.call(a)
                        }
                    }, {}],
                    6: [function(a, d, D) {
                        function h(a, c, d) {
                            return a.addEventListener(c, d), {
                                destroy: function() {
                                    a.removeEventListener(c, d)
                                }
                            }
                        }

                        function r(a, c, d) {
                            return Array.prototype.forEach.call(a, function(a) {
                                a.addEventListener(c, d)
                            }), {
                                destroy: function() {
                                    Array.prototype.forEach.call(a, function(a) {
                                        a.removeEventListener(c, d)
                                    })
                                }
                            }
                        }
                        var e = a("./is"),
                            c = a("delegate");
                        d.exports = function(a, d, k) {
                            if (!a && !d && !k) throw Error("Missing required arguments");
                            if (!e.string(d)) throw new TypeError("Second argument must be a String");
                            if (!e.fn(k)) throw new TypeError("Third argument must be a Function");
                            if (e.node(a)) return h(a, d, k);
                            if (e.nodeList(a)) return r(a, d, k);
                            if (e.string(a)) return c(document.body, a, d, k);
                            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                        }
                    }, {
                        "./is": 5,
                        delegate: 4
                    }],
                    7: [function(a, d, D) {
                        d.exports = function(a) {
                            if ("SELECT" === a.nodeName) a.focus(), a = a.value;
                            else if ("INPUT" === a.nodeName || "TEXTAREA" === a.nodeName) a.focus(),
                                a.setSelectionRange(0, a.value.length), a = a.value;
                            else {
                                a.hasAttribute("contenteditable") && a.focus();
                                var d = window.getSelection(),
                                    e = document.createRange();
                                e.selectNodeContents(a);
                                d.removeAllRanges();
                                d.addRange(e);
                                a = d.toString()
                            }
                            return a
                        }
                    }, {}],
                    8: [function(a, d, D) {
                        function h() {}
                        h.prototype = {
                            on: function(a, d, c) {
                                var e = this.e || (this.e = {});
                                return (e[a] || (e[a] = [])).push({
                                    fn: d,
                                    ctx: c
                                }), this
                            },
                            once: function(a, d, c) {
                                function e() {
                                    h.off(a, e);
                                    d.apply(c, arguments)
                                }
                                var h = this;
                                return e._ = d, this.on(a, e, c)
                            },
                            emit: function(a) {
                                var d = [].slice.call(arguments, 1),
                                    c = ((this.e || (this.e = {}))[a] || []).slice(),
                                    h = 0,
                                    r = c.length;
                                for (h; h < r; h++) c[h].fn.apply(c[h].ctx, d);
                                return this
                            },
                            off: function(a, d) {
                                var c = this.e || (this.e = {}),
                                    e = c[a],
                                    h = [];
                                if (e && d)
                                    for (var r = 0, k = e.length; r < k; r++) e[r].fn !== d && e[r].fn._ !== d && h.push(e[r]);
                                return h.length ? c[a] = h : delete c[a], this
                            }
                        };
                        d.exports = h
                    }, {}],
                    9: [function(a, d, D) {
                        ! function(h, r) {
                            if ("undefined" != typeof D) r(d, a("select"));
                            else {
                                var e = {
                                    exports: {}
                                };
                                r(e, h.select);
                                h.clipboardAction = e.exports
                            }
                        }(this, function(a, d) {
                            $jscomp.initSymbol();
                            $jscomp.initSymbol();
                            $jscomp.initSymbolIterator();
                            var e = d && d.__esModule ? d : {
                                    default: d
                                },
                                c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                                    return typeof a
                                } : function(a) {
                                    $jscomp.initSymbol();
                                    $jscomp.initSymbol();
                                    return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
                                },
                                h = function() {
                                    function a(a, c) {
                                        for (var d = 0; d < c.length; d++) {
                                            var e = c[d];
                                            e.enumerable = e.enumerable || !1;
                                            e.configurable = !0;
                                            "value" in e && (e.writable = !0);
                                            Object.defineProperty(a, e.key, e)
                                        }
                                    }
                                    return function(c,
                                        d, e) {
                                        return d && a(c.prototype, d), e && a(c, e), c
                                    }
                                }();
                            d = function() {
                                function a(c) {
                                    if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
                                    this.resolveOptions(c);
                                    this.initSelection()
                                }
                                return a.prototype.resolveOptions = function() {
                                        var a = 0 >= arguments.length || void 0 === arguments[0] ? {} : arguments[0];
                                        this.action = a.action;
                                        this.emitter = a.emitter;
                                        this.target = a.target;
                                        this.text = a.text;
                                        this.trigger = a.trigger;
                                        this.selectedText = ""
                                    }, a.prototype.initSelection = function() {
                                        this.text ? this.selectFake() :
                                            this.target && this.selectTarget()
                                    }, a.prototype.selectFake = function() {
                                        var a = this,
                                            c = "rtl" == document.documentElement.getAttribute("dir");
                                        this.removeFake();
                                        this.fakeHandlerCallback = function() {
                                            return a.removeFake()
                                        };
                                        this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0;
                                        this.fakeElem = document.createElement("textarea");
                                        this.fakeElem.style.fontSize = "12pt";
                                        this.fakeElem.style.border = "0";
                                        this.fakeElem.style.padding = "0";
                                        this.fakeElem.style.margin = "0";
                                        this.fakeElem.style.position =
                                            "absolute";
                                        this.fakeElem.style[c ? "right" : "left"] = "-9999px";
                                        c = window.pageYOffset || document.documentElement.scrollTop;
                                        this.fakeElem.addEventListener("focus", window.scrollTo(0, c));
                                        this.fakeElem.style.top = c + "px";
                                        this.fakeElem.setAttribute("readonly", "");
                                        this.fakeElem.value = this.text;
                                        document.body.appendChild(this.fakeElem);
                                        this.selectedText = (0, e.default)(this.fakeElem);
                                        this.copyText()
                                    }, a.prototype.removeFake = function() {
                                        this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback),
                                            this.fakeHandler = null, this.fakeHandlerCallback = null);
                                        this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                                    }, a.prototype.selectTarget = function() {
                                        this.selectedText = (0, e.default)(this.target);
                                        this.copyText()
                                    }, a.prototype.copyText = function() {
                                        var a = void 0;
                                        try {
                                            a = document.execCommand(this.action)
                                        } catch (ra) {
                                            a = !1
                                        }
                                        this.handleResult(a)
                                    }, a.prototype.handleResult = function(a) {
                                        this.emitter.emit(a ? "success" : "error", {
                                            action: this.action,
                                            text: this.selectedText,
                                            trigger: this.trigger,
                                            clearSelection: this.clearSelection.bind(this)
                                        })
                                    },
                                    a.prototype.clearSelection = function() {
                                        this.target && this.target.blur();
                                        window.getSelection().removeAllRanges()
                                    }, a.prototype.destroy = function() {
                                        this.removeFake()
                                    }, h(a, [{
                                        key: "action",
                                        set: function() {
                                            if (this._action = 0 >= arguments.length || void 0 === arguments[0] ? "copy" : arguments[0], "copy" !== this._action && "cut" !== this._action) throw Error('Invalid "action" value, use either "copy" or "cut"');
                                        },
                                        get: function() {
                                            return this._action
                                        }
                                    }, {
                                        key: "target",
                                        set: function(a) {
                                            if (void 0 !== a) {
                                                if (!a || "object" !== ("undefined" == typeof a ?
                                                        "undefined" : c(a)) || 1 !== a.nodeType) throw Error('Invalid "target" value, use a valid Element');
                                                if ("copy" === this.action && a.hasAttribute("disabled")) throw Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                                if ("cut" === this.action && (a.hasAttribute("readonly") || a.hasAttribute("disabled"))) throw Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                                this._target = a
                                            }
                                        },
                                        get: function() {
                                            return this._target
                                        }
                                    }]), a
                            }();
                            a.exports = d
                        })
                    }, {
                        select: 7
                    }],
                    10: [function(a, d, D) {
                        ! function(h, r) {
                            if ("undefined" != typeof D) r(d, a("./clipboard-action"), a("tiny-emitter"), a("good-listener"));
                            else {
                                var e = {
                                    exports: {}
                                };
                                r(e, h.clipboardAction, h.tinyEmitter, h.goodListener);
                                h.clipboard = e.exports
                            }
                        }(this, function(a, d, e, c) {
                            function h(a) {
                                return a && a.__esModule ? a : {
                                    default: a
                                }
                            }

                            function r(a, c) {
                                if ("function" != typeof c && null !== c) throw new TypeError("Super expression must either be null or a function, not " + typeof c);
                                a.prototype = Object.create(c && c.prototype, {
                                    constructor: {
                                        value: a,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                });
                                c && (Object.setPrototypeOf ? Object.setPrototypeOf(a, c) : a.__proto__ = c)
                            }

                            function k(a, c) {
                                a = "data-clipboard-" + a;
                                if (c.hasAttribute(a)) return c.getAttribute(a)
                            }
                            var w = h(d);
                            d = h(e);
                            var D = h(c);
                            c = function(a) {
                                function c(d, e) {
                                    if (!(this instanceof c)) throw new TypeError("Cannot call a class as a function");
                                    var h = a.call(this);
                                    if (!this) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    h = !h || "object" != typeof h && "function" !=
                                        typeof h ? this : h;
                                    return h.resolveOptions(e), h.listenClick(d), h
                                }
                                return r(c, a), c.prototype.resolveOptions = function() {
                                        var a = 0 >= arguments.length || void 0 === arguments[0] ? {} : arguments[0];
                                        this.action = "function" == typeof a.action ? a.action : this.defaultAction;
                                        this.target = "function" == typeof a.target ? a.target : this.defaultTarget;
                                        this.text = "function" == typeof a.text ? a.text : this.defaultText
                                    }, c.prototype.listenClick = function(a) {
                                        var c = this;
                                        this.listener = (0, D.default)(a, "click", function(a) {
                                            return c.onClick(a)
                                        })
                                    }, c.prototype.onClick =
                                    function(a) {
                                        a = a.delegateTarget || a.currentTarget;
                                        this.clipboardAction && (this.clipboardAction = null);
                                        this.clipboardAction = new w.default({
                                            action: this.action(a),
                                            target: this.target(a),
                                            text: this.text(a),
                                            trigger: a,
                                            emitter: this
                                        })
                                    }, c.prototype.defaultAction = function(a) {
                                        return k("action", a)
                                    }, c.prototype.defaultTarget = function(a) {
                                        if (a = k("target", a)) return document.querySelector(a)
                                    }, c.prototype.defaultText = function(a) {
                                        return k("text", a)
                                    }, c.prototype.destroy = function() {
                                        this.listener.destroy();
                                        this.clipboardAction &&
                                            (this.clipboardAction.destroy(), this.clipboardAction = null)
                                    }, c
                            }(d.default);
                            a.exports = c
                        })
                    }, {
                        "./clipboard-action": 9,
                        "good-listener": 6,
                        "tiny-emitter": 8
                    }]
                }, {}, [10])(10)
            })
        }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
    }, {}],
    48: [function(d, n, t) {
        (function() {
            var a = function(a) {
                this.element_ = a;
                this.init()
            };
            a.prototype.Constant_ = {
                TINY_TIMEOUT: .001
            };
            a.prototype.CssClasses_ = {
                INPUT: "acestream__checkbox-input",
                BOX_OUTLINE: "acestream__checkbox__box-outline",
                FOCUS_HELPER: "acestream__checkbox__focus-helper",
                TICK_OUTLINE: "acestream__checkbox__tick-outline",
                RIPPLE_EFFECT: "acestream__js-ripple-effect",
                RIPPLE_IGNORE_EVENTS: "acestream__js-ripple-effect--ignore-events",
                RIPPLE_CONTAINER: "acestream__checkbox__ripple-container",
                RIPPLE_CENTER: "acestream__ripple--center",
                RIPPLE: "acestream__ripple",
                IS_FOCUSED: "is-focused",
                IS_DISABLED: "is-disabled",
                IS_CHECKED: "is-checked",
                IS_UPGRADED: "is-upgraded"
            };
            a.prototype.onChange_ = function() {
                this.updateClasses_()
            };
            a.prototype.onFocus_ =
                function() {
                    this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
                };
            a.prototype.onBlur_ = function() {
                this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
            };
            a.prototype.onMouseUp_ = function() {
                this.blur_()
            };
            a.prototype.updateClasses_ = function() {
                this.checkDisabled();
                this.checkToggleState()
            };
            a.prototype.blur_ = function() {
                window.setTimeout(function() {
                    this.inputElement_.blur()
                }.bind(this), this.Constant_.TINY_TIMEOUT)
            };
            a.prototype.checkToggleState = function() {
                this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) :
                    this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
            };
            a.prototype.checkToggleState = a.prototype.checkToggleState;
            a.prototype.checkDisabled = function() {
                this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
            };
            a.prototype.checkDisabled = a.prototype.checkDisabled;
            a.prototype.disable = function() {
                this.inputElement_.disabled = !0;
                this.updateClasses_()
            };
            a.prototype.disable = a.prototype.disable;
            a.prototype.enable = function() {
                this.inputElement_.disabled = !1;
                this.updateClasses_()
            };
            a.prototype.enable = a.prototype.enable;
            a.prototype.check = function() {
                this.inputElement_.checked = !0;
                this.updateClasses_()
            };
            a.prototype.check = a.prototype.check;
            a.prototype.uncheck = function() {
                this.inputElement_.checked = !1;
                this.updateClasses_()
            };
            a.prototype.uncheck = a.prototype.uncheck;
            a.prototype.init = function() {
                if (this.element_) {
                    this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
                    var a = document.createElement("span");
                    a.classList.add(this.CssClasses_.BOX_OUTLINE);
                    var d = document.createElement("span");
                    d.classList.add(this.CssClasses_.FOCUS_HELPER);
                    var w = document.createElement("span");
                    w.classList.add(this.CssClasses_.TICK_OUTLINE);
                    a.appendChild(w);
                    this.element_.appendChild(d);
                    this.element_.appendChild(a);
                    this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT) && (this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),
                        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.boundRippleMouseUp = this.onMouseUp_.bind(this), this.rippleContainerElement_.addEventListener("mouseup", this.boundRippleMouseUp), a = document.createElement("span"), a.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(a), this.element_.appendChild(this.rippleContainerElement_));
                    this.boundInputOnChange = this.onChange_.bind(this);
                    this.boundInputOnFocus = this.onFocus_.bind(this);
                    this.boundInputOnBlur = this.onBlur_.bind(this);
                    this.boundElementMouseUp = this.onMouseUp_.bind(this);
                    this.inputElement_.addEventListener("change", this.boundInputOnChange);
                    this.inputElement_.addEventListener("focus", this.boundInputOnFocus);
                    this.inputElement_.addEventListener("blur", this.boundInputOnBlur);
                    this.element_.addEventListener("mouseup", this.boundElementMouseUp);
                    this.updateClasses_();
                    this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
                }
            };
            n.exports =
                a
        })()
    }, {}],
    49: [function(d, n, t) {
        n.exports = {
            xhr: function(a) {
                if ("function" === typeof GM_xmlhttpRequest) return GM_xmlhttpRequest(a);
                var b = new window.XMLHttpRequest,
                    d = void 0,
                    w = !1;
                if (!a.url) throw new "missing url";
                a.method = a.method || "GET";
                a.timeout = a.timeout || 1E4;
                void 0 !== a.withCredentials && (b.withCredentials = a.withCredentials);
                "//" == a.url.substring(0, 2) && (a.url = window.location.protocol + a.url);
                b.onreadystatechange = function() {
                    if (w) {
                        if ("function" === typeof a.onerror) a.onerror(b)
                    } else if (4 === b.readyState && (d &&
                            clearTimeout(d), "function" === typeof a.onload)) a.onload(b)
                };
                b.open(a.method, a.url);
                d = setTimeout(function() {
                    w = !0;
                    b.abort()
                }, a.timeout);
                b.send()
            }
        }
    }, {}],
    50: [function(d, n, t) {
        function a(a) {
            var b = a.length;
            if (0 < b % 4) throw Error("Invalid string. Length must be a multiple of 4");
            a = a.indexOf("\x3d"); - 1 === a && (a = b);
            return [a, a === b ? 0 : 4 - a % 4]
        }

        function b(a, b, d) {
            for (var c = [], e = b; e < d; e += 3) b = (a[e] << 16 & 16711680) + (a[e + 1] << 8 & 65280) + (a[e + 2] & 255), c.push(k[b >> 18 & 63] + k[b >> 12 & 63] + k[b >> 6 & 63] + k[b & 63]);
            return c.join("")
        }
        t.byteLength =
            function(b) {
                b = a(b);
                var d = b[1];
                return 3 * (b[0] + d) / 4 - d
            };
        t.toByteArray = function(b) {
            var d = a(b);
            var e = d[0];
            d = d[1];
            for (var c = new D(3 * (e + d) / 4 - d), h = 0, k = 0 < d ? e - 4 : e, n = 0; n < k; n += 4) e = w[b.charCodeAt(n)] << 18 | w[b.charCodeAt(n + 1)] << 12 | w[b.charCodeAt(n + 2)] << 6 | w[b.charCodeAt(n + 3)], c[h++] = e >> 16 & 255, c[h++] = e >> 8 & 255, c[h++] = e & 255;
            2 === d && (e = w[b.charCodeAt(n)] << 2 | w[b.charCodeAt(n + 1)] >> 4, c[h++] = e & 255);
            1 === d && (e = w[b.charCodeAt(n)] << 10 | w[b.charCodeAt(n + 1)] << 4 | w[b.charCodeAt(n + 2)] >> 2, c[h++] = e >> 8 & 255, c[h++] = e & 255);
            return c
        };
        t.fromByteArray =
            function(a) {
                for (var d = a.length, e = d % 3, c = [], h = 0, w = d - e; h < w; h += 16383) c.push(b(a, h, h + 16383 > w ? w : h + 16383));
                1 === e ? (a = a[d - 1], c.push(k[a >> 2] + k[a << 4 & 63] + "\x3d\x3d")) : 2 === e && (a = (a[d - 2] << 8) + a[d - 1], c.push(k[a >> 10] + k[a >> 4 & 63] + k[a << 2 & 63] + "\x3d"));
                return c.join("")
            };
        var k = [],
            w = [],
            D = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
        for (d = 0; 64 > d; ++d) k[d] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [d], w["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(d)] = d;
        w[45] = 62;
        w[95] = 63
    }, {}],
    51: [function(d, n, t) {
        function a(a) {
            if (a > ba) throw new RangeError('The value "' + a + '" is invalid for option "size"');
            a = new Uint8Array(a);
            a.__proto__ = b.prototype;
            return a
        }

        function b(a, b, c) {
            if ("number" === typeof a) {
                if ("string" === typeof b) throw new TypeError('The "string" argument must be of type string. Received type number');
                return D(a)
            }
            return k(a, b, c)
        }

        function k(d, y, e) {
            if ("string" === typeof d) {
                var A = y;
                if ("string" !== typeof A || "" === A) A = "utf8";
                if (!b.isEncoding(A)) throw new TypeError("Unknown encoding: " +
                    A);
                y = c(d, A) | 0;
                e = a(y);
                d = e.write(d, A);
                d !== y && (e = e.slice(0, d));
                return e
            }
            if (ArrayBuffer.isView(d)) return h(d);
            if (null == d) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d);
            if (ha(d, ArrayBuffer) || d && ha(d.buffer, ArrayBuffer)) {
                if (0 > y || d.byteLength < y) throw new RangeError('"offset" is outside of buffer bounds');
                if (d.byteLength < y + (e || 0)) throw new RangeError('"length" is outside of buffer bounds');
                d = void 0 === y && void 0 ===
                    e ? new Uint8Array(d) : void 0 === e ? new Uint8Array(d, y) : new Uint8Array(d, y, e);
                d.__proto__ = b.prototype;
                return d
            }
            if ("number" === typeof d) throw new TypeError('The "value" argument must not be of type number. Received type number');
            A = d.valueOf && d.valueOf();
            if (null != A && A !== d) return b.from(A, y, e);
            if (A = r(d)) return A;
            $jscomp.initSymbol();
            $jscomp.initSymbol();
            $jscomp.initSymbol();
            if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof d[Symbol.toPrimitive]) return $jscomp.initSymbol(), b.from(d[Symbol.toPrimitive]("string"),
                y, e);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d);
        }

        function w(a) {
            if ("number" !== typeof a) throw new TypeError('"size" argument must be of type number');
            if (0 > a) throw new RangeError('The value "' + a + '" is invalid for option "size"');
        }

        function D(b) {
            w(b);
            return a(0 > b ? 0 : e(b) | 0)
        }

        function h(b) {
            for (var c = 0 > b.length ? 0 : e(b.length) | 0, d = a(c), A = 0; A < c; A += 1) d[A] = b[A] & 255;
            return d
        }

        function r(c) {
            if (b.isBuffer(c)) {
                var d =
                    e(c.length) | 0,
                    A = a(d);
                if (0 === A.length) return A;
                c.copy(A, 0, 0, d);
                return A
            }
            if (void 0 !== c.length) return (d = "number" !== typeof c.length) || (d = c.length, d = d !== d), d ? a(0) : h(c);
            if ("Buffer" === c.type && Array.isArray(c.data)) return h(c.data)
        }

        function e(a) {
            if (a >= ba) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ba.toString(16) + " bytes");
            return a | 0
        }

        function c(a, c) {
            if (b.isBuffer(a)) return a.length;
            if (ArrayBuffer.isView(a) || ha(a, ArrayBuffer)) return a.byteLength;
            if ("string" !== typeof a) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof a);
            var d = a.length,
                A = 2 < arguments.length && !0 === arguments[2];
            if (!A && 0 === d) return 0;
            for (var e = !1;;) switch (c) {
                case "ascii":
                case "latin1":
                case "binary":
                    return d;
                case "utf8":
                case "utf-8":
                    return ia(a).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * d;
                case "hex":
                    return d >>> 1;
                case "base64":
                    return Da.toByteArray(Z(a)).length;
                default:
                    if (e) return A ? -1 : ia(a).length;
                    c = ("" + c).toLowerCase();
                    e = !0
            }
        }

        function x(a, b, c) {
            var d = !1;
            if (void 0 === b || 0 > b) b = 0;
            if (b > this.length) return "";
            if (void 0 ===
                c || c > this.length) c = this.length;
            if (0 >= c) return "";
            c >>>= 0;
            b >>>= 0;
            if (c <= b) return "";
            for (a || (a = "utf8");;) switch (a) {
                case "hex":
                    a = b;
                    b = c;
                    c = this.length;
                    if (!a || 0 > a) a = 0;
                    if (!b || 0 > b || b > c) b = c;
                    d = "";
                    for (c = a; c < b; ++c) a = d, d = this[c], d = 16 > d ? "0" + d.toString(16) : d.toString(16), d = a + d;
                    return d;
                case "utf8":
                case "utf-8":
                    return Ga(this, b, c);
                case "ascii":
                    a = "";
                    for (c = Math.min(this.length, c); b < c; ++b) a += String.fromCharCode(this[b] & 127);
                    return a;
                case "latin1":
                case "binary":
                    a = "";
                    for (c = Math.min(this.length, c); b < c; ++b) a += String.fromCharCode(this[b]);
                    return a;
                case "base64":
                    return b = 0 === b && c === this.length ? Da.fromByteArray(this) : Da.fromByteArray(this.slice(b, c)), b;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    b = this.slice(b, c);
                    c = "";
                    for (a = 0; a < b.length; a += 2) c += String.fromCharCode(b[a] + 256 * b[a + 1]);
                    return c;
                default:
                    if (d) throw new TypeError("Unknown encoding: " + a);
                    a = (a + "").toLowerCase();
                    d = !0
            }
        }

        function C(a, b, c) {
            var d = a[b];
            a[b] = a[c];
            a[c] = d
        }

        function fa(a, c, d, e, h) {
            if (0 === a.length) return -1;
            "string" === typeof d ? (e = d, d = 0) : 2147483647 < d ? d = 2147483647 :
                -2147483648 > d && (d = -2147483648);
            d = +d;
            d !== d && (d = h ? 0 : a.length - 1);
            0 > d && (d = a.length + d);
            if (d >= a.length) {
                if (h) return -1;
                d = a.length - 1
            } else if (0 > d)
                if (h) d = 0;
                else return -1;
            "string" === typeof c && (c = b.from(c, e));
            if (b.isBuffer(c)) return 0 === c.length ? -1 : ra(a, c, d, e, h);
            if ("number" === typeof c) return c &= 255, "function" === typeof Uint8Array.prototype.indexOf ? h ? Uint8Array.prototype.indexOf.call(a, c, d) : Uint8Array.prototype.lastIndexOf.call(a, c, d) : ra(a, [c], d, e, h);
            throw new TypeError("val must be string, number or Buffer");
        }

        function ra(a, b, c, d, e) {
            function A(a, b) {
                return 1 === y ? a[b] : a.readUInt16BE(b * y)
            }
            var y = 1,
                h = a.length,
                k = b.length;
            if (void 0 !== d && (d = String(d).toLowerCase(), "ucs2" === d || "ucs-2" === d || "utf16le" === d || "utf-16le" === d)) {
                if (2 > a.length || 2 > b.length) return -1;
                y = 2;
                h /= 2;
                k /= 2;
                c /= 2
            }
            if (e)
                for (d = -1; c < h; c++)
                    if (A(a, c) === A(b, -1 === d ? 0 : c - d)) {
                        if (-1 === d && (d = c), c - d + 1 === k) return d * y
                    } else -1 !== d && (c -= c - d), d = -1;
            else
                for (c + k > h && (c = h - k); 0 <= c; c--) {
                    h = !0;
                    for (d = 0; d < k; d++)
                        if (A(a, c + d) !== A(b, d)) {
                            h = !1;
                            break
                        } if (h) return c
                }
            return -1
        }

        function Ga(a,
            b, c) {
            c = Math.min(a.length, c);
            for (var d = []; b < c;) {
                var e = a[b],
                    A = null,
                    y = 239 < e ? 4 : 223 < e ? 3 : 191 < e ? 2 : 1;
                if (b + y <= c) switch (y) {
                    case 1:
                        128 > e && (A = e);
                        break;
                    case 2:
                        var h = a[b + 1];
                        128 === (h & 192) && (e = (e & 31) << 6 | h & 63, 127 < e && (A = e));
                        break;
                    case 3:
                        h = a[b + 1];
                        var k = a[b + 2];
                        128 === (h & 192) && 128 === (k & 192) && (e = (e & 15) << 12 | (h & 63) << 6 | k & 63, 2047 < e && (55296 > e || 57343 < e) && (A = e));
                        break;
                    case 4:
                        h = a[b + 1];
                        k = a[b + 2];
                        var x = a[b + 3];
                        128 === (h & 192) && 128 === (k & 192) && 128 === (x & 192) && (e = (e & 15) << 18 | (h & 63) << 12 | (k & 63) << 6 | x & 63, 65535 < e && 1114112 > e && (A = e))
                }
                null === A ? (A =
                    65533, y = 1) : 65535 < A && (A -= 65536, d.push(A >>> 10 & 1023 | 55296), A = 56320 | A & 1023);
                d.push(A);
                b += y
            }
            a = d.length;
            if (a <= La) d = String.fromCharCode.apply(String, d);
            else {
                c = "";
                for (b = 0; b < a;) c += String.fromCharCode.apply(String, d.slice(b, b += La));
                d = c
            }
            return d
        }

        function E(a, b, c) {
            if (0 !== a % 1 || 0 > a) throw new RangeError("offset is not uint");
            if (a + b > c) throw new RangeError("Trying to access beyond buffer length");
        }

        function U(a, c, d, e, h, k) {
            if (!b.isBuffer(a)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (c > h ||
                c < k) throw new RangeError('"value" argument is out of bounds');
            if (d + e > a.length) throw new RangeError("Index out of range");
        }

        function N(a, b, c, d, e, h) {
            if (c + d > a.length) throw new RangeError("Index out of range");
            if (0 > c) throw new RangeError("Index out of range");
        }

        function L(a, b, c, d, e) {
            b = +b;
            c >>>= 0;
            e || N(a, b, c, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
            S.write(a, b, c, d, 23, 4);
            return c + 4
        }

        function Ha(a, b, c, d, e) {
            b = +b;
            c >>>= 0;
            e || N(a, b, c, 8, 1.7976931348623157e+308, -1.7976931348623157e+308);
            S.write(a, b, c, d, 52,
                8);
            return c + 8
        }

        function Z(a) {
            a = a.split("\x3d")[0];
            a = a.trim().replace(za, "");
            if (2 > a.length) return "";
            for (; 0 !== a.length % 4;) a += "\x3d";
            return a
        }

        function ia(a, b) {
            b = b || Infinity;
            for (var c, d = a.length, e = null, A = [], y = 0; y < d; ++y) {
                c = a.charCodeAt(y);
                if (55295 < c && 57344 > c) {
                    if (!e) {
                        if (56319 < c) {
                            -1 < (b -= 3) && A.push(239, 191, 189);
                            continue
                        } else if (y + 1 === d) {
                            -1 < (b -= 3) && A.push(239, 191, 189);
                            continue
                        }
                        e = c;
                        continue
                    }
                    if (56320 > c) {
                        -1 < (b -= 3) && A.push(239, 191, 189);
                        e = c;
                        continue
                    }
                    c = (e - 55296 << 10 | c - 56320) + 65536
                } else e && -1 < (b -= 3) && A.push(239, 191,
                    189);
                e = null;
                if (128 > c) {
                    if (0 > --b) break;
                    A.push(c)
                } else if (2048 > c) {
                    if (0 > (b -= 2)) break;
                    A.push(c >> 6 | 192, c & 63 | 128)
                } else if (65536 > c) {
                    if (0 > (b -= 3)) break;
                    A.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                } else if (1114112 > c) {
                    if (0 > (b -= 4)) break;
                    A.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, c & 63 | 128)
                } else throw Error("Invalid code point");
            }
            return A
        }

        function qa(a) {
            for (var b = [], c = 0; c < a.length; ++c) b.push(a.charCodeAt(c) & 255);
            return b
        }

        function la(a, b, c, d) {
            for (var e = 0; e < d && !(e + c >= b.length || e >= a.length); ++e) b[e + c] = a[e];
            return e
        }

        function ha(a,
            b) {
            return a instanceof b || null != a && null != a.constructor && null != a.constructor.name && a.constructor.name === b.name
        }
        var Da = d("base64-js"),
            S = d("ieee754");
        t.Buffer = b;
        t.SlowBuffer = function(a) {
            +a != a && (a = 0);
            return b.alloc(+a)
        };
        t.INSPECT_MAX_BYTES = 50;
        var ba = 2147483647;
        t.kMaxLength = ba;
        b.TYPED_ARRAY_SUPPORT = function() {
            try {
                var a = new Uint8Array(1);
                a.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                };
                return 42 === a.foo()
            } catch (y) {
                return !1
            }
        }();
        b.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !==
            typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
        Object.defineProperty(b.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (b.isBuffer(this)) return this.buffer
            }
        });
        Object.defineProperty(b.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (b.isBuffer(this)) return this.byteOffset
            }
        });
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        "undefined" !== typeof Symbol &&
            null != Symbol.species && b[Symbol.species] === b && ($jscomp.initSymbol(), Object.defineProperty(b, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1
            }));
        b.poolSize = 8192;
        b.from = function(a, b, c) {
            return k(a, b, c)
        };
        b.prototype.__proto__ = Uint8Array.prototype;
        b.__proto__ = Uint8Array;
        b.alloc = function(b, c, d) {
            w(b);
            b = 0 >= b ? a(b) : void 0 !== c ? "string" === typeof d ? a(b).fill(c, d) : a(b).fill(c) : a(b);
            return b
        };
        b.allocUnsafe = function(a) {
            return D(a)
        };
        b.allocUnsafeSlow = function(a) {
            return D(a)
        };
        b.isBuffer = function(a) {
            return null !=
                a && !0 === a._isBuffer && a !== b.prototype
        };
        b.compare = function(a, c) {
            ha(a, Uint8Array) && (a = b.from(a, a.offset, a.byteLength));
            ha(c, Uint8Array) && (c = b.from(c, c.offset, c.byteLength));
            if (!b.isBuffer(a) || !b.isBuffer(c)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (a === c) return 0;
            for (var d = a.length, e = c.length, A = 0, h = Math.min(d, e); A < h; ++A)
                if (a[A] !== c[A]) {
                    d = a[A];
                    e = c[A];
                    break
                } return d < e ? -1 : e < d ? 1 : 0
        };
        b.isEncoding = function(a) {
            switch (String(a).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        };
        b.concat = function(a, c) {
            if (!Array.isArray(a)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === a.length) return b.alloc(0);
            var d;
            if (void 0 === c)
                for (d = c = 0; d < a.length; ++d) c += a[d].length;
            c = b.allocUnsafe(c);
            var e = 0;
            for (d = 0; d < a.length; ++d) {
                var A = a[d];
                ha(A, Uint8Array) && (A = b.from(A));
                if (!b.isBuffer(A)) throw new TypeError('"list" argument must be an Array of Buffers');
                A.copy(c, e);
                e += A.length
            }
            return c
        };
        b.byteLength = c;
        b.prototype._isBuffer = !0;
        b.prototype.swap16 = function() {
            var a =
                this.length;
            if (0 !== a % 2) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var b = 0; b < a; b += 2) C(this, b, b + 1);
            return this
        };
        b.prototype.swap32 = function() {
            var a = this.length;
            if (0 !== a % 4) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var b = 0; b < a; b += 4) C(this, b, b + 3), C(this, b + 1, b + 2);
            return this
        };
        b.prototype.swap64 = function() {
            var a = this.length;
            if (0 !== a % 8) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var b = 0; b < a; b += 8) C(this, b, b + 7), C(this, b + 1, b + 6),
                C(this, b + 2, b + 5), C(this, b + 3, b + 4);
            return this
        };
        b.prototype.toString = function() {
            var a = this.length;
            return 0 === a ? "" : 0 === arguments.length ? Ga(this, 0, a) : x.apply(this, arguments)
        };
        b.prototype.toLocaleString = b.prototype.toString;
        b.prototype.equals = function(a) {
            if (!b.isBuffer(a)) throw new TypeError("Argument must be a Buffer");
            return this === a ? !0 : 0 === b.compare(this, a)
        };
        b.prototype.inspect = function() {
            var a = t.INSPECT_MAX_BYTES;
            var b = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim();
            this.length > a && (b += " ... ");
            return "\x3cBuffer " + b + "\x3e"
        };
        b.prototype.compare = function(a, c, d, e, h) {
            ha(a, Uint8Array) && (a = b.from(a, a.offset, a.byteLength));
            if (!b.isBuffer(a)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof a);
            void 0 === c && (c = 0);
            void 0 === d && (d = a ? a.length : 0);
            void 0 === e && (e = 0);
            void 0 === h && (h = this.length);
            if (0 > c || d > a.length || 0 > e || h > this.length) throw new RangeError("out of range index");
            if (e >= h && c >= d) return 0;
            if (e >= h) return -1;
            if (c >= d) return 1;
            c >>>= 0;
            d >>>= 0;
            e >>>=
                0;
            h >>>= 0;
            if (this === a) return 0;
            var A = h - e,
                y = d - c,
                k = Math.min(A, y);
            e = this.slice(e, h);
            a = a.slice(c, d);
            for (c = 0; c < k; ++c)
                if (e[c] !== a[c]) {
                    A = e[c];
                    y = a[c];
                    break
                } return A < y ? -1 : y < A ? 1 : 0
        };
        b.prototype.includes = function(a, b, c) {
            return -1 !== this.indexOf(a, b, c)
        };
        b.prototype.indexOf = function(a, b, c) {
            return fa(this, a, b, c, !0)
        };
        b.prototype.lastIndexOf = function(a, b, c) {
            return fa(this, a, b, c, !1)
        };
        b.prototype.write = function(a, b, c, d) {
            if (void 0 === b) d = "utf8", c = this.length, b = 0;
            else if (void 0 === c && "string" === typeof b) d = b, c = this.length,
                b = 0;
            else if (isFinite(b)) b >>>= 0, isFinite(c) ? (c >>>= 0, void 0 === d && (d = "utf8")) : (d = c, c = void 0);
            else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            var e = this.length - b;
            if (void 0 === c || c > e) c = e;
            if (0 < a.length && (0 > c || 0 > b) || b > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            d || (d = "utf8");
            for (e = !1;;) switch (d) {
                case "hex":
                    a: {
                        b = Number(b) || 0;d = this.length - b;c ? (c = Number(c), c > d && (c = d)) : c = d;d = a.length;c > d / 2 && (c = d / 2);
                        for (d = 0; d < c; ++d) {
                            e = parseInt(a.substr(2 *
                                d, 2), 16);
                            if (e !== e) {
                                a = d;
                                break a
                            }
                            this[b + d] = e
                        }
                        a = d
                    }
                    return a;
                case "utf8":
                case "utf-8":
                    return la(ia(a, this.length - b), this, b, c);
                case "ascii":
                    return la(qa(a), this, b, c);
                case "latin1":
                case "binary":
                    return la(qa(a), this, b, c);
                case "base64":
                    return la(Da.toByteArray(Z(a)), this, b, c);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    d = a;
                    e = this.length - b;
                    for (var h = [], A = 0; A < d.length && !(0 > (e -= 2)); ++A) {
                        var y = d.charCodeAt(A);
                        a = y >> 8;
                        y %= 256;
                        h.push(y);
                        h.push(a)
                    }
                    return la(h, this, b, c);
                default:
                    if (e) throw new TypeError("Unknown encoding: " +
                        d);
                    d = ("" + d).toLowerCase();
                    e = !0
            }
        };
        b.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var La = 4096;
        b.prototype.slice = function(a, c) {
            var d = this.length;
            a = ~~a;
            c = void 0 === c ? d : ~~c;
            0 > a ? (a += d, 0 > a && (a = 0)) : a > d && (a = d);
            0 > c ? (c += d, 0 > c && (c = 0)) : c > d && (c = d);
            c < a && (c = a);
            a = this.subarray(a, c);
            a.__proto__ = b.prototype;
            return a
        };
        b.prototype.readUIntLE = function(a, b, c) {
            a >>>= 0;
            b >>>= 0;
            c || E(a, b, this.length);
            c = this[a];
            for (var d = 1, e = 0; ++e < b && (d *= 256);) c += this[a + e] * d;
            return c
        };
        b.prototype.readUIntBE =
            function(a, b, c) {
                a >>>= 0;
                b >>>= 0;
                c || E(a, b, this.length);
                c = this[a + --b];
                for (var d = 1; 0 < b && (d *= 256);) c += this[a + --b] * d;
                return c
            };
        b.prototype.readUInt8 = function(a, b) {
            a >>>= 0;
            b || E(a, 1, this.length);
            return this[a]
        };
        b.prototype.readUInt16LE = function(a, b) {
            a >>>= 0;
            b || E(a, 2, this.length);
            return this[a] | this[a + 1] << 8
        };
        b.prototype.readUInt16BE = function(a, b) {
            a >>>= 0;
            b || E(a, 2, this.length);
            return this[a] << 8 | this[a + 1]
        };
        b.prototype.readUInt32LE = function(a, b) {
            a >>>= 0;
            b || E(a, 4, this.length);
            return (this[a] | this[a + 1] << 8 | this[a + 2] <<
                16) + 16777216 * this[a + 3]
        };
        b.prototype.readUInt32BE = function(a, b) {
            a >>>= 0;
            b || E(a, 4, this.length);
            return 16777216 * this[a] + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3])
        };
        b.prototype.readIntLE = function(a, b, c) {
            a >>>= 0;
            b >>>= 0;
            c || E(a, b, this.length);
            c = this[a];
            for (var d = 1, e = 0; ++e < b && (d *= 256);) c += this[a + e] * d;
            c >= 128 * d && (c -= Math.pow(2, 8 * b));
            return c
        };
        b.prototype.readIntBE = function(a, b, c) {
            a >>>= 0;
            b >>>= 0;
            c || E(a, b, this.length);
            c = b;
            for (var d = 1, e = this[a + --c]; 0 < c && (d *= 256);) e += this[a + --c] * d;
            e >= 128 * d && (e -= Math.pow(2, 8 * b));
            return e
        };
        b.prototype.readInt8 = function(a, b) {
            a >>>= 0;
            b || E(a, 1, this.length);
            return this[a] & 128 ? -1 * (255 - this[a] + 1) : this[a]
        };
        b.prototype.readInt16LE = function(a, b) {
            a >>>= 0;
            b || E(a, 2, this.length);
            a = this[a] | this[a + 1] << 8;
            return a & 32768 ? a | 4294901760 : a
        };
        b.prototype.readInt16BE = function(a, b) {
            a >>>= 0;
            b || E(a, 2, this.length);
            a = this[a + 1] | this[a] << 8;
            return a & 32768 ? a | 4294901760 : a
        };
        b.prototype.readInt32LE = function(a, b) {
            a >>>= 0;
            b || E(a, 4, this.length);
            return this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24
        };
        b.prototype.readInt32BE =
            function(a, b) {
                a >>>= 0;
                b || E(a, 4, this.length);
                return this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]
            };
        b.prototype.readFloatLE = function(a, b) {
            a >>>= 0;
            b || E(a, 4, this.length);
            return S.read(this, a, !0, 23, 4)
        };
        b.prototype.readFloatBE = function(a, b) {
            a >>>= 0;
            b || E(a, 4, this.length);
            return S.read(this, a, !1, 23, 4)
        };
        b.prototype.readDoubleLE = function(a, b) {
            a >>>= 0;
            b || E(a, 8, this.length);
            return S.read(this, a, !0, 52, 8)
        };
        b.prototype.readDoubleBE = function(a, b) {
            a >>>= 0;
            b || E(a, 8, this.length);
            return S.read(this, a, !1, 52, 8)
        };
        b.prototype.writeUIntLE =
            function(a, b, c, d) {
                a = +a;
                b >>>= 0;
                c >>>= 0;
                d || U(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
                d = 1;
                var e = 0;
                for (this[b] = a & 255; ++e < c && (d *= 256);) this[b + e] = a / d & 255;
                return b + c
            };
        b.prototype.writeUIntBE = function(a, b, c, d) {
            a = +a;
            b >>>= 0;
            c >>>= 0;
            d || U(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
            d = c - 1;
            var e = 1;
            for (this[b + d] = a & 255; 0 <= --d && (e *= 256);) this[b + d] = a / e & 255;
            return b + c
        };
        b.prototype.writeUInt8 = function(a, b, c) {
            a = +a;
            b >>>= 0;
            c || U(this, a, b, 1, 255, 0);
            this[b] = a & 255;
            return b + 1
        };
        b.prototype.writeUInt16LE = function(a, b, c) {
            a = +a;
            b >>>= 0;
            c || U(this, a, b, 2,
                65535, 0);
            this[b] = a & 255;
            this[b + 1] = a >>> 8;
            return b + 2
        };
        b.prototype.writeUInt16BE = function(a, b, c) {
            a = +a;
            b >>>= 0;
            c || U(this, a, b, 2, 65535, 0);
            this[b] = a >>> 8;
            this[b + 1] = a & 255;
            return b + 2
        };
        b.prototype.writeUInt32LE = function(a, b, c) {
            a = +a;
            b >>>= 0;
            c || U(this, a, b, 4, 4294967295, 0);
            this[b + 3] = a >>> 24;
            this[b + 2] = a >>> 16;
            this[b + 1] = a >>> 8;
            this[b] = a & 255;
            return b + 4
        };
        b.prototype.writeUInt32BE = function(a, b, c) {
            a = +a;
            b >>>= 0;
            c || U(this, a, b, 4, 4294967295, 0);
            this[b] = a >>> 24;
            this[b + 1] = a >>> 16;
            this[b + 2] = a >>> 8;
            this[b + 3] = a & 255;
            return b + 4
        };
        b.prototype.writeIntLE =
            function(a, b, c, d) {
                a = +a;
                b >>>= 0;
                d || (d = Math.pow(2, 8 * c - 1), U(this, a, b, c, d - 1, -d));
                d = 0;
                var e = 1,
                    h = 0;
                for (this[b] = a & 255; ++d < c && (e *= 256);) 0 > a && 0 === h && 0 !== this[b + d - 1] && (h = 1), this[b + d] = (a / e >> 0) - h & 255;
                return b + c
            };
        b.prototype.writeIntBE = function(a, b, c, d) {
            a = +a;
            b >>>= 0;
            d || (d = Math.pow(2, 8 * c - 1), U(this, a, b, c, d - 1, -d));
            d = c - 1;
            var e = 1,
                h = 0;
            for (this[b + d] = a & 255; 0 <= --d && (e *= 256);) 0 > a && 0 === h && 0 !== this[b + d + 1] && (h = 1), this[b + d] = (a / e >> 0) - h & 255;
            return b + c
        };
        b.prototype.writeInt8 = function(a, b, c) {
            a = +a;
            b >>>= 0;
            c || U(this, a, b, 1, 127, -128);
            0 > a && (a = 255 + a + 1);
            this[b] = a & 255;
            return b + 1
        };
        b.prototype.writeInt16LE = function(a, b, c) {
            a = +a;
            b >>>= 0;
            c || U(this, a, b, 2, 32767, -32768);
            this[b] = a & 255;
            this[b + 1] = a >>> 8;
            return b + 2
        };
        b.prototype.writeInt16BE = function(a, b, c) {
            a = +a;
            b >>>= 0;
            c || U(this, a, b, 2, 32767, -32768);
            this[b] = a >>> 8;
            this[b + 1] = a & 255;
            return b + 2
        };
        b.prototype.writeInt32LE = function(a, b, c) {
            a = +a;
            b >>>= 0;
            c || U(this, a, b, 4, 2147483647, -2147483648);
            this[b] = a & 255;
            this[b + 1] = a >>> 8;
            this[b + 2] = a >>> 16;
            this[b + 3] = a >>> 24;
            return b + 4
        };
        b.prototype.writeInt32BE = function(a, b, c) {
            a = +a;
            b >>>= 0;
            c || U(this, a, b, 4, 2147483647, -2147483648);
            0 > a && (a = 4294967295 + a + 1);
            this[b] = a >>> 24;
            this[b + 1] = a >>> 16;
            this[b + 2] = a >>> 8;
            this[b + 3] = a & 255;
            return b + 4
        };
        b.prototype.writeFloatLE = function(a, b, c) {
            return L(this, a, b, !0, c)
        };
        b.prototype.writeFloatBE = function(a, b, c) {
            return L(this, a, b, !1, c)
        };
        b.prototype.writeDoubleLE = function(a, b, c) {
            return Ha(this, a, b, !0, c)
        };
        b.prototype.writeDoubleBE = function(a, b, c) {
            return Ha(this, a, b, !1, c)
        };
        b.prototype.copy = function(a, c, d, e) {
            if (!b.isBuffer(a)) throw new TypeError("argument should be a Buffer");
            d || (d = 0);
            e || 0 === e || (e = this.length);
            c >= a.length && (c = a.length);
            c || (c = 0);
            0 < e && e < d && (e = d);
            if (e === d || 0 === a.length || 0 === this.length) return 0;
            if (0 > c) throw new RangeError("targetStart out of bounds");
            if (0 > d || d >= this.length) throw new RangeError("Index out of range");
            if (0 > e) throw new RangeError("sourceEnd out of bounds");
            e > this.length && (e = this.length);
            a.length - c < e - d && (e = a.length - c + d);
            var h = e - d;
            if (this === a && "function" === typeof Uint8Array.prototype.copyWithin) this.copyWithin(c, d, e);
            else if (this === a && d < c && c < e)
                for (e =
                    h - 1; 0 <= e; --e) a[e + c] = this[e + d];
            else Uint8Array.prototype.set.call(a, this.subarray(d, e), c);
            return h
        };
        b.prototype.fill = function(a, c, d, e) {
            if ("string" === typeof a) {
                "string" === typeof c ? (e = c, c = 0, d = this.length) : "string" === typeof d && (e = d, d = this.length);
                if (void 0 !== e && "string" !== typeof e) throw new TypeError("encoding must be a string");
                if ("string" === typeof e && !b.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                if (1 === a.length) {
                    var h = a.charCodeAt(0);
                    if ("utf8" === e && 128 > h || "latin1" === e) a = h
                }
            } else "number" ===
                typeof a && (a &= 255);
            if (0 > c || this.length < c || this.length < d) throw new RangeError("Out of range index");
            if (d <= c) return this;
            c >>>= 0;
            d = void 0 === d ? this.length : d >>> 0;
            a || (a = 0);
            if ("number" === typeof a)
                for (e = c; e < d; ++e) this[e] = a;
            else {
                h = b.isBuffer(a) ? a : b.from(a, e);
                var k = h.length;
                if (0 === k) throw new TypeError('The value "' + a + '" is invalid for argument "value"');
                for (e = 0; e < d - c; ++e) this[e + c] = h[e % k]
            }
            return this
        };
        var za = /[^+/0-9A-Za-z-_]/g
    }, {
        "base64-js": 50,
        ieee754: 52
    }],
    52: [function(d, n, t) {
        t.read = function(a, b, d, w, D) {
            var h =
                8 * D - w - 1;
            var k = (1 << h) - 1,
                e = k >> 1,
                c = -7;
            D = d ? D - 1 : 0;
            var x = d ? -1 : 1,
                n = a[b + D];
            D += x;
            d = n & (1 << -c) - 1;
            n >>= -c;
            for (c += h; 0 < c; d = 256 * d + a[b + D], D += x, c -= 8);
            h = d & (1 << -c) - 1;
            d >>= -c;
            for (c += w; 0 < c; h = 256 * h + a[b + D], D += x, c -= 8);
            if (0 === d) d = 1 - e;
            else {
                if (d === k) return h ? NaN : Infinity * (n ? -1 : 1);
                h += Math.pow(2, w);
                d -= e
            }
            return (n ? -1 : 1) * h * Math.pow(2, d - w)
        };
        t.write = function(a, b, d, w, D, h) {
            var k, e = 8 * h - D - 1,
                c = (1 << e) - 1,
                x = c >> 1,
                n = 23 === D ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
            h = w ? 0 : h - 1;
            var t = w ? 1 : -1,
                ra = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
            b = Math.abs(b);
            isNaN(b) || Infinity === b ? (b =
                isNaN(b) ? 1 : 0, w = c) : (w = Math.floor(Math.log(b) / Math.LN2), 1 > b * (k = Math.pow(2, -w)) && (w--, k *= 2), b = 1 <= w + x ? b + n / k : b + n * Math.pow(2, 1 - x), 2 <= b * k && (w++, k /= 2), w + x >= c ? (b = 0, w = c) : 1 <= w + x ? (b = (b * k - 1) * Math.pow(2, D), w += x) : (b = b * Math.pow(2, x - 1) * Math.pow(2, D), w = 0));
            for (; 8 <= D; a[d + h] = b & 255, h += t, b /= 256, D -= 8);
            w = w << D | b;
            for (e += D; 0 < e; a[d + h] = w & 255, h += t, w /= 256, e -= 8);
            a[d + h - t] |= 128 * ra
        }
    }, {}],
    53: [function(d, n, t) {
        (function(a, b) {
            "object" === typeof n && "object" === typeof n.exports ? n.exports = a.document ? b(a, !0) : function(a) {
                if (!a.document) throw Error("jQuery requires a window with a document");
                return b(a)
            } : b(a)
        })("undefined" !== typeof window ? window : this, function(a, b) {
            function d(a) {
                var g = !!a && "length" in a && a.length,
                    b = f.type(a);
                return "function" === b || f.isWindow(a) ? !1 : "array" === b || 0 === g || "number" === typeof g && 0 < g && g - 1 in a
            }

            function w(a, b, c) {
                if (f.isFunction(b)) return f.grep(a, function(a, g) {
                    return !!b.call(a, g, a) !== c
                });
                if (b.nodeType) return f.grep(a, function(a) {
                    return a === b !== c
                });
                if ("string" === typeof b) {
                    if (ja.test(b)) return f.filter(b, a, c);
                    b = f.filter(b, a)
                }
                return f.grep(a, function(a) {
                    return -1 < f.inArray(a,
                        b) !== c
                })
            }

            function n(a, b) {
                do a = a[b]; while (a && 1 !== a.nodeType);
                return a
            }

            function h(a) {
                var g = {};
                f.each(a.match(p) || [], function(a, b) {
                    g[b] = !0
                });
                return g
            }

            function r() {
                I.addEventListener ? (I.removeEventListener("DOMContentLoaded", e), a.removeEventListener("load", e)) : (I.detachEvent("onreadystatechange", e), a.detachEvent("onload", e))
            }

            function e() {
                if (I.addEventListener || "load" === a.event.type || "complete" === I.readyState) r(), f.ready()
            }

            function c(a, b, c) {
                if (void 0 === c && 1 === a.nodeType)
                    if (c = "data-" + b.replace(sc, "-$1").toLowerCase(),
                        c = a.getAttribute(c), "string" === typeof c) {
                        try {
                            c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ya.test(c) ? f.parseJSON(c) : c
                        } catch (P) {}
                        f.data(a, b, c)
                    } else c = void 0;
                return c
            }

            function x(a) {
                for (var g in a)
                    if (("data" !== g || !f.isEmptyObject(a[g])) && "toJSON" !== g) return !1;
                return !0
            }

            function C(a, b, c, d) {
                if (sa(a)) {
                    var g = f.expando,
                        q = a.nodeType,
                        B = q ? f.cache : a,
                        e = q ? a[g] : a[g] && g;
                    if (e && B[e] && (d || B[e].data) || void 0 !== c || "string" !== typeof b) {
                        e || (e = q ? a[g] = Aa.pop() || f.guid++ : g);
                        B[e] || (B[e] = q ? {} : {
                            toJSON: f.noop
                        });
                        if ("object" === typeof b || "function" === typeof b) d ? B[e] = f.extend(B[e], b) : B[e].data = f.extend(B[e].data, b);
                        a = B[e];
                        d || (a.data || (a.data = {}), a = a.data);
                        void 0 !== c && (a[f.camelCase(b)] = c);
                        "string" === typeof b ? (c = a[b], null == c && (c = a[f.camelCase(b)])) : c = a;
                        return c
                    }
                }
            }

            function t(a, b, c) {
                if (sa(a)) {
                    var g, d, q = a.nodeType,
                        B = q ? f.cache : a,
                        e = q ? a[f.expando] : f.expando;
                    if (B[e]) {
                        if (b && (g = c ? B[e] : B[e].data)) {
                            f.isArray(b) ? b = b.concat(f.map(b, f.camelCase)) : b in g ? b = [b] : (b = f.camelCase(b), b = b in g ? [b] : b.split(" "));
                            for (d = b.length; d--;) delete g[b[d]];
                            if (c ? !x(g) : !f.isEmptyObject(g)) return
                        }
                        if (!c && (delete B[e].data, !x(B[e]))) return;
                        q ? f.cleanData([a], !0) : F.deleteExpando || B != B.window ? delete B[e] : B[e] = void 0
                    }
                }
            }

            function ra(a, b, c, d) {
                var g = 1,
                    q = 20,
                    B = d ? function() {
                        return d.cur()
                    } : function() {
                        return f.css(a, b, "")
                    },
                    e = B(),
                    P = c && c[3] || (f.cssNumber[b] ? "" : "px"),
                    m = (f.cssNumber[b] || "px" !== P && +e) && Hb.exec(f.css(a, b));
                if (m && m[3] !== P) {
                    P = P || m[3];
                    c = c || [];
                    m = +e || 1;
                    do g = g || ".5", m /= g, f.style(a, b, m + P); while (g !== (g = B() / e) && 1 !== g && --q)
                }
                if (c) {
                    m = +m || +e || 0;
                    var h = c[1] ? m + (c[1] + 1) *
                        c[2] : +c[2];
                    d && (d.unit = P, d.start = m, d.end = h)
                }
                return h
            }

            function Ga(a) {
                var g = "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video".split(" ");
                a = a.createDocumentFragment();
                if (a.createElement)
                    for (; g.length;) a.createElement(g.pop());
                return a
            }

            function E(a, b) {
                var g, c, d = 0,
                    q = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ?
                    a.querySelectorAll(b || "*") : void 0;
                if (!q)
                    for (q = [], g = a.childNodes || a; null != (c = g[d]); d++) !b || f.nodeName(c, b) ? q.push(c) : f.merge(q, E(c, b));
                return void 0 === b || b && f.nodeName(a, b) ? f.merge([a], q) : q
            }

            function U(a, b) {
                for (var g, c = 0; null != (g = a[c]); c++) f._data(g, "globalEval", !b || f._data(b[c], "globalEval"))
            }

            function N(a) {
                Tb.test(a.type) && (a.defaultChecked = a.checked)
            }

            function L(a, b, c, d, e) {
                for (var g, q, B, P, m, xa, h = a.length, p = Ga(b), l = [], k = 0; k < h; k++)
                    if ((q = a[k]) || 0 === q)
                        if ("object" === f.type(q)) f.merge(l, q.nodeType ? [q] : q);
                        else if (tc.test(q)) {
                    B = B || p.appendChild(b.createElement("div"));
                    P = (dc.exec(q) || ["", ""])[1].toLowerCase();
                    xa = Sa[P] || Sa._default;
                    B.innerHTML = xa[1] + f.htmlPrefilter(q) + xa[2];
                    for (g = xa[0]; g--;) B = B.lastChild;
                    !F.leadingWhitespace && Ib.test(q) && l.push(b.createTextNode(Ib.exec(q)[0]));
                    if (!F.tbody)
                        for (g = (q = "table" !== P || Jb.test(q) ? "\x3ctable\x3e" !== xa[1] || Jb.test(q) ? 0 : B : B.firstChild) && q.childNodes.length; g--;) f.nodeName(m = q.childNodes[g], "tbody") && !m.childNodes.length && q.removeChild(m);
                    f.merge(l, B.childNodes);
                    for (B.textContent = ""; B.firstChild;) B.removeChild(B.firstChild);
                    B = p.lastChild
                } else l.push(b.createTextNode(q));
                B && p.removeChild(B);
                F.appendChecked || f.grep(E(l, "input"), N);
                for (k = 0; q = l[k++];)
                    if (d && -1 < f.inArray(q, d)) e && e.push(q);
                    else if (a = f.contains(q.ownerDocument, q), B = E(p.appendChild(q), "script"), a && U(B), c)
                    for (g = 0; q = B[g++];) ec.test(q.type || "") && c.push(q);
                return p
            }

            function Ha() {
                return !0
            }

            function Z() {
                return !1
            }

            function ia() {
                try {
                    return I.activeElement
                } catch (g) {}
            }

            function qa(a, b, c, d, e, m) {
                var g;
                if ("object" ===
                    typeof b) {
                    "string" !== typeof c && (d = d || c, c = void 0);
                    for (g in b) qa(a, g, c, d, b[g], m);
                    return a
                }
                null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" === typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0));
                if (!1 === e) e = Z;
                else if (!e) return a;
                if (1 === m) {
                    var q = e;
                    e = function(a) {
                        f().off(a);
                        return q.apply(this, arguments)
                    };
                    e.guid = q.guid || (q.guid = f.guid++)
                }
                return a.each(function() {
                    f.event.add(this, b, e, d, c)
                })
            }

            function la(a, b) {
                return f.nodeName(a, "table") && f.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] ||
                    a.appendChild(a.ownerDocument.createElement("tbody")) : a
            }

            function ha(a) {
                a.type = (null !== f.find.attr(a, "type")) + "/" + a.type;
                return a
            }

            function Da(a) {
                var g = Fc.exec(a.type);
                g ? a.type = g[1] : a.removeAttribute("type");
                return a
            }

            function S(a, b) {
                if (1 === b.nodeType && f.hasData(a)) {
                    var g, c;
                    var d = f._data(a);
                    a = f._data(b, d);
                    var q = d.events;
                    if (q)
                        for (g in delete a.handle, a.events = {}, q)
                            for (d = 0, c = q[g].length; d < c; d++) f.event.add(b, g, q[g][d]);
                    a.data && (a.data = f.extend({}, a.data))
                }
            }

            function ba(a, b, c, d) {
                b = Ea.apply([], b);
                var g, q =
                    0,
                    e = a.length,
                    B = e - 1,
                    P = b[0],
                    m = f.isFunction(P);
                if (m || 1 < e && "string" === typeof P && !F.checkClone && qb.test(P)) return a.each(function(g) {
                    var q = a.eq(g);
                    m && (b[0] = P.call(this, g, q.html()));
                    ba(q, b, c, d)
                });
                if (e) {
                    var h = L(b, a[0].ownerDocument, !1, a, d);
                    var p = h.firstChild;
                    1 === h.childNodes.length && (h = p);
                    if (p || d) {
                        var l = f.map(E(h, "script"), ha);
                        for (g = l.length; q < e; q++) p = h, q !== B && (p = f.clone(p, !0, !0), g && f.merge(l, E(p, "script"))), c.call(a[q], p, q);
                        if (g)
                            for (h = l[l.length - 1].ownerDocument, f.map(l, Da), q = 0; q < g; q++) p = l[q], ec.test(p.type ||
                                "") && !f._data(p, "globalEval") && f.contains(h, p) && (p.src ? f._evalUrl && f._evalUrl(p.src) : f.globalEval((p.text || p.textContent || p.innerHTML || "").replace(zb, "")));
                        h = p = null
                    }
                }
                return a
            }

            function La(a, b, c) {
                for (var g = b ? f.filter(b, a) : a, d = 0; null != (b = g[d]); d++) c || 1 !== b.nodeType || f.cleanData(E(b)), b.parentNode && (c && f.contains(b.ownerDocument, b) && U(E(b, "script")), b.parentNode.removeChild(b));
                return a
            }

            function za(a, b) {
                a = f(b.createElement(a)).appendTo(b.body);
                b = f.css(a[0], "display");
                a.detach();
                return b
            }

            function A(a) {
                var g =
                    I,
                    b = Ub[a];
                b || (b = za(a, g), "none" !== b && b || (Kb = (Kb || f("\x3ciframe frameborder\x3d'0' width\x3d'0' height\x3d'0'/\x3e")).appendTo(g.documentElement), g = (Kb[0].contentWindow || Kb[0].contentDocument).document, g.write(), g.close(), b = za(a, g), Kb.detach()), Ub[a] = b);
                return b
            }

            function y(a, b) {
                return {
                    get: function() {
                        if (a()) delete this.get;
                        else return (this.get = b).apply(this, arguments)
                    }
                }
            }

            function ib(a) {
                if (a in O) return a;
                for (var b = a.charAt(0).toUpperCase() + a.slice(1), g = Lb.length; g--;)
                    if (a = Lb[g] + b, a in O) return a
            }

            function Va(a,
                b) {
                for (var g, c, d, q = [], e = 0, m = a.length; e < m; e++) c = a[e], c.style && (q[e] = f._data(c, "olddisplay"), g = c.style.display, b ? (q[e] || "none" !== g || (c.style.display = ""), "" === c.style.display && ea(c) && (q[e] = f._data(c, "olddisplay", A(c.nodeName)))) : (d = ea(c), (g && "none" !== g || !d) && f._data(c, "olddisplay", d ? g : f.css(c, "display"))));
                for (e = 0; e < m; e++) c = a[e], !c.style || b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? q[e] || "" : "none");
                return a
            }

            function Oa(a, b, c) {
                return (a = Ta.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] ||
                    "px") : b
            }

            function T(a, b, c, d, e) {
                b = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
                for (var g = 0; 4 > b; b += 2) "margin" === c && (g += f.css(a, c + Ja[b], !0, e)), d ? ("content" === c && (g -= f.css(a, "padding" + Ja[b], !0, e)), "margin" !== c && (g -= f.css(a, "border" + Ja[b] + "Width", !0, e))) : (g += f.css(a, "padding" + Ja[b], !0, e), "padding" !== c && (g += f.css(a, "border" + Ja[b] + "Width", !0, e)));
                return g
            }

            function H(a, b, c) {
                var g = !0,
                    d = "width" === b ? a.offsetWidth : a.offsetHeight,
                    q = rb(a),
                    e = F.boxSizing && "border-box" === f.css(a, "boxSizing", !1, q);
                if (0 >= d || null == d) {
                    d =
                        eb(a, b, q);
                    if (0 > d || null == d) d = a.style[b];
                    if (Mb.test(d)) return d;
                    g = e && (F.boxSizingReliable() || d === a.style[b]);
                    d = parseFloat(d) || 0
                }
                return d + T(a, b, c || (e ? "border" : "content"), g, q) + "px"
            }

            function da(a, b, c, d, f) {
                return new da.prototype.init(a, b, c, d, f)
            }

            function Ia() {
                a.setTimeout(function() {
                    sb = void 0
                });
                return sb = f.now()
            }

            function wa(a, b) {
                var g = {
                        height: a
                    },
                    c = 0;
                for (b = b ? 1 : 0; 4 > c; c += 2 - b) {
                    var d = Ja[c];
                    g["margin" + d] = g["padding" + d] = a
                }
                b && (g.opacity = g.width = a);
                return g
            }

            function J(a, b, c) {
                for (var g, d = (l.tweeners[b] || []).concat(l.tweeners["*"]),
                        q = 0, f = d.length; q < f; q++)
                    if (g = d[q].call(c, b, a)) return g
            }

            function R(a, b) {
                var g, c;
                for (g in a) {
                    var d = f.camelCase(g);
                    var q = b[d];
                    var e = a[g];
                    f.isArray(e) && (q = e[1], e = a[g] = e[0]);
                    g !== d && (a[d] = e, delete a[g]);
                    if ((c = f.cssHooks[d]) && "expand" in c)
                        for (g in e = c.expand(e), delete a[d], e) g in a || (a[g] = e[g], b[g] = q);
                    else b[d] = q
                }
            }

            function l(a, b, c) {
                var g, d = 0,
                    q = l.prefilters.length,
                    e = f.Deferred().always(function() {
                        delete B.elem
                    }),
                    B = function() {
                        if (g) return !1;
                        var b = sb || Ia();
                        b = Math.max(0, m.startTime + m.duration - b);
                        for (var c = 1 - (b /
                                m.duration || 0), d = 0, q = m.tweens.length; d < q; d++) m.tweens[d].run(c);
                        e.notifyWith(a, [m, c, b]);
                        if (1 > c && q) return b;
                        e.resolveWith(a, [m]);
                        return !1
                    },
                    m = e.promise({
                        elem: a,
                        props: f.extend({}, b),
                        opts: f.extend(!0, {
                            specialEasing: {},
                            easing: f.easing._default
                        }, c),
                        originalProperties: b,
                        originalOptions: c,
                        startTime: sb || Ia(),
                        duration: c.duration,
                        tweens: [],
                        createTween: function(b, g) {
                            b = f.Tween(a, m.opts, b, g, m.opts.specialEasing[b] || m.opts.easing);
                            m.tweens.push(b);
                            return b
                        },
                        stop: function(b) {
                            var c = 0,
                                d = b ? m.tweens.length : 0;
                            if (g) return this;
                            for (g = !0; c < d; c++) m.tweens[c].run(1);
                            b ? (e.notifyWith(a, [m, 1, 0]), e.resolveWith(a, [m, b])) : e.rejectWith(a, [m, b]);
                            return this
                        }
                    });
                c = m.props;
                for (R(c, m.opts.specialEasing); d < q; d++)
                    if (b = l.prefilters[d].call(m, a, c, m.opts)) return f.isFunction(b.stop) && (f._queueHooks(m.elem, m.opts.queue).stop = f.proxy(b.stop, b)), b;
                f.map(c, J, m);
                f.isFunction(m.opts.start) && m.opts.start.call(a, m);
                f.fx.timer(f.extend(B, {
                    elem: a,
                    anim: m,
                    queue: m.opts.queue
                }));
                return m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always)
            }

            function ma(a) {
                return f.attr(a, "class") || ""
            }

            function Na(a) {
                return function(b, g) {
                    "string" !== typeof b && (g = b, b = "*");
                    var c = 0,
                        d = b.toLowerCase().match(p) || [];
                    if (f.isFunction(g))
                        for (; b = d[c++];) "+" === b.charAt(0) ? (b = b.slice(1) || "*", (a[b] = a[b] || []).unshift(g)) : (a[b] = a[b] || []).push(g)
                }
            }

            function jb(a, b, c, d) {
                function g(B) {
                    var m;
                    q[B] = !0;
                    f.each(a[B] || [], function(a, f) {
                        a = f(b, c, d);
                        if ("string" === typeof a && !e && !q[a]) return b.dataTypes.unshift(a), g(a), !1;
                        if (e) return !(m = a)
                    });
                    return m
                }
                var q = {},
                    e = a === fc;
                return g(b.dataTypes[0]) ||
                    !q["*"] && g("*")
            }

            function K(a, b) {
                var g, c, d = f.ajaxSettings.flatOptions || {};
                for (c in b) void 0 !== b[c] && ((d[c] ? a : g || (g = {}))[c] = b[c]);
                g && f.extend(!0, a, g);
                return a
            }

            function Ma(a) {
                if (!f.contains(a.ownerDocument || I, a)) return !0;
                for (; a && 1 === a.nodeType;) {
                    if ("none" === (a.style && a.style.display || f.css(a, "display")) || "hidden" === a.type) return !0;
                    a = a.parentNode
                }
                return !1
            }

            function kb(a, b, c, d) {
                var g;
                if (f.isArray(b)) f.each(b, function(b, g) {
                    c || Gc.test(a) ? d(a, g) : kb(a + "[" + ("object" === typeof g && null != g ? b : "") + "]", g, c, d)
                });
                else if (c ||
                    "object" !== f.type(b)) d(a, b);
                else
                    for (g in b) kb(a + "[" + g + "]", b[g], c, d)
            }

            function Wa() {
                try {
                    return new a.XMLHttpRequest
                } catch (g) {}
            }

            function Ra() {
                try {
                    return new a.ActiveXObject("Microsoft.XMLHTTP")
                } catch (g) {}
            }

            function db(a) {
                return f.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
            }
            var Aa = [],
                I = a.document,
                Ka = Aa.slice,
                Ea = Aa.concat,
                mb = Aa.push,
                oa = Aa.indexOf,
                V = {},
                Ab = V.toString,
                ta = V.hasOwnProperty,
                F = {},
                f = function(a, b) {
                    return new f.fn.init(a, b)
                },
                ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                tb = /^-ms-/,
                Xa =
                /-([\da-z])/gi,
                fb = function(a, b) {
                    return b.toUpperCase()
                };
            f.fn = f.prototype = {
                jquery: "1.12.4",
                constructor: f,
                selector: "",
                length: 0,
                toArray: function() {
                    return Ka.call(this)
                },
                get: function(a) {
                    return null != a ? 0 > a ? this[a + this.length] : this[a] : Ka.call(this)
                },
                pushStack: function(a) {
                    a = f.merge(this.constructor(), a);
                    a.prevObject = this;
                    a.context = this.context;
                    return a
                },
                each: function(a) {
                    return f.each(this, a)
                },
                map: function(a) {
                    return this.pushStack(f.map(this, function(b, g) {
                        return a.call(b, g, b)
                    }))
                },
                slice: function() {
                    return this.pushStack(Ka.apply(this,
                        arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(a) {
                    var b = this.length;
                    a = +a + (0 > a ? b : 0);
                    return this.pushStack(0 <= a && a < b ? [this[a]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: mb,
                sort: Aa.sort,
                splice: Aa.splice
            };
            f.extend = f.fn.extend = function() {
                var a, b, c, d = arguments[0] || {},
                    e = 1,
                    m = arguments.length,
                    h = !1;
                "boolean" === typeof d && (h = d, d = arguments[e] || {}, e++);
                "object" === typeof d || f.isFunction(d) || (d = {});
                e === m && (d = this, e--);
                for (; e < m; e++)
                    if (null !=
                        (c = arguments[e]))
                        for (b in c) {
                            var p = d[b];
                            var l = c[b];
                            d !== l && (h && l && (f.isPlainObject(l) || (a = f.isArray(l))) ? (a ? (a = !1, p = p && f.isArray(p) ? p : []) : p = p && f.isPlainObject(p) ? p : {}, d[b] = f.extend(h, p, l)) : void 0 !== l && (d[b] = l))
                        }
                return d
            };
            f.extend({
                expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(a) {
                    throw Error(a);
                },
                noop: function() {},
                isFunction: function(a) {
                    return "function" === f.type(a)
                },
                isArray: Array.isArray || function(a) {
                    return "array" === f.type(a)
                },
                isWindow: function(a) {
                    return null !=
                        a && a == a.window
                },
                isNumeric: function(a) {
                    var b = a && a.toString();
                    return !f.isArray(a) && 0 <= b - parseFloat(b) + 1
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                isPlainObject: function(a) {
                    var b;
                    if (!a || "object" !== f.type(a) || a.nodeType || f.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !ta.call(a, "constructor") && !ta.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (B) {
                        return !1
                    }
                    if (!F.ownFirst)
                        for (b in a) return ta.call(a, b);
                    for (b in a);
                    return void 0 === b || ta.call(a, b)
                },
                type: function(a) {
                    return null ==
                        a ? a + "" : "object" === typeof a || "function" === typeof a ? V[Ab.call(a)] || "object" : typeof a
                },
                globalEval: function(b) {
                    b && f.trim(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function(a) {
                    return a.replace(tb, "ms-").replace(Xa, fb)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                },
                each: function(a, b) {
                    var c, g = 0;
                    if (d(a))
                        for (c = a.length; g < c && !1 !== b.call(a[g], g, a[g]); g++);
                    else
                        for (g in a)
                            if (!1 === b.call(a[g], g, a[g])) break;
                    return a
                },
                trim: function(a) {
                    return null == a ?
                        "" : (a + "").replace(ab, "")
                },
                makeArray: function(a, b) {
                    b = b || [];
                    null != a && (d(Object(a)) ? f.merge(b, "string" === typeof a ? [a] : a) : mb.call(b, a));
                    return b
                },
                inArray: function(a, b, c) {
                    if (b) {
                        if (oa) return oa.call(b, a, c);
                        var g = b.length;
                        for (c = c ? 0 > c ? Math.max(0, g + c) : c : 0; c < g; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function(a, b) {
                    for (var c = +b.length, g = 0, d = a.length; g < c;) a[d++] = b[g++];
                    if (c !== c)
                        for (; void 0 !== b[g];) a[d++] = b[g++];
                    a.length = d;
                    return a
                },
                grep: function(a, b, c) {
                    for (var g = [], d = 0, f = a.length, q = !c; d < f; d++) c = !b(a[d],
                        d), c !== q && g.push(a[d]);
                    return g
                },
                map: function(a, b, c) {
                    var g, f = 0,
                        q = [];
                    if (d(a))
                        for (g = a.length; f < g; f++) {
                            var e = b(a[f], f, c);
                            null != e && q.push(e)
                        } else
                            for (f in a) e = b(a[f], f, c), null != e && q.push(e);
                    return Ea.apply([], q)
                },
                guid: 1,
                proxy: function(a, b) {
                    if ("string" === typeof b) {
                        var c = a[b];
                        b = a;
                        a = c
                    }
                    if (f.isFunction(a)) {
                        var g = Ka.call(arguments, 2);
                        c = function() {
                            return a.apply(b || this, g.concat(Ka.call(arguments)))
                        };
                        c.guid = a.guid = a.guid || f.guid++;
                        return c
                    }
                },
                now: function() {
                    return +new Date
                },
                support: F
            });
            $jscomp.initSymbol();
            "function" ===
            typeof Symbol && ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.initSymbol(), $jscomp.initSymbolIterator(), f.fn[Symbol.iterator] = Aa[Symbol.iterator]);
            f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
                V["[object " + b + "]"] = b.toLowerCase()
            });
            var Q = function(a) {
                function b(a, b, c, g) {
                    var u, d, f, M, q = b && b.ownerDocument,
                        e = b ? b.nodeType : 9;
                    c = c || [];
                    if ("string" !== typeof a || !a || 1 !== e && 9 !== e && 11 !== e) return c;
                    if (!g && ((b ? b.ownerDocument || b : W) !== y && Ja(b), b = b ||
                            y, L)) {
                        if (11 !== e && (M = da.exec(a)))
                            if (u = M[1])
                                if (9 === e)
                                    if (d = b.getElementById(u)) {
                                        if (d.id === u) return c.push(d), c
                                    } else return c;
                        else {
                            if (q && (d = q.getElementById(u)) && J(b, d) && d.id === u) return c.push(d), c
                        } else {
                            if (M[2]) return N.apply(c, b.getElementsByTagName(a)), c;
                            if ((u = M[3]) && O.getElementsByClassName && b.getElementsByClassName) return N.apply(c, b.getElementsByClassName(u)), c
                        }
                        if (!(!O.qsa || ua[a + " "] || F && F.test(a))) {
                            if (1 !== e) {
                                q = b;
                                var B = a
                            } else if ("object" !== b.nodeName.toLowerCase()) {
                                (f = b.getAttribute("id")) ? f = f.replace(ya,
                                    "\\$\x26"): b.setAttribute("id", f = Y);
                                M = qa(a);
                                u = M.length;
                                for (d = U.test(f) ? "#" + f : "[id\x3d'" + f + "']"; u--;) M[u] = d + " " + x(M[u]);
                                B = M.join(",");
                                q = ia.test(a) && l(b.parentNode) || b
                            }
                            if (B) try {
                                return N.apply(c, q.querySelectorAll(B)), c
                            } catch (id) {} finally {
                                f === Y && b.removeAttribute("id")
                            }
                        }
                    }
                    return ra(a.replace(Q, "$1"), b, c, g)
                }

                function c() {
                    function a(c, g) {
                        b.push(c + " ") > ka.cacheLength && delete a[b.shift()];
                        return a[c + " "] = g
                    }
                    var b = [];
                    return a
                }

                function g(a) {
                    a[Y] = !0;
                    return a
                }

                function d(a) {
                    var b = y.createElement("div");
                    try {
                        return !!a(b)
                    } catch (gd) {
                        return !1
                    } finally {
                        b.parentNode &&
                            b.parentNode.removeChild(b)
                    }
                }

                function f(a, b) {
                    a = a.split("|");
                    for (var c = a.length; c--;) ka.attrHandle[a[c]] = b
                }

                function e(a, b) {
                    var c = b && a,
                        g = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
                    if (g) return g;
                    if (c)
                        for (; c = c.nextSibling;)
                            if (c === b) return -1;
                    return a ? 1 : -1
                }

                function m(a) {
                    return function(b) {
                        return "input" === b.nodeName.toLowerCase() && b.type === a
                    }
                }

                function h(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && b.type === a
                    }
                }

                function p(a) {
                    return g(function(b) {
                        b = +b;
                        return g(function(c, g) {
                            for (var u, d = a([], c.length, b), f = d.length; f--;) c[u = d[f]] && (c[u] = !(g[u] = c[u]))
                        })
                    })
                }

                function l(a) {
                    return a && "undefined" !== typeof a.getElementsByTagName && a
                }

                function k() {}

                function x(a) {
                    for (var b = 0, c = a.length, g = ""; b < c; b++) g += a[b].value;
                    return g
                }

                function r(a, b, c) {
                    var g = b.dir,
                        d = c && "parentNode" === g,
                        f = u++;
                    return b.first ? function(b, c, u) {
                        for (; b = b[g];)
                            if (1 === b.nodeType || d) return a(b, c, u)
                    } : function(b, c, u) {
                        var M, q = [K, f];
                        if (u)
                            for (; b = b[g];) {
                                if ((1 === b.nodeType ||
                                        d) && a(b, c, u)) return !0
                            } else
                                for (; b = b[g];)
                                    if (1 === b.nodeType || d) {
                                        var e = b[Y] || (b[Y] = {});
                                        e = e[b.uniqueID] || (e[b.uniqueID] = {});
                                        if ((M = e[g]) && M[0] === K && M[1] === f) return q[2] = M[2];
                                        e[g] = q;
                                        if (q[2] = a(b, c, u)) return !0
                                    }
                    }
                }

                function w(a) {
                    return 1 < a.length ? function(b, c, g) {
                        for (var u = a.length; u--;)
                            if (!a[u](b, c, g)) return !1;
                        return !0
                    } : a[0]
                }

                function n(a, b, c, g, u) {
                    for (var d, f = [], M = 0, q = a.length, e = null != b; M < q; M++)
                        if (d = a[M])
                            if (!c || c(d, g, u)) f.push(d), e && b.push(M);
                    return f
                }

                function D(a, c, u, d, f, M) {
                    d && !d[Y] && (d = D(d));
                    f && !f[Y] && (f = D(f,
                        M));
                    return g(function(g, M, q, e) {
                        var B, m = [],
                            P = [],
                            X = M.length,
                            h;
                        if (!(h = g)) {
                            h = c || "*";
                            for (var p = q.nodeType ? [q] : q, ua = [], xa = 0, l = p.length; xa < l; xa++) b(h, p[xa], ua);
                            h = ua
                        }
                        h = !a || !g && c ? h : n(h, m, a, q, e);
                        p = u ? f || (g ? a : X || d) ? [] : M : h;
                        u && u(h, p, q, e);
                        if (d) {
                            var Pa = n(p, P);
                            d(Pa, [], q, e);
                            for (q = Pa.length; q--;)
                                if (B = Pa[q]) p[P[q]] = !(h[P[q]] = B)
                        }
                        if (g) {
                            if (f || a) {
                                if (f) {
                                    Pa = [];
                                    for (q = p.length; q--;)(B = p[q]) && Pa.push(h[q] = B);
                                    f(null, p = [], Pa, e)
                                }
                                for (q = p.length; q--;)(B = p[q]) && -1 < (Pa = f ? fa(g, B) : m[q]) && (g[Pa] = !(M[Pa] = B))
                            }
                        } else p = n(p === M ? p.splice(X,
                            p.length) : p), f ? f(null, M, p, e) : N.apply(M, p)
                    })
                }

                function na(a) {
                    var b, c, g = a.length,
                        u = ka.relative[a[0].type];
                    var d = u || ka.relative[" "];
                    for (var f = u ? 1 : 0, M = r(function(a) {
                            return a === b
                        }, d, !0), q = r(function(a) {
                            return -1 < fa(b, a)
                        }, d, !0), e = [function(a, c, g) {
                            a = !u && (g || c !== v) || ((b = c).nodeType ? M(a, c, g) : q(a, c, g));
                            b = null;
                            return a
                        }]; f < g; f++)
                        if (d = ka.relative[a[f].type]) e = [r(w(e), d)];
                        else {
                            d = ka.filter[a[f].type].apply(null, a[f].matches);
                            if (d[Y]) {
                                for (c = ++f; c < g && !ka.relative[a[c].type]; c++);
                                return D(1 < f && w(e), 1 < f && x(a.slice(0,
                                    f - 1).concat({
                                    value: " " === a[f - 2].type ? "*" : ""
                                })).replace(Q, "$1"), d, f < c && na(a.slice(f, c)), c < g && na(a = a.slice(c)), c < g && x(a))
                            }
                            e.push(d)
                        } return w(e)
                }

                function C(a, c) {
                    var u = 0 < c.length,
                        d = 0 < a.length,
                        f = function(g, f, M, q, e) {
                            var B, m, P = 0,
                                X = "0",
                                h = g && [],
                                p = [],
                                ua = v,
                                xa = g || d && ka.find.TAG("*", e),
                                Pa = K += null == ua ? 1 : Math.random() || .1,
                                l = xa.length;
                            for (e && (v = f === y || f || e); X !== l && null != (B = xa[X]); X++) {
                                if (d && B) {
                                    var k = 0;
                                    f || B.ownerDocument === y || (Ja(B), M = !L);
                                    for (; m = a[k++];)
                                        if (m(B, f || y, M)) {
                                            q.push(B);
                                            break
                                        } e && (K = Pa)
                                }
                                u && ((B = !m && B) && P--,
                                    g && h.push(B))
                            }
                            P += X;
                            if (u && X !== P) {
                                for (k = 0; m = c[k++];) m(h, p, f, M);
                                if (g) {
                                    if (0 < P)
                                        for (; X--;) h[X] || p[X] || (p[X] = vb.call(q));
                                    p = n(p)
                                }
                                N.apply(q, p);
                                e && !g && 0 < p.length && 1 < P + c.length && b.uniqueSort(q)
                            }
                            e && (K = Pa, v = ua);
                            return h
                        };
                    return u ? g(f) : f
                }
                var z, v, t, A, y, E, L, F, H, I, J, Y = "sizzle" + 1 * new Date,
                    W = a.document,
                    K = 0,
                    u = 0,
                    M = c(),
                    X = c(),
                    ua = c(),
                    Vb = function(a, b) {
                        a === b && (A = !0);
                        return 0
                    },
                    ed = {}.hasOwnProperty,
                    ub = [],
                    vb = ub.pop,
                    Ha = ub.push,
                    N = ub.push,
                    Z = ub.slice,
                    fa = function(a, b) {
                        for (var c = 0, g = a.length; c < g; c++)
                            if (a[c] === b) return c;
                        return -1
                    },
                    R = /[\x20\t\r\n\f]+/g,
                    Q = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
                    ha = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
                    sa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
                    T = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
                    V = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                    U = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
                    S = {
                        ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                        CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                        TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                        ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                        PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                        CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                        bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                        needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
                    },
                    la = /^(?:input|select|textarea|button)$/i,
                    ea = /^h\d$/i,
                    ca =
                    /^[^{]+\{\s*\[native \w/,
                    da = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ia = /[+~]/,
                    ya = /'|\\/g,
                    aa = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
                    ba = function(a, b, c) {
                        a = "0x" + b - 65536;
                        return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
                    },
                    ja = function() {
                        Ja()
                    };
                try {
                    N.apply(ub = Z.call(W.childNodes), W.childNodes), ub[W.childNodes.length].nodeType
                } catch (fd) {
                    N = {
                        apply: ub.length ? function(a, b) {
                            Ha.apply(a, Z.call(b))
                        } : function(a, b) {
                            for (var c = a.length, g = 0; a[c++] = b[g++];);
                            a.length =
                                c - 1
                        }
                    }
                }
                var O = b.support = {};
                var Ga = b.isXML = function(a) {
                    return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
                };
                var Ja = b.setDocument = function(a) {
                    var b;
                    a = a ? a.ownerDocument || a : W;
                    if (a === y || 9 !== a.nodeType || !a.documentElement) return y;
                    y = a;
                    E = y.documentElement;
                    L = !Ga(y);
                    (b = y.defaultView) && b.top !== b && (b.addEventListener ? b.addEventListener("unload", ja, !1) : b.attachEvent && b.attachEvent("onunload", ja));
                    O.attributes = d(function(a) {
                        a.className = "i";
                        return !a.getAttribute("className")
                    });
                    O.getElementsByTagName =
                        d(function(a) {
                            a.appendChild(y.createComment(""));
                            return !a.getElementsByTagName("*").length
                        });
                    O.getElementsByClassName = ca.test(y.getElementsByClassName);
                    O.getById = d(function(a) {
                        E.appendChild(a).id = Y;
                        return !y.getElementsByName || !y.getElementsByName(Y).length
                    });
                    O.getById ? (ka.find.ID = function(a, b) {
                        if ("undefined" !== typeof b.getElementById && L) return (a = b.getElementById(a)) ? [a] : []
                    }, ka.filter.ID = function(a) {
                        var b = a.replace(aa, ba);
                        return function(a) {
                            return a.getAttribute("id") === b
                        }
                    }) : (delete ka.find.ID, ka.filter.ID =
                        function(a) {
                            var b = a.replace(aa, ba);
                            return function(a) {
                                return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                            }
                        });
                    ka.find.TAG = O.getElementsByTagName ? function(a, b) {
                        if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a);
                        if (O.qsa) return b.querySelectorAll(a)
                    } : function(a, b) {
                        var c = [],
                            g = 0;
                        b = b.getElementsByTagName(a);
                        if ("*" === a) {
                            for (; a = b[g++];) 1 === a.nodeType && c.push(a);
                            return c
                        }
                        return b
                    };
                    ka.find.CLASS = O.getElementsByClassName && function(a, b) {
                        if ("undefined" !==
                            typeof b.getElementsByClassName && L) return b.getElementsByClassName(a)
                    };
                    H = [];
                    F = [];
                    if (O.qsa = ca.test(y.querySelectorAll)) d(function(a) {
                        E.appendChild(a).innerHTML = "\x3ca id\x3d'" + Y + "'\x3e\x3c/a\x3e\x3cselect id\x3d'" + Y + "-\r\\' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e";
                        a.querySelectorAll("[msallowcapture^\x3d'']").length && F.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                        a.querySelectorAll("[selected]").length || F.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                        a.querySelectorAll("[id~\x3d" + Y + "-]").length || F.push("~\x3d");
                        a.querySelectorAll(":checked").length || F.push(":checked");
                        a.querySelectorAll("a#" + Y + "+*").length || F.push(".#.+[+~]")
                    }), d(function(a) {
                        var b = y.createElement("input");
                        b.setAttribute("type", "hidden");
                        a.appendChild(b).setAttribute("name", "D");
                        a.querySelectorAll("[name\x3dd]").length && F.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?\x3d");
                        a.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled");
                        a.querySelectorAll("*,:x");
                        F.push(",.*:")
                    });
                    (O.matchesSelector = ca.test(I = E.matches || E.webkitMatchesSelector || E.mozMatchesSelector || E.oMatchesSelector || E.msMatchesSelector)) && d(function(a) {
                        O.disconnectedMatch = I.call(a, "div");
                        I.call(a, "[s!\x3d'']:x");
                        H.push("!\x3d", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                    });
                    F = F.length && new RegExp(F.join("|"));
                    H = H.length && new RegExp(H.join("|"));
                    J = (b = ca.test(E.compareDocumentPosition)) || ca.test(E.contains) ? function(a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a;
                        b = b && b.parentNode;
                        return a === b || !!(b && 1 === b.nodeType && (c.contains ? c.contains(b) : a.compareDocumentPosition && a.compareDocumentPosition(b) & 16))
                    } : function(a, b) {
                        if (b)
                            for (; b = b.parentNode;)
                                if (b === a) return !0;
                        return !1
                    };
                    Vb = b ? function(a, b) {
                        if (a === b) return A = !0, 0;
                        var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        if (c) return c;
                        c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                        return c & 1 || !O.sortDetached && b.compareDocumentPosition(a) === c ? a === y || a.ownerDocument === W && J(W, a) ? -1 : b === y || b.ownerDocument === W && J(W, b) ? 1 : t ? fa(t, a) - fa(t, b) : 0 : c & 4 ? -1 : 1
                    } : function(a, b) {
                        if (a === b) return A = !0, 0;
                        var c = 0,
                            g = a.parentNode,
                            u = b.parentNode,
                            d = [a],
                            f = [b];
                        if (!g || !u) return a === y ? -1 : b === y ? 1 : g ? -1 : u ? 1 : t ? fa(t, a) - fa(t, b) : 0;
                        if (g === u) return e(a, b);
                        for (; a = a.parentNode;) d.unshift(a);
                        for (a = b; a = a.parentNode;) f.unshift(a);
                        for (; d[c] === f[c];) c++;
                        return c ? e(d[c], f[c]) : d[c] === W ? -1 : f[c] === W ? 1 : 0
                    };
                    return y
                };
                b.matches = function(a, c) {
                    return b(a, null, null, c)
                };
                b.matchesSelector = function(a, c) {
                    (a.ownerDocument || a) !== y && Ja(a);
                    c = c.replace(T, "\x3d'$1']");
                    if (!(!O.matchesSelector || !L || ua[c + " "] || H && H.test(c) || F && F.test(c))) try {
                        var g = I.call(a, c);
                        if (g || O.disconnectedMatch || a.document && 11 !== a.document.nodeType) return g
                    } catch (hd) {}
                    return 0 < b(c, y, null, [a]).length
                };
                b.contains = function(a, b) {
                    (a.ownerDocument || a) !== y && Ja(a);
                    return J(a, b)
                };
                b.attr =
                    function(a, b) {
                        (a.ownerDocument || a) !== y && Ja(a);
                        var c = ka.attrHandle[b.toLowerCase()];
                        c = c && ed.call(ka.attrHandle, b.toLowerCase()) ? c(a, b, !L) : void 0;
                        return void 0 !== c ? c : O.attributes || !L ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
                    };
                b.error = function(a) {
                    throw Error("Syntax error, unrecognized expression: " + a);
                };
                b.uniqueSort = function(a) {
                    var b, c = [],
                        g = 0,
                        u = 0;
                    A = !O.detectDuplicates;
                    t = !O.sortStable && a.slice(0);
                    a.sort(Vb);
                    if (A) {
                        for (; b = a[u++];) b === a[u] && (g = c.push(u));
                        for (; g--;) a.splice(c[g],
                            1)
                    }
                    t = null;
                    return a
                };
                var ma = b.getText = function(a) {
                    var b = "",
                        c = 0;
                    var g = a.nodeType;
                    if (!g)
                        for (; g = a[c++];) b += ma(g);
                    else if (1 === g || 9 === g || 11 === g) {
                        if ("string" === typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) b += ma(a)
                    } else if (3 === g || 4 === g) return a.nodeValue;
                    return b
                };
                var ka = b.selectors = {
                    cacheLength: 50,
                    createPseudo: g,
                    match: S,
                    attrHandle: {},
                    find: {},
                    relative: {
                        "\x3e": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(a) {
                            a[1] = a[1].replace(aa, ba);
                            a[3] = (a[3] || a[4] || a[5] || "").replace(aa, ba);
                            "~\x3d" === a[2] && (a[3] = " " + a[3] + " ");
                            return a.slice(0, 4)
                        },
                        CHILD: function(a) {
                            a[1] = a[1].toLowerCase();
                            "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]);
                            return a
                        },
                        PSEUDO: function(a) {
                            var b, c = !a[6] && a[2];
                            if (S.CHILD.test(a[0])) return null;
                            a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = qa(c, !0)) && (b = c.indexOf(")",
                                c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b));
                            return a.slice(0, 3)
                        }
                    },
                    filter: {
                        TAG: function(a) {
                            var b = a.replace(aa, ba).toLowerCase();
                            return "*" === a ? function() {
                                return !0
                            } : function(a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                        },
                        CLASS: function(a) {
                            var b = M[a + " "];
                            return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), M(a, function(a) {
                                return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                            }))
                        },
                        ATTR: function(a,
                            c, g) {
                            return function(u) {
                                u = b.attr(u, a);
                                if (null == u) return "!\x3d" === c;
                                if (!c) return !0;
                                u += "";
                                return "\x3d" === c ? u === g : "!\x3d" === c ? u !== g : "^\x3d" === c ? g && 0 === u.indexOf(g) : "*\x3d" === c ? g && -1 < u.indexOf(g) : "$\x3d" === c ? g && u.slice(-g.length) === g : "~\x3d" === c ? -1 < (" " + u.replace(R, " ") + " ").indexOf(g) : "|\x3d" === c ? u === g || u.slice(0, g.length + 1) === g + "-" : !1
                            }
                        },
                        CHILD: function(a, b, c, g, u) {
                            var d = "nth" !== a.slice(0, 3),
                                f = "last" !== a.slice(-4),
                                M = "of-type" === b;
                            return 1 === g && 0 === u ? function(a) {
                                return !!a.parentNode
                            } : function(b, c, q) {
                                var e,
                                    B;
                                c = d !== f ? "nextSibling" : "previousSibling";
                                var m = b.parentNode,
                                    P = M && b.nodeName.toLowerCase();
                                q = !q && !M;
                                var X = !1;
                                if (m) {
                                    if (d) {
                                        for (; c;) {
                                            for (e = b; e = e[c];)
                                                if (M ? e.nodeName.toLowerCase() === P : 1 === e.nodeType) return !1;
                                            var h = c = "only" === a && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    h = [f ? m.firstChild : m.lastChild];
                                    if (f && q) {
                                        e = m;
                                        var p = e[Y] || (e[Y] = {});
                                        p = p[e.uniqueID] || (p[e.uniqueID] = {});
                                        X = p[a] || [];
                                        X = (B = X[0] === K && X[1]) && X[2];
                                        for (e = B && m.childNodes[B]; e = ++B && e && e[c] || (X = B = 0) || h.pop();)
                                            if (1 === e.nodeType && ++X && e === b) {
                                                p[a] = [K, B, X];
                                                break
                                            }
                                    } else if (q &&
                                        (e = b, p = e[Y] || (e[Y] = {}), p = p[e.uniqueID] || (p[e.uniqueID] = {}), X = p[a] || [], X = B = X[0] === K && X[1]), !1 === X)
                                        for (;
                                            (e = ++B && e && e[c] || (X = B = 0) || h.pop()) && ((M ? e.nodeName.toLowerCase() !== P : 1 !== e.nodeType) || !++X || (q && (p = e[Y] || (e[Y] = {}), p = p[e.uniqueID] || (p[e.uniqueID] = {}), p[a] = [K, X]), e !== b)););
                                    X -= u;
                                    return X === g || 0 === X % g && 0 <= X / g
                                }
                            }
                        },
                        PSEUDO: function(a, c) {
                            var u = ka.pseudos[a] || ka.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                            if (u[Y]) return u(c);
                            if (1 < u.length) {
                                var d = [a, a, "", c];
                                return ka.setFilters.hasOwnProperty(a.toLowerCase()) ?
                                    g(function(a, b) {
                                        for (var g, d = u(a, c), f = d.length; f--;) g = fa(a, d[f]), a[g] = !(b[g] = d[f])
                                    }) : function(a) {
                                        return u(a, 0, d)
                                    }
                            }
                            return u
                        }
                    },
                    pseudos: {
                        not: g(function(a) {
                            var b = [],
                                c = [],
                                u = oa(a.replace(Q, "$1"));
                            return u[Y] ? g(function(a, b, c, g) {
                                g = u(a, null, g, []);
                                for (var d = a.length; d--;)
                                    if (c = g[d]) a[d] = !(b[d] = c)
                            }) : function(a, g, d) {
                                b[0] = a;
                                u(b, null, d, c);
                                b[0] = null;
                                return !c.pop()
                            }
                        }),
                        has: g(function(a) {
                            return function(c) {
                                return 0 < b(a, c).length
                            }
                        }),
                        contains: g(function(a) {
                            a = a.replace(aa, ba);
                            return function(b) {
                                return -1 < (b.textContent ||
                                    b.innerText || ma(b)).indexOf(a)
                            }
                        }),
                        lang: g(function(a) {
                            U.test(a || "") || b.error("unsupported lang: " + a);
                            a = a.replace(aa, ba).toLowerCase();
                            return function(b) {
                                var c;
                                do
                                    if (c = L ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                        }),
                        target: function(b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id
                        },
                        root: function(a) {
                            return a === E
                        },
                        focus: function(a) {
                            return a === y.activeElement && (!y.hasFocus ||
                                y.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                        },
                        enabled: function(a) {
                            return !1 === a.disabled
                        },
                        disabled: function(a) {
                            return !0 === a.disabled
                        },
                        checked: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected
                        },
                        selected: function(a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return !0 === a.selected
                        },
                        empty: function(a) {
                            for (a = a.firstChild; a; a = a.nextSibling)
                                if (6 > a.nodeType) return !1;
                            return !0
                        },
                        parent: function(a) {
                            return !ka.pseudos.empty(a)
                        },
                        header: function(a) {
                            return ea.test(a.nodeName)
                        },
                        input: function(a) {
                            return la.test(a.nodeName)
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        text: function(a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                        },
                        first: p(function() {
                            return [0]
                        }),
                        last: p(function(a, b) {
                            return [b - 1]
                        }),
                        eq: p(function(a, b, c) {
                            return [0 > c ? c + b : c]
                        }),
                        even: p(function(a, b) {
                            for (var c = 0; c < b; c += 2) a.push(c);
                            return a
                        }),
                        odd: p(function(a, b) {
                            for (var c = 1; c < b; c +=
                                2) a.push(c);
                            return a
                        }),
                        lt: p(function(a, b, c) {
                            for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                            return a
                        }),
                        gt: p(function(a, b, c) {
                            for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
                            return a
                        })
                    }
                };
                ka.pseudos.nth = ka.pseudos.eq;
                for (z in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) ka.pseudos[z] = m(z);
                for (z in {
                        submit: !0,
                        reset: !0
                    }) ka.pseudos[z] = h(z);
                k.prototype = ka.filters = ka.pseudos;
                ka.setFilters = new k;
                var qa = b.tokenize = function(a, c) {
                    var g, u, d, f, e;
                    if (f = X[a + " "]) return c ? 0 : f.slice(0);
                    f = a;
                    var M = [];
                    for (e = ka.preFilter; f;) {
                        if (!q || (g = ha.exec(f))) g &&
                            (f = f.slice(g[0].length) || f), M.push(u = []);
                        var q = !1;
                        if (g = sa.exec(f)) q = g.shift(), u.push({
                            value: q,
                            type: g[0].replace(Q, " ")
                        }), f = f.slice(q.length);
                        for (d in ka.filter) !(g = S[d].exec(f)) || e[d] && !(g = e[d](g)) || (q = g.shift(), u.push({
                            value: q,
                            type: d,
                            matches: g
                        }), f = f.slice(q.length));
                        if (!q) break
                    }
                    return c ? f.length : f ? b.error(a) : X(a, M).slice(0)
                };
                var oa = b.compile = function(a, b) {
                    var c, g = [],
                        u = [],
                        d = ua[a + " "];
                    if (!d) {
                        b || (b = qa(a));
                        for (c = b.length; c--;) d = na(b[c]), d[Y] ? g.push(d) : u.push(d);
                        d = ua(a, C(u, g));
                        d.selector = a
                    }
                    return d
                };
                var ra = b.select = function(a, b, c, g) {
                    var u, d, f, e = "function" === typeof a && a,
                        q = !g && qa(a = e.selector || a);
                    c = c || [];
                    if (1 === q.length) {
                        var M = q[0] = q[0].slice(0);
                        if (2 < M.length && "ID" === (d = M[0]).type && O.getById && 9 === b.nodeType && L && ka.relative[M[1].type]) {
                            b = (ka.find.ID(d.matches[0].replace(aa, ba), b) || [])[0];
                            if (!b) return c;
                            e && (b = b.parentNode);
                            a = a.slice(M.shift().value.length)
                        }
                        for (u = S.needsContext.test(a) ? 0 : M.length; u--;) {
                            d = M[u];
                            if (ka.relative[f = d.type]) break;
                            if (f = ka.find[f])
                                if (g = f(d.matches[0].replace(aa, ba), ia.test(M[0].type) &&
                                        l(b.parentNode) || b)) {
                                    M.splice(u, 1);
                                    a = g.length && x(M);
                                    if (!a) return N.apply(c, g), c;
                                    break
                                }
                        }
                    }(e || oa(a, q))(g, b, !L, c, !b || ia.test(a) && l(b.parentNode) || b);
                    return c
                };
                O.sortStable = Y.split("").sort(Vb).join("") === Y;
                O.detectDuplicates = !!A;
                Ja();
                O.sortDetached = d(function(a) {
                    return a.compareDocumentPosition(y.createElement("div")) & 1
                });
                d(function(a) {
                    a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
                    return "#" === a.firstChild.getAttribute("href")
                }) || f("type|href|height|width", function(a, b, c) {
                    if (!c) return a.getAttribute(b,
                        "type" === b.toLowerCase() ? 1 : 2)
                });
                O.attributes && d(function(a) {
                    a.innerHTML = "\x3cinput/\x3e";
                    a.firstChild.setAttribute("value", "");
                    return "" === a.firstChild.getAttribute("value")
                }) || f("value", function(a, b, c) {
                    if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
                });
                d(function(a) {
                    return null == a.getAttribute("disabled")
                }) || f("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
                    var g;
                    if (!c) return !0 === a[b] ? b.toLowerCase() :
                        (g = a.getAttributeNode(b)) && g.specified ? g.value : null
                });
                return b
            }(a);
            f.find = Q;
            f.expr = Q.selectors;
            f.expr[":"] = f.expr.pseudos;
            f.uniqueSort = f.unique = Q.uniqueSort;
            f.text = Q.getText;
            f.isXMLDoc = Q.isXML;
            f.contains = Q.contains;
            var v = function(a, b, c) {
                    for (var g = [], d = void 0 !== c;
                        (a = a[b]) && 9 !== a.nodeType;)
                        if (1 === a.nodeType) {
                            if (d && f(a).is(c)) break;
                            g.push(a)
                        } return g
                },
                z = function(a, b) {
                    for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                    return c
                },
                aa = f.expr.match.needsContext,
                ca = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                ja = /^.[^:#\[\.,]*$/;
            f.filter = function(a, b, c) {
                var g = b[0];
                c && (a = ":not(" + a + ")");
                return 1 === b.length && 1 === g.nodeType ? f.find.matchesSelector(g, a) ? [g] : [] : f.find.matches(a, f.grep(b, function(a) {
                    return 1 === a.nodeType
                }))
            };
            f.fn.extend({
                find: function(a) {
                    var b, c = [],
                        g = this,
                        d = g.length;
                    if ("string" !== typeof a) return this.pushStack(f(a).filter(function() {
                        for (b = 0; b < d; b++)
                            if (f.contains(g[b], this)) return !0
                    }));
                    for (b = 0; b < d; b++) f.find(a, g[b], c);
                    c = this.pushStack(1 < d ? f.unique(c) : c);
                    c.selector = this.selector ? this.selector + " " +
                        a : a;
                    return c
                },
                filter: function(a) {
                    return this.pushStack(w(this, a || [], !1))
                },
                not: function(a) {
                    return this.pushStack(w(this, a || [], !0))
                },
                is: function(a) {
                    return !!w(this, "string" === typeof a && aa.test(a) ? f(a) : a || [], !1).length
                }
            });
            var Cb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            (f.fn.init = function(a, b, c) {
                if (!a) return this;
                c = c || Db;
                if ("string" === typeof a) {
                    var g = "\x3c" === a.charAt(0) && "\x3e" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : Cb.exec(a);
                    if (!g || !g[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (g[1]) {
                        if (b = b instanceof f ? b[0] : b, f.merge(this, f.parseHTML(g[1], b && b.nodeType ? b.ownerDocument || b : I, !0)), ca.test(g[1]) && f.isPlainObject(b))
                            for (g in b)
                                if (f.isFunction(this[g])) this[g](b[g]);
                                else this.attr(g, b[g])
                    } else {
                        if ((b = I.getElementById(g[2])) && b.parentNode) {
                            if (b.id !== g[2]) return Db.find(a);
                            this.length = 1;
                            this[0] = b
                        }
                        this.context = I;
                        this.selector = a
                    }
                    return this
                }
                if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                if (f.isFunction(a)) return "undefined" !== typeof c.ready ? c.ready(a) : a(f);
                void 0 !==
                    a.selector && (this.selector = a.selector, this.context = a.context);
                return f.makeArray(a, this)
            }).prototype = f.fn;
            var Db = f(I);
            var Nb = /^(?:parents|prev(?:Until|All))/,
                m = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            f.fn.extend({
                has: function(a) {
                    var b, c = f(a, this),
                        g = c.length;
                    return this.filter(function() {
                        for (b = 0; b < g; b++)
                            if (f.contains(this, c[b])) return !0
                    })
                },
                closest: function(a, b) {
                    for (var c, g = 0, d = this.length, e = [], q = aa.test(a) || "string" !== typeof a ? f(a, b || this.context) : 0; g < d; g++)
                        for (c = this[g]; c && c !== b; c = c.parentNode)
                            if (11 >
                                c.nodeType && (q ? -1 < q.index(c) : 1 === c.nodeType && f.find.matchesSelector(c, a))) {
                                e.push(c);
                                break
                            } return this.pushStack(1 < e.length ? f.uniqueSort(e) : e)
                },
                index: function(a) {
                    return a ? "string" === typeof a ? f.inArray(this[0], f(a)) : f.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(a, b) {
                    return this.pushStack(f.uniqueSort(f.merge(this.get(), f(a, b))))
                },
                addBack: function(a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                }
            });
            f.each({
                parent: function(a) {
                    return (a =
                        a.parentNode) && 11 !== a.nodeType ? a : null
                },
                parents: function(a) {
                    return v(a, "parentNode")
                },
                parentsUntil: function(a, b, c) {
                    return v(a, "parentNode", c)
                },
                next: function(a) {
                    return n(a, "nextSibling")
                },
                prev: function(a) {
                    return n(a, "previousSibling")
                },
                nextAll: function(a) {
                    return v(a, "nextSibling")
                },
                prevAll: function(a) {
                    return v(a, "previousSibling")
                },
                nextUntil: function(a, b, c) {
                    return v(a, "nextSibling", c)
                },
                prevUntil: function(a, b, c) {
                    return v(a, "previousSibling", c)
                },
                siblings: function(a) {
                    return z((a.parentNode || {}).firstChild,
                        a)
                },
                children: function(a) {
                    return z(a.firstChild)
                },
                contents: function(a) {
                    return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.merge([], a.childNodes)
                }
            }, function(a, b) {
                f.fn[a] = function(c, g) {
                    var d = f.map(this, b, c);
                    "Until" !== a.slice(-5) && (g = c);
                    g && "string" === typeof g && (d = f.filter(g, d));
                    1 < this.length && (m[a] || (d = f.uniqueSort(d)), Nb.test(a) && (d = d.reverse()));
                    return this.pushStack(d)
                }
            });
            var p = /\S+/g;
            f.Callbacks = function(a) {
                a = "string" === typeof a ? h(a) : f.extend({}, a);
                var b, c, g, d, e = [],
                    m = [],
                    p = -1,
                    l = function() {
                        d = a.once;
                        for (g = b = !0; m.length; p = -1)
                            for (c = m.shift(); ++p < e.length;) !1 === e[p].apply(c[0], c[1]) && a.stopOnFalse && (p = e.length, c = !1);
                        a.memory || (c = !1);
                        b = !1;
                        d && (e = c ? [] : "")
                    },
                    k = {
                        add: function() {
                            e && (c && !b && (p = e.length - 1, m.push(c)), function $a(b) {
                                f.each(b, function(b, c) {
                                    f.isFunction(c) ? a.unique && k.has(c) || e.push(c) : c && c.length && "string" !== f.type(c) && $a(c)
                                })
                            }(arguments), c && !b && l());
                            return this
                        },
                        remove: function() {
                            f.each(arguments, function(a, b) {
                                for (var c; - 1 < (c = f.inArray(b, e, c));) e.splice(c, 1), c <= p &&
                                    p--
                            });
                            return this
                        },
                        has: function(a) {
                            return a ? -1 < f.inArray(a, e) : 0 < e.length
                        },
                        empty: function() {
                            e && (e = []);
                            return this
                        },
                        disable: function() {
                            d = m = [];
                            e = c = "";
                            return this
                        },
                        disabled: function() {
                            return !e
                        },
                        lock: function() {
                            d = !0;
                            c || k.disable();
                            return this
                        },
                        locked: function() {
                            return !!d
                        },
                        fireWith: function(a, c) {
                            d || (c = c || [], c = [a, c.slice ? c.slice() : c], m.push(c), b || l());
                            return this
                        },
                        fire: function() {
                            k.fireWith(this, arguments);
                            return this
                        },
                        fired: function() {
                            return !!g
                        }
                    };
                return k
            };
            f.extend({
                Deferred: function(a) {
                    var b = [
                            ["resolve",
                                "done", f.Callbacks("once memory"), "resolved"
                            ],
                            ["reject", "fail", f.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", f.Callbacks("memory")]
                        ],
                        c = "pending",
                        g = {
                            state: function() {
                                return c
                            },
                            always: function() {
                                d.done(arguments).fail(arguments);
                                return this
                            },
                            then: function() {
                                var a = arguments;
                                return f.Deferred(function(c) {
                                    f.each(b, function(b, e) {
                                        var q = f.isFunction(a[b]) && a[b];
                                        d[e[1]](function() {
                                            var a = q && q.apply(this, arguments);
                                            if (a && f.isFunction(a.promise)) a.promise().progress(c.notify).done(c.resolve).fail(c.reject);
                                            else c[e[0] + "With"](this === g ? c.promise() : this, q ? [a] : arguments)
                                        })
                                    });
                                    a = null
                                }).promise()
                            },
                            promise: function(a) {
                                return null != a ? f.extend(a, g) : g
                            }
                        },
                        d = {};
                    g.pipe = g.then;
                    f.each(b, function(a, f) {
                        var e = f[2],
                            q = f[3];
                        g[f[1]] = e.add;
                        q && e.add(function() {
                            c = q
                        }, b[a ^ 1][2].disable, b[2][2].lock);
                        d[f[0]] = function() {
                            d[f[0] + "With"](this === d ? g : this, arguments);
                            return this
                        };
                        d[f[0] + "With"] = e.fireWith
                    });
                    g.promise(d);
                    a && a.call(d, d);
                    return d
                },
                when: function(a) {
                    var b = 0,
                        c = Ka.call(arguments),
                        g = c.length,
                        d = 1 !== g || a && f.isFunction(a.promise) ?
                        g : 0,
                        e = 1 === d ? a : f.Deferred(),
                        m = function(a, b, c) {
                            return function(g) {
                                b[a] = this;
                                c[a] = 1 < arguments.length ? Ka.call(arguments) : g;
                                c === p ? e.notifyWith(b, c) : --d || e.resolveWith(b, c)
                            }
                        },
                        h;
                    if (1 < g) {
                        var p = Array(g);
                        var l = Array(g);
                        for (h = Array(g); b < g; b++) c[b] && f.isFunction(c[b].promise) ? c[b].promise().progress(m(b, l, p)).done(m(b, h, c)).fail(e.reject) : --d
                    }
                    d || e.resolveWith(h, c);
                    return e.promise()
                }
            });
            var na;
            f.fn.ready = function(a) {
                f.ready.promise().done(a);
                return this
            };
            f.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ?
                        f.readyWait++ : f.ready(!0)
                },
                ready: function(a) {
                    (!0 === a ? --f.readyWait : f.isReady) || (f.isReady = !0, !0 !== a && 0 < --f.readyWait || (na.resolveWith(I, [f]), f.fn.triggerHandler && (f(I).triggerHandler("ready"), f(I).off("ready"))))
                }
            });
            f.ready.promise = function(b) {
                if (!na)
                    if (na = f.Deferred(), "complete" === I.readyState || "loading" !== I.readyState && !I.documentElement.doScroll) a.setTimeout(f.ready);
                    else if (I.addEventListener) I.addEventListener("DOMContentLoaded", e), a.addEventListener("load", e);
                else {
                    I.attachEvent("onreadystatechange",
                        e);
                    a.attachEvent("onload", e);
                    var c = !1;
                    try {
                        c = null == a.frameElement && I.documentElement
                    } catch (B) {}
                    c && c.doScroll && function P() {
                        if (!f.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (xa) {
                                return a.setTimeout(P, 50)
                            }
                            r();
                            f.ready()
                        }
                    }()
                }
                return na.promise(b)
            };
            f.ready.promise();
            for (var Y in f(F)) break;
            F.ownFirst = "0" === Y;
            F.inlineBlockNeedsLayout = !1;
            f(function() {
                var a;
                if ((a = I.getElementsByTagName("body")[0]) && a.style) {
                    var b = I.createElement("div");
                    var c = I.createElement("div");
                    c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                    a.appendChild(c).appendChild(b);
                    "undefined" !== typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", F.inlineBlockNeedsLayout = b = 3 === b.offsetWidth) && (a.style.zoom = 1);
                    a.removeChild(c)
                }
            });
            (function() {
                var a = I.createElement("div");
                F.deleteExpando = !0;
                try {
                    delete a.test
                } catch (q) {
                    F.deleteExpando = !1
                }
            })();
            var sa = function(a) {
                    var b = f.noData[(a.nodeName + " ").toLowerCase()],
                        c = +a.nodeType || 1;
                    return 1 !== c && 9 !== c ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
                },
                ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                sc = /([A-Z])/g;
            f.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(a) {
                    a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
                    return !!a && !x(a)
                },
                data: function(a, b, c) {
                    return C(a, b, c)
                },
                removeData: function(a, b) {
                    return t(a, b)
                },
                _data: function(a, b, c) {
                    return C(a, b, c, !0)
                },
                _removeData: function(a, b) {
                    return t(a, b, !0)
                }
            });
            f.fn.extend({
                data: function(a, b) {
                    var g, d = this[0],
                        e = d && d.attributes;
                    if (void 0 === a) {
                        if (this.length) {
                            var q = f.data(d);
                            if (1 === d.nodeType &&
                                !f._data(d, "parsedAttrs")) {
                                for (g = e.length; g--;)
                                    if (e[g]) {
                                        var m = e[g].name;
                                        0 === m.indexOf("data-") && (m = f.camelCase(m.slice(5)), c(d, m, q[m]))
                                    } f._data(d, "parsedAttrs", !0)
                            }
                        }
                        return q
                    }
                    return "object" === typeof a ? this.each(function() {
                        f.data(this, a)
                    }) : 1 < arguments.length ? this.each(function() {
                        f.data(this, a, b)
                    }) : d ? c(d, a, f.data(d, a)) : void 0
                },
                removeData: function(a) {
                    return this.each(function() {
                        f.removeData(this, a)
                    })
                }
            });
            f.extend({
                queue: function(a, b, c) {
                    if (a) {
                        b = (b || "fx") + "queue";
                        var g = f._data(a, b);
                        c && (!g || f.isArray(c) ?
                            g = f._data(a, b, f.makeArray(c)) : g.push(c));
                        return g || []
                    }
                },
                dequeue: function(a, b) {
                    b = b || "fx";
                    var c = f.queue(a, b),
                        g = c.length,
                        d = c.shift(),
                        e = f._queueHooks(a, b),
                        q = function() {
                            f.dequeue(a, b)
                        };
                    "inprogress" === d && (d = c.shift(), g--);
                    d && ("fx" === b && c.unshift("inprogress"), delete e.stop, d.call(a, q, e));
                    !g && e && e.empty.fire()
                },
                _queueHooks: function(a, b) {
                    var c = b + "queueHooks";
                    return f._data(a, c) || f._data(a, c, {
                        empty: f.Callbacks("once memory").add(function() {
                            f._removeData(a, b + "queue");
                            f._removeData(a, c)
                        })
                    })
                }
            });
            f.fn.extend({
                queue: function(a,
                    b) {
                    var c = 2;
                    "string" !== typeof a && (b = a, a = "fx", c--);
                    return arguments.length < c ? f.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                        var c = f.queue(this, a, b);
                        f._queueHooks(this, a);
                        "fx" === a && "inprogress" !== c[0] && f.dequeue(this, a)
                    })
                },
                dequeue: function(a) {
                    return this.each(function() {
                        f.dequeue(this, a)
                    })
                },
                clearQueue: function(a) {
                    return this.queue(a || "fx", [])
                },
                promise: function(a, b) {
                    var c, g = 1,
                        d = f.Deferred(),
                        e = this,
                        q = this.length,
                        m = function() {
                            --g || d.resolveWith(e, [e])
                        };
                    "string" !== typeof a && (b = a, a = void 0);
                    for (a =
                        a || "fx"; q--;)(c = f._data(e[q], a + "queueHooks")) && c.empty && (g++, c.empty.add(m));
                    m();
                    return d.promise(b)
                }
            });
            (function() {
                var a;
                F.shrinkWrapBlocks = function() {
                    if (null != a) return a;
                    a = !1;
                    var b;
                    if ((b = I.getElementsByTagName("body")[0]) && b.style) {
                        var c = I.createElement("div");
                        var g = I.createElement("div");
                        g.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                        b.appendChild(g).appendChild(c);
                        "undefined" !== typeof c.style.zoom && (c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                            c.appendChild(I.createElement("div")).style.width = "5px", a = 3 !== c.offsetWidth);
                        b.removeChild(g);
                        return a
                    }
                }
            })();
            var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Hb = new RegExp("^(?:([+-])\x3d|)(" + vb + ")([a-z%]*)$", "i"),
                Ja = ["Top", "Right", "Bottom", "Left"],
                ea = function(a, b) {
                    a = b || a;
                    return "none" === f.css(a, "display") || !f.contains(a.ownerDocument, a)
                },
                Qa = function(a, b, c, d, e, m, h) {
                    var g = 0,
                        q = a.length,
                        B = null == c;
                    if ("object" === f.type(c))
                        for (g in e = !0, c) Qa(a, b, g, c[g], !0, m, h);
                    else if (void 0 !== d && (e = !0, f.isFunction(d) ||
                            (h = !0), B && (h ? (b.call(a, d), b = null) : (B = b, b = function(a, b, c) {
                                return B.call(f(a), c)
                            })), b))
                        for (; g < q; g++) b(a[g], c, h ? d : d.call(a[g], g, b(a[g], c)));
                    return e ? a : B ? b.call(a) : q ? b(a[0], c) : m
                },
                Tb = /^(?:checkbox|radio)$/i,
                dc = /<([\w:-]+)/,
                ec = /^$|\/(?:java|ecma)script/i,
                Ib = /^\s+/;
            (function() {
                var a = I.createElement("div"),
                    b = I.createDocumentFragment(),
                    c = I.createElement("input");
                a.innerHTML = "  \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
                F.leadingWhitespace = 3 ===
                    a.firstChild.nodeType;
                F.tbody = !a.getElementsByTagName("tbody").length;
                F.htmlSerialize = !!a.getElementsByTagName("link").length;
                F.html5Clone = "\x3c:nav\x3e\x3c/:nav\x3e" !== I.createElement("nav").cloneNode(!0).outerHTML;
                c.type = "checkbox";
                c.checked = !0;
                b.appendChild(c);
                F.appendChecked = c.checked;
                a.innerHTML = "\x3ctextarea\x3ex\x3c/textarea\x3e";
                F.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue;
                b.appendChild(a);
                c = I.createElement("input");
                c.setAttribute("type", "radio");
                c.setAttribute("checked", "checked");
                c.setAttribute("name", "t");
                a.appendChild(c);
                F.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
                F.noCloneEvent = !!a.addEventListener;
                a[f.expando] = 1;
                F.attributes = !a.getAttribute(f.expando)
            })();
            var Sa = {
                option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
                legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"],
                area: [1, "\x3cmap\x3e", "\x3c/map\x3e"],
                param: [1, "\x3cobject\x3e", "\x3c/object\x3e"],
                thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
                tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
                col: [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
                td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
                _default: F.htmlSerialize ? [0, "", ""] : [1, "X\x3cdiv\x3e", "\x3c/div\x3e"]
            };
            Sa.optgroup = Sa.option;
            Sa.tbody = Sa.tfoot = Sa.colgroup = Sa.caption = Sa.thead;
            Sa.th = Sa.td;
            var tc = /<|&#?\w+;/,
                Jb = /<tbody/i;
            (function() {
                var b, c = I.createElement("div");
                for (b in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) {
                    var d = "on" + b;
                    (F[b] = d in a) || (c.setAttribute(d,
                        "t"), F[b] = !1 === c.attributes[d].expando)
                }
            })();
            var Wb = /^(?:input|select|textarea)$/i,
                Ic = /^key/,
                vc = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ob = /^(?:focusinfocus|focusoutblur)$/,
                gc = /^([^.]*)(?:\.(.+)|)/;
            f.event = {
                global: {},
                add: function(a, b, c, d, e) {
                    var g, q, m, B, h;
                    if (q = f._data(a)) {
                        if (c.handler) {
                            var P = c;
                            c = P.handler;
                            e = P.selector
                        }
                        c.guid || (c.guid = f.guid++);
                        (g = q.events) || (g = q.events = {});
                        (m = q.handle) || (m = q.handle = function(a) {
                            return "undefined" === typeof f || a && f.event.triggered === a.type ? void 0 : f.event.dispatch.apply(m.elem,
                                arguments)
                        }, m.elem = a);
                        b = (b || "").match(p) || [""];
                        for (q = b.length; q--;) {
                            var l = gc.exec(b[q]) || [];
                            var k = B = l[1];
                            var xa = (l[2] || "").split(".").sort();
                            k && (l = f.event.special[k] || {}, k = (e ? l.delegateType : l.bindType) || k, l = f.event.special[k] || {}, B = f.extend({
                                type: k,
                                origType: B,
                                data: d,
                                handler: c,
                                guid: c.guid,
                                selector: e,
                                needsContext: e && f.expr.match.needsContext.test(e),
                                namespace: xa.join(".")
                            }, P), (h = g[k]) || (h = g[k] = [], h.delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, xa, m) || (a.addEventListener ? a.addEventListener(k, m, !1) :
                                a.attachEvent && a.attachEvent("on" + k, m))), l.add && (l.add.call(a, B), B.handler.guid || (B.handler.guid = c.guid)), e ? h.splice(h.delegateCount++, 0, B) : h.push(B), f.event.global[k] = !0)
                        }
                        a = null
                    }
                },
                remove: function(a, b, c, d, e) {
                    var g, q, m, B, h, P = f.hasData(a) && f._data(a);
                    if (P && (B = P.events)) {
                        b = (b || "").match(p) || [""];
                        for (m = b.length; m--;) {
                            var l = gc.exec(b[m]) || [];
                            var k = h = l[1];
                            var xa = (l[2] || "").split(".").sort();
                            if (k) {
                                var x = f.event.special[k] || {};
                                k = (d ? x.delegateType : x.bindType) || k;
                                var r = B[k] || [];
                                l = l[2] && new RegExp("(^|\\.)" +
                                    xa.join("\\.(?:.*\\.|)") + "(\\.|$)");
                                for (q = g = r.length; g--;) {
                                    var w = r[g];
                                    !e && h !== w.origType || c && c.guid !== w.guid || l && !l.test(w.namespace) || d && d !== w.selector && ("**" !== d || !w.selector) || (r.splice(g, 1), w.selector && r.delegateCount--, x.remove && x.remove.call(a, w))
                                }
                                q && !r.length && (x.teardown && !1 !== x.teardown.call(a, xa, P.handle) || f.removeEvent(a, k, P.handle), delete B[k])
                            } else
                                for (k in B) f.event.remove(a, k + b[m], c, d, !0)
                        }
                        f.isEmptyObject(B) && (delete P.handle, f._removeData(a, "events"))
                    }
                },
                trigger: function(b, c, d, e) {
                    var g,
                        q, m = [d || I],
                        h = ta.call(b, "type") ? b.type : b;
                    var B = ta.call(b, "namespace") ? b.namespace.split(".") : [];
                    var p = g = d = d || I;
                    if (3 !== d.nodeType && 8 !== d.nodeType && !Ob.test(h + f.event.triggered)) {
                        -1 < h.indexOf(".") && (B = h.split("."), h = B.shift(), B.sort());
                        var P = 0 > h.indexOf(":") && "on" + h;
                        b = b[f.expando] ? b : new f.Event(h, "object" === typeof b && b);
                        b.isTrigger = e ? 2 : 3;
                        b.namespace = B.join(".");
                        b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + B.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        b.result = void 0;
                        b.target || (b.target = d);
                        c = null == c ? [b] : f.makeArray(c,
                            [b]);
                        B = f.event.special[h] || {};
                        if (e || !B.trigger || !1 !== B.trigger.apply(d, c)) {
                            if (!e && !B.noBubble && !f.isWindow(d)) {
                                var l = B.delegateType || h;
                                Ob.test(l + h) || (p = p.parentNode);
                                for (; p; p = p.parentNode) m.push(p), g = p;
                                g === (d.ownerDocument || I) && m.push(g.defaultView || g.parentWindow || a)
                            }
                            for (q = 0;
                                (p = m[q++]) && !b.isPropagationStopped();) b.type = 1 < q ? l : B.bindType || h, (g = (f._data(p, "events") || {})[b.type] && f._data(p, "handle")) && g.apply(p, c), (g = P && p[P]) && g.apply && sa(p) && (b.result = g.apply(p, c), !1 === b.result && b.preventDefault());
                            b.type = h;
                            if (!(e || b.isDefaultPrevented() || B._default && !1 !== B._default.apply(m.pop(), c)) && sa(d) && P && d[h] && !f.isWindow(d)) {
                                (g = d[P]) && (d[P] = null);
                                f.event.triggered = h;
                                try {
                                    d[h]()
                                } catch ($a) {}
                                f.event.triggered = void 0;
                                g && (d[P] = g)
                            }
                            return b.result
                        }
                    }
                },
                dispatch: function(a) {
                    a = f.event.fix(a);
                    var b, c, d, g = Ka.call(arguments);
                    var e = (f._data(this, "events") || {})[a.type] || [];
                    var m = f.event.special[a.type] || {};
                    g[0] = a;
                    a.delegateTarget = this;
                    if (!m.preDispatch || !1 !== m.preDispatch.call(this, a)) {
                        var h = f.event.handlers.call(this,
                            a, e);
                        for (e = 0;
                            (d = h[e++]) && !a.isPropagationStopped();)
                            for (a.currentTarget = d.elem, b = 0;
                                (c = d.handlers[b++]) && !a.isImmediatePropagationStopped();)
                                if (!a.rnamespace || a.rnamespace.test(c.namespace)) a.handleObj = c, a.data = c.data, c = ((f.event.special[c.origType] || {}).handle || c.handler).apply(d.elem, g), void 0 !== c && !1 === (a.result = c) && (a.preventDefault(), a.stopPropagation());
                        m.postDispatch && m.postDispatch.call(this, a);
                        return a.result
                    }
                },
                handlers: function(a, b) {
                    var c, d = [],
                        g = b.delegateCount,
                        e = a.target;
                    if (g && e.nodeType &&
                        ("click" !== a.type || isNaN(a.button) || 1 > a.button))
                        for (; e != this; e = e.parentNode || this)
                            if (1 === e.nodeType && (!0 !== e.disabled || "click" !== a.type)) {
                                var q = [];
                                for (c = 0; c < g; c++) {
                                    var m = b[c];
                                    var h = m.selector + " ";
                                    void 0 === q[h] && (q[h] = m.needsContext ? -1 < f(h, this).index(e) : f.find(h, this, null, [e]).length);
                                    q[h] && q.push(m)
                                }
                                q.length && d.push({
                                    elem: e,
                                    handlers: q
                                })
                            } g < b.length && d.push({
                        elem: this,
                        handlers: b.slice(g)
                    });
                    return d
                },
                fix: function(a) {
                    if (a[f.expando]) return a;
                    var b = a.type;
                    var c = a,
                        d = this.fixHooks[b];
                    d || (this.fixHooks[b] =
                        d = vc.test(b) ? this.mouseHooks : Ic.test(b) ? this.keyHooks : {});
                    var g = d.props ? this.props.concat(d.props) : this.props;
                    a = new f.Event(c);
                    for (b = g.length; b--;) {
                        var e = g[b];
                        a[e] = c[e]
                    }
                    a.target || (a.target = c.srcElement || I);
                    3 === a.target.nodeType && (a.target = a.target.parentNode);
                    a.metaKey = !!a.metaKey;
                    return d.filter ? d.filter(a, c) : a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: ["char", "charCode",
                        "key", "keyCode"
                    ],
                    filter: function(a, b) {
                        null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                        return a
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(a, b) {
                        var c = b.button,
                            d = b.fromElement;
                        if (null == a.pageX && null != b.clientX) {
                            var g = a.target.ownerDocument || I;
                            var f = g.documentElement;
                            g = g.body;
                            a.pageX = b.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0);
                            a.pageY = b.clientY +
                                (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)
                        }!a.relatedTarget && d && (a.relatedTarget = d === a.target ? b.toElement : d);
                        a.which || void 0 === c || (a.which = c & 1 ? 1 : c & 2 ? 3 : c & 4 ? 2 : 0);
                        return a
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== ia() && this.focus) try {
                                return this.focus(), !1
                            } catch (g) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === ia() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if (f.nodeName(this, "input") && "checkbox" ===
                                this.type && this.click) return this.click(), !1
                        },
                        _default: function(a) {
                            return f.nodeName(a.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(a) {
                            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                        }
                    }
                },
                simulate: function(a, b, c) {
                    a = f.extend(new f.Event, c, {
                        type: a,
                        isSimulated: !0
                    });
                    f.event.trigger(a, null, b);
                    a.isDefaultPrevented() && c.preventDefault()
                }
            };
            f.removeEvent = I.removeEventListener ? function(a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c)
            } : function(a, b, c) {
                b = "on" + b;
                a.detachEvent &&
                    ("undefined" === typeof a[b] && (a[b] = null), a.detachEvent(b, c))
            };
            f.Event = function(a, b) {
                if (!(this instanceof f.Event)) return new f.Event(a, b);
                a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? Ha : Z) : this.type = a;
                b && f.extend(this, b);
                this.timeStamp = a && a.timeStamp || f.now();
                this[f.expando] = !0
            };
            f.Event.prototype = {
                constructor: f.Event,
                isDefaultPrevented: Z,
                isPropagationStopped: Z,
                isImmediatePropagationStopped: Z,
                preventDefault: function() {
                    var a =
                        this.originalEvent;
                    this.isDefaultPrevented = Ha;
                    a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                },
                stopPropagation: function() {
                    var a = this.originalEvent;
                    this.isPropagationStopped = Ha;
                    a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    var a = this.originalEvent;
                    this.isImmediatePropagationStopped = Ha;
                    a && a.stopImmediatePropagation && a.stopImmediatePropagation();
                    this.stopPropagation()
                }
            };
            f.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(a, b) {
                f.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function(a) {
                        var c = a.relatedTarget,
                            d = a.handleObj;
                        if (!c || c !== this && !f.contains(this, c)) {
                            a.type = d.origType;
                            var g = d.handler.apply(this, arguments);
                            a.type = b
                        }
                        return g
                    }
                }
            });
            F.submit || (f.event.special.submit = {
                setup: function() {
                    if (f.nodeName(this, "form")) return !1;
                    f.event.add(this, "click._submit keypress._submit", function(a) {
                        a = a.target;
                        (a = f.nodeName(a, "input") || f.nodeName(a, "button") ? f.prop(a,
                            "form") : void 0) && !f._data(a, "submit") && (f.event.add(a, "submit._submit", function(a) {
                            a._submitBubble = !0
                        }), f._data(a, "submit", !0))
                    })
                },
                postDispatch: function(a) {
                    a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a))
                },
                teardown: function() {
                    if (f.nodeName(this, "form")) return !1;
                    f.event.remove(this, "._submit")
                }
            });
            F.change || (f.event.special.change = {
                setup: function() {
                    if (Wb.test(this.nodeName)) {
                        if ("checkbox" === this.type || "radio" === this.type) f.event.add(this,
                            "propertychange._change",
                            function(a) {
                                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
                            }), f.event.add(this, "click._change", function(a) {
                            this._justChanged && !a.isTrigger && (this._justChanged = !1);
                            f.event.simulate("change", this, a)
                        });
                        return !1
                    }
                    f.event.add(this, "beforeactivate._change", function(a) {
                        a = a.target;
                        Wb.test(a.nodeName) && !f._data(a, "change") && (f.event.add(a, "change._change", function(a) {
                            !this.parentNode || a.isSimulated || a.isTrigger || f.event.simulate("change", this.parentNode, a)
                        }), f._data(a,
                            "change", !0))
                    })
                },
                handle: function(a) {
                    var b = a.target;
                    if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    f.event.remove(this, "._change");
                    return !Wb.test(this.nodeName)
                }
            });
            F.focusin || f.each({
                focus: "focusin",
                blur: "focusout"
            }, function(a, b) {
                var c = function(a) {
                    f.event.simulate(b, a.target, f.event.fix(a))
                };
                f.event.special[b] = {
                    setup: function() {
                        var d = this.ownerDocument || this,
                            g = f._data(d, b);
                        g || d.addEventListener(a,
                            c, !0);
                        f._data(d, b, (g || 0) + 1)
                    },
                    teardown: function() {
                        var d = this.ownerDocument || this,
                            g = f._data(d, b) - 1;
                        g ? f._data(d, b, g) : (d.removeEventListener(a, c, !0), f._removeData(d, b))
                    }
                }
            });
            f.fn.extend({
                on: function(a, b, c, d) {
                    return qa(this, a, b, c, d)
                },
                one: function(a, b, c, d) {
                    return qa(this, a, b, c, d, 1)
                },
                off: function(a, b, c) {
                    if (a && a.preventDefault && a.handleObj) {
                        var d = a.handleObj;
                        f(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler);
                        return this
                    }
                    if ("object" === typeof a) {
                        for (d in a) this.off(d,
                            b, a[d]);
                        return this
                    }
                    if (!1 === b || "function" === typeof b) c = b, b = void 0;
                    !1 === c && (c = Z);
                    return this.each(function() {
                        f.event.remove(this, a, c, b)
                    })
                },
                trigger: function(a, b) {
                    return this.each(function() {
                        f.event.trigger(a, b, this)
                    })
                },
                triggerHandler: function(a, b) {
                    var c = this[0];
                    if (c) return f.event.trigger(a, b, c, !0)
                }
            });
            var hc = / jQuery\d+="(?:null|\d+)"/g,
                ic = /<(?:abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video)[\s/>]/i,
                wc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                ob = /<script|<style|<link/i,
                qb = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Fc = /^true\/(.*)/,
                zb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Eb = Ga(I).appendChild(I.createElement("div"));
            f.extend({
                htmlPrefilter: function(a) {
                    return a.replace(wc, "\x3c$1\x3e\x3c/$2\x3e")
                },
                clone: function(a, b, c) {
                    var d, g, e = f.contains(a.ownerDocument, a);
                    if (F.html5Clone || f.isXMLDoc(a) || !ic.test("\x3c" + a.nodeName + "\x3e")) var q = a.cloneNode(!0);
                    else Eb.innerHTML =
                        a.outerHTML, Eb.removeChild(q = Eb.firstChild);
                    if (!(F.noCloneEvent && F.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || f.isXMLDoc(a))) {
                        var m = E(q);
                        var h = E(a);
                        for (g = 0; null != (d = h[g]); ++g)
                            if (m[g]) {
                                var p = void 0,
                                    B = d,
                                    l = m[g];
                                if (1 === l.nodeType) {
                                    var k = l.nodeName.toLowerCase();
                                    if (!F.noCloneEvent && l[f.expando]) {
                                        d = f._data(l);
                                        for (p in d.events) f.removeEvent(l, p, d.handle);
                                        l.removeAttribute(f.expando)
                                    }
                                    if ("script" === k && l.text !== B.text) ha(l).text = B.text, Da(l);
                                    else if ("object" === k) l.parentNode && (l.outerHTML = B.outerHTML),
                                        F.html5Clone && B.innerHTML && !f.trim(l.innerHTML) && (l.innerHTML = B.innerHTML);
                                    else if ("input" === k && Tb.test(B.type)) l.defaultChecked = l.checked = B.checked, l.value !== B.value && (l.value = B.value);
                                    else if ("option" === k) l.defaultSelected = l.selected = B.defaultSelected;
                                    else if ("input" === k || "textarea" === k) l.defaultValue = B.defaultValue
                                }
                            }
                    }
                    if (b)
                        if (c)
                            for (h = h || E(a), m = m || E(q), g = 0; null != (d = h[g]); g++) S(d, m[g]);
                        else S(a, q);
                    m = E(q, "script");
                    0 < m.length && U(m, !e && E(a, "script"));
                    return q
                },
                cleanData: function(a, b) {
                    for (var c, d, g, e,
                            q = 0, m = f.expando, h = f.cache, p = F.attributes, l = f.event.special; null != (c = a[q]); q++)
                        if (b || sa(c))
                            if (e = (g = c[m]) && h[g]) {
                                if (e.events)
                                    for (d in e.events) l[d] ? f.event.remove(c, d) : f.removeEvent(c, d, e.handle);
                                h[g] && (delete h[g], p || "undefined" === typeof c.removeAttribute ? c[m] = void 0 : c.removeAttribute(m), Aa.push(g))
                            }
                }
            });
            f.fn.extend({
                domManip: ba,
                detach: function(a) {
                    return La(this, a, !0)
                },
                remove: function(a) {
                    return La(this, a)
                },
                text: function(a) {
                    return Qa(this, function(a) {
                        return void 0 === a ? f.text(this) : this.empty().append((this[0] &&
                            this[0].ownerDocument || I).createTextNode(a))
                    }, null, a, arguments.length)
                },
                append: function() {
                    return ba(this, arguments, function(a) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || la(this, a).appendChild(a)
                    })
                },
                prepend: function() {
                    return ba(this, arguments, function(a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = la(this, a);
                            b.insertBefore(a, b.firstChild)
                        }
                    })
                },
                before: function() {
                    return ba(this, arguments, function(a) {
                        this.parentNode && this.parentNode.insertBefore(a, this)
                    })
                },
                after: function() {
                    return ba(this,
                        arguments,
                        function(a) {
                            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                        })
                },
                empty: function() {
                    for (var a, b = 0; null != (a = this[b]); b++) {
                        for (1 === a.nodeType && f.cleanData(E(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                        a.options && f.nodeName(a, "select") && (a.options.length = 0)
                    }
                    return this
                },
                clone: function(a, b) {
                    a = null == a ? !1 : a;
                    b = null == b ? a : b;
                    return this.map(function() {
                        return f.clone(this, a, b)
                    })
                },
                html: function(a) {
                    return Qa(this, function(a) {
                        var b = this[0] || {},
                            c = 0,
                            d = this.length;
                        if (void 0 === a) return 1 ===
                            b.nodeType ? b.innerHTML.replace(hc, "") : void 0;
                        if (!("string" !== typeof a || ob.test(a) || !F.htmlSerialize && ic.test(a) || !F.leadingWhitespace && Ib.test(a) || Sa[(dc.exec(a) || ["", ""])[1].toLowerCase()])) {
                            a = f.htmlPrefilter(a);
                            try {
                                for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (f.cleanData(E(b, !1)), b.innerHTML = a);
                                b = 0
                            } catch (Pa) {}
                        }
                        b && this.empty().append(a)
                    }, null, a, arguments.length)
                },
                replaceWith: function() {
                    var a = [];
                    return ba(this, arguments, function(b) {
                        var c = this.parentNode;
                        0 > f.inArray(this, a) && (f.cleanData(E(this)), c &&
                            c.replaceChild(b, this))
                    }, a)
                }
            });
            f.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(a, b) {
                f.fn[a] = function(a) {
                    for (var c = 0, d = [], g = f(a), e = g.length - 1; c <= e; c++) a = c === e ? this : this.clone(!0), f(g[c])[b](a), mb.apply(d, a.get());
                    return this.pushStack(d)
                }
            });
            var Kb, Ub = {
                    HTML: "block",
                    BODY: "block"
                },
                Xb = /^margin/,
                Mb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$", "i"),
                jc = function(a, b, c, d) {
                    var g, f = {};
                    for (g in b) f[g] = a.style[g], a.style[g] = b[g];
                    c = c.apply(a, d || []);
                    for (g in b) a.style[g] = f[g];
                    return c
                },
                Fb = I.documentElement;
            (function() {
                function b() {
                    var b = I.documentElement;
                    b.appendChild(l);
                    k.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                    c = e = p = !1;
                    d = h = !0;
                    if (a.getComputedStyle) {
                        var g = a.getComputedStyle(k);
                        c = "1%" !== (g || {}).top;
                        p = "2px" === (g || {}).marginLeft;
                        e = "4px" === (g || {
                            width: "4px"
                        }).width;
                        k.style.marginRight = "50%";
                        d = "4px" === (g || {
                            marginRight: "4px"
                        }).marginRight;
                        g = k.appendChild(I.createElement("div"));
                        g.style.cssText = k.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                        g.style.marginRight = g.style.width = "0";
                        k.style.width = "1px";
                        h = !parseFloat((a.getComputedStyle(g) || {}).marginRight);
                        k.removeChild(g)
                    }
                    k.style.display = "none";
                    if (m = 0 === k.getClientRects().length)
                        if (k.style.display = "", k.innerHTML = "\x3ctable\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e",
                            k.childNodes[0].style.borderCollapse = "separate", g = k.getElementsByTagName("td"), g[0].style.cssText = "margin:0;border:0;padding:0;display:none", m = 0 === g[0].offsetHeight) g[0].style.display = "", g[1].style.display = "none", m = 0 === g[0].offsetHeight;
                    b.removeChild(l)
                }
                var c, d, e, m, h, p, l = I.createElement("div"),
                    k = I.createElement("div");
                k.style && (k.style.cssText = "float:left;opacity:.5", F.opacity = "0.5" === k.style.opacity, F.cssFloat = !!k.style.cssFloat, k.style.backgroundClip = "content-box", k.cloneNode(!0).style.backgroundClip =
                    "", F.clearCloneStyle = "content-box" === k.style.backgroundClip, l = I.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", k.innerHTML = "", l.appendChild(k), F.boxSizing = "" === k.style.boxSizing || "" === k.style.MozBoxSizing || "" === k.style.WebkitBoxSizing, f.extend(F, {
                        reliableHiddenOffsets: function() {
                            null == c && b();
                            return m
                        },
                        boxSizingReliable: function() {
                            null == c && b();
                            return e
                        },
                        pixelMarginRight: function() {
                            null == c && b();
                            return d
                        },
                        pixelPosition: function() {
                            null ==
                                c && b();
                            return c
                        },
                        reliableMarginRight: function() {
                            null == c && b();
                            return h
                        },
                        reliableMarginLeft: function() {
                            null == c && b();
                            return p
                        }
                    }))
            })();
            var Fa = /^(top|right|bottom|left)$/;
            if (a.getComputedStyle) {
                var rb = function(b) {
                    var c = b.ownerDocument.defaultView;
                    c && c.opener || (c = a);
                    return c.getComputedStyle(b)
                };
                var eb = function(a, b, c) {
                    var d = a.style;
                    var g = (c = c || rb(a)) ? c.getPropertyValue(b) || c[b] : void 0;
                    "" !== g && void 0 !== g || f.contains(a.ownerDocument, a) || (g = f.style(a, b));
                    if (c && !F.pixelMarginRight() && Mb.test(g) && Xb.test(b)) {
                        a =
                            d.width;
                        b = d.minWidth;
                        var e = d.maxWidth;
                        d.minWidth = d.maxWidth = d.width = g;
                        g = c.width;
                        d.width = a;
                        d.minWidth = b;
                        d.maxWidth = e
                    }
                    return void 0 === g ? g : g + ""
                }
            } else Fb.currentStyle && (rb = function(a) {
                return a.currentStyle
            }, eb = function(a, b, c) {
                var d, g, f = a.style;
                var e = (c = c || rb(a)) ? c[b] : void 0;
                null == e && f && f[b] && (e = f[b]);
                if (Mb.test(e) && !Fa.test(b)) {
                    c = f.left;
                    if (g = (d = a.runtimeStyle) && d.left) d.left = a.currentStyle.left;
                    f.left = "fontSize" === b ? "1em" : e;
                    e = f.pixelLeft + "px";
                    f.left = c;
                    g && (d.left = g)
                }
                return void 0 === e ? e : e + "" || "auto"
            });
            var Pb = /alpha\([^)]*\)/i,
                Gb = /opacity\s*=\s*([^)]*)/i,
                xc = /^(none|table(?!-c[ea]).+)/,
                Ta = new RegExp("^(" + vb + ")(.*)$", "i"),
                yc = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Yb = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Lb = ["Webkit", "O", "Moz", "ms"],
                O = I.createElement("div").style;
            f.extend({
                cssHooks: {
                    opacity: {
                        get: function(a, b) {
                            if (b) return a = eb(a, "opacity"), "" === a ? "1" : a
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": F.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(a, b, c, d) {
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                        var g, e = f.camelCase(b),
                            m = a.style;
                        b = f.cssProps[e] || (f.cssProps[e] = ib(e) || e);
                        var q = f.cssHooks[b] || f.cssHooks[e];
                        if (void 0 !== c) {
                            var h = typeof c;
                            "string" === h && (g = Hb.exec(c)) && g[1] && (c = ra(a, b, g), h = "number");
                            if (null != c && c === c && ("number" === h && (c += g && g[3] || (f.cssNumber[e] ? "" : "px")), F.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") ||
                                    (m[b] = "inherit"), !(q && "set" in q) || void 0 !== (c = q.set(a, c, d)))) try {
                                m[b] = c
                            } catch (Oc) {}
                        } else return q && "get" in q && void 0 !== (g = q.get(a, !1, d)) ? g : m[b]
                    }
                },
                css: function(a, b, c, d) {
                    var g;
                    var e = f.camelCase(b);
                    b = f.cssProps[e] || (f.cssProps[e] = ib(e) || e);
                    (e = f.cssHooks[b] || f.cssHooks[e]) && "get" in e && (g = e.get(a, !0, c));
                    void 0 === g && (g = eb(a, b, d));
                    "normal" === g && b in Yb && (g = Yb[b]);
                    return "" === c || c ? (a = parseFloat(g), !0 === c || isFinite(a) ? a || 0 : g) : g
                }
            });
            f.each(["height", "width"], function(a, b) {
                f.cssHooks[b] = {
                    get: function(a, c, d) {
                        if (c) return xc.test(f.css(a,
                            "display")) && 0 === a.offsetWidth ? jc(a, yc, function() {
                            return H(a, b, d)
                        }) : H(a, b, d)
                    },
                    set: function(a, c, d) {
                        var g = d && rb(a);
                        return Oa(a, c, d ? T(a, b, d, F.boxSizing && "border-box" === f.css(a, "boxSizing", !1, g), g) : 0)
                    }
                }
            });
            F.opacity || (f.cssHooks.opacity = {
                get: function(a, b) {
                    return Gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
                },
                set: function(a, b) {
                    var c = a.style;
                    a = a.currentStyle;
                    var d = f.isNumeric(b) ? "alpha(opacity\x3d" + 100 * b + ")" : "",
                        g = a && a.filter || c.filter || "";
                    c.zoom =
                        1;
                    if ((1 <= b || "" === b) && "" === f.trim(g.replace(Pb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || a && !a.filter)) return;
                    c.filter = Pb.test(g) ? g.replace(Pb, d) : g + " " + d
                }
            });
            f.cssHooks.marginRight = y(F.reliableMarginRight, function(a, b) {
                if (b) return jc(a, {
                    display: "inline-block"
                }, eb, [a, "marginRight"])
            });
            f.cssHooks.marginLeft = y(F.reliableMarginLeft, function(a, b) {
                if (b) return (parseFloat(eb(a, "marginLeft")) || (f.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - jc(a, {
                        marginLeft: 0
                    }, function() {
                        return a.getBoundingClientRect().left
                    }) :
                    0)) + "px"
            });
            f.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(a, b) {
                f.cssHooks[a + b] = {
                    expand: function(c) {
                        var d = 0,
                            g = {};
                        for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > d; d++) g[a + Ja[d] + b] = c[d] || c[d - 2] || c[0];
                        return g
                    }
                };
                Xb.test(a) || (f.cssHooks[a + b].set = Oa)
            });
            f.fn.extend({
                css: function(a, b) {
                    return Qa(this, function(a, b, c) {
                        var d, g = {},
                            e = 0;
                        if (f.isArray(b)) {
                            c = rb(a);
                            for (d = b.length; e < d; e++) g[b[e]] = f.css(a, b[e], !1, c);
                            return g
                        }
                        return void 0 !== c ? f.style(a, b, c) : f.css(a, b)
                    }, a, b, 1 < arguments.length)
                },
                show: function() {
                    return Va(this,
                        !0)
                },
                hide: function() {
                    return Va(this)
                },
                toggle: function(a) {
                    return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                        ea(this) ? f(this).show() : f(this).hide()
                    })
                }
            });
            f.Tween = da;
            da.prototype = {
                constructor: da,
                init: function(a, b, c, d, e, m) {
                    this.elem = a;
                    this.prop = c;
                    this.easing = e || f.easing._default;
                    this.options = b;
                    this.start = this.now = this.cur();
                    this.end = d;
                    this.unit = m || (f.cssNumber[c] ? "" : "px")
                },
                cur: function() {
                    var a = da.propHooks[this.prop];
                    return a && a.get ? a.get(this) : da.propHooks._default.get(this)
                },
                run: function(a) {
                    var b, c = da.propHooks[this.prop];
                    this.pos = this.options.duration ? b = f.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
                    this.now = (this.end - this.start) * b + this.start;
                    this.options.step && this.options.step.call(this.elem, this.now, this);
                    c && c.set ? c.set(this) : da.propHooks._default.set(this);
                    return this
                }
            };
            da.prototype.init.prototype = da.prototype;
            da.propHooks = {
                _default: {
                    get: function(a) {
                        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] :
                            (a = f.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0
                    },
                    set: function(a) {
                        if (f.fx.step[a.prop]) f.fx.step[a.prop](a);
                        else 1 !== a.elem.nodeType || null == a.elem.style[f.cssProps[a.prop]] && !f.cssHooks[a.prop] ? a.elem[a.prop] = a.now : f.style(a.elem, a.prop, a.now + a.unit)
                    }
                }
            };
            da.propHooks.scrollTop = da.propHooks.scrollLeft = {
                set: function(a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                }
            };
            f.easing = {
                linear: function(a) {
                    return a
                },
                swing: function(a) {
                    return .5 - Math.cos(a * Math.PI) / 2
                },
                _default: "swing"
            };
            f.fx = da.prototype.init;
            f.fx.step = {};
            var sb, Qb, Zb = /^(?:toggle|show|hide)$/,
                kc = /queueHooks$/;
            f.Animation = f.extend(l, {
                tweeners: {
                    "*": [function(a, b) {
                        var c = this.createTween(a, b);
                        ra(c.elem, a, Hb.exec(b), c);
                        return c
                    }]
                },
                tweener: function(a, b) {
                    f.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(p);
                    for (var c, d = 0, g = a.length; d < g; d++) c = a[d], l.tweeners[c] = l.tweeners[c] || [], l.tweeners[c].unshift(b)
                },
                prefilters: [function(a, b, c) {
                    var d, e = this,
                        g = {},
                        m = a.style,
                        q = a.nodeType && ea(a),
                        h = f._data(a, "fxshow");
                    if (!c.queue) {
                        var p = f._queueHooks(a, "fx");
                        if (null == p.unqueued) {
                            p.unqueued =
                                0;
                            var l = p.empty.fire;
                            p.empty.fire = function() {
                                p.unqueued || l()
                            }
                        }
                        p.unqueued++;
                        e.always(function() {
                            e.always(function() {
                                p.unqueued--;
                                f.queue(a, "fx").length || p.empty.fire()
                            })
                        })
                    }
                    if (1 === a.nodeType && ("height" in b || "width" in b)) {
                        c.overflow = [m.overflow, m.overflowX, m.overflowY];
                        var k = f.css(a, "display");
                        var B = "none" === k ? f._data(a, "olddisplay") || A(a.nodeName) : k;
                        "inline" === B && "none" === f.css(a, "float") && (F.inlineBlockNeedsLayout && "inline" !== A(a.nodeName) ? m.zoom = 1 : m.display = "inline-block")
                    }
                    c.overflow && (m.overflow =
                        "hidden", F.shrinkWrapBlocks() || e.always(function() {
                            m.overflow = c.overflow[0];
                            m.overflowX = c.overflow[1];
                            m.overflowY = c.overflow[2]
                        }));
                    for (d in b)
                        if (B = b[d], Zb.exec(B)) {
                            delete b[d];
                            var x = x || "toggle" === B;
                            if (B === (q ? "hide" : "show"))
                                if ("show" === B && h && void 0 !== h[d]) q = !0;
                                else continue;
                            g[d] = h && h[d] || f.style(a, d)
                        } else k = void 0;
                    if (f.isEmptyObject(g)) "inline" === ("none" === k ? A(a.nodeName) : k) && (m.display = k);
                    else
                        for (d in h ? "hidden" in h && (q = h.hidden) : h = f._data(a, "fxshow", {}), x && (h.hidden = !q), q ? f(a).show() : e.done(function() {
                                f(a).hide()
                            }),
                            e.done(function() {
                                var b;
                                f._removeData(a, "fxshow");
                                for (b in g) f.style(a, b, g[b])
                            }), g) b = J(q ? h[d] : 0, d, e), d in h || (h[d] = b.start, q && (b.end = b.start, b.start = "width" === d || "height" === d ? 1 : 0))
                }],
                prefilter: function(a, b) {
                    b ? l.prefilters.unshift(a) : l.prefilters.push(a)
                }
            });
            f.speed = function(a, b, c) {
                var d = a && "object" === typeof a ? f.extend({}, a) : {
                    complete: c || !c && b || f.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !f.isFunction(b) && b
                };
                d.duration = f.fx.off ? 0 : "number" === typeof d.duration ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] :
                    f.fx.speeds._default;
                if (null == d.queue || !0 === d.queue) d.queue = "fx";
                d.old = d.complete;
                d.complete = function() {
                    f.isFunction(d.old) && d.old.call(this);
                    d.queue && f.dequeue(this, d.queue)
                };
                return d
            };
            f.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(ea).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = f.isEmptyObject(a),
                        g = f.speed(b, c, d);
                    b = function() {
                        var b = l(this, f.extend({}, a), g);
                        (e || f._data(this, "finish")) && b.stop(!0)
                    };
                    b.finish = b;
                    return e || !1 === g.queue ? this.each(b) :
                        this.queue(g.queue, b)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop;
                        b(c)
                    };
                    "string" !== typeof a && (c = b, b = a, a = void 0);
                    b && !1 !== a && this.queue(a || "fx", []);
                    return this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            g = f.timers,
                            m = f._data(this);
                        if (e) m[e] && m[e].stop && d(m[e]);
                        else
                            for (e in m) m[e] && m[e].stop && kc.test(e) && d(m[e]);
                        for (e = g.length; e--;) g[e].elem !== this || null != a && g[e].queue !== a || (g[e].anim.stop(c), b = !1, g.splice(e, 1));
                        !b && c || f.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    !1 !== a && (a =
                        a || "fx");
                    return this.each(function() {
                        var b = f._data(this),
                            c = b[a + "queue"];
                        var d = b[a + "queueHooks"];
                        var e = f.timers,
                            g = c ? c.length : 0;
                        b.finish = !0;
                        f.queue(this, a, []);
                        d && d.stop && d.stop.call(this, !0);
                        for (d = e.length; d--;) e[d].elem === this && e[d].queue === a && (e[d].anim.stop(!0), e.splice(d, 1));
                        for (d = 0; d < g; d++) c[d] && c[d].finish && c[d].finish.call(this);
                        delete b.finish
                    })
                }
            });
            f.each(["toggle", "show", "hide"], function(a, b) {
                var c = f.fn[b];
                f.fn[b] = function(a, d, e) {
                    return null == a || "boolean" === typeof a ? c.apply(this, arguments) :
                        this.animate(wa(b, !0), a, d, e)
                }
            });
            f.each({
                slideDown: wa("show"),
                slideUp: wa("hide"),
                slideToggle: wa("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                f.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            });
            f.timers = [];
            f.fx.tick = function() {
                var a = f.timers,
                    b = 0;
                for (sb = f.now(); b < a.length; b++) {
                    var c = a[b];
                    c() || a[b] !== c || a.splice(b--, 1)
                }
                a.length || f.fx.stop();
                sb = void 0
            };
            f.fx.timer = function(a) {
                f.timers.push(a);
                a() ? f.fx.start() : f.timers.pop()
            };
            f.fx.interval = 13;
            f.fx.start = function() {
                Qb || (Qb = a.setInterval(f.fx.tick, f.fx.interval))
            };
            f.fx.stop = function() {
                a.clearInterval(Qb);
                Qb = null
            };
            f.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            };
            f.fn.delay = function(b, c) {
                b = f.fx ? f.fx.speeds[b] || b : b;
                return this.queue(c || "fx", function(c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function() {
                        a.clearTimeout(e)
                    }
                })
            };
            (function() {
                var a = I.createElement("input");
                I.createElement("div");
                var b = I.createElement("select"),
                    c = b.appendChild(I.createElement("option"));
                var d = I.createElement("div");
                d.setAttribute("className",
                    "t");
                d.innerHTML = "  \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
                d.getElementsByTagName("a");
                a.setAttribute("type", "checkbox");
                d.appendChild(a);
                var e = d.getElementsByTagName("a")[0];
                e.style.cssText = "top:1px";
                F.getSetAttribute = "t" !== d.className;
                F.style = /top/.test(e.getAttribute("style"));
                F.hrefNormalized = "/a" === e.getAttribute("href");
                F.checkOn = !!a.value;
                F.optSelected = c.selected;
                F.enctype = !!I.createElement("form").enctype;
                b.disabled = !0;
                F.optDisabled = !c.disabled;
                a = I.createElement("input");
                a.setAttribute("value", "");
                F.input = "" === a.getAttribute("value");
                a.value = "t";
                a.setAttribute("type", "radio");
                F.radioValue = "t" === a.value
            })();
            var $b = /\r/g,
                Jc = /[\x20\t\r\n\f]+/g;
            f.fn.extend({
                val: function(a) {
                    var b, c, d = this[0];
                    if (arguments.length) {
                        var e = f.isFunction(a);
                        return this.each(function(c) {
                            1 === this.nodeType && (c = e ? a.call(this, c, f(this).val()) : a, null == c ? c = "" : "number" === typeof c ? c += "" : f.isArray(c) && (c = f.map(c, function(a) {
                                    return null == a ? "" : a + ""
                                })), b = f.valHooks[this.type] ||
                                f.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, c, "value") || (this.value = c))
                        })
                    }
                    if (d) {
                        if ((b = f.valHooks[d.type] || f.valHooks[d.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(d, "value"))) return c;
                        c = d.value;
                        return "string" === typeof c ? c.replace($b, "") : null == c ? "" : c
                    }
                }
            });
            f.extend({
                valHooks: {
                    option: {
                        get: function(a) {
                            var b = f.find.attr(a, "value");
                            return null != b ? b : f.trim(f.text(a)).replace(Jc, " ")
                        }
                    },
                    select: {
                        get: function(a) {
                            for (var b, c = a.options, d = a.selectedIndex, e = (a = "select-one" ===
                                    a.type || 0 > d) ? null : [], g = a ? d + 1 : c.length, m = 0 > d ? g : a ? d : 0; m < g; m++)
                                if (b = c[m], !(!b.selected && m !== d || (F.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && f.nodeName(b.parentNode, "optgroup"))) {
                                    b = f(b).val();
                                    if (a) return b;
                                    e.push(b)
                                } return e
                        },
                        set: function(a, b) {
                            for (var c, d = a.options, e = f.makeArray(b), g = d.length; g--;)
                                if (b = d[g], -1 < f.inArray(f.valHooks.option.get(b), e)) try {
                                    b.selected = c = !0
                                } catch (Nc) {
                                    b.scrollHeight
                                } else b.selected = !1;
                            c || (a.selectedIndex = -1);
                            return d
                        }
                    }
                }
            });
            f.each(["radio",
                "checkbox"
            ], function() {
                f.valHooks[this] = {
                    set: function(a, b) {
                        if (f.isArray(b)) return a.checked = -1 < f.inArray(f(a).val(), b)
                    }
                };
                F.checkOn || (f.valHooks[this].get = function(a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                })
            });
            var Ya = f.expr.attrHandle,
                lc = /^(?:checked|selected)$/i,
                gb = F.getSetAttribute,
                pb = F.input;
            f.fn.extend({
                attr: function(a, b) {
                    return Qa(this, f.attr, a, b, 1 < arguments.length)
                },
                removeAttr: function(a) {
                    return this.each(function() {
                        f.removeAttr(this, a)
                    })
                }
            });
            f.extend({
                attr: function(a, b, c) {
                    var d, e =
                        a.nodeType;
                    if (3 !== e && 8 !== e && 2 !== e) {
                        if ("undefined" === typeof a.getAttribute) return f.prop(a, b, c);
                        if (1 !== e || !f.isXMLDoc(a)) {
                            b = b.toLowerCase();
                            var g = f.attrHooks[b] || (f.expr.match.bool.test(b) ? mc : wb)
                        }
                        if (void 0 !== c) {
                            if (null === c) {
                                f.removeAttr(a, b);
                                return
                            }
                            if (g && "set" in g && void 0 !== (d = g.set(a, c, b))) return d;
                            a.setAttribute(b, c + "");
                            return c
                        }
                        if (g && "get" in g && null !== (d = g.get(a, b))) return d;
                        d = f.find.attr(a, b);
                        return null == d ? void 0 : d
                    }
                },
                attrHooks: {
                    type: {
                        set: function(a, b) {
                            if (!F.radioValue && "radio" === b && f.nodeName(a,
                                    "input")) {
                                var c = a.value;
                                a.setAttribute("type", b);
                                c && (a.value = c);
                                return b
                            }
                        }
                    }
                },
                removeAttr: function(a, b) {
                    var c = 0,
                        d = b && b.match(p);
                    if (d && 1 === a.nodeType)
                        for (; b = d[c++];) {
                            var e = f.propFix[b] || b;
                            f.expr.match.bool.test(b) ? pb && gb || !lc.test(b) ? a[e] = !1 : a[f.camelCase("default-" + b)] = a[e] = !1 : f.attr(a, b, "");
                            a.removeAttribute(gb ? b : e)
                        }
                }
            });
            var mc = {
                set: function(a, b, c) {
                    !1 === b ? f.removeAttr(a, c) : pb && gb || !lc.test(c) ? a.setAttribute(!gb && f.propFix[c] || c, c) : a[f.camelCase("default-" + c)] = a[c] = !0;
                    return c
                }
            };
            f.each(f.expr.match.bool.source.match(/\w+/g),
                function(a, b) {
                    var c = Ya[b] || f.find.attr;
                    pb && gb || !lc.test(b) ? Ya[b] = function(a, b, d) {
                        if (!d) {
                            var e = Ya[b];
                            Ya[b] = f;
                            var f = null != c(a, b, d) ? b.toLowerCase() : null;
                            Ya[b] = e
                        }
                        return f
                    } : Ya[b] = function(a, b, c) {
                        if (!c) return a[f.camelCase("default-" + b)] ? b.toLowerCase() : null
                    }
                });
            pb && gb || (f.attrHooks.value = {
                set: function(a, b, c) {
                    if (f.nodeName(a, "input")) a.defaultValue = b;
                    else return wb && wb.set(a, b, c)
                }
            });
            if (!gb) {
                var wb = {
                    set: function(a, b, c) {
                        var d = a.getAttributeNode(c);
                        d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c));
                        d.value = b += "";
                        if ("value" === c || b === a.getAttribute(c)) return b
                    }
                };
                Ya.id = Ya.name = Ya.coords = function(a, b, c) {
                    var d;
                    if (!c) return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
                };
                f.valHooks.button = {
                    get: function(a, b) {
                        if ((a = a.getAttributeNode(b)) && a.specified) return a.value
                    },
                    set: wb.set
                };
                f.attrHooks.contenteditable = {
                    set: function(a, b, c) {
                        wb.set(a, "" === b ? !1 : b, c)
                    }
                };
                f.each(["width", "height"], function(a, b) {
                    f.attrHooks[b] = {
                        set: function(a, c) {
                            if ("" === c) return a.setAttribute(b, "auto"), c
                        }
                    }
                })
            }
            F.style || (f.attrHooks.style = {
                get: function(a) {
                    return a.style.cssText || void 0
                },
                set: function(a, b) {
                    return a.style.cssText = b + ""
                }
            });
            var bb = /^(?:input|select|textarea|button|object)$/i,
                lb = /^(?:a|area)$/i;
            f.fn.extend({
                prop: function(a, b) {
                    return Qa(this, f.prop, a, b, 1 < arguments.length)
                },
                removeProp: function(a) {
                    a = f.propFix[a] || a;
                    return this.each(function() {
                        try {
                            this[a] = void 0, delete this[a]
                        } catch (q) {}
                    })
                }
            });
            f.extend({
                prop: function(a, b, c) {
                    var d, e = a.nodeType;
                    if (3 !== e && 8 !== e && 2 !== e) {
                        if (1 !== e || !f.isXMLDoc(a)) {
                            b = f.propFix[b] || b;
                            var g = f.propHooks[b]
                        }
                        return void 0 !==
                            c ? g && "set" in g && void 0 !== (d = g.set(a, c, b)) ? d : a[b] = c : g && "get" in g && null !== (d = g.get(a, b)) ? d : a[b]
                    }
                },
                propHooks: {
                    tabIndex: {
                        get: function(a) {
                            var b = f.find.attr(a, "tabindex");
                            return b ? parseInt(b, 10) : bb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            });
            F.hrefNormalized || f.each(["href", "src"], function(a, b) {
                f.propHooks[b] = {
                    get: function(a) {
                        return a.getAttribute(b, 4)
                    }
                }
            });
            F.optSelected || (f.propHooks.selected = {
                get: function(a) {
                    if (a = a.parentNode) a.selectedIndex, a.parentNode &&
                        a.parentNode.selectedIndex;
                    return null
                },
                set: function(a) {
                    if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex
                }
            });
            f.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
                f.propFix[this.toLowerCase()] = this
            });
            F.enctype || (f.propFix.enctype = "encoding");
            var Za = /[\t\r\n\f]/g;
            f.fn.extend({
                addClass: function(a) {
                    var b, c, d, e, g, m = 0;
                    if (f.isFunction(a)) return this.each(function(b) {
                        f(this).addClass(a.call(this, b, ma(this)))
                    });
                    if ("string" === typeof a && a)
                        for (b = a.match(p) || []; c = this[m++];) {
                            var h = ma(c);
                            if (d = 1 === c.nodeType && (" " + h + " ").replace(Za, " ")) {
                                for (g = 0; e = b[g++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                                d = f.trim(d);
                                h !== d && f.attr(c, "class", d)
                            }
                        }
                    return this
                },
                removeClass: function(a) {
                    var b, c, d, e, g, m = 0;
                    if (f.isFunction(a)) return this.each(function(b) {
                        f(this).removeClass(a.call(this, b, ma(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" === typeof a && a)
                        for (b = a.match(p) || []; c = this[m++];) {
                            var h = ma(c);
                            if (d = 1 === c.nodeType &&
                                (" " + h + " ").replace(Za, " ")) {
                                for (g = 0; e = b[g++];)
                                    for (; - 1 < d.indexOf(" " + e + " ");) d = d.replace(" " + e + " ", " ");
                                d = f.trim(d);
                                h !== d && f.attr(c, "class", d)
                            }
                        }
                    return this
                },
                toggleClass: function(a, b) {
                    var c = typeof a;
                    return "boolean" === typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : f.isFunction(a) ? this.each(function(c) {
                        f(this).toggleClass(a.call(this, c, ma(this), b), b)
                    }) : this.each(function() {
                        var b, d;
                        if ("string" === c) {
                            var e = 0;
                            var g = f(this);
                            for (d = a.match(p) || []; b = d[e++];) g.hasClass(b) ? g.removeClass(b) : g.addClass(b)
                        } else if (void 0 ===
                            a || "boolean" === c)(b = ma(this)) && f._data(this, "__className__", b), f.attr(this, "class", b || !1 === a ? "" : f._data(this, "__className__") || "")
                    })
                },
                hasClass: function(a) {
                    var b, c = 0;
                    for (a = " " + a + " "; b = this[c++];)
                        if (1 === b.nodeType && -1 < (" " + ma(b) + " ").replace(Za, " ").indexOf(a)) return !0;
                    return !1
                }
            });
            f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a,
                b) {
                f.fn[b] = function(a, c) {
                    return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
                }
            });
            f.fn.extend({
                hover: function(a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                }
            });
            var Ba = a.location,
                Ua = f.now(),
                cb = /\?/,
                xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            f.parseJSON = function(b) {
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
                var c, d = null,
                    e = f.trim(b + "");
                return e && !f.trim(e.replace(xb, function(a, b, e, f) {
                    c && b && (d = 0);
                    if (0 === d) return a;
                    c = e || b;
                    d += !f - !e;
                    return ""
                })) ? Function("return " + e)() : f.error("Invalid JSON: " + b)
            };
            f.parseXML = function(b) {
                if (!b || "string" !== typeof b) return null;
                try {
                    if (a.DOMParser) {
                        var c = new a.DOMParser;
                        var d = c.parseFromString(b, "text/xml")
                    } else d = new a.ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(b)
                } catch (P) {
                    d = void 0
                }
                d && d.documentElement && !d.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + b);
                return d
            };
            var Kc = /#.*$/,
                zc = /([?&])_=[^&]*/,
                Ac = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
                Ca = /^(?:GET|HEAD)$/,
                Bc = /^\/\//,
                nc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                oc = {},
                fc = {},
                pc = "*/".concat("*"),
                va = Ba.href,
                hb = nc.exec(va.toLowerCase()) || [];
            f.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: va,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(hb[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8",
                    accepts: {
                        "*": pc,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": f.parseJSON,
                        "text xml": f.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(a, b) {
                    return b ? K(K(a, f.ajaxSettings), b) : K(f.ajaxSettings, a)
                },
                ajaxPrefilter: Na(oc),
                ajaxTransport: Na(fc),
                ajax: function(b, c) {
                    function d(b, c, d, e) {
                        var p = c;
                        if (2 !== y) {
                            y = 2;
                            m && a.clearTimeout(m);
                            l = void 0;
                            g = e || "";
                            v.readyState = 0 < b ? 4 : 0;
                            e = 200 <= b && 300 > b || 304 === b;
                            if (d) {
                                var q = k;
                                for (var B = v, na, C, z, A, E = q.contents, u = q.dataTypes;
                                    "*" === u[0];) u.shift(), void 0 === C && (C = q.mimeType || B.getResponseHeader("Content-Type"));
                                if (C)
                                    for (A in E)
                                        if (E[A] && E[A].test(C)) {
                                            u.unshift(A);
                                            break
                                        } if (u[0] in d) z = u[0];
                                else {
                                    for (A in d) {
                                        if (!u[0] || q.converters[A + " " + u[0]]) {
                                            z = A;
                                            break
                                        }
                                        na || (na = A)
                                    }
                                    z = z || na
                                }
                                z ? (z !== u[0] && u.unshift(z), q = d[z]) : q = void 0
                            }
                            a: {
                                d = k;na = q;C = v;z = e;
                                var M;B = {};E = d.dataTypes.slice();
                                if (E[1])
                                    for (ua in d.converters) B[ua.toLowerCase()] =
                                        d.converters[ua];
                                for (A = E.shift(); A;) {
                                    d.responseFields[A] && (C[d.responseFields[A]] = na);
                                    !X && z && d.dataFilter && (na = d.dataFilter(na, d.dataType));
                                    var X = A;
                                    if (A = E.shift())
                                        if ("*" === A) A = X;
                                        else if ("*" !== X && X !== A) {
                                        var ua = B[X + " " + A] || B["* " + A];
                                        if (!ua)
                                            for (M in B)
                                                if (q = M.split(" "), q[1] === A && (ua = B[X + " " + q[0]] || B["* " + q[0]])) {
                                                    !0 === ua ? ua = B[M] : !0 !== B[M] && (A = q[0], E.unshift(q[1]));
                                                    break
                                                } if (!0 !== ua)
                                            if (ua && d["throws"]) na = ua(na);
                                            else try {
                                                na = ua(na)
                                            } catch (ub) {
                                                q = {
                                                    state: "parsererror",
                                                    error: ua ? ub : "No conversion from " + X + " to " +
                                                        A
                                                };
                                                break a
                                            }
                                    }
                                }
                                q = {
                                    state: "success",
                                    data: na
                                }
                            }
                            if (e)
                                if (k.ifModified && ((p = v.getResponseHeader("Last-Modified")) && (f.lastModified[t] = p), (p = v.getResponseHeader("etag")) && (f.etag[t] = p)), 204 === b || "HEAD" === k.type) p = "nocontent";
                                else if (304 === b) p = "notmodified";
                            else {
                                p = q.state;
                                var Vb = q.data;
                                var L = q.error;
                                e = !L
                            } else if (L = p, b || !p) p = "error", 0 > b && (b = 0);
                            v.status = b;
                            v.statusText = (c || p) + "";
                            e ? w.resolveWith(x, [Vb, p, v]) : w.rejectWith(x, [v, p, L]);
                            v.statusCode(D);
                            D = void 0;
                            h && r.trigger(e ? "ajaxSuccess" : "ajaxError", [v, k, e ? Vb : L]);
                            n.fireWith(x,
                                [v, p]);
                            h && (r.trigger("ajaxComplete", [v, k]), --f.active || f.event.trigger("ajaxStop"))
                        }
                    }
                    "object" === typeof b && (c = b, b = void 0);
                    c = c || {};
                    var e, g, m, h, l, q, k = f.ajaxSetup({}, c),
                        x = k.context || k,
                        r = k.context && (x.nodeType || x.jquery) ? f(x) : f.event,
                        w = f.Deferred(),
                        n = f.Callbacks("once memory"),
                        D = k.statusCode || {},
                        na = {},
                        C = {},
                        y = 0,
                        z = "canceled",
                        v = {
                            readyState: 0,
                            getResponseHeader: function(a) {
                                var b;
                                if (2 === y) {
                                    if (!q)
                                        for (q = {}; b = Ac.exec(g);) q[b[1].toLowerCase()] = b[2];
                                    b = q[a.toLowerCase()]
                                }
                                return null == b ? null : b
                            },
                            getAllResponseHeaders: function() {
                                return 2 ===
                                    y ? g : null
                            },
                            setRequestHeader: function(a, b) {
                                var c = a.toLowerCase();
                                y || (a = C[c] = C[c] || a, na[a] = b);
                                return this
                            },
                            overrideMimeType: function(a) {
                                y || (k.mimeType = a);
                                return this
                            },
                            statusCode: function(a) {
                                var b;
                                if (a)
                                    if (2 > y)
                                        for (b in a) D[b] = [D[b], a[b]];
                                    else v.always(a[v.status]);
                                return this
                            },
                            abort: function(a) {
                                a = a || z;
                                l && l.abort(a);
                                d(0, a);
                                return this
                            }
                        };
                    w.promise(v).complete = n.add;
                    v.success = v.done;
                    v.error = v.fail;
                    k.url = ((b || k.url || va) + "").replace(Kc, "").replace(Bc, hb[1] + "//");
                    k.type = c.method || c.type || k.method || k.type;
                    k.dataTypes =
                        f.trim(k.dataType || "*").toLowerCase().match(p) || [""];
                    null == k.crossDomain && (b = nc.exec(k.url.toLowerCase()), k.crossDomain = !(!b || b[1] === hb[1] && b[2] === hb[2] && (b[3] || ("http:" === b[1] ? "80" : "443")) === (hb[3] || ("http:" === hb[1] ? "80" : "443"))));
                    k.data && k.processData && "string" !== typeof k.data && (k.data = f.param(k.data, k.traditional));
                    jb(oc, k, c, v);
                    if (2 === y) return v;
                    (h = f.event && k.global) && 0 === f.active++ && f.event.trigger("ajaxStart");
                    k.type = k.type.toUpperCase();
                    k.hasContent = !Ca.test(k.type);
                    var t = k.url;
                    k.hasContent ||
                        (k.data && (t = k.url += (cb.test(t) ? "\x26" : "?") + k.data, delete k.data), !1 === k.cache && (k.url = zc.test(t) ? t.replace(zc, "$1_\x3d" + Ua++) : t + (cb.test(t) ? "\x26" : "?") + "_\x3d" + Ua++));
                    k.ifModified && (f.lastModified[t] && v.setRequestHeader("If-Modified-Since", f.lastModified[t]), f.etag[t] && v.setRequestHeader("If-None-Match", f.etag[t]));
                    (k.data && k.hasContent && !1 !== k.contentType || c.contentType) && v.setRequestHeader("Content-Type", k.contentType);
                    v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] +
                        ("*" !== k.dataTypes[0] ? ", " + pc + "; q\x3d0.01" : "") : k.accepts["*"]);
                    for (e in k.headers) v.setRequestHeader(e, k.headers[e]);
                    if (k.beforeSend && (!1 === k.beforeSend.call(x, v, k) || 2 === y)) return v.abort();
                    z = "abort";
                    for (e in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) v[e](k[e]);
                    if (l = jb(fc, k, c, v)) {
                        v.readyState = 1;
                        h && r.trigger("ajaxSend", [v, k]);
                        if (2 === y) return v;
                        k.async && 0 < k.timeout && (m = a.setTimeout(function() {
                            v.abort("timeout")
                        }, k.timeout));
                        try {
                            y = 1, l.send(na, d)
                        } catch (uc) {
                            if (2 > y) d(-1, uc);
                            else throw uc;
                        }
                    } else d(-1, "No Transport");
                    return v
                },
                getJSON: function(a, b, c) {
                    return f.get(a, b, c, "json")
                },
                getScript: function(a, b) {
                    return f.get(a, void 0, b, "script")
                }
            });
            f.each(["get", "post"], function(a, b) {
                f[b] = function(a, c, d, e) {
                    f.isFunction(c) && (e = e || d, d = c, c = void 0);
                    return f.ajax(f.extend({
                        url: a,
                        type: b,
                        dataType: e,
                        data: c,
                        success: d
                    }, f.isPlainObject(a) && a))
                }
            });
            f._evalUrl = function(a) {
                return f.ajax({
                    url: a,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            };
            f.fn.extend({
                wrapAll: function(a) {
                    if (f.isFunction(a)) return this.each(function(b) {
                        f(this).wrapAll(a.call(this,
                            b))
                    });
                    if (this[0]) {
                        var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && b.insertBefore(this[0]);
                        b.map(function() {
                            for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                            return a
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(a) {
                    return f.isFunction(a) ? this.each(function(b) {
                        f(this).wrapInner(a.call(this, b))
                    }) : this.each(function() {
                        var b = f(this),
                            c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a)
                    })
                },
                wrap: function(a) {
                    var b = f.isFunction(a);
                    return this.each(function(c) {
                        f(this).wrapAll(b ?
                            a.call(this, c) : a)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
                    }).end()
                }
            });
            f.expr.filters.hidden = function(a) {
                return F.reliableHiddenOffsets() ? 0 >= a.offsetWidth && 0 >= a.offsetHeight && !a.getClientRects().length : Ma(a)
            };
            f.expr.filters.visible = function(a) {
                return !f.expr.filters.hidden(a)
            };
            var Rb = /%20/g,
                Gc = /\[\]$/,
                Cc = /\r?\n/g,
                Lc = /^(?:submit|button|image|reset|file)$/i,
                ac = /^(?:input|select|textarea|keygen)/i;
            f.param = function(a, b) {
                var c,
                    d = [],
                    e = function(a, b) {
                        b = f.isFunction(b) ? b() : null == b ? "" : b;
                        d[d.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(b)
                    };
                void 0 === b && (b = f.ajaxSettings && f.ajaxSettings.traditional);
                if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function() {
                    e(this.name, this.value)
                });
                else
                    for (c in a) kb(c, a[c], b, e);
                return d.join("\x26").replace(Rb, "+")
            };
            f.fn.extend({
                serialize: function() {
                    return f.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var a = f.prop(this, "elements");
                        return a ?
                            f.makeArray(a) : this
                    }).filter(function() {
                        var a = this.type;
                        return this.name && !f(this).is(":disabled") && ac.test(this.nodeName) && !Lc.test(a) && (this.checked || !Tb.test(a))
                    }).map(function(a, b) {
                        a = f(this).val();
                        return null == a ? null : f.isArray(a) ? f.map(a, function(a) {
                            return {
                                name: b.name,
                                value: a.replace(Cc, "\r\n")
                            }
                        }) : {
                            name: b.name,
                            value: a.replace(Cc, "\r\n")
                        }
                    }).get()
                }
            });
            f.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
                return this.isLocal ? Ra() : 8 < I.documentMode ? Wa() : /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                    Wa() || Ra()
            } : Wa;
            var qc = 0,
                bc = {},
                cc = f.ajaxSettings.xhr();
            a.attachEvent && a.attachEvent("onunload", function() {
                for (var a in bc) bc[a](void 0, !0)
            });
            F.cors = !!cc && "withCredentials" in cc;
            (cc = F.ajax = !!cc) && f.ajaxTransport(function(b) {
                if (!b.crossDomain || F.cors) {
                    var c;
                    return {
                        send: function(d, e) {
                            var g, m = b.xhr(),
                                h = ++qc;
                            m.open(b.type, b.url, b.async, b.username, b.password);
                            if (b.xhrFields)
                                for (g in b.xhrFields) m[g] = b.xhrFields[g];
                            b.mimeType && m.overrideMimeType && m.overrideMimeType(b.mimeType);
                            b.crossDomain || d["X-Requested-With"] ||
                                (d["X-Requested-With"] = "XMLHttpRequest");
                            for (g in d) void 0 !== d[g] && m.setRequestHeader(g, d[g] + "");
                            m.send(b.hasContent && b.data || null);
                            c = function(a, d) {
                                if (c && (d || 4 === m.readyState))
                                    if (delete bc[h], c = void 0, m.onreadystatechange = f.noop, d) 4 !== m.readyState && m.abort();
                                    else {
                                        var g = {};
                                        var p = m.status;
                                        "string" === typeof m.responseText && (g.text = m.responseText);
                                        try {
                                            var k = m.statusText
                                        } catch ($a) {
                                            k = ""
                                        }
                                        p || !b.isLocal || b.crossDomain ? 1223 === p && (p = 204) : p = g.text ? 200 : 404
                                    } g && e(p, k, g, m.getAllResponseHeaders())
                            };
                            b.async ? 4 === m.readyState ?
                                a.setTimeout(c) : m.onreadystatechange = bc[h] = c : c()
                        },
                        abort: function() {
                            c && c(void 0, !0)
                        }
                    }
                }
            });
            f.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(a) {
                        f.globalEval(a);
                        return a
                    }
                }
            });
            f.ajaxPrefilter("script", function(a) {
                void 0 === a.cache && (a.cache = !1);
                a.crossDomain && (a.type = "GET", a.global = !1)
            });
            f.ajaxTransport("script", function(a) {
                if (a.crossDomain) {
                    var b, c = I.head ||
                        f("head")[0] || I.documentElement;
                    return {
                        send: function(d, e) {
                            b = I.createElement("script");
                            b.async = !0;
                            a.scriptCharset && (b.charset = a.scriptCharset);
                            b.src = a.url;
                            b.onload = b.onreadystatechange = function(a, c) {
                                if (c || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success")
                            };
                            c.insertBefore(b, c.firstChild)
                        },
                        abort: function() {
                            if (b) b.onload(void 0, !0)
                        }
                    }
                }
            });
            var Dc = [],
                rc = /(=)\?(?=&|$)|\?\?/;
            f.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var a = Dc.pop() || f.expando + "_" + Ua++;
                    this[a] = !0;
                    return a
                }
            });
            f.ajaxPrefilter("json jsonp", function(b, c, d) {
                var e, m = !1 !== b.jsonp && (rc.test(b.url) ? "url" : "string" === typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && rc.test(b.data) && "data");
                if (m || "jsonp" === b.dataTypes[0]) {
                    var g = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback;
                    m ? b[m] = b[m].replace(rc, "$1" + g) : !1 !== b.jsonp && (b.url += (cb.test(b.url) ? "\x26" : "?") + b.jsonp + "\x3d" +
                        g);
                    b.converters["script json"] = function() {
                        e || f.error(g + " was not called");
                        return e[0]
                    };
                    b.dataTypes[0] = "json";
                    var h = a[g];
                    a[g] = function() {
                        e = arguments
                    };
                    d.always(function() {
                        void 0 === h ? f(a).removeProp(g) : a[g] = h;
                        b[g] && (b.jsonpCallback = c.jsonpCallback, Dc.push(g));
                        e && f.isFunction(h) && h(e[0]);
                        e = h = void 0
                    });
                    return "script"
                }
            });
            f.parseHTML = function(a, b, c) {
                if (!a || "string" !== typeof a) return null;
                "boolean" === typeof b && (c = b, b = !1);
                b = b || I;
                var d = ca.exec(a);
                c = !c && [];
                if (d) return [b.createElement(d[1])];
                d = L([a], b, c);
                c && c.length &&
                    f(c).remove();
                return f.merge([], d.childNodes)
            };
            var Ec = f.fn.load;
            f.fn.load = function(a, b, c) {
                if ("string" !== typeof a && Ec) return Ec.apply(this, arguments);
                var d, e, m = this,
                    g = a.indexOf(" ");
                if (-1 < g) {
                    var h = f.trim(a.slice(g, a.length));
                    a = a.slice(0, g)
                }
                f.isFunction(b) ? (c = b, b = void 0) : b && "object" === typeof b && (d = "POST");
                0 < m.length && f.ajax({
                    url: a,
                    type: d || "GET",
                    dataType: "html",
                    data: b
                }).done(function(a) {
                    e = arguments;
                    m.html(h ? f("\x3cdiv\x3e").append(f.parseHTML(a)).find(h) : a)
                }).always(c && function(a, b) {
                    m.each(function() {
                        c.apply(this,
                            e || [a.responseText, b, a])
                    })
                });
                return this
            };
            f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
                f.fn[b] = function(a) {
                    return this.on(b, a)
                }
            });
            f.expr.filters.animated = function(a) {
                return f.grep(f.timers, function(b) {
                    return a === b.elem
                }).length
            };
            f.offset = {
                setOffset: function(a, b, c) {
                    var d = f.css(a, "position"),
                        e = f(a),
                        m = {};
                    "static" === d && (a.style.position = "relative");
                    var g = e.offset();
                    var h = f.css(a, "top");
                    var p = f.css(a, "left");
                    ("absolute" === d || "fixed" === d) && -1 < f.inArray("auto",
                        [h, p]) ? (p = e.position(), h = p.top, p = p.left) : (h = parseFloat(h) || 0, p = parseFloat(p) || 0);
                    f.isFunction(b) && (b = b.call(a, c, f.extend({}, g)));
                    null != b.top && (m.top = b.top - g.top + h);
                    null != b.left && (m.left = b.left - g.left + p);
                    "using" in b ? b.using.call(a, m) : e.css(m)
                }
            };
            f.fn.extend({
                offset: function(a) {
                    if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                        f.offset.setOffset(this, a, b)
                    });
                    var b, c = {
                            top: 0,
                            left: 0
                        },
                        d = (b = this[0]) && b.ownerDocument;
                    if (d) {
                        var e = d.documentElement;
                        if (!f.contains(e, b)) return c;
                        "undefined" !== typeof b.getBoundingClientRect &&
                            (c = b.getBoundingClientRect());
                        b = db(d);
                        return {
                            top: c.top + (b.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                            left: c.left + (b.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                        }
                    }
                },
                position: function() {
                    if (this[0]) {
                        var a = {
                                top: 0,
                                left: 0
                            },
                            b = this[0];
                        if ("fixed" === f.css(b, "position")) var c = b.getBoundingClientRect();
                        else {
                            var d = this.offsetParent();
                            c = this.offset();
                            f.nodeName(d[0], "html") || (a = d.offset());
                            a.top += f.css(d[0], "borderTopWidth", !0);
                            a.left += f.css(d[0], "borderLeftWidth", !0)
                        }
                        return {
                            top: c.top - a.top - f.css(b, "marginTop",
                                !0),
                            left: c.left - a.left - f.css(b, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var a = this.offsetParent; a && !f.nodeName(a, "html") && "static" === f.css(a, "position");) a = a.offsetParent;
                        return a || Fb
                    })
                }
            });
            f.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(a, b) {
                var c = /Y/.test(b);
                f.fn[a] = function(d) {
                    return Qa(this, function(a, d, e) {
                        var m = db(a);
                        if (void 0 === e) return m ? b in m ? m[b] : m.document.documentElement[d] : a[d];
                        m ? m.scrollTo(c ? f(m).scrollLeft() : e, c ? e : f(m).scrollTop()) :
                            a[d] = e
                    }, a, d, arguments.length, null)
                }
            });
            f.each(["top", "left"], function(a, b) {
                f.cssHooks[b] = y(F.pixelPosition, function(a, c) {
                    if (c) return c = eb(a, b), Mb.test(c) ? f(a).position()[b] + "px" : c
                })
            });
            f.each({
                Height: "height",
                Width: "width"
            }, function(a, b) {
                f.each({
                    padding: "inner" + a,
                    content: b,
                    "": "outer" + a
                }, function(c, d) {
                    f.fn[d] = function(d, e) {
                        var m = arguments.length && (c || "boolean" !== typeof d),
                            g = c || (!0 === d || !0 === e ? "margin" : "border");
                        return Qa(this, function(b, c, d) {
                            return f.isWindow(b) ? b.document.documentElement["client" + a] :
                                9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === d ? f.css(b, c, g) : f.style(b, c, d, g)
                        }, b, m ? d : void 0, m, null)
                    }
                })
            });
            f.fn.extend({
                bind: function(a, b, c) {
                    return this.on(a, null, b, c)
                },
                unbind: function(a, b) {
                    return this.off(a, null, b)
                },
                delegate: function(a, b, c, d) {
                    return this.on(b, a, c, d)
                },
                undelegate: function(a, b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                }
            });
            f.fn.size = function() {
                return this.length
            };
            f.fn.andSelf =
                f.fn.addBack;
            "function" === typeof define && define.amd && define("jquery", [], function() {
                return f
            });
            var Sb = a.jQuery,
                Mc = a.$;
            f.noConflict = function(b) {
                a.$ === f && (a.$ = Mc);
                b && a.jQuery === f && (a.jQuery = Sb);
                return f
            };
            b || (a.jQuery = a.$ = f);
            return f
        })
    }, {}],
    54: [function(d, n, t) {
        (function(a) {
            function b(b) {
                var d = {};
                b = b.split("magnet:?")[1];
                (b && 0 <= b.length ? b.split("\x26") : []).forEach(function(a) {
                    var b = a.split("\x3d");
                    if (2 === b.length) {
                        a = b[0];
                        b = b[1];
                        "dn" === a && (b = decodeURIComponent(b).replace(/\+/g, " "));
                        if ("tr" === a || "xs" ===
                            a || "as" === a || "ws" === a) b = decodeURIComponent(b);
                        "kt" === a && (b = decodeURIComponent(b).split("+"));
                        "ix" === a && (b = Number(b));
                        d[a] ? Array.isArray(d[a]) ? d[a].push(b) : d[a] = [d[a], b] : d[a] = b
                    }
                });
                var r;
                d.xt && (Array.isArray(d.xt) ? d.xt : [d.xt]).forEach(function(b) {
                    if (r = b.match(/^urn:btih:(.{40})/)) d.infoHash = r[1].toLowerCase();
                    else if (r = b.match(/^urn:btih:(.{32})/)) b = k.decode(r[1]), d.infoHash = a.from(b, "binary").toString("hex")
                });
                d.infoHash && (d.infoHashBuffer = a.from(d.infoHash, "hex"));
                d.dn && (d.name = d.dn);
                d.kt && (d.keywords =
                    d.kt);
                "string" === typeof d.tr ? d.announce = [d.tr] : Array.isArray(d.tr) ? d.announce = d.tr : d.announce = [];
                d.urlList = [];
                if ("string" === typeof d.as || Array.isArray(d.as)) d.urlList = d.urlList.concat(d.as);
                if ("string" === typeof d.ws || Array.isArray(d.ws)) d.urlList = d.urlList.concat(d.ws);
                w(d.announce);
                w(d.urlList);
                return d
            }
            n.exports = b;
            n.exports.decode = b;
            n.exports.encode = function(a) {
                a = Object.assign({}, a);
                a.infoHashBuffer && (a.xt = "urn:btih:" + a.infoHashBuffer.toString("hex"));
                a.infoHash && (a.xt = "urn:btih:" + a.infoHash);
                a.name &&
                    (a.dn = a.name);
                a.keywords && (a.kt = a.keywords);
                a.announce && (a.tr = a.announce);
                a.urlList && (a.ws = a.urlList, delete a.as);
                var b = "magnet:?";
                Object.keys(a).filter(function(a) {
                    return 2 === a.length
                }).forEach(function(d, e) {
                    (Array.isArray(a[d]) ? a[d] : [a[d]]).forEach(function(a, h) {
                        !(0 < e || 0 < h) || "kt" === d && 0 !== h || (b += "\x26");
                        "dn" === d && (a = encodeURIComponent(a).replace(/%20/g, "+"));
                        if ("tr" === d || "xs" === d || "as" === d || "ws" === d) a = encodeURIComponent(a);
                        "kt" === d && (a = encodeURIComponent(a));
                        b = "kt" === d && 0 < h ? b + ("+" + a) : b + (d + "\x3d" +
                            a)
                    })
                });
                return b
            };
            var k = d("thirty-two"),
                w = d("uniq")
        }).call(this, d("buffer").Buffer)
    }, {
        buffer: 51,
        "thirty-two": 56,
        uniq: 58
    }],
    55: [function(d, n, t) {
        (function(a, b) {
            "object" === typeof t && "undefined" !== typeof n ? n.exports = b() : "function" === typeof define && define.amd ? define(b) : a.moment = b()
        })(this, function() {
            function a() {
                return Vc.apply(null, arguments)
            }

            function b(a) {
                return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
            }

            function k(a) {
                return null != a && "[object Object]" === Object.prototype.toString.call(a)
            }

            function w(a) {
                return void 0 === a
            }

            function D(a) {
                return "number" === typeof a || "[object Number]" === Object.prototype.toString.call(a)
            }

            function h(a) {
                return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
            }

            function r(a, b) {
                var c = [],
                    d;
                for (d = 0; d < a.length; ++d) c.push(b(a[d], d));
                return c
            }

            function e(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }

            function c(a, b) {
                for (var c in b) e(b, c) && (a[c] = b[c]);
                e(b, "toString") && (a.toString = b.toString);
                e(b, "valueOf") && (a.valueOf = b.valueOf);
                return a
            }

            function x(a,
                b, c, d) {
                return m(a, b, c, d, !0).utc()
            }

            function C(a) {
                null == a._pf && (a._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                });
                return a._pf
            }

            function t(a) {
                if (null == a._isValid) {
                    var b = C(a),
                        c = Kb.call(b.parsedDateParts, function(a) {
                            return null != a
                        });
                    c = !isNaN(a._d.getTime()) && 0 > b.overflow && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.weekdayMismatch && !b.nullInput &&
                        !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
                    a._strict && (c = c && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour);
                    if (null != Object.isFrozen && Object.isFrozen(a)) return c;
                    a._isValid = c
                }
                return a._isValid
            }

            function ra(a) {
                var b = x(NaN);
                null != a ? c(C(b), a) : C(b).userInvalidated = !0;
                return b
            }

            function Ga(a, b) {
                var c;
                w(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject);
                w(b._i) || (a._i = b._i);
                w(b._f) || (a._f = b._f);
                w(b._l) || (a._l = b._l);
                w(b._strict) || (a._strict = b._strict);
                w(b._tzm) || (a._tzm = b._tzm);
                w(b._isUTC) || (a._isUTC = b._isUTC);
                w(b._offset) || (a._offset = b._offset);
                w(b._pf) || (a._pf = C(b));
                w(b._locale) || (a._locale = b._locale);
                if (0 < Ub.length)
                    for (c = 0; c < Ub.length; c++) {
                        var d = Ub[c];
                        var u = b[d];
                        w(u) || (a[d] = u)
                    }
                return a
            }

            function E(b) {
                Ga(this, b);
                this._d = new Date(null != b._d ? b._d.getTime() : NaN);
                this.isValid() || (this._d = new Date(NaN));
                !1 === Xb && (Xb = !0, a.updateOffset(this), Xb = !1)
            }

            function U(a) {
                return a instanceof E || null != a && null != a._isAMomentObject
            }

            function N(a) {
                return 0 > a ? Math.ceil(a) ||
                    0 : Math.floor(a)
            }

            function L(a) {
                a = +a;
                var b = 0;
                0 !== a && isFinite(a) && (b = N(a));
                return b
            }

            function Ha(a, b, c) {
                var d = Math.min(a.length, b.length),
                    u = Math.abs(a.length - b.length),
                    e = 0,
                    f;
                for (f = 0; f < d; f++)(c && a[f] !== b[f] || !c && L(a[f]) !== L(b[f])) && e++;
                return e + u
            }

            function Z(b) {
                !1 === a.suppressDeprecationWarnings && "undefined" !== typeof console && console.warn && console.warn("Deprecation warning: " + b)
            }

            function ia(b, d) {
                var u = !0;
                return c(function() {
                    null != a.deprecationHandler && a.deprecationHandler(null, b);
                    if (u) {
                        for (var c = [], e, f =
                                0; f < arguments.length; f++) {
                            e = "";
                            if ("object" === typeof arguments[f]) {
                                e += "\n[" + f + "] ";
                                for (var M in arguments[0]) e += M + ": " + arguments[0][M] + ", ";
                                e = e.slice(0, -2)
                            } else e = arguments[f];
                            c.push(e)
                        }
                        Z(b + "\nArguments: " + Array.prototype.slice.call(c).join("") + "\n" + Error().stack);
                        u = !1
                    }
                    return d.apply(this, arguments)
                }, d)
            }

            function qa(b, c) {
                null != a.deprecationHandler && a.deprecationHandler(b, c);
                Mb[b] || (Z(c), Mb[b] = !0)
            }

            function la(a) {
                return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
            }

            function ha(a,
                b) {
                var d = c({}, a),
                    u;
                for (u in b) e(b, u) && (k(a[u]) && k(b[u]) ? (d[u] = {}, c(d[u], a[u]), c(d[u], b[u])) : null != b[u] ? d[u] = b[u] : delete d[u]);
                for (u in a) e(a, u) && !e(b, u) && k(a[u]) && (d[u] = c({}, d[u]));
                return d
            }

            function Da(a) {
                null != a && this.set(a)
            }

            function S(a, b) {
                var c = a.toLowerCase();
                Fb[c] = Fb[c + "s"] = Fb[b] = a
            }

            function ba(a) {
                return "string" === typeof a ? Fb[a] || Fb[a.toLowerCase()] : void 0
            }

            function La(a) {
                var b = {},
                    c, d;
                for (d in a) e(a, d) && (c = ba(d)) && (b[c] = a[d]);
                return b
            }

            function za(a) {
                var b = [],
                    c;
                for (c in a) b.push({
                    unit: c,
                    priority: Fa[c]
                });
                b.sort(function(a, b) {
                    return a.priority - b.priority
                });
                return b
            }

            function A(a, b, c) {
                var d = "" + Math.abs(a);
                return (0 <= a ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, b - d.length)).toString().substr(1) + d
            }

            function y(a, b, c, d) {
                var u = d;
                "string" === typeof d && (u = function() {
                    return this[d]()
                });
                a && (Gb[a] = u);
                b && (Gb[b[0]] = function() {
                    return A(u.apply(this, arguments), b[1], b[2])
                });
                c && (Gb[c] = function() {
                    return this.localeData().ordinal(u.apply(this, arguments), a)
                })
            }

            function ib(a) {
                return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g,
                    "")
            }

            function Va(a) {
                var b = a.match(rb),
                    c;
                var d = 0;
                for (c = b.length; d < c; d++) b[d] = Gb[b[d]] ? Gb[b[d]] : ib(b[d]);
                return function(d) {
                    var u = "",
                        e;
                    for (e = 0; e < c; e++) u += la(b[e]) ? b[e].call(d, a) : b[e];
                    return u
                }
            }

            function Oa(a, b) {
                if (!a.isValid()) return a.localeData().invalidDate();
                b = T(b, a.localeData());
                Pb[b] = Pb[b] || Va(b);
                return Pb[b](a)
            }

            function T(a, b) {
                function c(a) {
                    return b.longDateFormat(a) || a
                }
                var d = 5;
                for (eb.lastIndex = 0; 0 <= d && eb.test(a);) a = a.replace(eb, c), eb.lastIndex = 0, --d;
                return a
            }

            function H(a, b, c) {
                mc[a] = la(b) ? b : function(a,
                    d) {
                    return a && c ? c : b
                }
            }

            function da(a, b) {
                return e(mc, a) ? mc[a](b._strict, b._locale) : new RegExp(Ia(a))
            }

            function Ia(a) {
                return wa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, u) {
                    return b || c || d || u
                }))
            }

            function wa(a) {
                return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$\x26")
            }

            function J(a, b) {
                var c, d = b;
                "string" === typeof a && (a = [a]);
                D(b) && (d = function(a, c) {
                    c[b] = L(a)
                });
                for (c = 0; c < a.length; c++) wb[a[c]] = d
            }

            function R(a, b) {
                J(a, function(a, c, d, u) {
                    d._w = d._w || {};
                    b(a, d._w, d, u)
                })
            }

            function l(a) {
                return 0 ===
                    a % 4 && 0 !== a % 100 || 0 === a % 400
            }

            function ma(b, c) {
                return function(d) {
                    return null != d ? (jb(this, b, d), a.updateOffset(this, c), this) : Na(this, b)
                }
            }

            function Na(a, b) {
                return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
            }

            function jb(a, b, c) {
                if (a.isValid() && !isNaN(c))
                    if ("FullYear" === b && l(a.year()) && 1 === a.month() && 29 === a.date()) a._d["set" + (a._isUTC ? "UTC" : "") + b](c, a.month(), K(c, a.month()));
                    else a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
            }

            function K(a, b) {
                if (isNaN(a) || isNaN(b)) return NaN;
                var c = (b % 12 + 12) % 12;
                return 1 === c ? l(a +
                    (b - c) / 12) ? 29 : 28 : 31 - c % 7 % 2
            }

            function Ma(a, b) {
                if (!a.isValid()) return a;
                if ("string" === typeof b)
                    if (/^\d+$/.test(b)) b = L(b);
                    else if (b = a.localeData().monthsParse(b), !D(b)) return a;
                var c = Math.min(a.date(), K(a.year(), b));
                a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c);
                return a
            }

            function kb(b) {
                return null != b ? (Ma(this, b), a.updateOffset(this, !0), this) : Na(this, "Month")
            }

            function Wa() {
                function a(a, b) {
                    return b.length - a.length
                }
                var b = [],
                    c = [],
                    d = [],
                    e;
                for (e = 0; 12 > e; e++) {
                    var f = x([2E3, e]);
                    b.push(this.monthsShort(f, ""));
                    c.push(this.months(f,
                        ""));
                    d.push(this.months(f, ""));
                    d.push(this.monthsShort(f, ""))
                }
                b.sort(a);
                c.sort(a);
                d.sort(a);
                for (e = 0; 12 > e; e++) b[e] = wa(b[e]), c[e] = wa(c[e]);
                for (e = 0; 24 > e; e++) d[e] = wa(d[e]);
                this._monthsShortRegex = this._monthsRegex = new RegExp("^(" + d.join("|") + ")", "i");
                this._monthsStrictRegex = new RegExp("^(" + c.join("|") + ")", "i");
                this._monthsShortStrictRegex = new RegExp("^(" + b.join("|") + ")", "i")
            }

            function Ra(a, b, c, d, e, f, m) {
                b = new Date(a, b, c, d, e, f, m);
                100 > a && 0 <= a && isFinite(b.getFullYear()) && b.setFullYear(a);
                return b
            }

            function db(a) {
                var b =
                    new Date(Date.UTC.apply(null, arguments));
                100 > a && 0 <= a && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a);
                return b
            }

            function Aa(a, b, c) {
                c = 7 + b - c;
                return -((7 + db(a, 0, c).getUTCDay() - b) % 7) + c - 1
            }

            function I(a, b, c, d, e) {
                c = (7 + c - d) % 7;
                d = Aa(a, d, e);
                d = 1 + 7 * (b - 1) + c + d;
                0 >= d ? (b = a - 1, a = (l(b) ? 366 : 365) + d) : d > (l(a) ? 366 : 365) ? (b = a + 1, a = d - (l(a) ? 366 : 365)) : (b = a, a = d);
                return {
                    year: b,
                    dayOfYear: a
                }
            }

            function Ka(a, b, c) {
                var d = Aa(a.year(), b, c);
                d = Math.floor((a.dayOfYear() - d - 1) / 7) + 1;
                1 > d ? (a = a.year() - 1, b = d + Ea(a, b, c)) : d > Ea(a.year(), b, c) ? (b = d - Ea(a.year(),
                    b, c), a = a.year() + 1) : (a = a.year(), b = d);
                return {
                    week: b,
                    year: a
                }
            }

            function Ea(a, b, c) {
                var d = Aa(a, b, c);
                b = Aa(a + 1, b, c);
                return ((l(a) ? 366 : 365) - d + b) / 7
            }

            function mb(a, b, c) {
                var d;
                a = a.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; 7 > d; ++d) {
                        var e = x([2E3, 1]).day(d);
                        this._minWeekdaysParse[d] = this.weekdaysMin(e, "").toLocaleLowerCase();
                        this._shortWeekdaysParse[d] = this.weekdaysShort(e, "").toLocaleLowerCase();
                        this._weekdaysParse[d] = this.weekdays(e,
                            "").toLocaleLowerCase()
                    }
                if (c) b = "dddd" === b ? Ca.call(this._weekdaysParse, a) : "ddd" === b ? Ca.call(this._shortWeekdaysParse, a) : Ca.call(this._minWeekdaysParse, a);
                else if ("dddd" === b) {
                    b = Ca.call(this._weekdaysParse, a);
                    if (-1 !== b) return b;
                    b = Ca.call(this._shortWeekdaysParse, a);
                    if (-1 !== b) return b;
                    b = Ca.call(this._minWeekdaysParse, a)
                } else if ("ddd" === b) {
                    b = Ca.call(this._shortWeekdaysParse, a);
                    if (-1 !== b) return b;
                    b = Ca.call(this._weekdaysParse, a);
                    if (-1 !== b) return b;
                    b = Ca.call(this._minWeekdaysParse, a)
                } else {
                    b = Ca.call(this._minWeekdaysParse,
                        a);
                    if (-1 !== b) return b;
                    b = Ca.call(this._weekdaysParse, a);
                    if (-1 !== b) return b;
                    b = Ca.call(this._shortWeekdaysParse, a)
                }
                return -1 !== b ? b : null
            }

            function oa() {
                function a(a, b) {
                    return b.length - a.length
                }
                var b = [],
                    c = [],
                    d = [],
                    e = [],
                    f;
                for (f = 0; 7 > f; f++) {
                    var m = x([2E3, 1]).day(f);
                    var g = this.weekdaysMin(m, "");
                    var h = this.weekdaysShort(m, "");
                    m = this.weekdays(m, "");
                    b.push(g);
                    c.push(h);
                    d.push(m);
                    e.push(g);
                    e.push(h);
                    e.push(m)
                }
                b.sort(a);
                c.sort(a);
                d.sort(a);
                e.sort(a);
                for (f = 0; 7 > f; f++) c[f] = wa(c[f]), d[f] = wa(d[f]), e[f] = wa(e[f]);
                this._weekdaysMinRegex =
                    this._weekdaysShortRegex = this._weekdaysRegex = new RegExp("^(" + e.join("|") + ")", "i");
                this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i");
                this._weekdaysShortStrictRegex = new RegExp("^(" + c.join("|") + ")", "i");
                this._weekdaysMinStrictRegex = new RegExp("^(" + b.join("|") + ")", "i")
            }

            function V() {
                return this.hours() % 12 || 12
            }

            function Ab(a, b) {
                y(a, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), b)
                })
            }

            function ta(a, b) {
                return b._meridiemParse
            }

            function F(a) {
                return a ? a.toLowerCase().replace("_",
                    "-") : a
            }

            function f(a) {
                var b = null;
                if (!va[a] && "undefined" !== typeof n && n && n.exports) try {
                    b = Rb._abbr, d("./locale/" + a), ab(b)
                } catch (X) {}
                return va[a]
            }

            function ab(a, b) {
                a && ((b = w(b) ? Xa(a) : tb(a, b)) ? Rb = b : "undefined" !== typeof console && console.warn && console.warn("Locale " + a + " not found. Did you forget to load it?"));
                return Rb._abbr
            }

            function tb(a, b) {
                if (null !== b) {
                    var c = pc;
                    b.abbr = a;
                    if (null != va[a]) qa("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                        c = va[a]._config;
                    else if (null != b.parentLocale)
                        if (null != va[b.parentLocale]) c = va[b.parentLocale]._config;
                        else if (c = f(b.parentLocale), null != c) c = c._config;
                    else return hb[b.parentLocale] || (hb[b.parentLocale] = []), hb[b.parentLocale].push({
                        name: a,
                        config: b
                    }), null;
                    va[a] = new Da(ha(c, b));
                    hb[a] && hb[a].forEach(function(a) {
                        tb(a.name, a.config)
                    });
                    ab(a);
                    return va[a]
                }
                delete va[a];
                return null
            }

            function Xa(a) {
                var c;
                a && a._locale && a._locale._abbr && (a = a._locale._abbr);
                if (!a) return Rb;
                if (!b(a)) {
                    if (c = f(a)) return c;
                    a = [a]
                }
                a: {
                    c =
                    0;
                    for (var d, e, u, m; c < a.length;) {
                        m = F(a[c]).split("-");
                        d = m.length;
                        for (e = (e = F(a[c + 1])) ? e.split("-") : null; 0 < d;) {
                            if (u = f(m.slice(0, d).join("-"))) {
                                a = u;
                                break a
                            }
                            if (e && e.length >= d && Ha(m, e, !0) >= d - 1) break;
                            d--
                        }
                        c++
                    }
                    a = Rb
                }
                return a
            }

            function fb(a) {
                var b;
                (b = a._a) && -2 === C(a).overflow && (b = 0 > b[lb] || 11 < b[lb] ? lb : 1 > b[Za] || b[Za] > K(b[bb], b[lb]) ? Za : 0 > b[Ba] || 24 < b[Ba] || 24 === b[Ba] && (0 !== b[Ua] || 0 !== b[cb] || 0 !== b[xb]) ? Ba : 0 > b[Ua] || 59 < b[Ua] ? Ua : 0 > b[cb] || 59 < b[cb] ? cb : 0 > b[xb] || 999 < b[xb] ? xb : -1, C(a)._overflowDayOfYear && (b < bb || b > Za) && (b = Za),
                    C(a)._overflowWeeks && -1 === b && (b = Kc), C(a)._overflowWeekday && -1 === b && (b = zc), C(a).overflow = b);
                return a
            }

            function Q(a, b, c) {
                return null != a ? a : null != b ? b : c
            }

            function v(b) {
                var c = [];
                if (!b._d) {
                    var d = new Date(a.now());
                    d = b._useUTC ? [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()] : [d.getFullYear(), d.getMonth(), d.getDate()];
                    if (b._w && null == b._a[Za] && null == b._a[lb]) {
                        var e = b._w;
                        if (null != e.GG || null != e.W || null != e.E) {
                            var f = 1;
                            var u = 4;
                            var m = Q(e.GG, b._a[bb], Ka(p(), 1, 4).year);
                            var g = Q(e.W, 1);
                            var h = Q(e.E, 1);
                            if (1 > h || 7 < h) var k = !0
                        } else if (f = b._locale._week.dow, u = b._locale._week.doy, g = Ka(p(), f, u), m = Q(e.gg, b._a[bb], g.year), g = Q(e.w, g.week), null != e.d) {
                            if (h = e.d, 0 > h || 6 < h) k = !0
                        } else if (null != e.e) {
                            if (h = e.e + f, 0 > e.e || 6 < e.e) k = !0
                        } else h = f;
                        1 > g || g > Ea(m, f, u) ? C(b)._overflowWeeks = !0 : null != k ? C(b)._overflowWeekday = !0 : (k = I(m, g, h, f, u), b._a[bb] = k.year, b._dayOfYear = k.dayOfYear)
                    }
                    if (null != b._dayOfYear) {
                        k = Q(b._a[bb], d[bb]);
                        if (b._dayOfYear > (l(k) ? 366 : 365) || 0 === b._dayOfYear) C(b)._overflowDayOfYear = !0;
                        k = db(k, 0, b._dayOfYear);
                        b._a[lb] = k.getUTCMonth();
                        b._a[Za] =
                            k.getUTCDate()
                    }
                    for (k = 0; 3 > k && null == b._a[k]; ++k) b._a[k] = c[k] = d[k];
                    for (; 7 > k; k++) b._a[k] = c[k] = null == b._a[k] ? 2 === k ? 1 : 0 : b._a[k];
                    24 === b._a[Ba] && 0 === b._a[Ua] && 0 === b._a[cb] && 0 === b._a[xb] && (b._nextDay = !0, b._a[Ba] = 0);
                    b._d = (b._useUTC ? db : Ra).apply(null, c);
                    c = b._useUTC ? b._d.getUTCDay() : b._d.getDay();
                    null != b._tzm && b._d.setUTCMinutes(b._d.getUTCMinutes() - b._tzm);
                    b._nextDay && (b._a[Ba] = 24);
                    b._w && "undefined" !== typeof b._w.d && b._w.d !== c && (C(b).weekdayMismatch = !0)
                }
            }

            function z(a) {
                var b;
                var c = a._i;
                var d = Gc.exec(c) || Cc.exec(c);
                if (d) {
                    C(a).iso = !0;
                    c = 0;
                    for (b = ac.length; c < b; c++)
                        if (ac[c][1].exec(d[1])) {
                            var e = ac[c][0];
                            var f = !1 !== ac[c][2];
                            break
                        } if (null == e) a._isValid = !1;
                    else {
                        if (d[3]) {
                            c = 0;
                            for (b = qc.length; c < b; c++)
                                if (qc[c][1].exec(d[3])) {
                                    var u = (d[2] || " ") + qc[c][0];
                                    break
                                } if (null == u) {
                                a._isValid = !1;
                                return
                            }
                        }
                        if (f || null == u) {
                            if (d[4])
                                if (Lc.exec(d[4])) var m = "Z";
                                else {
                                    a._isValid = !1;
                                    return
                                } a._f = e + (u || "") + (m || "");
                            ja(a)
                        } else a._isValid = !1
                    }
                } else a._isValid = !1
            }

            function aa(a) {
                var b = cc.exec(a._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/,
                    "").replace(/\s\s*$/, ""));
                if (b) {
                    var c = b[3],
                        d = b[2],
                        e = b[5],
                        f = b[6],
                        u = b[7],
                        m = parseInt(b[4], 10);
                    c = [49 >= m ? 2E3 + m : 999 >= m ? 1900 + m : m, nc.indexOf(c), parseInt(d, 10), parseInt(e, 10), parseInt(f, 10)];
                    u && c.push(parseInt(u, 10));
                    a: {
                        if (u = b[1])
                            if (u = oc.indexOf(u), d = (new Date(c[0], c[1], c[2])).getDay(), u !== d) {
                                C(a).weekdayMismatch = !0;
                                u = a._isValid = !1;
                                break a
                            } u = !0
                    }
                    u && (a._a = c, (u = b[8]) ? b = Dc[u] : b[9] ? b = 0 : (b = parseInt(b[10], 10), u = b % 100, b = (b - u) / 100 * 60 + u), a._tzm = b, a._d = db.apply(null, a._a), a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
                        C(a).rfc2822 = !0)
                } else a._isValid = !1
            }

            function ca(b) {
                var c = bc.exec(b._i);
                null !== c ? b._d = new Date(+c[1]) : (z(b), !1 === b._isValid && (delete b._isValid, aa(b), !1 === b._isValid && (delete b._isValid, a.createFromInputFallback(b))))
            }

            function ja(b) {
                if (b._f === a.ISO_8601) z(b);
                else if (b._f === a.RFC_2822) aa(b);
                else {
                    b._a = [];
                    C(b).empty = !0;
                    var c = "" + b._i,
                        d, f, u = c.length,
                        m = 0;
                    var g = T(b._f, b._locale).match(rb) || [];
                    for (d = 0; d < g.length; d++) {
                        var h = g[d];
                        if (f = (c.match(da(h, b)) || [])[0]) {
                            var p = c.substr(0, c.indexOf(f));
                            0 < p.length && C(b).unusedInput.push(p);
                            c = c.slice(c.indexOf(f) + f.length);
                            m += f.length
                        }
                        if (Gb[h]) {
                            if (f ? C(b).empty = !1 : C(b).unusedTokens.push(h), p = b, null != f && e(wb, h)) wb[h](f, p._a, p, h)
                        } else b._strict && !f && C(b).unusedTokens.push(h)
                    }
                    C(b).charsLeftOver = u - m;
                    0 < c.length && C(b).unusedInput.push(c);
                    12 >= b._a[Ba] && !0 === C(b).bigHour && 0 < b._a[Ba] && (C(b).bigHour = void 0);
                    C(b).parsedDateParts = b._a.slice(0);
                    C(b).meridiem = b._meridiem;
                    c = b._a;
                    d = Ba;
                    u = b._locale;
                    g = b._a[Ba];
                    m = b._meridiem;
                    null != m && (null != u.meridiemHour ? g = u.meridiemHour(g, m) : null != u.isPM && ((u = u.isPM(m)) &&
                        12 > g && (g += 12), u || 12 !== g || (g = 0)));
                    c[d] = g;
                    v(b);
                    fb(b)
                }
            }

            function Cb(a) {
                if (!a._d) {
                    var b = La(a._i);
                    a._a = r([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
                        return a && parseInt(a, 10)
                    });
                    v(a)
                }
            }

            function Db(a) {
                var d = a._i,
                    e = a._f;
                a._locale = a._locale || Xa(a._l);
                if (null === d || void 0 === e && "" === d) return ra({
                    nullInput: !0
                });
                "string" === typeof d && (a._i = d = a._locale.preparse(d));
                if (U(d)) return new E(fb(d));
                if (h(d)) a._d = d;
                else if (b(e))
                    if (0 === a._f.length) C(a).invalidFormat = !0, a._d = new Date(NaN);
                    else {
                        for (d = 0; d < a._f.length; d++) {
                            e = 0;
                            var f = Ga({}, a);
                            null != a._useUTC && (f._useUTC = a._useUTC);
                            f._f = a._f[d];
                            ja(f);
                            if (t(f) && (e += C(f).charsLeftOver, e += 10 * C(f).unusedTokens.length, C(f).score = e, null == u || e < u)) {
                                var u = e;
                                var m = f
                            }
                        }
                        c(a, m || f)
                    }
                else e ? ja(a) : Nb(a);
                t(a) || (a._d = null);
                return a
            }

            function Nb(c) {
                var d = c._i;
                w(d) ? c._d = new Date(a.now()) : h(d) ? c._d = new Date(d.valueOf()) : "string" === typeof d ? ca(c) : b(d) ? (c._a = r(d.slice(0), function(a) {
                    return parseInt(a, 10)
                }), v(c)) : k(d) ? Cb(c) : D(d) ? c._d = new Date(d) : a.createFromInputFallback(c)
            }

            function m(a, c, d, e, f) {
                var u = {};
                if (!0 === d || !1 === d) e = d, d = void 0;
                var m;
                if (m = k(a)) a: if (m = a, Object.getOwnPropertyNames) m = 0 === Object.getOwnPropertyNames(m).length;
                    else {
                        for (var g in m)
                            if (m.hasOwnProperty(g)) {
                                m = !1;
                                break a
                            } m = !0
                    } if (m || b(a) && 0 === a.length) a = void 0;
                u._isAMomentObject = !0;
                u._useUTC = u._isUTC = f;
                u._l = d;
                u._i = a;
                u._f = c;
                u._strict = e;
                a = new E(fb(Db(u)));
                a._nextDay && (a.add(1, "d"), a._nextDay = void 0);
                return a
            }

            function p(a, b, c, d) {
                return m(a, b, c, d, !1)
            }

            function na(a, c) {
                var d;
                1 === c.length && b(c[0]) && (c = c[0]);
                if (!c.length) return p();
                var e = c[0];
                for (d = 1; d < c.length; ++d)
                    if (!c[d].isValid() || c[d][a](e)) e = c[d];
                return e
            }

            function Y(a) {
                var b = La(a);
                a = b.year || 0;
                var c = b.quarter || 0,
                    d = b.month || 0,
                    e = b.week || 0,
                    f = b.day || 0,
                    u = b.hour || 0,
                    m = b.minute || 0,
                    g = b.second || 0,
                    h = b.millisecond || 0;
                a: {
                    for (var p in b)
                        if (-1 === Ca.call(Sb, p) || null != b[p] && isNaN(b[p])) {
                            b = !1;
                            break a
                        } p = !1;
                    for (var k = 0; k < Sb.length; ++k)
                        if (b[Sb[k]]) {
                            if (p) {
                                b = !1;
                                break a
                            }
                            parseFloat(b[Sb[k]]) !== L(b[Sb[k]]) && (p = !0)
                        } b = !0
                }
                this._isValid = b;
                this._milliseconds = +h + 1E3 * g + 6E4 * m + 36E5 * u;
                this._days = +f + 7 * e;
                this._months = +d + 3 * c + 12 * a;
                this._data = {};
                this._locale = Xa();
                this._bubble()
            }

            function sa(a) {
                return a instanceof Y
            }

            function ya(a) {
                return 0 > a ? -1 * Math.round(-1 * a) : Math.round(a)
            }

            function sc(a, b) {
                y(a, 0, 0, function() {
                    var a = this.utcOffset(),
                        c = "+";
                    0 > a && (a = -a, c = "-");
                    return c + A(~~(a / 60), 2) + b + A(~~a % 60, 2)
                })
            }

            function vb(a, b) {
                a = (b || "").match(a);
                if (null === a) return null;
                a = ((a[a.length - 1] || []) + "").match(Mc) || ["-", 0, 0];
                b = +(60 * a[1]) + L(a[2]);
                return 0 === b ? 0 : "+" === a[0] ? b : -b
            }

            function Hb(b, c) {
                return c._isUTC ? (c = c.clone(), b = (U(b) || h(b) ? b.valueOf() :
                    p(b).valueOf()) - c.valueOf(), c._d.setTime(c._d.valueOf() + b), a.updateOffset(c, !1), c) : p(b).local()
            }

            function Ja() {
                return this.isValid() ? this._isUTC && 0 === this._offset : !1
            }

            function ea(a, b) {
                var c = a;
                sa(a) ? c = {
                    ms: a._milliseconds,
                    d: a._days,
                    M: a._months
                } : D(a) ? (c = {}, b ? c[b] = a : c.milliseconds = a) : (b = g.exec(a)) ? (c = "-" === b[1] ? -1 : 1, c = {
                    y: 0,
                    d: L(b[Za]) * c,
                    h: L(b[Ba]) * c,
                    m: L(b[Ua]) * c,
                    s: L(b[cb]) * c,
                    ms: L(ya(1E3 * b[xb])) * c
                }) : (b = q.exec(a)) ? (c = "-" === b[1] ? -1 : 1, c = {
                    y: Qa(b[2], c),
                    M: Qa(b[3], c),
                    w: Qa(b[4], c),
                    d: Qa(b[5], c),
                    h: Qa(b[6], c),
                    m: Qa(b[7],
                        c),
                    s: Qa(b[8], c)
                }) : null == c ? c = {} : "object" === typeof c && ("from" in c || "to" in c) && (b = p(c.from), c = p(c.to), b.isValid() && c.isValid() ? (c = Hb(c, b), b.isBefore(c) ? c = Tb(b, c) : (c = Tb(c, b), c.milliseconds = -c.milliseconds, c.months = -c.months), b = c) : b = {
                    milliseconds: 0,
                    months: 0
                }, c = {}, c.ms = b.milliseconds, c.M = b.months);
                c = new Y(c);
                sa(a) && e(a, "_locale") && (c._locale = a._locale);
                return c
            }

            function Qa(a, b) {
                a = a && parseFloat(a.replace(",", "."));
                return (isNaN(a) ? 0 : a) * b
            }

            function Tb(a, b) {
                var c = {
                    milliseconds: 0,
                    months: 0
                };
                c.months = b.month() -
                    a.month() + 12 * (b.year() - a.year());
                a.clone().add(c.months, "M").isAfter(b) && --c.months;
                c.milliseconds = +b - +a.clone().add(c.months, "M");
                return c
            }

            function dc(a, b) {
                return function(c, d) {
                    if (null !== d && !isNaN(+d)) {
                        qa(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
                        var e = c;
                        c = d;
                        d = e
                    }
                    c = ea("string" === typeof c ? +c : c, d);
                    ec(this, c, a);
                    return this
                }
            }

            function ec(b, c, d, e) {
                var f = c._milliseconds,
                    u = ya(c._days);
                c = ya(c._months);
                b.isValid() && (e = null == e ? !0 : e, c && Ma(b, Na(b, "Month") + c * d), u && jb(b, "Date", Na(b, "Date") + u * d), f && b._d.setTime(b._d.valueOf() + f * d), e && a.updateOffset(b, u || c))
            }

            function Ib(a, b) {
                var c = 12 * (b.year() - a.year()) + (b.month() - a.month()),
                    d = a.clone().add(c, "months");
                0 > b - d ? (a = a.clone().add(c - 1, "months"), b = (b - d) / (d - a)) : (a = a.clone().add(c + 1, "months"), b = (b - d) / (a - d));
                return -(c + b) || 0
            }

            function Sa(a) {
                if (void 0 === a) return this._locale._abbr;
                a = Xa(a);
                null != a && (this._locale = a);
                return this
            }

            function tc() {
                return this._locale
            }

            function Jb(a, b) {
                y(0, [a, a.length], 0, b)
            }

            function Wb(a, b, c, d, e) {
                if (null == a) return Ka(this, d, e).year;
                var f = Ea(a, d, e);
                b > f && (b = f);
                a = I(a, b, c, d, e);
                a = db(a.year, 0, a.dayOfYear);
                this.year(a.getUTCFullYear());
                this.month(a.getUTCMonth());
                this.date(a.getUTCDate());
                return this
            }

            function Ic(a, b) {
                b[xb] = L(1E3 * ("0." + a))
            }

            function vc(a) {
                return a
            }

            function Ob(a, b, c, d) {
                var e = Xa();
                b = x().set(d, b);
                return e[c](b, a)
            }

            function gc(a, b, c) {
                D(a) && (b = a, a = void 0);
                a = a || "";
                if (null != b) return Ob(a, b, c, "month");
                var d = [];
                for (b = 0; 12 > b; b++) d[b] =
                    Ob(a, b, c, "month");
                return d
            }

            function hc(a, b, c, d) {
                "boolean" !== typeof a && (c = b = a, a = !1);
                D(b) && (c = b, b = void 0);
                b = b || "";
                var e = Xa();
                a = a ? e._week.dow : 0;
                if (null != c) return Ob(b, (c + a) % 7, d, "day");
                e = [];
                for (c = 0; 7 > c; c++) e[c] = Ob(b, (c + a) % 7, d, "day");
                return e
            }

            function ic(a, b, c, d) {
                b = ea(b, c);
                a._milliseconds += d * b._milliseconds;
                a._days += d * b._days;
                a._months += d * b._months;
                return a._bubble()
            }

            function wc(a) {
                return 0 > a ? Math.floor(a) : Math.ceil(a)
            }

            function ob(a) {
                return function() {
                    return this.as(a)
                }
            }

            function qb(a) {
                return function() {
                    return this.isValid() ?
                        this._data[a] : NaN
                }
            }

            function Fc(a, b, c, d, e) {
                return e.relativeTime(b || 1, !!c, a, d)
            }

            function zb(a) {
                return (0 < a) - (0 > a) || +a
            }

            function Eb() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var a = Hc(this._milliseconds) / 1E3,
                    b = Hc(this._days),
                    c = Hc(this._months);
                var d = N(a / 60);
                var e = N(d / 60);
                a %= 60;
                d %= 60;
                var f = N(c / 12);
                c %= 12;
                a = a ? a.toFixed(3).replace(/\.?0+$/, "") : "";
                var m = this.asSeconds();
                if (!m) return "P0D";
                var g = 0 > m ? "-" : "",
                    h = zb(this._months) !== zb(m) ? "-" : "",
                    p = zb(this._days) !== zb(m) ? "-" : "";
                m = zb(this._milliseconds) !==
                    zb(m) ? "-" : "";
                return g + "P" + (f ? h + f + "Y" : "") + (c ? h + c + "M" : "") + (b ? p + b + "D" : "") + (e || d || a ? "T" : "") + (e ? m + e + "H" : "") + (d ? m + d + "M" : "") + (a ? m + a + "S" : "")
            }
            var Kb = Array.prototype.some ? Array.prototype.some : function(a) {
                for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
                    if (d in b && a.call(this, b[d], d, b)) return !0;
                return !1
            };
            var Ub = a.momentProperties = [],
                Xb = !1,
                Mb = {};
            a.suppressDeprecationWarnings = !1;
            a.deprecationHandler = null;
            var jc = Object.keys ? Object.keys : function(a) {
                var b, c = [];
                for (b in a) e(a, b) && c.push(b);
                return c
            };
            var Fb = {},
                Fa = {},
                rb = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                eb = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                Pb = {},
                Gb = {},
                xc = /\d/,
                Ta = /\d\d/,
                yc = /\d{3}/,
                Yb = /\d{4}/,
                Lb = /[+-]?\d{6}/,
                O = /\d\d?/,
                sb = /\d\d\d\d?/,
                Qb = /\d\d\d\d\d\d?/,
                Zb = /\d{1,3}/,
                kc = /\d{1,4}/,
                $b = /[+-]?\d{1,6}/,
                Jc = /\d+/,
                Ya = /[+-]?\d+/,
                lc = /Z|[+-]\d\d:?\d\d/gi,
                gb = /Z|[+-]\d\d(?::?\d\d)?/gi,
                pb = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                mc = {},
                wb = {},
                bb = 0,
                lb = 1,
                Za = 2,
                Ba = 3,
                Ua = 4,
                cb = 5,
                xb = 6,
                Kc = 7,
                zc = 8;
            y("Y", 0, 0, function() {
                var a = this.year();
                return 9999 >= a ? "" + a : "+" + a
            });
            y(0, ["YY", 2], 0, function() {
                return this.year() % 100
            });
            y(0, ["YYYY", 4], 0, "year");
            y(0, ["YYYYY", 5], 0, "year");
            y(0, ["YYYYYY", 6, !0], 0, "year");
            S("year", "y");
            Fa.year = 1;
            H("Y", Ya);
            H("YY", O, Ta);
            H("YYYY", kc, Yb);
            H("YYYYY", $b, Lb);
            H("YYYYYY", $b, Lb);
            J(["YYYYY", "YYYYYY"], bb);
            J("YYYY", function(b, c) {
                c[bb] = 2 === b.length ? a.parseTwoDigitYear(b) : L(b)
            });
            J("YY", function(b, c) {
                c[bb] = a.parseTwoDigitYear(b)
            });
            J("Y", function(a, b) {
                b[bb] = parseInt(a, 10)
            });
            a.parseTwoDigitYear = function(a) {
                return L(a) + (68 < L(a) ? 1900 : 2E3)
            };
            var Ac = ma("FullYear", !0);
            var Ca = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
                var b;
                for (b = 0; b < this.length; ++b)
                    if (this[b] === a) return b;
                return -1
            };
            y("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            });
            y("MMM", 0, 0, function(a) {
                return this.localeData().monthsShort(this, a)
            });
            y("MMMM", 0, 0, function(a) {
                return this.localeData().months(this, a)
            });
            S("month", "M");
            Fa.month = 8;
            H("M", O);
            H("MM", O,
                Ta);
            H("MMM", function(a, b) {
                return b.monthsShortRegex(a)
            });
            H("MMMM", function(a, b) {
                return b.monthsRegex(a)
            });
            J(["M", "MM"], function(a, b) {
                b[lb] = L(a) - 1
            });
            J(["MMM", "MMMM"], function(a, b, c, d) {
                d = c._locale.monthsParse(a, d, c._strict);
                null != d ? b[lb] = d : C(c).invalidMonth = a
            });
            var Bc = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                nc = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
            y("w", ["ww", 2], "wo", "week");
            y("W", ["WW", 2], "Wo", "isoWeek");
            S("week", "w");
            S("isoWeek", "W");
            Fa.week = 5;
            Fa.isoWeek = 5;
            H("w", O);
            H("ww", O, Ta);
            H("W",
                O);
            H("WW", O, Ta);
            R(["w", "ww", "W", "WW"], function(a, b, c, d) {
                b[d.substr(0, 1)] = L(a)
            });
            y("d", 0, "do", "day");
            y("dd", 0, 0, function(a) {
                return this.localeData().weekdaysMin(this, a)
            });
            y("ddd", 0, 0, function(a) {
                return this.localeData().weekdaysShort(this, a)
            });
            y("dddd", 0, 0, function(a) {
                return this.localeData().weekdays(this, a)
            });
            y("e", 0, 0, "weekday");
            y("E", 0, 0, "isoWeekday");
            S("day", "d");
            S("weekday", "e");
            S("isoWeekday", "E");
            Fa.day = 11;
            Fa.weekday = 11;
            Fa.isoWeekday = 11;
            H("d", O);
            H("e", O);
            H("E", O);
            H("dd", function(a, b) {
                return b.weekdaysMinRegex(a)
            });
            H("ddd", function(a, b) {
                return b.weekdaysShortRegex(a)
            });
            H("dddd", function(a, b) {
                return b.weekdaysRegex(a)
            });
            R(["dd", "ddd", "dddd"], function(a, b, c, d) {
                d = c._locale.weekdaysParse(a, d, c._strict);
                null != d ? b.d = d : C(c).invalidWeekday = a
            });
            R(["d", "e", "E"], function(a, b, c, d) {
                b[d] = L(a)
            });
            var oc = "Sun Mon Tue Wed Thu Fri Sat".split(" ");
            y("H", ["HH", 2], 0, "hour");
            y("h", ["hh", 2], 0, V);
            y("k", ["kk", 2], 0, function() {
                return this.hours() || 24
            });
            y("hmm", 0, 0, function() {
                return "" + V.apply(this) + A(this.minutes(), 2)
            });
            y("hmmss", 0, 0, function() {
                return "" +
                    V.apply(this) + A(this.minutes(), 2) + A(this.seconds(), 2)
            });
            y("Hmm", 0, 0, function() {
                return "" + this.hours() + A(this.minutes(), 2)
            });
            y("Hmmss", 0, 0, function() {
                return "" + this.hours() + A(this.minutes(), 2) + A(this.seconds(), 2)
            });
            Ab("a", !0);
            Ab("A", !1);
            S("hour", "h");
            Fa.hour = 13;
            H("a", ta);
            H("A", ta);
            H("H", O);
            H("h", O);
            H("k", O);
            H("HH", O, Ta);
            H("hh", O, Ta);
            H("kk", O, Ta);
            H("hmm", sb);
            H("hmmss", Qb);
            H("Hmm", sb);
            H("Hmmss", Qb);
            J(["H", "HH"], Ba);
            J(["k", "kk"], function(a, b, c) {
                a = L(a);
                b[Ba] = 24 === a ? 0 : a
            });
            J(["a", "A"], function(a, b, c) {
                c._isPm =
                    c._locale.isPM(a);
                c._meridiem = a
            });
            J(["h", "hh"], function(a, b, c) {
                b[Ba] = L(a);
                C(c).bigHour = !0
            });
            J("hmm", function(a, b, c) {
                var d = a.length - 2;
                b[Ba] = L(a.substr(0, d));
                b[Ua] = L(a.substr(d));
                C(c).bigHour = !0
            });
            J("hmmss", function(a, b, c) {
                var d = a.length - 4,
                    e = a.length - 2;
                b[Ba] = L(a.substr(0, d));
                b[Ua] = L(a.substr(d, 2));
                b[cb] = L(a.substr(e));
                C(c).bigHour = !0
            });
            J("Hmm", function(a, b, c) {
                c = a.length - 2;
                b[Ba] = L(a.substr(0, c));
                b[Ua] = L(a.substr(c))
            });
            J("Hmmss", function(a, b, c) {
                c = a.length - 4;
                var d = a.length - 2;
                b[Ba] = L(a.substr(0, c));
                b[Ua] =
                    L(a.substr(c, 2));
                b[cb] = L(a.substr(d))
            });
            var fc = ma("Hours", !0),
                pc = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: "January February March April May June July August September October November December".split(" "),
                    monthsShort: nc,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    weekdaysMin: "Su Mo Tu We Th Fr Sa".split(" "),
                    weekdaysShort: oc,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                va = {},
                hb = {},
                Rb, Gc = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Cc = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Lc = /Z|[+-]\d\d(?::?\d\d)?/,
                ac = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                qc = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                bc = /^\/?Date\((\-?\d+)/i,
                cc = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                Dc = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };
            a.createFromInputFallback = ia("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(a) {
                a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
            });
            a.ISO_8601 = function() {};
            a.RFC_2822 = function() {};
            var rc = ia("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var a = p.apply(null, arguments);
                    return this.isValid() && a.isValid() ? a < this ? this : a : ra()
                }),
                Ec = ia("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var a = p.apply(null, arguments);
                    return this.isValid() && a.isValid() ? a > this ? this : a : ra()
                }),
                Sb = "year quarter month week day hour minute second millisecond".split(" ");
            sc("Z", ":");
            sc("ZZ", "");
            H("Z", gb);
            H("ZZ", gb);
            J(["Z", "ZZ"], function(a, b, c) {
                c._useUTC = !0;
                c._tzm = vb(gb, a)
            });
            var Mc = /([\+\-]|\d\d)/gi;
            a.updateOffset = function() {};
            var g = /^(\-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                q = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            ea.fn = Y.prototype;
            ea.invalid = function() {
                return ea(NaN)
            };
            var B = dc(1, "add"),
                P = dc(-1, "subtract");
            a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
            a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var xa = ia("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
                return void 0 === a ? this.localeData() : this.locale(a)
            });
            y(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            });
            y(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            });
            Jb("gggg", "weekYear");
            Jb("ggggg", "weekYear");
            Jb("GGGG", "isoWeekYear");
            Jb("GGGGG", "isoWeekYear");
            S("weekYear", "gg");
            S("isoWeekYear",
                "GG");
            Fa.weekYear = 1;
            Fa.isoWeekYear = 1;
            H("G", Ya);
            H("g", Ya);
            H("GG", O, Ta);
            H("gg", O, Ta);
            H("GGGG", kc, Yb);
            H("gggg", kc, Yb);
            H("GGGGG", $b, Lb);
            H("ggggg", $b, Lb);
            R(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
                b[d.substr(0, 2)] = L(a)
            });
            R(["gg", "GG"], function(b, c, d, e) {
                c[e] = a.parseTwoDigitYear(b)
            });
            y("Q", 0, "Qo", "quarter");
            S("quarter", "Q");
            Fa.quarter = 7;
            H("Q", xc);
            J("Q", function(a, b) {
                b[lb] = 3 * (L(a) - 1)
            });
            y("D", ["DD", 2], "Do", "date");
            S("date", "D");
            Fa.date = 9;
            H("D", O);
            H("DD", O, Ta);
            H("Do", function(a, b) {
                return a ? b._dayOfMonthOrdinalParse ||
                    b._ordinalParse : b._dayOfMonthOrdinalParseLenient
            });
            J(["D", "DD"], Za);
            J("Do", function(a, b) {
                b[Za] = L(a.match(O)[0])
            });
            var Pa = ma("Date", !0);
            y("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
            S("dayOfYear", "DDD");
            Fa.dayOfYear = 4;
            H("DDD", Zb);
            H("DDDD", yc);
            J(["DDD", "DDDD"], function(a, b, c) {
                c._dayOfYear = L(a)
            });
            y("m", ["mm", 2], 0, "minute");
            S("minute", "m");
            Fa.minute = 14;
            H("m", O);
            H("mm", O, Ta);
            J(["m", "mm"], Ua);
            var Nc = ma("Minutes", !1);
            y("s", ["ss", 2], 0, "second");
            S("second", "s");
            Fa.second = 15;
            H("s", O);
            H("ss", O, Ta);
            J(["s", "ss"], cb);
            var Pc = ma("Seconds", !1);
            y("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            });
            y(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            });
            y(0, ["SSS", 3], 0, "millisecond");
            y(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            });
            y(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            });
            y(0, ["SSSSSS", 6], 0, function() {
                return 1E3 * this.millisecond()
            });
            y(0, ["SSSSSSS", 7], 0, function() {
                return 1E4 * this.millisecond()
            });
            y(0, ["SSSSSSSS", 8], 0, function() {
                return 1E5 * this.millisecond()
            });
            y(0, ["SSSSSSSSS", 9], 0,
                function() {
                    return 1E6 * this.millisecond()
                });
            S("millisecond", "ms");
            Fa.millisecond = 16;
            H("S", Zb, xc);
            H("SS", Zb, Ta);
            H("SSS", Zb, yc);
            var yb;
            for (yb = "SSSS"; 9 >= yb.length; yb += "S") H(yb, Jc);
            for (yb = "S"; 9 >= yb.length; yb += "S") J(yb, Ic);
            var Oc = ma("Milliseconds", !1);
            y("z", 0, 0, "zoneAbbr");
            y("zz", 0, 0, "zoneName");
            var G = E.prototype;
            G.add = B;
            G.calendar = function(b, c) {
                b = b || p();
                var d = Hb(b, this).startOf("day");
                d = a.calendarFormat(this, d) || "sameElse";
                c = c && (la(c[d]) ? c[d].call(this, b) : c[d]);
                return this.format(c || this.localeData().calendar(d,
                    this, p(b)))
            };
            G.clone = function() {
                return new E(this)
            };
            G.diff = function(a, b, c) {
                if (!this.isValid()) return NaN;
                a = Hb(a, this);
                if (!a.isValid()) return NaN;
                var d = 6E4 * (a.utcOffset() - this.utcOffset());
                b = ba(b);
                switch (b) {
                    case "year":
                        b = Ib(this, a) / 12;
                        break;
                    case "month":
                        b = Ib(this, a);
                        break;
                    case "quarter":
                        b = Ib(this, a) / 3;
                        break;
                    case "second":
                        b = (this - a) / 1E3;
                        break;
                    case "minute":
                        b = (this - a) / 6E4;
                        break;
                    case "hour":
                        b = (this - a) / 36E5;
                        break;
                    case "day":
                        b = (this - a - d) / 864E5;
                        break;
                    case "week":
                        b = (this - a - d) / 6048E5;
                        break;
                    default:
                        b = this -
                            a
                }
                return c ? b : N(b)
            };
            G.endOf = function(a) {
                a = ba(a);
                if (void 0 === a || "millisecond" === a) return this;
                "date" === a && (a = "day");
                return this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
            };
            G.format = function(b) {
                b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
                b = Oa(this, b);
                return this.localeData().postformat(b)
            };
            G.from = function(a, b) {
                return this.isValid() && (U(a) && a.isValid() || p(a).isValid()) ? ea({
                    to: this,
                    from: a
                }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
            };
            G.fromNow = function(a) {
                return this.from(p(),
                    a)
            };
            G.to = function(a, b) {
                return this.isValid() && (U(a) && a.isValid() || p(a).isValid()) ? ea({
                    from: this,
                    to: a
                }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
            };
            G.toNow = function(a) {
                return this.to(p(), a)
            };
            G.get = function(a) {
                a = ba(a);
                return la(this[a]) ? this[a]() : this
            };
            G.invalidAt = function() {
                return C(this).overflow
            };
            G.isAfter = function(a, b) {
                a = U(a) ? a : p(a);
                if (!this.isValid() || !a.isValid()) return !1;
                b = ba(w(b) ? "millisecond" : b);
                return "millisecond" === b ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(b).valueOf()
            };
            G.isBefore = function(a, b) {
                a = U(a) ? a : p(a);
                if (!this.isValid() || !a.isValid()) return !1;
                b = ba(w(b) ? "millisecond" : b);
                return "millisecond" === b ? this.valueOf() < a.valueOf() : this.clone().endOf(b).valueOf() < a.valueOf()
            };
            G.isBetween = function(a, b, c, d) {
                d = d || "()";
                return ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
            };
            G.isSame = function(a, b) {
                a = U(a) ? a : p(a);
                if (!this.isValid() || !a.isValid()) return !1;
                b = ba(b || "millisecond");
                if ("millisecond" === b) return this.valueOf() ===
                    a.valueOf();
                a = a.valueOf();
                return this.clone().startOf(b).valueOf() <= a && a <= this.clone().endOf(b).valueOf()
            };
            G.isSameOrAfter = function(a, b) {
                return this.isSame(a, b) || this.isAfter(a, b)
            };
            G.isSameOrBefore = function(a, b) {
                return this.isSame(a, b) || this.isBefore(a, b)
            };
            G.isValid = function() {
                return t(this)
            };
            G.lang = xa;
            G.locale = Sa;
            G.localeData = tc;
            G.max = Ec;
            G.min = rc;
            G.parsingFlags = function() {
                return c({}, C(this))
            };
            G.set = function(a, b) {
                if ("object" === typeof a) {
                    a = La(a);
                    b = za(a);
                    for (var c = 0; c < b.length; c++) this[b[c].unit](a[b[c].unit])
                } else if (a =
                    ba(a), la(this[a])) return this[a](b);
                return this
            };
            G.startOf = function(a) {
                a = ba(a);
                switch (a) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                "week" === a && this.weekday(0);
                "isoWeek" === a && this.isoWeekday(1);
                "quarter" === a && this.month(3 * Math.floor(this.month() / 3));
                return this
            };
            G.subtract = P;
            G.toArray = function() {
                return [this.year(), this.month(),
                    this.date(), this.hour(), this.minute(), this.second(), this.millisecond()
                ]
            };
            G.toObject = function() {
                return {
                    years: this.year(),
                    months: this.month(),
                    date: this.date(),
                    hours: this.hours(),
                    minutes: this.minutes(),
                    seconds: this.seconds(),
                    milliseconds: this.milliseconds()
                }
            };
            G.toDate = function() {
                return new Date(this.valueOf())
            };
            G.toISOString = function(a) {
                if (!this.isValid()) return null;
                var b = (a = !0 !== a) ? this.clone().utc() : this;
                return 0 > b.year() || 9999 < b.year() ? Oa(b, a ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") :
                    la(Date.prototype.toISOString) ? a ? this.toDate().toISOString() : (new Date(this.valueOf() + 6E4 * this.utcOffset())).toISOString().replace("Z", Oa(b, "Z")) : Oa(b, a ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            };
            G.inspect = function() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var a = "moment",
                    b = "";
                this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");
                a = "[" + a + '("]';
                var c = 0 <= this.year() && 9999 >= this.year() ? "YYYY" : "YYYYYY";
                return this.format(a + c + "-MM-DD[T]HH:mm:ss.SSS" +
                    (b + '[")]'))
            };
            G.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            };
            G.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            };
            G.unix = function() {
                return Math.floor(this.valueOf() / 1E3)
            };
            G.valueOf = function() {
                return this._d.valueOf() - 6E4 * (this._offset || 0)
            };
            G.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            };
            G.year = Ac;
            G.isLeapYear = function() {
                return l(this.year())
            };
            G.weekYear = function(a) {
                return Wb.call(this,
                    a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            };
            G.isoWeekYear = function(a) {
                return Wb.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
            };
            G.quarter = G.quarters = function(a) {
                return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
            };
            G.month = kb;
            G.daysInMonth = function() {
                return K(this.year(), this.month())
            };
            G.week = G.weeks = function(a) {
                var b = this.localeData().week(this);
                return null == a ? b : this.add(7 * (a - b), "d")
            };
            G.isoWeek = G.isoWeeks = function(a) {
                var b =
                    Ka(this, 1, 4).week;
                return null == a ? b : this.add(7 * (a - b), "d")
            };
            G.weeksInYear = function() {
                var a = this.localeData()._week;
                return Ea(this.year(), a.dow, a.doy)
            };
            G.isoWeeksInYear = function() {
                return Ea(this.year(), 1, 4)
            };
            G.date = Pa;
            G.day = G.days = function(a) {
                if (!this.isValid()) return null != a ? this : NaN;
                var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                if (null != a) {
                    var c = this.localeData();
                    "string" === typeof a && (isNaN(a) ? (a = c.weekdaysParse(a), a = "number" === typeof a ? a : null) : a = parseInt(a, 10));
                    return this.add(a - b, "d")
                }
                return b
            };
            G.weekday = function(a) {
                if (!this.isValid()) return null != a ? this : NaN;
                var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == a ? b : this.add(a - b, "d")
            };
            G.isoWeekday = function(a) {
                if (!this.isValid()) return null != a ? this : NaN;
                if (null != a) {
                    var b = this.localeData();
                    a = "string" === typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a;
                    return this.day(this.day() % 7 ? a : a - 7)
                }
                return this.day() || 7
            };
            G.dayOfYear = function(a) {
                var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864E5) + 1;
                return null == a ? b :
                    this.add(a - b, "d")
            };
            G.hour = G.hours = fc;
            G.minute = G.minutes = Nc;
            G.second = G.seconds = Pc;
            G.millisecond = G.milliseconds = Oc;
            G.utcOffset = function(b, c, d) {
                var e = this._offset || 0,
                    f;
                if (!this.isValid()) return null != b ? this : NaN;
                if (null != b) {
                    if ("string" === typeof b) {
                        if (b = vb(gb, b), null === b) return this
                    } else 16 > Math.abs(b) && !d && (b *= 60);
                    !this._isUTC && c && (f = 15 * -Math.round(this._d.getTimezoneOffset() / 15));
                    this._offset = b;
                    this._isUTC = !0;
                    null != f && this.add(f, "m");
                    e !== b && (!c || this._changeInProgress ? ec(this, ea(b - e, "m"), 1, !1) : this._changeInProgress ||
                        (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null));
                    return this
                }
                return this._isUTC ? e : 15 * -Math.round(this._d.getTimezoneOffset() / 15)
            };
            G.utc = function(a) {
                return this.utcOffset(0, a)
            };
            G.local = function(a) {
                this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(15 * -Math.round(this._d.getTimezoneOffset() / 15), "m"));
                return this
            };
            G.parseZone = function() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" === typeof this._i) {
                    var a = vb(lc, this._i);
                    null != a ? this.utcOffset(a) :
                        this.utcOffset(0, !0)
                }
                return this
            };
            G.hasAlignedHourOffset = function(a) {
                if (!this.isValid()) return !1;
                a = a ? p(a).utcOffset() : 0;
                return 0 === (this.utcOffset() - a) % 60
            };
            G.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            };
            G.isLocal = function() {
                return this.isValid() ? !this._isUTC : !1
            };
            G.isUtcOffset = function() {
                return this.isValid() ? this._isUTC : !1
            };
            G.isUtc = Ja;
            G.isUTC = Ja;
            G.zoneAbbr = function() {
                return this._isUTC ? "UTC" : ""
            };
            G.zoneName = function() {
                return this._isUTC ?
                    "Coordinated Universal Time" : ""
            };
            G.dates = ia("dates accessor is deprecated. Use date instead.", Pa);
            G.months = ia("months accessor is deprecated. Use month instead", kb);
            G.years = ia("years accessor is deprecated. Use year instead", Ac);
            G.zone = ia("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(a, b) {
                return null != a ? ("string" !== typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
            });
            G.isDSTShifted = ia("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
                function() {
                    if (!w(this._isDSTShifted)) return this._isDSTShifted;
                    var a = {};
                    Ga(a, this);
                    a = Db(a);
                    if (a._a) {
                        var b = a._isUTC ? x(a._a) : p(a._a);
                        this._isDSTShifted = this.isValid() && 0 < Ha(a._a, b.toArray())
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                });
            var pa = Da.prototype;
            pa.calendar = function(a, b, c) {
                a = this._calendar[a] || this._calendar.sameElse;
                return la(a) ? a.call(b, c) : a
            };
            pa.longDateFormat = function(a) {
                var b = this._longDateFormat[a],
                    c = this._longDateFormat[a.toUpperCase()];
                if (b || !c) return b;
                this._longDateFormat[a] =
                    c.replace(/MMMM|MM|DD|dddd/g, function(a) {
                        return a.slice(1)
                    });
                return this._longDateFormat[a]
            };
            pa.invalidDate = function() {
                return this._invalidDate
            };
            pa.ordinal = function(a) {
                return this._ordinal.replace("%d", a)
            };
            pa.preparse = vc;
            pa.postformat = vc;
            pa.relativeTime = function(a, b, c, d) {
                var e = this._relativeTime[c];
                return la(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
            };
            pa.pastFuture = function(a, b) {
                a = this._relativeTime[0 < a ? "future" : "past"];
                return la(a) ? a(b) : a.replace(/%s/i, b)
            };
            pa.set = function(a) {
                var b;
                for (b in a) {
                    var c = a[b];
                    la(c) ?
                        this[b] = c : this["_" + b] = c
                }
                this._config = a;
                this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            };
            pa.months = function(a, c) {
                return a ? b(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || Bc).test(c) ? "format" : "standalone"][a.month()] : b(this._months) ? this._months : this._months.standalone
            };
            pa.monthsShort = function(a, c) {
                return a ? b(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[Bc.test(c) ?
                    "format" : "standalone"][a.month()] : b(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            };
            pa.monthsParse = function(a, b, c) {
                var d;
                if (this._monthsParseExact) {
                    a: {
                        a = a.toLocaleLowerCase();
                        if (!this._monthsParse)
                            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; 12 > d; ++d) {
                                var e = x([2E3, d]);
                                this._shortMonthsParse[d] = this.monthsShort(e, "").toLocaleLowerCase();
                                this._longMonthsParse[d] = this.months(e, "").toLocaleLowerCase()
                            }
                        if (c) b = "MMM" === b ? Ca.call(this._shortMonthsParse,
                            a) : Ca.call(this._longMonthsParse, a);
                        else if ("MMM" === b) {
                            b = Ca.call(this._shortMonthsParse, a);
                            if (-1 !== b) break a;
                            b = Ca.call(this._longMonthsParse, a)
                        } else {
                            b = Ca.call(this._longMonthsParse, a);
                            if (-1 !== b) break a;
                            b = Ca.call(this._shortMonthsParse, a)
                        }
                        b = -1 !== b ? b : null
                    }
                    return b
                }
                this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []);
                for (d = 0; 12 > d; d++)
                    if (e = x([2E3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"),
                            this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (e = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(e.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a) || c && "MMM" === b && this._shortMonthsParse[d].test(a) || !c && this._monthsParse[d].test(a)) return d
            };
            pa.monthsRegex = function(a) {
                if (this._monthsParseExact) return e(this, "_monthsRegex") || Wa.call(this), a ? this._monthsStrictRegex : this._monthsRegex;
                e(this, "_monthsRegex") || (this._monthsRegex = pb);
                return this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex
            };
            pa.monthsShortRegex = function(a) {
                if (this._monthsParseExact) return e(this, "_monthsRegex") || Wa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex;
                e(this, "_monthsShortRegex") || (this._monthsShortRegex = pb);
                return this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex
            };
            pa.week = function(a) {
                return Ka(a, this._week.dow, this._week.doy).week
            };
            pa.firstDayOfYear =
                function() {
                    return this._week.doy
                };
            pa.firstDayOfWeek = function() {
                return this._week.dow
            };
            pa.weekdays = function(a, c) {
                return a ? b(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(c) ? "format" : "standalone"][a.day()] : b(this._weekdays) ? this._weekdays : this._weekdays.standalone
            };
            pa.weekdaysMin = function(a) {
                return a ? this._weekdaysMin[a.day()] : this._weekdaysMin
            };
            pa.weekdaysShort = function(a) {
                return a ? this._weekdaysShort[a.day()] : this._weekdaysShort
            };
            pa.weekdaysParse = function(a, b,
                c) {
                var d;
                if (this._weekdaysParseExact) return mb.call(this, a, b, c);
                this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []);
                for (d = 0; 7 > d; d++) {
                    var e = x([2E3, 1]).day(d);
                    c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e,
                        "").replace(".", "\\.?") + "$", "i"));
                    this._weekdaysParse[d] || (e = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(e.replace(".", ""), "i"));
                    if (c && "dddd" === b && this._fullWeekdaysParse[d].test(a) || c && "ddd" === b && this._shortWeekdaysParse[d].test(a) || c && "dd" === b && this._minWeekdaysParse[d].test(a) || !c && this._weekdaysParse[d].test(a)) return d
                }
            };
            pa.weekdaysRegex = function(a) {
                if (this._weekdaysParseExact) return e(this, "_weekdaysRegex") || oa.call(this),
                    a ? this._weekdaysStrictRegex : this._weekdaysRegex;
                e(this, "_weekdaysRegex") || (this._weekdaysRegex = pb);
                return this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex
            };
            pa.weekdaysShortRegex = function(a) {
                if (this._weekdaysParseExact) return e(this, "_weekdaysRegex") || oa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
                e(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = pb);
                return this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
            };
            pa.weekdaysMinRegex = function(a) {
                if (this._weekdaysParseExact) return e(this, "_weekdaysRegex") || oa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
                e(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = pb);
                return this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
            };
            pa.isPM = function(a) {
                return "p" === (a + "").toLowerCase().charAt(0)
            };
            pa.meridiem = function(a, b, c) {
                return 11 < a ? c ? "pm" : "PM" : c ? "am" : "AM"
            };
            ab("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(a) {
                    var b =
                        a % 10;
                    b = 1 === L(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + b
                }
            });
            a.lang = ia("moment.lang is deprecated. Use moment.locale instead.", ab);
            a.langData = ia("moment.langData is deprecated. Use moment.localeData instead.", Xa);
            var $a = Math.abs,
                Qc = ob("ms"),
                Rc = ob("s"),
                Wc = ob("m"),
                Xc = ob("h"),
                Yc = ob("d"),
                $c = ob("w"),
                ad = ob("M"),
                Zc = ob("y"),
                uc = qb("milliseconds"),
                bd = qb("seconds"),
                Sc = qb("minutes"),
                cd = qb("hours"),
                Tc = qb("days"),
                Uc = qb("months"),
                dd = qb("years"),
                Bb = Math.round,
                nb = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                Hc = Math.abs,
                W = Y.prototype;
            W.isValid = function() {
                return this._isValid
            };
            W.abs = function() {
                var a = this._data;
                this._milliseconds = $a(this._milliseconds);
                this._days = $a(this._days);
                this._months = $a(this._months);
                a.milliseconds = $a(a.milliseconds);
                a.seconds = $a(a.seconds);
                a.minutes = $a(a.minutes);
                a.hours = $a(a.hours);
                a.months = $a(a.months);
                a.years = $a(a.years);
                return this
            };
            W.add = function(a, b) {
                return ic(this, a, b, 1)
            };
            W.subtract = function(a, b) {
                return ic(this, a, b, -1)
            };
            W.as = function(a) {
                if (!this.isValid()) return NaN;
                var b =
                    this._milliseconds;
                a = ba(a);
                if ("month" === a || "year" === a) {
                    var c = this._days + b / 864E5;
                    c = this._months + 4800 * c / 146097;
                    return "month" === a ? c : c / 12
                }
                c = this._days + Math.round(146097 * this._months / 4800);
                switch (a) {
                    case "week":
                        return c / 7 + b / 6048E5;
                    case "day":
                        return c + b / 864E5;
                    case "hour":
                        return 24 * c + b / 36E5;
                    case "minute":
                        return 1440 * c + b / 6E4;
                    case "second":
                        return 86400 * c + b / 1E3;
                    case "millisecond":
                        return Math.floor(864E5 * c) + b;
                    default:
                        throw Error("Unknown unit " + a);
                }
            };
            W.asMilliseconds = Qc;
            W.asSeconds = Rc;
            W.asMinutes = Wc;
            W.asHours =
                Xc;
            W.asDays = Yc;
            W.asWeeks = $c;
            W.asMonths = ad;
            W.asYears = Zc;
            W.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864E5 * this._days + this._months % 12 * 2592E6 + 31536E6 * L(this._months / 12) : NaN
            };
            W._bubble = function() {
                var a = this._milliseconds,
                    b = this._days,
                    c = this._months,
                    d = this._data;
                0 <= a && 0 <= b && 0 <= c || 0 >= a && 0 >= b && 0 >= c || (a += 864E5 * wc(146097 * c / 4800 + b), c = b = 0);
                d.milliseconds = a % 1E3;
                a = N(a / 1E3);
                d.seconds = a % 60;
                a = N(a / 60);
                d.minutes = a % 60;
                a = N(a / 60);
                d.hours = a % 24;
                b += N(a / 24);
                a = N(4800 * b / 146097);
                c += a;
                b -= wc(146097 * a / 4800);
                a =
                    N(c / 12);
                d.days = b;
                d.months = c % 12;
                d.years = a;
                return this
            };
            W.clone = function() {
                return ea(this)
            };
            W.get = function(a) {
                a = ba(a);
                return this.isValid() ? this[a + "s"]() : NaN
            };
            W.milliseconds = uc;
            W.seconds = bd;
            W.minutes = Sc;
            W.hours = cd;
            W.days = Tc;
            W.weeks = function() {
                return N(this.days() / 7)
            };
            W.months = Uc;
            W.years = dd;
            W.humanize = function(a) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var b = this.localeData();
                var c = !a;
                var d = ea(this).abs(),
                    e = Bb(d.as("s")),
                    f = Bb(d.as("m")),
                    m = Bb(d.as("h")),
                    g = Bb(d.as("d")),
                    h = Bb(d.as("M"));
                d = Bb(d.as("y"));
                e = e <= nb.ss && ["s", e] || e < nb.s && ["ss", e] || 1 >= f && ["m"] || f < nb.m && ["mm", f] || 1 >= m && ["h"] || m < nb.h && ["hh", m] || 1 >= g && ["d"] || g < nb.d && ["dd", g] || 1 >= h && ["M"] || h < nb.M && ["MM", h] || 1 >= d && ["y"] || ["yy", d];
                e[2] = c;
                e[3] = 0 < +this;
                e[4] = b;
                c = Fc.apply(null, e);
                a && (c = b.pastFuture(+this, c));
                return b.postformat(c)
            };
            W.toISOString = Eb;
            W.toString = Eb;
            W.toJSON = Eb;
            W.locale = Sa;
            W.localeData = tc;
            W.toIsoString = ia("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Eb);
            W.lang = xa;
            y("X", 0, 0, "unix");
            y("x", 0, 0, "valueOf");
            H("x", Ya);
            H("X", /[+-]?\d+(\.\d{1,3})?/);
            J("X", function(a, b, c) {
                c._d = new Date(1E3 * parseFloat(a, 10))
            });
            J("x", function(a, b, c) {
                c._d = new Date(L(a))
            });
            a.version = "2.22.2";
            var Vc = p;
            a.fn = G;
            a.min = function() {
                var a = [].slice.call(arguments, 0);
                return na("isBefore", a)
            };
            a.max = function() {
                var a = [].slice.call(arguments, 0);
                return na("isAfter", a)
            };
            a.now = function() {
                return Date.now ? Date.now() : +new Date
            };
            a.utc = x;
            a.unix = function(a) {
                return p(1E3 * a)
            };
            a.months = function(a, b) {
                return gc(a, b, "months")
            };
            a.isDate =
                h;
            a.locale = ab;
            a.invalid = ra;
            a.duration = ea;
            a.isMoment = U;
            a.weekdays = function(a, b, c) {
                return hc(a, b, c, "weekdays")
            };
            a.parseZone = function() {
                return p.apply(null, arguments).parseZone()
            };
            a.localeData = Xa;
            a.isDuration = sa;
            a.monthsShort = function(a, b) {
                return gc(a, b, "monthsShort")
            };
            a.weekdaysMin = function(a, b, c) {
                return hc(a, b, c, "weekdaysMin")
            };
            a.defineLocale = tb;
            a.updateLocale = function(a, b) {
                if (null != b) {
                    var c = pc;
                    var d = f(a);
                    null != d && (c = d._config);
                    b = ha(c, b);
                    b = new Da(b);
                    b.parentLocale = va[a];
                    va[a] = b;
                    ab(a)
                } else null != va[a] &&
                    (null != va[a].parentLocale ? va[a] = va[a].parentLocale : null != va[a] && delete va[a]);
                return va[a]
            };
            a.locales = function() {
                return jc(va)
            };
            a.weekdaysShort = function(a, b, c) {
                return hc(a, b, c, "weekdaysShort")
            };
            a.normalizeUnits = ba;
            a.relativeTimeRounding = function(a) {
                return void 0 === a ? Bb : "function" === typeof a ? (Bb = a, !0) : !1
            };
            a.relativeTimeThreshold = function(a, b) {
                if (void 0 === nb[a]) return !1;
                if (void 0 === b) return nb[a];
                nb[a] = b;
                "s" === a && (nb.ss = b - 1);
                return !0
            };
            a.calendarFormat = function(a, b) {
                a = a.diff(b, "days", !0);
                return -6 > a ?
                    "sameElse" : -1 > a ? "lastWeek" : 0 > a ? "lastDay" : 1 > a ? "sameDay" : 2 > a ? "nextDay" : 7 > a ? "nextWeek" : "sameElse"
            };
            a.prototype = G;
            a.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "YYYY-[W]WW",
                MONTH: "YYYY-MM"
            };
            return a
        })
    }, {}],
    56: [function(d, n, t) {
        d = d("./thirty-two");
        t.encode = d.encode;
        t.decode = d.decode
    }, {
        "./thirty-two": 57
    }],
    57: [function(d, n, t) {
            (function(a) {
                var b = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
                t.encode = function(b) {
                    a.isBuffer(b) || (b = new a(b));
                    var d = 0,
                        k = 0,
                        h = 0,
                        r = Math.floor(b.length / 5);
                    for (r = new a(8 * (0 === b.length % 5 ? r : r + 1)); d < b.length;) {
                        var e = b[d];
                        3 < h ? (e &= 255 >> h, h = (h + 5) % 8, e = e << h | (d + 1 < b.length ? b[d + 1] : 0) >> 8 - h, d++) : (e = e >> 8 - (h + 5) & 31, h = (h + 5) % 8, 0 === h && d++);
                        r[k] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(e);
                        k++
                    }
                    for (d = k; d < r.length; d++) r[d] = 61;
                    return r
                };
                t.decode = function(d) {
                    var k = 0,
                        n = 0;
                    a.isBuffer(d) || (d = new a(d));
                    for (var h = new a(Math.ceil(5 * d.length / 8)), r = 0; r < d.length && 61 !== d[r]; r++) {
                        var e = d[r] - 48;
                        if (e < b.length)
                            if (e = b[e], 3 >= k)
                                if (k = (k + 5) % 8, 0 === k) {
                                    c |= e;
                                    h[n] = c;
                                    n++;
                                    var c = 0
                                } else c |= 255 & e << 8 - k;
                        else k = (k + 5) % 8, c |= 255 & e >>> k, h[n] = c, n++, c = 255 & e << 8 - k;
                        else throw Error("Invalid input - it is not base32 encoded string");
                    }
                    return h.slice(0, n)
                }
            }).call(this, d("buffer").Buffer)
        },
        {
            buffer: 51
        }
    ],
    58: [function(d, n, t) {
        n.exports = function(a, b, d) {
            if (0 === a.length) return a;
            if (b) {
                d || a.sort(b);
                d = 1;
                for (var k = a.length, n = a[0], h, r = 1; r < k; ++r) h = n, n = a[r], b(n, h) && (r === d ? d++ : a[d++] = n);
                a.length = d;
                return a
            }
            d || a.sort();
            b = 1;
            d = a.length;
            k = a[0];
            for (h = 1; h < d; ++h) n = k, k = a[h], k !== n && (h === b ? b++ : a[b++] = k);
            a.length = b;
            return a
        }
    }, {}],
    59: [function(d, n, t) {
        var a = d("jquery"),
            b = d("EngineApi.js"),
            k = d("./OldUtils.js");
        n.exports = function(d, n) {
            function h(b) {
                var c = a(d),
                    e = a("\x3cimg\x3e");
                e.attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAASdHAAEnRwEEDsU+AAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAJvSURBVHja7NpPiE1RHAfwz5veZLCYbEj+FDv/iiTDwgorCxElJClkMyVS8jcLspgaib1ICbOypNSUUcLKwgYNoQwykmaYY+HQdcPMfe++3rvN+9bt3PPu/d37/Z5zfr/zO+e+UghBkdGi4GgKaAqoEuXE+SHswMwG5/wW13ACw6UYhe5iVcEa/wmWtuBwAcnDfJwrhRDeYFpBXWCwjCmpH6/gToMSXoa9iXqrEMJg+BMbQgga9FiZ4jrYgnQuMb2Bh8ysVD00J7IxohUdRRbwDZfiUUgBAf3YjmNFzYXexfIkjhRRwPfE+am8eqJcY9IdWIt5WJ26dhJDONNoAiZiH3ZiwSj3nsakanojbwEb0Y0ZGWyOYiSmx3X1gW5cz0j+F46jq549cA2bqnzGg3oJOJsD+RXoq8cQWoeDVdgPx0jVVw8nbsXlf1y7h6d4FdewA+iM+XwyvejAw3qF0U60J+r3oy/04Nlf7l+TEDCEldWSr0ZAayId6MeBSP5/aEu1/KN6zsSbY+vfjAnalzHYLIzl8rzIV+PEx+K6eeMYyZfxHFvzGDbV9sBi9GJXBpsS1sfho94CBrCngnBZE1QioH88rolrKiAt4mUD832e9q1yjOlJ7MaSUR50PrFEzAsTsD+W/0J6fVEuhRBeYHbGly3B45wFtONjRpsPLXF9mhVfazA8RjCY0ebCrz3HqyEbFtVg37M9I4fbIYTfYXQLbmEbpo5Bebql5mJOxtZ77edHiuRc0YvJo9i9xw1c/LnjlE/rdYXs6Mnj3XnNA58rsPnUSBNZW4XbLw2zsfWhggiSyzxSav5XoilgnAv4MQDUqkyCk9UXygAAAABJRU5ErkJggg\x3d\x3d");
                e.css({
                    border: "none",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    "margin-left": "-24px",
                    "margin-top": "-24px",
                    width: "48px",
                    height: "48px"
                });
                var h = a("\x3ca\x3e");
                h.attr("href", "acestream://" + b);
                h.append(e);
                c.append(h)
            }
            var r = this;
            this.loadTorrent = this.loadTransportFileUrl = function(a, c) {
                "object" !== typeof c && (c = {});
                b.getContentIdByUrl({
                    url: a,
                    affiliateId: c.affiliateId,
                    zoneId: c.zoneId,
                    developerId: c.developerId,
                    onSuccess: function(a) {
                        h(a)
                    },
                    onError: function(a) {
                        alert(a)
                    }
                })
            };
            this.loadRawTorrent = function(a, b) {
                throw "loadRawTorrent() not implemented for Android";
            };
            this.loadUrl = this.loadDirectUrl = function(a, b) {
                throw "loadUrl() not implemented for Android";
            };
            this.loadInfohash = function(a, b) {
                throw "loadInfohash() not implemented for Android";
            };
            this.loadMagnet = function(a, b) {
                throw "loadMagnet() not implemented for Android";
            };
            this.loadPlayer = this.loadContentId = function(a, b) {
                h(a)
            };
            this.registerEventHandler = function(a) {};
            this.getType = function() {
                return "AndroidStub"
            };
            this.getVideoAspectRatioList = function() {
                return []
            };
            this.getVideoCropList = function() {
                return []
            };
            this.getVideoSubtitleList =
                function() {
                    return []
                };
            this.getAudioChannelList = function() {
                return []
            };
            this.getAudioTrackList = function() {
                return []
            };
            this.getVideoAspectRatio = function() {
                return 0
            };
            this.getVideoCrop = function() {
                return 0
            };
            this.getVideoSubtitle = function() {
                return 0
            };
            this.getAudioChannel = function() {
                return 0
            };
            this.getAudioTrack = function() {
                return 0
            };
            this.destroy = function() {};
            (function() {
                n.checkInstalled ? k.getEngineVersionJsonP(function(a) {
                    null === a ? "function" === typeof n.onError && n.onError.call(r, "plugin_not_installed") : "function" ===
                        typeof n.onLoad && n.onLoad.call(r, r)
                }) : "function" === typeof n.onLoad && n.onLoad.call(r, r)
            })()
        }
    }, {
        "./OldUtils.js": 61,
        "EngineApi.js": 2,
        jquery: 53
    }],
    60: [function(d, n, t) {
        d("jquery");
        n.exports = function(a, b) {
            function d(a) {
                if (b.debug) try {
                    console.log("JsPlayer::" + a)
                } catch (C) {}
            }

            function n(a) {
                try {
                    for (var b = Array.prototype.slice.call(arguments, 1), c = 0; c < h.length; c++) "function" === typeof h[c][a] && h[c][a].apply(t, b)
                } catch (ra) {
                    d("onEvent:exc: event\x3d" + a + " err\x3d" + ra)
                }
            }
            var t = this,
                h = [],
                r = null,
                e = null,
                c = null;
            this.deinterlaceEnable =
                function(a) {
                    r.deinterlaceEnable(a)
                };
            this.deinterlaceDisable = function(a) {
                r.deinterlaceDisable()
            };
            this.loadTorrent = this.loadTransportFileUrl = function(a, b) {
                "object" !== typeof b && (b = {});
                c = {
                    transport_file_url: a
                };
                d("loadTorrent: url\x3d" + a + " conf\x3d" + JSON.stringify(b));
                r.clearPlaylist();
                r.addPlaylist({
                    url: {
                        transport_file_url: a
                    },
                    conf: b
                })
            };
            this.loadPlayer = this.loadContentId = function(a, b) {
                "object" !== typeof b && (b = {});
                c = {
                    content_id: a
                };
                d("loadTorrent: contentId\x3d" + a + " conf\x3d" + JSON.stringify(b));
                r.clearPlaylist();
                r.addPlaylist({
                    url: {
                        content_id: a
                    },
                    conf: b
                })
            };
            this.loadYoutube = function(a, b) {
                throw "loadYoutube() not implemented for JsPlayer";
            };
            this.loadRawTorrent = function(a, b) {
                throw "loadRawTorrent() not implemented for JsPlayer";
            };
            this.loadUrl = this.loadDirectUrl = function(a, b) {
                throw "loadUrl() not implemented for JsPlayer";
            };
            this.loadInfohash = function(a, b) {
                c = {
                    infohash: a
                };
                r.clearPlaylist();
                r.addPlaylist({
                    url: {
                        infohash: a
                    },
                    conf: b
                })
            };
            this.registerEventHandler = function(a) {
                h.push(a)
            };
            this.getType = function() {
                return "jsplayer"
            };
            this.blocked = function() {
                return !1
            };
            this.getEngineVersion = function() {
                return b.engineVersion || 0
            };
            this.getCurrentItem = function() {
                return c
            };
            this.playlistClear = function() {
                d("playlistClear");
                c = null
            };
            this.play = function() {
                d("play");
                r && ("playing" === e || "paused" === e ? r.togglePause() : r.play())
            };
            this.toggleFullscreen = function() {
                d("toggleFullscreen");
                r && r.toggleFullscreen()
            };
            this.stop = function() {
                d("stop");
                r && r.stop()
            };
            this.next = function() {
                d("next");
                r && r.next()
            };
            this.prev = function() {
                d("prev");
                r && r.prev()
            };
            this.position =
                function(a) {
                    d("position: " + a);
                    r && r.position(a)
                };
            this.setVolume = function(a) {
                d("setVolume: " + a);
                r && (r.volume(a), n("onVolume", a))
            };
            this.volume = function(a) {
                d("volume: " + a);
                r && (r.volume(a), n("onVolume", a))
            };
            this.toggleMute = function() {
                d("toggleMute");
                r && (r.toggleMute(), n("onMute", r.mute()))
            };
            this.getAuthLevel = function() {
                return 0
            };
            this.getVideoAspectRatioList = function() {
                return []
            };
            this.getVideoCropList = function() {
                return []
            };
            this.getVideoSubtitleList = function() {
                return []
            };
            this.getAudioChannelList = function() {
                return []
            };
            this.getAudioTrackList = function() {
                return []
            };
            this.getVideoAspectRatio = function() {
                return 0
            };
            this.getVideoCrop = function() {
                return 0
            };
            this.getVideoSubtitle = function() {
                return 0
            };
            this.getAudioChannel = function() {
                return 0
            };
            this.getAudioTrack = function() {
                return 0
            };
            this.destroy = function() {
                this.stop()
            };
            (function() {
                d("init");
                r = (new wjs(a)).addPlayer({
                    conf: {
                        port: b.jsPlayerPort,
                        hideControls: b.hideControls
                    }
                });
                "function" === typeof b.onLoad && b.onLoad.call(t, t);
                r.onPlaylist = function(a) {
                    n("onPlaylist", a)
                };
                r.onState(function(a) {
                    if (a !==
                        e) {
                        var b = r.currentItem();
                        d("state changed: item\x3d" + b + " state\x3d" + e + "-\x3e" + a);
                        "playing" === a ? "paused" === e ? n("onResume", b) : n("onStart", b) : "paused" === a && n("onPause", b);
                        e = a
                    }
                });
                r.onPlaying(function(a) {
                    a = r.volume();
                    a = Math.round(a / 2);
                    n("onVolume", a)
                });
                r.onStopped(function(a) {
                    console.log("\x3e\x3eevent: onStopped");
                    n("onStop", r.currentItem(), !0)
                });
                r.onDuration(function(a) {
                    n("onDuration", r.currentItem(), a)
                });
                r.onTime(function(a) {
                    a = Math.round(a / 1E3);
                    n("onTime", r.currentItem(), a, !1)
                });
                r.onPosition(function(a) {
                    n("onProgress",
                        r.currentItem(), a)
                })
            })()
        }
    }, {
        jquery: 53
    }],
    61: [function(d, n, t) {
        function a(d, n, h) {
            "number" !== typeof n && (n = 0);
            "number" !== typeof h && (h = 0);
            var r = "jsonp";
            0 === h % 2 && (r = "json");
            k.log("getEngineVersionJsonP: send request: format\x3d" + r + " retries\x3d" + h + "/" + n);
            b.ajax({
                url: "http://127.0.0.1:6878/webui/api/service",
                data: {
                    method: "get_version",
                    format: r
                },
                dataType: r,
                timeout: 2E3,
                success: function(a) {
                    if (a.error) throw "api error: " + a.error;
                    if (!a.result) throw "missing result in response";
                    if (!a.result.code) throw "missing code in result";
                    k.log("getEngineVersionJsonP: got engine version: " + a.result.code);
                    if ("function" === typeof d) try {
                        d.call(null, a.result.code)
                    } catch (c) {
                        k.log("getEngineVersionJsonP: request failed: " + c)
                    }
                },
                error: function() {
                    k.log("getEngineVersionJsonP: request failed: retries\x3d" + h + "/" + n);
                    h >= n ? "function" === typeof d && d.call(null, null) : setTimeout(function() {
                        a(d, n, h + 1)
                    }, 500)
                }
            })
        }
        var b = d("jquery"),
            k = d("Logging.js");
        n.exports = {
            getEngineVersionJsonP: a
        }
    }, {
        "Logging.js": 6,
        jquery: 53
    }],
    62: [function(d, n, t) {
        var a = d("jquery"),
            b = d("Utils.js"),
            k = d("./ProxyPlayer.js"),
            w = d("./AndroidPlayer.js");
        d("./JsPlayer.js");
        var D = d("EngineApi.js"),
            h = d("./OldUtils.js");
        n.exports = function(d, e) {
            function c(a) {
                if (e.debug) try {
                    a || (a = ""), console.log("Player::" + a)
                } catch (p) {}
            }

            function n(a) {
                var b = a.split(".");
                if (3 != b.length && 4 != b.length) throw "Bad version: " + a;
                return 1E4 * parseInt(b[0]) + 100 * parseInt(b[1]) + parseInt(b[2])
            }

            function r(a, b, d, f, h, k) {
                c("embedPlugin: container\x3d" + a);
                b = b ? "true" : "false";
                var m = a.ownerDocument;
                if ("ie" == Db.name) {
                    d = "";
                    if (1 == z.type) m = "FAA285EB-EB55-47ff-84FF-0993CA2A41B5";
                    else if (2 == z.type) m = "79690976-ED6E-403c-BBBA-F8928B5EDE17";
                    else if (3 == z.type) m = "28E3B95D-371D-42d5-A276-8A3EE70100FD";
                    else return c("embedPlugin: unknown type: " + z.type), !1;
                    d = d + ('\x3cobject classid\x3d"clsid:' + m + '" width\x3d"50%" height\x3d"100%"\x3e') + '\x3cparam name\x3d"autoplay" value\x3d"0" /\x3e\x3cparam name\x3d"loop" value\x3d"0" /\x3e';
                    d += '\x3cparam name\x3d"bgcolor" value\x3d"' + f + '" /\x3e';
                    d += '\x3cparam name\x3d"video-bgcolor" value\x3d"' + f + '" /\x3e';
                    d += '\x3cparam name\x3d"fontcolor" value\x3d"' +
                        h + '" /\x3e';
                    d += '\x3cparam name\x3d"internalplaylist" value\x3d"' + b + '" /\x3e';
                    1 == z.type ? d += '\x3cparam name\x3d"fullscreencontrols" value\x3d"false" /\x3e' : (d += '\x3cparam name\x3d"fullscreencontrols" value\x3d"true" /\x3e', d += '\x3cparam name\x3d"fscontrolsenable" value\x3d"1" /\x3e', d += '\x3cparam name\x3d"nofscontrolsenable" value\x3d"1" /\x3e', d = e.liveStreamControls ? d + '\x3cparam name\x3d"defaultcontrolsforstream" value\x3d"1" /\x3e' : d + '\x3cparam name\x3d"defaultcontrolsforstream" value\x3d"0" /\x3e',
                        d += '\x3cparam name\x3d"fscontrols" value\x3d"default" /\x3e', d += '\x3cparam name\x3d"nofscontrols" value\x3d"default" /\x3e', d += '\x3cparam name\x3d"nofscontrolsheight" value\x3d"36" /\x3e');
                    d += "\x3c/object\x3e";
                    a.innerHTML = d;
                    var p = a.firstChild;
                    p.setAttribute("width", "100%");
                    p.setAttribute("height", "100%");
                    p.style.width = "100%";
                    p.style.height = "100%"
                } else {
                    for (; a.firstChild;) a.removeChild(a.firstChild);
                    p = m.createElement("embed");
                    if (z.qt) {
                        if (1 == z.type) p.setAttribute("type", "application/x-tstream");
                        else if (2 ==
                            z.type) p.setAttribute("type", "application/x-acestream-plugin");
                        else if (4 == z.type) p.setAttribute("type", "application/x-tstream");
                        else if (3 == z.type) p.setAttribute("type", "application/x-torrentstream-plugin");
                        else return c("embedPlugin: unknown type: " + z.type), !1;
                        p.setAttribute("width", "100%");
                        p.setAttribute("height", "100%");
                        p.setAttribute("bgcolor", f);
                        p.setAttribute("videobgcolor", f);
                        p.setAttribute("fontcolor", h);
                        p.setAttribute("fullscreencontrols", "1");
                        p.setAttribute("fscontrolsenable", "1");
                        p.setAttribute("nofscontrolsenable",
                            "1");
                        e.liveStreamControls ? p.setAttribute("defaultcontrolsforstream", "1") : p.setAttribute("defaultcontrolsforstream", "0");
                        p.setAttribute("loopable", "0");
                        p.setAttribute("fscontrols", "default");
                        p.setAttribute("nofscontrols", "default");
                        p.setAttribute("nofscontrolsheight", "36")
                    } else p.setAttribute("type", "application/x-ts-stream"), p.setAttribute("internalplaylist", b), p.setAttribute("autoplay", "no"), p.setAttribute("loop", "no"), p.setAttribute("width", "100%"), p.setAttribute("height", "100%"), p.setAttribute("bgcolor",
                        f), p.setAttribute("video-bgcolor", f), p.setAttribute("fontcolor", h);
                    d && p.setAttribute("style", d);
                    a.appendChild(p)
                }
                try {
                    p.width = "100%", p.height = "100%"
                } catch (ea) {}
                p.style.width = "100%";
                p.style.height = "100%";
                var l = z.qt ? "state" : "input";
                c("embedPlugin: embed\x3d" + p);
                if ("undefined" === typeof p[l]) {
                    if ("function" === typeof k) {
                        var n = function(a) {
                            c("embedPlugin:async: retries\x3d" + a + " embed[" + l + "]\x3d" + typeof p[l]);
                            "undefined" != typeof p[l] ? k.call(R, p) : 50 >= a ? setTimeout(function() {
                                n(a + 1)
                            }, 100) : k.call(R, !1)
                        };
                        n(0)
                    }
                    c("embedPlugin: failed to init: typeof embed[" +
                        l + "]\x3d" + typeof p[l]);
                    c("embedPlugin: failed to init: embed[" + l + "]\x3d" + p[l]);
                    return !1
                }
                "function" === typeof k && k.call(R, p);
                return p
            }

            function t() {
                if (z.version == Aa) return 0;
                try {
                    return z.qt ? (c("authLevel: " + l.auth), l.auth ? 1 : 0) : l.input.tsAuth
                } catch (m) {
                    return c("tsAuth error: " + m), 0
                }
            }

            function ra(a) {
                var b = {};
                if (!a) return null;
                a = a.split("|");
                if (1 == a.length) a = a[0];
                else if (2 == a.length) a = a[0];
                else return null;
                if ("main:" !== a.substring(0, 5)) return null;
                a = a.substring(5);
                a = a.split(";");
                b.status = a[0];
                if ("err" ===
                    b.status) b.errorMessage = a[2];
                else if ("check" === b.status) b.progress = a[1];
                else if ("prebuf" === b.status) {
                    b.progress = a[1];
                    b.time = a[2];
                    var d = 3
                } else "buf" === b.status ? (b.progress = a[1], b.time = a[2], d = 3) : "wait" === b.status ? (b.time = a[1], d = 2) : "dl" === b.status && (d = 1);
                if ("idle" !== b.status && "err" !== b.status && "check" !== b.status) try {
                    b.totalProgress = parseInt(a[d]), b.immediateProgress = parseInt(a[d + 1]), b.speedDown = parseInt(a[d + 2]), b.httpSpeedDown = parseInt(a[d + 3]), b.speedUp = parseInt(a[d + 4]), b.peers = parseInt(a[d + 5]), b.httpPeers =
                        parseInt(a[d + 6]), b.downloaded = parseInt(a[d + 7]), b.httpDownloaded = parseInt(a[d + 8]), b.uploaded = parseInt(a[d + 9]), a.length >= d + 9 && (b.liveData = a[d + 10])
                } catch (Y) {
                    c("parseBgprocessStatus:exc: " + Y)
                }
                return b
            }

            function Ga() {
                if (!l) return 0;
                var a = 0;
                try {
                    z.qt ? a = l.state : z.version > Aa && (a = l.input.tsStatus || 0)
                } catch (p) {
                    c("ts_status:exc: " + p)
                }
                return a
            }

            function E() {
                l.stateChanged = function(a) {
                    c("event:stateChanged: state\x3d" + a);
                    var b = aa.state;
                    aa.state = a;
                    if (v.mediaState == f.CONNECTING) aa.state != V.CONNECTING && (c("event:stateChanged: bg connected"),
                        v.mediaState = f.IDLE, N());
                    else if (v.mediaState == f.LOADING) aa.state != V.LOADING && (c("event:stateChanged: playlist loaded"), v.mediaState = f.IDLE, ib());
                    else {
                        var d = R.playlistCurrentItem();
                        a == V.IDLE ? (v.mediaState = f.IDLE, b != V.HASHCHECKING && b != V.PREBUFFERING && b != V.BUFFERING && b != V.DOWNLOADING || S(!0, R.playlistCurrentItem())) : a == V.LOADING ? v.mediaState = f.LOADING : a == V.HASHCHECKING ? (v.mediaState = f.HASHCHECKING, Z("onChecking", d)) : a == V.PREBUFFERING ? (v.mediaState = f.PREBUFFERING, ha(d)) : a == V.BUFFERING ? (v.mediaState = f.BUFFERING,
                            Z("onBuffering", d)) : a == V.ERROR ? v.mediaState = f.ERROR : a == V.DOWNLOADING && b == V.BUFFERING && (v.mediaState = f.PLAYING, Q.mediaStarted ? Z("onResume", d) : Da(d))
                    }
                };
                l.playlistChanged = function() {
                    c("event:playlistChanged: current\x3d" + l.playlistCurrentItem + " count\x3d" + l.playlistCount);
                    aa.state = l.state;
                    if (v.mediaState == f.LOADING) aa.state != V.LOADING && (c("event:playlistChanged: playlist loaded"), v.mediaState = f.IDLE, ib());
                    else {
                        var a = l.playlistCurrentItem;
                        a != Ra && (c("event:playlistChanged: changed item: last\x3d" + Ra + " curr\x3d" +
                            a), -1 != Ra && (S(!1, Ra), v.mediaState = f.STOPPED), Ra = a)
                    }
                };
                l.audioMuteChanged = function(a) {
                    c("event:audioMuteChanged: mute\x3d" + a);
                    za(a)
                };
                l.audioVolumeChanged = function(a) {
                    c("event:audioVolumeChanged: volume\x3d" + a);
                    a = Math.round(a / 2);
                    La(a)
                };
                l.audioTrackChanged = function(a) {
                    c("event:audioTrackChanged: ---")
                };
                l.audioChannelChanged = function(a) {
                    c("event:audioChannelChanged: ---")
                };
                l.inputPositionChanged = function(a) {
                    c("event:inputPositionChanged: position\x3d" + a);
                    la(a)
                };
                l.inputTimeChanged = function(a) {
                    c("event:inputTimeChanged: time\x3d" +
                        a);
                    a = parseInt(a / 1E3);
                    qa(a)
                };
                l.inputRateChanged = function(a) {
                    c("event:inputRateChanged: ---")
                };
                l.subtitleTrackChanged = function(a) {
                    c("event:subtitleTrackChanged: ---")
                };
                l.videoFullscreenChanged = function(a) {
                    c("event:videoFullscreenChanged: ---")
                };
                l.videoAspectRatioChanged = function(a) {
                    c("event:videoAspectRatioChanged: aspectRatio\x3d" + a)
                };
                l.videoCropChanged = function(a) {
                    c("event:videoCropChanged: ---")
                };
                l.authChanged = function(a) {
                    c("event:authChanged: ---")
                };
                l.infoChanged = function(a) {
                    c("event:infoChanged: ---")
                };
                l.errorChanged = function(a) {
                    c("event:errorChanged: error\x3d" + a);
                    a && ia("error", a)
                };
                l.statusChanged = function(a) {
                    try {
                        var b = ra(a);
                        b && Z("onStatus", b)
                    } catch (na) {}
                };
                l.mediaPlayerMediaChanged = function() {
                    c("event:mediaPlayerMediaChanged: ---")
                };
                l.mediaPlayerNothingSpecial = function() {
                    c("event:mediaPlayerNothingSpecial: ---")
                };
                l.mediaPlayerOpening = function() {
                    c("event:mediaPlayerOpening: ---")
                };
                l.mediaPlayerBuffering = function() {
                    c("event:mediaPlayerBuffering: ---")
                };
                l.mediaPlayerPlaying = function() {
                    c("event:mediaPlayerPlaying: ---");
                    v.mediaState = f.PLAYING;
                    var a = R.playlistCurrentItem();
                    Q.mediaStarted ? Z("onResume", a) : Da(a)
                };
                l.mediaPlayerPaused = function() {
                    c("event:mediaPlayerPaused: ---");
                    v.mediaState = f.PAUSED;
                    Z("onPause", R.playlistCurrentItem())
                };
                l.mediaPlayerStopped = function() {
                    c("event:mediaPlayerStopped: ---");
                    v.mediaState = l.state == V.IDLE ? f.IDLE : f.STOPPED;
                    S(v.mediaState == f.IDLE, R.playlistCurrentItem())
                };
                l.mediaPlayerForward = function() {
                    c("event:mediaPlayerForward: ---")
                };
                l.mediaPlayerBackward = function() {
                    c("event:mediaPlayerBackward: ---")
                };
                l.mediaPlayerEndReached = function() {
                    c("event:mediaPlayerEndReached: ---")
                };
                l.mediaPlayerEncounteredError = function() {
                    c("event:mediaPlayerEncounteredError: ---")
                };
                l.mediaPlayerTimeChanged = function(a) {
                    qa(a, !0)
                };
                l.mediaPlayerPositionChanged = function(a) {
                    la(a)
                };
                l.mediaPlayerSeekableChanged = function() {
                    c("event:mediaPlayerSeekableChanged: ---")
                };
                l.mediaPlayerPausableChanged = function() {
                    c("event:mediaPlayerPausableChanged: ---")
                };
                l.mediaPlayerTitleChanged = function() {
                    c("event:mediaPlayerTitleChanged: ---")
                };
                l.mediaPlayerSnapshotTaken = function() {
                    c("event:mediaPlayerSnapshotTaken: ---")
                };
                l.mediaPlayerLengthChanged = function(a) {
                    c("event:mediaPlayerLengthChanged: ---")
                };
                l.errorMessage = function(a) {
                    c("event:errorMessage: message\x3d" + a)
                }
            }

            function U() {
                if (l) {
                    try {
                        if (0 < Q.skipEngineStatus) --Q.skipEngineStatus;
                        else {
                            var a = Ga();
                            if (-1 != a && (a !== aa.state && (e.useInternalPlaylist || aa.state != V.PREBUFFERING || a != V.DOWNLOADING || (c("updateBGProcessData: unlock bgprocess state"), Q.lockBgProcessState = !1), Q.lockBgProcessState ||
                                    (c("updateBGProcessData: state change: " + Ab[aa.state] + " -\x3e " + Ab[a]), aa.state = a)), v.mediaState != f.IDLE && v.mediaState != f.STOPPED))
                                if (10 <= db) {
                                    if (l) {
                                        a = "";
                                        try {
                                            a = z.qt ? l.status : z.version == Aa ? l.input.p2pstatus || "" : l.input.tsInfo || ""
                                        } catch (ea) {
                                            c("tsInfo error: " + ea)
                                        }
                                        var b = a
                                    } else b = "";
                                    if (z.version < Ea) ia("message", b);
                                    else {
                                        var d = ra(b);
                                        d && Z("onStatus", d)
                                    }
                                    db = 0
                                } else db += 1
                        }
                    } catch (ea) {
                        c("updateState: updateBGProcessData exc: " + ea)
                    }
                    try {
                        if (l) {
                            try {
                                var h = z.qt ? l.inputState : l.input.state
                            } catch (ea) {
                                h = ta.ERROR
                            }
                            z.inputState !=
                                h && (c("updatePluginData: state change: " + F[z.inputState] + " -\x3e " + F[h] + " triggers.mediaStarted\x3d" + Q.mediaStarted), z.inputState = h);
                            if (Q.mediaStarted) {
                                if (z.inputState == ta.PLAYING) {
                                    if (0 == z.duration) try {
                                        if (z.duration = z.qt ? l.inputLength : l.input.length, 0 != z.duration) {
                                            c("updatePluginData: got duration: " + z.duration);
                                            var k = z.duration;
                                            Z("onDuration", R.playlistCurrentItem(), k)
                                        }
                                    } catch (ea) {}
                                    try {
                                        var n = z.qt ? l.inputTime : l.input.time;
                                        n = parseInt(n / 1E3);
                                        n != z.time && (z.time = n, qa(z.time))
                                    } catch (ea) {}
                                    try {
                                        var r = z.qt ?
                                            l.inputPosition : l.input.position;
                                        r != z.progress && (z.progress = r, la(z.progress))
                                    } catch (ea) {}
                                }
                                try {
                                    var x = z.qt ? l.audioVolume : l.audio.volume;
                                    z.version < mb && (x = Math.round(x / 2));
                                    x != z.volume && (z.volume = x, La(x))
                                } catch (ea) {
                                    z.volume = 0
                                }
                                try {
                                    var w = z.qt ? l.audioMute : l.audio.mute;
                                    w != z.muted && (z.muted = w, za(w))
                                } catch (ea) {}
                            }
                        }
                    } catch (ea) {
                        c("updateState: updatePluginData exc: " + ea)
                    }
                    try {
                        if (b = -1, v.mediaState == f.CONNECTING) aa.state !== J && aa.state != V.CONNECTING && (c("updateMediaState: bg connected"), v.mediaState = f.IDLE, N());
                        else if (v.mediaState ==
                            f.LOADING) aa.state != V.LOADING && (c("updateMediaState: playlist loaded"), v.mediaState = f.IDLE, ib());
                        else if (!Q.skipMediaState && (aa.state == V.LOADING ? b = f.LOADING : aa.state == V.PREBUFFERING ? b = f.PREBUFFERING : aa.state == V.HASHCHECKING ? b = f.HASHCHECKING : aa.state == V.BUFFERING ? b = f.BUFFERING : aa.state == V.ERROR ? b = f.ERROR : z.inputState == ta.IDLE ? b = aa.state == V.DOWNLOADING ? f.PREBUFFERING : f.IDLE : z.inputState == ta.OPENING || z.inputState == ta.BUFFERING ? b = f.BUFFERING : z.inputState == ta.PLAYING ? b = f.PLAYING : z.inputState == ta.PAUSED ?
                                b = f.PAUSED : z.inputState == ta.STOPPING || z.inputState == ta.STOPPED ? b = aa.state == V.IDLE ? f.IDLE : f.STOPPED : z.inputState == ta.ERROR && (b = f.ERROR), -1 != b))
                            if (b == f.LOADING) v.mediaState = b;
                            else {
                                var t = R.playlistCurrentItem();
                                t != Ra && (c("updateMediaState: changed item: last\x3d" + Ra + " curr\x3d" + t), -1 != Ra && (S(!1, Ra), v.mediaState = f.STOPPED), Ra = t);
                                b != v.mediaState && (c("updateMediaState: " + ab[v.mediaState] + " -\x3e " + ab[b] + " plugin\x3d" + F[z.inputState] + " bg\x3d" + Ab[aa.state] + " curr\x3d" + t), b == f.PLAYING ? Q.mediaStarted ? Z("onResume",
                                        t) : Da(t) : b == f.PAUSED ? v.mediaState == f.BUFFERING || v.mediaState == f.PLAYING ? Z("onPause", t) : c("updateMediaState: unknown state change: " + v.mediaState + " -\x3e " + b) : v.mediaState == f.IDLE && b == f.STOPPED ? ha(t) : b == f.STOPPED || b == f.IDLE ? v.mediaState == f.PREBUFFERING || v.mediaState == f.BUFFERING || v.mediaState == f.HASHCHECKING || v.mediaState == f.PLAYING || v.mediaState == f.PAUSED ? S(b == f.IDLE, t) : v.mediaState == f.STOPPED && b == f.IDLE ? S(!0, t) : c("updateMediaState: unknown state change: " + ab[v.mediaState] + " -\x3e " + ab[b]) : b == f.PREBUFFERING ?
                                    ha(t) : b == f.BUFFERING ? Z("onBuffering", t) : b == f.HASHCHECKING && Z("onChecking", t), v.mediaState = b)
                            }
                    } catch (ea) {
                        c("updateState: updateMediaState exc: " + ea)
                    }
                    ca.updateState = setTimeout(U, 100)
                }
            }

            function N() {
                c("onConnected");
                "function" === typeof e.onLoad && e.onLoad.call(R, R)
            }

            function L(a) {
                c("onPluginError");
                if ("function" === typeof e.onError) e.onError.call(R, a);
                else throw a;
            }

            function Ha() {
                0 < l.playlist.items.count ? (c("waitPrebuffering: ready to play"), c("waitPrebuffering: items_count\x3d" + l.playlist.items.count), z.countPlaylistItems =
                    l.playlist.items.count, l.playlist.play(), Q.skipMediaState = !1, l.audio.mute = z.muted, c("waitPrebuffering: mute\x3d" + l.audio.mute), ca.waitPrebuffering = null) : ca.waitPrebuffering = setTimeout(Ha, 100)
            }

            function Z(a) {
                try {
                    for (var b = Array.prototype.slice.call(arguments, 1), d = 0; d < ma.length; d++) "function" === typeof ma[d][a] && ma[d][a].apply(R, b)
                } catch (Y) {
                    c("onEvent:exc: event\x3d" + a + " err\x3d" + Y)
                }
            }

            function ia(a, b) {
                b && ("message" === a && /^error/i.test(b) && (a = "error"), "alert" === a || a !== Xa || b !== tb) && (Xa = a, tb = b, Z("onMessage",
                    a, b))
            }

            function qa(a, b) {
                Z("onTime", R.playlistCurrentItem(), a, b)
            }

            function la(a) {
                Z("onProgress", R.playlistCurrentItem(), a)
            }

            function ha(a) {
                Z("onPrebuffering", a)
            }

            function Da(a) {
                c("onStart: index\x3d" + a);
                var b;
                v.video.subtitle.current = -1;
                v.video.subtitle.values = [];
                v.video.subtitle.count = -1;
                try {
                    z.qt ? (v.video.subtitle.current = l.subtitleTrack, v.video.subtitle.count = l.subtitleCount) : l.subtitle ? (v.video.subtitle.current = l.subtitle.track, v.video.subtitle.count = l.subtitle.count) : v.video.subtitle.current = l.video.subtitle
                } catch (Y) {
                    c("loadMediaData: get subtitles: " +
                        Y)
                }
                c("loadMediaData: subtitle current " + v.video.subtitle.current);
                c("loadMediaData: subtitle count " + v.video.subtitle.count);
                if (-1 != v.video.subtitle.current && 0 < v.video.subtitle.count)
                    for (b = 0; b < v.video.subtitle.count; b++) {
                        var d = z.qt ? l.subtitleDescription(b) : l.subtitle.description(b);
                        v.video.subtitle.values.push(d)
                    }
                v.audio.track.current = -1;
                v.audio.track.values = [];
                v.audio.track.count = -1;
                try {
                    z.qt ? (v.audio.track.current = l.audioTrack, v.audio.track.count = l.audioCount) : (v.audio.track.current = l.audio.track,
                        l.audio.count !== J && (v.audio.track.count = l.audio.count))
                } catch (Y) {
                    c("loadMediaData: get audio track: " + Y)
                }
                c("loadMediaData: audio track current " + v.audio.track.current);
                c("loadMediaData: audio track count " + v.audio.track.count);
                if (-1 != v.audio.track.current && 0 < v.audio.track.count)
                    for (b = 0; b < v.audio.track.count; b++) d = z.qt ? l.audioDescription(b) : l.audio.description(b), v.audio.track.values.push(d);
                if (z.version < Ea) {
                    if (e.useInternalPlaylist) throw "Deprecated from v1.0.5";
                    c("restoreMediaParams: aspectRatio\x3d" +
                        v.video.aspect_ratio.values[v.video.aspect_ratio.current]);
                    c("restoreMediaParams: crop\x3d" + v.video.crop.values[v.video.crop.current]);
                    R.aspectRatio(v.video.aspect_ratio.current);
                    R.crop(v.video.crop.current)
                }
                Q.mediaStarted = !0;
                c("onStart: duration\x3d" + z.duration);
                Z("onStart", a)
            }

            function S(a, b) {
                a = !!a;
                var d = -1,
                    m = z.progress;
                try {
                    d = z.qt ? l.inputPosition : l.input.position
                } catch (sa) {}
                c("onStop: index\x3d" + b + " fullstop\x3d" + a + " stopClicked\x3d" + Q.stopClicked + " currentProgress\x3d" + d + " lastProgress\x3d" + m);
                b === J && (b = R.playlistCurrentItem());
                if (Q.mediaStarted) {
                    if (!e.useInternalPlaylist) try {
                        l.video.aspectRatio = "", l.video.crop = ""
                    } catch (sa) {
                        c("onStop: reset media params: " + sa)
                    }
                    v.video.subtitle.current = -1;
                    v.video.subtitle.values = [];
                    v.video.subtitle.count = -1;
                    v.audio.track.current = -1;
                    v.audio.track.values = [];
                    v.audio.track.count = -1;
                    Q.mediaStarted = !1
                }
                e.useInternalPlaylist || (v.mediaState = a ? f.IDLE : f.STOPPED);
                z.duration = 0;
                z.progress = 0;
                z.time = 0;
                qa(0);
                la(0);
                tb = Xa = null;
                Z("onStop", b, a);
                e.useInternalPlaylist ? e.sendOnCompleted &&
                    !a && .97 <= d && Z("onCompleted", b) : Q.stopClicked ? (Q.stopClicked = !1, Q.nextClicked && (Q.nextClicked = !1), Q.prevClicked && (Q.prevClicked = !1)) : ba()
            }

            function ba() {
                c("onCompleted");
                if (e.useInternalPlaylist) throw "Deprecated from v1.0.5";
                if (da()) c("onCompleted: ad completed, do nothing");
                else {
                    var a = R.playlistCurrentItem() + 1;
                    if (a >= R.playlistSize()) {
                        c("onCompleted: no next item");
                        try {
                            l.video.fullscreen && (l.video.fullscreen = !1), z.version > I && setTimeout(function() {
                                l.playlist.stop()
                            }, 1E3)
                        } catch (p) {
                            c("onCompleted: " + p)
                        }
                    } else c("onCompleted: go to next item: " +
                        a), Oa(a, {}, !0)
                }
            }

            function La(a) {
                a = Math.round(a);
                Z("onVolume", a)
            }

            function za(a) {
                Z("onMute", a)
            }

            function A(a) {
                if (!e.useInternalPlaylist) {
                    ja.data = {};
                    ja.items = [];
                    ja.currentItem = -1;
                    var b = 0,
                        c = [];
                    for (b = 0; b < a.length; b++) "string" == typeof a[b] ? (fileindex = b, filename = a[b]) : (filename = a[b][0], fileindex = a[b][1]), c.push({
                        index: fileindex,
                        name: filename
                    }), ja.data[fileindex] = filename;
                    c.sort(function(a, b) {
                        return a.file < b.file ? -1 : a.file == b.file ? 0 : 1
                    });
                    a = [];
                    for (b = 0; b < c.length; b++) a.push(c[b].name), ja.items.push({
                        index: c[b].index,
                        enabled: !0
                    })
                }
                Z("onPlaylist", a)
            }

            function y(a) {
                if (z.qt) {
                    if (!l || "undefined" === typeof l.state) throw "plugin is not initialised";
                } else if (!l || !l.input || !l.playlist) throw "plugin is not initialised";
                K && A([]);
                K = null;
                if (!l) throw "Cannot embed plugin";
                if ("object" !== typeof a) throw "loadPlaylist: mediaData is not an object";
                if (a.type === J) throw "loadPlaylist: missing mediaData.type";
                if (a.id === J) throw "loadPlaylist: missing mediaData.id";
                a = b.extend({
                    developerId: 0,
                    affiliateId: 0,
                    zoneId: 0,
                    autoplay: !1,
                    name: null,
                    identityUrl: null,
                    async: !0,
                    clearPlaylist: !1
                }, a);
                if (z.version < Ea || !e.useInternalPlaylist || a.type == oa.DIRECT_URL) a.async = !1;
                c("loadPlaylist: type\x3d" + a.type + " id\x3d" + a.id + " autoplay\x3d" + a.autoplay + " name\x3d" + a.name + " async\x3d" + a.async);
                try {
                    var d;
                    if (a.type == oa.TORRENT_URL) z.qt ? a.async ? l.playlistLoadAsync(a.id, a.developerId, a.affiliateId, a.zoneId) : d = l.playlistLoad(a.id, a.developerId, a.affiliateId, a.zoneId) : a.async ? l.playlist.loadasync(a.id, a.developerId, a.affiliateId, a.zoneId) : d = l.playlist.load(a.id, a.developerId,
                        a.affiliateId, a.zoneId);
                    else if (a.type == oa.TORRENT_RAW) z.qt ? a.async ? l.playlistLoadAsyncRaw(a.id, a.developerId, a.affiliateId, a.zoneId) : d = l.playlistLoadRaw(a.id, a.developerId, a.affiliateId, a.zoneId) : a.async ? l.playlist.loadasync_raw(a.id, a.developerId, a.affiliateId, a.zoneId) : d = l.playlist.load_raw(a.id, a.developerId, a.affiliateId, a.zoneId);
                    else if (a.type == oa.INFOHASH) z.qt ? a.async ? l.playlistLoadAsyncInfohash(a.id, a.developerId, a.affiliateId, a.zoneId) : d = l.playlistLoadInfohash(a.id, a.developerId, a.affiliateId,
                        a.zoneId) : a.async ? l.playlist.loadasync_infohash(a.id, a.developerId, a.affiliateId, a.zoneId) : d = l.playlist.load_infohash(a.id, a.developerId, a.affiliateId, a.zoneId);
                    else if (a.type == oa.PLAYER_ID) z.qt ? a.async ? l.playlistLoadAsyncPlayer(a.id) : d = l.playlistLoadPlayer(a.id) : z.version < Ea ? d = l.playlist.load("http://storage.torrentstream.net/get/" + a.id) : a.async ? l.playlist.loadasync_player(a.id) : d = l.playlist.load_player(a.id);
                    else if (a.type == oa.DIRECT_URL) {
                        var h = a.name || "";
                        z.qt ? (a.clearPlaylist && l.playlistClear(),
                            l.playlistLoadUrl(a.id, a.developerId, a.affiliateId, a.zoneId, h, a.clearPlaylist)) : l.playlist.load_url(a.id, a.developerId, a.affiliateId, a.zoneId, h);
                        h || (h = a.id);
                        var m = {
                            files: [h]
                        }
                    } else throw "loadPlaylist: unknown media type: " + a.type;
                    e.useInternalPlaylist || m || (z.version < Ka && (d = d.replace(/\\/g, "\\\\")), c("loadPlaylist: loadResponse\x3d" + d), m = JSON.parse(d), c("loadPlaylist: playlistData\x3d" + m));
                    jb = a;
                    a.async ? (Q.skipEngineStatus = 1, aa.state != V.LOADING && (aa.state = V.LOADING), v.mediaState != f.LOADING && (v.mediaState =
                        f.LOADING)) : ib(m)
                } catch (sa) {
                    return m = !0, c("loadPlaylist: cannot load content files: " + sa + ", autoRetry\x3d" + e.autoRetry + " countRetry\x3d" + e.countRetry), e.autoRetry && (e.countRetry === J && (e.countRetry = 0), 5 > e.countRetry ? (m = !1, ca.loadData = setTimeout(function() {
                        a.countRetry += 1;
                        y(a)
                    }, 2500)) : c("loadPlaylist: giving up")), m && (v.mediaState == f.LOADING && (v.mediaState = f.ERROR), ia("error", "cannotLoadPlaylist")), !1
                }
            }

            function ib(a) {
                if (!jb) throw "_lastMediaData is not initialised";
                if (e.useInternalPlaylist) try {
                    var b;
                    var d = [];
                    var f = R.playlistSize();
                    for (b = 0; b < f; b++) {
                        if (0 == b) try {
                            var h = z.qt ? l.playlistItemInfohash(b) : l.playlist.ts_get_item_infohash(b)
                        } catch (ya) {
                            h = null
                        }
                        itemName = z.qt ? l.playlistItemTitle(b) : l.playlist.ts_get_item_title(b);
                        d.push(itemName)
                    }
                    c("onPlaylistLoaded: files\x3d" + ("" + d).replace(/,/g, ", "))
                } catch (ya) {
                    c("onPlaylistLoaded: exc: " + ya)
                } else d = a.files, h = a.infohash;
                jb.infohash = h ? h : null;
                c("onPlaylistLoaded: infohash\x3d" + jb.infohash);
                if (d && d.length) {
                    try {
                        A(d)
                    } catch (ya) {
                        c("onPlaylistLoaded: exc in onPlaylist(): " +
                            ya)
                    }
                    K = jb;
                    c("onMediaLoaded: autoplay\x3d" + K.autoplay + " force\x3d" + kb);
                    Ma || !K.autoplay && !kb || (kb = !1, 1 == R.playlistSize() && Oa());
                    Z("onMediaLoaded")
                } else ia("error", "noVideoFiles")
            }

            function Va(a) {
                if (e.useInternalPlaylist) throw "preloadContent() is deprecated from 1.0.5";
                c("preloadContent: index\x3d" + a);
                ha(a);
                Q.lockBgProcessState = !0;
                aa.state = V.PREBUFFERING;
                v.mediaState = f.PREBUFFERING;
                l.playlist.items.count && (c("preloadContent: clear current playlist"), l.playlist.clear());
                c("preloadContent: index\x3d" + a);
                for (var b = []; a < R.playlistSize(); a++) ja.items[a].enabled && b.push(ja.items[a].index);
                c("preloadContent: start: " + b);
                var d = b.join(",");
                ca.preloadContent && clearTimeout(ca.preloadContent);
                ca.preloadContent = setTimeout(function() {
                    ca.preloadContent = null;
                    K.type == oa.TORRENT_URL ? l.playlist.start(K.id, d, K.developerId, K.affiliateId, K.zoneId) : K.type == oa.TORRENT_RAW ? l.playlist.start_raw(K.id, d, K.developerId, K.affiliateId, K.zoneId) : K.type == oa.DIRECT_URL ? l.playlist.start_url(K.id, K.developerId, K.affiliateId, K.zoneId) :
                        K.type == oa.INFOHASH ? l.playlist.start_infohash(K.id, d, K.developerId, K.affiliateId, K.zoneId) : K.type == oa.PLAYER_ID && (z.version < Ea ? l.playlist.start("http://storage.torrentstream.net/get/" + K.id, d) : l.playlist.start_player(K.id, d, K.developerId, K.affiliateId, K.zoneId));
                    c("\x3e\x3e\x3e\x3e\x3e start preloading")
                }, 500);
                return !0
            }

            function Oa(a, d, h) {
                if (K) {
                    var m = R.playlistCurrentItem(),
                        k = R.playlistSize();
                    d = b.extend({
                        position: 0,
                        reset: !0,
                        forcePlay: !1
                    }, d);
                    c("_play: index\x3d" + a + " current\x3d" + m + " playlistSize\x3d" +
                        k + " force\x3d" + d.forcePlay + " pos\x3d" + d.position + " reset\x3d" + d.reset);
                    if (a === J) a = m;
                    else try {
                        a = parseInt(a), isNaN(a) && (a = m)
                    } catch (ya) {
                        a = m
                    }
                    0 > a ? a = 0 : a >= k && (a = k - 1);
                    if (v.mediaState == f.IDLE || v.mediaState == f.ERROR) m = -1, c("_play: set playingIndex to -1, media state is idle");
                    a != m || d.forcePlay ? (e.useInternalPlaylist || (h && z.version != I || (c("_play: stop current playing item"), T()), ja.currentItem = a), c("_play: torrent: switch to item " + a), e.useInternalPlaylist ? (c("_play:playItem: index\x3d" + a + " pos\x3d" + d.position +
                        " stopCurrent\x3d" + d.reset), z.qt ? (h = d.position, l.playlistPlayItem(a, h, d.reset)) : (h = d.position, 200 == h && (h = -1), l.playlist.playItem(a, h, d.reset))) : (Va(a), Ha())) : v.mediaState == f.STOPPED ? (e.useInternalPlaylist || (v.mediaState = f.PREBUFFERING, ha(a), Q.skipMediaState = !1), z.qt ? l.playlistPlay() : l.playlist.play()) : v.mediaState == f.PLAYING || v.mediaState == f.PAUSED ? z.qt ? l.playlistTogglePause() : l.playlist.togglePause() : (c("_play: do nothing, mediaState\x3d" + v.mediaState), ia("alert", "cannotPauseOnBuffering"))
                } else c("_play: no media data, force autoplay"),
                    kb = !0
            }

            function T(a) {
                a = !!a;
                c("stopContent: fullstop\x3d" + a);
                ca.loadData && (c("stopContent: stop loadData timer"), clearTimeout(ca.loadData), ca.loadData = null);
                e.useInternalPlaylist ? z.qt ? l.playlistStop(a) : l.playlist.stop(a) : (Q.skipMediaState = !0, ca.waitPrebuffering && (c("stopContent: stop waitPrebuffering timer"), clearTimeout(ca.waitPrebuffering), ca.waitPrebuffering = null), Q.stopClicked = !0, a ? (l.playlist.stop(!0), l.playlist.clear(), Q.lockBgProcessState = !0, aa.state = V.IDLE) : l.playlist.items.count && l.playlist.stop(),
                    S(a, R.playlistCurrentItem()))
            }

            function H() {
                z.qt ? l.playlistTogglePause() : l.playlist.togglePause()
            }

            function da() {
                try {
                    return z.qt ? l.inputIsAd : l.input.isAd
                } catch (m) {
                    return c("_pluginIsAd:exc: " + m), !1
                }
            }

            function Ia(a, b) {
                if (b) {
                    l = b;
                    l.version && (z.stringVersion = l.version);
                    z.version = n(z.stringVersion);
                    c("version\x3d" + z.stringVersion + " auth\x3d" + t());
                    z.version < Ea && (e.useInternalPlaylist = !1, ja = {
                        data: {},
                        items: [],
                        currentItem: -1
                    });
                    if (z.version == Aa) {
                        if (a) {
                            e.embedCallback.call(R, !1, "old_version_1_0_2");
                            return
                        }
                        throw "old_version_1_0_2";
                    }
                    z.events ? (c("afterEmbed: attach events"), E(), v.mediaState == f.CONNECTING && -1 != l.state && l.state != V.CONNECTING && (c("afterEmbed: bg connected"), v.mediaState = f.IDLE, N())) : (e.useInternalPlaylist && (Q.lockBgProcessState = !1, Q.skipMediaState = !1), z.version < Ea && (v.mediaState = f.IDLE, N()), U());
                    a && e.embedCallback.call(R, !0)
                } else a && e.embedCallback.call(R, !1, "plugin_not_enabled")
            }

            function wa(a) {
                var b = "windows" == Cb ? 2 == a.type || 3 == a.type ? !0 : !1 : !0;
                c("constructor: platform\x3d" + Cb + " browser\x3d" + Db + " availablePlugin\x3d" +
                    a.type + " useQtPlugin\x3d" + b);
                z.type = a.type;
                z.qt = b ? !0 : !1;
                "function" === typeof e.embedCallback ? r(d, e.useInternalPlaylist, e.embedStyle, e.bgColor, e.fontColor, function(a) {
                    Ia(!0, a)
                }) : (l = r(d, e.useInternalPlaylist, e.embedStyle, e.bgColor, e.fontColor), Ia(!1, l))
            }
            var J, R = this,
                l, ma = [],
                Na = null,
                jb = null,
                K = null,
                Ma = !1,
                kb = !1,
                Wa = null,
                Ra = -1,
                db = 0,
                Aa = n("1.0.2"),
                I = n("1.0.3"),
                Ka = n("1.0.4"),
                Ea = n("1.0.5"),
                mb = n("2.0.10"),
                oa = {
                    TORRENT_URL: 1,
                    DIRECT_URL: 2,
                    INFOHASH: 3,
                    PLAYER_ID: 4,
                    TORRENT_RAW: 5
                },
                V = {
                    IDLE: 0,
                    PREBUFFERING: 1,
                    DOWNLOADING: 2,
                    BUFFERING: 3,
                    COMPLETED: 4,
                    HASHCHECKING: 5,
                    ERROR: 6,
                    CONNECTING: 7,
                    LOADING: 8
                },
                Ab = "idle prebuf dl buf completed check error connecting loading".split(" "),
                ta = {
                    IDLE: 0,
                    OPENING: 1,
                    BUFFERING: 2,
                    PLAYING: 3,
                    PAUSED: 4,
                    STOPPING: 5,
                    STOPPED: 6,
                    ERROR: 7
                },
                F = "idle opening buffering playing paused stopping stopped error".split(" "),
                f = {
                    LOADING: 0,
                    IDLE: 1,
                    HASHCHECKING: 2,
                    PREBUFFERING: 3,
                    BUFFERING: 4,
                    PLAYING: 5,
                    PAUSED: 6,
                    STOPPED: 7,
                    ERROR: 8,
                    CONNECTING: 9
                },
                ab = "loading idle check prebuf buf play pause stop error connecting".split(" "),
                tb = null,
                Xa = null,
                fb = {},
                Q = {
                    skipMediaState: !0,
                    lockBgProcessState: !0,
                    mediaStarted: !1,
                    stopClicked: !1,
                    nextClicked: !1,
                    prevClicked: !1,
                    skipEngineStatus: 0
                },
                v = {
                    mediaState: f.CONNECTING,
                    video: {
                        subtitle: {
                            count: 0,
                            current: -1,
                            values: []
                        },
                        aspect_ratio: {
                            current: 0,
                            values: "default 1:1 4:3 16:9 16:10 221:100 5:4".split(" ")
                        },
                        crop: {
                            current: 0,
                            values: "default 16:9 16:10 185:100 239:100 5:3 4:3 5:4 1:1".split(" ")
                        }
                    },
                    audio: {
                        track: {
                            count: 0,
                            current: -1,
                            values: []
                        },
                        channel: {
                            current: 0,
                            values: "default stereo reverseStereo left right dolby".split(" ")
                        }
                    }
                },
                z = {
                    inputState: ta.IDLE,
                    time: 0,
                    duration: 0,
                    progress: 0,
                    volume: 0,
                    muted: !1,
                    version: Aa,
                    stringVersion: "1.0.2",
                    countPlaylistItems: 0,
                    isAd: !1,
                    isInterruptableAd: !1,
                    qt: !1,
                    type: 0,
                    events: !1
                },
                aa = {
                    state: V.CONNECTING
                },
                ca = {
                    updateState: null,
                    waitPrebuffering: null,
                    iframeChild: null,
                    preloadContent: null,
                    loadData: null
                },
                ja = null;
            this.getEngineVersion = function() {
                try {
                    return l.engineVersion
                } catch (m) {
                    return null
                }
            };
            this.getPlugin = function() {
                return l
            };
            this.getVideoAspectRatioList = function() {
                return v.video.aspect_ratio.values
            };
            this.getVideoCropList =
                function() {
                    return v.video.crop.values
                };
            this.getVideoSubtitleList = function() {
                return v.video.subtitle.values
            };
            this.getAudioChannelList = function() {
                return v.audio.channel.values
            };
            this.getAudioTrackList = function() {
                return v.audio.track.values
            };
            this.getVideoAspectRatio = function() {
                return v.video.aspect_ratio.current
            };
            this.getVideoCrop = function() {
                return v.video.crop.current
            };
            this.getVideoSubtitle = function() {
                return v.video.subtitle.current
            };
            this.getAudioChannel = function() {
                return v.audio.channel.current
            };
            this.getAudioTrack =
                function() {
                    return v.audio.track.current
                };
            this.get_player_id = function() {
                return K.type == oa.PLAYER_ID ? K.id : ""
            };
            this.version = function() {
                return z.stringVersion
            };
            this.setVar = function(a, b) {
                fb[a] = b
            };
            this.setVars = function(a) {
                for (name in a) fb[name] = a[name]
            };
            this.getVar = function(a, b) {
                return b !== J && fb[a] === J ? b : fb[a]
            };
            this.getVars = function() {
                return fb
            };
            this.blocked = function(a) {
                a !== J && (Ma = !!a);
                return Ma
            };
            this.handleIframeMessage = function(a) {
                gotIframeMessage(a)
            };
            this.destroy = function() {
                T(!0);
                c("destroy");
                try {
                    ca.updateState &&
                        (clearTimeout(ca.updateState), ca.updateState = null), ca.waitPrebuffering && (clearTimeout(ca.waitPrebuffering), ca.waitPrebuffering = null), ca.iframeChild && (clearInterval(ca.iframeChild), ca.iframeChild = null), ca.loadData && (clearTimeout(ca.loadData), ca.loadData = null), ca.preloadContent && (clearTimeout(ca.preloadContent), ca.preloadContent = null), l.parentNode.removeChild(l), l = null
                } catch (m) {
                    c("destroy: exc: " + m)
                }
            };
            this.play = function(a, b) {
                Ma ? c("blocked") : Oa(a, b)
            };
            this.pause = function(a) {
                try {
                    var b = z.qt ? l.inputState :
                        l.input.state;
                    a === J ? H() : !0 === a && b == ta.PLAYING ? H() : !1 === a && b == ta.PAUSED && H()
                } catch (na) {
                    c("_pause: exc: " + na)
                }
            };
            this.next = function() {
                if (Ma) c("blocked");
                else {
                    var a = R.playlistCurrentItem() + 1;
                    a >= R.playlistSize() ? ia("alert", "noNextItem") : e.useInternalPlaylist ? z.qt ? l.playlistNext() : l.playlist.next() : (Q.nextClicked = !0, Oa(a))
                }
            };
            this.prev = function() {
                if (Ma) c("blocked");
                else {
                    var a = R.playlistCurrentItem() - 1;
                    0 > a ? ia("alert", "noPrevItem") : e.useInternalPlaylist ? z.qt ? l.playlistPrev() : l.playlist.prev() : (Q.prevClicked = !0, Oa(a))
                }
            };
            this.stop = function(a) {
                Ma ? c("blocked") : T(a)
            };
            this.is_playing = function() {
                return z.qt ? l.playlistIsPlaying : l.playlist.isPlaying
            };
            this.volume = function(a) {
                if (Ma) c("blocked");
                else if (l) {
                    var b = 0;
                    if (z.version < mb) {
                        a *= 2;
                        var d = 200
                    } else d = 100;
                    try {
                        var e = z.qt ? l.audioVolume : l.audio.volume;
                        b = e + a
                    } catch (sa) {
                        return
                    }
                    0 > b ? b = 0 : b > d && (b = d);
                    a = b;
                    z.qt ? l.audioVolume = a : l.audio.volume = a;
                    z.qt || (z.version < mb && (b = Math.round(b / 2)), La(b), z.volume = b)
                }
            };
            this.setVolume = function(a) {
                if (Ma) c("blocked");
                else if (l) {
                    if (z.version <
                        mb) {
                        var b = 200;
                        var d = 2
                    } else b = 100, d = 1;
                    a *= d;
                    0 > a ? a = 0 : a > b && (a = b);
                    b = a;
                    z.qt ? l.audioVolume = b : l.audio.volume = b;
                    z.qt || (a = Math.round(a / d), La(a), z.volume = a)
                }
            };
            this.toggleMute = function() {
                if (Ma) c("blocked");
                else try {
                    z.qt ? l.audioToggleMute() : l.audio.mute ? (l.audio.mute = !1, za(!1)) : (l.audio.mute = !0, za(!0))
                } catch (m) {
                    z.muted ? (z.muted = !1, za(!1)) : (z.muted = !0, za(!0))
                }
            };
            this.toggleFullscreen = function() {
                if (Ma) c("blocked");
                else try {
                    z.qt ? l.videoToggleFullscreen() : l.video.fullscreen = !0
                } catch (m) {}
            };
            this.position = function(a) {
                if (Ma) c("blocked");
                else {
                    if (a === J) return z.progress;
                    c("position: pos\x3d" + a + " ad\x3d" + da());
                    if (!Q.mediaStarted) return c("Cannot scroll, media not started"), !1;
                    var b;
                    if (b = da()) {
                        try {
                            var d = z.qt ? l.inputIsInterruptableAd : l.input.isInterruptableAd
                        } catch (Y) {
                            c("_pluginIsInterruptableAd:exc: " + Y), d = !1
                        }
                        b = !d
                    }
                    if (b) return c("position: cannot scroll ad"), !1;
                    if (Ga() != V.DOWNLOADING) return c("Cannot scroll, p2p is not in 'ready' status"), !1;
                    try {
                        return a = parseFloat(a), z.qt ? l.inputPosition = a : (l.input.position = a, z.progress = a, la(a)), !0
                    } catch (Y) {
                        c("position: exc: " +
                            Y)
                    }
                }
            };
            this.liveSeek = function(a) {
                try {
                    c("liveSeek: pos\x3d" + a), l.playlistGetPlayerId("liveseek", a, 0, 0)
                } catch (p) {
                    c("liveSeek:exc: " + p)
                }
            };
            this.getFiles = function() {
                throw "getFiles() is deprecated";
            };
            this.playlistToggleEnabled = function(a) {
                if (z.qt) {
                    l.playlistToggleItemState(a);
                    var b = l.playlistItemState(a)
                } else e.useInternalPlaylist ? (l.playlist.ts_toggle_item_state(a), b = l.playlist.ts_get_item_state(a)) : (b = ja.items[a].enabled, b = !b, ja.items[a].enabled = b);
                return b
            };
            this.playlistEnabled = function(a, b) {
                if (b === J) return z.qt ?
                    l.playlistItemState(a) : e.useInternalPlaylist ? l.playlist.ts_get_item_state(a) : ja.items[a].enabled;
                b = !!b;
                z.qt ? l.playlistSetItemState(a, b) : e.useInternalPlaylist ? l.playlist.ts_set_item_state(a, b) : ja.items[a].enabled = b;
                return b
            };
            this.playlistMoveItem = function(a, b) {
                z.qt ? l.playlistMoveItem(a, b) : e.useInternalPlaylist ? l.playlist.ts_move_item(a, b) : (a = ja.items.splice(a, 1), ja.items.splice(b, 0, a[0]))
            };
            this.playlistCurrentItem = function() {
                return z.qt ? l.playlistCurrentItem : e.useInternalPlaylist ? l.playlist.ts_active_item :
                    ja.currentItem
            };
            this.getPlaylistItem = function(a) {
                if (null !== a && a !== J) {
                    if (z.qt) return {
                        name: l.playlistItemTitle(a),
                        enabled: l.playlistItemState(a)
                    };
                    if (e.useInternalPlaylist) return {
                        name: l.playlist.ts_get_item_title(a),
                        enabled: l.playlist.ts_get_item_state(a)
                    };
                    if (!ja.items[a]) throw "Invalid playlist item: " + a;
                    var b = ja.items[a].index;
                    return {
                        name: ja.data[b],
                        enabled: ja.items[a].enabled
                    }
                }
                var c = [];
                if (z.qt)
                    for (b = l.playlistCount, a = 0; a < b; a++) c.push({
                        name: l.playlistItemTitle(a),
                        enabled: l.playlistItemState(a)
                    });
                else if (e.useInternalPlaylist)
                    for (b =
                        l.playlist.ts_item_count, a = 0; a < b; a++) c.push({
                        name: l.playlist.ts_get_item_title(a),
                        enabled: l.playlist.ts_get_item_state(a)
                    });
                else
                    for (a = 0; a < R.playlistSize(); a++) b = ja.items[a].index, c.push({
                        name: ja.data[b],
                        enabled: ja.items[a].enabled
                    });
                return c
            };
            this.playlistSize = function() {
                return z.qt ? l.playlistCount : e.useInternalPlaylist ? l.playlist.ts_item_count : ja.items.length
            };
            this.playlistClear = function() {
                z.qt ? (l.playlistStop(!0), l.playlistClear()) : l.playlist.clear();
                Wa = null
            };
            this.audioTrack = function(a) {
                try {
                    if (z.version >=
                        Ka && 0 == v.audio.track.count) return -1;
                    if (a !== J) {
                        var b = v.audio.track.current,
                            d = 0;
                        if ("next" === a) d = b + 1;
                        else if ("prev" === a) d = b - 1;
                        else try {
                            d = parseInt(a)
                        } catch (ya) {
                            d = 0
                        }
                        0 < v.audio.track.count && (0 > d ? d = v.audio.track.values.length - 1 : d >= v.audio.track.values.length && (d = 0));
                        a = d;
                        z.qt ? l.audioTrack = a : l.audio.track = a;
                        var e = v.audio.track;
                        var f = z.qt ? l.audioTrack : l.audio.track;
                        e.current = f
                    }
                    return v.audio.track.current
                } catch (ya) {
                    return c("audioTrack: " + ya), -1
                }
            };
            this.audioChannel = function(a) {
                try {
                    if (a !== J) {
                        var b = v.audio.channel.current,
                            d = 0;
                        if ("next" === a) d = b + 1;
                        else if ("prev" === a) d = b - 1;
                        else try {
                            d = parseInt(a)
                        } catch (ya) {
                            d = 0
                        }
                        0 > d ? d = v.audio.channel.values.length - 1 : d >= v.audio.channel.values.length && (d = 0);
                        a = d;
                        z.qt ? l.audioChannel = a : l.audio.channel = a;
                        var e = v.audio.channel;
                        var f = z.qt ? l.audioChannel : l.audio.channel;
                        e.current = f
                    }
                    return v.audio.channel.current
                } catch (ya) {
                    return c("audioChannel: " + ya), -1
                }
            };
            this.subtitle = function(a) {
                if (z.version >= Ka && 0 == v.video.subtitle.count) return -1;
                try {
                    if (a !== J) {
                        var b = v.video.subtitle.current,
                            d = 0;
                        if ("next" === a) d =
                            b + 1;
                        else if ("prev" === a) d = b - 1;
                        else try {
                            d = parseInt(a)
                        } catch (ya) {
                            d = 0
                        }
                        c("subtitle: newValue\x3d" + d);
                        c("subtitle: count\x3d" + v.video.subtitle.count);
                        0 < v.video.subtitle.count && (0 > d ? d = v.video.subtitle.values.length - 1 : d >= v.video.subtitle.values.length && (d = 0));
                        c("subtitle: newValue\x3d" + d);
                        b = d;
                        z.qt ? l.subtitleTrack = b : l.video.subtitle = b;
                        var e = v.video.subtitle;
                        var f = z.qt ? l.subtitleTrack : l.video.subtitle;
                        e.current = f;
                        c("subtitle: current\x3d" + v.video.subtitle.current)
                    }
                    return v.video.subtitle.current
                } catch (ya) {
                    return c("subtitle(" +
                        a + "): " + ya), -1
                }
            };
            this.aspectRatio = function(a) {
                try {
                    if (a !== J) {
                        var b = v.video.aspect_ratio.current,
                            d = 0;
                        if ("next" === a) d = b + 1;
                        else if ("prev" === a) d = b - 1;
                        else try {
                            d = parseInt(a)
                        } catch (sa) {
                            d = 0
                        }
                        0 > d ? d = v.video.aspect_ratio.values.length - 1 : d >= v.video.aspect_ratio.values.length && (d = 0);
                        if (0 == d) z.qt ? l.videoAspectRatio = "" : l.video.aspectRatio = "";
                        else {
                            var e = v.video.aspect_ratio.values[d];
                            z.qt ? l.videoAspectRatio = e : l.video.aspectRatio = e
                        }
                        v.video.aspect_ratio.current = d
                    }
                    return v.video.aspect_ratio.current
                } catch (sa) {
                    return c("aspectRatio: " +
                        sa), 0
                }
            };
            this.crop = function(a) {
                if (z.version == Aa) Z("onSystemMessage", "old_version_no_crop");
                else try {
                    if (a !== J) {
                        var b = v.video.crop.current,
                            d = 0;
                        if ("next" === a) d = b + 1;
                        else if ("prev" === a) d = b - 1;
                        else try {
                            d = parseInt(a)
                        } catch (sa) {
                            d = 0
                        }
                        0 > d ? d = v.video.crop.values.length - 1 : d >= v.video.crop.values.length && (d = 0);
                        if (0 == d) z.qt ? l.videoCrop = "" : l.video.crop = "";
                        else {
                            var e = v.video.crop.values[d];
                            z.qt ? l.videoCrop = e : l.video.crop = e
                        }
                        v.video.crop.current = d
                    }
                    return v.video.crop.current
                } catch (sa) {
                    return c("crop: " + sa), 0
                }
            };
            this.getAffiliateId =
                function() {
                    return K ? K.affiliateId : 0
                };
            this.registerEventHandler = function(a) {
                if ("object" !== typeof a) throw "Event handler must be an object";
                z.version < Ea && "function" === typeof a.onSystemMessage && a.onSystemMessage.call(R, "notify_version_1_0_5");
                ma.push(a)
            };
            this.getType = function() {
                return "acestream"
            };
            this.getCurrentItem = function() {
                return Wa
            };
            this.loadTorrent = this.loadTransportFileUrl = function(a, b) {
                "object" !== typeof b && (b = {});
                Wa = {
                    transport_file_url: a
                };
                a = a.replace(/\s+/g, "%20");
                b.type = oa.TORRENT_URL;
                b.id = a;
                y(b)
            };
            this.loadRawTorrent = function(a, b) {
                "object" !== typeof b && (b = {});
                Wa = null;
                b.type = oa.TORRENT_RAW;
                b.id = a;
                y(b)
            };
            this.loadUrl = this.loadDirectUrl = function(a, b) {
                "object" !== typeof b && (b = {});
                Wa = null;
                b.type = oa.DIRECT_URL;
                b.id = a;
                y(b)
            };
            this.loadInfohash = function(a, b) {
                "object" !== typeof b && (b = {});
                Wa = {
                    infohash: a
                };
                b.type = oa.INFOHASH;
                b.id = a;
                y(b)
            };
            this.loadMagnet = function(a, b) {
                throw "loadMagnet() not implemented for PluginPlayer";
            };
            this.loadPlayer = this.loadContentId = function(a, b) {
                "object" !== typeof b && (b = {});
                Wa = {
                    content_id: a
                };
                b.type = oa.PLAYER_ID;
                b.id = a;
                y(b)
            };
            this.getAuthLevel = function() {
                return t()
            };
            this.state = function() {
                return v.mediaState
            };
            this.getPlayerId = function() {
                if (!K) return null;
                if (K.type == oa.PLAYER_ID) return K.id;
                if (!K.infohash) return null;
                try {
                    c("getPlayerId: infohash\x3d" + K.infohash + " d\x3d" + K.developerId + " a\x3d" + K.affiliateId + " z\x3d" + K.zoneId);
                    var a = z.qt ? l.playlistGetPlayerId(K.infohash, K.developerId, K.affiliateId, K.zoneId) : l.playlist.getPlayerId(K.infohash, K.developerId, K.affiliateId, K.zoneId);
                    c("getPlayerId: playerId\x3d" +
                        a);
                    return a
                } catch (p) {
                    return c("getPlayerId:exc: " + p), ""
                }
            };
            c("constructor: container\x3d" + d);
            d = function(b) {
                if ("string" === typeof b) {
                    b = a(b);
                    if (0 == b.length) throw "container not found";
                    b = b.get(0)
                }
                a(b).empty();
                var c = a("\x3cdiv\x3e").css({
                    position: "relative",
                    width: "100%",
                    height: "100%"
                });
                a(b).append(c);
                return c.get(0)
            }(d);
            e = b.extend({
                embedStyle: null,
                embedWaitTime: 0,
                debug: !1,
                bgColor: "000000",
                fontColor: "ffffff",
                sendOnCompleted: !1,
                jsPlayerEnabled: !1
            }, e);
            e.useInternalPlaylist = !0;
            e.liveStreamControls = !1;
            e.vars &&
                (fb = e.vars);
            "object" === typeof e.eventHandler && R.registerEventHandler(e.eventHandler);
            var Cb = b.detectPlatform();
            var Db = b.detectBrowser();
            if ("android" === Cb) return new w(d, e);
            if ("mac" === Cb) L("platform_not_supported");
            else {
                var Nb = b.detectPluginExt();
                0 == Nb.type ? (c("create proxy player"), Na = new k(d, e), h.getEngineVersionJsonP(function(a) {
                    c("init: got engine version: " + a);
                    null === a ? D.startEngine(function(a, b) {
                        b ? (e.engineRunning = !0, e.engineVersion = b, c("engine started: version\x3d" + b)) : (e.engineRunning = !1, e.engineVersion =
                            0, c("failed to start engine: " + a));
                        Na && Na.setEngineVersion(b)
                    }) : (e.engineRunning = !0, e.engineVersion = a, Na && Na.setEngineVersion(a))
                })) : Nb.enabled ? wa(Nb) : L("plugin_not_enabled")
            }
        }
    }, {
        "./AndroidPlayer.js": 59,
        "./JsPlayer.js": 60,
        "./OldUtils.js": 61,
        "./ProxyPlayer.js": 63,
        "EngineApi.js": 2,
        "Utils.js": 14,
        jquery: 53
    }],
    63: [function(d, n, t) {
        function a(a, d) {
            function n() {
                N.detachButton || (N.detachButton = w.createInstance({
                    context: N,
                    container: N.container,
                    type: "center",
                    overlays: [],
                    useTopMenu: !0
                }))
            }

            function x() {
                D.verbose("ProxyPlayer:playlistUpdated: id\x3d" +
                    N.getId() + " len\x3d" + N.playlist.length);
                0 == N.playlist.length ? N.detachButton && (N.detachButton.destroy(), N.detachButton = null) : (n(), N.detachButton.processEngineReadyQueue())
            }

            function t(a) {
                var c = b("#acestream___msg-container");
                0 == c.length ? (c = b("\x3cdiv\x3e"), c.attr("id", "acestream___msg-container"), c.css({
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    width: "100%",
                    padding: "0 16px",
                    "margin-top": "-25px",
                    height: "50px",
                    "text-align": "center",
                    "box-sizing": "border-box",
                    overflow: "visible"
                }), N.container.append(c)) : r.safeShow(c);
                c.html(a)
            }

            function C() {
                b("#acestream___msg-container").remove()
            }

            function U(a, b, d) {
                function e(c) {
                    var d = {};
                    "contentId" === a ? d.contentId = b : "transportFileUrl" === a ? d.transport_file_url = b : "infohash" === a ? d.infohash = b : "magnet" === a ? d.magnet = b : "directUrl" === a && (d.direct_url = b);
                    N.playlist.push({
                        descriptor: d,
                        title: c
                    });
                    x()
                }
                d = d || {};
                N.playlistClear();
                if (3011601 > N.engineVersion && "contentId" !== a && "transportFileUrl" !== a) throw d = "Content descriptor is not supported by old engine versions: version\x3d" + N.engineVersion +
                    " descriptor\x3d" + a, D.log(d), d;
                if (b) {
                    var n = {};
                    if ("contentId" === a) n.content_id = b;
                    else if ("transportFileUrl" === a) n.url = b;
                    else if ("infohash" === a) n.infohash = b;
                    else if ("magnet" === a) {
                        if (!c.decode(b).infoHash) {
                            t(h("Failed to parse magnet"));
                            return
                        }
                        n.magnet = b
                    } else if ("directUrl" === a) {
                        if (!/^http(s)?:\/\//.test(b)) {
                            t(h("Invalid URL"));
                            return
                        }
                        C();
                        e(d.title || "");
                        return
                    }
                    k.AWE_getMediaFiles(n, function(b, c) {
                        if (b && "object" === typeof b)
                            if (0 == Object.keys(b).length) t(h("No media files"));
                            else {
                                C();
                                for (var d in b) {
                                    e(b[d]);
                                    break
                                }
                            }
                        else D.log("loadPlayer: failed to get media files: error\x3d" + c), c ? "cannot get transport file" === c && (c = "contentId" === a ? h("Unknown Content ID") : "transportFileUrl" === a ? h("Invalid transport file URL") : "infohash" === a ? h("Unknown infohash") : "magnet" === a ? h("Unknown magnet") : "directUrl" === a ? h("Invalid content URL") : h("Unknown content descriptor")) : c = h("Failed to load content"), t(c)
                    })
                } else "contentId" === a ? t(h("Empty Content ID")) : "transportFileUrl" === a ? t(h("Empty URL")) : "infohash" === a ? t(h("Empty infohash")) :
                    "magnet" === a ? t(h("Empty magnet")) : "directUrl" === a ? t(h("Empty URL")) : t(h("Empty content descriptor"))
            }
            var N = this;
            this.gotEngineVersion = !1;
            this.detachButton = null;
            this.engineVersion = 0;
            this.id = r.guid();
            this.conf = d;
            this.container = b(a);
            this.playlist = [];
            this.timers = {};
            D.verbose("ProxyPlayer:create: id\x3d" + N.getId() + " container\x3d" + a + " conf\x3d" + JSON.stringify(d));
            e.registerPlayer(N);
            k.addHook(k.HOOK_ENGINE_REQUEST_FAILED, function(a) {
                D.log("ProxyPlayer: request failed, try to start engine: method\x3d" +
                    a);
                k.startEngine(function(a, b) {})
            });
            this.setEngineVersion = function(a) {
                D.verbose("ProxyPlayer:setEngineVersion: version\x3d" + a);
                var b = !1;
                this.engineVersion = a;
                this.gotEngineVersion = !0;
                a ? 3002800 <= a ? "function" === typeof d.onLoad && d.onLoad.call(N, N) : b = !0 : b = !0;
                w.setEngineVersion(a);
                (b || 0 < N.playlist.length) && w.processEngineReadyQueue()
            };
            this.loadTorrent = this.loadTransportFileUrl = function(a, b) {
                U("transportFileUrl", a, b)
            };
            this.loadRawTorrent = function(a, b) {
                throw "loadRawTorrent() not implemented for ProxyPlayer";
            };
            this.loadUrl = this.loadDirectUrl = function(a, b) {
                U("directUrl", a, b)
            };
            this.loadInfohash = function(a, b) {
                U("infohash", a, b)
            };
            this.loadMagnet = function(a, b) {
                U("magnet", a, b)
            };
            this.loadPlayer = this.loadContentId = function(a, b) {
                U("contentId", a, b)
            };
            this.playlistClear = function() {
                N.playlist = [];
                x()
            };
            this.registerEventHandler = function(a) {};
            this.getType = function() {
                return "ProxyPlayer"
            };
            this.getVideoAspectRatioList = function() {
                return []
            };
            this.getVideoCropList = function() {
                return []
            };
            this.getVideoSubtitleList = function() {
                return []
            };
            this.getAudioChannelList = function() {
                return []
            };
            this.getAudioTrackList = function() {
                return []
            };
            this.getVideoAspectRatio = function() {
                return 0
            };
            this.getVideoCrop = function() {
                return 0
            };
            this.getVideoSubtitle = function() {
                return 0
            };
            this.getAudioChannel = function() {
                return 0
            };
            this.getAudioTrack = function() {
                return 0
            };
            this.destroy = function() {};
            n()
        }
        var b = d("jquery"),
            k = d("EngineApi.js"),
            w = d("ui/DetachButton.js"),
            D = d("Logging.js"),
            h = d("Translate.js"),
            r = d("Utils.js");
        d("./OldUtils.js");
        var e = d("./Registry.js"),
            c = d("magnet-uri");
        a.prototype.getId = function() {
            return this.id
        };
        a.prototype.getCurrentPlaylistItem = function() {
            return 0 == this.playlist.length ? 0 : this.playlist[0]
        };
        a.prototype.getPlayerId = function() {
            return this.id
        };
        a.prototype.getTimer = function(a) {
            return this.timers[a]
        };
        a.prototype.setTimer = function(a, b) {
            this.timers[a] = b
        };
        a.prototype.clearTimer = function(a) {
            this.timers[a] && (clearTimeout(this.timers[a]), delete this.timers[a])
        };
        a.prototype.getEngineVersion = function() {
            return this.engineVersion || 0
        };
        a.prototype.getPlayerContainer =
            function() {
                return this.container
            };
        a.prototype.getContentDescriptor = function() {
            var a = this.getCurrentPlaylistItem();
            return a ? a.descriptor : null
        };
        a.prototype.getContentTitle = function() {
            var a = this.getCurrentPlaylistItem();
            return a ? a.title : null
        };
        a.prototype.getContentPoster = function() {
            return null
        };
        a.prototype.pauseOriginalPlayer = function() {
            D.verbose("ProxyPlayer:pauseOriginalPlayer")
        };
        a.prototype.showPlayerStartingMessage = function() {
            D.verbose("ProxyPlayer:showPlayerStartingMessage");
            self.detachButton.showPlayerStartingMessage()
        };
        n.exports = a
    }, {
        "./OldUtils.js": 61,
        "./Registry.js": 64,
        "EngineApi.js": 2,
        "Logging.js": 6,
        "Translate.js": 13,
        "Utils.js": 14,
        jquery: 53,
        "magnet-uri": 54,
        "ui/DetachButton.js": 37
    }],
    64: [function(d, n, t) {
        var a = {};
        n.exports = {
            registerPlayer: function(b) {
                a[b.getId()] = b
            },
            findPlayer: function(b) {
                return a[b]
            }
        }
    }, {}],
    65: [function(d, n, t) {
        function a() {
            D.updateValues([k.VAR_REMEMBER_PLAYER_STATE, k.VAR_SELECTED_PLAYER])
        }
        var b = d("Logging.js"),
            k = d("Settings.js"),
            w = d("PlayerSettings.js"),
            D = d("Storage.js"),
            h = d("Utils.js"),
            r = d("./PluginPlayer.js"),
            e = d("./Registry.js");
        d = d("./version.js");
        b.setVerbose(!0);
        k.set("OPEN_POPUPS_FROM_USERSCRIPT", !0);
        k.set("USE_TOP_MENU", !0);
        k.set("USE_USERSCRIPT_STORAGE", !0);
        k.set("MIN_SUPPORTED_ENGINE_VERSION", 3010601);
        b.verbose("Loading Ace Stream JS Library version " + d);
        window.addEventListener("message", function(a) {
            if (a.data.acestream) {
                a = a.data.acestream;
                var c = a.msg,
                    d = a.params || {};
                if (a.frameId === h.getFrameId()) b.verbose("jsapi: skip frame message from self: msg\x3d" + c);
                else if (b.verbose("jsapi: got frame message: payload\x3d" +
                        JSON.stringify(a)), "x-acestream-response" === c) h.gotFrameResponse(d.messageId, d.response);
                else if ("external-player-started" === c) {
                    if (d.playerId) {
                        var k = e.findPlayer(d.playerId);
                        k && (k.pauseOriginalPlayer(), k.showPlayerStartingMessage())
                    }
                } else if ("clear-remembered-player" === c) b.verbose("jsapi: clear remembered player"), w.clearRememberedPlayer({
                    localOnly: !0
                });
                else if ("remember-player" === c) b.verbose("jsapi: remember player: params\x3d" + JSON.stringify(d)), w.rememberPlayer(d.playerId, d.playerType, {
                    localOnly: !0
                });
                else if ("storage-client-update-values" === c)
                    for (k in d.values) D.setValue(k, d.values[k], {
                        localOnly: !0
                    });
                else b.verbose("jsapi: unknown message: " + c)
            }
        }, !1);
        setTimeout(a, 1E3);
        setTimeout(a, 5E3);
        window.AceStream = {
            VERSION: d,
            dumpLogs: b.dumpLogs,
            createPlayer: function(a, b) {
                new r(a, b)
            }
        }
    }, {
        "./PluginPlayer.js": 62,
        "./Registry.js": 64,
        "./version.js": 66,
        "Logging.js": 6,
        "PlayerSettings.js": 8,
        "Settings.js": 10,
        "Storage.js": 11,
        "Utils.js": 14
    }],
    66: [function(d, n, t) {
        n.exports = "1.0.1"
    }, {}]
}, {}, [65]);
