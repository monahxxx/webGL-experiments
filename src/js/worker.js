self.addEventListener('message', function(e) {
    var data = e.data;
    // in my case, I computed the position of an object in space according

    //  now send back the results
    self.postMessage(data);
});
