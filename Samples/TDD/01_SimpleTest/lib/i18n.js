var mapping = {
	'hello': {
		'en': 'hello',
		'es': 'hola'
	},
	'beer': {
		'en': 'beer',
		'es': 'cervesa'
	}
}

module.exports = function translate(phrase, lang) {
	var searchPhrase = phrase.toLowerCase();
	var phraseMap = mapping[searchPhrase];

	if(!phraseMap) {
		return searchPhrase;
	}

	return phraseMap[lang] || searchPhrase;
}