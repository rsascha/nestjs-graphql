import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-user.input';
import { UserArgs } from './dto/user.args';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
    async create(data: NewUserInput): Promise<User> {
        return {} as any;
    }

    async findOneById(id: string): Promise<User> {
        return {} as any;
    }

    async findAll(recipesArgs: UserArgs): Promise<User[]> {
        return [] as User[];
    }

    async remove(id: string): Promise<boolean> {
        return true;
    }
}
