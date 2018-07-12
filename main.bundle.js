webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scheduling_component__ = __webpack_require__("../../../../../src/app/scheduling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_scheduling_service__ = __webpack_require__("../../../../../src/app/service/scheduling.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__roster_roster_component__ = __webpack_require__("../../../../../src/app/roster/roster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__roster_edit_roster_edit_component__ = __webpack_require__("../../../../../src/app/roster-edit/roster-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authentication_authentication_component__ = __webpack_require__("../../../../../src/app/authentication/authentication.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__scheduling_component__["a" /* Scheduling */],
            __WEBPACK_IMPORTED_MODULE_9__calendar_calendar_component__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_10__roster_roster_component__["a" /* Roster */],
            __WEBPACK_IMPORTED_MODULE_11__roster_edit_roster_edit_component__["a" /* RosterEdit */],
            __WEBPACK_IMPORTED_MODULE_12__authentication_authentication_component__["a" /* Authentication */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__service_scheduling_service__["a" /* SchedulingService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__scheduling_component__["a" /* Scheduling */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".authentication {\r\n  background: #ffffff;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  z-index: 500;\r\n}\r\n\r\n.authenticationContent {\r\n  z-index: 600;\r\n  position: fixed;\r\n  background: #ffffff;\r\n  text-align: center;\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .authenticationContent {\r\n    top: 28%;\r\n    left: 35%;\r\n    width: 30%;\r\n    height: 44%;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .authenticationContent {\r\n    top: 5%;\r\n    left: 15px;\r\n    width: calc(100% - 30px);\r\n    height: 90%;\r\n    overflow-y: auto;\r\n  }\r\n}\r\n\r\n.authentication .authenticationContent h2 {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.passwordErrorMessage {\r\n  color: #c13232;\r\n  font-weight: bold;\r\n}\r\n\r\n.passwordChangedMessage {\r\n  color: #919149;\r\n  font-weight: bold;\r\n}\r\n\r\n.inputContainer {\r\n  text-align: left;\r\n  width: 50%;\r\n  position: relative;\r\n  left: 25%;\r\n  margin-top: 1%;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.inputContainer input {\r\n  padding: 10px;\r\n  width: 100%;\r\n  margin-top: 1%;\r\n}\r\n\r\n.controlBlock {\r\n  position: absolute;\r\n  bottom : 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"authenticationContent\">\r\n    <h2>{{ changing ? \"Update Password\" : \"Sign In\" }}</h2>\r\n\r\n    <div class=\"inputContainer\">\r\n      <label *ngIf=\"!changing\">Password</label>\r\n      <label *ngIf=\"changing\">Current Password</label>\r\n      <input type=\"password\" autocomplete=\"current-password\" placeholder=\"Password\" autofocus [(ngModel)]=\"password\"/>\r\n    </div>\r\n    <div class=\"inputContainer\">\r\n      <label *ngIf=\"changing\">New Password</label>\r\n      <input id=\"newPassword\" *ngIf=\"changing\" type=\"password\" autocomplete=\"new-password\" placeholder=\"New Password\" [(ngModel)]=\"newPassword\"/>\r\n    </div>\r\n\r\n    <div class=\"passwordErrorMessage\" *ngIf=\"passwordErrorMessage\">Password is incorrect.</div>\r\n    <div class=\"passwordChangedMessage\" *ngIf=\"passwordChangedMessage\">Password has been updated.</div>\r\n\r\n    <div class=\"controlBlock\">\r\n      <button class=\"secondaryButton\" (click)=\"toggleChange()\">{{ changing ? \"Back\" : \"Update Password\" }}</button>\r\n      <button (click)=\"cancel()\">Cancel</button>\r\n      <button *ngIf=\"changing\" (click)=\"changePw()\">Update</button>\r\n      <button *ngIf=\"!changing\" (click)=\"logIn()\">Sign In</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authentication; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_scheduling_service__ = __webpack_require__("../../../../../src/app/service/scheduling.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Authentication = (function () {
    function Authentication(schedulingService) {
        this.schedulingService = schedulingService;
        this.onHideAuth = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onToggleLock = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onPasswordChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.changing = false;
        this.passwordErrorMessage = false;
        this.passwordChangedMessage = false;
        this.password = '';
        this.newPassword = '';
    }
    /*
     * Toggles form fields to allow the user to
     * change their password.
     *
     * @return none
     */
    Authentication.prototype.toggleChange = function () {
        this.resetMessages();
        this.changing = !this.changing;
        this.password = '';
        this.newPassword = '';
    };
    /*
     * Hides the authentication modal.
     *
     * @return none
     */
    Authentication.prototype.cancel = function () {
        this.onHideAuth.emit();
    };
    /*
     * Handles a change password request.
     *
     * @return none
     */
    Authentication.prototype.changePw = function () {
        this.resetMessages();
        this.schedulingService.getPassword().then(function (password) {
            if (password === this.password) {
                this.onPasswordChanged.emit(this.newPassword);
                this.toggleChange();
                this.passwordChangedMessage = true;
            }
            else {
                this.passwordErrorMessage = true;
            }
        }.bind(this));
    };
    /*
     * Handles a log in request.
     *
     * @return none
     */
    Authentication.prototype.logIn = function () {
        this.resetMessages();
        this.schedulingService.getPassword().then(function (password) {
            if (password === this.password) {
                this.onToggleLock.emit();
                this.onHideAuth.emit();
            }
            else {
                this.passwordErrorMessage = true;
            }
        }.bind(this));
    };
    /*
     * Hides password related messages.
     *
     * @return none
     */
    Authentication.prototype.resetMessages = function () {
        this.passwordErrorMessage = false;
        this.passwordChangedMessage = false;
    };
    return Authentication;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Authentication.prototype, "locked", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], Authentication.prototype, "onHideAuth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], Authentication.prototype, "onToggleLock", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], Authentication.prototype, "onPasswordChanged", void 0);
Authentication = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'authentication',
        template: __webpack_require__("../../../../../src/app/authentication/authentication.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/authentication.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_scheduling_service__["a" /* SchedulingService */]]
    })
    /*
     * This class provides a modal that allows a user
     * to authenticate themselves as well as change their
     * password.
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_scheduling_service__["a" /* SchedulingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_scheduling_service__["a" /* SchedulingService */]) === "function" && _a || Object])
], Authentication);

