
var corpus = [
      "A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole.Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough.When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. 'How shall I climb out?' said the mouse. 'oh, how shall I climb out?' Just then a rat came along, and he heard the mouse. 'Mouse,' said the rat, 'if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.",
      "A wolf carried off a lamb. The lamb said, ' I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.' The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.",
      "A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. 'Why does he not make a pet of me?' said the donkey. 'It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.' Then the donkey said to himself, 'If I do what the dog does, he may make a pet of me.' So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, 'Help! Help!' Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. 'I only did what the dog does,' said the donkey,' and yet they make a pet of the dog, and they beat me with sticks. It is not fair.",

  ];
  
  var stemmer = new Snowball('English');
  stemmer.setCurrent('abbreviations');
  stemmer.stem();
  console.log(stemmer.getCurrent());

  var subheading = document.getElementById('subheading');
  var description = document.getElementById('description');
  var details = document.getElementById('details');
  var result = document.getElementById('result');
  var submit = document.getElementById('submit');
  var newtype = document.getElementById('newtype');
  var a;
  var count;
  var ucount;
  
  function clearfields() {
    subheading.innerHTML = '';
    description.innerHTML = '';
    details.innerHTML = '';
    result.innerHTML = '';
    newtype.innerHTML = '';
    submits.innerHTML = '';
    submit.innerHTML = '';
  }
  



  function run() {
    a = '';
    a = document.getElementById('corpus').value;
    if (a == 'select') {
      alert('Select any  corpus from dropdown');
    }
    if (a == 'corpus1') {
      details.innerHTML =
        corpus[0] +
        '<br><br><center>Enter the number of tokens and types for the above corpus:<table cellspacing = "-2" style="text-align:center;"><tr><td>#tokens: </td><td><input type="text" id="token" size="5"></td></tr><tr><td>#types: </td><td><input type="text" id="type" size="5"></td></tr></table><br>';
       
       submit.innerHTML=
       ' <button id="submit" value="Submit" onclick=" check()">Submit</button></center>';
        var p = /\w+/gi;
    var str = corpus[0].match(p);
    count = str.length; //*******************//
    var b1 = str.join(' ');
    var b2 = b1.toLowerCase();
    var b3 = b2.split(' ');
    var uwords = new Set(b3);
    uniquecount = uwords.size; //*******************//
    result.innerHTML = '';
    
    
      }
    if (a == 'corpus2') {
      details.innerHTML =
        corpus[1] +
        '<br><br><center>Enter the number of tokens and types for the above corpus:<table cellspacing = "-2" style="text-align:center;"><tr><td>#tokens: </td><td><input type="text" id="token" size="5"></td></tr><tr><td>#types: </td><td><input type="text" id="type" size="5"></td></tr></table><br>';
        submit.innerHTML=
       ' <button id="submit" value="Submit" onclick=" check()">Submit</button></center>';
        var p = /\w+/gi;
        var str = corpus[1].match(p);
        count = str.length; //*******************//
        var b1 = str.join(' ');
        var b2 = b1.toLowerCase();
        var b3 = b2.split(' ');
        var uwords = new Set(b3);
        uniquecount = uwords.size; //*******************//
        result.innerHTML = '';
      }
    if (a == 'corpus3') {
      details.innerHTML =
        corpus[2] +
        '<br><br><center>Enter the number of tokens and types for the above corpus:<table cellspacing = "-2" style="text-align:center;"><tr><td>#tokens: </td><td><input type="text" id="token" size="5"></td></tr><tr><td>#types: </td><td><input type="text" id="type" size="5"></td></tr></table><br>';
        submit.innerHTML=
        ' <button id="submit" value="Submit" onclick=" check()">Submit</button></center>';
        var pattern = /\w+/gi;
        var str = corpus[2].match(pattern);
        count = str.length; //*******************//
        var b1 = str.join(' ');
        var b2 = b1.toLowerCase();
        var b3 = b2.split(' ');
        var uwords = new Set(b3);
        uniquecount = uwords.size; //*******************//
        result.innerHTML = '';

  }
  
}

  function check() {
    var tokens = document.getElementById('token').value;
    var types = document.getElementById('type').value;
    if (count == tokens) {
      document.getElementById('token').style.backgroundColor = 'Green';
    } else {
      document.getElementById('token').style.backgroundColor = 'Red';
    }
  
    if (uniquecount == types) {
      document.getElementById('type').style.backgroundColor = 'Green';
    } else {
      document.getElementById('type').style.backgroundColor = 'Red';
    }
    if (count == tokens && uniquecount == types) {
      result.innerHTML =
        "<center><font color='Green' style = 'font-size:20px'>Right answer</font><br><br><button id='continue'  onclick='stemmers()'>Continue</button></center>";
    } else {
      result.innerHTML =
        "<center><font color='Red' style = 'font-size:20px'>Wrong answer</font></center>";
    }
  }

  function stemmers() {
    result.innerHTML ='';
    submit.innerHTML='';
    newtype.innerHTML =
      "<br><center>Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.<br><br>#new types:<br><input type='text' id='newtypeinput'></center>";
      submits.innerHTML =
      "<center><button id='submit1' value='Submit' onclick='stemtype();'>Submit</button></center>";
    
  }

function stemtype(){
  var str='';
  if (a=='corpus1'){
    str=corpus[0];
  }
  if (a=='corpus2'){
    str=corpus[1];
  }
  if (a=='corpus3'){
    str=corpus[2];
  }
  str = str.replace(/[^a-zA-Z ]/g, '');
  str = str.toLowerCase();
  var str1 = str.split(' ');
  var s = [];
  for (i = 0; i < str1.length; i++) {
    stemmer.setCurrent(str1[i]);
    stemmer.stem();
    s[i] = stemmer.getCurrent();
  }
  s = new Set(s);
  s = Array.from(s);
  console.log(s);
  alert(s.length);
}