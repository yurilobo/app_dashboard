$(document).ready(() =>{

	$('#documentacao').on('click', () => {
		//$('#pagina').load('documentacao.html')

		/*$.get('documentacao.html', data => {
			$('#pagina').html(data)

		})*/
		$.post('documentacao.html', data =>{
			$('#pagina').html(data)
		})
	})
	$('#suporte').on('click', () => {
		//$('#pagina').load('suporte.html')
		/*$.get('suporte.html', data =>{
			$('#pagina').html(data)
		})*/
		$.post('suporte.html', data =>{
			$('#pagina').html(data)
			})
	})


	///metodo ajax
	$('#competencia').on('change',e=>{
		
		let competencia = $(e.target).val()
		
		///definir o metodo , url , o que acontece se tive sucesso e tiver erro
		$.ajax({
			type: 'GET',
			url: 'app.php',
			data: `competencia=${competencia}`,
			dataType:'json',
			success: dados =>{
				$('#numeroVendas').html(dados.numeroVendas)
				$('#totalVendas').html(dados.totalVendas)
			} ,
			error: erro =>{console.log(erro)}
		})
	})
})