var _a;
//# sourceMappingURL=authentication.component.js.map

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".calendar {\r\n  background-color: #ffffff;\r\n  display: inline-block;\r\n  z-index: 300;\r\n  position: relative;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n .calendar {\r\n    width: 100%;\r\n    box-shadow: 0px 2px 5px #aaa;\r\n  }\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .calendar {\r\n    width: 49%;\r\n    box-shadow: 5px 5px 5px #aaa;\r\n  }\r\n}\r\n\r\n.selected {\r\n  color: #de1f1f;\r\n  background-color: #f1f1f1;\r\n  font-weight: bold;\r\n}\r\n\r\n.day.hidden {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.monthHeader {\r\n  font-size: 30px;\r\n  width: 100%;\r\n  text-align: center;\r\n  margin: 20px 0;\r\n}\r\n\r\n.month {\r\n  font-weight: bold;\r\n}\r\n\r\n.monthBack {\r\n  color: #555;\r\n  padding-right: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.monthAhead {\r\n  color: #555;\r\n  padding-left: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.calendarGrid {\r\n  width: 100%;\r\n}\r\n\r\n.dayHeader {\r\n  text-align: center;\r\n}\r\n\r\n.day {\r\n  border: 1px solid #ececec;\r\n  text-align: center;\r\n  height: 50px;\r\n  width: 14%;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .day .warning {\r\n    width: 13%;\r\n    position: absolute;\r\n    top: 10%;\r\n    right: 5%;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .day .warning {\r\n    width: 20%;\r\n    position: absolute;\r\n    top: 5%;\r\n    right: 5%;\r\n  }\r\n}\r\n\r\n.day.hidden.warning {\r\n  background: transparent;\r\n}\r\n\r\n.empty {\r\n  border: 1px solid transparent;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar\">\r\n  <div class=\"monthHeader\">\r\n    <span class=\"monthBack\" (click)=\"decrementMonth()\">&lt;</span>\r\n    <span class=\"month\">{{ monthNames[month] }} {{ showYear() ? year : '' }}</span>\r\n    <span class=\"monthAhead\" (click)=\"incrementMonth()\">&gt;</span>\r\n  </div>\r\n  <table class=\"calendarGrid\">\r\n    <thead>\r\n      <tr>\r\n        <td class=\"dayHeader\">Sun</td>\r\n        <td class=\"dayHeader\">Mon</td>\r\n        <td class=\"dayHeader\">Tue</td>\r\n        <td class=\"dayHeader\">Wed</td>\r\n        <td class=\"dayHeader\">Thu</td>\r\n        <td class=\"dayHeader\">Fri</td>\r\n        <td class=\"dayHeader\">Sat</td>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let week of monthArray\">\r\n        <ng-container *ngFor=\"let currentDay of week\">\r\n          <td class=\"day\" (click)=\"updateDay(currentDay)\" [class.selected]=\"currentDay == day\" [class.hidden]=\"currentDay == ''\" title=\"{{ !monthOverview[currentDay-1] ? 'Still need volunteers.' : 'All positions filled.' }}\">\r\n            <span>{{ currentDay > 0 ? currentDay : \"\" }}</span>\r\n            <img *ngIf=\"!monthOverview[currentDay-1] && currentDay != ''\" class=\"warning\" src=\"./assets/warning-grey.png\" />\r\n          </td>\r\n        </ng-container>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"controlBlock\">\r\n    <button (click)=\"goToToday()\">Go To Today</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Calendar = (function () {
    function Calendar() {
        this.onDayChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onMonthChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onYearChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.monthArray = [];
    }
    /*
     * Returns a boolean indicating if the current
     * year is a leap year.
     *
     * @return Boolean
     */
    Calendar.prototype.isLeapYear = function () {
        if (parseInt(this.year, 10) % 100 === 0 && parseInt(this.year, 10) % 400 === 0) {
            return true;
        }
        else if (parseInt(this.year, 10) % 4 === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    /*
     * Generates an array of arrays to represent the current month.
     * Array elements that are not part of the working month are
     * set to zero.
     *
     * @return none
     */
    Calendar.prototype.generateCalendar = function () {
        var monthStart = new Date(this.year, this.month, 1);
        var lengths = {
            "0": 31,
            "1": (this.isLeapYear() ? 29 : 28),
            "2": 31,
            "3": 30,
            "4": 31,
            "5": 30,
            "6": 31,
            "7": 31,
            "8": 30,
            "9": 31,
            "10": 30,
            "11": 31
        };
        var monthArray = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
        var counter = 1;
        for (var weekCounter = 0; weekCounter < monthArray.length; weekCounter++) {
            for (var dayOfWeekCounter = 0; dayOfWeekCounter < monthArray[0].length; dayOfWeekCounter++) {
                if (weekCounter === 0 && dayOfWeekCounter < monthStart.getDay()) {
                    continue;
                }
                if (counter <= lengths[this.month]) {
                    monthArray[weekCounter][dayOfWeekCounter] = counter;
                    counter++;
                }
            }
        }
        this.monthArray = monthArray;
    };
    /*
     * Sets the working day to the given day.
     *
     * @param day - the day to set
     * @return none
     */
    Calendar.prototype.updateDay = function (day) {
        if (day !== 0) {
            this.day = day;
            this.onDayChanged.emit(day);
        }
    };
    /*
     * Sets the working month to the previous month.
     * Won't allow going to months prior to the current month.
     *
     * @return none
     */
    Calendar.prototype.decrementMonth = function () {
        if (this.month == new Date().getMonth() && this.year == new Date().getFullYear()) {
            return;
        }
        else if (this.month == 0) {
            this.month = 11;
            this.year--;
        }
        else {
            this.month--;
        }
        if (this.month == new Date().getMonth() && this.year == new Date().getFullYear()) {
            this.day = new Date().getDate();
        }
        else {
            this.day = 1;
        }
        this.updateView();
    };
    Calendar.prototype.incrementMonth = function () {
        if (this.month == 11) {
            this.month = 0;
            this.year++;
        }
        else {
            this.month++;
        }
        if (this.month == new Date().getMonth() && this.year == new Date().getFullYear()) {
            this.day = new Date().getDate();
        }
        else {
            this.day = 1;
        }
        this.updateView();
    };
    Calendar.prototype.showYear = function () {
        if (this.year === new Date().getFullYear()) {
            return false;
        }
        else {
            return true;
        }
    };
    Calendar.prototype.goToToday = function () {
        var date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.day = date.getDate();
        this.updateView();
    };
    Calendar.prototype.updateView = function () {
        this.onDayChanged.emit(this.day);
        this.onMonthChanged.emit(this.month);
        this.onYearChanged.emit(this.year);
        this.generateCalendar();
    };
    Calendar.prototype.ngOnInit = function () {
        this.generateCalendar();
    };
    return Calendar;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Calendar.prototype, "year", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Calendar.prototype, "month", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Calendar.prototype, "day", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Calendar.prototype, "monthOverview", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], Calendar.prototype, "onDayChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], Calendar.prototype, "onMonthChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], Calendar.prototype, "onYearChanged", void 0);
