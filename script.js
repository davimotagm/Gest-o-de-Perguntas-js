let slenzie = {
    nameEvent: "",
    questions: []
};

let question = {
    user: "Username",
    userQuestion: "Qual sua idade?",
    vote: 0
}

function creatEvent(obj, str) {
    if (typeof str === 'string' && str.length >= 5) {
        obj.nameEvent = str;
        return slenzie
    } else {
        return "The input value is invalid"
    }
}

function addQuestion(obj1, obj2) {
    if (obj2.user === '') {
        return "The user can't be empty";
    } else if (obj2.userQuestion === '') {
        return "The question can't be null"
    } else {
        obj1.questions.push(obj2)
    }
}

function addVoteToQuestion(vlrInt, obj) {
    if (vlrInt > obj.questions.length || vlrInt < 0) {
        return "Question not found.";
    } else {
        obj.questions[vlrInt].vote++;
        return "Vote registered successfully" 
    }
}

function questionAnswered(vlrInt, obj) {
    if (vlrInt > obj.questions.length || vlrInt < 0) {
        return "Question not found.";
    } else {
        obj.questions[vlrInt].answered = true
    }
}

function unansweredQuestions(obj) {
    let output = [];
    for (let i = 0; i < obj.questions.length; i++) {
        if ("answered" in obj.questions[i] === false) {
            output.push(obj.questions[i])
        }
    }
    return output
}
