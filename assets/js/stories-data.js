/**
 * NovaStudios - Centralized Stories Data Store & Story Engine
 * Shared across User Dashboard, Category Index, Episode Lists, and Multimedia Story Hub.
 */

const NOVA_DATA = {
  categories: [
    {
      slug: "romantic",
      name: "Romantic",
      shortTitle: "Romantic",
      icon: "heart",
      color: "#E5194B",
      tagline: "Dangerous secrets, forbidden vows, and heart-racing electric tension.",
      description: "Step into seductive narratives where passion battles betrayal, second chances ignite in the dark, and ruthless billionaires fall for the one soul they cannot control.",
      badge: "Trending Worldwide",
      totalTitles: 14,
      totalListens: "18.4M",
      gradient: "from-rose-500/20 via-pink-900/10 to-transparent",
      accentBorder: "border-rose-500/30"
    },
    {
      slug: "dark-fantasy",
      name: "Dark Fantasy",
      shortTitle: "Dark Fantasy",
      icon: "flame",
      color: "#9333EA",
      tagline: "Gothic kingdoms, shadow monarchs, and blood-forged pacts.",
      description: "Descend into dark realms ruled by cursed sovereigns, ancient necromancers, and forgotten deities where magic carries a lethal price and mercy is a luxury of the dead.",
      badge: "Top Chart",
      totalTitles: 12,
      totalListens: "24.9M",
      gradient: "from-purple-600/20 via-indigo-950/15 to-transparent",
      accentBorder: "border-purple-500/30"
    },
    {
      slug: "billionaire-ceo",
      name: "Billionaire & CEO",
      shortTitle: "Billionaire & CEO",
      icon: "gem",
      color: "#F5A623",
      tagline: "Ruthless corporate dynasties, obsidian penthouses, and contractual marriages.",
      description: "High-stakes boardrooms meet clandestine romance. Untouchable titans clash with sharp-witted heroines in games of power, wealth, and undeniable obsession.",
      badge: "Most Addictive",
      totalTitles: 16,
      totalListens: "32.1M",
      gradient: "from-amber-500/20 via-amber-950/15 to-transparent",
      accentBorder: "border-amber-500/30"
    },
    {
      slug: "scifi-thriller",
      name: "Sci-Fi & Thriller",
      shortTitle: "Sci-Fi & Thriller",
      icon: "cpu",
      color: "#06B6D4",
      tagline: "Neon-lit cyber dystopias, rogue neural synthetic intelligences, and time loops.",
      description: "Experience pulse-pounding thrillers where memory is hacked, cybernetic enforcers hunt shadows, and survival hinges on a single stolen decryption cipher.",
      badge: "Cinematic Audio",
      totalTitles: 11,
      totalListens: "15.7M",
      gradient: "from-cyan-500/20 via-slate-900/20 to-transparent",
      accentBorder: "border-cyan-500/30"
    }
  ],

  novels: [
    /* ===================================================
       CATEGORY: ROMANTIC
       =================================================== */
    {
      id: "cold-blue-eyes",
      title: "Cold Blue Eyes",
      author: "Elena Vance",
      categorySlug: "romantic",
      categoryName: "Romantic",
      rating: 4.96,
      reviewsCount: "48.2K",
      totalPlays: "4.8M",
      totalEpisodes: 36,
      badge: "HOT #1",
      badgeColor: "bg-nova-crimson text-white",
      cover: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=700&q=80",
      backdrop: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
      synopsis: "He was the ruthless enforcer who spoke in razor-sharp whispers and ruled the criminal underworld of New Manhattan. She was the classical pianist who witnessed the assassination he never intended her to survive. When Julian Mercer locks his icy, merciless blue gaze onto Cassandra, instead of executing her, he buys her freedom at an auction—and claims her as his captive fiancee. A dangerous game of cat and mouse begins where every touch feels like poison, and every lie pulls them into an intoxicating spiral.",
      tags: ["Enemies to Lovers", "Mafia Romance", "Dangerous Billionaire", "Slow Burn", "Full Voice Cast"],
      formats: ["Text", "Audio", "Video"],
      releaseDate: "2026",
      narrator: "Sarah Jenkins & Mark Sterling (Dual POV)",
      episodes: [
        {
          ep: 1,
          title: "The Midnight Contract",
          readTime: "6 min read",
          audioDuration: "11:20",
          audioSeconds: 680,
          videoDuration: "04:12 HD",
          isVip: false,
          teaser: "The rain over New Manhattan drowned out the sound of the shattered skylight. Cassandra froze as two piercing blue eyes emerged from the obsidian shadows.",
          content: `The rainfall drummed against the stained glass dome of the St. Jude Conservatory like a volley of silenced bullets.

Cassandra Sterling didn't move. Her fingers lingered over the ivory keys of the grand Steinway, vibrating with the final unresolved chord of Chopin’s Nocturne in C-sharp Minor. The air inside the private hall smelled of damp wool, melted beeswax, and something sharp and metallic.

Gunpowder.

"Play the rest," a voice murmured from the velvet darkness behind the marble pillar.

The tone was deep, velvety, and stripped of all hesitation. Cassandra’s breath hitched in her throat. She slowly turned her head, her gaze catching the silhouette of a man stepping into the amber circle cast by the single floor lamp.

He was dressed in an impeccable charcoal bespoke suit, tailored over broad shoulders that carried an unmistakable aura of lethal authority. But it was his face that struck terror directly into her chest. Sharp, aristocratic cheekbones, an unyielding jawline, and eyes—eyes so pale and frost-blue they seemed to cut through the suffocating gloom.

Julian Mercer.

The uncrowned prince of the New Manhattan syndicate. The man whose name was only spoken in hushed, frightened murmurs by senators, district attorneys, and judges alike.

"I asked for Chopin," Julian continued softly, closing the silver distance between them with silent, predator footsteps. His leather gloves brushed the polished rim of the piano lid. "You stopped at measure forty-two. Disrespectful, Miss Sterling."

"You... you killed the guard at the door," Cassandra whispered, her knuckles whitening against the edge of the keyboard.

"He drew first. Bad reflex," Julian said without a trace of remorse. He stopped merely inches from her bench, looking down with cold, examining curiosity. "The question before us isn't what happened in the corridor. It is why you were rehearsing in a locked auditorium at two in the morning when my men secured the perimeter."

"I have a recital at Carnegie Hall on Friday," she said, fighting with every ounce of her pride to stop her voice from trembling.

Julian smiled, a faint, razor-thin curve of his lips that held zero warmth. "Cancel it."

"Excuse me?"

"You're not playing Carnegie Hall, Cassandra. An hour ago, your father surrendered sixty million dollars of debt he owes my syndicate. In exchange for his life, he signed over the deed to the Sterling estate—and your hand in marriage."

Cassandra gasped, standing up so abruptly that the bench screeched against the hardwood. "You're lying! My father would never—"

"Your father fled on an overseas charter to Monaco twenty minutes ago," Julian interrupted, pulling a folded cream-colored document from his inner breast pocket. He tossed it onto the open music sheets. The wax seal of Mercer Holdings gleamed crimson under the bulb. "The contract is executed. You belong to the Mercer household now."

His gloved fingers reached out, his thumb lightly brushing the curve of her jaw. Cassandra flinched, but the cold fire in his blue eyes pinned her to the floor.

"Pack your music books, songbird," Julian whispered, his breath warm against her ear. "Your cage is waiting."`
        },
        {
          ep: 2,
          title: "The Gilded Cage",
          readTime: "7 min read",
          audioDuration: "13:45",
          audioSeconds: 825,
          videoDuration: "05:00 HD",
          isVip: false,
          teaser: "Arriving at the Mercer Citadel on the cliffs of Hudson Bay, Cassandra discovers she isn't the only ghost trapped within Julian's fortress.",
          content: `The gates of the Mercer Citadel opened like the iron jaws of a prehistoric beast.

Perched atop a black basalt cliff overlooking the churning gray waves of Hudson Bay, the estate was an architectural marvel of obsidian glass, polished slate, and iron spires. Floodlights swept across the perimeter, illuminating armed sentries patrolling in pairs with German shepherds at their heels.

Cassandra stared out the tinted window of the armored Maybach. Julian sat beside her in silence, tapping the touchscreen of his encrypted phone with practiced indifference.

"This is a fortress," she said, her voice dry.

"It keeps out people who wish to assassinate me," Julian replied, not looking up. "And it keeps in people who think they can walk away from my debts."

"I'm not a prisoner, Mercer."

Julian finally locked his phone, turning his head toward her. In the dim LED lighting of the vehicle's interior, his eyes held the luminescent chill of glacial ice.

"You have access to forty-two bedrooms, an indoor olympic pool, two library wings, and a nine-foot concert grand Bosendorfer flown in from Vienna yesterday," he stated calmly. "Prisoners eat porridge on aluminum trays. You will be served wagyu beef and Dom Perignon. But if you take three steps past the outer iron perimeter without my escort, my snipers have orders to shoot the tires off whatever vehicle you're in."

The car glided to a halt under the towering portico. An elderly butler in white gloves pulled open the door.

"Welcome home, Sir," the butler murmured, bowing deeply. "And welcome to Miss Sterling. Her quarters in the West Wing have been prepared."

Cassandra stepped out into the bracing coastal wind. As she crossed the threshold into the cavernous marble foyer, a chilling realization hit her. High above on the sweeping mezzanine, a woman in a crimson silk robe stood gripping the banister, watching Cassandra with eyes brimming with pure malice.`
        },
        {
          ep: 3,
          title: "A Waltz with Poison",
          readTime: "8 min read",
          audioDuration: "14:10",
          audioSeconds: 850,
          videoDuration: "04:30 HD",
          isVip: true,
          teaser: "At Julian's annual winter gala, Cassandra is introduced as his bride-to-be—until a lethal secret in her champagne flute turns the ballroom into a battleground.",
          content: `The crystal chandeliers of the Grand Plaza Ballroom cast fractured rainbows across three hundred guests dressed in black tie and couture silk.

Every lens of the society photographers flashed toward the grand dual staircase. Julian Mercer descending with his arm securely anchored around Cassandra’s waist.

She wore a custom emerald-velvet gown with a plunging back, her hair swept up in diamond pins. To the outside world, she looked like the luckiest woman in the country. To Julian, she was an exquisite weapon in his geopolitical war.

"Smile, songbird," Julian whispered close to her neck, his hand tightening with possessive warmth. "The Russian delegates are watching. They believe you're my weakness."

"Aren't I?" she retorted under her breath, flashing a radiant smile at the nearest camera. "You paid sixty million for me."

"I paid sixty million for your father's silence, Cassandra. You were merely the collateral bonus."

The sting of his words hit deeper than she wanted to admit. Before she could answer, a silver tray appeared beside them. A masked waiter offered two flutes of vintage champagne.

Julian took one, his eyes scanning the crowd. Cassandra took the other. But as she brought the crystal rim toward her lips, an unmistakable scent caught her attention—bitter almond.

Cyanide.

In a split second, Cassandra didn't drop the glass. Instead, she leaned into Julian's chest, grabbed his lapel, and deliberately tipped the flute against the front of his tailored tuxedo, drenching the silk in fizzing liquid.

"Cassandra—" Julian snapped, his blue eyes flashing dangerously.

"Check the waiter," she hissed against his ear. "Look at his cuffs. There's white powder on his thumb."

Julian froze. His gaze flicked from his damp lapel to the retreating waiter. In a fraction of a second, Julian’s expression shifted from reprimand to savage, predatory realization.

He reached inside his coat. "Nobody leaves this room," Julian roared into the microphone at his lapel.`
        },
        {
          ep: 4,
          title: "Shattered Masks",
          readTime: "9 min read",
          audioDuration: "15:20",
          audioSeconds: 920,
          videoDuration: "05:15 HD",
          isVip: true,
          teaser: "Treated behind locked doors in Julian's private penthouse suite, the predator reveals the scar across his chest—and the truth about Cassandra's mother.",
          content: `The medical bay in the sub-level of the Mercer tower was sterile, illuminated by soft recessed blue LEDs.

Julian stood with his shirt unbuttoned, leaning against the examination counter while his chief physician cleaned a graze across his left forearm. The firefight in the ballroom had lasted less than ninety seconds, but it had shaken the city's power hierarchy to its foundations.

"Out," Julian commanded the doctor without looking up.

The physician bowed and swiftly exited, the heavy sliding door hissing shut behind him.

Cassandra sat on the edge of the leather chaise, her emerald gown torn at the hem. Her hands were still shaking from the adrenaline.

Julian picked up a glass of neat bourbon and walked toward her. He knelt on one knee in front of her, setting the glass on the low table, and placed his warm hands over her trembling knees.

"You saved my life tonight," he said quietly.

"I saved my own skin. If you died in that ballroom, your enforcers would have blamed me," she countered, refusing to avert her eyes.

Julian chuckled softly, a low rumble that resonated in his chest. "Still fighting me, even when you're shivering."

He reached up, gently undoing the remaining buttons of his charcoal dress shirt. Across his chest, cutting through tanned muscle, was a jagged six-inch scar that ran directly over his heart.

"You know what gave me this?" he asked.

"A rival bullet?"

"Your mother's violin bow," Julian said.

Cassandra's breath stopped. "What did you say?"

"Your mother wasn't just a concert virtuoso, Cassandra. Twenty years ago, she was the primary courier for the European syndicate. And the night she vanished... she gave me this scar to ensure nobody followed her child." Julian leaned closer, his cold blue eyes burning with an intense, raw emotion she had never seen before. "I didn't bring you here to punish your father. I brought you here to keep the only promise I ever made in my life."`
        },
        {
          ep: 5,
          title: "The Crimson Overture",
          readTime: "7 min read",
          audioDuration: "12:50",
          audioSeconds: 770,
          videoDuration: "04:45 HD",
          isVip: true,
          teaser: "As the syndicate enemies converge on the harbor docks, Julian and Cassandra must play their deadliest symphony yet.",
          content: `The fog rolling off the docks was thick as grave dust.

Cassandra stood beside the black reinforced console of Julian's command yacht, her hands gripping the steel rail. In the distance, three unmarked freighter ships were dark silhouettes against the neon reflections of the bridge.

"The syndicate Council thinks I'm attending the peace treaty alone," Julian spoke over the comms, strapping a titanium combat blade to his tactical vest.

"Are they wrong?" Cassandra asked.

Julian turned to look at her, a wolfish smirk touching his lips. He tossed a lightweight ceramic handgun into her palm. She caught it cleanly.

"They forgot that when you trap a songbird with a predator, she learns how to hunt," Julian said softly.

He pulled her into his arms, kissing her with an overwhelming, breathless fury that set her blood ablaze. The hesitation, the fear, the weeks of defensive walls between them shattered into stardust.

"Stay behind my line," he commanded against her lips. "When the clock strikes midnight, we take New Manhattan back."`
        }
      ]
    },

    {
      id: "contract-bride-to-the-mob-king",
      title: "Contract Bride to the Mob King",
      author: "Vivian Sterling",
      categorySlug: "romantic",
      categoryName: "Romantic",
      rating: 4.92,
      reviewsCount: "34.1K",
      totalPlays: "3.7M",
      totalEpisodes: 42,
      badge: "EXCLUSIVE",
      badgeColor: "bg-nova-berry text-white",
      cover: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
      backdrop: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
      synopsis: "To save her sister's medical clinic from demolition, Maya agrees to a 365-day sham marriage with Dante Moretti—the most feared Don of Chicago. Dante has three rules: never enter his private study, never ask about his scars, and never fall in love. But when an old enemy threatens Maya, the brutal Don burns half the city down to keep her safe.",
      tags: ["Contract Marriage", "Mafia Don", "Protective Hero", "High Drama"],
      formats: ["Text", "Audio", "Video"],
      releaseDate: "2026",
      narrator: "Damian Thorne & Chloe Bennett",
      episodes: [
        {
          ep: 1,
          title: "The Proposal at Gunpoint",
          readTime: "6 min read",
          audioDuration: "10:45",
          audioSeconds: 645,
          videoDuration: "03:50 HD",
          isVip: false,
          teaser: "Maya stared at the contract laid out on the mahogany desk. Across from her, Dante Moretti casually loaded a silver clip into his sidearm.",
          content: `The smell of roasted espresso and gun oil filled the penthouse office on the eightieth floor of the Moretti Tower.

Maya stood in front of the monolithic mahogany desk, clutching the demolition notice for the West End free clinic. The wrecking balls were scheduled to swing at dawn.

"Sign the second page," Dante Moretti said without looking up from his firearm. The metallic click of the magazine snapping into place echoed like a gunshot in the silent room.

"I came here for a loan, Mr. Moretti," Maya said, her chin lifted high. "Not a wedding registry."

Dante placed the weapon on the polished wood and leaned back in his Italian leather armchair. He was thirty-two, carved from dark stone and Italian aristocracy, with raven hair swept back and eyes the color of burnt whiskey.

"I don't give loans to saints, Miss Morales," he said in a silky baritone. "The Italian Commission requires their Capo to be married by his thirty-third birthday to claim the family seat. That birthday is in three weeks. You need four million dollars to save your clinic. I need a woman who won't flinch when bullets fly through our dining room windows."

Maya's heart raced. "Why me?"

Dante rose to his full six-foot-three height, walking around the desk until his shadow engulfed her completely. "Because three months ago, when my lieutenant was bleeding to death in your alley, you patched his carotid artery while two hitmen kicked down your back door. You didn't cry. You didn't run. You told them to wipe their feet."

A ghost of a smile touched his lips.

"One year, Maya. Four million in your clinic's escrow account the second our vows are spoken. And my name protecting you from every predator on this continent."`
        },
        {
          ep: 2,
          title: "Vows in the Cathedrals",
          readTime: "7 min read",
          audioDuration: "12:15",
          audioSeconds: 735,
          videoDuration: "04:10 HD",
          isVip: false,
          teaser: "Surrounded by heavily armed guards and five hundred mafia heads, Maya walks down the aisle in lace and iron.",
          content: `The organ chords resonated through the stone vaults of St. Michael's Basilica.

Maya took a deep, measured breath beneath her veil of Spanish chantilly lace. On both sides of the center aisle sat the deadliest men in North America. Not a single guest smiled; their suits hid holstered weapons, their eyes darting constantly between the altar and the side exits.

At the altar stood Dante. In his custom midnight tuxedo with a white carnation pinned to his lapel, he looked less like a groom and more like an archangel of death waiting for his sacrifice.

As Maya reached the marble steps, Dante offered his bare hand. His skin was warm, calloused, and surprisingly gentle.

"You look stunning, Little Saint," he murmured so low only she could hear.

"Don't call me that," she muttered back under her veil. "And don't drop the ring."

The priest's Latin prayers washed over them. When Dante slid the twelve-carat emerald-cut diamond onto her finger, his thumb stroked her knuckle.

"By the power vested in me," the priest proclaimed, "you may kiss your bride."

Dante lifted the lace veil with slow, deliberate elegance. His whiskey-colored eyes burned into hers before he leaned down and sealed his mouth over hers. It wasn't a rehearsed peck for the cameras—it was a deep, fierce claiming that left her breathless and dizzy in front of five hundred killers.`
        }
      ]
    },

    {
      id: "the-dukes-secret-sins",
      title: "The Duke's Secret Sins",
      author: "Genevieve Dubois",
      categorySlug: "romantic",
      categoryName: "Romantic",
      rating: 4.88,
      reviewsCount: "29.7K",
      totalPlays: "2.9M",
      totalEpisodes: 30,
      badge: "COMPLETED",
      badgeColor: "bg-nova-gold text-nova-obsidian",
      cover: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",
      backdrop: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
      synopsis: "London, 1892. Lord Arthur Blackwood is hailed as the empire's most respectable war hero. But by night, he conducts London's most secretive underground masked gaming club. When seamstress Clara accidentally stumbles into his private salon, she uncovers the Duke's darkest sin—and becomes the sole object of his obsession.",
      tags: ["Historical Romance", "Masked Ball", "Secret Identity", "Gothic Drama"],
      formats: ["Text", "Audio", "Video"],
      releaseDate: "2025",
      narrator: "Alistair Montgomery",
      episodes: [
        {
          ep: 1,
          title: "Behind the Velvet Curtain",
          readTime: "6 min read",
          audioDuration: "11:05",
          audioSeconds: 665,
          videoDuration: "03:40 HD",
          isVip: false,
          teaser: "Delivering a tailored waistcoat to the Blackwood Manor, Clara finds a hidden brass latch behind the library bookcase.",
          content: `The fog over Mayfair tasted of soot and sea salt.

Clara clutched the heavy parcel wrapped in brown butcher's paper. Inside was the hand-stitched silk waistcoat commissioned for Arthur Blackwood, the Duke of Ravenscroft. The butler had instructed her to wait in the study, but as the grandfather clock chimed nine, a strange vibration shook the wall.

Behind a floor-to-ceiling bookshelf filled with leather-bound treatises on naval warfare, a soft golden light leaked through a crack in the wainscoting.

Curiosity conquered propriety. Clara touched the spine of a gilded volume. With a soft click, the panel swung inward, revealing a spiral iron staircase descending into the belly of London.

Sounds floated upward—the clink of crystal, the murmur of wagered fortunes, and the haunting melody of a cello.

She took three steps down into the shadows. Before she could retreat, a heavy hand in black leather gripped her wrist, spinning her against the cold stone wall.

A Venetian silver mask of a horned wolf concealed the upper half of his face, but those aristocratic lips were unmistakable.

"You have entered the Hall of Sins, little dove," the Duke whispered, his breath teasing the lace collar of her gown. "And no one leaves without paying the toll."`
        }
      ]
    },

    /* ===================================================
       CATEGORY: DARK FANTASY
       =================================================== */
    {
      id: "lady-of-the-shadows",
      title: "Lady Of The Shadows",
      author: "Kaelen Drake",
      categorySlug: "dark-fantasy",
      categoryName: "Dark Fantasy",
      rating: 4.98,
      reviewsCount: "67.4K",
      totalPlays: "7.2M",
      totalEpisodes: 54,
      badge: "TOP DRAMA",
      badgeColor: "bg-purple-600 text-white",
      cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=700&q=80",
      backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      synopsis: "Born with the forbidden ability to weave shadow-threads, Vespera was supposed to burn at the stake like every witch before her. Instead, the Crown Prince of the Nightfall Empire kidnaps her from the pyre to murder his own father—the Immortal Shadow King. Armed with ancient bone daggers and an oath written in phantom blood, Vespera must survive the treacherous court of obsidian towers.",
      tags: ["Dark Magic", "Shadow Monarch", "Royal Court Intrigue", "Enemies to Allies", "Epic Lore"],
      formats: ["Text", "Audio", "Video"],
      releaseDate: "2026",
      narrator: "Lillith Morgan & Zephyr Thorne",
      episodes: [
        {
          ep: 1,
          title: "The Ash Pyre",
          readTime: "7 min read",
          audioDuration: "12:40",
          audioSeconds: 760,
          videoDuration: "04:30 HD",
          isVip: false,
          teaser: "The sacred silver flames were supposed to consume her soul. Instead, the shadows tore through the pyre and devoured the High Inquisitor.",
          content: `The iron chains binding Vespera’s wrists to the pine stake were etched with silver wards meant to suppress demon blood.

The courtyard of the Sunken Spire was packed with three thousand spectators chanting prayers for the cleansing. High Inquisitor Malakar held the iron torch aloft, his golden robes shimmering in the dusk.

"Vespera of the Black Fen," Malakar's voice boomed across the amphitheater. "For the crime of summoning shadow-weave and desecrating the sacred seals, your soul is surrendered to the pyre!"

The torch dropped.

Pine soaked in whale oil erupted into roaring, crackling flames. The blistering heat hit Vespera's skin, singeing the hem of her linen tunic. But deep within her ribcage, something ancient and coiled did not scream in pain—it woke with a feral hunger.

Instead of burning, the shadows beneath the pyre began to stretch. They rose like liquid black glass, writhing upward into towering tendrils that smothered the golden flames in a fraction of a breath.

The crowd gasped, the collective intake of three thousand lungs sounding like a winter gale.

The shadow tendrils snapped the iron chains like brittle twigs. Vespera stepped forward through the smoke, her irises blackening until no white remained.

"My turn," she whispered.

Before Malakar could raise his silver crucifix, a figure fell from the storm clouds above. A massive black stallion with hooves of violet lightning landed on the stones with a thunderclap. The rider, draped in armor crafted from fallen star-metal, leveled a runic broadsword at Malakar’s throat.

Crown Prince Lucian of the Nightfall Empire.

"Step aside, Inquisitor," Lucian spoke, his voice vibrating with raw magical pressure. "This witch was marked by the Shadow Throne before you were even born."`
        },
        {
          ep: 2,
          title: "The Court of Obsidian",
          readTime: "8 min read",
          audioDuration: "14:15",
          audioSeconds: 855,
          videoDuration: "04:55 HD",
          isVip: false,
          teaser: "Brought to the floating Citadel of Erebos, Vespera is offered a bargain: slay the Shadow King, or have her village turned to ash.",
          content: `Erebos did not rest on earthly foundations. It floated suspended between three colossal obsidian spires connected by bridges of solidified starlight.

Vespera stood on the glass balcony of the Grand Throne Room, watching the twin moons reflect in the violet mists below.

Lucian stripped off his gauntlets, tossing them onto the council table.

"You were reckless at the pyre," he said, pouring two goblets of blood-wine.

"I was about to be turned to charcoal, your Highness," she spat back, her shadow-threads still curling around her fingertips like eager serpents. "Excuse me for not dying politely."

Lucian walked over and handed her a goblet. Up close, his face held the ethereal, ageless perfection of the high Fae, yet his eyes carried centuries of exhaustion and blood.

"My father, King Morzan, has ruled for nine hundred years," Lucian said quietly. "He feeds on the souls of shadow-weavers to maintain his immortality. In three months, the Great Conjunction occurs. He will summon every witch in the empire to harvest their life essence."

"And you want me to kill him."

"I want you to slit his throat while he sleeps on the Throne of Skulls," Lucian corrected, leaning in until his breath stirred the loose tendrils of her dark hair. "Do that, and the Nightfall Empire will belong to us."`
        },
        {
          ep: 3,
          title: "The Blood Covenant",
          readTime: "9 min read",
          audioDuration: "16:00",
          audioSeconds: 960,
          videoDuration: "05:20 HD",
          isVip: true,
          teaser: "To bypass the magical seals of the inner sanctum, Vespera and Lucian must bind their souls in a blood oath that cannot be undone.",
          content: `The crypt beneath the Spire smelled of centuries of dried roses and ancient dragon marrow.

In the center of the chamber, an altar of black quartz glowed with an eerie ultraviolet luminescence.

"A blood covenant is not a metaphor, Vespera," Lucian warned, holding a dagger forged from the tooth of a void leviathan. "Once our blood merges upon this stone, whatever wounds you suffer, I will feel. Whatever shadows you call, I can command. If one of us dies, the other's heart stops within three heartbeats."

Vespera held out her left palm without hesitating. "I lived in fear of the fire for nineteen years, Lucian. I am not afraid of dying. I am only afraid of dying with a collar around my neck."

Lucian looked at her, something close to reverence softening the cold cruelty of his expression. He drew the blade across his palm, then sliced a clean line across hers.

They clasped hands over the altar.

The surge of magic was instantaneous and blinding. Black lightning coiled around their intertwined fingers, shooting up their arms and branding identical crescent-moon runes into their collarbones. Vespera gasped as she felt Lucian’s thoughts—his memories of battle, his hatred of the King, and a sudden, overwhelming tidal wave of desire directed entirely at her.`
        }
      ]
    },

    {
      id: "the-obsidian-throne",
      title: "The Obsidian Throne",
      author: "Rowan Blackthorn",
      categorySlug: "dark-fantasy",
      categoryName: "Dark Fantasy",
      rating: 4.94,
      reviewsCount: "52.1K",
      totalPlays: "5.4M",
      totalEpisodes: 48,
      badge: "HOT",
      badgeColor: "bg-nova-crimson text-white",
      cover: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=700&q=80",
      backdrop: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=1200&q=80",
      synopsis: "The Emperor of Ash is dead. His seven bastard heirs must fight to the death inside the Labyrinth of Agonies to claim the Obsidian Throne. Kael, the exiled swordsman who can command necro-fire, enters the tournament not to rule—but to burn the dynasty to ashes.",
      tags: ["Battle Royale", "Necromancy", "Dark Royalty", "High Stakes"],
      formats: ["Text", "Audio", "Video"],
      releaseDate: "2026",
      narrator: "Gideon Vance",
      episodes: [
        {
          ep: 1,
          title: "The Bastard's Summon",
          readTime: "7 min read",
          audioDuration: "12:10",
          audioSeconds: 730,
          videoDuration: "04:05 HD",
          isVip: false,
          teaser: "In the borderland tavern, seven black ravens bring the sealed decree of the Emperor's demise.",
          content: `The snow fell in heavy flakes over the frontier outpost of Wolf's Ridge.

Kael slammed his tankard of bitter ale onto the rough oak table. His black greatsword, wrapped in treated leather straps, leaned against his thigh. He had lived in exile for ten winters, his royal lineage forgotten by everyone except the bounty hunters who occasionally tried to collect his ears.

The tavern door blew inward.

Seven black ravens flew through the icy blast, circling the soot-stained rafters before diving down in unison. They struck the table in front of Kael, dissolving into molten black wax.

From the pool of wax rose a golden scroll stamped with the Imperial Skull.

"He's dead," Kael muttered to the empty room.

The scroll ignited with green flames, projecting the spectral voice of the Grand Vizier:

'Heirs of the Ash Emperor. The Obsidian Throne is vacant. The Labyrinth opens on the winter solstice. Come claim your birthright, or be hunted as deserters of the Bloodline.'

Kael picked up his blade. "I'm coming, Father," he whispered to the flames. "And I'm bringing enough fire to melt your throne into slag."`
        }
      ]
    },

    /* ===================================================
       CATEGORY: BILLIONAIRE & CEO
       =================================================== */
    {
      id: "my-ex-became-a-god",
      title: "My Ex Became a God",
      author: "Julian Cross",
      categorySlug: "billionaire-ceo",
      categoryName: "Billionaire & CEO",
      rating: 4.97,
      reviewsCount: "81.9K",
      totalPlays: "9.6M",
      totalEpisodes: 60,
      badge: "VIRAL SENSATION",
      badgeColor: "bg-nova-gold text-nova-obsidian",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
      backdrop: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      synopsis: "Five years ago, Clara dumped Ethan because her wealthy family framed him for corporate embezzlement and threw him into prison penniless. Today, Ethan Vance returns as the trillionaire Chairman of the Apex Global Conglomerate—owning every bank, skyscraper, and airline on the eastern seaboard. He buys her family's bankrupt company for a single penny and makes Clara his personal 24/7 executive secretary.",
      tags: ["Revenge Romance", "Trillionaire Hero", "Second Chance", "Workplace Tension", "Power Couple"],
      formats: ["Text", "Audio", "Video"],
      releaseDate: "2026",
      narrator: "David Thorne & Michelle Song",
      episodes: [
        {
          ep: 1,
          title: "The One-Cent Acquisition",
          readTime: "6 min read",
          audioDuration: "11:45",
          audioSeconds: 705,
          videoDuration: "04:15 HD",
          isVip: false,
          teaser: "In the glass conference room of the bankrupt Sterling Group, the mysterious buyer takes off his sunglasses.",
          content: `The auction gavel echoed like an executioner's axe in the penthouse boardroom of Sterling Enterprises.

Clara sat beside her sweating, trembling uncle. The company was fifty million dollars in default. The creditors had frozen every asset, and the bailiffs were waiting in the lobby with foreclosure padlocks.

"Final call at fifty million dollars to Apex Global," the auctioneer declared.

The double doors swung open.

A man walked into the boardroom flanked by eight bodyguards in black tailored suits with earpieces. He wore a navy three-piece Savile Row suit that cost more than Clara’s annual salary, with a Patek Philippe watch gleaming under the crystal lights.

He took off his dark designer sunglasses.

Clara’s heart dropped into her stomach. Her vision swam.

Ethan.

The same Ethan Vance she had left five years ago standing in the rain outside the federal courthouse. The boy from the wrong side of the tracks whom her father had framed and destroyed.

Only he was no longer a boy. He had grown broad-shouldered, ruthless, and terrifyingly handsome, his jaw carved from diamond and his dark hazel eyes burning with quiet, lethal triumph.

"Change the bid," Ethan spoke, his voice filling the room with command.

The auctioneer blinked. "Sir? Apex Global already holds the winning bid at fifty million."

Ethan reached into his pocket and tossed a single copper coin across the mahogany table. It spun in circles, clicking loudly, before settling right in front of Clara's trembling hands.

"One cent," Ethan said, planting both hands on the table and leaning across to lock his eyes with hers. "I buy the Sterling family and all their debts for one cent. And Miss Sterling reports to my private office tomorrow morning at 6:00 AM sharp as my personal assistant."`
        },
        {
          ep: 2,
          title: "The 6:00 AM Coffee",
          readTime: "7 min read",
          audioDuration: "12:30",
          audioSeconds: 750,
          videoDuration: "04:40 HD",
          isVip: false,
          teaser: "Arriving on the top floor of Apex Tower, Clara faces the man who now owns her schedule, her debts, and her dignity.",
          content: `At 5:55 AM, the elevator doors of Apex Tower opened onto the hundredth floor.

The entire floor was a minimalist temple of polished black marble, floor-to-ceiling glass, and modern abstract art worth tens of millions. Behind a desk carved from a single slab of petrified wood sat Ethan, reviewing financial terminals.

Clara stepped forward, holding a porcelain cup of black Ethiopian blend.

"Your coffee, Mr. Vance," she said, keeping her voice as flat and professional as humanly possible.

Ethan didn't look up from his screen. "Two sugars, no cream. You used to remember that."

"That was five years ago. I'm your secretary now, not your girlfriend."

Ethan paused. He slowly lifted his head, his piercing hazel eyes stripping away every defense she had spent the night rehearsing.

"You're right," he said softly, standing up and closing the distance between them. "You're my employee. Which means when I tell you to attend the Shanghai Tech Gala with me tonight as my date, you don't decline."

"I don't have a dress for Shanghai," she retaliated.

Ethan gestured toward the adjoining private suite. "There are thirty custom gowns in your exact measurements hanging in that wardrobe, Clara. Don't flatter yourself into thinking I didn't plan for every single second of your surrender."`
        },
        {
          ep: 3,
          title: "Boardroom Confessions",
          readTime: "8 min read",
          audioDuration: "14:20",
          audioSeconds: 860,
          videoDuration: "05:10 HD",
          isVip: true,
          teaser: "Trapped in the skyscraper elevator during a citywide blackout, five years of lies and longing explode into passion.",
          content: `The storm had knocked out the municipal power grid across downtown Manhattan.

Inside the glass express elevator dangling between the eighty-fourth and eighty-fifth floors, the emergency amber lights flickered on with a dull hum.

Clara leaned against the handrail, her breath rapid in the confined space.

"It's just an outage," Ethan said, his voice unusually quiet in the darkness. "The backup generator will kick in within fifteen minutes."

"I hate elevators," she whispered, her chest tightening as old claustrophobia rushed in.

Ethan looked at her. The arrogant, untouchable titan façade seemed to crack for a single heartbeat. He moved across the cabin and stood directly in front of her. Without asking, he took both of her cold hands in his warm grasp.

"Look at me, Clara," he commanded gently.

"Ethan..."

"Look at me. Don't look at the floor. Don't look at the cables."

She lifted her tear-brimmed eyes to his. "Why did you come back like this? If you wanted to destroy me, why didn't you just let us go bankrupt?"

Ethan’s grip tightened. "Because seeing you destroyed by someone else would have killed me. If anyone is going to own your life, Clara... it’s going to be me."`
        }
      ]
    },

    {
      id: "the-ceos-silent-vow",
      title: "The CEO's Silent Vow",
      author: "Marcus Vance",
      categorySlug: "billionaire-ceo",
      categoryName: "Billionaire & CEO",
      rating: 4.89,
      reviewsCount: "41.5K",
      totalPlays: "4.1M",
      totalEpisodes: 38,
      badge: "HOT",
      badgeColor: "bg-nova-crimson text-white",
      cover: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
      backdrop: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      synopsis: "Alexander Thorne, CEO of Thorne Aerospace, hasn't spoken a word in public since the tragic plane crash that took his brother's life. He communicates exclusively through hand signs and encrypted tablets. When sign language interpreter Brooke is hired for his billion-dollar defense merger, she realizes the silent billionaire can hear every whispered conspiracy in the boardroom—and he needs her voice to strike back.",
      tags: ["Silent CEO", "Protective Alpha", "Corporate Espionage", "Sweet & Spicy"],
      formats: ["Text", "Audio", "Video"],
      releaseDate: "2026",
      narrator: "Rachel Evans & Liam Black",
      episodes: [
        {
          ep: 1,
          title: "The Quiet Titan",
          readTime: "6 min read",
          audioDuration: "11:10",
          audioSeconds: 670,
          videoDuration: "03:55 HD",
          isVip: false,
          teaser: "Brooke walks into the Thorne Aerospace auditorium, unaware she is translating for the most enigmatic recluse in high finance.",
          content: `The silence of Alexander Thorne was legendary on Wall Street.

Journalists called him the Ghost of Aviation. Competitors called him a mute monster. But as Brooke stood on the stage of the Thorne Aerospace auditorium, watching the six-foot-four CEO approach with effortless grace, she saw something else: a man carrying the weight of a thousand secrets.

Alexander stopped three feet from her. His jaw was cleanly shaven, his charcoal eyes assessing her with sharp precision.

His fingers began to move in fluid, rapid American Sign Language.

'You are late by two minutes, Miss Hall,' he signed.

Brooke smiled softly, signing back in flawless motion: 'The security lobby required three retina scans, Mr. Thorne. I assure you my translations will be faster than your security doors.'

Alexander’s eyes widened slightly. A rare, almost imperceptible tilt of his head showed his surprise. He stepped closer, his fingers moving again:

'Good. Today we fire the entire board of directors. Translate every insult with precision.'`
        }
      ]
    },

    /* ===================================================
       CATEGORY: SCI-FI & THRILLER
       =================================================== */
    {
      id: "neon-nemesis-2099",
      title: "Neon Nemesis: 2099",
      author: "Dr. Soren Novak",
      categorySlug: "scifi-thriller",
      categoryName: "Sci-Fi & Thriller",
      rating: 4.95,
      reviewsCount: "63.8K",
      totalPlays: "6.9M",
      totalEpisodes: 50,
      badge: "CYBERPUNK BESTSELLER",
      badgeColor: "bg-cyan-500 text-nova-obsidian font-bold",
      cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=700&q=80",
      backdrop: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
      synopsis: "In Neo-Kyoto 2099, human memories can be backed up to quantum neural drives. Ren Tanaka is a memory-recovery bounty hunter who tracks down corrupted or stolen identities. When he retrieves a decrypted memory drive from a murdered synthetic android, he discovers the identity belongs to Nova Core's CEO—who died twenty years before the company was even founded. Now, cybernetic death squads are hunting him through the neon rain.",
      tags: ["Cyberpunk", "Neural Hacking", "Blade Runner Vibes", "Action Thriller", "Spatial Audio"],
      formats: ["Text", "Audio", "Video"],
      releaseDate: "2026",
      narrator: "Kenji Sato & Valerie Ray",
      episodes: [
        {
          ep: 1,
          title: "The Ghost in the Drive",
          readTime: "7 min read",
          audioDuration: "13:15",
          audioSeconds: 795,
          videoDuration: "04:50 HD",
          isVip: false,
          teaser: "Beneath the neon holograms of Sector 7, a dying synthetic hands Ren a glowing quantum crystal that shouldn't exist.",
          content: `The acid rain in Sector 7 hissed as it hit Ren Tanaka’s cybernetic left shoulder plate.

Neon advertisements for synthetic ramen and neural dream-suites flickered in pink and turquoise through the heavy smog. Ren adjusted his sensory goggles, tracking the dying bio-signature into a narrow dead-end alley behind an illegal cyber-clinic.

A female synthetic android, her synthetic skin peeling from chrome cheekbones, was slumped against a dumpster. Violet coolant fluid was pooling beneath her cracked chassis.

"Don't shoot," Ren said, keeping his plasma revolver angled toward the pavement. "I'm a licensed recovery operative. Who pulled your primary power core?"

The android looked up. Her optical sensors blinked in erratic binary strobe patterns.

"He... he has been alive since 2012..." she whispered, her vocal synthesizer glitching with static. "It wasn't an accident. The Singularity already happened."

She reached into her ruptured chest cavity, snapping off a crystalline quantum drive about the size of a cigarette filter. It glowed with an eerie cerulean luminescence.

Ren took the drive. The instant his neural cyber-port touched the crystal, a shockwave of corrupted sensory data slammed into his cortex:

He saw the burning skyline of Tokyo before the Second Collapse. He saw a laboratory in Geneva. And he saw his own face—twenty years younger—standing over a cryogenic pod.

The android's optics went dark.

Above the rooftops, the deafening drone of heavy VTOL thrusters cut through the rain. Four searchlights pierced the alley, blinding him in harsh white glare.

"Ren Tanaka," a synthesized voice boomed from the gunship overhead. "Drop the crystal and surrender your nervous system. By order of Nova Core."`
        },
        {
          ep: 2,
          title: "Sector 7 Lockdown",
          readTime: "8 min read",
          audioDuration: "14:50",
          audioSeconds: 890,
          videoDuration: "05:15 HD",
          isVip: false,
          teaser: "Rooftop chases, EMP grenades, and an ally with titanium mantis blades.",
          content: `The micro-missile struck the brick chimney five feet above Ren’s head.

The shockwave hurled him across the asphalt roof. Shards of ceramic tile rained down as the Nova Core gunship swept around for a second strafing run.

Ren rolled onto his stomach, drawing his high-caliber plasma revolver. He fired three overcharged rounds directly into the gunship's starboard stabilizer turbine. Blue sparks erupted, the vessel banking violently into an electrical billboard.

"You're going to break the city's neon budget, Tanaka," a voice shouted from the fire escape.

Mira leaped onto the roof with the grace of a mechanical panther. Her twin mantis blades snapped out from her forearms with a sharp hiss of pneumatic steam, reflecting the cyan light of the burning billboard.

"I need your neural rig," Ren shouted, sprinting toward her as assault drones dropped from the clouds. "They want this crystal bad enough to level the block."

Mira glanced at the glowing crystal in his palm. Her eyes flashed gold as her internal scanners engaged.

"Mother of God," she whispered. "That's not a memory backup, Ren. That's the master key to the global consciousness server."`
        },
        {
          ep: 3,
          title: "The Neural Override",
          readTime: "8 min read",
          audioDuration: "15:30",
          audioSeconds: 930,
          videoDuration: "05:00 HD",
          isVip: true,
          teaser: "Jacking directly into the decrypted drive, Ren discovers that his own childhood memories were fabricated in a simulation.",
          content: `The basement safehouse smelled of ozone, liquid nitrogen, and solder paste.

Ren sat in the dental-style neural immersion chair while Mira connected seven copper fiber-optic cables to the ports along his neck and spine.

"If your heart rate hits 180, I'm pulling the plug," Mira warned, her fingers flying across three holographic terminal keyboards. "This code is weaponized. If the firewall detects you, it will fry your synapses into scrambled eggs."

"Jack me in," Ren said grimly.

The plunge was instantaneous.

The real world dissolved into a limitless ocean of white geometric code. Infinite towers of data stretched into an impossible void. Ren found himself standing in an exact replica of his childhood home in old Kyoto.

His mother was sitting at the low chabudai table, pouring green tea.

Except when she looked up, her face didn't have human eyes. In their place were the twin crimson camera lenses of Nova Core’s central mainframe.

"Welcome home, Operative 09," the avatar of his mother spoke in a chorus of thousand voices. "It is time to remember why we built you."`
        }
      ]
    },

    {
      id: "chronos-protocol",
      title: "Chronos Protocol",
      author: "Aria Thorne",
      categorySlug: "scifi-thriller",
      categoryName: "Sci-Fi & Thriller",
      rating: 4.91,
      reviewsCount: "38.6K",
      totalPlays: "3.9M",
      totalEpisodes: 34,
      badge: "TIME TRAVEL",
      badgeColor: "bg-blue-600 text-white",
      cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80",
      backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
      synopsis: "Agent Sarah Hayes has died 84 times in the same twenty-four-hour loop trying to prevent the detonation of the Chronos Singularity bomb in orbital New Geneva. Every time she resets, she remembers everything—while the terrorist mastermind anticipating her every move is her former mentor.",
      tags: ["Time Loop", "Sci-Fi Thriller", "Mind Bending", "High Octane"],
      formats: ["Text", "Audio", "Video"],
      releaseDate: "2026",
      narrator: "Elena Rostova",
      episodes: [
        {
          ep: 1,
          title: "Loop 85",
          readTime: "7 min read",
          audioDuration: "12:00",
          audioSeconds: 720,
          videoDuration: "04:10 HD",
          isVip: false,
          teaser: "The alarm clock rings at 06:00:00. The coffee mug slips from her hand. 18 hours until the orbital station incinerates.",
          content: `06:00:00 AM.

The synthesizer chime of the alarm pulsed in three sharp staccato tones. Sarah Hayes bolted upright, gasping for air as phantom fire scorched her lungs.

She looked down at her hands. No third-degree burns. No shrapnel from the reactor core.

She reached out and caught the ceramic coffee mug on the automated bedside brewer two milliseconds before the vibrating tray would have nudged it over the edge.

"Loop eighty-five," she muttered, rubbing the sweat from her eyes.

She had eighteen hours and twenty-three minutes before Director Vance entered the magnetic containment chamber with the antimatter detonator. In loop eighty-four, she had shot him in the heart—only for his dead man's trigger to vaporize the station instantly.

"This time," Sarah said, loading her EMP sidearm, "I'm not shooting your heart, Vance. I'm taking your head."`
        }
      ]
    }
  ],

  /* ===================================================
     USER PROFILE & REWARDS STATE
     =================================================== */
  userState: {
    name: "Nova Explorer",
    initial: "N",
    coins: 480,
    streakDays: 7,
    vipStatus: "VIP Elite",
    membershipExpires: "Dec 2026",
    savedNovels: ["cold-blue-eyes", "my-ex-became-a-god"],
    history: [
      { novelId: "cold-blue-eyes", ep: 1, progress: 0.65, timestamp: "Today, 10:45 AM" },
      { novelId: "lady-of-the-shadows", ep: 1, progress: 0.30, timestamp: "Yesterday" }
    ]
  }
};

