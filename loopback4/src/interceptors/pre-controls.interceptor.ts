import { Interceptor } from '@loopback/context';
import { RestBindings } from '@loopback/rest';
import { MockResponses } from '../definitions';

/**
 * Controls before endpoint execution
 *
 * @param {*} invocationCtx
 * @param {*} next
 * @returns
 */
export const PreControls: Interceptor = async (invocationCtx, next) => {
  /* Parse request */
  const request = await invocationCtx.get(RestBindings.Http.REQUEST);
  /* get mock response of the requested endpoint if exists */
  const endpointMockResponse = <any>MockResponses.find((item: any) => {
    /* get full path of the mock response */
    const fullPath = `${item.modelPath}${item.endpointPath || ''}`;
    /* compare requested path and mock data's path */
    /* TODO: check this code out, it may be wrong */
    if (
      request.originalUrl === fullPath &&
      request.method === item.method &&
      invocationCtx.methodName === item.name
    ) {
      return item; /* TODO: ? */
    }
  });
  /* if endpoint's mock response does exist, then return the mock data as reponse */
  if (endpointMockResponse?.isMocked) {
    return endpointMockResponse.response;
  } else {
    return next();
  }
};
