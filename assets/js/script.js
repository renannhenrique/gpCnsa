
let modal = document.querySelector('.modal');
    modal.style.display = 'none';


    // Selecionando uma tarefa
    document.querySelector("#acao").addEventListener("click", (e)=>{
        
        e.preventDefault();

        let select = document.querySelector("#campoSelect");

            if (select.value == "gerarPix") {
                
                document.querySelector(".formulario").innerHTML = `
                    <header class="f-top">
                    </header>

                    <div class="f-area">
                        <form>
                            <span class="f-ct">N° Orçamento</span><br/>
                            <input type="number" id="no"><br/><br/>

                            <span class="f-ct">N° Vendedor</span><br/>
                            <input type="number" id="nv"><br/><br/>

                            <span class="f-ct">Valor</span><br/>
                            <input type="text" id="valor" placeholder="Ex: 10.384,90"><br/><br/>

                            <span class="f-ct">Observações</span><br/>
                            <textarea placeholder="Referente a..." id="obs"></textarea><br/><br/>

                            <input type="submit" value="Enviar" id="btnSubmit">
                        </form>
                    </div>
                        `;


                document.querySelector('#btnSubmit').addEventListener('click', (e)=>{
                    e.preventDefault();
                
                    let no = document.querySelector('#no').value;
                    let nv = document.querySelector('#nv').value;
                    
                    let data = new Date();
                    let dia = String(data.getDate()).padStart(2, '0');
                    let mes = String(data.getMonth()  + 1).padStart(2, '0');
                    let ano = String(data.getFullYear());
                    let txt = `${dia}/${mes}/${ano}`;

                    let valor = document.querySelector('#valor').value;
                    let obs = document.querySelector('#obs').value;
                   
                
                       if (no !== '' && nv !== '' && data !== '' && valor !== '') {
                
                            // Abrir modal
                            modal.style.display = 'inline-flex';
                
                            // Adicionando informações
                            document.querySelector('.modal .modal-c .m-no').innerHTML = `OS N° ${no}`;
                            document.querySelector('.modal .modal-c .m-nv').innerHTML = `N° Vendedor ${nv}`;
                            document.querySelector('.modal .modal-c .m-data').innerHTML = txt;
                            document.querySelector('.modal .modal-c .m-tel').style.display = "none";
                            document.querySelector('.modal .modal-c .m-valor').innerHTML = `R$ ${valor}`;
                            document.querySelector('.modal .modal-c .m-obs').style.display = 'none';
                
                                // Verificando se foi enviado alguma observação
                                if (obs !== '') {
                
                                    modal.style.display = 'inline-flex';
                                    document.querySelector('.modal .modal-c .m-no').innerHTML = `OS N° ${no}`;
                                    document.querySelector('.modal .modal-c .m-nv').innerHTML = `N° Vendedor ${nv}`;
                                    document.querySelector('.modal .modal-c .m-data').innerHTML = txt;
                                    document.querySelector('.modal .modal-c .m-valor').innerHTML = `R$ ${valor}`;
                                    document.querySelector('.modal .modal-c .m-obs').style.display = 'block';
                                    document.querySelector('.modal .modal-c .m-obs').innerHTML = obs;
                                }
                
                               
                                // Evento de click para impressão
                                document.querySelector('.modal .modal-c .m-imprimir').addEventListener('click', ()=>{
                                    window.print();
                                    
                                     // Redirecionar o usuário para a página inicial
                                    window.location.href = "https://renannhenrique.github.io/gpcnsa/";
                                });
                
                
                        }else{
                            alert("Preencha pelo menos os seguintes campos: Número orçamento, Número vendedor e valor!")
                        }
                
                });



            }else{

                // Gerador de cupom
                document.querySelector(".formulario").innerHTML = `
                    <header class="f-top">
                    </header>

                    <div class="f-area">
                        <form>
                            <span class="f-ct">N° Orçamento</span><br/>
                            <input type="number" id="no"><br/><br/>

                            <span class="f-ct">N° Vendedor</span><br/>
                            <input type="number" id="nv"><br/><br/>

                            <span class="f-ct">Telefone</span><br/>
                            <input type="text" id="tel" placeholder="Ex: 18 9xxxxxxxx"><br/><br/>

                            <span class="f-ct">Nome do Cliente</span><br/>
                            <textarea placeholder="Fulano da silva" id="obs"></textarea><br/><br/>

                            <input type="submit" value="Enviar" id="btnSubmit">
                        </form>
                    </div>
                        `;


                document.querySelector('#btnSubmit').addEventListener('click', (e)=>{
                    e.preventDefault();
                
                    let no = document.querySelector('#no').value;
                    let nv = document.querySelector('#nv').value;

                    let data = new Date();
                    let dia = String(data.getDate()).padStart(2, '0');
                    let mes = String(data.getMonth()  + 1).padStart(2, '0');
                    let ano = String(data.getFullYear());
                    let txt = `${dia}/${mes}/${ano}`;

                    let tel = document.querySelector('#tel').value;
                    let obs = document.querySelector('#obs').value;
                   
                
                       if (no !== '' && nv !== '' && tel !== '' && obs !== '') {
                
                            // Abrir modal
                            modal.style.display = 'inline-flex';
                
                            // Adicionando informações
                            document.querySelector('.modal .modal-c .m-no').innerHTML = `OS N° ${no}`;
                            document.querySelector('.modal .modal-c .m-nv').innerHTML = `N° Vendedor ${nv}`;
                            document.querySelector('.modal .modal-c .m-data').innerHTML = txt;
                            document.querySelector('.modal .modal-c .m-valor').style.display = "none";
                            document.querySelector('.modal .modal-c .m-tel').innerHTML = `<sub>Telefone</sub> ${tel}`;
                            document.querySelector('.modal .modal-c .m-obs').innerHTML = obs;
                            document.querySelector('.modal .modal-c .m-pix').innerHTML = "SORTEIO";
                        
                
                               
                                // Evento de click para impressão
                                document.querySelector('.modal .modal-c .m-imprimir').addEventListener('click', ()=>{
                                    window.print();
                                    
                                     // Redirecionar o usuário para a página inicial
                                    window.location.href = "https://renannhenrique.github.io/gpcnsa/";
                                });
                
                
                        }else{
                            alert("Preencha os seguintes campos: Número orçamento, Número vendedor, telefone e Nome do cliente!");
                        }
                
                });
            }
    });

    /*
    
        
    */






// Evento para fechar o botão do modal
document.querySelector(".modal button").addEventListener("click", ()=>{
 
        window.location.href = 'https://renannhenrique.github.io/gpcnsa/';
});
