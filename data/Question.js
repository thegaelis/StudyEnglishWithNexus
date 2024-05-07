const questions_relation = [
  {
    id: 1,
    question: 'What is the relation between a brother and a sister?',
    answers: [
      { id: 1, text: 'A. Siblings', correct: true },
      { id: 2, text: 'B. Cousins', correct: false },
      { id: 3, text: 'C. Parents', correct: false },
      { id: 4, text: 'D. Friends', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Which sentence is in the simple present tense?',
    answers: [
      { id: 1, text: 'A. She is cooking dinner right now.', correct: false },
      { id: 2, text: 'B. They will go to the movies tomorrow.', correct: false },
      { id: 3, text: 'C. He eats breakfast every morning.', correct: true },
      { id: 4, text: 'D. I have been reading that book.', correct: false },
    ],
  },
  {
    id: 3,
    question: 'What is the relation between a niece and an aunt?',
    answers: [
      { id: 1, text: 'A. Siblings', correct: false },
      { id: 2, text: 'B. Cousins', correct: false },
      { id: 3, text: 'C. Parents', correct: false },
      { id: 4, text: 'D. Aunt and niece', correct: true },
    ],
  },
  {
    id: 4,
    question: 'Which sentence is in the simple present tense?',
    answers: [
      { id: 1, text: 'A. We are going to the park this weekend.', correct: false },
      { id: 2, text: 'B. He will travel to Europe next month.', correct: false },
      { id: 3, text: 'C. She reads books every day.', correct: true },
      { id: 4, text: 'D. They have visited that museum before.', correct: false },
    ],
  },
  {
    id: 5,
    question: 'What is the relation between a grandfather and a granddaughter?',
    answers: [
      { id: 1, text: 'A. Cousins', correct: false },
      { id: 2, text: 'B. Grandparent and grandchild', correct: true },
      { id: 3, text: 'C. Siblings', correct: false },
      { id: 4, text: 'D. Parents', correct: false },
    ],
  },
  {
    id: 6,
    question: 'Which sentence is in the simple present tense?',
    answers: [
      { id: 1, text: 'A. I have been working on this project all week.', correct: false },
      { id: 2, text: 'B. She will join the club soon.', correct: false },
      { id: 3, text: 'C. They are watching a movie right now.', correct: false },
      { id: 4, text: 'D. He teaches English at the local school.', correct: true },
    ],
  },
  {
    id: 7,
    question: 'What is the relation between a niece and an uncle?',
    answers: [
      { id: 1, text: 'A. Cousins', correct: false },
      { id: 2, text: 'B. Siblings', correct: false },
      { id: 3, text: 'C. Niece and uncle', correct: true },
      { id: 4, text: 'D. Parents', correct: false },
    ],
  },
  {
    id: 8,
    question: 'Which sentence is in the simple present tense?',
    answers: [
      { id: 1, text: 'A. She will be studying abroad next year.', correct: false },
      { id: 2, text: 'B. We went to the beach last weekend.', correct: false },
      { id: 3, text: 'C. They are playing soccer in the park.', correct: false },
      { id: 4, text: 'D. He works as a chef at a restaurant.', correct: true },
    ],
  },
  {
    id: 9,
    question: 'What is the relation between a cousin and another cousin?',
    answers: [
      { id: 1, text: 'A. Niece and uncle', correct: false },
      { id: 2, text: 'B. Siblings', correct: false },
      { id: 3, text: 'C. Cousins', correct: true },
      { id: 4, text: 'D. Parents', correct: false },
    ],
  },
  {
    id: 10,
    question: 'Which sentence is in the simple present tense?',
    answers: [
      { id: 1, text: 'A. They had already left when we arrived.', correct: false },
      { id: 2, text: 'B. I will be reading that book tomorrow.', correct: false },
      { id: 3, text: 'C. She is going to visit her grandmother soon.', correct: false },
      { id: 4, text: 'D. He exercises at the gym every evening.', correct: true },
    ],
  },
];
const questions_time = [
  {
    id: 1,
    question: 'What time the clock will show if "15 minutes to 4"?',
    answers: [
      { id: 1, text: 'A. 3:45 PM', correct: true },
      { id: 2, text: 'B. 3:15 PM', correct: false },
      { id: 3, text: 'C. 4:15 PM', correct: false },
      { id: 4, text: 'D. 4:00 PM', correct: false },
    ],
  },
  {
    id: 2,
    question: 'When is New Year\'s Day celebrated?',
    answers: [
      { id: 1, text: 'A. January 1st', correct: true },
      { id: 2, text: 'B. December 25th', correct: false },
      { id: 3, text: 'C. October 31st', correct: false },
      { id: 4, text: 'D. April 1st', correct: false },
    ],
  },
  {
    id: 3,
    question: 'How many days are there in a leap year?',
    answers: [
      { id: 1, text: 'A. 364', correct: false },
      { id: 2, text: 'B. 366', correct: true },
      { id: 3, text: 'C. 365', correct: false },
      { id: 4, text: 'D. 360', correct: false },
    ],
  },
  {
    id: 4,
    question: 'What comes after Wednesday?',
    answers: [
      { id: 1, text: 'A. Tuesday', correct: false },
      { id: 2, text: 'B. Thursday', correct: true },
      { id: 3, text: 'C. Saturday', correct: false },
      { id: 4, text: 'D. Monday', correct: false },
    ],
  },
  {
    id: 5,
    question: 'If it\'s 3:20 PM now, what time will it be in 40 minutes?',
    answers: [
      { id: 1, text: 'A. 4:00 PM', correct: false },
      { id: 2, text: 'B. 3:40 PM', correct: true },
      { id: 3, text: 'C. 4:20 PM', correct: false },
      { id: 4, text: 'D. 3:00 PM', correct: false },
    ],
  },
  {
    id: 6,
    question: 'Which sentence is in the simple future tense?',
    answers: [
      { id: 1, text: 'A. She is eating lunch right now.', correct: false },
      { id: 2, text: 'B. He will go to the store later.', correct: true },
      { id: 3, text: 'C. She reads books every day.', correct: false },
      { id: 4, text: 'D. They had already left when we arrived.', correct: false },
    ],
  },
  {
    id: 7,
    question: 'What tense is used to talk about actions that will happen in the future?',
    answers: [
      { id: 1, text: 'A. Present Continuous', correct: false },
      { id: 2, text: 'B. Simple Future', correct: true },
      { id: 3, text: 'C. Past Tense', correct: false },
      { id: 4, text: 'D. Present Perfect', correct: false },
    ],
  },
  {
    id: 8,
    question: 'What is the main verb used with the simple future tense?',
    answers: [
      { id: 1, text: 'A. Is', correct: false },
      { id: 2, text: 'B. Are', correct: false },
      { id: 3, text: 'C. Will', correct: true },
      { id: 4, text: 'D. Have', correct: false },
    ],
  },
  {
    id: 9,
    question: 'Which sentence is NOT in the simple future tense?',
    answers: [
      { id: 1, text: 'A. She is cooking dinner right now.', correct: false },
      { id: 2, text: 'B. They will go to the movies tomorrow.', correct: true },
      { id: 3, text: 'C. He eats breakfast every morning.', correct: false },
      { id: 4, text: 'D. I have been reading that book.', correct: false },
    ],
  },
  {
    id: 10,
    question: 'When does the simple future tense describe actions happening?',
    answers: [
      { id: 1, text: 'A. In the past', correct: false },
      { id: 2, text: 'B. Right now', correct: false },
      { id: 3, text: 'C. In the future', correct: true },
      { id: 4, text: 'D. All of the above', correct: false },
    ],
  },
];
const questions_animal = [
  {
    id: 1,
    question: 'By the time we arrived at the zoo, the lions _____ fed.',
    answers: [
      { id: 1, text: 'A. had', correct: false },
      { id: 2, text: 'B. have', correct: false },
      { id: 3, text: 'C. has', correct: false },
      { id: 4, text: 'D. had been', correct: true },
    ],
  },
  {
    id: 2,
    question: 'What is the past perfect form of the verb "hunt"?',
    answers: [
      { id: 1, text: 'A. hunted', correct: true },
      { id: 2, text: 'B. hunts', correct: false },
      { id: 3, text: 'C. hunting', correct: false },
      { id: 4, text: 'D. will hunt', correct: false },
    ],
  },
  {
    id: 3,
    question: 'When we got to the farm, the cows ________ milked.',
    answers: [
      { id: 1, text: 'A. is', correct: false },
      { id: 2, text: 'B. was', correct: false },
      { id: 3, text: 'C. had been', correct: true },
      { id: 4, text: 'D. had', correct: false },
    ],
  },
  {
    id: 4,
    question: 'What is the correct form of the past perfect tense for "she swim"?',
    answers: [
      { id: 1, text: 'A. she has swam', correct: false },
      { id: 2, text: 'B. she was swimming', correct: false },
      { id: 3, text: 'C. she had swum', correct: true },
      { id: 4, text: 'D. she swimmed', correct: false },
    ],
  },
  {
    id: 5,
    question: 'The birds had already flown away by the time we ________.',
    answers: [
      { id: 1, text: 'A. arrive', correct: false },
      { id: 2, text: 'B. arrives', correct: false },
      { id: 3, text: 'C. arrived', correct: true },
      { id: 4, text: 'D. will arrive', correct: false },
    ],
  },
  {
    id: 6,
    question: 'What tense is used to talk about actions that happened before another action in the past?',
    answers: [
      { id: 1, text: 'A. Past Tense', correct: false },
      { id: 2, text: 'B. Future Tense', correct: false },
      { id: 3, text: 'C. Present Tense', correct: false },
      { id: 4, text: 'D. Past Perfect Tense', correct: true },
    ],
  },
  {
    id: 7,
    question: 'What is the past perfect form of the verb "roam"?',
    answers: [
      { id: 1, text: 'A. roamed', correct: true },
      { id: 2, text: 'B. roam', correct: false },
      { id: 3, text: 'C. roaming', correct: false },
      { id: 4, text: 'D. roams', correct: false },
    ],
  },
  {
    id: 8,
    question: 'They had already hibernated when the winter ________.',
    answers: [
      { id: 1, text: 'A. arrives', correct: false },
      { id: 2, text: 'B. arrived', correct: true },
      { id: 3, text: 'C. arrive', correct: false },
      { id: 4, text: 'D. will arrive', correct: false },
    ],
  },
  {
    id: 9,
    question: 'Which sentence is NOT in the past perfect tense?',
    answers: [
      { id: 1, text: 'A. She has migrated for the winter.', correct: true },
      { id: 2, text: 'B. They had built a nest.', correct: false },
      { id: 3, text: 'C. He had already left.', correct: false },
      { id: 4, text: 'D. We had watched the birds.', correct: false },
    ],
  },
  {
    id: 10,
    question: 'When does the past perfect tense describe actions happening?',
    answers: [
      { id: 1, text: 'A. In the future', correct: false },
      { id: 2, text: 'B. Right now', correct: false },
      { id: 3, text: 'C. In the past', correct: true },
      { id: 4, text: 'D. All of the above', correct: false },
    ],
  },
];
const questions_sport = [
  {
    id: 1,
    question: 'What were you doing at the gym yesterday?',
    answers: [
      { id: 1, text: 'A. I do yoga.', correct: false },
      { id: 2, text: 'B. I will lift weights.', correct: false },
      { id: 3, text: 'C. I was running on the treadmill.', correct: true },
      { id: 4, text: 'D. I play basketball.', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Which sentence is in the past continuous tense?',
    answers: [
      { id: 1, text: 'A. She plays soccer.', correct: false },
      { id: 2, text: 'B. He will swim tomorrow.', correct: false },
      { id: 3, text: 'C. They were practicing tennis yesterday.', correct: true },
      { id: 4, text: 'D. We hike in the mountains.', correct: false },
    ],
  },
  {
    id: 3,
    question: 'What were they playing at the park last Saturday?',
    answers: [
      { id: 1, text: 'A. They played basketball.', correct: false },
      { id: 2, text: 'B. They will play volleyball.', correct: false },
      { id: 3, text: 'C. They were playing soccer.', correct: true },
      { id: 4, text: 'D. They play badminton.', correct: false },
    ],
  },
  {
    id: 4,
    question: 'When did you injure your knee?',
    answers: [
      { id: 1, text: 'A. I will injure my knee next week.', correct: false },
      { id: 2, text: 'B. I injure my knee yesterday.', correct: false },
      { id: 3, text: 'C. I injured my knee while skiing.', correct: true },
      { id: 4, text: 'D. I am injuring my knee.', correct: false },
    ],
  },
  {
    id: 5,
    question: 'What were they practicing during practice last week?',
    answers: [
      { id: 1, text: 'A. They practice basketball.', correct: false },
      { id: 2, text: 'B. They will practice swimming.', correct: false },
      { id: 3, text: 'C. They were practicing soccer.', correct: true },
      { id: 4, text: 'D. They practice yoga.', correct: false },
    ],
  },
  {
    id: 6,
    question: 'What tense is used to talk about ongoing actions in the past?',
    answers: [
      { id: 1, text: 'A. Present Tense', correct: false },
      { id: 2, text: 'B. Future Tense', correct: false },
      { id: 3, text: 'C. Past Tense', correct: false },
      { id: 4, text: 'D. Past Continuous Tense', correct: true },
    ],
  },
  {
    id: 7,
    question: 'What is the correct form of the past continuous tense for "I play"?',
    answers: [
      { id: 1, text: 'A. I am playing', correct: false },
      { id: 2, text: 'B. I was played', correct: false },
      { id: 3, text: 'C. I were playing', correct: false },
      { id: 4, text: 'D. I was playing', correct: true },
    ],
  },
  {
    id: 8,
    question: 'What were you doing at the stadium last night?',
    answers: [
      { id: 1, text: 'A. I was do exercises.', correct: false },
      { id: 2, text: 'B. I were watching the game.', correct: false },
      { id: 3, text: 'C. I was watching the game.', correct: true },
      { id: 4, text: 'D. I was played tennis.', correct: false },
    ],
  },
  {
    id: 9,
    question: 'Which sentence is NOT in the past continuous tense?',
    answers: [
      { id: 1, text: 'A. She swims every morning.', correct: true },
      { id: 2, text: 'B. They were playing basketball yesterday.', correct: false },
      { id: 3, text: 'C. He was running in the park.', correct: false },
      { id: 4, text: 'D. We were dancing at the party.', correct: false },
    ],
  },
  {
    id: 10,
    question: 'When does the past continuous tense describe actions happening?',
    answers: [
      { id: 1, text: 'A. In the future', correct: false },
      { id: 2, text: 'B. Right now', correct: false },
      { id: 3, text: 'C. In the past', correct: true },
      { id: 4, text: 'D. All of the above', correct: false },
    ],
  },
];
const questions_education = [
  {
    id: 1,
    question: 'What will you be studying next year?',
    answers: [
      { id: 1, text: 'A. Math', correct: false },
      { id: 2, text: 'B. English', correct: false },
      { id: 3, text: 'C. Science', correct: false },
      { id: 4, text: 'D. I will be studying history.', correct: true },
    ],
  },
  {
    id: 2,
    question: 'When will the next semester begin?',
    answers: [
      { id: 1, text: 'A. It begins next week.', correct: false },
      { id: 2, text: 'B. It began yesterday.', correct: false },
      { id: 3, text: 'C. It will begin in January.', correct: true },
      { id: 4, text: 'D. It is beginning today.', correct: false },
    ],
  },
  {
    id: 3,
    question: 'What will you be doing at this time tomorrow?',
    answers: [
      { id: 1, text: 'A. I will read a book.', correct: false },
      { id: 2, text: 'B. I will be reading a book.', correct: true },
      { id: 3, text: 'C. I am reading a book.', correct: false },
      { id: 4, text: 'D. I read a book every day.', correct: false },
    ],
  },
  {
    id: 4,
    question: 'Which sentence is in the future continuous tense?',
    answers: [
      { id: 1, text: 'A. She is studying now.', correct: false },
      { id: 2, text: 'B. He will study tomorrow.', correct: false },
      { id: 3, text: 'C. She will be studying for the test.', correct: true },
      { id: 4, text: 'D. They studied last night.', correct: false },
    ],
  },
  {
    id: 5,
    question: 'What will you be learning in your next class?',
    answers: [
      { id: 1, text: 'A. I am learning math.', correct: false },
      { id: 2, text: 'B. I will learn science.', correct: false },
      { id: 3, text: 'C. I will be learning history.', correct: true },
      { id: 4, text: 'D. I learned English.', correct: false },
    ],
  },
  {
    id: 6,
    question: 'What tense is used to talk about actions happening over a period of time in the future?',
    answers: [
      { id: 1, text: 'A. Present Tense', correct: false },
      { id: 2, text: 'B. Past Tense', correct: false },
      { id: 3, text: 'C. Future Tense', correct: false },
      { id: 4, text: 'D. Future Continuous Tense', correct: true },
    ],
  },
  {
    id: 7,
    question: 'What is the correct form of the future continuous tense for "I study"?',
    answers: [
      { id: 1, text: 'A. I am studying', correct: false },
      { id: 2, text: 'B. I will studying', correct: false },
      { id: 3, text: 'C. I will be studying', correct: true },
      { id: 4, text: 'D. I have studying', correct: false },
    ],
  },
  {
    id: 8,
    question: 'What will you be doing at 8 PM tonight?',
    answers: [
      { id: 1, text: 'A. I will do homework.', correct: false },
      { id: 2, text: 'B. I will be doing homework.', correct: true },
      { id: 3, text: 'C. I do homework every day.', correct: false },
      { id: 4, text: 'D. I did homework yesterday.', correct: false },
    ],
  },
  {
    id: 9,
    question: 'Which sentence is NOT in the future continuous tense?',
    answers: [
      { id: 1, text: 'A. She is reading a book now.', correct: true },
      { id: 2, text: 'B. They will be traveling next week.', correct: false },
      { id: 3, text: 'C. He will be playing soccer tomorrow.', correct: false },
      { id: 4, text: 'D. We will be eating dinner at 7 PM.', correct: false },
    ],
  },
  {
    id: 10,
    question: 'When does the future continuous tense describe actions happening?',
    answers: [
      { id: 1, text: 'A. In the past', correct: false },
      { id: 2, text: 'B. Right now', correct: false },
      { id: 3, text: 'C. In the future', correct: true },
      { id: 4, text: 'D. All of the above', correct: false },
    ],
  },
];
const questions_travel = [
  {
    id: 1,
    question: 'When did they visit Paris for the first time?',
    answers: [
      { id: 1, text: 'A. Next day', correct: false },
      { id: 2, text: 'B. Next week', correct: false },
      { id: 3, text: 'C. A few months later', correct: false },
      { id: 4, text: 'D. Two years ago', correct: true },
    ],
  },
  {
    id: 2,
    question: 'Which sentence is in the past tense?',
    answers: [
      { id: 1, text: 'A. She is going to the beach.', correct: false },
      { id: 2, text: 'B. They will travel to London.', correct: false },
      { id: 3, text: 'C. He visited Rome last summer.', correct: true },
      { id: 4, text: 'D. We are planning a trip.', correct: false },
    ],
  },
  {
    id: 3,
    question: 'Where did they go for their honeymoon?',
    answers: [
      { id: 1, text: 'A. Next month', correct: false },
      { id: 2, text: 'B. Tomorrow', correct: false },
      { id: 3, text: 'C. Hawaii', correct: false },
      { id: 4, text: 'D. They went to Bali.', correct: true },
    ],
  },
  {
    id: 4,
    question: 'What did she do during her vacation?',
    answers: [
      { id: 1, text: 'A. She will relax by the pool.', correct: false },
      { id: 2, text: 'B. She is relaxing by the pool.', correct: false },
      { id: 3, text: 'C. She relaxed by the pool.', correct: true },
      { id: 4, text: 'D. She is going to relax by the pool.', correct: false },
    ],
  },
  {
    id: 5,
    question: 'When did they arrive at the hotel?',
    answers: [
      { id: 1, text: 'A. Right now', correct: false },
      { id: 2, text: 'B. They will arrive tomorrow.', correct: false },
      { id: 3, text: 'C. Yesterday', correct: true },
      { id: 4, text: 'D. Next week', correct: false },
    ],
  },
  {
    id: 6,
    question: 'Which tense is used to talk about actions that happened in the past?',
    answers: [
      { id: 1, text: 'A. Future Tense', correct: false },
      { id: 2, text: 'B. Present Tense', correct: false },
      { id: 3, text: 'C. Past Tense', correct: true },
      { id: 4, text: 'D. Present Continuous', correct: false },
    ],
  },
  {
    id: 7,
    question: 'What is the correct past tense of the verb "go"?',
    answers: [
      { id: 1, text: 'A. Went', correct: true },
      { id: 2, text: 'B. Goes', correct: false },
      { id: 3, text: 'C. Gone', correct: false },
      { id: 4, text: 'D. Going', correct: false },
    ],
  },
  {
    id: 8,
    question: 'When did they start their road trip?',
    answers: [
      { id: 1, text: 'A. Next month', correct: false },
      { id: 2, text: 'B. They will start next week.', correct: false },
      { id: 3, text: 'C. They started last Saturday.', correct: true },
      { id: 4, text: 'D. They are starting today.', correct: false },
    ],
  },
  {
    id: 9,
    question: 'Where did he take his summer vacation?',
    answers: [
      { id: 1, text: 'A. He takes his summer vacation next year.', correct: false },
      { id: 2, text: 'B. He will take his summer vacation in June.', correct: false },
      { id: 3, text: 'C. He took his summer vacation in Italy.', correct: true },
      { id: 4, text: 'D. He is taking his summer vacation next week.', correct: false },
    ],
  },
  {
    id: 10,
    question: 'What tense is used to talk about actions that will happen in the future?',
    answers: [
      { id: 1, text: 'A. Present Tense', correct: false },
      { id: 2, text: 'B. Past Tense', correct: false },
      { id: 3, text: 'C. Future Tense', correct: true },
      { id: 4, text: 'D. Present Continuous', correct: false },
    ],
  },
];
const questions_weather = [
  {
    id: 1,
    question: 'What tense is used to describe actions that happened at an unspecified time in the past and have relevance to the present?',
    answers: [
      { id: 1, text: 'A. Past Tense', correct: false },
      { id: 2, text: 'B. Present Tense', correct: false },
      { id: 3, text: 'C. Future Tense', correct: false },
      { id: 4, text: 'D. Present Perfect Tense', correct: true },
    ],
  },
  {
    id: 2,
    question: 'By the time I arrived, they ________ to the beach.',
    answers: [
      { id: 1, text: 'A. will go', correct: false },
      { id: 2, text: 'B. have gone', correct: true },
      { id: 3, text: 'C. went', correct: false },
      { id: 4, text: 'D. are going', correct: false },
    ],
  },
  {
    id: 3,
    question: 'Which sentence is in the present perfect tense?',
    answers: [
      { id: 1, text: 'A. I was baking a cake.', correct: false },
      { id: 2, text: 'B. She will play tennis tomorrow.', correct: false },
      { id: 3, text: 'C. They have visited the museum.', correct: true },
      { id: 4, text: 'D. We had gone to the park.', correct: false },
    ],
  },
  {
    id: 4,
    question: 'What is the past participle form of the verb "rain"?',
    answers: [
      { id: 1, text: 'A. rained', correct: true },
      { id: 2, text: 'B. raining', correct: false },
      { id: 3, text: 'C. rains', correct: false },
      { id: 4, text: 'D. rain', correct: false },
    ],
  },
  {
    id: 5,
    question: 'The weather ________ quite cold lately.',
    answers: [
      { id: 1, text: 'A. is', correct: false },
      { id: 2, text: 'B. was', correct: false },
      { id: 3, text: 'C. has been', correct: true },
      { id: 4, text: 'D. had been', correct: false },
    ],
  },
  {
    id: 6,
    question: 'What tense is used to talk about actions that started in the past and continue into the present?',
    answers: [
      { id: 1, text: 'A. Present Tense', correct: false },
      { id: 2, text: 'B. Future Tense', correct: false },
      { id: 3, text: 'C. Present Perfect Tense', correct: false },
      { id: 4, text: 'D. Present Continuous Tense', correct: true },
    ],
  },
  {
    id: 7,
    question: 'When is the present perfect tense typically used?',
    answers: [
      { id: 1, text: 'A. To describe actions happening now', correct: false },
      { id: 2, text: 'B. To talk about actions in the distant past', correct: false },
      { id: 3, text: 'C. To indicate actions that happened before now with relevance to the present', correct: true },
      { id: 4, text: 'D. To describe future actions', correct: false },
    ],
  },
  {
    id: 8,
    question: 'What is the past participle form of the verb "snow"?',
    answers: [
      { id: 1, text: 'A. snowing', correct: false },
      { id: 2, text: 'B. snowed', correct: true },
      { id: 3, text: 'C. snows', correct: false },
      { id: 4, text: 'D. snow', correct: false },
    ],
  },
  {
    id: 9,
    question: 'Which of the following sentences uses the present perfect tense correctly?',
    answers: [
      { id: 1, text: 'A. I will visit Paris last summer.', correct: false },
      { id: 2, text: 'B. She had eat breakfast this morning.', correct: false },
      { id: 3, text: 'C. They have already finished their homework.', correct: true },
      { id: 4, text: 'D. We was to the movies yesterday.', correct: false },
    ],
  },
  {
    id: 10,
    question: 'The present perfect tense often uses the words "have" and ________.',
    answers: [
      { id: 1, text: 'A. is', correct: false },
      { id: 2, text: 'B. do', correct: false },
      { id: 3, text: 'C. had', correct: false },
      { id: 4, text: 'D. has', correct: true },
    ],
  },
];
const questions_food = [
  {
    id: 1,
    question: 'What are you eating for dinner tonight?',
    answers: [
      { id: 1, text: 'A. I eat pizza.', correct: false },
      { id: 2, text: 'B. I am eating pasta.', correct: true },
      { id: 3, text: 'C. I will eat salad.', correct: false },
      { id: 4, text: 'D. I ate sushi.', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Which sentence is in the present continuous tense?',
    answers: [
      { id: 1, text: 'A. She cooks dinner.', correct: false },
      { id: 2, text: 'B. He will bake a cake.', correct: false },
      { id: 3, text: 'C. They are making sandwiches.', correct: true },
      { id: 4, text: 'D. We ate breakfast.', correct: false },
    ],
  },
  {
    id: 3,
    question: 'What are you cooking in the kitchen right now?',
    answers: [
      { id: 1, text: 'A. I cooked lunch.', correct: false },
      { id: 2, text: 'B. I will cook dinner.', correct: false },
      { id: 3, text: 'C. I am cooking spaghetti.', correct: true },
      { id: 4, text: 'D. I cook breakfast every day.', correct: false },
    ],
  },
  {
    id: 4,
    question: 'When do you usually have breakfast?',
    answers: [
      { id: 1, text: 'A. I will have breakfast tomorrow.', correct: false },
      { id: 2, text: 'B. I have breakfast at 8 AM.', correct: true },
      { id: 3, text: 'C. I had breakfast yesterday.', correct: false },
      { id: 4, text: 'D. I am having breakfast now.', correct: false },
    ],
  },
  {
    id: 5,
    question: 'What is your favorite food?',
    answers: [
      { id: 1, text: 'A. I like pizza.', correct: false },
      { id: 2, text: 'B. I will like ice cream.', correct: false },
      { id: 3, text: 'C. I am liking burgers.', correct: false },
      { id: 4, text: 'D. I love eating sushi.', correct: true },
    ],
  },
  {
    id: 6,
    question: 'What tense is used to talk about actions happening now?',
    answers: [
      { id: 1, text: 'A. Past Tense', correct: false },
      { id: 2, text: 'B. Future Tense', correct: false },
      { id: 3, text: 'C. Present Continuous Tense', correct: true },
      { id: 4, text: 'D. Present Perfect Tense', correct: false },
    ],
  },
  {
    id: 7,
    question: 'What is the correct form of the present continuous tense for "They eat"?',
    answers: [
      { id: 1, text: 'A. They is eating', correct: false },
      { id: 2, text: 'B. They eated', correct: false },
      { id: 3, text: 'C. They ate', correct: false },
      { id: 4, text: 'D. They are eating', correct: true },
    ],
  },
  {
    id: 8,
    question: 'What are you drinking right now?',
    answers: [
      { id: 1, text: 'A. I drink water.', correct: false },
      { id: 2, text: 'B. I will drink juice.', correct: false },
      { id: 3, text: 'C. I am drinking coffee.', correct: true },
      { id: 4, text: 'D. I drank soda.', correct: false },
    ],
  },
  {
    id: 9,
    question: 'Which sentence is NOT in the present continuous tense?',
    answers: [
      { id: 1, text: 'A. She bakes cakes.', correct: true },
      { id: 2, text: 'B. They are eating lunch.', correct: false },
      { id: 3, text: 'C. He is cooking dinner.', correct: false },
      { id: 4, text: 'D. We are making sandwiches.', correct: false },
    ],
  },
  {
    id: 10,
    question: 'When does the present continuous tense describe actions happening?',
    answers: [
      { id: 1, text: 'A. In the past', correct: false },
      { id: 2, text: 'B. Right now', correct: true },
      { id: 3, text: 'C. In the future', correct: false },
      { id: 4, text: 'D. All of the above', correct: false },
    ],
  },
];
export {
  questions_relation,
  questions_time,
  questions_weather,
  questions_animal,
  questions_food,
  questions_sport,
  questions_education,
  questions_travel
};