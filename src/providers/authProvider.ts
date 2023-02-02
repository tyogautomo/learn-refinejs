import { AuthProvider } from "@pankod/refine-core";

const mockUsers = [{ email: "john@mail.com" }, { email: "jane@mail.com" }];

const authProvider: AuthProvider = {
  login: ({ email, password }) => {
    console.log(email, password, 'BOOMMM');
  //   const user = mockUsers.find((item) => item.email === email);
  //   if (user) {
  //     localStorage.setItem("auth", JSON.stringify(user));
  //     return Promise.resolve();
  // }
  // return Promise.reject();
    return Promise.resolve();
  },
  checkAuth: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  checkError: () => Promise.resolve(),
};

export default authProvider;
