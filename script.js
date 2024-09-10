// Configuration for the map
let config = {
    minZoom: 2,
    maxZoom: 18,
    fullscreenControl: true,


};


// Initial map view parameters of Gurugram
const zoom = 8;
const lat = 28.4595;
const lng = 77.0266;

// Create the map
const map = L.map("map", config).setView([lat, lng], zoom);



L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);



// Remove default zoom control
map.removeControl(map.zoomControl);


// custome camera icon
const customIcon = L.icon({
    iconUrl: '![cam](https://github.com/user-attachments/assets/03498118-42e7-4322-ab53-150e783c2499)',
    iconSize: [35, 35], // Size of the icon [width, height]
    iconAnchor: [16, 16], // Point of the icon which will correspond to the marker's location
    popupAnchor: [0, -16], // Point from which the popup should open relative to the iconAnchor
});




// // ---------------------- LOCATE BUTTON TOOL --------------------------

// const locateControl = L.Control.extend({
//     options: {
//         position: "topleft",
//         className: "locate-button leaflet-bar",
//         html: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>',
        
//     },

//     onAdd: function (map) {
//         this._map = map;
//         const button = L.DomUtil.create("div");
//         L.DomEvent.disableClickPropagation(button);

//         button.title = "Locate";
//         button.innerHTML = this.options.html;
//         button.className = this.options.className;
//         button.setAttribute("style", this.options.style);

//         L.DomEvent.on(button, "click", this._clicked, this);

//         return button;
//     },
//     _clicked: function (e) {
//         L.DomEvent.stopPropagation(e);
//         this._locateMap();
//     },

//     _locateMap: function () {
//         const locateButton = document.querySelector(".locate-button");
//         const locateActive = locateButton.classList.contains("locate-active");

//         if (locateActive) {
//             this._map.stopLocate();
//             this.removeLocate();
//             locateButton.classList.remove("locate-active");
//             this._showNotification("Locate tool deactivated.");
//         } else {
//             this._map.on("locationfound", this.onLocationFound, this);
//             this._map.on("locationerror", this.onLocationError, this);

//             this._map.locate({ setView: true, enableHighAccuracy: true });
//             locateButton.classList.add("locate-active");
//             this._showNotification("Locating your position...");
//         }
//     },
//     onLocationFound: function (e) {
//         // Clear previous layers
//         this.removeLocate();

//         // Add circle and marker for the found location
//         const { latitude, longitude, accuracy } = e;
//         L.circle([latitude, longitude], accuracy / 2, {
//             className: "circle-test",
//             weight: 2,
//             stroke: false,
//             fillColor: "#136aec",
//             fillOpacity: 0.15,
//         }).addTo(this._map);

//         L.marker([latitude, longitude], {
//             icon: L.divIcon({
//                 className: "located-animation",
//                 iconSize: L.point(17, 17),
//                 popupAnchor: [0, -15],
//             }),
//         }).bindPopup("You are here :)").addTo(this._map);

//         this._showNotification("Location found.");
//     },
//     onLocationError: function (e) {
//         this.addLegend("Location access denied.");
//         this._showNotification("Error: Location access denied.");
//     },
//     removeLocate: function () {
//         this._map.eachLayer(layer => {
//             if (layer instanceof L.Marker && layer.options.icon?.options.className === "located-animation") {
//                 this._map.removeLayer(layer);
//             }
//             if (layer instanceof L.Circle && layer.options.className === "circle-test") {
//                 this._map.removeLayer(layer);
//             }
//         });
//     },
//     addLegend: function (text) {
//         const existingDescription = document.querySelector(".description");
//         if (existingDescription) {
//             existingDescription.textContent = text;
//             return;
//         }

