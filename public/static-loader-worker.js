self.onmessage = function (event) {
    const resources = event.data.resources;
    let loadedResources = 0;
  
    resources.forEach((resource) => {
      fetch(resource)
        .then(() => {
          loadedResources += 1;
          if (loadedResources === resources.length) {
            self.postMessage({ status: 'complete' });
          }
        })
        .catch(() => {
            console.log('error');
        });
    });
  };
  