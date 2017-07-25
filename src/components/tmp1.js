                    {events.map(marker => (
                        <MapView.Marker
                            key={marker.id}
                            coordinate={marker.coordinate}
                            title={marker.title}
                           description={marker.details}
                        />
                    ))}