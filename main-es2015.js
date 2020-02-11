(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker-dashboard/issue-description/issue-description.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker-dashboard/issue-description/issue-description.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"newEvent-form\">\n      \n <div class=\"closeBtn\"><fa-icon [icon]=\"faClose\" (click)=\"closeEntryWindow()\"></fa-icon></div>\n\n    <form action=\"\" #newIssueForm=\"ngForm\" (ngSubmit)=\"newIssueSubmitted()\"  class=\"justify-content-center\">\n        <div class=\"form-group\">\n          <label for=\"title\" class=\"labelInput\">Title</label>\n            <input type=\"text\" [(ngModel)]=\"issueTitle\" name=\"title\" #title=\"ngModel\" (change)=\"updateIssueData($event.target.value,'title')\" class=\"form-control\" placeholder=\"Title\" required>\n            <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger text-left\">\n                <div *ngIf=\"title.errors.required\">\n                    title is required.\n                  </div>\n            </div>\n        </div> \n\n       \n        <div class=\"form-group\">\n          <label for=\"Description\" class=\"labelInput\">Description</label>\n          <ejs-richtexteditor id='defaultRTE' #fromRTE #desc='ngModel' required name=\"desc\"\n          [(ngModel)]=\"value\" (change)=\"updateIssueData($event,'description')\" [placeholder]='descPlaceHolder'>\n            <ng-template #valueTemplate>\n            </ng-template>\n          </ejs-richtexteditor>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"status\" class=\"labelInput\">Status</label>\n         <select [(ngModel)]=\"status\" name=\"status1\" [value]=\"in-progress\" #status1=\"ngModel\" class=\"form-control\" (change)=\"updateIssueData($event.target.value,'status')\">\n          <option *ngFor=\"let stat of statusArray\" [value]=\"stat\">{{stat}}</option>\n         </select>\n          <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger text-left\">\n              <div *ngIf=\"title.errors.required\">\n                  Status is required.\n                </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"assignee\" class=\"labelInput\">Choose assignee</label>\n            <div class=\"ng-autocomplete\">\n              <ng-autocomplete #ngAutoCompleteStatic\n                               [data]=\"userArray\"\n                               name=\"name\"\n                               (selected)=\"updateIssueData($event,'assignee')\"\n                               [(ngModel)]=\"issueAssignee\"\n                               [initialValue]=\"assigneeEdit\"\n                               [placeHolder]=\"placeholder\"\n                               [searchKeyword]=\"keyword\"\n                              [itemTemplate]=\"itemTemplateStatic\"\n                              >\n              </ng-autocomplete>\n              <!-- [notFoundTemplate]=\"notFoundTemplate\" \n               notFoundText=\"Not found\"\n              -->\n              <ng-template #itemTemplateStatic let-item>\n                <a [innerHTML]=\"item\"></a>\n              </ng-template>\n            </div>\n        </div>\n\n       <div class=\"form-group\">\n        <label for=\"date\" class=\"labelInput\">Reported Date</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"reportedDate\" name=\"date\" #date=\"ngModel\" placeholder=\"Date\" required>\n        <div *ngIf=\"date.invalid && (date.dirty || date.touched)\" class=\"alert alert-danger text-left\">\n            <div *ngIf=\"date.errors.required\">\n                Date is required.\n              </div>\n        </div>\n    </div>\n\n\n    <ng-template [ngIf]=\"viewMode === 'edit'\">\n      <h5 class=\"labelInput\">Comments</h5>\n      <ng-container *ngFor=\"let comment of comments\">\n        <div class=\"row commentWrapper\">\n          <div class=\"col-sm-12 commentBody\">{{comment.comment}}</div>\n          <div class=\"col-sm-12 commentDetails\">Commented by : {{getUsername(comment.commentBy)}}</div>\n          <div class=\"col-sm-6 commentDetails\">Date : {{comment.date | date:'medium' }}</div>\n          <div class=\"col-sm-6 text-right\" *ngIf=\"comment.commentBy == loggedUserData.userId\"><a href=\"#\" class=\"deleteCommment\" (click)=\"deleteComment($event,comment.id)\"><fa-icon class=\"iconStyle\" [icon]=\"faTrash\"></fa-icon></a></div>\n        </div>\n        <!-- <div class=\"commentWrapper\">\n        <div class=\"commentBody\"></div>\n        <div class=\"commentDetails\"><span></span><span></span></div>\n      </div> -->\n      </ng-container>\n     \n      <div class=\"form-group\">\n        <label for=\"comment\" class=\"labelInput\">add comment</label>\n        <textarea class=\"form-control\" [(ngModel)]=\"commentInput\" name=\"comment\" #comment=\"ngModel\" (change)=\"updateIssueData($event.target.value,'comments')\" placeholder=\"Comments\"></textarea>\n    </div>\n    </ng-template>\n\n    <ng-template [ngIf]=\"viewMode == 'edit'\">\n      <h5 class=\"labelInput\">Watchers List</h5>\n      <ng-container *ngFor=\"let user of watcher\">\n        <div class=\"row commentWrapper\">\n          <div class=\"col-sm-12 commentDetails\">{{getUsername(user)}}</div>\n          <!-- <div class=\"col-sm-6 text-right\" *ngIf=\"comment.commentBy == loggedUserData.userId\"><a href=\"#\" class=\"deleteCommment\" (click)=\"deleteComment($event,comment.id)\"><fa-icon class=\"iconStyle\" [icon]=\"faTrash\"></fa-icon></a></div> -->\n        </div>\n        <!-- <div class=\"commentWrapper\">\n        <div class=\"commentBody\"></div>\n        <div class=\"commentDetails\"><span></span><span></span></div>\n      </div> -->\n      </ng-container>\n      <button type=\"button\" [disabled]=\"alreadyInWatcherList\" *ngIf=\"viewMode == 'edit'\" (click)=\"updateIssueData('watcher','watcher')\"  class=\"btn mt-2 ml-4\">Watch</button>\n\n      <div class=\"reportedBy\">\n        <h5 class=\"labelInput\">Reported By :</h5> <span class=\"commentBody\">{{reportedBy}}</span> \n      </div>\n\n    </ng-template>\n\n\n\n        <ng-container *ngIf=\"viewMode == 'input'\"> \n          <button type=\"submit\" [disabled]=\"!newIssueForm.form.valid\" [ngClass]=\"{hideButton:hideSubmitButton}\" class=\"btn mt-2 \">Save</button>\n          <button type=\"button\"  (click)=\"resetForm()\" [ngClass]=\"{hideButton:hideSubmitButton}\" class=\"btn mt-2 \">Reset</button>\n        </ng-container>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker-dashboard/personalised-dashboard/personalised-dashboard.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker-dashboard/personalised-dashboard/personalised-dashboard.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0 user-scalable=no\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Personalized Dashboard</title>\n</head>\n<body>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Issue Tracker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n<!-- Navigation bar -->\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <div class=\"ml-auto p-2\">\n          <div class=\"textStyle\">Welcome <b>{{loggedUser}}</b></div>\n          <div class=\"textStyle\"><a href=\"#\" (click)=\"logout()\">Logout</a></div>\n    \n    \n        </div>\n  \n  </div>\n</nav>\n<!-- Navigation bar ends -->\n<!-- Calendar section  starts -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2 side_nav\">  \n      <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openEntryWindow()\"> Create New</button> \n\n      <div class=\"searchUserDiv\">\n          <form action=\"\" #searchUserForm=\"ngForm\" class=\"justify-content-center\">\n          <div class=\"form-group\">\n              <div class=\"ng-autocomplete\">\n                <ng-autocomplete #ngAutoCompleteStatic\n                                 [data]=\"issueArrayClone\"\n                                 name=\"name\"\n                                 (selected)=\"fetchIssueData($event)\"\n                                 (inputCleared) = \"getAllData()\"\n                                 [(ngModel)]=\"searchUsers\"\n                                 [initialValue]=\"\"\n                                 [placeHolder]=\"searchUserPlaceholder\"\n                                 [searchKeyword]=\"keyword\"\n                                [itemTemplate]=\"itemTemplateStatic\"\n                                 #clearInput\n                                 >\n                </ng-autocomplete>\n                <ng-template #itemTemplateStatic let-item>\n                  <a [innerHTML]=\"item\"></a>\n                </ng-template>\n\n              </div>\n\n          </div>\n          </form>\n          <div class=\"userEvents\"> \n              <span *ngFor=\"let events of userWiseloadedEvents\">\n                 <div class=\"eventTitle\" (click)=\"showUserwiseEvents(events.id)\"><fa-icon class=\"iconStyle\" [icon]=\"faCaretRight\"></fa-icon> {{events.title}}</div>  \n                <div class=\"eventDateSmall\">{{events.start | date:'medium'}}</div>\n              </span>\n             </div>\n      </div>  \n      \n      <!-- Search user parent Div ends-->\n    </div>\n    <div class=\"col-md-10 p-2 calendar_col\">\n        <app-personalized-view *ngIf=\"viewMode=='dashBoard'\" [newIssueData]=\"newIssueData\" [allUsers]=\"allUsers\" (emitIssueId)=\"loadissueData($event)\"></app-personalized-view>\n        <app-issue-description *ngIf=\"viewMode=='entry'\"  [newIssueData]=\"newIssueData\" [allUsers]=\"allUsers\" [emittedIssueId]=\"emittedIssueId\" (closeWindow)=\"closeEntryWindow()\"></app-issue-description>\n    </div>\n\n  </div> <!-- row-->\n  <!-- Calendar ends -->\n</div> <!-- Container -->\n<!-- Calendar section  starts -->\n\n<ngx-ui-loader></ngx-ui-loader>\n  \n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker-dashboard/personalized-view/personalized-view.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker-dashboard/personalized-view/personalized-view.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ng-container *ngIf=\"dataLoaded == true\">\n<m-table [value]=tableData *ngIf=tableData >\n    <m-column field=\"title\" header=\"Title\"></m-column>\n      <m-column field=\"status\" header=\"Status\"></m-column>\n      <m-column field=\"reporter\" header=\"Reporter\"></m-column>\n      <m-column field=\"date\" header=\"Date\"></m-column>\n</m-table>\n</ng-container> -->\n\n\n<m-table *ngIf=\"dataLoaded\" [value]=tableData \n[sortField]=\"'sl'\" [sortOrder]=\"1\" (onSort)=\"changeSort($event)\"\n         (onRowClick)=\"rowClick($event)\"\n         [selectable]=\"false\" [selectionMode]=\"'multiple'\" [selectionHandler]=\"false\" (onRowSelect)=\"rowSelect($event)\" (onRowUnselect)=\"rowUnselect($event)\" (selectionChange)=\"onSelectionChange($event)\" [(selection)]=\"selectedRows\"\n         [expandable]=\"true\" [expandMultiple]=\"true\" (onRowExpand)=\"rowExpanded($event)\" (onRowCollapse)=\"rowCollapse($event)\"\n         (onEditComplete)=\"editComplete($event)\" (onEditInit)=\"editInit($event)\" (onEdit)=\"edit($event)\" (onEditCancel)=\"editCancel($event)\"\n          (onFilter)=\"onFilter($event)\"\n         (onReload)=\"tableReload()\" (onPage)=\"onPage($event)\">\n         <m-header title=\"Issue Tracker\"  [globalSearch]=\"true\" [colSetting]=\"true\" [reload]=\"false\" [export]=\"false\">\n          <!--<ng-template let-header>-->\n          <!--<div>-->\n          <!--<button>Hello</button>-->\n          <!--</div>-->\n          <!--</ng-template>-->\n        </m-header>\n\n  <m-column field=\"sl\" [sortable]=\"true\"  header=\"Sl.\"></m-column>\n  <m-column field=\"title\" [sortable]=\"true\"  header=\"Title\"></m-column>\n  <m-column field=\"status\" [sortable]=\"true\" header=\"Status\"></m-column>\n  <m-column field=\"reporter\" [sortable]=\"true\" header=\"Reporter\"></m-column>\n  <m-column field=\"date\" [sortable]=\"true\" header=\"Date\"></m-column>\n\n  <ng-template mTemplate=\"emptyTable\">\n    {{emptyMsg}}\n  </ng-template>\n  <m-footer [paginator]=\"true\"></m-footer>\n</m-table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/login/login.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/login/login.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Login</title>\n</head>\n<body>\n    <section id=\"cover\">\n        <div id=\"cover-caption\">\n            <div class=\"container\">\n                <div class=\"row text-white\">\n                    <div class=\"col-sm-6 offset-sm-3 text-center\">\n                        <h1 class=\"display-4 mt-4\">Login</h1>\n                        <div class=\"login-form\">\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\">username</label>\n                                    <input type=\"text\" id=\"user\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"username\" autofocus>\n                                    <div [ngClass]=\"{'validation-user': triggerErrorUser == true}\">Enter username</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\">Password</label>\n                                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"password\">\n                                    <div [ngClass]=\"{'validation-pass': triggerErrorPass == true}\">Enter Password</div>\n                                </div>\n\n                                <button type=\"button\" (click)=\"logInFunction()\" class=\"btn mt-2\">Submit</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"text-center mt-2\">\n                    create an account? <a href=\"/signup\">Sign up</a>\n\n                </div>\n\n            </div> <!-- Container -->\n         \n        </div>\n    </section>\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/signup/signup.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/signup/signup.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Signup</title>\n</head>\n<body>\n    <section id=\"cover\">\n        <div id=\"cover-caption\">\n            <div class=\"container\">\n                <div class=\"row text-white\">\n                    <div class=\"col-sm-6 offset-sm-3 text-center\">\n                            <h1 class=\"display-4 mt-4\">Signup</h1>\n                        <div class=\"login-form\">\n                            \n                            <form action=\"\" #signUpForm=\"ngForm\" (ngSubmit)=\"formSubmitted()\"  class=\"justify-content-center\">\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\">username</label>\n                                    <input type=\"text\" [(ngModel)]=\"user\" name=\"username\" #username=\"ngModel\" class=\"form-control\" placeholder=\"username\" minlength=\"4\" required>\n                                    <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger text-left\">\n\n                                        <div *ngIf=\"username.errors.required\">\n                                            username is required.\n                                          </div>\n                                          <div *ngIf=\"username.errors.minlength\">\n                                            username must be 4 characters long.\n                                          </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\">Password</label>\n                                    <input type=\"password\" [(ngModel)]=\"pass\"  name=\"pass\" #password=\"ngModel\" class=\"form-control\" placeholder=\"password\" minlength=\"6\" required>\n                                    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger text-left\">\n                                        <div *ngIf=\"password.errors.required\">\n                                            password is required.\n                                          </div>\n                                          <div *ngIf=\"password.errors.minlength\">\n                                            password must be 6 characters long.\n                                          </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\"> FirstName</label>\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"firstName\" name=\"first\" #first=\"ngModel\" placeholder=\"FirstName\" required>\n                                    <div *ngIf=\"first.invalid && (first.dirty || first.touched)\" class=\"alert alert-danger text-left\">\n                                        <div *ngIf=\"first.errors.required\">\n                                            first name is required.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\">LastName</label>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"LastName\" [(ngModel)]=\"lastName\" name=\"last\" #last=\"ngModel\" required>\n\n                                    <div *ngIf=\"last.invalid && (last.dirty || last.touched)\" class=\"alert alert-danger text-left\">\n                                        <div *ngIf=\"last.errors.required\">\n                                            last name is required.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\">email</label>\n                                    <input type=\"text\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" placeholder=\"email\" [(ngModel)]=\"emailId\" name=\"email\" #email=\"ngModel\"  required>\n                                    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger text-left\">\n                                        <div *ngIf=\"email.errors.required\">\n                                            email is required.\n                                          </div>\n                                          <div *ngIf=\"email.errors.pattern\">\n                                            email is invalid.\n                                          </div>\n                                         \n                                    </div>\n                                </div>\n                                <button type=\"submit\" [disabled]=\"!signUpForm.form.valid\" class=\"btn mt-2\">Submit</button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"text-center mt-5\">\n                    <a href=\"/login\" class=\"\">Login</a> \n\n                </div>\n\n            </div> <!-- Container -->\n         \n        </div>\n    </section>\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
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
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'issueTrackerApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_dashboard_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-dashboard/login/login.component */ "./src/app/user-dashboard/login/login.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.module */ "./src/app/user-dashboard/user-dashboard.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main.service */ "./src/app/main.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js");
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ "./node_modules/@syncfusion/ej2-angular-richtexteditor/@syncfusion/ej2-angular-richtexteditor.js");
/* harmony import */ var momentum_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! momentum-table */ "./node_modules/momentum-table/momentum-table.js");
/* harmony import */ var _issue_tracker_dashboard_issue_tracker_dashboard_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./issue-tracker-dashboard/issue-tracker-dashboard.module */ "./src/app/issue-tracker-dashboard/issue-tracker-dashboard.module.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");











