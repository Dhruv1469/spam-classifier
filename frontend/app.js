async function predict() {
    const message = document.getElementById("message").value;
    const loading = document.getElementById("loading");
    const resultEl = document.getElementById("result");
    const confidenceEl = document.getElementById("confidence");

    loading.style.display = "block";
    resultEl.innerText = "";
    confidenceEl.innerText = "";

    const response = await fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
    });

    const data = await response.json();

    loading.style.display = "none";
    resultEl.innerText = data.prediction;
    confidenceEl.innerText = `Confidence: ${data.confidence}%`;

    if (data.prediction === "Spam") {
        resultEl.style.color = "red";
    } else {
        resultEl.style.color = "lightgreen";
    }
}