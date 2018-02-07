my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

'''def unzip(dictionary):
	final = []
	temp = []
	
	for i in dictionary:
		newKey = i
		newVal = dictionary[i]
		temp.append(newKey)
		temp.append(newVal)
		final.append(temp)
		temp = []
	
	print final'''
	
def unzip(dictionary):
	print dictionary.items()
	
unzip(my_dict)