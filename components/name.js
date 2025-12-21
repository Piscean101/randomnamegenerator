import { randomNumber } from "./math.js";
export const boyName = [ 
    'Aaron','Aba','Abdul','Abel','Abraham','Abu','Ace','Adam','Adamo','Addison','Adrian','Ahmad','Aiden','Alastor','Albert','Alberto','Alexander','Alfonzo','Ali','Andrew','Andy','Angel','Angelo','Anthony','Antoine','Antonio','Apollo','Archer','Arjun','Arnold','Arshia','Arthur','Artie','Asaph','Ashton','Asmodeus','Aubrey','Augustus','Austin',
    'Bart','Bastion','Benjamin','Bernie','Bilal','Bill','Bishop','Bobby','Bolin','Brendan','Brent','Brian','Brock','Broderick','Brody','Bruce','Bruno','Bryson','Boscoe',
    'Caesar','Caleb','Cain','Calico','Calix','Callum','Calvin','Canaan','Carl','Carlisle','Carlos','Cecil','Chad','Chance','Channing','Charles','Charleston','Charlie','Chester','Cheyanne','Chino','Chris','Christian','Christopher','Chuck','Cicero','Clark','Clarkson','Clay','Clayton','Cleatis','Clement','Clevon','Clifton','Cloud','Clyde','Cody','Colby','Cole','Conan','Connor','Cory','Craig','Curtis','Cyril','Cyrus',
    'Dakota','Dallas','Dale','Damien','Damola','Damon','Danial','Dante','Darian','Darnell','Daryl','Davian','David','Davidson','Davis','Davon','Dayton','Deebo','Dejaun','Delano','Demarco','Demetrius','Dennis','Denzel','Deondre','Derek','Derrick','Desmond','Dewey','Dexter','Dick','Diego','Din','Dmitri','Doc','Dolph','Dominic','Dominico','Donald','Donovan','Draco','Drake','Drevis','Drew','Duncan','Dwayne','Dwight','DyQuell',
    'Easton','Ebi','Edgar','Edward','Eli','Elial','Elijah','Elliot','Ellis','Elon','Elson','Emerson','Emilio','Emmanuel','Emmet','Emory','Enrique','Eric','Esteban','Ethan','Etienne','Eugene','Eustace','Evan','Ezekiel',
    'Farzin','Felix','Fernando','Finn','Finnegan','Flint','Floyd','Fofo','Francis','Francisco','Frank','Frankie','Franz','Fred','Frederick','Fry',
    'Gabor','Gabriel','Garfield','Gary','Gerald','Gerard','Garett','Gaston','Gavin','Genghis','Gerald','Gerrard','Geoffrey','George','Gerogie','Gerald','Geronimo','Giannis','Gibby','Giuseppe','Glen','Gordie','Gordio','Gordon','Graham','Grant','Gregory','Griffith','Grover','Gunther','Gus','Gustav','Gustavo','Guy',
    'Hal','Hans','Harrison','Harry','Harvey','Hassan','Heath','Hector','Henry','Homer','Honest','Horace','Horton','Howard','Huey','Hunter','Hussein','Hutch',
    'Idris','Igor','Ike','Iman','Indigo','Innes','Isaac','Isaiah','Ivan',
    'Jack','Jackson','Jake','Jalen','Jameel','James','Jameson','Jamie','Jaquan','Jared','Jason','Jasper','Jarvis','Javi','Jax','Jay','Jayden','Jean-Pierre','Jeff','Jeffrey','Jeremiah','Jeremy','Jermaine','Jerry','Jesus','Jimmy','Joaquin','Joe','Joey','John','Johnny','Jojo','Jonah','Jonathan','Jordan','Joseph','Joshua','Josiah','Judas','Jules','Julian','Julio','Julius','Junior','Juste','Justice','Justin',
    'Kai','Kalen','Kash','Kane','Kanye','Karim','Keanu','Keenan','Keion','Keith','Ken','Kenji','Kennedy','Kenny','Kevin','Khrishna','Kia','Kiefer','Kiff','Kingsley','Kingston','Kirk','Kit','Kobe','Konstantin','Korir','Kot','Kovu','Kyle',
    'Lamelo','Larry','Lawrence','Lee','Leo','Leonard','Leroy','Liam','Lionel','Loas','Logan','Lonzo','Louis','Lucas','Luther','Lyle','Lyric',
    'Mackenzie','Maestro','Major','Malcolm','Malik','Manning','Manny','Mario','Mark','Marlon','Maroon','Marty','Marvin','Mason','Matheus','Mathias','Matt','Matteo','Matthew','Maui','Maurice','Maury','Maverick','Maximus','Maxwell','Melbourne','Memphis','Micah','Michael','Mickey','Micul','Miguel','Mike','Miles','Milton','Mitchell','Mohammad','Moin','Moises','Mort','Montero','Murphy','Murray','Mustafa','Myron',
    'Nate','Nathan','Nathaniel','Neal','Ned','Nelly','Nelson','Newell','Niall','Nick','Nico','Nigel','Nikita','Nima','Noah','Nolan','Norville','Nydel','Nyle',
    'Olrox','Omar','Orion','Oscar','Oshay','Oswald','Owen','Otto',
    'Panjeet','Pano','Paolo','Pascal','Patrick','Paul','Pavel','Payton','Percival','Percy','Peter','Phil','Phillip','Phineas','Phinis','Phoenix','Piers','Pili','Pilot','Plato','Po','Power','Preach','Preston','Prince',
    'Qasim', 'Quincy','Quinton',
    'Ralph','Rama','Ramon','Ramses','Randall','Randy','Rashad','Ray','Raymond','Raymonte','Reed','Reese','Reginald','Renard','Richard','Richter','Rick','Rico','Rickey','Riley','Rio','Robert','Robin','Rocky','Roderick','Rodney','Rodolfo','Rodrigo','Roger','Roman','Ron','Ronald','Roozbeh','Ross','Roy','Rudolph','Russell','Ryan',
    'Sadam','Salim','Sam','Samuel','Saul','Savros','Sawyer','Scott','Seal','Seamus','Sean','Sergei','Sergio','Seth','Shabba','Shane','Shaquille','Shan','Shane','Shaun','Sheen','Sheldon','Shere','Shiloh','Shohel','Sid','Silas','Simon','Skylar','Snoop','Sokka','Solomon','Sonny','Spencer','Stefan','Stephen','Sterling','Steve','Steven','Stevenson','Stewie','Stuart','Sullivan','Sylvester',
    'Tahjay','Tai','Tanner','Tate','Tenzen','Theo','Theodore','Thomas','Timon','Timothy','Tio','Todd','Todrick','Tom','Tony','Travis','Trent','Trevor','Trevon','Trey','Trip','Tristan','Troy','Truce','Tunde','Tyler','Tyrone','Tyson',
    'Ulisses',
    'Valentine','Vance','Varney','Vernon','Victor','Vox',
    'Walter','Welcome','Wesley','Weston','Wilbur','Wiley','Will','William','Willy','Wilson','Winston','Wolfe','Wolfgang','Woody','Wyatt',
    'Xavier','Xerxes',
    'Yanis','Yevgeny','Yuri',
    'Zachary','Zaid','Zap','Zayn','Zeke','Zion','Zippy','Zuko'
]

