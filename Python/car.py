class Car(object):
  def __init__(self, price, speed, fuel, mileage):
    self.price = price
    self.speed = speed
    self.fuel = fuel
    self.mileage = mileage
    self.tax = .12
    
    if self.price > 10000:
      self.tax = .15
      
    self.display_all()
      
  def display_all(self):
    print "Price: {}".format(self.price)
    print "Speed: {}mph".format(self.speed)
    print "Fuel: {}".format(self.fuel)
    print "Mileage: {}mpg".format(self.mileage)
    print "Tax: {}".format(self.tax)
    print "-----"
    return self
      
car1 = Car(20000,50,"Full",25)
car2 = Car(1200,35,"Half Filled",15)
car3 = Car(50000,35,"Empty",30)
car4 = Car(6000,35,"Full",1)
car5 = Car(50500,35,"Full",50)
car6 = Car(100,35,"Half Filled",5)

car1
car2
car3
car4
car5
car6
