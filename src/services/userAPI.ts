// import { UserModel } from "../models/UserModel";
// import axiosClient from "./axiosClient";

import { UserModel } from "../models/UserModel";

export interface UserModelAPI {
  userName: string,
  passWord: string
}

interface userAPIState {
  login: (user: UserModelAPI) => Promise<UserModel>
}


class UserAPI implements userAPIState {
  login = async (user: UserModelAPI) => {

    return {
      id: 12312313,
      userName: "Nhat Linh",
      firstName: "Nhat",
      lastName: "Linh",
    }
  }
}
const userAPI = new UserAPI();

export default userAPI;
