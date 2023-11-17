async function handleRequest(
  endpoint: string,
  method: string,
  headers?: Record<any, any>,
  data?: any,
  params?: Record<string, string>,
): Promise<any> {
  const queryString = params ? `?${params}` : '';
  const requestUrl = `http://13.49.223.120:8000/${endpoint}${queryString}`;

  const options: RequestInit = {
    method,
    headers,
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

export default handleRequest;
