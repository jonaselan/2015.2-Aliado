module.exports = function (app) {

  var controller = app.controllers.aliado;

  app.route('/primeiro_jogador')
  	.get(controller.primeiroJogador)

};
