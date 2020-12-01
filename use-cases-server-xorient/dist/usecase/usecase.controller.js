"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsecaseController = void 0;
const common_1 = require("@nestjs/common");
const usecase_custom_validation_1 = require("./usecase.custom.validation");
const usecase_model_1 = require("./usecase.model");
const usecase_service_1 = require("./usecase.service");
let UsecaseController = class UsecaseController {
    constructor(useCaseService) {
        this.useCaseService = useCaseService;
    }
    getAllUseCases() {
        return this.useCaseService.getAllUseCases();
    }
    getUseCaseByCategory(category) {
        console.log(category);
        return this.useCaseService.getUseCaseByCategory(category);
    }
    getUseCaseById(id, category) {
        return this.useCaseService.getUseCaseById(id);
    }
    createUseCaseByIdAndHeading(id, heading) {
        console.log(id, heading);
        return this.useCaseService.createUseCase(id, heading);
    }
    createUseCaseByObject(body) {
        console.log(body);
        const { id, heading } = body;
        return this.useCaseService.createUseCase(id, heading);
    }
    createUseCaseByDTO(useCase) {
        console.log(useCase);
        const { id, heading } = useCase;
        return this.useCaseService.createUseCase(id, heading);
    }
};
__decorate([
    common_1.Get('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UsecaseController.prototype, "getAllUseCases", null);
__decorate([
    common_1.Get('/category'),
    __param(0, common_1.Query('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], UsecaseController.prototype, "getUseCaseByCategory", null);
__decorate([
    common_1.Post('/:id'),
    __param(0, common_1.Param()), __param(1, common_1.Body('category', usecase_custom_validation_1.UseCaseCustomValidation)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", usecase_model_1.UseCase)
], UsecaseController.prototype, "getUseCaseById", null);
__decorate([
    common_1.Post('/fields'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body('id')), __param(1, common_1.Body('heading')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Array)
], UsecaseController.prototype, "createUseCaseByIdAndHeading", null);
__decorate([
    common_1.Post('/obj'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsecaseController.prototype, "createUseCaseByObject", null);
__decorate([
    common_1.Post('/objDTO'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usecase_model_1.UseCase]),
    __metadata("design:returntype", void 0)
], UsecaseController.prototype, "createUseCaseByDTO", null);
UsecaseController = __decorate([
    common_1.Controller('usecase'),
    __param(0, common_1.Inject(usecase_service_1.UseCaseService)),
    __metadata("design:paramtypes", [usecase_service_1.UseCaseService])
], UsecaseController);
exports.UsecaseController = UsecaseController;
//# sourceMappingURL=usecase.controller.js.map