Calendar = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'calendar',
        template: __webpack_require__("../../../../../src/app/calendar/calendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/calendar/calendar.component.css")]
    })
    /*
     * This class provides a calendar interface that allows
     * access to the current month and future months.
     */
], Calendar);

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/roster-edit/roster-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rosterEdit {\r\n  background: #ffffff;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  z-index: 500;\r\n}\r\n\r\n.rosterEditContent {\r\n  z-index: 600;\r\n  position: fixed;\r\n  background: #ffffff;\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .rosterEditContent {\r\n    top: 10%;\r\n    left: 20%;\r\n    width: 60%;\r\n    height: 80%;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .rosterEditContent {\r\n    top: 5%;\r\n    left: 15px;\r\n    width: calc(100% - 30px);\r\n    height: 90%;\r\n    overflow-y: auto;\r\n  }\r\n}\r\n\r\n.rosterEdit .rosterEditContent h2 {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .formOverflow {\r\n    overflow-y: auto;\r\n    height: 80%;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .formOverflow {\r\n    overflow-y: auto;\r\n    height: 60%;\r\n  }\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .formSection {\r\n    padding: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .formSection {\r\n    padding: 10px 20px;\r\n  }\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .formSection .title {\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .formSection .title {\r\n    margin-bottom: 5px;\r\n  }\r\n}\r\n\r\n.formSection.name input {\r\n  width: calc(100% - 20px);\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n  border: 1px solid #aaa;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  input[type=\"radio\"] +label {\r\n    padding: 20px;\r\n    border: 1px solid #aaa;\r\n    display: inline-block;\r\n    width: calc(33% - 45px);\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  input[type=\"radio\"] +label {\r\n    padding: 10px;\r\n    border: 1px solid #aaa;\r\n    display: inline-block;\r\n    width: calc(33% - 25px);\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\ninput[type=\"radio\"] +label:hover {\r\n  background: #d2d2b4;\r\n}\r\n\r\ninput[type=\"radio\"]:checked +label {\r\n  background: #919149;\r\n  color: white;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  border-color: #000;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  input[type=\"radio\"]:checked +label {\r\n    letter-spacing: 0px;\r\n  }\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .formSection.time br {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .formSection.time br {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .formSection.position input[type=\"radio\"] +label {\r\n    width: calc(50% - 45px);\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .formSection.position input[type=\"radio\"] +label {\r\n    width: calc(50% - 25px);\r\n  }\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .formSection.position .positionAfter {\r\n    margin-top: 40px;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .formSection.position .positionAfter {\r\n    margin-top: 20px;\r\n  }\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .controlBlock {\r\n    position: relative;\r\n    bottom: 0;\r\n    border-top: 1px solid #aaa;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .controlBlock {\r\n    position: absolute;\r\n    bottom: 0;\r\n    border-top: 1px solid #aaa;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/roster-edit/roster-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"rosterEdit\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"rosterEditContent\">\r\n    <h2>Sign Up</h2>\r\n\r\n    <div class=\"formOverflow\">\r\n\r\n      <div class=\"formSection name\">\r\n        <div class=\"title\">Name</div>\r\n        <input type=\"text\" [(ngModel)]=\"name\" autocomplete=\"name\" />\r\n      </div>\r\n      <div class=\"form\">\r\n        <div class=\"formSection time\">\r\n          <div class=\"title\">Time</div>\r\n          <input type=\"radio\" name=\"time\" id=\"time-before\" checked [(ngModel)]=\"when\" value=\"BEFORE\" /><label for=\"time-before\">Before Service</label>\r\n          <input type=\"radio\" name=\"time\" id=\"time-after\" [(ngModel)]=\"when\" value=\"AFTER\"/><label for=\"time-after\">After<br> Service</label>\r\n          <input type=\"radio\" name=\"time\" id=\"time-both\" [(ngModel)]=\"when\" value=\"BOTH\"/><label for=\"time-both\">Before & After</label>\r\n        </div>\r\n\r\n        <div class=\"formSection position\" *ngIf=\"when != 'BOTH'\">\r\n          <div class=\"title\">Position</div>\r\n          <input type=\"radio\" name=\"role1\" id=\"role-range\" checked [(ngModel)]=\"role1\" value=\"RANGE\" />\r\n          <label for=\"role-range\">\r\n            <table>\r\n              <tr>\r\n                <td style=\"width:40%\"><img class=\"smallIcon\" src=\"{{ role1 === 'RANGE' ? './assets/target-white.png' : './assets/target.png' }}\" /></td>\r\n                <td>Range Captain</td>\r\n              </tr>\r\n            </table>\r\n          </label>\r\n\r\n          <input type=\"radio\" name=\"role1\" id=\"role-desk\" [(ngModel)]=\"role1\" value=\"DESK\" />\r\n          <label for=\"role-desk\">\r\n            <table>\r\n              <tr>\r\n                <td style=\"width:40%\"><img class=\"smallIcon\" src=\"{{ role1 === 'DESK' ? './assets/pen-white.png' : './assets/pen.png' }}\" /></td>\r\n                <td>Check In Desk</td>\r\n              </tr>\r\n            </table>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"formSection position\" *ngIf=\"when == 'BOTH'\">\r\n          <div class=\"title\">Position Before</div>\r\n          <input type=\"radio\" name=\"role1\" id=\"role1-range\" checked [(ngModel)]=\"role1\" value=\"RANGE\" />\r\n          <label for=\"role1-range\">\r\n            <table>\r\n              <tr>\r\n                <td style=\"width:40%\"><img class=\"smallIcon\" src=\"{{ role1 === 'RANGE' ? './assets/target-white.png' : './assets/target.png' }}\" /></td>\r\n                <td>Range Captain</td>\r\n              </tr>\r\n            </table>\r\n          </label>\r\n\r\n          <input type=\"radio\" name=\"role1\" id=\"role1-desk\" [(ngModel)]=\"role1\" value=\"DESK\" />\r\n          <label for=\"role1-desk\">\r\n            <table>\r\n              <tr>\r\n                <td style=\"width:40%\"><img class=\"smallIcon\" src=\"{{ role1 === 'DESK' ? './assets/pen-white.png' : './assets/pen.png' }}\" /></td>\r\n                <td>Check In Desk</td>\r\n              </tr>\r\n            </table>\r\n          </label>\r\n\r\n          <div class=\"title positionAfter\" >Position After</div>\r\n          <input type=\"radio\" name=\"role2\" id=\"role2-range\" checked [(ngModel)]=\"role2\" value=\"RANGE\" />\r\n          <label for=\"role2-range\">\r\n            <table>\r\n              <tr>\r\n                <td style=\"width:40%\"><img class=\"smallIcon\" src=\"{{ role2 === 'RANGE' ? './assets/target-white.png' : './assets/target.png' }}\" /></td>\r\n                <td>Range Captain</td>\r\n              </tr>\r\n            </table>\r\n          </label>\r\n\r\n          <input type=\"radio\" name=\"role2\" id=\"role2-desk\" [(ngModel)]=\"role2\" value=\"DESK\" />\r\n          <label for=\"role2-desk\">\r\n            <table>\r\n              <tr>\r\n                <td style=\"width:40%\"><img class=\"smallIcon\" src=\"{{ role2 === 'DESK' ? './assets/pen-white.png' : './assets/pen.png' }}\" /></td>\r\n                <td>Check In Desk</td>\r\n              </tr>\r\n            </table>\r\n          </label>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"controlBlock\">\r\n      <button (click)=\"cancel()\" class=\"secondaryButton\">Cancel</button>\r\n      <button (click)=\"save()\">Save</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/roster-edit/roster-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RosterEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RosterEdit = (function () {
    function RosterEdit() {
        this.onAddVolunteer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onHideEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.name = '';
        this.when = 'BEFORE';
        this.role1 = 'RANGE';
        this.role2 = 'DESK';
    }
    RosterEdit.prototype.save = function () {
        if (!this.name) {
            alert('Name is required.');
            return;
        }
        var person = {
            'name': this.name,
            'when': this.when,
            'role1': this.role1,
            'role2': this.role2,
            'selected': false
        };
        window.localStorage.setItem('name', this.name);
        this.onAddVolunteer.emit(JSON.stringify(person));
        this.onHideEdit.emit();
    };
    RosterEdit.prototype.cancel = function () {
        this.onHideEdit.emit();
    };
    RosterEdit.prototype.ngOnInit = function () {
        if (localStorage.getItem('name')) {
            this.name = localStorage.getItem('name');
        }
    };
    return RosterEdit;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], RosterEdit.prototype, "onAddVolunteer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], RosterEdit.prototype, "onHideEdit", void 0);
