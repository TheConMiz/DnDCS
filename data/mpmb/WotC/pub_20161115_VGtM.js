var iFileName = "pub_20161115_VGtM.js";
RequiredSheetVersion(12.999);
// This file adds all the player-material from Volo's Guide to Monsters to MPMB's Character Record Sheet

// Define the source
SourceList.V={
	name : "Volo's Guide to Monsters",
	abbreviation : "VGtM",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/volos-guide-to-monsters",
	date : "2016/11/15"
};

// Races
RaceList["fallen aasimar"] = {
	regExpSearch : /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel))))(?=.*fallen).*$/i,
	name : "Fallen Aasimar",
	source : ["V", 104],
	plural : "Fallen Aasimar",
	sortname : "Aasimar, Fallen",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Celestial"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Fallen Aasimar: +1 Strength, +2 Charisma;",
	scores : [1, 0, 0, 0, 0, 2],
	trait : "Fallen Aasimar (+1 Strength, +2 Charisma)" + (typePF ? "\n" : " ") + "Light Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nNecrotic Shroud: Once per long rest when I'm 3rd level, I can use an action to transform, causing all within 10 ft of me to make a Cha" + (typePF ? "" : "risma") + " saving throw (DC 8 + Cha mod + Prof bonus) or be frightened of me until the end of my next turn This lasts for 1 minute or until I end it as a bonus action. Once on my turn I can have one of my attacks or spells deals my level in extra necrotic damage to one target.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		atwill : true
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : ["1 HP", "2 HP", "3 HP", "4 HP", "5 HP", "6 HP", "7 HP", "8 HP", "9 HP", "10 HP", "11 HP", "12 HP", "13 HP", "14 HP", "15 HP", "16 HP", "17 HP", "18 HP", "19 HP", "20 HP"],
			action : ["action", ""]
		},
		"necrotic shroud" : {
			name : "Necrotic Shroud",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : ["", "", "+3 damage", "+4 damage", "+5 damage", "+6 damage", "+7 damage", "+8 damage", "+9 damage", "+10 damage", "+11 damage", "+12 damage", "+13 damage", "+14 damage", "+15 damage", "+16 damage", "+17 damage", "+18 damage", "+19 damage", "+20 damage"],
			action : ["action", " (start)"],
			eval : "AddAction('bonus action', 'Necrotic Shroud (end)', 'being a Fallen Aasimar');",
			removeeval : "RemoveAction('bonus action', 'Necrotic Shroud (end)');"
		}
	}
};
RaceList["protector aasimar"] = {
	regExpSearch : /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel))))(?=.*protector).*$/i,
	name : "Protector Aasimar",
	source : ["V", 104],
	plural : "Protector Aasimar",
	sortname : "Aasimar, Protector",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Celestial"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Protector Aasimar: +1 Wisdom, +2 Charisma;",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Protector Aasimar (+1 Wisdom, +2 Charisma)\nLight Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nRadiant Soul: Once per long rest when I'm 3rd level, I can use an action to transform, gaining glimmer in my eyes and two incorporeal wings. For 1 minute or until I end it as a bonus action, I have 30 feet fly speed; once on my turn I can have one of my attacks or spells deal my level in extra radiant damage to one target.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		atwill : true
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : ["1 HP", "2 HP", "3 HP", "4 HP", "5 HP", "6 HP", "7 HP", "8 HP", "9 HP", "10 HP", "11 HP", "12 HP", "13 HP", "14 HP", "15 HP", "16 HP", "17 HP", "18 HP", "19 HP", "20 HP"],
			action : ["action", ""]
		},
		"radiant soul" : {
			name : "Radiant Soul",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : ["", "", "+3 damage", "+4 damage", "+5 damage", "+6 damage", "+7 damage", "+8 damage", "+9 damage", "+10 damage", "+11 damage", "+12 damage", "+13 damage", "+14 damage", "+15 damage", "+16 damage", "+17 damage", "+18 damage", "+19 damage", "+20 damage"],
			action : ["action", " (start)"],
			eval : "AddAction('bonus action', 'Radiant Soul (end)', 'being a Protector Aasimar');",
			removeeval : "RemoveAction('bonus action', 'Radiant Soul (end)');"
		}
	}
};
RaceList["scourge aasimar"] = {
	regExpSearch : /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel))))(?=.*scourge).*$/i,
	name : "Scourge Aasimar",
	source : ["V", 104],
	plural : "Scourge Aasimar",
	sortname : "Aasimar, Scourge",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Celestial"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Scourge Aasimar: +1 Constitution, +2 Charisma;",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Scourge Aasimar (+1 Constitution, +2 Charisma)" + (typePF ? "\n" : " ") + "Light Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nRadiant Consumption: Once per long rest when I'm 3rd level, I can use an action to radiate bright light in 10-ft radius and dim light for another 10-ft, for 1 minute or until I end it as a bonus action. Once on my turn my attack or spell deals my level in extra radiant damage to one target, and at the end of my turns all creatures within 10 ft of me, including myself, take half my level in radiant damage.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		atwill : true
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : ["1 HP", "2 HP", "3 HP", "4 HP", "5 HP", "6 HP", "7 HP", "8 HP", "9 HP", "10 HP", "11 HP", "12 HP", "13 HP", "14 HP", "15 HP", "16 HP", "17 HP", "18 HP", "19 HP", "20 HP"],
			action : ["action", ""]
		},
		"radiant consumption" : {
			name : "Radiant Consumption",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : levels.map(function (n) {
				if (n < 3) return ""
				return  Math.ceil(n/2) + "/" + n + " damage";
			}),
			action : ["action", " (start)"],
			eval : "AddAction('bonus action', 'Radiant Consumption (end)', 'being a Scourge Aasimar');",
			removeeval : "RemoveAction('bonus action', 'Radiant Consumption (end)');"
		}
	}
};
RaceList["bugbear"] = {
	regExpSearch : /bugbear/i,
	name : "Bugbear",
	source : ["V", 119],
	plural : "Bugbears",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	skills : ["Stealth"],
	age : " rearch adulthood at age 16 and live up to 80 years",
	height : " are between 6 and 8 feet tall (6'0\" + 2d12\")",
	weight : " weigh between 250 and 350 lb (200 + 2d12 \xD7 2d6 lb)",
	heightMetric : " are between 1,9 and 2,4 metres tall (185 + 5d12 cm)",
	weightMetric : " weigh between 115 and 160 kg (90 + 5d12 \xD7 4d6 / 10 kg)",
	improvements : "Bugbear: +2 Strength, +1 Dexterity;",
	scores : [2, 1, 0, 0, 0, 0],
	features : {
		"surprise attack" : {
			name : "Surprise Attack (2d6)",
			minlevel : 1,
			usages : 1,
			recovery : "Combat",
			tooltip : ""
		}
	},
	trait : "Bugbear (+2 Strength, +1 Dexterity)\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\nLong-Limbed: I have an additional 5 feet reach with melee attacks that I make on my turn.\nSurprise Attack: If I hit a surprised creature on my first turn in combat, that attack deals an extra 2d6 damage. I can do this only once per combat.",
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};
RaceList["firbolg"] = {
	regExpSearch : /firbolg/i,
	name : "Firbolg",
	source : ["V", 106],
	plural : "Firbolg",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish", "Giant"],
	age : " reach adulthood around 30 and can live for 500 years",
	height : " are between 6 and half and 8 feet tall (6'2\" + 2d12\")",
	weight : " weigh between 240 and 300 lb (175 + 2d12 \xD7 2d6 lb)",
	heightMetric : " are between 2 and 2,5 metres tall (190 + 5d12 cm)",
	weightMetric : " weigh between 110 and 135 kg (80 + 5d12 \xD7 4d6 / 10 kg)",
	improvements : "Firbolg: +1 Strength, +2 Wisdom;",
	scores : [1, 0, 0, 0, 2, 0],
	trait : "Firbolg (+1 Strength, +2 Wisdom)" + (typePF ? "\n" : " ") + "Hidden Step: Once per short rest, as a bonus action, I turn invisible until the start of my next turn as per the invisibility spell.\nPowerful Build: I count as one size larger for the weight I can carry.\nFirbolg Magic: I can cast the Detect Magic and Disguise Self spells each once per short rest. With Disguise Self I can seem up to 3 feet shorter. Wisdom is my ability for these spells.\nSpeech of Beast and Leaf: I can make my words understood, in a limited manner, by beasts and plants. I have advantage on Charisma checks to influence them.",
	spellcastingAbility : 5,
	features : {
		"firbolg magic (detect magic)" : {
			name : "Firbolg Magic (Detect Magic)",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : " (Firbolg Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Firbolg Magic",
				spells : ["detect magic"],
				selection : ["detect magic"],
				oncesr : true
			}
		},
		"firbolg magic (disguise self)" : {
			name : "Firbolg Magic (Disguise Self)",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : " (Firbolg Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Firbolg Magic",
				spells : ["disguise self"],
				selection : ["disguise self"],
				oncesr : true
			}
		},
		"hidden step" : {
			name : "Hidden Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : " (Hidden Step)",
			action : ["bonus action", ""]
		}
	},
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};
RaceList["goblin"] = {
	regExpSearch : /^(?=.*\bgoblins?\b)(?!.*hobgoblin|bugbear).*$/i,
	name : "Goblin",
	source : [["V", 119], ["G", 17]],
	plural : "Goblins",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	age : " rearch adulthood at age 8 and live up to 60 years",
	height : " are between 3 and a half and 4 feet tall (3'5\" + 2d4\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
	improvements : "Goblin: +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	features : {
		"fury of the small" : {
			name : "Fury of the Small",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			aadditional : levels.map(function (n) { return "+" + n + " damage"; })
		},
		"nimble escape" : {
			name : "Nimble Escape",
			minlevel : 1,
			action : ["bonus action", " (disengage/hide)"]
		}
	},
	trait : "Goblin (+2 Dexterity, +1 Constitution)\n\nFury of the Small: Once per short rest, when I hit a creature of a size category larger than mine, I deal extra damage equal to my level.\n\nNimble Escape: As a bonus action, I can take the Disengage or Hide action."
};
RaceList["goliath"] = {
	regExpSearch : /goliath/i,
	name : "Goliath",
	source : [["E", 11], ["V", 108]],
	plural : "Goliaths",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Giant"],
	skills : ["Athletics"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " are between 6 and a half and 8 feet tall (6'2\" + 2d10\")",
	weight : " weigh between 280 and 340 lb (200 + 2d10 \xD7 2d6 lb)",
	heightMetric : " are between 2 and 2,4 metres tall (190 + 5d10 cm)",
	weightMetric : " weigh between 100 and 155 kg (90 + 5d10 \xD7 4d6 / 10 kg)",
	improvements : "Goliath: +2 Strength, +1 Constitution;",
	scores : [2, 0, 1, 0, 0, 0],
	features : {
		"stone's endurance" : {
			name : "Stone's Endurance",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["reaction", ""]
		}
	},
	trait : "Goliath (+2 Strength, +1 Constitution)" + (typePF ? "\n" : "") + "\nStone's Endurance: Once per short rest, when I take damage, I can use my reaction to reduce the damage by 1d12 + my Con" + (typePF ? "" : "stitution") + " modifier." + (typePF ? "\n" : "") + "\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." + (typePF ? "\n" : "") + "\nMountain Born: I'm acclimated to high altitude, including elevations above 20000 feet. I'm also naturally adapted to cold climates.",
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};
RaceList["hobgoblin"] = {
	regExpSearch : /hobgoblin/i,
	name : "Hobgoblin",
	source : ["V", 119],
	plural : "Hobgoblins",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	armor : [true, false, false, false],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh between 150 and 200 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh between 70 and 90 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Hobgoblin: +2 Constitution, +1 Intelligence;",
	scores : [0, 0, 2, 1, 0, 0],
	features : {
		"saving face" : {
			name : "Saving Face",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : ""
		}
	},
	trait : "Hobgoblin (+2 Constitution, +1 Intelligence)\n\nMartial Training: I am proficient with two martial weapons of my choice and light armor.\n\nSaving Face: Once per short rest, when I miss an attack roll or fail an ability check or a saving throw, I can gain a bonus to the roll equal to the number of allies I can see within 30 feet of me (max +5)."
};
RaceList["kenku"] = {
	regExpSearch : /kenku/i,
	name : "Kenku",
	source : ["V", 109],
	plural : "Kenku",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Acrobatics, Deception, Stealth, and Sleight of Hand.",
	languageProfs : ["Common", "Auran"],
	age : " reach maturity at about 12 years old and can live to 60",
	height : " are around 5 feet tall (4'4\" + 2d8\")",
	weight : " weigh between 90 and 120 lb (70 + 2d8 \xD7 1d4 lb)",
	heightMetric : " are around 1,5 metres tall (135 + 5d8 cm)",
	weightMetric : " weigh between 40 and 55 kg (35 + 5d8 \xD7 2d4 / 10 kg)",
	improvements : "Kenku: +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Kenku (+2 Dexterity, +1 Wisdom)" + (typePF ? "\n" : "") + "\nExpert Forgery: Kenku can duplicate other creatures' handwriting and craftwork. I have advantage on all checks made to produce forgeries or duplicates of existing objects." + (typePF ? "\n" : "") + "\nMimicry: I can mimic any sounds I have heard, including voices, but can otherwise not speak. Creatures hearing these sounds can determine they are imitations with a successful Wisdom (Insight) check opposed by my Charisma (Deception)."
};
RaceList["kobold"] = {
	regExpSearch : /kobold/i,
	name : "Kobold",
	source : ["V", 119],
	plural : "Kobolds",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic"],
	vision : [["Darkvision", 60], ["Sunlight Sensitivity", 0]],
	age : " reach adulthood at age 6 and can live up to 120 years, but rarely do so",
	height : " are between 2 and 3 feet tall (2'1\" + 2d4\")",
	weight : " weigh between 25 and 35 lb (25 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 65 and 90 cm tall (63 + 5d4 cm)",
	weightMetric : " weigh between 10 and 15 kg (11 + 5d4 \xD7 2 / 10 kg)",
	improvements : "Kobold: -2 Strength, +2 Dexterity;",
	scores : [-2, 2, 0, 0, 0, 0],
	features : {
		"grovel, cower, and beg" : {
			name : "Grovel, Cower, and Beg",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["action", ""]
		}
	},
	trait : "Kobold (-2 Strength, +2 Dexterity)\nSunlight Sensitivity: Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.\nGrovel, Cower, and Beg: As an action, I can distract all foes within 10 feet of me that can see me so that my allies gain advantage on attack rolls against them.\nPack Tactics: I have advantage on attack rolls against creatures when at least one of my allies is within 5 feet of that creature and that ally is not incapacitated."
};
RaceList["lizardfolk"] = {
	regExpSearch : /lizard(folk|man|men)/i,
	name : "Lizardfolk",
	source : ["V", 111],
	plural : "Lizardfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Animal Handling, Nature, Perception, Stealth, and Survival.",
	languageProfs : ["Common", "Draconic"],
	weapons : ["bite"],
	addarmor : "Natural Armor",
	age : " reach maturity around age 14 and rarely live longer than 60 years",
	height : " range from 5 to well over 6 feet tall (4'9\" + 2d10\")",
	weight : " weigh around 200 lb (120 + 2d10 \xD7 2d6 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 95 kg (55 + 5d10 \xD7 4d6 / 10 kg)",
	improvements : "Lizardfolk: +2 Constitution, +1 Wisdom;",
	scores : [0, 0, 2, 0, 1, 0],
	features : {
		"cunning artisan" : {
			name : "Cunning Artisan",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : ""
		},
		"hungry jaws" : {
			name : "Hungry Jaws",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["bonus action", ""]
		}
	},
	trait : "Lizardfolk (+2 Constitution, +1 Wisdom) Bite: I can use my fanged maw to make unarmed strikes dealing 1d6 piercing damage." + (typePF ? "\n" : " ") + "Cunning Artisan: As part of a short rest I can harvest parts of a slain creature to make a shield, club, javelin, or 1d4 darts/blowgun needles. This requires a suitable corpse and appropriate tools." + (typePF ? "\n" : " ") + "Hold Breath: I can hold my breath for up to 15 minutes at a time." + (typePF ? "\n" : " ") + "Natural Armor: I have an AC of 13 + Dexterity modifier + shield." + (typePF ? "\n" : " ") + "Hungry Jaws: As a bonus action, once per short rest, I can make a special bite attack and if it hits I gain temporary HP equal to my Con modifier (min 1)."
};
RaceList["orc"] = {
	regExpSearch : /^(?!.*half)(?=.*\bor(c|k)).*$/i,
	name : "Orc",
	source : ["V", 120],
	plural : "Orcs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Orc"],
	vision : [["Darkvision", 60]],
	skills : ["Intimidation"],
	age : " reach adulthood at age 12 and live up to 50 years",
	height : " are usually over 6 feet tall (5'4\" + 2d8\")",
	weight : " weigh between 230 and 280 lb (175 + 2d8 \xD7 2d6 lb)",
	heightMetric : " are usually over 1,8 metres tall (160 + 5d8 cm)",
	weightMetric : " weigh between 100 and 125 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
	improvements : "Orc: +2 Strength, +1 Constitution, -2 Intelligence;",
	scores : [2, 0, 1, -2, 0, 0],
	features : {
		"aggressive" : {
			name : "Aggressive",
			minlevel : 1,
			action : ["bonus action", " (dash to enemy)"]
		}
	},
	trait : "Orc (+2 Strength, +1 Constitution, -2 Intelligence)\n\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\n\nAggressive: As a bonus action, I can move up to my speed toward an enemy that I can see or hear. I must end my move closer to this enemy than I started.",
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};
RaceList["tabaxi"] = {
	regExpSearch : /tabaxi/i,
	name : "Tabaxi",
	source : ["V", 113],
	plural : "Tabaxi",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 20, enc : 10 }
	},
	skills : ["Perception", "Stealth"],
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	weapons : ["cat's claws"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from 5 to well over 6 feet tall (4'10\" + 2d10\")",
	weight : " weigh around 150 lb (90 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 70 kg (40 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Tabaxi: +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1],
	features : {
		"feline agility" : {
			name : "Feline Agility",
			minlevel : 1,
			usages : 1,
			recovery : " Turn",
			additional : "still for 1 turn to recover",
			tooltip : " (can be replenished by not moving for one whole turn)"
		}
	},
	trait : "Tabaxi (+2 Dexterity, +1 Charisma)\n\nCat's Claws: I can use my fanged claws to make unarmed strikes dealing 1d4 slashing damage. They also give me a climbing speed of 20 feet.\n\nFeline Agility: When moving on my turn in combat, I can move double my speed. Once I do this, I can't do it again until I don't move at all on one of my turns."
};
RaceList["triton"] = {
	regExpSearch : /triton/i,
	name : "Triton",
	source : ["V", 115],
	plural : "Triton",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Primordial"],
	dmgres : ["Cold"],
	age : " reach maturity around age 15 and can live up to 200 years",
	height : " are around 5 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 150 lb (90 + 2d10 \xD7 2d4 lb)",
	heightMetric : " are around 1,6 metres tall (135 + 5d10 cm)",
	weightMetric : " weigh around 70 kg (40 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Triton: +1 Strength, +1 Constitution, +1 Charisma;",
	scores : [1, 0, 1, 0, 0, 1],
	trait : "Triton (+1 Strength, +1 Constitution +1 Charisma)\nControl Air and Water: I can cast the Fog Cloud spell. Once I reach 3rd level, I can cast the Gust of Wind spell. Once I reach 5th level, I can cast the Wall of Water spell. All three spells can be used once per long rest. Charisma is my spellcasting ability for these spells.\nEmissary of the Sea: I can communicate simple ideas to beasts that can breathe water.\nGuardians of the Depths: I have resistance to cold damage and ignore all drawbacks from a deep, underwater environment." + (typePF ? "\n" : " ") + "Amphibious: I can breathe air and water.",
	abilitySave : 6,
	spellcastingAbility : 6,
	features : {
		"fog cloud" : {
			name : "Fog Cloud",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Control Air and Water)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Control Air and Water (1)",
				spells : ["fog cloud"],
				selection : ["fog cloud"],
				oncelr : true
			}
		},
		"gust of wind" : {
			name : "Gust of Wind",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Control Air and Water)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Control Air and Water (3)",
				spells : ["gust of wind"],
				selection : ["gust of wind"],
				oncelr : true
			}
		},
		"wall of water" : {
			name : "Wall of Water",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Control Air and Water)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Control Air and Water (5)",
				spells : ["wall of water"],
				selection : ["wall of water"],
				oncelr : true
			}
		}
	}
};
RaceList["yuan-ti pureblood"] = {
	regExpSearch : /^(?=.*yuan.ti)(?=.*pure.?blood).*$/i,
	name : "Yuan-Ti Pureblood",
	source : ["V", 120],
	plural : "Yuan-Ti Purebloods",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Abyssal", "Draconic"],
	vision : [["Darkvision", 60]],
	savetxt : {
		immune : ["poison"],
		adv_vs : ["magic"]
	},
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Yuan-Ti Pureblood: +1 Intelligence, +2 Charisma;",
	scores : [0, 0, 0, 1, 0, 2],
	trait : "Yuan-Ti Pureblood (+1 Intelligence, +2 Charisma)\n\nInnate Spellcasting:\n   I know the Poison Spray cantrip.\n   I can cast the spell Animal Friendship on snakes at will.\n   Once I reach 3rd level, I can cast the Suggestion spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Innate Spellcasting (1)",
		spells : ["poison spray"],
		selection : ["poison spray"],
		atwill : true
	},
	features : {
		"animal friendship" : {
			name : "Animal Friendship",
			minlevel : 1,
			action : ["action", " (on snakes)"],
			spellcastingBonus : {
				name : "Innate Spellcasting (1)",
				spells : ["animal friendship"],
				selection : ["animal friendship"],
				atwill : true
			}
		},
		"suggestion" : {
			name : "Suggestion",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Innate Spellcasting)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Innate Spellcasting (3)",
				spells : ["suggestion"],
				selection : ["suggestion"],
				oncelr : true
			}
		}
	}
};

