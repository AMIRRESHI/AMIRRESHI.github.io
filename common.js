"use strict";
(self["webpackChunkdzaro2_demo"] = self["webpackChunkdzaro2_demo"] || []).push([["common"],{

/***/ 2137:
/*!*************************************************!*\
  !*** ./src/app/core/services/movies.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoviesService: () => (/* binding */ MoviesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);



class MoviesService {
  constructor(http) {
    this.http = http;
    // http://www.omdbapi.com/?i=tt3896198&apikey=e462cb12
    // url = "http://www.omdbapi.com/?i=tt3896198";
    // searchQuery: string = `hell`;
    // pageNumber: number = 1;
    this.baseUrl = `http://www.omdbapi.com`;
    this.pageNumberSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(1);
    this.pageNumberAction$ = this.pageNumberSubject.asObservable();
    this.searchTextSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("ami");
    this.searchTextAction$ = this.searchTextSubject.asObservable();
    this.pageSizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(10);
    this.pageSizeAction$ = this.pageSizeSubject.asObservable();
    this.pageParams$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.pageNumberAction$, this.searchTextAction$, this.pageSizeAction$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(([pageNumber, searchText, pageSize]) => ({
      pageNumber,
      searchText,
      pageSize
    })));
    this.searchResponse$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.pageParams$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(([paramsObj]) => {
      const url = `${this.baseUrl}/?s=${paramsObj.searchText}&page=${paramsObj.pageNumber}&pageSize=${paramsObj.pageSize}`;
      return this.http.get(url);
    }));
    this.searchResponseSorted$ = this.searchResponse$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(resp => ({
      ...resp,
      Search: resp.Search?.sort((a, b) => {
        // Extract the year from each movie's Year property
        const yearA = parseInt(a.Year, 10);
        const yearB = parseInt(b.Year, 10);
        // Sort in descending order (latest year first)
        return yearB - yearA;
      })
    })));
  }
  getSelectedMovieDetails(selectedMovieId) {
    if (selectedMovieId) {
      const url = `${this.baseUrl}/?i=${selectedMovieId}`;
      return this.http.get(url);
    } else return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
  }
  updatePageNumber(selectedPage) {
    this.pageNumberSubject.next(selectedPage);
  }
  updatePageSize(selectedPage) {
    this.pageSizeSubject.next(selectedPage);
  }
  updateSearchText(selectedText) {
    this.searchTextSubject.next(selectedText);
  }
}
MoviesService.ɵfac = function MoviesService_Factory(t) {
  return new (t || MoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};
MoviesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: MoviesService,
  factory: MoviesService.ɵfac,
  providedIn: 'root'
});


/***/ })

}]);
//# sourceMappingURL=common.js.map