RosterEdit = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'roster-edit',
        template: __webpack_require__("../../../../../src/app/roster-edit/roster-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/roster-edit/roster-edit.component.css")]
    })
], RosterEdit);

//# sourceMappingURL=roster-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/roster/roster.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".unavailable {\r\n  text-decoration: line-through;\r\n  color: #aaaaaa;\r\n}\r\n\r\n.locked {\r\n  cursor: default;\r\n}\r\n\r\n.opacity {\r\n  opacity: .5;\r\n}\r\n\r\n.centerText {\r\n  text-align: center;\r\n}\r\n\r\n.roster {\r\n  display: inline-block;\r\n  right: 0;\r\n  position: absolute;\r\n  background: #ffffff;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n .roster {\r\n   width: 100%;\r\n }\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .roster {\r\n    width: 49%;\r\n    box-shadow: -5px 5px 5px #aaa;\r\n    height: calc(100% - 175px);\r\n  }\r\n}\r\n\r\n\r\n.roster header {\r\n  width: 100%;\r\n  text-align: center\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .roster header {\r\n    margin: 12px 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .roster h2 {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .roster h2 {\r\n    display: inline-block;\r\n  }\r\n}\r\n\r\n.lockIcon {\r\n  width: 25px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .lockIcon {\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .lockIcon {\r\n    left: 10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  ul {\r\n    height: calc(100% - 150px);\r\n    overflow-y: auto;\r\n  }\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n  width: calc(100% - 50px);\r\n  border-bottom: 1px solid #ececec;\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  li {\r\n    padding: 25px;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  li {\r\n    padding: 20px 25px;\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\nli:first-child {\r\n  border-top: 1px solid #ececec;\r\n}\r\n\r\nli:not(.locked):hover {\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n.roster table {\r\n  width: 100%;\r\n}\r\n\r\nli:not(.locked):hover .smallIcon.reduced {\r\n  opacity: .5;\r\n}\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.smallIcon.reduced {\r\n  opacity: 0;\r\n}\r\n\r\n@media (min-width: 901px) {\r\n  .iconFiller {\r\n    width: 15px;\r\n    height: 15px;\r\n    display: inline-block;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .iconFiller {\r\n    width: 10px;\r\n    height: 10px;\r\n    display: inline-block;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/roster/roster.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"roster\">\r\n  <header>\r\n    <h2>Volunteers</h2>\r\n    <img class=\"lockIcon\" src=\"./assets/lock.png\" *ngIf=\"locked\" title=\"Scheduling is currently locked.\" />\r\n  </header>\r\n  <ul>\r\n    <div *ngIf=\"volunteers.length == 0\" class=\"opacity centerText\">\r\n      Nobody's signed up yet.\r\n    </div>\r\n    <ng-container *ngFor=\"let person of volunteers\">\r\n      <li [ngClass]=\"{'locked' : locked}\">\r\n        <table>\r\n          <tr>\r\n            <td width=\"10%\">\r\n              <span title=\"Click to deselect for work\" *ngIf=\"person.selected == true\"><img class=\"smallIcon pointer\" src=\"./assets/checkbox.png\" (click)=\"toggleWorking(person)\"/></span>\r\n              <span title=\"Click to select for work\" *ngIf=\"person.selected == false\"><img class=\"smallIcon pointer\" src=\"./assets/checkbox-empty.png\" (click)=\"toggleWorking(person)\" /></span>\r\n            </td>\r\n            <td width=\"40%\"><span>{{ person.name }}</span></td>\r\n            <td width=\"30%\">\r\n              <span *ngIf=\"person.when == 'BEFORE'\">Before Service</span>\r\n              <span *ngIf=\"person.when == 'AFTER'\">After Service</span>\r\n              <span *ngIf=\"person.when == 'BOTH'\">Before & After</span>\r\n            </td>\r\n            <td width=\"10%\" class=\"centerText\" *ngIf=\"person.when != 'BOTH'\">\r\n              <span class=\"iconFiller\" *ngIf=\"person.when == 'AFTER'\">&nbsp;</span>\r\n              <span *ngIf=\"person.role1 == 'RANGE'\" title=\"Range Captain\"><img class=\"smallIcon\" src=\"./assets/target.png\" /></span>\r\n              <span *ngIf=\"person.role1 == 'DESK'\" title=\"Check In Deck\"><img class=\"smallIcon\" src=\"./assets/pen.png\" /></span>\r\n              <span class=\"iconFiller\" *ngIf=\"person.when == 'BEFORE'\">&nbsp;</span>\r\n            </td>\r\n            <td width=\"10%\" class=\"centerText\" *ngIf=\"person.when == 'BOTH'\">\r\n              <span *ngIf=\"person.role1 == 'RANGE'\" title=\"Range Captain\"><img class=\"smallIcon\" src=\"./assets/target.png\" /></span>\r\n              <span *ngIf=\"person.role1 == 'DESK'\" title=\"Check In Deck\"><img class=\"smallIcon\" src=\"./assets/pen.png\" /></span>\r\n              <!--<span>|</span>-->\r\n              <span *ngIf=\"person.role2 == 'RANGE'\" title=\"Range Captain\"><img class=\"smallIcon\" src=\"./assets/target.png\" /></span>\r\n              <span *ngIf=\"person.role2 == 'DESK'\" title=\"Check In Deck\"><img class=\"smallIcon\" src=\"./assets/pen.png\" /></span>\r\n            </td>\r\n            <td width=\"10%\" class=\"centerText\"><span title=\"Delete\"><img class=\"smallIcon pointer\" src=\"./assets/trash.png\" (click)=\"delete(person)\"/></span></td>\r\n          </tr>\r\n        </table>\r\n      </li>\r\n    </ng-container>\r\n  </ul>\r\n  <div class=\"controlBlock\">\r\n    <button (click)=\"openAuth()\" *ngIf=\"locked\" class=\"secondaryButton\">Log In</button>\r\n    <button (click)=\"logOut()\" *ngIf=\"!locked\" class=\"secondaryButton\">Log Out</button>\r\n    <button (click)=\"edit()\">Sign Up</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/roster/roster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roster; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Roster = (function () {
    function Roster() {
        this.onWorkingChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onOpenAuth = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onToggleLock = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.availabilityList = [];
    }
    Roster.prototype.toggleWorking = function (person) {
        this.onWorkingChanged.emit(JSON.stringify(person));
    };
    Roster.prototype.delete = function (person) {
        this.onDelete.emit(JSON.stringify(person));
    };
    Roster.prototype.edit = function () {
        this.onEdit.emit();
    };
    Roster.prototype.openAuth = function () {
        this.onOpenAuth.emit(this.locked);
    };
    Roster.prototype.logOut = function () {
        this.onToggleLock.emit(this.locked);
    };
    Roster.prototype.ngOnInit = function () {
        //    this.setAvailability();
    };
    Roster.prototype.ngOnChanges = function () {
        //     this.setAvailability();
    };
    return Roster;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Roster.prototype, "volunteers", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Roster.prototype, "locked", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], Roster.prototype, "onWorkingChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], Roster.prototype, "onDelete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], Roster.prototype, "onEdit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], Roster.prototype, "onOpenAuth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], Roster.prototype, "onToggleLock", void 0);
