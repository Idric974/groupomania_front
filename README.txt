//*✅👉 Casse des noms des fichiers.
Components = PascalCase
Views = PascalCase
CSS = kebab-case
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖


      const userIdStorage = localStorage.getItem("groupomania");

      const objJson = JSON.parse(userIdStorage);
      const token = objJson.token;

      const UserIdJson = JSON.parse(userIdStorage);
      const userId = UserIdJson.userId;