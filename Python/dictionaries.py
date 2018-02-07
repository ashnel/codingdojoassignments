about_me = {
	'name': "Ashley",
	'age': 23,
	'country': "United States",
	'language': "Python"
}

def dict_print (dictionary):
	for item in dictionary:
		print "The key is: {}, The value is: {}".format(item, dictionary[item])


dict_print (about_me)