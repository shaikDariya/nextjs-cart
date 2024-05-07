const fetchData = async () => {
  await new Promise((res) => setTimeout(res, 3000));
};

export default async function () {
  await fetchData();
  return <div>Data Fetched...</div>;
}
