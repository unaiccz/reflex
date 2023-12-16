import reflex as rx
from app.components.Nav import nav

class State(rx.State):
    pass

def index():
    return rx.vstack(
        nav(),
        rx.text("Hello World!")
    )



app = rx.App()
app.add_page(index)
app.compile()

