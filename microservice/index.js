// cargamos micro para crear el server
import micro, { json, send, sendError } from 'micro';
async function serverRender(request, response) {
  try {
    // obtenemos el body del request para saber los datos
    const body = await json(request);
    // mandamos la respuesta
    return send(response, 200, 'hola mundo');
  } catch (error) {
    // si hay un error mandamos el error
    sendError(request, response, error);
  }
}
const server = micro(serverRender);
server.listen(process.env.PORT || 3000);
