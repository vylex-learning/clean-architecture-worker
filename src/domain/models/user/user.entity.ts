export type User = {
  id: number;
  email: string;
  password: string;
  profileId: number;
  firstName: string;
  lastName: string;
  nickName: string;
  createdAt: Date;
  updatedAt: Date;
  image?: string;
  deletedAt?: Date;
};
