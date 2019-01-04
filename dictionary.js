let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
console.log(story.length)
let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let stringToArray = story.split(' ');
console.log(stringToArray.length)

let lessWords = stringToArray.filter(x => 
	!unnecessaryWords.includes(x));
//console.log(lessWords.join(' '));

let toMuchReally = stringToArray.filter(x => x === overusedWords[0])
console.log(` You have used '${overusedWords[0]}' ${toMuchReally.length} times!`) 

let toMuchVery = stringToArray.filter(x => x === overusedWords[1])
console.log(` You have used '${overusedWords[1]}' ${toMuchVery.length} times!`) 

let toMuchBasically = stringToArray.filter(x => x === overusedWords[2])
console.log(` You have used '${overusedWords[2]}' ${toMuchBasically.length} times!`) 

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
}
console.log(manyReally)
console.log(manyVery)
console.log(manyBasically)