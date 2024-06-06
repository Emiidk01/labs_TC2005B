document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("riskChart").getContext("2d");

  const data = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: "Ponderacion",
        data: [3, 5, 2, 8, 6, 4, 7, 5, 6, 8, 9, 7], // Datos de ejemplo
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const riskChart = new Chart(ctx, config);
});