//         const legend = L.control({ position: "bottomleft" });
//         legend.onAdd = function () {
//             let div = L.DomUtil.create("div", "description");
//             L.DomEvent.disableClickPropagation(div);
//             div.textContent = text;
//             return div;
//         };
//         legend.addTo(this._map);
//     },//locate releted location
//     _showNotification: function (message) {
//         notificationContainer.textContent = message;
//         notificationContainer.style.display = 'block';
//         setTimeout(() => {
//             notificationContainer.style.display = 'none';
//         }, 2000); // Hide notification after 3 seconds
//     }
// });
// map.addControl(new locateControl());





// circular menu

// Circular Menu creation logic based on right-click (Code 2)

// Create a variable holding the circular menu creation logic
const circularMenuLogic = function (layer, map) {
    const circleMenu = L.DomUtil.create('div', 'circle-menu', map.getPanes().overlayPane);
    const menuItems = [
        { name: 'Facebook', link: 'https://www.facebook.com', color: 'blue' },
        { name: 'Twitter', link: 'https://www.twitter.com', color: '#04befe' },
        { name: 'Pinterest', link: 'https://www.pinterest.com', color: 'red' },
        { name: 'Instagram', link: 'mailto:example@example.com', color: '#d11d53' },
        { name: 'Phone', link: 'tel:+1234567890', color: 'green' },
        { name: 'VK', link: 'https://vk.com', color: 'darkblue' },
        { name: 'Google', link: 'https://www.google.com', color: 'orange' },
        { name: 'YouTube', link: 'https://www.youtube.com', color: 'red' }
    ];

    // Create the menu items
    menuItems.forEach(item => {
        const itemDiv = L.DomUtil.create('div', 'icon', circleMenu);
        const anchor = L.DomUtil.create('a', '', itemDiv);
        anchor.href = item.link;
        anchor.target = '_blank';
        const iconElement = L.DomUtil.create('i', `fa fa-${item.name.toLowerCase()}`, anchor);
        iconElement.style.fontSize = '30px';
        iconElement.style.color = item.color;
        anchor.title = item.name;
    });

    // Update the menu position based on the layer location (marker, polygon, circle, etc.)
    function updateCircleMenuPosition() {
        const layerLatLng = layer.getLatLng ? layer.getLatLng() : layer.getBounds().getCenter();
        const layerPos = map.latLngToLayerPoint(layerLatLng);
        circleMenu.style.left = (layerPos.x - 100) + 'px';
        circleMenu.style.top = (layerPos.y - 100) + 'px';
    }

    // Toggle menu visibility on right-click or touchstart
    function toggleMenu() {
        if (activeMarkerMenu && activeMarkerMenu !== circleMenu) {
            activeMarkerMenu.style.display = 'none';
            isMenuVisible = false;
            activeMarkerMenu = null;
            activeMarker = null;
        }

        if (isMenuVisible) {
            circleMenu.style.display = 'none';
            isMenuVisible = false;
            activeMarkerMenu = null;
            activeMarker = null;
        } else {
            updateCircleMenuPosition();
            circleMenu.style.display = 'flex';
            isMenuVisible = true;
            activeMarkerMenu = circleMenu;
            activeMarker = layer;
        }
    }

    // Attach event listeners for showing the circular menu
    layer.on('contextmenu', toggleMenu); // Right-click (desktop)
    layer.on('touchstart', toggleMenu); // Touchstart (mobile)

    // Hide the menu if user clicks outside the menu or the layer
    map.on('click', function (e) {
        if (isMenuVisible && !circleMenu.contains(e.originalEvent.target) && !(layer.getLatLng ? layer._icon.contains(e.originalEvent.target) : layer.getElement().contains(e.originalEvent.target))) {
            circleMenu.style.display = 'none';
            isMenuVisible = false;
            activeMarkerMenu = null;
            activeMarker = null;
        }
    });

    circleMenu.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    map.on('move', updateCircleMenuPosition);
};

// Example usage for markers, polygons, circles, or any shape:

// Assuming you have markers or shapes added to the map:

const marker = L.marker([51.505, -0.09]).addTo(map);
const polygon = L.polygon([[51.509, -0.08], [51.503, -0.06], [51.51, -0.047]]).addTo(map);