export const girlName = [
    'Abigail','Adele','Adriana','Aibileen','Aisan','Aisha','Alba','Alex','Alexandra','Alexis','Alice','Alicia','Alize','Allegra','Allison','Allura','Alyssa','Amala','Amanda','Amani','Amy','Ana','Anabelle','Anastasia','Anaya','Anetra','Angel','Angela','Angelina','Aniston','Anna','Anna Mae','Annie','Apple','April','Ariel','Asami','Ashley','Aubergine','Aubrey','Audrey','August','Augustine','Aurora','Ava','Avacyn','Avery','Aziza','Azula',
    'Barbara','Bailey','Beatrice','Belcalis','Bella','Belladonna','Bernice','Bertha','Bertrand','Beth','Bia','Bianca','Billie','Blair','Blanca','Blanche','Blessing','Blondie','Blythe','Boa','Bonnie','Brandy','Briana','Briel','Bridgette','Brina','Britney','Brooke','Brooklyn',
    'Cady','Caitlyn','Calm','Camilla','Candice','Carly','Carmen','Carmilla','Carol','Caroline','Carla','Carrie','Cat','Caitlyn','Cecilia','Celia','Celie','Celine','Cerebullum','Charian','Charlie','Charlotte','Chastity','Chian','Chichi','Chrisean','Christina','Christine','Ciele','Colby','Colette','Coraline','Cordelia','Corona','Cortana','Celie','Celine','Chaka','Chanel','Channing','Cherry','Cheryl','Chloe','Christina','Christine','Cindy','Claire','Clarissa','Clear','Clementine','Cocoa','Colleen','Connie','Constance','Cordelia','Corinth','Corrine',
    'Dahlia','Dakota','Danica','Daphne','Danielle','Darienne','Darling','Dawn','Deborah','Deena','Deja','Delilah','Delinda','Delores','Delphine','Destiny','Diamond','Diana','Diane','Dijonay','Dita','Dixie','Doja','Dolly','Dominique','Donna','Dorothy','Dreka','Drew',
    'Ebony','Eileen','Eleanor','Elisha','Elizabeth','Ellen','Ellie','Eloise','Elsa','Emily','Emma','Erica','Erin','Erzabet','Esther','Eugenia','Eula','Eve','Evelyn',
    'Faith','Fannita','Fanny','Fantasia','Farrah','Fayette','Felicia','Fiona','Francis','Freida',
    'Gabriella','Gabourey','Gaia','Gail','Gal','Ganyo','Gemma','Genesis','Genie','Georgia','Geraldine','Germaine','Gertrude','Gia','Gianni','Gift','Gina','Ginger','Gladys','Gloria','Grace','Greta','Gretchen','Gwen',
    'Haley','Haliya','Halle','Halsey','Hannah','Happy','Harper','Harriet','Hattie','Hayden','Heather','Heidi','Helen','Henrietta','Hermoine','Hillary','Hilly','Honey','Hope',
    'Illinois','India','Indiana','Iracebeth','Irene','Isabella','Isabelle','Isla','Iman','Ivanka','Ivy','Iyana',
    'Jacqueline','Jade','Jamie','Jan','Janae','Jane','Janet','Janice','Janine','Jaida','Jasmine','Jean','Jeanette','Jennifer','Jessica','Jessie','Jewel','Jillian','Joan','Joanna','Johansson','Jojo','Jolene','Jonbers','Josephine','Joslyn','Jude','Judith','Julia','Juliette','June','Juniper','Juno','Justine',
    'Kahanna','Kaley','Kamala','Karen','Karuna','Katara','Kate','Kathleen','Kathy','Katie','Katrina','Katya','Kaya','Kaylee','Kedijah','Keep','Keisha','Keke','Kelly','Kelsey','Kendall','Kennedy','Kenya','Kerry','Kerry-Ann','Khia','Kiley','Kimberly','Kimmie','Kitty','Konnika','Korra','Kristen','Kylie',
    'Lana','Latrice','Laura','Lauren','Lawrence','Layla','Leah','Leanne','Leeza','Lena','Lenore','Leona','Leonie','Leslie','Libby','Liese','Lily','Lisa','Llorona','Lois','Loni','Lori','Lottie','Loyalty','Lucille','Lucy','Luisa','Lurlene','Lydia','Lynn',
    'Mackenzie','Macy','Madea','Madeline','Madison','Maggie','Mallory','Mandy','Marcia','Margaret','Maria','Mariah','Marilyn','Marina','Marissa','Marjorie','Marla','Marny','Mary','Masha','Malaysia','Matilda','Maury','Maven','Mavis','Mawish','Maxine','May','Maya','Megan','Meka','Melania','Melanie','Melinda','Melody','Mercedes','Mercies','Mia','Michaela','Milan','Miley','Millie','Minnie','Mirabel','Miranda','Missy','Misty','Moana','Moesha','Moira','Molly','Mona','Monae','Monica','Morana','Morgan','Mori','Mulan','Muriel','Musk','Myrna','Myrtle',
    'Nadine','Nadira','Naela','Naija','Nairah','Nairobi','Nan','Nancy','Naomi','Natalia','Natalie','Naturia','Naya','Naysha','Naz','Nedra','Neera','Nelly','Nicki','Nicole','Nina','North','Nyongbella',
    'Octavia','Ofra','Olandria','Olga','Olive','Olivia','Omarosa','Onika',
    'Pacifica','Paige','Pamela','Pan','Paris','Patrice','Patricia','Patsy','Patti','Pauline','Peach','Penelope','Phelps','Phillis','Phoebe','Pi','Polly','Precious','Princess','Priya','Promise','Prudence','Purity',
    'Queen','Queenie','Quinn',
    'Rachel','Rainette','Ramona','Raquel','Raven','Rayvonne','Rebecca','Rebel','Red','Redarys','Regina','Remy','Renee','Resha','Riley','Rita','Rochelle','Rona','Rosa','Rosalie','Rose','Roseline','Rosetta','Roshane','Roslyn','Roxanne','Ruth','Ruthie',
    'Saadia','Sabrina','Sadie','Salem','Sally','Sam','Samantha','Sandy','Sapphire','Sarabi','Sarah','Sasha','Savannah','Savleen','Scarlett','Selena','Serena','Serenity','Shanice','Shannel','Shannon','Shanti','Sharia','Sharon','Sharsha','Shauna','Shea','Sheila','Shelly','Sherry','Shirley','Sidibe','Sienna','Silkie','Simone','Sky','Sloan','Sminty','Sohana','Sonny','Sonya','Sophia','Spankie','Splenda','Sriracha','Stacy','Stallone','Star','Stella','Stevie','Striga','Sue','Sumaya','Summer','Sugar','Suji','Suki','Susan','Suzanne','Sweetie','Sybil','Sydney','Sylvia','Sypha',
    'Talin','Tameka','Tamera','Tanya','Taraji','Tarisai','Tasha','Tatianna','Taylor','Temple','Terri','Tessa','Tia','Tiana','Tiffany','Tina','Toni','Tori','Tova','Tracy','Trina','Trinity','Trisha','Trixie','Trudy','Truth','Tulip','Tyra',
    'Unity','Ursa','Ursula','Ulba',
    'Vagie','Valerie','Vanessa','Vee','Venus','Vicky','Victoria','Victory','Volha',
    'Wanda','Wendy','Whitney','Willow','Wynona',
    'Xenia','Xio',
    'Yoko','Yolanda','Yora','Yvonne',
    'Zoella','Zoey',
]

