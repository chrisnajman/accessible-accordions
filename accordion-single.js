const accordionButton = document.querySelector("[data-accordion-button]")
const accordionContent = document.querySelector(".accordion__content")
const accordionHeading = document.querySelector("[data-accordion-heading]")

// Button
accordionButton.setAttribute("aria-expanded", false)

accordionButton.addEventListener("click", () => {
  accordionButton.classList.toggle("expanded")
  accordionContent.classList.toggle("open")

  if (accordionButton.classList.contains("expanded")) {
    accordionButton.setAttribute("aria-expanded", true)
    accordionContent.setAttribute("aria-hidden", false)
    accordionHeading.setAttribute("tabindex", "0") // sets focus on first child (h3) with tabindex
  } else {
    accordionButton.setAttribute("aria-expanded", false)
    accordionContent.setAttribute("aria-hidden", true)
    accordionHeading.removeAttribute("tabindex") // removes focus from first child: (h3)
  }
})

// Content
accordionContent.setAttribute("aria-hidden", true)
accordionContent.classList.remove("open")
