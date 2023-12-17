import reflex as rx
def links() -> rx.component:
     # Horizontal stack container
    return rx.vstack(
rx.hstack( #mail
    rx.button("📧 Contactame", color="white", background_color="blue", font_size="2xl", font_weight="bold", font_family="sans-serif", href="mailto:unaicc2003@gmail.com"),
    rx.text("unaicc2003@gmail.com"),
border_width=2, border_color="blue", border_radius=10, padding=5, margin=10, width="100%", justify_content="center", align_items="center", background_color="grey", shadow=2
), #end mail
#github
rx.hstack(
    rx.button("🐙 Github", color="white", background_color="black", font_size="2xl", font_weight="bold", font_family="sans-serif", href="https://github.com/unaiccz"),
) # end github

    ) # End of container