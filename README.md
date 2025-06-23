#  Simulador de Juego de Bolos en JavaScript

Este proyecto es una simulación simple de una partida de **bolos (bowling)** escrita en JavaScript. Ejecuta un juego completo de 10 marcos y calcula automáticamente el puntaje final, aplicando las reglas de **strikes, spares y bonificaciones**.

---

## ¿Cómo funciona?

- El juego consta de **10 marcos (frames)**.
- En cada marco, el jugador tiene hasta **dos tiros** para derribar los 10 bolos.
- Si hace un **strike** (derriba los 10 en el primer tiro):
  - No hay segundo tiro
  - Se le suma un bono con los **dos próximos tiros**
- Si hace un **spare** (derriba los 10 entre los dos tiros):
  - Se le suma un bono con el **próximo tiro**
- En el **marco 10**, si hay strike o spare:
  - Se otorga un **tercer tiro adicional**

---

##  Estructura del código

- `function jugarBolos()`: función principal que ejecuta una partida completa.
- Se generan tiros aleatorios por cada marco, simulando el juego.
- Se detecta y muestra el tipo de marco: `Normal`, `Spare` o `Strike`.
- Se imprime el **puntaje total acumulado** al final del juego.

---

##  Lógica del puntaje

- **Strike (X)**:
  - 10 puntos + **los dos siguientes tiros** como bono.
- **Spare (/)**:
  - 10 puntos + **el siguiente tiro** como bono.
- **Normal**:
  - Suma de los dos tiros, sin bono.
- **Último marco**:
  - Puede tener **hasta 3 tiros** si hay strike o spare.

---

##  Resultado esperado

Al ejecutar el script, se mostrará una tabla como esta:
 Resultado del Juego:

┌────────┬──────────┬──────────┬──────────┬───────────────┬─────────────────────────┐
│ Marco  │ Tiro 1   │ Tiro 2   │ Tiro 3   │ Tipo          │ Puntaje acumulado       │
├────────┼──────────┼──────────┼──────────┼───────────────┼─────────────────────────┤
│ 1      │ 10       │ 0        │ -        │ Strike        │ 27                      │
│ 2      │ 10       │ 0        │ -        │ Strike        │ 50                      │
│ 3      │ 8        │ 2        │ -        │ Spare         │ 68                      │
│ ...    │ ...      │ ...      │ ...      │ ...           │ ...                     │
│ 10     │ 10       │ 10       │ 10       │ Strike        │ 168                     │
└────────┴──────────┴──────────┴──────────┴───────────────┴─────────────────────────┘

 Puntaje total: 168

