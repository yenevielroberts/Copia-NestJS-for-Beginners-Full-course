import { CreateUserDto } from "./create-user.dto"
import { PartialType } from "@nestjs/mapped-types"

//Se tiene que instalar: npm i @nestjs/mapped-types -D

export class UpdateUserDto extends PartialType(CreateUserDto) { }

