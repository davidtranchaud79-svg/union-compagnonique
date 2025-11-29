import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const CLIENT_TOKEN = import.meta.env.VITE_CLIENT_TOKEN;
const JWT = import.meta.env.VITE_JWT_DUMMY || "DEV_JWT";

async function callAPI(action, data = {}) {
  if (!API_URL || !CLIENT_TOKEN) {
    console.warn("API non configurée → données d'exemple.");
    return { ok: false, error: "API non configurée" };
  }
  try {
    const res = await axios.post(API_URL, {
      client_token: CLIENT_TOKEN,
      jwt: JWT,
      action,
      data
    });
    return res.data;
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

export const api = {
  listMembers: () => callAPI("listMembers"),
  listCotisations: () => callAPI("listCotisations"),
  listLogements: () => callAPI("listLogements"),
  listBanquetJuin: () => callAPI("listBanquetJuin"),
  listBanquetNovembre: () => callAPI("listBanquetNovembre"),
  listEvents: () => callAPI("listEvents"),
  listSocial: () => callAPI("listSocial"),
  listSumUp: () => callAPI("listSumUp")
};
