var expect = require('chai').expect;
var chai = require('chai');
const axios = require('axios');

var app = require('../../config')();

describe('teste inicial chai rodando', () => {

    before(() => {
        app.listen(8080, () => {
            console.log("Servidor iniciado utilizando o Restfy");
        });
    });

    after(() => {
        app.close();
    });

    it('Deve executar o teste basico', () => {
        var umMaisum = 1 + 1;
        expect(umMaisum).to.equal(2);
        done();
    });

    it("should return all the resources", done => {
        axios.get('http://localhost:8080/hello/Jean')
            .then(response => {
                done();
            })
            .catch(error => {
                
            });
    });

});