var corpus = [
    [
      'The child liked the chocolate.',
      'She was stopped by the bravest knight.',
      'Mary baked a cake for his birthday',
      'She decorated the cake carefully',
      'Mary wore a dress with polka dots.',
    ],
    [
      'राम ने सीता के लिए फल तोड़ा।',
      'छोटे बच्चे पाठशाला जल्दी आयेंगे।',
      'मेहनत का फल मीठा होता है।',
      'वाह! वह खूबसूरत है।',
      'पेड़ से पत्ते गिर गए।',
    ],
  ];
  
  //----------------Corpus-----------------//
  
  var subheading = document.getElementById('subheading');
  var description = document.getElementById('description');
  var langcontent = document.getElementById('langcontent');
  var contenttable = document.getElementById('contenttable');
  var submit = document.getElementById('submit');
  var x;
  
  function clearfields() {
    subheading.innerHTML = '';
    description.innerHTML = '';
    langcontent.innerHTML = '';
    contenttable.innerHTML = '';
    submit.innerHTML = '';
  }
  
  function introshow() {
    description.style.fontSize = '15px';
    subheading.innerHTML = 'Introduction';
    description.innerHTML =
      'Part-of-speech tagging is the process of assigning a part-of-speech (lexical class marker) to each word in a corpus. The basic parts of speech are : Noun, Verb, Determiner, Adjective, Adverb, Preposition (in English), Postposition (in Hindi).<br><br>';
    document.getElementById('image1').style.display = '';
  }
  function theoryshow() {
    subheading.innerHTML = 'Theory';
    document.getElementById('image1').style.display = 'none';
    var extra =
      '"Parts of speech" are the basic lexical categories of the words present in a language. It is very important to understand these, in order to understand the grammar and use of the language concerned.<br><br>Eg:<ul><li>Ram(Noun) ate(Verb) an(Determiner) apple(Noun) with(Preposition) a(Article) fork(Noun).</li><li>राम(Noun) ने(Postposition) चम्मच(Noun) से(Postposition) मिठाई(Noun) खाई(Verb).</li></ul><br>Each part of speech explains how the word is used. In fact, the same word can act as different parts of speechs depending on the context.<br><br>Eg: A noun in one sentence and an adjective in the next.<ul><li>The glass was broken(Verb).</li><li>The broken(Adjective) glass pierced her flesh.</li><br><br>Part-of-speech tagging is the process of assigning a part-of-speech (lexical class marker) to each word in a corpus.<br><br>';
    description.innerHTML =
      extra +
      '<table id="table1"><tr><th>POS</th><th>FUNCTION</th><th>EXAMPLE</th></tr><tr><td>Verb</td><td>action or state</td><td>take, eat, है, सोना, गया</td></tr><tr><td>Noun</td><td>naming word; person or thing</td><td>table, John, honesty, राम, कुर्सी, हिम्मत</td></tr><tr><td>Pronoun</td><td>replaces noun</td><td>he, she, you, मैं, वह</td></tr><tr><td>Determiner</td><td>occurs before noun or noun phrase</td><td>the, many, all</td></tr><tr><td>Adjective</td><td>describes noun</td><td>green, big, छोटा, सुन्दर, काला</td></tr><tr><td>Adverb</td><td>describes verb</td><td>naturally, slowly,धीरे, जल्दी</td></tr><tr><td>Preposition</td><td>joins noun to other POS</td><td>in,of, about</td></tr><tr><td>Postposition</td><td>joins noun to other POS</td><td>में, से, के लिए</td></tr><tr><td>Conjunction</td><td>joins two words, phrases, sentences</td><td>but, so, और, या</td></tr><tr><td>Interjection</td><td>express emotion or surprise followed by exclamation marks</td><td>Hello!, Hurray!, वाह!</td></tr></table></ul>';
  }
  function objectiveshow() {
    description.style.fontSize = '16px';
    subheading.innerHTML = 'Objective';
    document.getElementById('image1').style.display = 'none';
    description.innerHTML =
      '<br><hr><br>The objective of this experiment is to test the knowledge of basic part of speech of words as they appear in a sentence.<br><br><hr>';
  }
  
 
  
  function experimentshow() {
    subheading.innerHTML = 'Experiment';
    document.getElementById('image1').style.display = 'none';
}
  
  function quizzesshow() {
    description.style.fontSize = '16px';
    subheading.innerHTML = 'Quizzes';
    document.getElementById('image1').style.display = 'none';
    description.innerHTML =
      '<b>Assign POS tag to each word in the following sentences</b><ol><li>Heat water in a large vessel.</li><li>The dog is happy.</li><li>The happy dog.</li><li>Park the car near the park.</li><li>The dog is sitting just at the gate.</li></ol><br><ol><li>बहार जाओ</li><li>गाड़ी उद्द्यान में खड़ी करो</li><li>राम खाना खाकर सो गया</li><li>राम खाते खाते सो गया</li><li>राम ने खाते खाते खाता खुलवाया</li></ol>';
  }
  function procedureshow() {
    subheading.innerHTML = 'Procedure';
    document.getElementById('image1').style.display = 'none';
    description.innerHTML =
      '<b><u>STEP1 :</u></b> Select a language from the drop down menu.<br><b><u>STEP2 :</u></b> Select a sentence from the drop down menu.<br><b><u>STEP3 :</u></b> Select corresponding POS for each word in the sentence and and click the <button>Submit</button> button<br><b><u>OUTPUT :</u></b> The submitted answer will be checked.<br><b><u>STEP4 :</u></b> If incorrect, click on <button>Get Answer</button> button for the correct answer or repeat STEP3.<br><br><br><hr>';
  }
  
  function furtherreadingsshow() {
    description.style.fontSize = '16px';
    subheading.innerHTML = 'Further Reading';
    document.getElementById('image1').style.display = 'none';
    description.innerHTML =
      "<center><b>Hindi</b><br>-Yamuna Kachru<br><i>Chapter 6</i><br><br><b>A Student's Introduction To English Grammar</b><br>- Rodney D. Huddleston<br><i>Chapter 6</i></center>";
  }