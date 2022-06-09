import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "arushii97",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "coldpigli",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "tahirahmed",
        text: "It's my time to sleep!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aaish",
    comments: [
      {
        _id: uuid(),
        username: "kritu",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "nicenisha",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Hello Bhratashree @coldpigli",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "bhratashree",
    comments: [
      {
        _id: uuid(),
        username: "coldpigli",
        text: "Hello Bhratashree",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Hi, I'm Aaish and I'm new here. A little bit about me. You may see me as a single person but I am 4. Confusing right? Well no. I am the queen of cohorts. It's simple, I see a cohort, I join.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aaish",
    comments: [
      {
        _id: uuid(),
        username: "kritu",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "coldpigli",
        text: "I can vouch for this.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Hi, I'm kritu and I'm the boss here. A little bit about me: I am the calmest person you can find. I speak less, and work more unlike the developer of this app. I eat bugs for breakfast, make customHooks for lunch and party by the night. I've got two faces, smoky's the one I'm not.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "kritu",
    comments: [
      {
        _id: uuid(),
        username: "kritu",
        text: "Interesting, I don't remember making this post",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Craving for some samosas. Can anyone tell me where to find good samosas in Amsterdam?",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rahulji",
    comments: [
      {
        _id: uuid(),
        username: "coldpigli",
        text: "Arey RahulJi, India waapis aajao fir khayenge.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "99 problems in my life, sleeping on time ain't one of them",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ttahm3d",
    comments: [
      {
        _id: uuid(),
        username: "coldpigli",
        text: "T_T",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "aaish",
        text: "Teach us, Sensei.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Thank god i'm not in d-3",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "nicenisha",
    comments: [
      {
        _id: uuid(),
        username: "coldpigli",
        text: "XD",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "aaish",
        text: "hahaha",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Meenakshi is sitting on my lap. I am the chosen one 👀",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sreejithk",
    comments: [
      {
        _id: uuid(),
        username: "kritu",
        text: "Maybe she just wants food.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Hi, I'm Piyush, and welcome to Sonder. Sonder is a text first social media app which focuses more on written textual content rather than media. Our short attention span has reduced our reading time. But Sonder allows to to spend more time reading the thoughts of your friends. Sonder — noun. the realization that each random passerby is living a life as vivid and complex as your own — populated with their own ambitions, friends, routines, worries and inherited craziness — an epic story that continues invisibly around you like an anthill sprawling deep underground, with elaborate passageways to thousands of other lives that you'll never know existed, in which you might appear only once, as an extra sipping coffee in the background, as a blur of traffic passing on the highway, as a lighted window at dusk.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "coldpigli",
    comments: [
      {
        _id: uuid(),
        username: "nicenisha",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
