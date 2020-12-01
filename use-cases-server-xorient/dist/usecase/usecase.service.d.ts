import { UseCase, Category } from './usecase.model';
export declare class UseCaseService {
    private UseCase;
    getAllUseCases(): UseCase[];
    getUseCaseById(id: string): UseCase;
    createUseCase(id: string, heading: string): UseCase[];
    getUseCaseByCategory(category: Category): UseCase[];
}
