 
    export const baseUrl: any = "https://dummyjson.com"; 


export const buildDynamicURL = (id: any,   limit: any, page: any, base: any) => {
 
  let baseURL = `${base}`;
  const queryParams = [];
 
// Add 'id' to the URL if it's not null or undefined
  if (id !== null && id !== undefined) {
    baseURL += `/${id}`;
  }
  // Add 'limit' to the query parameters if it's not null or undefined
  if (limit !== null && limit !== undefined) {
    queryParams.push(`limit=${limit}`);
  }

  // Add 'page' to the query parameters if it's not null or undefined
  if (page !== null && page !== undefined) {
    queryParams.push(`page=${page}`);
  }

 // Combine the base URL and query parameters
  if (queryParams.length > 0) {
    baseURL += "?" + queryParams.join("&");
  }

    

  return baseURL;
}

 
