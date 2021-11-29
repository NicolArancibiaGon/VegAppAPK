import { browser, by, element } from 'protractor';

describe('Test de Registro', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
    browser.get("/page3");
    });
    //creación de prueba 2
    it("El page de Login se redirige al del formulario al dar click en Registrarse", ()=>{
    expect(element(by.css(".titulo ion-label")).getText()).toContain("Registro");
    });
    }); //fin de prueba 2
