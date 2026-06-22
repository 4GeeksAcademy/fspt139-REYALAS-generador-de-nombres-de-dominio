import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extenciones = [`.com`, `.net`, `.us`, `.io`];

  pronoun.forEach(function (pronombreDeLaLista) {

    adj.forEach(function (adjetivoDeLaLista) {

      noun.forEach(function (sustanciaDeLaLista) {

        let baseDomain = pronombreDeLaLista + adjetivoDeLaLista + sustanciaDeLaLista;
        extenciones.forEach(function (extencionesDeLaLista) {
          console.log(baseDomain + extencionesDeLaLista);
        })

      })

    })

  })

};