import { browser, by, element } from 'protractor';

describe('Test de Login', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
    browser.get("/");
    });
    //creación de prueba 1
    it("El page del Login se muestra por defecto", ()=>{
    expect(element(by.css(".titulo ion-label")).getText()).toContain("Login");
    });
    }); //fin de prueba 1
