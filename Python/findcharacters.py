def findChar (list, char):
	newList = []
	
	for i in list:
		if char in i:
			newList.append(i)
		else:
			continue
	
	print newList
	
findChar(['hello','worlds','my','name','is','Annas'],'s')
