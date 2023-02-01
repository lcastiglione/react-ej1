const ENDPOINT = "https://deno-api-users-login.herokuapp.com";

export const USERS = ["admin", "pepe"];

export default function register({ username, password }) {
  return new Promise((resolve, reject) => {
    if (password !== "1234") {
      reject(new Error(`Password not valid`));
      return;
    }
    if (username && USERS.every((user) => user !== username)) {
      USERS.push(username);
      resolve(true);
    } else {
      reject(
        new Error(`An account is already registered with user '${username}'`)
      );
    }
  });
}
