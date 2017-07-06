alert ("Bouncer-chan: Yo, I need to see your ID.");
alert ("You reach into your back pocket for your wallet and take out your ID.");
var year = prompt ("As you hand over your ID to Bouncer-chan, you make a slight cringe. Despite how your ID picture looks you were actually born in ");
age = 2017 - year; 
console.log (year, age);
alert("Bouncer-chan squints at your ID, looks at you, and then goes back to examining your ID. After several seconds, he hands you back your ID and says...");

if (age < 18) {
    alert ("What the hell are you doing here, kid? I think it's past your bedtime. BAD END");
}

else if (age < 21) {
    alert ("Alright, you can enter but the balcony is off-limits. Don't even try approaching the bar. GOOD END?");
}

else if (age == 21) {
    alert ("Look who's finally legal and is already an alcholic! I better not have to call someone to take you home. BAD END");
}

else {
    alert ("Alright, have a nice night. Enjoy the club. GOOD END");
}