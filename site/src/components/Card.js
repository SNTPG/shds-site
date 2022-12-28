import React from 'react';
import Heart from '../assets/decor/heart.png';
import Close from '../assets/decor/close.png';
import Flip from '../assets/decor/flipArrow.png';
import Portrait from './Portrait.js';
const bioData = {
    "ami":
        {
        "age": "17",
        "bio": "The synthetic singer program Demaka has taken the world by storm! Its features are beefy, it can rival anything Vocaloid does, and it's completely free! It's best known for its user-friendly interface that appeals to both beginners and experienced producers, and for its beloved voice bank, Ami! She's even appeared in hologram concerts and interviews as a brand new promotional AI.",
        "birthday": "08-30",
        "branch": "East Asia",
        "coordination": "0",
        "dislikes": "People thinking she wrote her songs, lagging, not being able to eat licorice",
        "extmental": true,
        "extmentalstr": "CPU: +3",
        "extmurder": false,
        "extmurderstr": "",
        "extphys": false,
        "extphysstr": "",
        "fitness": "-1",
        "focus": "+3",
        "forensics": "+1",
        "guts": "-1",
        "height": "170",
        "level": "0",
        "likes": "The music people make with her!, licorice, cute outfits",
        "location": "The Internet",
        "poise": "+2",
        "pronouns": "she/her",
        "username": "Demaka Ami Official",
        "vocation": "Ultimate Singing Program"
        },
    "andrew":
        {
        "age": "18",
        "bio": "A prescient investor, Andrew Maynard Smith made history at the age of 13 as the youngest-ever person to appear on the Forbes 30 Under 30, to which he owes his inclusion to his multi-million investment empire made entirely from petty cash. Accusations of nepotism have ever plagued the young Smith, but his parents categorically deny having any hand in his success, stating that his genius is entirely his own. In the present day, given that he keeps an intensely private life and his tax records are not public, one can only speculate as to the total worth of his assets. If anything's for certain, however, his ability to predict market trends is uncanny, and his outrageous dividends speak for themselves.",
        "birthday": "07-04",
        "branch": "North America",
        "coordination": "-1",
        "dislikes": "Hamburgers, charity, the masses",
        "extmental": true,
        "extmentalstr": "POL: +2",
        "extmurder": false,
        "extmurderstr": "",
        "extphys": false,
        "extphysstr": "",
        "fitness": "-1",
        "focus": "+3",
        "forensics": "-3",
        "guts": "0",
        "height": "193",
        "level": "0",
        "likes": "Oysters, short selling, Michelin 3-star restaurants",
        "location": "New York, NY",
        "poise": "+3",
        "pronouns": "he/him",
        "username": "AMSmith",
        "vocation": "Ult. Hedge Fund Investor"
        },
    "august":
        {
        "age": "18",
        "bio": "\"He approaches his films like a scientist\" - Cineuropa. \"Urbanik renders time in his films in such a unique way, unlike anything the world has seen since Tarkovsky\" - BBC Culture. \"Despite only having one short film and one feature length under his belt, Polish filmmaker Augustyn Urbanik feels like he directs with a breadth of experience beyond his years\" - RogerEbert.com. \"Although his style can seem artistically alienating to the more common, day-by-day filmgoer, the evocative power of his work cannot be understated\" - Entertainment Weekly. \"Urbanik himself comes from a luxurious and privileged background, yet the topics and feelings he explores in his films seem worldly, important, and timeless\" - The Hollywood Reporter. \"His style, which has been described as hands on, liking to be able to control all aspects of the film (it's why he prefers the label \"filmmaker\" over \"director\") is on prominent display in his masterful, genre-bending, futuristic, sci-fi, feature-length film debut Replay\" - NPR.org.",
        "birthday": "07-13",
        "branch": "Europe",
        "coordination": "-1",
        "dislikes": "Losing control, prejudice, being inside for too long",
        "extmental": true,
        "extmentalstr": "LDR: +3",
        "extmurder": true,
        "extmurderstr": "INS: +2",
        "extphys": true,
        "extphysstr": "NRG: +3",
        "fitness": "0",
        "focus": "+2",
        "forensics": "0",
        "guts": "+1",
        "height": "170",
        "level": "0",
        "likes": "Flowers, sweaters, digital watches",
        "location": "Warsaw, Poland",
        "poise": "+3",
        "pronouns": "he/him",
        "username": "filbleufilms",
        "vocation": "Ultimate Filmmaker"
        },
    "avery":
        {
        "age": "16",
        "bio": "Charismatic and spontaneous, Avery is a passionate explorer who shares his findings through the medium of storytelling. He's an expert on plants and wildlife, tirelessly roaming the continent in search of new discoveries.",
        "birthday": "03-20",
        "branch": "North America",
        "coordination": "-1",
        "dislikes": "Seafood, timetables, math",
        "extmental": true,
        "extmentalstr": "NAT: +2",
        "extmurder": false,
        "extmurderstr": "",
        "extphys": false,
        "extphysstr": "",
        "fitness": "+1",
        "focus": "-2",
        "forensics": "0",
        "guts": "-3",
        "height": "165",
        "level": "0",
        "likes": "Toffee, stargazing, musicals",
        "location": "N/A",
        "poise": "+3",
        "pronouns": "he/him",
        "username": "AveryTheGreat",
        "vocation": "Ultimate Explorer"
        },
    "camille":
        {
        "age": "19",
        "bio": "Nobody has permission to live in the Boundary Waters Canoe Area Wilderness\u2014 because that's the law! With assistance from Hope's Peak and their own dedication to its oceans, they've certainly got the credibility to camp in their space forever. And space, they have, for they only the post findings when they of the 142 homes and canoes.",
        "birthday": "05-08",
        "branch": "North America",
        "coordination": "+2",
        "dislikes": "SPACETIME living, plastic bags, and GPS",
        "extmental": true,
        "extmentalstr": "ATN: -2",
        "extmurder": false,
        "extmurderstr": "",
        "extphys": false,
        "extphysstr": "",
        "fitness": "+1",
        "focus": "+3",
        "forensics": "0",
        "guts": "0",
        "height": "163",
        "level": "0",
        "likes": "Canoes, bird calls, and PEANUT HOLE",
        "location": "Boundary Water, MN",
        "poise": "-2",
        "pronouns": "they/she",
        "username": "caonmille",
        "vocation": "Ultimate Oceanographer"
        },
    "emma":
        {
        "age": "16",
        "bio": "In the past years, some may have seen headlines about a wild mountain woman in Colorado, or photos of a highschool girl stealing people's trash in the U.K.. If you look far enough back, you can find reports of the \"Feral 8 Year Old Spotted in Venezuela\". When the police picked up the unidentified girl, she claimed she was living in the wild by choice, and had been since she was six years old. She vanished from the station the next morning. How she moves between such distant places seemingly without money, and how she learned to survive alone in the wilderness so young is unknown. Her desire to not stay in one place even led to her refusing to attend Hope's Peak in person. At least she doesn't seem feral anymore\u2026 mostly.",
        "birthday": "06-12",
        "branch": "North America",
        "coordination": "+1",
        "dislikes": "Intense people, loud noises, governments",
        "extmental": false,
        "extmentalstr": "",
        "extmurder": true,
        "extmurderstr": "SIX: +2",
        "extphys": false,
        "extphysstr": "",
        "fitness": "-3",
        "focus": "+3",
        "forensics": "+1",
        "guts": "+3",
        "height": "150",
        "level": "0",
        "likes": "Travel, home cooked meals, cartoons",
        "location": "Unknown",
        "poise": "-1",
        "pronouns": "she/her",
        "username": "Emma_Thorne",
        "vocation": "Ultimate Vagrant"
        },
    "empty":
        {
        "age": "19",
        "bio": "EMPTY SET is an extremely renowned and innovative logician. In the span of only two years plus the first semester at Hope's Peak, they have made monumental progress in the general logic/set theory sphere of mathematics. They're also quite the recluse, publishing all work online and giving interviews via text channels or extremely poorly lit video, so nobody has actually seen their face. Convincing them to go to Hope's Peak, even remotely, was quite the undertaking.",
        "birthday": "07-12",
        "branch": "North America",
        "coordination": "-2",
        "dislikes": "Large crowds, game shows, chaos theory",
        "extmental": true,
        "extmentalstr": "LIE: -3",
        "extmurder": true,
        "extmurderstr": "CLK: +3",
        "extphys": false,
        "extphysstr": "",
        "fitness": "0",
        "focus": "+3",
        "forensics": "0",
        "guts": "+2",
        "height": "161",
        "level": "0",
        "likes": "Puzzles, history, games",
        "location": "NULL",
        "poise": "-2",
        "pronouns": "they/them",
        "username": "EMPTY SET",
        "vocation": "Ultimate Logician"
        },
    "gaz":
        {
        "age": "44",
        "bio": "Being a security guard pays the bills, but Gaz Berry's real love and joy is her biyearly safety presentations. Who else gets to gather all of the top minds of a generation into an auditorium for a cheaply-produced safety-themed puppet show? Her love for the craft is only outweighed by her general crotchety disposition. Even if you haven't seen her scowling in the halls, you've probably received an accidental email from her at some point.",
        "birthday": "08-09",
        "branch": "North America",
        "coordination": "-1",
        "dislikes": "Everything else on YouTube, hot chip, lies",
        "extmental": true,
        "extmentalstr": "ART: +1",
        "extmurder": true,
        "extmurderstr": "ACC: +3",
        "extphys": true,
        "extphysstr": "NRG: -2",
        "fitness": "+2",
        "focus": "+1",
        "forensics": "+1",
        "guts": "+3",
        "height": "196",
        "level": "0",
        "likes": "Safety, the right to repair, YouTube tutorials",
        "location": "Chicago, IL",
        "poise": "0",
        "pronouns": "she/they",
        "username": "gberry1",
        "vocation": "Security Guard"
        },
    "hatman":
        {
        "age": "19",
        "bio": "Everybody in Hawk's Coast knows The Hatman, a ghostly apparition floating across the horizon, hauling a net full of fish to market without ever leaving that thick black abyss of a rain slicker. The locals tell stories about him and the stench of death and misfortune that follows him as he sells his fish in the market, his face shrouded in mystery. Sure, he's an unparalleled fisherman, but everybody wants to know what's underneath the darkness.",
        "birthday": "09-10",
        "branch": "North America",
        "coordination": "+3",
        "dislikes": "\"Outsiders\", missing work, storms",
        "extmental": true,
        "extmentalstr": "STC: +2",
        "extmurder": false,
        "extmurderstr": "",
        "extphys": false,
        "extphysstr": "",
        "fitness": "+2",
        "focus": "-3",
        "forensics": "-3",
        "guts": "+3",
        "height": "213",
        "level": "0",
        "likes": "Humming tunes, watching, solitude",
        "location": "Hawk's Coast, ME",
        "poise": "-3",
        "pronouns": "he/him",
        "username": "thehatman",
        "vocation": "Ultimate Fisherman"
        },
    "isaak":
        {
        "age": "18",
        "bio": "Isaak Wolfe was born in Graz, Austria as the second of three children under Amelie and Fabian Wolfe. Isaak is most prominently known for the one piece of music released under his name, Symphonie der leisen Streicher (Symphony of Silent Strings), a musical score presented in the form of a novel. The work received mixed reviews upon its release, with critics most frequently disputing its status as a literary piece due to the absence of any narration or dialogue. The work began to gain notoriety for the consistency with which readers could interpret its \"plot,\" and as such the novel has since received international acclaim for thoroughly embodying its underlying message of \"Music is a language.\"",
        "birthday": "08-10",
        "branch": "Europe",
        "coordination": "+1",
        "dislikes": "Cars, internet forums, hanging blinds",
        "extmental": true,
        "extmentalstr": "INV: +3",
        "extmurder": true,
        "extmurderstr": "SNK: +1",
        "extphys": true,
        "extphysstr": "VLN: +2",
        "fitness": "-2",
        "focus": "+1",
        "forensics": "-1",
        "guts": "+2",
        "height": "185",
        "level": "0",
        "likes": "Violin, hillside walks, Morgan Freeman",
        "location": "Graz, Austria",
        "poise": "-1",
        "pronouns": "he/him",
        "username": "novel_theorist",
        "vocation": "Ultimate Music Theorist"
        },
    "jones":
        {
        "age": "16",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "birthday": "05-01",
        "branch": "Europe",
        "coordination": "+1",
        "dislikes": "Group activities, confident liars, untagged spoilers",
        "extmental": false,
        "extmentalstr": "",
        "extmurder": false,
        "extmurderstr": "",
        "extphys": true,
        "extphysstr": "FIX: +2",
        "fitness": "-1",
        "focus": "+3",
        "forensics": "+1",
        "guts": "+2",
        "height": "162",
        "level": "0",
        "likes": "Coca-cola, chess, long-winded monologues",
        "location": "The Moon",
        "poise": "-2",
        "pronouns": "yours",
        "username": "testaccount",
        "vocation": "Ultimate ???"
        },
    "mai":
        {
        "age": "18",
        "bio": "A seemingly underground pick for the role, a student named Mai Kurosawa has recently been scouted out for the role of Ultimate Detective. She's refused any and all opportunities for interviews, questions, or even emails, but the school body assures the public that she's fully qualified for the title. Despite this, she's not once been spotted on campus nor has she been known to socialize with other students at the school, it's even rumored that she may have the poorest academic discipline the school has ever seen. Anyone in any relevant fields would've never heard her name, if anything she seems like a bit of a delinquent, but it looks that the tensions between her and Hope's Peak Academy are high, at least so far as her not seeming to enjoy her time there in the slightest.",
        "birthday": "06-24",
        "branch": "East Asia",
        "coordination": "+2",
        "dislikes": "Bad vibes, responsibility, rude people",
        "extmental": true,
        "extmentalstr": "PER: +2",
        "extmurder": false,
        "extmurderstr": "",
        "extphys": true,
        "extphysstr": "HLY: +2",
        "fitness": "0",
        "focus": "-2",
        "forensics": "-3",
        "guts": "+5",
        "height": "168",
        "level": "0",
        "likes": "Good vibes, sweet flavors, American cinema",
        "location": "Yokohama, Kanegawa",
        "poise": "0",
        "pronouns": "she/her",
        "username": "XxCherry_Slide_Gamer64xX[MNC]",
        "vocation": "Ultimate Detective"
        },
    "owen":
        {
        "age": "18",
        "bio": "'Do you believe in ghosts? You should' - the website tagline of one self-proclaimed \u2018ghost logger', Owen Blakeley. Through the site and its related social media are hundreds of ghostly photographs taken from locations across the United States, with appearances having such variety as an apparent floating orb, a translucent woman in historical dress, or a strange blur that could easily just be lens flare. More notable than the images themselves are the intricate notes left underneath detailing the exact conditions they were taken under - time, date, weather condition, their relative position in the film reel, ambient light  the list goes on, sometimes including the claimed ghost's age and history. Blakeley's work has been mistaken for an obscure promotional campaign in the past, but the ghost logger says the project is solely him laying out the facts for those who don't believe the dead still walk among us.",
        "birthday": "06-06",
        "branch": "North America",
        "coordination": "+2",
        "dislikes": "Reckless people, Diet Coke, M. Night Shymalan",
        "extmental": false,
        "extmentalstr": "",
        "extmurder": true,
        "extmurderstr": "SNK: +2",
        "extphys": false,
        "extphysstr": "",
        "fitness": "+1",
        "focus": "+2",
        "forensics": "-2",
        "guts": "+2",
        "height": "178",
        "level": "0",
        "likes": "Classic movies, bonfires, awkward silences",
        "location": "No perm. address",
        "poise": "0",
        "pronouns": "he/him",
        "username": "iseedeadppl",
        "vocation": "Ultimate Ghost Logger"
        },
    "rei":
        {
        "age": "19",
        "bio": "Rei Mitsui debuted into the public consciousness when she miraculously defused a bomb at her high school, making national news. Soon, she garnered the title of \"the one-person bomb squad\", as her exceptional talent in bomb disposal was \"like one person doing the work of an entire squad\" according to the local paper. She's periodically called in to help with local bomb scares despite being a mere high schooler. Law enforcement is often criticized for relying on some kid to do their job for them, but nobody can deny that she gets results and saves lives, and that we can all feel safer with her around.",
        "birthday": "03-21",
        "branch": "East Asia",
        "coordination": "+3",
        "dislikes": "Basketball, taking tests, cleaning",
        "extmental": false,
        "extmentalstr": "",
        "extmurder": true,
        "extmurderstr": "ARM: +3",
        "extphys": true,
        "extphysstr": "END: +1",
        "fitness": "+2",
        "focus": "-2",
        "forensics": "0",
        "guts": "+1",
        "height": "175",
        "level": "0",
        "likes": "Video games, jogging, udon",
        "location": "Chiba, Tokyo",
        "poise": "+1",
        "pronouns": "she/her",
        "username": "3210",
        "vocation": "Ultimate Bomb Squad"
        },
    "simon":
        {
        "age": "29",
        "bio": "Simon Wishful was a promising face who made his big debut on the market with his fairly unambitious tech startup Wishful Thinking. An app that would allow for easy money transfer to charities, organizing secret santas and other such events eventually became a Silicon Valley superpower, becoming part of the now has-been Midas corporation and earning Simon a spot in Hope's Peak Academy as a young Entrepreneur. Through increasingly poor management, horrible PR, human rights violations and several breakdowns, the company fell into ruin, and its CEO, the eponymous Midas himself - Simon - returned to Hope's Peak Academy to fall into obscurity, his impact on the digital industry remaining the only proof that he was ever alive.",
        "birthday": "02-24",
        "branch": "North America",
        "coordination": "+1",
        "dislikes": "Church organs, the death knell, bad hair days",
        "extmental": true,
        "extmentalstr": "BLF: +3",
        "extmurder": false,
        "extmurderstr": "",
        "extphys": true,
        "extphysstr": "END: +2",
        "fitness": "-1",
        "focus": "+1",
        "forensics": "0",
        "guts": "-2",
        "height": "183",
        "level": "0",
        "likes": "Casual dress shirts, morning radio, whitening toothpaste",
        "location": "San Francisco, CA",
        "poise": "-1",
        "pronouns": "he/him",
        "username": "WishfulThinkingLLC",
        "vocation": "Former Entrepreneur "
        },
    "v":
        {
        "age": "19",
        "bio": "While it's difficult to remember her real name, V is most well-known for being the prodigy of legendary biotechnology scientist: Alpheus Rerinison. He's the founder of Velocity: a company that supplies the US with all sorts of helpful technologies for citizen's day-to-day lives, along with coordinating and producing highly dangerous bioweapons for the US government. Most of her past before becoming acquainted with Rerinison is unknown, though it's been noted that V is completely mute. Taken in by the charming young man at age eight, V has continuously impressed and become something of a wonder child in the eyes of the American public.",
        "birthday": "11-02",
        "branch": "North America",
        "coordination": "-1",
        "dislikes": "The military, capitalism, and bare walls",
        "extmental": false,
        "extmentalstr": "",
        "extmurder": false,
        "extmurderstr": "",
        "extphys": false,
        "extphysstr": "",
        "fitness": "0",
        "focus": "+2",
        "forensics": "0",
        "guts": "+2",
        "height": "160",
        "level": "0",
        "likes": "Windchimes, joke books, and grassy fields",
        "location": "New Orleans, LA",
        "poise": "+3",
        "pronouns": "she/her",
        "username": "v",
        "vocation": "Ultimate Therapist"
        },
    "yiseul":
        {
        "age": "18",
        "bio": "Yi-seul Jeong is the newest member of Neochron, a cutting edge team of Hope's Peak students and undergrads working on \"redefining the boundaries between human and mechanical interaction\". Whether professionally or socially, Yi-Seul is known to those he interacts with as a ball of curiosity and friendliness ready to burst at any second. Yi-seul's contributions and personal projects can be found on various platforms where he tends to feature video demonstrations of limb enhancers and other hybrid human-controlled mechanisms right next to random memes and pictures of social events. It seems to most that he doesn't mind blending his personal and professional lives, and folks are intrigued on what new technological marvels will arrive out of such a bright mind.",
        "birthday": "12-16",
        "branch": "East Asia",
        "coordination": "0",
        "dislikes": "Subwoofers, broken toys, khakis",
        "extmental": true,
        "extmentalstr": "PRS: -2",
        "extmurder": true,
        "extmurderstr": "DOG: +3",
        "extphys": true,
        "extphysstr": "AIM: +2",
        "fitness": "+2",
        "focus": "+2",
        "forensics": "-1",
        "guts": "+1",
        "height": "180",
        "level": "0",
        "likes": "Gacha games, Godzilla (& Friends) flicks, bungeoppang",
        "location": "Seongnam-si, Korea",
        "poise": "0",
        "pronouns": "he/him",
        "username": "Kaiju_Klasher",
        "vocation": "Ultimate Roboticist"
        },
    "yumeji":
        {
        "age": "17",
        "bio": "Yadama Yumeji is a perfectly normal girl that was selected for Japan's lucky student draft. Hailing from Kurashiki in the Okayama prefecture, this pretty shy girl doesn't have a lot to celebrate behind her name, aside from her accomplishments in school. She's among the top of her class in regards to grades, is the captain of her school's debate team, and puts in lots of volunteer hours. The only strange thing about her is that she ends up having to take a lot of medical days off, the specifics of why something she refrains from disclosing. If you asked people at her school what they think of her, they'd say she's pretty sweet, but you have to make an effort to reach out to her if you want to be her friend.",
        "birthday": "05-15",
        "branch": "East Asia",
        "coordination": "-3",
        "dislikes": "Sausage, dancing, Kabukicho",
        "extmental": true,
        "extmentalstr": "DBT: +3",
        "extmurder": true,
        "extmurderstr": "LCK: -3",
        "extphys": true,
        "extphysstr": "PRK: +1",
        "fitness": "0",
        "focus": "+1",
        "forensics": "+1",
        "guts": "+2",
        "height": "163",
        "level": "0",
        "likes": "Reading, cicada sounds, Shibuya",
        "location": "Kurashiki, Okayama",
        "poise": "-2",
        "pronouns": "she/her",
        "username": "YY",
        "vocation": "Ultimate Lucky Student"
        }
    }

