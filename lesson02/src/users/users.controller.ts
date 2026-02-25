import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get() // GET /users or /users?role=value
    /*findAll función del provider 
        @query('role') defino que query parametro estoy buscando (el nombre del parametro)
        role?: 'INTERN' | 'ENGINEER' | 'ADMIN' con type script defino role y sus posbiles valores
    */
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return []
    }

    @Get(':id') // GET /users/:id
    /*  param es un decorador que identifica el paramentro que se envia por la url. A este decorador le ponemos el nombre del parametro
        findOne(@Param('id') id: string) pri,mero el valor y luego el tipo que es  
   */ 
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post() // POST /users 
    /*@body es otro decorador que coje lo body que se envia.
    cretae (@body() user: []) después decimos el tipo que es el body, un user
    */
    create(@Body() user: {}) {
        return user
    }

    @Patch(':id') // PATCH /users/:id
    /* update(@Param('id') id: string, @body() userUpdate:{}) obtenemos el parametro y el body
    */
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate }
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id') id: string) {
        return { id }
    }

}
