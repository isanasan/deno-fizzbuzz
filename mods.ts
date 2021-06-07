addEventListener("fetch", (event) => {
  event.respondWith(getFizzBuzz(100));
});

function getFizzBuzz(max: number) {
  const setStyle = (s: string, color: string) =>
    `<div style="background-color:${color};">${s}</div>`;
  const result = [];
  for (let i = 1; i <= max; i++) {
    const isFizz = () => i % 3 == 0; // Fizzを判定
    const isBuzz = () => i % 5 == 0; // Buzzを判定
    const isFizzBuzz = () => isFizz() && isBuzz();
    result.push( // FizzBuzzの条件演算子で順次判定
      isFizzBuzz()
        ? setStyle("FizzBuzz", "#fcf")
        : isFizz()
        ? setStyle("Fizz", "#fcc")
        : isBuzz()
        ? setStyle("Buzz", "#ccf")
        : setStyle(String(i), "#eee"),
    );
  }
  const message = `<div style="text-align:center">` +
    result.join("") + "</div>";

  const response = new Response(message, {
    headers: {
      "content-type": "text/html",
    },
  });

  return response;
}