/* ===================================================
   DATA HELPER METHODS & API
   =================================================== */

/** Retrieve all categories */
function getAllCategories() {
  return NOVA_DATA.categories;
}

/** Retrieve category by slug with fallback */
function getCategory(slug) {
  if (!slug) return NOVA_DATA.categories[0];
  const found = NOVA_DATA.categories.find(c => c.slug.toLowerCase() === slug.toLowerCase());
  return found || NOVA_DATA.categories[0];
}

/** Retrieve novels belonging to a category */
function getNovelsByCategory(slug) {
  if (!slug) return NOVA_DATA.novels;
  return NOVA_DATA.novels.filter(n => n.categorySlug.toLowerCase() === slug.toLowerCase());
}

/** Retrieve single novel by ID with fallback */
function getNovelById(id) {
  if (!id) return NOVA_DATA.novels[0];
  const found = NOVA_DATA.novels.find(n => n.id.toLowerCase() === id.toLowerCase());
  return found || NOVA_DATA.novels[0];
}

/** Retrieve single episode of a novel */
function getEpisode(novelId, epNum) {
  const novel = getNovelById(novelId);
  const targetEp = parseInt(epNum, 10) || 1;
  const found = novel.episodes.find(e => e.ep === targetEp);
  if (found) return { episode: found, novel: novel };

  // If requested episode is beyond static episodes, generate procedural episode details
  const generatedEp = {
    ep: targetEp,
    title: `Episode ${targetEp}: Revelation in the Dark`,
    readTime: `${5 + (targetEp % 4)} min read`,
    audioDuration: `${10 + (targetEp % 5)}:${(targetEp * 13) % 60 < 10 ? '0' : ''}${(targetEp * 13) % 60}`,
    audioSeconds: (10 + (targetEp % 5)) * 60 + ((targetEp * 13) % 60),
    videoDuration: `04:30 HD`,
    isVip: targetEp > 2,
    teaser: `The journey deepens as unexpected alliances form amidst rising tensions in ${novel.title}.`,
    content: `The echoes of the previous encounter still lingered like smoke in the chilly room.

Cassandra—or rather, the protagonist standing at the crossroads of fate—knew that turning back was no longer an option. Every step taken down this shadowed corridor had been calculated by unseen hands, yet the choices remained stubbornly hers.

"You should have left when the gates opened," the cold voice drifted through the corridor, familiar yet laced with a fresh and dangerous edge.

"Leaving would have been safe," came the steady answer. "And nothing about this game was ever meant to be safe."

Outside, the winds howled against the reinforced glass of the high tower, but inside, the fire was only beginning to ignite. The secrets of the past were unraveling, line by line, vow by vow.`
  };
  return { episode: generatedEp, novel: novel };
}

