'''students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def names(dictionary):
	for item in dictionary:
		print ""
		for i in item:
			print item[i],
		
names(students)'''

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }
 
def schoolUsers(dictionary):
	for type in dictionary:
		print type
		for user in range(0, len(dictionary[type])):
			name = dictionary[type][user].values()
			joined = " ".join(str(x) for x in name)
			print user + 1, "-", joined, "-", len(joined)-1
		
		
schoolUsers(users)