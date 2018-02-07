def multiply (num):
	print "x",
	
	for k in range(1,num+1):
		if k == num:
			print k
		else:
			print k,
	
	for i in range(1,num+1):
		for j in range(1,num+1):
			if j == num:
				print i * j
			elif j == 1:
			  print 1 * i,1 * i,
			else:
				print i * j,
	
multiply(12)	