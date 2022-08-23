export type LogType = {
  userId: string;
  type: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};
