// const { writeFile } = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser({ explicitArray: false });
let xmlString;
const builder = new xml2js.Builder();

describe('Converter XML em String', () => {
  it('deve converter o XML em uma string e atribuir a uma variável', () => {
    cy.readFile('cypress/fixtures/teste.xml').then((xml) => {
      parser.parseString(xml, (err, result) => {
        xmlString = JSON.stringify(result);
      });

      const teste = JSON.parse(xmlString)

      console.log('aaaaa', teste.nfeProc.NFe.infNFe.$.Id.slice(3))

      xml = builder.buildObject(teste);

      cy.writeFile(`cypress/out/${teste.nfeProc.NFe.infNFe.$.Id.slice(3)}-nfe.xml`, xml)
    });

  });
});