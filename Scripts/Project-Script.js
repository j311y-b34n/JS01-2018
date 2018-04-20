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
   aaaa: On the first page is a list of strange words, each with an english word below them. (CHOICES HERE)
    STUFF HERE
   aaab: Towards the back of the room, you see an empty throne, half in shadow. You walk towards it, and are reaching out to touch a ruby the size of a skull when you hear a deep voice behind you. "If you touch my throne, you'll regret it." (steal ruby, talk to person)
    aaaba: (steal ruby)
    aaabb: (talk)
  aab: You go through the black door, and immediately feel a dagger at your throat. "Come with me." you see a black-gloved hand on the knife, and they say, "I'm going to get you out of here, but I'll need your help." (fight person, go with them, ask what's happening)
   aaba: You ball your fist, but the person slits your throat (l)
   aabb: They lead you into a room with a sword, floating above a pedestal. "this place is full of magic," they say. "But magic is poison, after a long time. So I do without. But if you stay here, the magic will infect you. Take the sword and go, as fast as you can." The knife leaves your throat, and when you turn around, they're gone. (take sword, leave)
    aabba: You take the sword and swing it experimentally. It whishes through the air, though there's no magic effects. Then the floor moves, pushing you upwards. It then breaks in three, one circle in the middle with you, the pedestal, and the sword, and the other two fall beneath you, making a structure that looks like a circular pyramid. then you hear water, and it comes flooding in. (look around, yell)
     aabbaa: (look)
     aabbab: (yell)
    aabbb: You turn to leave, but the door is locked. when you turn around, the person is there, dressed in all black. The sword is gone. (demand sword, demand to leave)
     aabbba: The person chuckles and moves so quickly they seem to disappear. They leave you in that room, where you're trapped (l)
     aabbb: (aabba)
  aabc: "This place is full of magic, and I am one of the three denziens of it. One sect loves magic, one runs from it, and mine avoids it." they lead you into the room, and continue explaining (let them continue)
   aabca: (aabb)
 ab: a ghost materializes and says she's here to help you out, and that you're in peril. she says that if you look up, there's a trapdoor over your head and you should go upstairs. (trapdoor, purple door, black door)
  aba: You go upstairs to hear a roar of water below you. The purple door blasted open and is spilling saltwater in massive quantities into the hallway. You look around and see massive amounts of treasure. the ghost says not to even brush up against any of it, and that the exit to the building is on the top floor. The door to the stairs is behind a massive pile of gold. (steal treasure, move treasure from in front of door, try to force door open)
   abaa: The treasure rises and forms into a dragon as soon as you touch it, and it breathes fire onto you as soon as it sees you. (l)
   abab: You push the treasure from in front of the door and open it, but before you do, it moves, revealing a massive golden dragon that's made of coins and has rubies for eyes. (run, fight)
    ababa: you sprint out the door, and the dragon snarls after you. there are stairs there, and you climb them, the spirit ascending after you. Suddenly there are flames behind you, and you sprint up the stairs as they crumble to ash behind you. you come to a locked door. The ghost says the flames won't harm you because you're with her, and you shouldn't unlock what's behind the door, but you can feel the heat creeping up on you. (pick the lock, wait)
     ababaa: You try to pick the lock with a paperclip in your pocket, but the flames catch up. You manage to hear the spirit saying "Unbeliever" disdainfully before the fire overwhelms you.
     ababab: You let the flames catch up to you, and the spirit glows blue through the flames. "Believer, you will be rewarded." She raises her hands, and you go flying upwards. You somehow go through the ceiling, and she floats after you. You fly through floor after floor, and eventually she sets you on grass. "Thank you, adventurer," she says. "You freed me." Then she disappears, and you begin walking home. (w)
    ababb: you raise your fists, and a wave of flame engulfs you. (l)
  abb: (go to aaa)
  abc: (go to aab)

  l: end game, you lost
  w: end game, you won

  Wins: ababab 
  Losses:
*/
