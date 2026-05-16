// ==========================
// BANK SOAL MDFEST (35 SOAL)
// ==========================
const questionBank = [
  {
    question: "Peserta pertukaran pelajar seperti program AFS biasanya perlu menguasai bahasa internasional untuk berkomunikasi dengan banyak orang dari berbagai negara. Bahasa tersebut adalah...",
    choices: ["Bahasa Prancis", "Bahasa Inggris", "Bahasa Jerman", "Bahasa Mandarin"],
    answer: "Bahasa Inggris",
    explanation: "Bahasa Inggris digunakan sebagai bahasa internasional utama dalam pendidikan, komunikasi, dan pertukaran pelajar di berbagai negara."
  },
  {
    question: "Tujuan utama program pertukaran pelajar adalah...",
    choices: ["Mengenal budaya dan pendidikan negara lain", "Menghindari kegiatan sekolah", "Berlibur ke luar negeri", "Belanja di negara lain"],
    answer: "Mengenal budaya dan pendidikan negara lain",
    explanation: "Program pertukaran pelajar membantu siswa memperluas wawasan melalui pengalaman belajar dan budaya di negara lain."
  },
  {
    question: "OSN yang sering diikuti siswa berprestasi merupakan singkatan dari...",
    choices: ["Olimpiade Sains Nasional", "Organisasi Siswa Nusantara", "Olimpiade Seni Nasional", "Organisasi Sekolah Nasional"],
    answer: "Olimpiade Sains Nasional",
    explanation: "OSN adalah kompetisi akademik tingkat nasional bagi siswa yang memiliki kemampuan di bidang sains."
  },
  {
    question: "Kemampuan berbicara percaya diri di depan umum saat presentasi lomba atau wawancara disebut...",
    choices: ["Public Walking", "Public Speaking", "Broadcasting", "Story Reading"],
    answer: "Public Speaking",
    explanation: "Public speaking adalah kemampuan menyampaikan pendapat atau presentasi dengan jelas dan percaya diri di depan banyak orang."
  },
  {
    question: "Saat mendaftar beasiswa atau organisasi, dokumen yang berisi riwayat prestasi dan pengalaman disebut...",
    choices: ["Kwitansi", "Curriculum Vitae (CV)", "Surat Jalan", "Kartu Pelajar"],
    answer: "Curriculum Vitae (CV)",
    explanation: "CV atau Curriculum Vitae digunakan untuk menunjukkan pengalaman, kemampuan, dan pencapaian seseorang."
  },
  {
    question: "Negara Malaysia menggunakan mata uang resmi berupa...",
    choices: ["Peso", "Baht", "Ringgit", "Rupiah"],
    answer: "Ringgit",
    explanation: "Ringgit (MYR) adalah mata uang resmi yang digunakan di negara Malaysia."
  },
  {
    question: "Saat membuat presentasi atau tugas digital, kombinasi tombol keyboard untuk menyalin teks dengan cepat adalah...",
    choices: ["Ctrl + Z", "Ctrl + X", "Ctrl + C", "Ctrl + V"],
    answer: "Ctrl + C",
    explanation: "Ctrl + C digunakan untuk menyalin teks atau file, sedangkan Ctrl + V digunakan untuk menempelkan hasil salinan."
  },
  {
    question: "Program beasiswa biasanya diberikan kepada siswa untuk membantu...",
    choices: ["Bermain game", "Pendidikan dan pengembangan prestasi", "Membeli kendaraan", "Liburan sekolah"],
    answer: "Pendidikan dan pengembangan prestasi",
    explanation: "Beasiswa bertujuan membantu biaya pendidikan sekaligus mendukung pengembangan kemampuan dan prestasi siswa."
  },
  {
    question: "Menara Eiffel yang terkenal di dunia berada di kota...",
    choices: ["London", "Paris", "Roma", "Berlin"],
    answer: "Paris",
    explanation: "Menara Eiffel terletak di kota Paris dan menjadi salah satu landmark paling terkenal di Prancis."
  },
  {
    question: "Planet di tata surya yang dijuluki sebagai “Planet Merah” adalah...",
    choices: ["Merkurius", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
    explanation: "Mars dijuluki Planet Merah karena permukaannya tampak kemerahan akibat kandungan besi oksida."
  },
  {
    question: "Jumlah benua yang ada di dunia adalah...",
    choices: ["5 benua", "6 benua", "7 benua", "8 benua"],
    answer: "7 benua",
    explanation: "Dunia memiliki 7 benua yaitu Asia, Afrika, Eropa, Australia, Amerika Utara, Amerika Selatan, dan Antartika."
  },
  {
    question: "Negara Jepang menggunakan mata uang resmi berupa...",
    choices: ["Won", "Dollar", "Yen", "Yuan"],
    answer: "Yen",
    explanation: "Yen adalah mata uang resmi Jepang yang digunakan dalam kegiatan ekonomi di negara tersebut."
  },
  {
    question: "Langkah pertama sebelum membuat karya riset ilmiah adalah...",
    choices: ["Membuat kesimpulan", "Menentukan topik penelitian", "Membuat daftar pustaka", "Presentasi hasil"],
    answer: "Menentukan topik penelitian",
    explanation: "Penelitian dimulai dengan menentukan masalah atau topik agar tujuan penelitian menjadi jelas."
  },
  {
    question: "Kode telepon internasional yang digunakan oleh Indonesia adalah...",
    choices: ["+60", "+61", "+62", "+65"],
    answer: "+62",
    explanation: "Kode +62 merupakan kode telepon internasional resmi negara Indonesia."
  },
  {
    question: "Patung Liberty yang terkenal di dunia berada di negara...",
    choices: ["Inggris", "Amerika Serikat", "Prancis", "Kanada"],
    answer: "Amerika Serikat",
    explanation: "Patung Liberty berada di kota New York, Amerika Serikat, dan menjadi simbol kebebasan yang terkenal di dunia."
  },
  {
    question: "Berapakah hasil dari operasi matematika berikut: 5 + 3 × 2 ?",
    choices: ["16", "11", "13", "10"],
    answer: "11",
    explanation: "Perkalian dikerjakan terlebih dahulu sebelum penjumlahan, sehingga hasilnya adalah 5 + 6 = 11."
  },
  {
    question: "Surat terpendek di dalam Al-Qur'an adalah surat...",
    choices: ["Al-Ikhlas", "Al-Kautsar", "An-Nas", "Al-Asr"],
    answer: "Al-Kautsar",
    explanation: "Surat Al-Kautsar hanya terdiri dari 3 ayat sehingga menjadi surat terpendek dalam Al-Qur'an."
  },
  {
    question: "Wahyu pertama yang diterima Nabi Muhammad SAW adalah surat...",
    choices: ["Al-Fatihah ayat 1–7", "Al-Baqarah ayat 1–5", "Al-Ikhlas ayat 1–4", "Al-Alaq ayat 1–5"],
    answer: "Al-Alaq ayat 1–5",
    explanation: "Wahyu pertama yang diturunkan kepada Nabi Muhammad SAW di Gua Hira adalah Surat Al-Alaq ayat 1 sampai 5."
  },
  {
    question: "Malaikat yang bertugas menyampaikan wahyu kepada nabi dan rasul adalah malaikat...",
    choices: ["Jibril", "Mikail", "Israfil", "Izrail"],
    answer: "Jibril",
    explanation: "Malaikat Jibril bertugas menyampaikan wahyu dari Allah SWT kepada para nabi dan rasul."
  },
  {
    question: "Surat yang disebut “Ummul Qur'an” dan wajib dibaca saat shalat adalah...",
    choices: ["Al-Ikhlas", "Al-Fatihah", "Al-Baqarah", "Yasin"],
    answer: "Al-Fatihah",
    explanation: "Surat Al-Fatihah disebut Ummul Qur'an karena berisi inti pokok ajaran dalam Al-Qur'an."
  },
  {
    question: "Hari raya umat Islam yang dirayakan setelah menjalankan puasa Ramadan adalah...",
    choices: ["Idul Adha", "Tahun Baru Hijriah", "Idul Fitri", "Maulid Nabi"],
    answer: "Idul Fitri",
    explanation: "Idul Fitri dirayakan setiap tanggal 1 Syawal sebagai hari kemenangan setelah berpuasa selama bulan Ramadan."
  },
  {
    question: "Indonesia dibagi menjadi berapa zona waktu resmi?",
    choices: ["2 zona waktu", "3 zona waktu", "4 zona waktu", "5 zona waktu"],
    answer: "3 zona waktu",
    explanation: "Indonesia memiliki tiga zona waktu resmi yaitu WIB, WITA, dan WIT."
  },
  {
    question: "Perhatikan pola angka berikut: 2, 4, 8, 16, ...",
    choices: ["20", "24", "32", "64"],
    answer: "32",
    explanation: "Pola angka tersebut selalu dikalikan 2 dari angka sebelumnya, sehingga setelah 16 adalah 32."
  },
  {
    question: "Pulau dengan jumlah penduduk terbanyak di Indonesia adalah...",
    choices: ["Sumatra", "Jawa", "Kalimantan", "Sulawesi"],
    answer: "Jawa",
    explanation: "Pulau Jawa memiliki jumlah penduduk paling banyak dibandingkan pulau lainnya di Indonesia."
  },
  {
    question: "Kegiatan menyalurkan barang dari produsen kepada konsumen disebut...",
    choices: ["Konsumsi", "Distribusi", "Produksi", "Investasi"],
    answer: "Distribusi",
    explanation: "Distribusi adalah proses penyaluran barang atau jasa agar sampai kepada konsumen."
  },
  {
    question: "Benua terkecil di dunia berdasarkan luas wilayah adalah...",
    choices: ["Asia", "Eropa", "Australia", "Afrika"],
    answer: "Australia",
    explanation: "Australia merupakan benua dengan luas wilayah paling kecil di dunia."
  },
  {
    question: "Ilmuwan Muslim yang dikenal sebagai “Bapak Aljabar” adalah...",
    choices: ["Ibnu Sina", "Al-Khwarizmi", "Al-Biruni", "Ibnu Khaldun"],
    answer: "Al-Khwarizmi",
    explanation: "Al-Khwarizmi dikenal sebagai pelopor ilmu aljabar dan konsep algoritma dalam matematika modern."
  },
  {
    question: "Ibu kota resmi negara Australia adalah...",
    choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra",
    explanation: "Canberra merupakan ibu kota resmi Australia meskipun Sydney dan Melbourne lebih terkenal."
  },
  {
    question: "Dalam sistem komputer, 1 Gigabyte (GB) setara dengan...",
    choices: ["100 MB", "500 MB", "1.000 MB", "1.024 MB"],
    answer: "1.024 MB",
    explanation: "Dalam sistem biner komputer, 1 Gigabyte sama dengan 1.024 Megabyte."
  },
  {
    question: "Zat hijau daun yang membantu proses fotosintesis disebut...",
    choices: ["Kelopak", "Klorofil", "Kambium", "Stomata"],
    answer: "Klorofil",
    explanation: "Klorofil berfungsi menyerap cahaya matahari untuk membantu tumbuhan membuat makanan melalui fotosintesis."
  },
  {
    question: "Planet terbesar di dalam tata surya adalah...",
    choices: ["Mars", "Saturnus", "Jupiter", "Uranus"],
    answer: "Jupiter",
    explanation: "Jupiter merupakan planet terbesar di tata surya dengan ukuran yang jauh lebih besar dibanding planet lainnya."
  },
  {
    question: "Singkatan WWW pada alamat website internet memiliki kepanjangan...",
    choices: ["World Wide Web", "Website World Wide", "Wide World Web", "Web World Wind"],
    answer: "World Wide Web",
    explanation: "WWW adalah singkatan dari World Wide Web, yaitu sistem halaman web yang saling terhubung melalui internet."
  },
  {
    question: "Silat termasuk prestasi di bidang...",
    choices: ["Teknologi", "Bela diri dan olahraga", "Astronomi", "Musik"],
    answer: "Bela diri dan olahraga",
    explanation: "Silat merupakan cabang olahraga bela diri yang sering dipertandingkan dalam berbagai kompetisi."
  },
  {
    question: "Sebuah bus keberangkatan pertukaran pelajar memiliki 48 kursi. Jika 3/4 kursi sudah terisi peserta, maka jumlah kursi yang sudah terisi adalah...",
    choices: ["24", "30", "36", "40"],
    answer: "36",
    explanation: "3/4 dari 48 adalah 36, sehingga jumlah kursi yang sudah terisi sebanyak 36 kursi."
  },
  {
    question: "Perubahan wujud benda dari cair menjadi gas disebut...",
    choices: ["Membeku", "Mengembun", "Menguap", "Mencair"],
    answer: "Menguap",
    explanation: "Menguap adalah perubahan zat cair menjadi gas, seperti air yang dipanaskan hingga menjadi uap."
  },
  {
    question: "Gas yang jumlahnya paling banyak di udara adalah...",
    choices: ["Oksigen", "Karbondioksida", "Nitrogen", "Hidrogen"],
    answer: "Nitrogen",
    explanation: "Udara di bumi sebagian besar terdiri dari nitrogen sekitar 78%, sedangkan oksigen sekitar 21%."
  }
];

// ==========================
// VARIABEL GAME
// ==========================
let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let username = "";

let startTime = 0;
let timerInterval = null;

// ==========================
// FILTER USERNAME KASAR
// ==========================
const bannedWords = ["kontol", "memek", "anjing", "babi", "ngentot", "tolol", "goblok", "bangsat"];

function isBadUsername(name) {
  const lower = name.toLowerCase();
  return bannedWords.some(word => lower.includes(word));
}

// ==========================
// LEADERBOARD STORAGE
// ==========================
function getLeaderboard() {
  return JSON.parse(localStorage.getItem("quizLeaderboard")) || [];
}

function saveLeaderboard(data) {
  localStorage.setItem("quizLeaderboard", JSON.stringify(data));
}

function updateLeaderboard(username, score, timeTaken) {
  let leaderboard = getLeaderboard();

  leaderboard.push({
    name: username,
    score: score,
    time: timeTaken
  });

  leaderboard.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.time - b.time;
  });

  leaderboard = leaderboard.slice(0, 10);
  saveLeaderboard(leaderboard);
  renderLeaderboard();
}

