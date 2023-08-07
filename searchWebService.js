"use strict";
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFics = void 0;
var puppeteer_extra_1 = require("puppeteer-extra");
var puppeteer_jquery_1 = require("puppeteer-jquery");
var puppeteer_extra_plugin_stealth_1 = require("puppeteer-extra-plugin-stealth");
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
var GetFics = /** @class */ (function () {
    function GetFics() {
    }
    GetFics.prototype.getFandoms = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var browser, page, pageJQ, preliminaryAO3, fs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(text === null || text === void 0 ? void 0 : text.length)) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, puppeteer_extra_1.default.launch()];
                    case 1:
                        browser = _a.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _a.sent();
                        pageJQ = (0, puppeteer_jquery_1.pageExtend)(page);
                        preliminaryAO3 = 'https://archiveofourown.org/works/search';
                        return [4 /*yield*/, pageJQ.goto(preliminaryAO3)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, pageJQ.type('#work_search_fandom_names_autocomplete', text)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, pageJQ.waitForjQuery("p:contains('No suggestions found'), #new_work_search > fieldset:nth-child(2) > dl > dd:nth-child(2) > ul > li > div > ul")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, pageJQ.$$('#new_work_search > fieldset:nth-child(2) > dl > dd:nth-child(2) > ul > li > div > ul > li')];
                    case 6:
                        fs = _a.sent();
                        return [2 /*return*/, Promise.all(fs.map(function (f) { return __awaiter(_this, void 0, void 0, function () {
                                var ff;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, (f === null || f === void 0 ? void 0 : f.getProperty('textContent'))];
                                        case 1:
                                            ff = _a.sent();
                                            return [2 /*return*/, ff === null || ff === void 0 ? void 0 : ff.toString().slice(9)];
                                    }
                                });
                            }); }))];
                }
            });
        });
    };
    GetFics.prototype.getTags = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var browser, page, pageJQ, preliminaryAO3, fs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(text === null || text === void 0 ? void 0 : text.length)) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, puppeteer_extra_1.default.launch()];
                    case 1:
                        browser = _a.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _a.sent();
                        pageJQ = (0, puppeteer_jquery_1.pageExtend)(page);
                        preliminaryAO3 = 'https://archiveofourown.org/works/search';
                        return [4 /*yield*/, pageJQ.goto(preliminaryAO3)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, pageJQ.type('#work_search_freeform_names_autocomplete', text)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, pageJQ.waitForjQuery("p:contains('No suggestions found'), #new_work_search > fieldset:nth-child(2) > dl > dd:nth-child(14) > ul > li > div > ul")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, pageJQ.$$('#new_work_search > fieldset:nth-child(2) > dl > dd:nth-child(14) > ul > li > div > ul > li')];
                    case 6:
                        fs = _a.sent();
                        return [2 /*return*/, Promise.all(fs.map(function (f) { return __awaiter(_this, void 0, void 0, function () {
                                var ff;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, (f === null || f === void 0 ? void 0 : f.getProperty('textContent'))];
                                        case 1:
                                            ff = _a.sent();
                                            return [2 /*return*/, ff === null || ff === void 0 ? void 0 : ff.toString().slice(9)];
                                    }
                                });
                            }); }))];
                }
            });
        });
    };
    GetFics.prototype.getChars = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var browser, page, pageJQ, preliminaryAO3, fs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(text === null || text === void 0 ? void 0 : text.length)) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, puppeteer_extra_1.default.launch()];
                    case 1:
                        browser = _a.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _a.sent();
                        pageJQ = (0, puppeteer_jquery_1.pageExtend)(page);
                        preliminaryAO3 = 'https://archiveofourown.org/works/search';
                        return [4 /*yield*/, pageJQ.goto(preliminaryAO3)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, pageJQ.type('#work_search_character_names_autocomplete', text)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, pageJQ.waitForjQuery("p:contains('No suggestions found'), #new_work_search > fieldset:nth-child(2) > dl > dd:nth-child(10) > ul > li > div > ul")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, pageJQ.$$('#new_work_search > fieldset:nth-child(2) > dl > dd:nth-child(10) > ul > li > div > ul > li')];
                    case 6:
                        fs = _a.sent();
                        return [2 /*return*/, Promise.all(fs.map(function (f) { return __awaiter(_this, void 0, void 0, function () {
                                var ff;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, (f === null || f === void 0 ? void 0 : f.getProperty('textContent'))];
                                        case 1:
                                            ff = _a.sent();
                                            return [2 /*return*/, ff === null || ff === void 0 ? void 0 : ff.toString().slice(9)];
                                    }
                                });
                            }); }))];
                }
            });
        });
    };
    GetFics.prototype.getRels = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var browser, page, pageJQ, preliminaryAO3, fs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(text === null || text === void 0 ? void 0 : text.length)) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, puppeteer_extra_1.default.launch()];
                    case 1:
                        browser = _a.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _a.sent();
                        pageJQ = (0, puppeteer_jquery_1.pageExtend)(page);
                        preliminaryAO3 = 'https://archiveofourown.org/works/search';
                        return [4 /*yield*/, pageJQ.goto(preliminaryAO3)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, pageJQ.type('#work_search_relationship_names_autocomplete', text)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, pageJQ.waitForjQuery("p:contains('No suggestions found'), #new_work_search > fieldset:nth-child(2) > dl > dd:nth-child(12) > ul > li > div > ul")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, pageJQ.$$('#new_work_search > fieldset:nth-child(2) > dl > dd:nth-child(12) > ul > li > div > ul > li')];
                    case 6:
                        fs = _a.sent();
                        return [2 /*return*/, Promise.all(fs.map(function (f) { return __awaiter(_this, void 0, void 0, function () {
                                var ff;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, (f === null || f === void 0 ? void 0 : f.getProperty('textContent'))];
                                        case 1:
                                            ff = _a.sent();
                                            return [2 /*return*/, ff === null || ff === void 0 ? void 0 : ff.toString().slice(9)];
                                    }
                                });
                            }); }))];
                }
            });
        });
    };
    GetFics.prototype.sanitizeString = function (str) {
        str = str.replace(/[^a-z0-9áéíóúñü\-\"?!'., \.,_-]/gim, "");
        return str.trim();
    };
    GetFics.prototype.getFicText = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var browser, page, delay, caution, entire, err_1, chapters, full, _i, chapters_1, c, textField, text, _a, textField_1, s, sText, textField, text, full, _b, textField_2, s, sText;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, puppeteer_extra_1.default.launch()];
                    case 1:
                        browser = _c.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _c.sent();
                        return [4 /*yield*/, page.goto(url)];
                    case 3:
                        _c.sent();
                        delay = function (milliseconds) { return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); }); };
                        // await delay(2000);
                        // await page.waitForSelector('#tos_agree', { timeout: 2000 });
                        // try {
                        //   await page.click('#tos_agree');
                        // } catch (err) { }
                        // await delay(300);
                        // await page.waitForSelector('#accept_tos', { timeout: 200 });
                        // try {
                        //   await page.click('#accept_tos');
                        // } catch (err) { }
                        return [4 /*yield*/, delay(100)];
                    case 4:
                        // await delay(2000);
                        // await page.waitForSelector('#tos_agree', { timeout: 2000 });
                        // try {
                        //   await page.click('#tos_agree');
                        // } catch (err) { }
                        // await delay(300);
                        // await page.waitForSelector('#accept_tos', { timeout: 200 });
                        // try {
                        //   await page.click('#accept_tos');
                        // } catch (err) { }
                        _c.sent();
                        return [4 /*yield*/, page.$('p.caution')];
                    case 5:
                        caution = _c.sent();
                        return [4 /*yield*/, delay(100)];
                    case 6:
                        _c.sent();
                        if (!caution) return [3 /*break*/, 8];
                        return [4 /*yield*/, page.click('#main > ul > li:nth-child(1)')];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8: return [4 /*yield*/, delay(200)];
                    case 9:
                        _c.sent();
                        return [4 /*yield*/, page.$('li.chapter.entire')];
                    case 10:
                        entire = _c.sent();
                        return [4 /*yield*/, delay(200)];
                    case 11:
                        _c.sent();
                        if (!entire) return [3 /*break*/, 27];
                        _c.label = 12;
                    case 12:
                        _c.trys.push([12, 14, , 15]);
                        return [4 /*yield*/, page.click('li.chapter.entire')];
                    case 13:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 14:
                        err_1 = _c.sent();
                        return [3 /*break*/, 15];
                    case 15:
                        console.log("Pressed");
                        return [4 /*yield*/, delay(1500)];
                    case 16:
                        _c.sent();
                        return [4 /*yield*/, page.$$('div#chapters > .chapter')];
                    case 17:
                        chapters = _c.sent();
                        console.log("Chapters fetched:", chapters.length);
                        full = [];
                        _i = 0, chapters_1 = chapters;
                        _c.label = 18;
                    case 18:
                        if (!(_i < chapters_1.length)) return [3 /*break*/, 26];
                        c = chapters_1[_i];
                        return [4 /*yield*/, c.$$("div[role=article] > p")];
                    case 19:
                        textField = _c.sent();
                        text = void 0;
                        text = [];
                        _a = 0, textField_1 = textField;
                        _c.label = 20;
                    case 20:
                        if (!(_a < textField_1.length)) return [3 /*break*/, 24];
                        s = textField_1[_a];
                        return [4 /*yield*/, s.getProperty('textContent')];
                    case 21: return [4 /*yield*/, (_c.sent()).jsonValue()];
                    case 22:
                        sText = _c.sent();
                        text.push(this.sanitizeString(sText));
                        _c.label = 23;
                    case 23:
                        _a++;
                        return [3 /*break*/, 20];
                    case 24:
                        full.push(text);
                        _c.label = 25;
                    case 25:
                        _i++;
                        return [3 /*break*/, 18];
                    case 26: return [2 /*return*/, full];
                    case 27:
                        console.log("Not pressed");
                        return [4 /*yield*/, page.$$("div[role='article'] > div > p")];
                    case 28:
                        textField = _c.sent();
                        text = void 0;
                        text = [];
                        full = [];
                        _b = 0, textField_2 = textField;
                        _c.label = 29;
                    case 29:
                        if (!(_b < textField_2.length)) return [3 /*break*/, 33];
                        s = textField_2[_b];
                        return [4 /*yield*/, s.getProperty('textContent')];
                    case 30: return [4 /*yield*/, (_c.sent()).jsonValue()];
                    case 31:
                        sText = _c.sent();
                        text.push(this.sanitizeString(sText));
                        _c.label = 32;
                    case 32:
                        _b++;
                        return [3 /*break*/, 29];
                    case 33:
                        full.push(text);
                        return [2 /*return*/, full];
                }
            });
        });
    };
    GetFics.prototype.getFictions = function (title, author, summary, characters, relationships, filterTags, fandom, fetchesNumber) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var browser, page, ao3url, delay, err_2, err_3, fics, i, err_4;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, puppeteer_extra_1.default.launch()];
                    case 1:
                        browser = _e.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _e.sent();
                        ao3url = "https://archiveofourown.org/works/search?commit=Search&work_search%5Bquery%5D=" +
                            "".concat(summary !== null && summary !== void 0 ? summary : '', "&work_search%5Btitle%5D=") +
                            "".concat(title !== null && title !== void 0 ? title : '', "&work_search%5Bcreators%5D=") +
                            "".concat(author !== null && author !== void 0 ? author : '', "&work_search%5Brevised_at%5D=&work_search%5Bcomplete%5D=&work_search%5Bcrossover%5D=&work_search%5Bsingle_chapter%5D=0&work_search%5Bword_count%5D=&work_search%5Blanguage_id%5D=&work_search%5Bfandom_names%5D=") +
                            "".concat(fandom !== null && fandom !== void 0 ? fandom : '', "&work_search%5Brating_ids%5D=&work_search%5Bcharacter_names%5D=") +
                            "".concat((_a = characters === null || characters === void 0 ? void 0 : characters.join(',')) !== null && _a !== void 0 ? _a : '', "&work_search%5Brelationship_names%5D=").concat((_c = (_b = relationships === null || relationships === void 0 ? void 0 : relationships.map(function (rel) { return encodeURIComponent(rel); })) === null || _b === void 0 ? void 0 : _b.join(',')) !== null && _c !== void 0 ? _c : '') +
                            "&work_search%5Bfreeform_names%5D=" +
                            "".concat((_d = filterTags === null || filterTags === void 0 ? void 0 : filterTags.join(',')) !== null && _d !== void 0 ? _d : '', "&work_search%5Bhits%5D=&work_search%5Bkudos_count%5D=&work_search%5Bcomments_count%5D=&work_search%5Bbookmarks_count%5D=&work_search%5Bsort_column%5D=_score&work_search%5Bsort_direction%5D=desc");
                        //const fnurl = `https://www.fanfiction.net/search/?keywords=Fire+Nation&type=story&match=any&formatid=any&sort=0&genreid1=0&genreid2=0&characterid1=0&characterid2=0&characterid3=0&characterid4=0&words=0&ready=1&categoryid=2002#`;
                        return [4 /*yield*/, page.goto(ao3url)];
                    case 3:
                        //const fnurl = `https://www.fanfiction.net/search/?keywords=Fire+Nation&type=story&match=any&formatid=any&sort=0&genreid1=0&genreid2=0&characterid1=0&characterid2=0&characterid3=0&characterid4=0&words=0&ready=1&categoryid=2002#`;
                        _e.sent();
                        delay = function (milliseconds) { return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); }); };
                        return [4 /*yield*/, delay(2000)];
                    case 4:
                        _e.sent();
                        return [4 /*yield*/, page.waitForSelector('#tos_agree', { timeout: 2000 })];
                    case 5:
                        _e.sent();
                        _e.label = 6;
                    case 6:
                        _e.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, page.click('#tos_agree')];
                    case 7:
                        _e.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        err_2 = _e.sent();
                        return [3 /*break*/, 9];
                    case 9: return [4 /*yield*/, delay(300)];
                    case 10:
                        _e.sent();
                        return [4 /*yield*/, page.waitForSelector('#accept_tos', { timeout: 200 })];
                    case 11:
                        _e.sent();
                        _e.label = 12;
                    case 12:
                        _e.trys.push([12, 14, , 15]);
                        return [4 /*yield*/, page.click('#accept_tos')];
                    case 13:
                        _e.sent();
                        return [3 /*break*/, 15];
                    case 14:
                        err_3 = _e.sent();
                        return [3 /*break*/, 15];
                    case 15:
                        fics = [];
                        i = 0;
                        _e.label = 16;
                    case 16:
                        if (!(i < fetchesNumber)) return [3 /*break*/, 22];
                        //await page.waitForSelector('.next');
                        return [4 /*yield*/, this.fetchFictions(fics, page)];
                    case 17:
                        //await page.waitForSelector('.next');
                        _e.sent();
                        _e.label = 18;
                    case 18:
                        _e.trys.push([18, 20, , 21]);
                        return [4 /*yield*/, page.click('.next')];
                    case 19:
                        _e.sent();
                        return [3 /*break*/, 21];
                    case 20:
                        err_4 = _e.sent();
                        return [3 /*break*/, 21];
                    case 21:
                        i++;
                        return [3 /*break*/, 16];
                    case 22: return [4 /*yield*/, browser.close()];
                    case 23:
                        _e.sent();
                        return [2 /*return*/, fics];
                }
            });
        });
    };
    GetFics.prototype.fetchFictions = function (fics, page) {
        return __awaiter(this, void 0, void 0, function () {
            var nodes, _i, nodes_1, node, id, heading, name_1, link, creator, creator_1, sumsec, sum, tags, ftags, _a, tags_1, tag, tagName, _b, sumsec_1, s, sText, fanfiction, Exception_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, page.$$("li[role='article']")];
                    case 1:
                        nodes = _c.sent();
                        _i = 0, nodes_1 = nodes;
                        _c.label = 2;
                    case 2:
                        if (!(_i < nodes_1.length)) return [3 /*break*/, 29];
                        node = nodes_1[_i];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 27, , 28]);
                        return [4 /*yield*/, node.getProperty('id')];
                    case 4: return [4 /*yield*/, (_c.sent()).jsonValue()];
                    case 5:
                        id = _c.sent();
                        return [4 /*yield*/, page.$$("#".concat(id, " > div > h4 > a"))];
                    case 6:
                        heading = _c.sent();
                        return [4 /*yield*/, heading[0].getProperty('textContent')];
                    case 7: return [4 /*yield*/, (_c.sent()).jsonValue()];
                    case 8:
                        name_1 = _c.sent();
                        return [4 /*yield*/, heading[0].getProperty('href')];
                    case 9: return [4 /*yield*/, (_c.sent()).jsonValue()];
                    case 10:
                        link = _c.sent();
                        if (!(heading.length == 2)) return [3 /*break*/, 13];
                        return [4 /*yield*/, heading[1].getProperty('textContent')];
                    case 11: return [4 /*yield*/, (_c.sent()).jsonValue()];
                    case 12:
                        creator = _c.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        creator_1 = 'Anonymous';
                        _c.label = 14;
                    case 14: return [4 /*yield*/, page.$$("#".concat(id, " > blockquote > p"))];
                    case 15:
                        sumsec = _c.sent();
                        sum = '';
                        return [4 /*yield*/, page.$$("#".concat(id, " > ul > li > a"))];
                    case 16:
                        tags = _c.sent();
                        ftags = [];
                        _a = 0, tags_1 = tags;
                        _c.label = 17;
                    case 17:
                        if (!(_a < tags_1.length)) return [3 /*break*/, 21];
                        tag = tags_1[_a];
                        return [4 /*yield*/, tag.getProperty('textContent')];
                    case 18: return [4 /*yield*/, (_c.sent()).jsonValue()];
                    case 19:
                        tagName = _c.sent();
                        ftags.push(tagName);
                        _c.label = 20;
                    case 20:
                        _a++;
                        return [3 /*break*/, 17];
                    case 21:
                        _b = 0, sumsec_1 = sumsec;
                        _c.label = 22;
                    case 22:
                        if (!(_b < sumsec_1.length)) return [3 /*break*/, 26];
                        s = sumsec_1[_b];
                        return [4 /*yield*/, s.getProperty('textContent')];
                    case 23: return [4 /*yield*/, (_c.sent()).jsonValue()];
                    case 24:
                        sText = _c.sent();
                        sum += sText;
                        _c.label = 25;
                    case 25:
                        _b++;
                        return [3 /*break*/, 22];
                    case 26:
                        fanfiction = {
                            title: name_1,
                            author: creator,
                            tags: ftags,
                            summary: sum,
                            url: link
                        };
                        fics.push(fanfiction);
                        return [3 /*break*/, 28];
                    case 27:
                        Exception_1 = _c.sent();
                        return [3 /*break*/, 28];
                    case 28:
                        _i++;
                        return [3 /*break*/, 2];
                    case 29: return [2 /*return*/];
                }
            });
        });
    };
    return GetFics;
}());
exports.GetFics = GetFics;