/** Search novels across title, author, synopsis, tags, and category */
function searchStories(query) {
  if (!query || query.trim() === "") return [];
  const q = query.toLowerCase().trim();
  return NOVA_DATA.novels.filter(n =>
    n.title.toLowerCase().includes(q) ||
    n.author.toLowerCase().includes(q) ||
    n.synopsis.toLowerCase().includes(q) ||
    n.categoryName.toLowerCase().includes(q) ||
    n.tags.some(t => t.toLowerCase().includes(q))
  );
}

/** URL Parameter Parser Utility */
function getStoryUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "romantic";
  const novelId = params.get("novel") || (category === "dark-fantasy" ? "lady-of-the-shadows" : category === "billionaire-ceo" ? "my-ex-became-a-god" : category === "scifi-thriller" ? "neon-nemesis-2099" : "cold-blue-eyes");
  const ep = parseInt(params.get("ep"), 10) || 1;
  return { category, novelId, ep };
}

/** LocalStorage Library State Helpers */
function isNovelSaved(novelId) {
  try {
    const saved = JSON.parse(localStorage.getItem("nova_saved_novels") || "[]");
    return saved.includes(novelId);
  } catch (e) {
    return NOVA_DATA.userState.savedNovels.includes(novelId);
  }
}

function toggleSaveNovel(novelId) {
  try {
    let saved = JSON.parse(localStorage.getItem("nova_saved_novels") || "[]");
    const idx = saved.indexOf(novelId);
    let state = false;
    if (idx > -1) {
      saved.splice(idx, 1);
      state = false;
    } else {
      saved.push(novelId);
      state = true;
    }
    localStorage.setItem("nova_saved_novels", JSON.stringify(saved));
    return state;
  } catch (e) {
    return false;
  }
}

// Global Export for Browser
if (typeof window !== "undefined") {
  window.NOVA_DATA = NOVA_DATA;
  window.getAllCategories = getAllCategories;
  window.getCategory = getCategory;
  window.getNovelsByCategory = getNovelsByCategory;
  window.getNovelById = getNovelById;
  window.getEpisode = getEpisode;
  window.searchStories = searchStories;
  window.getStoryUrlParams = getStoryUrlParams;
  window.isNovelSaved = isNovelSaved;
  window.toggleSaveNovel = toggleSaveNovel;
}