//Services

//Toaster Module

//FontAwesome



// Imported Syncfusion RichTextEditorModule from richtexteditor package

//Momentum Table Module



let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _user_dashboard_user_dashboard_module__WEBPACK_IMPORTED_MODULE_8__["UserDashboardModule"],
            _issue_tracker_dashboard_issue_tracker_dashboard_module__WEBPACK_IMPORTED_MODULE_18__["IssueTrackerDashboardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_15__["AutocompleteLibModule"],
            _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_16__["RichTextEditorAllModule"],
            momentum_table__WEBPACK_IMPORTED_MODULE_17__["MomentumTableModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_19__["NgxUiLoaderModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([
                { path: 'login', component: _user_dashboard_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], pathMatch: 'full' },
                { path: '', component: _user_dashboard_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
                { path: '*', component: _user_dashboard_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] }
            ])
        ],
        providers: [_main_service__WEBPACK_IMPORTED_MODULE_11__["MainService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/issue-tracker-dashboard/issue-description/issue-description.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/issue-tracker-dashboard/issue-description/issue-description.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input, select {\n\n    border: none;\n    border-bottom:1px solid #900C3F;\n    color:#454745;\n    padding: 5px;\n    border-radius:0;\n\n}\ninput:focus ,select:focus {\n       \n    outline: 0 !important;\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;\n    border-bottom: 3px solid rgb(59, 28, 40); \n\n}\n.modal-body button{\n    padding: 5px;\n    color: #fff;\n    width: 100px;\n    background-color: #900C3F;\n}\n.startDateDiv{\n\n    position: relative;\n    width: 100%;\n\n}\n.dateTimeWrapper div{\n    width: 50%;\n    display: inline-block;\n}\n.CalIcon{\n    \n    position: absolute;\n    top:10px;\n    right:5px;\n\n}\n.startTimediv {\n    height:10px;\n    margin-top: -5px;\n}\n/* AutoComplete */\n.ng-autocomplete {\n    width:100%;\n}\n/* Displaying Selected attendess */\n.attendees {\n    display: -webkit-box;\n    display: flex;\n    flex-flow: wrap;\n}\n.attendees > span {\n    padding: 5px;\n    color: #454745;\n    font-weight: 200;\n}\n.iconStyle {\n    color: #900C3F;\n}\n.searchUserDiv{\n    margin-top: 1em;\n}\n.userEvents{\n    padding-top: 1em;\n}\n.eventDateSmall{\n    font-size: .8em;\n}\n.eventTitle:hover {\n    text-decoration: underline;\n}\n.textStyle{\n    \n    font-size: 1em;\n    font-weight: 200;\n}\n.logoutButton{\n    font-size: 1em;\n    font-weight: 200;\n}\n.dateError{\n    margin-top: -16px;\n}\n.hideButton {\n\n        display: none;\n\n}\nbutton{\n    padding: 5px;\n    color: #fff;\n    width: 100px;\n    background-color: #900C3F;\n}\n.labelInput\n{\n    color:#900C3F;\n    font-size: .9em;\n    font-weight: 300;\n    padding-left: .2em 0 .15em;\n    margin-bottom: 0!important;\n}\ninput::-webkit-input-placeholder {\n    font-size: .8em;\n  }\ninput::-moz-placeholder {\n    font-size: .8em;\n  }\ninput::-ms-input-placeholder {\n    font-size: .8em;\n  }\ninput::placeholder {\n    font-size: .8em;\n  }\n.commentBody{\n      color: #454745;\n      font-size:.9em; \n     \n  }\n.commentWrapper{\n      margin-bottom: .2em;\n      padding: .3em .8em .3em .6em;\n  }\n.commentDetails{\n    color: #AFACAC;\n    font-size: .8em;\n  }\n.iconStyle{\n      color: #AFACAC;\n  }\na:hover{\n    color:#900C3F;\n    \n  }\n.closeBtn{\n      position: relative;\n      width:100%;\n      text-align: right;\n      right:0;\n  }\n.reportedBy{\n      padding: .25em 0;\n  }\n@media only screen and (min-width : 320px) and (max-width : 768px) {\n\n    .side_nav{\n\n        min-height:20vh;\n        height:100%;\n\n    }\n}\n@media only screen and (min-width : 768px) and (max-width : 1024px)  {   \n\n    .side_nav{\n\n        padding:1em;\n\n    }\n\n}");

/***/ }),

