var questions = {
    question1: 'What is your lifestyle?',
    question2: 'Someone comes to you looking to start a fight, what do you do?',
    question3: 'If someone were to drop a one dollar bill in front of you, but they didnt notice, what would you do?',
    question4: 'If i could travel anywhere I would travel to?',
    question5: 'What is your social circle look like?',
    question6: 'If a homeless man asked you for food, but you only had enough for one meal for yourself, what would you do?'
};

var answers = [
    (one = {
        answer1: 'Staying in place comfortably',
        answer2: 'Always on the move',
        answer3: 'I spend alot of time out, but i have a home to come back to',
        answer4: 'I just come and go as i please',
        answer5: 'I spend all day with my friends',
        answer6: 'I like to party'
    }),
    (two = {
        answer1: 'I walk away as it is unnecessary to fight',
        answer2: 'I blindly go raging in tackling him and his friends',
        answer3: 'I sneak up on him and strike',
        answer4: 'I gather my crew and teach him that if you mess with one of us you mess with all of us',
        answer5: 'I warn him to back off before things get ugly',
        answer6: 'I Scream'
    }),
    (three = {
        answer1: 'Its a dollar they wont miss it if i took it',
        answer2: 'Tell the person they dropped a dollar',
        answer3: 'Debate on giving the dollar back',
        answer4: 'Leave the dollar, if the person doesnt notice it and walks off, then Ill take it',
        answer5: 'Just ignore it, its not my problem',
        answer6: 'Dollar? Didnt even noticed it'
    }),
    (four = {
        answer1: 'Europe',
        answer2: 'Bahamas',
        answer3: 'Asia',
        answer4: 'California',
        answer5: 'Stay at home Im better off here',
        answer6: 'Australia'
    }),
    (five = {
        answer1: 'A bunch of loyal friends',
        answer2: 'Mostly just family',
        answer3: 'I stick to myself. Im a lone wolf',
        answer4: 'Some loyal friends some not really',
        answer5: 'I can strike up conversation with strangers',
        answer6: 'The trees and flowers'
    }),
    (six = {
        answer1: 'Not try to be rude, but tell him to go get a job and provide for himself',
        answer2: 'Politely inform him that you dont have enough to spare',
        answer3: 'Find a way to divy the food and give him some',
        answer4: 'Ignore him',
        answer5: 'Give him the whole thing',
        answer6: 'Teach him how to cook'
    })
];

//each score is in range 1-10
var scores = [
    (seven = {
        score1: Math.floor(Math.random() * 10 + 1),
        score2: Math.floor(Math.random() * 10 + 1),
        score3: Math.floor(Math.random() * 10 + 1),
        score4: Math.floor(Math.random() * 10 + 1),
        score5: Math.floor(Math.random() * 10 + 1),
        score6: Math.floor(Math.random() * 10 + 1)
    }),
    (eight = {
        score1: Math.floor(Math.random() * 10 + 1),
        score2: Math.floor(Math.random() * 10 + 1),
        score3: Math.floor(Math.random() * 10 + 1),
        score4: Math.floor(Math.random() * 10 + 1),
        score5: Math.floor(Math.random() * 10 + 1),
        score6: Math.floor(Math.random() * 10 + 1)
    }),
    (nine = {
        score1: Math.floor(Math.random() * 10 + 1),
        score2: Math.floor(Math.random() * 10 + 1),
        score3: Math.floor(Math.random() * 10 + 1),
        score4: Math.floor(Math.random() * 10 + 1),
        score5: Math.floor(Math.random() * 10 + 1),
        score6: Math.floor(Math.random() * 10 + 1)
    }),
    (ten = {
        score1: Math.floor(Math.random() * 10 + 1),
        score2: Math.floor(Math.random() * 10 + 1),
        score3: Math.floor(Math.random() * 10 + 1),
        score4: Math.floor(Math.random() * 10 + 1),
        score5: Math.floor(Math.random() * 10 + 1),
        score6: Math.floor(Math.random() * 10 + 1)
    }),
    (eleven = {
        score1: Math.floor(Math.random() * 10 + 1),
        score2: Math.floor(Math.random() * 10 + 1),
        score3: Math.floor(Math.random() * 10 + 1),
        score4: Math.floor(Math.random() * 10 + 1),
        score5: Math.floor(Math.random() * 10 + 1),
        score6: Math.floor(Math.random() * 10 + 1)
    }),
    (twelve = {
        score1: Math.floor(Math.random() * 10 + 1),
        score2: Math.floor(Math.random() * 10 + 1),
        score3: Math.floor(Math.random() * 10 + 1),
        score4: Math.floor(Math.random() * 10 + 1),
        score5: Math.floor(Math.random() * 10 + 1),
        score6: Math.floor(Math.random() * 10 + 1)
    })
];

