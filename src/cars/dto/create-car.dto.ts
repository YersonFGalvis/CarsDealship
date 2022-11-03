
//segun esta clase, yo espero que lo que me manden a mi post o patch
//sea igual a los atributos de la clase

import { IsString } from "class-validator";

export class CreateCarDto {

    // @IsString({message: `The brand most be a cool string`})
    @IsString()
    readonly brand: string;

    @IsString()
    readonly model: string; 
}