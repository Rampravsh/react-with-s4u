import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";

export const getEmployees = createAsyncThunk(
  "employee/getEmloyees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("employeeMng");
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  },
);
