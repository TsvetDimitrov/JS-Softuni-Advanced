// Your employer placed you in charge of an old forum management project. The client requests new functionality, 
// but the legacy code has high coupling, so you don’t want to change anything, for fear of breaking everything else. 
// You know which values need to be accessed and modified, so it’s time to monkey patch!
// Write a program to extend a forum post record with voting functionality. It needs to have the options to upvote,
//  downvote and tally the total score (positive minus negative votes). Furthermore, to prevent abuse, 
//  if a post has more than 50 total votes, the numbers must be obfuscated – the stored values remains the same,
//   but the reported amounts of upvotes and downvotes have a number added to them. This number is 25% of the greater number of votes 
//   (positive or negative), rounded up. The actual numbers should not be modified, just the reported amounts.
// Every post also has a rating, depending on its score. If positive votes are the overwhelming majority (>66%), 
// the rating is hot. If there is no majority, but the balance is non-negative and the sum of both votes are more than 100, 
// its rating is controversial. If the balance is negative, the rating becomes unpopular. 
// If the post has less than 10 total votes, or no other rating is met, it’s rating is new regardless of balance. 
// These calculations are performed on the actual numbers.
// Your function will be invoked with call(object, arguments), so treat it as though it is internal for the object. 
// A forum post, to which the function will be attached, has the following structure:


solve = (() => {
    let commands = {
        upvote: (object) => object['upvotes'] += 1,
        downvote: (object)=> object['downvotes'] += 1,
        score: (object) => {
            "use strict";
            let upVotes = object['upvotes'];
            let downVotes = object['downvotes'];
            let result = [];
            let obfuscationNumber = 0;
            let maxVotes;
            if ((upVotes + downVotes) > 50) {
                maxVotes = Math.max(upVotes, downVotes);
                obfuscationNumber = Math.ceil(0.25 * maxVotes);
            }
            result.push(upVotes + obfuscationNumber);
            result.push(downVotes + obfuscationNumber);
            result.push(upVotes - downVotes);
            let rating = getRating(object);
            result.push(rating);
            return result;
        },
        call: (object, args) => {
            return commands[args](object);
        }
    };
    return commands;
 
    function getRating(object) {
        let upVotes = object['upvotes'];
        let downVotes = object['downvotes'];
        let totalVotes = upVotes + downVotes;
        let balance = upVotes - downVotes;
 
        if (totalVotes < 10) {
            return 'new';
        }
        if ((upVotes / totalVotes) > 0.66) {
            return 'hot';
        }
        if ((downVotes / totalVotes <= 0.66) && balance >= 0 && (upVotes > 100 || downVotes > 100)) {
            return 'controversial';
        }
        if (balance < 0 && totalVotes >= 10) {
            return 'unpopular';
        }
        return 'new';
    }
})();




let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote'); …        // (executed 50 times)
score = solution.call(post, 'score');     