export const lastName = [
    'Abraham','Adair','Adamol','Addams','Adler','Afualo','Agnon','Agusto','Albani','Allegro','Allen','Ali','Almanzar','Alvarez','Anderson','Andros','Angelou','Antwi','Apple','Aren','Armstrong','Asai','Ashford','Aubertin','Avery','Ayoub',
    'Baga','Bailey','Baker','Ball','Ballo','Barbarelli','Barlowe','Barrett','Baskin','Bassett','Bastion','Bates','Baxter','Beach','Beacon','Beard','Becker','Beckingham','Bell','Bellamy','Belli','Belmont','Belnades','Belsky','Bennett','Benson','Berfield','Bernard','Berry','Bertz','Besselman','Bettany','Bhandari','Bickler','Bidinger','Biles','Birch','Bixby','Blacksmith','Blackson','Blanche','Blonde','Boelter','Brannigan','Braxton','Bonet','Bongino','Boston','Boule','Boyle','Bravo','Briar','Bronson','Brooks','Brown','Burton','Buttigieg',
    'Cabello','Cadelle','Cambridge','Capwell','Carey','Carnegie','Carney','Carothers','Carrington','Carter','Caville','Chalobi','Chamberlain','Chambers','Chanel','Chaney','Chapman','Chatman','Cheeks','Chow','Chrysler','Clarke','Coates','Coin','Colby','Coleman','Colombus','Comey','Cook','Coolidge','Cooper','Colombus','Colt','Conley','Conroy','Cordes','Cordova','Cortez','Cortova','Cosgrove','Coulee','Courtright','Cowell','Craig','Crest','Crocker','Crockett','Cruise','Cruz','Cullen','Cutberth','Cyrus',
    'Danger','Daniels','Darling','Davenport','Davidson','Davis','Dawson','Deitcher','Dejardin','Delaware','Delongpre','DeNeres','Depape','Depot','Deveraux','Devise','Dewitt','Dexter','Diamond','Diaz','Digger','Dinesh','Dion','Dodd','Dotting','Dow','Drake','Dupree','Dutch',
    'Edgar','Edmonton','Edwards','Egger','Elba','Eli','Elrod','Evans',
    'Fargo','Farsi','Fauci','Fence','Fenner','Fletcher','Ferdinand','Fern','Ferrara','Fester','Finch','Finder','Finland','Flenory','Fletcher','Flores','Floyd','Fonda','Fontaine','Forbes','Ford','Forrester','Founder','Fox','French','Fugi','Fuller','Fulmer','Furtado',
    'Gadot','Gaines','Gale','Garrison','Gates','Gaynor','George','Gestor','Gibson','Gigant','Gillies','Glover','Goldman','Gomez','Gonzales','Goode','Goose','Gosling','Goyer','Grandin','Granger','Graves','Greene','Greenwich','Greer','Griffin','Gross','Grouper','Gunn',
    'Hall','Hanoman','Harris','Hartman','Harvey','Hayes','Heart','Hefferman','Heiffenwood','Hernandez','Henson','Higashi','Higgins','Hill','Hilton','Hitchens','Hobbs','Hoffman','Hogan','Holcombe','Hopkins','Horton','Hortua','Hossein','Houston','Howard','Howell','Hubbard','Hudson','Huxley','Huxtable','Huxton',
    'Idris','Iger','Innes','Irwin','Iverson',
    'Jackson','Jacquines','James','Jameson','Jansiz','Jefferson','Jenkins','Jensen','Jetson','Jett','Johnson','Jolie','Jonas','Jonbers','Jones','Jordan','Joyner',
    'Kane','Kapoor','Karen','Kasparian','Kassis','Kaur','Keith','Keller','Kennedy','Kent','Kenworthy','Keys','Khan','Khoury','Kimmel','King','Kingston','Kirk','Kit','Klein','Knicks','Knowles','Kofi','Kong','Kony','Kresley','Kulla','Kumar','Kunis','Kutcher',
    'Lake','Lamothe','Landry','Lane','Langdon','Lange','Lawson','Lenin','Laporte','Lavender','Lepore','Levine','Lewinsky','Lewis','Liason','Lincoln','Lipton','Liu','Lockley','Lofton','Lombardo','Long','Looker','Looter','Lopez','Lourd','Love',
    'MacIntosh','Mackenzie','Madigan','Madolf','Mahmoud','Mammen','Maraj','Markov','Mars','Marsh','Malik','Malone','Mandrake','Mantle','Marquez','Masters','Mateo','Maters','Mathai','Mattel','Maury','Maxwell','Mayers','Mayweather','McAdams','McCurdy','McDonald','McIntyre','Messi','Meyers','Michaels','Milan','Miller','Milton','Minifie','Minogue','Mitsubishi','Monroe','Montana','Monterey','Moore','Morales','Morgan','Morris','Morton','Mosby','Montgomery','Muktar','Mullings','Muniz','Murphy','Musitz','Musk','Musso','Mustafa',
    'Naderi','Nath','Needles','Nelson','Newell','Newsom','Newton','Nguyen','Nichols','Nickson','North','Nunn',
    'Oakley','Obi','O\'brien','Ocean','Ochoa','Okeke','Olsen','Oneal','Ono','Orion','Orwell','Osbourne','Owens','Owusu',
    'Padalecki','Page','Palmer','Pandit','Parekh','Parikh','Parker','Parris','Parton','Pastor','Patel','Patterson','Paulson','Pelosi','Pete','Peters','Peterson','Phillips','Phillis','Pickett','Pierce','Pierre','Piers','Pilot','Pirate','Popescu','Powers','Preacher','Presley','Preston','Private','Pryor',
    'Quan','Qul','Qureshi',
    'Ramani','Ramsey','Ranks','Reagan','Reeves','Relli','Remmington','Reynolds','Rhodes','Rich','Richards','Richter','Riot','Ritz','Rivera','Rivers','Roberts','Robins','Rockefeller','Rockwell','Rodman','Rogan','Rogers','Romanoff','Romanov','Ronaldo','Rosemary','Rossi','Roulet','Rowland','Royes',
    'Saaed','Salam','Saleem','Salvador','Samsung','Sandalis','Sandler','Santos','Satori','Savant','Sawyer','Scone','Seeker','Segal','Senatra','Several','Shaw','Sheikh','Shepherd','Shepley','Shinobi','Shore','Short','Sidibe','Simmons','Sinclair','Singer','Singh','Smith','Snipes','Sivan','Skinner','Solanas','Solas','Solomon','Song','Sordid','Sosa','Speaker','Star','Stark','State','Stentor','Stevens','Stint','Stone','Stough','Streicher','Striker','Struthers','Styles','Summers','Sue','Suresh','Sutherland','Sutra','Sutton','Switcher','Swiss','Sylvester',
    'Tailor','Takahashi','Tanner','Tanuvasa','Tarraban','Tate','Tatum','Taylor','Tennessee','Thatcher','Theodore','Theriault','Thomas','Thompson','Thorne','Three','Thrombey','Tiller','Tilling','Timberland','Tisdale','Toledo','Tolke','Tolur','Torres','Tran','Trooper','Trusket','Tubman','Turner','Tyson',
    'Uqwu','Urban','Uyger','Uzman',
    'Vasili','Vaughan','Velour','Virgin','Voellinger','Von Eschen', 'Von Feldt','Vox',
    'Walker','Walz','Warhol','Washington','Watson','Watts','Webster','Westberg','Westbrooke','Westminster','Walker','Watson','Wayans','Wayland','Weissman','West','Wheeler','White','Wild','Williams','Wilson','Winslet','Winters','Wong','Wonton','Wright',
    'Xing',
    'Yamasaki','Yankee','Yoon','York','Young','Yu',
    'Zanotti','Zaza','Zoeller','Zuckerman'
]

