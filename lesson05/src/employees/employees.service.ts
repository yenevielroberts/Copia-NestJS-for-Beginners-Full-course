import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) { } //Injectamos el database service

  //Los metodos tienen que ser asyn con el database services
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployeeDto
    })
  }

  async findAll(role?: Role) {
    if (role) return this.databaseService.employee.findMany({
      where: {
        role, //Cuando el campo y el nombre de la variable tienen el mismo nombre no hace falta ponerlo así: id: id,
      }
    })
    return this.databaseService.employee.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.employee.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id,
      },
      data: updateEmployeeDto, //Los nuevos datos
    })
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({
      where: {
        id,
      }
    })
  }
}
