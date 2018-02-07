words = "It's thanksgiving day. It's my birthday,too!"
x = [2,54,-2,7,12,98]
z = [19,2,54,-2,7,12,98,32,10,-3,6]

#1 Print the position of the first instance of the word "day"
print words.find("day")

#2 Create a new string where the word "day" is replaced with the word "month"
print words.replace("day", "month")

#3 Print the min and max values in a list, code should work for any list
print "Min Value", min(x)
print "Max Value", max(x)

#4 Print the first and last values in a list
firstVal = x.pop(0)
lastVal = x.pop()
print "First Value is", firstVal
print "Last Value is", lastVal

#5 Create a new list containing only first and last values in the original list
newX = []
newX.append(firstVal)
newX.append(lastVal)
print "Our new list is", newX

#6 Sort the list 
#. Split the list in half
#. Push the list created from the first half to position 0 of the list created from the second half
z.sort()
newZ = []
splitsize = 1.0/2 * len(z)
for i in range(2):
	newZ.append(z[int(round(i*splitsize)):int(round((i+1)*splitsize))])
print newZ
pop = newZ.pop(0)
print pop + newZ