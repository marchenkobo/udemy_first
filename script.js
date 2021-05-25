"use strict";

let timerId,
    i = 0;

    window.addEventListener('click', (e) => {
        timerId = setInterval(logger, 500);
    });
    function logger(){
        if (i === 2){
            //сброс интервала
            clearInterval(timerId);
        }
        console.log('Click detected');
        i++;
    }

    // Рекурсивный setTimeout (замена setInterval`у)
    let b = 0;
    let ownSetInterval = setTimeout(function log(){
        console.log(b);
        if (b < 2){
            ownSetInterval = setTimeout(log, 500);
            b++;
        } 
        else{
            console.log('End');
            console.log(log);
        }
    }, 500);