/***/ "./src/app/issue-tracker-dashboard/issue-description/issue-description.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/issue-tracker-dashboard/issue-description/issue-description.component.ts ***!
  \******************************************************************************************/
/*! exports provided: IssueDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueDescriptionComponent", function() { return IssueDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ "./node_modules/@syncfusion/ej2-angular-richtexteditor/@syncfusion/ej2-angular-richtexteditor.js");
/* harmony import */ var _it_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../it-socket.service */ "./src/app/it-socket.service.ts");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");







let IssueDescriptionComponent = class IssueDescriptionComponent {
    constructor(http, itSocket, loader) {
        this.http = http;
        this.itSocket = itSocket;
        this.loader = loader;
        this.value = null;
        this.closeWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //Form Variables
        this.alreadyInWatcherList = false;
        this.status = "Pending";
        this.reportedDate = new Date();
        this.comments = [];
        this.watcher = [];
        this.eventFormButtonName = "Save";
        this.descPlaceHolder = "Description";
        this.statusArray = ['in-progress', 'in-test', 'done', 'backlog'];
        //AutoCOmplete 
        this.placeholder = "Choose Assignee";
        this.loggedUserData = "";
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"];
        this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faWindowClose"];
        this.userArrayClone = [];
        this.placeholderAssignee = 'Choose assignee';
        this.assigneeEdit = "";
        //
        this.viewMode = "input";
    }
    ngOnInit() {
        this.loggedUserData = this.http.getUserInfoFromLocalStorage();
        this.rteObj.insertImageSettings.saveFormat = "Base64";
        if (this.emittedIssueId != "New") {
            this.viewMode = "edit";
        }
        console.log(this.emittedIssueId);
        setTimeout(() => {
            this.getAllUserData();
        }, 600);
    } //ngOnInit
    ngAfterViewInit() {
        if (this.viewMode == "edit") {
            setTimeout(() => {
                this.loadIssueDescription();
            }, 600);
        } //If ends here 
    } //ngAfterViewInit
    ngOnChanges(change) {
        if (change.newIssueData) {
            console.log("Data changed");
            this.loadIssueDescription();
        }
        else if (change.emittedIssueId.currentValue == "New") {
            this.issueForm.reset();
            this.comments = [];
            this.watcher = [];
            this.reportedDate = new Date();
            this.viewMode = "input";
        }
    }
    updateStatus(e) {
        //console.log(this.rteObj.valueChange);
    }
    getAllUserData() {
        this.userArray = [];
        this.userArrayClone = [];
        let username = this.loggedUserData.username;
        this.http.getUserData()
            .subscribe((users) => {
            users.data.forEach(user => {
                if (user.username != this.loggedUserData.username) {
                    this.userArray.push(user.username);
                }
            });
        });
        //this.userArrayClone = this.userArrayClone.filter(user=>user != this.loggedUserData.username)
        // console.log(this.userArray.length);
    } //getAllUserData ends here 
    getUsername(id) {
        return this.http.getNameOfUser(this.allUsers, id);
    }
    newIssueSubmitted() {
        this.loader.start();
        let submittedIssue = {
            //eventId:'',
            title: this.issueTitle,
            description: this.rteObj.value,
            status: this.status,
            assignee: this.http.getIdOfUser(this.allUsers, this.issueAssignee),
            reportedDate: this.reportedDate,
            reportedBy: this.loggedUserData.userId
        };
        //console.log(this.rteObj.imageUploadSuccess)
        this.itSocket.createNewIssueTracker(submittedIssue);
        this.resetForm(); //Resetting form
        this.loader.stop();
    } //newIssueSubmitted Ends here ..
    loadIssueDescription(mode) {
        this.loader.start();
        //console.log(this.viewMode);
        this.http.getIssueData({ issueId: this.emittedIssueId })
            .subscribe((apiResponse) => {
            //console.log(apiResponse.data[0]);
            this.issueTitle = apiResponse.data[0].title;
            this.value = apiResponse.data[0].description;
            this.status = apiResponse.data[0].status;
            this.comments = apiResponse.data[0].comments;
            this.watcher = apiResponse.data[0].watcher;
            this.reportedDate = new Date(apiResponse.data[0].reportedDate);
            this.reportedBy = apiResponse.data[0].reportedBy;
            this.issueAssignee = this.http.getNameOfUser(this.allUsers, apiResponse.data[0].assignee);
            apiResponse.data[0].watcher.forEach(watcher => {
                // console.log("reported By "+this.reportedBy);
                if (watcher == this.loggedUserData.userId) {
                    this.alreadyInWatcherList = true;
                }
                else if (this.reportedBy == this.loggedUserData.userId) {
                    this.alreadyInWatcherList = true;
                }
            });
            if (apiResponse.data[0].assignee == this.loggedUserData.userId) {
                this.alreadyInWatcherList = true;
            }
            this.reportedBy = this.http.getNameOfUser(this.allUsers, this.reportedBy);
        });
        this.loader.stop();
        // console.log(this.issueAssignee);
    } //Load Issue Description data
    updateIssueData(e, updatedDataType) {
        if ((this.viewMode == "edit") && (e != "")) {
            this.loader.start();
            let submittedIssue = {
                //eventId:'',
                issueId: this.emittedIssueId,
                updatedDataType: updatedDataType,
                updatedData: updatedDataType == "description" ? this.rteObj.value : e,
                updatedBy: this.loggedUserData.userId,
                updatedDate: new Date()
                // assignee : this.selectedAttendees,
                // createdBy : this.loggedUser
            };
            if (updatedDataType == "assignee") {
                submittedIssue.updatedData = this.http.getIdOfUser(this.allUsers, e);
            }
            //console.log(submittedIssue);
            this.itSocket.udateIssueDescription(submittedIssue);
            setTimeout(() => {
                this.loadIssueDescription();
            }, 1000);
        } //Update Issue Data
        this.loader.stop();
    } //UpdateIssueData ends here
    deleteComment(e, dt) {
        e.preventDefault();
        this.itSocket.deleteComment(dt, this.emittedIssueId);
        setTimeout(() => {
            this.loadIssueDescription();
        }, 1000);
    } //Delete Comment Ends here
    closeEntryWindow() {
        this.loader.start();
        this.issueForm.reset();
        this.comments = [];
        this.watcher = [];
        this.reportedDate = new Date();
        setTimeout(() => {
            this.closeWindow.emit();
            this.loader.stop();
        }, 1000);
    }
    resetForm() {
        this.issueForm.reset();
        this.reportedDate = new Date();
    }
}; //Main Class ends here
IssueDescriptionComponent.ctorParameters = () => [
    { type: _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] },
    { type: _it_socket_service__WEBPACK_IMPORTED_MODULE_3__["ItSocketService"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fromRTE', { static: true })
], IssueDescriptionComponent.prototype, "rteObj", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newIssueForm', { static: true })
], IssueDescriptionComponent.prototype, "issueForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IssueDescriptionComponent.prototype, "allUsers", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IssueDescriptionComponent.prototype, "emittedIssueId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IssueDescriptionComponent.prototype, "newIssueData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], IssueDescriptionComponent.prototype, "closeWindow", void 0);
IssueDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-issue-description',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./issue-description.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker-dashboard/issue-description/issue-description.component.html")).default,
        providers: [_syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_2__["ToolbarService"], _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_2__["LinkService"], _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_2__["ImageService"], _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_2__["HtmlEditorService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./issue-description.component.css */ "./src/app/issue-tracker-dashboard/issue-description/issue-description.component.css")).default]
    })
], IssueDescriptionComponent);



