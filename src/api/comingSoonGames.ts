import pic1 from "../images/Street-Fighter-6.jpg";
import pic2 from "../images/Final-Fantasy-XVI.jpg";
import pic3 from "../images/The-Legend-of-Zelda-Tears-of-the-Kingdom.jpg";
import pic4 from "../images/Diablo-IV.jpg";
import pic5 from "../images/Atomic-Heart.jpg";
import pic6 from "../images/Kirbys-Return-to-Dream-Land-Deluxe.jpg";
import pic7 from "../images/The-Legend-of-Heroes-Trails-to-Azure.jpg";
import pic8 from "../images/Octopath-Traveler-2.jpg";
import pic9 from "../images/Mega-Man-Battle-Network-Legacy-Collection.jpg";
import pic10 from "../images/Dead-Island-2.jpg";
import { SoonGameArticle } from "../features/games/games.d";

export const comingSoonGamesArr: SoonGameArticle[] = [
    {
        id: "7548",
        nameOfGame: "Street Fighter 6 for PS5",
        image: pic1,
        company: "Sony Playstation",
        description: "A new era for fighting games begins in 2023! The evolution of fighting games starts with our traditional Fighting Ground, and then we're turning the genre on its head with World Tour and Battle Hub for a total of three modes where anyone can play to their liking. No one starts off as a champion.You get there step by step, punch by punch. Take up the challenge and bring your game to the next level.",
        comingSoon: "June 2 2023"
    },
    {
        id: "9543",
        nameOfGame: "Final Fantasy XVI for PS5",
        image: pic2,
        company: "Sony Playstation",
        description: "The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon.",
        comingSoon: "June 22 2023"
    },
    {
        id: "9428",
        nameOfGame: "The Legend of Zelda: Tears of the Kingdom",
        company: "Nintendo",
        image: pic3,
        description: "In addition to the vast lands of Hyrule, the latest entry in the storied Legend of Zelda series will take you up into the skies! Look forward to Link’s massive adventure starting again when The Legend of Zelda: Tears of the Kingdom, the sequel to The Legend of Zelda: Breath of the Wild, drops for Nintendo Switch on May 12, 2023.",
        comingSoon: "May 12 2023"
    },
    {
        id: "4787",
        nameOfGame: "Diablo IV",
        image: pic4,
        company: "X-Box",
        description: "Diablo® IV is the next-gen action RPG experience with endless evil to slaughter, countless abilities to master, nightmarish Dungeons, and legendary loot. Embark on the campaign solo or with friends, meeting memorable characters through beautifully dark settings and a gripping story, or explore an expansive end game and shared world where players can meet in towns to trade, team up to battle World Bosses, or descend into PVP zones to test their skills against other players - no lobbies necessary - with cross-play and cross-progression on all available platforms.",
        comingSoon: "June 6 2023"
    },
    {
        id: "6571",
        nameOfGame: "Atomic Heart for PS5",
        image: pic5,
        company: "Sony Playstation",
        description: "Welcome to a utopian world of wonders and perfection, in which humans live in harmony with their loyal and fervent robots. Well, that’s how it used to be. With the launch of the latest robot-control system mere days away, only a tragic accident or a global conspiracy could disrupt it…",
        comingSoon: "February 21 2023"
    },
    {
        id: "8795",
        nameOfGame: "Kirby's Return to Dream Land Deluxe",
        image: pic6,
        company: "Nintendo",
        description: "Kirby’s adventures continue in Dream Land! The tough puff Kirby is back for a 4-player* platforming adventure.",
        comingSoon: "Febuary 24 2023"
    },
    {
        id: "12953",
        nameOfGame: "The Legend of Heroes: Trails to Azure for PS4",
        image: pic7,
        company: "Sony Playstation",
        description: "Set just a few months after the events of Trails from Zero, a temporary peace has settled over Crossbell and the Special Support Section find themselves with newfound fame and status, thanks to their heroic actions.",
        comingSoon: "March 14 2023"
    },
    {
        id: "11348",
        nameOfGame: "Octopath Traveler 2",
        image: pic8,
        company: "Nintendo",
        description: "Octopath Traveler 2 is a brand-new entry in the Octopath Traveler series, the first installment of which was initially released in 2018 and sold over 3 million copies worldwide. It takes the series’ HD-2D graphics, a fusion of retro pixel art and 3DCG, to even greater heights.",
        comingSoon: "Febuary 24 2023"
    },
    {
        id: "12834",
        nameOfGame: "Mega Man Battle Network Legacy Collection",
        image: pic9,
        company: "Nintendo",
        description: "Mega Man™ Battle Network Legacy Collection will upload all 10 Mega Man™ Battle Network titles, including graphics filters and additional bonus content!",
        comingSoon: "April 14 2023"
    },
    {
        id: "5884",
        nameOfGame: "Dead Island 2",
        image: pic10,
        company: "X-Box",
        description: "The much-loved zombie saga is back! Dead Island 2 is a unique formula of horror, dark humor and over the top zombie-slaying, spanning an epic pulp adventure. This thrilling First-Person, Action RPG takes players across a brand-new playground – a hellish vision of LA (or HELL-A, as we like to call it). Dead Island 2 is stylish, vibrant and flooded with zombie infection. Explore iconic, gore-drenched Los Angeles. Meet larger-than-life characters. Slay countless foes in exquisitely bloody detail. And evolve to become the ultimate Zombie Slayer!",
        comingSoon: "April 28 2023"
    }
];

/* export const fetchArticles = () =>
    fetch(comingSoonGamesArr)
        .then((res) => res.json())
        .then((json) => json.articles as GameArticle[])
        .then((articles) => {
            articles.forEach((a) => {
                a.id = v4();
                a.isGettingBuied = false
            });
            return articles;
        }); */