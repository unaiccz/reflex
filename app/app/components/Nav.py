import reflex as rx
def nav():
    return rx.hstack( # Horizontal stack navbar
        rx.text("Developer",
                 color="purple",
                 font_size=25,
                 font_family="monospace")
    )