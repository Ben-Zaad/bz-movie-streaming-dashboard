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
  paramValue: string
) => {
  const params: any = {
    [`${paramName}`]: paramValue || undefined,
  };

  const queryParams = qs.stringify(params);

  if (
    `${window.location.origin}/?${queryParams}` !==
    window.location.href
  ) {
    let currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set(paramName, queryParams);
    window.history.replaceState({}, '', currentUrl.href);
  }
};
