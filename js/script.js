// Using the vue datas, print the title and the image on the DOM

var app = new Vue(
    {
        el: "#root",
        data: {
            pageTitle: "Sono il titolo della pagina",
            pageImage: "https://www.focus.it/images/2021/02/16/firenze_1020x680.jpg"
        },
    }
);