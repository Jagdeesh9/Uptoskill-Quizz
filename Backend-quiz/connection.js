const mongoose = require('mongoose');
const Question = require('./models/question.model')

async function connectToMongoDb(url) {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}


const questions = [
    { 
        id: 1, 
        question: "What does HTML stand for?", 
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"], 
        answer: 0 
    },
    { 
        id: 2, 
        question: "Which HTML tag is used to define an internal style sheet?", 
        options: ["<style>", "<script>", "<css>", "<stylesheet>"], 
        answer: 0 
    },
    { 
        id: 3, 
        question: "Which property is used to change the background color in CSS?", 
        options: ["color", "background-color", "bgcolor", "bg-color"], 
        answer: 1 
    },
    { 
        id: 4, 
        question: "Which HTML attribute is used to define inline styles?", 
        options: ["style", "class", "styles", "font"], 
        answer: 0 
    },
    { 
        id: 5, 
        question: "Which is the correct CSS syntax to change the font size of an element?", 
        options: ["font-size: 16px;", "font: 16px;", "text-size: 16px;", "fontSize: 16px;"], 
        answer: 0 
    },
    { 
        id: 6, 
        question: "Which tag is used to create a hyperlink in HTML?", 
        options: ["<a>", "<link>", "<href>", "<hyperlink>"], 
        answer: 0 
    },
    { 
        id: 7, 
        question: "How do you add a comment in CSS?", 
        options: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "'This is a comment"], 
        answer: 2 
    },
    { 
        id: 8, 
        question: "What is the correct HTML element for inserting a line break?", 
        options: ["<break>", "<br>", "<lb>", "<line>"], 
        answer: 1 
    },
    { 
        id: 9, 
        question: "Which attribute is used to provide an alternate text for an image in HTML?", 
        options: ["title", "alt", "src", "longdesc"], 
        answer: 1 
    },
    { 
        id: 10, 
        question: "How do you create a function in JavaScript?", 
        options: ["function:myFunction()", "function = myFunction()", "function myFunction()", "createFunction myFunction()"], 
        answer: 2 
    },
    { 
        id: 11, 
        question: "Which CSS property is used to change the text color of an element?", 
        options: ["fgcolor", "text-color", "color", "font-color"], 
        answer: 2 
    },
    { 
        id: 12, 
        question: "How do you call a function named 'myFunction' in JavaScript?", 
        options: ["call myFunction()", "call function myFunction()", "myFunction()", "Call.myFunction()"], 
        answer: 2 
    },
    { 
        id: 13, 
        question: "Which HTML tag is used to define an unordered list?", 
        options: ["<ul>", "<ol>", "<li>", "<list>"], 
        answer: 0 
    },
    { 
        id: 14, 
        question: "What does CSS stand for?", 
        options: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"], 
        answer: 2 
    },
    { 
        id: 15, 
        question: "How do you write a comment in JavaScript?", 
        options: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "'This is a comment"], 
        answer: 1 
    },
    { 
        id: 16, 
        question: "Which HTML element is used to specify a footer for a document or section?", 
        options: ["<footer>", "<bottom>", "<section>", "<foot>"], 
        answer: 0 
    },
    { 
        id: 17, 
        question: "Which is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>", 
        options: ["document.getElementById('demo').innerHTML = 'Hello World!';", "#demo.innerHTML = 'Hello World!';", "document.getElement('p').innerHTML = 'Hello World!';", "demo.innerHTML = 'Hello World!';"], 
        answer: 0 
    },
    { 
        id: 18, 
        question: "Which HTML element is used to define important text?", 
        options: ["<important>", "<strong>", "<b>", "<i>"], 
        answer: 1 
    },
    { 
        id: 19, 
        question: "Which property is used to change the font of an element in CSS?", 
        options: ["font-style", "font-weight", "font-family", "font-size"], 
        answer: 2 
    },
    { 
        id: 20, 
        question: "How do you declare a JavaScript variable?", 
        options: ["var carName;", "variable carName;", "v carName;", "declare carName;"], 
        answer: 0 
    },
    { 
        id: 21, 
        question: "What does the 'id' attribute in HTML specify?", 
        options: ["A unique identifier for an element", "A class for an element", "The element's style", "The element's script"], 
        answer: 0 
    },
    { 
        id: 22, 
        question: "How do you make a list that lists its items with bullets in HTML?", 
        options: ["<dl>", "<ol>", "<list>", "<ul>"], 
        answer: 3 
    },
    { 
        id: 23, 
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", 
        options: ["title", "alt", "src", "longdesc"], 
        answer: 1 
    },
    { 
        id: 24, 
        question: "How do you create a checkbox in HTML?", 
        options: ["<input type='checkbox'>", "<input type='check'>", "<check>", "<checkbox>"], 
        answer: 0 
    },
    { 
        id: 25, 
        question: "Which property is used to change the left margin of an element in CSS?", 
        options: ["padding-left", "margin-left", "indent-left", "left-margin"], 
        answer: 1 
    },
    { 
        id: 26, 
        question: "How can you make a numbered list in HTML?", 
        options: ["<ul>", "<dl>", "<ol>", "<list>"], 
        answer: 2 
    },
    { 
        id: 27, 
        question: "Which HTML element is used to specify a header for a document or section?", 
        options: ["<header>", "<head>", "<section>", "<hgroup>"], 
        answer: 0 
    },
    { 
        id: 28, 
        question: "Which property is used to change the font color in CSS?", 
        options: ["font-color", "color", "text-color", "font-style"], 
        answer: 1 
    },
    { 
        id: 29, 
        question: "Which is the correct way to write a JavaScript array?", 
        options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = 'red' + 'green' + 'blue'"], 
        answer: 2 
    },
    { 
        id: 30, 
        question: "Which method is used to write HTML output in JavaScript?", 
        options: ["document.write()", "document.print()", "document.output()", "document.display()"], 
        answer: 0 
    },
    { 
        id: 31, 
        question: "Which HTML tag is used to define a table?", 
        options: ["<table>", "<tab>", "<tr>", "<td>"], 
        answer: 0 
    },
    { 
        id: 32, 
        question: "How do you insert a comment in HTML?", 
        options: ["'This is a comment'", "// This is a comment", "/* This is a comment */", "<!-- This is a comment -->"], 
        answer: 3 
    },
    { 
        id: 33, 
        question: "Which property is used to change the bottom margin of an element in CSS?", 
        options: ["padding-bottom", "margin-bottom", "indent-bottom", "bottom-margin"], 
        answer: 1 
    },
    { 
        id: 34, 
        question: "Which HTML element is used to specify a paragraph?", 
        options: ["<p>", "<paragraph>", "<pg>", "<par>"], 
        answer: 0 
    },
    { 
        id: 35, 
        question: "Which method can be used to find the length of an array in JavaScript?", 
        options: ["length()", "arrayLength()", "length", "getLength()"], 
        answer: 2 
    },
    { 
        id: 36, 
        question: "Which HTML element is used to specify a table row?", 
        options: ["<tablerow>", "<tr>", "<td>", "<th>"], 
        answer: 1 
    },
    { 
        id: 37, 
        question: "How do you make text bold in HTML?", 
        options: ["<strong>", "<b>", "<bold>", "<big>"], 
        answer: 1 
    },
    { 
        id: 38, 
        question: "Which CSS property is used to change the text alignment of an element?", 
        options: ["align", "text-align", "text-style", "text-alignement"], 
        answer: 1 
    },
    { 
        id: 39, 
        question: "What does the 'src' attribute in an HTML <img> tag specify?", 
        options: ["The image height", "The image width", "The image source URL", "The image description"], 
        answer: 2 
    },
    { 
        id: 40, 
        question: "Which tag is used to define a division or a section in an HTML document?", 
        options: ["<div>", "<section>", "<article>", "<span>"], 
        answer: 0 
    },
    { 
        id: 41, 
        question: "How do you create a variable in JavaScript?", 
        options: ["var myVar;", "variable myVar;", "v myVar;", "declare myVar;"], 
        answer: 0 
    },
    { 
        id: 42, 
        question: "Which property is used to change the text color in CSS?", 
        options: ["color", "text-color", "font-color", "textStyle"], 
        answer: 0 
    },
    { 
        id: 43, 
        question: "How do you add a background color for all <h1> elements in CSS?", 
        options: ["h1 {background-color: #FFFFFF;}", "h1.all {background-color: #FFFFFF;}", "all.h1 {background-color: #FFFFFF;}", "h1 {bgcolor: #FFFFFF;}"], 
        answer: 0 
    },
    { 
        id: 44, 
        question: "Which HTML attribute is used to define inline styles?", 
        options: ["style", "class", "font", "styles"], 
        answer: 0 
    },
    { 
        id: 45, 
        question: "How do you write an 'if' statement in JavaScript?", 
        options: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"], 
        answer: 2 
    },
    { 
        id: 46, 
        question: "Which CSS property controls the text size?", 
        options: ["font-style", "text-size", "font-size", "text-style"], 
        answer: 2 
    },
    { 
        id: 47, 
        question: "How do you write a JavaScript array?", 
        options: ["var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = (1:'red', 2:'green', 3:'blue')"], 
        answer: 1 
    },
    { 
        id: 48, 
        question: "How do you write a comment in HTML?", 
        options: ["'This is a comment'", "// This is a comment", "<!-- This is a comment -->", "/* This is a comment */"], 
        answer: 2 
    },
    { 
        id: 49, 
        question: "Which property is used to change the left margin in CSS?", 
        options: ["padding-left", "margin-left", "indent-left", "left-margin"], 
        answer: 1 
    },
    { 
        id: 50, 
        question: "What is the correct way to include an external JavaScript file in HTML?", 
        options: ["<script src='filename.js'></script>", "<script href='filename.js'></script>", "<script ref='filename.js'></script>", "<script link='filename.js'></script>"], 
        answer: 0 
    }
];

async function deleteAll(){
    await Question.deleteMany();
    console.log('delete success fully')
}

async function insert(){
    await Question.insertMany(questions)
    console.log('data inserted successfully');
}

// deleteAll();
// insert();
  
 module.exports = {
  connectToMongoDb
 }