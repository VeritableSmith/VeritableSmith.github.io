function ConversionPartWhat() {
  var nameInput = document.getElementById("4_Name").value
  var names = ["Chase", "Larry", "Will", "Clay", "Markus", "Nathan", "Ethan", "Noah", "Andy", "Andrew", "Byron", "Henry", "Caroline", "Coco", "Monica", "Stephanie", "Steph", "Talia"];
  var fakeName = true;
  for(var i = 0; i < names.length; i++) {
    if(nameInput == names[i]) {fakeName=false;}
  }
  if(fakeName) {
    document.getElementById('ConversionOutput').textContent ="Doubtful. Why do you" +
    " feel the need to lie about your name? To deceive me, a computer, one who can " +
    "neither judge nor cause meaningful effects in the world? I hope your life gets better."
    return;
  }

  var adjS = ["slippery", "slimy", "squiggly", "syrupy", "sneaky", "surreptitious", "squirrely",
  "super", "stinky", "squeamish", "simon", "syringe-like", "sly", "striated", "pneumatic"];
  var adj1 = adjS[Math.floor(Math.random()*adjS.length)]; var adj2 = adjS[Math.floor(Math.random()*adjS.length)];
  FormatAndShowOutput([adj1, adj2], 4);
}
