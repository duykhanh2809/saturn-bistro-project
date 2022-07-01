// ACTIVE MAP
const map = L.map("map").setView([
    10.7791023,
    106.6924224
], 15);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "@NGUYEN DUY KHANH"
}).addTo(map);
map.on("click", function(mapEvent) {
    console.log(mapEvent);
    const { lat , lng  } = mapEvent.latlng;
    L.marker([
        lat,
        lng
    ]).addTo(map).bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: "check-popup"
    })).setPopupContent("Saturn Bistro Project").openPopup();
});

//# sourceMappingURL=contact.9fb40cf5.js.map
