var translateModule = process.argv[2],
    AMLTranslator = require(translateModule);
var error = "ERROR: invalid aml format";
var testStrings = [
   ["Hello, World!",
    "Hello, World!"],
   ["Hello, ^%World!^!%",
    "Hello, <STRONG>World!</STRONG>"],
   ["Greetings ^%from ^~Glornix^!% Beta-Nine^!~.",
    "Greetings <STRONG>from <EM>Glornix</EM></STRONG><EM> Beta-Nine</EM>."],
   //my test
   [null, error],
   [undefined, error],
   ["^%hello", error],
   ["^%hello ^!~", error],
   ["hello^", error],
   ["Hello, ^$World!^!$", error],
   ["Hello, ^World!^", error]
];

testStrings.forEach(function (testString, idx) {
  translated = AMLTranslator.translate(testString[0]);
  if (translated.toLowerCase() === testString[1].toLowerCase()) {
    console.log("Example " + (idx + 1) + " is correct.");
  } else {
    console.log("Example " + (idx + 1) + " is incorrect!");
    console.log('  Input:    ' + testString[0]);
    console.log('  Expected: ' + testString[1]);
    console.log('  Received: ' + translated);
  }
});



"^~Hello, ^%Earth!^!~       You are ^~welcome^!% here.^!~” Output: "
"<em>Hello, <strong>Earth!</strong></em> <strong> You are <em>welcome</em></strong><em> here.</em>"
