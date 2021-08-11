// comece a criar a sua função add na linha abaixo
function add(a, b) {
  let sum = a + b;

  return sum;
}

// descomente a linha seguinte para testar sua função
// console.assert(
//   add(3, 5) === 8,
//   'A função add não está funcionando como esperado'
// );

// comece a criar a sua função multiply na linha abaixo

function multiply(a, b) {
  let mult = 0;

  for (let i = 0; i < b; i++) {
    mult = add(mult, a);
  }
  return mult;
}

// descomente a linha seguinte para testar sua função
// console.assert(
//   multiply(4, 6) === 24,
//   'A função multiply não está funcionando como esperado'
// );

// comece a criar a sua função power na linha abaixo

function power(x, n) {
  let expo = 1;

  for (let i = 0; i < n; i++) {
    expo = multiply(expo, x);
  }
  return expo;
}

// descomente a linha seguinte para testar sua função
// console.assert(
//   power(3, 4) === 81,
//   'A função power não está funcionando como esperado'
// );

// comece a criar a sua função factorial na linha abaixo
function factorial(x) {
  let fac = 1;

  for (let i = 0; i < x; i++) {
    fac = multiply(fac, x - i);
  }
  return fac;
}

// descomente a linha seguinte para testar sua função
console.assert(
  factorial(5) === 120,
  'A função factorial não está funcionando como esperado'
);

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n) {
  let results = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      results.push(1);
    } else {
      results.push(add(results[i - 2], results[i - 1]));
    }
  }
  return results[results.length - 1];
}

// descomente a linha seguinte para testar sua função
console.assert(
  fibonacci(7) === 13,
  'A função fibonacci não está funcionando como esperado'
);
