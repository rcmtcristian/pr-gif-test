function getRandomEmote() {
  const emotes = ["😊", "👍", "🙌", "👏", "🤔", "😂", "😎", "🔥", "💡", "✨"];
  const randomIndex = Math.floor(Math.random() * emotes.length);
  return emotes[randomIndex];
}

const features = [
  `https://emojik.vercel.app/s/😃_${getRandomEmote()}?size=128`,
  `https://emojik.vercel.app/s/😃_${getRandomEmote()}?size=128`,
  `https://emojik.vercel.app/s/😃_${getRandomEmote()}?size=128`,
  `https://emojik.vercel.app/s/😃_${getRandomEmote()}?size=128`,
  `https://emojik.vercel.app/s/😃_${getRandomEmote()}?size=128`,
  `https://emojik.vercel.app/s/😃_${getRandomEmote()}?size=128`,
];
// const featuresArray = [
//   `https://emojik.vercel.app/s/😃_${getRandomEmote()}?size=128`,
//   `https://emojik.vercel.app/s/😃_${getRandomEmote()}?size=128`,
//   `https://emojik.vercel.app/s/😃_${getRandomEmote()}?size=128`,
//   `https://emojik.vercel.app/s/😃_${getRandomEmote()}?size=128`,
//   `https://emojik.vercel.app/s/😃_${getRandomEmote()}?size=128`,
//   `https://emojik.vercel.app/s/😃_${getRandomEmote()}?size=128`,
// ];

// function randomArray() {
//   const randomIndex = Math.floor(Math.random() * featuresArray.length);
//   return featuresArray[randomIndex];
// }

// console.log(`Here is a random emote: ${randomEmote}`);

const reviewGifs = [
  "https://media.giphy.com/media/3oz8xQQP4ahKiyuxHy/giphy.gif",
  "https://media.giphy.com/media/12KMwdClRgh6o0/giphy.gif",
  "https://media.giphy.com/media/mgqefqwSbToPe/giphy.gif",
  "https://media.giphy.com/media/diUKszNTUghVe/giphy.gif",
  "https://media.giphy.com/media/xUKrrEnN9I5lnrcSMv/giphy.gif",
];

// const features = [
//   "https://media.giphy.com/media/PiQejEf31116URju4V/giphy.gif",
//   "https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif",
//   "https://media.giphy.com/media/349qKnoIBHK1i/giphy.gif",
//   "https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif",
//   "https://media.giphy.com/media/oymRJRRiiPaVzDnIF1/giphy.gif",
//   "https://media.giphy.com/media/PI2ZELDbBa4Bq/giphy.gif",
// ];

// const features = () => {
//   const ranArray = randomArray();
//   return ranArray;
// };

const fixes = [
  "https://media.giphy.com/media/5bHIZ3ok4UpJS/giphy.gif",
  "https://media.giphy.com/media/PrEUkNFD9pN2o/giphy.gif",
  "https://media.giphy.com/media/xT1R9T9auEhJkm87Di/giphy.gif",
  "https://media.giphy.com/media/3o6wreJw9IA7HRQ87u/giphy.gif",
  "https://media.giphy.com/media/Ml9xFNKLMd8FW/giphy.gif",
];

const defaults = [
  "https://media.giphy.com/media/l3q2wJsC23ikJg9xe/giphy.gif",
  "https://media.giphy.com/media/26gsjCZpPolPr3sBy/giphy.gif",
  "https://media.giphy.com/media/d68IdpvmAHohx5NMEV/giphy.gif",
  "https://media.giphy.com/media/WV9Xx9itqEIu8GQloO/giphy.gif",
  "https://media.giphy.com/media/xUA7aMYThXDVx4y5O0/giphy.gif",
  "https://media.giphy.com/media/pqcKfVvWRowVy/giphy.gif",
];
// const defaults = [
//   "https://media.giphy.com/media/l3q2wJsC23ikJg9xe/giphy.gif",
//   "https://media.giphy.com/media/26gsjCZpPolPr3sBy/giphy.gif",
//   "https://media.giphy.com/media/d68IdpvmAHohx5NMEV/giphy.gif",
//   "https://media.giphy.com/media/WV9Xx9itqEIu8GQloO/giphy.gif",
//   "https://media.giphy.com/media/xUA7aMYThXDVx4y5O0/giphy.gif",
//   "https://media.giphy.com/media/pqcKfVvWRowVy/giphy.gif",
// ];
module.exports = {
  reviewGifs,
  features,
  fixes,
  defaults,
};
