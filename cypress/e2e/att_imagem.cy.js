const FormData = require('form-data');
const fs = require('fs');

describe('nova imagem', () => {
  const userId = 'seuUserId';
  const source = 'seuSource';
  const color = 'seuColor';
  const url = `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`;
  const token = 'seuTokenAqui';
  const imagePath = 'C:\\Users\\Pichau\\Downloads\\ERRO 500.png';

  it('deve atualizar a imagem do produto corretamente', () => {
    cy.readFile(imagePath, 'binary').then(fileContent => {
      const formData = new FormData();
      formData.append('file', new Blob([fileContent], { type: 'image/png' }), 'imagem.png');

      cy.request({
        method: 'PUT',
        url: url,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
        body: formData,
        encoding: 'binary'
      }).then((response) => {
        // Validar o status code
        expect(response.status).to.eq(200);

        // Verificar o ID da nova imagem inserida
        const responseBody = response.body;
        expect(responseBody).to.have.property('newImageId');
        cy.log(`ID da nova imagem: ${responseBody.newImageId}`);
      });
    });
  });
});
