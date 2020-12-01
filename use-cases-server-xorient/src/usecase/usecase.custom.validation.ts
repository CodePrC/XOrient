import { BadGatewayException, BadRequestException, PipeTransform } from '@nestjs/common';
import { Category } from './usecase.model';

export class UseCaseCustomValidation implements PipeTransform {
    readonly allowedCategory = ['JAVA','JS'];

    transform(value: any){
        
        console.log("UseCaseCustomValidation", value);
      
        if(value === undefined)
            throw new BadRequestException("Category is not defined");
        
        value = value.toUpperCase();// method to UpperCase
            
        // coorect way of testing the pressence
        if(this.allowedCategory.indexOf(value)<0)// use indexOf to check the pressence of value on array
            throw new BadGatewayException("Does not have allowed value");
        else
            return true;

    }
}