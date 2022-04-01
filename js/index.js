var avatarAdms = ["img/pixeltyrell.gif",
                  "img/nanahoshi.gif",
                  "img/cecilrssrs.png"];
var usersAdms = ["@_Heisenberg", "@Nanahoshi", "@Panxinha"];
var cargosAdms = ["ADM jojofag, ficwriter, designer",
                  "ADM Power Ranger, ficwriter, beta",
                  "ADM mãe de pássaro, ficwriter, avaliadora, helper"];
var perfisAdms = ["https://www.spiritfanfiction.com/perfil/pixeltyrell",
                  "https://www.spiritfanfiction.com/perfil/nanahoshi",
                  "https://www.spiritfanfiction.com/perfil/cecilrssrs"];

var elementoExibirAdms = document.getElementById("exibirAdms");

function ListarAdms() {
    elementoExibirAdms.innerHTML = "";
    for (var i = 0; i < usersAdms.length; i++) {
        elementoExibirAdms.innerHTML =
            elementoExibirAdms.innerHTML +
            '<figure><a href="' + perfisAdms[i] + '"><img class="img-adms" src="' + avatarAdms[i] + '"></a><figcaption>' + usersAdms[i] + '<br>' + cargosAdms[i] + '</figcaption></figure>';
    }
}

ListarAdms();

var membrosStaff = [
    {
        id: "1",
        avatar: "img/kafie.png",
        user: "hootao",
        cargo: "designer, beta, helper/avaliador, ficwriter",
        perfil: "https://www.spiritfanfiction.com/perfil/kafie",
    },
    {
        id: "2",
        avatar: "img/helo235.jpg",
        user: "Wiinters",
        cargo: "ficwriter",
        perfil: "https://www.spiritfanfiction.com/perfil/helo235",
    },
    {
        id: "3",
        avatar: "img/pinklady555.jpg",
        user: "pinkxie",
        cargo: "ficwriter",
        perfil: "https://www.spiritfanfiction.com/perfil/pinklady555",
    },
    {
        id: "4",
        avatar: "img/cherryshi.png",
        user: "cherryshi",
        cargo: "designer, ficwriter",
        perfil: "https://www.spiritfanfiction.com/perfil/cherryshi",
    },
];

var elementoExibirMembros = document.getElementById("exibirMembros");

function ListarMembros() {
    elementoExibirMembros.innerHTML = "";
    for (var i = 0; i < membrosStaff.length; i++) {
        elementoExibirMembros.innerHTML =
            elementoExibirMembros.innerHTML +
            '<figure><a href="' + membrosStaff[i].perfil + '"><img class="img-membros" src="' + membrosStaff[i].avatar + '"></a><figcaption>' + membrosStaff[i].user + '<br>' + membrosStaff[i].cargo + '</figcaption></figure>';
    }
}

ListarMembros();

var listaDeLeitura = [{ id: "1", capa: "https://pbs.twimg.com/media/ESLeoC0XsAAqI1N.jpg", nome: "Amor Doce", link: "https://www.spiritfanfiction.com/listas/amor-doce-7929400", },
    { id: "2", capa: "https://images.alphacoders.com/639/639788.jpg", nome: "Another", link: "https://www.spiritfanfiction.com/listas/another-7929401", },
    { id: "3", capa: "https://1.bp.blogspot.com/-Gi3PAOksJpI/YDcAVyYrUXI/AAAAAAAC_7E/lEyx3n1ggzsOlzai6L1rb7c106DXbm5PgCLcBGAsYHQ/w1200-h630-p-k-no-nu/avatar-novofilme-mestredoar-lendades.jpg", nome: "Avatar - A Lenda de Aang", link: "https://www.spiritfanfiction.com/listas/avatar-a-lenda-de-aang-7932915", },
    { id: "4", capa: "http://toshiwayume.com.br/wp-content/uploads/2016/03/ballroom-e-youkoso-6498427.jpg", nome: "Ballroom e Youkoso", link: "https://www.spiritfanfiction.com/listas/ballroom-e-youkuso-7932916", },
];

var elementoExibirListasDeLeitura = document.getElementById("exibirListasDeLeitura");

function ListarListasDeLeitura() {
    elementoExibirListasDeLeitura.innerHTML = "";
    for (var i = 0; i < listaDeLeitura.length; i++) {
        elementoExibirListasDeLeitura.innerHTML =
            elementoExibirListasDeLeitura.innerHTML +
            '<figure><a href="' + listaDeLeitura[i].link + '"><img class="img-listas-de-leitura" src="' + listaDeLeitura[i].capa + '"></a><figcaption>' + listaDeLeitura[i].nome + '</figcaption></figure>';
    }
}

ListarListasDeLeitura();