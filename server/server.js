const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const API_BASE_URL = "https://api.notion.com/v1";
console.log("NOTION_API_KEY", NOTION_API_KEY, API_BASE_URL);
app.use(cors());

app.post("/query-notion-database", async (req, res) => {
    const databaseId = req.query.databaseId;
    console.log("databaseIdZZ", databaseId);
  const query = {};

  if (!databaseId) {
    res.status(400).json({ error: "Missing databaseId query parameter" });
    return;
  }

  try {
    const response = await axios.post(
      `${API_BASE_URL}/databases/${databaseId}/query`,
      query,
      {
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response.data", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
