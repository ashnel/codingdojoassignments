suit = ["hearts", "diamonds", "spades", "clubs"]
value = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"]

class Cards(object):
  def __init__(self,suit, value):
    self.suit = suit
    self.value = value
    
  def __str__(self):
    return "{} of {}".format(self.value, self.suit)
    
class Deck(object):
  def __init__(self):
    self.card_list = []
    
  def __str__(self):
   for i in self.card_list:
     print i
    
  #def display(self):
    #print [Cards.name for Cards in self.card_list]
    
  def addCard(self, card):
    self.card_list.append(card)
    return self
    
  def Deal(self, card_list):
    print self.card_list
    return self
    
our_cards = Deck()
    
for i in range(1,53):
  for s in suit:
    for v in value:
      i = Cards(s,v)
      our_cards.addCard(i)
      
print our_cards