// Attach the circular menu to the marker
circularMenuLogic(marker, map);

// Attach the circular menu to the polygon
circularMenuLogic(polygon, map);




// custom marker

// Custom Marker Creation Logic (Code 3)

// const customIcon = L.divIcon({
//     className: 'custom-marker-icon',
//     iconSize: [32, 32],
//     iconAnchor: [16, 32],
//     popupAnchor: [0, -30],
//     html: '<i class="fas fa-map-marker-alt" style="color: blue; font-size: 32px;"></i>'
// });

const createCustomMarker = function (latlng, map, popupContent = "Default Location") {
    const marker = L.marker(latlng, {
        icon: customIcon,
        draggable: true
    }).addTo(map);

    const popup = marker.bindPopup(popupContent);

    // Add custom behavior like in previous code (drag, move events, etc.)
    marker.on('drag', function (e) {
        const newLatLng = e.target.getLatLng();
        // Update any associated elements or logic here
    });

    marker.on('mouseover', function () {
        marker.openPopup();
    });

    marker.on('mouseout', function () {
        marker.closePopup();
    });

    return marker;
};











// --------------------------- MARKER ADD TOOL ------------------------------

// Arrays to hold marker states
let markers = [];
let isAddingMarker = false;
let isRemovingMarker = false;
let activeMarker = null;
let activeMarkerMenu = null;
let isMenuVisible = false;

