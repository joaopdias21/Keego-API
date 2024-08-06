describe('Simulação Login', () => {
  it('login', () => {
    // Simulação de dados de login
    const loginData = {
      username: 'testuser',
      password: 'password123'

      //username: 'joao.dias',
      //password: 'Keego1'
      

    };

    // Simulação de endpoint de login
    const loginUrl = 'https://jsonplaceholder.typicode.com/posts';
    //const loginUrl = 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login';

    // Simulação de requisição de login
    cy.request({
      method: 'POST',
      url: loginUrl,
      body: loginData
    }).then((loginResponse) => {
      // Validar o status code de login
      expect(loginResponse.status).to.eq(201);

      // Simulação de token de autenticação
      const authToken = 'fake-jwt-token';

      // Requisição para a lista de produtos usando o token simulado
      cy.request({
        method: 'GET',
        url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }).then((productsResponse) => {
        // Validar o status code da resposta dos produtos
        expect(productsResponse.status).to.eq(200);

        // Verificar se a resposta não está vazia
        expect(productsResponse.body).to.not.be.empty;
      });
    });
  });
});
