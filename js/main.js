function showBuyAlert(productName) {
  alert('You selected ' + productName + '. Thank you!');
}

function showProductDetails(title, imageUrl, description, price) {
  var modal = document.getElementById('productDetailModal');
  var detailTitle = document.getElementById('detailTitle');
  var detailImage = document.getElementById('detailImage');
  var detailDescription = document.getElementById('detailDescription');
  var detailPrice = document.getElementById('detailPrice');

  if (!modal || !detailTitle || !detailImage || !detailDescription || !detailPrice) {
    return;
  }

  detailTitle.textContent = title;
  detailImage.src = imageUrl;
  detailImage.alt = title;
  detailDescription.textContent = description;
  detailPrice.textContent = price;

  modal.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeProductDetails() {
  var modal = document.getElementById('productDetailModal');
  if (!modal) {
    return;
  }

  modal.classList.remove('visible');
  document.body.style.overflow = 'auto';
}

function toggleIntroVideo() {
  var introVideo = document.getElementById('introVideo');
  var playButton = document.querySelector('.video-play-button');
  if (!introVideo || !playButton) {
    return;
  }

  if (introVideo.paused) {
    introVideo.play();
    playButton.classList.add('hidden');
  } else {
    introVideo.pause();
    playButton.classList.remove('hidden');
  }
}

function buyDigitalProduct(productName) {
  alert('Thank you! You will receive the checkout link for ' + productName + '.');
}

function goToProducts() {
  window.location.href = 'html/products.html';
}

function downloadPreview(itemName) {
  alert('Your preview for ' + itemName + ' is starting.');
}

function handleFormSubmit() {
  alert('Your message has been sent. We will reply soon.');

  document.getElementById('fullName').value = '';
  document.getElementById('emailAddr').value = '';
  document.getElementById('msgSubject').value = '';
  document.getElementById('userMsg').value = '';
}

function playWelcomeSound() {
  if ('speechSynthesis' in window) {
    var text = new SpeechSynthesisUtterance('Welcome to YS STORE!');
    text.lang = 'en-US';
    text.volume = 1;
    text.rate = 1;
    window.speechSynthesis.speak(text);
  } else {
    alert('Welcome to YS STORE!');
  }
}

function showWelcomeToast() {
  var toast = document.getElementById('welcomeToast');
  if (!toast) {
    return;
  }
  toast.style.display = 'block';
  setTimeout(function() {
    toast.style.display = 'none';
  }, 2500);
}

function togglePlayHeroVideo() {
  var video = document.getElementById('heroVideo');
  var overlay = document.getElementById('videoOverlay');
  if (!video || !overlay) {
    return;
  }

  if (video.paused) {
    video.play();
    overlay.classList.add('playing');
  } else {
    video.pause();
    overlay.classList.remove('playing');
  }
}

function togglePlayGalleryVideo() {
  var video = document.getElementById('galleryVideo1');
  var overlay = document.getElementById('galleryOverlay1');
  if (!video || !overlay) {
    return;
  }

  if (video.paused) {
    video.play();
    overlay.classList.add('playing');
  } else {
    video.pause();
    overlay.classList.remove('playing');
  }
}

function filterGallery(category, button) {
  var buttons = document.querySelectorAll('.tab-btn');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  if (button) {
    button.classList.add('active');
  }

  var items = document.querySelectorAll('.gallery-item');
  for (var j = 0; j < items.length; j++) {
    var item = items[j];
    if (category === 'all' || item.getAttribute('data-category') === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
}

function formatTime(seconds) {
  if (isNaN(seconds)) {
    return '0:00';
  }
  var minutes = Math.floor(seconds / 60);
  var remaining = Math.floor(seconds % 60);
  if (remaining < 10) {
    remaining = '0' + remaining;
  }
  return minutes + ':' + remaining;
}

function togglePlayAudio() {
  var audio = document.getElementById('successAudio');
  var button = document.getElementById('audioPlayBtn');
  if (!audio || !button) {
    return;
  }

  if (audio.paused) {
    audio.play();
    button.textContent = 'Pause';
  } else {
    audio.pause();
    button.textContent = 'Play';
  }
}

function updateAudioProgress() {
  var audio = document.getElementById('successAudio');
  var progress = document.getElementById('audioProgress');
  var currentTime = document.getElementById('audioCurrentTime');
  var durationTime = document.getElementById('audioDuration');
  if (!audio || !progress || !currentTime || !durationTime) {
    return;
  }

  var duration = audio.duration || 0;
  var current = audio.currentTime;
  var percent = 0;
  if (duration > 0) {
    percent = (current / duration) * 100;
  }

  progress.style.width = percent + '%';
  currentTime.textContent = formatTime(current);
  durationTime.textContent = formatTime(duration);
}

function initAudioDuration() {
  var audio = document.getElementById('successAudio');
  var durationTime = document.getElementById('audioDuration');
  if (!audio || !durationTime) {
    return;
  }

  durationTime.textContent = formatTime(audio.duration);
}

function resetAudioPlayer() {
  var button = document.getElementById('audioPlayBtn');
  var progress = document.getElementById('audioProgress');
  var currentTime = document.getElementById('audioCurrentTime');
  if (!button || !progress || !currentTime) {
    return;
  }

  button.textContent = 'Play';
  progress.style.width = '0%';
  currentTime.textContent = '0:00';
}

function seekAudio(event) {
  var audio = document.getElementById('successAudio');
  var bar = document.getElementById('audioProgressBar');
  if (!audio || !bar) {
    return;
  }

  var rect = bar.getBoundingClientRect();
  var clickX = event.clientX - rect.left;
  var width = rect.width;
  var duration = audio.duration || 0;
  if (duration > 0 && clickX >= 0 && clickX <= width) {
    audio.currentTime = (clickX / width) * duration;
  }
}