//global params
let i = 0;
let j = 0;
let k = 0;
let sum = 0;
console.log(i);

//get all the keys of the object with their index which is like haveing an array of the keys of each parameter
const questions_key = Object.keys(questions);
console.log(questions_key);

const answers_key = Object.keys(one);
const scores_key = Object.keys(seven);

//load the question
function load_question() {
    if (k !== 5) {
        document.querySelector('#question').innerHTML = questions[questions_key[i]];
        console.log(i);
    }
}

//load the answers text
function load_answers() {
    if (k !== 5) {
        //if the type is button then i change the text to answers in the input value
        if ('button' === document.querySelector('#answer_one').type) {
            //all buttons are the same type so i just need to check one of them and not all
            document.querySelector('#answer_one').value = answers[i][answers_key[j]];
            document.querySelector('#answer_two').value = answers[i][answers_key[j + 1]];
            document.querySelector('#answer_three').value = answers[i][answers_key[j + 2]];
            document.querySelector('#answer_four').value = answers[i][answers_key[j + 3]];
            document.querySelector('#answer_five').value = answers[i][answers_key[j + 4]];
            document.querySelector('#answer_six').value = answers[i][answers_key[j + 5]];
            //if the type is button then i change the text in the label itself to empty
            document.querySelector('label[for=answer_one]').innerHTML = '';
            document.querySelector('label[for=answer_two]').innerHTML = '';
            document.querySelector('label[for=answer_three]').innerHTML = '';
            document.querySelector('label[for=answer_four]').innerHTML = '';
            document.querySelector('label[for=answer_five]').innerHTML = '';
            document.querySelector('label[for=answer_six]').innerHTML = '';
        } else {
            //if the type is not a button then i change the text in the label itself to answers
            document.querySelector('label[for=answer_one]').innerHTML = answers[i][answers_key[j]];
            document.querySelector('label[for=answer_two]').innerHTML = answers[i][answers_key[j + 1]];
            document.querySelector('label[for=answer_three]').innerHTML = answers[i][answers_key[j + 2]];
            document.querySelector('label[for=answer_four]').innerHTML = answers[i][answers_key[j + 3]];
            document.querySelector('label[for=answer_five]').innerHTML = answers[i][answers_key[j + 4]];
            document.querySelector('label[for=answer_six]').innerHTML = answers[i][answers_key[j + 5]];
        }
    }
    i += 1;
    if (i === 6) {
        i = 0;
    }
    console.log(i);
}

function score(id) {
    switch (id) {
        case 'answer_one':
            num = 0;
            break;
        case 'answer_two':
            num = 1;
            break;
        case 'answer_three':
            num = 2;
            break;
        case 'answer_four':
            num = 3;
            break;
        case 'answer_five':
            num = 4;
            break;
        case 'answer_six':
            num = 5;
            break;
        default:
            break;
    }
    console.log(num);
    add = scores[k][scores_key[num]];
    console.log(add);
    sum += add;
    console.log(sum);
    k += 1;
    console.log(k);
    //thats for when finish the quiz, you got outcome
    if (k === 6) {
        resault(sum);
        k = 0;
        sum = 0;
    }
}

