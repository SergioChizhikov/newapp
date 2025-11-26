

const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivanov@mail.ru",
  id: "1",
  about: "Тут я рассказываю о себе",
  avatar:
    "https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=240&q=70",
};

const users = {
  0: { name: "Ксения", lastname: "Петрова" },
  1: { name: "Григорий", lastname: "Иванов" },
  2: { name: "Виктор", lastname: "Юрьев" },
};

export function getUser() {
  return user;
}
export function getUsers() {
  return users;
}
