import { IsNotEmpty } from "class-validator";

export class UseCase {
    
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    heading: string;

    category: Category
}

export enum Category {
    JAVA = 'JAVA',
    JS   = 'JS'
}