const addMarkerControl = L.Control.extend({
    options: {
        position: "topleft",
        className: "leaflet-control-custom leaflet-bar",
        html: '<a title="Add Marker"><i class="fas fa-map-marker-alt" style="color: blue;"></i></a>',
    },
    onAdd: function (map) {
        const container = L.DomUtil.create("div", this.options.className);
        L.DomEvent.disableClickPropagation(container);

        container.innerHTML = this.options.html;

        L.DomEvent.on(container, "click", this._clicked, this);

        return container;
    },
    _clicked: function () {
        isAddingMarker = !isAddingMarker;
        isRemovingMarker = false;
        map.off('click');

        let activeMarker = null;
        let isMenuVisible = false;
        let isFovBeingChanged = false;
        const fovStep = 5;
        let activeMarkerMenu = null;

        function calculateFovPoints(cameraLatLng, angle, width, distance) {
            var angleLeft = (angle - width / 2) * (Math.PI / 180);
            var angleRight = (angle + width / 2) * (Math.PI / 180);

            var point1 = L.latLng(
                cameraLatLng.lat + distance * Math.sin(angleLeft),
                cameraLatLng.lng + distance * Math.cos(angleLeft)
            );

            var point2 = L.latLng(
                cameraLatLng.lat + distance * Math.sin(angleRight),
                cameraLatLng.lng + distance * Math.cos(angleRight)
            );

            return [cameraLatLng, point1, point2];
        }

        if (isAddingMarker) {
            map.on('click', function (e) {
                if (isAddingMarker) {
                    var lat = e.latlng.lat.toFixed(5);
                    var lng = e.latlng.lng.toFixed(5);

                    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
                        .then(response => response.json())
                        .then(data => {
                            var placeName = data.display_name || "Unknown Place";
                            var popupContent = `
                                <b>${placeName}</b><br>
                                <b>Latitude:</b> ${lat}<br>
                                <b>Longitude:</b> ${lng}
                            `;
                            var marker = L.marker(e.latlng, { icon: customIcon, draggable: true }).addTo(map);
                            var popup = marker.bindPopup(popupContent);
                            markers.push(marker);

                            var circleMenu = L.DomUtil.create('div', 'circle-menu', map.getPanes().overlayPane);
                            var menuItems = [
                                { name: 'Facebook', link: 'https://www.facebook.com', color: 'blue' },
                                { name: 'Twitter', link: 'https://www.twitter.com', color: '#04befe' },
                                { name: 'Pinterest', link: 'https://www.pinterest.com', color: 'red' },
                                { name: 'Instagram', link: 'mailto:example@example.com', color: '#d11d53' },
                                { name: 'Phone', link: 'tel:+1234567890', color: 'green' },
                                { name: 'VK', link: 'https://vk.com', color: 'darkblue' },
                                { name: 'Google', link: 'https://www.google.com', color: 'orange' },
                                { name: 'YouTube', link: 'https://www.youtube.com', color: 'red' }
                            ];

                            menuItems.forEach(item => {
                                var itemDiv = L.DomUtil.create('div', 'icon', circleMenu);
                                var anchor = L.DomUtil.create('a', '', itemDiv);
                                anchor.href = item.link;
                                anchor.target = '_blank';
                                var iconElement = L.DomUtil.create('i', `fa fa-${item.name.toLowerCase()}`, anchor);
                                iconElement.style.fontSize = '30px';
                                iconElement.style.color = item.color;
                                anchor.title = item.name;
                            });

                            function updateCircleMenuPosition() {
                                var markerPos = map.latLngToLayerPoint(marker.getLatLng());
                                circleMenu.style.left = (markerPos.x - 100) + 'px';
                                circleMenu.style.top = (markerPos.y - 100) + 'px';
                            }

                            function toggleMenu() {
                                // Close the currently active marker menu if it exists and is different from the current marker
                                if (activeMarkerMenu && activeMarkerMenu !== circleMenu) {
                                    activeMarkerMenu.style.display = 'none';
                                    isMenuVisible = false;
                                    activeMarkerMenu = null; // Deselect previous menu
                                    activeMarker = null; // Deselect previous marker
                                }

                                // Toggle the visibility of the current marker menu
                                if (isMenuVisible) {
                                    circleMenu.style.display = 'none';
                                    isMenuVisible = false;
                                    activeMarkerMenu = null; // Deselect menu
                                    activeMarker = null; // Deselect marker
                                } else {
                                    updateCircleMenuPosition();
                                    circleMenu.style.display = 'flex';
                                    isMenuVisible = true;
                                    activeMarkerMenu = circleMenu; // Set the active menu to the current one
                                    activeMarker = marker; // Set the active marker
                                }
                            }


                            marker.on('contextmenu', toggleMenu);//menu open on right click 

                            map.on('click', function (e) {
                                if (
                                    isMenuVisible &&
                                    !circleMenu.contains(e.originalEvent.target) &&
                                    !marker._icon.contains(e.originalEvent.target)
                                ) {
                                    circleMenu.style.display = 'none';
                                    isMenuVisible = false;
                                    activeMarkerMenu = null; // Deselect menu
                                    activeMarker = null; // Deselect marker
                                }
                            });

                            circleMenu.addEventListener('click', function (e) {
                                e.stopPropagation();
                            });

                            map.on('move', updateCircleMenuPosition);

                            marker.fovData = {
                                fovAngle: 15,
                                fovWidth: 13,
                                fovDistance: 0.0020,
                                fovPolygon: L.polygon(calculateFovPoints(marker.getLatLng(), 15, 13, 0.0020), {
                                    color: 'blue',
                                    fillOpacity: 0.2
                                }).addTo(map)
                            };

                            marker.on('drag', function (e) {
                                var newLatLng = e.target.getLatLng();
                                var updatedFovPoints = calculateFovPoints(newLatLng, marker.fovData.fovAngle, marker.fovData.fovWidth, marker.fovData.fovDistance);
                                marker.fovData.fovPolygon.setLatLngs(updatedFovPoints);

                                if (isMenuVisible) {
                                    circleMenu.style.display = 'none';
                                    isMenuVisible = false;
                                    activeMarkerMenu = null; // Deselect menu
                                    activeMarker = null; // Deselect marker
                                }
                            });

                            marker.on('mousedown', function (e) {
                                activeMarker = marker;
                                isFovBeingChanged = true;
                                marker.closePopup();

                                map.on('mousemove', function (e) {
                                    if (isFovBeingChanged) {
                                        var cameraLatLng = marker.getLatLng();
                                        var angle = Math.atan2(e.latlng.lat - cameraLatLng.lat, e.latlng.lng - cameraLatLng.lng) * (180 / Math.PI);
                                        marker.fovData.fovAngle = (angle + 360) % 360;
                                        var updatedFovPoints = calculateFovPoints(cameraLatLng, marker.fovData.fovAngle, marker.fovData.fovWidth, marker.fovData.fovDistance);
                                        marker.fovData.fovPolygon.setLatLngs(updatedFovPoints);
                                    }
                                });

                                map.on('mouseup', function () {
                                    isFovBeingChanged = false;
                                    map.off('mousemove');
                                    map.off('mouseup');
                                });
                            });

                            marker.on('mouseover', function () {
                                if (!isMenuVisible && !isFovBeingChanged) {
                                    marker.openPopup();
                                }
                            });

                            marker.on('mouseout', function () {
                                marker.closePopup();
                            });

                            document.addEventListener('keydown', function (event) {
                                if (activeMarker && !isFovBeingChanged) {
                                    // Adjust FOV angle using the arrow keys
                                    if (event.key === 'ArrowLeft') {
                                        activeMarker.fovData.fovAngle = (activeMarker.fovData.fovAngle - fovStep + 360) % 360;
                                    } else if (event.key === 'ArrowRight') {
                                        activeMarker.fovData.fovAngle = (activeMarker.fovData.fovAngle + fovStep) % 360;
                                    }

                                    // Update FOV polygon points based on new angle
                                    var updatedFovPoints = calculateFovPoints(
                                        activeMarker.getLatLng(),
                                        activeMarker.fovData.fovAngle,
                                        activeMarker.fovData.fovWidth,
                                        activeMarker.fovData.fovDistance
                                    );
                                    activeMarker.fovData.fovPolygon.setLatLngs(updatedFovPoints);

                                    // Hide place name popup and circle menu
                                    activeMarker.closePopup(); // Close the place name popup
                                    if (isMenuVisible) {
                                        activeMarkerMenu.style.display = 'none'; // Hide the circle menu
                                        isMenuVisible = false; // Update visibility flag
                                        activeMarkerMenu = null; // Deselect active menu
                                    }
                                }
                            });


                        })
                        .catch(error => {
                            console.error('Error fetching place name:', error);
                        });
                }
            });

            this._showNotification("Add Marker tool activated.");
        } else {
            this._showNotification("Add Marker tool deactivated.");
        }
    },
    _showNotification: function (message) {
        notificationContainer.textContent = message;
        notificationContainer.style.display = 'block';
        setTimeout(() => {
            notificationContainer.style.display = 'none';
        }, 2000);
    }
});
var addMarkerControlInstance = new addMarkerControl();
addMarkerControlInstance.addTo(map);



