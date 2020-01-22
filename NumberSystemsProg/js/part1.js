function ConversionPart1() {

    var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);


    var input = 0;
    var inputTemp = UnsignedInt;
    var inputString="";
    var repCount = 0;


    if(UnsignedIntBaseFrom!=10) {
      while(inputTemp>0) {
        input+=(inputTemp%10)*(Math.pow(UnsignedIntBaseFrom, repCount));
        inputTemp=Math.floor(inputTemp/10);
        repCount++;
      }
    }
    else {
      input = UnsignedInt;
    }

  var outputValue = "11111111";
  outputValue="";
  while(input>0) {
    outputValue+=input%UnsignedIntBaseTo;
    input=Math.floor(input/UnsignedIntBaseTo);
  }
  outputValue=outputValue.split("").reverse().join("");

  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
