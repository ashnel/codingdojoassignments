def stars(arr):
	for indx in arr:
		print ""
		if isinstance(indx, str):
			for char in indx:
				print indx[:1].lower(),
		else:
			for i in range(1,indx+1):
				print "*",
			
stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])