import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../helpers/SuccessResponse";
import { AuthServices } from "./auth.services";

const credentialsLogin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const loginInfo = await AuthServices.credentialsLogin(req.body);

    res.cookie("refreshToken", loginInfo.refreshToken, {
      httpOnly: true,
      secure: false,
    });

    sendResponse(res, {
      success: true,
      message: "Logged in successfully",
      statusCode: 201,
      data: loginInfo,
    });
  }
);

const logOut = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.clearCookie("accessToken", {
        httpOnly: true,
        secure: false,
        // sameSite: "lax",
      });
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: false,
        // sameSite: "lax",
      });

      res.status(201).json({
        success: true,
        message: "Logged out successfully!",
        body: null,
      });
    } catch (error) {
      console.log("error at auth.controller.ts LOGOUT::", error.message);
      next();
    }
  }
);

export const AuthController = {
  credentialsLogin,
  logOut,
};
