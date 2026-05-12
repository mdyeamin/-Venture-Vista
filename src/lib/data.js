export const getDestinations = async () => {
  const res = await fetch("http://localhost:8000/destinations");
  const date = await res.json();
  return date;
};

export const getSingleDestinationsById = async (id) => {
  const res = await fetch(`http://localhost:8000/destinations/${id}`);
  const data = await res.json();
  return data;
};
