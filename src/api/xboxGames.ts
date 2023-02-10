import pic1 from "../images/call-of-duty-modern-warfare.jpg";
import pic2 from "../images/fifa23.jpg";
import pic3 from "../images/batman-arkham-knight.jpg";
import pic4 from "../images/cal-of-duty-black-ops-3.jpg";
import pic5 from "../images/judgment.jpg";
import pic6 from "../images/little-nightmares2.jpg";
import pic7 from "../images/gears-5.jpg";
import pic8 from "../images/hogwarts-legacy.jpg";
import pic9 from "../images/Red-Dead-Redemption-2.jpg";
import pic10 from "../images/battlefield-v.jpg";
import { XboxGameArticle } from "../features/games/games.d";

export const xboxGamesArr: XboxGameArticle[] = [
    {
        id: "1460",
        nameOfGame: "Call of Duty: Modern Warfare",
        image: pic1,
        description: "התכוננו ללכת בצללים כי Modern Warfare חוזר! קחו סיכון ושחקו בתור פעיל קטלני ביותר בסאגה ממריצה שתשפיע על איזון הכוחות בעולם.",
        company: "X-Box",
        price: 159,
        isGettingBuied: false
    },
    {
        id: "14461",
        nameOfGame: "FIFA 23",
        image: pic2,
        description: "משחק הכדורגל הטוב בעולם פיפא 23 חוזר אלינו גם השנה בגרסה חדשה ומשופרת. עם שם חדש Ea sport fc",
        company: "X-Box",
        price: 185,
        isGettingBuied: false
    },
    {
        id: "11549",
        nameOfGame: "Batman Arkham Knight",
        image: pic3,
        description: "בפרק הסיום הנפיץ לסדרת באטמן ארקהם, באטמן עומד בפני האיום האולטימטיבי על העיר בה הוא מושבע להגן. הדחליל חוזר לאחד סגל מרשים של נבלי-על, כולל פינגווין, דו-פנים והארלי קווין, כדי להרוס את האביר האפל לנצח. נייט באטמן ארקהם מציג את הגרסא המעוצבת הייחודית של רוקסטיי של ה- Batmobile, הניתנת לנהיגה לראשונה בזיכיון. תוספת הרכב האגדי הזה, בשילוב משחק המשחק המוערך של סדרת באטמן ארקהם, מציעה לגיימרים את חוויית באטמן האולטימטיבית והשלמה כשהם קורעים ברחובות ונמסים לאורך קו הרקיע של כל גות’אם סיטי.",
        company: "X-Box",
        price: 119,
        isGettingBuied: false
    },
    {
        id: "14463",
        nameOfGame: "Call of Duty: Black OPS 3",
        image: pic4,
        description: "משחק היריות המוכר ביותר יביא לנו הפעם את ההמשך לסדרת Black Ops בסט עתידני בו הקו בין טכנולוגיה להרס מטשטש.",
        company: "X-Box",
        price: 129,
        isGettingBuied: false
    },
    {
        id: "5508",
        nameOfGame: "Judgment",
        image: pic5,
        description: "מהיוצרים של הסדרה זוכת השבחים Yakuza: Ryu Ga Gotoku Studios, מציגים את Judgment, הסיפור הדרמטי של עורך הדין המבקש גאולה, בעולם רווי שחיתות וייאוש.",
        company: "X-Box",
        price: 119,
        isGettingBuied: false
    },
    {
        id: "2953",
        nameOfGame: "Little Nightmares II",
        image: pic6,
        description: "גלו את הסודות הזדוניים של מגדל הסיגנל, בהרפתקת פלטפורמה בהשראת ז'אנר האימה בה אתם משחקים בדמותו של מונו, ילד צעיר הכלוא בעולם מעוות ומרוסק.",
        company: "X-Box",
        price: 119,
        isGettingBuied: false
    },
    {
        id: "2997",
        nameOfGame: "Gears 5",
        image: pic7,
        description: "אחת מסדרות המשחקים המוערכות ביותר, Gears גדול מתמיד, עם חמישה מצבים מרתקים והקמפיין העמוק ביותר עד כה.",
        company: "X-Box",
        price: 89,
        isGettingBuied: false
    },
    {
        id: "16327",
        nameOfGame: "Hogwarts Legacy",
        image: pic8,
        description: "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. For the first time, experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Now you can take control of the action and be at the center of your own adventure in the wizarding world. Your legacy is what you make of it.",
        company: "X-Box",
        price: 279,
        isGettingBuied: false
    },
    {
        id: "529",
        nameOfGame: "Red Dead Redemption 2",
        image: pic9,
        description: "אמריקה, 1899. זהו סופו של עידן המערב הפרוע כאשר אנשי החוק צדים אחר כנופיות הפושעים האחרונות. אלו שלא ייכנעו יוצאו להורג. לאחר ניסיון שוד כושל במערב עיירת בלאקווטר, ארתור מורגן וכנופיית ואן דר לינד מוכרחים לברוח.",
        company: "X-Box",
        price: 89,
        isGettingBuied: false
    },
    {
        id: "1005",
        nameOfGame: "Battlefield V",
        image: pic10,
        description: "קבלו גישה מוקדמת לעולם ה-Battlefield V עם Battlefield V Deluxe Edition ותחוו מלחמה כמו שטרם הכרתם, תלבושות ומשימוש ייחודיות עבור ה-British Special Air Service וה-German Airborne Troops ועוד.",
        company: "X-Box",
        price: 85,
        isGettingBuied: false
    },
];

/* export const fetchArticles = () =>
    fetch(xboxGamesArr)
        .then((res) => res.json())
        .then((json) => json.articles as GameArticle[])
        .then((articles) => {
            articles.forEach((a) => {
                a.id = v4();
                a.isGettingBuied = false
            });
            return articles;
        }); */