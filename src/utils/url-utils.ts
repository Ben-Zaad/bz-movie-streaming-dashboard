import qs from 'qs';

export const getQueryParams = (urlParam: string) => {
  //Converting URL from string to object
  const queryParams = qs.parse(
    window.location.search.slice(1)
  ) as any;

  if (Object(queryParams)[urlParam]) {
    return queryParams[urlParam].replace(
      `${urlParam}=`,
      ''
    );
  } else {
    return '';
  }
};

export const setQueryStringUrl = (
  paramName: string,
  paramValue: string | null
) => {
  const params: any = {
    [paramName]: paramValue || null,
  };

  const queryParams = qs.stringify(params, {
    skipNulls: true,
  });

  try {
    let currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set(paramName, queryParams);
    window.history.replaceState({}, '', currentUrl.href);
  } catch (error) {
    console.error(error);
  }
};
