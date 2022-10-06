const makeChange = (value) => {
  let setChanges = []; // Aqui será armazenados todos os tipos de troco
  // Foram feitas várias verificações, pois se caso não haja necessidade em algumas das situações não precisará rodar a parte do codigo
  if (value <= 0) {
    setChanges.push([0, 0, 0, 0]); // Caso meu valor for menor ou igual a zero ele não terar troco
  }
  if (value >= 1) {
    // Para o caso meu valor seja maior que um ter o valor seja maior que já ser inserido na milha lista de trocos
    setChanges.push([0, 0, 0, value]);
  }
  if (value >= 5) {
    //Caso o meu valor seja maior que 5, poderei pegar todas as possibilidades incluido 5 como troco, caso contrário ele não será executado.
    let allFive = allWithFive(value).map((element) => {
      return [0, 0, ...element];
    });
    setChanges.push(...allFive);
  }
  if (value >= 10) {
    //Caso o meu valor seja maior que 5, poderei pegar todas as possibilidades incluido 10 como troco, caso contrário ele não será executado.
    let allTen = allWithTen(value).map((element) => {
      return [0, ...element];
    });
    setChanges.push(...allTen);
  }
  if (value >= 25) {
    //Caso o meu valor seja maior que 5, poderei pegar todas as possibilidades incluido 25 como troco, caso contrário ele não será executado.
    let allTwentyFive = allWithTwentyFive(value);
    setChanges.push(...allTwentyFive);
  }

  console.log(setChanges); //Mostrar todos os tipos de trocados
};

//Algumas funções auxiliares que me ajuda na solução

const allWithFive = (value) => {
  //Função que me retorna todos os trocados com 5 e 1
  let array = [];
  let auxFive = Math.floor(value / 5);
  for (let i = 1; i <= auxFive; i++) {
    array.push([i, value - i * 5]);
  }
  return array;
};

const allWithTen = (value) => {
  //Função que me retorna todos os trocados com 10, 5 e 1
  let array = [];
  let auxTen = Math.floor(value / 10);
  for (let i = 1; i <= auxTen; i++) {
    if (value - i * 10 >= 5) {
      let allTenFive = allWithFive(value - i * 10).map((element) => {
        //Perceba que reutilizei o código que retorna toas as possibilidades com 5.
        return [i, ...element];
      });
      array.push(...allTenFive);
    } else {
      array.push([i, 0, value - i * 10]);
    }
  }
  return array;
};

const allWithTwentyFive = (value) => {
  //Função que me retorna todos os trocados com 25, 10, 5 e 1
  let array = [];
  let auxTwentyFive = Math.floor(value / 25);
  for (let i = 1; i <= auxTwentyFive; i++) {
    if (value - i * 25 >= 10) {
      let allTen = allWithTen(value - i * 25).map((element) => {
        //Perceba que reutilizei o código que retorna toas as possibilidades com 10.
        return [i, ...element];
      });
      array.push(...allTen);
    } else {
      array.push([i, 0, 0, 0]);
    }
  }
  return array;
};

makeChange(12);
