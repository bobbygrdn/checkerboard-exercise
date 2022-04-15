// var body = document.getElementsByTagName('body')[0];
// body.style.margin = '0px';
// function square(backgroundColor) {
//     var div = document.createElement('div');
//     div.style.width = '11.1%';
//     div.style.paddingBottom = '11.1%';
//     div.style.float = 'left';
//     div.style.backgroundColor = backgroundColor;
//     document.body.appendChild(div);
// }

// function checkerBoard(color1, color2, num) {
//     var x = 0; 
//     while(x <= num) {
//         if(x % 2 == 0) {
//            square(color1);
//            x++;
//         } else {
//            square(color2);
//            x++;
//         }
//     }
// }

// checkerBoard('black', 'red', 71);

// var body = document.getElementsByTagName('body')[0];
// body.style.margin = '0px';
// function square(color) {
//     var div = document.createElement('div');
//     div.style.width = '11.1%';
//     div.style.paddingBottom = '11.1%';
//     div.style.float = 'left';
//     div.style.backgroundColor = color;
//     document.body.appendChild(div);
// }

// function checkerBoard(num) {
//     var currentColor = '';
//     let x = 0; 
//     while(x <= num) {
//         square('#'+currentColor);
//         currentColor = randomColor();
//         x++;
//     }
// }
// function randomColor() {
//     let random = Math.floor(Math.random()*16777215).toString(16)
//     return random;
// }

// checkerBoard(71);


// var body = document.getElementsByTagName('body')[0];
// body.style.margin = '0px';
// function square(color) {
//     var div = document.createElement('div');
//     div.style.width = '11.1%';
//     div.style.paddingBottom = '11.1%';
//     div.style.float = 'left';
//     div.style.backgroundColor = color;
//     document.body.appendChild(div);
// }

// function checkerBoard(num) {
//     var currentColor = 28;
//     let x = 0; 
//     while(x <= num) {
//         if (x % 2 === 0) {
//             square('#'+currentColor+'ccff');
//             currentColor++;
//             x++; 
//         } else {
//             square('#'+'ff'+currentColor+'ff');
//             currentColor++;
//             x++;
//         }
//     }
// }


// checkerBoard(71);

var body = document.getElementsByTagName('body')[0];
body.style.margin = '0px';

function square(color) {
    var div = document.createElement('div');
    div.style.width = '11.1%';
    div.style.paddingBottom = '11.1%';
    div.style.float = 'left';
    div.style.backgroundColor = color;
    document.body.appendChild(div);
}

function checkerBoard(num) {
    var currentColor = '';
    let x = 0; 
    while(x <= num) {
        square('#'+currentColor);
        currentColor = randomColor();
        x++;
    }
}
function randomColor() {
    let random = Math.floor(Math.random()*16777215).toString(16)
    return random;
}

setInterval(checkerBoard(71), 2000)
