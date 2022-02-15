'use strict';
/* jshint -W101 */
window.addEventListener('DOMContentLoaded', ()=> {

    let entry = document.querySelectorAll('.entry'),
        innerEntry = document.querySelectorAll('.inner-entry'), 
        losing = document.querySelector('.losing'),
        winning = document.querySelector('.winning'), 
        index, counter, text,
        restart = document.querySelector('.restart');
        
        
        function start() {
            counter = 0;
            entry.forEach((element, i) => {
                element.addEventListener('click', (event) => {
                let target = event.target;
        
                if(target && target.classList.contains('inner-entry')){
                    innerEntry.forEach((item, i, arr) => {
                        
                        if(target == item && !item.classList.contains('x') && !item.classList.contains('o')){      
                            if(counter%2==0){
                                item.classList.add('x');
                                index = getRandomInt(9);
                                if(counter != 8) {
                                    
                                    if(counter == 0 && !arr[4].classList.contains('x')){
                                        arr[4].classList.add('o');
                                        counter++;
                                    } else if(arr[0].classList.contains('o') && arr[1].classList.contains('o')){
                                        if(arr[2].classList.contains('o') || arr[2].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[2].classList.add('o');
                                        }
                                        counter++;
                                    } else if(arr[1].classList.contains('o') && arr[2].classList.contains('o') ) {
                                        if(arr[0].classList.contains('o') || arr[0].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[0].classList.add('o');
                                        }
                                    } else if(arr[0].classList.contains('o') && arr[2].classList.contains('o') ) {
                                        if(arr[1].classList.contains('o') || arr[1].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[1].classList.add('o');
                                        }
                                    } else if(arr[3].classList.contains('o') && arr[4].classList.contains('o') ) {
                                        if(arr[5].classList.contains('o') || arr[5].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[5].classList.add('o');
                                        }
                                    } else if(arr[3].classList.contains('o') && arr[5].classList.contains('o') ) {
                                        if(arr[4].classList.contains('o') || arr[4].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[4].classList.add('o');
                                        }
                                    } else if(arr[4].classList.contains('o') && arr[5].classList.contains('o') ) {
                                        if(arr[3].classList.contains('o') || arr[3].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[3].classList.add('o');
                                        }
                                    } else if(arr[6].classList.contains('o') && arr[7].classList.contains('o') ) {
                                        if(arr[8].classList.contains('o') || arr[8].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[8].classList.add('o');
                                        }
                                    } else if(arr[6].classList.contains('o') && arr[8].classList.contains('o') ) {
                                        if(arr[7].classList.contains('o') || arr[7].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[7].classList.add('o');
                                        }
                                    } else if(arr[7].classList.contains('o') && arr[8].classList.contains('o') ) {
                                        if(arr[6].classList.contains('o') || arr[6].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[6].classList.add('o');
                                        }
                                    } else if(arr[0].classList.contains('o') && arr[3].classList.contains('o') ) {
                                        if(arr[6].classList.contains('o') || arr[6].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[6].classList.add('o');
                                        }
                                    } else if(arr[0].classList.contains('o') && arr[6].classList.contains('o') ) {
                                        if(arr[3].classList.contains('o') || arr[3].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[3].classList.add('o');
                                        }
                                    } else if(arr[3].classList.contains('o') && arr[6].classList.contains('o') ) {
                                        if(arr[0].classList.contains('o') || arr[0].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[0].classList.add('o');
                                        }
                                    } else if(arr[0+1].classList.contains('o') && arr[3+1].classList.contains('o') ) {
                                        if(arr[6+1].classList.contains('o') || arr[6+1].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[6+1].classList.add('o');
                                        }
                                    } else if(arr[0+1].classList.contains('o') && arr[6+1].classList.contains('o') ) {
                                        if(arr[3+1].classList.contains('o') || arr[3+1].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[3+1].classList.add('o');
                                        }
                                    } else if(arr[3+1].classList.contains('o') && arr[6+1].classList.contains('o') ) {
                                        if(arr[0+1].classList.contains('o') || arr[0+1].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[0+1].classList.add('o');
                                        }
                                    } else if(arr[0+2].classList.contains('o') && arr[3+2].classList.contains('o') ) {
                                        if(arr[6+2].classList.contains('o') || arr[6+2].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[6+2].classList.add('o');
                                        }
                                    } else if(arr[0+2].classList.contains('o') && arr[6+2].classList.contains('o') ) {
                                        if(arr[3+2].classList.contains('o') || arr[3+2].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[3+2].classList.add('o');
                                        }
                                    } else if(arr[3+2].classList.contains('o') && arr[6+2].classList.contains('o') ) {
                                        if(arr[0+2].classList.contains('o') || arr[0+2].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[0+2].classList.add('o');
                                        }
                                    } else if(arr[0].classList.contains('o') && arr[4].classList.contains('o') ) {
                                        if(arr[8].classList.contains('o') || arr[8].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[8].classList.add('o');
                                        }
                                    } else if(arr[0].classList.contains('o') && arr[8].classList.contains('o') ) {
                                        if(arr[4].classList.contains('o') || arr[4].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[4].classList.add('o');
                                        }
                                    } else if(arr[4].classList.contains('o') && arr[8].classList.contains('o') ) {
                                        if(arr[0].classList.contains('o') || arr[0].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[0].classList.add('o');
                                        }
                                    } else if(arr[2].classList.contains('o') && arr[4].classList.contains('o') ) {
                                        if(arr[6].classList.contains('o') || arr[6].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[6].classList.add('o');
                                        }
                                    } else if(arr[2].classList.contains('o') && arr[6].classList.contains('o') ) {
                                        if(arr[4].classList.contains('o') || arr[4].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[4].classList.add('o');
                                        }
                                    } else if(arr[4].classList.contains('o') && arr[6].classList.contains('o') ) {
                                        if(arr[2].classList.contains('o') || arr[2].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[2].classList.add('o');
                                        }
                                    } else if(arr[0].classList.contains('x') && arr[1].classList.contains('x')){
                                        if(arr[2].classList.contains('o') || arr[2].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[2].classList.add('o');
                                        }
                                        counter++;
                                    } else if(arr[1].classList.contains('x') && arr[2].classList.contains('x') ) {
                                        if(arr[0].classList.contains('o') || arr[0].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[0].classList.add('o');
                                        }
                                    } else if(arr[0].classList.contains('x') && arr[2].classList.contains('x') ) {
                                        if(arr[1].classList.contains('o') || arr[1].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[1].classList.add('o');
                                        }
                                    } else if(arr[3].classList.contains('x') && arr[4].classList.contains('x') ) {
                                        if(arr[5].classList.contains('o') || arr[5].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[5].classList.add('o');
                                        }
                                    } else if(arr[3].classList.contains('x') && arr[5].classList.contains('x') ) {
                                        if(arr[4].classList.contains('o') || arr[4].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[4].classList.add('o');
                                        }
                                    } else if(arr[4].classList.contains('x') && arr[5].classList.contains('x') ) {
                                        if(arr[3].classList.contains('o') || arr[3].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[3].classList.add('o');
                                        }
                                    } else if(arr[6].classList.contains('x') && arr[7].classList.contains('x') ) {
                                        if(arr[8].classList.contains('o') || arr[8].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[8].classList.add('o');
                                        }
                                    } else if(arr[6].classList.contains('x') && arr[8].classList.contains('x') ) {
                                        if(arr[7].classList.contains('o') || arr[7].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[7].classList.add('o');
                                        }
                                    } else if(arr[7].classList.contains('x') && arr[8].classList.contains('x') ) {
                                        if(arr[6].classList.contains('o') || arr[6].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[6].classList.add('o');
                                        }
                                    } else if(arr[0].classList.contains('x') && arr[3].classList.contains('x') ) {
                                        if(arr[6].classList.contains('o') || arr[6].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[6].classList.add('o');
                                        }
                                    } else if(arr[0].classList.contains('x') && arr[6].classList.contains('x') ) {
                                        if(arr[3].classList.contains('o') || arr[3].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[3].classList.add('o');
                                        }
                                    } else if(arr[3].classList.contains('x') && arr[6].classList.contains('x') ) {
                                        if(arr[0].classList.contains('o') || arr[0].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[0].classList.add('o');
                                        }
                                    } else if(arr[0+1].classList.contains('x') && arr[3+1].classList.contains('x') ) {
                                        if(arr[6+1].classList.contains('o') || arr[6+1].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[6+1].classList.add('o');
                                        }
                                    } else if(arr[0+1].classList.contains('x') && arr[6+1].classList.contains('x') ) {
                                        if(arr[3+1].classList.contains('o') || arr[3+1].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[3+1].classList.add('o');
                                        }
                                    } else if(arr[3+1].classList.contains('x') && arr[6+1].classList.contains('x') ) {
                                        if(arr[0+1].classList.contains('o') || arr[0+1].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[0+1].classList.add('o');
                                        }
                                    } else if(arr[0+2].classList.contains('x') && arr[3+2].classList.contains('x') ) {
                                        if(arr[6+2].classList.contains('o') || arr[6+2].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[6+2].classList.add('o');
                                        }
                                    } else if(arr[0+2].classList.contains('x') && arr[6+2].classList.contains('x') ) {
                                        if(arr[3+2].classList.contains('o') || arr[3+2].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[3+2].classList.add('o');
                                        }
                                    } else if(arr[3+2].classList.contains('x') && arr[6+2].classList.contains('x') ) {
                                        if(arr[0+2].classList.contains('o') || arr[0+2].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[0+2].classList.add('o');
                                        }
                                    } else if(arr[0].classList.contains('x') && arr[4].classList.contains('x') ) {
                                        if(arr[8].classList.contains('o') || arr[8].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[8].classList.add('o');
                                        }
                                    } else if(arr[0].classList.contains('x') && arr[8].classList.contains('x') ) {
                                        if(arr[4].classList.contains('o') || arr[4].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[4].classList.add('o');
                                        }
                                    } else if(arr[4].classList.contains('x') && arr[8].classList.contains('x') ) {
                                        if(arr[0].classList.contains('o') || arr[0].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[0].classList.add('o');
                                        }
                                    } else if(arr[2].classList.contains('x') && arr[4].classList.contains('x') ) {
                                        if(arr[6].classList.contains('o') || arr[6].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[6].classList.add('o');
                                        }
                                    } else if(arr[2].classList.contains('x') && arr[6].classList.contains('x') ) {
                                        if(arr[4].classList.contains('o') || arr[4].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[4].classList.add('o');
                                        }
                                    } else if(arr[4].classList.contains('x') && arr[6].classList.contains('x') ) {
                                        if(arr[2].classList.contains('o') || arr[2].classList.contains('x')){
                                            while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                                index = getRandomInt(9);
                                            }
                                            arr[index].classList.add('o');
                                            counter++;
                                        } else {
                                            arr[2].classList.add('o');
                                        }
                                    } else {

                                        while(arr[index].classList.contains('x') || arr[index].classList.contains('o')){
                                            index = getRandomInt(9);
                                        }
                                        arr[index].classList.add('o');
                                        counter++;
                                    }
                                }
                            }
                            
                            counter++;
                        } 
                        if(arr[0].classList.contains('x') && arr[1].classList.contains('x') && arr[2].classList.contains('x')){
                            winning.style.display = 'block';
                        } else if(arr[2].classList.contains('x') && arr[4].classList.contains('x') && arr[6].classList.contains('x')){
                            winning.style.display = 'block';
                        } else if(arr[0].classList.contains('x') && arr[4].classList.contains('x') && arr[8].classList.contains('x')){
                            winning.style.display = 'block';
                        } else if(arr[3].classList.contains('x') && arr[4].classList.contains('x') && arr[5].classList.contains('x')){
                            winning.style.display = 'block';
                        } else if(arr[6].classList.contains('x') && arr[7].classList.contains('x') && arr[8].classList.contains('x')){
                            winning.style.display = 'block';
                        } else if(arr[0].classList.contains('x') && arr[3].classList.contains('x') && arr[6].classList.contains('x')){
                            winning.style.display = 'block';
                        } else if(arr[1].classList.contains('x') && arr[4].classList.contains('x') && arr[7].classList.contains('x')){
                            winning.style.display = 'block';
                        } else if(arr[2].classList.contains('x') && arr[5].classList.contains('x') && arr[8].classList.contains('x')){
                            winning.style.display = 'block';
                        } else if(arr[0].classList.contains('o') && arr[1].classList.contains('o') && arr[2].classList.contains('o')){
                            losing.style.display = 'block';
                        } else if(arr[2].classList.contains('o') && arr[4].classList.contains('o') && arr[6].classList.contains('o')){
                            losing.style.display = 'block';
                        } else if(arr[0].classList.contains('o') && arr[4].classList.contains('o') && arr[8].classList.contains('o')){
                            losing.style.display = 'block';
                        } else if(arr[3].classList.contains('o') && arr[4].classList.contains('o') && arr[5].classList.contains('o')){
                            losing.style.display = 'block';
                        } else if(arr[6].classList.contains('o') && arr[7].classList.contains('o') && arr[8].classList.contains('o')){
                            losing.style.display = 'block';
                        } else if(arr[0].classList.contains('o') && arr[3].classList.contains('o') && arr[6].classList.contains('o')){
                            losing.style.display = 'block';
                        } else if(arr[1].classList.contains('o') && arr[4].classList.contains('o') && arr[7].classList.contains('o')){
                            losing.style.display = 'block';
                        } else if(arr[2].classList.contains('o') && arr[5].classList.contains('o') && arr[8].classList.contains('o')){
                            losing.style.display = 'block';
                        }
                        
                        losing.addEventListener('click', (e) => {                            
                            restartGame();
                        });
                        winning.addEventListener('click', (e) => {                            
                            restartGame();
                        });
                    });
                    if(counter != 9 && (losing.style.display == 'block' || winning.style.display == 'block')){
                        setTimeout(suggestion, 100);
                    }
                    if(counter == 9) {
                        if(losing.style.display == 'block' ||  winning.style.display == 'block'){
                            setTimeout(suggestion, 100);
                        } else {
                            setTimeout( () => {
                                alert('Ничья');
                            }, 100);
                            setTimeout(restartGame, 500);
                        }
                    }
                }
            });
        });
    }
    
    restart.addEventListener('click', () => {
        restartGame();
    }); 
    
    function restartGame(){
        
        innerEntry.forEach((item) => {
            if(item.classList.contains('o')){
                item.classList.toggle('o');
            } else if(item.classList.contains('x')){
                item.classList.toggle('x');
            }
            item.addEventListener('click', (e) => {
                e.preventDefault();
            });
        });
        winning.style.display = 'none';
        losing.style.display = 'none';
        counter = 0;
    }
    
    function suggestion() {
        text = confirm('Do you wanna play again?');
        if(text) {
            restartGame();
        } else {
            alert('You will play it');
            restartGame();
        }
        
    }
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    start();
    
});