def odd_even():
	for i in range(1,2001):
		if i % 2 != 0:
			print "Number is ", i, "This is an odd number."
		else:
			print "Number is ", i, "This is an even number."
			
odd_even()

def multiply(arr, num):
	newArr = []

	for i in arr:
		newArr.append(i*num)
	
	return newArr
	
multiply([2,4,10,16],5)

def layered_multiples(arr):
	new_array = []
	temp = []
	
	for i in arr:
		for j in range(1,i+1):
			temp.append(1)
			
		new_array.append(temp)
		temp = []
			
	return new_array
		
	
x = layered_multiples(multiply([2,4,5],3))

print x