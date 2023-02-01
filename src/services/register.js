const ENDPOINT = "https://deno-api-users-login.herokuapp.com";

export default function register({ username }) {
  console.log(username);
  return new Promise((resolve, reject) => {
    if (username && username !== "admin") {
      resolve(true);
    } else {
      reject(new Error("Usuario no valido"));
    }
  });
}
