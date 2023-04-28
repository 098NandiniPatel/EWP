# a,b,c=[int(x) for x in input("Enter the values of A B C::").split()]
# if(a>b):
#     if(a>c):
#         print("Alice won")
#     else:
#         print("Charlie won")
# else:
#     if(b>c):
#         print("bob won")
#     else:
#         print("Charlie won")

# n=[int(x) for x in input("Enter the Test cases::").split()]
# for i in n:
#     if(i>=70 and i<=44000):
#         print("yes")
#     else:
#         print("no")
a="h1"
match a:
    case "h0":
        print(a)
    case "h1":
        print("h1")
    case _:
        print("default")