import { UserModel } from "../../models/UserModel";
import userAPI, { UserModelAPI } from "../../services/userAPI";
import { login, updateProfile } from "../reducers/userSlice";
import { AppThunk } from "../store/store";


export const loginAction = (userName: string, passWord: string): AppThunk => async (dispatch, getState) => {

    try {
        const userLogin: UserModelAPI = { userName, passWord };
        const res = await userAPI.login(userLogin);
        if (res) {
            const profile = new UserModel(res.id, res.userName, res.lastName, res.firstName)
            dispatch(login(true));
            dispatch(updateProfile(profile))
        }
    } catch (error) {

    }
};