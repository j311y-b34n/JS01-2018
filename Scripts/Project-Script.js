//variables

//jquery display
$("#go").click(() => {
  let userInput = $("#input").val();
  $("#choices").append(" " + userInput);
});

//functions and stuff
/*
a: character is in a corridor (look around, yell)
 aa: there are doors at either end of the hallway. One is purple with a yellow star, one is black with a strange white symbol (purple door, black door)
  aaa: you open the purple door, and behind it is a simple table with a thick book. (begin reading book, look around)
   aaaa: On the first page is a list of strange words, each with an english word below them. ()
   aaab:
  aab: (black)
 ab: a ghost materializes and says she's here to help you out, and that you're in peril. she says that if you look up, there's a trapdoor over your head and you should go upstairs. (trapdoor, purple door, black door)
  aba: You go upstairs to hear a roar of water below you. The purple door blasted open and is spilling saltwater in massive quantities into the hallway. You look around and see massive amounts of treasure. the ghost says not to even brush up against any of it, and that the exit to the building is on the top floor. The door to the stairs is behind a massive pile of gold. (steal treasure, move treasure from in front of door, try to force door open)
   abaa: The treasure rises and forms into a dragon as soon as you touch it, and it breathes fire onto you as soon as it sees you. (l)
   abab: You push the treasure from in front of the door and open it, but before you do, it moves, revealing a massive golden dragon that's made of coins and has rubies for eyes. (run, fight)
    ababa: you sprint out the door, and the dragon snarls after you. there are stairs there, and you climb them, the spirit ascending after you. Suddenly there are flames behind you, and you sprint up the stairs as they crumble to ash behind you. you come to a locked door. The ghost says the flames won't harm you because you're with her, and you shouldn't unlock what's behind the door, but you can feel the heat creeping up on you. (pick the lock, wait)
     ababaa: (pick the lock)
     ababab: (wait)
    ababb: you raise your fists, and a wave of flame engulfs you. (l)
  abb: (go to aaa)
  abc: (go to aab)

  l: end game, you lost
  w: end game, you won
*/
