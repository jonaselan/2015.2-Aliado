module.exports = function() {
  var controller = {};
  var dados = [];
  var jogadores = [1, 2, 3, 4];
  var msg = "";
  var limitador_jogadas = 3;

  function jogadoresSort(array) {
    'use strict';
    var aux_dado;
    var aux_jogador;

    for (var i = 0; i < jogadores.length; i++) {
      for (var j = 0; j < jogadores.length; j++) {
        if (dados[j] < dados[j+1] && j+1 < dados.length) {
          aux_dado = dados[j+1];
          dados[j+1] = dados[j];
          dados[j] = aux_dado;

          aux_jogador = jogadores[j+1];
          jogadores[j+1] = jogadores[j];
          jogadores[j] = aux_jogador;
        }
      }
    }
  }

  function empateDados() {
    'use strict';
    var count = 0;

    for (var x = 1; x < limitador_jogadas; x++) {
      if (dados[x] === dados[0]) {
        count += 1;
      } else {
        break;
      }
    }

    return count;
  }

  function jogarDados(qtd_vezes) {
    var aux = 0;
    // jogar os dados
    while(aux < qtd_vezes){
      dados[aux] = (Math.floor(Math.random()*6)+Math.floor(Math.random()*6))+2;
      aux++;
    }
    jogadoresSort();
  };

  controller.primeiroJogador = function(req, res) {
    jogarDados(4);
    while(empateDados() > 0) {
      limitador_jogadas = empateDados() + 1;
      jogarDados(empateDados());
    }
    res.json({ primeiro_jogador: jogadores[0]});
  }

  return controller;
};
