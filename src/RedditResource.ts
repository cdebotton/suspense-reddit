const cache = new Map();

enum Status {
  pending,
  done,
  error
}

function accessResource(key: string) {
  const resource = cache.get(key);

  if (typeof resource === "undefined") {
    const request = fetch(`https://api.reddit.com/r/${key}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        newResource.status = Status.done;
        newResource.value = json;
      })
      .catch(err => {
        newResource.status = Status.error;
        newResource.value = err;
      });

    const newResource = {
      status: Status.pending,
      value: request
    };

    cache.set(key, newResource);

    return newResource;
  }

  return resource;
}

function read(subreddit: string) {
  const resource = accessResource(subreddit);

  switch (resource.status) {
    case Status.pending:
      throw resource.value;
    case Status.done:
      return resource.value;
    case Status.error:
      throw resource.value;
  }
}

function preload(subreddit: string) {
  accessResource(subreddit);
}

export default { read, preload };