// ------------------------ REMOVE MARKER TOOL ------------------------

const removeMarkerControl = L.Control.extend({
    options: {
        position: "topleft",
        className: "leaflet-control-custom leaflet-bar",
        html: '<a title="Remove Marker" style="color:red;"><i class="fas fa-trash-alt"></i></a>',
    },
    onAdd: function (map) {
        const container = L.DomUtil.create("div", this.options.className);
        L.DomEvent.disableClickPropagation(container);

        container.innerHTML = this.options.html;
        L.DomEvent.on(container, "click", this._clicked, this);

        return container;
    },
    _clicked: function () {
        isAddingMarker = false;
        isRemovingMarker = !isRemovingMarker; // Toggle the state
        map.off('click'); // Disable other click events
        this._showNotification(isRemovingMarker ? "Remove Marker tool activated." : "Remove Marker tool deactivated.");

        if (isRemovingMarker) {
            // Hide all visible circle menus
            hideAllCircleMenus();

            // Disable circle menu functionality during marker removal
            markers.forEach(marker => {
                // Temporarily remove the click event that shows the circle menu
                marker.off('click', toggleMenu);

                // Attach a new click event for removing the marker
                marker.on('click', function () {
                    if (isRemovingMarker) {
                        // Remove marker's FOV polygon from map
                        if (marker.fovData && marker.fovData.fovPolygon) {
                            map.removeLayer(marker.fovData.fovPolygon);
                        }

                        // Hide and remove the associated circle menu
                        hideAllCircleMenus();

                        // Remove the marker from the map
                        map.removeLayer(marker);

                        // Remove the marker from the markers array
                        markers = markers.filter(m => m !== marker);
                    }
                });
            });

            // Enable double-click removal of standalone circle menus
            map.on('dblclick', handleDoubleClick);

            // Prevent deactivating the "Remove Marker" tool on double-click
            map.on('dblclick', preventDeactivateOnDoubleClick);
        } else {
            // Re-enable circle menu functionality when the tool is deactivated
            markers.forEach(marker => {
                marker.on('click', toggleMenu);
            });

            // Disable double-click removal of standalone circle menus
            map.off('dblclick', handleDoubleClick);
            map.off('dblclick', preventDeactivateOnDoubleClick);
        }
    },
    _showNotification: function (message) {
        notificationContainer.textContent = message;
        notificationContainer.style.display = 'block';
        setTimeout(() => {
            notificationContainer.style.display = 'none';
        }, 2000);
    }
});

