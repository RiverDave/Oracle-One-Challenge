const textoOriginal = document.querySelector("#area");

const secondBox = document.querySelector("#decryptor2nd");

const bigBox = document.querySelector("#square");






function encriptar(encriptedString){



     encriptedString = encriptedString.replace(/e/g,"enter");

     encriptedString = encriptedString.replace(/i/g,"imes");

     encriptedString = encriptedString.replace(/a/g,"ai");

     encriptedString = encriptedString.replace(/o/g,"ober");

     encriptedString = encriptedString.replace(/u/g,"ufat");


     return encriptedString.toLowerCase();
     }


     function buttonE(){
      const Encription = encriptar(textoOriginal.value);
      secondBox.value = Encription;
      textoOriginal.value = '';
      document.getElementById('square').style.backgroundImage = "none";
      document.getElementById('square').style.color = '#FFFFFF';
      
      

      
      

      
      }


     function desencriptar(encriptedString){

      encriptedString = encriptedString.replace(/enter/g,'e');

      encriptedString = encriptedString.replace(/imes/g,'i');

      encriptedString = encriptedString.replace(/ai/g,'a');

      encriptedString = encriptedString.replace(/ober/g,'o');
      
      encriptedString = encriptedString.replace(/ufat/g,'u');

      return encriptedString.toLowerCase();


     }


     function buttonD(){
  
      const deEncription = desencriptar(textoOriginal.value);
      
      secondBox.value = deEncription;
      
      textoOriginal.value = '';

      document.getElementById('square').style.backgroundImage = "none";

      document.getElementById('square').style.color = '#FFFFFF';


      
      }




   
function copy(){
    let textarea = document.getElementById("decryptor2nd");
  textarea.select();
  document.execCommand("copy");
}









