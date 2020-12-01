import { Category, UseCase } from './usecase.model';
import { UseCaseService } from './usecase.service';
export declare class UsecaseController {
    private useCaseService;
    constructor(useCaseService: UseCaseService);
    getAllUseCases(): UseCase[];
    getUseCaseByCategory(category: Category): UseCase[];
    getUseCaseById(id: string, category: any): UseCase;
    createUseCaseByIdAndHeading(id: any, heading: any): UseCase[];
    createUseCaseByObject(body: any): UseCase[];
    createUseCaseByDTO(useCase: UseCase): UseCase[];
}
