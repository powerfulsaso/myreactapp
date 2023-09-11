export function TimeAgo(dateValue) {
    var date = new Date(dateValue);

    const ahora = new Date();
    const tiempoTranscurrido = ahora - date;

    const segundos = Math.floor(tiempoTranscurrido / 1000);
    if (segundos < 60) {
        return `${segundos}sec ago`;
    }

    const minutos = Math.floor(segundos / 60);
    if (minutos < 60) {
        return `${minutos}min ago`;
    }

    const horas = Math.floor(minutos / 60);
    if (horas < 24) {
        return `${horas}hrs ago`;
    }

    const dias = Math.floor(horas / 24);
    return `${dias}d ago`;
}
