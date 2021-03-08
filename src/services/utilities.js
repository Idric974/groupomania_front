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

//*✅👉 Exportation du userId.
const localStorageUserId = localStorage.getItem("groupomania");
const UserIdJson = JSON.parse(localStorageUserId);
export const userId = UserIdJson.userId;
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//*✅👉 Exportation du userToken.
const localStorageToken = localStorage.getItem("groupomania");
const TokenJson = JSON.parse(localStorageToken);
export const token = TokenJson.token;
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
