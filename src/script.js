import anime from '../lib/anime.es.js';

document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault();

  let objPropBalance = document.querySelector('.balance .totalBalance');
  let objPropTotal = document.querySelector('.totalMonth');

  let myObject = {
    prop1: '$0',
    prop2: '$0'
  }

  anime({
    targets: myObject,
    prop1: '£921.48',
    prop2: '£478.33',
    easing: 'linear',
    round: 2,
    update: function() {
      objPropBalance.innerHTML = myObject.prop1.startsWith('$') ? '$' + myObject.prop1.slice(1) : myObject.prop1;
      objPropTotal.innerHTML = myObject.prop2.startsWith('$') ? '$' + myObject.prop2.slice(1) : myObject.prop2;
    }
    
  });
});


const addElements = document.querySelectorAll('li');

addElements.forEach(function(addElement) {
  addElement.addEventListener('mouseover', function(event) {
    const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    if (daysOfWeek.includes(event.target.classList[0])) {
      const newElement = document.createElement('div');
      newElement.classList.add('anime', 'w-13', 'h-8', 'rounded-md','bg-slate-800', 'text-slate-100', 'text-sm', 'absolute', 'text-center', 'font-bold', 'flex','justify-center','p-1','-mt-9', '-ml-2', 'animate-bounce');
      
      newElement.textContent = getSpentForDay(event.target.classList[0]);

      // Insert the new element as the first child of the target li element
      event.target.insertBefore(newElement, event.target.firstChild);
    }
  });

  addElement.addEventListener('mouseout', function(event) {
    const removeElements = event.target.querySelectorAll('.anime');

    removeElements.forEach(function(element) {
      element.remove();
    });
  });
});

// let endDelay = function() { 
//   anime({
//     targets: '.end-delay-demo',
//     translateX: 50,
//     endDelay: 1000,
//     direction: 'alternate'
//   });
// };

// endDelay();

function getSpentForDay(day) {
  // You can replace this with your own logic to retrieve the price for each day
  const spent = {
    mon: '$11.50',
    tue: '$24.12',
    wed: '$52.36',
    thu: '$31.07',
    fri: '$27.30',
    sat: '$49.04',
    sun: '$29.11'
  };

  return spent[day];
}