map.addControl(new removeMarkerControl());

// Function to hide all visible circle menus
function hideAllCircleMenus() {
    if (activeMarkerMenu) {
        activeMarkerMenu.style.display = 'none';
        if (activeMarkerMenu.parentNode) {
            activeMarkerMenu.parentNode.removeChild(activeMarkerMenu); // Remove menu from DOM
        }
        activeMarkerMenu = null; // Reset active marker menu
        activeMarker = null; // Reset active marker
    }
}

// Function to handle double-click to remove standalone circle menus
function handleDoubleClick(e) {
    const target = e.originalEvent.target;

    // Ensure the target is part of a circle menu
    if (target && target.closest('.circle-menu')) {
        const circleMenu = target.closest('.circle-menu');

        // Remove the standalone circle menu if it exists
        circleMenu.style.display = 'none';
        if (circleMenu.parentNode) {
            circleMenu.parentNode.removeChild(circleMenu); // Remove menu from DOM
        }
    }
}

// Function to prevent deactivating the remove marker tool on double-click
function preventDeactivateOnDoubleClick(e) {
    if (isRemovingMarker) {
        e.preventDefault();
        e.stopPropagation(); // Prevent any unwanted behavior on double-click
    }
}

// Function to toggle the circle menu visibility
function toggleMenu() {
    if (activeMarkerMenu && isMenuVisible) {
        hideAllCircleMenus(); // Hide the menu if it is visible
    } else if (activeMarker) {
        updateCircleMenuPosition();
        activeMarkerMenu.style.display = 'flex';
        isMenuVisible = true;
    }
}

// Click event to hide the circle menu when clicking elsewhere
map.on('click', function (e) {
    if (isMenuVisible && !isRemovingMarker) {
        hideAllCircleMenus();
    }
});



// -------------------------SEARCH BAR TOOL --------------------------

// searchBarControl with notification handling
const searchBarControl = L.Control.extend({
    options: {
        position: "topright",
        className: "leaflet-control-search-bar",
        html: `
            <input type="text" id="search-bar" placeholder="Search location..." />
            <button id="search-button">Search</button>
        `,
    },
    onAdd: function (map) {
        const container = L.DomUtil.create("div", this.options.className);
        L.DomEvent.disableClickPropagation(container);

        container.innerHTML = this.options.html;

        // Add event listener for search button
        container.querySelector('#search-button').addEventListener('click', this._searchLocation.bind(this));

        return container;
    },

    //   function for search the location from the search bar
    _searchLocation: function () {
        const query = document.querySelector('#search-bar').value;
        if (query) {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        const { lat, lon } = data[0];
                        this._map.setView([lat, lon], 13); // Set zoom level as our need
                        L.marker([lat, lon]).addTo(this._map).bindPopup(data[0].display_name).openPopup();
                        showNotification("Location found and centered.", 'search');
                    } else {
                        showNotification("Location not found.", 'search');
                    }
                })
                .catch(error => {
                    console.error('Error fetching location:', error);
                    showNotification("Error fetching location.", 'error');
                });
        } else {
            showNotification("Please enter a location.", 'search');
        }
    }
});