/***/ }),

/***/ "./src/app/issue-tracker-dashboard/issue-tracker-dashboard.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/issue-tracker-dashboard/issue-tracker-dashboard.module.ts ***!
  \***************************************************************************/
/*! exports provided: IssueTrackerDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueTrackerDashboardModule", function() { return IssueTrackerDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js");
/* harmony import */ var _personalised_dashboard_personalised_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personalised-dashboard/personalised-dashboard.component */ "./src/app/issue-tracker-dashboard/personalised-dashboard/personalised-dashboard.component.ts");
/* harmony import */ var _issue_description_issue_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./issue-description/issue-description.component */ "./src/app/issue-tracker-dashboard/issue-description/issue-description.component.ts");
/* harmony import */ var _personalized_view_personalized_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personalized-view/personalized-view.component */ "./src/app/issue-tracker-dashboard/personalized-view/personalized-view.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ "./node_modules/@syncfusion/ej2-angular-richtexteditor/@syncfusion/ej2-angular-richtexteditor.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var momentum_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! momentum-table */ "./node_modules/momentum-table/momentum-table.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");








// Imported Syncfusion RichTextEditorModule from richtexteditor package




let IssueTrackerDashboardModule = class IssueTrackerDashboardModule {
};
IssueTrackerDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _personalized_view_personalized_view_component__WEBPACK_IMPORTED_MODULE_7__["PersonalizedViewComponent"],
            _issue_description_issue_description_component__WEBPACK_IMPORTED_MODULE_6__["IssueDescriptionComponent"],
            _personalised_dashboard_personalised_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["PersonalisedDashboardComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_4__["AutocompleteLibModule"],
            _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_8__["RichTextEditorAllModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
            momentum_table__WEBPACK_IMPORTED_MODULE_10__["MomentumTableModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__["NgxUiLoaderModule"]
        ]
    })
], IssueTrackerDashboardModule);



