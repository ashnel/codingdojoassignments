def checkerboard ():
	count = 10
	
	while count <= 10:
		if count % 2 == 0:
			print "* * * * *"
		else:
			print " * * * * *"
			
		if count == 0:
			break
			
		count = count - 1
checkerboard()