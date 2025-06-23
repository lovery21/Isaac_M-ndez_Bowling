function jugarBolos() {
  const frames = []; // Aquí se guardan los 10 marcos

  // Simular los primeros 9 marcos
  for (let i = 0; i < 9; i++) {
    const tiro1 = Math.floor(Math.random() * 11);
    let tiro2 = 0;

    if (tiro1 < 10) {
      tiro2 = Math.floor(Math.random() * (11 - tiro1));
    }

    frames.push([tiro1, tiro2]);
  }

  // Simular el décimo marco (puede tener 3 tiros)
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

  console.log("Juego:");
  for (let i = 0; i < 10; i++) {
    const frame = frames[i];
    const tiro1 = frame[0];
    const tiro2 = frame[1] ?? 0;
    const tiro3 = frame[2] ?? 0;

    const isStrike = tiro1 === 10;
    const isSpare = !isStrike && (tiro1 + tiro2 === 10);

    // Calcular puntaje por tipo
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

    // Determinar tipo 
    let tipo = "Normal";
    if (isStrike) {
      tipo = " Strike";
    } else if (isSpare) {
      tipo = " Spare";
    }

    // Mostrar resultados
    const tirosStr = i === 9 ? [tiro1, tiro2, tiro3].join(", ") : [tiro1, tiro2].join(", ");
    console.log(`Marco ${i + 1}: ${tirosStr} → ${tipo}`);
  }

  console.log("Puntaje total:", total);
}

// Función para obtener bono por strike
function obtenerBonusStrike(frames, i) {
  if (i >= 9) return 0;
  const next = frames[i + 1];

  // Doble strike
  if (next[0] === 10 && i + 1 < 9) {
    const nextNext = frames[i + 2];
    return 10 + (nextNext ? nextNext[0] : 0);
  }

  return next[0] + (next[1] ?? 0);
}

// Ejecutar el juego
jugarBolos();
