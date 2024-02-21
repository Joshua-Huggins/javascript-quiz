// This is the question funstions that contain questions and the answers. They are in multidimensional array with inner array elements
var questions = [
    { 
        question: " How to write a comment in Javascript?", 
        answers: [
            { text: "A. <!--This is a comment-->", correct: false },
            { text: "B. This is a comment" , correct: false },
            { text: "C. /* This is a comment */", correct: false },
            { text: "D. // This is a comment", correct: true }
        ]
    },
    { 
        question: "Which method is used to sorts the elements of an array?", 
        answers: [
            { text: "A. concat()", correct: false },
            { text: "B. order()", correct: false },
            { text: "C. sort()", correct: true },
            { text: "D. changeOrder()", correct: false }
        ]
    },
    { 
        question: "Which event is related to the keyboard?", 
        answers: [
            { text: "A. onkeypress", correct: true },
            { text: "B. onfocus", correct: false },
            { text: "C. onclick", correct: false },
            { text: "D. hover", correct: false }
        ]
    },
    { 
        question: "which of the method is used to get HTML element in javascript?", 
        answers: [
            { text: "A. getElementbyId()", correct: false },
            { text: "B. Both A & C", correct: true },
            { text: "C. getElementsByClassName()", correct: false },
            { text: "D. None of the above", correct: false }
        ]
    },
    { 
        question: "Which of the keyword is used to define the variable in the javascript",
        answers: [
            { text: "A. Var", correct: false },
            { text: "B. let", correct: false },
            { text: "C. Both A & B", correct: true },
            { text: "D. None of the above", correct: false }
        ]
    },
];