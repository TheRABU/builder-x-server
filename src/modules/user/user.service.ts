import AppError from "../../helpers/AppError";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcryptjs";

const createUserService = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;

  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    throw new AppError(403, "User already exists");
  }

  const hashedPassword = await bcrypt.hash(password as string, 10);

  const user = await User.create({
    email,
    password: hashedPassword,
    ...rest,
  });
  return user;
};

export const UserServices = {
  createUserService,
};
