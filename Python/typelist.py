def typeList (list):
	sum = 0
	myStr = ""

	for i in list:
		if isinstance(i, str):
			myStr = myStr + " " + i
		else:
			sum += i
			
	if myStr != "" and sum > 0:
		print "The list you entered is of a mixed type"
		print "String:" + myStr
		print "Sum:", sum
	elif myStr == "" and sum > 0:
		print "The list you entered is of integer type"
		print "Sum:", sum
	elif myStr != "" and sum == 0:
		print "The list you entered is of string type"
		print "String:" + myStr
				
typeList (['magical','unicorns'])