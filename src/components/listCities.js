const listOfCities = {
  ABILENE: 1320,
  ALBUQUERQUE: 1520,
  ALTOONA: 1200,
  AMARILLO: 1445,
  ANTELOPE: 1570,
  APPLETON: 1410,
  "ATLANTA EAST": 1045,
  "ATLANTA NORTH": 1075,
  "ATLANTA SOUTH": 1045,
  "ATLANTA WEST": 1045,
  AUSTIN: 1165,
  ANAHEIM: 1320,
  "ACE - Carson": 1320,
  "ACE - Perris": 1320,
  "Akron-Canton": 1265,
  ANDREWS: 1415,
  Asheville: 1170,
  Ashland: 1515,
  "Avenel New Jersey": 920,
  BAKERSFIELD: 1415,
  BALTIMORE: 1075,
  "BATON ROUGE": 1290,
  BILLINGS: 2250,
  BIRMINGHAM: 1200,
  BOISE: 2100,
  "BOSTON - SHIRLEY": 1170,
  "BOWLING GREEN": 1390,
  BRIDGEPORT: 1045,
  BUCKHANNON: 1450,
  BUFFALO: 1295,
  BURLINGTON: 1265,
  CANDIA: 1200,
  CARTERSVILLE: 1075,
  CASPER: 2190,
  "CENTRAL NEW JERSEY": 920,
  CHAMBERSBURG: 1170,
  CHARLESTON: 1015,
  CHARLOTTE: 1140,
  CHATTANOOGA: 1235,
  "CHICAGO NORTH": 1190,
  "CHICAGO SOUTH": 1190,
  "CHICAGO WEST": 1190,
  "CHINA GROVE": 1110,
  CINCINATTI: 1250,
  CLEARWATER: 1140,
  CLEVELAND: 1265,
  "COLORADO SPRINGS": 1725,
  COLTON: 1350,
  "COLUMBIA MO": 1500,
  COLUMBIA: 1045,
  COLUMBUS: 1250,
  CONCORD: 1140,
  "CORPUS CHRISTI": 1195,
  "CRASHEDTOYS ATLANTA": 1075,
  "CRASHEDTOYS EAST BETHEL": 1440,
  "CRASHEDTOYS MINEEAPOLIS": 1500,
  "CRASHEDTOYS SACRAMENTO": 1540,
  CULPEPER: 1265,
  DALLAS: 1195,
  DANVILLE: 1265,
  DAVENPORT: 1440,
  DAYTON: 1250,
  Denver: 1725,
  "DES MOINES": 1500,
  DETROIT: 1325,
  DOTHAN: 1140,
  DUNDALK: 1110,
  "EAST BAY": 1540,
  "EL PASO": 1445,
  ERIE: 1360,
  EUGENE: 1790,
  EXETER: 1200,
  FARGO: 2000,
  FAYETTEVILLE: 1415,
  FLINT: 1370,
  FONTANA: 1320,
  "FORT PIERCE": 1140,
  "FORT MYERS": 1170,
  "FORT WAYNE": 1195,
  "FORT WORTH NORTH": 1225,
  FREDERICKSBURG: 1265,
  FREMONT: 1540,
  FRESNO: 1510,
  "FT. PIERCE": 1140,
  "FT. WORTH": 1195,
  "GLASSBORO EAST": 950,
  GRAHAM: 1975,
  "GRAND RAPIDS": 1450,
  GREENSBORO: 1140,
  GREENVILLE: 1075,
  GRENADA: 1475,
  "GULF COAST": 1445,
  HAMMOND: 1195,
  HAMPTON: 1265,
  HARRISBURG: 1015,
  HARTFORD: 1015,
  "HAYWARD - DESERT": 1510,
  HAYWARD: 1540,
  HELENA: 2375,
  "HIGH DESERT": 1420,
  "HONOLULU (LIHUE)": 5050,
  HOUSTON: 1040,
  HUNTSVILLE: 1170,
  "IA - CRASHEDTOYS ELDRIDGE": 1500,
  INDIANAPOLIS: 1095,
  IONIA: 1500,
  JACKSON: 1445,
  JACKSONVILLE: 985,
  "KANSAS CITY": 1540,
  KINCHELOE: 1875,
  KNOXVILLE: 1200,
  LAFAYETTE: 1290,
  LANSING: 1450,
  "LAS VEGAS": 1540,
  LAUREL: 1110,
  LEXINGTON: 1045,
  LINCOLN: 1595,
  "LITTLE ROCK": 1415,
  LITTLETON: 1725,
  "LONG BEACH": 1320,
  "LONG ISLAND": 1020,
  LONGVIEW: 1225,
  "LOS ANGELES": 1320,
  LOUISVILLE: 1295,
  LUBBOCK: 1445,
  LUFKIN: 1195,
  LUMBERTON: 1175,
  LYMAN: 1235,
  MACON: 1045,
  MADISON: 1315,
  MANCHESTER: 1200,
  MARTINEZ: 1540,
  MCALLEN: 1290,
  MEBANE: 1140,
  MEMPHIS: 1295,
  METRO: 1110,
  MIAMI: 1200,
  MILWAUKEE: 1540,
  MINNEAPOLIS: 1725,
  MISSOULA: 2600,
  MOBILE: 1200,
  MOCKSVILLE: 1140,
  MONTGOMERY: 1140,
  NASHVILLE: 1235,
  "NEW CASTLE": 1075,
  "NEW ORLEANS": 1290,
  NEWBURGH: 985,
  "NORTH BOSTON": 1170,
  "NORTH CARLESTON": 1020,
  "NORTH HOLLYWOOD": 1385,
  "NORTH SEATTLE": 1975,
  "NORTHERN NEW JERSEY": 920,
  "NORTHERN VIRGINIA": 1265,
  "OKLAHOMA CITY": 1415,
  OMAHA: 1750,
  ORLANDO: 1075,
  PADUCAH: 1295,
  PASCO: 2100,
  PENSACOLA: 1200,
  PEORIA: 1250,
  "PERIAN BASIN": 1445,
  PHILADELPHIA: 985,
  PHOENIX: 1540,
  PITTSBURGH: 1265,
  PORTAGE: 1375,
  PORTLAND: 1820,
  PROVIDENCE: 1200,
  PULASKI: 1265,
  "PUNTA GORDA": 1200,
  PUYALLUP: 1975,
  RALEIGH: 1110,
  "RANCHO CUCAMONGA": 1350,
  RENO: 1725,
  RICHMOND: 1140,
  RIVERSIDE: 1320,
  ROANOKE: 1265,
  ROCHESTER: 1235,
  ROSEDALE: 1075,
  SACRAMENTO: 1540,
  "SALT LAKE CITY": 1790,
  "SAN ANTONIO": 1200,
  "SAN BERNARDINO": 1320,
  "SAN DIEGO": 1415,
  "SAN JOSE": 1540,
  SAVANNAH: 920,
  SCRANTON: 1075,
  SEAFORD: 1075,
  SEATTLE: 1975,
  "SHADY SPRING": 1450,
  SHREVERPORT: 1290,
  SIKESTON: 1435,
  "SIOUX FALLS": 1815,
  "SO SACRAMENTO": 1540,
  SOMERVILLE: 920,
  "SOUTH BEND": 1220,
  "SOUTH BOSTON": 1170,
  "SOUTHERN ILLINOIS": 1250,
  "SOUTHERN NEW JERSEY": 985,
  SPARTANBURG: 1075,
  "SPIECIALTY DIVISION": 1190,
  SPOKANE: 2100,
  SPRINGFIELD: 1565,
  "ST. CLOUD": 1545,
  "ST. LOUIS": 1220,
  SUFFOLK: 1265,
  "SUN VALLEY": 1385,
  SYRACUSE: 1140,
  TALLAHASSEE: 1170,
  TAMPA: 1140,
  TANNER: 1170,
  TAUNTON: 1170,
  TEMPLETON: 1170,
  TIDEWATER: 1200,
  TIFTON: 1265,
  TRENTON: 1045,
  TUCSON: 920,
  TULSA: 1635,
  VALLEJO: 1415,
  "VAN NUYS": 1540,
  WACO: 1350,
  WALTON: 1290,
  WASHINGTON: 1250,
  "WEST PALM BEACH": 1110,
  "WEST WARREN": 1200,
  "WESTERN COLORADO": 1170,
  WHEELING: 2100,
  WICHITA: 1190,
  WILMINGTON: 1170,
  "YORK HAVEN": 1075,
  "YORK SPRINGS": 1075,
}

module.exports = { listOfCities }