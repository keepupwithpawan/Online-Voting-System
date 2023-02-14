function aboutimg() {
    window.location.href="http://127.0.0.1:5500/about.html";
  }

  function home() {
    window.location.href="http://127.0.0.1:5500/index.html";
}

let bjp=0;
let con=0;
let aap=0;
let ss=0;

function votebjp(){
    if(confirm("Are you sure about your vote?")==true){
        bjp=bjp+1;
        console.log(bjp);
        window.location="http://127.0.0.1:5500/index.html"
    }
}
function votecon(){
    if(confirm("Are you sure about your vote?")==true){
    con=con+1;
    console.log(con);
    window.location="http://127.0.0.1:5500/index.html"
    }
}
function voteaap(){
    if(confirm("Are you sure about your vote?")==true){
    aap=aap+1;
    console.log(aap);
    window.location="http://127.0.0.1:5500/index.html"
    }
}

function votess(){
    if(confirm("Are you sure about your vote?")==true){
    ss=ss+1;
    console.log(ss);
    window.location="http://127.0.0.1:5500/index.html"
}
}