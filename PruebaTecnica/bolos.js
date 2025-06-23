const Table = require('cli-table3');

function jugarBolos() {
  const frames = [];
  const tabla = new Table({
    head: ['Marco', 'Tiro 1', 'Tiro 2', 'Tiro 3', 'Tipo', 'Puntaje acumulado'],
    colWidths: [10, 10, 10, 10, 15, 25]
  });

  // Simular los primeros 9 marcos
  for (let i = 0; i < 9; i++) {
    const tiro1 = Math.floor(Math.random() * 11);
    let tiro2 = 0;

    if (tiro1 < 10) {
      tiro2 = Math.floor(Math.random() * (11 - tiro1));
    }

    frames.push([tiro1, tiro2]);
  }

  // Simular el décimo marco
  let tiro1 = Math.floor(Math.random() * 11);
  let tiro2 = 0;
  let tiro3 = 0;

  if (tiro1 === 10) {
    tiro2 = Math.floor(Math.random() * 11);
    tiro3 = Math.floor(Math.random() * 11);
  } else {
    tiro2 = Math.floor(Math.random() * (11 - tiro1));
    if (tiro1 + tiro2 === 10) {
      tiro3 = Math.floor(Math.random() * 11);
    }
  }

  frames.push([tiro1, tiro2, tiro3]);

  // Calcular puntaje total
  let total = 0;

  console.log("🎳 Resultado del Juego:\n");

  for (let i = 0; i < 10; i++) {
    const frame = frames[i];
    const tiro1 = frame[0];
    const tiro2 = frame[1] ?? 0;
    const tiro3 = frame[2] ?? 0;

    const isStrike = tiro1 === 10;
    const isSpare = !isStrike && (tiro1 + tiro2 === 10);

    if (i < 9) {
      if (isStrike) {
        total += 10 + obtenerBonusStrike(frames, i);
      } else if (isSpare) {
        total += 10 + frames[i + 1][0];
      } else {
        total += tiro1 + tiro2;
      }
    } else {
      total += tiro1 + tiro2 + tiro3;
    }

    let tipo = "Normal";
    if (isStrike) tipo = "Strike";
    else if (isSpare) tipo = "Spare";

    tabla.push([
      i + 1,
      tiro1,
      tiro2,
      i === 9 ? tiro3 : '-', // Solo marco 10 tiene 3er tiro
      tipo,
      total
    ]);
  }

  console.log(tabla.toString());
  console.log("🎯 Puntaje total:", total);
}

// Bono por strike
function obtenerBonusStrike(frames, i) {
  if (i >= 9) return 0;
  const next = frames[i + 1];
  if (next[0] === 10 && i + 1 < 9) {
    const nextNext = frames[i + 2];
    return 10 + (nextNext ? nextNext[0] : 0);
  }
  return next[0] + (next[1] ?? 0);
}

// Ejecutar
jugarBolos();
