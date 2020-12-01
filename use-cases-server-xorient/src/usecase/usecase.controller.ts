import { Body, Controller, Get, Inject, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UseCaseCustomValidation } from './usecase.custom.validation';
import { Category, UseCase } from './usecase.model';
import { UseCaseService } from './usecase.service';


@Controller('usecase')
export class UsecaseController {

    constructor(@Inject(UseCaseService) private useCaseService: UseCaseService){

    }

    @Get('/all')
    getAllUseCases() : UseCase[]{
        return this.useCaseService.getAllUseCases();
    }
    
    @Get('/category')
    getUseCaseByCategory(@Query('category') category: Category ) : UseCase[]{
        console.log(category);
        return this.useCaseService.getUseCaseByCategory(category);
    }
    
    @Post('/:id')
    getUseCaseById(@Param() id: string, @Body('category', UseCaseCustomValidation) category) : UseCase{ // yes we can use param, query and body together
        return this.useCaseService.getUseCaseById(id);
    }
    
    @Post('/fields')
    @UsePipes(ValidationPipe)
    createUseCaseByIdAndHeading(@Body('id') id, @Body('heading') heading) : UseCase[] {  // Body works with POST URL Encoded
        console.log(id, heading);
         return this.useCaseService.createUseCase(id, heading);
    }
    
    @Post('/obj')
    @UsePipes(ValidationPipe)
    createUseCaseByObject(@Body() body){
        console.log(body);
        const {id, heading} = body;
         return this.useCaseService.createUseCase(id, heading);
    }
    
    @Post('/objDTO')
    @UsePipes(ValidationPipe)
    createUseCaseByDTO(@Body() useCase: UseCase ){ // Qualify the  the DTO with the Model Validator class , to use the validators
        console.log(useCase);
        const {id, heading} = useCase;
         return this.useCaseService.createUseCase(id, heading);
    }


}
