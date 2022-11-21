import SomethingPersonModel from "./somethingPersonModel";

export default function initialPeopleData(): SomethingPersonModel[] {
  return [
    { id: 1, lastName: "Squarepants", firstName: "Spongebob", age: 35 },
    { id: 2, lastName: "Tentacles", firstName: "Squidward", age: 42 },
    { id: 3, lastName: "Krabs", firstName: "Eugene", age: 58 },
  ];
}