Roster = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'roster',
        template: __webpack_require__("../../../../../src/app/roster/roster.component.html"),
        styles: [__webpack_require__("../../../../../src/app/roster/roster.component.css")]
    })
], Roster);

//# sourceMappingURL=roster.component.js.map

/***/ }),

/***/ "../../../../../src/app/scheduling.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\r\n  float: left;\r\n  width: 100%;\r\n  height: 120px;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .header {\r\n    height: 80px;\r\n  }\r\n}\r\n\r\n.header .logoImg {\r\n  width: 100px;\r\n  float: left;\r\n  margin-top: 10px;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .header .logoImg {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.header .logoText {\r\n  float: left;\r\n  margin-top: 36px;\r\n  margin-left: 20px;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .header .logoText {\r\n    margin-top: 20px;\r\n  }\r\n}\r\n\r\n.header .headerText {\r\n  float: left;\r\n  width: calc(100% - 150px);\r\n  margin-left: 20px;\r\n  margin-top: 10px;\r\n  font-size: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scheduling.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <img class=\"logoImg\" src=\"./assets/logo-img.png\" />\r\n  <img class=\"logoText\" src=\"./assets/logo-text.png\" />\r\n  <!--<div class=\"headerText\">{{ title }}</div>-->\r\n</div>\r\n<calendar [year]=\"year\" [month]=\"month\" [day]=\"day\" [monthOverview]=\"monthOverview\" (onDayChanged)=\"onDayChanged($event)\" (onMonthChanged)=\"onMonthChanged($event)\" (onYearChanged)=\"onYearChanged($event)\" ></calendar>\r\n<roster [volunteers]=\"volunteers\" [locked]=\"locked\" (onWorkingChanged)=\"onWorkingChanged($event)\" (onEdit)=\"onEdit($event)\" (onOpenAuth)=\"openAuth($event)\" (onToggleLock)=\"onToggleLock($event)\" (onDelete)=\"onDelete($event)\"></roster>\r\n<roster-edit *ngIf=\"showEdit\" (onAddVolunteer)=\"onAddVolunteer($event)\" (onHideEdit)=\"onHideEdit($event)\"></roster-edit>\r\n<authentication *ngIf=\"showAuth\" [locked]=\"locked\" (onHideAuth)=\"onHideAuth($event)\" (onToggleLock)=\"onToggleLock($event)\" (onPasswordChanged)=\"onPasswordChanged($event)\"></authentication>\r\n"

