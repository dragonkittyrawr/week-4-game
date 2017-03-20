// Part 0 - Pre-Game

// 0.1 - Characters Stats

// Health Points = hp

// Attack Power = ap

// Counter Attack Power = cap

// CHARACTERS


var finn = {
    hp: 100,
    ap: 5,
    cap: 5
};

var jake = {
    hp: 100,
    ap: 5,
    cap: 5
};

var pb = {
    hp: 100,
    ap: 5,
    cap: 5
};

var marce = {
    hp: 100,
    ap: 5,
    cap: 5
};

var fighter = {};

var enemy1 = {};

var enemy2 = {};

var enemy3 = {};



// 0.2 - Score

var wins = 0;

var losses = 0;

// MAIN FUNCTION START

$(document).ready(function() {

    // Part 1 - Player chooses fighter.

    $('div').click(function() {
        var fightName = $(this).attr('id');
        var playAs = $(this).attr('value');
        console.log(this);
        console.log(fightName);

        if (fightName === "finn") {
            fighter = finn;
        } else if (fightName === "jake") {
            fighter = jake;
        } else if (fightName === "pb") {
            fighter = pb;
        } else if (fightName === "marce") {
            fighter = marce;
        }

        console.log(fighter);






        if (fighter.cap > 0) {

            var iChooseU = alert("Play as " + playAs + "?");
        }


        // if (iChooseU === true) {
        //     enemySelect();
        // };
    });






    // Part 2 - Display enemies.


    // Part 3 - Combat

    // 3.1 Player chooses an enemy to fight.

    // 3.2a Player clicks "attack" until Enemy or PC is dead.

    // 3.2b When Player clicks "attack" PC Attack Power increases by its base Attack Power.

    // 3.3 If Player defeats enemy 1 they select their next opponent.

    // 3.3a Player clicks "attack" until Enemy or PC is dead.

    // 3.3b When Player clicks "attack" PC Attack Power increases by its base Attack Power.

    // 3.4 If Player defeats enemy 2 they fight last remaining opponent.

    // 3.4a Player clicks "attack" until Enemy or PC is dead.

    // 3.4b When Player clicks "attack" PC Attack Power increases by its base Attack Power.

    // 3.5a If Player defeats enemy 3 they have won.  Wins++.

    // 3.5b If PC dies at any point, losses++.

    // MAIN FUNCTION END
});
