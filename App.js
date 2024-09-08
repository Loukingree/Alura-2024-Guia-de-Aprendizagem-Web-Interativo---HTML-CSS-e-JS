// console.log(dados[1].descricao);

// section.innerHTML = 
//     `
//     <div class="item-resultado">
//     <h2>
//             <a href="${dados[0].link}" target="_blank">${dados[0].titulo}</a>
//             </h2>

//             <img src="${dados[0].imagem}" alt="${dados[0].titulo}">

//             <p class="descricao-meta">${dados[0].descricao}</p>
//         </div>
//     `


// Função que realiza a pesquisa e exibe os resultados
function procurar() {

    // Obtém a referência do elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value.toLowerCase();
    // Padrão Camel case (formato de camelo): Convenção de escrita onde as palavras são escritas juntas sem espaço e a primeira letra de cada palavra (exceto a primeira) é escrita em maiúscula.

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item na lista de dados
    // Para cada dado dentro da lista de dados, eu quero criar um elemento HTML que contenha o título, a imagem e a descrição do jogo.
    for (let tag of tagsHtml) {
        titulo = tag.titulo.toLowerCase()
        descricao = tag.descricao.toLowerCase()
        tags = tag.tags.toLowerCase()
        // se no dado titulo includes campoPesquisa então faça...
        if (tag.titulo.includes(campoPesquisa)||
            tag.descricao.includes(campoPesquisa) ||
            tag.tags.includes(campoPesquisa)) {

            // Concatena o HTML de cada resultado à string 'resultados'
            resultados += // O += vai adicionar o conteúdo do HTML dentro da variável section.
            `
            <div class="item-resultado">
                <h2>
                    <img src="/Ícones/html-5-svgrepo-com.svg" alt="ícone do HTML5" width="50" height="50"> ${tag.titulo}
                </h2>
                
                <p class="descricao-meta">${tag.descricao.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                <p class="descricao-meta"><a href = "${tag.linkW3Schools}" target="_blank"> Clique aqui para ver uma explicação apofundada.</a></p>
                
                <img src="${tag.imagem}" alt="${tag.titulo}">

                <h3><a href="${tag.tenteVoceMesmo}" target="_blank">Ponha a mão na massa 👾</a></h3>
            </div>
            `
            //Observação quanto ao replace(/</g, '<').replace(/>/g, '>'): Essa parte do código substitui todas as ocorrências de < por < e > por > dentro da string tag.descricao. Isso garante que as tags HTML dentro da descrição sejam exibidas como texto plano. Sugestão do Gemini!
        }
    };

    for (let conceito of cssConceitos) {
        if (conceito.titulo.toLowerCase().includes(campoPesquisa)||
            conceito.descricao.toLowerCase().includes(campoPesquisa)||
            conceito.tags.toLowerCase().includes(campoPesquisa)) {
        // Concatena o HTML de cada resultado à string 'resultados'
        resultados += // O += vai adicionar o conteúdo do HTML dentro da variável section.
            `
            <div class="item-resultado">
                <h2>
                    <img src="/Ícones/css-3-svgrepo-com.svg" alt="ícone do CSS" width="50" height="50"> ${conceito.titulo}
                </h2>
                
                <p class="descricao-meta">${conceito.descricao.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                <p class="descricao-meta"><a href = "${conceito.linkW3Schools}" target="_blank"> Clique aqui para ver uma explicação apofundada.</a></p>
                
                <img src="${conceito.imagem}" alt="${conceito.titulo}">

                <h3><a href="${conceito.tenteVoceMesmo}" target="_blank">Ponha a mão na massa 👾</a></h3>
            </div>
            `
            //Observação quanto ao replace(/</g, '<').replace(/>/g, '>'): Essa parte do código substitui todas as ocorrências de < por < e > por > dentro da string tag.descricao. Isso garante que as tags HTML dentro da descrição sejam exibidas como texto plano. Sugestão do Gemini!
        }
    };

    for (let conceito of jsConceitos) {
        if (conceito.titulo.toLowerCase().includes(campoPesquisa)||
            conceito.descricao.toLowerCase().includes(campoPesquisa)||
            conceito.tags.toLowerCase().includes(campoPesquisa)) {
        // Concatena o HTML de cada resultado à string 'resultados'
        resultados += // O += vai adicionar o conteúdo do HTML dentro da variável section.
        `
        <div class="item-resultado">
            <h2>
                <img src="/Ícones/javascript-svgrepo-com.svg" alt="ícone do JavaScript" width="50" height="50"> ${conceito.titulo}
            </h2>
            
            <p class="descricao-meta">${conceito.descricao.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            <p class="descricao-meta"><a href = "${conceito.linkW3Schools}" target="_blank"> Clique aqui para ver uma explicação apofundada.</a></p>
            
            <img src="${conceito.imagem}" alt="${conceito.titulo}">

            <h3><a href="${conceito.tenteVoceMesmo}" target="_blank">Ponha a mão na massa 👾</a></h3>
        </div>
        `
        //Observação quanto ao replace(/</g, '<').replace(/>/g, '>'): Essa parte do código substitui todas as ocorrências de < por < e > por > dentro da string tag.descricao. Isso garante que as tags HTML dentro da descrição sejam exibidas como texto plano. Sugestão do Gemini!
        }      
    }

    if (!resultados) {
        resultados = "<p> Nada foi encontrado, foi mal, sou noob 😄 </p>"
    }
    
    // Insere o HTML gerado no elemento 'section'
    section.innerHTML = resultados;
}
