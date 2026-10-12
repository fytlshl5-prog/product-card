//Задание 2 (1 уровень)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.filter((num) => num >= 5);

//Задание 3

const chancellery = [
  "Точилка",
  "Ластик",
  "Цветные карандаши",
  "Фломастеры",
  "Гелевые ручки",
  "Шариковые ручки",
];
const newChancellery = chancellery.includes("Фломастеры");
const newChancellery2 = chancellery.includes("Помада");

//Задание 4

numbers.reverse();
chancellery.reverse();

//Задание 5-6 (2 уровень)

import { currentComments } from "./comments.js";

//Задание 7

const commentsMail = currentComments.filter((comment) =>
  comment.email.includes(".com"),
);

//Задание 8

function usersId(idArray) {
  return idArray.map((currentComments) => {
    return {
      ...currentComments,
      postId: currentComments.id <= 5 ? 2 : 1,
    };
  });
}

const updatePostId = usersId(currentComments);

//Задание 9

const reducedUsers = currentComments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));

//Задание 10

const lenghtComm = currentComments.map((comms) => ({
  ...comms,
  isInvalid: comms.body.length > 180,
}));

//задание 11 (уровень 3)
//с помощью reduce
const emailReduce = currentComments.reduce((acc, comm) => {
  acc.push(comm.email);
  return acc;
}, []);

//с помощью map
const emailMap = currentComments.map((comm) => comm.email);

//Задание 12

//to String
const commsToString = emailReduce.toString();

//join
const commsJoin = emailReduce.join();
