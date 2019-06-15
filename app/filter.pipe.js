"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Tell Angular2 we're creating a Pipe with TypeScript decorators
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        // ES6 array destructuring
        var searchText = args[0];
        return value.filter(function (item) {
            return typeof searchText == 'undefined' || searchText == '' || item.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    core_1.Pipe({
        name: 'filterPipe'
    })
], FilterPipe);
exports.FilterPipe = FilterPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRDtBQUVwRCxpRUFBaUU7QUFJakUsSUFBYSxVQUFVO0lBQXZCO0lBVUEsQ0FBQztJQVJDLDhCQUFTLEdBQVQsVUFBVSxLQUFLLEVBQUUsSUFBSztRQUNwQiwwQkFBMEI7UUFDckIsSUFBQSxvQkFBVSxDQUFTO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSTtZQUN0QixNQUFNLENBQUMsT0FBTyxVQUFVLElBQUksV0FBVyxJQUFJLFVBQVUsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEksQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsaUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLFVBQVU7SUFIdEIsV0FBSSxDQUFDO1FBQ0osSUFBSSxFQUFFLFlBQVk7S0FDbkIsQ0FBQztHQUNXLFVBQVUsQ0FVdEI7QUFWWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gVGVsbCBBbmd1bGFyMiB3ZSdyZSBjcmVhdGluZyBhIFBpcGUgd2l0aCBUeXBlU2NyaXB0IGRlY29yYXRvcnNcbkBQaXBlKHtcbiAgbmFtZTogJ2ZpbHRlclBpcGUnXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWUsIGFyZ3M/KSB7XG4gICAgLy8gRVM2IGFycmF5IGRlc3RydWN0dXJpbmdcbiAgICBsZXQgW3NlYXJjaFRleHRdID0gYXJncztcbiAgICByZXR1cm4gdmFsdWUuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIHR5cGVvZiBzZWFyY2hUZXh0ID09ICd1bmRlZmluZWQnIHx8IHNlYXJjaFRleHQgPT0gJycgfHwgaXRlbS50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgfSk7XG4gIH1cblxufVxuIl19