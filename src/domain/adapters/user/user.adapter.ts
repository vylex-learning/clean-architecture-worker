import { User } from '@/domain/models/user/user.entity';

export class UserAdapter {
  static create(userObject: {
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
  }): User {
    return {
      id: userObject.id,
      email: userObject.email,
      password: userObject.password,
      profileId: userObject.profileId,
      firstName: userObject.firstName,
      lastName: userObject.lastName,
      nickName: userObject.nickName,
      createdAt: userObject.createdAt,
      updatedAt: userObject.updatedAt,
      image: userObject.image,
      deletedAt: userObject.deletedAt,
    };
  }
}
