// Algoritmo mostrarDados

// iniciar o modal fechado
// Ao clicar no botao de enviar
// fazer com que o navegador nao atualize
// verificar se foi enviado os seguintes dados: no, nv, valor e data 
// se os dados estiverem ok 
// abrir modal
// Adicionar os dados enviados no modal
// se foi enviado observação
// adicionar todos os dados no modal
// caso contrario não aparecer o campo no modal



let modal = document.querySelector('.modal');
    modal.style.display = 'none';


document.querySelector('#btnSubmit').addEventListener('click', (e)=>{
    e.preventDefault();

    let no = document.querySelector('#no').value;
    let nv = document.querySelector('#nv').value;
    let data = document.querySelector('#data').value;
    let novaData = data.split('-').reverse().join('/');
    let valor = document.querySelector('#valor').value;
    let obs = document.querySelector('#obs').value;
   

       if (no !== '' && nv !== '' && data !== '' && valor !== '') {

            // Abrir modal
            modal.style.display = 'inline-flex';

            // Adicionando informações
            document.querySelector('.modal .modal-c .m-no').innerHTML = `OS N° ${no}`;
            document.querySelector('.modal .modal-c .m-nv').innerHTML = `N° Vendedor ${nv}`;
            document.querySelector('.modal .modal-c .m-data').innerHTML = novaData;
            document.querySelector('.modal .modal-c .m-valor').innerHTML = `R$ ${valor}`;
            document.querySelector('.modal .modal-c .m-obs').style.display = 'none';

                // Verificando se foi enviado alguma observação
                if (obs !== '') {

                    modal.style.display = 'inline-flex';
                    document.querySelector('.modal .modal-c .m-no').innerHTML = `OS N° ${no}`;
                    document.querySelector('.modal .modal-c .m-nv').innerHTML = `N° Vendedor ${nv}`;
                    document.querySelector('.modal .modal-c .m-data').innerHTML = novaData;
                    document.querySelector('.modal .modal-c .m-valor').innerHTML = `R$ ${valor}`;
                    document.querySelector('.modal .modal-c .m-obs').style.display = 'block';
                    document.querySelector('.modal .modal-c .m-obs').innerHTML = obs;
                }

               
                // Evento de click para impressão
                document.querySelector('.modal .modal-c .m-imprimir').addEventListener('click', ()=>{
                    window.print();
                });


       }else{
           alert("Prencha pelo menos os seguintes campos: Número orçamento, Número vendedor, data e valor!")
       }

       

});
