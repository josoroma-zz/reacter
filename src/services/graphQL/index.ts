import { API, graphqlOperation } from "aws-amplify";
import { Observable } from 'rxjs';

/**
 * ServiceGraphQL makes API.graphql reactive, so that it's responses are returned as RxJS observables.
 */

class ServiceGraphQL {
  public query(query: any, params: any = null) {
    return this._request('query', query, params);
  }

  public mutation(mutation: any, params: any = null) {
    return this._request('mutation', mutation, params);
  }

  private _request(method: string, operation: any, params: any) {
    let request: any;

    switch (method) {
      case 'query':
        request = API.graphql(graphqlOperation(operation, params));
        break;
      case 'mutation':
        request = API.graphql(graphqlOperation(operation, params));
        break;

      default:
        throw new Error('ServiceGraphQL - Method not supported.');
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

export default ServiceGraphQL;
