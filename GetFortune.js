const randomFortune = require('./FortuneCookie.js');
const colors = require("ansi-colors");

const getFortune = () => {
    return randomFortune();
}

// Fortune cookie shape with fortune text
const displayFortuneCookie = (fortune) => {
    console.log(colors.yellow("                                      "));
    console.log(colors.yellow("                     --------         "));
    console.log(colors.yellow("                 -------------        "));
    console.log(colors.yellow("            ------------"+ colors.blue(`==`)+"-----       "));
    console.log(colors.yellow("        ---------------"+ colors.blue(`=+=`)+"-------     "));
    console.log(colors.yellow("     -----------------"+ colors.blue(`=+=`)+"---------    "));
    console.log(colors.yellow("    ----------------"+ colors.blue(`==+=`)+"-----------   "));
    console.log(colors.yellow("  ----------------"+ colors.blue(`==+`)+"---------------- "));
    console.log(colors.yellow(" ----------------"+ colors.blue(`==+`)+"----------------- "));
    console.log(colors.yellow(" ---------------"+ colors.blue(`==+`)+"-------------------" + colors.cyan(`     "${fortune}"`)));
    console.log(colors.yellow(" ---------------"+ colors.blue(`=+`)+"------------------- "));
    console.log(colors.yellow("---------------"+ colors.blue(`==`)+"-------------------- "));
    console.log(colors.yellow(" ---------------------------------"+ colors.blue(`=`)+"-  "));
    console.log(colors.yellow(" ----------   ------------------"+ colors.blue(`==`)+"-   "));
    console.log(colors.yellow("   ----      -----------------"+ colors.blue(`===`)+"-    "));
    console.log(colors.yellow("             --------------"+ colors.blue(`=`)+"-"+ colors.white(`:::::`)+"    "));
    console.log(colors.yellow("            ------"+ colors.blue(`===++=-=`)+"-"+ colors.white(`:::::::::::`)+"  "));
    console.log(colors.yellow("            --"+ colors.blue(`==========-=`)+"-"+ colors.white(`::::::::::`)+"   "));
    console.log(colors.yellow("             ----------- "+ colors.white(`::::::::`)+"     "));
    console.log(colors.yellow("                           "+ colors.white(`::::`)+"       "));
    console.log(colors.yellow("                                      "));
};

// Get a random fortune and display it in a "cookie"
displayFortuneCookie(getFortune());
