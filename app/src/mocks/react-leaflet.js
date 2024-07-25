import React from 'react';

module.exports = {
  MapContainer: (props) => <div>{props.children}</div>,
  TileLayer: () => <div>TileLayer</div>,
  Marker: (props) => <div>{props.children}</div>,
  Popup: (props) => <div>{props.children}</div>,
};
