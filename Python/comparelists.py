def compareList (list1, list2):
	same = "true"
	
	if len(list1) != len(list2):
		print "The lists are not the same"
		return 
	else:
		for i in list1:
			for j in list2:
				if i == j:
					same = "true"
				elif i != j:
					same = "false"
	print same
	if same == "true":
		print "The lists are the same"
	elif same == "false":
		print "The lists are not the same"
		
compareList(['celery','carrots','bread','milk'],['celery','carrots','bread','cream'])