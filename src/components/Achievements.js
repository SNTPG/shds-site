import React from 'react';
import Heart from './Heart.js'

function Achievements(props){
    const easyAchievements = [
        {"name": "friend",
        "description": "Ask if you can be someone's friend"},
        {"name": "climb",
        "description": "Climb to the top of the climbing wall"},
        {"name": "cookNew",
        "description": "Cook something you never made before"},
        {"name": "locker",
        "description": "Decorate a locker and claim it as your own"},
        {"name": "chaperone",
        "description": "Disobey the chaperones"},
        {"name": "yiseulEasy",
        "description": "Do something relaxing with Yi-seul"},
        {"name": "reiEasy",
        "description": "Exercise with Rei"},
        {"name": "fish",
        "description": "Feed the fish"},
        {"name": "collectable",
        "description": "Find a collectable"},
        {"name": "jonesEasy",
        "description": "Forgive Jones"},
        {"name": "owenEasy",
        "description": "Get photographed by Owen"},
        {"name": "gift",
        "description": "Give someone any gift from the gacha"},
        {"name": "flower",
        "description": "Give your favorite flower in the garden to someone"},
        {"name": "hatmanEasy",
        "description": "Go fishing with Hatman"},
        {"name": "isaakEasy",
        "description": "Go on a walk with Isaak"},
        {"name": "sleepover",
        "description": "Have a sleepover in the treehouse"},
        {"name": "andrewEasy",
        "description": "Have Andrew give you a token"},
        {"name": "yumejiEasy",
        "description": "Help patch YY up"},
        {"name": "camilleEasy",
        "description": "Learn an OCEAN fact!"},
        {"name": "candle",
        "description": "Light a candle"},
        {"name": "emmaEasy",
        "description": "Make a meal for Emma"},
        {"name": "mixtape",
        "description": "Make a mixtape"},
        {"name": "sport",
        "description": "Play a sport with someone"},
        {"name": "book",
        "description": "Read a book and tell someone about it"},
        {"name": "tandem",
        "description": "Ride a tandem bicycle with someone else."},
        {"name": "marshmallow",
        "description": "Roast marshmallows over a campfire"},
        {"name": "gacha",
        "description": "Roll the gacha"},
        {"name": "bunk",
        "description": "Select a bunk"},
        {"name": "firework",
        "description": "Set off a firework"},
        {"name": "umbrella",
        "description": "Share an umbrella with someone"},
        {"name": "chair",
        "description": "Take the security office's rolly chair on an adventure"},
        {"name": "vEasy",
        "description": "Talk about your feelings with V"},
        {"name": "matsuno",
        "description": "Talk to Matsuno in your free time"},
        {"name": "amiEasy",
        "description": "Teach Ami something new about humanity"},
        {"name": "averyEasy",
        "description": "Tell Avery a story"},
        {"name": "emptyEasy",
        "description": "Tell EMPTY SET a secret"},
        {"name": "maiEasy",
        "description": "Try something new with Mai"},
        {"name": "talent",
        "description": "Unlock a talent room"},
        {"name": "augustEasy",
        "description": "Watch a movie with Augustyn"}
    ]
    const hardAchievements = [
        {"name": "dragonball",
        "description": "Collect all the Dragonballs"},
        {"name": "averyHard",
        "description": "Commit with Avery"},
        {"name": "cherry",
        "description": "Confess your love to someone under the cherry blossoms"},
        {"name": "emptyHard",
        "description": "Convince EMPTY SET to show you their face"},
        {"name": "cookEveryone",
        "description": "Cook something for everyone"},
        {"name": "camilleHard",
        "description": "CRACK ME OPEN!!!!!! FUN SURPRISE!"},
        {"name": "amiHard",
        "description": "Download the Demaka Ami Singing Program on any device"},
        {"name": "isaakHard",
        "description": "Earn Isaak's respect"},
        {"name": "collectableTen",
        "description": "Find 10 unique collectables"},
        {"name": "vHard",
        "description": "Find out what's on V's mind"},
        {"name": "emmaHard",
        "description": "Give Emma a makeover"},
        {"name": "fiveGift",
        "description": "Give five gifts from the gacha to the same person"},
        {"name": "owenHard",
        "description": "Give Owen a hug"},
        {"name": "giftLove",
        "description": "Give someone their LOVE gift"},
        {"name": "yumejiHard",
        "description": "Have an argument with Yumeji"},
        {"name": "group",
        "description": "Host a group activity for 5 or more people"},
        {"name": "shed",
        "description": "KEEP THE SHED SAFE"},
        {"name": "andrewHard",
        "description": "Make Andrew smile"},
        {"name": "show",
        "description": "Organize a show"},
        {"name": "reiHard",
        "description": "Paint Rei's nails"},
        {"name": "jonesHard",
        "description": "Possess Jones for a minute"},
        {"name": "saveLife",
        "description": "Save a life"},
        {"name": "augustHard",
        "description": "Spend a half hour with Augustyn without him speaking"},
        {"name": "maiHard",
        "description": "Successfully jumpscare Mai"},
        {"name": "hatmanHard",
        "description": "Wear Hatman's hat and coat"},
        {"name": "yiseulHard",
        "description": "Win a fight against Yi-seul"}
    ]
    const storyAchievements = [
        {"name": "fiveEnemies",
        "description": "Defeat 5 enemies"},
        {"name": "levelThree",
        "description": "Defeat a level 3 enemy"},
        {"name": "pacifist",
        "description": "Defeat an enemy without hurting it"},
        {"name": "friendFight",
        "description": "Fight an enemy with a friend"},
        {"name": "transform",
        "description": "Use your magical girl power"}
    ]
    var list = <div></div>;
    if(props.tab === "story"){
        list =
        list = storyAchievements.map((achieve) =>
            <div key={achieve.name} className={"achievement "+ achieve.name}>
                <Heart achievement={achieve.name} achievements={props.achievements}/>
                <p>{achieve.description}</p>
            </div>
        );
    }
    if(props.tab === "easy"){
        list = easyAchievements.map((achieve) =>
            <div key={achieve.name} className={"achievement "+ achieve.name}>
                <Heart achievement={achieve.name} achievements={props.achievements}/>
                <p>{achieve.description}</p>
            </div>
        );
    }
    if(props.tab === "hard"){
        list = hardAchievements.map((achieve) =>
            <div key={achieve.name} className={"achievement "+ achieve.name}>
                <Heart achievement={achieve.name} achievements={props.achievements}/>
                <p>{achieve.description}</p>
            </div>
        );

    }
    return(
        <div className="achievementList">
            <div>
                {list}
            </div>
        </div>
    )
} export default Achievements;