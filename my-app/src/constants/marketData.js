    const gloveKingSnake = "★ Driver Gloves | King Snake (Field-Tested)";
    const gloveFade = "★ Specialist Gloves | Fade (Field-Tested)";
    const gloveMarbleFade = "★ Specialist Gloves | Marble Fade (Field-Tested)";
    const gloveSmokeOut = "★ Moto Gloves | Smoke Out (Field-Tested)";
    const gloveBlackTie = "★ Driver Gloves | Black Tie (Field-Tested)";
    const gloveTurtle = "★ Moto Gloves | Turtle (Field-Tested)";
    const gloveCobaltSkulls = "★ Hand Wraps | Cobalt Skulls (Field-Tested)";
    const glovePolygon = "★ Moto Gloves | Polygon (Field-Tested)";
    const gloveImperialPlaid = "★ Driver Gloves | Imperial Plaid (Field-Tested)";
    const gloveLunarWeave = "★ Driver Gloves | Lunar Weave (Field-Tested)";
    const gloveScarlenShamagh = "★ Sport Gloves | Scarlet Shamagh (Field-Tested)";
    const gloveRezanTheRed = "★ Driver Gloves | Rezan the Red (Field-Tested)";
    const gloveCrimsonWeb = "★ Specialist Gloves | Crimson Web (Field-Tested)";
    const gloveBloodPressure = "★ Moto Gloves | Blood Pressure (Field-Tested)";
    const gloveCrimsonWeave = "★ Driver Gloves | Crimson Weave (Field-Tested)";
    const gloveTigerStrike = "★ Specialist Gloves | Tiger Strike (Field-Tested)"; //--------------------------
    const gloveOverprint = "★ Hand Wraps | Overprint (Field-Tested)" //пока говно
    const gloveFinishLine = "★ Moto Gloves | Finish Line (Field-Tested)"; //--------------------------------
    const gloveFieldAgent = "★ Specialist Gloves | Field Agent (Field-Tested)"//---------------------
    const glovePOW = "★ Moto Gloves | POW! (Field-Tested)";//----------------
    const gloveOmega = "★ Sport Gloves | Omega (Field-Tested)";//------------------------------
    const gloveAmphibious = "★ Sport Gloves | Amphibious (Field-Tested)";//??????????----------------

    const akMonster = "AK-47 | B the Monster (Field-Tested)";
    const awpCrakow = "AWP | Crakow! (Field-Tested)";
    const akRage = "AK-47 | Searing Rage (Field-Tested)";

export const GLOVES = [gloveKingSnake, gloveFade, gloveMarbleFade, gloveSmokeOut, gloveBlackTie]
export const GLOVES1 = [gloveTurtle, gloveCobaltSkulls, glovePolygon, gloveImperialPlaid, gloveLunarWeave]
export const GLOVES2 = [gloveScarlenShamagh, gloveRezanTheRed, gloveCrimsonWeb, gloveBloodPressure, gloveCrimsonWeave]
export const SKINS = [akMonster, awpCrakow, akRage]

