
function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);
  var floatString=""+document.getElementById("3_Float").value;
  var output32BitScientificNotation = "10100011001100001000010100101010";
  var float = floatToConvert; var output = "";

  //Isolate the integer part of the input
  var integer = ""+Math.floor(float);

  //Isolate the fraction part of the input
  var frac = ""+(float-integer);

  //Convert the integer part to binary
  var intBin="";
  while(integer>0&&intBin.length<23) {
    intBin+=integer%2;
    integer=Math.floor(integer/2);
  }
  intBin=intBin.split("").reverse().join("");

  //Select the relevant Integer and remove the leading '1'
  for(var i = 0; i < intBin.length; i++) {
    if(intBin.charAt(i)==1) {
      intBin=intBin.substring(i+1);
      i = intBin.length;
    }
  }

  //Convert the fraction part to binary
  var fracBin="";
  while(frac>0&&fracBin.length+intBin.length<23) {
    frac=frac*2;
    if(frac>1) {fracBin+="1"; frac-=1;}
    else {fracBin+="0";}

  }
  fracBin=fracBin.split("").reverse().join("");
  while(fracBin.length+intBin.length<23) {fracBin+="0";}

  //Get the exponent in decimal
  var dotIndex=intBin.length;

  //Get the Exponent
  var exponent=""; dotIndex+=128;
  while(dotIndex>0&&exponent.length<8) {
    exponent+=dotIndex%2;
    dotIndex=Math.floor(dotIndex/2);
  }
  exponent=exponent.split("").reverse().join("");

  //Detect sign
  var sign="";
  if(floatToConvert>0) {sign="0";} else {sign="1";}

  
  output=intBin+fracBin+exponent+sign;
  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, output], 3);
}


// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0
