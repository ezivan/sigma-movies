export default async function getMovies(url) {
  try {
    const response = await fetch(url),
      json = await response.json();

    if (!response.ok)
      throw { status: response.status, statusText: response.statusText };

    return json;
  } catch (error) {
    console.info(error);
  }
}
