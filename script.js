async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const res = await fetch("/weather", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ city }),
  });

  const data = await res.json();

  if (res.ok) {
    document.getElementById("city").innerText = data.city;
    document.getElementById(
      "temp"
    ).innerText = `Temperature: ${data.temperature} °C`;
    document.getElementById(
      "desc"
    ).innerText = `Condition: ${data.description}`;
    document.getElementById(
      "icon"
    ).src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
    document.getElementById("result").classList.remove("hidden");
  } else {
    alert("City not found.");
    document.getElementById("result").classList.add("hidden");
  }
}
