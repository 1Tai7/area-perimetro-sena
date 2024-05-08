function calcularTriangulo() {
  const baseTriangulo = parseFloat(
    document.getElementById("baseTriangulo").value
  );
  const alturaTriangulo = parseFloat(
    document.getElementById("alturaTriangulo").value
  );
  const ladoCTriangulo = parseFloat(
    document.getElementById("ladoCTriangulo").value
  );

  const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
  const perimetroTriangulo = baseTriangulo + alturaTriangulo + ladoCTriangulo;

  const resultadoAreaTriangulo = `Área: ${areaTriangulo.toFixed(2)}`;
  const resultadoPerimetroTriangulo = `Perímetro: ${perimetroTriangulo.toFixed(
    2
  )}`;

  document.getElementById("resultadoAreaTriangulo").innerHTML =
    resultadoAreaTriangulo;
  document.getElementById("resultadoPerimetroTriangulo").innerHTML =
    resultadoPerimetroTriangulo;
}

function calcularRectangulo() {
  const baseRectangulo = parseFloat(
    document.getElementById("baseRectangulo").value
  );
  const alturaRectangulo = parseFloat(
    document.getElementById("alturaRectangulo").value
  );

  const areaRectangulo = baseRectangulo * alturaRectangulo;
  const perimetroRectangulo = 2 * (baseRectangulo + alturaRectangulo);

  const resultadoAreaRectangulo = `Área: ${areaRectangulo.toFixed(2)}`;
  const resultadoPerimetroRectangulo = `Perímetro: ${perimetroRectangulo.toFixed(
    2
  )}`;

  document.getElementById("resultadoAreaRectangulo").innerHTML =
    resultadoAreaRectangulo;
  document.getElementById("resultadoPerimetroRectangulo").innerHTML =
    resultadoPerimetroRectangulo;
}
function calcularCuadrado() {
  const ladoCuadrado = parseFloat(
    document.getElementById("ladoCuadrado").value
  );

  const areaCuadrado = ladoCuadrado ** 2;
  const perimetroCuadrado = ladoCuadrado * 4;

  const resultadoAreaCuadrado = `Área: ${areaCuadrado.toFixed(2)}`;
  const resultadoPerimetroCuadrado = `Perímetro: ${perimetroCuadrado.toFixed(
    2
  )}`;

  document.getElementById("resultadoAreaCuadrado").innerHTML =
    resultadoAreaCuadrado;
  document.getElementById("resultadoPerimetroCuadrado").innerHTML =
    resultadoPerimetroCuadrado;
}
function calcularCirculo() {
  const radioCirculo = parseFloat(
    document.getElementById("radioCirculo").value
  );

  const areaCirculo = 3.1416 * radioCirculo ** 2;
  const perimetroCirculo = 2 * 3.1416 * radioCirculo ** 2;

  const resultadoAreaCirculo = `Área: ${areaCirculo.toFixed(2)}`;
  const resultadoPerimetroCirculo = `Perímetro: ${perimetroCirculo.toFixed(2)}`;

  document.getElementById("resultadoAreaCirculo").innerHTML =
    resultadoAreaCirculo;
  document.getElementById("resultadoPerimetroCirculo").innerHTML =
    resultadoPerimetroCirculo;
}

function resetear() {
  document.getElementById("baseTriangulo").value = "";
  document.getElementById("alturaTriangulo").value = "";
  document.getElementById("ladoCTriangulo").value = "";
  document.getElementById("resultadoAreaTriangulo").innerHTML = `Área: `;
  document.getElementById("resultadoPerimetroTriangulo").innerHTML = `Perímetro: `;
  document.getElementById("baseRectangulo").value = "";
  document.getElementById("alturaRectangulo").value = "";
  document.getElementById("resultadoAreaRectangulo").innerHTML = `Área: `;
  document.getElementById(
    "resultadoPerimetroRectangulo"
  ).innerHTML = `Perímetro: `;
  document.getElementById("ladoCuadrado").value = "";
  document.getElementById("resultadoAreaCuadrado").innerHTML = `Área: `;
  document.getElementById(
    "resultadoPerimetroCuadrado"
  ).innerHTML = `Perímetro: `;
  document.getElementById("radioCirculo").value = "";
  document.getElementById("resultadoAreaCirculo").innerHTML = `Área: `;
  document.getElementById(
    "resultadoPerimetroCirculo"
  ).innerHTML = `Perímetro: `;
}