// Racial weapons (lizardfolk bite and tabaxi claw)
WeaponsList["bite"] = {
	regExpSearch : /\bbite\b/i,
	name : "Bite",
	source : ["V", 112],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["claws"] = {
	regExpSearch : /^(?=.*\b(sharp|cat|dragon|retractable|tortle))(?=.*\bclaws?\b).*$/i,
	name : "Sharp Claws",
	source : [["V", 115], ["UA:FR", 2], ["TP", 4], ["X", 74]],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};

// Creatures
CreatureList["aurochs"] = {
	name : "Aurochs",
	source : ["V", 207],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 11,
	hp : 38,
	hd : [4, 10], //[#, die]
	speed : "50 ft",
	scores : [20, 10, 19, 2, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 11,
	languages : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [2, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Charge trait"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the aurochs moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. A targeted creature must succeed on a DC 15 Strength saving throw or be knocked prone."
		}
	]
};
CreatureList["cow"] = {
	name : "Cow",
	source : ["V", 207],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 10,
	hp : 15,
	hd : [2, 10], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the cow moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
		}
	]
};
CreatureList["ox"] = {
	name : "Ox",
	source : ["V", 208],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 10,
	hp : 15,
	hd : [2, 10], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the ox moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
		}, {
			name : "Beast of Burden",
			description : "The oxen is considered to be a Huge animal for the purpose of determining its carrying capacity."
		}
	]
};
CreatureList["deep rothe"] = {
	name : "Deep Roth\xE9",
	source : ["V", 208],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 10,
	hp : 13,
	hd : [2, 8], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the deep roth\xE9 moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
		}, {
			name : "Innate Spellcasting",
			description : "The deep roth\xE9's spellcasting ability is Charisma. It can innately cast Dancing Lights at will, requiring no components."
		}
	]
};
CreatureList["rothe"] = {
	name : "Roth\xE9",
	source : ["V", 208],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 10,
	hp : 15,
	hd : [2, 10], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 30 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the Roth\xE9 moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
		}
	]
};
CreatureList["stench kow"] = {
	name : "Stench Kow",
	source : ["V", 208],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 10,
	hp : 15,
	hd : [2, 10], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	damage_resistances : "cold, fire, and poison damage",
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the stench kow moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
		}, {
			name : "Stench",
			description : "Any creature other than a stench kow starting its turn within 5 ft of a stench kow must make a DC 12 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all stench kows for 1 hour."
		}
	],
	wildshapeString : "Darkvision 60 ft | Resistant to: cold, fire, poison | Charge: If the stench kow moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, it deals extra 2d6 piercing damage | Stench: Any creature starting its turn within 5 ft of a stench kow must make a DC 12 Con save or be poisoned until the start of the its next turn. On a success, it is immune to the stench of all stench kows for 1 hour"
};
CreatureList["dolphin"] = {
	name : "Dolphin",
	source : ["V", 208],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 11,
	hd : [2, 8], //[#, die]
	speed : "swim 60 ft",
	scores : [14, 13, 13, 6, 12, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3
	},
	senses : "Blindsight 60 ft",
	passivePerception : 13,
	languages : "",
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Slam",
			ability : 1,
			damage : [1, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 30 ft straight in the same round, deals extra 1d6 damage (Charge)"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the dolphin moves at least 30 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 3 (1d6) bludgeoning damage."
		}, {
			name : "Hold Breath",
			description : "The dolphin can hold its breath for 20 minutes."
		}
	]
};
CreatureList["cranium rat"] = {
	name : "Cranium Rat",
	source : ["V", 133],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Lawful Evil",
	ac : 12,
	hp : 2,
	hd : [1, 4], //[#, die]
	speed : "30 ft",
	scores : [2, 14, 10, 4, 11, 8], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 30 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["", "", false], //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Illumination",
			description : "As a bonus action, the cranium rat can shed dim light from its brain in a 5-foot radius or extinguish the light."
		}, {
			name : "Telepathic Shroud",
			description : "The cranium rat is immune to any effect that would sense its emotions or read its thoughts, as well as to all divination spells."
		}
	]
};
CreatureList["brontosaurus"] = {
	name : "Brontosaurus",
	source : [["V", 139], ["ToA", 215]],
	size : 0, //Gargantuan
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 15,
	hp : 121,
	hd : [9, 20], //[#, die]
	speed : "30 ft",
	scores : [21, 9, 17, 2, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", 6, "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "5",
	proficiencyBonus : 3,
	attacksAction : 1,
	attacks : [{
			name : "Stomp",
			ability : 1,
			damage : [5, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (20 ft)",
			description : "Target must succeed on a DC 14 Strength saving throw or be knocked prone"
		}, {
			name : "Tail",
			ability : 1,
			damage : [6, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (20 ft)",
			description : ""
		}
	]
};
CreatureList["deinonychus"] = {
	name : "Deinonychus",
	source : [["V", 139], ["ToA", 217]],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 26,
	hd : [4, 8], //[#, die]
	speed : "40 ft",
	scores : [15, 15, 14, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3
	},
	senses : "",
	passivePerception : 13,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 3,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two claw and one bite as one Attack action; If used after moving 20 ft straight in the same round, see Pounce trait"
		}, {
			name : "Bite",
			ability : 1,
			damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two claw and one bite as one Attack action (also, see Pounce trait)"
		}
	],
	traits : [{
			name : "Multiattack",
			description : "The deinonychus makes three attacks: two with its claws and one with its bite."
		}, {
			name : "Pounce",
			description : "If the deinonychus moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the deinonychus can make one bite attack against it as a bonus action."
		}
	]
};
CreatureList["dimetrodon"] = {
	name : "Dimetrodon",
	source : [["V", 139], ["ToA", 217]],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 19,
	hd : [3, 8], //[#, die]
	speed : "30 ft, swim 20 ft",
	scores : [14, 10, 15, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	]
};
CreatureList["hadrosaurus"] = {
	name : "Hadrosaurus",
	source : [["V", 140], ["ToA", 224]],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 11,
	hp : 19,
	hd : [3, 10], //[#, die]
	speed : "40 ft",
	scores : [15, 10, 13, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Tail",
			ability : 1,
			damage : [1, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	]
};
CreatureList["quetzalcoatlus"] = {
	name : "Quetzalcoatlus",
	source : [["V", 140], ["ToA", 230]],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 30,
	hd : [4, 12], //[#, die]
	speed : "10 ft, fly 80 ft",
	scores : [15, 13, 13, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [3, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : "If used after diving 30 ft towards a target, the attack deals 3d6 extra damage (Dive Attack)"
		}
	],
	traits : [{
			name : "Dive Attack",
			description : "If the quetzalcoatlus is flying and dives at least 30 ft toward a creature and then hits it with a bite attack, the attack deals an extra 10 (3d6) damage to the target."
		}, {
			name : "Flyby",
			description : "The quetzalcoatlus doesn't provoke opportunity attacks when it flies out of an enemy's reach."
		}
	]
};
CreatureList["stegosaurus"] = {
	name : "Stegosaurus",
	source : [["V", 140], ["ToA", 231]],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 76,
	hd : [8, 12], //[#, die]
	speed : "40 ft",
	scores : [20, 9, 17, 2, 11, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [6, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : ""
		}
	]
};
CreatureList["velociraptor"] = {
	name : "Velociraptor",
	source : [["V", 140], ["ToA", 235]],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 10,
	hd : [3, 4], //[#, die]
	speed : "30 ft",
	scores : [6, 14, 13, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3
	},
	senses : "",
	passivePerception : 13,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One bite and one claw attack as an Attack action"
		}, {
			name : "Claw",
			ability : 2,
			damage : [1, 4, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One bite and one claw attack as an Attack action"
		}
	],
	traits : [{
			name : "Pack Tactics",
			description : "The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}
	]
};
CreatureList["gazer"] = {
	name : "Gazer",
	source : ["V", 126],
	size : 5, //Tiny
	type : "Aberration",
	subtype : "",
	alignment : "Neutral Evil",
	ac : 13,
	hp : 13,
	hd : [3, 4], //[#, die]
	speed : "0 ft, fly 30 ft",
	scores : [3, 17, 14, 3, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", 2, ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 4,
		"stealth" : 5
	},
	senses : "Darkvision 60 ft",
	passivePerception : 14,
	languages : "",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}, {
			name : "Eye Rays",
			ability : 3,
			damage : ["Special", "", ""], //[#, die, type] "" for die is allowed
			range : "60 ft",
			description : "Shoot two randomly determined different rays as one action; Each ray has its own target; See traits",
			dc : true,
			modifiers : ["", "", false], //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Aggressive",
			description : "As a bonus action, the gazer moves its speed toward an enemy that it can see."
		}, {
			name : "Mimicry",
			description : "The gazer can mimic simple speech it has heard, in any language. Any who hear this can tell it is an imitation with a successful DC 10 Wis (Insight) check."
		}
	],
	actions : [{
			name : "Eye Rays",
			description : "1. Dazing Ray: Wisdom saving throw or charmed until the start of the gazer's next turn. While charmed, half speed and disadv. on attacks.\n2. Fear Ray: Wisdom saving throw or frightened until the start of the gazer's next turn.\n3. Frost Ray: Target must make a Dexterity saving throw or 10 (3d6) cold damage.\n4. Telekinetic Ray: Medium or smaller creature, Strength saving throw or be moved up to 30 ft away from the gazer. If it is an up to 10 lb unattended object, the gazer moves it up to 30 ft in any direction. It can exert fine control on objects this way."
		}
	]
};
