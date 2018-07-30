
$(document).ready(function(){
//alert(navigator.appVersion);
esconde_aulas();

mostraAula();

receita_select();
$('.receita-body').hide();
$('#foto-receita').hide();


});//final document

function receita_select(){
	$('#receitas>.receitas-item').click(function(){
		
		$('.receita-body').show();		
		$('#foto-receita').show();
		var id_elemento=$(this).attr('id');

		var fotosReceitas=Array('img/m1.jpg','img/m2.png');
		
		oReceita=new Receitas("Muffins de pitanga","ingrediente","ficar forte",8,
"1- Comece preparando o “ovo” de linhaça que dará liga extra para massa.<br>Em um recipiente pequeno, misture a farinha de linhaça e a água.<br>Reserve por cerca de 5 minutos.<br> 2- Retire e descarte os cabinhos das pitangas caso tiver.<br>Lave bem e corte ao meio, retire as sementes e descarte. <br>3- Preaqueça o forno a 180 ºC. <br>4- Em um recipiente maior, coloque as pitangas, a mistura de farinha sem glúten, o açúcar demerara, o óleo de coco, a água, o extrato de baunilha e o “ovo” de linhaça."+"<br> Misture bem até obter uma massa homogênea.<br> 5- Adicione o fermento e misture delicadamente até incorporar à massa.<br> 6- Despeja a massa em forminhas de muffins preenchendo aproximadamente 2/3 de sua capacidade.<br>Usei forminhas de silicone untadas com um pouco de óleo. <br>7- Leve ao forno preaquecido por cerca de 30 minutos. <br>Verifique o cozimento inserindo um palito no centro do muffin, se sair limpo significa que está assado.<br> 8- Retire do forno e desenforme ainda quente se estiver usando fôrmas de silicone ou de alumínio."
			,fotosReceitas);
		// oReceita2=new Receitas("ovo","i1","f1",1,"mp1");
		// oReceita3=new Receitas("leite","i1","f1",1,"mp1");
		// oReceita3=new Receitas("geleia","i1","f1",1,"mp1");
		// oReceita3=new Receitas("granola","i1","f1",1,"mp1");
		// oReceita3=new Receitas("pudim-fit","i1","f1",1,"mp1");
		// //"1","2","3","4","5","6"
		receitas=Array(oReceita);

		$('#nome-receitas').html('<h1>'+receitas[id_elemento].nome+'</h1>');

		$('#lista-ingrediente').html("Ingredientes<br> "+receitas[id_elemento].ingredientes);

		$('#objetivo-receita').html("Ajuda para: "+receitas[id_elemento].finalidade);

		$('#porcao-receita').html("Numero de porções: "+receitas[id_elemento].porcao);

		$('#preparo-receita').html("Modo de preparo: <br> "+receitas[id_elemento].modoPreparo);

		for(var i=0;i<receitas[id_elemento].foto.length;i++){

			var img = document.createElement('img');

			img.src = receitas[id_elemento].foto[i];
			img.style.width='auto';
			img.style.height='auto';
			img.style.margin='2px';
			img.style.border='groove 3px #FDD247';

			document.getElementById('foto').appendChild(img);
		}

		


	});
}//fim function


function Receitas(nomeP,ingredientes,finalidade,porcao,modoPreparo,foto){
	var nome;
	var ingredientes;
	var finalidade;
	var porcao;
	var modoPreparo;
	var foto;

	this.nome=nomeP;

	this.ingredientes=ingredientes;
	
	this.finalidade=finalidade;

	this.porcao=porcao;

	this.modoPreparo=modoPreparo;

	this.foto=foto;

}

function ingrediente(nome,quantidade){
	var nome;
	var qtd;
	this.nome=nome;
	this.qtd=quantidade;
}


function esconde_aulas(){
	$('#monday').hide();
	$('#tuesday').hide();
	$('#wednesday').hide();
	$('#thursday').hide();
	$('#friday').hide();
	$('#saturday').hide();
	$('#ans-btn-ver').hide();
}

function mostraAula(){
	$('#segunda_item').hover(function(){

		$('#monday').show();
		$('#tuesday').hide();
		$('#wednesday').hide();
		$('#thursday').hide();
		$('#friday').hide();
		$('#saturday').hide();
		$('#ans-btn-ver').show();
	});

	$('#terca_item').hover(function(){
		$('#tuesday').show();
		$('#monday').hide();
		$('#ans-btn-ver').show();
		$('#wednesday').hide();
		$('#thursday').hide();
		$('#friday').hide();
		$('#saturday').hide();
	});

	$('#quarta_item').hover(function(){
		$('#wednesday').show();
		$('#tuesday').hide();
		$('#monday').hide();
		$('#tuesday').hide();
		$('#thursday').hide();
		$('#friday').hide();
		$('#saturday').hide();
		$('#ans-btn-ver').show();
	});

	$('#quinta_item').hover(function(){
		$('#thursday').show();
		$('#tuesday').hide();
		$('#monday').hide();
		$('#tuesday').hide();
		$('#wednesday').hide();
		$('#friday').hide();
		$('#saturday').hide();
		$('#ans-btn-ver').show();
	});

	$('#sexta_item').hover(function(){
		$('#friday').show();
		$('#ans-btn-ver').show();
		$('#tuesday').hide();
		$('#monday').hide();
		$('#tuesday').hide();
		$('#wednesday').hide();
		$('#thursday').hide();
		$('#saturday').hide();
	});

	$('#sabado_item').hover(function(){
		$('#saturday').show();
		$('#tuesday').hide();
		$('#ans-btn-ver').show();
		$('#monday').hide();
		$('#tuesday').hide();
		$('#wednesday').hide();
		$('#thursday').hide();
		$('#friday').hide();
	});



}//final mostraAula()


