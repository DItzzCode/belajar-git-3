import getAPI from './main.js';


(async () => {
  const api = await getAPI("https://reqres.in/api/users");
  api.forEach(({email}) => {
    console.log("email :" , email);
  })
})();
