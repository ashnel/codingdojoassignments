import random

def cointoss():
	head = 0
	tail = 0
	
	for i in range(1,5001):
		print "Attempt #{}:".format(i), "Throwing a coin...",
		random_num = random.randint(1, 100)
		
		if random_num > 50:
			head += 1
			print "It's a head! ... Got {} head(s) so far and {} tail(s) so far".format(head, tail)
		elif random_num < 50:
			tail += 1
			print "It's a tail! ... Got {} head(s) so far and {} tail(s) so far".format(head, tail)
		
cointoss()