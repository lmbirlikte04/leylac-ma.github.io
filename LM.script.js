// Sayfa yüklendiğinde yazının daha şık görünmesi için animasyonu başlat
window.onload = () => {
    const message = document.querySelector('.message');
    setTimeout(() => {
      message.style.opacity = 1;
    }, 1000);
  };