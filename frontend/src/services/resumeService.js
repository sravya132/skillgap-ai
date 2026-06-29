import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const resumeService = {

  uploadResume: async (file) => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await API.post(
      "/api/resume/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  analyzeResume: async (resumeId) => {

    const response = await API.post(
      `/api/resume/analyze/${resumeId}`
    );

    return response.data;
  },

  getAISummary: async (resumeId) => {

  const response = await API.get(
    `/api/resume/ai-summary/${resumeId}`
  );

  return response.data;

},
  getSkillGap: async (resumeId) => {

  const response = await API.post(
    `/api/resume/skills/${resumeId}`
  );

  return response.data;
},

};

export default resumeService;