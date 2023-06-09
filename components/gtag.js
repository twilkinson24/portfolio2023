export const GA_TRACKING_ID = "G-K9BX3ZM4JD" 


// https://developers.google.com/analytics/devguides/collection/gtagjs/pages

export const pageview = url => {

  window.gtag("config", GA_TRACKING_ID, {

    page_path: url,

  })

}