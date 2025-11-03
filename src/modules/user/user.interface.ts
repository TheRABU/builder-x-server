import { Types } from "mongoose";
import { Preferences } from "../preference/preference.interface";

export enum Role {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface IUser {
  _id?: Types.ObjectId;
  name: string;
  email: string | undefined;
  password?: string;
  role: Role;
  selectedPreference: Preferences;
  createdAt?: Date;
}
