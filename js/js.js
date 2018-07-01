var tempo = new Number();
var fone = function (val) {
		return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	},
	foneopcao = {
		onKeyPress: function(val, e, field, options) {
		field.mask(fone.apply({}, arguments), options);
	}
};
$('#telefone').mask(fone, foneopcao);
// Tempo em segundos
tempo = 6000;

function contatempo(){
// Se o tempo não for zerado
if((tempo - 1) >= 0){
// Pega a parte inteira dos minutos
var min = parseInt(tempo/60);
// horas, pega a parte inteira dos minutos
var hor = parseInt(min/60);
//atualiza a variável minutos obtendo o tempo restante dos minutos
min = min % 60;
// Calcula os segundos restantes
var seg = tempo%60;
// Formata o número menor que dez, ex: 08, 07, ...
if(min < 10){
min = "0"+min
min = min.substr(0, 2);
}
if(seg <=9){
seg = "0"+seg;
}
if(hor <=9){
hor = "0"+hor;
}
// Cria a variável para formatar no estilo hora/cronômetro
horaImprimivel = hor+':' + min + ':' + seg;
//JQuery pra setar o valo
$("#tempo").html(horaImprimivel);
// Define que a função será executada novamente em 1000ms = 1 segundo
setTimeout('contatempo()',1000);
// diminui o temp
tempo--;
// Quando o contador chegar a zero faz esta ação
}
}
// Chama a função ao carregar a tela
contatempo();