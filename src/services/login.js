const ENDPOINT = "https://deno-api-users-login.herokuapp.com";

export default function login({ username, password }) {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "1234") {
      resolve("token ok");
    } else {
      reject(new Error("Response is NOT ok"));
    }
  });
  /*
  return fetch(`${ENDPOINT}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Response is NOT ok");
      return res.json();
    })
    .then((res) => {
      const { jwt } = res;
      return jwt;
    });
    */
}
