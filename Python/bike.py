class Bike(object):
  def __init__(self, name, price, max_speed):
    self.name = name
    self.price = price
    self.max_speed = max_speed
    self.miles = 0
    
  def displayInfo(self):
    print "The price of the bike is {}, the maximum speed is {}, and the current miles are {}.".format(self.price, self.max_speed, self.miles)
    return self
    
  def ride(self):
    self.miles += 10
    print "{} Riding; the total miles are {}".format(self.name, self.miles)
    return self
    
  def reverse(self):
    self.miles -= 5
    if self.miles < 0:
      self.miles = 0
    print "{} Reversing; the total miles are {}".format(self.name, self.miles)
    return self

# Bike 1 method calls  
bike1 = Bike("bike1",500, 90)
bike1.ride().ride().ride().reverse().displayInfo()

print "----------"

# Bike 2 method calls
bike2 = Bike("bike2", 50, 10)
bike2.ride().ride().reverse().reverse().displayInfo()

print "----------"

#3 Bike 3 method calls
bike3 = Bike("bike3", 900, 200)
bike3.reverse().reverse().reverse().displayInfo()
