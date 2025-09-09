export const timeAgo = (date) => {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (let i = 0; i < intervals.length; i++) {
    const interval = Math.floor(seconds / intervals[i].seconds);
    if (interval >= 1) {
      return `${interval} ${intervals[i].label}${interval > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
};

export const formatCount = (count) => {
  const formatter = new Intl.NumberFormat("en", { notation: "compact" });

  return formatter.format(count);
};

export function generateRandomUsername() {
  const adjectives = [
    "Fast",
    "Crazy",
    "Happy",
    "Lucky",
    "Sneaky",
    "Wild",
    "Brave",
    "Smart",
    "Cool",
    "Chill",
  ];
  const nouns = [
    "Tiger",
    "Eagle",
    "Panda",
    "Shark",
    "Wolf",
    "Fox",
    "Bear",
    "Lion",
    "Hawk",
    "Dolphin",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNumber = Math.floor(Math.random() * 1000); // adds uniqueness

  return `${randomAdjective}${randomNoun}${randomNumber}`;
}

export function getRandomMessage() {
  const sampleMessages = [
    "Hey there!",
    "How’s everyone doing?",
    "That’s awesome 😎",
    "Wow, didn’t expect that!",
    "Can you explain more?",
    "Good morning 🌞",
    "Lol that’s funny 😂",
    "Nice move!",
    "Totally agree with you.",
    "Hmm interesting point.",
  ];

  return sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
}