map.addControl(new searchBarControl());





// ------------------------ ZOOM CONTROL TOOL ---------------------
L.control.zoom({ position: 'topright' }).addTo(map);



// notification container
const notificationContainer = L.DomUtil.create('div', 'notification-container');

document.body.appendChild(notificationContainer);

// Function to show the notifications
function showNotification(message, type = '') {
    notificationContainer.textContent = message;
    notificationContainer.className = `notification-container ${type}-notification`;
    notificationContainer.style.display = 'block';

    setTimeout(() => {
        notificationContainer.style.display = 'none';
    }, 2000); // Hide notification after 3 sec
}




//--------------------------DRAW TOOL--------------------------------

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var shapeDistanceLabels = {}; 

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    },
    draw: {
        polyline: true,
        polygon: true,
        rectangle: true,
        circle: true,  
        marker: false,
        circlemarker: false
    }
});
map.addControl(drawControl);

// Function to calculate the midpoint of a line segment
function getMidpoint(latlng1, latlng2) {
    return L.latLng(
        (latlng1.lat + latlng2.lat) / 2,
        (latlng1.lng + latlng2.lng) / 2
    );
}

// Function to display distance between two points
function displayDistance(latlng1, latlng2, map, shapeId) {
    var distance = latlng1.distanceTo(latlng2);  // Distance in meters
    var midpoint = getMidpoint(latlng1, latlng2);
    var distanceText = distance < 1000
        ? distance.toFixed(0) + ' m'  
        : (distance / 1000).toFixed(2) + ' km';  

    var label = L.marker(midpoint, {
        icon: L.divIcon({
            className: 'distance-label',
            html: distanceText,
            iconSize: [0, 0]
        })
    });
    shapeDistanceLabels[shapeId].push(label);  // Store label for this shape
    label.addTo(map);
}

// Function to clear distance labels for a specific shape
function clearShapeDistanceLabels(shapeId) {
    if (shapeDistanceLabels[shapeId]) {
        shapeDistanceLabels[shapeId].forEach(function (label) {
            map.removeLayer(label);  // Remove label from the map
        });
        shapeDistanceLabels[shapeId] = [];  // Reset the labels array for this shape
    }
}

// Function to flatten nested latlng arrays (e.g., for polygons and multi-polylines)
function flattenLatLngs(latlngs) {
    var flatLatLngs = [];
    latlngs.forEach(function (latlng) {
        if (Array.isArray(latlng)) {
            flatLatLngs = flatLatLngs.concat(flattenLatLngs(latlng));
        } else {
            flatLatLngs.push(latlng);
        }
    });
    return flatLatLngs;
}

// Function to calculate and show distances for a polyline or polygon
function calculateAndDisplayDistances(layer) {
    var latlngs = flattenLatLngs(layer.getLatLngs()); // Flatten the latlngs array
    var shapeId = L.stamp(layer);  

    // Initialize the labels array for this shape if not already initialized
    if (!shapeDistanceLabels[shapeId]) {
        shapeDistanceLabels[shapeId] = [];
    }

    // Clear old distance labels for this shape
    clearShapeDistanceLabels(shapeId);

    // Calculate and display the distance for each segment
    for (var i = 1; i < latlngs.length; i++) {
        displayDistance(latlngs[i - 1], latlngs[i], map, shapeId);
    }

    // For polygons, connect the last point to the first point
    if (layer instanceof L.Polygon) {
        displayDistance(latlngs[latlngs.length - 1], latlngs[0], map, shapeId);
    }
}

