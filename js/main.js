'use strict';

window.addEventListener('DOMContentLoaded', () => {
console.log('works');

const scroller = document.querySelector('.navigation');
scroller.addEventListener('click', function(event) {
    console.log(this.hash);
})

});