/***/ }),

/***/ "../../../../../src/app/scheduling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scheduling; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_scheduling_service__ = __webpack_require__("../../../../../src/app/service/scheduling.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Scheduling = (function () {
    function Scheduling(schedulingService) {
        this.schedulingService = schedulingService;
        this.title = 'Archery Range Schedule';
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth();
        this.day = new Date().getDate();
        this.volunteers = [];
        this.monthOverview = [];
        this.showEdit = false;
        this.showAuth = false;
        this.locked = false;
    }
    //---------------------------------------//
    //          Date/Time Functions          //
    //---------------------------------------//
    /*
     * Updates the current day and retrieves
     * the list of volunteers for the
     * given date.
     *
     * @param day - day to set
     * @return none
     */
    Scheduling.prototype.onDayChanged = function (day) {
        this.day = day;
        this.getDayData();
    };
    /*
     * Updates the current month and retrieves
     * the list of volunteers for the
     * given date.
     *
     * @param month - month to set
     * @return none
     */
    Scheduling.prototype.onMonthChanged = function (month) {
        this.month = month;
        this.getDayData();
        this.getMonthOverview();
    };
    /*
     * Updates the current year and retrieves
     * the list of volunteers for the
     * given date.
     *
     * @param year - year to set
     * @return none
     */
    Scheduling.prototype.onYearChanged = function (year) {
        this.year = year;
        this.getDayData();
    };
    //---------------------------------------//
    //            Roster Functions           //
    //---------------------------------------//
    /*
     * Adds a new volunteer to the list for the current day
     *
     * @param person - the new person object
     * @return none
     */
    Scheduling.prototype.onAddVolunteer = function (person) {
        var dataKey = this.year + "-" + (this.month < 10 ? "0" + this.month : this.month);
        var personData = JSON.parse(person);
        this.schedulingService.saveVolunteer(dataKey, this.day, personData).then(function () {
            this.getDayData();
            this.getMonthOverview();
        }.bind(this));
    };
    /*
     * Hides the edit modal window.
     *
     * @return none
     */
    Scheduling.prototype.onHideEdit = function () {
        this.showEdit = false;
    };
    /*
     * Shows the edit modal window.
     *
     * @return none
     */
    Scheduling.prototype.onEdit = function () {
        this.showEdit = true;
    };
    /*
     * Determine if days have all slots filled.
     *
     * @return none
     */
    Scheduling.prototype.getMonthOverview = function () {
        var dataKey = this.year + "-" + (this.month < 10 ? "0" + this.month : this.month);
        this.schedulingService.getMonthOverview(dataKey).then(function (monthOverview) {
            this.monthOverview = monthOverview;
        }.bind(this));
    };
    /*
     * Retrieves the list of volunteers
     * for a given date and stores the list in a
     * local variable.
     *
     * @return none
     */
    Scheduling.prototype.getDayData = function () {
        var dataKey = this.year + "-" + (this.month < 10 ? "0" + this.month : this.month);
        this.schedulingService.getDayData(dataKey, this.day).then(function (volunteers) {
            this.volunteers = volunteers;
        }.bind(this));
    };
    /*
     * Saves the availability for a given member to the database.
     *
     * @param id - the ID of the member to update
     * @param availabile - boolean indicating the availability of the given member
     * @return none
     */
    Scheduling.prototype.saveVolunteer = function (person) {
        var dataKey = this.year + "-" + (this.month < 10 ? "0" + this.month : this.month);
        this.schedulingService.saveVolunteer(dataKey, this.day, person).then(function () {
            this.getDayData();
        }.bind(this));
    };
    /*
     * Toggles whether a person is working.
     *
     * @param person - the JSON object representing the member
     * @return none
     */
    Scheduling.prototype.onWorkingChanged = function (person) {
        if (!this.locked) {
            var personData = JSON.parse(person);
            personData.selected = !personData.selected;
            this.saveVolunteer(personData);
        }
        else {
            alert("Scheduling is currently locked.");
        }
    };
    /*
     * Deletes a person from the current day.
     *
     * @param person - the JSON object representing the member
     * @return none
     */
    Scheduling.prototype.onDelete = function (person) {
        var personData = JSON.parse(person);
        if (!personData.selected) {
            var dataKey = this.year + "-" + (this.month < 10 ? "0" + this.month : this.month);
            this.schedulingService.deleteVolunteer(dataKey, this.day, personData).then(function () {
                this.getDayData();
            }.bind(this));
        }
        else {
            alert("This person is currently scheduled to work and cannot be deleted.");
        }
    };
    //---------------------------------------//
    //       Authentication Functions        //
    //---------------------------------------//
    /*
     * Shows the authentication modal.
     *
     * @return none
     */
    Scheduling.prototype.openAuth = function () {
        this.showAuth = true;
    };
    /*
     * Hides the authentication modal.
     *
     * @return none
     */
    Scheduling.prototype.onHideAuth = function () {
        this.showAuth = false;
    };
    /*
     * Toggles the current locked state and
     * saves the state to the database.
     *
     * @return none
     */
    Scheduling.prototype.onToggleLock = function () {
        this.schedulingService.saveLocked(!this.locked).then(function () {
            this.getLocked();
        }.bind(this));
    };
    /*
     * Retrieves the current locked state and stores
     * the value in a local variable.
     *
     * @return none
     */
    Scheduling.prototype.getLocked = function () {
        this.schedulingService.getLocked().then(function (locked) {
            this.locked = locked;
        }.bind(this));
    };
    /*
     * Saves an updated password to the database.
     *
     * @param password - the new password
     * @return none
     */
    Scheduling.prototype.onPasswordChanged = function (password) {
        this.schedulingService.savePassword(password).then(function () {
            console.log("password successfully changed");
        }.bind(this));
    };
    /*
     * Function called on module initialization.
     *
     * @return none
     */
    Scheduling.prototype.ngOnInit = function () {
        this.getDayData();
        this.getMonthOverview();
        this.getLocked();
    };
    Scheduling.prototype.ngOnChanges = function () {
    };
    return Scheduling;
}());
Scheduling = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'scheduling',
        template: __webpack_require__("../../../../../src/app/scheduling.component.html"),
        styles: [__webpack_require__("../../../../../src/app/scheduling.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_scheduling_service__["a" /* SchedulingService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_scheduling_service__["a" /* SchedulingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_scheduling_service__["a" /* SchedulingService */]) === "function" && _a || Object])
], Scheduling);

