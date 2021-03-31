import axios from "axios";

//*✅👉 Formatage de la date.
export const FORMAT_DATE = (dateStr) => {
  const troncated = dateStr.split(".")[0];
  const dates = troncated.split("T");
  const dateOne = dates[0]
    .split("-")
    .reverse()
    .join("/");

  return `Le: ${dateOne}, à ${dates[1]}`;
};

//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

let data;

export let getUserId = async function() {
  try {
    let storageToken = localStorage.getItem("groupomania");
    let objJson = JSON.parse(storageToken);
    let token = objJson.token;

    let params = token;

    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);

    let url = "http://localhost:3000/api/user/userId/" + params;

    const parametresDeRequete = {
      method: "GET",
      headers: headers,
    };

    let response = await fetch(url, parametresDeRequete);
    if (response.ok) {
      data = await response.json();

      console.log(
        "%c ✔️ DATA FROM UTILITIES ===>>",
        "color:orange ;  font-size: 15px",
        data
      );
    } else {
      console.error("retour du server : ", response.status);
    }
  } catch (e) {
    console.log(
      "%c ❌ CATCH ERROR ===>>",
      "color:orange ;  font-size: 15px",
      e
    );
  }
};

getUserId();

//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

async function getLoggedId() {
  try {
    let storageToken = localStorage.getItem("groupomania");
    let objJson = JSON.parse(storageToken);
    let token = objJson.token;

    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);

    const parametresDeRequete = {
      headers: headers,
      method: "GET",
    };

    let url = "http://localhost:3000/api/post/readAllPostsAxios";

    const response = await axios.get(url, parametresDeRequete);
    console.log(
      "%c TEST AXIOS: ✔️ Retour = ",
      "color:orange ;  font-size: 15px",
      response
    );
  } catch (error) {
    console.error(
      "%c TEST AXIOS: ❌ Retour = ",
      "color:orange ;  font-size: 15px",
      error
    );
  }
}

getLoggedId();
