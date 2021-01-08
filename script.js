async function prihlasit() {
  let chatId = "ida8c4761e5eace3cf3b1551b7421870"
  let url = "https://nodejs-3260.rostiapp.cz/users/login";
  let body = {}
  body.username = document.getElementById("uz_jmeno").value;
  body.password = document.getElementById("heslo").value;
  let opt = {};
  opt.method = "POST";
  opt.body = JSON.stringify(body);
  let pozadavek = await fetch(url, opt);
  let odpoved = await pozadavek.json()
  if (odpoved.status == "OK") {
    ukaz_ced();
    token = odpoved.token;
    id = odpoved.id;
    ced();
  }
  if (odpoved.error) {
    console.error(odpoved.error);
  }
}

async function registrovat() {
  let chatId = "ida8c4761e5eace3cf3b1551b7421870"
  let url = "https://nodejs-3260.rostiapp.cz/users/registry";
  let body = {}
  body.fullname = document.getElementById("jmeno").value;
  body.username = document.getElementById("uz_jmeno").value;
  body.password = document.getElementById("heslo").value;
  body.email = document.getElementById("email").value;
  let opt = {};
  opt.method = "POST";
  opt.body = JSON.stringify(body);
  let pozadavek = await fetch(url, opt);
  let odpoved = await pozadavek.json()
  if (odpoved.error) {
    console.error(odpoved.error);
  }
  if (odpoved.status == "OK") {
    token = odpoved.token;
    ced();
  }
  console.log(odpoved);
}



async function ced() {
  ukaz_ced();
  let chatId = "ida8c4761e5eace3cf3b1551b7421870";
  let url = "https://nodejs-3260.rostiapp.cz/chat/listMsgs";
  let body = {};
  body.token = token;
  body.chat = chatId;
  let opt = {};
  opt.method = "POST";
  opt.body = JSON.stringify(body);
  console.log(opt.body);
  let pozadavek = await fetch(url, opt);
  let odpoved = await pozadavek.json()
  console.log(odpoved);
  pole = "";
  for (let i = 0; i <= odpoved.lenght; i++){
    pole += odpoved[i].msg;
  }
}

async function posli_zpravu() {
  let chatId = "ida8c4761e5eace3cf3b1551b7421870"
  let url = "https://nodejs-3260.rostiapp.cz/chat/addMsg";
  let z = document.getElementById("zpravy").value;
  let body = {};
  body.token = token;
  body.chat = chatId;
  body.msg = z;
  let opt = {};
  opt.method = "POST";
  opt.body = JSON.stringify(body);
  console.log(opt.body);
  let pole = document.getElementById("ced_zpravy").innerHTML;
  pole = ""
  for (let i = 0; i <= odpoved.lenght; i++){
    pole += odpoved[i].msg;
  }
}
function nemam_uzivatele(){
  document.getElementById("registrace").style.display = "block";
  document.getElementById("prihlaseni").style.display = "none";
  document.getElementById("ced").style.display = "none";
}
function mam_uzivatele(){
  document.getElementById("registrace").style.display = "none";
  document.getElementById("prihlaseni").style.display = "block";
  document.getElementById("ced").style.display = "none";
}
function ukaz_ced(){
  document.getElementById("registrace").style.display = "none";
  document.getElementById("prihlaseni").style.display = "none";
  document.getElementById("ced").style.display = "block";
}

function onLoad(){
  mam_uzivatele();
}