export const DEFAULT_GLOVES_ARR = {              //потом буду менять цены
  kingSnake:              { mhm: gloveKingSnake,       buff0_15: 52500, buff0_21: 37700, buff0_24: 31500, steam0_15: 70000, steam0_21: 56000, steam0_24: 45000, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+
  gloveFade:              { mhm: gloveFade,            buff0_15: 51000, buff0_21: 40000, buff0_24: 35300, steam0_15: 68000, steam0_21: 54000, steam0_24: 52000, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+
  gloveMarbleFade:        { mhm: gloveMarbleFade,      buff0_15: 34700, buff0_21: 27500, buff0_24: 25000, steam0_15: 47000, steam0_21: 38000, steam0_24: 36500, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+
  gloveSmokeOut:          { mhm: gloveSmokeOut,        buff0_15: 100000, buff0_21: 18500, buff0_24: 17000, steam0_15: 100000, steam0_21: 24500, steam0_24: 24000, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+           //20 500   28 000
  gloveBlackTie:          { mhm: gloveBlackTie,        buff0_15: 28200, buff0_21: 24200, buff0_24: 22000, steam0_15: 42000, steam0_21: 35500, steam0_24: 33000, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+
  gloveTurtle:            { mhm: gloveTurtle,          buff0_15: 16000, buff0_21: 14000, buff0_24: 14000, steam0_15: 24000, steam0_21: 23000, steam0_24: 21500, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+
  gloveCobaltSkulls:      { mhm: gloveCobaltSkulls,    buff0_15: 45000, buff0_21: 40000, buff0_24: 36500, steam0_15: 62000, steam0_21: 57000, steam0_24: 53500, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+
  glovePolygon:           { mhm: glovePolygon,         buff0_15: 20000, buff0_21: 18800, buff0_24: 17700, steam0_15: 32000, steam0_21: 28000, steam0_24: 25000, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+
  gloveImperialPlaid:     { mhm: gloveImperialPlaid,   buff0_15: 41000, buff0_21: 37000, buff0_24: 34000, steam0_15: 65000, steam0_21: 57000, steam0_24: 55000, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+
  gloveLunarWeave:        { mhm: gloveLunarWeave,      buff0_15: 23500, buff0_21: 21500, buff0_24: 19000, steam0_15: 32000, steam0_21: 28000, steam0_24: 26000, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+
  gloveScarlenShamagh:    { mhm: gloveScarlenShamagh,  buff0_15: 40500, buff0_21: 38000, buff0_24: 36000, steam0_15: 60000, steam0_21: 55000, steam0_24: 53000, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+
  gloveRezanTheRed:       { mhm: gloveRezanTheRed,     buff0_15: 14000, buff0_21: 13500, buff0_24: 13500, steam0_15: 21500, steam0_21: 20800, steam0_24: 20000, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+
  gloveCrimsonWeb:        { mhm: gloveCrimsonWeb,      buff0_15: 33800, buff0_21: 30300, buff0_24: 29000, steam0_15: 53000, steam0_21: 47000, steam0_24: 46000, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+
  gloveBloodPressure:     { mhm: gloveBloodPressure,   buff0_15: 21500, buff0_21: 50000, buff0_24: 50000, steam0_15: 31500, steam0_21: 50000, steam0_24: 50000, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //+           //19 500     18 200          28 500     27 000
  gloveCrimsonWeave:      { mhm: gloveCrimsonWeave,    buff0_15: 42000, buff0_21: 41000, buff0_24: 40000, steam0_15: 55000, steam0_21: 52000, steam0_24: 52000, enabled0_15: true, enabled0_21: true, enabled0_24: true },     //???
  gloveTigerStrike:       { mhm: gloveTigerStrike,     buff0_15: 51600, buff0_21: 43500, buff0_24: 40800, steam0_15: 60000, steam0_21: 55000, steam0_24: 53000, enabled0_15: true, enabled0_21: true, enabled0_24: true },
  gloveOverprint:         { mhm: gloveOverprint,       buff0_15: 19500, buff0_21: 18500, buff0_24: 18400, steam0_15: 28000, steam0_21: 26000, steam0_24: 25000, enabled0_15: true, enabled0_21: true, enabled0_24: true },
  gloveFinishLine:        { mhm: gloveFinishLine,      buff0_15: 18200, buff0_21: 16200, buff0_24: 15300, steam0_15: 23000, steam0_21: 21000, steam0_24: 19500, enabled0_15: true, enabled0_21: true, enabled0_24: true },
  gloveFieldAgent:        { mhm: gloveFieldAgent,      buff0_15: 34400, buff0_21: 28000, buff0_24: 24400, steam0_15: 40000, steam0_21: 36000, steam0_24: 34000, enabled0_15: true, enabled0_21: true, enabled0_24: true },
  glovePOW:               { mhm: glovePOW,             buff0_15: 28500, buff0_21: 22700, buff0_24: 18800, steam0_15: 38000, steam0_21: 28000, steam0_24: 24000, enabled0_15: true, enabled0_21: true, enabled0_24: true },
  gloveOmega:             { mhm: gloveOmega,           buff0_15: 55100, buff0_21: 44600, buff0_24: 40300, steam0_15: 81000, steam0_21: 60000, steam0_24: 57000, enabled0_15: true, enabled0_21: true, enabled0_24: true },
  gloveAmphibious:        { mhm: gloveAmphibious,      buff0_15: 82500, buff0_21: 72000, buff0_24: 67300, steam0_15: 110000, steam0_21: 95000, steam0_24: 90000, enabled0_15: true, enabled0_21: true, enabled0_24: true },

  akMonster:              { mhm: akMonster,            buff0_15: 20000, buff0_21: 1000,  buff0_24: 1000,  steam0_15: 30000,  steam0_21: 100,  steam0_24: 1000},   
  awpCrakow:              { mhm: awpCrakow,            buff0_15: 3850,  buff0_21: 1000,  buff0_24: 1000,  steam0_15: 5775,  steam0_21: 1000 , steam0_24: 1000},
  akRage:                 { mhm: akRage,               buff0_15: 270,   buff0_21: 100,   buff0_24: 100,   steam0_15: 405,   steam0_21: 100 ,  steam0_24: 100},
}; //ПЕРЕПИСАТЬ УБРАТЬ glove glove1 ИТД ПЕРЕСЫЛАТЬ ЭТУ ШТУКУ    

export const DEFAULT_ITEMS_FE = {  // убрать потом конст, буду менять
   "Charm | Die-cast AK": [
            { priceNotif: 500, priceBuy: 900, pattern1: 0, pattern2: 14000, type: "pattern", enabled: true, enabled: true },              //+     630 900
            { priceNotif: 530, priceBuy: 900, pattern1: 14000, pattern2: 20000, type: "pattern", enabled: true, enabled: true },          //+
            { priceNotif: 2600, priceBuy: 3500, pattern1: 20000, pattern2: 21000, type: "pattern", enabled: true, enabled: true },        //+
            { priceNotif: 3000, priceBuy: 3500, pattern1: 23000, pattern2: 24000, type: "pattern", enabled: true, enabled: true },
            { priceNotif: 4800, priceBuy: 4100, pattern1: 21000, pattern2: 23000, type: "pattern", enabled: true, enabled: true }],
        "Charm | Disco MAC": [
            { priceNotif: 90, priceBuy: 130, pattern1: 0, pattern2: 10000, type: "pattern", enabled: true, enabled: true },              //+
            { priceNotif: 90,  priceBuy: 140, pattern1: 10000, pattern2: 15000, type: "pattern", enabled: true, enabled: true },          //+
            { priceNotif: 90, priceBuy: 120, pattern1: 27000, pattern2: 28000, type: "pattern", enabled: true, enabled: true }],         //+
        "Charm | Glamour Shot": [
            { priceNotif: 260, priceBuy: 300, pattern1: 0, pattern2: 5000, type: "pattern", enabled: true, enabled: true }],              //+
        "Charm | Titeenium AWP": [
            {priceNotif:525,    priceBuy:950,   pattern1:0,     pattern2:5000,    type:"pattern", enabled: true},          //+
            {priceNotif:510,    priceBuy:950,   pattern1:70000, pattern2:80000,    type:"pattern", enabled: true},         //+
            { priceNotif: 575, priceBuy: 950, pattern1: 80000, pattern2: 90000, type: "pattern", enabled: true, enabled: true },          //+
            { priceNotif: 600, priceBuy: 975, pattern1: 90000, pattern2: 95000, type: "pattern", enabled: true, enabled: true },          //+                    
            { priceNotif: 675, priceBuy: 1000, pattern1: 95000, pattern2: 100000, type: "pattern", enabled: true, enabled: true }],       //+
        "Charm | Semi-Precious": [
            { priceNotif: 2100, priceBuy: 3600, pattern1: 0, pattern2: 10000, type: "pattern", enabled: true },            //+
            { priceNotif: 2050, priceBuy: 3200, pattern1: 85000, pattern2: 90000, type: "pattern", enabled: true },        //+
            { priceNotif: 2150, priceBuy: 3500, pattern1: 90000, pattern2: 95000, type: "pattern", enabled: true },        //+
            { priceNotif: 2700, priceBuy: 4000, pattern1: 95000, pattern2: 100000, type: "pattern", enabled: true }],      //+
        "Charm | Baby Karat T": [
            { priceNotif: 2800, priceBuy: 4400, pattern1: 60000, pattern2: 90000, type: "pattern", enabled: true },        //+
            { priceNotif: 3050, priceBuy: 4700, pattern1: 90000, pattern2: 100000, type: "pattern", enabled: true }],      //+
        "Charm | Baby Karat CT": [
            { priceNotif: 1400, priceBuy: 2300, pattern1: 75000, pattern2: 90000, type: "pattern", enabled: true },        //+
            { priceNotif: 1650, priceBuy: 2900, pattern1: 90000, pattern2: 100000, type: "pattern", enabled: true }],      //+

        "Charm | Pinch O' Salt": [
            { priceNotif: 50, priceBuy: 80, pattern1: 0, pattern2: 3000, type: "pattern", enabled: true }],               //+ (150 steam)
        "Charm | Hot Sauce": [
            { priceNotif: 50, priceBuy: 70, pattern1: 0, pattern2: 10000, type: "pattern", enabled: true }],               //+
        "Charm | Lil' SAS": [
            { priceNotif: 333, priceBuy: 375, pattern1: 0, pattern2: 2000, type: "pattern", enabled: true }],              //+
        "Charm | Lil' Sandy": [
            { priceNotif: 200, priceBuy: 260, pattern1: 0, pattern2: 2500, type: "pattern", enabled: true },               //+ (300 steam)
            { priceNotif: 125, priceBuy: 175, pattern1: 95000, pattern2: 100000, type: "pattern", enabled: true }],        //+ (220 steam)
        "Charm | Lil' Whiskers": [
             {priceNotif:160,   priceBuy:190,   pattern1:0,     pattern2:5000,    type:"pattern"},          //
             {priceNotif:120,   priceBuy:190,   pattern1:20000, pattern2:25000,    type:"pattern"},         //         0-55000 +20р бафф стоят       95-100к +30р
             {priceNotif:0,   priceBuy:190,   pattern1:30000, pattern2:55000,    type:"pattern"}            //
              ],       
        "Charm | Chicken Lil'": [
            { priceNotif: 160, priceBuy: 250, pattern1: 0, pattern2: 4000, type: "pattern", enabled: true },               //+  160 250
            { priceNotif: 150, priceBuy: 225, pattern1:45000, pattern2:55000,    type:"pattern"}],          //+
        "Charm | Lil' Monster": [
            { priceNotif: 660, priceBuy: 950, pattern1: 0, pattern2: 4000, type: "pattern", enabled: true },               //+
            { priceNotif: 520, priceBuy: 950, pattern1: 90000, pattern2: 100000, type: "pattern", enabled: true }],        //+
         "Charm | Hot Wurst": [
             { priceNotif: 1800, priceBuy: 2950, pattern1: 95000, pattern2: 100000, type: "pattern", enabled: true }],     //+
        "Charm | Hot Howl": [
            { priceNotif: 4700, priceBuy: 7700, pattern1: 0, pattern2: 5000, type: "pattern", enabled: true },             //+
            { priceNotif: 3700, priceBuy: 6700, pattern1: 5000, pattern2: 10000, type: "pattern", enabled: true }],        //+
        "AK-47 | Redline (Field-Tested)": [
            { priceNotif: 4200, priceBuy: 6000, float1: 0.15, float2: 0.18, type: "float", enabled: true },                //+ 7k
            { priceNotif: 3800, priceBuy: 4600, float1: 0.18, float2: 0.21, type: "float", enabled: true }],               //+ 5k
        "AK-47 | B the Monster (Field-Tested)": [
            { priceNotif: 18600, priceBuy: 28800, float1: 0.15, float2: 0.18, type: "float", enabled: true }            // ДО 18500-19000 МАРКЕТ, ПРОСТО СЕЙЧАС % ВЫВОДА +35%
        ],
        "AK-47 | Searing Rage (Field-Tested)": [
            { priceNotif: 270, priceBuy: 405, float1: 0.15, float2: 0.18, type: "float", enabled: true }            
        ],
        "AWP | Crakow! (Field-Tested)": [
            { priceNotif: 3700, priceBuy: 5500, float1: 0.15, float2: 0.18, type: "float", enabled: true }            
        ],
        //"AWP | Printstream (Field-Tested)": [
        //    { priceNotif: 5000, priceBuy: 7800, float1: 0.15, float2: 0.18, type: "float", enabled: true }            
        //],
        "Desert Eagle | Heat Treated (Field-Tested)": [
            { priceNotif: 600, priceBuy: 800, pattern1: 109, pattern2: 109, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 116, pattern2: 116, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 134, pattern2: 134, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 158, pattern2: 158, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 168, pattern2: 168, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 225, pattern2: 225, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 288, pattern2: 288, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 338, pattern2: 338, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 354, pattern2: 354, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 356, pattern2: 356, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 365, pattern2: 365, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 386, pattern2: 386, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 406, pattern2: 406, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 433, pattern2: 433, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 441, pattern2: 441, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 483, pattern2: 483, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 537, pattern2: 537, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 542, pattern2: 542, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 592, pattern2: 592, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 607, pattern2: 607, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 611, pattern2: 611, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 651, pattern2: 651, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 668, pattern2: 668, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 673, pattern2: 673, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 696, pattern2: 696, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 730, pattern2: 730, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 820, pattern2: 820, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 846, pattern2: 846, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 856, pattern2: 856, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 876, pattern2: 876, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 882, pattern2: 882, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 898, pattern2: 898, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 900, pattern2: 900, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 942, pattern2: 942, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 946, pattern2: 946, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 951, pattern2: 951, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 953, pattern2: 953, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 998, pattern2: 998, type: "pattern", enabled: true },
            { priceNotif: 600, priceBuy: 800, pattern1: 764, pattern2: 764, type: "pattern", enabled: true },

            { priceNotif: 4000, priceBuy: 4000, pattern1: 16, pattern2: 16, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 48, pattern2: 48, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 66, pattern2: 66, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 67, pattern2: 67, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 96, pattern2: 96, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 111, pattern2: 111, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 117, pattern2: 117, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 159, pattern2: 159, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 259, pattern2: 259, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 263, pattern2: 263, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 273, pattern2: 273, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 297, pattern2: 297, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 308, pattern2: 308, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 321, pattern2: 321, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 324, pattern2: 324, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 341, pattern2: 341, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 347, pattern2: 347, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 263, pattern2: 263, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 370, pattern2: 370, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 426, pattern2: 426, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 461, pattern2: 461, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 482, pattern2: 482, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 517, pattern2: 517, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 530, pattern2: 530, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 567, pattern2: 567, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 587, pattern2: 587, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 674, pattern2: 674, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 723, pattern2: 723, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 772, pattern2: 772, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 781, pattern2: 781, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 790, pattern2: 790, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 792, pattern2: 792, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 843, pattern2: 843, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 880, pattern2: 880, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 885, pattern2: 885, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 904, pattern2: 904, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 948, pattern2: 948, type: "pattern", enabled: true },
            { priceNotif: 4000, priceBuy: 4000, pattern1: 990, pattern2: 990, type: "pattern", enabled: true }],
        "Desert Eagle | Heat Treated (Battle-Scarred)": [
            { priceNotif: 250, priceBuy: 300, pattern1: 109, pattern2: 109, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 116, pattern2: 116, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 134, pattern2: 134, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 158, pattern2: 158, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 168, pattern2: 168, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 225, pattern2: 225, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 288, pattern2: 288, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 338, pattern2: 338, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 354, pattern2: 354, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 356, pattern2: 356, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 365, pattern2: 365, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 386, pattern2: 386, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 406, pattern2: 406, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 433, pattern2: 433, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 441, pattern2: 441, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 483, pattern2: 483, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 537, pattern2: 537, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 542, pattern2: 542, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 592, pattern2: 592, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 607, pattern2: 607, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 611, pattern2: 611, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 651, pattern2: 651, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 668, pattern2: 668, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 673, pattern2: 673, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 696, pattern2: 696, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 730, pattern2: 730, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 820, pattern2: 820, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 846, pattern2: 846, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 856, pattern2: 856, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 876, pattern2: 876, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 882, pattern2: 882, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 898, pattern2: 898, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 900, pattern2: 900, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 942, pattern2: 942, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 946, pattern2: 946, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 951, pattern2: 951, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 953, pattern2: 953, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 998, pattern2: 998, type: "pattern", enabled: true },
            { priceNotif: 250, priceBuy: 300, pattern1: 764, pattern2: 764, type: "pattern", enabled: true },

            { priceNotif: 2000, priceBuy: 2500, pattern1: 16, pattern2: 16, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 48, pattern2: 48, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 66, pattern2: 66, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 67, pattern2: 67, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 96, pattern2: 96, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 111, pattern2: 111, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 117, pattern2: 117, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 159, pattern2: 159, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 259, pattern2: 259, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 263, pattern2: 263, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 273, pattern2: 273, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 297, pattern2: 297, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 308, pattern2: 308, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 321, pattern2: 321, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 324, pattern2: 324, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 341, pattern2: 341, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 347, pattern2: 347, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 263, pattern2: 263, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 370, pattern2: 370, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 426, pattern2: 426, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 461, pattern2: 461, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 482, pattern2: 482, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 517, pattern2: 517, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 530, pattern2: 530, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 567, pattern2: 567, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 587, pattern2: 587, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 674, pattern2: 674, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 723, pattern2: 723, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 772, pattern2: 772, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 781, pattern2: 781, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 790, pattern2: 790, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 792, pattern2: 792, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 843, pattern2: 843, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 880, pattern2: 880, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 885, pattern2: 885, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 904, pattern2: 904, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 948, pattern2: 948, type: "pattern", enabled: true },
            { priceNotif: 2000, priceBuy: 2500, pattern1: 990, pattern2: 990, type: "pattern", enabled: true }],
        "Desert Eagle | Heat Treated (Well-Worn)": [
            { priceNotif: 450, priceBuy: 500, pattern1: 109, pattern2: 109, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 116, pattern2: 116, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 134, pattern2: 134, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 158, pattern2: 158, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 168, pattern2: 168, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 225, pattern2: 225, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 288, pattern2: 288, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 338, pattern2: 338, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 354, pattern2: 354, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 356, pattern2: 356, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 365, pattern2: 365, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 386, pattern2: 386, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 406, pattern2: 406, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 433, pattern2: 433, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 441, pattern2: 441, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 483, pattern2: 483, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 537, pattern2: 537, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 542, pattern2: 542, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 592, pattern2: 592, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 607, pattern2: 607, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 611, pattern2: 611, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 651, pattern2: 651, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 668, pattern2: 668, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 673, pattern2: 673, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 696, pattern2: 696, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 730, pattern2: 730, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 820, pattern2: 820, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 846, pattern2: 846, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 856, pattern2: 856, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 876, pattern2: 876, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 882, pattern2: 882, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 898, pattern2: 898, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 900, pattern2: 900, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 942, pattern2: 942, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 946, pattern2: 946, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 951, pattern2: 951, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 953, pattern2: 953, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 998, pattern2: 998, type: "pattern", enabled: true },
            { priceNotif: 450, priceBuy: 500, pattern1: 764, pattern2: 764, type: "pattern", enabled: true },

            { priceNotif: 2500, priceBuy: 3000, pattern1: 16, pattern2: 16, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 48, pattern2: 48, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 66, pattern2: 66, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 67, pattern2: 67, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 96, pattern2: 96, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 111, pattern2: 111, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 117, pattern2: 117, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 159, pattern2: 159, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 259, pattern2: 259, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 263, pattern2: 263, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 273, pattern2: 273, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 297, pattern2: 297, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 308, pattern2: 308, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 321, pattern2: 321, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 324, pattern2: 324, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 341, pattern2: 341, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 347, pattern2: 347, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 263, pattern2: 263, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 370, pattern2: 370, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 426, pattern2: 426, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 461, pattern2: 461, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 482, pattern2: 482, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 517, pattern2: 517, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 530, pattern2: 530, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 567, pattern2: 567, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 587, pattern2: 587, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 674, pattern2: 674, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 723, pattern2: 723, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 772, pattern2: 772, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 781, pattern2: 781, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 790, pattern2: 790, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 792, pattern2: 792, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 843, pattern2: 843, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 880, pattern2: 880, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 885, pattern2: 885, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 904, pattern2: 904, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 948, pattern2: 948, type: "pattern", enabled: true },
            { priceNotif: 2500, priceBuy: 3000, pattern1: 990, pattern2: 990, type: "pattern", enabled: true }],
};

export const BALANCE = 10000000
export const PERCENT_OUT = 30
export const SKIP_PRICE = 100

export const BLACKLIST = [/* ваш blacklist */]
export const BLACKLIST_FE = [/* ваш blacklist FE */]