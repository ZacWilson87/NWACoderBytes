import axios from "axios";

export async function getDatabaseData(databaseId) {
  try {
    console.log("databaseId", databaseId)
    const response = await axios.post(`http://localhost:3000/query-notion-database`, null, {
      params: { databaseId },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching data from Notion:", error.message);
    return [];
  }
}
