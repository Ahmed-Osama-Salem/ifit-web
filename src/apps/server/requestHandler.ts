import { blogEndpoints } from './endPoints';

async function RequestHandler(
  endpoint: keyof typeof blogEndpoints,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  headers?: Record<any, any>,
  data?: any,
  params?: Record<string, string>,
): Promise<any> {
  const queryString = params ? `?${params}` : '';
  const requestUrl = `http://13.49.223.120:8000/${blogEndpoints[endpoint]}${queryString}`;

  const options: RequestInit = {
    method,
    headers: headers || {},
  };
  if (method === 'POST' && data) {
    options.body = data;
  }

  const response = await fetch(requestUrl, options);
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.message || 'An error occurred');
  }

  return responseData;
}

export default RequestHandler;
