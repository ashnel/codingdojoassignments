name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar", "Steph", "Tony", "Tim", "Ashley"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def make_dict(list1, list2):
	new_dict = {}
	
	
	if len(list1) > len(list2):
		difference = len(list1) - len(list2)
		for i in range(1,difference+1):
			list2.append("empty value")
		for index in range(max(len(list1),len(list2))):
			new_dict[list1[index]] = list2[index]
	elif len(list1) < len(list2):
		difference = len(list2) - len(list1)
		for i in range(1,difference+1):
			list1.append("empty value")
		for index in range(min(len(list1),len(list2))):
			new_dict[list2[index]] = list1[index]
	elif len(list1) == len(list2):
		for index in range(min(len(list1),len(list2))):
			new_dict[list1[index]] = list2[index]
			
	print new_dict

  #easy way
  #zipped = zip(list1, list2)
  #new_dict = dict(zipped)
  #print new_dict'''
  
make_dict(name, favorite_animal)