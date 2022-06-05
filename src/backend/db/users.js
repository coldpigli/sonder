import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Piyush",
    lastName: "Das",
    username: "coldpigli",
    email: "piyushdas98@gmail.com",
    password: "Piyush@123",
    profileImg: "https://ik.imagekit.io/avavya/Sonder/piyush_eating_q6saDRQSv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654362769580",
    bio: "'Hooked' on react lately, flirting with Javascript simultaneously. Following NeoGcamp religiously. Loves dad jokes, music and quiet water bodies",
    portfolioUrl: "",
    bookmarks: [], 
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
