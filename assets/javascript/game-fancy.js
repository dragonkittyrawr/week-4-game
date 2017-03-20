// Part 0 - Pre-Game

// 0.1 - PC Stats

// Health Points

var pcHp = 10;

// Attack Power

var pcAp = 1;

// Counter Attack Power

var pcCap = 2;



// 0.2 - Enemy Stats (enemies do not have Attack Power.)

// Health Points

var eHp = 8;

// Counter Attack Power

var eCap = 1;



// 0.3 - Score

var wins = 0;

var losses = 0;

// MAIN FUNCTION START

$(document).ready(function() {

    // Part 1 - Player chooses fighter.




    $("#pc1").hover(

        function select() {
            $(this).addClass("select");
        },
        function unSelect() {
            $(this).find("class").remove();
        });

    $("#pc2").hover(

        function select() {
            $(this).addClass("select");
        },
        function unSelect() {
            $(this).find("class:select").remove();
        });

    $("#pc3").hover(

        function select() {
            $(this).addClass("select");
        },
        function unSelect() {
            $(this).find("class:select").remove();
        });

    $("#pc4").hover(

        function select() {
            $(this).addClass("select");
        },
        function unSelect() {
            $(this).find("class:select").remove();
        });







    // if (isSelect === "red") {
    //     $(this).css('border-style', 'none');
    // } else {
    //     $(this).css('border-color', 'red');
    //     $(this).css('border-style', 'solid');
    //     $(this).css('border-width', '5px');
    // };



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
