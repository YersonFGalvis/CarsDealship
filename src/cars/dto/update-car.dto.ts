
//segun esta clase, yo espero que lo que me manden a mi post o patch
//sea igual a los atributos de la clase

import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional() 
    readonly id?: string;

    @IsString()
    @IsOptional() 
    readonly brand?: string;

    
    @IsString()
    @IsOptional() 
    readonly model?: string; 
}