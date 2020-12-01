import { Injectable, NotFoundException, ParseUUIDPipe } from '@nestjs/common';
import { UseCase, Category } from './usecase.model';


@Injectable()
export class UseCaseService {
    private UseCase: UseCase[] = []; // instantiation is required, makes it dynamic in size

    getAllUseCases() {
        return this.UseCase;
    }

    getUseCaseById(id: string) : UseCase {
        return this.UseCase.find(usecase => {usecase.id === id}) ;
    }


    createUseCase(id: string, heading: string) : UseCase[] {
        console.log(id, heading);

        const UseCase = {
            id,
            heading, 
            category: Category.JAVA
        }
        
        this.UseCase.push(UseCase);

        return this.UseCase;
    }

    getUseCaseByCategory(category: Category){
        console.log('the Data',this.UseCase);
        // filter return a new arr
        const found =  this.UseCase.filter(usecase => {return usecase.category as Category=== category as Category});// adding curly braces does not return and does not filter the results, I think it assumes multilne, so need to add explicit return , or better if one line then do not add {}
        console.log(found);
        if(!found)
            throw new NotFoundException('Not found the "{category}"')
        else 
            return found;
    }

}
