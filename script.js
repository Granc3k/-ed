async function prihlasit() {
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
    token = odpoved.token;
    id = odpoved.id;
    //document.getElementById("signin").hidden = true;
    //document.getElementById("signup").hidden = true;
    //document.getElementById("chat").hidden = false;
    chatShow();
  }
  if (odpoved.error) {
    console.error(odpoved.error);
  }
}

async function registrovat() {
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
    signinShow();
  }
  console.log(odpoved);
}



async function chatShow() {
  let url = "https://nodejs-3260.rostiapp.cz/chat/listMsgs";
  let body = {}
  body.token = token;
  body.chat = chatId;
  let opt = {};
  opt.method = "POST";
  opt.body = JSON.stringify(body);
  console.log(opt.body);
  let pozadavek = await fetch(url, opt);
  let odpoved = await pozadavek.json()
  console.log(odpoved);
  let pole = document.getElementById("ced_zpravy").innerHTML;
  pole = ""
  for (let i = 0; i <= odpoved.lenght; i++){
    pole += odpoved[i].msg
  }
}

async function chatSendMessage() {
  let url = "https://nodejs-3260.rostiapp.cz/chat/addMsg";
  let z = document.getElementById("zpravy").value;
  let body = {}
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
    pole += odpoved[i].msg
  }
}