"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const jquery = require("jquery");
const $ = jquery;
(function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();
let SignUpComponent = class SignUpComponent {
    ngOnInit() {
    }
};
SignUpComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'app-sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.sass']
    })
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map