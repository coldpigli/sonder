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
    profileImg:
      "https://ik.imagekit.io/avavya/Sonder/piyush_eating_q6saDRQSv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654362769580",
    bio: "'Hooked' on react lately, flirting with Javascript simultaneously. Following NeoGcamp religiously. Loves dad jokes, music and quiet water bodies",
    portfolioUrl: "https://peerlist.io/piyushdas",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { 
        firstName: "Arushi",
        lastName: "Singh",
        username: "arushii97",
        profileImg:
          "https://ik.imagekit.io/avavya/Sonder/arushi_-ABxLV0-L.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1654451835556",
      },
      { 
        firstName: "Nakul",
        lastName: "Sharma",
        username: "bhratashree",
        email: "nakul@gmail.com",
        profileImg:
          "https://ik.imagekit.io/avavya/Sonder/nakul_Rs-XDbGCQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654451729877",
      },
      {
        firstName: "Krituraj",
        lastName: "Jaiswal",
        username: "kritu",
        email: "krituraj@gmail.com",
        password: "Krituraj@123",
        profileImg:
          "https://ik.imagekit.io/avavya/Sonder/Krituraj_lm1sEBG1XK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654451729559",
      },
    ],
    followers: [{
    firstName: "Sreejith",
    lastName: "K",
    username: "sreejithk",
    email: "sreejith@gmail.com",
    profileImg:
      "https://ik.imagekit.io/avavya/Sonder/srejith_iIStFeFSX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654451731164",
    },
    {
      firstName: "Rahul",
      lastName: "Ji",
      username: "rahulji",
      email: "rahul@gmail.com",
      profileImg:
        "https://ik.imagekit.io/avavya/Sonder/rahulji_ZQ-WG_ndk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654451730679",
    }
  ],
  },
  {
    _id: uuid(),
    firstName: "Arushi",
    lastName: "Singh",
    username: "arushii97",
    email: "arushi@gmail.com",
    password: "Arushi@123",
    profileImg:
      "https://ik.imagekit.io/avavya/Sonder/arushi_-ABxLV0-L.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1654451835556",
    bio: "User1",
    portfolioUrl: "www.arushisingh.com",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        firstName: "Piyush",
        lastName: "Das",
        username: "coldpigli",
        email: "piyushdas98@gmail.com",
        profileImg:
          "https://ik.imagekit.io/avavya/Sonder/piyush_eating_q6saDRQSv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654362769580",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Sreejith",
    lastName: "K",
    username: "sreejithk",
    email: "sreejith@gmail.com",
    password: "Sreejith@123",
    profileImg:
      "https://ik.imagekit.io/avavya/Sonder/srejith_iIStFeFSX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654451731164",
    bio: "I am tall.",
    portfolioUrl: "https://github.com/srejitk",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        firstName: "Piyush",
        lastName: "Das",
        username: "coldpigli",
        email: "piyushdas98@gmail.com",
        profileImg:"https://ik.imagekit.io/avavya/Sonder/piyush_eating_q6saDRQSv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654362769580",
      }
    ],
    followers: [],
  },
  {
    _id: uuid(),
    firstName: "Vaibhav",
    lastName: "Mahalle",
    username: "vaibhav",
    email: "vaibhav@gmail.com",
    password: "Vaibhav@123",
    profileImg:
      "https://ik.imagekit.io/avavya/Sonder/vaibhav_MJosVDYLV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654451731681",
    bio: "Aaj TV series zyada dekh liya. Padhna padega",
    portfolioUrl: "https://github.com/vaibhav-mahalle/",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
  },

  {
    _id: uuid(),
    firstName: "Tahir",
    lastName: "Ahmed",
    username: "ttahm3d",
    email: "tahir@gmail.com",
    password: "Tahir@123",
    profileImg:
      "https://ik.imagekit.io/avavya/Sonder/tahir_LHNoEQaM9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654451731406",
    bio: "I sleep on time.",
    portfolioUrl: "https://github.com/ttahm3d/",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
  },
  {
    _id: uuid(),
    firstName: "Rahul",
    lastName: "Ji",
    username: "rahulji",
    email: "rahul@gmail.com",
    password: "Rahul@123",
    profileImg:
      "https://ik.imagekit.io/avavya/Sonder/rahulji_ZQ-WG_ndk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654451730679",
    bio: "Testing 123",
    portfolioUrl: "https://github.com/rahulcs754/",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        firstName: "Piyush",
        lastName: "Das",
        username: "coldpigli",
        email: "piyushdas98@gmail.com",
        profileImg:"https://ik.imagekit.io/avavya/Sonder/piyush_eating_q6saDRQSv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654362769580",
      }
    ],
    followers: [],
  },
  {
    _id: uuid(),
    firstName: "Nakul",
    lastName: "Sharma",
    username: "bhratashree",
    email: "nakul@gmail.com",
    password: "Nakul@123",
    profileImg:
      "https://ik.imagekit.io/avavya/Sonder/nakul_Rs-XDbGCQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654451729877",
    bio: "I am pure and pious.",
    portfolioUrl: "www.bhratashree.com",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        firstName: "Piyush",
        lastName: "Das",
        username: "coldpigli",
        email: "piyushdas98@gmail.com",
        profileImg:
          "https://ik.imagekit.io/avavya/Sonder/piyush_eating_q6saDRQSv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654362769580",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Nisha",
    lastName: "Sen",
    username: "nicenisha",
    email: "nisha@gmail.com",
    password: "Nisha@123",
    profileImg:
      "https://ik.imagekit.io/avavya/Sonder/nisha_GH2syM9O7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654451730228",
    bio: "Chupke chupke sab padh lungi.",
    portfolioUrl: "https://github.com/nishasen/",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
  },
  {
    _id: uuid(),
    firstName: "Aaishwarya",
    lastName: "Biradar",
    username: "aaish",
    email: "aaish@gmail.com",
    password: "Aaish@123",
    profileImg:
      "https://ik.imagekit.io/avavya/Sonder/aaish_71M56QM80.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654451729311",
    bio: "GO away! I have weddings to attend",
    portfolioUrl: "https://github.com/aishwarya-bm/",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
  },
  {
    _id: uuid(),
    firstName: "Krituraj",
    lastName: "Jaiswal",
    username: "kritu",
    email: "krituraj@gmail.com",
    password: "Krituraj@123",
    profileImg:
      "https://ik.imagekit.io/avavya/Sonder/Krituraj_lm1sEBG1XK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654451729559",
    bio: "Captain Cool",
    portfolioUrl: "",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        firstName: "Piyush",
        lastName: "Das",
        username: "coldpigli",
        email: "piyushdas98@gmail.com",
        profileImg:
          "https://ik.imagekit.io/avavya/Sonder/piyush_eating_q6saDRQSv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654362769580",
      },
    ],
  },
];
