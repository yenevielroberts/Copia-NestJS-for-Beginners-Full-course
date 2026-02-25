import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()// decoradores de la clase class-validator validan los datos. Estamos usando Pipe vilidation
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {
        message: 'Valid role required'
    })
    role: "INTERN" | "ENGINEER" | "ADMIN";
}