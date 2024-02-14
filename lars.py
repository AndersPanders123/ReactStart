import turtle

for i in range(4):
    turtle.penup()
    turtle.home()
    turtle.pendown()
    turtle.pensize(50)
    turtle.setheading(i * -90 - 45)
    turtle.forward(100)
    turtle.right(90)
    turtle.forward(100)