/***/ }),

/***/ "./src/app/issue-tracker-dashboard/personalised-dashboard/personalised-dashboard.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/issue-tracker-dashboard/personalised-dashboard/personalised-dashboard.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".searchUserDiv{\n    margin-top: 1em;\n}\n.side_nav{\n\n    height:100vh;\n    padding: 2em;\n    background: #f5f5f5;\n}\n.side_nav button {\n    width: 100%;\n}\n.modal-body input, select {\n\n    border: none;\n    border-bottom:1px solid #900C3F;\n    color:#454745;\n    padding: 5px;\n    border-radius:0;\n\n}\ninput:focus ,select:focus {\n       \n    outline: 0 !important;\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;\n    border-bottom: 3px solid rgb(59, 28, 40); \n\n}\n.modal-body button{\n    padding: 5px;\n    color: #fff;\n    width: 100px;\n    background-color: #900C3F;\n}\n/* AutoComplete */\n.ng-autocomplete {\n    width:100%;\n}\n.logoutButton{\n    font-size: 1em;\n    font-weight: 200;\n}\n@media only screen and (min-width : 320px) and (max-width : 768px) {\n\n    .side_nav{\n\n        min-height:20vh;\n        height:100%;\n\n    }\n\n}\n@media only screen and (min-width : 768px) and (max-width : 1024px)  {   \n\n    .side_nav{\n\n        padding:1em;\n\n    }\n\n}");

/***/ }),

/***/ "./src/app/issue-tracker-dashboard/personalised-dashboard/personalised-dashboard.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/issue-tracker-dashboard/personalised-dashboard/personalised-dashboard.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PersonalisedDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalisedDashboardComponent", function() { return PersonalisedDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _it_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../it-socket.service */ "./src/app/it-socket.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");





//Taostr

//Services

//Loader

