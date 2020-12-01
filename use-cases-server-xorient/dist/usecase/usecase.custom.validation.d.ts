import { PipeTransform } from '@nestjs/common';
export declare class UseCaseCustomValidation implements PipeTransform {
    readonly allowedCategory: string[];
    transform(value: any): boolean;
}
