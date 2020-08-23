import { Request } from 'express';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as morgan from 'morgan';

class RequestLogger {
  static config(): morgan {
    morgan.token('host', (req: Request) => req.headers.host);
    morgan.token('x-origin', (req: Request) => req.headers['x-origin'] || '-');
    morgan.token('accept', (req: Request) => req.headers.accept);
    morgan.token('cookie', (req: Request) => req.headers.cookie);
    morgan.token('body', (req: Request) => JSON.stringify(req.body));

    const jsonFormat = JSON.stringify({
      http: 'HTTP/:http-version',
      '@timestamp': ':date[iso]',
      'request-method': ':method',
      'status-code': ':status',
      'request-host': ':host',
      url: ':url',
      'content-length': ':res[content-length]',
      'elapsed-time': ':response-time',
      referrer: ':referrer',
      'remote-addr': ':remote-addr',
      'remote-user': ':remote-user',
      'user-agent': ':user-agent',
      'request-accept': ':accept',
      'request-cookie': ':cookie',
      'request-body': ':body',
      'x-origin': ':x-origin',
    });

    return morgan(jsonFormat);
  }
}

export default RequestLogger;
