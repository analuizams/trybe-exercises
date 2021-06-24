function calc(param1, param2, param3) {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(param1) || isNaN(param2) || isNaN(param3)) {
      reject(Error('Informe apenas números'));
    }
    const result = ((param1 + param2) * param3);
    if (result < 50) {
      reject(Error('Valor muito baixo'));
    }
    resolve(result);
  })
  return promise;
}

// calc(11, 10, 3)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error.message))

function randomNum() {
  return Math.floor(Math.random() * 100 + 1);
}

calc(randomNum(), randomNum(), randomNum())
  .then((response) => console.log(response))
  .catch((error) => console.log(error.message))

async function calcA() {
  try {
    const r = await calc(randomNum(), randomNum(), randomNum())
    console.log(r);
  }
  catch(error) {
    console.log(error.message)
  }
}

calcA()