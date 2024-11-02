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
export const introTitle = "Chá das princesas 3ª Edição";
export const introDescription = "Uma tarde de realeza e propósito te espera! Prepare-se para vivenciar sua verdadeira essência.";
export const introButtonType = "empreender"; //Recognized button types include chrome, github, appstore, googleplay, amazon
export const introButtonText = ""; //Leave empty if you have a recognized button type
export const introButtonLink = "https://docs.google.com/forms/d/e/1FAIpQLSc2xEHpBRsGwwkyQxUATvn4OjDjKYCQhstTfbu9oizUXypACA/viewform?fbclid=PAZXh0bgNhZW0CMTEAAab8R1pLW_XkHcf9I9Uee6LZjWYCsgdNkclW1OuHcAE_WNqiCkGIaDFqTO4_aem_7tvnwN3NAKi5LL75i3LhWA";
//IMAGE NAME: preview1.png

/*FEATURES*/
export const featuresAnchor = "features";
export const featuresTitle = "O chá das princesas oferecerá uma programação de excelência, incluindo:";
export const featuresDetails = [
  {"Comunhão":"Momento de mesa, de conexão com Deus e com outras mulheres que viverá sua real identidade."},
  {"Workshops Práticos":"Palestrantes especiais e profissionais convidadas, coffe break, talk show com mulheres que inspiram."},
  {"Ambiente transformador":"Sala de oração e uma decoração impecável. Você merece viver esse momento de realeza!"},
];
//Background image name: detailsbg1.png

/*MIDDLE TEXT*/
export const midAnchor = "preview";
export const midTitle = "Inscreva-se!";
export const midDescription = "Últimas vagas para o Chá das Princesas! Inscrições limitadas para quem deseja viver essa experiência única de realeza e propósito. Garanta já a sua!";
export const midButtonType = "empreender";
export const midButtonText = "";
export const midButtonLink = "https://docs.google.com/forms/d/e/1FAIpQLSc2xEHpBRsGwwkyQxUATvn4OjDjKYCQhstTfbu9oizUXypACA/viewform?fbclid=PAZXh0bgNhZW0CMTEAAab8R1pLW_XkHcf9I9Uee6LZjWYCsgdNkclW1OuHcAE_WNqiCkGIaDFqTO4_aem_7tvnwN3NAKi5LL75i3LhWA";
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
  {"O Que é o Chá das Princesas?":""},
  {"Onde acontece o Chá das Princesas?":""},
  {"Qual o objetivo do Chá das Princesas?":""},
  {"Quem é o idealizador do Chá das Princesas?":""},
  {"Quais são as oportunidades que o Chá das Princesas oferece?":""},
  {"Como posso participar do Chá das Princesas?":"Basta clicar no botão Reserve o seu lugar, preencher o formulario e efetuar a taxa de inscrição de €30.00 Euros"},
];
//Background image name: detailsbg3.png

/*Footer*/
export const footerLogoHref = "#intro"; //use # here
export const footerText = "MIT License - Copyright (c) 2022 Patrick (KlibrDM)";