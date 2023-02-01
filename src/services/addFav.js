const ENDPOINT = "https://deno-api-users-login.herokuapp.com";

const FAVS = [];

export default function addFav({ id, jwt }) {
  return new Promise((resolve, reject) => {
    if (jwt === "token ok") {
      if (!FAVS.includes(id)) {
        FAVS.push(id);
      }
      resolve([...FAVS]);
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
