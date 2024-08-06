describe('Adicionar ao carrinho', () => {
    it('deve adicionar ao carrinho', () => {
      // Requisitar a lista de produtos
      cy.request('http://makeup-api.herokuapp.com/api/v1/products.json')
        .then((response) => {
          // Validar o status code
          expect(response.status).to.eq(200);
  
          // Verificar se a resposta não está vazia
          expect(response.body).to.not.be.empty;
  
          // Selecionar um produto da lista
          const product = response.body[0];
  
          // Dados do carrinho simulados
          const cart = {
            products: []
          };
  
          // Adicionar o produto ao carrinho
          cart.products.push({
            id: product.id,
            name: product.name,
            price: product.price,
            brand: product.brand
          });
  
          // Verificar se o produto foi adicionado corretamente
          expect(cart.products).to.have.length(1);
          expect(cart.products[0].id).to.eq(product.id);
          expect(cart.products[0].name).to.eq(product.name);
          expect(cart.products[0].price).to.eq(product.price);
          expect(cart.products[0].brand).to.eq(product.brand);
        });
    });
  });
  