let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
console.log(story.length);

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

/* In the code editor, there is a string called story. We want to gather some information about
the individual words and sentences in the string. Let's split the string into individual words and
save them in a new array called storyWords.*/

let stringToArray = story.split(' ');
console.log(stringToArray.length);
//console.log(stringToArray);

/* There is an array of words that are unnecessary. Iterate over your array to filter out these words. 
Save the remaining words in an array called betterWords. There are several ways that you could achieve this.*/

let lessWords = stringToArray.filter(x => 
	!unnecessaryWords.includes(x));
//console.log(lessWords.join(' '));


/*There is an array of words called overusedWords. These are words overused in this story.
You want to let the user of your program know how many times they have used these overused words. 
There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.*/

let toMuchReally = stringToArray.filter(x => x === overusedWords[0]);
console.log(`You have used '${overusedWords[0]}' ${toMuchReally.length} times!`);

let toMuchVery = stringToArray.filter(x => x === overusedWords[1]);
console.log(`You have used '${overusedWords[1]}' ${toMuchVery.length} times!`); 

let toMuchBasically = stringToArray.filter(x => x === overusedWords[2]);
console.log(`You have used '${overusedWords[2]}' ${toMuchBasically.length} times!`);

let manyReally = 0;
let manyVery = 0;
let manyBasically = 0;

for ( let x of stringToArray){
  if ( x === 'really' ){
    manyReally += 1;
  }else if ( x === 'very' ){
    manyVery += 1;
  }else if ( x === 'basically'){
    manyBasically += 1;
  }
};

function logOn() {
  console.log(`You have used '${overusedWords[0]}' ${toMuchReally.length} times!`);
	console.log(`You have used' ${overusedWords[1]}' ${toMuchVery.length} times!`); 
	console.log(`You have used '${overusedWords[2]}' ${toMuchBasically.length} times!`);
}
logOn()

/*Now, count how many sentences are in the paragraph.

This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or 
an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable
for each word that has a period or exclamation mark as its final character.*/

let dot = 0;
let exlamation = 0;

for ( let x of story){
  if ( x === '.'){
    dot += 1;
  }else if ( x === '!'){
    exlamation += 1;
  }
};

let numberOfParagraphs = dot + exlamation;
console.log(numberOfParagraphs);


/*For the overused words, remove it every other time it appears.*/

let nOverusedWords = stringToArray.filter(stringToArray => !overusedWords.includes(stringToArray));
//console.log(nOverusedWords.join(' '));

/*Replace overused words with something else.*/

for ( let i = 0; i < stringToArray.length; i++){
    if (stringToArray[i] === overusedWords[0]){
        stringToArray[i] = 'seriously';
    }else if (stringToArray[i] === overusedWords[1]){
        stringToArray[i] = 'much';
    }else if (stringToArray[i] === overusedWords[2]){
        stringToArray[i] = 'in the fact';
    }
};
console.log(stringToArray.join(' '))
console.log(overusedWords);

/*Write a function that finds the word that appears the greatest number of times.*/

stringToArray.sort();
let zero = 0;
let max = 0;
let score;
//console.log(stringToArray)

for ( let i=0; i < stringToArray.length; i++){
  if (stringToArray[i] === stringToArray[i+1]){
    max++;
  	} else { 
      max = 0;
  	} if ( max > zero ){
  	score = ` '${stringToArray[i].toUpperCase()}' Is Used ${max} Times.`;
    zero = max;
}};
console.log(score);