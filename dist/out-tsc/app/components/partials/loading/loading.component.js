import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoadingComponent = class LoadingComponent {
    constructor(loadingService) {
        loadingService.isLoading.subscribe((isLoading) => {
            this.isLoading = isLoading;
        });
    }
    ngOnInit() {
    }
};
LoadingComponent = __decorate([
    Component({
        selector: 'app-loading',
        templateUrl: './loading.component.html',
        styleUrls: ['./loading.component.css']
    })
], LoadingComponent);
export { LoadingComponent };
//# sourceMappingURL=loading.component.js.map