// I should probs update this trash code
(async function() {
    var cache = await caches.open("offline");
    var urls = new Set([location.href]);

    document.querySelectorAll("[src], [href], [poster], [link]").forEach(function(el) {
        ["src", "href", "poster", "link"].forEach(function(attr) {
            var value = el.getAttribute(attr);
            if (!value) return;

            try {
                var url = new URL(value, location.href);
                if (url.origin === location.origin) urls.add(url.href);
            } catch (e) {}
        });
    });

    await Promise.all(Array.from(urls).map(async function(url) {
        try {
            var response = await fetch(url);
            if (response.ok && response.type === "basic") {
                await cache.put(url, response);
            }
        } catch (e) {}
    }));

    console.log("Cached " + (await cache.keys()).length + " resources.");
})();
