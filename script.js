const name = "Joshua Hedges";
const age = 38;
const birthday = "October 28";
const detroitGC = true;
const lifeEvents = [
  "I've lived in Nashville",
  "I went to WCC",
  "Turned 18 in 1999",
  "Played my first show in 2001",
];

if (detroitGC) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i <= lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber != 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      ` ${randomNumber} === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
