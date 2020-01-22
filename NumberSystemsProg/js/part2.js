function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);

    var input = SignedDecimalInt;
    var outputValue = "010110101000110110011101";
    var outputValueTwosComplement = "101001010111001001100011";


    var outputValue="";
    while(input>0) {
      outputValue+=input%2;
      input=Math.floor(input/2);
    }
    while(outputValue.length<23) {outputValue+="0";}
    if(SignedDecimalInt>=0) {outputValue+="0";}
    else {outputValue+="1";}

    var matched = false;
    outputValueTwosComplement="";
    for(var i = 0; i < outputValue.length; i++) {
      if(i==0||matched) {
        if(outputValue.charAt(i)==0) {outputValueTwosComplement+="0"; matched=true;}
        else {outputValueTwosComplement+="1"; matched=false;}
      }
      else {
        if(outputValue.charAt(i)==0) {outputValueTwosComplement+="1";}
        else {outputValueTwosComplement+="0";}
      }
    }


    outputValue=outputValue.split("").reverse().join("");
    outputValueTwosComplement=outputValueTwosComplement.split("").reverse().join("");

    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}
