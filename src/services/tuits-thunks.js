import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./tuits-service";

export const createTuitsThunk = createAsyncThunk(
  'tuits/createTuits',
    async (newTuit) => {
    return await service.createTuit(newTuit)
  }
);

export const findTuitsThunk = createAsyncThunk(
  'tuits/findTuits',
  async () => await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk(
  'tuits/deleteTuit',
  async (tuitId) => {
    await service.deleteTuit(tuitId);
    return tuitId;
  });

export const updateTuitThunk =
  createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
      await service.updateTuit(tuit)
)