// Function to calculate and display radius for circles
function displayCircleRadius(circle) {
    var radius = circle.getRadius();  // Get the radius of the circle in meters
    var center = circle.getLatLng();
    var shapeId = L.stamp(circle);  // Unique ID for the circle

    // Initialize the labels array for this shape if not already initialized
    if (!shapeDistanceLabels[shapeId]) {
        shapeDistanceLabels[shapeId] = [];
    }

    // Clear old distance labels for this circle
    clearShapeDistanceLabels(shapeId);

    var label = L.marker(center, {
        icon: L.divIcon({
            className: 'distance-label',
            html: radius < 1000 ? radius.toFixed(0) + ' m radius' : (radius / 1000).toFixed(2) + ' km radius',  // Show radius in meters or kilometers
            iconSize: [0, 0]
        })
    });

    shapeDistanceLabels[shapeId].push(label);  // Store label for this circle
    label.addTo(map);  // Add the label to the map
}

// Function to show the distance labels for a shape
function showDistanceLabels(layer) {
    if (layer instanceof L.Polyline || layer instanceof L.Polygon) {
        calculateAndDisplayDistances(layer);
    } else if (layer instanceof L.Circle) {
        displayCircleRadius(layer);
    }
}

// Function to hide the distance labels for a shape
function hideDistanceLabels(layer) {
    var shapeId = L.stamp(layer);
    clearShapeDistanceLabels(shapeId);
}



// Store original styles for each shape
var originalStyles = {};

// Function to store the original style of a shape
function storeOriginalStyle(layer) {
    var shapeId = L.stamp(layer);  // Unique ID for the shape
    if (!originalStyles[shapeId]) {
        // Store the current style of the shape
        originalStyles[shapeId] = {
            color: layer.options.color || '#3388ff',  // Default Leaflet color
            weight: layer.options.weight || 3
        };
    }
}
// Function to change style on hover
function changeStyleOnHover(layer) {
    storeOriginalStyle(layer);  // Store original style if not already stored
    layer.setStyle({
        color: 'red',  // Set color to red on hover
        weight: 2      // Optionally, change line thickness
        
    });
}


// Function to revert style after hover
function revertStyleAfterHover(layer) {
    var shapeId = L.stamp(layer);  // Unique ID for the shape
    if (originalStyles[shapeId]) {
        // Revert to the original style
        layer.setStyle(originalStyles[shapeId]);
    }
}



// Event listener for shape creation
map.on(L.Draw.Event.CREATED, function (event) {
    var layer = event.layer;
    drawnItems.addLayer(layer);  // Add the drawn shape to the map
    

    // Show distances when hovering over the shape
    layer.on('mouseover', function () {
        showDistanceLabels(layer);
        changeStyleOnHover(layer);  // Change style to red
    });

    layer.on('mouseout', function () {
        hideDistanceLabels(layer);
        revertStyleAfterHover(layer);  // Revert to original style
    });

    // Also, handle editing mode (show distances when editing)
    layer.on('click', function () {
        // If in edit mode, display distances
        if (drawControl._toolbars.edit._activeMode) {
            showDistanceLabels(layer);
        }
    });
});

// Event listener for shape editing
map.on('draw:edited', function (event) {
    var layers = event.layers;

    layers.eachLayer(function (layer) {
        // Recalculate and show updated distances for the specific edited shape
        if (layer instanceof L.Polyline || layer instanceof L.Polygon) {
            calculateAndDisplayDistances(layer);
        } else if (layer instanceof L.Circle) {
            displayCircleRadius(layer);  // Handle circle radius update
        } else if (layer instanceof L.Rectangle) {
            calculateAndDisplayDistances(layer);
        }

        // Always show distance labels in edit mode
        showDistanceLabels(layer);
    });
});








