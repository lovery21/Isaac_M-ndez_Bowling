Simulador de Juego de Bolos en JavaScript
Este proyecto es una simulación simple de una partida de bolos (bowling) escrita en JavaScript. Ejecuta un juego completo de 10 marcos y calcula automáticamente el puntaje final, aplicando las reglas de strikes, spares y bonificaciones.

 ¿Cómo funciona?
El juego tiene 10 marcos (frames).

En cada marco, el jugador tiene hasta dos tiros para derribar 10 bolos.

Si hace un strike (derriba los 10 en el primer tiro), no hay segundo tiro y se le suma un bono con los dos próximos tiros.

Si hace un spare (derriba los 10 entre los dos tiros), se le suma un bono con el siguiente tiro.

En el marco 10, si hay un strike o spare, se otorga un tercer tiro adicional.

Estructura del código
function jugarBolos(): función principal que ejecuta una partida completa.

Se generan tiros aleatorios por cada marco simulando el juego.

Se calcula y muestra el tipo de cada marco: Normal, Spare, o Strike.

Se imprime el puntaje total al final.

 Lógica del puntaje
Strike (X): 10 puntos + próximos 2 tiros como bono.

Spare (/): 10 puntos + próximo tiro como bono.

Normal: suma de los dos tiros sin bono.

Último marco: puede tener hasta 3 tiros si hay strike o spare.
