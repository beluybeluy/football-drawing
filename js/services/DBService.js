var nationalTeams = ["Spain", "Germany", "Brasil", "Argentina", "France", "Portugal", "Belgium", "Italy", "England", "Netherlands", "Uruguay"];
var teamsHigh = [];
var teamsMedium = [];
var teamsAll = [];
var teamsNational = [];
var teams = [
   {
      name: "Manchester United"
      , level: "high"
      , country: "England"
      , src: "ManchesterUnited.png"
      , type: "club"
      , liga: "Barclays PL"
      , version: ["fifa 16, fifa 17"]
}
    , {
      name: "Real Madrid"
      , level: "high"
      , country: "Spain"
      , src: "RealMadrid.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
}
    , {
      name: "PSG"
      , level: "high"
      , country: "France"
      , src: "PSG.png"
      , type: "club"
      , liga: "Ligue 1"
      , version: ["fifa 16, fifa 17"]
}, {
      name: "Manchester City"
      , level: "high"
      , country: "England"
      , src: "ManchesterCiti.png"
      , type: "club"
      , liga: "Barclays PL"
      , version: ["fifa 16, fifa 17"]
}
    , {
      name: "Barcelona"
      , level: "high"
      , country: "Spain"
      , src: "Barcelona.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
}, {
      name: "Arsenal"
      , level: "high"
      , country: "England"
      , src: "Arsenal.png"
      , type: "club"
      , liga: "Barclays PL"
      , version: ["fifa 16, fifa 17"]
}
    , {
      name: "Borussia Dortmund"
      , level: "high"
      , country: "Germany"
      , src: "BorussiaDortmund.png"
      , type: "club"
      , liga: "Bundesliga"
      , version: ["fifa 16, fifa 17"]
}
    , {
      name: "Athletico Madrid"
      , level: "high"
      , country: "Spain"
      , src: "AthleticoMadrid.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
}
    , {
      name: "Chelsea"
      , level: "high"
      , country: "England"
      , src: "Chelsea.png"
      , type: "club"
      , liga: "Barclays PL"
      , version: ["fifa 16, fifa 17"]
}
    , {
      name: "Juventus"
      , level: "high"
      , country: "Italy"
      , src: "Juventus.png"
      , type: "club"
      , liga: "Seria A"
      , version: ["fifa 16, fifa 17"]
}
    , {
      name: "Bayern Munich"
      , level: "high"
      , country: "Germany"
      , src: "BayernMunich.png"
      , type: "club"
      , liga: "Bundesliga"
      , version: ["fifa 16, fifa 17"]
}
    , {
      name: "Liverpool"
      , level: "high"
      , country: "England"
      , src: "Liverpool.png"
      , type: "club"
      , liga: "Barclays PL"
      , version: ["fifa 16, fifa 17"]
}
   , {
      name: "Valencia"
      , level: "medium"
      , country: "Spain"
      , src: "Valencia.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
}
   , {
      name: "Napoli"
      , level: "medium"
      , country: "Italy"
      , src: "Napoli.png"
      , type: "club"
      , liga: "Seria A"
      , version: ["fifa 16, fifa 17"]
}
   , {
      name: "PSV"
      , level: "medium"
      , country: "Netherland"
      , src: "PSV.png"
      , type: "club"
}
   , {
      name: "River Plate"
      , level: "medium"
      , country: "Argentina"
      , src: "RiverPlate.png"
      , type: "club"
   , }
   , {
      name: "Tottenham"
      , level: "medium"
      , country: "England"
      , src: "Tottenham.png"
      , type: "club"
      , liga: "Barclays PL"
}
   , {
      name: "Roma"
      , level: "medium"
      , country: "Italy"
      , src: "Roma.png"
      , type: "club"
      , liga: "Seria A"
}, {
      name: "Shakhtar Donetsk"
      , level: "medium"
      , country: "Ukraine"
      , src: "ShakhtarDonetsk.png"
      , type: "club"
}
   , {
      name: "Braga"
      , level: "medium"
      , country: "Portugal"
      , src: "Braga.png"
      , type: "club"
      , liga: "Liga NOS"
}
   , {
      name: "Feyenoord"
      , level: "medium"
      , country: "Netherlands"
      , src: "Feyenoord.png"
      , type: "club"
}
   , {
      name: "Sevilla"
      , level: "medium"
      , country: "Spain"
      , src: "Sevilla.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
}
   , {
      name: "Athletico Mineiro"
      , level: "medium"
      , country: "Brazil"
      , src: "AthleticoMineiro.png"
      , type: "club"
}
   , {
      name: "Villareal"
      , level: "medium"
      , country: "Spain"
      , src: "Villareal.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
}
   , {
      name: "Bayer04"
      , level: "medium"
      , country: "Germany"
      , src: "Bayer04.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
   , {
      name: "Anderlecht"
      , level: "medium"
      , country: "Belgium"
      , src: "Anderlecht.png"
      , type: "club"
      , liga: "Pro League"
   , }
   , {
      name: "Galatasaray"
      , level: "medium"
      , country: "Turkey"
      , src: "Galatasaray.png"
      , type: "club"
      , liga: "Süper Lig"
   , }
   , {
      name: "Wolfsburg"
      , level: "medium"
      , country: "Germany"
      , src: "Wolfsburg.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
   , {
      name: "Inter"
      , level: "medium"
      , country: "Italy"
      , src: "Inter.png"
      , type: "club"
      , liga: "Seria A"
   , }
   , {
      name: "Athletic Bilbao"
      , level: "medium"
      , country: "Spain"
      , src: "AthleticBilbao.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
   , }
   , {
      name: "Benfica"
      , level: "medium"
      , country: "Portugal"
      , src: "Benfica.png"
      , type: "club"
      , liga: "Liga NOS"
   , }
     , {
      name: "Celta Vigo"
      , level: "medium"
      , country: "Spain"
      , src: "CeltaVigo.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
   , }
   , {
      name: "Olympiakos"
      , level: "medium"
      , country: "Greece"
      , src: "Olympiakos.png"
      , type: "club"
   , }
   , {
      name: "Sporting"
      , level: "medium"
      , country: "Portugal"
      , src: "Sporting.png"
      , type: "club"
      , liga: "Liga NOS"
   , }
   , {
      name: "Shalke04"
      , level: "medium"
      , country: "Germany"
      , src: "Shalke04.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
   , {
      name: "Grêmio"
      , level: "medium"
      , country: "Brazil"
      , src: "Grêmio.png"
      , type: "club"
   , }
   , {
      name: "Milan"
      , level: "medium"
      , country: "Italy"
      , src: "Milan.png"
      , type: "club"
      , liga: "Seria A"
   , }
        , {
      name: "Real Sociedad"
      , level: "medium"
      , country: "Spain"
      , src: "RealSociedad.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
   , }
   , {
      name: "Everton"
      , level: "medium"
      , country: "England"
      , src: "Everton.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
   , {
      name: "Stoke City"
      , level: "medium"
      , country: "England"
      , src: "StokeSity.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
   , {
      name: "Lazio"
      , level: "medium"
      , country: "Italy"
      , src: "Lazio.png"
      , type: "club"
      , liga: "Seria A"
   , }
   , {
      name: "FC Porto"
      , level: "medium"
      , country: "Portugal"
      , src: "Porto.png"
      , type: "club"
      , liga: "Liga NOS"
   , }
   , {
      name: "Borussia M'gladbach"
      , level: "medium"
      , country: "Germany"
      , src: "BorussiaMgladbach.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
   , {
      name: "Beşiktaş"
      , level: "medium"
      , country: "Turkey"
      , src: "Besiktas.png"
      , type: "club"
      , liga: "Süper Lig"
   , }
   , {
      name: "Marseille"
      , level: "medium"
      , country: "France"
      , src: "Marseille.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
   , {
      name: "Fluminense"
      , level: "medium"
      , country: "Brazil"
      , src: "Fluminense.png"
      , type: "club"
   , }
   , {
      name: "Fenerbahçe"
      , level: "medium"
      , country: "Turkey"
      , src: "Fenerbahce.png"
      , type: "club"
      , liga: "Süper Lig"
   , }
   , {
      name: "Fiorentina"
      , level: "medium"
      , country: "Italy"
      , src: "Fiorentina.png"
      , type: "club"
      , liga: "Seria A"
   , }
          , {
      name: "CA Osasuna"
      , level: "medium"
      , country: "Spain"
      , src: "Osasuna.png"
      , type: "club"
      , liga: "Liga BBVA"
   , }
   , {
      name: "AS Monako"
      , level: "medium"
      , country: "France"
      , src: "Monako.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
//   , {
//      name: "Stuttgart"
//      , level: "medium"
//      , country: "Germany"
//      , src: "Stuttgart.png"
//      , type: "club"
//      , liga: "Bundesliga"
//      , version: ["fifa 16"]
//   , }
   , {
      name: "Lyon"
      , level: "medium"
      , country: "France"
      , src: "Lyon.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
   , {
      name: "Leicester City"
      , level: "medium"
      , country: "England"
      , src: "LeicesterCity.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
   , {
      name: "Crystal Palace"
      , level: "medium"
      , country: "England"
      , src: "CrystalPalace.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
   , {
      name: "Udinese"
      , level: "medium"
      , country: "Italy"
      , src: "Udinese.png"
      , type: "club"
      , liga: "Seria A"
   , }
//   , {
//      name: "Newcastle"
//      , level: "medium"
//      , country: "England"
//      , src: "Newcastle.png"
//      , type: "club"
//      , liga: "Barclays PL"
//      , version: ["fifa 16"]
//   , }
      , {
      name: "OGC Nice"
      , level: "medium"
      , country: "France"
      , src: "OGCNice.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
   , {
      name: "Ajax"
      , level: "medium"
      , country: "Netherlands"
      , src: "Ajax.png"
      , type: "club"
   , }
   , {
      name: "Werder Bremen"
      , level: "medium"
      , country: "Germany"
      , src: "WerderBremen.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
   , {
      name: "Boca Juniors"
      , level: "medium"
      , country: "Argentina"
      , src: "BocaJuniors.png"
      , type: "club"
   , }
   , {
      name: "West Ham Utd"
      , level: "medium"
      , country: "England"
      , src: "WestHamUtd.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
    , {
      name: "Real Betis"
      , level: "medium"
      , country: "Spain"
      , src: "RealBetis.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
   , }
       , {
      name: "Swansea City"
      , level: "medium"
      , country: "England"
      , src: "SwanseaCity.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
        , {
      name: "Torino"
      , level: "medium"
      , country: "Italy"
      , src: "Torino.png"
      , type: "club"
      , liga: "Seria A"
   , }
   , {
      name: "RCD Espanyol"
      , level: "medium"
      , country: "Spain"
      , src: "RCDEspanyol.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
   , }

     , {
      name: "FC Köln"
      , level: "medium"
      , country: "Germany"
      , src: "FCKoln.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
   , {
      name: "Southampton"
      , level: "medium"
      , country: "England"
      , src: "Southampton.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
    , {
      name: "Watford"
      , level: "medium"
      , country: "England"
      , src: "Watford.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
   , {
      name: "Las Palmas"
      , level: "medium"
      , country: "Spain"
      , src: "LasPalmas.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
   , }
   , {
      name: "Hertha BSC"
      , level: "medium"
      , country: "Germany"
      , src: "HerthaBSC.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
    , {
      name: "Málaga CF"
      , level: "medium"
      , country: "Spain"
      , src: "MalagaCF.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
   , }
   , {
      name: "1899 Hoffenheim"
      , level: "medium"
      , country: "Germany"
      , src: "1899Hoffenheim.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
   , {
      name: "West Bromwich"
      , level: "medium"
      , country: "England"
      , src: "WestBromwich.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
       , {
      name: "SD Eibar"
      , level: "medium"
      , country: "Spain"
      , src: "SDEibar.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
   , }
   , {
      name: "FC Augsburg"
      , level: "medium"
      , country: "Germany"
      , src: "FCAugsburg.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
   , {
      name: "SC Bastia"
      , level: "medium"
      , country: "France"
      , src: "SCBastia.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
    , {
      name: "Sunderland"
      , level: "medium"
      , country: "England"
      , src: "Sunderland.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
    , {
      name: "Angers SCO"
      , level: "medium"
      , country: "France"
      , src: "AngersSCO.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
      , {
      name: "RC Deportivo"
      , level: "medium"
      , country: "Spain"
      , src: "RCDeportivo.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 16, fifa 17"]
   , }
          , {
      name: "Sassuolo"
      , level: "medium"
      , country: "Italy"
      , src: "Sassuolo.png"
      , type: "club"
      , liga: "Seria A"
   , }
    , {
      name: "FSV Mainz 05"
      , level: "medium"
      , country: "Germany"
      , src: "FSVMainz05.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
   , {
      name: "Chievo Verona"
      , level: "medium"
      , country: "Italy"
      , src: "ChievoVerona.png"
      , type: "club"
      , liga: "Seria A"
   , }
 , {
      name: "AS Saint-Étienne"
      , level: "medium"
      , country: "France"
      , src: "ASSaint-Etienne.png"
      , type: "club"
      , liga: "Ligue 1"
   , }

      , {
      name: "Eint. Frankfurt"
      , level: "medium"
      , country: "Germany"
      , src: "Frankfurt.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
    , {
      name: "AS Nancy"
      , level: "medium"
      , country: "France"
      , src: "ASNancy.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
      , {
      name: "Middlesbrough"
      , level: "medium"
      , country: "England"
      , src: "Middlesbrough.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
     , {
      name: "Club Brugge"
      , level: "medium"
      , country: "Belgium"
      , src: "ClubBrugge.png"
      , type: "club"
      , liga: "Pro League"
   , }
    , {
      name: "SM Caen"
      , level: "medium"
      , country: "France"
      , src: "SMCaen.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
   , {
      name: "Giron. Bordeaux"
      , level: "medium"
      , country: "France"
      , src: "Bordeaux.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
     , {
      name: "Sampdoria"
      , level: "medium"
      , country: "Italy"
      , src: "Sampdoria.png"
      , type: "club"
      , liga: "Seria A"
   , }
     , {
      name: "Stade Rennais"
      , level: "medium"
      , country: "France"
      , src: "StadeRennais.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
        , {
      name: "Atalanta"
      , level: "medium"
      , country: "Italy"
      , src: "Atalanta.png"
      , type: "club"
      , liga: "Seria A"
   , }
         , {
      name: "Deport. Alavés"
      , level: "medium"
      , country: "Spain"
      , src: "Alaves.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 17"]
   , }
    , {
      name: "FC Metz"
      , level: "medium"
      , country: "France"
      , src: "FCMetz.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
       , {
      name: "Hull City"
      , level: "medium"
      , country: "England"
      , src: "HullCity.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
       , {
      name: "Bologna"
      , level: "medium"
      , country: "Italy"
      , src: "Bologna.png"
      , type: "club"
      , liga: "Seria A"
   , }
     , {
      name: "LOSC Lille"
      , level: "medium"
      , country: "France"
      , src: "LOSCLille.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
         , {
      name: "Genoa"
      , level: "medium"
      , country: "Italy"
      , src: "Genoa.png"
      , type: "club"
      , liga: "Seria A"
   , }
        , {
      name: "Hamburger SV"
      , level: "medium"
      , country: "Germany"
      , src: "HamburgerSV.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
   , {
      name: "FC Nantes"
      , level: "medium"
      , country: "France"
      , src: "FCNantes.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
        , {
      name: "Crotone"
      , level: "medium"
      , country: "Italy"
      , src: "Crotone.png"
      , type: "club"
      , liga: "Seria A"
   , }
           , {
      name: "CD Leganés"
      , level: "medium"
      , country: "Spain"
      , src: "CDLeganes.png"
      , type: "club"
      , liga: "Liga BBVA"
      , version: ["fifa 17"]
   , }
          , {
      name: "FC Basel"
      , level: "medium"
      , country: "Spain"
      , src: "FCBasel.png"
      , type: "club"
      , liga: "Raiffeisen SL"
   , }
//          , {
//      name: "Levante UD"
//      , level: "medium"
//      , country: "Spain"
//      , src: "LevanteUD.png"
//      , type: "club"
//      , liga: "Liga BBVA"
//      , version: ["fifa 16"]
//   , }
       , {
      name: "EA Guingamp"
      , level: "medium"
      , country: "France"
      , src: "EAGuingamp.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
       , {
      name: "Pescara"
      , level: "medium"
      , country: "Italy"
      , src: "Pescara.png"
      , type: "club"
      , liga: "Seria A"
   , }
      , {
      name: "FC Ingolstadt"
      , level: "medium"
      , country: "Germany"
      , src: "FCIngolstadt.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
       , {
      name: "Toulouse FC"
      , level: "medium"
      , country: "France"
      , src: "ToulouseFC.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
             , {
      name: "SV Darmstadt"
      , level: "medium"
      , country: "Germany"
      , src: "SVDarmstadt.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
        , {
      name: "Palermo"
      , level: "medium"
      , country: "Italy"
      , src: "Palermo.png"
      , type: "club"
      , liga: "Seria A"
   , }
          , {
      name: "Sporting Gijón"
      , level: "medium"
      , country: "Spain"
      , src: "SportingGijon.png"
      , type: "club"
      , liga: "Liga BBVA"
   , }
          , {
      name: "RB Leipzig"
      , level: "medium"
      , country: "Germany"
      , src: "RBLeipzig.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
        , {
      name: "Bournemouth"
      , level: "medium"
      , country: "England"
      , src: "Bournemouth.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
          , {
      name: "Trabzonspor"
      , level: "medium"
      , country: "Turkey"
      , src: "Trabzonspor.png"
      , type: "club"
      , liga: "Süper Lig"
   , }
       , {
      name: "Empoli"
      , level: "medium"
      , country: "Italy"
      , src: "Empoli.png"
      , type: "club"
      , liga: "Seria A"
   , }
    , {
      name: "Montpellier HSC"
      , level: "medium"
      , country: "France"
      , src: "MontpellierHSC.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
          , {
      name: "Burnley"
      , level: "medium"
      , country: "England"
      , src: "Burnley.png"
      , type: "club"
      , liga: "Barclays PL"
   , }
           , {
      name: "Granada CF"
      , level: "medium"
      , country: "Spain"
      , src: "Granada.png"
      , type: "club"
      , liga: "Liga BBVA"
   , }
      , {
      name: "FC Lorient"
      , level: "medium"
      , country: "France"
      , src: "FCLorient.png"
      , type: "club"
      , liga: "Ligue 1"
   , }
          , {
      name: "SC Freiburg"
      , level: "medium"
      , country: "Germany"
      , src: "SCFreiburg.png"
      , type: "club"
      , liga: "Bundesliga"
   , }
      , {
      name: "Cagliari"
      , level: "medium"
      , country: "Italy"
      , src: "Cagliari.png"
      , type: "club"
      , liga: "Seria A"
   , }
      , {
      name: "Dijon FCO"
      , level: "medium"
      , country: "France"
      , src: "DijonFCO.png"
      , type: "club"
      , liga: "Ligue 1"
   , }

//   , {
//      name: "Spain"
//         //      , level: "medium"
//         //      , country: "England"
//         
//      , src: "Spain.png"
//      , type: "national"
//   }, {
//      name: "Germany"
//         //      , level: "medium"
//         //      , country: "England"
//         
//      , src: "Germany.png"
//      , type: "national"
//    }
//   , {
//      name: "Brazil"
//         //      , level: "medium"
//         //      , country: "England"
//         
//      , src: "Brazil.png"
//      , type: "national"
//    }, {
//      name: "Argentina"
//         //      , level: "medium"
//         //      , country: "England"
//         
//      , src: "Argentina.png"
//      , type: "national"
//    }
//   , {
//      name: "France"
//         //      , level: "medium"
//         //      , country: "England"
//         
//      , src: "France.png"
//      , type: "national"
//    }, {
//      name: "Portugal"
//         //      , level: "medium"
//         //      , country: "England"
//         
//      , src: "Portugal.png"
//      , type: "national"
//    }
//   , {
//      name: "Belgium"
//         //      , level: "medium"
//         //      , country: "England"
//         
//      , src: "Belgium.png"
//      , type: "national"
//    }, {
//      name: "Italy"
//         //      , level: "medium"
//         //      , country: "England"
//         
//      , src: "Italy.png"
//      , type: "national"
//    }
//, {
//      name: "England"
//         //      , level: "medium"
//         //      , country: "England"
//         
//      , src: "England.png"
//      , type: "national"
//    }
//   , {
//      name: "Netherlands"
//         //      , level: "medium"
//         //      , country: "England"
//         
//      , src: "Netherlands.png"
//      , type: "national"
//    }
//   , {
//      name: "Uruguay"
//         //      , level: "medium"
//         //      , country: "England"
//         
//      , src: "Uruguay.png"
//      , type: "national"
//    }
//

];
var allteams = teamsHigh.concat(teamsMedium);
var calendar2Players = [[1, 2], [2, 1]];
var calendar3Players = [[1, 2], [3, 1], [2, 3], [2, 1], [1, 3], [3, 2]];
var calendar4Players = [[1, 2], [3, 4], [4, 1], [2, 3], [2, 4], [1, 3], [4, 2], [3, 1], [1, 4], [3, 2], [4, 3], [2, 1]];
var calendar5Players = [[1, 2], [3, 4], [5, 1], [2, 3], [4, 5], [1, 3], [5, 2], [1, 4], [3, 5], [2, 4], [2, 1], [4, 3], [1, 5], [3, 2], [5, 4], [3, 1], [2, 5], [4, 1], [5, 3], [4, 2]];
var calendar6Players = [[1, 2], [3, 4], [5, 6], [4, 1], [6, 2], [3, 5], [1, 6], [5, 4], [2, 3], [5, 1], [4, 2], [6, 3], [2, 5], [4, 6], [3, 1], [2, 1], [4, 3], [6, 5], [1, 4], [2, 6], [5, 3], [6, 1], [4, 5], [3, 2], [1, 5], [2, 4], [3, 6], [5, 2], [6, 4], [1, 3]];
var calendar7Players = [[1, 2], [3, 4], [5, 6], [7, 1], [2, 3], [4, 5], [6, 7], [1, 3], [5, 2], [7, 4], [6, 1], [2, 4], [3, 5], [7, 2], [4, 1], [6, 3], [5, 7], [2, 6], [1, 5], [6, 4], [3, 7], [2, 1], [4, 3], [6, 5], [1, 7], [3, 2], [5, 4], [7, 6], [3, 1], [2, 5], [4, 7], [1, 6], [4, 2], [5, 3], [2, 7], [1, 4], [3, 6], [7, 5], [6, 2], [5, 1], [4, 6], [7, 3]];
var calendar8Players = [[1, 2], [3, 4], [5, 6], [7, 8], [4, 1], [2, 3], [6, 7], [8, 5], [1, 3], [7, 4], [5, 2], [6, 8], [1, 7], [3, 5], [4, 8], [2, 6], [5, 1], [7, 3], [8, 2], [6, 4], [1, 8], [4, 2], [5, 7], [3, 6], [7, 2], [6, 1], [8, 3], [4, 5], [2, 1], [4, 3], [6, 5], [8, 7], [1, 4], [3, 2], [7, 6], [5, 8], [3, 1], [4, 7], [2, 5], [8, 6], [7, 1], [5, 3], [8, 4], [6, 2], [1, 5], [3, 7], [2, 8], [4, 6], [8, 1], [2, 4], [7, 5], [6, 3], [2, 7], [1, 6], [3, 8], [5, 4]];
app.factory("DBService", function () {
   return {
      //Creating array for Strong Teams
      highClubs: function () {
         for (var i = 0; i < teams.length; i++) {
            if (teams[i].level == "high") {
               teamsHigh.push(teams[i]);
            }
         }
         return teamsHigh;
      }, //Creating array for Strong Teams
      mediumClubs: function () {
         for (var i = 0; i < teams.length; i++) {
            if (teams[i].level == "medium") {
               teamsMedium.push(teams[i]);
            }
         }
         return teamsMedium;
      }
      , allClubs: function () {
         teamsAll = [];
         for (var i = 0; i < teams.length; i++) {
            if (teams[i].type == "club") {
               teamsAll.push(teams[i]);
            }
         }
         return teamsAll;
      }
      , national: function () {
         for (var i = 0; i < teams.length; i++) {
            if (teams[i].type == "national") {
               teamsNational.push(teams[i]);
            }
         }
         return teamsNational;
      }, //функція рандомних чисел
      randNum: function (min, max) {
         var number = Math.round(Math.random() * (max - min) + min);
         return number;
      }
      , calendarFor2: function () {
         return calendar2Players;
      }
      , calendarFor3: function () {
         return calendar3Players;
      }
      , calendarFor4: function () {
         return calendar4Players;
      }
      , calendarFor5: function () {
         return calendar5Players;
      }
      , calendarFor6: function () {
         return calendar6Players;
      }
      , calendarFor7: function () {
         return calendar7Players;
      }
      , calendarFor8: function () {
         return calendar8Players;
      }
      , teamsHigh: function () {
         return teamsHigh;
      }
      , teamsMedium: function () {
         return teamsMedium
      }
      , nationalTeams: function () {
         return nationalTeams;
      }
      , allteams: function () {
         return allteams;
      }
      , teamsStrong: function () {
         return teams;
      }
   }
})
var q = []