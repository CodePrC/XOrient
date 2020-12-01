"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseCustomValidation = void 0;
const common_1 = require("@nestjs/common");
class UseCaseCustomValidation {
    constructor() {
        this.allowedCategory = ['JAVA', 'JS'];
    }
    transform(value) {
        console.log("UseCaseCustomValidation", value);
        if (value === undefined)
            throw new common_1.BadRequestException("Category is not defined");
        value = value.toUpperCase();
        if (this.allowedCategory.indexOf(value) < 0)
            throw new common_1.BadGatewayException("Does not have allowed value");
        else
            return true;
    }
}
exports.UseCaseCustomValidation = UseCaseCustomValidation;
//# sourceMappingURL=usecase.custom.validation.js.map