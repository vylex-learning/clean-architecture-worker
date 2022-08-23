export type UserRoles = {
  name: 'admin' | 'normal';
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  userRoles: UserRoles[];
  firstName: string;
  lastName: string;
  userName: string;
  avatar: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};
