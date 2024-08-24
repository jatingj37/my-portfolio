document.addEventListener("DOMContentLoaded", function() {
    const sections = [
        "Personal Identity and Family",
        "Home and Local Area",
        "Daily Routine",
        "Leisure and Hobbies",
        "Education and School Life",
        "Health and Well-being",
        "Travel and Holidays",
        "Shopping",
        "Food and Drink",
        "Media and Technology",
        "Environmental Issues",
        "Global Issues",
        "Work and Employment",
        "Social Issues",
        "Relationships",
        "Cultural Diversity",
        "Science and Technology",
        "Arts and Entertainment",
        "Future Plans",
        "Social Media and Communication"
    ];

    const questionsAndAnswers = {
        "Personal Identity and Family": [
            { question: "Comment t’appelles-tu ?", answer: "Je m'appelle Jatin Garg." },
            { question: "Quel âge as-tu ?", answer: "J'ai 20 ans." },
            { question: "Où es-tu né ?", answer: "Je suis né à Palwal, Haryana." },
            { question: "Quelle est ta nationalité ?", answer: "Je suis Indien." },
            { question: "As-tu des frères et sœurs ?", answer: "Non, je suis enfant unique." },
            { question: "Quel est le prénom de ton frère/sœur ?", answer: "Je n'ai pas de frères et sœurs." },
            { question: "Quelle est la profession de tes parents ?", answer: "Mon père est ingénieur et ma mère est enseignante." },
            { question: "Peux-tu décrire ta mère/père ?", answer: "Ma mère est très gentille et mon père est très travailleur." },
            { question: "Quelle est la date de ton anniversaire ?", answer: "Mon anniversaire est le 12 janvier." },
            { question: "Où habites-tu ?", answer: "J'habite à Palwal, Haryana." },
            { question: "Comment est ta maison ?", answer: "Ma maison est spacieuse, avec trois chambres, un grand jardin, et une cuisine moderne." },
            { question: "Quel est ton rôle dans ta famille ?", answer: "Je suis l'enfant unique, je suis responsable et aide mes parents avec la technologie." },
            { question: "Que fais-tu avec ta famille pendant le week-end ?", answer: "Nous regardons des films ensemble et faisons des sorties." },
            { question: "Quelle est la relation que tu as avec tes frères et sœurs ?", answer: "Je n'ai pas de frères et sœurs, mais je m'entends bien avec mes cousins." },
            { question: "Quel est ton plat préféré ?", answer: "Mon plat préféré est le biryani." },
            { question: "Quels sont tes loisirs ?", answer: "Mes loisirs incluent les jeux vidéo et le football." },
            { question: "Quelles langues parles-tu ?", answer: "Je parle l'hindi, l'anglais et un peu de français." },
            { question: "Quelle est ta couleur préférée ?", answer: "Ma couleur préférée est le bleu." },
            { question: "As-tu un animal de compagnie ?", answer: "Non, je n'ai pas d'animal de compagnie." },
            { question: "Comment est ta chambre ?", answer: "Ma chambre est propre et organisée, avec un bureau pour étudier." },
            { question: "Peux-tu décrire une journée typique dans ta vie ?", answer: "Je me lève, vais à l'université, étudie, fais du sport, et passe du temps avec ma famille." },
            { question: "Que fais-tu pour aider à la maison ?", answer: "J'aide à nettoyer la maison et je fais parfois la cuisine." },
            { question: "Qui est ton meilleur ami/ta meilleure amie ?", answer: "Mon meilleur ami s'appelle Ravi, il est très drôle et intelligent." },
            { question: "Que fais-tu pendant les vacances avec ta famille ?", answer: "Nous voyageons souvent dans d'autres villes pour visiter des sites touristiques." },
            { question: "Peux-tu décrire ton meilleur ami/ta meilleure amie ?", answer: "Ravi est drôle, intelligent, et toujours prêt à aider les autres." },
            { question: "Quel est ton sport préféré ?", answer: "Mon sport préféré est le football." },
            { question: "Comment est ton caractère ?", answer: "Je suis calme, patient et amical." },
            { question: "Es-tu plutôt introverti(e) ou extraverti(e) ?", answer: "Je suis plutôt introverti, mais j'aime passer du temps avec mes amis." },
            { question: "Où aimerais-tu habiter plus tard ?", answer: "J'aimerais habiter dans une grande ville comme Delhi ou Mumbai." },
            { question: "Que veux-tu faire comme métier ?", answer: "Je veux devenir ingénieur en informatique." },
            { question: "Quelle est ta musique préférée ?", answer: "J'aime la musique classique et le rock." },
            { question: "Joues-tu d’un instrument de musique ?", answer: "Non, je ne joue pas d'instrument de musique." },
            { question: "Que fais-tu le week-end ?", answer: "Je joue au football et je regarde des films." },
            { question: "Es-tu sportif/sportive ?", answer: "Oui, je joue au football régulièrement." },
            { question: "Quel est ton film préféré ?", answer: "Mon film préféré est 'Inception'." },
            { question: "Quelle est ta saison préférée et pourquoi ?", answer: "Ma saison préférée est l'hiver car j'aime le froid." },
            { question: "Quel est ton passe-temps favori ?", answer: "Mon passe-temps favori est de jouer aux jeux vidéo." },
            { question: "Que fais-tu pour te détendre ?", answer: "Je lis des livres ou je regarde des séries." },
            { question: "Quelle est ta matière préférée à l’école ?", answer: "Ma matière préférée est l'informatique." },
            { question: "Quels sont tes projets pour l’avenir ?", answer: "Je veux devenir un ingénieur en informatique et travailler dans une grande entreprise." },
            { question: "Quels pays as-tu déjà visités ?", answer: "Je n'ai pas encore visité de pays étrangers, mais j'aimerais voyager un jour." },
            { question: "Aimes-tu voyager ?", answer: "Oui, j'aime beaucoup voyager et découvrir de nouveaux endroits." },
            { question: "Quelles traditions familiales avez-vous ?", answer: "Nous célébrons Diwali ensemble chaque année avec des feux d'artifice et des repas en famille." },
            { question: "Quelle est ta fête préférée ?", answer: "Ma fête préférée est Diwali." },
            { question: "Comment célèbres-tu ton anniversaire ?", answer: "Je célèbre mon anniversaire avec ma famille et mes amis, avec un gâteau et des cadeaux." },
            { question: "As-tu une grande ou petite famille ?", answer: "J'ai une petite famille, juste mes parents et moi." },
            { question: "Que penses-tu de la famille nombreuse ?", answer: "Je pense que les grandes familles sont amusantes mais peuvent aussi être bruyantes." },
            { question: "Aimerais-tu avoir des enfants plus tard ?", answer: "Oui, j'aimerais avoir des enfants plus tard." },
            { question: "Quelles sont les qualités que tu admires chez tes parents ?", answer: "J'admire leur travail acharné, leur patience et leur gentillesse." },
            { question: "Comment te vois-tu dans dix ans ?", answer: "Dans dix ans, je me vois en tant qu'ingénieur en informatique, travaillant dans une grande entreprise." }
        ],
        "Home and Local Area": [
            { question: "Où habites-tu ?", answer: "J'habite à Palwal, Haryana." },
            { question: "Peux-tu décrire ta maison ?", answer: "Ma maison est spacieuse, avec trois chambres, un grand jardin, et une cuisine moderne." },
            { question: "Comment est ton quartier ?", answer: "Mon quartier est calme et convivial, avec beaucoup de parcs et de magasins à proximité." },
            { question: "Quelles sont les activités disponibles dans ta région ?", answer: "Il y a des parcs, des centres commerciaux et des installations sportives à proximité." },
            { question: "Préfères-tu vivre en ville ou à la campagne ? Pourquoi ?", answer: "Je préfère vivre en ville pour l'accès facile aux commodités et aux services." },
            { question: "Quelles sont les commodités près de chez toi ?", answer: "Il y a des écoles, des hôpitaux, des centres commerciaux et des parcs près de chez moi." },
            { question: "Y a-t-il des parcs ou des espaces verts dans ta ville ?", answer: "Oui, il y a plusieurs parcs et espaces verts où les gens se promènent et font du jogging." },
            { question: "Comment sont les transports publics dans ta région ?", answer: "Les transports publics sont bien développés avec des bus et des trains fréquents." },
            { question: "Quel est ton endroit préféré dans ta ville ?", answer: "Mon endroit préféré est le parc central, où j'aime me promener." },
            { question: "Où fais-tu les courses ?", answer: "Je fais mes courses au supermarché local et au marché du quartier." },
            { question: "Y a-t-il un marché local près de chez toi ?", answer: "Oui, il y a un marché local où l'on peut acheter des fruits, des légumes et d'autres produits frais." },
            { question: "Comment sont les voisins ?", answer: "Mes voisins sont amicaux et serviables." },
            { question: "Aimes-tu ton quartier ?", answer: "Oui, j'aime mon quartier car il est paisible et bien situé." },
            { question: "Quels sont les avantages de vivre dans ta région ?", answer: "Les avantages sont la proximité des commodités, la sécurité et les espaces verts." },
            { question: "Quels sont les inconvénients de ta région ?", answer: "Les inconvénients sont le trafic intense aux heures de pointe et le bruit." },
            { question: "Quelles activités culturelles peut-on faire dans ta ville ?", answer: "Il y a des cinémas, des théâtres, et des festivals culturels tout au long de l'année." },
            { question: "Comment est le climat dans ta région ?", answer: "Le climat est chaud en été et froid en hiver." },
            { question: "Quels magasins y a-t-il dans ton quartier ?", answer: "Il y a des épiceries, des boutiques de vêtements, et des magasins d'électronique." },
            { question: "Où vas-tu pour te détendre dans ta région ?", answer: "Je vais au parc ou au centre commercial pour me détendre." },
            { question: "Y a-t-il un centre commercial près de chez toi ?", answer: "Oui, il y a un grand centre commercial à 10 minutes de chez moi." },
            { question: "Quels sont les restaurants que tu préfères dans ta ville ?", answer: "Je préfère les restaurants qui servent de la cuisine indienne traditionnelle." },
            { question: "Quelles activités fais-tu le week-end dans ta région ?", answer: "Le week-end, je vais au cinéma, je fais du shopping, et je rencontre mes amis." },
            { question: "Est-ce qu’il y a des activités sportives près de chez toi ?", answer: "Oui, il y a des terrains de football, des salles de gym, et des piscines." },
            { question: "Y a-t-il des monuments historiques dans ta ville ?", answer: "Non, il n'y a pas de monuments historiques dans ma ville, mais il y en a à proximité." },
            { question: "Comment est l’architecture dans ta ville ?", answer: "L'architecture est moderne avec des bâtiments hauts et des centres commerciaux." },
            { question: "Quel est ton moyen de transport préféré ?", answer: "Mon moyen de transport préféré est la voiture car c'est pratique." },
            { question: "As-tu des amis dans ton quartier ?", answer: "Oui, j'ai plusieurs amis dans mon quartier et nous jouons souvent ensemble." },
            { question: "Quels sont les événements locaux dans ta région ?", answer: "Il y a des foires, des festivals et des événements sportifs organisés régulièrement." },
            { question: "Où aimerais-tu habiter à l’avenir ?", answer: "À l'avenir, j'aimerais habiter dans une grande ville comme Delhi ou Mumbai." },
            { question: "Peux-tu décrire une journée typique dans ta ville ?", answer: "Une journée typique dans ma ville commence par les gens se rendant au travail ou à l'école, suivie de l'activité commerciale dans les marchés et les magasins." }
        ],
        "Daily Routine": [
            { question: "À quelle heure te lèves-tu le matin ?", answer: "Je me lève à 7 heures du matin." },
            { question: "Que fais-tu avant d’aller à l’école ?", answer: "Je me brosse les dents, prends mon petit-déjeuner, et prépare mes affaires pour l'école." },
            { question: "Quelle est ta routine quotidienne ?", answer: "Ma routine quotidienne inclut l'université, les études, le sport et le temps passé avec ma famille." },
            { question: "Que manges-tu au petit déjeuner ?", answer: "Je mange des céréales avec du lait ou parfois des parathas." },
            { question: "Comment vas-tu à l’école ?", answer: "Je vais à l'université en bus." },
            { question: "Quelle est ta matière préférée et pourquoi ?", answer: "Ma matière préférée est l'informatique car j'aime coder et créer des applications." },
            { question: "Que fais-tu pendant la récréation ?", answer: "Je parle avec mes amis et je mange une collation." },
            { question: "À quelle heure déjeunes-tu à l’école ?", answer: "Je déjeune à 13 heures à la cantine." },
            { question: "Que fais-tu après l’école ?", answer: "Après l'université, je fais du sport et je révise mes cours." },
            { question: "À quelle heure fais-tu tes devoirs ?", answer: "Je fais mes devoirs généralement après le dîner, vers 19 heures." },
            { question: "Que fais-tu après avoir terminé tes devoirs ?", answer: "Je regarde la télévision ou joue aux jeux vidéo." },
            { question: "À quelle heure dînes-tu ?", answer: "Je dîne à 21 heures avec ma famille." },
            { question: "Que fais-tu avant d’aller te coucher ?", answer: "Je lis un livre ou je passe un peu de temps sur mon téléphone avant de me coucher." },
            { question: "À quelle heure te couches-tu ?", answer: "Je me couche généralement vers 23 heures." },
            { question: "Combien d’heures dors-tu chaque nuit ?", answer: "Je dors environ 8 heures par nuit." },
            { question: "As-tu une routine différente le week-end ?", answer: "Oui, le week-end, je me lève plus tard et je passe plus de temps à jouer et à me détendre." },
            { question: "Que fais-tu le samedi matin ?", answer: "Le samedi matin, je fais une grasse matinée et je prends un petit-déjeuner tardif." },
            { question: "Que fais-tu le dimanche après-midi ?", answer: "Le dimanche après-midi, je passe du temps avec ma famille et je regarde un film." },
            { question: "Aides-tu à préparer les repas ?", answer: "Oui, j'aide parfois ma mère à préparer le dîner." },
            { question: "Que fais-tu le soir après l’école ?", answer: "Le soir, je fais du sport et je révise mes cours." },
            { question: "Quelle est ta journée préférée de la semaine et pourquoi ?", answer: "Ma journée préférée est le samedi car je peux me détendre et passer du temps avec mes amis." },
            { question: "Comment gères-tu ton temps entre l’école et les loisirs ?", answer: "Je planifie mon temps pour m'assurer de faire mes devoirs avant de me détendre." },
            { question: "Quels sont les moments de la journée que tu préfères ?", answer: "Je préfère le soir car c'est le moment où je peux me détendre après une journée bien remplie." },
            { question: "Quelle est ta routine du soir ?", answer: "Ma routine du soir inclut la révision de mes cours, un peu de détente, et le dîner avec ma famille." },
            { question: "Que fais-tu pour te relaxer après une longue journée ?", answer: "Je regarde la télévision ou je joue aux jeux vidéo pour me relaxer." }
        ],
        "Leisure and Hobbies": [
            { question: "Quels sont tes loisirs ?", answer: "Mes loisirs incluent les jeux vidéo, le football et regarder des films." },
            { question: "Que fais-tu pendant ton temps libre ?", answer: "Je joue aux jeux vidéo, je lis des livres ou je regarde des séries." },
            { question: "Pratiques-tu un sport ?", answer: "Oui, je joue au football avec mes amis." },
            { question: "Quel est ton sport préféré ?", answer: "Mon sport préféré est le football." },
            { question: "Joues-tu d’un instrument de musique ?", answer: "Non, je ne joue pas d'instrument de musique." },
            { question: "Quelle est ta musique préférée ?", answer: "J'aime la musique classique et le rock." },
            { question: "Quel genre de films aimes-tu regarder ?", answer: "J'aime regarder des films de science-fiction et d'action." },
            { question: "As-tu un acteur ou une actrice préféré(e) ?", answer: "Mon acteur préféré est Leonardo DiCaprio." },
            { question: "Que fais-tu avec tes amis pendant ton temps libre ?", answer: "Nous jouons au football ou nous regardons des films ensemble." },
            { question: "Vas-tu souvent au cinéma ?", answer: "Oui, je vais au cinéma une fois par mois." },
            { question: "Aimes-tu lire ? Si oui, quel genre de livres ?", answer: "Oui, j'aime lire des romans de science-fiction et de fantasy." },
            { question: "Quelle est ton émission de télévision préférée ?", answer: "Mon émission de télévision préférée est 'Stranger Things'." },
            { question: "Aimes-tu faire du shopping ?", answer: "Oui, j'aime acheter des vêtements et des gadgets." },
            { question: "Que fais-tu le week-end pour t’amuser ?", answer: "Le week-end, je joue au football et je rencontre mes amis." },
            { question: "Es-tu membre d’un club ou d’une association ?", answer: "Oui, je suis membre du club de football de mon université." },
            { question: "Aimes-tu sortir le soir ?", answer: "Oui, j'aime sortir avec mes amis pour dîner ou regarder un film." },
            { question: "Quelle est ta cuisine préférée ?", answer: "Ma cuisine préférée est la cuisine indienne." },
            { question: "Aimes-tu voyager pendant tes vacances ?", answer: "Oui, j'aime voyager et découvrir de nouveaux endroits." },
            { question: "Préfères-tu les activités en intérieur ou en extérieur ?", answer: "Je préfère les activités en extérieur, surtout le sport." },
            { question: "Comment occupes-tu ton temps pendant les vacances scolaires ?", answer: "Pendant les vacances scolaires, je voyage, je joue au football et je me détends." },
            { question: "Es-tu plutôt cinéma ou théâtre ?", answer: "Je préfère le cinéma car j'aime les films." },
            { question: "Vas-tu souvent à des concerts ?", answer: "Non, je ne vais pas souvent à des concerts." },
            { question: "Aimes-tu les jeux vidéo ?", answer: "Oui, j'adore les jeux vidéo, surtout les jeux de stratégie." },
            { question: "Quel est ton hobby préféré ?", answer: "Mon hobby préféré est de jouer aux jeux vidéo." },
            { question: "Que fais-tu pour te détendre ?", answer: "Je regarde des séries ou je joue à des jeux vidéo pour me détendre." }
        ],
        "Education and School Life": [
            { question: "Où vas-tu à l’école ?", answer: "Je vais à l'université à Delhi." },
            { question: "Comment est ton école ?", answer: "Mon université est grande, moderne et offre beaucoup d'installations." },
            { question: "Combien de matières étudies-tu ?", answer: "J'étudie cinq matières principales à l'université." },
            { question: "Quelle est ta matière préférée ?", answer: "Ma matière préférée est l'informatique car j'aime coder et créer des applications." },
            { question: "Quelle matière trouves-tu la plus difficile ?", answer: "La matière que je trouve la plus difficile est les mathématiques avancées." },
            { question: "Quel est ton emploi du temps ?", answer: "Mon emploi du temps commence à 9 heures avec des cours jusqu'à 16 heures." },
            { question: "À quelle heure commencent les cours ?", answer: "Les cours commencent à 9 heures du matin." },
            { question: "Que fais-tu pendant la récréation ?", answer: "Pendant la récréation, je parle avec mes amis et je mange une collation." },
            { question: "Quelle matière aimerais-tu étudier à l’avenir ?", answer: "À l'avenir, j'aimerais étudier la cybersécurité." },
            { question: "Quels sont les avantages de ton école ?", answer: "Les avantages sont de bonnes installations, des professeurs compétents, et un bon environnement d'apprentissage." },
            { question: "Quels sont les inconvénients de ton école ?", answer: "Les inconvénients sont la charge de travail élevée et parfois le manque de temps pour les loisirs." },
            { question: "Comment sont tes professeurs ?", answer: "Mes professeurs sont compétents et toujours prêts à aider." },
            { question: "Combien d’élèves y a-t-il dans ta classe ?", answer: "Il y a environ 30 élèves dans ma classe." },
            { question: "Qu’est-ce que tu n’aimes pas à l’école ?", answer: "Je n'aime pas les examens fréquents et la pression qui les accompagne." },
            { question: "Que fais-tu après les cours ?", answer: "Après les cours, je fais du sport et je révise mes leçons." },
            { question: "Participes-tu à des activités parascolaires ?", answer: "Oui, je participe au club de football et à des compétitions de codage." },
            { question: "Quel est ton meilleur souvenir d’école ?", answer: "Mon meilleur souvenir est quand mon équipe de football a gagné le championnat." },
            { question: "As-tu beaucoup de devoirs ?", answer: "Oui, j'ai beaucoup de devoirs, surtout en informatique." },
            { question: "Que penses-tu de l’uniforme scolaire ?", answer: "Je pense que l'uniforme scolaire crée un sentiment d'appartenance, mais parfois il est inconfortable." },
            { question: "Comment sont les repas à la cantine ?", answer: "Les repas à la cantine sont corrects, mais parfois un peu monotones." },
            { question: "Quelle est ton activité préférée à l’école ?", answer: "Mon activité préférée est le football." },
            { question: "Que voudrais-tu changer dans ton école ?", answer: "J'aimerais que les horaires soient plus flexibles et que les cours soient moins chargés." },
            { question: "Comment te prépares-tu pour les examens ?", answer: "Je révise régulièrement, je fais des fiches et des exercices pratiques." },
            { question: "Quels sont tes projets après l’école ?", answer: "Après l'université, je veux travailler dans une grande entreprise en tant qu'ingénieur en informatique." },
            { question: "Comment trouves-tu le système éducatif dans ton pays ?", answer: "Le système éducatif est bon, mais il pourrait être amélioré pour se concentrer davantage sur l'innovation et la créativité." }
        ],
        "Health and Well-being": [
            { question: "Que fais-tu pour rester en forme ?", answer: "Je fais du jogging tous les matins et je mange équilibré." },
            { question: "Quelle est ton alimentation quotidienne ?", answer: "Mon alimentation quotidienne comprend des fruits, des légumes, des céréales, et des protéines." },
            { question: "Pratiques-tu un sport régulièrement ?", answer: "Oui, je joue au football trois fois par semaine." },
            { question: "À quelle fréquence fais-tu de l’exercice ?", answer: "Je fais de l'exercice trois fois par semaine." },
            { question: "Que fais-tu pour te relaxer ?", answer: "Je médite et je passe du temps à lire ou à écouter de la musique." },
            { question: "Vas-tu souvent chez le médecin ?", answer: "Je vais chez le médecin pour un contrôle général une fois par an." },
            { question: "Que fais-tu si tu es malade ?", answer: "Si je suis malade, je prends des médicaments et je me repose." },
            { question: "As-tu déjà été hospitalisé(e) ?", answer: "Non, je n'ai jamais été hospitalisé." },
            { question: "Que penses-tu de l’alimentation saine ?", answer: "Je pense que manger sainement est essentiel pour maintenir une bonne santé." },
            { question: "Que manges-tu pour rester en bonne santé ?", answer: "Je mange beaucoup de fruits, de légumes, et de protéines pour rester en bonne santé." },
            { question: "Est-ce que tu dors suffisamment ?", answer: "Oui, je dors environ 8 heures chaque nuit." },
            { question: "Que penses-tu des régimes alimentaires ?", answer: "Je pense que les régimes alimentaires doivent être équilibrés et adaptés à chaque individu." },
            { question: "Prends-tu des vitamines ou des suppléments ?", answer: "Non, je préfère obtenir mes vitamines à partir d'une alimentation équilibrée." },
            { question: "As-tu des allergies ?", answer: "Non, je n'ai pas d'allergies connues." },
            { question: "Que fais-tu pour éviter le stress ?", answer: "Je médite, je fais de l'exercice, et je planifie mon temps pour éviter le stress." },
            { question: "Que penses-tu du tabagisme ?", answer: "Je pense que le tabagisme est très dangereux pour la santé et doit être évité." },
            { question: "As-tu déjà eu une blessure sportive ?", answer: "Oui, je me suis déjà foulé la cheville en jouant au football." },
            { question: "Que fais-tu pour garder un bon équilibre entre les études et les loisirs ?", answer: "Je planifie mon emploi du temps pour m'assurer que j'ai du temps pour mes études et mes loisirs." },
            { question: "Comment restes-tu motivé(e) pour rester en forme ?", answer: "Je reste motivé en fixant des objectifs de forme physique et en faisant de l'exercice avec des amis." },
            { question: "Que fais-tu pour prendre soin de ta santé mentale ?", answer: "Je parle avec mes amis et ma famille, je médite, et je fais des activités que j'aime." }
        ],
        "Travel and Holidays": [
            { question: "Aimes-tu voyager ?", answer: "Oui, j'adore voyager et découvrir de nouveaux endroits." },
            { question: "Où as-tu voyagé récemment ?", answer: "Récemment, j'ai voyagé à Jaipur, une belle ville historique en Inde." },
            { question: "Quel est ton pays préféré ?", answer: "Mon pays préféré est l'Inde car il a une grande diversité culturelle." },
            { question: "Où aimerais-tu aller pour tes prochaines vacances ?", answer: "Pour mes prochaines vacances, j'aimerais aller à Goa pour profiter des plages." },
            { question: "Préfères-tu les vacances à la mer ou à la montagne ?", answer: "Je préfère les vacances à la mer car j'aime la plage et les sports nautiques." },
            { question: "Que fais-tu généralement pendant les vacances ?", answer: "Pendant les vacances, je voyage, je me repose et je passe du temps avec ma famille." },
            { question: "Quelle est ta destination de vacances idéale ?", answer: "Ma destination de vacances idéale est les Maldives pour ses plages magnifiques." },
            { question: "Es-tu déjà allé(e) à l’étranger ?", answer: "Non, je n'ai pas encore voyagé à l'étranger." },
            { question: "Que penses-tu des voyages organisés ?", answer: "Je pense que les voyages organisés sont pratiques, mais je préfère voyager de manière indépendante." },
            { question: "As-tu déjà pris l’avion ?", answer: "Oui, j'ai pris l'avion plusieurs fois pour voyager en Inde." },
            { question: "Quels sont les avantages de voyager ?", answer: "Voyager permet de découvrir de nouvelles cultures, de se détendre, et d'apprendre de nouvelles choses." },
            { question: "Quels sont les inconvénients de voyager ?", answer: "Les inconvénients peuvent inclure les coûts élevés, le décalage horaire, et les longs trajets." },
            { question: "Où es-tu allé(e) en vacances l’année dernière ?", answer: "L'année dernière, je suis allé à Manali pour des vacances à la montagne." },
            { question: "Que penses-tu du tourisme ?", answer: "Je pense que le tourisme est une bonne chose car il permet aux gens de découvrir de nouveaux endroits et aide à l'économie locale." },
            { question: "Préfères-tu les voyages en groupe ou seul(e) ?", answer: "Je préfère les voyages en groupe car c'est plus amusant de partager des expériences avec des amis." },
            { question: "Que fais-tu pour te préparer avant un voyage ?", answer: "Avant un voyage, je planifie l'itinéraire, je fais mes bagages, et je m'assure d'avoir tous mes documents." },
            { question: "Que fais-tu pendant un long voyage ?", answer: "Pendant un long voyage, je lis des livres, j'écoute de la musique et je regarde des films." },
            { question: "Que penses-tu des voyages en voiture ?", answer: "J'aime les voyages en voiture car ils permettent de voir plus de paysages et d'arrêter où on veut." },
            { question: "Es-tu déjà allé(e) en colonie de vacances ?", answer: "Non, je n'ai jamais participé à une colonie de vacances." },
            { question: "As-tu déjà fait du camping ?", answer: "Oui, j'ai fait du camping une fois avec mes amis en montagne." },
            { question: "Quel est ton moyen de transport préféré pour voyager ?", answer: "Mon moyen de transport préféré pour voyager est l'avion car c'est rapide et pratique." },
            { question: "Que fais-tu pour te détendre pendant les vacances ?", answer: "Pendant les vacances, je me détends en lisant des livres, en me promenant sur la plage et en faisant du tourisme." },
            { question: "As-tu déjà rencontré des problèmes pendant un voyage ?", answer: "Oui, j'ai déjà eu des retards de vol et des problèmes de réservation d'hôtel." },
            { question: "Préfères-tu les hôtels ou les auberges de jeunesse ?", answer: "Je préfère les hôtels pour plus de confort et de services." },
            { question: "Que penses-tu des voyages écologiques ?", answer: "Je pense que les voyages écologiques sont importants pour protéger l'environnement." },
            { question: "Où aimerais-tu vivre si tu pouvais choisir n’importe quel pays ?", answer: "Si je pouvais choisir, j'aimerais vivre au Canada pour sa qualité de vie et ses paysages." },
            { question: "Que fais-tu quand tu arrives à une nouvelle destination ?", answer: "Quand j'arrive à une nouvelle destination, je me repose d'abord, puis je commence à explorer la région." },
            { question: "Que penses-tu des voyages de dernière minute ?", answer: "Je pense que les voyages de dernière minute peuvent être excitants mais un peu stressants à organiser." },
            { question: "As-tu déjà participé à un échange scolaire ?", answer: "Non, je n'ai jamais participé à un échange scolaire." },
            { question: "Que penses-tu des vacances dans ta propre ville ?", answer: "Je pense que les vacances dans sa propre ville peuvent être relaxantes et permettent de redécouvrir des endroits locaux." }
        ],
        "Shopping": [
            { question: "Aimes-tu faire du shopping ?", answer: "Oui, j'aime faire du shopping, surtout pour acheter des vêtements et des gadgets." },
            { question: "Où préfères-tu faire tes courses ?", answer: "Je préfère faire mes courses dans les centres commerciaux et en ligne." },
            { question: "Que penses-tu des centres commerciaux ?", answer: "Je pense que les centres commerciaux sont pratiques car on peut tout trouver au même endroit." },
            { question: "Préfères-tu acheter en ligne ou en magasin ?", answer: "Je préfère acheter en ligne car c'est plus pratique et il y a souvent plus de choix." },
            { question: "Quelle est ta boutique préférée ?", answer: "Ma boutique préférée est Decathlon pour les articles de sport." },
            { question: "Que penses-tu des soldes ?", answer: "Je pense que les soldes sont une bonne occasion pour acheter des articles à un prix réduit." },
            { question: "Que penses-tu de la mode ?", answer: "J'aime suivre les tendances de la mode, mais je préfère porter ce qui me convient le mieux." },
            { question: "Qu’as-tu acheté récemment ?", answer: "Récemment, j'ai acheté une nouvelle paire de chaussures de sport." },
            { question: "Es-tu influencé(e) par la publicité ?", answer: "Oui, parfois la publicité influence mes choix d'achat." },
            { question: "Préfères-tu acheter des produits de marque ou des produits génériques ?", answer: "Je préfère acheter des produits de marque pour la qualité, mais je n'hésite pas à acheter des produits génériques si nécessaire." },
            { question: "Vas-tu souvent au marché ?", answer: "Oui, je vais au marché local pour acheter des fruits et légumes frais." },
            { question: "Que penses-tu des achats d’occasion ?", answer: "Je pense que les achats d'occasion sont une bonne idée pour économiser de l'argent et réduire le gaspillage." },
            { question: "As-tu déjà acheté quelque chose que tu as regretté ?", answer: "Oui, j'ai déjà acheté des vêtements en ligne qui ne me convenaient pas du tout." },
            { question: "Comment gères-tu ton budget pour le shopping ?", answer: "Je fixe un budget mensuel pour le shopping et je m'efforce de ne pas le dépasser." },
            { question: "Qu’aimes-tu acheter le plus ?", answer: "J'aime surtout acheter des vêtements et des gadgets électroniques." }
        ],
        "Food and Drink": [
            { question: "Quelle est ta cuisine préférée ?", answer: "Ma cuisine préférée est la cuisine indienne, en particulier le biryani." },
            { question: "Que manges-tu au petit déjeuner ?", answer: "Je mange des céréales avec du lait ou des parathas pour le petit-déjeuner." },
            { question: "Aimes-tu cuisiner ?", answer: "Oui, j'aime essayer de nouvelles recettes de temps en temps." },
            { question: "Quelle est ta recette préférée ?", answer: "Ma recette préférée est le poulet au curry." },
            { question: "Que penses-tu de la restauration rapide ?", answer: "J'aime la restauration rapide, mais je sais qu'il ne faut pas en abuser." },
            { question: "Que manges-tu pour le déjeuner ?", answer: "Je mange souvent du riz avec des légumes et du curry pour le déjeuner." },
            { question: "Préfères-tu manger à la maison ou au restaurant ?", answer: "Je préfère manger à la maison car c'est plus sain et économique." },
            { question: "Quel est ton plat préféré ?", answer: "Mon plat préféré est le biryani." },
            { question: "Aimes-tu les desserts ?", answer: "Oui, j'aime beaucoup les desserts, surtout les gâteaux au chocolat." },
            { question: "Quelle est ta boisson préférée ?", answer: "Ma boisson préférée est le café." },
            { question: "Que penses-tu des plats végétariens ?", answer: "J'aime les plats végétariens, ils peuvent être très savoureux et sains." },
            { question: "As-tu déjà goûté à la cuisine étrangère ?", answer: "Oui, j'ai goûté à la cuisine italienne et chinoise." },
            { question: "Préfères-tu le sucré ou le salé ?", answer: "Je préfère le sucré, surtout les desserts." },
            { question: "Quelle est ta spécialité culinaire locale préférée ?", answer: "Ma spécialité culinaire locale préférée est le chole bhature." },
            { question: "Que penses-tu de l’alimentation biologique ?", answer: "Je pense que l'alimentation biologique est meilleure pour la santé, mais elle peut être coûteuse." },
            { question: "Aimes-tu essayer de nouveaux plats ?", answer: "Oui, j'aime essayer de nouveaux plats et découvrir de nouvelles saveurs." },
            { question: "Que manges-tu lors des fêtes ?", answer: "Lors des fêtes, je mange des plats traditionnels indiens comme le paneer et le gulab jamun." },
            { question: "As-tu déjà suivi un régime alimentaire particulier ?", answer: "Non, je n'ai jamais suivi de régime alimentaire particulier." },
            { question: "Préfères-tu les plats faits maison ou ceux achetés tout prêts ?", answer: "Je préfère les plats faits maison car ils sont plus sains et frais." },
            { question: "Quelle est ta glace préférée ?", answer: "Ma glace préférée est la glace au chocolat." }
        ],
        "Media and Technology": [
            { question: "Utilises-tu souvent les réseaux sociaux ?", answer: "Oui, j'utilise les réseaux sociaux tous les jours pour rester en contact avec mes amis." },
            { question: "Que penses-tu de l’influence des médias sur la société ?", answer: "Je pense que les médias ont une grande influence sur la société, parfois positive, parfois négative." },
            { question: "Quelle est ton application préférée ?", answer: "Mon application préférée est Instagram." },
            { question: "Comment utilises-tu ton smartphone ?", answer: "J'utilise mon smartphone pour rester en contact avec mes amis, prendre des photos, et naviguer sur Internet." },
            { question: "Aimes-tu regarder la télévision ?", answer: "Oui, j'aime regarder la télévision, surtout les séries et les documentaires." },
            { question: "Que penses-tu des journaux en ligne ?", answer: "Je pense que les journaux en ligne sont pratiques et permettent d'accéder à l'information rapidement." },
            { question: "Préfères-tu les livres numériques ou les livres papier ?", answer: "Je préfère les livres papier car j'aime sentir le livre dans mes mains." },
            { question: "Que penses-tu de la publicité en ligne ?", answer: "Je pense que la publicité en ligne est parfois trop intrusive, mais elle peut être utile pour découvrir de nouveaux produits." },
            { question: "Aimes-tu écouter des podcasts ?", answer: "Oui, j'aime écouter des podcasts sur la technologie et le développement personnel." },
            { question: "Comment utilises-tu Internet pour tes études ?", answer: "J'utilise Internet pour rechercher des informations, suivre des cours en ligne, et communiquer avec mes professeurs." },
            { question: "As-tu déjà fait des achats en ligne ?", answer: "Oui, je fais souvent des achats en ligne pour des vêtements et des gadgets." },
            { question: "Que penses-tu des jeux vidéo ?", answer: "J'aime beaucoup les jeux vidéo, ils sont divertissants et permettent de se détendre." },
            { question: "Es-tu dépendant(e) de la technologie ?", answer: "Je pense que je suis un peu dépendant de la technologie, surtout pour les études et la communication." },
            { question: "Utilises-tu un ordinateur ou une tablette pour travailler ?", answer: "J'utilise un ordinateur pour travailler car il est plus pratique pour coder et faire des recherches." },
            { question: "Que penses-tu de la cyberintimidation ?", answer: "Je pense que la cyberintimidation est un problème grave qui doit être traité sérieusement." },
            { question: "Aimes-tu les films en streaming ?", answer: "Oui, j'aime beaucoup regarder des films en streaming, c'est pratique et il y a beaucoup de choix." },
            { question: "Que penses-tu des fake news ?", answer: "Je pense que les fake news sont dangereuses et qu'il est important de vérifier les informations avant de les croire." },
            { question: "Utilises-tu la technologie pour rester en contact avec tes amis ?", answer: "Oui, j'utilise des applications de messagerie et les réseaux sociaux pour rester en contact avec mes amis." },
            { question: "As-tu déjà utilisé une application de fitness ?", answer: "Oui, j'ai utilisé une application de fitness pour suivre mes entraînements." },
            { question: "Que penses-tu de l’intelligence artificielle ?", answer: "Je pense que l'intelligence artificielle a un grand potentiel pour améliorer nos vies, mais il faut l'utiliser de manière éthique." }
        ],
        "Environmental Issues": [
            { question: "Que fais-tu pour protéger l’environnement ?", answer: "Je recycle mes déchets, je réduis ma consommation d'eau, et j'utilise des sacs réutilisables." },
            { question: "Es-tu concerné(e) par le réchauffement climatique ?", answer: "Oui, je suis très concerné par le réchauffement climatique et je pense que nous devons agir rapidement pour le combattre." },
            { question: "Que penses-tu du recyclage ?", answer: "Je pense que le recyclage est essentiel pour réduire les déchets et préserver les ressources naturelles." },
            { question: "Que fais-tu pour réduire tes déchets ?", answer: "Je réutilise les objets autant que possible, je composte mes déchets organiques, et j'évite d'acheter des produits avec beaucoup d'emballage." },
            { question: "Utilises-tu des produits écologiques ?", answer: "Oui, j'utilise des produits écologiques pour nettoyer la maison et pour les soins personnels." },
            { question: "Que penses-tu des énergies renouvelables ?", answer: "Je pense que les énergies renouvelables sont l'avenir et qu'elles sont essentielles pour réduire notre dépendance aux énergies fossiles." },
            { question: "Préfères-tu les transports en commun ou la voiture ?", answer: "Je préfère les transports en commun car ils sont plus écologiques et économiques." },
            { question: "As-tu déjà participé à une campagne environnementale ?", answer: "Non, je n'ai jamais participé à une campagne environnementale, mais je m'y intéresse." },
            { question: "Que penses-tu de l’agriculture biologique ?", answer: "Je pense que l'agriculture biologique est meilleure pour l'environnement et pour la santé, mais elle est souvent plus chère." },
            { question: "Es-tu pour ou contre la viande artificielle ?", answer: "Je suis pour la viande artificielle si elle peut réduire l'impact environnemental de l'élevage traditionnel." },
            { question: "Que fais-tu pour économiser l’eau ?", answer: "Je prends des douches courtes, je répare les fuites et je collecte l'eau de pluie pour arroser les plantes." },
            { question: "Que penses-tu des voitures électriques ?", answer: "Je pense que les voitures électriques sont une bonne solution pour réduire les émissions de gaz à effet de serre." },
            { question: "Es-tu concerné(e) par la pollution plastique ?", answer: "Oui, je suis très concerné par la pollution plastique et j'essaie de réduire ma consommation de plastique autant que possible." },
            { question: "Que penses-tu du changement climatique ?", answer: "Je pense que le changement climatique est la plus grande menace pour notre planète et qu'il est urgent d'agir." },
            { question: "Que fais-tu pour économiser l’énergie ?", answer: "J'éteins les lumières quand je n'en ai pas besoin, j'utilise des appareils économes en énergie et je privilégie les énergies renouvelables." },
            { question: "Es-tu pour ou contre les OGM ?", answer: "Je suis contre les OGM car ils peuvent avoir des effets négatifs sur l'environnement et la santé." },
            { question: "Que penses-tu de la déforestation ?", answer: "Je pense que la déforestation est un problème majeur qui doit être arrêté pour protéger les écosystèmes et la biodiversité." },
            { question: "Es-tu concerné(e) par la disparition des espèces animales ?", answer: "Oui, je suis très préoccupé par la disparition des espèces animales et je pense que nous devons faire plus pour les protéger." },
            { question: "Que penses-tu du tourisme écologique ?", answer: "Je pense que le tourisme écologique est une excellente façon de découvrir le monde tout en respectant l'environnement." },
            { question: "Que penses-tu des produits de beauté biologiques ?", answer: "Je pense que les produits de beauté biologiques sont meilleurs pour la peau et pour l'environnement, mais ils sont souvent plus chers." }
        ],
        "Global Issues": [
            { question: "Que penses-tu de la mondialisation ?", answer: "Je pense que la mondialisation a des aspects positifs comme l'échange culturel, mais elle peut aussi créer des inégalités économiques." },
            { question: "Que fais-tu pour aider les personnes dans le besoin ?", answer: "Je fais des dons à des associations caritatives et je participe à des collectes de vêtements." },
            { question: "Que penses-tu des droits de l’homme ?", answer: "Je pense que les droits de l'homme sont essentiels et que tout le monde devrait en bénéficier, indépendamment de son origine ou de sa religion." },
            { question: "Es-tu concerné(e) par la pauvreté ?", answer: "Oui, la pauvreté est un problème majeur qui affecte des millions de personnes dans le monde et qui doit être combattu." },
            { question: "Que penses-tu des migrations ?", answer: "Je pense que les migrations sont un phénomène naturel, mais elles doivent être bien gérées pour assurer la sécurité et l'intégration des migrants." },
            { question: "Que fais-tu pour soutenir les causes humanitaires ?", answer: "Je fais des dons et je soutiens des organisations qui travaillent dans le domaine humanitaire." },
            { question: "Es-tu préoccupé(e) par les inégalités sociales ?", answer: "Oui, je suis préoccupé par les inégalités sociales et je pense que nous devons faire plus pour les réduire." },
            { question: "Que penses-tu de l’aide internationale ?", answer: "Je pense que l'aide internationale est importante, mais elle doit être bien ciblée pour être vraiment efficace." },
            { question: "Que penses-tu des conflits dans le monde ?", answer: "Je pense que les conflits sont terribles et qu'il est important de promouvoir la paix et la diplomatie pour les résoudre." },
            { question: "Que penses-tu du commerce équitable ?", answer: "Je soutiens le commerce équitable car il garantit des conditions de travail justes et un prix équitable pour les producteurs." },
            { question: "Es-tu concerné(e) par la surpopulation ?", answer: "Oui, la surpopulation est un problème qui peut entraîner des tensions sur les ressources naturelles et l'environnement." },
            { question: "Que penses-tu de la crise des réfugiés ?", answer: "Je pense que la crise des réfugiés est une urgence humanitaire et que les pays doivent travailler ensemble pour trouver des solutions." },
            { question: "Que penses-tu des droits des femmes ?", answer: "Je pense que les droits des femmes sont fondamentaux et qu'il est important de continuer à lutter pour l'égalité des sexes." },
            { question: "Es-tu pour ou contre la peine de mort ?", answer: "Je suis contre la peine de mort car je crois en la réhabilitation plutôt qu'en la vengeance." },
            { question: "Que penses-tu de la situation politique actuelle ?", answer: "Je pense que la situation politique actuelle est complexe, avec de nombreux défis à relever, mais il est important de rester engagé et informé." }
        ],
        "Work and Employment": [
            { question: "As-tu un petit boulot ?", answer: "Non, je n'ai pas de petit boulot car je me concentre sur mes études." },
            { question: "Que penses-tu des stages en entreprise ?", answer: "Je pense que les stages en entreprise sont très utiles pour acquérir de l'expérience et se préparer au monde du travail." },
            { question: "Que fais-tu pour gagner de l’argent ?", answer: "Actuellement, je ne travaille pas, mais j'économise l'argent de poche que je reçois de mes parents." },
            { question: "Quel est ton métier de rêve ?", answer: "Mon métier de rêve est de devenir ingénieur en informatique et de travailler sur des projets innovants." },
            { question: "Que penses-tu du travail à distance ?", answer: "Je pense que le travail à distance est une bonne option pour beaucoup de personnes car il offre plus de flexibilité." },
            { question: "Es-tu intéressé(e) par une carrière internationale ?", answer: "Oui, je suis intéressé par une carrière internationale car j'aimerais travailler dans un environnement multiculturel." },
            { question: "As-tu déjà fait du bénévolat ?", answer: "Oui, j'ai fait du bénévolat pour des associations locales qui aident les enfants défavorisés." },
            { question: "Que penses-tu des horaires de travail flexibles ?", answer: "Je pense que les horaires de travail flexibles sont une bonne idée car ils permettent de mieux gérer son temps." },
            { question: "Quel travail aimerais-tu faire plus tard ?", answer: "Plus tard, j'aimerais travailler comme ingénieur en informatique dans une grande entreprise technologique." },
            { question: "Que penses-tu de la retraite ?", answer: "Je pense que la retraite est une période importante de la vie où l'on peut enfin se détendre après des années de travail." },
            { question: "Que fais-tu pour améliorer tes compétences professionnelles ?", answer: "Je suis des cours en ligne, je lis des livres spécialisés, et je participe à des projets pour améliorer mes compétences." },
            { question: "As-tu déjà participé à un salon de l’emploi ?", answer: "Non, je n'ai pas encore participé à un salon de l'emploi, mais j'aimerais le faire à l'avenir." },
            { question: "Que penses-tu de l’équilibre travail-vie privée ?", answer: "Je pense que l'équilibre travail-vie privée est crucial pour maintenir une bonne santé mentale et physique." },
            { question: "Que penses-tu des syndicats ?", answer: "Je pense que les syndicats jouent un rôle important dans la protection des droits des travailleurs." },
            { question: "As-tu des expériences de travail à l’étranger ?", answer: "Non, je n'ai pas encore travaillé à l'étranger, mais j'aimerais le faire à l'avenir." },
            { question: "Que penses-tu du chômage ?", answer: "Je pense que le chômage est un problème majeur et qu'il est important de créer plus d'opportunités d'emploi." },
            { question: "Que fais-tu pour préparer ton avenir professionnel ?", answer: "Je travaille dur à l'université, je fais des stages, et je développe mes compétences techniques pour préparer mon avenir professionnel." },
            { question: "Que penses-tu des contrats à durée déterminée ?", answer: "Je pense que les contrats à durée déterminée peuvent être utiles pour des missions spécifiques, mais ils offrent moins de sécurité que les contrats à durée indéterminée." },
            { question: "Es-tu intéressé(e) par l’entrepreneuriat ?", answer: "Oui, l'entrepreneuriat m'intéresse car j'aimerais un jour créer ma propre entreprise." },
            { question: "Que penses-tu du salaire minimum ?", answer: "Je pense que le salaire minimum est important pour garantir un niveau de vie décent à tous les travailleurs." }
        ],
        "Social Issues": [
            { question: "Que penses-tu des inégalités sociales ?", answer: "Je pense que les inégalités sociales sont un problème majeur qui doit être abordé par des politiques publiques et des initiatives sociales." },
            { question: "Es-tu concerné(e) par la violence urbaine ?", answer: "Oui, je suis concerné par la violence urbaine et je pense qu'il est important de renforcer la sécurité dans les villes." },
            { question: "Que penses-tu de la discrimination ?", answer: "Je pense que la discrimination est injuste et inacceptable, et qu'il est important de promouvoir l'égalité et le respect de tous." },
            { question: "Que fais-tu pour aider les personnes âgées ?", answer: "Je rends visite à mes grands-parents régulièrement et je les aide avec les tâches qu'ils ont du mal à accomplir." },
            { question: "Es-tu préoccupé(e) par le harcèlement scolaire ?", answer: "Oui, le harcèlement scolaire est un problème sérieux qui peut avoir des conséquences graves pour les victimes." },
            { question: "Que penses-tu de la diversité culturelle ?", answer: "Je pense que la diversité culturelle est une richesse et qu'il est important de la célébrer et de la respecter." },
            { question: "Que penses-tu de la tolérance ?", answer: "Je pense que la tolérance est essentielle pour vivre en harmonie dans une société diverse." },
            { question: "Es-tu pour ou contre le mariage homosexuel ?", answer: "Je suis pour le mariage homosexuel car je crois en l'égalité des droits pour tous." },
            { question: "Que penses-tu de l’intégration des immigrants ?", answer: "Je pense que l'intégration des immigrants est importante pour qu'ils puissent s'intégrer et contribuer à la société d'accueil." },
            { question: "Que penses-tu du racisme ?", answer: "Je pense que le racisme est une forme de haine et d'ignorance qui doit être combattue par l'éducation et la sensibilisation." },
            { question: "Que penses-tu des droits des enfants ?", answer: "Je pense que les droits des enfants doivent être protégés et que tous les enfants doivent avoir accès à l'éducation, aux soins de santé et à un environnement sûr." },
            { question: "Es-tu concerné(e) par l’alcoolisme chez les jeunes ?", answer: "Oui, l'alcoolisme chez les jeunes est un problème sérieux qui peut avoir des conséquences graves sur leur santé et leur avenir." },
            { question: "Que penses-tu du travail des enfants ?", answer: "Je suis fermement opposé au travail des enfants car il prive les enfants de leur enfance et de leur droit à l'éducation." },
            { question: "Que penses-tu de la criminalité dans ta ville ?", answer: "Je pense que la criminalité est un problème qui doit être abordé par des mesures de prévention et de sécurité." },
            { question: "Que fais-tu pour lutter contre l’exclusion sociale ?", answer: "Je fais du bénévolat pour des associations locales qui aident les personnes défavorisées." },
            { question: "Que penses-tu de l’inégalité entre les sexes ?", answer: "Je pense que l'inégalité entre les sexes est injuste et qu'il est important de lutter pour l'égalité des sexes dans tous les domaines de la société." },
            { question: "Es-tu préoccupé(e) par la santé mentale des jeunes ?", answer: "Oui, la santé mentale des jeunes est un sujet très important et je pense qu'il est crucial de leur fournir le soutien dont ils ont besoin." },
            { question: "Que penses-tu des solutions pour lutter contre la pauvreté ?", answer: "Je pense que des solutions telles que l'éducation, l'emploi et le soutien social sont essentielles pour lutter contre la pauvreté." }
        ],
        "Relationships": [
            { question: "Comment décrirais-tu ta relation avec tes parents ?", answer: "J'ai une relation très proche avec mes parents, nous nous parlons de tout et ils me soutiennent dans mes choix." },
            { question: "Comment te sens-tu avec tes amis ?", answer: "Je me sens très bien avec mes amis, ils sont toujours là pour moi et nous partageons de nombreux moments amusants." },
            { question: "Quelles sont les qualités d’un bon ami ?", answer: "Un bon ami doit être loyal, honnête, et toujours prêt à aider." },
            { question: "Est-ce que tu préfères passer du temps avec ta famille ou avec tes amis ?", answer: "Je préfère passer du temps avec ma famille car ils me connaissent bien, mais j'aime aussi beaucoup passer du temps avec mes amis." },
            { question: "Comment gères-tu les conflits avec les autres ?", answer: "Je préfère parler calmement des problèmes et essayer de trouver une solution qui satisfait tout le monde." },
            { question: "Est-ce que tu crois que l’amitié est importante ? Pourquoi ?", answer: "Oui, l'amitié est très importante car elle nous apporte du soutien, du réconfort et des moments de joie." },
            { question: "Que fais-tu avec tes amis pendant ton temps libre ?", answer: "Nous jouons au football, nous regardons des films, et nous discutons de tout et de rien." },
            { question: "Comment te sens-tu quand tu es avec ta famille ?", answer: "Je me sens en sécurité et soutenu quand je suis avec ma famille." },
            { question: "As-tu une relation spéciale avec un membre de ta famille ?", answer: "Oui, j'ai une relation spéciale avec ma mère, elle est toujours là pour m'écouter et me donner des conseils." },
            { question: "Comment est-ce que tu maintiens le contact avec tes amis qui vivent loin ?", answer: "Je garde le contact avec mes amis qui vivent loin grâce aux réseaux sociaux et aux appels vidéo." },
            { question: "Que penses-tu des réseaux sociaux pour garder des relations ?", answer: "Je pense que les réseaux sociaux sont très utiles pour garder le contact, mais il est important de ne pas en dépendre entièrement." },
            { question: "As-tu déjà eu un désaccord avec un ami ? Comment l’as-tu résolu ?", answer: "Oui, j'ai déjà eu un désaccord avec un ami, mais nous avons discuté calmement et trouvé un compromis." },
            { question: "Comment choisis-tu tes amis ?", answer: "Je choisis mes amis en fonction de leur loyauté, de leur honnêteté, et de leur capacité à me faire rire." },
            { question: "Quelle est la chose la plus importante dans une relation amicale ?", answer: "La chose la plus importante dans une relation amicale est la confiance." },
            { question: "Comment aides-tu tes amis en difficulté ?", answer: "Je suis là pour les écouter, je leur donne des conseils, et je les soutiens autant que je peux." },
            { question: "Que penses-tu de l’importance de la famille dans ta vie ?", answer: "Je pense que la famille est très importante car elle est toujours là pour nous soutenir, peu importe les circonstances." },
            { question: "Est-ce que tu passes beaucoup de temps avec tes grands-parents ?", answer: "Oui, je passe du temps avec mes grands-parents chaque fois que je le peux, ils ont beaucoup de sagesse à partager." },
            { question: "Comment décrirais-tu la relation avec tes frères et sœurs ?", answer: "Je suis enfant unique, mais je suis très proche de mes cousins." },
            { question: "Comment célèbres-tu les occasions spéciales avec tes proches ?", answer: "Nous célébrons les occasions spéciales en famille avec de bons repas et des moments de partage." },
            { question: "Quelle est ta meilleure expérience avec tes amis ?", answer: "Ma meilleure expérience avec mes amis est un voyage que nous avons fait ensemble à la montagne." }
        ],
        "Cultural Diversity": [
            { question: "Que penses-tu de la diversité culturelle dans ton pays ?", answer: "Je pense que la diversité culturelle dans mon pays est une grande richesse qui nous permet de découvrir et d'apprécier différentes traditions et modes de vie." },
            { question: "Es-tu intéressé(e) par la découverte d’autres cultures ?", answer: "Oui, je suis très intéressé par la découverte d'autres cultures car cela permet d'élargir ses horizons et de mieux comprendre le monde." },
            { question: "As-tu déjà participé à un festival culturel ?", answer: "Oui, j'ai déjà participé à des festivals culturels comme Diwali, où j'ai pu découvrir différentes traditions et coutumes." },
            { question: "Que penses-tu des échanges culturels entre pays ?", answer: "Je pense que les échanges culturels entre pays sont très bénéfiques car ils favorisent la compréhension mutuelle et l'amitié entre les peuples." },
            { question: "As-tu des amis d’origine différente ?", answer: "Oui, j'ai des amis d'origines différentes et cela enrichit nos échanges et notre compréhension mutuelle." },
            { question: "Comment la diversité culturelle influence-t-elle ton quotidien ?", answer: "La diversité culturelle influence mon quotidien en m'exposant à différents modes de pensée, de nourriture, de musique, et de traditions." },
            { question: "Que penses-tu de l’apprentissage de nouvelles langues ?", answer: "Je pense que l'apprentissage de nouvelles langues est très important car il permet de mieux comprendre et de communiquer avec des personnes de différentes cultures." },
            { question: "Comment la culture affecte-t-elle la manière dont tu vis ?", answer: "La culture affecte la manière dont je vis en influençant mes valeurs, mes croyances, et mes pratiques quotidiennes." },
            { question: "Es-tu intéressé(e) par la cuisine d’autres cultures ?", answer: "Oui, j'adore essayer la cuisine d'autres cultures car c'est une manière délicieuse de découvrir de nouvelles traditions." },
            { question: "As-tu déjà célébré une fête d’une autre culture ?", answer: "Oui, j'ai déjà célébré le Nouvel An chinois avec des amis et c'était une expérience très enrichissante." },
            { question: "Comment l’immigration affecte-t-elle la diversité culturelle ?", answer: "L'immigration enrichit la diversité culturelle en apportant de nouvelles traditions, langues et coutumes dans le pays d'accueil." },
            { question: "Que penses-tu de l’influence de la musique d’autres cultures ?", answer: "Je pense que la musique d'autres cultures est une forme d'expression artistique puissante qui peut rassembler les gens au-delà des frontières." },
            { question: "Es-tu intéressé(e) par la mode d’autres cultures ?", answer: "Oui, je trouve la mode d'autres cultures fascinante car elle reflète l'histoire et les traditions de ces cultures." },
            { question: "Comment penses-tu que les voyages peuvent enrichir ta compréhension des autres cultures ?", answer: "Les voyages permettent de vivre des expériences directes et d'interagir avec les habitants locaux, ce qui enrichit grandement la compréhension des autres cultures." },
            { question: "Que penses-tu des traditions et coutumes des autres pays ?", answer: "Je pense que les traditions et coutumes des autres pays sont fascinantes et méritent d'être respectées et célébrées." }
        ],
        "Science and Technology": [
            { question: "Comment la technologie influence-t-elle ta vie quotidienne ?", answer: "La technologie influence ma vie quotidienne en me permettant de rester connecté, d'apprendre en ligne, et d'automatiser de nombreuses tâches." },
            { question: "Es-tu intéressé(e) par les nouvelles technologies ?", answer: "Oui, je suis très intéressé par les nouvelles technologies, surtout dans le domaine de l'informatique et de l'intelligence artificielle." },
            { question: "Que penses-tu des progrès en médecine ?", answer: "Je pense que les progrès en médecine sont incroyables car ils permettent de sauver des vies et d'améliorer la qualité de vie des gens." },
            { question: "Est-ce que tu penses que la technologie améliore notre qualité de vie ?", answer: "Oui, je pense que la technologie améliore notre qualité de vie en rendant de nombreux aspects de notre quotidien plus faciles et plus efficaces." },
            { question: "Que penses-tu de l’utilisation des robots dans l’industrie ?", answer: "Je pense que l'utilisation des robots dans l'industrie est une avancée importante car elle augmente l'efficacité et réduit les coûts, mais elle peut aussi entraîner des pertes d'emplois." },
            { question: "Est-ce que les avancées technologiques sont toujours positives ?", answer: "Non, les avancées technologiques ne sont pas toujours positives, elles peuvent parfois entraîner des problèmes éthiques ou des inégalités." },
            { question: "Comment utilises-tu la science dans ton quotidien ?", answer: "J'utilise la science dans mon quotidien pour comprendre le monde qui m'entoure, que ce soit en cuisine, en jardinage, ou dans la résolution de problèmes techniques." },
            { question: "Que penses-tu de l’impact de la technologie sur l’éducation ?", answer: "Je pense que la technologie a un impact positif sur l'éducation car elle permet un accès plus large aux ressources et aux informations." },
            { question: "As-tu déjà visité un musée de la science ?", answer: "Oui, j'ai visité un musée de la science et c'était une expérience fascinante où j'ai appris beaucoup de choses." },
            { question: "Que penses-tu de l’avenir de la technologie ?", answer: "Je pense que l'avenir de la technologie est très prometteur, avec des innovations qui changeront la façon dont nous vivons et travaillons." }
        ],
        "Arts and Entertainment": [
            { question: "Aimes-tu aller au musée ?", answer: "Oui, j'aime aller au musée car c'est une façon d'apprendre sur l'histoire et l'art." },
            { question: "Quel est ton artiste préféré ?", answer: "Mon artiste préféré est Vincent van Gogh pour ses couleurs vibrantes et ses paysages émouvants." },
            { question: "Aimes-tu les expositions d’art ?", answer: "Oui, j'aime beaucoup les expositions d'art car elles permettent de découvrir de nouveaux artistes et styles." },
            { question: "Que penses-tu des films d’art ?", answer: "Je pense que les films d'art sont très intéressants car ils offrent une perspective différente et plus profonde sur la vie." },
            { question: "Préfères-tu la peinture ou la sculpture ?", answer: "Je préfère la peinture car elle permet d'exprimer des émotions et des idées de manière plus colorée et vivante." },
            { question: "Que penses-tu des spectacles de danse ?", answer: "Je pense que les spectacles de danse sont une forme d'expression artistique très belle et émotive." },
            { question: "Aimes-tu aller au théâtre ?", answer: "Oui, j'aime aller au théâtre pour voir des pièces qui font réfléchir et qui racontent des histoires captivantes." },
            { question: "Que penses-tu des festivals de musique ?", answer: "Je pense que les festivals de musique sont une excellente façon de découvrir de nouveaux artistes et de partager des moments de joie avec d'autres mélomanes." },
            { question: "As-tu déjà assisté à un concert ?", answer: "Oui, j'ai déjà assisté à un concert de rock et c'était une expérience incroyable." },
            { question: "Quel est ton film préféré ?", answer: "Mon film préféré est 'Inception' car il est intellectuellement stimulant et visuellement époustouflant." },
            { question: "Préfères-tu les films ou les pièces de théâtre ?", answer: "Je préfère les films car ils offrent une expérience immersive avec des effets spéciaux et des bandes sonores." },
            { question: "Que penses-tu de la photographie comme forme d’art ?", answer: "Je pense que la photographie est une forme d'art puissante qui capture des moments et des émotions de manière unique." },
            { question: "As-tu déjà visité un opéra ?", answer: "Non, je n'ai jamais visité un opéra, mais j'aimerais le faire un jour pour vivre cette expérience culturelle." },
            { question: "Que penses-tu des films d’animation ?", answer: "Je pense que les films d'animation sont un moyen créatif et amusant de raconter des histoires pour tous les âges." },
            { question: "Aimes-tu les comédies musicales ?", answer: "Oui, j'aime les comédies musicales car elles combinent la musique, la danse et le théâtre de manière divertissante." },
            { question: "Que penses-tu des spectacles de rue ?", answer: "Je pense que les spectacles de rue sont une expression artistique vivante et accessible à tous." },
            { question: "Es-tu intéressé(e) par l’histoire de l’art ?", answer: "Oui, l'histoire de l'art m'intéresse car elle nous aide à comprendre les cultures et les sociétés à travers les âges." },
            { question: "Que penses-tu de la musique classique ?", answer: "Je trouve la musique classique très apaisante et elle a un grand pouvoir émotionnel." },
            { question: "Aimes-tu aller à des expositions de photos ?", answer: "Oui, j'aime aller à des expositions de photos pour voir comment les photographes capturent des moments uniques." },
            { question: "Que penses-tu du rôle des arts dans la société ?", answer: "Je pense que les arts jouent un rôle crucial dans la société en nous inspirant, en nous faisant réfléchir et en enrichissant nos vies." }
        ],
        "Future Plans": [
            { question: "Quels sont tes projets pour l’avenir ?", answer: "Je prévois de terminer mes études, de trouver un emploi dans le domaine de l'informatique, et de continuer à apprendre et à évoluer professionnellement." },
            { question: "Où aimerais-tu vivre plus tard ?", answer: "Plus tard, j'aimerais vivre dans une grande ville avec de nombreuses opportunités professionnelles, comme Delhi ou Mumbai." },
            { question: "Quelle carrière souhaites-tu poursuivre ?", answer: "Je souhaite poursuivre une carrière en tant qu'ingénieur en informatique, spécialisé dans le développement de logiciels." },
            { question: "Que penses-tu de l’idée d’étudier à l’étranger ?", answer: "Je pense que l'idée d'étudier à l'étranger est très intéressante car elle permet d'élargir ses horizons et de découvrir de nouvelles cultures." },
            { question: "As-tu des plans pour voyager dans le futur ?", answer: "Oui, j'ai l'intention de voyager dans plusieurs pays pour découvrir différentes cultures et paysages." },
            { question: "Comment te prépares-tu pour ton futur métier ?", answer: "Je me prépare pour mon futur métier en étudiant sérieusement, en suivant des stages, et en participant à des projets pratiques." },
            { question: "Est-ce que tu aimerais créer ta propre entreprise ?", answer: "Oui, j'aimerais créer ma propre entreprise dans le domaine de la technologie pour développer des solutions innovantes." },
            { question: "Où te vois-tu dans cinq ans ?", answer: "Dans cinq ans, je me vois travailler dans une entreprise technologique de premier plan et continuer à développer mes compétences." },
            { question: "Quels sont tes rêves pour l’avenir ?", answer: "Mon rêve est de réussir dans ma carrière, de voyager à travers le monde, et de contribuer positivement à la société." },
            { question: "Que penses-tu des études supérieures ?", answer: "Je pense que les études supérieures sont importantes pour approfondir ses connaissances et se spécialiser dans un domaine." },
            { question: "Est-ce que tu prévois de continuer tes études après l’école secondaire ?", answer: "Oui, je prévois de continuer mes études et de poursuivre un diplôme universitaire." },
            { question: "Que feras-tu juste après avoir fini tes études ?", answer: "Juste après avoir fini mes études, je chercherai un emploi dans le domaine de l'informatique." },
            { question: "Est-ce que tu as déjà envisagé de changer de pays ?", answer: "Oui, j'ai envisagé de changer de pays pour avoir plus d'opportunités professionnelles et découvrir de nouvelles cultures." },
            { question: "Quelle est ta plus grande ambition ?", answer: "Ma plus grande ambition est de devenir un expert reconnu dans mon domaine et d'avoir un impact positif sur le monde." },
            { question: "Que penses-tu de l’idée de travailler à l’étranger ?", answer: "Je trouve l'idée de travailler à l'étranger très excitante car elle permet de découvrir de nouveaux environnements de travail et de nouvelles cultures." }
        ],
        "Social Media and Communication": [
            { question: "Quelle est ton opinion sur les réseaux sociaux ?", answer: "Je pense que les réseaux sociaux sont un excellent moyen de rester en contact avec les gens, mais il est important de les utiliser de manière responsable." },
            { question: "Combien de temps passes-tu sur les réseaux sociaux chaque jour ?", answer: "Je passe environ deux heures par jour sur les réseaux sociaux pour rester en contact avec mes amis et suivre les actualités." },
            { question: "Que penses-tu de la communication via Internet ?", answer: "Je pense que la communication via Internet est très pratique, surtout pour rester en contact avec des personnes à distance, mais elle ne remplace pas les interactions en face-à-face." },
            { question: "Préfères-tu parler en personne ou en ligne ?", answer: "Je préfère parler en personne car c'est plus authentique et il est plus facile de comprendre les émotions des autres." },
            { question: "Que penses-tu de l’influence des réseaux sociaux sur la société ?", answer: "Je pense que les réseaux sociaux ont une grande influence sur la société, à la fois positive et négative, en termes de communication, de marketing et de diffusion d'informations." },
            { question: "Utilises-tu souvent des applications de messagerie instantanée ?", answer: "Oui, j'utilise souvent des applications de messagerie instantanée pour discuter avec mes amis et ma famille." },
            { question: "Comment utilises-tu les réseaux sociaux pour rester en contact avec tes amis ?", answer: "J'utilise les réseaux sociaux pour envoyer des messages, partager des photos, et organiser des rencontres avec mes amis." },
            { question: "Que penses-tu de la protection de la vie privée sur Internet ?", answer: "Je pense que la protection de la vie privée sur Internet est un sujet très important et qu'il est essentiel de faire attention à ce que l'on partage en ligne." },
            { question: "Comment te protèges-tu en ligne ?", answer: "Je me protège en ligne en utilisant des mots de passe forts, en ne partageant pas d'informations personnelles sensibles, et en étant prudent avec les liens et les fichiers inconnus." },
            { question: "Que penses-tu des commentaires anonymes sur les réseaux sociaux ?", answer: "Je pense que les commentaires anonymes peuvent parfois être négatifs et encourager des comportements irresponsables, mais ils peuvent aussi permettre aux gens de s'exprimer librement." },
            { question: "As-tu déjà rencontré des amis que tu as connus en ligne ?", answer: "Non, je n'ai jamais rencontré d'amis en ligne en personne, mais je suis ouvert à l'idée si l'occasion se présente." },
            { question: "Que penses-tu des fake news sur les réseaux sociaux ?", answer: "Je pense que les fake news sont un problème sérieux sur les réseaux sociaux et qu'il est important de vérifier les informations avant de les croire ou de les partager." },
            { question: "Utilises-tu les réseaux sociaux pour partager tes opinions ?", answer: "Oui, j'utilise parfois les réseaux sociaux pour partager mes opinions sur des sujets qui me tiennent à cœur." },
            { question: "Que penses-tu de l’utilisation des réseaux sociaux pour la promotion personnelle ?", answer: "Je pense que les réseaux sociaux sont un excellent outil pour la promotion personnelle, tant que cela est fait de manière authentique et honnête." },
            { question: "Comment les réseaux sociaux influencent-ils ta vision du monde ?", answer: "Les réseaux sociaux influencent ma vision du monde en me donnant accès à une grande variété de perspectives et d'informations, mais il est important de rester critique et de ne pas tout prendre pour argent comptant." }
        ]
    };

    const sectionsContainer = document.getElementById("sections");
    const modal = document.getElementById("questions-modal");
    const modalTitle = document.getElementById("modal-title");
    const questionsList = document.getElementById("questions-list");
    const closeModal = document.querySelector(".close");

    // Create sections dynamically
    sections.forEach((section) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("section");
        sectionDiv.textContent = section;
        sectionDiv.addEventListener("click", () => openModal(section));
        sectionsContainer.appendChild(sectionDiv);
    });

    // Function to open modal and display questions
    function openModal(section) {
        modal.style.display = "block";
        modalTitle.textContent = section;
        questionsList.innerHTML = "";
    
        if (questionsAndAnswers[section]) {
            questionsAndAnswers[section].forEach(item => {
                const questionDiv = document.createElement("div");
                questionDiv.classList.add("question");
    
                const questionTitle = document.createElement("h3");
                questionTitle.textContent = item.question;
    
                const revealButton = document.createElement("button");
                revealButton.textContent = "Reveal Answer";
                revealButton.classList.add("reveal-button");
    
                const answerDiv = document.createElement("div");
                answerDiv.classList.add("answer");
                answerDiv.textContent = item.answer;
                answerDiv.style.display = "none"; // Hide the answer initially
    
                revealButton.addEventListener("click", () => {
                    answerDiv.style.display = "block"; // Show the answer when the button is clicked
                    revealButton.style.display = "none"; // Hide the button after clicking
                });
    
                questionDiv.appendChild(questionTitle);
                questionDiv.appendChild(revealButton);
                questionDiv.appendChild(answerDiv);
                questionsList.appendChild(questionDiv);
            });
        }
    }
    

    // Close modal
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