function renderLeaderboard() {
  const leaderboard = getLeaderboard();
  const body = document.getElementById("leaderboardBody");

  body.innerHTML = "";

  if (leaderboard.length === 0) {
    body.innerHTML = `<tr><td colspan="4">Belum ada data ranking</td></tr>`;
    return;
  }

  leaderboard.forEach((player, index) => {
    body.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${player.name}</td>
        <td>${player.score}</td>
        <td>${player.time}s</td>
      </tr>
    `;
  });
}

// ==========================
// ANTI SOAL BERULANG (POOL)
// ==========================
function getUsedQuestions() {
  return JSON.parse(localStorage.getItem("usedQuestions")) || [];
}

function saveUsedQuestions(data) {
  localStorage.setItem("usedQuestions", JSON.stringify(data));
}

function getUniqueQuestions(amount) {
  let used = getUsedQuestions();
  let available = questionBank.filter(q => !used.includes(q.question));


  if (available.length < amount) {
    used = [];
    saveUsedQuestions([]);
    available = [...questionBank];
  }

  const picked = shuffle([...available]).slice(0, amount);

  picked.forEach(q => used.push(q.question));
  saveUsedQuestions(used);

  return picked;
}

// ==========================
// RESET ADMIN
// ==========================
function resetRanking() {
  const yakin = confirm("Yakin reset ranking? Semua data akan hilang!");
  if (!yakin) return;

  localStorage.removeItem("quizLeaderboard");
  renderLeaderboard();
  alert("Ranking berhasil di-reset!");
}
// ==========================
// FULLSCREEN
// ==========================
function toggleFullscreen() {
  const btn = document.getElementById("fullscreenBtn");

  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    btn.innerText = "Exit Full Screen";
  } else {
    document.exitFullscreen();
    btn.innerText = "Full Screen";
  }
}

document.getElementById("fullscreenBtn").addEventListener("click", toggleFullscreen);

document.addEventListener("fullscreenchange", () => {
  const btn = document.getElementById("fullscreenBtn");
  if (!document.fullscreenElement) {
    btn.innerText = "Full Screen";
  }
});

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    alert("⚠️ Jangan keluar dari mode Fullscreen! Klik OK untuk lanjut.");

    // OPTIONAL: paksa balik fullscreen lagi
     document.documentElement.requestFullscreen();
  }
});

// ==========================
// START QUIZ
// ==========================
function startQuiz() {
  const input = document.getElementById("usernameInput").value.trim();

  if (input.length < 2) {
    alert("Username minimal 2 huruf!");
    return;
  }

  if (isBadUsername(input)) {
    alert("Username tidak sopan. Silakan pakai nama yang baik.");
    return;
  }

  username = input;

  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");

  selectedQuestions = getUniqueQuestions(5);
  currentIndex = 0;
  score = 0;

  startTime = Date.now();
  startTimer();

  loadQuestion();
}

// ==========================
// TIMER
// ==========================
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timeNow").innerText = elapsed;
  }, 500);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// ==========================
// LOAD QUESTION
// ==========================
function loadQuestion() {
  answered = false;

  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("feedbackBox").classList.add("hidden");
  document.getElementById("feedbackBox").innerHTML = "";

  document.getElementById("qNumber").innerText = currentIndex + 1;
  document.getElementById("scoreNow").innerText = score;

  const qData = selectedQuestions[currentIndex];

  document.getElementById("questionText").innerText = qData.question;

  const choicesBox = document.getElementById("choicesBox");
  choicesBox.innerHTML = "";

  qData.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerText = choice;
    btn.onclick = () => selectAnswer(btn, choice);
    choicesBox.appendChild(btn);
  });
}

// ==========================
// SELECT ANSWER
// ==========================
function selectAnswer(button, selectedChoice) {
  if (answered) return;
  answered = true;

  const qData = selectedQuestions[currentIndex];
  const allBtns = document.querySelectorAll(".choice-btn");

  allBtns.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === qData.answer) {
      btn.classList.add("correct");
    }
  });

  const feedbackBox = document.getElementById("feedbackBox");
  feedbackBox.classList.remove("hidden");

  if (selectedChoice === qData.answer) {
    score += 20;
    button.classList.add("correct");
    feedbackBox.innerHTML = `
      <b>✅ Benar!</b><br>
      ${qData.explanation}
    `;
  } else {
    button.classList.add("wrong");
    feedbackBox.innerHTML = `
      <b>❌ Salah!</b><br>
      Jawaban benar: <b>${qData.answer}</b><br><br>
      ${qData.explanation}
    `;
  }

  document.getElementById("scoreNow").innerText = score;
  document.getElementById("nextBtn").style.display = "block";
}

// ==========================
// NEXT QUESTION
// ==========================
function nextQuestion() {
  currentIndex++;

  if (currentIndex < selectedQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// ==========================
// SHOW RESULT
// ==========================
function showResult() {
  stopTimer();

  const timeTaken = Math.floor((Date.now() - startTime) / 1000);

  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");

  document.getElementById("finalScore").innerText = score + "/100";
  document.getElementById("finalUser").innerText = username;
  document.getElementById("finalTime").innerText = timeTaken;

  let msg = "";
  if (score === 100) msg = "🔥 Perfect! Kamu juara!";
  else if (score >= 80) msg = "✨ Hebat! Hampir sempurna!";
  else if (score >= 60) msg = "👍 Lumayan! Tinggal dikit lagi!";
  else msg = "😅 Ayo coba lagi, pasti bisa!";

  document.getElementById("finalMessage").innerText = msg;

  updateLeaderboard(username, score, timeTaken);
}

// ==========================
// RESTART QUIZ
// ==========================
function restartQuiz() {
  document.getElementById("resultScreen").classList.add("hidden");
  document.getElementById("startScreen").classList.remove("hidden");

  document.getElementById("usernameInput").value = "";
  renderLeaderboard();
}

// ==========================
// SHUFFLE
// ==========================
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ==========================
// AUTO LOAD
// ==========================
renderLeaderboard();