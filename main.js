console.log('Hello World');

const number = 10;
console.log(number);
const boolTrue = true
console.log(boolTrue);

const obj = {key: 'value'}
console.log(obj);
 
const user = {
    login: "Jack",
    pasword: "12121221",
    username: "jack_01",
    followers:
    [
        {
        username: "Anna",
        description: "master nail"
    },
    {
        username: "Lisa",
        description: "traveler"
    } 

    ],
    follows:
    [
        {
            username: "Anna",
            description: "master nail"
        },
        {
            username: "Lisa",
            description: "traveler"
        } 

    ]
 
}

// console.log(user);
// console.log("username:" + user.username);
// console.log("folowers:" + user.followers.length );
// console.log("folows=:" + user.follows.length);

// const array = [1,2,3, {key: "value"}, "string", true, [1,2,3]]
// console.log(array);


// const numbers = prompt('Input number');

// if (numbers < 20) {
// console.log("number<20");
// } else {
//     console.log("numbers>20");
// }

// const year =  prompt (' when JS was created?');
// if (year==1995) alert('your are right!')

// const year1 = prompt ('are you tired?');
// if (year1==111) {
//     alert ('go and sleep!')
// } else {
//     alert ('go and work')
// }

let arg = prompt('input colour');
switch(arg) {
    case 'green':
        alert ('Go!');
        break;
    case 'yellow':
        alert ('Warning');
        break;
    case 'red':
        alert ('Stop!');
        break;
        default:
        alert ('Undefined!');


}