let PersonalisedDashboardComponent = class PersonalisedDashboardComponent {
    constructor(loader, http, socketService, toaster, router) {
        this.loader = loader;
        this.http = http;
        this.socketService = socketService;
        this.toaster = toaster;
        this.router = router;
        this.allUsers = []; //Getting all users from API
        this.issueArrayClone = [];
        this.viewMode = "dashBoard";
        this.searchUsers = "";
        this.keyword = "title";
        this.searchUserPlaceholder = "Search";
        this.userWiseloadedEvents = [];
        //Loader
        this.loading = false;
    }
    ngOnInit() {
        this.verifyUser();
        this.tokenValidityCheck();
        this.loggedUserData = this.http.getUserInfoFromLocalStorage();
        this.loggedUser = this.loggedUserData.firstName;
        this.setUserOnline();
        this.getUserData();
        this.listenToOwnUserId();
        this.getAllData();
        // this.getAllIssueData();
    } //ngOnint ends here..
    verifyUser() {
        if (ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === "" || ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === undefined || ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === null) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            this.router.navigate(['/dashBoard']);
        }
    }
    setUserOnline() {
        let authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken');
        this.socketService.setUserOnline(authToken);
    } //Setting user online
    tokenValidityCheck() {
        this.socketService.tokenValidity()
            .subscribe((data) => {
            if (data.status === 403) {
                this.toaster.error(data.message);
                ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].deleteAll();
                localStorage.clear();
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 1000);
            }
        });
    }
    listenToOwnUserId() {
        this.socketService.getOwnUserId(this.loggedUserData.userId)
            .subscribe((response) => {
            this.getAllData();
            console.log("Listening to own Id");
            this.showToaster(response.data.issueId, response);
            // this.getAllIssueData();
        });
    }
    showToaster(id, data) {
        let toast = this.toaster.success(`${data.data.updatedDataType} Updated/Created`, 'Notification');
        toast.customId = id;
        toast.onTap.subscribe(() => {
            this.emittedIssueId = toast.customId;
            this.viewMode = "entry";
            //console.log(this.emittedIssueId);
        });
        //console.log(id.customerId);
    }
    getAllData(e) {
        this.loader.start();
        this.loading = true;
        let tableArray = [];
        this.issueArrayClone = [];
        let i = 1;
        this.http.getAllIssueData()
            .subscribe((apiResponse) => {
            for (let data of apiResponse.data) {
                // apiResponse.data.forEach(data => {
                let user = this.http.getNameOfUser(this.allUsers, data.reportedBy);
                let reportDt = new Date(data.reportedDate);
                let dat = reportDt.getFullYear() + "-" + (reportDt.getMonth() + 1) + "-" + reportDt.getDate() + " " + reportDt.getHours() + ":" + reportDt.getMinutes();
                tableArray.push({
                    'id': data.issueId,
                    'sl': i,
                    'title': data.title,
                    'status': data.status,
                    'reporter': user,
                    'date': dat //data.reportedDate
                });
                i++;
                this.issueArrayClone.push(data.title);
            }
            // });
            this.newIssueData = tableArray;
        });
        this.loader.stop();
    } //End of get All Data
    getUserData() {
        this.http.getUserData()
            .subscribe((users) => {
            users.data.forEach(usr => {
                this.allUsers.push(usr);
            });
        });
    } //GetUserData
    getAllIssueData() {
        this.issueArrayClone = [];
        this.http.getAllIssueData()
            .subscribe((apiResponse) => {
            apiResponse.data.forEach(data => {
                this.issueArrayClone.push(data.title);
            });
        });
    }
    fetchIssueData(e) {
        let dt = [];
        let i = 1;
        this.http.getAllIssueData()
            .subscribe((apiResponse) => {
            for (let data of apiResponse.data) {
                let user = this.http.getNameOfUser(this.allUsers, data.reportedBy);
                let reportDt = new Date(data.reportedDate);
                let dat = reportDt.getFullYear() + "-" + (reportDt.getMonth() + 1) + "-" + reportDt.getDate() + " " + reportDt.getHours() + ":" + reportDt.getMinutes();
                console.log(dat);
                if (data.title == e) {
                    dt.push({
                        'id': data.issueId,
                        'sl': i,
                        'title': data.title,
                        'status': data.status,
                        'reporter': user,
                        'date': dat //data.reportedDate
                    });
                }
                i++;
            }
            ;
            this.newIssueData = dt;
        });
        if (this.viewMode != "dashBoard") {
            this.viewMode = "dashBoard";
        }
    }
    loadissueData(e) {
        this.emittedIssueId = e;
        this.viewMode = "entry";
    }
    closeEntryWindow() {
        this.loader.start();
        this.viewMode = "dashBoard";
        setTimeout(() => {
            this.loader.stop();
        }, 1000);
    }
    openEntryWindow() {
        this.emittedIssueId = "New";
        this.viewMode = "entry";
    }
    logout() {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].deleteAll();
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}; //Main class ends here
PersonalisedDashboardComponent.ctorParameters = () => [
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"] },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] },
    { type: _it_socket_service__WEBPACK_IMPORTED_MODULE_6__["ItSocketService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newEventModal', { static: true }) // Modal Window
], PersonalisedDashboardComponent.prototype, "newEventModal", void 0);
PersonalisedDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personalised-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personalised-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker-dashboard/personalised-dashboard/personalised-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personalised-dashboard.component.css */ "./src/app/issue-tracker-dashboard/personalised-dashboard/personalised-dashboard.component.css")).default]
    })
], PersonalisedDashboardComponent);



/***/ }),

/***/ "./src/app/issue-tracker-dashboard/personalized-view/personalized-view.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/issue-tracker-dashboard/personalized-view/personalized-view.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footerStyle{\n    background-color: #ffffff;\n}");

/***/ }),

/***/ "./src/app/issue-tracker-dashboard/personalized-view/personalized-view.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/issue-tracker-dashboard/personalized-view/personalized-view.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PersonalizedViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizedViewComponent", function() { return PersonalizedViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _it_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../it-socket.service */ "./src/app/it-socket.service.ts");




