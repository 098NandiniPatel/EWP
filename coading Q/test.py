#for a given number print Fizz for divisible by 3
#print Buzz for divisible by 5
#print FizzBuzz for divisible by 3 and 5
#else print the number

n=int(input("enter a number::"))
for i in range(1,n+1):
    if(i%3==0 and i%5==0):
        print("FizzBuzz",end=" ")
    elif(i%3==0):
        print("Fizz",end=" ")
    elif(i%5==0):
        print("Buzz",end=" ")
    else:
        print(i,end=" ")

   