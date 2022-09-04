import { User } from '@/domain/models/user/user.entity';

export const UserListMock = (): User[] => [
  {
    id: 1,
    email: 'henrique.bissoli@vylex.com.br',
    password: '123456',
    userRole: 'ADMIN',
    firstName: 'Henrique',
    lastName: 'Bissoli Silva',
    nickName: 'Shadowz3n',
    createdAt: new Date(2022, 9, 3),
    updatedAt: new Date(2022, 9, 3),
  },
  {
    id: 2,
    email: 'emp.shad@gmail.com',
    password: 'abcdef',
    userRole: 'ADMIN',
    firstName: 'Henrique',
    lastName: 'Bissoli Silva',
    nickName: 'Shad',
    createdAt: new Date(2022, 9, 3),
    updatedAt: new Date(2022, 9, 3),
  },
];
