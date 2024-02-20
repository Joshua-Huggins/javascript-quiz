// This is the question funstions that contain questions and the answers. They are in multidimensional array with inner array elements
var questions = [
    { 
        question: " How to write a comment in Javascript?", 
        answers: [
            { text: "<!--This is a comment-->", correct: false },
            { text: "This is a comment" , correct: false },
            { text: "/* This is a comment */", correct: false },
            { text: "// This is a comment", correct: true }
        ]
    },
    { 
        question: "Which method is used to sorts the elements of an array?", 
        answers: [
            { text: "concat()", correct: false },
            { text: "order()", correct: false },
            { text: "sort()", correct: true },
            { text: "changeOrder()", correct: false }
        ]
    },
    { 
        question: "Which event is related to the keyboard?", 
        answers: [
            { text: "onkeypress", correct: true },
            { text: "onfocus", correct: false },
            { text: "onclick", correct: false },
            { text: "hover", correct: false }
        ]
    },
    { 
        question: "which of the method is used to get HTML element in javascript?", 
        answers: [
            { text: "getElementbyId()", correct: false },
            { text: "Both A & C", correct: true },
            { text: "getElementsByClassName()", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    { 
        question: "Which of the keyword is used to define the variable in the javascript",
        answers: [
            { text: "Var", correct: false },
            { text: "let", correct: false },
            { text: "Both A & B", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
];