export class RandomNumber {
    constructor(arr) {
        this.number = Math.floor(Math.random()*arr.length);
        return this.number
    }
}

export function RandomName(arr = boyName) {
    return arr[new RandomNumber(arr).number]
}

export class Sample {
    constructor(arr, n) {
        this.returnArray = [];
        for (let i = 0 ; i < n ; i++) {
            this.returnArray.push(arr[new RandomNumber(arr).number]);
        }
    }
}

// console.log("Male Name =>", boyName[new RandomNumber(boyName).number], lastName[new RandomNumber(lastName).number],"\nFemale Name =>", girlName[new RandomNumber(girlName).number], lastName[new RandomNumber(girlName).number]);

export function analytics() {

    let nameLibrary = boyName.concat(girlName, lastName);
    let [boyCount, girlCount, lastCount] = [boyName.length, girlName.length, lastName.length];
    let totalCount = boyCount + girlCount + lastCount;

    let [letterMap, sortedMap] = [new Map, new Map];

    let [sortable, holder] = [[],[]];

    console.log("Boys: ", boyCount,(boyCount/totalCount*100).toFixed(2),'%',
        "\nGirls: ", girlCount,(girlCount/totalCount*100).toFixed(2),'%',
        "\nSurname: ",lastCount,(lastCount/totalCount*100).toFixed(2),'%',
        "\nTotal: ",totalCount);
    
    nameLibrary.forEach(e => {
        let firstLetter = e[0];
        if (!letterMap.has(firstLetter)) { letterMap.set(firstLetter,[]) };
        letterMap.get(firstLetter).push(e);
    });
    
    for (const [key, value] of letterMap.entries()) {
        // console.log(key,[value.length],(value.length/totalCount*100).toFixed(1),'%');
        sortable.push([key,value]);
    }
    
    let sorted = sortable.sort(function(a,b) { return b[1].length - a[1].length });
    
    for (const item of sorted) { sortedMap.set(item[0],item[1]) }

    (function showRank() {
        sorted.forEach((e,i) => {
            let namecount = e[1].length;
            let filter = holder.filter(num => { return num == namecount });
            i -= filter.length;
            holder.push(namecount)
            console.log(e[0],namecount,(namecount/totalCount*100).toFixed(2),'%',`#${i+1}`,'\n');
        })
    })();

}

// analytics();

export function name(first,last) {
    return RandomName(first).concat(' ',RandomName(last))
}