function Card(props){
    function flipCard(e) {
        e.preventDefault();
        var element = document.getElementById("idcard");
        element.classList.toggle("flipped");
    }
    const info = bioData[props.char];
    const extraphys = (info.extphys ? <p>{info.extphysstr}</p> : "");
    const extramental = (info.extmental ? <p>{info.extmentalstr}</p> : "");
    const extramurder = (info.extmurder ? <p>{info.extmurderstr}</p> : "");
    return(
        <div id="idcard" className={props.char}>
            <div id="idflip">
                <div id="idfront">
                    <div id="idheader">
                        <img id="idlogo" src={Heart} alt=""></img>
                        <h1>{info.username}</h1>
                    </div>
                    <div id="iddata">
                        <Portrait character={props.char}/>
                        <div class="grid-container">
                            <div class="idtitle">
                                <h3>{info.vocation}</h3>
                            </div>  
                            <div class="statsheader">Stats</div>
                            <div class="idlevel"><p>{"LEVEL "+info.level}</p></div>  
                            <div class="stats phys">
                                <p>{"FIT: "+info.fitness}</p>
                                <p>{"CDN: "+info.coordination}</p>
                                {extraphys}
                            </div>
                            <div class="idgeo">
                                <p><span>Branch: </span>{"HPA "+info.branch}</p>
                                <p><span>Location: </span>{info.location}</p>
                            </div>
                            <div class="stats mental">
                                <p>{"FCS: "+info.focus}</p>
                                <p>{"POI: "+info.poise}</p>
                                {extramental}
                            </div>
                            <div class="idbio1">
                                <p><span>Age: </span>{info.age}</p>
                                <p><span>Bday: </span>{info.birthday}</p>
                            </div>
                            <div class="idbio2">
                                <p><span>Prns: </span>{info.pronouns}</p>
                                <p><span>Hght: </span>{info.height+" cm"}</p>
                            </div>
                            <div class="stats murder">
                                <p>{"FRN: "+info.forensics}</p>
                                <p>{"GUT: "+info.guts}</p>
                                {extramurder}
                            </div>
                            <div class="idlikes">
                                <h3>Likes</h3>
                                <p>{info.likes}</p>
                            </div>
                            <div class="iddislikes">
                                <h3>Dislikes</h3>
                                <p>{info.dislikes}</p>
                            </div>
                        </div>
                    </div>
                    <div class="idfooter">
                        
                    </div>
                    <button class="flipButton" id="flipButtonFront" onClick={flipCard}>
                        <img src={Flip} alt="Flip card."/>
                    </button>
                    <button id="closeButtonFront" onClick={props.onClick}>
                        <img alt="Close." src={Close}/>
                    </button>
                </div>
                <div id="idback">
                    <div>
                        <div id="bioheader"><h1>Public Bio</h1></div>
                        <div id="bio">{info.bio}</div>
                    </div>
                    <button class="flipButton" id="flipButtonBack" onClick={flipCard}>
                        <img src={Flip} alt="Flip card."/>
                    </button>
                    <button id="closeButtonBack" alt="Close." onClick={props.onClick}>
                        <img alt="Close." src={Close}/>
                    </button>
                </div>
            </div>
        </div>
    )
} export default Card;