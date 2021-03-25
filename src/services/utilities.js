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

//*✅👉 Récupérer le userId.
export const userIdTest = () => {
  const userIdStorage = localStorage.getItem("groupomania");
  const objJson = JSON.parse(userIdStorage);
  const token = objJson.token;
  console.log(
    "%c ✔️ TEST TOKEN ===>>",
    "color:green ;  font-size: 15px",
    token
  );

  //* ✅ 👉 Définition des en-têtes.
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  console.log(
    "%c ✔️ TEST HEADER ===>>",
    "color:green ;  font-size: 15px",
    headers
  );

  //* ✅ 👉 Définition du bodys.
  const params = token;

  //* ✅ 👉 Définition du bodys.
  const body = body;
  console.log("%c ✔️ BODY ===>>", "color:green ;  font-size: 15px", body);

  //* ✅ 👉 Définition de l'URL de la requête.
  let url = "http://localhost:3000/api/user/userId/" + params;
  console.log("%c ✔️ URL ===>>", "color:green ;  font-size: 15px", url);

  //* ✅ 👉 Définition des paramètres de la requête.
  const parametresDeRequete = {
    method: "POST",
    headers: headers,
    body: body,
  };
  console.log(
    "%c ✔️ PARAMETRES DE REQUETE ===>>",
    "color:green ;  font-size: 15px",
    parametresDeRequete
  );

  //* ✅ 👉 la requête.
  fetch(url, parametresDeRequete)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      response.json().then(function(data) {
        console.log("userId ====>>", data.data);
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
};
userIdTest();

//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
