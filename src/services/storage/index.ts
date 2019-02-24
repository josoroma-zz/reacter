import { Storage } from "aws-amplify";
import { Observable } from 'rxjs';

/**
 * ServiceStorage makes Storage.graphql reactive, so that it's responses are returned as RxJS observables.
 */

class ServiceStorage {
  public put(fileName: string, params: any = null) {
    return this._request('put', fileName, params);
  }

  private _request(method: string = '', fileName: string, params: any = null) {
    let request: any;

    switch (method) {
      case 'put':
        request = Storage.put(fileName, params.file.localUri, {
          contentType: params.file.mimeType,
          level: params.visibility,
        });
        break;

      default:
        throw new Error('ServiceStorage - Method not supported.');
    }

    return new Observable(subscriber => {
      request.then((response: any) => {
        subscriber.next(response.data);
        subscriber.complete();
      }).catch((err: Error) => {
        subscriber.error(err);
        subscriber.complete();
      });
    });
  }
}

export default ServiceStorage;
