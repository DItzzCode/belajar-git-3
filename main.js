export default async function getAPI( api ) {
const getApi = await fetch(api);
const result = await getApi.json();
const { data } = result;
return data

}