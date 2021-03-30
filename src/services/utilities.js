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

let userId = "";

let loggedUserId = () => {
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

  fetch(url, parametresDeRequete)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      response.json().then(function(data) {
        userId = data.data;

        console.log(
          "%c ⚠️ Utilities Logged User Id ⚠️ ===>>",
          "color:red ;  font-size: 15px",
          userId
        );
      });
    })

    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
};

loggedUserId();
