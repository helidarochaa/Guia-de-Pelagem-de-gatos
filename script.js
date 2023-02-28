    function carregaDicionario() {
    var biografias = {
        bio01: {
            nome: "SÓLIDAS",
            imagem: "./img/gato-pelagem-solida.jpg",
            descricao:
            "A cor é uniforme em todo o comprimento do pêlo. Preto, azul, vermelho e creme são as cores mais comuns nessa categoria de pelagem",
            citacao:
            "CURIOSIDADES: chocolate, lilás e canela, é tida como uma das pelagens mais raras.",
        },
        bio02: { 
            nome: "BRANCO",
            imagem: "./img/gato-pelagem-branco.jpg",
            descricao:
            "Os gatos brancos têm sua aparência determinada pela genética dos pais, apresentando, na realidade, a ausência de cor nos pêlos. A cor real do animal pode aparecer em alguma mancha, enquanto filhote; no entanto, desaparece com o passar do tempo, e a predominância fica com o branco.",
            citacao:
            "CURIOSIDADE: Os olhos dos gatos dessa categoria variam entre as cores cobre e azul, sendo que o animal pode, inclusive, apresentar um olho de cada cor.",
            },

        bio03: { 
            nome: "ESCAMAS",
            imagem: "./img/gato-pelagem-escaminha.jpg",
            descricao: "Os pelos variam no corpo todo do animal entre as cores preta e vermelha, podendo contar com outros tons que incluem azul, creme e suas variações.",
            citacao:"CURIOSIDADE: Em quase 100% dos casos, os gatos com esse tipo de pelagem são fêmeas",
            },

        bio04: { 
            nome: "TABBY",
            imagem: "./img/gato-pelagem-tabby.jpg",
            descricao: "Os gatos Tabby apresentam diversas variações em sua pelagem, podendo ocorrer desde listras até contrastes fortes em seus pelos. São bastante comuns e não existe uma cor ou padrão específico, variando de acordo com os pais. Dentre eles temos os manchados são aqueles que apresentam manchas em seus pelos, que podem ser redondas, mais quadradas ou retangulares, por todo o corpo. Também existem os mosqueados geralmente relembram um pouco as onças-pintadas. Eles apresentam diversas marcações arredondadas espalhadas por todo o corpo, de modo que, geralmente, as patas e as caudas podem possuir listras.",
            citacao:"CURIOSIDADE: Os gatos tigrados estão também incluidos na categoria Tabby, estão intimamente ligados aos ancestrais felinos selvagens, de modo que o padrão listrado também está presente em leões e em linces. No geral, ainda que haja exceções, tais gatos costumam ser menos dóceis, possuindo um espírito mais selvagem.",
            },

        bio05: {
            nome: "BICOLOR",
            imagem: "./img/gato-pelagem-bicolor.jpg",
            descricao:
            "Os gatos bicolores, como o próprio nome fala, são gatos que apresentam somente duas cores. Tais cores não são aleatórias, de modo que uma é sólida, por exemplo, preto, cinza, vermelho ou bege, e a outra cor é o branco. Cada uma das duas cores está presente na proporção de 50%.",
            citacao:"CURIOSIDADE: Geralmente, uma marca bastante significativa dos gatos bicolores, é que possuem uma mancha em sua testa em formato de V para baixo. Além disso, os gatos bicolores possuem pelos brancos no focinho e em áreas mais inferiores, como patas, início das pernas, região abdominal e até mesmo no pescoço.",
            },
        bio06: {
            nome: "POINTED OU COLOURPOINT",
            imagem: "./img/gato-pelagem-pointed.jpeg",
            descricao: "A coloração dos gatos Pointed ou Colourpoint se dá nas extremidades do corpo. Ou seja, geralmente, tais pets apresentam cores mais fortes nas patas, focinho, cabeça, cauda e orelhas. Essa coloração pode ser sólida ou em formato de listras ou manchas.",
            citacao:"CURIOSIDADE: Esse padrão é bastante querido, pois tais animais ficam bem graciosos com a base dos pelos brancas e as extremidades pintadas!",
            },

        bio07: {
            nome: "PARTICOLOR OU TRICOLOR",
            imagem: "./img/gato-pelagem-tricolor.jpg",
            descricao: "Os gatos particolores são gatos que quase sempre possuem três cores! Isso significa que geralmente a base é branca e as outras cores presentes acabam sendo desmembradas em até duas. Tais cores, além do branco, podem ser: preto e cinza; preto e laranja; laranja avermelhado e bege. ",
            citacao:"CURIOSIDADE: Assim como os gatos de pelagem escamada, quase que 100% dos gatos de pelagem tricolor são femeas",
            },

        bio08:{
            nome:"ARLEQUIN E VAN",
            imagem:"./img/gato-pelagem-van.jpg",
            descricao:"Os gatos arlequin não possuem um padrão de manchas. Elas são totalmente distribuídas de forma irregular por todo o corpo dele. Já os gatos Van apresentam base dos pelos branca. Já as manchas podem ser nas cores preta, vermelha, cinza, bege ou creme, geralmente presentes nas costas ou em extremidades do bicho, como a cauda e a cabeça.",
            citacao:"Conhecido como o “Gato Nadador”, o Turkish Van é originário da Turquia e adora água. Dono de uma pelagem vasta e longa, normalmente é branco com manchas coloridas que podem aparecer na cabeça e no corpo, tendo o rabo todo colorido, comprido e bastante peludo. Seus olhos são ovais e podem ser dourados ou azuis (podendo, ainda, contar com um olho de cada cor).",
            },

        bio09:{
            nome:"SEM PELOS",
            imagem:"./img/gato-sem-pelo.jpg",
            descricao: "Nenhum gato é verdadeiramente calvo, mas várias raças têm uma camada de pelo muito fino semelhante à camurça. Vistos de longe, pode-se dizer que são pelados! Esses gatos geralmente adoram se aconchegar e aninhar em cobertores, pois não têm uma maneira natural de evitar a perda de calor corporal. Os grandes representantes do grupo de gatos sem pelos são os Sphynx.",
            citacao:"CURIOSIDADE:é bastante conveniente colocar roupinhas neles e oferecê-los uma cama quentinha. Ainda assim, de modo geral, é eles são mais adequados para viverem em locais que possuem climas quentes, pois têm uma pelagem muito fina, então, o Brasil configura um ótimo local para eles morarem!",

        }


    };

    var content = document.getElementById("content");

    for (var bio in biografias) {
        content.innerHTML +=
        '<div class="card">' +
        '<img src="' +
        biografias[bio].imagem +
        '"/>' +
        "<details>" +
        "<summary>" +
        biografias[bio].nome +
        "</summary>" +
        "<p>" +
        biografias[bio].descricao +
        "</p>" +
        "<blockquote><q>" +
        biografias[bio].citacao +
        "</q></blockquote>" +
        "</details></div>";
    }

        }
    carregaDicionario();

    
    
    