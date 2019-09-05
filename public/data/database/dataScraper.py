import json

print(json.dumps(	{
		"name" : "Witch Bolt",
		"classes" : ["sorcerer", "warlock", "wizard"],
		"source" : ["P", 289],
		"level" : 1,
		"school" : "Evoc",
		"time" : "1 a",
		"range" : "30 ft",
		"components" : "V,S,M",
		"compMaterial" : "A twig from a tree that has been struck by lightning",
		"duration" : "Conc, 1 min",
		"description" : "Spell attack 1d12+1d12/SL Lightning dmg; 1 a, if consecutive, for dmg again; ends if out of range",
		"descriptionFull" : "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell's range or if it has total cover from you. When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st."
	}))
