import reflex as rx
def nav():
    return rx.flex( # Horizontal stack navbar
    rx.link(
        rx.button("Home", color="white", background_color="grey", font_size="2xl", font_weight="bold", font_family="sans-serif",), # Home button
        href="/", # href to index page
        margin_right="10px", # Margin right
    ),
    rx.link(
        rx.button("About", color="white", background_color="grey", font_size="2xl", font_weight="bold", font_family="sans-serif",), # About button
        href="/about", # href to about page
    ),
    # 
    ) # End of navbar