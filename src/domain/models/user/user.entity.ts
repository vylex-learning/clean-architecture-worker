export type User = {
  id: number;
  email: string;
  password: string;
  userRole: string;
  firstName: string;
  lastName: string;
  nickName: string;
  createdAt: Date;
  updatedAt: Date;
  image?: string;
  deletedAt?: Date;
};
