// TradingViewWidget.jsx

import React, { useState, useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidgetMain(props) {
  const onLoadScriptRef = useRef();

  
  useEffect(
    () => {

      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById(`tradingview${props.containerId}`)) {
          new window.TradingView.widget({

            autosize: false,
            width:820,
            height:350,
            symbol: `NASDAQ:${props.CompanyTag}`,
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: `${props.chartStyle}`,
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            hide_top_toolbar: true,
            save_image: false,
            container_id: `tradingview${props.containerId}`,

          });
        }
      }
    },
    []
  );

  return (
      <div id={`tradingview${props.containerId}`} />
 
  );
}
