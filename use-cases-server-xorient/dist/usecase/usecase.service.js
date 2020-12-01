"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseService = void 0;
const common_1 = require("@nestjs/common");
const usecase_model_1 = require("./usecase.model");
let UseCaseService = class UseCaseService {
    constructor() {
        this.UseCase = [];
    }
    getAllUseCases() {
        return this.UseCase;
    }
    getUseCaseById(id) {
        return this.UseCase.find(usecase => { usecase.id === id; });
    }
    createUseCase(id, heading) {
        console.log(id, heading);
        const UseCase = {
            id,
            heading,
            category: usecase_model_1.Category.JAVA
        };
        this.UseCase.push(UseCase);
        return this.UseCase;
    }
    getUseCaseByCategory(category) {
        console.log('the Data', this.UseCase);
        const found = this.UseCase.filter(usecase => { return usecase.category === category; });
        console.log(found);
        if (!found)
            throw new common_1.NotFoundException('Not found the "{category}"');
        else
            return found;
    }
};
UseCaseService = __decorate([
    common_1.Injectable()
], UseCaseService);
exports.UseCaseService = UseCaseService;
//# sourceMappingURL=usecase.service.js.map