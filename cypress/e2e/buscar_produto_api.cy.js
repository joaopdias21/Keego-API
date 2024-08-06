describe('Produtos', () => {
    it('produtos zorah e validar status code', () => {
      cy.request('http://makeup-api.herokuapp.com/api/v1/products.json?brand=zorah')
      //cy.request('https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=laptops')
        .then((response) => {
          // Validar o status code
          expect(response.status).to.eq(200);
  
          // Verificar se todos os produtos são da marca Zorah
          response.body.forEach(product => {
            expect(product.brand).to.eq('zorah');
            //expect(product.brand).to.eq('laptops');
          });
        });
    });
  });
  