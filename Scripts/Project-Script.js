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
   aaaa: On the first page is a list of strange words. (say "meza", say "fycaz", say "yez", say "ayzph")
    aaaaa: A fire lights on the palm of your dominant hand. (pat it out, watch it)
     aaaaaa: It goes out, and only afterwards you realize that it wasn't painful. However, the temporary fire burnt the entire book to ash. You're stuck, permanently. (l)
     aaaaab: You watch the fire grow in your hand, not burning you at all. Then it shoots upwards, seemingly of its own accord. It burns a hole through the ceiling and wraps around your wrist. It drags you upwards, and in a torrent of fire you end up on grass, a smoking hole behind you. You smile, the book still in your hand. You set off, learning magic as you go. (w)
    aaaab: Water begins to leak off your hands, and after a few moments it seems like the room will flood. (clap, let it go)
     aaaaba: The water stops, but the book had all of its ink washed away. You're well and truly stuck. (l)
     aaaabb: The water keeps flowing, and suddenly a massive snake head made of water forms out of a wave. It slams itself into the ceiling, then gently lifts you onto a field of grass. The snake shrinks into the size of a grass snake and slithers onto your wrist. Somehow, in the flood, the book survived, and you journey off to explore this land and learn more magic. (w)
    aaaac: you say it, slightly confused, and suddenly you're floating. then the roof starts ripping itself apart. (clap hands, let it continue)
     aaaaca: You fall to the ground, landing hard. You can see the book on a rafter far above, ripped out of your hands in the chaos, unreachable. You are completely stuck. (l)
     aaaacb: You allow the ceiling to be ripped apart above you, and you're lifted up and land gently in a field of grass. The magic book lands beside you, and you pick it up smiling. (w)
    aaaad: You say the word softly, and one of your hands now holds a sphere of dirt, a few tufts of grass atop it. Then the ceiling rips open and a spear of stone erupts under your feet. You shoot towards the shattered ceiling. (throw the dirt ball, let it happen)
     aaaada: All of the movement stops. The magic book was buried under the spire, and you can see no way our of here. (l)
     aaaadb: You rocket through a quickly-growing hole, and you end up in a field full of grass. The book comes flying out of the hole behind you, almost hitting you in the head. You smile and pick it up, walking off to explore and learn. (w)
   aaab: Towards the back of the room, you see an empty throne, half in shadow. You walk towards it, and are reaching out to touch a ruby the size of a skull when you hear a deep voice behind you. "If you touch my throne, you'll regret it." (steal ruby, talk to person)
    aaaba: The ruby melts in your hands, and it somehow becomes acid. "I told you not to touch it," the voice says. (l)
    aaabb: "who are you?" you ask, turning around. then you gasp, seeing the emaciated, but seemingly alive crowned corpse behind you. "I am the king," he said. "I will teach you magic, if you wish." He murmurs a word that almost sounds like "meza", and his hands are alight with fire, though he's not burning. "will you stay?" (yes, no)
     aaabba: He has you read the book you ignored when you came in, and eventually you figure out the language of magic. You stay there for a long time, and when you decide you want to leave, you leave changed. The king crumbles to dust behind you, a smile on his face. (w)
     aaabbb: "Fine," he says. "But I will not let any of my enemies have you." He sighs. "There are three of us, and you are the fated hero that will set one of us free. For me, that is finally being able to leave this world." He begins chanting. "Basm yez, basm zabebc, basm yez..." He disappears, leaving you trapped. (l)
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
     ababaa: You try to pick the lock with a paperclip in your pocket, but the flames catch up. You manage to hear the spirit saying "Unbeliever" disdainfully before the fire overwhelms you. (l)
     ababab: You let the flames catch up to you, and the spirit glows blue through the flames. "Believer, you will be rewarded." She raises her hands, and you go flying upwards. You somehow go through the ceiling, and she floats after you. You fly through floor after floor, and eventually she sets you on grass. "Thank you, adventurer," she says. "You freed me." Then she disappears, and you begin walking home. (w)
    ababb: you raise your fists, and a wave of flame engulfs you. (l)
  abb: (go to aaa)
  abc: (go to aab)

  l: end game, you lost
  w: end game, you won

  Wins: aaaaab, aaaabb, aaaacb, aaaadb, ababab, aaabba
  Losses:
*/
