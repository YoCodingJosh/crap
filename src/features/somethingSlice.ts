import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialPeopleData from "./initialPeopleData";
import SomethingPersonModel from "./somethingPersonModel";
import { RootState } from "../store";

export interface SomethingState {
  people: SomethingPersonModel[];
}

const initialState: SomethingState = {
  people: initialPeopleData().map(
    (person) => new SomethingPersonModel(person.id, person.firstName, person.lastName, person.age)
  ),
};

export const somethingSlice = createSlice({
  name: "something",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<SomethingPersonModel>) => {
      state.people.push(action.payload);
    },
    removePerson: (state, action: PayloadAction<SomethingPersonModel>) => {
      state.people = state.people.filter((person) => person.id !== action.payload.id);
    }
  },
});

export const { addPerson, removePerson } = somethingSlice.actions;

export const selectPeople = (state: RootState) => state.something.people;

export default somethingSlice.reducer;