//range of sum is 6-60
function resault(sum) {
    if (sum >= 6 && sum < 12) {
        animal =
            'Horse. You are a bit of a busy body, you cant sit still for too long, theres always something to do. You hold your family in the top of your priorities, but you also have lots of plans all over the place. You like to travel alot. Youre a great person, but sometimes you need to slow down';
        image_path = './images/horse.jpg';
    } else if (sum >= 12 && sum < 18) {
        animal =
            'Lion. you are strong willed, you put family first. You have a strong sense of duty to your home and loved ones. Youre a provider and a protector.';
        image_path = './images/Lion.jpg';
    } else if (sum >= 18 && sum < 24) {
        animal =
            'Alligator. you are a sneaky individual who likes to cause trouble. You often think about the greater good, but you work your way up the ladder the cheap and easy way. You care very little about the negative effects your actions cause on others, you only care about whats going to get you ahead quickly.';
        image_path = './images/Alligator.jpg';
    } else if (sum >= 24 && sum < 30) {
        animal =
            'Coyote. you tend to stick close to your friends. You guys have a tight bond. This is both good and bad, as you like to show off in front of your friends to prove just how cool you are. This little trait tends to get you into trouble, but luckily you got a whole crew at your back willing to fight along side you';
        image_path = './images/Coyote.jpg';
    } else if (sum >= 30 && sum < 36) {
        animal =
            'Wolf. Despite what most people would like the believe, youre a lover, not a fighter, but that doesnt mean that you are not ready to take a bite into anyone whos messing with you!  You form strong, long lasting bonds with people and youre never second guessing yourself in your decisions.  This makes you a follower, a leader and the person everyone wants looking out for them and watching their backs!  Truthfully, youre just one of the pack.';
        image_path = './images/Wolf.jpg';
    } else if (sum >= 36 && sum < 42) {
        animal =
            'Polar Bear. You are powerful, dominant and friendly all mushed up into one.  Youve got plenty of strength, but you never bully people around with it and only ever use it in defense or others and, if it comes to it, yourself.  You demand respect because you give respect. Youll never be overwhelmed, because you face your challenges and you push them back and conquer them. youre rough and tough and cuddly all over';
        image_path = './images/Polar bear.jpg';
    } else if (sum >= 42 && sum < 48) {
        animal =
            'Dove. Your personality is full of love and peace and all those giggly good things that people want.  So, you are exactly the kind of person most people would want to be.  Youve got a smile that makes hearts flutter and, speaking of hearts, you are no falling short in the love department.  No one would look twice at you and see any flaws, but remark on your delicate nature.  And on top of all of this, youre pretty witty and know when youve got to stop and reflect on what you have done.  You are your own auto-correct.';
        image_path = './images/Dove.jpg';
    } else if (sum >= 48 && sum < 54) {
        animal =
            'Koala Bear. You are a laid-back, hedonistic and rather asocial type. One might say your approach to life is not serious but you just take things easy and do not care what others think.';
        image_path = './images/Coala bear.jpg';
    } else {
        animal =
            'Fish. Youre so lucky you dont need rabbit feet, or clovers to keep you feeling like youre unstoppable.  Sometimes youve got luck so well on your side that youre at a loss for words.  Everything seems to work out for you and youre on your way to achieving great things. Youve got some sense up in your head to tell you when to stop and take a minute to think about what youre about to do and because of everything youve got going for you youll make the best decision which is likely the right one';
        image_path = './images/Fish.jpg';
    }
    document.querySelector('.answers').id = 'hide';
    document.querySelector('#question').id = 'questions';
    document.querySelector('#questions').innerHTML = 'You are a ' + animal;
    document.querySelector('#question_img').src = image_path;
}

//changing the input types button/checkbox/radio
function change_input_type(current_value) {
    switch (current_value) {
        //changing the input type from button to checkbox
        case 'button':
            document.querySelector('#answer_one').type = 'checkbox';
            document.querySelector('#answer_two').type = 'checkbox';
            document.querySelector('#answer_three').type = 'checkbox';
            document.querySelector('#answer_four').type = 'checkbox';
            document.querySelector('#answer_five').type = 'checkbox';
            document.querySelector('#answer_six').type = 'checkbox';
            break;
        case 'checkbox':
            //unchecks the checkbox buttons
            document.querySelector('#answer_one').checked = false;
            document.querySelector('#answer_two').checked = false;
            document.querySelector('#answer_three').checked = false;
            document.querySelector('#answer_four').checked = false;
            document.querySelector('#answer_five').checked = false;
            document.querySelector('#answer_six').checked = false;
            //changing the input type from checkbox to radio
            document.querySelector('#answer_one').type = 'radio';
            document.querySelector('#answer_two').type = 'radio';
            document.querySelector('#answer_three').type = 'radio';
            document.querySelector('#answer_four').type = 'radio';
            document.querySelector('#answer_five').type = 'radio';
            document.querySelector('#answer_six').type = 'radio';
            break;
        case 'radio':
            //unchecks the radio buttons
            document.querySelector('#answer_one').checked = false;
            document.querySelector('#answer_two').checked = false;
            document.querySelector('#answer_three').checked = false;
            document.querySelector('#answer_four').checked = false;
            document.querySelector('#answer_five').checked = false;
            document.querySelector('#answer_six').checked = false;
            //changing the input type from radio to button
            document.querySelector('#answer_one').type = 'button';
            document.querySelector('#answer_two').type = 'button';
            document.querySelector('#answer_three').type = 'button';
            document.querySelector('#answer_four').type = 'button';
            document.querySelector('#answer_five').type = 'button';
            document.querySelector('#answer_six').type = 'button';
            break;
        default:
            break;
    }
}

//change LOAD button class so i can hide it
function change_class() {
    document.querySelector('#LOAD').id = 'LOAD1';
}