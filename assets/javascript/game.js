// Part 0 - Pre-Game

// 0.1 - Characters Stats

// Health Points = hp

// Attack Power = ap

// Counter Attack Power = cap

// CHARACTERS

function gamePlay() {


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

    var iChooseU = "";

    var enemy1 = {};

    var enemy2 = {};

    var enemy3 = {};



    // 0.2 - Score

    var wins = 0;

    var losses = 0;

    // FUNCTIONS

    $(".characters").on("click", fighterSelect);

    function fighterSelect(event) {

        var fightName = $(this).attr("id");
        var playAs = $(this).attr("value");

        console.log(this);
        console.log(fightName);

        if ($(this).attr("class") !== "enemies" && playAs !== undefined) {

            var iChooseU = confirm("Play as " + playAs + "?");

            if (iChooseU === true) {

                $(this).siblings().removeClass("characters").addClass("enemies");

                // console.log($(".characters").siblings());

                $(this).removeClass("characters").addClass("pc");

                if (fightName === "finn") {
                    fighter = finn;
                } else if (fightName === "jake") {
                    fighter = jake;
                } else if (fightName === "pb") {
                    fighter = pb;
                } else if (fightName === "marce") {
                    fighter = marce;
                }
            }
            $(".enemies").on("click", enemySelect1);

            console.log(fighter);

            return;
        }
    }


    function enemySelect1(event) {

        var enemyName1 = $(this).attr("id");
        var fight1 = $(this).attr("value");

        console.log(enemyName1);

        if (fighter.hp > 0) {

            var fight1Go = confirm("Fight " + fight1 + "?")

            if (fight1Go === true) {

                $(this).removeClass("enemies").addClass("firstEnemy");

                if (enemyName1 === "finn") {
                    enemy1 = finn;
                } else if (enemyName1 === "jake") {
                    enemy1 = jake;
                } else if (enemyName1 === "pb") {
                    enemy1 = pb;
                } else if (enemyName1 === "marce") {
                    enemy1 = marce;
                };

                console.log(enemy1);

                $(".enemies").on("click", enemySelect2);

                return;
            }
        }
    }

    function enemySelect2(event) {

        var enemyName2 = $(this).attr("id");
        var fight2 = $(this).attr("value");

        console.log(enemyName2);

        if (fighter.hp > 0) {

            var fight2Go = confirm("Fight " + fight2 + "?")

            if (fight2Go === true) {

                $(this).removeClass("enemies").addClass("secondEnemy");

                if (enemyName2 === "finn") {
                    enemy2 = finn;
                } else if (enemyName2 === "jake") {
                    enemy2 = jake;
                } else if (enemyName2 === "pb") {
                    enemy2 = pb;
                } else if (enemyName2 === "marce") {
                    enemy2 = marce;
                };

                console.log(enemy2);

                $(".enemies").on("click", enemySelect3);

                return;
            }
        }
    }

    function enemySelect3(event) {

        var enemyName3 = $(this).attr("id");
        var fight3 = $(this).attr("value");

        console.log(enemyName3);

        if (fighter.hp > 0) {

            var fight3Go = confirm("Fight " + fight3 + "?")

            if (fight3Go === true) {

                $(this).removeClass("enemies").addClass("thirdEnemy");

                if (enemyName3 === "finn") {
                    enemy3 = finn;
                } else if (enemyName3 === "jake") {
                    enemy3 = jake;
                } else if (enemyName3 === "pb") {
                    enemy3 = pb;
                } else if (enemyName3 === "marce") {
                    enemy3 = marce;
                };

                console.log(enemy3);

                return;
            }
        }
    }

}

$(document).ready(gamePlay(event));






// MAIN FUNCTION START



// Part 1 - Player chooses fighter.




// Part 2 - Enemy1 select.





// Part 3 - Combat

// // 3.1 Reveal comabat area.

// $("#gameArea").removeClass("hidden");

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
