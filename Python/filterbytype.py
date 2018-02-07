x = []

if isinstance(x, int):
	if x >= 100:
		print "That's a big number!"
	else:
		print "That's a small number."
elif isinstance(x, str):
	if len(x) >= 50:
		print "Long sentence."
	else:
		print "Short sentence."
elif isinstance(x,list):
	if len(x) >= 10:
		print "Big list!"
	else:
		print "Short list."
else:
	print "It is a value type that I cannot detect"