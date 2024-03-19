function razzle() {
    console.log("You've been razzled!");
  }
  function razzle() {
    console.log("You've been razzled!");
  }
  razzle();
  //=> "You've been razzled!"
  razzle(); //=> "You've been razzled!"
function razzle() {
  console.log("You've been razzled!");
}
function razzle(lawyer = "Billy", target = "'em") {
    console.log(`${lawyer} razzle-dazzles ${target}!`);
  }
  console.log("Yet more razzling");
  razzle(); //=> Billy razzle-dazzles 'em!
  razzle("Methuselah", "T'challah"); //=> Methuselah razzle-dazzles T'challah!
  1 + 1; //=> 2
  "Razzle " + "dazzle!"; //=> "Razzle dazzle!"
  console.log("Yet more razzling");
  
  const fn = function () {
    console.log("Yet more razzling");
  }; //=> undefined
  fn; //=> ƒ () { console.log("Yet more razzling") }
  fn(); // "Yet more razzling"

  function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction;
  }