/*NAVBAR*/
export const logoHref = "#intro";
export const items = [
  {"Features":"#features"},
  {"Preview":"#preview"},
  {"More Details":"#moredetails"},
  {"Contact":"#contact"}
];
//FAQ section not included in the navbar items by default but it can be included

/*INTRODUCTION*/
export const introAnchor = "intro"; //Should be the same as logoHref (no #)
export const introTitle = "Empreender Cascais";
export const introDescription = "Junte-se a nós para um dia de palestras, workshops e networking com líderes e inovadores do mercado.";
export const introButtonType = "empreender"; //Recognized button types include chrome, github, appstore, googleplay, amazon
export const introButtonText = ""; //Leave empty if you have a recognized button type
export const introButtonLink = "https://bit.ly/empreendercascais";
//IMAGE NAME: preview1.png

/*FEATURES*/
export const featuresAnchor = "features";
export const featuresTitle = "O Empreender Cascais oferecerá uma programação diversificada, incluindo:";
export const featuresDetails = [
  {"Palestras inspiradoras":"Com Líderes que compartilharão suas experiências e insights."},
  {"Workshops Práticos":"Sessões interativas para desenvolver habilidades essenciais."},
  {"Oportunidades de Networking":"Conecte-se com outros empreendedores e profissionais."},
];
//Background image name: detailsbg1.png

/*MIDDLE TEXT*/
export const midAnchor = "preview";
export const midTitle = "Inscreva-se!";
export const midDescription = "Estamos ansiosos para recebê-lo no Empreender Cascais, e juntos construirmos um futuro cheio de inovações e oportunidades. Faça já a sua inscrição através do link abaixo";
export const midButtonType = "empreender";
export const midButtonText = "";
export const midButtonLink = "https://bit.ly/empreendercascais";
//Image preview2.png

/*BottomInfo*/
export const botAnchor = "moredetails";
export const botTitle = "More details";
export const botDetails = [
  {"detail1":{
    "title":"Very important detail",
    "desc":"Phasellus pharetra, orci sed bibendum tempus, ipsum lectus ullamcorper libero, non hendrerit ipsum velit vitae ante.",
    "button":"googleplay",
    "buttonText":"",
    "link":"https://play.google.com/"
  }},
  {"detail2":{
    "title":"Not so important detail",
    "desc":"Donec velit metus, egestas rutrum nibh sed, volutpat mattis erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "button":"appstore",
    "buttonText":"",
    "link":"https://www.apple.com/app-store/"
  }}
];
//Background image name: detailsbg2.png

/*FAQ*/
export const faqAnchor = "faq";
export const faqTitle = "Dúvidas Frequentes";
export const faqDetails = [
  {"O Que é o empreender cascais?":"É um evento dedicado a inspirar, capacitar e conectar empreendedores e profissionais de todas as áreas. "},
  {"Onde acontece o Empreender Cascais?":"Acontece na IBR Cascais, no endereço: R. São Francisco 618 1Adroana, 2645-019 Alcabideche"},
  {"Qual o objetivo do empreender cascais?":"Capacitar e conectar empreendedores e profissionais de todas"},
  {"Quem é o idealizador do Empreender Cascais?":"Pastor Marcos nunes"},
  {"Quais são as oportunidades que o Empreender Cascais oferece?":"Palestras inspiradoras com  Líderes que compartilharão suas experiências e insights, Workshops Práticos: Sessões interativas para desenvolver habilidades essenciais, Oportunidades de Networking: Conecte-se com outros empreendedores e profissionais."},
  {"Como posso participar do empreender cascais?":"Basta clicar no botão Reserve o seu lugar, preencher o formulario e efetuar a taxa de inscrição de €10.00 Euros"},
];
//Background image name: detailsbg3.png

/*Footer*/
export const footerLogoHref = "#intro"; //use # here
export const footerText = "MIT License - Copyright (c) 2022 Patrick (KlibrDM)";