let PersonalizedViewComponent = class PersonalizedViewComponent {
    constructor(http, socket) {
        this.http = http;
        this.socket = socket;
        this.emitIssueId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.countries = [];
        this.dataLoaded = false;
        this.tableData = [];
        this.emptyMsg = 'loading...';
    }
    ngOnInit() {
        //  this.loadIssueDescriptionData(); //Loading all issue description data
        setTimeout(() => {
            this.dataLoaded = true;
        }, 2000);
        this.currentUser = this.http.getUserInfoFromLocalStorage().userId;
    } //ngOninit Ends here 
    ngOnChanges(change) {
        if (change.newIssueData) {
            this.tableData = [];
            this.tableData = change.newIssueData.currentValue;
        }
    }
    // ngAfterViewInit(): void {
    //  }//ngAfterViewInit
    loadIssueDescriptionData() {
        this.tableData = [];
        let i = 1;
        this.http.getAllIssueData()
            .subscribe((apiResponse) => {
            // console.log(apiResponse);
            // console.log("Loading");
            apiResponse.data.forEach(data => {
                let user = this.http.getNameOfUser(this.allUsers, data.reportedBy);
                let reportDt = new Date(data.reportedDate);
                let dt = reportDt.getFullYear() + "-" + (reportDt.getMonth() + 1) + "-" + reportDt.getDate() + " " + reportDt.getHours() + ":" + reportDt.getMinutes();
                this.tableData.push({
                    'id': data.issueId,
                    'sl': i,
                    'title': data.title,
                    'status': data.status,
                    'reporter': user,
                    'date': dt //data.reportedDate
                });
                i++;
            });
            //console.log(this.tableData);
        });
    } // loadDescriptionData
    //DataTable events
    rowClick(e) {
        this.emitIssueId.emit(e.data.id);
    }
}; //Main Class ends here
PersonalizedViewComponent.ctorParameters = () => [
    { type: _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] },
    { type: _it_socket_service__WEBPACK_IMPORTED_MODULE_3__["ItSocketService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PersonalizedViewComponent.prototype, "allUsers", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PersonalizedViewComponent.prototype, "reloadData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PersonalizedViewComponent.prototype, "newIssueData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PersonalizedViewComponent.prototype, "emitIssueId", void 0);
PersonalizedViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personalized-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personalized-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker-dashboard/personalized-view/personalized-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personalized-view.component.css */ "./src/app/issue-tracker-dashboard/personalized-view/personalized-view.component.css")).default]
    })
], PersonalizedViewComponent);



/***/ }),

/***/ "./src/app/it-socket.service.ts":
/*!**************************************!*\
  !*** ./src/app/it-socket.service.ts ***!
  \**************************************/
/*! exports provided: ItSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItSocketService", function() { return ItSocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);




let ItSocketService = class ItSocketService {
    constructor() {
        //private url = "http://localhost:3000";
        this.url = "http://api.resfeber.online";
        //Listening server 
        this.verifyUser = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                this.socket.on('verifyUser', data => {
                    observer.next(data);
                });
            });
        }; //User verification
        //Listen to our own userId
        this.getOwnUserId = (userId) => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                this.socket.on(userId, data => {
                    observer.next(data);
                });
            });
        };
        this.tokenValidity = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                this.socket.on('token-error', data => {
                    observer.next(data);
                });
            });
        };
        //Emitting to server
        this.createNewIssueTracker = (data) => {
            this.socket.emit('new-issue', data);
        }; //CreateNewEvent
        this.udateIssueDescription = (data) => {
            this.socket.emit('update-issueData', data);
        }; //UpdateIssueDescription
        this.deleteComment = (id, issueId) => {
            let obj = {
                id: id,
                issueId: issueId
            };
            this.socket.emit('delete-comment', obj);
        }; //Delete Comment 
        this.setUserOnline = (authToken) => {
            this.socket.emit('setUser', authToken);
        }; //Setting up user online
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(this.url);
    } //Construcot ends here
    handleError(err) {
        let errorMessage = "";
        if (err.error instanceof Error) {
            errorMessage = `An Error occured. ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code:${err.status} error Message is :${err.error.message}`;
        }
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    } //ErrorHandler ends
}; //Main class ends here
ItSocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ItSocketService);



/***/ }),

/***/ "./src/app/main.service.ts":
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MainService = class MainService {
    constructor(http) {
        this.http = http;
        //private apiUrl = "http://localhost:3000/api/v1/"
        this.apiUrl = "http://api.resfeber.online/api/v1/";
        this.signup = (data) => {
            try {
                return this.http.post(this.apiUrl + "users/signup", data);
            }
            catch (err) {
                return this.handleError(err);
            }
        }; //Signup Function ends
        this.signInFn = (data) => {
            try {
                return this.http.post(this.apiUrl + "users/signIn", data);
            }
            catch (err) {
                return this.handleError(err);
            }
        }; //SignIn Funciton ends 
        this.getIssueData = (issueId) => {
            console.log("Getting Issue data" + issueId);
            return this.http.post(this.apiUrl + "issueTracker/getIssueData", issueId);
        };
        this.getUserData = () => {
            return this.http.get(this.apiUrl + "users/getAll");
        };
        this.getAllIssueData = () => {
            console.log("Getting Issue Data");
            return this.http.get(this.apiUrl + "issueTracker/getAllIssuedata");
        };
        this.getUserInfoFromLocalStorage = () => {
            return JSON.parse(localStorage.getItem('userData'));
        }; // Get User info ends here
        this.setUserInfoInLocalStorage = (data) => {
            localStorage.setItem('userData', JSON.stringify(data));
        }; // Set User info ends here
        this.getNameOfUser = (allUsers, id) => {
            for (let a of allUsers) {
                if (a.userId == id) {
                    return a.username;
                }
            }
        }; //Get Name of User
        this.getIdOfUser = (allUsers, name) => {
            for (let a of allUsers) {
                if (a.username == name) {
                    return a.userId;
                }
            }
        }; //Get userID of User
    }
    //Global error handler
    handleError(err) {
        let errorMessage = "";
        if (err.error instanceof Error) {
            errorMessage = `An Error occured. ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code:${err.status} error Message is :${err.error.message}`;
        }
        return errorMessage;
    } //ErrorHandler ends
}; //Main Class ends
MainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MainService);



/***/ }),

/***/ "./src/app/user-dashboard/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user-dashboard/login/login.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  h1{\n      font-size: 2em;\n      color: darkslategrey;\n  }\n  input {\n      border: none;\n      outline: none !important;\n      border-bottom:1px solid #900C3F;\n      color: rgb(53, 48, 50);\n      padding: 5px;\n      -webkit-transition: border-bottom 0.3s linear 0.1s;\n      transition: border-bottom 0.3s linear 0.1s;\n      border-radius: 0;\n  }\n  input:focus {\n       \n        outline: 0 !important;\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;\n        border-bottom: 3px solid rgb(59, 28, 40); \n  }\n  button{\n      padding: 5px;\n      color: #fff;\n      width: 100px;\n      background-color: #900C3F;\n  }\n  .validation-pass,  .validation-user{\n      color:#900C3F;\n      padding: 5px;\n      font-size: .9em;\n     text-align: left;\n  }\n  #footer{\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n  }\n");

