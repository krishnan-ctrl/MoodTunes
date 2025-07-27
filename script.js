function openPlaylist(mood) {
  const links = {
    happy: "https://youtube.com/playlist?list=PLaZ8DgRHYD_qT3k1B5PZCOgzs8-SR0fxR",
    sad: "https://youtube.com/playlist?list=PLA-8U9tOtMXtknM6lZbXOyobtRoK2xPQt",
    calm: "https://youtube.com/playlist?list=PL_DaWb6RFQc39EDKQ-P3iEtg7osX8jfb-",
    energetic: "https://youtube.com/playlist?list=PLTje1HyJQa0SuZ4l5pWlbQ1LxG0J2hKbj"
  };
  window.location.href = links[mood]; // redirect to YouTube
}