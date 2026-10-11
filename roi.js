document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("roi-form");
    const result = document.getElementById("roi-result");

    if (!form || !result) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const employees = Number(
            document.getElementById("employees").value
        );

        const hours = Number(
            document.getElementById("hours").value
        );

        const hourlyCost = Number(
            document.getElementById("hourly-cost").value
        );

        if (!employees || !hours || !hourlyCost) {
            return;
        }

        // Estimación de tiempo recuperable mediante digitalización.
        const recoveryPercentage = 0.35;

        const monthlyHours = employees * hours;
        const recoveredHours = monthlyHours * recoveryPercentage;

        const monthlySaving = recoveredHours * hourlyCost;
        const annualSaving = monthlySaving * 12;

        document.getElementById("result-hours").textContent =
            Math.round(recoveredHours);

        document.getElementById("result-monthly").textContent =
            formatCurrency(monthlySaving);

        document.getElementById("result-yearly").textContent =
            formatCurrency(annualSaving);

        result.classList.add("show");

        result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });

    function formatCurrency(value) {
        return new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0
        }).format(value);
    }
});