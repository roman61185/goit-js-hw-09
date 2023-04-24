import Notiflix from 'notiflix';

const inputDelay = document.querySelector('.form input[name="delay"]');
const inputStep = document.querySelector('.form input[name="step"]');
const inputAmount = document.querySelector('.form input[name="amount"]');
const form = document.querySelector('.form');

console.log(form);
console.log(inputDelay);
console.log(inputStep);
console.log(inputAmount);


form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const enterNumber = {
    inputDelay: Number(evt.target.elements.delay.value),
    inputStep: Number(evt.target.elements.step.value),
    inputAmount: Number(evt.target.elements.amount.value),
  };
  onSubmit(enterNumber.inputDelay, enterNumber.inputStep, enterNumber.inputAmount);
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

function onSubmit(inputDelay, inputStep, inputAmount) {
  for (let i = 1; i <= inputAmount; i += 1, inputDelay += inputStep) {
    createPromise(i, inputDelay)
      .then(onResolve)
      .catch(onReject);
  }
};

function onResolve({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onReject({ position, delay }) {
  Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
};





// const enterNumber = {
//   inputDelay: Number(evt.target.elements.inputDelay.value),
// }
// console.log(enterNumber)



// const inputDelay = document.querySelector('.form input[name="delay"]');
// const inputStep = document.querySelector('.form input[name="step"]');
// const inputAmount = document.querySelector('.form input[name="amount"]');
// const btnSubmit = document.querySelector('.form button[type="submit"]');

// console.log(inputDelay)
// console.log(inputStep)
// console.log(inputAmount)
// console.log(btnSubmit)

// сделать переменую для инпутов значений

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     window.alert(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   } else {
//     window.alert(`❌ Rejected promise ${position} in ${delay}ms`);
//   }
// }

// createPromise(4, 2222)
//   .then(({ position, delay }) => {


//   })
//   .catch(({ position, delay }) => {

//   });








// const promise = new Promise((resolve, reject) => {
//   const shouldResolve = Math.random() > 0.3;
//   setTimeout(() => {
//     if (shouldResolve) {
//       resolve('віполнился');
//     } else {
//       reject('не выполнился');
//     }
//   }, 2000);
// })

// promise.then(
//   result => {
//     console.log(`✅ Fulfilled promise`);
//   },
//   error => {
//     console.log(`❌ Rejected promise`);
//   }
// )

// const promise = new Promise((resolve, reject) => {
//   //resolve({ key: 'value' })
//   resolve(null)
// });

// promise
//   .then((response) => {
//     console.log('1', response);
//     // return { key: 'result then' }
//     return Object.keys(response)
//   })
//   .catch(error => {
//     console.log('error', error)
//     return [];
//   })
//   .then((response) => {
//     console.log('2', response)
//     return response.map(i => `Item ${i}`)
//   })
//   .catch(error => {
//     console.log('error', error)
//   })
//   .then((response) => {
//     console.log('3', response)
//   })


// Promise.resolve({ key: 'value' })
//   .then(res => {
//     console.log(res)
//     return Object.keys(res);
//   })
//   .catch(err => console.log(err))


// Promise.allSettled([
//   Promise.resolve({ key: 'value1' }),
//   Promise.reject('error'),
//   Promise.resolve({ key: 'value2' })
// ])
//   .then(response => {
//     console.log(response)
//   })
//   .catch(error => {
//     console.log(error)
//   }) 



// const timeout = (delay, data) => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(data);
//   }, delay);
// });

// //timeout(5000, { data: 'data1' }).then(response => console.log(response))

// const timeouts = Promise.all([
//   timeout(3000, { data: 'data 1' }),
//   timeout(1000, { data: 'data 2' }),
//   timeout(5000, { data: 'data 3' })
// ])
// timeouts.then(response => console.log(response))

// const firstTimeout = Promise.race([
//   timeout(3000, { data: 'data 1' }),
//   timeout(1000, { data: 'data 2' }),
//   timeout(5000, { data: 'data 3' }),
//   Promise.reject({ error: 'error' })
// ]);
// firstTimeout
//   .then(response => console.log(response))
//   .catch(error => console.log(error))




