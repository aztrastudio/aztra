
/* AZTRA — Request portofolio KOPI RUANG dan RAKUIN */
document.addEventListener("DOMContentLoaded", () => {
  const requestButtons = document.querySelectorAll(
    ".portfolio-request[data-request]"
  );

  const serviceSelect = document.querySelector("#service");
  const detailsInput = document.querySelector("#details");
  const contactSection = document.querySelector("#contact");

  requestButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const concept = button.dataset.request || "konsep website";

      if (serviceSelect) {
        const customOption = Array.from(serviceSelect.options).find(
          (option) =>
            option.textContent.trim().toLowerCase() ===
            "permintaan khusus / custom project"
        );

        serviceSelect.value = customOption
          ? customOption.value || customOption.textContent
          : "Lainnya / konsultasi";
      }

      if (detailsInput) {
        detailsInput.value =
          `Saya tertarik dengan konsep ${concept}. ` +
          "Saya ingin konsultasi mengenai desain, fitur, dan harga website.";
      }

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      if (detailsInput) {
        window.setTimeout(() => {
          detailsInput.focus({ preventScroll: true });
        }, 350);
      }
    });
  });
});
