#Multiples

#1 Print all odd numbers from 1 to 1000 using a for loop; don't use a list
for i in range(1,1001):
	if i % 2 != 0:
		print i
		
#2 Print all multiples of 5 from 5 to 1,000,000
for j in range(1,1000001):
	if j % 5 == 0:
		print j
	
a = [1, 2, 5, 10, 255, 3]
#Sum List

# Print the sum of all values in the list
a = [1, 2, 5, 10, 255, 3]
sumA = 0

for x in a:
	sumA += x
print sumA

#Average List

# Print the average of the values in the list
b = [1, 2, 5, 10, 255, 3]
sumB = 0

for v in b:
	sumB += v
print sumB / len(b)