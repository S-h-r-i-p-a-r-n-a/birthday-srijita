let currentRotation = 0;

function spinWheel() {
  const alreadySpun = sessionStorage.getItem("hasSpun");

  if (alreadySpun) {
    alert("😅 You already spun once this visit!\nBut more surprises await below 💝");

    // 🧭 Show navigation bar so she can continue
    const nav = document.getElementById("afterGiftNav");
    nav.classList.remove("hidden");
    return;
  }

  const wheel = document.getElementById('wheel');
  const resultText = document.getElementById('result');
  const segments = [
    "🍫 Chocolate Gift",
    "🎂 3D Cake",
    "🪄 Magic Mirror",
    "📦 Mystery Box",
    "📖 Story Time",
    "📸 Photobooth"
  ];

  const randomSpin = Math.floor(3600 + Math.random() * 360);
  currentRotation += randomSpin;
  wheel.style.transform = `rotate(${currentRotation}deg)`;

  const selectedIndex = Math.floor(((currentRotation % 360) / 60)) % 6;
  const prize = segments[5 - selectedIndex];

  // ✅ Store session flag
  sessionStorage.setItem('hasSpun', 'true');

  setTimeout(() => {
    resultText.innerText = `🎉 You got: ${prize}`;
    showGiftModal(prize);
    document.getElementById("spinBtn").disabled = true;
  }, 4000);
}

function showGiftModal(prize) {
  const modal = document.getElementById("giftModal");
  const title = document.getElementById("giftTitle");
  const content = document.getElementById("giftContent");
  const cake = document.getElementById("cakeContainer");
  const nav = document.getElementById("afterGiftNav");

  cake.classList.add("hidden");

  switch (prize) {
    case "🍫 Chocolate Gift":
      title.innerText = "🍫 A Sweet Treat Awaits!";
      content.innerText = "Imagine the richest, creamiest chocolate melting in your mouth... I owe you the real one 💝";
      break;
    case "🎂 3D Cake":
      title.innerText = "🎂 Blow the Candles!";
      content.innerText = "A magical cake with candles just appeared. Make a wish, close your eyes, and blow!";
      setTimeout(() => cake.classList.remove("hidden"), 500);
      break;
    case "🪄 Magic Mirror":
      title.innerText = "🪞 Mirror of Compliments";
      content.innerText = "“You are beautiful, strong, and one of a kind. The world is lucky to have you.” ✨";
      break;
    case "📦 Mystery Box":
      title.innerText = "📦 What's Inside?";
      content.innerText = "You open the mystery box… and find a note: 'A real surprise is waiting for you soon!' 🎁";
      break;
    case "📖 Story Time":
      title.innerText = "📖 A Birthday Tale";
      content.innerText = "Once upon a time, a girl named Srijita was born — and the stars lit up in joy. Happy Birthday to that star! 🌟";
      break;
    case "📸 Photobooth":
      title.innerText = "📸 Smile for the Memory!";
      content.innerText = "Take a selfie with your biggest birthday smile! No filters — just the real YOU 💖";
      break;
    default:
      title.innerText = "🎁 Surprise!";
      content.innerText = "Enjoy your gift!";
  }

  modal.classList.remove("hidden");

  // Show navigation after gift
  setTimeout(() => {
    nav.classList.remove("hidden");
  }, 1500);
}

function closeModal() {
  document.getElementById("giftModal").classList.add("hidden");
}


// 🎵 Surprise Sound Buttons for Music Room
function playSound(name) {
  const sound = document.getElementById(`sound-${name}`);
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

// 💌 Card Flip Logic
function flipCard() {
  const card = document.getElementById("birthdayCard");
  card.classList.toggle("revealed");
}

// (Optional) Auto-flip after 5 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    const card = document.getElementById("birthdayCard");
    card.classList.add("revealed");
  }, 5000);
});

function openMemory(text) {
  const modal = document.getElementById("memoryModal");
  const memoryText = document.getElementById("memoryText");
  memoryText.innerText = text;
  modal.classList.remove("hidden");
}

function closeMemory() {
  const modal = document.getElementById("memoryModal");
  modal.classList.add("hidden");
}
