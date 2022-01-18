const productDetails = require("../src/productDetails");

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Álcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Álcool gel'
      details: {
        productId: 'Álcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se a função `productDetails` tem o comportamento esperado", () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe("function");

    // Teste se o retorno da função é um array.
    const isObject = typeof productDetails("Luva", "Mascara"); // Esta linha de código foi sugerida por Lais Namatela
    expect(Array.isArray(productDetails("Luva", "Mascara"))).toBeTruthy();

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.keys(productDetails("Luva", "Mascara")).length).toBe(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const firstObject = typeof productDetails("Luva", "Mascara")[0];
    const secondObject = typeof productDetails("Luva", "Mascara")[1];
    expect(firstObject && secondObject).toBe("object");

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são
    // diferentes entre si.
    expect(isObject[0]).not.toEqual(isObject[1]);
    // Teste se os dois productIds terminam com 123.

    const keyOne = productDetails("Luva", "Mascara")[0];
    const keyTwo = productDetails("Luva", "Mascara")[1];
    expect(keyOne.details.productId).toMatch(/(.*123$)/);
    expect(keyTwo.details.productId).toMatch(/(.*123$)/);
  });
});
