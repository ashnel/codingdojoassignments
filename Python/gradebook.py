import random

def gradebook():
	print "Scores and Grades"
	grade = ""
	
	for i in range(0,11):
		score = random.randint(60,100)
		
		if score > 60 and score <= 69:
			grade = "D"
		elif score > 70 and score <= 79:
			grade = "C"
		elif score > 80 and score <= 89:
			grade = "B"
		elif score > 90 and score <= 100:
			grade = "A"
		
		print "Score:", str(score) + ";", "Your Grade is", grade
		
gradebook()
	

