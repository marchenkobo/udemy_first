"use strict";

function learnLang(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

learnLang('JavaScript', function(){
    console.log("И у меня всё получается!");
});



// Или такая запись:

// learnLang('JavaScript', testCallback);
// function testCallback(){
//     console.log("И у меня всё получается!");
// };