/***/ }),

/***/ "./src/app/user-dashboard/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-dashboard/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");





//SocialLogin Modules


//service


let LoginComponent = class LoginComponent {
    constructor(toaster, router, apiService, socialAuthService, vcr) {
        this.toaster = toaster;
        this.router = router;
        this.apiService = apiService;
        this.socialAuthService = socialAuthService;
        //Icons
        this.faGoogle = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGoogle"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFacebook"];
        this.logInFunction = () => {
            if ((!this.username) && (this.password)) {
                this.triggerErrorUser = true;
                this.triggerErrorPass = false;
            }
            else if ((!this.password) && (this.username)) {
                // this.toaster.warning('Enter password');
                this.triggerErrorUser = false;
                this.triggerErrorPass = true;
            }
            else if ((!this.username) && (!this.password)) {
                this.triggerErrorUser = true;
                this.triggerErrorPass = true;
            }
            else {
                this.triggerErrorUser = false;
                this.triggerErrorPass = false;
                let userData = {
                    username: this.username,
                    password: this.password
                };
                this.apiService.signInFn(userData)
                    .subscribe((apiResponse) => {
                    if (apiResponse.status === 200) {
                        this.toaster.success("Login success");
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        this.apiService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        let userName = apiResponse.data.userDetails.username;
                        setTimeout(() => {
                            console.log(userName);
                            this.router.navigate(['/dashBoard']);
                            // if(userName.endsWith("-admin")){
                            //   this.router.navigate(['/admin-dash']);
                            // }else{
                            //   this.router.navigate(['/user-dash']);
                            // }
                        }, 1000);
                    }
                    else {
                        console.log(apiResponse.message);
                        this.toaster.error(apiResponse.message);
                    }
                }, (error) => {
                    if (error) {
                        this.toaster.error("Server Connection Error ,Please try again later");
                    }
                });
            }
        }; //LogInFunciton ends here
    } //Constructor ends here
    ngOnInit() {
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === "" || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === null) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            this.router.navigate(['/dashBoard']);
        }
    }
    //Social Login Functions
    signInWithGoogle() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID);
    }
    signInWithFB() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"].PROVIDER_ID);
    }
    signOut() {
        this.socialAuthService.signOut();
    }
}; //Class ends here 
LoginComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/user-dashboard/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user-dashboard/signup/signup.component.css":
/*!************************************************************!*\
  !*** ./src/app/user-dashboard/signup/signup.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\n    font-size: 2.2em;\n    color: darkslategrey;\n}\ninput,select {\n\n    border: none;\n    border-bottom:1px solid #900C3F;\n    color:#454745;\n    padding: 5px;\n    border-radius:0;\n\n}\ninput:focus ,select:focus {\n       \n    outline: 0 !important;\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;\n    border-bottom: 3px solid rgb(59, 28, 40); \n\n}\nbutton{\n    padding: 5px;\n    color: #fff;\n    width: 100px;\n    background-color: #900C3F;\n}\n.mobile-container{\n    display: -webkit-box;\n    display: flex;\n}\n.mobile-container .c_code{\n    width: 20%;\n    padding-right:4px; \n    color: rgb(53, 48, 50);\n    display: inline-block;\n}\n.mobile-container .mobile_no{\n    width: 80%;\n    display: inline-block;\n}\n.c_code input{\n    background-color: #fff;\n}");

/***/ }),

/***/ "./src/app/user-dashboard/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-dashboard/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



//importing toastr


let SignupComponent = class SignupComponent {
    constructor(apiService, toastr, route) {
        this.apiService = apiService;
        this.toastr = toastr;
        this.route = route;
        this.countryName = "IN";
        this.countryCodeInput = "91";
        this.countryList = [];
        this.selectedCountryName = "";
    } //Contructor ends 
    ngOnInit() {
        // this.countryCodeService.getCountryPhoneCode()
        // .subscribe(data => {
        //    this.countryCode = data;
        // }); // Country code ends here
        // this.countryCodeService.getCountryCode()
        // .subscribe(data => {
        //   for(let dt in data){
        //     let object = {"code":dt,"name":data[dt]};
        //     this.countryList.push(object);
        //   }
        // });// CountryList ends here
    } //ngOnInit ends here
    countrySelected(event) {
        this.seletedCountry = event.target.value;
        for (let code in this.countryCode) {
            if (this.seletedCountry == code) {
                this.countryCodeInput = this.countryCode[code];
            }
        }
    } // countrySelected ends here
    formSubmitted() {
        let signupData = {
            username: this.user,
            password: this.pass,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.emailId
        }; //Signup data object ends here 
        this.apiService.signup(signupData)
            .subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
                // console.log(apiResponse);
                this.toastr.success('Signup successfull');
                setTimeout(() => { this.redirectToLoginPage(); }, 2000);
            }
            else {
                this.toastr.error(apiResponse.message);
            }
        }, (err) => {
            console.log(err);
            this.toastr.error('Some error occured');
        }); //End of Observable
    } // form Submitted Funciton ends here
    redirectToLoginPage() {
        this.route.navigate(['/login']);
    }
}; //Main Class ends here
SignupComponent.ctorParameters = () => [
    { type: _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/signup/signup.component.html")).default,
        providers: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/user-dashboard/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.module.ts ***!
  \*********************************************************/
/*! exports provided: provideConfig, UserDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardModule", function() { return UserDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user-dashboard/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user-dashboard/signup/signup.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _issue_tracker_dashboard_personalised_dashboard_personalised_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../issue-tracker-dashboard/personalised-dashboard/personalised-dashboard.component */ "./src/app/issue-tracker-dashboard/personalised-dashboard/personalised-dashboard.component.ts");











//Socail Login 



let config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"]("Google-OAuth-Client-Id")
    },
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"]("Facebook-App-Id")
    }
]);
function provideConfig() {
    return config;
}
let UserDashboardModule = class UserDashboardModule {
};
UserDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["SocialLoginModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], pathMatch: 'full' },
                { path: 'dashBoard', component: _issue_tracker_dashboard_personalised_dashboard_personalised_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["PersonalisedDashboardComponent"], pathMatch: 'full' }
            ])
        ],
        providers: [{ provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"], useFactory: provideConfig }]
    })
], UserDashboardModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/auks/Desktop/issueTracker/issueTrackerApp/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);