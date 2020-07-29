var limit = 140;
var tweet = prompt("Write your message");
// var tweetCharacters = tweet.length;
var slicedTweet = tweet.slice(0,140);

alert(`You tweet is: ${slicedTweet.charAt(0).toUpperCase()}${slicedTweet.slice(1)}`);