var _a;
//# sourceMappingURL=scheduling.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/scheduling.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchedulingService = (function () {
    function SchedulingService(db) {
        this.db = db;
        this.volunteers = [];
        this.monthOverview = [];
        this.path = "";
    }
    SchedulingService.prototype.getMonthOverview = function (dataKey) {
        return new Promise(function (resolve, reject) {
            var _this = this;
            this.db.object('/months')
                .subscribe(function (snapshots) {
                console.log(snapshots);
                _this.monthOverview = [];
                for (var index = 0; index < 31; index++) {
                    if (!snapshots[dataKey] || !snapshots[dataKey][index + 1]) {
                        _this.monthOverview.push(false);
                    }
                    else {
                        //object to represent all available positions
                        var filled = {
                            RANGE: {
                                BEFORE: false,
                                AFTER: false
                            },
                            DESK: {
                                BEFORE: false,
                                AFTER: false
                            }
                        };
                        //loop through volunteers and mark off each position that is filled
                        snapshots[dataKey][index + 1].forEach(function (entry) {
                            if (entry.when == 'BOTH') {
                                filled[entry.role1].BEFORE = true;
                                filled[entry.role2].AFTER = true;
                            }
                            else {
                                filled[entry.role1][entry.when] = true;
                            }
                        });
                        //check if all positions are filled
                        if (filled.RANGE.BEFORE
                            && filled.RANGE.AFTER
                            && filled.DESK.BEFORE
                            && filled.DESK.AFTER) {
                            _this.monthOverview.push(true);
                        }
                        else {
                            _this.monthOverview.push(false);
                        }
                    }
                }
                resolve(_this.monthOverview);
            });
        }.bind(this));
    };
    SchedulingService.prototype.getDayData = function (dataKey, dayKey) {
        return new Promise(function (resolve, reject) {
            var _this = this;
            this.db.object('/months')
                .subscribe(function (snapshots) {
                if (snapshots[dataKey] && snapshots[dataKey][dayKey]) {
                    _this.volunteers = snapshots[dataKey][dayKey];
                    resolve(snapshots[dataKey][dayKey].sort(function (a, b) { return a.name > b.name; }));
                }
                else {
                    _this.volunteers = [];
                    resolve([]);
                }
            });
        }.bind(this));
    };
    SchedulingService.prototype.saveVolunteer = function (dataKey, day, person) {
        var newList = [];
        var updates = {};
        for (var count = 0; count < this.volunteers.length; count++) {
            if (this.volunteers[count].name != person.name) {
                newList.push(this.volunteers[count]);
            }
        }
        newList.push(person);
        updates[dataKey + '/' + day] = newList;
        return new Promise(function (resolve, reject) {
            this.db.object('/months')
                .update(updates);
            resolve("success");
        }.bind(this));
    };
    SchedulingService.prototype.deleteVolunteer = function (dataKey, day, person) {
        var newList = [];
        var updates = {};
        for (var count = 0; count < this.volunteers.length; count++) {
            if (this.volunteers[count].name != person.name) {
                newList.push(this.volunteers[count]);
            }
        }
        updates[dataKey + '/' + day] = newList;
        return new Promise(function (resolve, reject) {
            this.db.object('/months')
                .update(updates);
            resolve("success");
        }.bind(this));
    };
    SchedulingService.prototype.getLocked = function () {
        return new Promise(function (resolve, reject) {
            this.db.object('/locked/status')
                .subscribe(function (snapshots) {
                resolve(snapshots.$value);
            });
        }.bind(this));
    };
    SchedulingService.prototype.saveLocked = function (locked) {
        var updates = {};
        updates['/status'] = locked;
        return new Promise(function (resolve, reject) {
            this.db.object('/locked').update(updates);
            resolve("success");
        }.bind(this));
    };
    SchedulingService.prototype.getPassword = function () {
        return new Promise(function (resolve, reject) {
            this.db.object('/locked/password')
                .subscribe(function (snapshots) {
                resolve(snapshots.$value);
            });
        }.bind(this));
    };
    SchedulingService.prototype.savePassword = function (password) {
        var updates = {};
        updates['/password'] = password;
        return new Promise(function (resolve, reject) {
            this.db.object('/locked').update(updates);
            resolve("success");
        }.bind(this));
    };
    return SchedulingService;
}());
SchedulingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], SchedulingService);

var _a;
//# sourceMappingURL=scheduling.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCHVsWgPi_6arItPfwneWCGKjQmqum6KIs',
        authDomain: 'paradise-archery-schedule.firebaseapp.com',
        databaseURL: 'https://paradise-archery-schedule.firebaseio.com',
        storageBucket: 'paradise-archery-schedule.appspot.com'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map