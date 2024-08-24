// lib/datocms.js
const NEXT_DATOCMS_API_TOKEN = '659d6a87d4481ac0cedd5bf28c6d2a';

export const performRequest = async ({
  query,
  variables = {},
  includeDrafts = false,
}) => {
  const response = await fetch('https://graphql.datocms.com/', {
    headers: {
      Authorization: `Bearer ${NEXT_DATOCMS_API_TOKEN}`,
      ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
    },
    method: 'POST',
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`
    );
  }

  return responseBody;
};
