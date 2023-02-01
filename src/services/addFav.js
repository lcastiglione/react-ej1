const ENDPOINT = "https://deno-api-users-login.herokuapp.com";

let favs = [];

export default function addFav({ id, jwt }) {
  return new Promise((resolve, reject) => {
    if (jwt === "token ok") {
      favs.push(id);
      resolve(favs);
    } else {
      reject(new Error("Response is NOT ok"));
    }
  });
}

/*
export default function addFav ({ id, jwt }) {
  return fetch(`${ENDPOINT}/favs/${id}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({jwt})
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const { favs } = res
    return favs
  })
}
*/
