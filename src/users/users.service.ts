import { Injectable } from '@nestjs/common';
import { RegisterUserRequest } from 'src/models/registerUserRequest';
import { User } from 'src/models/user';

const users: User[] = [
  {
    id: 42,
    email: 'example2@mail.com',
    firstName: 'John',
    lastName: 'Doe',
    password: '123456',
    avatar: '/assets/avatars/person.png',
  },
  {
    id: 11,
    email: 'jonny@gmail.com',
    firstName: 'Johnny',
    lastName: 'Depp',
    password: 'qwerty',
    avatar: '/assets/avatars/feedThird.png',
  },
];

@Injectable()
export class UsersService {
  register(userInfo: RegisterUserRequest): number {
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    const user: User = { id: newId, ...userInfo };
    users.push(user);
    return newId;
  }

  getUser(login: string, password: string): User | undefined {
    return users.find((u) => u.email === login && u.password === password);
  }
}
