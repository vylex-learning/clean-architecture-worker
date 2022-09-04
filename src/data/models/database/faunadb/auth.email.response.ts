export interface AuthEmailResponse {
  data: {
    findUserByEmailAndPassword: {
      _id: number;
      firstName: string;
      lastName: string;
      nickName: string;
      email: string;
      doc: string;
      password: string;
      birthday: Date;
      userRole: string;
      createdAt: Date;
      updatedAt: Date;
      deletedAt: Date;
    };
  };
}
