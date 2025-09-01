import { Injectable } from '@nestjs/common';
import { PrismasService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create_user.dto"

@Injectable()
export class UsersService {
  constructor(private prisma: PrismasService) {

    async create(data: CreateUserDto){
      return this.prisma.user.create({
        data: {
          nombre: data.nombre,
          email: data.email
          password: data.password,
          rolId: data.rolId
        }
      })
    }
  }
}
